/** @generated semio actor jco component bridge */

const ACTOR_INSTANCE_LIFECYCLE_MAXIMUM_BYTES = 44;
const encodeActorInstanceLifecycle = function encodeActorInstanceLifecycle(value) {
  const body = value.kind === "ack" ? value.receipt : value, tag = value.kind === "ack" ? body.kind === "captured" ? 5 : body.kind === "accepted" ? 6 : body.kind === "retired" ? 7 : -1 : body.kind === "open" ? 0 : body.kind === "captured" ? 1 : body.kind === "close" ? 2 : body.kind === "accepted" ? 3 : body.kind === "retired" ? 4 : -1;
  if (tag === -1)
    throw Error("actor-lifecycle.tag");
  const generation = body.kind === "open" ? body.activationGeneration : body.lifetime.activationGeneration, instance = body.kind === "open" ? body.instanceId : body.lifetime.instanceId, validGeneration = (field) => typeof field === "bigint" && field > 0n && field <= 0xffffffffffffffffn;
  if (!validGeneration(generation) || !Number.isInteger(instance) || instance < 0 || instance > 4294967295 || !Number.isSafeInteger(body.requestSequence) || body.requestSequence <= 0)
    throw Error("actor-lifecycle.invalid-authority");
  if (body.kind !== "open" && !validGeneration(body.lifetime.guestLifetime))
    throw Error("actor-lifecycle.invalid-guest-lifetime");
  if ((body.kind === "accepted" || body.kind === "retired") && !validGeneration(body.closeGeneration))
    throw Error("actor-lifecycle.invalid-close-generation");
  const output = new Uint8Array(44);
  let length = 0;
  const put = (initial) => {
    let rest = initial;
    do {
      const byte = Number(rest & 127n);
      rest >>= 7n;
      output[length++] = byte | (rest === 0n ? 0 : 128);
    } while (rest !== 0n);
  };
  output[length++] = tag;
  put(generation);
  put(BigInt(instance));
  if (body.kind !== "open")
    put(body.lifetime.guestLifetime);
  put(BigInt(body.requestSequence));
  if (body.kind === "accepted" || body.kind === "retired")
    put(body.closeGeneration);
  return output.slice(0, length);
};
const ACTOR_UI_PATCH_RECEIPT_MAXIMUM_BYTES = 35;
const encodeActorUiPatchReceipt = function encodeActorUiPatchReceipt(receipt) {
  const lifetime = receipt.lifetime, valid = (value) => typeof value === "bigint" && value > 0n && value <= 0xffffffffffffffffn;
  if (!valid(lifetime.activationGeneration) || !valid(lifetime.guestLifetime) || !valid(receipt.patchSequence) || !Number.isInteger(lifetime.instanceId) || lifetime.instanceId < 0 || lifetime.instanceId > 4294967295)
    throw Error("actor-ui-patch.invalid-authority");
  const output = new Uint8Array(35);
  let length = 0;
  const put = (initial) => {
    let rest = initial;
    do {
      const byte = Number(rest & 127n);
      rest >>= 7n;
      output[length++] = byte | (rest === 0n ? 0 : 128);
    } while (rest !== 0n);
  };
  put(lifetime.activationGeneration);
  put(BigInt(lifetime.instanceId));
  put(lifetime.guestLifetime);
  put(receipt.patchSequence);
  return output.slice(0, length);
};
const validateActorUiPatchPairing = function validateActorUiPatchPairing(patchCount, receipt) {
  if (!Number.isSafeInteger(patchCount) || patchCount < 0 || patchCount > 0 !== (receipt != null))
    throw Error("actor-ui-patch.pairing");
  if (receipt != null)
    encodeActorUiPatchReceipt(receipt);
};
const commandIngressKinds = new Map([[0, "idle"], [1, "page-accepted"], [2, "backpressure"], [3, "command-pending"], [4, "command-complete"], [5, "fault"]]);

/** 🎁️ jco lifts `option<t>` as a tagged `{ tag: "none" | "some" }` variant; every host-side reader
 * below wants the bare value (or nothing), so unwrap exactly that shape and pass anything else through. */
function unwrapOption(value) {
  if (value === null || value === undefined) return undefined;
  if (typeof value === "object" && (value.tag === "none" || value.tag === "some")) return value.tag === "none" ? undefined : value.val;
  return value;
}

function lifecycleBody(value) {
  return { lifetime: value.lifetime, requestSequence: BigInt(value.requestSequence), ...("closeGeneration" in value ? { closeGeneration: value.closeGeneration } : {}) };
}

function lifecycleEvent(kind, payload, activationGeneration) {
  if (kind === "patch-ack" || kind === "patch-rejected") {
    encodeActorUiPatchReceipt(payload.receipt);
    if (payload.receipt.lifetime.activationGeneration !== activationGeneration || payload.surface?.instance !== payload.receipt.lifetime.instanceId) throw new Error("actor-ui-patch.activation-mismatch");
    return { tag: kind, val: payload };
  }
  if (kind === "instance-open") {
    encodeActorInstanceLifecycle({ kind: "open", activationGeneration: payload.activationGeneration, instanceId: payload.instance, requestSequence: payload.requestSequence });
    if (payload.activationGeneration !== activationGeneration) throw new Error("actor-lifecycle.activation-mismatch");
    return { tag: kind, val: { ...payload, requestSequence: BigInt(payload.requestSequence) } };
  }
  if (kind === "instance-close" || kind === "instance-lifecycle-ack") {
    if (payload?.kind !== (kind === "instance-close" ? "close" : "ack")) throw new Error("actor-lifecycle.event-kind");
    encodeActorInstanceLifecycle(payload);
    const receipt = kind === "instance-close" ? payload : payload.receipt;
    if (receipt.lifetime.activationGeneration !== activationGeneration) throw new Error("actor-lifecycle.activation-mismatch");
    return { tag: kind, val: kind === "instance-close" ? lifecycleBody(receipt) : { tag: receipt.kind, val: lifecycleBody(receipt) } };
  }
  return kind === "wake" ? ({ tag: kind }) : ({ tag: kind, val: payload });
}

// 🧩️ `jobs::job-step` reaches the worker as jco's raw `{tag, val}` variant; `ShardJobStep`
// (`📮️shard-client/🟦️.ts`) is the `{status, ...}` shape every caller declares. Converting here — the
// one place that owns the guest boundary — keeps that declaration honest instead of leaving the two
// shapes silently different, which is what they were while nothing on this target ever stepped a job.
function normalizeJobStep(step) {
  if (step?.tag === "running") return { status: "running", progress: unwrapOption(step.val) };
  if (step?.tag === "done") return { status: "done", value: step.val };
  if (step?.tag === "failed") return { status: "failed", value: step.val };
  throw new Error(`unknown job-step shape: ${JSON.stringify(step)}`);
}

function lifecycleReceipt(raw, activationGeneration) {
  const value = unwrapOption(raw);
  if (value === undefined || value === null) return undefined;
  if (value.tag !== "captured" && value.tag !== "accepted" && value.tag !== "retired") throw new Error("actor-lifecycle.receipt-required");
  const body = value.val;
  if (typeof body?.requestSequence !== "bigint" || body.requestSequence <= 0n || body.requestSequence > BigInt(Number.MAX_SAFE_INTEGER)) throw new Error("actor-lifecycle.request-sequence");
  if (body.lifetime?.activationGeneration !== activationGeneration) throw new Error("actor-lifecycle.activation-mismatch");
  return encodeActorInstanceLifecycle({ kind: value.tag, lifetime: body.lifetime, requestSequence: Number(body.requestSequence), ...(value.tag === "captured" ? {} : { closeGeneration: body.closeGeneration }) });
}

function normalizeCommandIngress(status) {
  const tag = commandIngressKinds.get(status.kind);
  if (!tag) throw new Error(`unknown command ingress kind: ${status.kind}`);
  if (tag === "idle") return { tag };
  if (tag === "fault") return { tag, val: { cursor: status.cursor, fault: { tag: "fault", val: status.fault } } };
  return { tag, val: status.cursor };
}

function uiPatchReceipt(result, activationGeneration) {
  if (!Array.isArray(result.uiPatches)) throw new Error("actor-ui-patch.envelope");
  const receipt = unwrapOption(result.uiPatchReceipt);
  validateActorUiPatchPairing(result.uiPatches.length, receipt);
  if (receipt === undefined || receipt === null) return undefined;
  if (receipt.lifetime.activationGeneration !== activationGeneration) throw new Error("actor-ui-patch.activation-mismatch");
  return encodeActorUiPatchReceipt(receipt);
}

export async function createActorApi(actorId, activationGeneration) {
  if (typeof activationGeneration !== "bigint" || activationGeneration <= 0n || activationGeneration > 0xffffffffffffffffn) throw new Error("actor-close.invalid-activation-generation");
  const componentUrl = new URL("./semio_s_plugin_procedural_component.js", import.meta.url);
  const rebuildVersion = new URL(import.meta.url).searchParams.get("v");
  componentUrl.searchParams.set("actor", actorId);
  componentUrl.searchParams.set("activation", activationGeneration.toString());
  if (rebuildVersion) componentUrl.searchParams.set("v", rebuildVersion);
  const hostUrl = new URL("./🟨️.js", import.meta.url);
  hostUrl.search = componentUrl.search;
  const hostShim = await import(hostUrl.href);
  const { reactor, jobs, checkpoint, describe } = await import(componentUrl.href);
  return {
    poll: async (events, commandPage, coldPairPage, budget) => {
      if (commandPage) await reactor.stageCommandPage(commandPage.cursor, commandPage.bytes);
      if (coldPairPage) await reactor.stageColdPairPage(coldPairPage);
      const result = await reactor.poll(events.map(({ kind, payload }) => lifecycleEvent(kind, payload, activationGeneration)), { fuel: BigInt(budget.fuel), deadlineMs: budget.wallMs, maxEffects: budget.maxEffects, maxPatchBytes: budget.maxPatchBytes, maxFrames: 8 });
      return { ...result, nextWake: unwrapOption(result.nextWake) ?? null, lifecycleReceipt: lifecycleReceipt(result.lifecycleReceipt, activationGeneration), uiPatchReceipt: uiPatchReceipt(result, activationGeneration), commandIngress: normalizeCommandIngress(result.commandIngress) };
    },
    startJob: async (job, kind, input) => jobs.startJob(job, kind, input),
    stepJob: async (job, budget) => normalizeJobStep(await jobs.stepJob(job, budget)),
    cancelJob: async (job) => jobs.cancelJob(job),
    // 📤️ THE 2026-09-12 segmented-export fault: this export returns `option<list<u8>>`, and jco's flat
    // lift of an option yields the TAGGED variant object (`_liftFlatOption` delegates to
    // `_liftFlatVariant`, which builds `{ tag }`/`{ tag, val }`; only `_liftFlatEnum` reduces to
    // `.tag`). Handed on raw it reached the shard worker as `[object Object]` — so chunk 0 faulted the
    // worker and the terminal `{ tag: "none" }` was not `undefined` either. Every other guest option in
    // this bridge already routes through `unwrapOption`; this one is no exception.
    takeSegmentedDownloadChunk: async (instanceId, operationId) => unwrapOption(await jobs.takeSegmentedDownloadChunk(instanceId, operationId)),
    checkpoint: async () => checkpoint.checkpoint(),
    restore: async (state) => checkpoint.restore(state),
    describe: async () => describe.describe(),
    resolveEffect: (requestId, value) => hostShim.__resolveEffect(requestId, value),
    rejectEffect: (requestId, message) => hostShim.__rejectEffect(requestId, message),
  };
}

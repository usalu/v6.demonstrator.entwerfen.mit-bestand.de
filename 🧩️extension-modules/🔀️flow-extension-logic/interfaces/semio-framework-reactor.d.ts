/** @module Interface semio:framework/reactor@1.0.0 **/
export function stageCommandPage(cursor: CommandPageCursor, bytes: Uint8Array): Promise<void>;
export function stageColdPairPage(page: ColdArtifactPairPage): Promise<void>;
export function poll(events: Array<Event>, budget: Budget): Promise<TurnResult>;
export type PluginError = import('./semio-framework-types.js').PluginError;
export type Pack = import('./semio-framework-types.js').Pack;
export type InstanceId = import('./semio-framework-types.js').InstanceId;
export type Effect = import('./semio-framework-effects.js').Effect;
export type Event = import('./semio-framework-events.js').Event;
export type UiPatch = import('./semio-framework-ui.js').UiPatch;
export type Lifetime = import('./semio-framework-instance-lifetime.js').Lifetime;
export type Receipt = import('./semio-framework-instance-lifetime.js').Receipt;
export type UiPatchReceipt = import('./semio-framework-instance-lifetime.js').UiPatchReceipt;
export interface Budget {
  fuel: bigint,
  deadlineMs: number,
  maxEffects: number,
  maxPatchBytes: number,
  maxFrames: number,
}
export interface JobCheckpoint {
  state: Uint8Array,
  appliedProgress: bigint,
}
export interface CommandPageCursor {
  owner: bigint,
  generation: bigint,
  commandIndex: number,
  commandCount: number,
  instance: InstanceId,
  seq: bigint,
  kind: number,
  pageIndex: number,
  pageCount: number,
  itemCount: number,
  metadata: number,
}
export interface CommandIngressStatus {
  kind: number,
  cursor: CommandPageCursor,
  fault: Uint8Array,
}
export interface ColdArtifactPairFrontier {
  artifactId: string,
  headEditOrdinal: bigint,
  headEditId: string,
  lastCommitSeq: bigint,
  chainSha256: Uint8Array,
}
export interface ColdArtifactPairHeader {
  lifetime: Lifetime,
  transferGeneration: bigint,
  descriptorSha256: Uint8Array,
  baselineFrontier: ColdArtifactPairFrontier,
  packSha256: Uint8Array,
  sprSha256: Uint8Array,
  aggregateSha256: Uint8Array,
  packLength: bigint,
  sprLength: bigint,
  pageCount: number,
}
export interface ColdArtifactPairPage {
  header: ColdArtifactPairHeader,
  pageIndex: number,
  bytes: Uint8Array,
}
export interface ColdArtifactPairCursor {
  lifetime: Lifetime,
  transferGeneration: bigint,
  pageIndex: number,
  pageCount: number,
}
export interface ColdArtifactPairApplied {
  lifetime: Lifetime,
  transferGeneration: bigint,
  baselineFrontier: ColdArtifactPairFrontier,
  aggregateSha256: Uint8Array,
}
export interface ColdArtifactPairFault {
  cursor: ColdArtifactPairCursor,
  fault: Uint8Array,
}
export type ColdPairIngressStatus = ColdPairIngressStatusIdle | ColdPairIngressStatusPageAccepted | ColdPairIngressStatusBackpressure | ColdPairIngressStatusLoading | ColdPairIngressStatusApplied | ColdPairIngressStatusFault;
export interface ColdPairIngressStatusIdle {
  tag: 'idle',
}
export interface ColdPairIngressStatusPageAccepted {
  tag: 'page-accepted',
  val: ColdArtifactPairCursor,
}
export interface ColdPairIngressStatusBackpressure {
  tag: 'backpressure',
  val: ColdArtifactPairCursor,
}
export interface ColdPairIngressStatusLoading {
  tag: 'loading',
  val: ColdArtifactPairCursor,
}
export interface ColdPairIngressStatusApplied {
  tag: 'applied',
  val: ColdArtifactPairApplied,
}
export interface ColdPairIngressStatusFault {
  tag: 'fault',
  val: ColdArtifactPairFault,
}
export type TurnStatus = TurnStatusIdle | TurnStatusMoreWork | TurnStatusCheckpointReady | TurnStatusFaulted;
export interface TurnStatusIdle {
  tag: 'idle',
}
export interface TurnStatusMoreWork {
  tag: 'more-work',
}
export interface TurnStatusCheckpointReady {
  tag: 'checkpoint-ready',
  val: JobCheckpoint,
}
export interface TurnStatusFaulted {
  tag: 'faulted',
  val: Uint8Array,
}
export interface PresenceUpdate {
  update: Pack,
}
export interface TurnResult {
  uiPatches: Array<UiPatch>,
  effects: Array<Effect>,
  presence: Array<PresenceUpdate>,
  nextWake?: bigint,
  status: TurnStatus,
  fuelUsed: bigint,
  commandIngress: CommandIngressStatus,
  coldPairIngress: ColdPairIngressStatus,
  lifecycleReceipt?: Receipt,
  uiPatchReceipt?: UiPatchReceipt,
}

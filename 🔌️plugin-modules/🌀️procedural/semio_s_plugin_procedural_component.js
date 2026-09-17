function __semioVersionedComponentAssetUrl(path) {
  const url = new URL(path, import.meta.url);
  const rebuildVersion = new URL(import.meta.url).searchParams.get("v");
  if (rebuildVersion) url.searchParams.set("v", rebuildVersion);
  return url;
}

function __semioActivationHostUrl() {
  const url = new URL("./🟨️.js", import.meta.url);
  const source = new URL(import.meta.url);
  for (const key of ["actor", "activation", "v"]) {
    const value = source.searchParams.get(key);
    if (value !== null) url.searchParams.set(key, value);
  }
  return url;
}

"use components";
const { log, nowMs } = await import(__semioActivationHostUrl().href);
import { environment, exit as exit$1, stderr, stdin, stdout, terminalInput, terminalOutput, terminalStderr, terminalStdin, terminalStdout } from '../🪞️vendor/🤝️bytecode-alliance/🪟️preview2-shim/cli.js';
import { monotonicClock, wallClock } from '../🪞️vendor/🤝️bytecode-alliance/🪟️preview2-shim/clocks.js';
import { error, poll as poll$2, streams } from '../🪞️vendor/🤝️bytecode-alliance/🪟️preview2-shim/io.js';
import { insecureSeed as insecureSeed$1 } from '../🪞️vendor/🤝️bytecode-alliance/🪟️preview2-shim/random.js';
const { getEnvironment } = environment;

if (getEnvironment=== undefined) {
  const err = new Error("unexpectedly undefined local import 'getEnvironment', was 'getEnvironment' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { exit } = exit$1;

if (exit=== undefined) {
  const err = new Error("unexpectedly undefined local import 'exit', was 'exit' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { getStderr } = stderr;

if (getStderr=== undefined) {
  const err = new Error("unexpectedly undefined local import 'getStderr', was 'getStderr' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { getStdin } = stdin;

if (getStdin=== undefined) {
  const err = new Error("unexpectedly undefined local import 'getStdin', was 'getStdin' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { getStdout } = stdout;

if (getStdout=== undefined) {
  const err = new Error("unexpectedly undefined local import 'getStdout', was 'getStdout' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { TerminalInput } = terminalInput;

if (TerminalInput=== undefined) {
  const err = new Error("unexpectedly undefined local import 'TerminalInput', was 'TerminalInput' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { TerminalOutput } = terminalOutput;

if (TerminalOutput=== undefined) {
  const err = new Error("unexpectedly undefined local import 'TerminalOutput', was 'TerminalOutput' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { getTerminalStderr } = terminalStderr;

if (getTerminalStderr=== undefined) {
  const err = new Error("unexpectedly undefined local import 'getTerminalStderr', was 'getTerminalStderr' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { getTerminalStdin } = terminalStdin;

if (getTerminalStdin=== undefined) {
  const err = new Error("unexpectedly undefined local import 'getTerminalStdin', was 'getTerminalStdin' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { getTerminalStdout } = terminalStdout;

if (getTerminalStdout=== undefined) {
  const err = new Error("unexpectedly undefined local import 'getTerminalStdout', was 'getTerminalStdout' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { now,
  subscribeDuration } = monotonicClock;

if (now=== undefined) {
  const err = new Error("unexpectedly undefined local import 'now', was 'now' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}


if (subscribeDuration=== undefined) {
  const err = new Error("unexpectedly undefined local import 'subscribeDuration', was 'subscribeDuration' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { now: now$1 } = wallClock;

if (now$1=== undefined) {
  const err = new Error("unexpectedly undefined local import 'now$1', was 'now' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { Error: Error$1 } = error;

if (Error$1=== undefined) {
  const err = new Error("unexpectedly undefined local import 'Error$1', was 'Error' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { Pollable,
  poll } = poll$2;

if (Pollable=== undefined) {
  const err = new Error("unexpectedly undefined local import 'Pollable', was 'Pollable' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}


if (poll=== undefined) {
  const err = new Error("unexpectedly undefined local import 'poll', was 'poll' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { InputStream,
  OutputStream } = streams;

if (InputStream=== undefined) {
  const err = new Error("unexpectedly undefined local import 'InputStream', was 'InputStream' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}


if (OutputStream=== undefined) {
  const err = new Error("unexpectedly undefined local import 'OutputStream', was 'OutputStream' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}

const { insecureSeed } = insecureSeed$1;

if (insecureSeed=== undefined) {
  const err = new Error("unexpectedly undefined local import 'insecureSeed', was 'insecureSeed' available at instantiation?");
  console.error("ERROR:", err.toString());
  throw err;
}


function promiseWithResolvers() {
  if (Promise.withResolvers) {
    return Promise.withResolvers();
  } else {
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  }
}
const symbolDispose = Symbol.dispose || Symbol.for('dispose');
const symbolAsyncIterator = Symbol.asyncIterator;
const symbolIterator = Symbol.iterator;

const _debugLog = (...args) => {
  if (!globalThis?.process?.env?.JCO_DEBUG) { return; }
  console.debug(...args);
};
const ASYNC_DETERMINISM = 'random';
const GLOBAL_COMPONENT_MEMORY_MAP = new Map();
const CURRENT_TASK_META = {};

function _getGlobalCurrentTaskMeta(componentIdx) {
  if (componentIdx === null || componentIdx === undefined) {
    throw new Error("missing/invalid component idx");
  }
  const v = CURRENT_TASK_META[componentIdx];
  if (v === undefined || v === null) {
    return undefined;
  }
  return { ...v };
}


function _setGlobalCurrentTaskMeta(args) {
  if (!args) { throw new TypeError('args missing'); }
  if (args.taskID === undefined) { throw new TypeError('missing task ID'); }
  if (args.componentIdx === undefined) { throw new TypeError('missing component idx'); }
  const { taskID, componentIdx } = args;
  return CURRENT_TASK_META[componentIdx] = { taskID, componentIdx };
}


function _withGlobalCurrentTaskMeta(args) {
  _debugLog('[_withGlobalCurrentTaskMeta()] args', args);
  if (!args) { throw new TypeError('args missing'); }
  if (args.taskID === undefined) { throw new TypeError('missing task ID'); }
  if (args.componentIdx === undefined) { throw new TypeError('missing component idx'); }
  if (!args.fn) { throw new TypeError('missing fn'); }
  const { taskID, componentIdx, fn } = args;
  
  try {
    CURRENT_TASK_META[componentIdx] = { taskID, componentIdx };
    return fn();
  } catch (err) {
    _debugLog("error while executing sync callee/callback", {
      ...args,
      err,
    });
    throw err;
  } finally {
    CURRENT_TASK_META[componentIdx] = null;
  }
}

async function _withGlobalCurrentTaskMetaAsync(args) {
  _debugLog('[_withGlobalCurrentTaskMetaAsync()] args', args);
  if (!args) { throw new TypeError('args missing'); }
  if (args.taskID === undefined) { throw new TypeError('missing task ID'); }
  if (args.componentIdx === undefined) { throw new TypeError('missing component idx'); }
  if (!args.fn) { throw new TypeError('missing fn'); }
  
  const { taskID, componentIdx, fn } = args;
  
  try {
    CURRENT_TASK_META[componentIdx] = { taskID, componentIdx };
    return await fn();
  } catch (err) {
    _debugLog("error while executing async callee/callback", {
      ...args,
      err,
    });
    throw err;
  } finally {
    CURRENT_TASK_META[componentIdx] = null;
  }
}

async function _clearCurrentTask(args) {
  _debugLog('[_clearCurrentTask()] args', args);
  if (!args) { throw new TypeError('args missing'); }
  if (args.taskID === undefined) { throw new TypeError('missing task ID'); }
  if (args.componentIdx === undefined) { throw new TypeError('missing component idx'); }
  const { taskID, componentIdx } = args;
  
  const meta = CURRENT_TASK_META[componentIdx];
  if (!meta) { throw new Error(`missing current task meta for component idx [${componentIdx}]`); }
  
  if (meta.taskID !== taskID) {
    throw new Error(`task ID [${meta.taskID}] != requested ID [${taskID}]`);
  }
  if (meta.componentIdx !== componentIdx) {
    throw new Error(`component idx [${meta.componentIdx}] != requested idx [${componentIdx}]`);
  }
  
  CURRENT_TASK_META[componentIdx] = null;
}

function lookupMemoriesForComponent(args) {
  const { componentIdx } = args ?? {};
  if (args.componentIdx === undefined) { throw new TypeError("missing component idx"); }
  
  const metas = GLOBAL_COMPONENT_MEMORY_MAP.get(componentIdx);
  if (!metas) { return []; }
  
  if (args.memoryIdx === undefined) {
    return Object.values(metas);
  }
  
  const meta = metas[args.memoryIdx];
  return meta?.memory;
}

function registerGlobalMemoryForComponent(args) {
  const { componentIdx, memory, memoryIdx } = args ?? {};
  if (componentIdx === undefined) { throw new TypeError('missing component idx'); }
  if (memory === undefined && memoryIdx === undefined) { throw new TypeError('missing both memory & memory idx'); }
  let inner = GLOBAL_COMPONENT_MEMORY_MAP.get(componentIdx);
  if (!inner) {
    inner = {};
    GLOBAL_COMPONENT_MEMORY_MAP.set(componentIdx, inner);
  }
  
  inner[memoryIdx] = { memory, memoryIdx, componentIdx };
}

class RepTable {
  #data = [0, null];
  #size = 0;
  #target;
  
  constructor(args) {
    this.target = args?.target;
  }
  
  data() { return this.#data; }
  
  insert(val) {
    _debugLog('[RepTable#insert()] args', { val, target: this.target });
    const freeIdx = this.#data[0];
    if (freeIdx === 0) {
      this.#data.push(val);
      this.#data.push(null);
      const rep = (this.#data.length >> 1) - 1;
      _debugLog('[RepTable#insert()] inserted', { val, target: this.target, rep });
      this.#size += 1;
      return rep;
    }
    this.#data[0] = this.#data[freeIdx << 1];
    const placementIdx = freeIdx << 1;
    this.#data[placementIdx] = val;
    this.#data[placementIdx + 1] = null;
    _debugLog('[RepTable#insert()] inserted', { val, target: this.target, rep: freeIdx });
    this.#size += 1;
    return freeIdx;
  }
  
  get(rep) {
    _debugLog('[RepTable#get()] args', { rep, target: this.target });
    if (rep === 0) { throw new Error('invalid resource rep during get, (cannot be 0)'); }
    
    const baseIdx = rep << 1;
    const val = this.#data[baseIdx];
    return val;
  }
  
  contains(rep) {
    _debugLog('[RepTable#contains()] args', { rep, target: this.target });
    if (rep === 0) { throw new Error('invalid resource rep during contains, (cannot be 0)'); }
    
    const baseIdx = rep << 1;
    return !!this.#data[baseIdx];
  }
  
  remove(rep) {
    _debugLog('[RepTable#remove()] args', { rep, target: this.target });
    if (rep === 0) { throw new Error('invalid resource rep during remove, (cannot be 0)'); }
    if (this.#data.length === 2) { throw new Error('invalid'); }
    
    const baseIdx = rep << 1;
    const val = this.#data[baseIdx];
    
    this.#data[baseIdx] = this.#data[0];
    this.#data[0] = rep;
    this.#size -= 1;
    
    return val;
  }
  
  size() { return this.#size; }
  
  clear() {
    _debugLog('[RepTable#clear()] args', { rep, target: this.target });
    this.#data = [0, null];
  }
}
const _coinFlip = () => { return Math.random() > 0.5; };
let SCOPE_ID = 0;
const I32_MIN = -2_147_483_648;

const I32_MAX= 2_147_483_647;


function _isValidNumericPrimitive(ty, v) {
  if (v === undefined || v === null) { return false; }
  switch (ty) {
    case 'bool':
    return v === 0 || v === 1;
    break;
    case 'u8':
    return v >= 0 && v <= 255;
    break;
    case 's8':
    return v >= -128 && v <= 127;
    break;
    case 'u16':
    return v >= 0 && v <= 65535;
    break;
    case 's16':
    return v >= -32768 && v <= 32767;
    case 'u32':
    return v >= 0 && v <= 4_294_967_295;
    case 's32':
    return v >= -2_147_483_648 && v <= 2_147_483_647;
    case 'u64':
    return typeof v === 'bigint' && v >= 0 && v <= 18_446_744_073_709_551_615n;
    case 's64':
    return typeof v === 'bigint' && v >= -9223372036854775808n && v <= 9223372036854775807n;
    break;
    case 'f32':
    case 'f64': return typeof v === 'number';
    default:
    return false;
  }
  return true;
}

function _requireValidNumericPrimitive(ty, v) {
  if (v === undefined  || v === null || !_isValidNumericPrimitive(ty, v)) {
    throw new TypeError(`invalid ${ty} value [${v}]`);
  }
  return true;
}

const _typeCheckValidI32 = (n) => typeof n === 'number' && n >= I32_MIN && n <= I32_MAX;


const _typeCheckAsyncFn= (f) => {
  return f instanceof ASYNC_FN_CTOR;
};

let RESOURCE_CALL_BORROWS = [];const ASYNC_FN_CTOR = (async () => {}).constructor;

function clearCurrentTask(componentIdx, taskID) {
  _debugLog('[clearCurrentTask()] args', { componentIdx, taskID });
  
  if (componentIdx === undefined || componentIdx === null) {
    throw new Error('missing/invalid component instance index while ending current task');
  }
  
  const tasks = ASYNC_TASKS_BY_COMPONENT_IDX.get(componentIdx);
  if (!tasks || !Array.isArray(tasks)) {
    throw new Error('missing/invalid tasks for component instance while ending task');
  }
  if (tasks.length == 0) {
    throw new Error(`no current tasks for component instance [${componentIdx}] while ending task`);
  }
  
  if (taskID !== undefined) {
    const last = tasks[tasks.length - 1];
    if (last.id !== taskID) {
      // throw new Error('current task does not match expected task ID');
      return;
    }
  }
  
  ASYNC_CURRENT_TASK_IDS.pop();
  ASYNC_CURRENT_COMPONENT_IDXS.pop();
  
  const taskMeta = tasks.pop();
  return taskMeta.task;
}

const CURRENT_TASK_MAY_BLOCK= globalThis.WebAssembly ? new globalThis.WebAssembly.Global({ value: 'i32', mutable: true }, 0) : false;

const ASYNC_CURRENT_TASK_IDS = [];
const ASYNC_CURRENT_COMPONENT_IDXS = [];

function unpackCallbackResult(result) {
  if (!(_typeCheckValidI32(result))) { throw new Error('invalid callback return value [' + result + '], not a valid i32'); }
  const eventCode = result & 0xF;
  if (eventCode < 0 || eventCode > 3) {
    throw new Error('invalid async return value [' + eventCode + '], outside callback code range');
  }
  if (result < 0 || result >= 2**32) { throw new Error('invalid callback result'); }
  // TODO: table max length check?
  const waitableSetRep = result >> 4;
  return [eventCode, waitableSetRep];
}

class AsyncSubtask {
  static _ID = 0n;
  
  static State = {
    STARTING: 0,
    STARTED: 1,
    RETURNED: 2,
    CANCELLED_BEFORE_STARTED: 3,
    CANCELLED_BEFORE_RETURNED: 4,
  };
  
  #id;
  #state = AsyncSubtask.State.STARTING;
  #componentIdx;
  
  #parentTask;
  #childTask = null;
  
  #dropped = false;
  #cancelRequested = false;
  
  #memoryIdx = null;
  #lenders = null;
  
  #waitable = null;
  
  #callbackFn = null;
  #callbackFnName = null;
  
  #postReturnFn = null;
  #onProgressFn = null;
  #pendingEventFn = null;
  
  #callMetadata = {};
  
  #resolved = false;
  
  #onResolveHandlers = [];
  #onStartHandlers = [];
  
  #result = null;
  #resultSet = false;
  
  fnName;
  target;
  isAsync;
  isManualAsync;
  
  constructor(args) {
    if (typeof args.componentIdx !== 'number') {
      throw new Error('invalid componentIdx for subtask creation');
    }
    this.#componentIdx = args.componentIdx;
    
    this.#id = ++AsyncSubtask._ID;
    this.fnName = args.fnName;
    
    if (!args.parentTask) { throw new Error('missing parent task during subtask creation'); }
    this.#parentTask = args.parentTask;
    
    if (args.childTask) { this.#childTask = args.childTask; }
    
    if (args.memoryIdx) { this.#memoryIdx = args.memoryIdx; }
    
    if (!args.waitable) { throw new Error("missing/invalid waitable"); }
    this.#waitable = args.waitable;
    
    if (args.callMetadata) { this.#callMetadata = args.callMetadata; }
    
    this.#lenders = [];
    this.target = args.target;
    this.isAsync = args.isAsync;
    this.isManualAsync = args.isManualAsync;
  }
  
  id() { return this.#id; }
  parentTaskID() { return this.#parentTask?.id(); }
  childTaskID() { return this.#childTask?.id(); }
  state() { return this.#state; }
  
  waitable() { return this.#waitable; }
  waitableRep() { return this.#waitable.idx(); }
  
  join() { return this.#waitable.join(...arguments); }
  getPendingEvent() { return this.#waitable.getPendingEvent(...arguments); }
  hasPendingEvent() { return this.#waitable.hasPendingEvent(...arguments); }
  setPendingEvent() { return this.#waitable.setPendingEvent(...arguments); }
  
  setTarget(tgt) { this.target = tgt; }
  
  getResult() {
    if (!this.#resultSet) { throw new Error("subtask result has not been set") }
    return this.#result;
  }
  setResult(v) {
    if (this.#resultSet) { throw new Error("subtask result has already been set"); }
    this.#result = v;
    this.#resultSet = true;
  }
  
  componentIdx() { return this.#componentIdx; }
  
  setChildTask(t) {
    if (!t) { throw new Error('cannot set missing/invalid child task on subtask'); }
    if (this.#childTask) { throw new Error('child task is already set on subtask'); }
    if (this.#parentTask === t) { throw new Error("parent cannot be child"); }
    this.#childTask = t;
  }
  getChildTask(t) { return this.#childTask; }
  
  getParentTask() { return this.#parentTask; }
  
  setCallbackFn(f, name) {
    if (!f) { return; }
    if (this.#callbackFn) { throw new Error('callback fn can only be set once'); }
    this.#callbackFn = f;
    this.#callbackFnName = name;
  }
  
  getCallbackFnName() {
    if (!this.#callbackFn) { return undefined; }
    return this.#callbackFn.name;
  }
  
  setPostReturnFn(f) {
    if (!f) { return; }
    if (this.#postReturnFn) { throw new Error('postReturn fn can only be set once'); }
    this.#postReturnFn = f;
  }
  
  setOnProgressFn(f) {
    if (this.#onProgressFn) { throw new Error('on progress fn can only be set once'); }
    this.#onProgressFn = f;
  }
  
  isNotStarted() {
    return this.#state == AsyncSubtask.State.STARTING;
  }
  
  registerOnStartHandler(f) {
    this.#onStartHandlers.push(f);
  }
  
  onStart(args) {
    _debugLog('[AsyncSubtask#onStart()] args', {
      componentIdx: this.#componentIdx,
      subtaskID: this.#id,
      parentTaskID: this.parentTaskID(),
      fnName: this.fnName,
      args,
    });
    
    if (this.#onProgressFn) { this.#onProgressFn(); }
    
    this.#state = AsyncSubtask.State.STARTED;
    
    let result;
    
    // If we have been provided a helper start function as a result of
    // component fusion performed by wasmtime tooling, then we can call that helper and lifts/lowers will
    // be performed for us.
    //
    // See also documentation on `HostIntrinsic::PrepareCall`
    //
    if (this.#callMetadata.startFn) {
      result = this.#callMetadata.startFn.apply(null, args?.startFnParams ?? []);
    }
    
    return result;
  }
  
  
  registerOnResolveHandler(f) {
    this.#onResolveHandlers.push(f);
  }
  
  reject(subtaskErr) {
    this.#childTask?.reject(subtaskErr);
  }
  
  onResolve(subtaskValue) {
    _debugLog('[AsyncSubtask#onResolve()] args', {
      componentIdx: this.#componentIdx,
      subtaskID: this.#id,
      isAsync: this.isAsync,
      childTaskID: this.childTaskID(),
      parentTaskID: this.parentTaskID(),
      parentTaskFnName: this.#parentTask?.entryFnName(),
      fnName: this.fnName,
    });
    
    if (this.#resolved) {
      throw new Error('subtask has already been resolved');
    }
    
    if (this.#onProgressFn) { this.#onProgressFn(); }
    
    if (subtaskValue === null && this.#cancelRequested) {
      if (this.#state === AsyncSubtask.State.STARTING) {
        this.#state = AsyncSubtask.State.CANCELLED_BEFORE_STARTED;
      } else {
        if (this.#state !== AsyncSubtask.State.STARTED) {
          throw new Error('resolved subtask must have been started before cancellation');
        }
        this.#state = AsyncSubtask.State.CANCELLED_BEFORE_RETURNED;
      }
    } else {
      if (this.#state !== AsyncSubtask.State.STARTED) {
        throw new Error('resolved subtask must have been started before completion');
      }
      this.#state = AsyncSubtask.State.RETURNED;
    }
    
    this.setResult(subtaskValue);
    
    for (const f of this.#onResolveHandlers) {
      try {
        f(subtaskValue);
      } catch (err) {
        console.error("error during subtask resolve handler", err);
        throw err;
      }
    }
    
    const callMetadata = this.getCallMetadata();
    
    // TODO(fix): we should be able to easily have the caller's meomry
    // to lower into here, but it's not present in PrepareCall
    const memory = callMetadata.memory ?? this.#parentTask?.getReturnMemory() ?? lookupMemoriesForComponent({ componentIdx: this.#parentTask?.componentIdx() })[0];
    if (callMetadata && !callMetadata.returnFn && this.isAsync && callMetadata.resultPtr && memory) {
      const { resultPtr, realloc } = callMetadata;
      const lowers = callMetadata.lowers; // may have been updated in task.return of the child
      if (lowers && lowers.length > 0) {
        lowers[0]({
          componentIdx: this.#componentIdx,
          memory,
          realloc,
          vals: [subtaskValue],
          storagePtr: resultPtr,
          stringEncoding: callMetadata.stringEncoding,
        });
      }
    }
    
    this.#resolved = true;
    this.#parentTask.removeSubtask(this);
    
    if (!this.isAsync) {
      this.deliverResolve();
      const rep = this.waitableRep();
      if (rep) {
        try {
          const removed = this.#getComponentState().handles.remove(rep);
          if (removed !== this) {
            throw new Error("unexpectedly received non-self Subtask from handle removal");
          }
          this.drop();
        } catch (err) {
          _debugLog('[AsyncSubtask#onResolve()] failed to remove subtask after sync subtask completion', err);
        }
      }
    }
  }
  
  getStateNumber() { return this.#state; }
  isReturned() { return this.#state === AsyncSubtask.State.RETURNED; }
  
  getCallMetadata() { return this.#callMetadata; }
  
  isResolved() {
    if (this.#state === AsyncSubtask.State.STARTING
    || this.#state === AsyncSubtask.State.STARTED) {
      return false;
    }
    if (this.#state === AsyncSubtask.State.RETURNED
    || this.#state === AsyncSubtask.State.CANCELLED_BEFORE_STARTED
    || this.#state === AsyncSubtask.State.CANCELLED_BEFORE_RETURNED) {
      return true;
    }
    throw new Error('unrecognized internal Subtask state [' + this.#state + ']');
  }
  
  addLender(handle) {
    _debugLog('[AsyncSubtask#addLender()] args', { handle });
    if (!Number.isNumber(handle)) { throw new Error('missing/invalid lender handle [' + handle + ']'); }
    
    if (this.#lenders.length === 0 || this.isResolved()) {
      throw new Error('subtask has no lendors or has already been resolved');
    }
    
    handle.lends++;
    this.#lenders.push(handle);
  }
  
  deliverResolve() {
    _debugLog('[AsyncSubtask#deliverResolve()] args', {
      lenders: this.#lenders,
      parentTaskID: this.parentTaskID(),
      subtaskID: this.#id,
      childTaskID: this.childTaskID(),
      resolved: this.isResolved(),
      resolveDelivered: this.resolveDelivered(),
    });
    
    const cannotDeliverResolve = this.resolveDelivered() || !this.isResolved();
    if (cannotDeliverResolve) {
      throw new Error('subtask cannot deliver resolution twice, and the subtask must be resolved');
    }
    
    for (const lender of this.#lenders) {
      lender.lends--;
    }
    
    this.#lenders = null;
  }
  
  resolveDelivered() {
    _debugLog('[AsyncSubtask#resolveDelivered()] args', { });
    if (this.#lenders === null && !this.isResolved()) {
      throw new Error('invalid subtask state, lenders missing and subtask has not been resolved');
    }
    return this.#lenders === null;
  }
  
  drop() {
    _debugLog('[AsyncSubtask#drop()] args', {
      componentIdx: this.#componentIdx,
      parentTaskID: this.#parentTask?.id(),
      parentTaskFnName: this.#parentTask?.entryFnName(),
      childTaskID: this.#childTask?.id(),
      childTaskFnName: this.#childTask?.entryFnName(),
      subtaskFnName: this.fnName,
    });
    if (!this.#waitable) { throw new Error('missing/invalid inner waitable'); }
    if (!this.resolveDelivered()) {
      throw new Error('cannot drop subtask before resolve is delivered');
    }
    if (this.#waitable) { this.#waitable.drop() }
    this.#dropped = true;
  }
  
  #getComponentState() {
    const state = getOrCreateAsyncState(this.#componentIdx);
    if (!state) {
      throw new Error('invalid/missing async state for component [' + componentIdx + ']');
    }
    return state;
  }
  
  getWaitableHandleIdx() {
    _debugLog('[AsyncSubtask#getWaitableHandleIdx()] args', { });
    if (!this.#waitable) { throw new Error('missing/invalid waitable'); }
    return this.waitableRep();
  }
}

function _prepareCall(
memoryIdx,
getMemoryFn,
startFn,
returnFn,
callerComponentIdx,
calleeComponentIdx,
taskReturnTypeIdx,
calleeIsAsyncInt,
stringEncoding,
resultCountOrAsync,
) {
  _debugLog('[_prepareCall()]', {
    memoryIdx,
    callerComponentIdx,
    calleeComponentIdx,
    taskReturnTypeIdx,
    calleeIsAsyncInt,
    stringEncoding,
    resultCountOrAsync,
  });
  const argArray = [...arguments];
  
  // value passed in *may* be as large as u32::MAX which may be mangled into -2
  resultCountOrAsync >>>= 0;
  
  let isAsync = false;
  let hasResultPointer = false;
  if (resultCountOrAsync === 2**32 - 1) {
    // prepare async with no result (u32::MAX)
    isAsync = true;
    hasResultPointer = false;
  } else if (resultCountOrAsync === 2**32 - 2) {
    // prepare async with result (u32::MAX - 1)
    isAsync = true;
    hasResultPointer = true;
  }
  
  const currentCallerTaskMeta = getCurrentTask(callerComponentIdx);
  if (!currentCallerTaskMeta) {
    throw new Error('invalid/missing current task for caller during prepare call');
  }
  
  const currentCallerTask = currentCallerTaskMeta.task;
  if (!currentCallerTask) {
    throw new Error('unexpectedly missing task in meta for caller during prepare call');
  }
  
  if (currentCallerTask.componentIdx() !== callerComponentIdx) {
    throw new Error(`task component idx [${ currentCallerTask.componentIdx() }] !== [${ callerComponentIdx }] (callee ${ calleeComponentIdx })`);
  }
  
  let getCalleeParamsFn;
  let resultPtr = null;
  let directParamsArr;
  if (hasResultPointer) {
    directParamsArr = argArray.slice(10, argArray.length - 1);
    getCalleeParamsFn = () => directParamsArr;
    resultPtr = argArray[argArray.length - 1];
  } else {
    directParamsArr = argArray.slice(10);
    getCalleeParamsFn = () => directParamsArr;
  }
  
  let encoding;
  switch (stringEncoding) {
    case 0:
    encoding = 'utf8';
    break;
    case 1:
    encoding = 'utf16';
    break;
    case 2:
    encoding = 'compact-utf16';
    break;
    default:
    throw new Error(`unrecognized string encoding enum [${stringEncoding}]`);
  }
  
  const subtask = currentCallerTask.createSubtask({
    componentIdx: callerComponentIdx,
    parentTask: currentCallerTask,
    isAsync,
    callMetadata: {
      getMemoryFn,
      memoryIdx,
      resultPtr,
      returnFn,
      startFn,
      stringEncoding,
    }
  });
  
  const [newTask, newTaskID] = createNewCurrentTask({
    componentIdx: calleeComponentIdx,
    isAsync,
    getCalleeParamsFn,
    entryFnName: [
    'task',
    subtask.getParentTask().id(),
    'subtask',
    subtask.id(),
    'new-prepared-async-task'
    ].join('/'),
    stringEncoding,
  });
  newTask.setParentSubtask(subtask);
  newTask.setReturnMemoryIdx(memoryIdx);
  newTask.setReturnMemory(getMemoryFn);
  subtask.setChildTask(newTask);
  
  newTask.subtaskMeta = {
    subtask,
    calleeComponentIdx,
    callerComponentIdx,
    getCalleeParamsFn,
    stringEncoding,
    isAsync,
  };
  
  _setGlobalCurrentTaskMeta({
    taskID: newTask.id(),
    componentIdx: newTask.componentIdx(),
  });
}

function _asyncStartCall(args, callee, paramCount, resultCount, flags) {
  const componentIdx = ASYNC_CURRENT_COMPONENT_IDXS.at(-1);
  
  const globalTaskMeta = _getGlobalCurrentTaskMeta(componentIdx);
  if (!globalTaskMeta) { throw new Error('missing global current task globalTaskMeta'); }
  const taskID = globalTaskMeta.taskID;
  
  _debugLog('[_asyncStartCall()] args', { args, componentIdx });
  const { getCallbackFn, callbackIdx, getPostReturnFn, postReturnIdx } = args;
  
  const preparedTaskMeta = getCurrentTask(componentIdx, taskID);
  if (!preparedTaskMeta) { throw new Error('unexpectedly missing current task'); }
  
  const preparedTask = preparedTaskMeta.task;
  if (!preparedTask) { throw new Error('unexpectedly missing current task'); }
  if (!preparedTask.subtaskMeta) { throw new Error('missing subtask meta from prepare'); }
  
  const {
    subtask,
    returnMemoryIdx,
    getReturnMemoryFn,
    callerComponentIdx,
    calleeComponentIdx,
    getCalleeParamsFn,
    isAsync,
    stringEncoding,
  } = preparedTask.subtaskMeta;
  if (!subtask) { throw new Error("missing subtask from cstate during async start call"); }
  if (calleeComponentIdx !== preparedTask.componentIdx()) {
    throw new Error(`meta callee idx [${calleeComponentIdx}] != current task idx [${preparedTask.componentIdx()}] during async start call`);
  }
  if (calleeComponentIdx !== componentIdx) {
    throw new Error("mismatched componentIdx for async start call (does not match prepare)");
  }
  
  const argArray = [...arguments];
  
  if (resultCount < 0 || resultCount > 1) { throw new Error('invalid/unsupported result count'); }
  
  const callbackFnName = 'callback_' + callbackIdx;
  const callbackFn = getCallbackFn();
  preparedTask.setCallbackFn(callbackFn, callbackFnName);
  preparedTask.setPostReturnFn(getPostReturnFn());
  
  if (resultCount < 0 || resultCount > 1) {
    throw new Error(`unsupported result count [${ resultCount }]`);
  }
  
  const params = preparedTask.getCalleeParams();
  if (paramCount !== params.length) {
    throw new Error(`unexpected callee param count [${ params.length }], _asyncStartCall invocation expected [${ paramCount }]`);
  }
  
  const callerComponentState = getOrCreateAsyncState(subtask.componentIdx());
  
  const calleeComponentState = getOrCreateAsyncState(preparedTask.componentIdx());
  const calleeBackpressure = calleeComponentState.hasBackpressure();
  
  // Set up a handler on subtask completion to lower results from the call into the caller's memory region.
  //
  // NOTE: during fused guest->guest calls this handler is triggered, but does not actually perform
  // lowering manually, as fused modules provider helper functions that can
  subtask.registerOnResolveHandler((res) => {
    _debugLog('[_asyncStartCall()] handling subtask result', { res, subtaskID: subtask.id() });
    
    let subtaskCallMeta = subtask.getCallMetadata();
    
    // NOTE: in the case of guest -> guest async calls, there may be no memory/realloc present,
    // as the host will intermediate the value storage/movement between calls.
    //
    // We can simply take the value and lower it as a parameter
    if (subtaskCallMeta.memory || subtaskCallMeta.realloc) {
      throw new Error("call metadata unexpectedly contains memory/realloc for guest->guest call");
    }
    
    const callerTask = subtask.getParentTask();
    const calleeTask = preparedTask;
    const callerMemoryIdx = callerTask.getReturnMemoryIdx();
    const callerComponentIdx = callerTask.componentIdx();
    
    // If a helper function was provided we are likely in a fused guest->guest call,
    // and the result will be delivered (lift/lowered) via helper function
    if (subtaskCallMeta && subtaskCallMeta.returnFn) {
      _debugLog('[_asyncStartCall()] return function present while handling subtask result, returning early (skipping lower)', {
        calleeTaskID: calleeTask.id(),
        calleeComponentIdx,
      });
      
      // TODO: centralize calling of returnFn to *one place* (if possible)
      if (subtaskCallMeta.returnFnCalled) { return; }
      
      const res = subtaskCallMeta.returnFn.apply(null, [subtaskCallMeta.resultPtr]);
      
      _debugLog('[_asyncStartCall()] finished calling return fn', {
        calleeTaskID: calleeTask.id(),
        calleeComponentIdx,
        res,
      });
      
      return;
    }
    
    // If there is no where to lower the results, exit early
    if (!subtaskCallMeta.resultPtr) {
      _debugLog('[_asyncStartCall()] no result ptr during subtask result handling, returning early (skipping lower)');
      return;
    }
    
    let callerMemory;
    if (callerMemoryIdx !== null && callerMemoryIdx !== undefined) {
      callerMemory = lookupMemoriesForComponent({ componentIdx: callerComponentIdx, memoryIdx: callerMemoryIdx });
    } else {
      const callerMemories = lookupMemoriesForComponent({ componentIdx: callerComponentIdx });
      if (callerMemories.length !== 1) { throw new Error(`unsupported amount of caller memories`); }
      callerMemory = callerMemories[0];
    }
    
    if (!callerMemory) {
      _debugLog('[_asyncStartCall()] missing memory', { subtaskID: subtask.id(), res });
      throw new Error(`missing memory for to guest->guest call result (subtask [${subtask.id()}])`);
    }
    
    const lowerFns = calleeTask.getReturnLowerFns();
    if (!lowerFns || lowerFns.length === 0) {
      _debugLog('[_asyncStartCall()] missing result lower metadata for guest->guest call', { subtaskID: subtask.id() });
      throw new Error(`missing result lower metadata for guest->guest call (subtask [${subtask.id()}])`);
    }
    
    if (lowerFns.length !== 1) {
      _debugLog('[_asyncStartCall()] only single result reportetd for guest->guest call', { subtaskID: subtask.id() });
      throw new Error(`only single result supported for guest->guest calls (subtask [${subtask.id()}])`);
    }
    
    _debugLog('[_asyncStartCall()] lowering results', { subtaskID: subtask.id() });
    lowerFns[0]({
      realloc: undefined,
      memory: callerMemory,
      vals: [res],
      storagePtr: subtaskCallMeta.resultPtr,
      componentIdx: callerComponentIdx,
      stringEncoding: subtaskCallMeta.stringEncoding,
    });
    
  });
  
  subtask.setOnProgressFn(() => {
    subtask.setPendingEvent(() => {
      if (subtask.isResolved()) { subtask.deliverResolve(); }
      const event = {
        code: ASYNC_EVENT_CODE.SUBTASK,
        payload0: subtask.waitableRep(),
        payload1: subtask.getStateNumber(),
      };
      return event;
    });
  });
  
  // Start the (event) driver loop that will resolve the subtask
  // in a new JS task
  setTimeout(async () => {
    _debugLog('[_asyncStartCall()] continuing started subtask (in JS task)', {
      taskID: preparedTask.id(),
      subtaskID: subtask.id(),
      callerComponentIdx,
      calleeComponentIdx,
    });
    
    let startRes = subtask.onStart({ startFnParams: params });
    startRes = Array.isArray(startRes) ? startRes : [startRes];
    
    if (calleeComponentState.isExclusivelyLocked()) {
      _debugLog('[_asyncStartCall()] during continuation callee is exclusively locked, suspending...', {
        taskID: preparedTask.id(),
        subtaskID: subtask.id(),
        callerComponentIdx,
        calleeComponentIdx,
      });
      await calleeComponentState.suspendTask({
        task: preparedTask,
        readyFn: () => !calleeComponentState.isExclusivelyLocked(),
      });
    }
    
    const started = await preparedTask.enter();
    if (!started) {
      _debugLog('[_asyncStartCall()] task failed early', {
        taskID: preparedTask.id(),
        subtaskID: subtask.id(),
      });
      throw new Error("task failed to start");
      return;
    }
    
    let callbackResult;
    try {
      let jspiCallee;
      if (callee._cachedPromising) {
        jspiCallee = callee._cachedPromising;
      } else {
        callee._cachedPromising = WebAssembly.promising(callee);
        jspiCallee = callee._cachedPromising;
      }
      
      callbackResult = await _withGlobalCurrentTaskMetaAsync({
        taskID: preparedTask.id(),
        componentIdx: preparedTask.componentIdx(),
        fn: () => {
          return jspiCallee.apply(null, startRes);
        }
      });
    } catch(err) {
      _debugLog("[_asyncStartCall()] initial subtask callee run failed", err);
      // NOTE: a good place to rejectt the parent task, if rejection API is enabled
      // subtask.reject(err);
      // subtask.getParentTask().reject(err);
      
      subtask.getParentTask().setErrored(err);
      
      return;
    }
    
    // If there was no callback function, we're dealing with a sync function
    // that was lifted as async without one, there is only the callee.
    if (!callbackFn) {
      _debugLog("[_asyncStartCall()] no callback, resolving w/ callee result", {
        taskID: preparedTask.id(),
        componentIdx: preparedTask.componentIdx(),
        preparedTask,
        stateNumber: preparedTask.taskState(),
        isResolved: preparedTask.isResolved(),
        callbackFn,
      });
      preparedTask.resolve([callbackResult]);
      return;
    }
    
    let fnName = callbackFn.fnName;
    if (!fnName) {
      fnName = [
      '<task ',
      subtask.parentTaskID(),
      '/subtask ',
      subtask.id(),
      '/task ',
      preparedTask.id(),
      '>',
      ].join("");
    }
    
    try {
      _debugLog("[_asyncStartCall()] starting driver loop", {
        fnName,
        componentIdx: preparedTask.componentIdx(),
        subtaskID: subtask.id(),
        childTaskID: subtask.childTaskID(),
        parentTaskID: subtask.parentTaskID(),
      });
      
      await _driverLoop({
        componentState: calleeComponentState,
        task: preparedTask,
        fnName,
        isAsync: true,
        callbackResult,
        resolve,
        reject
      });
    } catch (err) {
      _debugLog("[AsyncStartCall] drive loop call failure", { err });
    }
    
  }, 0);
  
  const subtaskState = subtask.getStateNumber();
  if (subtaskState < 0 || subtaskState > 2**5) {
    throw new Error('invalid subtask state, out of valid range');
  }
  
  _debugLog('[_asyncStartCall()] returning subtask rep & state', {
    subtask: {
      rep: subtask.waitableRep(),
      state: subtaskState,
    }
  });
  
  return Number(subtask.waitableRep()) << 4 | subtaskState;
}

function _syncStartCall(callbackIdx) {
  _debugLog('[_syncStartCall()] args', { callbackIdx });
  throw new Error('synchronous start call not implemented!');
}

class Waitable {
  #componentIdx;
  
  #pendingEventFn = null;
  
  #promise;
  #resolve;
  #reject;
  
  #waitableSet = null;
  
  #hasSyncWaiter = false;
  
  #idx = null; // to component-global waitables
  
  target;
  
  constructor(args) {
    const { componentIdx, target } = args;
    this.#componentIdx = componentIdx;
    this.target = args.target;
    this.#resetPromise();
  }
  
  componentIdx() { return this.#componentIdx; }
  isInSet() { return this.#waitableSet !== null; }
  
  idx() { return this.#idx; }
  setIdx(idx) {
    if (idx === 0) { throw new Error("waitable idx cannot be zero"); }
    this.#idx = idx;
  }
  
  setTarget(tgt) { this.target = tgt; }
  
  #resetPromise() {
    const { promise, resolve, reject } = promiseWithResolvers()
    this.#promise = promise;
    this.#resolve = resolve;
    this.#reject = reject;
  }
  
  resolve() { this.#resolve(); }
  reject(err) { this.#reject(err); }
  promise() { return this.#promise; }
  
  hasPendingEvent() {
    // _debugLog('[Waitable#hasPendingEvent()]', {
      //     componentIdx: this.#componentIdx,
      //     waitable: this,
      //     waitableSet: this.#waitableSet,
      //     hasPendingEvent: this.#pendingEventFn !== null,
      // });
      return this.#pendingEventFn !== null;
    }
    
    setPendingEvent(fn) {
      _debugLog('[Waitable#setPendingEvent()] args', {
        waitable: this,
        inSet: this.#waitableSet,
      });
      this.#pendingEventFn = fn;
    }
    
    getPendingEvent() {
      _debugLog('[Waitable#getPendingEvent()] args', {
        waitable: this,
        inSet: this.#waitableSet,
        hasPendingEvent: this.#pendingEventFn !== null,
      });
      if (this.#pendingEventFn === null) { return null; }
      const eventFn = this.#pendingEventFn;
      this.#pendingEventFn = null;
      const e = eventFn();
      this.#resetPromise();
      return e;
    }
    
    join(waitableSet) {
      _debugLog('[Waitable#join()] args', {
        waitable: this,
        waitableSet: waitableSet,
        isRemoval: waitableSet === null,
      });
      
      if (this.#waitableSet === undefined) {
        throw new TypeError('waitable set must be not be undefined');
      }
      
      if (this.#waitableSet) {
        this.#waitableSet.removeWaitable(this);
      }
      
      this.#waitableSet = waitableSet;
      
      if (waitableSet) {
        this.#waitableSet.addWaitable(this);
      }
    }
    
    drop() {
      _debugLog('[Waitable#drop()] args', {
        componentIdx: this.#componentIdx,
        waitable: this,
      });
      if (this.hasPendingEvent()) {
        throw new Error('waitables with pending events cannot be dropped');
      }
      this.join(null);
    }
    
    async waitForPendingEvent(args) {
      const { cstate } = args;
      if (!cstate) { throw new TypeError('missing component state'); }
      
      if (this.#waitableSet !== null || this.#hasSyncWaiter) {
        throw new Error("waitable is already in a set/has a sync waiter");
      }
      this.#hasSyncWaiter = true;
      await cstate.waitUntil({
        cancellable: false,
        readyFn: () => this.hasPendingEvent(),
      });
      this.#hasSyncWaiter = false;
    }
    
  }
  
  const ERR_CTX_TABLES = {};
  
  function contextGet(ctx) {
    const { componentIdx, slot } = ctx;
    if (componentIdx === undefined) { throw new TypeError("missing component idx"); }
    if (slot === undefined) { throw new TypeError("missing slot"); }
    
    const currentTaskMeta = _getGlobalCurrentTaskMeta(componentIdx);
    if (!currentTaskMeta) {
      throw new Error(`missing/incomplete global current task meta for component idx [${componentIdx}] during context set`);
    }
    const taskID = currentTaskMeta.taskID;
    
    const taskMeta = getCurrentTask(componentIdx, taskID);
    if (!taskMeta) { throw new Error('failed to retrieve current task'); }
    
    let task = taskMeta.task;
    if (!task) { throw new Error('invalid/missing current task in metadata while getting context'); }
    
    _debugLog('[contextGet()] args', {
      slot,
      storage: task.storage,
      taskID: task.id(),
      componentIdx: task.componentIdx(),
    });
    
    if (slot < 0 || slot >= task.storage.length) { throw new Error('invalid slot for current task'); }
    
    return task.storage[slot];
  }
  
  
  function contextSet(ctx, value) {
    const { componentIdx, slot } = ctx;
    if (componentIdx === undefined) { throw new TypeError("missing component idx"); }
    if (slot === undefined) { throw new TypeError("missing slot"); }
    if (!(_typeCheckValidI32(value))) { throw new Error('invalid value for context set (not valid i32)'); }
    
    const currentTaskMeta = _getGlobalCurrentTaskMeta(componentIdx);
    if (!currentTaskMeta) {
      throw new Error(`missing/incomplete global current task meta for component idx [${componentIdx}] during context set`);
    }
    const taskID = currentTaskMeta.taskID;
    
    const taskMeta = getCurrentTask(componentIdx, taskID);
    if (!taskMeta) { throw new Error('failed to retrieve current task'); }
    
    let task = taskMeta.task;
    if (!task) { throw new Error('invalid/missing current task in metadata while setting context'); }
    
    _debugLog('[contextSet()] args', {
      slot,
      value,
      storage: task.storage,
      taskID: task.id(),
      componentIdx: task.componentIdx(),
    });
    
    if (slot < 0 || slot >= task.storage.length) { throw new Error('invalid slot for current task'); }
    task.storage[slot] = value;
  }
  
  const ASYNC_TASKS_BY_COMPONENT_IDX = new Map();
  
  class AsyncTask {
    static _ID = 0n;
    
    static State = {
      INITIAL: 'initial',
      CANCELLED: 'cancelled',
      CANCEL_PENDING: 'cancel-pending',
      CANCEL_DELIVERED: 'cancel-delivered',
      RESOLVED: 'resolved',
    }
    
    static BlockResult = {
      CANCELLED: 'block.cancelled',
      NOT_CANCELLED: 'block.not-cancelled',
    }
    
    #id;
    #componentIdx;
    #state;
    #isAsync;
    #isManualAsync;
    #preserveFutureResult;
    #entryFnName = null;
    
    #onResolveHandlers = [];
    #completionPromise = null;
    #rejected = false;
    
    #exitPromise = null;
    #onExitHandlers = [];
    
    #memoryIdx = null;
    #memory = null;
    
    #callbackFn = null;
    #callbackFnName = null;
    
    #postReturnFn = null;
    
    #getCalleeParamsFn = null;
    
    #stringEncoding = null;
    
    #parentSubtask = null;
    
    #errHandling;
    
    #backpressurePromise;
    #backpressureWaiters = 0n;
    
    #returnLowerFns = null;
    
    #subtasks = [];
    
    #entered = false;
    #exited = false;
    #errored = null;
    
    cancelled = false;
    cancelRequested = false;
    alwaysTaskReturn = false;
    
    returnCalls =  0;
    storage = [0, 0];
    borrowedHandles = {};
    
    tmpRetI64HighBits = 0|0;
    
    constructor(opts) {
      this.#id = ++AsyncTask._ID;
      
      if (opts?.componentIdx === undefined) {
        throw new TypeError('missing component id during task creation');
      }
      this.#componentIdx = opts.componentIdx;
      
      this.#state = AsyncTask.State.INITIAL;
      this.#isAsync = opts?.isAsync ?? false;
      this.#isManualAsync = opts?.isManualAsync ?? false;
      this.#preserveFutureResult = opts?.preserveFutureResult ?? false;
      this.#entryFnName = opts.entryFnName;
      
      const {
        promise: completionPromise,
        resolve: resolveCompletionPromise,
        reject: rejectCompletionPromise,
      } = promiseWithResolvers();
      this.#completionPromise = completionPromise;
      
      this.#onResolveHandlers.push((results) => {
        if (this.#parentSubtask !== null) { return; }
        if (!this.#isAsync) { return; }
        
        if (this.#errored !== null) {
          rejectCompletionPromise(this.#errored);
          return;
        } else if (this.#rejected) {
          rejectCompletionPromise(results);
          return;
        }
        
        if (this.#preserveFutureResult && results instanceof FutureValue) {
          results.resolveAsValue(resolveCompletionPromise);
        } else {
          resolveCompletionPromise(results);
        }
      });
      
      const {
        promise: exitPromise,
        resolve: resolveExitPromise,
        reject: rejectExitPromise,
      } = promiseWithResolvers();
      this.#exitPromise = exitPromise;
      
      this.#onExitHandlers.push(() => {
        resolveExitPromise();
      });
      
      if (opts.callbackFn) { this.#callbackFn = opts.callbackFn; }
      if (opts.callbackFnName) { this.#callbackFnName = opts.callbackFnName; }
      
      if (opts.getCalleeParamsFn) { this.#getCalleeParamsFn = opts.getCalleeParamsFn; }
      
      if (opts.stringEncoding) { this.#stringEncoding = opts.stringEncoding; }
      
      if (opts.parentSubtask) { this.#parentSubtask = opts.parentSubtask; }
      
      
      if (opts.errHandling) { this.#errHandling = opts.errHandling; }
    }
    
    taskState() { return this.#state; }
    id() { return this.#id; }
    componentIdx() { return this.#componentIdx; }
    entryFnName() { return this.#entryFnName; }
    
    completionPromise() { return this.#completionPromise; }
    exitPromise() { return this.#exitPromise; }
    
    isAsync() { return this.#isAsync; }
    isSync() { return !this.isAsync(); }
    
    getErrHandling() { return this.#errHandling; }
    
    hasCallback() { return this.#callbackFn !== null; }
    
    getReturnMemoryIdx() { return this.#memoryIdx; }
    setReturnMemoryIdx(idx) {
      if (idx === null) { return; }
      this.#memoryIdx = idx;
    }
    
    getReturnMemory() { return this.#memory; }
    setReturnMemory(m) {
      if (m === null) { return; }
      this.#memory = m;
    }
    
    setReturnLowerFns(fns) { this.#returnLowerFns = fns; }
    getReturnLowerFns() { return this.#returnLowerFns; }
    
    setParentSubtask(subtask) {
      if (!subtask || !(subtask instanceof AsyncSubtask)) { return }
      if (this.#parentSubtask) { throw new Error('parent subtask can only be set once'); }
      this.#parentSubtask = subtask;
    }
    
    getParentSubtask() { return this.#parentSubtask; }
    
    // TODO(threads): this is very inefficient, we can pass along a root task,
    // and ideally do not need this once thread support is in place
    getRootTask() {
      let currentSubtask = this.getParentSubtask();
      let task = this;
      while (currentSubtask) {
        task = currentSubtask.getParentTask();
        currentSubtask = task.getParentSubtask();
      }
      return task;
    }
    
    setPostReturnFn(f) {
      if (!f) { return; }
      if (this.#postReturnFn) { throw new Error('postReturn fn can only be set once'); }
      this.#postReturnFn = f;
    }
    
    setCallbackFn(f, name) {
      if (!f) { return; }
      if (this.#callbackFn) { throw new Error('callback fn can only be set once'); }
      this.#callbackFn = f;
      this.#callbackFnName = name;
    }
    
    getCallbackFnName() {
      if (!this.#callbackFnName) { return undefined; }
      return this.#callbackFnName;
    }
    
    async runCallbackFn(...args) {
      if (!this.#callbackFn) { throw new Error('no callback function has been set for task'); }
      return _withGlobalCurrentTaskMetaAsync({
        taskID: this.#id,
        componentIdx: this.#componentIdx,
        fn: () => { return this.#callbackFn.apply(null, args); }
      });
    }
    
    getCalleeParams() {
      if (!this.#getCalleeParamsFn) { throw new Error('missing/invalid getCalleeParamsFn'); }
      return this.#getCalleeParamsFn();
    }
    
    mayBlock() { return this.isAsync() || this.isResolvedState() }
    
    mayEnter(task) {
      const cstate = getOrCreateAsyncState(this.#componentIdx);
      if (cstate.hasBackpressure()) {
        _debugLog('[AsyncTask#mayEnter()] disallowed due to backpressure', { taskID: this.#id });
        return false;
      }
      if (!cstate.callingSyncImport()) {
        _debugLog('[AsyncTask#mayEnter()] disallowed due to sync import call', { taskID: this.#id });
        return false;
      }
      const callingSyncExportWithSyncPending = cstate.callingSyncExport && !task.isAsync;
      if (!callingSyncExportWithSyncPending) {
        _debugLog('[AsyncTask#mayEnter()] disallowed due to sync export w/ sync pending', { taskID: this.#id });
        return false;
      }
      return true;
    }
    
    enterSync() {
      if (this.needsExclusiveLock()) {
        const cstate = getOrCreateAsyncState(this.#componentIdx);
        // TODO(???): it is *very possible* for a the line below to fail if
        // an async function is already running (and holding the exclusive lock)
        //
        // It's not really possible to fix this unless we turn every sync export into
        // an async export that will use the regular async enabled `enter()`.
        cstate.exclusiveLock();
      }
      return true;
    }
    
    async enter(opts) {
      _debugLog('[AsyncTask#enter()] args', {
        taskID: this.#id,
        componentIdx: this.#componentIdx,
        subtaskID: this.getParentSubtask()?.id(),
        args: opts,
        entryFnName: this.#entryFnName,
      });
      
      if (this.#entered) {
        throw new Error(`task with ID [${this.#id}] should not be entered twice`);
      }
      
      const cstate = getOrCreateAsyncState(this.#componentIdx);
      
      if (opts?.isHost) {
        this.#entered = true;
        return this.#entered;
      }
      
      await cstate.nextTaskExecutionSlot({ task: this });
      
      // If a task is synchronous then we can avoid component-relevant
      // tracking and immediately enter.
      if (this.isSync()) {
        this.#entered = true;
        
        // TODO(breaking): remove once manually-specifying async fns is removed
        // It is currently possible for an actually sync export to be specified
        // as async via JSPI
        if (this.#isManualAsync) {
          if (this.needsExclusiveLock()) { cstate.exclusiveLock(); }
        }
        
        return this.#entered;
      }
      
      // Perform intial backpressure check
      if (cstate.hasBackpressure() || this.needsExclusiveLock() && cstate.isExclusivelyLocked()) {
        cstate.addBackpressureWaiter();
        
        const result = await this.waitUntil({
          readyFn: () => {
            return !(cstate.hasBackpressure()
            || this.needsExclusiveLock() && cstate.isExclusivelyLocked());
          },
          cancellable: true,
        });
        
        cstate.removeBackpressureWaiter();
        
        if (result === AsyncTask.BlockResult.CANCELLED) {
          this.cancel();
          return false;
        }
      }
      
      // Lock the component state or keep trying until we can/do
      try {
        if (this.needsExclusiveLock()) { cstate.exclusiveLock(); }
      } catch {
        // Continuously attempt to lock until we can
        while (cstate.hasBackpressure() || this.needsExclusiveLock() && cstate.isExclusivelyLocked()) {
          try {
            if (this.needsExclusiveLock()) { cstate.exclusiveLock(); }
            break;
          } catch(err) {
            cstate.addBackpressureWaiter();
            const result = await this.waitUntil({
              readyFn: () => {
                return !(cstate.hasBackpressure()
                || this.needsExclusiveLock() && cstate.isExclusivelyLocked());
              },
              cancellable: true,
            });
            cstate.removeBackpressureWaiter();
            if (result === AsyncTask.BlockResult.CANCELLED) {
              this.cancel();
              return false;
            }
          }
        }
      }
      
      this.#entered = true;
      return this.#entered;
    }
    
    isRunningState() { return this.#state !== AsyncTask.State.RESOLVED; }
    isResolvedState() { return this.#state === AsyncTask.State.RESOLVED; }
    isResolved() { return this.#state === AsyncTask.State.RESOLVED; }
    
    async waitUntil(opts) {
      const { readyFn, cancellable } = opts;
      _debugLog('[AsyncTask#waitUntil()] args', { taskID: this.#id, args: { cancellable } });
      
      // TODO(fix): check for cancel
      // TODO(fix): determinism
      // TODO(threads): add this thread to waiting list
      
      const keepGoing = await this.suspendUntil({
        readyFn,
        cancellable,
      });
      
      return keepGoing;
    }
    
    async yieldUntil(opts) {
      const { readyFn, cancellable } = opts;
      _debugLog('[AsyncTask#yieldUntil()]', {
        taskID: this.#id,
        args: {
          cancellable,
        },
        componentIdx: this.#componentIdx,
      });
      
      const keepGoing = await this.suspendUntil({ readyFn, cancellable });
      if (keepGoing) {
        return {
          code: ASYNC_EVENT_CODE.NONE,
          payload0: 0,
          payload1: 0,
        };
      }
      
      return {
        code: ASYNC_EVENT_CODE.TASK_CANCELLED,
        payload0: 0,
        payload1: 0,
      };
    }
    
    async suspendUntil(opts) {
      const { cancellable, readyFn } = opts;
      _debugLog('[AsyncTask#suspendUntil()] args', {
        taskID: this.#id,
        args: {
          cancellable,
        },
        componentIdx: this.#componentIdx,
      });
      
      const pendingCancelled = this.deliverPendingCancel({ cancellable });
      if (pendingCancelled) { return false; }
      
      const completed = await this.immediateSuspendUntil({ readyFn, cancellable });
      return completed;
    }
    
    // TODO(threads): equivalent to thread.suspend_until()
    async immediateSuspendUntil(opts) {
      const { cancellable, readyFn } = opts;
      _debugLog('[AsyncTask#immediateSuspendUntil()] args', {
        args: {
          cancellable,
          readyFn,
        },
        taskID: this.#id,
        componentIdx: this.#componentIdx,
      });
      
      const ready = readyFn();
      if (ready && ASYNC_DETERMINISM === 'random') {
        const coinFlip = _coinFlip();
        if (coinFlip) { return true }
      }
      
      const keepGoing = await this.immediateSuspend({ cancellable, readyFn });
      return keepGoing;
    }
    
    async immediateSuspend(opts) { // NOTE: equivalent to thread.suspend()
    // TODO(threads): store readyFn on the thread
    const { cancellable, readyFn } = opts;
    _debugLog('[AsyncTask#immediateSuspend()] args', { cancellable, readyFn });
    
    const pendingCancelled = this.deliverPendingCancel({ cancellable });
    if (pendingCancelled) { return false; }
    
    const cstate = getOrCreateAsyncState(this.#componentIdx);
    const keepGoing = await cstate.suspendTask({ task: this, readyFn });
    return keepGoing;
  }
  
  deliverPendingCancel(opts) {
    const { cancellable } = opts;
    _debugLog('[AsyncTask#deliverPendingCancel()]', {
      args: { cancellable },
      taskID: this.#id,
      componentIdx: this.#componentIdx,
    });
    
    if (cancellable && this.#state === AsyncTask.State.PENDING_CANCEL) {
      this.#state = AsyncTask.State.CANCEL_DELIVERED;
      return true;
    }
    
    return false;
  }
  
  isCancelled() { return this.cancelled }
  
  cancel(args) {
    _debugLog('[AsyncTask#cancel()] args', { });
    if (this.taskState() !== AsyncTask.State.CANCEL_DELIVERED) {
      throw new Error(`(component [${this.#componentIdx}]) task [${this.#id}] invalid task state [${this.taskState()}] for cancellation`);
    }
    if (this.borrowedHandles.length > 0) { throw new Error('task still has borrow handles'); }
    this.cancelled = true;
    this.onResolve(args?.error ?? new Error('task cancelled'));
    this.#state = AsyncTask.State.RESOLVED;
  }
  
  onResolve(taskValue) {
    const handlers = this.#onResolveHandlers;
    this.#onResolveHandlers = [];
    for (const f of handlers) {
      try {
        f(taskValue);
      } catch (err) {
        _debugLog("[AsyncTask#onResolve] error during task resolve handler", err);
        throw err;
      }
    }
    
    if (this.#parentSubtask) {
      const meta = this.#parentSubtask.getCallMetadata();
      // Run the rturn fn if it has not already been called -- this *should* have happened in
      // `task.return`, but some paths do not go through task.return (e.g. async lower of sync fn
      // which goes through prepare + async-start-call)
      if (meta.returnFn && !meta.returnFnCalled) {
        _debugLog('[AsyncTask#onResolve()] running returnFn', {
          componentIdx: this.#componentIdx,
          taskID: this.#id,
          subtaskID: this.#parentSubtask.id(),
        });
        const memory = meta.getMemoryFn();
        meta.returnFn.apply(null, [taskValue, meta.resultPtr]);
        meta.returnFnCalled = true;
      }
    }
    
    if (this.#postReturnFn) {
      _debugLog('[AsyncTask#onResolve()] running post return ', {
        componentIdx: this.#componentIdx,
        taskID: this.#id,
      });
      try {
        this.#postReturnFn(taskValue);
      } catch (err) {
        _debugLog("[AsyncTask#onResolve] error during task resolve handler", err);
        throw err;
      }
    }
    
    if (this.#parentSubtask) {
      this.#parentSubtask.onResolve(taskValue);
    }
  }
  
  registerOnResolveHandler(f) {
    this.#onResolveHandlers.push(f);
  }
  
  isRejected() { return this.#rejected; }
  
  isErrored() { return this.#errored; }
  setErrored(err) { this.#errored = err; }
  
  reject(taskErr) {
    _debugLog('[AsyncTask#reject()] args', {
      componentIdx: this.#componentIdx,
      taskID: this.#id,
      parentSubtask: this.#parentSubtask,
      parentSubtaskID: this.#parentSubtask?.id(),
      entryFnName: this.entryFnName(),
      callbackFnName: this.#callbackFnName,
      errMsg: taskErr.message,
    });
    
    if (this.isResolvedState() || this.#rejected) { return; }
    
    this.#rejected = true;
    this.cancelRequested = true;
    this.#state = AsyncTask.State.PENDING_CANCEL;
    const cancelled = this.deliverPendingCancel({ cancellable: true });
    
    // TODO: do cleanup here to reset the machinery so we can run again?
    
    this.cancel({ error: taskErr });
  }
  
  resolve(results) {
    _debugLog('[AsyncTask#resolve()] args', {
      componentIdx: this.#componentIdx,
      taskID: this.#id,
      entryFnName: this.entryFnName(),
      callbackFnName: this.#callbackFnName,
    });
    
    if (this.#state === AsyncTask.State.RESOLVED) {
      throw new Error(`(component [${this.#componentIdx}]) task [${this.#id}]  is already resolved (did you forget to wait for an import?)`);
    }
    
    if (this.borrowedHandles.length > 0) {
      throw new Error('task still has borrow handles');
    }
    
    this.#state = AsyncTask.State.RESOLVED;
    
    switch (results.length) {
      case 0:
      this.onResolve(undefined);
      break;
      case 1:
      this.onResolve(results[0]);
      break;
      default:
      _debugLog('[AsyncTask#resolve()] unexpected number of results', {
        componentIdx: this.#componentIdx,
        results,
        taskID: this.#id,
        subtaskID: this.#parentSubtask?.id(),
        entryFnName: this.#entryFnName,
        callbackFnName: this.#callbackFnName,
      });
      throw new Error('unexpected number of results');
    }
  }
  
  exit(args) {
    _debugLog('[AsyncTask#exit()]', {
      componentIdx: this.#componentIdx,
      taskID: this.#id,
    });
    
    if (this.#exited)  { throw new Error("task has already exited"); }
    
    if (this.#state !== AsyncTask.State.RESOLVED) {
      throw new Error(`(component [${this.#componentIdx}]) task [${this.#id}] exited without resolution`);
    }
    
    if (this.borrowedHandles > 0) {
      throw new Error('task [${this.#id}] exited without clearing borrowed handles');
    }
    
    const state = getOrCreateAsyncState(this.#componentIdx);
    if (!state) { throw new Error('missing async state for component [' + this.#componentIdx + ']'); }
    
    // Exempt the host from exclusive lock check
    if (this.#componentIdx !== -1 && !args?.skipExclusiveLockCheck) {
      if (this.needsExclusiveLock() && !state.isExclusivelyLocked()) {
        throw new Error(`task [${this.#id}] exit: component [${this.#componentIdx}] should have been exclusively locked`);
      }
    }
    
    state.exclusiveRelease();
    
    for (const f of this.#onExitHandlers) {
      try {
        f();
      } catch (err) {
        console.error("error during task exit handler", err);
        throw err;
      }
    }
    
    this.#exited = true;
    clearCurrentTask(this.#componentIdx, this.id());
  }
  
  needsExclusiveLock() {
    return !this.#isAsync || this.hasCallback();
  }
  
  createSubtask(args) {
    _debugLog('[AsyncTask#createSubtask()] args', args);
    const { componentIdx, childTask, callMetadata, fnName, isAsync, isManualAsync } = args;
    
    const cstate = getOrCreateAsyncState(this.#componentIdx);
    if (!cstate) {
      throw new Error(`invalid/missing async state for component idx [${componentIdx}]`);
    }
    
    const waitable = new Waitable({
      componentIdx: this.#componentIdx,
      target: `subtask (internal ID [${this.#id}])`,
    });
    
    const newSubtask = new AsyncSubtask({
      componentIdx,
      childTask,
      parentTask: this,
      callMetadata,
      isAsync,
      isManualAsync,
      fnName,
      waitable,
    });
    this.#subtasks.push(newSubtask);
    newSubtask.setTarget(`subtask (internal ID [${newSubtask.id()}], waitable [${waitable.idx()}], component [${componentIdx}])`);
    waitable.setIdx(cstate.handles.insert(newSubtask));
    waitable.setTarget(`waitable for subtask (waitable id [${waitable.idx()}], subtask internal ID [${newSubtask.id()}])`);
    return newSubtask;
  }
  
  getLatestSubtask() {
    return this.#subtasks.at(-1);
  }
  
  getSubtaskByWaitableRep(rep) {
    if (rep === undefined) { throw new TypeError('missing rep'); }
    return this.#subtasks.find(s => s.waitableRep() === rep);
  }
  
  currentSubtask() {
    _debugLog('[AsyncTask#currentSubtask()]');
    if (this.#subtasks.length === 0) { return undefined; }
    return this.#subtasks.at(-1);
  }
  
  removeSubtask(subtask) {
    if (this.#subtasks.length === 0) {
      throw new Error('cannot end current subtask: no current subtask');
    }
    this.#subtasks = this.#subtasks.filter(t => t !== subtask);
    return subtask;
  }
}

const ASYNC_EVENT_CODE = {
  NONE: 0,
  SUBTASK: 1,
  STREAM_READ: 2,
  STREAM_WRITE: 3,
  FUTURE_READ: 4,
  FUTURE_WRITE: 5,
  TASK_CANCELLED: 6,
};

function getCurrentTask(componentIdx, taskID) {
  let usedGlobal = false;
  if (componentIdx === undefined || componentIdx === null) {
    throw new Error('missing component idx'); // TODO(fix)
    // componentIdx = ASYNC_CURRENT_COMPONENT_IDXS.at(-1);
    // usedGlobal = true;
  }
  
  const taskMetas = ASYNC_TASKS_BY_COMPONENT_IDX.get(componentIdx);
  if (taskMetas === undefined || taskMetas.length === 0) { return undefined; }
  
  if (taskID) {
    return taskMetas.find(meta => meta.task.id() === taskID);
  }
  
  const taskMeta = taskMetas[taskMetas.length - 1];
  if (!taskMeta || !taskMeta.task) { return undefined; }
  
  return taskMeta;
}

let dv = new DataView(new ArrayBuffer());
const dataView = mem => dv.buffer === mem.buffer ? dv : dv = new DataView(mem.buffer);

function toInt64(val) {
  const converted = BigInt(val)
  
  return BigInt.asIntN(64, converted);
}


function toUint64(val) {
  const converted = BigInt(val)
  
  return BigInt.asUintN(64, converted);
}


function toInt32(val) {
  
  return val >> 0;
}


function toUint32(val) {
  
  return val >>> 0;
}


function toUint8(val) {
  
  val >>>= 0;
  val %= 2 ** 8;
  return val;
}

const utf16Decoder = new TextDecoder('utf-16');

function _utf16AllocateAndEncode(str, realloc, memory) {
  const len = str.length;
  const ptr = realloc(0, 0, 2, len * 2);
  const out = new Uint16Array(memory.buffer, ptr, len);
  let i = 0;
  if (isLE) {
    while (i < len) { out[i] = str.charCodeAt(i++); }
  } else {
    while (i < len) {
      const ch = str.charCodeAt(i);
      out[i++] = (ch & 0xff) << 8 | ch >>> 8;
    }
  }
  return { ptr, len, codepoints: [...str].length };
}

const TEXT_DECODER_UTF8 = new TextDecoder();
const TEXT_ENCODER_UTF8 = new TextEncoder();

function _utf8AllocateAndEncode(s, realloc, memory) {
  if (typeof s !== 'string') {
    throw new TypeError('expected a string, received [' + typeof s + ']');
  }
  if (s.length === 0) { return { ptr: 1, len: 0 }; }
  let buf = TEXT_ENCODER_UTF8.encode(s);
  let ptr = realloc(0, 0, 1, buf.length);
  new Uint8Array(memory.buffer).set(buf, ptr);
  const res = { ptr, len: buf.length, codepoints: [...s].length };
  return res;
}


async function _utf8AllocateAndEncodeAsync(s, realloc, memory) {
  if (typeof s !== 'string') {
    throw new TypeError('expected a string, received [' + typeof s + ']');
  }
  if (s.length === 0) { return { ptr: 1, len: 0 }; }
  let buf = TEXT_ENCODER_UTF8.encode(s);
  let ptr = await realloc(0, 0, 1, buf.length);
  new Uint8Array(memory.buffer).set(buf, ptr);
  const res = { ptr, len: buf.length, codepoints: [...s].length };
  return res;
}


const T_FLAG = 1 << 30;

function rscTableCreateOwn(table, rep) {
  const free = table[0] & ~T_FLAG;
  table._createdReps.add(rep);
  if (free === 0) {
    table.push(0);
    table.push(rep | T_FLAG);
    return (table.length >> 1) - 1;
  }
  table[0] = table[free << 1];
  table[free << 1] = 0;
  table[(free << 1) + 1] = rep | T_FLAG;
  return free;
}

function rscTableRemove(table, handle) {
  const scope = table[handle << 1];
  const val = table[(handle << 1) + 1];
  const own = (val & T_FLAG) !== 0;
  const rep = val & ~T_FLAG;
  if (val === 0 || (scope & T_FLAG) !== 0) {
    throw new TypeError("Invalid handle");
  }
  table[handle << 1] = table[0] | T_FLAG;
  table[0] = handle | T_FLAG;
  return { rep, scope, own };
}

let curResourceBorrows = [];

function taskReturn(ctx) {
  const {
    componentIdx,
    getMemoryFn,
    memoryIdx,
    callbackFnIdx,
    liftFns,
    lowerFns,
    stringEncoding,
  } = ctx;
  const params = [...arguments].slice(1);
  const memory = getMemoryFn();
  let useDirectParams = ctx.useDirectParams;
  
  const { taskID } = _getGlobalCurrentTaskMeta(componentIdx);
  
  const taskMeta = getCurrentTask(componentIdx, taskID);
  if (!taskMeta) { throw new Error('failed to retrieve current task metadata'); }
  
  const task = taskMeta.task;
  if (!task) { throw new Error('invalid/missing current task in metadata'); }
  
  _debugLog('[taskReturn()] args', {
    componentIdx,
    taskID: task.id(),
    subtaskID: task.getParentSubtask()?.id(),
    callbackFnIdx,
    memoryIdx,
    liftFns,
    lowerFns,
    params,
  });
  
  // If we are in a subtask, and have a fused helper function provided to use
  // via PrepareCall, we can use that function rather than performing lifting manually.
  //
  // See also documentation on `HostIntrinsic::PrepareCall`
  const subtaskCallMetadata = task.getParentSubtask()?.getCallMetadata();
  if (subtaskCallMetadata?.returnFn && !subtaskCallMetadata.returnFnCalled) {
    _debugLog('[taskReturn()] calling return fn on subtask', {
      componentIdx,
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      returnFnParams: [...params, subtaskCallMetadata.resultPtr],
    });
    const res = subtaskCallMetadata.returnFn.apply(null, [...params, subtaskCallMetadata.resultPtr]);
    subtaskCallMetadata.returnFnCalled = true;
    task.resolve([]);
    return;
  }
  
  const expectedMemoryIdx = task.getReturnMemoryIdx();
  if (expectedMemoryIdx !== null && memoryIdx !== null && expectedMemoryIdx !== memoryIdx) {
    _debugLog("[taskReturn()] mismatched memory indices", { expectedMemoryIdx, memoryIdx });
    throw new Error('task.return memory [' + memoryIdx + '] does not match task [' + expectedMemoryIdx + ']');
  }
  
  task.callbackFnIdx = callbackFnIdx;
  
  if (!memory && liftFns.length > 4) {
    _debugLog("[taskReturn()] memory not present for max async flat lifts");
    throw new Error('memory must be present if more than max async flat lifts are performed');
  }
  
  let liftCtx = { memory, useDirectParams, params, componentIdx, stringEncoding };
  if (!useDirectParams) {
    if (!memory) {
      _debugLog('missing memory despite indirect param usage', { useDirectParams, liftCtx, ctx });
      throw new Error('missing memory despite indirect param usage');
    }
    liftCtx.storagePtr = params[0];
    liftCtx.storageLen = params[1];
  }
  
  const liftedResults = [];
  _debugLog('[taskReturn()] lifting results out of memory', { liftCtx });
  for (const liftFn of liftFns) {
    if (liftCtx.storageLen !== undefined && liftCtx.storageLen <= 0) {
      _debugLog(`[taskReturn()] ran out of range while writing storageLen = [${liftCtx.storageLen}]`);
      throw new Error('ran out of storage while writing');
    }
    const [ val, newLiftCtx ] = liftFn(liftCtx);
    liftCtx = newLiftCtx;
    liftedResults.push(val);
  }
  
  task.resolve(liftedResults);
}

function taskCancel(componentIdx) {
  _debugLog('[taskCancel()] args', { componentIdx, isAsync });
  
  const state = getOrCreateAsyncState(componentIdx);
  if (!state.mayLeave) { throw new Error('component instance is not marked as may leave, cannot be cancelled'); }
  
  const { taskID } = _getGlobalCurrentTaskMeta(componentIdx);
  
  const taskMeta = getCurrentTask(componentIdx, taskID);
  if (!taskMeta) { throw new Error('invalid/missing async task meta'); }
  
  const task = taskMeta.task;
  if (!task) { throw new Error('invalid/missing async task'); }
  
  if (task.sync && !task.alwaysTaskReturn) {
    throw new Error('cannot cancel sync tasks without always task return set');
  }
  
  task.cancel();
}

function createNewCurrentTask(args) {
  _debugLog('[createNewCurrentTask()] args', args);
  const {
    componentIdx,
    isAsync,
    isManualAsync,
    preserveFutureResult,
    entryFnName,
    parentSubtaskID,
    callbackFnName,
    getCallbackFn,
    getParamsFn,
    stringEncoding,
    errHandling,
    getCalleeParamsFn,
    resultPtr,
    callingWasmExport,
  } = args;
  if (componentIdx === undefined || componentIdx === null) {
    throw new Error('missing/invalid component instance index while starting task');
  }
  let taskMetas = ASYNC_TASKS_BY_COMPONENT_IDX.get(componentIdx);
  const callbackFn = getCallbackFn ? getCallbackFn() : null;
  
  const newTask = new AsyncTask({
    componentIdx,
    isAsync,
    isManualAsync,
    preserveFutureResult,
    entryFnName,
    callbackFn,
    callbackFnName,
    stringEncoding,
    getCalleeParamsFn,
    resultPtr,
    errHandling,
  });
  
  const newTaskID = newTask.id();
  const newTaskMeta = { id: newTaskID, componentIdx, task: newTask };
  
  // NOTE: do not track host tasks
  ASYNC_CURRENT_TASK_IDS.push(newTaskID);
  ASYNC_CURRENT_COMPONENT_IDXS.push(componentIdx);
  
  if (!taskMetas) {
    taskMetas = [newTaskMeta];
    ASYNC_TASKS_BY_COMPONENT_IDX.set(componentIdx, [newTaskMeta]);
  } else {
    taskMetas.push(newTaskMeta);
  }
  
  return [newTask, newTaskID];
}

async function _driverLoop(args) {
  _debugLog('[_driverLoop()] args', args);
  const {
    componentState,
    task,
    fnName,
    isAsync,
  } = args;
  let callbackResult = args.callbackResult;
  
  const callbackFnName = task.getCallbackFnName();
  const componentIdx = task.componentIdx();
  
  if (callbackResult instanceof Promise) {
    throw new Error("callbackResult should be a value, not a promise");
  }
  
  if (callbackResult === undefined) {
    throw new Error("callback result should never be undefined");
  }
  
  let callbackCode;
  let waitableSetRep;
  let unpacked;
  try {
    if (!(_typeCheckValidI32(callbackResult))) {
      throw new Error('invalid callback result [' + callbackResult + '], not a number');
    }
    
    unpacked = unpackCallbackResult(callbackResult);
    callbackCode = unpacked[0];
    waitableSetRep = unpacked[1];
  } catch(err) {
    console.error("failed to unpack callback result", err);
    throw err;
  }
  
  if (callbackCode < 0 || callbackCode > 3) {
    throw new Error('invalid async return value, outside callback code range');
  }
  
  const cstate = getOrCreateAsyncState(componentIdx);
  
  let eventCode;
  let index;
  let result;
  let asyncRes;
  let wset;
  try {
    while (true) {
      if (callbackCode !== 0) { componentState.exclusiveRelease(); }
      
      switch (callbackCode) {
        case 0: // EXIT
        _debugLog('[_driverLoop()] async exit indicated', {
          fnName,
          componentIdx,
          callbackFnName,
          taskID: task.id()
        });
        task.exit({ skipExclusiveLockCheck: true });
        return;
        
        case 1: // YIELD
        _debugLog('[_driverLoop()] yield', {
          fnName,
          componentIdx,
          callbackFnName,
          taskID: task.id()
        });
        asyncRes = await task.yieldUntil({
          cancellable: true,
          readyFn: () => !componentState.isExclusivelyLocked(),
        });
        _debugLog('[_driverLoop()] finished yield', {
          fnName,
          componentIdx,
          callbackFnName,
          taskID: task.id(),
          asyncRes,
        });
        break;
        
        case 2: // WAIT for a given waitable set
        _debugLog('[_driverLoop()] waiting for event', {
          fnName,
          componentIdx,
          callbackFnName,
          taskID: task.id(),
          waitableSetRep,
          waitableSetTargets: cstate.handles.get(waitableSetRep).targets(),
        });
        
        wset = cstate.handles.get(waitableSetRep);
        if (!(wset instanceof WaitableSet)) {
          throw new Error(`non-waitable set returned from component state handles @ [${waitableSetRep}]`);
        }
        
        asyncRes = await wset.waitUntil({
          readyFn: () => !componentState.isExclusivelyLocked(),
          task,
          cancellable: true,
        });
        
        _debugLog('[_driverLoop()] finished waiting for event', {
          fnName,
          componentIdx,
          callbackFnName,
          taskID: task.id(),
          waitableSetRep,
          asyncRes,
        });
        
        break;
        
        default:
        throw new Error(`Unrecognized async function result [${ret}]`);
      }
      
      componentState.exclusiveLock();
      
      // If the task failed via any means, leave early and reject.
      if (task.isRejected()) {
        _debugLog('[_driverLoop()] detected task rejection, leaving early');
        return;
      }
      
      if (asyncRes.code === undefined) { throw new Error("missing event code from event"); }
      if (asyncRes.payload0 === undefined) { throw new Error("missing payload0 from event"); }
      if (asyncRes.payload1 === undefined) { throw new Error("missing payload1 from event"); }
      
      eventCode = asyncRes.code; // async event enum code
      index = asyncRes.payload0; // varies (e.g. idx of related waitable set)
      result = asyncRes.payload1; // varies (e.g. task state)
      asyncRes = null;
      
      _debugLog('[_driverLoop()] performing callback', {
        fnName,
        componentIdx,
        taskID: task.id(),
        callbackFnName,
        eventCode,
        index,
        result
      });
      
      const callbackRes = await task.runCallbackFn(
      toInt32(eventCode),
      toInt32(index),
      toInt32(result),
      );
      
      unpacked = unpackCallbackResult(callbackRes);
      callbackCode = unpacked[0];
      waitableSetRep = unpacked[1];
      
      _debugLog('[_driverLoop()] callback result unpacked', {
        fnName,
        componentIdx,
        callbackFnName,
        callbackRes,
        callbackCode,
        waitableSetRep,
      });
    }
  } catch (err) {
    _debugLog('[_driverLoop()] error during async driver loop', {
      fnName,
      callbackFnName,
      componentIdx,
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      parentTaskID: task.getParentSubtask()?.getParentTask()?.id(),
      event: {
        eventCode,
        index,
        result,
      },
      err,
    });
    task.setErrored(err);
    task.reject(err);
  }
}

function _lowerImportBackwardsCompat(args) {
  const params = [...arguments].slice(1);
  _debugLog('[_lowerImportBackwardsCompat()] args', { args, params });
  const {
    functionIdx,
    componentIdx,
    isAsync,
    isManualAsync,
    paramLiftFns,
    resultLowerFns,
    hasResultPointer,
    funcTypeIsAsync,
    metadata,
    memoryIdx,
    getMemoryFn,
    getReallocFn,
    importFn,
    stringEncoding,
  } = args;
  
  let meta = _getGlobalCurrentTaskMeta(componentIdx);
  let createdTask;
  
  // Some components depend on initialization logic (i.e. `_initialize` or some such
  // core wasm export) that is embedded in the component, but is not executed or wizer'd
  // away before the transpiled component is attempted to be used.
  //
  // These components execut their initialization logic *when they are imported* in the
  // transpiled context -- so we may get a call to an export that is lowered without going
  // through `CallWasm` or `CallInterface`.
  //
  if (!meta) {
    if (funcTypeIsAsync || (isAsync && !isManualAsync)) {
      throw new Error('p3 async wasm exports cannot use backwards compat auto-task init');
    }
    
    const [newTask, newTaskID] = createNewCurrentTask({
      componentIdx,
      isAsync,
      isManualAsync,
      callingWasmExport: false,
    });
    createdTask = newTask;
    
    // Since we're managing the task creation ourselves we must clear ourselves
    createdTask.registerOnResolveHandler(() => {
      _clearCurrentTask({
        taskID: task.id(),
        componentIdx: task.componentIdx(),
      });
    });
    
    _setGlobalCurrentTaskMeta({
      componentIdx,
      taskID: newTaskID,
    });
    
    meta = _getGlobalCurrentTaskMeta(componentIdx);
  }
  
  const { taskID } = meta;
  
  const taskMeta = getCurrentTask(componentIdx, taskID);
  if (!taskMeta) {
    throw new Error('invalid/missing async task meta');
  }
  
  const task = taskMeta.task;
  if (!task) { throw new Error('invalid/missing async task'); }
  
  const cstate = getOrCreateAsyncState(componentIdx);
  
  // TODO: re-enable this check -- postReturn can call imports though,
  // and that breaks things.
  //
  // if (!cstate.mayLeave) {
    //     throw new Error(`cannot leave instance [${componentIdx}]`);
    // }
    
    if (!task.mayBlock() && funcTypeIsAsync && !isAsync) {
      throw new Error("non async exports cannot synchronously call async functions");
    }
    
    // If there is an existing task, this should be part of a subtask
    const memory = getMemoryFn();
    // Canonical ABI lower appends result storage as a trailing
    // param when async lower has any flat result, or sync lower
    // has more than one flat result.
    const resultPtr = hasResultPointer ? params[params.length - 1] : undefined;
    const subtask = task.createSubtask({
      componentIdx,
      parentTask: task,
      fnName: importFn.fnName,
      isAsync,
      isManualAsync,
      callMetadata: {
        memoryIdx,
        memory,
        realloc: getReallocFn?.(),
        getReallocFn,
        resultPtr,
        lowers: resultLowerFns,
        stringEncoding,
      }
    });
    task.setReturnMemoryIdx(memoryIdx);
    task.setReturnMemory(getMemoryFn());
    
    subtask.onStart();
    
    // If dealing with a sync lowered sync function, we can directly return results
    //
    // TODO(breaking): remove once we get rid of manual async import specification,
    // as func types cannot be detected in that case only (and we don't need that w/ p3)
    if (!isManualAsync && !isAsync && !funcTypeIsAsync) {
      if (createdTask) { createdTask.enterSync(); }
      
      const res = importFn(...params);
      
      // TODO(breaking): remove once we get rid of manual async import specification,
      // as func types cannot be detected in that case only (and we don't need that w/ p3)
      if (!funcTypeIsAsync && !subtask.isReturned()) {
        throw new Error('post-execution subtasks must either be async or returned');
      }
      
      const syncRes = subtask.getResult();
      if (createdTask) { createdTask.resolve([syncRes]); }
      
      return syncRes;
    }
    
    // Sync-lowered async functions requires async behavior because the callee *can* block,
    // but this call must *act* synchronously and return immediately with the result
    // (i.e. not returning until the work is done)
    //
    // TODO(breaking): remove checking for manual async specification here, once we can go p3-only
    //
    if (!isManualAsync && !isAsync && funcTypeIsAsync) {
      const { promise, resolve } = new Promise();
      queueMicrotask(async () => {
        if (!subtask.isResolvedState()) {
          await task.suspendUntil({ readyFn: () => task.isResolvedState() });
        }
        resolve(subtask.getResult());
      });
      return promise;
    }
    
    // NOTE: at this point we know that we are working with an async lowered import
    
    const subtaskState = subtask.getStateNumber();
    if (subtaskState < 0 || subtaskState >= 2**4) {
      throw new Error('invalid subtask state, out of valid range');
    }
    
    subtask.setOnProgressFn(() => {
      subtask.setPendingEvent(() => {
        if (subtask.isResolved()) { subtask.deliverResolve(); }
        const event = {
          code: ASYNC_EVENT_CODE.SUBTASK,
          payload0: subtask.waitableRep(),
          payload1: subtask.getStateNumber(),
        }
        return event;
      });
    });
    
    // This is a hack to maintain backwards compatibility with
    // manually-specified async imports, used in wasm exports that are
    // not actually async (but are specified as so).
    //
    // This is not normal p3 sync behavior but instead anticipating that
    // the caller that is doing manual async will be waiting for a promise that
    // resolves to the *actual* result.
    //
    // TODO(breaking): remove once manually specified async is removed
    //
    // There are a few cases:
    // 1. sync function with async types (e.g. `f: func() -> stream<u32>`)
    // 2. async function with async types (e.g. `f: async func() -> stream<u32>`)
    // 3. async function with sync types (e.g. `f: async func() -> list<u32>`)
    // 4. sync function with non-async types (e.g. `f: func() -> list<u32>`)
    //
    // This hack *only* applies to 4 -- the case where an async JS host function
    // is supplied to a Wasm export which does *not* need to do any async abi
    // lifting/lowering (async ABI did not exist when JSPI integratiton was
    // initially merged to enable asynchronously returning values from the host)
    //
    const requiresManualAsyncResult = !isAsync && !funcTypeIsAsync && isManualAsync;
    let manualAsyncResult;
    if (requiresManualAsyncResult) {
      manualAsyncResult = promiseWithResolvers();
    }
    
    queueMicrotask(async () => {
      try {
        _debugLog('[_lowerImportBackwardsCompat()] calling lowered import', { importFn, params });
        if (createdTask) { await createdTask.enter(); }
        
        const asyncRes = await importFn(...params);
        if (requiresManualAsyncResult) {
          manualAsyncResult.resolve(subtask.getResult());
        }
        
        if (createdTask) { createdTask.resolve([asyncRes]); }
        
        
      } catch (err) {
        _debugLog("[_lowerImportBackwardsCompat()] import fn error:", err);
        if (requiresManualAsyncResult) {
          manualAsyncResult.reject(err);
        }
        throw err;
      }
    });
    
    if (requiresManualAsyncResult) { return manualAsyncResult.promise; }
    
    return Number(subtask.waitableRep()) << 4 | subtaskState;
  }
  
  class WaitableSet {
    #componentIdx;
    #waitables = [];
    #pendingEvent = null;
    #waiting = 0;
    
    target;
    
    constructor(componentIdx) {
      if (componentIdx === undefined) { throw new TypeError("missing/invalid component idx"); }
      this.#componentIdx = componentIdx;
      this.target = `component [${this.#componentIdx}] waitable set`;
    }
    
    componentIdx() { return this.#componentIdx; }
    
    numWaitables() { return this.#waitables.length; }
    numWaiting() { return this.#waiting; }
    
    incrementNumWaiting(n) { this.#waiting += n ?? 1; }
    decrementNumWaiting(n) { this.#waiting -= n ?? 1; }
    
    targets() { return this.#waitables.map(w => w.target); }
    
    setTarget(tgt) { this.target = tgt; }
    
    shuffleWaitables() {
      this.#waitables = this.#waitables
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    }
    
    removeWaitable(waitable) {
      const existing = this.#waitables.find(w => w === waitable);
      if (!existing) { return undefined; }
      this.#waitables = this.#waitables.filter(w => w !== waitable);
      return waitable;
    }
    
    addWaitable(waitable) {
      this.removeWaitable(waitable);
      this.#waitables.push(waitable);
    }
    
    hasPendingEvent() {
      _debugLog('[WaitableSet#hasPendingEvent()] args', {
        componentIdx: this.#componentIdx,
        waitableSet: this,
        waitableSetTargets: this.targets(),
      });
      const waitable = this.#waitables.find(w => w.hasPendingEvent());
      return waitable !== undefined;
    }
    
    getPendingEvent() {
      _debugLog('[WaitableSet#getPendingEvent()] args', {
        componentIdx: this.#componentIdx,
        waitableSet: this,
      });
      for (const waitable of this.#waitables) {
        if (!waitable.hasPendingEvent()) { continue; }
        const event = waitable.getPendingEvent();
        _debugLog('[WaitableSet#getPendingEvent()] found pending event', {
          waitable,
          event,
        });
        return event;
      }
      throw new Error('no waitables had a pending event');
    }
    
    async waitUntil(opts) {
      _debugLog('[WaitableSet#waitUntil()] args', { opts });
      // TODO(threads): this task should be the thread
      const { readyFn, task, cancellable } = opts;
      
      let event;
      
      this.incrementNumWaiting();
      
      const keepGoing = await task.suspendUntil({
        readyFn: () => {
          const hasPendingEvent = this.hasPendingEvent();
          const ready = readyFn();
          return ready && hasPendingEvent;
        },
        cancellable,
      });
      
      if (keepGoing) {
        event = this.getPendingEvent();
      } else {
        event = {
          code: ASYNC_EVENT_CODE.TASK_CANCELLED,
          payload0: 0,
          payload1: 0,
        };
      }
      
      this.decrementNumWaiting();
      
      return event;
    }
    
  }
  
  function waitableSetNew(componentIdx) {
    _debugLog('[waitableSetNew()] args', { componentIdx });
    
    const state = getOrCreateAsyncState(componentIdx);
    if (!state) {throw new Error(`missing async state for component idx [${componentIdx}]`); }
    
    const wset = new WaitableSet(componentIdx);
    const rep = state.handles.insert(wset);
    if (typeof rep !== 'number') { throw new Error(`invalid/missing waitable set rep [${rep}]`); }
    
    _debugLog('[waitableSetNew()] created waitable set', { componentIdx, rep });
    return rep;
  }
  
  function waitableSetPoll(ctx, waitableSetRep, resultPtr) {
    const { componentIdx, memoryIdx, getMemoryFn, isAsync, isCancellable } = ctx;
    _debugLog('[waitableSetPoll()] args', {
      componentIdx,
      memoryIdx,
      waitableSetRep,
      resultPtr,
    });
    
    const taskMeta = getCurrentTask(componentIdx);
    if (!taskMeta) { throw Error('invalid/missing current task meta'); }
    if (taskMeta.componentIdx !== componentIdx) {
      throw Error('task component idx [' + task.componentIdx + '] != component instance ID [' + componentIdx + ']');
    }
    
    const task = taskMeta.task;
    if (!task) { throw Error('invalid/missing async task in task meta'); }
    
    if (task.componentIdx() !== componentIdx) {
      throw Error(`task component idx [${task.componentIdx()}] does not match generated [${componentIdx}]`);
    }
    
    const cstate = getOrCreateAsyncState(task.componentIdx());
    const wset = cstate.handles.get(waitableSetRep);
    if (!wset) {
      throw new Error(`missing waitable set [${waitableSetRep}] in component [${componentIdx}]`);
    }
    
    let event;
    const cancelDelivered = task.deliverPendingCancel({ cancellable: isCancellable });
    if (cancelDelivered) {
      _debugLog('[waitableSetPoll()] detected cancel delivered', {
        componentIdx,
        waitableSetRep,
      });
      event = { code: ASYNC_EVENT_CODE.TASK_CANCELLED, payload0: 0, payload1: 0 };
    } else if (!wset.hasPendingEvent()) {
      _debugLog('[waitableSetPoll()] no pending event', {
        componentIdx,
        waitableSetRep,
      });
      event = { code: ASYNC_EVENT_CODE.NONE, payload0: 0, payload1: 0 };
    } else {
      _debugLog('[waitableSetPoll()] retrieving waiting pending event', {
        componentIdx,
        waitableSetRep,
      });
      event = wset.getPendingEvent();
    }
    
    const eventCode = _storeEventInComponentMemory({
      event,
      ptr: resultPtr,
      memory: getMemoryFn(),
      componentIdx,
      task,
      memoryIdx,
    });
    
    return eventCode;
  }
  
  function waitableSetDrop(componentIdx, waitableSetRep) {
    _debugLog('[waitableSetDrop()] args', { componentIdx, waitableSetRep });
    const task = getCurrentTask(componentIdx);
    
    if (!task) { throw new Error('invalid/missing async task'); }
    if (task.componentIdx !== componentIdx) {
      throw Error('task component idx [' + task.componentIdx + '] != component instance ID [' + componentIdx + ']');
    }
    
    const state = getOrCreateAsyncState(componentIdx);
    if (!state.mayLeave) { throw new Error('component instance is not marked as may leave, cannot be cancelled'); }
    
    _removeWaitableSet({ state, waitableSetRep });
  }
  
  function _removeWaitableSet(args) {
    _debugLog('[_removeWaitableSet()] args', args);
    const { state, waitableSetRep } = args;
    if (!state) { throw new TypeError("missing component state"); }
    if (!waitableSetRep) { throw new TypeError("missing component waitableSetRep"); }
    
    const ws = state.handles.get(waitableSetRep);
    if (!ws) {
      throw new Error('cannot remove waitable set: no set present with rep [' + waitableSetRep + ']');
    }
    if (ws.hasPendingEvent()) {
      throw new Error('waitable set cannot be removed with pending items remaining');
    }
    
    const waitableSet = state.handles.get(waitableSetRep);
    if (ws.numWaitables() > 0) {
      throw new Error('waitable set still contains waitables');
    }
    if (ws.numWaiting() > 0) {
      throw new Error('waitable set still has other tasks waiting on it');
    }
    
    state.handles.remove(waitableSetRep);
  }
  
  function waitableJoin(componentIdx, waitableRep, waitableSetRep) {
    _debugLog('[waitableJoin()] args', {
      componentIdx,
      waitableSetRep,
      isRemoval: waitableSetRep === 0,
      waitableRep,
    });
    
    const state = getOrCreateAsyncState(componentIdx);
    if (!state) {
      throw new Error(`invalid/missing async state for component instance [${componentIdx}]`);
    }
    
    if (!state.mayLeave) {
      throw new Error('component instance is not marked as may leave, cannot join waitable');
    }
    
    const waitableObj = state.handles.get(waitableRep);
    if (!waitableObj) {
      throw new Error(`missing waitable obj (rep [${waitableRep}]), component idx [${componentIdx}])`);
    }
    const waitable = waitableObj.getWaitable ? waitableObj.getWaitable() : waitableObj;
    if (!waitable.join) {
      throw new Error("invalid waitable object, does not have join()");
    }
    
    const waitableSet = waitableSetRep === 0 ? null : state.handles.get(waitableSetRep);
    if (waitableSetRep !== 0 && !waitableSet) {
      throw new Error(`missing waitable set [${waitableSetRep}] in component idx [${componentIdx}]`);
    }
    
    waitable.join(waitableSet);
  }
  
  function _liftFlatBool(ctx) {
    _debugLog('[_liftFlatBool()] args', { ctx });
    let val;
    
    if (ctx.useDirectParams) {
      if (ctx.params.length === 0) { throw new Error('expected at least a single i32 argument'); }
      val = ctx.params[0] === 1;
      ctx.params = ctx.params.slice(1);
      return [val, ctx];
    }
    
    if (ctx.storageLen !== undefined && ctx.storageLen < 1) {
      throw new Error(`insufficient storage ([${ctx.storageLen}] bytes) for lift (bool requires 1 byte)`);
    }
    
    val = new DataView(ctx.memory.buffer).getUint8(ctx.storagePtr, true) === 1;
    
    ctx.storagePtr += 1;
    if (ctx.storageLen !== undefined) { ctx.storageLen -= 1; }
    
    return [val, ctx];
  }
  
  
  function _liftFlatU8(ctx) {
    _debugLog('[_liftFlatU8()] args', { ctx });
    let val;
    
    if (ctx.useDirectParams) {
      if (ctx.params.length === 0) { throw new Error('expected at least a single i32 argument'); }
      val = ctx.params[0];
      ctx.params = ctx.params.slice(1);
      return [val, ctx];
    }
    
    if (ctx.storageLen !== undefined && ctx.storageLen < 1) {
      throw new Error(`insufficient storage ([${ctx.storageLen}] bytes) for lift (u8 requires 1 byte)`);
    }
    
    val = new DataView(ctx.memory.buffer).getUint8(ctx.storagePtr, true);
    
    ctx.storagePtr += 1;
    if (ctx.storageLen !== undefined) { ctx.storageLen -= 1; }
    
    return [val, ctx];
  }
  
  
  function _liftFlatU16(ctx) {
    _debugLog('[_liftFlatU16()] args', { ctx });
    let val;
    
    if (ctx.useDirectParams) {
      if (ctx.params.length === 0) { throw new Error('expected at least a single i32 argument'); }
      val = ctx.params[0];
      ctx.params = ctx.params.slice(1);
      return [val, ctx];
    }
    
    if (ctx.storageLen !== undefined && ctx.storageLen < 2) {
      throw new Error(`insufficient storage ([${ctx.storageLen}] bytes) for lift (u16 requires 2 bytes)`);
    }
    
    val = new DataView(ctx.memory.buffer).getUint16(ctx.storagePtr, true);
    
    ctx.storagePtr += 2;
    if (ctx.storageLen !== undefined) { ctx.storageLen -= 2; }
    
    const rem = ctx.storagePtr % 2;
    if (rem !== 0) { ctx.storagePtr += (2 - rem); }
    
    return [val, ctx];
  }
  
  
  function _liftFlatU32(ctx) {
    _debugLog('[_liftFlatU32()] args', { ctx });
    let val;
    
    if (ctx.useDirectParams) {
      if (ctx.params.length === 0) { throw new Error('expected at least a single i34 argument'); }
      val = ctx.params[0];
      ctx.params = ctx.params.slice(1);
      return [val, ctx];
    }
    
    if (ctx.storageLen !== undefined && ctx.storageLen < 4) {
      throw new Error(`insufficient storage ([${ctx.storageLen}] bytes) for lift (u32 requires 4 bytes)`);
    }
    val = new DataView(ctx.memory.buffer).getUint32(ctx.storagePtr, true);
    ctx.storagePtr += 4;
    if (ctx.storageLen !== undefined) { ctx.storageLen -= 4; }
    
    return [val, ctx];
  }
  
  
  function _liftFlatU64(ctx) {
    _debugLog('[_liftFlatU64()] args', { ctx });
    let val;
    
    if (ctx.useDirectParams) {
      if (ctx.params.length === 0) { throw new Error('expected at least one single i64 argument'); }
      if (typeof ctx.params[0] !== 'bigint') { throw new Error('expected bigint'); }
      val = ctx.params[0];
      ctx.params = ctx.params.slice(1);
      return [val, ctx];
    }
    
    if (ctx.storageLen !== undefined && ctx.storageLen < 8) {
      throw new Error(`insufficient storage ([${ctx.storageLen}] bytes) for lift (u64 requires 8 bytes)`);
    }
    
    val = new DataView(ctx.memory.buffer).getBigUint64(ctx.storagePtr, true);
    ctx.storagePtr += 8;
    if (ctx.storageLen !== undefined) { ctx.storageLen -= 8; }
    
    return [val, ctx];
  }
  
  
  function _liftFlatFloat64(ctx) {
    _debugLog('[_liftFlatFloat64()] args', { ctx });
    let val;
    
    if (ctx.useDirectParams) {
      if (ctx.params.length === 0) {
        throw new Error('expected at least one single f64 argument');
      }
      val = ctx.params[0];
      ctx.params = ctx.params.slice(1);
      
      if (ctx.inVariant) {
        const dv = new DataView(new ArrayBuffer(8));
        dv.setBigInt64(0, val);
        val = dv.getFloat64(0);
      }
      
      return [val, ctx];
    }
    
    if (ctx.storageLen !== undefined && ctx.storageLen < 8) {
      throw new Error(`insufficient storage ([${ctx.storageLen}] bytes) for lift (f64 requires 8 bytes)`);
    }
    
    val = new DataView(ctx.memory.buffer).getFloat64(ctx.storagePtr, true);
    ctx.storagePtr += 8;
    if (ctx.storageLen !== undefined) { ctx.storageLen -= 8; }
    
    return [val, ctx];
  }
  
  
  function _liftFlatStringAny(ctx) {
    switch (ctx.stringEncoding) {
      case 'utf8':
      return _liftFlatStringUTF8(ctx);
      case 'utf16':
      return _liftFlatStringUTF16(ctx);
      default:
      throw new Error(`missing/unrecognized/unsupported string encoding [${ctx.stringEncoding}]`);
    }
  }
  
  function _liftFlatStringUTF8(ctx) {
    _debugLog('[_liftFlatStringUTF8()] args', { ctx });
    let val;
    
    if (ctx.useDirectParams) {
      if (ctx.params.length < 2) { throw new Error('expected at least two u32 arguments'); }
      let offset = ctx.params[0];
      if (typeof offset === 'bigint') { offset = Number(offset); }
      if (!Number.isSafeInteger(offset)) { throw new Error('invalid offset'); }
      const len = ctx.params[1];
      if (!Number.isSafeInteger(len)) {  throw new Error('invalid len'); }
      val = TEXT_DECODER_UTF8.decode(new DataView(ctx.memory.buffer, offset, len));
      ctx.params = ctx.params.slice(2);
      return [val, ctx];
    }
    
    const rem = ctx.storagePtr % 4;
    if (rem !== 0) { ctx.storagePtr += (4 - rem); }
    
    const dv = new DataView(ctx.memory.buffer);
    const start = dv.getUint32(ctx.storagePtr, true);
    const codeUnits = dv.getUint32(ctx.storagePtr + 4, true);
    
    val = TEXT_DECODER_UTF8.decode(new Uint8Array(ctx.memory.buffer, start, codeUnits));
    
    ctx.storagePtr += 8;
    if (ctx.storageLen !== undefined) { ctx.storagelen -= 8; }
    
    return [val, ctx];
  }
  
  function _liftFlatStringUTF16(ctx) {
    _debugLog('[_liftFlatStringUTF16()] args', { ctx });
    let val;
    
    if (ctx.useDirectParams) {
      if (ctx.params.length < 2) { throw new Error('expected at least two u32 arguments'); }
      let offset = ctx.params[0];
      if (typeof offset === 'bigint') { offset = Number(offset); }
      if (!Number.isSafeInteger(offset)) {  throw new Error('invalid offset'); }
      const len = ctx.params[1];
      if (!Number.isSafeInteger(len)) {  throw new Error('invalid len'); }
      val = utf16Decoder.decode(new DataView(ctx.memory.buffer, offset, len));
      ctx.params = ctx.params.slice(2);
      return [val, ctx];
    }
    
    const data = new DataView(ctx.memory.buffer)
    const start = data.getUint32(ctx.storagePtr, vals[0], true);
    const codeUnits = data.getUint32(ctx.storagePtr, vals[0] + 4, true);
    val = utf16Decoder.decode(new Uint16Array(ctx.memory.buffer, start, codeUnits));
    ctx.storagePtr = ctx.storagePtr + 2 * codeUnits;
    if (ctx.storageLen !== undefined) { ctx.storageLen = ctx.storageLen - 2 * codeUnits }
    
    return [val, ctx];
  }
  
  function _liftFlatRecord(meta) {
    const { fieldMetas, size32: recordSize32, align32: recordAlign32 } = meta;
    return function _liftFlatRecordInner(ctx) {
      _debugLog('[_liftFlatRecord()] args', { ctx });
      
      const originalPtr = ctx.storagePtr;
      const res = {};
      for (const [key, liftFn, size32, align32] of fieldMetas) {
        let fieldPtr;
        if (ctx.storagePtr !== undefined) {
          const rem = ctx.storagePtr % align32;
          if (rem !== 0) { ctx.storagePtr += align32 - rem; }
          fieldPtr = ctx.storagePtr;
        }
        
        // A field occupies exactly size32 bytes of the record's
        // flat storage. Capture the remaining storage budget before
        // lifting the field and restore it afterwards: a field's own
        // lift fn may repurpose storageLen internally (e.g. a list
        // sets it to the element-buffer length while reading
        // out-of-line data and never restores it), which would
        // otherwise corrupt the budget the next field sees.
        // See https://github.com/bytecodealliance/jco/issues/1585.
        let fieldLen;
        if (ctx.storageLen !== undefined) { fieldLen = ctx.storageLen; }
        
        let [val, newCtx] = liftFn(ctx);
        res[key] = val;
        ctx = newCtx;
        
        if (fieldPtr !== undefined) {
          ctx.storagePtr = Math.max(ctx.storagePtr, fieldPtr + size32);
        }
        if (fieldLen !== undefined) {
          ctx.storageLen = fieldLen - size32;
        }
      }
      
      if (originalPtr !== undefined) {
        ctx.storagePtr = Math.max(ctx.storagePtr, originalPtr + recordSize32);
      }
      
      if (ctx.storagePtr !== undefined) {
        const rem = ctx.storagePtr % recordAlign32;
        if (rem !== 0) { ctx.storagePtr += recordAlign32 - rem; }
      }
      
      return [res, ctx];
    }
  }
  
  function _liftFlatVariant(meta) {
    const {
      caseMetas,
      variantSize32,
      variantAlign32,
      variantPayloadOffset32,
      variantFlatCount,
      isEnum,
    } = meta;
    
    return function _liftFlatVariantInner(ctx) {
      _debugLog('[_liftFlatVariant()] args', { ctx });
      const origUseParams = ctx.useDirectParams;
      
      // If we're in the process of lifting a variant, we note
      // we are during any lifting that happens (e.g. to accomodate f32/f64 mechanics)
      const wasInVariant = ctx.inVariant;
      ctx.inVariant = true;
      
      let caseIdx;
      let liftRes;
      const originalPtr = ctx.storagePtr;
      const numCases =  caseMetas.length;
      if (caseMetas.length < 256) {
        liftRes = _liftFlatU8(ctx);
      } else if (numCases >= 256 && numCases < 65536) {
        liftRes = _liftFlatU16(ctx);
      } else if (numCases >= 65536 && numCases < 4_294_967_296) {
        liftRes = _liftFlatU32(ctx);
      } else {
        throw new Error(`unsupported number of variant cases [${numCases}]`);
      }
      caseIdx = liftRes[0];
      ctx = liftRes[1];
      
      const [
      tag,
      liftFn,
      caseSize32,
      caseAlign32,
      caseFlatCount,
      ] = caseMetas[caseIdx];
      
      if (variantPayloadOffset32 === undefined) {
        throw new Error('unexpectedly missing payload offset');
      }
      
      if (originalPtr !== undefined) {
        ctx.storagePtr = originalPtr + variantPayloadOffset32;
      }
      
      let val;
      if (liftFn === null) {
        val = { tag };
        // NOTE: here we need to move past the entire object in memory
        // despite moving to the payload which we now know is missing/unnecessary
        if (originalPtr !== undefined) {
          ctx.storagePtr = originalPtr + variantSize32;
        }
      } else {
        if (ctx.useDirectParams && ctx.params && liftFn !== _liftFlatFloat64 && typeof ctx.params[0] === 'bigint') {
          if (ctx.params[0] > BigInt(Number.MAX_SAFE_INTEGER)) {
            throw new Error(`invalid value, reinterpreted i32/f32 too large: [${ctx.params[0]}]`);
          }
          ctx.params[0] = Number(ctx.params[0]);
        }
        
        const [newVal, newCtx] = liftFn(ctx);
        val = { tag, val: newVal };
        ctx = newCtx;
      }
      
      if (origUseParams) {
        if (variantFlatCount === undefined || variantFlatCount === null) {
          _debugLog('[_liftFlatVariant()] variant with unknown flat count', { ctx, meta });
          throw new Error('cannot lift variant with unknown flat count');
        }
        if (caseFlatCount === undefined || caseFlatCount === null) {
          _debugLog('[_liftFlatVariant()] case with unknown flat count', { ctx, meta, case: meta.caseMetas[caseIdx] });
          throw new Error('cannot lift case with unknown flat count');
        }
        // NOTE: enums can be tightly packed and do not have a descriminant
        const remainingPayloadParams = variantFlatCount - caseFlatCount - (isEnum ? 0 : 1);
        if (remainingPayloadParams < 0) {
          throw new Error(`invalid variant flat count metadata`);
        }
        if (ctx.params.length < remainingPayloadParams) {
          throw new Error(`expected at least [${remainingPayloadParams}] remaining variant payload params, but got [${ctx.params.length}]`);
        }
        ctx.params = ctx.params.slice(remainingPayloadParams);
      }
      
      if (ctx.storagePtr !== undefined) {
        const rem = ctx.storagePtr % variantAlign32;
        if (rem !== 0) { ctx.storagePtr += variantAlign32 - rem; }
      }
      
      ctx.inVariant = wasInVariant;
      
      return [val, ctx];
    }
  }
  
  function _liftFlatList(meta) {
    const { elemLiftFn, elemSize32, elemAlign32, knownLen, typedArray } = meta;
    
    const listValue =
    typedArray === undefined
    ? values => values
    : values => new typedArray(values);
    
    const readValuesAndReset = (ctx, originalPtr, originalLen, dataPtr, len) => {
      ctx.storagePtr = dataPtr;
      const val = [];
      for (var i = 0; i < len; i++) {
        const elemPtr = dataPtr + i * elemSize32;
        ctx.storagePtr = elemPtr;
        const [res, nextCtx] = elemLiftFn(ctx);
        val.push(res);
        ctx = nextCtx;
        
        ctx.storagePtr = Math.max(ctx.storagePtr, elemPtr + elemSize32);
      }
      if (originalPtr !== null) { ctx.storagePtr = originalPtr; }
      if (originalLen !== null) { ctx.storageLen = originalLen; }
      return [listValue(val), ctx];
    };
    
    return function _liftFlatListInner(ctx) {
      _debugLog('[_liftFlatList()] args', { ctx });
      
      let liftResults;
      if (knownLen !== undefined) { // list with known length
      if (ctx.useDirectParams) {
        _debugLog('memory unexpectedly missing while lifting unknown length list', { ctx });
        liftResults = [listValue(ctx.params.slice(0, knownLen)), ctx];
        ctx.params = ctx.params.slice(knownLen);
      } else { // indirect params
      if (ctx.memory === null) {
        _debugLog('memory unexpectedly missing while lifting known length list', { knownLen, ctx });
        throw new Error(`memory missing while lifting known length (${knownLen}) list`);
      }
      
      const originalLen = ctx.storageLen;
      const originalPtr = ctx.storagePtr;
      
      ctx.storageLen = knownLen * elemSize32;
      liftResults = readValuesAndReset(ctx, null, originalLen, ctx.storagePtr, knownLen);
    }
    
  } else { // unknown length list
  
  if (ctx.useDirectParams) {
    // unknown length list ptr w/ direct params
    const dataPtr = ctx.params[0];
    const len = ctx.params[1];
    ctx.params = ctx.params.slice(2);
    
    ctx.useDirectParams = false;
    const originalPtr = ctx.storagePtr;
    const originalLen = ctx.storageLen;
    ctx.storageLen = len * elemSize32;
    
    liftResults = readValuesAndReset(ctx, originalPtr, originalLen, dataPtr, len);
    
    ctx.useDirectParams = true;
  } else {
    // unknown length list ptr w/ in-memory params
    const originalLen = ctx.storageLen;
    ctx.storageLen = 8;
    
    const dataPtrLiftRes = _liftFlatU32(ctx);
    const dataPtr = dataPtrLiftRes[0];
    ctx = dataPtrLiftRes[1];
    
    const lenLiftRes = _liftFlatU32(ctx);
    const len = lenLiftRes[0];
    ctx = lenLiftRes[1];
    
    const originalPtr = ctx.storagePtr;
    ctx.storagePtr = dataPtr;
    
    ctx.storageLen = len * elemSize32;
    liftResults = readValuesAndReset(ctx, originalPtr, originalLen, dataPtr, len);
  }
}

return liftResults;
}
}

function _liftFlatTuple(meta) {
  const { elemLiftFns, size32: tupleSize32, align32: tupleAlign32 } = meta;
  return function _liftFlatTupleInner(ctx) {
    _debugLog('[_liftFlatTuple()] args', { ctx });
    
    const originalPtr = ctx.storagePtr;
    const val = [];
    for (const [ liftFn, size32, align32 ]  of elemLiftFns) {
      let elemPtr;
      if (ctx.storagePtr !== undefined) {
        const rem = ctx.storagePtr % align32;
        if (rem !== 0) { ctx.storagePtr += align32 - rem; }
        elemPtr = ctx.storagePtr;
      }
      
      // As in _liftFlatRecord: an element occupies exactly size32
      // bytes of the tuple's flat storage, so capture and restore
      // the storage budget around the element lift to stop a
      // field's internal storageLen use (e.g. lists) leaking into
      // the next element.
      // See https://github.com/bytecodealliance/jco/issues/1585.
      let elemLen;
      if (ctx.storageLen !== undefined) { elemLen = ctx.storageLen; }
      
      const [newValue, newCtx] = liftFn(ctx);
      val.push(newValue);
      ctx = newCtx;
      
      if (elemPtr !== undefined) {
        ctx.storagePtr = Math.max(ctx.storagePtr, elemPtr + size32);
      }
      if (elemLen !== undefined) {
        ctx.storageLen = elemLen - size32;
      }
    }
    
    if (originalPtr !== undefined) {
      ctx.storagePtr = Math.max(ctx.storagePtr, originalPtr + tupleSize32);
    }
    
    if (ctx.storagePtr !== undefined) {
      const rem = ctx.storagePtr % tupleAlign32;
      if (rem !== 0) { ctx.storagePtr += tupleAlign32 - rem; }
    }
    
    return [val, ctx];
  }
}

function _liftFlatEnum(meta) {
  meta.isEnum = true;
  const f = _liftFlatVariant(meta);
  return function _liftFlatEnumInner(ctx) {
    _debugLog('[_liftFlatEnum()] args', { ctx });
    const res = f(ctx);
    res[0] = res[0].tag;
    return res;
  }
}

function _liftFlatOption(meta) {
  const f = _liftFlatVariant(meta);
  return function _liftFlatOptionInner(ctx) {
    _debugLog('[_liftFlatOption()] args', { ctx });
    return f(ctx);
  }
}

function _liftFlatResult(meta) {
  const f = _liftFlatVariant(meta);
  return function _liftFlatResultInner(ctx) {
    _debugLog('[_liftFlatResult()] args', { ctx });
    return f(ctx);
  }
}

function _liftFlatBorrow(componentTableIdx, size, memory, vals, storagePtr, storageLen) {
  _debugLog('[_liftFlatBorrow()] args', { size, memory, vals, storagePtr, storageLen });
  throw new Error('flat lift for borrowed resources is not supported!');
}


function _lowerFlatBool(ctx) {
  _debugLog('[_lowerFlatBool()] args', { ctx });
  
  if (!ctx.memory) { throw new Error("missing memory for lower"); }
  if (ctx.vals.length !== 1) {
    throw new Error(`unexpected number [${ctx.vals.length}] of vals (expected 1)`);
  }
  
  _requireValidNumericPrimitive.bind('bool', ctx.vals[0]);
  new DataView(ctx.memory.buffer).setUint8(ctx.storagePtr, ctx.vals[0] ? 1 : 0);
  
  ctx.storagePtr += 1;
}

function _lowerFlatU8(ctx) {
  _debugLog('[_lowerFlatU8()] args', ctx);
  
  if (ctx.vals.length !== 1) {
    throw new Error(`unexpected number [${ctx.vals.length}] of vals (expected 1)`);
  }
  
  _requireValidNumericPrimitive.bind('u8', ctx.vals[0]);
  
  if (!ctx.memory) { throw new Error("missing memory for lower"); }
  new DataView(ctx.memory.buffer).setUint8(ctx.storagePtr, ctx.vals[0]);
  
  ctx.storagePtr += 1;
}

function _lowerFlatU16(ctx) {
  _debugLog('[_lowerFlatU16()] args', { ctx });
  
  if (!ctx.memory) { throw new Error("missing memory for lower"); }
  if (ctx.vals.length !== 1) {
    throw new Error(`unexpected number [${ctx.vals.length}] of vals (expected 1)`);
  }
  
  const rem = ctx.storagePtr % 2;
  if (rem !== 0) { ctx.storagePtr += (2 - rem); }
  
  _requireValidNumericPrimitive.bind('u16', ctx.vals[0]);
  new DataView(ctx.memory.buffer).setUint16(ctx.storagePtr, ctx.vals[0], true);
  
  ctx.storagePtr += 2;
}

function _lowerFlatU32(ctx) {
  _debugLog('[_lowerFlatU32()] args', { ctx });
  
  if (ctx.vals.length !== 1) {
    throw new Error(`expected single value to lower, got [${ctx.vals.length}]`);
  }
  
  const rem = ctx.storagePtr % 4;
  if (rem !== 0) { ctx.storagePtr += (4 - rem); }
  
  _requireValidNumericPrimitive.bind('u32', ctx.vals[0]);
  new DataView(ctx.memory.buffer).setUint32(ctx.storagePtr, ctx.vals[0], true);
  
  ctx.storagePtr += 4;
}

function _lowerFlatS64(ctx) {
  _debugLog('[_lowerFlatS64()] args', { ctx });
  
  if (ctx.vals.length !== 1) { throw new Error('unexpected number of vals'); }
  
  const rem = ctx.storagePtr % 8;
  if (rem !== 0) { ctx.storagePtr += (8 - rem); }
  
  _requireValidNumericPrimitive.bind('s64', ctx.vals[0]);
  new DataView(ctx.memory.buffer).setBigInt64(ctx.storagePtr, ctx.vals[0], true);
  
  
  ctx.storagePtr += 8;
}

function _lowerFlatU64(ctx) {
  _debugLog('[_lowerFlatU64()] args', { ctx });
  
  if (ctx.vals.length !== 1) { throw new Error('unexpected number of vals'); }
  
  const rem = ctx.storagePtr % 8;
  if (rem !== 0) { ctx.storagePtr += (8 - rem); }
  
  _requireValidNumericPrimitive.bind('u64', ctx.vals[0]);
  new DataView(ctx.memory.buffer).setBigUint64(ctx.storagePtr, ctx.vals[0], true);
  
  ctx.storagePtr += 8;
}

function _lowerFlatFloat64(ctx) {
  _debugLog('[_lowerFlatFloat64()] args', { ctx });
  
  if (ctx.vals.length !== 1) { throw new Error('unexpected number of vals'); }
  
  const rem = ctx.storagePtr % 8;
  if (rem !== 0) { ctx.storagePtr += (8 - rem); }
  
  _requireValidNumericPrimitive.bind('f64', ctx.vals[0]);
  new DataView(ctx.memory.buffer).setFloat64(ctx.storagePtr, ctx.vals[0], true);
  
  ctx.storagePtr += 8;
}

function _lowerFlatStringAny(ctx) {
  switch (ctx.stringEncoding) {
    case 'utf8':
    return _lowerFlatStringUTF8(ctx);
    case 'utf16':
    return _lowerFlatStringUTF16(ctx);
    default:
    throw new Error(`missing/unrecognized/unsupported string encoding [${ctx.stringEncoding}]`);
  }
}

function _lowerFlatStringUTF8(ctx) {
  _debugLog('[_lowerFlatStringUTF8()] args', ctx);
  if (!ctx.realloc) { throw new Error('missing realloc during flat string lower'); }
  
  const s = ctx.vals[0];
  const { ptr, codepoints } = _utf8AllocateAndEncode(ctx.vals[0], ctx.realloc, ctx.memory);
  
  const view = new DataView(ctx.memory.buffer);
  view.setUint32(ctx.storagePtr, ptr, true);
  view.setUint32(ctx.storagePtr + 4, codepoints, true);
  
  ctx.storagePtr += 8;
}

function _lowerFlatStringUTF16(ctx) {
  _debugLog('[_lowerFlatStringUTF16()] args', { ctx });
  if (!ctx.realloc) { throw new Error('missing realloc during flat string lower'); }
  
  const s = ctx.vals[0];
  const { ptr, len, codepoints } = _utf16AllocateAndEncode(ctx.vals[0], ctx.realloc, ctx.memory);
  
  const view = new DataView(ctx.memory.buffer);
  view.setUint32(ctx.storagePtr, ptr, true);
  view.setUint32(ctx.storagePtr + 4, codepoints, true);
  
  const bytes = new Uint16Array(ctx.memory.buffer, start, codeUnits);
  if (ctx.memory.buffer.byteLength < start + bytes.byteLength) {
    throw new Error('memory out of bounds');
  }
  if (ctx.storageLen !== undefined && ctx.storageLen !== bytes.byteLength) {
    throw new Error(`storage length [${ctx.storageLen}] != [${bytes.byteLength}])`);
  }
  new Uint16Array(ctx.memory.buffer, ctx.storagePtr).set(bytes);
  
  ctx.storagePtr += len;
}

function _lowerFlatRecord(meta) {
  const { fieldMetas, size32: recordSize32, align32: recordAlign32 } = meta;
  return function _lowerFlatRecordInner(ctx) {
    _debugLog('[_lowerFlatRecord()] args', { ctx });
    
    const originalPtr = ctx.storagePtr;
    const r = ctx.vals[0];
    for (const [tag, lowerFn, size32, align32 ] of fieldMetas) {
      const rem = ctx.storagePtr % align32;
      if (rem !== 0) { ctx.storagePtr += align32 - rem; }
      
      const fieldPtr = ctx.storagePtr;
      ctx.vals = [r[tag]];
      lowerFn(ctx);
      
      ctx.storagePtr = Math.max(ctx.storagePtr, fieldPtr + size32);
    }
    
    ctx.storagePtr = Math.max(ctx.storagePtr, originalPtr + recordSize32);
    
    const rem = ctx.storagePtr % recordAlign32;
    if (rem !== 0) {
      ctx.storagePtr += recordAlign32 - rem;
    }
  }
}

function _lowerFlatVariant(meta) {
  const { variantSize32, variantAlign32, variantPayloadOffset32, caseMetas } = meta;
  
  let caseLookup = {};
  for (const [idx, meta] of caseMetas.entries()) {
    let tag = meta[0];
    caseLookup[tag] = { discriminant: idx, meta };
  }
  
  return function _lowerFlatVariantInner(ctx) {
    _debugLog('[_lowerFlatVariant()] args', { ctx });
    
    const { tag, val } = ctx.vals[0];
    const variantCase = caseLookup[tag];
    if (!variantCase) {
      throw new Error(`missing tag [${tag}] (valid tags: ${Object.keys(caseLookup)})`);
    }
    
    const [ _tag, lowerFn, caseSize32, caseAlign32, caseFlatCount ] = variantCase.meta;
    
    const originalPtr = ctx.storagePtr;
    ctx.vals = [variantCase.discriminant];
    let discLowerRes;
    if (caseMetas.length < 256) {
      discLowerRes = _lowerFlatU8(ctx);
    } else if (caseMetas.length >= 256 && caseMetas.length < 65536) {
      discLowerRes = _lowerFlatU16(ctx);
    } else if (caseMetas.length >= 65536 && caseMetas.length < 4_294_967_296) {
      discLowerRes = _lowerFlatU32(ctx);
    } else {
      throw new Error(`unsupported number of cases [${caseMetas.length}]`);
    }
    
    const payloadOffsetPtr = originalPtr + variantPayloadOffset32;
    ctx.storagePtr = payloadOffsetPtr;
    ctx.vals = [val];
    if (lowerFn) { lowerFn(ctx); }
    
    ctx.storagePtr = Math.max(ctx.storagePtr, originalPtr + variantSize32);
    
    const rem = ctx.storagePtr % variantAlign32;
    if (rem !== 0) { ctx.storagePtr += varianttAlign32 - rem; }
  }
}

function _lowerFlatList(meta) {
  const {
    elemLowerFn,
    knownLen,
    size32,
    align32,
    elemSize32,
    elemAlign32,
  } = meta;
  
  if (!elemLowerFn) { throw new TypeError("missing/invalid element lower fn for list"); }
  
  return function _lowerFlatListInner(ctx) {
    _debugLog('[_lowerFlatList()] args', { ctx });
    
    if (ctx.useDirectParams) {
      if (ctx.params.length < 2) { throw new Error('insufficient params left to lower list'); }
      const storagePtr = ctx.params[0];
      const elemCount = ctx.params[1];
      ctx.params = ctx.params.slice(2);
      
      const list = ctx.vals[0];
      if (!list) { throw new Error("missing direct param value"); }
      
      const lowerCtx = {
        storagePtr,
        memory: ctx.memory,
        stringEncoding: ctx.stringEncoding,
      };
      for (let idx = 0; idx < list.length; idx++) {
        const elemPtr = storagePtr + idx * elemSize32;
        lowerCtx.storagePtr = elemPtr;
        lowerCtx.vals = list.slice(idx, idx+1);
        elemLowerFn(lowerCtx);
        lowerCtx.storagePtr = Math.max(lowerCtx.storagePtr, elemPtr + elemSize32);
      }
      ctx.storagePtr = lowerCtx.storagePtr;
      
      // TODO: implement parma-only known-length processing
      
      return;
    }
    
    // TODO(fix): is it possible to get a vals that are a addr and length here from
    // a component lower?
    
    const elems = ctx.vals[0];
    if (knownLen === undefined) {
      // unknown length
      if (!ctx.realloc) { throw new Error('missing realloc during flat string lower'); }
      const dataPtr = ctx.realloc(0, 0, elemAlign32, elemSize32 * elems.length);
      
      ctx.vals[0] = dataPtr;
      _lowerFlatU32(ctx);
      
      ctx.vals[0] = elems.length;
      _lowerFlatU32(ctx);
      
      const origPtr = ctx.storagePtr;
      ctx.storagePtr = dataPtr;
      
      for (const [idx, elem] of elems.entries()) {
        const elemPtr = dataPtr + idx * elemSize32;
        ctx.storagePtr = elemPtr;
        ctx.vals = [elem];
        elemLowerFn(ctx);
        ctx.storagePtr = Math.max(ctx.storagePtr, elemPtr + elemSize32);
      }
      
      ctx.storagePtr = origPtr;
      
    } else {
      // known length
      
      if (elems.length !== knownLen) {
        throw new TypeError(`invalid list input of length [${elems.length}], must be length [${knownLen}]`);
      }
      
      const originalPtr = ctx.storagePtr;
      for (const [idx, elem] of elems.entries()) {
        const elemPtr = originalPtr + idx * elemSize32;
        ctx.storagePtr = elemPtr;
        ctx.vals = [elem];
        elemLowerFn(ctx);
        ctx.storagePtr = Math.max(ctx.storagePtr, elemPtr + elemSize32);
      }
    }
    
    // TODO(fix): special case for u8/u16/etc, we can do a direct copy
    
    const totalSizeBytes = elems.length * size32;
    if (ctx.storageLen !== undefined && totalSizeBytes > ctx.storageLen) {
      throw new Error('not enough storage remaining for list flat lower');
    }
  }
}

function _lowerFlatTuple(meta) {
  const { elemLowerMetas, size32: tupleSize32, align32: tupleAlign32 } = meta;
  return function _lowerFlatTupleInner(ctx) {
    _debugLog('[_lowerFlatTuple()] args', { ctx });
    const originalPtr = ctx.storagePtr;
    const tuple = ctx.vals[0];
    for (const [idx, [ lowerFn, size32, align32 ]]  of elemLowerMetas.entries()) {
      const rem = ctx.storagePtr % align32;
      if (rem !== 0) { ctx.storagePtr += align32 - rem; }
      
      const elemPtr = ctx.storagePtr;
      ctx.vals = [tuple[idx]];
      lowerFn(ctx);
      ctx.storagePtr = Math.max(ctx.storagePtr, elemPtr + size32);
    }
    
    ctx.storagePtr = Math.max(ctx.storagePtr, originalPtr + tupleSize32);
    
    const rem = ctx.storagePtr % tupleAlign32;
    if (rem !== 0) {
      ctx.storagePtr += tupleAlign32 - rem;
    }
  }
}

function _lowerFlatEnum(meta) {
  const f = _lowerFlatVariant(meta);
  return function _lowerFlatEnumInner(ctx) {
    _debugLog('[_lowerFlatEnum()] args', { ctx });
    
    const v = ctx.vals[0];
    const isNotEnumObject = typeof v !== 'object'
    || Object.keys(v).length !== 2
    || !('tag' in v);
    if (isNotEnumObject) {
      ctx.vals[0] = { tag: v };
    }
    
    f(ctx);
  }
}

function _lowerFlatOption(meta) {
  const f = _lowerFlatVariant(meta);
  return function _lowerFlatOptionInner(ctx) {
    _debugLog('[_lowerFlatOption()] args', { ctx });
    
    const v = ctx.vals[0];
    if (v === null || v === undefined) {
      ctx.vals[0] = { tag: 'none' };
    } else {
      const isNotOptionObject = typeof v !== 'object'
      || Object.keys(v).length !== 2
      || !('tag' in v)
      || !(v.tag === 'some' || v.tag === 'none')
      || !('val' in v);
      if (isNotOptionObject) {
        ctx.vals[0] = { tag: 'some', val: v };
      }
    }
    
    f(ctx);
  }
}

function _lowerFlatResult(meta) {
  const f = _lowerFlatVariant(meta);
  return function _lowerFlatResultInner(ctx) {
    _debugLog('[_lowerFlatResult()] args', { ctx });
    
    const v = ctx.vals[0];
    const isNotResultObject = typeof v !== 'object'
    || Object.keys(v).length !== 2
    || !('tag' in v)
    || !('ok' === v.tag || 'err' === v.tag)
    || !('val' in v);
    if (isNotResultObject) {
      ctx.vals[0] = { tag: 'ok', val: v };
    }
    
    f(ctx);
  };
}

function _lowerFlatOwn(meta) {
  const { lowerFn, componentIdx } = meta;
  
  return function _lowerFlatOwnInner(ctx) {
    _debugLog('[_lowerFlatOwn()] args', { ctx });
    const { createFn } = ctx;
    
    if (ctx.componentIdx !== componentIdx) {
      throw new Error(`component index mismatch (expected [${componentIdx}], lift called from [${ctx.componentIdx}])`);
    }
    
    const obj = ctx.vals[0];
    if (obj === undefined || obj === null) { throw new Error('missing resource'); }
    const handle = lowerFn(obj);
    
    ctx.vals[0] = handle;
    _lowerFlatU32(ctx);
  };
}

const STREAMS = new RepTable({ target: 'global stream map' });
const ASYNC_STATE = new Map();

function getOrCreateAsyncState(componentIdx, init) {
  if (!ASYNC_STATE.has(componentIdx)) {
    const newState = new ComponentAsyncState({ componentIdx });
    ASYNC_STATE.set(componentIdx, newState);
  }
  return ASYNC_STATE.get(componentIdx);
}

class ComponentAsyncState {
  static EVENT_HANDLER_EVENTS = [ 'backpressure-change' ];
  
  #componentIdx;
  #callingAsyncImport = false;
  #syncImportWait = promiseWithResolvers();
  #locked = false;
  #parkedTasks = new Map();
  #suspendedTasksByTaskID = new Map();
  #suspendedTaskIDs = [];
  #errored = null;
  
  #backpressure = 0;
  #backpressureWaiters = 0n;
  
  #handlerMap = new Map();
  #nextHandlerID = 0n;
  
  #tickLoop = null;
  #tickLoopInterval = null;
  
  #onExclusiveReleaseHandlers = [];
  
  mayLeave = true;
  
  handles;
  subtasks;
  
  constructor(args) {
    this.#componentIdx = args.componentIdx;
    this.handles = new RepTable({ target: `component [${this.#componentIdx}] handles (waitable objects)` });
    this.subtasks = new RepTable({ target: `component [${this.#componentIdx}] subtasks` });
  };
  
  componentIdx() { return this.#componentIdx; }
  
  errored() { return this.#errored !== null; }
  setErrored(err) {
    _debugLog('[ComponentAsyncState#setErrored()] component errored', { err, componentIdx: this.#componentIdx });
    if (this.#errored) { return; }
    if (!err) {
      err = new Error('error elswehere (see other component instance error)')
      err.componentIdx = this.#componentIdx;
    }
    this.#errored = err;
  }
  
  callingSyncImport(val) {
    if (val === undefined) { return this.#callingAsyncImport; }
    if (typeof val !== 'boolean') { throw new TypeError('invalid setting for async import'); }
    const prev = this.#callingAsyncImport;
    this.#callingAsyncImport = val;
    if (prev === true && this.#callingAsyncImport === false) {
      this.#notifySyncImportEnd();
    }
  }
  
  #notifySyncImportEnd() {
    const existing = this.#syncImportWait;
    this.#syncImportWait = promiseWithResolvers();
    existing.resolve();
  }
  
  async waitForSyncImportCallEnd() {
    await this.#syncImportWait.promise;
  }
  
  setBackpressure(v) {
    this.#backpressure = v;
    return this.#backpressure
  }
  getBackpressure() { return this.#backpressure; }
  
  incrementBackpressure() {
    const current = this.#backpressure;
    if (current < 0 || current > 2**16) {
      throw new Error(`invalid current backpressure value [${current}]`);
    }
    const newValue = this.getBackpressure() + 1;
    if (newValue >= 2**16) {
      throw new Error(`invalid new backpressure value [${newValue}], overflow`);
    }
    return this.setBackpressure(newValue);
  }
  
  decrementBackpressure() {
    const current = this.#backpressure;
    if (current < 0 || current > 2**16) {
      throw new Error(`invalid current backpressure value [${current}]`);
    }
    const newValue = Math.max(0, current - 1);
    if (newValue < 0) {
      throw new Error(`invalid new backpressure value [${newValue}], underflow`);
    }
    return this.setBackpressure(newValue);
  }
  hasBackpressure() { return this.#backpressure > 0; }
  
  waitForBackpressure() {
    let backpressureCleared = false;
    const cstate = this;
    cstate.addBackpressureWaiter();
    const handlerID = this.registerHandler({
      event: 'backpressure-change',
      fn: (bp) => {
        if (bp === 0) {
          cstate.removeHandler(handlerID);
          backpressureCleared = true;
        }
      }
    });
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (backpressureCleared) { return; }
        clearInterval(interval);
        cstate.removeBackpressureWaiter();
        resolve(null);
      }, 0);
    });
  }
  
  registerHandler(args) {
    const { event, fn } = args;
    if (!event) { throw new Error("missing handler event"); }
    if (!fn) { throw new Error("missing handler fn"); }
    
    if (!ComponentAsyncState.EVENT_HANDLER_EVENTS.includes(event)) {
      throw new Error(`unrecognized event handler [${event}]`);
    }
    
    const handlerID = this.#nextHandlerID++;
    let handlers = this.#handlerMap.get(event);
    if (!handlers) {
      handlers = [];
      this.#handlerMap.set(event, handlers)
    }
    
    handlers.push({ id: handlerID, fn, event });
    return handlerID;
  }
  
  removeHandler(args) {
    const { event, handlerID } = args;
    const registeredHandlers = this.#handlerMap.get(event);
    if (!registeredHandlers) { return; }
    const found = registeredHandlers.find(h => h.id === handlerID);
    if (!found) { return; }
    this.#handlerMap.set(event, this.#handlerMap.get(event).filter(h => h.id !== handlerID));
  }
  
  getBackpressureWaiters() { return this.#backpressureWaiters; }
  addBackpressureWaiter() { this.#backpressureWaiters++; }
  removeBackpressureWaiter() {
    this.#backpressureWaiters--;
    if (this.#backpressureWaiters < 0) {
      throw new Error("unexepctedly negative number of backpressure waiters");
    }
  }
  
  isExclusivelyLocked() { return this.#locked === true; }
  setLocked(locked) {
    this.#locked = locked;
  }
  
  exclusiveLock() {
    _debugLog('[ComponentAsyncState#exclusiveLock()]', {
      locked: this.#locked,
      componentIdx: this.#componentIdx,
    });
    this.setLocked(true);
  }
  
  exclusiveRelease() {
    _debugLog('[ComponentAsyncState#exclusiveRelease()] args', {
      locked: this.#locked,
      componentIdx: this.#componentIdx,
    });
    this.setLocked(false);
    
    this.#onExclusiveReleaseHandlers = this.#onExclusiveReleaseHandlers.filter(v => !!v);
    for (const [idx, f] of this.#onExclusiveReleaseHandlers.entries()) {
      try {
        this.#onExclusiveReleaseHandlers[idx] = null;
        f();
      } catch (err) {
        _debugLog("error while executing handler for next exclusive release", err);
        throw err;
      }
    }
  }
  
  onNextExclusiveRelease(fn) {
    _debugLog('[ComponentAsyncState#()onNextExclusiveRelease] registering');
    this.#onExclusiveReleaseHandlers.push(fn);
  }
  
  // nextTaskPromise & nextTaskQueue are used to await current task completion and queues
  // any tasks attempting to enter() and complete.
  //
  // see: nextTaskExecutionSlot()
  //
  // TODO(threads): this should be unnecessary once threads are properly implemented,
  // as the task.enter() logic should suffice (it should be guaranteed that we cannot re-enter
  // unless the task in question is the current task in the thread execution, and only one can
  // run at a time)
  #nextTaskPromise = Promise.resolve(true);
  #nextTaskQueue = [];
  
  async nextTaskExecutionSlot(args) {
    const { task } = args;
    
    const placeholder = {
      completed: false,
      task,
      promise: task.exitPromise().then(() => {
        placeholder.completed = true;
      }),
    };
    this.#nextTaskQueue.push(placeholder);
    
    let next;
    while (true) {
      await this.#nextTaskPromise;
      
      next = this.#nextTaskQueue.find(placeholder => !placeholder.completed);
      
      // This task is next in the queue, we can continue
      if (next === undefined || next === placeholder) {
        this.#nextTaskPromise = next.promise;
        if (this.#nextTaskQueue.length > 1000) {
          this.#nextTaskQueue = this.#nextTaskQueue.filter(p => !p.completed);
          if (this.#nextTaskQueue.length > 1000) {
            _debugLog('[ComponentAsyncState#()nextTaskExecutionSlot] next task queue length > 1000 even after cleanup, tasks may be leaking');
          }
        }
        break;
      }
      
      // If we get here, this task was *not* next in the queue, continue waiting
      // (at this point the task that *is* next will likely have already set itself
      // as this.#nextTaskPromise)
    }
  }
  
  #getSuspendedTaskMeta(taskID) {
    return this.#suspendedTasksByTaskID.get(taskID);
  }
  
  #removeSuspendedTaskMeta(taskID) {
    _debugLog('[ComponentAsyncState#removeSuspendedTaskMeta()] removing suspended task', {
      taskID,
      componentIdx: this.#componentIdx,
    });
    const idx = this.#suspendedTaskIDs.findIndex(t => t === taskID);
    const meta = this.#suspendedTasksByTaskID.get(taskID);
    this.#suspendedTaskIDs[idx] = null;
    this.#suspendedTasksByTaskID.delete(taskID);
    return meta;
  }
  
  #addSuspendedTaskMeta(meta) {
    if (!meta) { throw new Error('missing task meta'); }
    const taskID = meta.taskID;
    this.#suspendedTasksByTaskID.set(taskID, meta);
    this.#suspendedTaskIDs.push(taskID);
    if (this.#suspendedTasksByTaskID.size < this.#suspendedTaskIDs.length - 10) {
      this.#suspendedTaskIDs = this.#suspendedTaskIDs.filter(t => t !== null);
    }
  }
  
  // TODO(threads): readyFn is normally on the thread
  suspendTask(args) {
    const { task, readyFn } = args;
    const taskID = task.id();
    const componentIdx = task.componentIdx();
    _debugLog('[ComponentAsyncState#suspendTask()]', {
      taskID,
      componentIdx: this.#componentIdx,
      taskEntryFnName: task.entryFnName(),
      subtask: task.getParentSubtask(),
    });
    
    if (componentIdx !== this.#componentIdx) {
      throw new Error('assert: task component idx should match async state');
    }
    
    if (this.#getSuspendedTaskMeta(taskID)) {
      throw new Error(`task [${taskID}] already suspended`);
    }
    
    const { promise, resolve, reject } = promiseWithResolvers();
    this.#addSuspendedTaskMeta({
      task,
      taskID,
      readyFn,
      resume: () => {
        _debugLog('[ComponentAsyncState] resuming suspended task', {
          taskID,
          componentIdx: this.#componentIdx,
        });
        // TODO(threads): it's thread cancellation we should be checking for below, not task
        resolve(!task.isCancelled());
      },
    });
    
    this.runTickLoop();
    
    return promise;
  }
  
  resumeTaskByID(taskID) {
    const meta = this.#removeSuspendedTaskMeta(taskID);
    if (!meta) { return; }
    if (meta.taskID !== taskID) { throw new Error('task ID does not match'); }
    meta.resume();
  }
  
  async runTickLoop() {
    if (this.#tickLoop !== null) { return; }
    this.#tickLoop = 1;
    setTimeout(async () => {
      let done = this.tick();
      while (!done) {
        await new Promise((resolve) => setTimeout(resolve, 30));
        done = this.tick();
      }
      this.#tickLoop = null;
    }, 10);
  }
  
  tick() {
    // _debugLog('[ComponentAsyncState#tick()]', { suspendedTaskIDs: this.#suspendedTaskIDs });
    
    const resumableTasks = this.#suspendedTaskIDs.filter(t => t !== null);
    for (const taskID of resumableTasks) {
      const meta = this.#suspendedTasksByTaskID.get(taskID);
      if (!meta || !meta.readyFn) {
        throw new Error(`missing/invalid task despite ID [${taskID}] being present`);
      }
      
      // If the task failed via any means, allow the task to resume because
      // it's been cancelled -- the callback should immediately exit as well
      if (meta.task.isRejected()) {
        _debugLog('[ComponentAsyncState#tick()] detected task rejection, leaving early', { meta });
        this.resumeTaskByID(taskID);
        return;
      }
      
      const isReady = meta.readyFn();
      if (!isReady) { continue; }
      
      _debugLog('[ComponentAsyncState#tick()] resuming task via tick', {
        taskID,
        componentIdx: this.#componentIdx,
      });
      this.resumeTaskByID(taskID);
    }
    
    return this.#suspendedTaskIDs.filter(t => t !== null).length === 0;
  }
  
  addStreamEndToTable(args) {
    _debugLog('[ComponentAsyncState#addStreamEnd()] args', args);
    const { tableIdx, streamEnd } = args;
    if (typeof streamEnd === 'number') { throw new Error("INSERTING BAD STREAMEND"); }
    
    let { table, componentIdx } = STREAM_TABLES[tableIdx];
    if (componentIdx === undefined || !table) {
      throw new Error(`invalid global stream table state for table [${tableIdx}]`);
    }
    
    const handle = table.insert(streamEnd);
    streamEnd.setHandle(handle);
    streamEnd.setStreamTableIdx(tableIdx);
    
    const cstate = getOrCreateAsyncState(componentIdx);
    const waitableIdx = cstate.handles.insert(streamEnd);
    streamEnd.setWaitableIdx(waitableIdx);
    
    _debugLog('[ComponentAsyncState#addStreamEnd()] added stream end', {
      tableIdx,
      table,
      handle,
      streamEnd,
      destComponentIdx: componentIdx,
    });
    
    return { handle, waitableIdx };
  }
  
  createWaitable(args) {
    return new Waitable({ target: args?.target, });
  }
  
  createReadableStreamEnd(args) {
    _debugLog('[ComponentAsyncState#createStreamEnd()] args', args);
    const { tableIdx, elemMeta, hostInjectFn } = args;
    
    const { table: localStreamTable, componentIdx } = STREAM_TABLES[tableIdx];
    if (!localStreamTable) {
      throw new Error(`missing global stream table lookup for table [${tableIdx}] while creating stream`);
    }
    if (componentIdx !== this.#componentIdx) {
      throw new Error('component idx mismatch while creating stream');
    }
    
    const waitable = this.createWaitable();
    const streamEnd = new StreamReadableEnd({
      tableIdx,
      elemMeta,
      hostInjectFn,
      pendingBufferMeta: {},
      target: `stream read end (lowered, @init)`,
      waitable,
    });
    
    streamEnd.setWaitableIdx(this.handles.insert(streamEnd));
    streamEnd.setHandle(localStreamTable.insert(streamEnd));
    if (streamEnd.streamTableIdx() !== tableIdx) {
      throw new Error("unexpectedly mismatched stream table");
    }
    const streamEndWaitableIdx = streamEnd.waitableIdx();
    const streamEndHandle = streamEnd.handle();
    waitable.setTarget(`waitable for stream read end (lowered, waitable [${streamEndWaitableIdx}])`);
    streamEnd.setTarget(`stream read end (lowered, waitable [${streamEndWaitableIdx}])`);
    
    return {
      waitableIdx: streamEndWaitableIdx,
      handle: streamEndHandle,
      streamEnd,
    };
  }
  
  createStream(args) {
    _debugLog('[ComponentAsyncState#createStream()] args', args);
    const { tableIdx, elemMeta, hostInjectFn } = args;
    if (tableIdx === undefined) { throw new Error("missing table idx while adding stream"); }
    if (elemMeta === undefined) { throw new Error("missing element metadata while adding stream"); }
    
    const { table: localStreamTable, componentIdx } = STREAM_TABLES[tableIdx];
    if (!localStreamTable) {
      throw new Error(`missing global stream table lookup for table [${tableIdx}] while creating stream`);
    }
    if (componentIdx !== this.#componentIdx) {
      throw new Error('component idx mismatch while creating stream');
    }
    
    const readWaitable = this.createWaitable();
    const writeWaitable = this.createWaitable();
    
    const stream = new InternalStream({
      tableIdx,
      elemMeta,
      readWaitable,
      writeWaitable,
      hostInjectFn,
    });
    stream.setGlobalStreamMapRep(STREAMS.insert(stream));
    
    const writeEnd = stream.writeEnd();
    writeEnd.setWaitableIdx(this.handles.insert(writeEnd));
    writeEnd.setHandle(localStreamTable.insert(writeEnd));
    if (writeEnd.streamTableIdx() !== tableIdx) { throw new Error("unexpectedly mismatched stream table"); }
    
    const writeEndWaitableIdx = writeEnd.waitableIdx();
    const writeEndHandle = writeEnd.handle();
    writeWaitable.setTarget(`waitable for stream write end (waitable [${writeEndWaitableIdx}])`);
    writeEnd.setTarget(`stream write end (waitable [${writeEndWaitableIdx}])`);
    
    const readEnd = stream.readEnd();
    readEnd.setWaitableIdx(this.handles.insert(readEnd));
    readEnd.setHandle(localStreamTable.insert(readEnd));
    if (readEnd.streamTableIdx() !== tableIdx) { throw new Error("unexpectedly mismatched stream table"); }
    
    const readEndWaitableIdx = readEnd.waitableIdx();
    const readEndHandle = readEnd.handle();
    readWaitable.setTarget(`waitable for read end (waitable [${readEndWaitableIdx}])`);
    readEnd.setTarget(`stream read end (waitable [${readEndWaitableIdx}])`);
    
    return {
      writeEnd,
      writeEndWaitableIdx,
      writeEndHandle,
      readEndWaitableIdx,
      readEndHandle,
      readEnd,
    };
  }
  
  getStreamEnd(args) {
    _debugLog('[ComponentAsyncState#getStreamEnd()] args', args);
    const { tableIdx, streamEndHandle, streamEndWaitableIdx } = args;
    if (tableIdx === undefined) {
      throw new Error('missing table idx while getting stream end');
    }
    
    const { table, componentIdx } = STREAM_TABLES[tableIdx];
    const cstate = getOrCreateAsyncState(componentIdx);
    
    let streamEnd;
    if (streamEndWaitableIdx !== undefined) {
      streamEnd = cstate.handles.get(streamEndWaitableIdx);
    } else if (streamEndHandle !== undefined) {
      if (!table) { throw new Error(`missing/invalid table [${tableIdx}] while getting stream end`); }
      streamEnd = table.get(streamEndHandle);
    } else {
      throw new TypeError("must specify either waitable idx or handle to retrieve stream");
    }
    
    if (!streamEnd) {
      throw new Error(`missing stream end (tableIdx [${tableIdx}], handle [${streamEndHandle}], waitableIdx [${streamEndWaitableIdx}])`);
    }
    if (tableIdx && streamEnd.streamTableIdx() !== tableIdx) {
      throw new Error(`stream end table idx [${streamEnd.streamTableIdx()}] does not match [${tableIdx}]`);
    }
    
    return streamEnd;
  }
  
  deleteStreamEnd(args) {
    _debugLog('[ComponentAsyncState#deleteStreamEnd()] args', args);
    const { tableIdx, streamEndWaitableIdx } = args;
    if (tableIdx === undefined) { throw new Error("missing table idx while removing stream end"); }
    if (streamEndWaitableIdx === undefined) { throw new Error("missing stream idx while removing stream end"); }
    
    const { table, componentIdx } = STREAM_TABLES[tableIdx];
    const cstate = getOrCreateAsyncState(componentIdx);
    
    const streamEnd = cstate.handles.get(streamEndWaitableIdx);
    if (!streamEnd) {
      throw new Error(`missing stream end [${streamEndWaitableIdx}] in component handles while deleting stream`);
    }
    if (streamEnd.streamTableIdx() !== tableIdx) {
      throw new Error(`stream end table idx [${streamEnd.streamTableIdx()}] does not match [${tableIdx}]`);
    }
    
    let removed = cstate.handles.remove(streamEnd.waitableIdx());
    if (!removed) {
      throw new Error(`failed to remove stream end [${streamEndWaitableIdx}] waitable obj in component [${componentIdx}]`);
    }
    
    removed = table.remove(streamEnd.handle());
    if (!removed) {
      throw new Error(`failed to remove stream end with handle [${streamEnd.handle()}] from stream table [${tableIdx}] in component [${componentIdx}]`);
    }
    
    return streamEnd;
  }
  
  removeStreamEndFromTable(args) {
    _debugLog('[ComponentAsyncState#removeStreamEndFromTable()] args', args);
    
    const { tableIdx, streamWaitableIdx } = args;
    if (tableIdx === undefined) { throw new Error("missing table idx while removing stream end"); }
    if (streamWaitableIdx === undefined) {
      throw new Error("missing stream end waitable idx while removing stream end");
    }
    
    const { table, componentIdx } = STREAM_TABLES[tableIdx];
    if (!table) { throw new Error(`missing/invalid table [${tableIdx}] while removing stream end`); }
    
    const cstate = getOrCreateAsyncState(componentIdx);
    
    const streamEnd = cstate.handles.get(streamWaitableIdx);
    if (!streamEnd) {
      throw new Error(`missing stream end (handle [${streamWaitableIdx}], table [${tableIdx}])`);
    }
    const handle = streamEnd.handle();
    
    let removed = cstate.handles.remove(streamWaitableIdx);
    if (!removed) {
      throw new Error(`failed to remove streamEnd from handles (waitable idx [${streamWaitableIdx}]), component [${componentIdx}])`);
    }
    
    removed = table.remove(handle);
    if (!removed) {
      throw new Error(`failed to remove streamEnd from table (handle [${handle}]), table [${tableIdx}], component [${componentIdx}])`);
    }
    
    return streamEnd;
  }
  
  createFuture(args) {
    _debugLog('[ComponentAsyncState#createFuture()] args', args);
    const { tableIdx, elemMeta, hostInjectFn } = args;
    if (tableIdx === undefined) { throw new Error("missing table idx while adding future"); }
    if (elemMeta === undefined) { throw new Error("missing element metadata while adding future"); }
    
    const { table: futureTable, componentIdx } = FUTURE_TABLES[tableIdx];
    if (!futureTable) {
      throw new Error(`missing global future table lookup for table [${tableIdx}] while creating future`);
    }
    if (componentIdx !== this.#componentIdx) {
      throw new Error('component idx mismatch while creating future');
    }
    
    const readWaitable = this.createWaitable();
    const writeWaitable = this.createWaitable();
    
    const future = new InternalFuture({
      tableIdx,
      componentIdx: this.#componentIdx,
      elemMeta,
      readWaitable,
      writeWaitable,
      hostInjectFn,
    });
    future.setGlobalFutureMapRep(FUTURES.insert(future));
    
    const writeEnd = future.writeEnd();
    writeEnd.setWaitableIdx(this.handles.insert(writeEnd));
    writeEnd.setHandle(futureTable.insert(writeEnd));
    if (writeEnd.futureTableIdx() !== tableIdx) { throw new Error("unexpectedly mismatched future table"); }
    
    const writeEndWaitableIdx = writeEnd.waitableIdx();
    const writeEndHandle = writeEnd.handle();
    writeWaitable.setTarget(`waitable for future write end (waitable [${writeEndWaitableIdx}])`);
    writeEnd.setTarget(`future write end (waitable [${writeEndWaitableIdx}])`);
    
    const readEnd = future.readEnd();
    readEnd.setWaitableIdx(this.handles.insert(readEnd));
    readEnd.setHandle(futureTable.insert(readEnd));
    if (readEnd.futureTableIdx() !== tableIdx) { throw new Error("unexpectedly mismatched future table"); }
    
    const readEndWaitableIdx = readEnd.waitableIdx();
    const readEndHandle = readEnd.handle();
    readWaitable.setTarget(`waitable for read end (waitable [${readEndWaitableIdx}])`);
    readEnd.setTarget(`future read end (waitable [${readEndWaitableIdx}])`);
    
    return {
      writeEnd,
      writeEndWaitableIdx,
      writeEndHandle,
      readEndWaitableIdx,
      readEndHandle,
      readEnd,
    };
  }
  
  getFutureEnd(args) {
    _debugLog('[ComponentAsyncState#getFutureEnd()] args', args);
    const { tableIdx, futureEndHandle, futureEndWaitableIdx } = args;
    if (tableIdx === undefined) {
      throw new Error('missing table idx while getting future end');
    }
    
    const { table, componentIdx } = FUTURE_TABLES[tableIdx];
    const cstate = getOrCreateAsyncState(componentIdx);
    
    let futureEnd;
    if (futureEndWaitableIdx !== undefined) {
      futureEnd = cstate.handles.get(futureEndWaitableIdx);
    } else if (futureEndHandle !== undefined) {
      if (!table) { throw new Error(`missing/invalid table [${tableIdx}] while getting future end`); }
      futureEnd = table.get(futureEndHandle);
    } else {
      throw new TypeError("must specify either waitable idx or handle to retrieve future");
    }
    
    if (!futureEnd) {
      throw new Error(`missing future end (tableIdx [${tableIdx}], handle [${futureEndHandle}], waitableIdx [${futureEndWaitableIdx}])`);
    }
    if (tableIdx && futureEnd.futureTableIdx() !== tableIdx) {
      throw new Error(`future end table idx [${futureEnd.futureTableIdx()}] does not match [${tableIdx}]`);
    }
    
    return futureEnd;
  }
  
  removeFutureEndFromTable(args) {
    _debugLog('[ComponentAsyncState#removeFutureEndFromTable()] args', args);
    
    const { tableIdx, futureWaitableIdx } = args;
    if (tableIdx === undefined) { throw new Error("missing table idx while removing future end"); }
    if (futureWaitableIdx === undefined) {
      throw new Error("missing future end waitable idx while removing future end");
    }
    
    const { table, componentIdx } = FUTURE_TABLES[tableIdx];
    if (!table) { throw new Error(`missing/invalid table [${tableIdx}] while removing future end`); }
    
    const cstate = getOrCreateAsyncState(componentIdx);
    
    const futureEnd = cstate.handles.get(futureWaitableIdx);
    if (!futureEnd) {
      throw new Error(`missing future end (handle [${futureWaitableIdx}], table [${tableIdx}])`);
    }
    const handle = futureEnd.handle();
    
    let removed = cstate.handles.remove(futureWaitableIdx);
    if (!removed) {
      throw new Error(`failed to remove futureEnd from handles (waitable idx [${futureWaitableIdx}]), component [${componentIdx}])`);
    }
    
    removed = table.remove(handle);
    if (!removed) {
      throw new Error(`failed to remove futureEnd from table (handle [${handle}]), table [${tableIdx}], component [${componentIdx}])`);
    }
    
    return futureEnd;
  }
  
}

function _ComponentStateSetAllError() {
  _debugLog('[_ComponentStateSetAllError()]');
  for (const state of ASYNC_STATE.values()) {
    state.setErrored();
  }
}

function _storeEventInComponentMemory(args) {
  _debugLog('[_storeEventInComponentMemory()] args', args);
  const { memory, ptr, event } = args;
  
  if (!memory) { throw new Error('unexpectedly missing memory'); }
  if (ptr === undefined || ptr === null) { throw new Error('unexpectedly missing pointer'); }
  if (!event) { throw new Error('event object missing'); }
  if (event.code === undefined) { throw new Error('invalid event object, missing code'); }
  if (event.payload0 === undefined) { throw new Error('invalid event object, missing payload0'); }
  if (event.payload1 === undefined) { throw new Error('invalid event object, missing payload1'); }
  
  const dv = new DataView(memory.buffer);
  dv.setUint32(ptr, event.payload0, true);
  dv.setUint32(ptr + 4, event.payload1, true);
  
  return event.code;
}

const base64Compile = str => WebAssembly.compile(
typeof Buffer !== 'undefined'
? Buffer.from(str, 'base64')
: Uint8Array.from(atob(str), b => b.charCodeAt(0))
);


const isNode = typeof process !== 'undefined' && process.versions && process.versions.node;
let _fs;
async function fetchCompile (url) {
  if (isNode) {
    _fs = _fs || await import('node:fs/promises');
    return WebAssembly.compile(await _fs.readFile(url));
  }
  return fetch(url).then(WebAssembly.compileStreaming);
}

const symbolCabiDispose = Symbol.for('cabiDispose');

const symbolRscHandle = Symbol('handle');

const symbolRscRep = Symbol.for('cabiRep');

const HANDLE_TABLES= [];


function getErrorPayload(e) {
  if (e && hasOwnProperty.call(e, 'payload')) return e.payload;
  if (e instanceof Error) throw e;
  return e;
}

const isLE = new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;

const hasOwnProperty = Object.prototype.hasOwnProperty;

const instantiateCore = WebAssembly.instantiate;


let exports0;

const _trampoline0 = function() {
  _debugLog('[iface="semio:framework/pure@1.0.0", function="now-ms"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'nowMs',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => nowMs(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  _debugLog('[iface="semio:framework/pure@1.0.0", function="now-ms"][Instruction::Return]', {
    funcName: 'now-ms',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([toInt64(ret)]);
  task.exit();
  return toInt64(ret);
}
_trampoline0.fnName = 'semio:framework/pure@1.0.0#nowMs';

const _trampoline12 = function(arg0) {
  let variant0;
  switch (arg0) {
    case 0: {
      variant0= {
        tag: 'ok',
        val: undefined
      };
      break;
    }
    case 1: {
      variant0= {
        tag: 'err',
        val: undefined
      };
      break;
    }
    default: {
      throw new TypeError('invalid variant discriminant for expected');
    }
  }
  _debugLog('[iface="wasi:cli/exit@0.2.9", function="exit"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'exit',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => exit(variant0),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  _debugLog('[iface="wasi:cli/exit@0.2.9", function="exit"][Instruction::Return]', {
    funcName: 'exit',
    paramCount: 0,
    async: false,
    postReturn: false
  });
  task.resolve([ret]);
  task.exit();
}
_trampoline12.fnName = 'wasi:cli/exit@0.2.9#exit';

const handleTable0 = [T_FLAG, 0];
handleTable0._createdReps = new Set();


const captureTable0= new Map();
let captureCnt0= 0;

HANDLE_TABLES[0] = handleTable0;

const _trampoline13 = function(arg0) {
  var handle1 = arg0;
  
  var rep2 = handleTable0[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable0.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(Pollable.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:io/poll@0.2.9", function="[method]pollable.block"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'block',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.block(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  for (const entry of curResourceBorrows) {
    const rsc = entry.rsc ?? entry;
    if (entry.drop) {
      if (rsc[symbolRscHandle]) {
        entry.drop(rsc[symbolRscHandle]);
      }
    }
    rsc[symbolRscHandle] = undefined;
  }
  curResourceBorrows = [];
  _debugLog('[iface="wasi:io/poll@0.2.9", function="[method]pollable.block"][Instruction::Return]', {
    funcName: '[method]pollable.block',
    paramCount: 0,
    async: false,
    postReturn: false
  });
  task.resolve([ret]);
  task.exit();
}
_trampoline13.fnName = 'wasi:io/poll@0.2.9#block';

const handleTable3 = [T_FLAG, 0];
handleTable3._createdReps = new Set();


const captureTable3= new Map();
let captureCnt3= 0;

HANDLE_TABLES[3] = handleTable3;

const _trampoline14 = function(arg0) {
  var handle1 = arg0;
  
  var rep2 = handleTable3[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable3.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(OutputStream.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:io/streams@0.2.9", function="[method]output-stream.subscribe"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'subscribe',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.subscribe(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  for (const entry of curResourceBorrows) {
    const rsc = entry.rsc ?? entry;
    if (entry.drop) {
      if (rsc[symbolRscHandle]) {
        entry.drop(rsc[symbolRscHandle]);
      }
    }
    rsc[symbolRscHandle] = undefined;
  }
  curResourceBorrows = [];
  
  if (!(ret instanceof Pollable)) {
    throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
  }
  var handle3 = ret[symbolRscHandle];
  if (!handle3) {
    const rep = ret[symbolRscRep] || ++captureCnt0;
    captureTable0.set(rep, ret);
    handle3 = rscTableCreateOwn(handleTable0, rep);
  }
  
  _debugLog('[iface="wasi:io/streams@0.2.9", function="[method]output-stream.subscribe"][Instruction::Return]', {
    funcName: '[method]output-stream.subscribe',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([handle3]);
  task.exit();
  return handle3;
}
_trampoline14.fnName = 'wasi:io/streams@0.2.9#subscribe';

const handleTable2 = [T_FLAG, 0];
handleTable2._createdReps = new Set();


const captureTable2= new Map();
let captureCnt2= 0;

HANDLE_TABLES[2] = handleTable2;

const _trampoline15 = function() {
  _debugLog('[iface="wasi:cli/stdin@0.2.9", function="get-stdin"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'getStdin',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => getStdin(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  
  if (!(ret instanceof InputStream)) {
    throw new TypeError('Resource error: Not a valid \"InputStream\" resource.');
  }
  var handle0 = ret[symbolRscHandle];
  if (!handle0) {
    const rep = ret[symbolRscRep] || ++captureCnt2;
    captureTable2.set(rep, ret);
    handle0 = rscTableCreateOwn(handleTable2, rep);
  }
  
  _debugLog('[iface="wasi:cli/stdin@0.2.9", function="get-stdin"][Instruction::Return]', {
    funcName: 'get-stdin',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([handle0]);
  task.exit();
  return handle0;
}
_trampoline15.fnName = 'wasi:cli/stdin@0.2.9#getStdin';

const _trampoline16 = function() {
  _debugLog('[iface="wasi:cli/stdout@0.2.9", function="get-stdout"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'getStdout',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => getStdout(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  
  if (!(ret instanceof OutputStream)) {
    throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
  }
  var handle0 = ret[symbolRscHandle];
  if (!handle0) {
    const rep = ret[symbolRscRep] || ++captureCnt3;
    captureTable3.set(rep, ret);
    handle0 = rscTableCreateOwn(handleTable3, rep);
  }
  
  _debugLog('[iface="wasi:cli/stdout@0.2.9", function="get-stdout"][Instruction::Return]', {
    funcName: 'get-stdout',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([handle0]);
  task.exit();
  return handle0;
}
_trampoline16.fnName = 'wasi:cli/stdout@0.2.9#getStdout';

const _trampoline17 = function() {
  _debugLog('[iface="wasi:cli/stderr@0.2.9", function="get-stderr"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'getStderr',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => getStderr(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  
  if (!(ret instanceof OutputStream)) {
    throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
  }
  var handle0 = ret[symbolRscHandle];
  if (!handle0) {
    const rep = ret[symbolRscRep] || ++captureCnt3;
    captureTable3.set(rep, ret);
    handle0 = rscTableCreateOwn(handleTable3, rep);
  }
  
  _debugLog('[iface="wasi:cli/stderr@0.2.9", function="get-stderr"][Instruction::Return]', {
    funcName: 'get-stderr',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([handle0]);
  task.exit();
  return handle0;
}
_trampoline17.fnName = 'wasi:cli/stderr@0.2.9#getStderr';

const _trampoline18 = function() {
  _debugLog('[iface="wasi:clocks/monotonic-clock@0.2.9", function="now"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'now',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => now(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  _debugLog('[iface="wasi:clocks/monotonic-clock@0.2.9", function="now"][Instruction::Return]', {
    funcName: 'now',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([toUint64(ret)]);
  task.exit();
  return toUint64(ret);
}
_trampoline18.fnName = 'wasi:clocks/monotonic-clock@0.2.9#now';

const _trampoline19 = function(arg0) {
  _debugLog('[iface="wasi:clocks/monotonic-clock@0.2.9", function="subscribe-duration"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'subscribeDuration',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => subscribeDuration(BigInt.asUintN(64, BigInt(arg0))),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  
  if (!(ret instanceof Pollable)) {
    throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
  }
  var handle0 = ret[symbolRscHandle];
  if (!handle0) {
    const rep = ret[symbolRscRep] || ++captureCnt0;
    captureTable0.set(rep, ret);
    handle0 = rscTableCreateOwn(handleTable0, rep);
  }
  
  _debugLog('[iface="wasi:clocks/monotonic-clock@0.2.9", function="subscribe-duration"][Instruction::Return]', {
    funcName: 'subscribe-duration',
    paramCount: 1,
    async: false,
    postReturn: false
  });
  task.resolve([handle0]);
  task.exit();
  return handle0;
}
_trampoline19.fnName = 'wasi:clocks/monotonic-clock@0.2.9#subscribeDuration';
let exports1;
let memory0;
let realloc0;
let realloc0Async;

const _trampoline20 = function(arg0) {
  _debugLog('[iface="wasi:random/insecure-seed@0.2.9", function="insecure-seed"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'insecureSeed',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => insecureSeed(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  var [tuple0_0, tuple0_1] = ret;
  dataView(memory0).setBigInt64(arg0 + 0, toUint64(tuple0_0), true);
  dataView(memory0).setBigInt64(arg0 + 8, toUint64(tuple0_1), true);
  _debugLog('[iface="wasi:random/insecure-seed@0.2.9", function="insecure-seed"][Instruction::Return]', {
    funcName: 'insecure-seed',
    paramCount: 0,
    async: false,
    postReturn: false
  });
  task.resolve([ret]);
  task.exit();
}
_trampoline20.fnName = 'wasi:random/insecure-seed@0.2.9#insecureSeed';

const _trampoline21 = function(arg0, arg1, arg2, arg3) {
  var ptr0 = arg0;
  var len0 = arg1;
  var result0 = TEXT_DECODER_UTF8.decode(new Uint8Array(memory0.buffer, ptr0, len0));
  var ptr1 = arg2;
  var len1 = arg3;
  var result1 = TEXT_DECODER_UTF8.decode(new Uint8Array(memory0.buffer, ptr1, len1));
  _debugLog('[iface="semio:framework/pure@1.0.0", function="log"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'log',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => log(result0, result1),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  _debugLog('[iface="semio:framework/pure@1.0.0", function="log"][Instruction::Return]', {
    funcName: 'log',
    paramCount: 0,
    async: false,
    postReturn: false
  });
  task.resolve([ret]);
  task.exit();
}
_trampoline21.fnName = 'semio:framework/pure@1.0.0#log';

const _trampoline29 = function(arg0, arg1, arg2) {
  var len3 = arg1;
  var base3 = arg0;
  var result3 = [];
  for (let i = 0; i < len3; i++) {
    const base = base3 + i * 4;
    var handle1 = dataView(memory0).getInt32(base + 0, true);
    
    var rep2 = handleTable0[(handle1 << 1) + 1] & ~T_FLAG;
    var rsc0 = captureTable0.get(rep2);
    if (!rsc0) {
      rsc0 = Object.create(Pollable.prototype);
      Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
      Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
    }
    
    curResourceBorrows.push(rsc0);
    result3.push(rsc0);
  }
  _debugLog('[iface="wasi:io/poll@0.2.9", function="poll"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'poll',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => poll(result3),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  for (const entry of curResourceBorrows) {
    const rsc = entry.rsc ?? entry;
    if (entry.drop) {
      if (rsc[symbolRscHandle]) {
        entry.drop(rsc[symbolRscHandle]);
      }
    }
    rsc[symbolRscHandle] = undefined;
  }
  curResourceBorrows = [];
  var val4 = ret;
  var len4 = val4.length;
  var ptr4 = realloc0(0, 0, 4, len4 * 4);
  
  let valData4;
  const valLenBytes4 = len4 * 4;
  if (Array.isArray(val4)) {
    // Regular array likely containing numbers, write values to memory
    let offset = 0;
    const dv4 = new DataView(memory0.buffer);
    for (const v of val4) {
      _requireValidNumericPrimitive.bind(null, 'u32')(v);
      dv4.setUint32(ptr4+ offset, v, true);
      offset += 4;
    }
  } else {
    // TypedArray / ArrayBuffer-like, direct copy
    valData4 = new Uint8Array(val4.buffer || val4, val4.byteOffset, valLenBytes4);
    const out4 = new Uint8Array(memory0.buffer, ptr4, valLenBytes4);
    out4.set(valData4);
  }
  
  dataView(memory0).setUint32(arg2 + 4, len4, true);
  dataView(memory0).setUint32(arg2 + 0, ptr4, true);
  _debugLog('[iface="wasi:io/poll@0.2.9", function="poll"][Instruction::Return]', {
    funcName: 'poll',
    paramCount: 0,
    async: false,
    postReturn: false
  });
  task.resolve([ret]);
  task.exit();
}
_trampoline29.fnName = 'wasi:io/poll@0.2.9#poll';

const handleTable1 = [T_FLAG, 0];
handleTable1._createdReps = new Set();


const captureTable1= new Map();
let captureCnt1= 0;

HANDLE_TABLES[1] = handleTable1;

const _trampoline30 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable3[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable3.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(OutputStream.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:io/streams@0.2.9", function="[method]output-stream.check-write"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'checkWrite',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.checkWrite(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant5 = ret;
switch (variant5.tag) {
  case 'ok': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    dataView(memory0).setBigInt64(arg1 + 8, toUint64(e), true);
    
    break;
  }
  case 'err': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var variant4 = e;
    switch (variant4.tag) {
      case 'last-operation-failed': {
        const e = variant4.val;
        dataView(memory0).setInt8(arg1 + 8, 0, true);
        
        if (!(e instanceof Error$1)) {
          throw new TypeError('Resource error: Not a valid \"Error\" resource.');
        }
        var handle3 = e[symbolRscHandle];
        if (!handle3) {
          const rep = e[symbolRscRep] || ++captureCnt1;
          captureTable1.set(rep, e);
          handle3 = rscTableCreateOwn(handleTable1, rep);
        }
        
        dataView(memory0).setInt32(arg1 + 12, handle3, true);
        break;
      }
      case 'closed': {
        dataView(memory0).setInt8(arg1 + 8, 1, true);
        break;
      }
      default: {
        throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant4.tag)}\` (received \`${variant4}\`) specified for \`StreamError\``);
      }
    }
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant5, valueType: typeof variant5});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:io/streams@0.2.9", function="[method]output-stream.check-write"][Instruction::Return]', {
  funcName: '[method]output-stream.check-write',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline30.fnName = 'wasi:io/streams@0.2.9#checkWrite';

const _trampoline31 = function(arg0, arg1, arg2, arg3) {
  var handle1 = arg0;
  
  var rep2 = handleTable3[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable3.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(OutputStream.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  var ptr3 = arg1;
  var len3 = arg2;
  var result3 = new Uint8Array(memory0.buffer.slice(ptr3, ptr3 + len3 * 1));
  _debugLog('[iface="wasi:io/streams@0.2.9", function="[method]output-stream.write"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'write',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.write(result3),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant6 = ret;
switch (variant6.tag) {
  case 'ok': {
    const e = variant6.val;
    dataView(memory0).setInt8(arg3 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant6.val;
    dataView(memory0).setInt8(arg3 + 0, 1, true);
    var variant5 = e;
    switch (variant5.tag) {
      case 'last-operation-failed': {
        const e = variant5.val;
        dataView(memory0).setInt8(arg3 + 4, 0, true);
        
        if (!(e instanceof Error$1)) {
          throw new TypeError('Resource error: Not a valid \"Error\" resource.');
        }
        var handle4 = e[symbolRscHandle];
        if (!handle4) {
          const rep = e[symbolRscRep] || ++captureCnt1;
          captureTable1.set(rep, e);
          handle4 = rscTableCreateOwn(handleTable1, rep);
        }
        
        dataView(memory0).setInt32(arg3 + 8, handle4, true);
        break;
      }
      case 'closed': {
        dataView(memory0).setInt8(arg3 + 4, 1, true);
        break;
      }
      default: {
        throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant5.tag)}\` (received \`${variant5}\`) specified for \`StreamError\``);
      }
    }
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant6, valueType: typeof variant6});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:io/streams@0.2.9", function="[method]output-stream.write"][Instruction::Return]', {
  funcName: '[method]output-stream.write',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline31.fnName = 'wasi:io/streams@0.2.9#write';

const _trampoline32 = function(arg0, arg1) {
  var handle1 = arg0;
  
  var rep2 = handleTable3[(handle1 << 1) + 1] & ~T_FLAG;
  var rsc0 = captureTable3.get(rep2);
  if (!rsc0) {
    rsc0 = Object.create(OutputStream.prototype);
    Object.defineProperty(rsc0, symbolRscHandle, { writable: true, value: handle1});
    Object.defineProperty(rsc0, symbolRscRep, { writable: true, value: rep2});
  }
  
  curResourceBorrows.push(rsc0);
  _debugLog('[iface="wasi:io/streams@0.2.9", function="[method]output-stream.blocking-flush"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'blockingFlush',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'result-catch-handler',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  try {
    ret = { tag: 'ok', val: _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => rsc0.blockingFlush(),
    })
  };
} catch (e) {
  ret = { tag: 'err', val: getErrorPayload(e) };
}

for (const entry of curResourceBorrows) {
  const rsc = entry.rsc ?? entry;
  if (entry.drop) {
    if (rsc[symbolRscHandle]) {
      entry.drop(rsc[symbolRscHandle]);
    }
  }
  rsc[symbolRscHandle] = undefined;
}
curResourceBorrows = [];
var variant5 = ret;
switch (variant5.tag) {
  case 'ok': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg1 + 0, 0, true);
    
    break;
  }
  case 'err': {
    const e = variant5.val;
    dataView(memory0).setInt8(arg1 + 0, 1, true);
    var variant4 = e;
    switch (variant4.tag) {
      case 'last-operation-failed': {
        const e = variant4.val;
        dataView(memory0).setInt8(arg1 + 4, 0, true);
        
        if (!(e instanceof Error$1)) {
          throw new TypeError('Resource error: Not a valid \"Error\" resource.');
        }
        var handle3 = e[symbolRscHandle];
        if (!handle3) {
          const rep = e[symbolRscRep] || ++captureCnt1;
          captureTable1.set(rep, e);
          handle3 = rscTableCreateOwn(handleTable1, rep);
        }
        
        dataView(memory0).setInt32(arg1 + 8, handle3, true);
        break;
      }
      case 'closed': {
        dataView(memory0).setInt8(arg1 + 4, 1, true);
        break;
      }
      default: {
        throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant4.tag)}\` (received \`${variant4}\`) specified for \`StreamError\``);
      }
    }
    
    break;
  }
  default: {
    _debugLog("ERROR: invalid value (expected result as object with 'tag' member)", { value: variant5, valueType: typeof variant5});
    throw new TypeError('invalid variant specified for result');
  }
}
_debugLog('[iface="wasi:io/streams@0.2.9", function="[method]output-stream.blocking-flush"][Instruction::Return]', {
  funcName: '[method]output-stream.blocking-flush',
  paramCount: 0,
  async: false,
  postReturn: false
});
task.resolve([ret]);
task.exit();
}
_trampoline32.fnName = 'wasi:io/streams@0.2.9#blockingFlush';

const _trampoline33 = function(arg0) {
  _debugLog('[iface="wasi:cli/environment@0.2.9", function="get-environment"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'getEnvironment',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => getEnvironment(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  var vec3 = ret;
  var len3 = vec3.length;
  var result3 = realloc0(0, 0, 4, len3 * 16);
  for (let i = 0; i < vec3.length; i++) {
    const e = vec3[i];
    const base = result3 + i * 16;var [tuple0_0, tuple0_1] = e;
    
    var encodeRes = _utf8AllocateAndEncode(tuple0_0, realloc0, memory0);
    var ptr1= encodeRes.ptr;
    var len1 = encodeRes.len;
    
    dataView(memory0).setUint32(base + 4, len1, true);
    dataView(memory0).setUint32(base + 0, ptr1, true);
    
    var encodeRes = _utf8AllocateAndEncode(tuple0_1, realloc0, memory0);
    var ptr2= encodeRes.ptr;
    var len2 = encodeRes.len;
    
    dataView(memory0).setUint32(base + 12, len2, true);
    dataView(memory0).setUint32(base + 8, ptr2, true);
  }
  dataView(memory0).setUint32(arg0 + 4, len3, true);
  dataView(memory0).setUint32(arg0 + 0, result3, true);
  _debugLog('[iface="wasi:cli/environment@0.2.9", function="get-environment"][Instruction::Return]', {
    funcName: 'get-environment',
    paramCount: 0,
    async: false,
    postReturn: false
  });
  task.resolve([ret]);
  task.exit();
}
_trampoline33.fnName = 'wasi:cli/environment@0.2.9#getEnvironment';

const handleTable4 = [T_FLAG, 0];
handleTable4._createdReps = new Set();


const captureTable4= new Map();
let captureCnt4= 0;

HANDLE_TABLES[4] = handleTable4;

const _trampoline34 = function(arg0) {
  _debugLog('[iface="wasi:cli/terminal-stdin@0.2.9", function="get-terminal-stdin"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'getTerminalStdin',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => getTerminalStdin(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  var variant1 = ret;
  if (variant1 === null || variant1=== undefined) {
    dataView(memory0).setInt8(arg0 + 0, 0, true);
  } else {
    const e = variant1;
    dataView(memory0).setInt8(arg0 + 0, 1, true);
    
    if (!(e instanceof TerminalInput)) {
      throw new TypeError('Resource error: Not a valid \"TerminalInput\" resource.');
    }
    var handle0 = e[symbolRscHandle];
    if (!handle0) {
      const rep = e[symbolRscRep] || ++captureCnt4;
      captureTable4.set(rep, e);
      handle0 = rscTableCreateOwn(handleTable4, rep);
    }
    
    dataView(memory0).setInt32(arg0 + 4, handle0, true);
  }
  _debugLog('[iface="wasi:cli/terminal-stdin@0.2.9", function="get-terminal-stdin"][Instruction::Return]', {
    funcName: 'get-terminal-stdin',
    paramCount: 0,
    async: false,
    postReturn: false
  });
  task.resolve([ret]);
  task.exit();
}
_trampoline34.fnName = 'wasi:cli/terminal-stdin@0.2.9#getTerminalStdin';

const handleTable5 = [T_FLAG, 0];
handleTable5._createdReps = new Set();


const captureTable5= new Map();
let captureCnt5= 0;

HANDLE_TABLES[5] = handleTable5;

const _trampoline35 = function(arg0) {
  _debugLog('[iface="wasi:cli/terminal-stdout@0.2.9", function="get-terminal-stdout"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'getTerminalStdout',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => getTerminalStdout(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  var variant1 = ret;
  if (variant1 === null || variant1=== undefined) {
    dataView(memory0).setInt8(arg0 + 0, 0, true);
  } else {
    const e = variant1;
    dataView(memory0).setInt8(arg0 + 0, 1, true);
    
    if (!(e instanceof TerminalOutput)) {
      throw new TypeError('Resource error: Not a valid \"TerminalOutput\" resource.');
    }
    var handle0 = e[symbolRscHandle];
    if (!handle0) {
      const rep = e[symbolRscRep] || ++captureCnt5;
      captureTable5.set(rep, e);
      handle0 = rscTableCreateOwn(handleTable5, rep);
    }
    
    dataView(memory0).setInt32(arg0 + 4, handle0, true);
  }
  _debugLog('[iface="wasi:cli/terminal-stdout@0.2.9", function="get-terminal-stdout"][Instruction::Return]', {
    funcName: 'get-terminal-stdout',
    paramCount: 0,
    async: false,
    postReturn: false
  });
  task.resolve([ret]);
  task.exit();
}
_trampoline35.fnName = 'wasi:cli/terminal-stdout@0.2.9#getTerminalStdout';

const _trampoline36 = function(arg0) {
  _debugLog('[iface="wasi:cli/terminal-stderr@0.2.9", function="get-terminal-stderr"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'getTerminalStderr',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => getTerminalStderr(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  var variant1 = ret;
  if (variant1 === null || variant1=== undefined) {
    dataView(memory0).setInt8(arg0 + 0, 0, true);
  } else {
    const e = variant1;
    dataView(memory0).setInt8(arg0 + 0, 1, true);
    
    if (!(e instanceof TerminalOutput)) {
      throw new TypeError('Resource error: Not a valid \"TerminalOutput\" resource.');
    }
    var handle0 = e[symbolRscHandle];
    if (!handle0) {
      const rep = e[symbolRscRep] || ++captureCnt5;
      captureTable5.set(rep, e);
      handle0 = rscTableCreateOwn(handleTable5, rep);
    }
    
    dataView(memory0).setInt32(arg0 + 4, handle0, true);
  }
  _debugLog('[iface="wasi:cli/terminal-stderr@0.2.9", function="get-terminal-stderr"][Instruction::Return]', {
    funcName: 'get-terminal-stderr',
    paramCount: 0,
    async: false,
    postReturn: false
  });
  task.resolve([ret]);
  task.exit();
}
_trampoline36.fnName = 'wasi:cli/terminal-stderr@0.2.9#getTerminalStderr';

const _trampoline37 = function(arg0) {
  _debugLog('[iface="wasi:clocks/wall-clock@0.2.9", function="now"] [Instruction::CallInterface] (sync, @ enter)');
  const hostProvided = true;
  
  let parentTask;
  let task;
  let subtask;
  
  const createTask = () => {
    const results = createNewCurrentTask({
      componentIdx: -1,
      isAsync: false,
      entryFnName: 'now$1',
      getCallbackFn: () => null,
      callbackFnName: null,
      errHandling: 'none',
      callingWasmExport: false,
    });
    task = results[0];
  };
  
  taskCreation: {
    parentTask = getCurrentTask(
    0,
    _getGlobalCurrentTaskMeta(0)?.taskID,
    )?.task;
    
    if (!parentTask) {
      createTask();
      break taskCreation;
    }
    
    createTask();
    
    if (hostProvided) {
      subtask = parentTask.getLatestSubtask();
      if (!subtask) {
        throw new Error(`Missing subtask (in parent task [${parentTask.id()}]) for host import, has the import been lowered? (ensure asyncImports are set properly)`);
      }
      task.setParentSubtask(subtask);
    }
  }
  
  const started = task.enterSync();
  
  let ret;
  
  try {
    ret = _withGlobalCurrentTaskMeta({
      componentIdx: task.componentIdx(),
      taskID: task.id(),
      fn: () => now$1(),
    })
    ;
  } catch (err) {
    
    _debugLog('[Instruction::CallInterface] error during sync call', {
      taskID: task.id(),
      subtaskID: task.getParentSubtask()?.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    throw err;
    
  }
  
  var {seconds: v0_0, nanoseconds: v0_1 } = ret;
  dataView(memory0).setBigInt64(arg0 + 0, toUint64(v0_0), true);
  dataView(memory0).setInt32(arg0 + 8, toUint32(v0_1), true);
  _debugLog('[iface="wasi:clocks/wall-clock@0.2.9", function="now"][Instruction::Return]', {
    funcName: 'now',
    paramCount: 0,
    async: false,
    postReturn: false
  });
  task.resolve([ret]);
  task.exit();
}
_trampoline37.fnName = 'wasi:clocks/wall-clock@0.2.9#now$1';
let exports2;
let callback_0;
let reactor100StageCommandPage;

async function stageCommandPage(arg0, arg1) {
  var {owner: v0_0, generation: v0_1, commandIndex: v0_2, commandCount: v0_3, instance: v0_4, seq: v0_5, kind: v0_6, pageIndex: v0_7, pageCount: v0_8, itemCount: v0_9, metadata: v0_10 } = arg0;
  var val1 = arg1;
  var len1 = Array.isArray(val1) ? val1.length : val1.byteLength;
  var ptr1 = await realloc0Async(0, 0, 1, len1 * 1);
  
  let valData1;
  const valLenBytes1 = len1 * 1;
  if (Array.isArray(val1)) {
    // Regular array likely containing numbers, write values to memory
    let offset = 0;
    const dv1 = new DataView(memory0.buffer);
    for (const v of val1) {
      _requireValidNumericPrimitive.bind(null, 'u8')(v);
      dv1.setUint8(ptr1+ offset, v, true);
      offset += 1;
    }
  } else {
    // TypedArray / ArrayBuffer-like, direct copy
    valData1 = new Uint8Array(val1.buffer || val1, val1.byteOffset, valLenBytes1);
    const out1 = new Uint8Array(memory0.buffer, ptr1, valLenBytes1);
    out1.set(valData1);
  }
  
  _debugLog('[iface="semio:framework/reactor@1.0.0", function="stage-command-page"][Instruction::CallWasm] enter', {
    funcName: 'stage-command-page',
    paramCount: 13,
    async: true,
    postReturn: false,
  });
  const hostProvided = false;
  
  const [task, _wasm_call_currentTaskID] = createNewCurrentTask({
    componentIdx: 0,
    isAsync: true,
    isManualAsync: false,
    preserveFutureResult: false,
    entryFnName: 'reactor100StageCommandPage',
    getCallbackFn: () => callback_0,
    callbackFnName: callback_0,
    errHandling: 'throw-result-err',
    callingWasmExport: true,
  });
  
  
  const started = await task.enter();
  if (!started) {
    _debugLog('[Instruction::AsyncTaskReturn] failed to enter task', {
      taskID: task.id(),
      subtaskID: task.currentSubtask()?.id(),
    });
    throw new Error("failed to enter task");
  }
  
  
  if (0!== null) {
    task.setReturnMemoryIdx(0);
    task.setReturnMemory(() => memory0());
  }
  
  
  let ret;
  
  try {
    ret =  await  _withGlobalCurrentTaskMetaAsync({
      taskID: task.id(),
      componentIdx: task.componentIdx(),
      fn: () => reactor100StageCommandPage(toUint64(v0_0), toUint64(v0_1), toUint32(v0_2), toUint32(v0_3), toUint32(v0_4), toUint64(v0_5), toUint8(v0_6), toUint32(v0_7), toUint32(v0_8), toUint32(v0_9), toUint32(v0_10), ptr1, len1),
    });
  } catch (err) {
    
    _debugLog('[Instruction::CallWasm] error during async call', {
      taskID: task.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    return task.completionPromise();
    
  }
  
  _debugLog('[iface="semio:framework/reactor@1.0.0", function="stage-command-page"][Instruction::AsyncTaskReturn]', {
    funcName: 'stage-command-page',
    paramCount: 1,
    componentIdx: 0,
    postReturn: false,
    hostProvided,
  });
  
  if (hostProvided) {
    _debugLog('[Instruction::AsyncTaskReturn] signaling host-provided async return completion', {
      task: task.id(),
      subtask: subtask?.id(),
      result: ret,
    })
    task.resolve([ret]);
    task.exit();
    return await task.completionPromise();
  }
  
  const componentState = getOrCreateAsyncState(0);
  if (!componentState) { throw new Error('failed to lookup current component state'); }
  
  queueMicrotask(async (resolve, reject) => {
    try {
      _debugLog("[Instruction::AsyncTaskReturn] starting driver loop", {
        fnName: 'stage-command-page',
        componentInstanceIdx: 0,
        taskID: task.id(),
      });
      await _driverLoop({
        componentInstanceIdx: 0,
        componentState,
        task,
        fnName: 'stage-command-page',
        isAsync: true,
        callbackResult: ret,
      });
    } catch (err) {
      _debugLog("[Instruction::AsyncTaskReturn] driver loop call failure", { err });
    }
  });
  
  let taskRes = await task.completionPromise();
  if (task.getErrHandling() === 'throw-result-err') {
    if (typeof taskRes !== 'object') {
      return taskRes;
    }
    if (taskRes.tag === 'err') { throw taskRes.val; }
    if (taskRes.tag === 'ok') { taskRes = taskRes.val; }
  }
  
  return taskRes;
  
}
let reactor100StageColdPairPage;

async function stageColdPairPage(arg0) {
  var ptr0 = await realloc0Async(0, 0, 8, 144);
  var {header: v1_0, pageIndex: v1_1, bytes: v1_2 } = arg0;
  var {lifetime: v2_0, transferGeneration: v2_1, descriptorSha256: v2_2, baselineFrontier: v2_3, packSha256: v2_4, sprSha256: v2_5, aggregateSha256: v2_6, packLength: v2_7, sprLength: v2_8, pageCount: v2_9 } = v1_0;
  var {activationGeneration: v3_0, instanceId: v3_1, guestLifetime: v3_2 } = v2_0;
  dataView(memory0).setBigInt64(ptr0 + 0, toUint64(v3_0), true);
  dataView(memory0).setInt32(ptr0 + 8, toUint32(v3_1), true);
  dataView(memory0).setBigInt64(ptr0 + 16, toUint64(v3_2), true);
  dataView(memory0).setBigInt64(ptr0 + 24, toUint64(v2_1), true);
  var val4 = v2_2;
  var len4 = Array.isArray(val4) ? val4.length : val4.byteLength;
  var ptr4 = await realloc0Async(0, 0, 1, len4 * 1);
  
  let valData4;
  const valLenBytes4 = len4 * 1;
  if (Array.isArray(val4)) {
    // Regular array likely containing numbers, write values to memory
    let offset = 0;
    const dv4 = new DataView(memory0.buffer);
    for (const v of val4) {
      _requireValidNumericPrimitive.bind(null, 'u8')(v);
      dv4.setUint8(ptr4+ offset, v, true);
      offset += 1;
    }
  } else {
    // TypedArray / ArrayBuffer-like, direct copy
    valData4 = new Uint8Array(val4.buffer || val4, val4.byteOffset, valLenBytes4);
    const out4 = new Uint8Array(memory0.buffer, ptr4, valLenBytes4);
    out4.set(valData4);
  }
  
  dataView(memory0).setUint32(ptr0 + 36, len4, true);
  dataView(memory0).setUint32(ptr0 + 32, ptr4, true);
  var {artifactId: v5_0, headEditOrdinal: v5_1, headEditId: v5_2, lastCommitSeq: v5_3, chainSha256: v5_4 } = v2_3;
  
  var encodeRes = await _utf8AllocateAndEncodeAsync(v5_0, realloc0Async, memory0);
  var ptr6= encodeRes.ptr;
  var len6 = encodeRes.len;
  
  dataView(memory0).setUint32(ptr0 + 44, len6, true);
  dataView(memory0).setUint32(ptr0 + 40, ptr6, true);
  dataView(memory0).setBigInt64(ptr0 + 48, toUint64(v5_1), true);
  
  var encodeRes = await _utf8AllocateAndEncodeAsync(v5_2, realloc0Async, memory0);
  var ptr7= encodeRes.ptr;
  var len7 = encodeRes.len;
  
  dataView(memory0).setUint32(ptr0 + 60, len7, true);
  dataView(memory0).setUint32(ptr0 + 56, ptr7, true);
  dataView(memory0).setBigInt64(ptr0 + 64, toUint64(v5_3), true);
  var val8 = v5_4;
  var len8 = Array.isArray(val8) ? val8.length : val8.byteLength;
  var ptr8 = await realloc0Async(0, 0, 1, len8 * 1);
  
  let valData8;
  const valLenBytes8 = len8 * 1;
  if (Array.isArray(val8)) {
    // Regular array likely containing numbers, write values to memory
    let offset = 0;
    const dv8 = new DataView(memory0.buffer);
    for (const v of val8) {
      _requireValidNumericPrimitive.bind(null, 'u8')(v);
      dv8.setUint8(ptr8+ offset, v, true);
      offset += 1;
    }
  } else {
    // TypedArray / ArrayBuffer-like, direct copy
    valData8 = new Uint8Array(val8.buffer || val8, val8.byteOffset, valLenBytes8);
    const out8 = new Uint8Array(memory0.buffer, ptr8, valLenBytes8);
    out8.set(valData8);
  }
  
  dataView(memory0).setUint32(ptr0 + 76, len8, true);
  dataView(memory0).setUint32(ptr0 + 72, ptr8, true);
  var val9 = v2_4;
  var len9 = Array.isArray(val9) ? val9.length : val9.byteLength;
  var ptr9 = await realloc0Async(0, 0, 1, len9 * 1);
  
  let valData9;
  const valLenBytes9 = len9 * 1;
  if (Array.isArray(val9)) {
    // Regular array likely containing numbers, write values to memory
    let offset = 0;
    const dv9 = new DataView(memory0.buffer);
    for (const v of val9) {
      _requireValidNumericPrimitive.bind(null, 'u8')(v);
      dv9.setUint8(ptr9+ offset, v, true);
      offset += 1;
    }
  } else {
    // TypedArray / ArrayBuffer-like, direct copy
    valData9 = new Uint8Array(val9.buffer || val9, val9.byteOffset, valLenBytes9);
    const out9 = new Uint8Array(memory0.buffer, ptr9, valLenBytes9);
    out9.set(valData9);
  }
  
  dataView(memory0).setUint32(ptr0 + 84, len9, true);
  dataView(memory0).setUint32(ptr0 + 80, ptr9, true);
  var val10 = v2_5;
  var len10 = Array.isArray(val10) ? val10.length : val10.byteLength;
  var ptr10 = await realloc0Async(0, 0, 1, len10 * 1);
  
  let valData10;
  const valLenBytes10 = len10 * 1;
  if (Array.isArray(val10)) {
    // Regular array likely containing numbers, write values to memory
    let offset = 0;
    const dv10 = new DataView(memory0.buffer);
    for (const v of val10) {
      _requireValidNumericPrimitive.bind(null, 'u8')(v);
      dv10.setUint8(ptr10+ offset, v, true);
      offset += 1;
    }
  } else {
    // TypedArray / ArrayBuffer-like, direct copy
    valData10 = new Uint8Array(val10.buffer || val10, val10.byteOffset, valLenBytes10);
    const out10 = new Uint8Array(memory0.buffer, ptr10, valLenBytes10);
    out10.set(valData10);
  }
  
  dataView(memory0).setUint32(ptr0 + 92, len10, true);
  dataView(memory0).setUint32(ptr0 + 88, ptr10, true);
  var val11 = v2_6;
  var len11 = Array.isArray(val11) ? val11.length : val11.byteLength;
  var ptr11 = await realloc0Async(0, 0, 1, len11 * 1);
  
  let valData11;
  const valLenBytes11 = len11 * 1;
  if (Array.isArray(val11)) {
    // Regular array likely containing numbers, write values to memory
    let offset = 0;
    const dv11 = new DataView(memory0.buffer);
    for (const v of val11) {
      _requireValidNumericPrimitive.bind(null, 'u8')(v);
      dv11.setUint8(ptr11+ offset, v, true);
      offset += 1;
    }
  } else {
    // TypedArray / ArrayBuffer-like, direct copy
    valData11 = new Uint8Array(val11.buffer || val11, val11.byteOffset, valLenBytes11);
    const out11 = new Uint8Array(memory0.buffer, ptr11, valLenBytes11);
    out11.set(valData11);
  }
  
  dataView(memory0).setUint32(ptr0 + 100, len11, true);
  dataView(memory0).setUint32(ptr0 + 96, ptr11, true);
  dataView(memory0).setBigInt64(ptr0 + 104, toUint64(v2_7), true);
  dataView(memory0).setBigInt64(ptr0 + 112, toUint64(v2_8), true);
  dataView(memory0).setInt32(ptr0 + 120, toUint32(v2_9), true);
  dataView(memory0).setInt32(ptr0 + 128, toUint32(v1_1), true);
  var val12 = v1_2;
  var len12 = Array.isArray(val12) ? val12.length : val12.byteLength;
  var ptr12 = await realloc0Async(0, 0, 1, len12 * 1);
  
  let valData12;
  const valLenBytes12 = len12 * 1;
  if (Array.isArray(val12)) {
    // Regular array likely containing numbers, write values to memory
    let offset = 0;
    const dv12 = new DataView(memory0.buffer);
    for (const v of val12) {
      _requireValidNumericPrimitive.bind(null, 'u8')(v);
      dv12.setUint8(ptr12+ offset, v, true);
      offset += 1;
    }
  } else {
    // TypedArray / ArrayBuffer-like, direct copy
    valData12 = new Uint8Array(val12.buffer || val12, val12.byteOffset, valLenBytes12);
    const out12 = new Uint8Array(memory0.buffer, ptr12, valLenBytes12);
    out12.set(valData12);
  }
  
  dataView(memory0).setUint32(ptr0 + 136, len12, true);
  dataView(memory0).setUint32(ptr0 + 132, ptr12, true);
  _debugLog('[iface="semio:framework/reactor@1.0.0", function="stage-cold-pair-page"][Instruction::CallWasm] enter', {
    funcName: 'stage-cold-pair-page',
    paramCount: 1,
    async: true,
    postReturn: false,
  });
  const hostProvided = false;
  
  const [task, _wasm_call_currentTaskID] = createNewCurrentTask({
    componentIdx: 0,
    isAsync: true,
    isManualAsync: false,
    preserveFutureResult: false,
    entryFnName: 'reactor100StageColdPairPage',
    getCallbackFn: () => callback_0,
    callbackFnName: callback_0,
    errHandling: 'throw-result-err',
    callingWasmExport: true,
  });
  
  
  const started = await task.enter();
  if (!started) {
    _debugLog('[Instruction::AsyncTaskReturn] failed to enter task', {
      taskID: task.id(),
      subtaskID: task.currentSubtask()?.id(),
    });
    throw new Error("failed to enter task");
  }
  
  
  if (0!== null) {
    task.setReturnMemoryIdx(0);
    task.setReturnMemory(() => memory0());
  }
  
  
  let ret;
  
  try {
    ret =  await  _withGlobalCurrentTaskMetaAsync({
      taskID: task.id(),
      componentIdx: task.componentIdx(),
      fn: () => reactor100StageColdPairPage(ptr0),
    });
  } catch (err) {
    
    _debugLog('[Instruction::CallWasm] error during async call', {
      taskID: task.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    return task.completionPromise();
    
  }
  
  _debugLog('[iface="semio:framework/reactor@1.0.0", function="stage-cold-pair-page"][Instruction::AsyncTaskReturn]', {
    funcName: 'stage-cold-pair-page',
    paramCount: 1,
    componentIdx: 0,
    postReturn: false,
    hostProvided,
  });
  
  if (hostProvided) {
    _debugLog('[Instruction::AsyncTaskReturn] signaling host-provided async return completion', {
      task: task.id(),
      subtask: subtask?.id(),
      result: ret,
    })
    task.resolve([ret]);
    task.exit();
    return await task.completionPromise();
  }
  
  const componentState = getOrCreateAsyncState(0);
  if (!componentState) { throw new Error('failed to lookup current component state'); }
  
  queueMicrotask(async (resolve, reject) => {
    try {
      _debugLog("[Instruction::AsyncTaskReturn] starting driver loop", {
        fnName: 'stage-cold-pair-page',
        componentInstanceIdx: 0,
        taskID: task.id(),
      });
      await _driverLoop({
        componentInstanceIdx: 0,
        componentState,
        task,
        fnName: 'stage-cold-pair-page',
        isAsync: true,
        callbackResult: ret,
      });
    } catch (err) {
      _debugLog("[Instruction::AsyncTaskReturn] driver loop call failure", { err });
    }
  });
  
  let taskRes = await task.completionPromise();
  if (task.getErrHandling() === 'throw-result-err') {
    if (typeof taskRes !== 'object') {
      return taskRes;
    }
    if (taskRes.tag === 'err') { throw taskRes.val; }
    if (taskRes.tag === 'ok') { taskRes = taskRes.val; }
  }
  
  return taskRes;
  
}
let reactor100Poll;

async function poll$1(arg0, arg1) {
  var vec100 = arg0;
  var len100 = vec100.length;
  var result100 = await realloc0Async(0, 0, 8, len100 * 80);
  for (let i = 0; i < vec100.length; i++) {
    const e = vec100[i];
    const base = result100 + i * 80;var variant99 = e;
    switch (variant99.tag) {
      case 'instance-open': {
        const e = variant99.val;
        dataView(memory0).setInt8(base + 0, 0, true);
        var {instance: v0_0, activationGeneration: v0_1, requestSequence: v0_2, appId: v0_3, actor: v0_4, config: v0_5, assets: v0_6, capabilities: v0_7, quotas: v0_8 } = e;
        dataView(memory0).setInt32(base + 8, toUint32(v0_0), true);
        dataView(memory0).setBigInt64(base + 16, toUint64(v0_1), true);
        dataView(memory0).setBigInt64(base + 24, toUint64(v0_2), true);
        
        var encodeRes = await _utf8AllocateAndEncodeAsync(v0_3, realloc0Async, memory0);
        var ptr1= encodeRes.ptr;
        var len1 = encodeRes.len;
        
        dataView(memory0).setUint32(base + 36, len1, true);
        dataView(memory0).setUint32(base + 32, ptr1, true);
        
        var encodeRes = await _utf8AllocateAndEncodeAsync(v0_4, realloc0Async, memory0);
        var ptr2= encodeRes.ptr;
        var len2 = encodeRes.len;
        
        dataView(memory0).setUint32(base + 44, len2, true);
        dataView(memory0).setUint32(base + 40, ptr2, true);
        var val3 = v0_5;
        var len3 = Array.isArray(val3) ? val3.length : val3.byteLength;
        var ptr3 = await realloc0Async(0, 0, 1, len3 * 1);
        
        let valData3;
        const valLenBytes3 = len3 * 1;
        if (Array.isArray(val3)) {
          // Regular array likely containing numbers, write values to memory
          let offset = 0;
          const dv3 = new DataView(memory0.buffer);
          for (const v of val3) {
            _requireValidNumericPrimitive.bind(null, 'u8')(v);
            dv3.setUint8(ptr3+ offset, v, true);
            offset += 1;
          }
        } else {
          // TypedArray / ArrayBuffer-like, direct copy
          valData3 = new Uint8Array(val3.buffer || val3, val3.byteOffset, valLenBytes3);
          const out3 = new Uint8Array(memory0.buffer, ptr3, valLenBytes3);
          out3.set(valData3);
        }
        
        dataView(memory0).setUint32(base + 52, len3, true);
        dataView(memory0).setUint32(base + 48, ptr3, true);
        var vec7 = v0_6;
        var len7 = vec7.length;
        var result7 = await realloc0Async(0, 0, 4, len7 * 16);
        for (let i = 0; i < vec7.length; i++) {
          const e = vec7[i];
          const base = result7 + i * 16;var [tuple4_0, tuple4_1] = e;
          
          var encodeRes = await _utf8AllocateAndEncodeAsync(tuple4_0, realloc0Async, memory0);
          var ptr5= encodeRes.ptr;
          var len5 = encodeRes.len;
          
          dataView(memory0).setUint32(base + 4, len5, true);
          dataView(memory0).setUint32(base + 0, ptr5, true);
          var val6 = tuple4_1;
          var len6 = Array.isArray(val6) ? val6.length : val6.byteLength;
          var ptr6 = await realloc0Async(0, 0, 1, len6 * 1);
          
          let valData6;
          const valLenBytes6 = len6 * 1;
          if (Array.isArray(val6)) {
            // Regular array likely containing numbers, write values to memory
            let offset = 0;
            const dv6 = new DataView(memory0.buffer);
            for (const v of val6) {
              _requireValidNumericPrimitive.bind(null, 'u8')(v);
              dv6.setUint8(ptr6+ offset, v, true);
              offset += 1;
            }
          } else {
            // TypedArray / ArrayBuffer-like, direct copy
            valData6 = new Uint8Array(val6.buffer || val6, val6.byteOffset, valLenBytes6);
            const out6 = new Uint8Array(memory0.buffer, ptr6, valLenBytes6);
            out6.set(valData6);
          }
          
          dataView(memory0).setUint32(base + 12, len6, true);
          dataView(memory0).setUint32(base + 8, ptr6, true);
        }
        dataView(memory0).setUint32(base + 60, len7, true);
        dataView(memory0).setUint32(base + 56, result7, true);
        var vec13 = v0_7;
        var len13 = vec13.length;
        var result13 = await realloc0Async(0, 0, 8, len13 * 40);
        for (let i = 0; i < vec13.length; i++) {
          const e = vec13[i];
          const base = result13 + i * 40;var {token: v8_0, scope: v8_1, expiresMs: v8_2 } = e;
          var {id: v9_0, token: v9_1 } = v8_0;
          
          var encodeRes = await _utf8AllocateAndEncodeAsync(v9_0, realloc0Async, memory0);
          var ptr10= encodeRes.ptr;
          var len10 = encodeRes.len;
          
          dataView(memory0).setUint32(base + 4, len10, true);
          dataView(memory0).setUint32(base + 0, ptr10, true);
          dataView(memory0).setBigInt64(base + 8, toUint64(v9_1), true);
          
          var encodeRes = await _utf8AllocateAndEncodeAsync(v8_1, realloc0Async, memory0);
          var ptr11= encodeRes.ptr;
          var len11 = encodeRes.len;
          
          dataView(memory0).setUint32(base + 20, len11, true);
          dataView(memory0).setUint32(base + 16, ptr11, true);
          var variant12 = v8_2;
          if (variant12 === null || variant12=== undefined) {
            dataView(memory0).setInt8(base + 24, 0, true);
          } else {
            const e = variant12;
            dataView(memory0).setInt8(base + 24, 1, true);
            dataView(memory0).setBigInt64(base + 32, toInt64(e), true);
          }
        }
        dataView(memory0).setUint32(base + 68, len13, true);
        dataView(memory0).setUint32(base + 64, result13, true);
        var val14 = v0_8;
        var len14 = Array.isArray(val14) ? val14.length : val14.byteLength;
        var ptr14 = await realloc0Async(0, 0, 1, len14 * 1);
        
        let valData14;
        const valLenBytes14 = len14 * 1;
        if (Array.isArray(val14)) {
          // Regular array likely containing numbers, write values to memory
          let offset = 0;
          const dv14 = new DataView(memory0.buffer);
          for (const v of val14) {
            _requireValidNumericPrimitive.bind(null, 'u8')(v);
            dv14.setUint8(ptr14+ offset, v, true);
            offset += 1;
          }
        } else {
          // TypedArray / ArrayBuffer-like, direct copy
          valData14 = new Uint8Array(val14.buffer || val14, val14.byteOffset, valLenBytes14);
          const out14 = new Uint8Array(memory0.buffer, ptr14, valLenBytes14);
          out14.set(valData14);
        }
        
        dataView(memory0).setUint32(base + 76, len14, true);
        dataView(memory0).setUint32(base + 72, ptr14, true);
        break;
      }
      case 'instance-close': {
        const e = variant99.val;
        dataView(memory0).setInt8(base + 0, 1, true);
        var {lifetime: v15_0, requestSequence: v15_1 } = e;
        var {activationGeneration: v16_0, instanceId: v16_1, guestLifetime: v16_2 } = v15_0;
        dataView(memory0).setBigInt64(base + 8, toUint64(v16_0), true);
        dataView(memory0).setInt32(base + 16, toUint32(v16_1), true);
        dataView(memory0).setBigInt64(base + 24, toUint64(v16_2), true);
        dataView(memory0).setBigInt64(base + 32, toUint64(v15_1), true);
        break;
      }
      case 'instance-lifecycle-ack': {
        const e = variant99.val;
        dataView(memory0).setInt8(base + 0, 2, true);
        var variant23 = e;
        switch (variant23.tag) {
          case 'captured': {
            const e = variant23.val;
            dataView(memory0).setInt8(base + 8, 0, true);
            var {lifetime: v17_0, requestSequence: v17_1 } = e;
            var {activationGeneration: v18_0, instanceId: v18_1, guestLifetime: v18_2 } = v17_0;
            dataView(memory0).setBigInt64(base + 16, toUint64(v18_0), true);
            dataView(memory0).setInt32(base + 24, toUint32(v18_1), true);
            dataView(memory0).setBigInt64(base + 32, toUint64(v18_2), true);
            dataView(memory0).setBigInt64(base + 40, toUint64(v17_1), true);
            break;
          }
          case 'accepted': {
            const e = variant23.val;
            dataView(memory0).setInt8(base + 8, 1, true);
            var {lifetime: v19_0, requestSequence: v19_1, closeGeneration: v19_2 } = e;
            var {activationGeneration: v20_0, instanceId: v20_1, guestLifetime: v20_2 } = v19_0;
            dataView(memory0).setBigInt64(base + 16, toUint64(v20_0), true);
            dataView(memory0).setInt32(base + 24, toUint32(v20_1), true);
            dataView(memory0).setBigInt64(base + 32, toUint64(v20_2), true);
            dataView(memory0).setBigInt64(base + 40, toUint64(v19_1), true);
            dataView(memory0).setBigInt64(base + 48, toUint64(v19_2), true);
            break;
          }
          case 'retired': {
            const e = variant23.val;
            dataView(memory0).setInt8(base + 8, 2, true);
            var {lifetime: v21_0, requestSequence: v21_1, closeGeneration: v21_2 } = e;
            var {activationGeneration: v22_0, instanceId: v22_1, guestLifetime: v22_2 } = v21_0;
            dataView(memory0).setBigInt64(base + 16, toUint64(v22_0), true);
            dataView(memory0).setInt32(base + 24, toUint32(v22_1), true);
            dataView(memory0).setBigInt64(base + 32, toUint64(v22_2), true);
            dataView(memory0).setBigInt64(base + 40, toUint64(v21_1), true);
            dataView(memory0).setBigInt64(base + 48, toUint64(v21_2), true);
            break;
          }
          default: {
            throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant23.tag)}\` (received \`${variant23}\`) specified for \`Receipt\``);
          }
        }
        break;
      }
      case 'activate': {
        const e = variant99.val;
        dataView(memory0).setInt8(base + 0, 3, true);
        var {instance: v24_0, reason: v24_1 } = e;
        dataView(memory0).setInt32(base + 8, toUint32(v24_0), true);
        var variant30 = v24_1;
        switch (variant30.tag) {
          case 'on-command': {
            const e = variant30.val;
            dataView(memory0).setInt8(base + 12, 0, true);
            
            var encodeRes = await _utf8AllocateAndEncodeAsync(e, realloc0Async, memory0);
            var ptr25= encodeRes.ptr;
            var len25 = encodeRes.len;
            
            dataView(memory0).setUint32(base + 20, len25, true);
            dataView(memory0).setUint32(base + 16, ptr25, true);
            break;
          }
          case 'on-view-visible': {
            const e = variant30.val;
            dataView(memory0).setInt8(base + 12, 1, true);
            
            var encodeRes = await _utf8AllocateAndEncodeAsync(e, realloc0Async, memory0);
            var ptr26= encodeRes.ptr;
            var len26 = encodeRes.len;
            
            dataView(memory0).setUint32(base + 20, len26, true);
            dataView(memory0).setUint32(base + 16, ptr26, true);
            break;
          }
          case 'on-file-type': {
            const e = variant30.val;
            dataView(memory0).setInt8(base + 12, 2, true);
            
            var encodeRes = await _utf8AllocateAndEncodeAsync(e, realloc0Async, memory0);
            var ptr27= encodeRes.ptr;
            var len27 = encodeRes.len;
            
            dataView(memory0).setUint32(base + 20, len27, true);
            dataView(memory0).setUint32(base + 16, ptr27, true);
            break;
          }
          case 'on-artifact-kind': {
            const e = variant30.val;
            dataView(memory0).setInt8(base + 12, 3, true);
            
            var encodeRes = await _utf8AllocateAndEncodeAsync(e, realloc0Async, memory0);
            var ptr28= encodeRes.ptr;
            var len28 = encodeRes.len;
            
            dataView(memory0).setUint32(base + 20, len28, true);
            dataView(memory0).setUint32(base + 16, ptr28, true);
            break;
          }
          case 'on-extension-request': {
            const e = variant30.val;
            dataView(memory0).setInt8(base + 12, 4, true);
            
            var encodeRes = await _utf8AllocateAndEncodeAsync(e, realloc0Async, memory0);
            var ptr29= encodeRes.ptr;
            var len29 = encodeRes.len;
            
            dataView(memory0).setUint32(base + 20, len29, true);
            dataView(memory0).setUint32(base + 16, ptr29, true);
            break;
          }
          case 'on-startup-finished': {
            dataView(memory0).setInt8(base + 12, 5, true);
            break;
          }
          default: {
            throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant30.tag)}\` (received \`${variant30}\`) specified for \`ActivationEvent\``);
          }
        }
        break;
      }
      case 'suspend-request': {
        const e = variant99.val;
        dataView(memory0).setInt8(base + 0, 4, true);
        var {instance: v31_0 } = e;
        dataView(memory0).setInt32(base + 8, toUint32(v31_0), true);
        break;
      }
      case 'capability-changed': {
        const e = variant99.val;
        dataView(memory0).setInt8(base + 0, 5, true);
        var {instance: v32_0, change: v32_1 } = e;
        dataView(memory0).setInt32(base + 8, toUint32(v32_0), true);
        var variant44 = v32_1;
        switch (variant44.tag) {
          case 'granted': {
            const e = variant44.val;
            dataView(memory0).setInt8(base + 16, 0, true);
            var {token: v33_0, scope: v33_1, expiresMs: v33_2 } = e;
            var {id: v34_0, token: v34_1 } = v33_0;
            
            var encodeRes = await _utf8AllocateAndEncodeAsync(v34_0, realloc0Async, memory0);
            var ptr35= encodeRes.ptr;
            var len35 = encodeRes.len;
            
            dataView(memory0).setUint32(base + 28, len35, true);
            dataView(memory0).setUint32(base + 24, ptr35, true);
            dataView(memory0).setBigInt64(base + 32, toUint64(v34_1), true);
            
            var encodeRes = await _utf8AllocateAndEncodeAsync(v33_1, realloc0Async, memory0);
            var ptr36= encodeRes.ptr;
            var len36 = encodeRes.len;
            
            dataView(memory0).setUint32(base + 44, len36, true);
            dataView(memory0).setUint32(base + 40, ptr36, true);
            var variant37 = v33_2;
            if (variant37 === null || variant37=== undefined) {
              dataView(memory0).setInt8(base + 48, 0, true);
            } else {
              const e = variant37;
              dataView(memory0).setInt8(base + 48, 1, true);
              dataView(memory0).setBigInt64(base + 56, toInt64(e), true);
            }
            break;
          }
          case 'revoked': {
            const e = variant44.val;
            dataView(memory0).setInt8(base + 16, 1, true);
            
            var encodeRes = await _utf8AllocateAndEncodeAsync(e, realloc0Async, memory0);
            var ptr38= encodeRes.ptr;
            var len38 = encodeRes.len;
            
            dataView(memory0).setUint32(base + 28, len38, true);
            dataView(memory0).setUint32(base + 24, ptr38, true);
            break;
          }
          case 'narrowed': {
            const e = variant44.val;
            dataView(memory0).setInt8(base + 16, 2, true);
            var {token: v39_0, scope: v39_1, expiresMs: v39_2 } = e;
            var {id: v40_0, token: v40_1 } = v39_0;
            
            var encodeRes = await _utf8AllocateAndEncodeAsync(v40_0, realloc0Async, memory0);
            var ptr41= encodeRes.ptr;
            var len41 = encodeRes.len;
            
            dataView(memory0).setUint32(base + 28, len41, true);
            dataView(memory0).setUint32(base + 24, ptr41, true);
            dataView(memory0).setBigInt64(base + 32, toUint64(v40_1), true);
            
            var encodeRes = await _utf8AllocateAndEncodeAsync(v39_1, realloc0Async, memory0);
            var ptr42= encodeRes.ptr;
            var len42 = encodeRes.len;
            
            dataView(memory0).setUint32(base + 44, len42, true);
            dataView(memory0).setUint32(base + 40, ptr42, true);
            var variant43 = v39_2;
            if (variant43 === null || variant43=== undefined) {
              dataView(memory0).setInt8(base + 48, 0, true);
            } else {
              const e = variant43;
              dataView(memory0).setInt8(base + 48, 1, true);
              dataView(memory0).setBigInt64(base + 56, toInt64(e), true);
            }
            break;
          }
          default: {
            throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant44.tag)}\` (received \`${variant44}\`) specified for \`CapabilityChange\``);
          }
        }
        break;
      }
      case 'quota-changed': {
        const e = variant99.val;
        dataView(memory0).setInt8(base + 0, 6, true);
        var {instance: v45_0, quotas: v45_1 } = e;
        dataView(memory0).setInt32(base + 8, toUint32(v45_0), true);
        var val46 = v45_1;
        var len46 = Array.isArray(val46) ? val46.length : val46.byteLength;
        var ptr46 = await realloc0Async(0, 0, 1, len46 * 1);
        
        let valData46;
        const valLenBytes46 = len46 * 1;
        if (Array.isArray(val46)) {
          // Regular array likely containing numbers, write values to memory
          let offset = 0;
          const dv46 = new DataView(memory0.buffer);
          for (const v of val46) {
            _requireValidNumericPrimitive.bind(null, 'u8')(v);
            dv46.setUint8(ptr46+ offset, v, true);
            offset += 1;
          }
        } else {
          // TypedArray / ArrayBuffer-like, direct copy
          valData46 = new Uint8Array(val46.buffer || val46, val46.byteOffset, valLenBytes46);
          const out46 = new Uint8Array(memory0.buffer, ptr46, valLenBytes46);
          out46.set(valData46);
        }
        
        dataView(memory0).setUint32(base + 16, len46, true);
        dataView(memory0).setUint32(base + 12, ptr46, true);
        break;
      }
      case 'ui-intent': {
        const e = variant99.val;
        dataView(memory0).setInt8(base + 0, 7, true);
        var {instance: v47_0, intent: v47_1 } = e;
        dataView(memory0).setInt32(base + 8, toUint32(v47_0), true);
        var val48 = v47_1;
        var len48 = Array.isArray(val48) ? val48.length : val48.byteLength;
        var ptr48 = await realloc0Async(0, 0, 1, len48 * 1);
        
        let valData48;
        const valLenBytes48 = len48 * 1;
        if (Array.isArray(val48)) {
          // Regular array likely containing numbers, write values to memory
          let offset = 0;
          const dv48 = new DataView(memory0.buffer);
          for (const v of val48) {
            _requireValidNumericPrimitive.bind(null, 'u8')(v);
            dv48.setUint8(ptr48+ offset, v, true);
            offset += 1;
          }
        } else {
          // TypedArray / ArrayBuffer-like, direct copy
          valData48 = new Uint8Array(val48.buffer || val48, val48.byteOffset, valLenBytes48);
          const out48 = new Uint8Array(memory0.buffer, ptr48, valLenBytes48);
          out48.set(valData48);
        }
        
        dataView(memory0).setUint32(base + 16, len48, true);
        dataView(memory0).setUint32(base + 12, ptr48, true);
        break;
      }
      case 'surface-visible': {
        const e = variant99.val;
        dataView(memory0).setInt8(base + 0, 8, true);
        var {surface: v49_0, bodyKey: v49_1, viewState: v49_2 } = e;
        var {instance: v50_0, surface: v50_1 } = v49_0;
        dataView(memory0).setInt32(base + 8, toUint32(v50_0), true);
        
        var encodeRes = await _utf8AllocateAndEncodeAsync(v50_1, realloc0Async, memory0);
        var ptr51= encodeRes.ptr;
        var len51 = encodeRes.len;
        
        dataView(memory0).setUint32(base + 16, len51, true);
        dataView(memory0).setUint32(base + 12, ptr51, true);
        
        var encodeRes = await _utf8AllocateAndEncodeAsync(v49_1, realloc0Async, memory0);
        var ptr52= encodeRes.ptr;
        var len52 = encodeRes.len;
        
        dataView(memory0).setUint32(base + 24, len52, true);
        dataView(memory0).setUint32(base + 20, ptr52, true);
        var val53 = v49_2;
        var len53 = Array.isArray(val53) ? val53.length : val53.byteLength;
        var ptr53 = await realloc0Async(0, 0, 1, len53 * 1);
        
        let valData53;
        const valLenBytes53 = len53 * 1;
        if (Array.isArray(val53)) {
          // Regular array likely containing numbers, write values to memory
          let offset = 0;
          const dv53 = new DataView(memory0.buffer);
          for (const v of val53) {
            _requireValidNumericPrimitive.bind(null, 'u8')(v);
            dv53.setUint8(ptr53+ offset, v, true);
            offset += 1;
          }
        } else {
          // TypedArray / ArrayBuffer-like, direct copy
          valData53 = new Uint8Array(val53.buffer || val53, val53.byteOffset, valLenBytes53);
          const out53 = new Uint8Array(memory0.buffer, ptr53, valLenBytes53);
          out53.set(valData53);
        }
        
        dataView(memory0).setUint32(base + 32, len53, true);
        dataView(memory0).setUint32(base + 28, ptr53, true);
        break;
      }
      case 'surface-hidden': {
        const e = variant99.val;
        dataView(memory0).setInt8(base + 0, 9, true);
        var {surface: v54_0 } = e;
        var {instance: v55_0, surface: v55_1 } = v54_0;
        dataView(memory0).setInt32(base + 8, toUint32(v55_0), true);
        
        var encodeRes = await _utf8AllocateAndEncodeAsync(v55_1, realloc0Async, memory0);
        var ptr56= encodeRes.ptr;
        var len56 = encodeRes.len;
        
        dataView(memory0).setUint32(base + 16, len56, true);
        dataView(memory0).setUint32(base + 12, ptr56, true);
        break;
      }
      case 'surface-resized': {
        const e = variant99.val;
        dataView(memory0).setInt8(base + 0, 10, true);
        var {surface: v57_0, width: v57_1, height: v57_2 } = e;
        var {instance: v58_0, surface: v58_1 } = v57_0;
        dataView(memory0).setInt32(base + 8, toUint32(v58_0), true);
        
        var encodeRes = await _utf8AllocateAndEncodeAsync(v58_1, realloc0Async, memory0);
        var ptr59= encodeRes.ptr;
        var len59 = encodeRes.len;
        
        dataView(memory0).setUint32(base + 16, len59, true);
        dataView(memory0).setUint32(base + 12, ptr59, true);
        dataView(memory0).setInt32(base + 20, toUint32(v57_1), true);
        dataView(memory0).setInt32(base + 24, toUint32(v57_2), true);
        break;
      }
      case 'patch-ack': {
        const e = variant99.val;
        dataView(memory0).setInt8(base + 0, 11, true);
        var {receipt: v60_0, surface: v60_1, revision: v60_2 } = e;
        var {lifetime: v61_0, patchSequence: v61_1 } = v60_0;
        var {activationGeneration: v62_0, instanceId: v62_1, guestLifetime: v62_2 } = v61_0;
        dataView(memory0).setBigInt64(base + 8, toUint64(v62_0), true);
        dataView(memory0).setInt32(base + 16, toUint32(v62_1), true);
        dataView(memory0).setBigInt64(base + 24, toUint64(v62_2), true);
        dataView(memory0).setBigInt64(base + 32, toUint64(v61_1), true);
        var {instance: v63_0, surface: v63_1 } = v60_1;
        dataView(memory0).setInt32(base + 40, toUint32(v63_0), true);
        
        var encodeRes = await _utf8AllocateAndEncodeAsync(v63_1, realloc0Async, memory0);
        var ptr64= encodeRes.ptr;
        var len64 = encodeRes.len;
        
        dataView(memory0).setUint32(base + 48, len64, true);
        dataView(memory0).setUint32(base + 44, ptr64, true);
        dataView(memory0).setBigInt64(base + 56, toUint64(v60_2), true);
        break;
      }
      case 'patch-rejected': {
        const e = variant99.val;
        dataView(memory0).setInt8(base + 0, 12, true);
        var {receipt: v65_0, surface: v65_1, revision: v65_2, reason: v65_3 } = e;
        var {lifetime: v66_0, patchSequence: v66_1 } = v65_0;
        var {activationGeneration: v67_0, instanceId: v67_1, guestLifetime: v67_2 } = v66_0;
        dataView(memory0).setBigInt64(base + 8, toUint64(v67_0), true);
        dataView(memory0).setInt32(base + 16, toUint32(v67_1), true);
        dataView(memory0).setBigInt64(base + 24, toUint64(v67_2), true);
        dataView(memory0).setBigInt64(base + 32, toUint64(v66_1), true);
        var {instance: v68_0, surface: v68_1 } = v65_1;
        dataView(memory0).setInt32(base + 40, toUint32(v68_0), true);
        
        var encodeRes = await _utf8AllocateAndEncodeAsync(v68_1, realloc0Async, memory0);
        var ptr69= encodeRes.ptr;
        var len69 = encodeRes.len;
        
        dataView(memory0).setUint32(base + 48, len69, true);
        dataView(memory0).setUint32(base + 44, ptr69, true);
        dataView(memory0).setBigInt64(base + 56, toUint64(v65_2), true);
        
        var encodeRes = await _utf8AllocateAndEncodeAsync(v65_3, realloc0Async, memory0);
        var ptr70= encodeRes.ptr;
        var len70 = encodeRes.len;
        
        dataView(memory0).setUint32(base + 68, len70, true);
        dataView(memory0).setUint32(base + 64, ptr70, true);
        break;
      }
      case 'completed': {
        const e = variant99.val;
        dataView(memory0).setInt8(base + 0, 13, true);
        var {req: v71_0, outcome: v71_1 } = e;
        dataView(memory0).setBigInt64(base + 8, toUint64(v71_0), true);
        var variant74 = v71_1;
        switch (variant74.tag) {
          case 'ok': {
            const e = variant74.val;
            dataView(memory0).setInt8(base + 16, 0, true);
            var val72 = e;
            var len72 = Array.isArray(val72) ? val72.length : val72.byteLength;
            var ptr72 = await realloc0Async(0, 0, 1, len72 * 1);
            
            let valData72;
            const valLenBytes72 = len72 * 1;
            if (Array.isArray(val72)) {
              // Regular array likely containing numbers, write values to memory
              let offset = 0;
              const dv72 = new DataView(memory0.buffer);
              for (const v of val72) {
                _requireValidNumericPrimitive.bind(null, 'u8')(v);
                dv72.setUint8(ptr72+ offset, v, true);
                offset += 1;
              }
            } else {
              // TypedArray / ArrayBuffer-like, direct copy
              valData72 = new Uint8Array(val72.buffer || val72, val72.byteOffset, valLenBytes72);
              const out72 = new Uint8Array(memory0.buffer, ptr72, valLenBytes72);
              out72.set(valData72);
            }
            
            dataView(memory0).setUint32(base + 24, len72, true);
            dataView(memory0).setUint32(base + 20, ptr72, true);
            break;
          }
          case 'fault': {
            const e = variant74.val;
            dataView(memory0).setInt8(base + 16, 1, true);
            var val73 = e;
            var len73 = Array.isArray(val73) ? val73.length : val73.byteLength;
            var ptr73 = await realloc0Async(0, 0, 1, len73 * 1);
            
            let valData73;
            const valLenBytes73 = len73 * 1;
            if (Array.isArray(val73)) {
              // Regular array likely containing numbers, write values to memory
              let offset = 0;
              const dv73 = new DataView(memory0.buffer);
              for (const v of val73) {
                _requireValidNumericPrimitive.bind(null, 'u8')(v);
                dv73.setUint8(ptr73+ offset, v, true);
                offset += 1;
              }
            } else {
              // TypedArray / ArrayBuffer-like, direct copy
              valData73 = new Uint8Array(val73.buffer || val73, val73.byteOffset, valLenBytes73);
              const out73 = new Uint8Array(memory0.buffer, ptr73, valLenBytes73);
              out73.set(valData73);
            }
            
            dataView(memory0).setUint32(base + 24, len73, true);
            dataView(memory0).setUint32(base + 20, ptr73, true);
            break;
          }
          default: {
            throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant74.tag)}\` (received \`${variant74}\`) specified for \`CompletionResult\``);
          }
        }
        break;
      }
      case 'http-chunk': {
        const e = variant99.val;
        dataView(memory0).setInt8(base + 0, 14, true);
        var {req: v75_0, params: v75_1 } = e;
        dataView(memory0).setBigInt64(base + 8, toUint64(v75_0), true);
        var {bytes: v76_0, done: v76_1 } = v75_1;
        var val77 = v76_0;
        var len77 = Array.isArray(val77) ? val77.length : val77.byteLength;
        var ptr77 = await realloc0Async(0, 0, 1, len77 * 1);
        
        let valData77;
        const valLenBytes77 = len77 * 1;
        if (Array.isArray(val77)) {
          // Regular array likely containing numbers, write values to memory
          let offset = 0;
          const dv77 = new DataView(memory0.buffer);
          for (const v of val77) {
            _requireValidNumericPrimitive.bind(null, 'u8')(v);
            dv77.setUint8(ptr77+ offset, v, true);
            offset += 1;
          }
        } else {
          // TypedArray / ArrayBuffer-like, direct copy
          valData77 = new Uint8Array(val77.buffer || val77, val77.byteOffset, valLenBytes77);
          const out77 = new Uint8Array(memory0.buffer, ptr77, valLenBytes77);
          out77.set(valData77);
        }
        
        dataView(memory0).setUint32(base + 20, len77, true);
        dataView(memory0).setUint32(base + 16, ptr77, true);
        dataView(memory0).setInt8(base + 24, v76_1 ? 1 : 0, true);
        break;
      }
      case 'job-progress': {
        const e = variant99.val;
        dataView(memory0).setInt8(base + 0, 15, true);
        var {job: v78_0, progress: v78_1 } = e;
        dataView(memory0).setBigInt64(base + 8, toUint64(v78_0), true);
        var val79 = v78_1;
        var len79 = Array.isArray(val79) ? val79.length : val79.byteLength;
        var ptr79 = await realloc0Async(0, 0, 1, len79 * 1);
        
        let valData79;
        const valLenBytes79 = len79 * 1;
        if (Array.isArray(val79)) {
          // Regular array likely containing numbers, write values to memory
          let offset = 0;
          const dv79 = new DataView(memory0.buffer);
          for (const v of val79) {
            _requireValidNumericPrimitive.bind(null, 'u8')(v);
            dv79.setUint8(ptr79+ offset, v, true);
            offset += 1;
          }
        } else {
          // TypedArray / ArrayBuffer-like, direct copy
          valData79 = new Uint8Array(val79.buffer || val79, val79.byteOffset, valLenBytes79);
          const out79 = new Uint8Array(memory0.buffer, ptr79, valLenBytes79);
          out79.set(valData79);
        }
        
        dataView(memory0).setUint32(base + 20, len79, true);
        dataView(memory0).setUint32(base + 16, ptr79, true);
        break;
      }
      case 'job-completed': {
        const e = variant99.val;
        dataView(memory0).setInt8(base + 0, 16, true);
        var {job: v80_0, outcome: v80_1 } = e;
        dataView(memory0).setBigInt64(base + 8, toUint64(v80_0), true);
        var variant83 = v80_1;
        switch (variant83.tag) {
          case 'ok': {
            const e = variant83.val;
            dataView(memory0).setInt8(base + 16, 0, true);
            var val81 = e;
            var len81 = Array.isArray(val81) ? val81.length : val81.byteLength;
            var ptr81 = await realloc0Async(0, 0, 1, len81 * 1);
            
            let valData81;
            const valLenBytes81 = len81 * 1;
            if (Array.isArray(val81)) {
              // Regular array likely containing numbers, write values to memory
              let offset = 0;
              const dv81 = new DataView(memory0.buffer);
              for (const v of val81) {
                _requireValidNumericPrimitive.bind(null, 'u8')(v);
                dv81.setUint8(ptr81+ offset, v, true);
                offset += 1;
              }
            } else {
              // TypedArray / ArrayBuffer-like, direct copy
              valData81 = new Uint8Array(val81.buffer || val81, val81.byteOffset, valLenBytes81);
              const out81 = new Uint8Array(memory0.buffer, ptr81, valLenBytes81);
              out81.set(valData81);
            }
            
            dataView(memory0).setUint32(base + 24, len81, true);
            dataView(memory0).setUint32(base + 20, ptr81, true);
            break;
          }
          case 'fault': {
            const e = variant83.val;
            dataView(memory0).setInt8(base + 16, 1, true);
            var val82 = e;
            var len82 = Array.isArray(val82) ? val82.length : val82.byteLength;
            var ptr82 = await realloc0Async(0, 0, 1, len82 * 1);
            
            let valData82;
            const valLenBytes82 = len82 * 1;
            if (Array.isArray(val82)) {
              // Regular array likely containing numbers, write values to memory
              let offset = 0;
              const dv82 = new DataView(memory0.buffer);
              for (const v of val82) {
                _requireValidNumericPrimitive.bind(null, 'u8')(v);
                dv82.setUint8(ptr82+ offset, v, true);
                offset += 1;
              }
            } else {
              // TypedArray / ArrayBuffer-like, direct copy
              valData82 = new Uint8Array(val82.buffer || val82, val82.byteOffset, valLenBytes82);
              const out82 = new Uint8Array(memory0.buffer, ptr82, valLenBytes82);
              out82.set(valData82);
            }
            
            dataView(memory0).setUint32(base + 24, len82, true);
            dataView(memory0).setUint32(base + 20, ptr82, true);
            break;
          }
          default: {
            throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant83.tag)}\` (received \`${variant83}\`) specified for \`CompletionResult\``);
          }
        }
        break;
      }
      case 'message': {
        const e = variant99.val;
        dataView(memory0).setInt8(base + 0, 17, true);
        var {source: v84_0, payload: v84_1 } = e;
        var variant88 = v84_0;
        switch (variant88.tag) {
          case 'shell': {
            const e = variant88.val;
            dataView(memory0).setInt8(base + 8, 0, true);
            dataView(memory0).setInt32(base + 12, toUint32(e), true);
            break;
          }
          case 'backbone': {
            const e = variant88.val;
            dataView(memory0).setInt8(base + 8, 1, true);
            
            var encodeRes = await _utf8AllocateAndEncodeAsync(e, realloc0Async, memory0);
            var ptr85= encodeRes.ptr;
            var len85 = encodeRes.len;
            
            dataView(memory0).setUint32(base + 16, len85, true);
            dataView(memory0).setUint32(base + 12, ptr85, true);
            break;
          }
          case 'plugin-instance': {
            const e = variant88.val;
            dataView(memory0).setInt8(base + 8, 2, true);
            dataView(memory0).setInt32(base + 12, toUint32(e), true);
            break;
          }
          case 'extension': {
            const e = variant88.val;
            dataView(memory0).setInt8(base + 8, 3, true);
            
            var encodeRes = await _utf8AllocateAndEncodeAsync(e, realloc0Async, memory0);
            var ptr86= encodeRes.ptr;
            var len86 = encodeRes.len;
            
            dataView(memory0).setUint32(base + 16, len86, true);
            dataView(memory0).setUint32(base + 12, ptr86, true);
            break;
          }
          case 'topic': {
            const e = variant88.val;
            dataView(memory0).setInt8(base + 8, 4, true);
            
            var encodeRes = await _utf8AllocateAndEncodeAsync(e, realloc0Async, memory0);
            var ptr87= encodeRes.ptr;
            var len87 = encodeRes.len;
            
            dataView(memory0).setUint32(base + 16, len87, true);
            dataView(memory0).setUint32(base + 12, ptr87, true);
            break;
          }
          default: {
            throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant88.tag)}\` (received \`${variant88}\`) specified for \`MessageEndpoint\``);
          }
        }
        var val89 = v84_1;
        var len89 = Array.isArray(val89) ? val89.length : val89.byteLength;
        var ptr89 = await realloc0Async(0, 0, 1, len89 * 1);
        
        let valData89;
        const valLenBytes89 = len89 * 1;
        if (Array.isArray(val89)) {
          // Regular array likely containing numbers, write values to memory
          let offset = 0;
          const dv89 = new DataView(memory0.buffer);
          for (const v of val89) {
            _requireValidNumericPrimitive.bind(null, 'u8')(v);
            dv89.setUint8(ptr89+ offset, v, true);
            offset += 1;
          }
        } else {
          // TypedArray / ArrayBuffer-like, direct copy
          valData89 = new Uint8Array(val89.buffer || val89, val89.byteOffset, valLenBytes89);
          const out89 = new Uint8Array(memory0.buffer, ptr89, valLenBytes89);
          out89.set(valData89);
        }
        
        dataView(memory0).setUint32(base + 24, len89, true);
        dataView(memory0).setUint32(base + 20, ptr89, true);
        break;
      }
      case 'timer': {
        const e = variant99.val;
        dataView(memory0).setInt8(base + 0, 18, true);
        var {id: v90_0 } = e;
        dataView(memory0).setBigInt64(base + 8, toUint64(v90_0), true);
        break;
      }
      case 'wake': {
        dataView(memory0).setInt8(base + 0, 19, true);
        break;
      }
      case 'request': {
        const e = variant99.val;
        dataView(memory0).setInt8(base + 0, 20, true);
        var {req: v91_0, params: v91_1 } = e;
        dataView(memory0).setBigInt64(base + 8, toUint64(v91_0), true);
        var {origin: v92_0, capability: v92_1, payload: v92_2 } = v91_1;
        var variant96 = v92_0;
        switch (variant96.tag) {
          case 'shell': {
            const e = variant96.val;
            dataView(memory0).setInt8(base + 16, 0, true);
            dataView(memory0).setInt32(base + 20, toUint32(e), true);
            break;
          }
          case 'backbone': {
            const e = variant96.val;
            dataView(memory0).setInt8(base + 16, 1, true);
            
            var encodeRes = await _utf8AllocateAndEncodeAsync(e, realloc0Async, memory0);
            var ptr93= encodeRes.ptr;
            var len93 = encodeRes.len;
            
            dataView(memory0).setUint32(base + 24, len93, true);
            dataView(memory0).setUint32(base + 20, ptr93, true);
            break;
          }
          case 'plugin-instance': {
            const e = variant96.val;
            dataView(memory0).setInt8(base + 16, 2, true);
            dataView(memory0).setInt32(base + 20, toUint32(e), true);
            break;
          }
          case 'extension': {
            const e = variant96.val;
            dataView(memory0).setInt8(base + 16, 3, true);
            
            var encodeRes = await _utf8AllocateAndEncodeAsync(e, realloc0Async, memory0);
            var ptr94= encodeRes.ptr;
            var len94 = encodeRes.len;
            
            dataView(memory0).setUint32(base + 24, len94, true);
            dataView(memory0).setUint32(base + 20, ptr94, true);
            break;
          }
          case 'topic': {
            const e = variant96.val;
            dataView(memory0).setInt8(base + 16, 4, true);
            
            var encodeRes = await _utf8AllocateAndEncodeAsync(e, realloc0Async, memory0);
            var ptr95= encodeRes.ptr;
            var len95 = encodeRes.len;
            
            dataView(memory0).setUint32(base + 24, len95, true);
            dataView(memory0).setUint32(base + 20, ptr95, true);
            break;
          }
          default: {
            throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant96.tag)}\` (received \`${variant96}\`) specified for \`MessageEndpoint\``);
          }
        }
        
        var encodeRes = await _utf8AllocateAndEncodeAsync(v92_1, realloc0Async, memory0);
        var ptr97= encodeRes.ptr;
        var len97 = encodeRes.len;
        
        dataView(memory0).setUint32(base + 32, len97, true);
        dataView(memory0).setUint32(base + 28, ptr97, true);
        var val98 = v92_2;
        var len98 = Array.isArray(val98) ? val98.length : val98.byteLength;
        var ptr98 = await realloc0Async(0, 0, 1, len98 * 1);
        
        let valData98;
        const valLenBytes98 = len98 * 1;
        if (Array.isArray(val98)) {
          // Regular array likely containing numbers, write values to memory
          let offset = 0;
          const dv98 = new DataView(memory0.buffer);
          for (const v of val98) {
            _requireValidNumericPrimitive.bind(null, 'u8')(v);
            dv98.setUint8(ptr98+ offset, v, true);
            offset += 1;
          }
        } else {
          // TypedArray / ArrayBuffer-like, direct copy
          valData98 = new Uint8Array(val98.buffer || val98, val98.byteOffset, valLenBytes98);
          const out98 = new Uint8Array(memory0.buffer, ptr98, valLenBytes98);
          out98.set(valData98);
        }
        
        dataView(memory0).setUint32(base + 40, len98, true);
        dataView(memory0).setUint32(base + 36, ptr98, true);
        break;
      }
      default: {
        throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant99.tag)}\` (received \`${variant99}\`) specified for \`Event\``);
      }
    }
  }
  var {fuel: v101_0, deadlineMs: v101_1, maxEffects: v101_2, maxPatchBytes: v101_3, maxFrames: v101_4 } = arg1;
  _debugLog('[iface="semio:framework/reactor@1.0.0", function="poll"][Instruction::CallWasm] enter', {
    funcName: 'poll',
    paramCount: 7,
    async: true,
    postReturn: false,
  });
  const hostProvided = false;
  
  const [task, _wasm_call_currentTaskID] = createNewCurrentTask({
    componentIdx: 0,
    isAsync: true,
    isManualAsync: false,
    preserveFutureResult: false,
    entryFnName: 'reactor100Poll',
    getCallbackFn: () => callback_0,
    callbackFnName: callback_0,
    errHandling: 'throw-result-err',
    callingWasmExport: true,
  });
  
  
  const started = await task.enter();
  if (!started) {
    _debugLog('[Instruction::AsyncTaskReturn] failed to enter task', {
      taskID: task.id(),
      subtaskID: task.currentSubtask()?.id(),
    });
    throw new Error("failed to enter task");
  }
  
  
  if (0!== null) {
    task.setReturnMemoryIdx(0);
    task.setReturnMemory(() => memory0());
  }
  
  
  let ret;
  
  try {
    ret =  await  _withGlobalCurrentTaskMetaAsync({
      taskID: task.id(),
      componentIdx: task.componentIdx(),
      fn: () => reactor100Poll(result100, len100, toUint64(v101_0), toUint32(v101_1), toUint32(v101_2), toUint32(v101_3), toUint32(v101_4)),
    });
  } catch (err) {
    
    _debugLog('[Instruction::CallWasm] error during async call', {
      taskID: task.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    return task.completionPromise();
    
  }
  
  _debugLog('[iface="semio:framework/reactor@1.0.0", function="poll"][Instruction::AsyncTaskReturn]', {
    funcName: 'poll',
    paramCount: 1,
    componentIdx: 0,
    postReturn: false,
    hostProvided,
  });
  
  if (hostProvided) {
    _debugLog('[Instruction::AsyncTaskReturn] signaling host-provided async return completion', {
      task: task.id(),
      subtask: subtask?.id(),
      result: ret,
    })
    task.resolve([ret]);
    task.exit();
    return await task.completionPromise();
  }
  
  const componentState = getOrCreateAsyncState(0);
  if (!componentState) { throw new Error('failed to lookup current component state'); }
  
  queueMicrotask(async (resolve, reject) => {
    try {
      _debugLog("[Instruction::AsyncTaskReturn] starting driver loop", {
        fnName: 'poll',
        componentInstanceIdx: 0,
        taskID: task.id(),
      });
      await _driverLoop({
        componentInstanceIdx: 0,
        componentState,
        task,
        fnName: 'poll',
        isAsync: true,
        callbackResult: ret,
      });
    } catch (err) {
      _debugLog("[Instruction::AsyncTaskReturn] driver loop call failure", { err });
    }
  });
  
  let taskRes = await task.completionPromise();
  if (task.getErrHandling() === 'throw-result-err') {
    if (typeof taskRes !== 'object') {
      return taskRes;
    }
    if (taskRes.tag === 'err') { throw taskRes.val; }
    if (taskRes.tag === 'ok') { taskRes = taskRes.val; }
  }
  
  return taskRes;
  
}
let jobs100StartJob;

async function startJob(arg0, arg1, arg2) {
  
  var encodeRes = await _utf8AllocateAndEncodeAsync(arg1, realloc0Async, memory0);
  var ptr0= encodeRes.ptr;
  var len0 = encodeRes.len;
  
  var val1 = arg2;
  var len1 = Array.isArray(val1) ? val1.length : val1.byteLength;
  var ptr1 = await realloc0Async(0, 0, 1, len1 * 1);
  
  let valData1;
  const valLenBytes1 = len1 * 1;
  if (Array.isArray(val1)) {
    // Regular array likely containing numbers, write values to memory
    let offset = 0;
    const dv1 = new DataView(memory0.buffer);
    for (const v of val1) {
      _requireValidNumericPrimitive.bind(null, 'u8')(v);
      dv1.setUint8(ptr1+ offset, v, true);
      offset += 1;
    }
  } else {
    // TypedArray / ArrayBuffer-like, direct copy
    valData1 = new Uint8Array(val1.buffer || val1, val1.byteOffset, valLenBytes1);
    const out1 = new Uint8Array(memory0.buffer, ptr1, valLenBytes1);
    out1.set(valData1);
  }
  
  _debugLog('[iface="semio:framework/jobs@1.0.0", function="start-job"][Instruction::CallWasm] enter', {
    funcName: 'start-job',
    paramCount: 5,
    async: true,
    postReturn: false,
  });
  const hostProvided = false;
  
  const [task, _wasm_call_currentTaskID] = createNewCurrentTask({
    componentIdx: 0,
    isAsync: true,
    isManualAsync: false,
    preserveFutureResult: false,
    entryFnName: 'jobs100StartJob',
    getCallbackFn: () => callback_0,
    callbackFnName: callback_0,
    errHandling: 'throw-result-err',
    callingWasmExport: true,
  });
  
  
  const started = await task.enter();
  if (!started) {
    _debugLog('[Instruction::AsyncTaskReturn] failed to enter task', {
      taskID: task.id(),
      subtaskID: task.currentSubtask()?.id(),
    });
    throw new Error("failed to enter task");
  }
  
  
  if (0!== null) {
    task.setReturnMemoryIdx(0);
    task.setReturnMemory(() => memory0());
  }
  
  
  let ret;
  
  try {
    ret =  await  _withGlobalCurrentTaskMetaAsync({
      taskID: task.id(),
      componentIdx: task.componentIdx(),
      fn: () => jobs100StartJob(toUint64(arg0), ptr0, len0, ptr1, len1),
    });
  } catch (err) {
    
    _debugLog('[Instruction::CallWasm] error during async call', {
      taskID: task.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    return task.completionPromise();
    
  }
  
  _debugLog('[iface="semio:framework/jobs@1.0.0", function="start-job"][Instruction::AsyncTaskReturn]', {
    funcName: 'start-job',
    paramCount: 1,
    componentIdx: 0,
    postReturn: false,
    hostProvided,
  });
  
  if (hostProvided) {
    _debugLog('[Instruction::AsyncTaskReturn] signaling host-provided async return completion', {
      task: task.id(),
      subtask: subtask?.id(),
      result: ret,
    })
    task.resolve([ret]);
    task.exit();
    return await task.completionPromise();
  }
  
  const componentState = getOrCreateAsyncState(0);
  if (!componentState) { throw new Error('failed to lookup current component state'); }
  
  queueMicrotask(async (resolve, reject) => {
    try {
      _debugLog("[Instruction::AsyncTaskReturn] starting driver loop", {
        fnName: 'start-job',
        componentInstanceIdx: 0,
        taskID: task.id(),
      });
      await _driverLoop({
        componentInstanceIdx: 0,
        componentState,
        task,
        fnName: 'start-job',
        isAsync: true,
        callbackResult: ret,
      });
    } catch (err) {
      _debugLog("[Instruction::AsyncTaskReturn] driver loop call failure", { err });
    }
  });
  
  let taskRes = await task.completionPromise();
  if (task.getErrHandling() === 'throw-result-err') {
    if (typeof taskRes !== 'object') {
      return taskRes;
    }
    if (taskRes.tag === 'err') { throw taskRes.val; }
    if (taskRes.tag === 'ok') { taskRes = taskRes.val; }
  }
  
  return taskRes;
  
}
let jobs100StepJob;

async function stepJob(arg0, arg1) {
  var {fuel: v0_0, deadlineMs: v0_1 } = arg1;
  _debugLog('[iface="semio:framework/jobs@1.0.0", function="step-job"][Instruction::CallWasm] enter', {
    funcName: 'step-job',
    paramCount: 3,
    async: true,
    postReturn: false,
  });
  const hostProvided = false;
  
  const [task, _wasm_call_currentTaskID] = createNewCurrentTask({
    componentIdx: 0,
    isAsync: true,
    isManualAsync: false,
    preserveFutureResult: false,
    entryFnName: 'jobs100StepJob',
    getCallbackFn: () => callback_0,
    callbackFnName: callback_0,
    errHandling: 'throw-result-err',
    callingWasmExport: true,
  });
  
  
  const started = await task.enter();
  if (!started) {
    _debugLog('[Instruction::AsyncTaskReturn] failed to enter task', {
      taskID: task.id(),
      subtaskID: task.currentSubtask()?.id(),
    });
    throw new Error("failed to enter task");
  }
  
  
  if (0!== null) {
    task.setReturnMemoryIdx(0);
    task.setReturnMemory(() => memory0());
  }
  
  
  let ret;
  
  try {
    ret =  await  _withGlobalCurrentTaskMetaAsync({
      taskID: task.id(),
      componentIdx: task.componentIdx(),
      fn: () => jobs100StepJob(toUint64(arg0), toUint64(v0_0), toUint32(v0_1)),
    });
  } catch (err) {
    
    _debugLog('[Instruction::CallWasm] error during async call', {
      taskID: task.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    return task.completionPromise();
    
  }
  
  _debugLog('[iface="semio:framework/jobs@1.0.0", function="step-job"][Instruction::AsyncTaskReturn]', {
    funcName: 'step-job',
    paramCount: 1,
    componentIdx: 0,
    postReturn: false,
    hostProvided,
  });
  
  if (hostProvided) {
    _debugLog('[Instruction::AsyncTaskReturn] signaling host-provided async return completion', {
      task: task.id(),
      subtask: subtask?.id(),
      result: ret,
    })
    task.resolve([ret]);
    task.exit();
    return await task.completionPromise();
  }
  
  const componentState = getOrCreateAsyncState(0);
  if (!componentState) { throw new Error('failed to lookup current component state'); }
  
  queueMicrotask(async (resolve, reject) => {
    try {
      _debugLog("[Instruction::AsyncTaskReturn] starting driver loop", {
        fnName: 'step-job',
        componentInstanceIdx: 0,
        taskID: task.id(),
      });
      await _driverLoop({
        componentInstanceIdx: 0,
        componentState,
        task,
        fnName: 'step-job',
        isAsync: true,
        callbackResult: ret,
      });
    } catch (err) {
      _debugLog("[Instruction::AsyncTaskReturn] driver loop call failure", { err });
    }
  });
  
  let taskRes = await task.completionPromise();
  if (task.getErrHandling() === 'throw-result-err') {
    if (typeof taskRes !== 'object') {
      return taskRes;
    }
    if (taskRes.tag === 'err') { throw taskRes.val; }
    if (taskRes.tag === 'ok') { taskRes = taskRes.val; }
  }
  
  return taskRes;
  
}
let jobs100CancelJob;

async function cancelJob(arg0) {
  _debugLog('[iface="semio:framework/jobs@1.0.0", function="cancel-job"][Instruction::CallWasm] enter', {
    funcName: 'cancel-job',
    paramCount: 1,
    async: true,
    postReturn: false,
  });
  const hostProvided = false;
  
  const [task, _wasm_call_currentTaskID] = createNewCurrentTask({
    componentIdx: 0,
    isAsync: true,
    isManualAsync: false,
    preserveFutureResult: false,
    entryFnName: 'jobs100CancelJob',
    getCallbackFn: () => callback_0,
    callbackFnName: callback_0,
    errHandling: 'none',
    callingWasmExport: true,
  });
  
  
  const started = await task.enter();
  if (!started) {
    _debugLog('[Instruction::AsyncTaskReturn] failed to enter task', {
      taskID: task.id(),
      subtaskID: task.currentSubtask()?.id(),
    });
    throw new Error("failed to enter task");
  }
  
  
  if (null!== null) {
    task.setReturnMemoryIdx(null);
    task.setReturnMemory(() => null());
  }
  
  
  let ret;
  
  try {
    ret =  await  _withGlobalCurrentTaskMetaAsync({
      taskID: task.id(),
      componentIdx: task.componentIdx(),
      fn: () => jobs100CancelJob(toUint64(arg0)),
    });
  } catch (err) {
    
    _debugLog('[Instruction::CallWasm] error during async call', {
      taskID: task.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    return task.completionPromise();
    
  }
  
  _debugLog('[iface="semio:framework/jobs@1.0.0", function="cancel-job"][Instruction::AsyncTaskReturn]', {
    funcName: 'cancel-job',
    paramCount: 0,
    componentIdx: 0,
    postReturn: false,
    hostProvided,
  });
  
  if (hostProvided) {
    _debugLog('[Instruction::AsyncTaskReturn] signaling host-provided async return completion', {
      task: task.id(),
      subtask: subtask?.id(),
      result: ret,
    })
    task.resolve([ret]);
    task.exit();
    return await task.completionPromise();
  }
  
  const componentState = getOrCreateAsyncState(0);
  if (!componentState) { throw new Error('failed to lookup current component state'); }
  
  queueMicrotask(async (resolve, reject) => {
    try {
      _debugLog("[Instruction::AsyncTaskReturn] starting driver loop", {
        fnName: 'cancel-job',
        componentInstanceIdx: 0,
        taskID: task.id(),
      });
      await _driverLoop({
        componentInstanceIdx: 0,
        componentState,
        task,
        fnName: 'cancel-job',
        isAsync: true,
        callbackResult: ret,
      });
    } catch (err) {
      _debugLog("[Instruction::AsyncTaskReturn] driver loop call failure", { err });
    }
  });
  
  let taskRes = await task.completionPromise();
  if (task.getErrHandling() === 'throw-result-err') {
    if (typeof taskRes !== 'object') {
      return taskRes;
    }
    if (taskRes.tag === 'err') { throw taskRes.val; }
    if (taskRes.tag === 'ok') { taskRes = taskRes.val; }
  }
  
  return taskRes;
  
}
let jobs100TakeSegmentedDownloadChunk;

async function takeSegmentedDownloadChunk(arg0, arg1) {
  _debugLog('[iface="semio:framework/jobs@1.0.0", function="take-segmented-download-chunk"][Instruction::CallWasm] enter', {
    funcName: 'take-segmented-download-chunk',
    paramCount: 2,
    async: true,
    postReturn: false,
  });
  const hostProvided = false;
  
  const [task, _wasm_call_currentTaskID] = createNewCurrentTask({
    componentIdx: 0,
    isAsync: true,
    isManualAsync: false,
    preserveFutureResult: false,
    entryFnName: 'jobs100TakeSegmentedDownloadChunk',
    getCallbackFn: () => callback_0,
    callbackFnName: callback_0,
    errHandling: 'throw-result-err',
    callingWasmExport: true,
  });
  
  
  const started = await task.enter();
  if (!started) {
    _debugLog('[Instruction::AsyncTaskReturn] failed to enter task', {
      taskID: task.id(),
      subtaskID: task.currentSubtask()?.id(),
    });
    throw new Error("failed to enter task");
  }
  
  
  if (0!== null) {
    task.setReturnMemoryIdx(0);
    task.setReturnMemory(() => memory0());
  }
  
  
  let ret;
  
  try {
    ret =  await  _withGlobalCurrentTaskMetaAsync({
      taskID: task.id(),
      componentIdx: task.componentIdx(),
      fn: () => jobs100TakeSegmentedDownloadChunk(toUint32(arg0), toUint64(arg1)),
    });
  } catch (err) {
    
    _debugLog('[Instruction::CallWasm] error during async call', {
      taskID: task.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    return task.completionPromise();
    
  }
  
  _debugLog('[iface="semio:framework/jobs@1.0.0", function="take-segmented-download-chunk"][Instruction::AsyncTaskReturn]', {
    funcName: 'take-segmented-download-chunk',
    paramCount: 1,
    componentIdx: 0,
    postReturn: false,
    hostProvided,
  });
  
  if (hostProvided) {
    _debugLog('[Instruction::AsyncTaskReturn] signaling host-provided async return completion', {
      task: task.id(),
      subtask: subtask?.id(),
      result: ret,
    })
    task.resolve([ret]);
    task.exit();
    return await task.completionPromise();
  }
  
  const componentState = getOrCreateAsyncState(0);
  if (!componentState) { throw new Error('failed to lookup current component state'); }
  
  queueMicrotask(async (resolve, reject) => {
    try {
      _debugLog("[Instruction::AsyncTaskReturn] starting driver loop", {
        fnName: 'take-segmented-download-chunk',
        componentInstanceIdx: 0,
        taskID: task.id(),
      });
      await _driverLoop({
        componentInstanceIdx: 0,
        componentState,
        task,
        fnName: 'take-segmented-download-chunk',
        isAsync: true,
        callbackResult: ret,
      });
    } catch (err) {
      _debugLog("[Instruction::AsyncTaskReturn] driver loop call failure", { err });
    }
  });
  
  let taskRes = await task.completionPromise();
  if (task.getErrHandling() === 'throw-result-err') {
    if (typeof taskRes !== 'object') {
      return taskRes;
    }
    if (taskRes.tag === 'err') { throw taskRes.val; }
    if (taskRes.tag === 'ok') { taskRes = taskRes.val; }
  }
  
  return taskRes;
  
}
let checkpoint100Checkpoint;

async function checkpoint() {
  _debugLog('[iface="semio:framework/checkpoint@1.0.0", function="checkpoint"][Instruction::CallWasm] enter', {
    funcName: 'checkpoint',
    paramCount: 0,
    async: true,
    postReturn: false,
  });
  const hostProvided = false;
  
  const [task, _wasm_call_currentTaskID] = createNewCurrentTask({
    componentIdx: 0,
    isAsync: true,
    isManualAsync: false,
    preserveFutureResult: false,
    entryFnName: 'checkpoint100Checkpoint',
    getCallbackFn: () => callback_0,
    callbackFnName: callback_0,
    errHandling: 'throw-result-err',
    callingWasmExport: true,
  });
  
  
  const started = await task.enter();
  if (!started) {
    _debugLog('[Instruction::AsyncTaskReturn] failed to enter task', {
      taskID: task.id(),
      subtaskID: task.currentSubtask()?.id(),
    });
    throw new Error("failed to enter task");
  }
  
  
  if (0!== null) {
    task.setReturnMemoryIdx(0);
    task.setReturnMemory(() => memory0());
  }
  
  
  let ret;
  
  try {
    ret =  await  _withGlobalCurrentTaskMetaAsync({
      taskID: task.id(),
      componentIdx: task.componentIdx(),
      fn: () => checkpoint100Checkpoint(),
    });
  } catch (err) {
    
    _debugLog('[Instruction::CallWasm] error during async call', {
      taskID: task.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    return task.completionPromise();
    
  }
  
  _debugLog('[iface="semio:framework/checkpoint@1.0.0", function="checkpoint"][Instruction::AsyncTaskReturn]', {
    funcName: 'checkpoint',
    paramCount: 1,
    componentIdx: 0,
    postReturn: false,
    hostProvided,
  });
  
  if (hostProvided) {
    _debugLog('[Instruction::AsyncTaskReturn] signaling host-provided async return completion', {
      task: task.id(),
      subtask: subtask?.id(),
      result: ret,
    })
    task.resolve([ret]);
    task.exit();
    return await task.completionPromise();
  }
  
  const componentState = getOrCreateAsyncState(0);
  if (!componentState) { throw new Error('failed to lookup current component state'); }
  
  queueMicrotask(async (resolve, reject) => {
    try {
      _debugLog("[Instruction::AsyncTaskReturn] starting driver loop", {
        fnName: 'checkpoint',
        componentInstanceIdx: 0,
        taskID: task.id(),
      });
      await _driverLoop({
        componentInstanceIdx: 0,
        componentState,
        task,
        fnName: 'checkpoint',
        isAsync: true,
        callbackResult: ret,
      });
    } catch (err) {
      _debugLog("[Instruction::AsyncTaskReturn] driver loop call failure", { err });
    }
  });
  
  let taskRes = await task.completionPromise();
  if (task.getErrHandling() === 'throw-result-err') {
    if (typeof taskRes !== 'object') {
      return taskRes;
    }
    if (taskRes.tag === 'err') { throw taskRes.val; }
    if (taskRes.tag === 'ok') { taskRes = taskRes.val; }
  }
  
  return taskRes;
  
}
let checkpoint100Restore;

async function restore(arg0) {
  var val0 = arg0;
  var len0 = Array.isArray(val0) ? val0.length : val0.byteLength;
  var ptr0 = await realloc0Async(0, 0, 1, len0 * 1);
  
  let valData0;
  const valLenBytes0 = len0 * 1;
  if (Array.isArray(val0)) {
    // Regular array likely containing numbers, write values to memory
    let offset = 0;
    const dv0 = new DataView(memory0.buffer);
    for (const v of val0) {
      _requireValidNumericPrimitive.bind(null, 'u8')(v);
      dv0.setUint8(ptr0+ offset, v, true);
      offset += 1;
    }
  } else {
    // TypedArray / ArrayBuffer-like, direct copy
    valData0 = new Uint8Array(val0.buffer || val0, val0.byteOffset, valLenBytes0);
    const out0 = new Uint8Array(memory0.buffer, ptr0, valLenBytes0);
    out0.set(valData0);
  }
  
  _debugLog('[iface="semio:framework/checkpoint@1.0.0", function="restore"][Instruction::CallWasm] enter', {
    funcName: 'restore',
    paramCount: 2,
    async: true,
    postReturn: false,
  });
  const hostProvided = false;
  
  const [task, _wasm_call_currentTaskID] = createNewCurrentTask({
    componentIdx: 0,
    isAsync: true,
    isManualAsync: false,
    preserveFutureResult: false,
    entryFnName: 'checkpoint100Restore',
    getCallbackFn: () => callback_0,
    callbackFnName: callback_0,
    errHandling: 'throw-result-err',
    callingWasmExport: true,
  });
  
  
  const started = await task.enter();
  if (!started) {
    _debugLog('[Instruction::AsyncTaskReturn] failed to enter task', {
      taskID: task.id(),
      subtaskID: task.currentSubtask()?.id(),
    });
    throw new Error("failed to enter task");
  }
  
  
  if (0!== null) {
    task.setReturnMemoryIdx(0);
    task.setReturnMemory(() => memory0());
  }
  
  
  let ret;
  
  try {
    ret =  await  _withGlobalCurrentTaskMetaAsync({
      taskID: task.id(),
      componentIdx: task.componentIdx(),
      fn: () => checkpoint100Restore(ptr0, len0),
    });
  } catch (err) {
    
    _debugLog('[Instruction::CallWasm] error during async call', {
      taskID: task.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    return task.completionPromise();
    
  }
  
  _debugLog('[iface="semio:framework/checkpoint@1.0.0", function="restore"][Instruction::AsyncTaskReturn]', {
    funcName: 'restore',
    paramCount: 1,
    componentIdx: 0,
    postReturn: false,
    hostProvided,
  });
  
  if (hostProvided) {
    _debugLog('[Instruction::AsyncTaskReturn] signaling host-provided async return completion', {
      task: task.id(),
      subtask: subtask?.id(),
      result: ret,
    })
    task.resolve([ret]);
    task.exit();
    return await task.completionPromise();
  }
  
  const componentState = getOrCreateAsyncState(0);
  if (!componentState) { throw new Error('failed to lookup current component state'); }
  
  queueMicrotask(async (resolve, reject) => {
    try {
      _debugLog("[Instruction::AsyncTaskReturn] starting driver loop", {
        fnName: 'restore',
        componentInstanceIdx: 0,
        taskID: task.id(),
      });
      await _driverLoop({
        componentInstanceIdx: 0,
        componentState,
        task,
        fnName: 'restore',
        isAsync: true,
        callbackResult: ret,
      });
    } catch (err) {
      _debugLog("[Instruction::AsyncTaskReturn] driver loop call failure", { err });
    }
  });
  
  let taskRes = await task.completionPromise();
  if (task.getErrHandling() === 'throw-result-err') {
    if (typeof taskRes !== 'object') {
      return taskRes;
    }
    if (taskRes.tag === 'err') { throw taskRes.val; }
    if (taskRes.tag === 'ok') { taskRes = taskRes.val; }
  }
  
  return taskRes;
  
}
let describe100Describe;

async function describe() {
  _debugLog('[iface="semio:framework/describe@1.0.0", function="describe"][Instruction::CallWasm] enter', {
    funcName: 'describe',
    paramCount: 0,
    async: true,
    postReturn: false,
  });
  const hostProvided = false;
  
  const [task, _wasm_call_currentTaskID] = createNewCurrentTask({
    componentIdx: 0,
    isAsync: true,
    isManualAsync: false,
    preserveFutureResult: false,
    entryFnName: 'describe100Describe',
    getCallbackFn: () => callback_0,
    callbackFnName: callback_0,
    errHandling: 'none',
    callingWasmExport: true,
  });
  
  
  const started = await task.enter();
  if (!started) {
    _debugLog('[Instruction::AsyncTaskReturn] failed to enter task', {
      taskID: task.id(),
      subtaskID: task.currentSubtask()?.id(),
    });
    throw new Error("failed to enter task");
  }
  
  
  if (0!== null) {
    task.setReturnMemoryIdx(0);
    task.setReturnMemory(() => memory0());
  }
  
  
  let ret;
  
  try {
    ret =  await  _withGlobalCurrentTaskMetaAsync({
      taskID: task.id(),
      componentIdx: task.componentIdx(),
      fn: () => describe100Describe(),
    });
  } catch (err) {
    
    _debugLog('[Instruction::CallWasm] error during async call', {
      taskID: task.id(),
      err,
    });
    task.setErrored(err);
    task.reject(err);
    task.exit();
    return task.completionPromise();
    
  }
  
  _debugLog('[iface="semio:framework/describe@1.0.0", function="describe"][Instruction::AsyncTaskReturn]', {
    funcName: 'describe',
    paramCount: 1,
    componentIdx: 0,
    postReturn: false,
    hostProvided,
  });
  
  if (hostProvided) {
    _debugLog('[Instruction::AsyncTaskReturn] signaling host-provided async return completion', {
      task: task.id(),
      subtask: subtask?.id(),
      result: ret,
    })
    task.resolve([ret]);
    task.exit();
    return await task.completionPromise();
  }
  
  const componentState = getOrCreateAsyncState(0);
  if (!componentState) { throw new Error('failed to lookup current component state'); }
  
  queueMicrotask(async (resolve, reject) => {
    try {
      _debugLog("[Instruction::AsyncTaskReturn] starting driver loop", {
        fnName: 'describe',
        componentInstanceIdx: 0,
        taskID: task.id(),
      });
      await _driverLoop({
        componentInstanceIdx: 0,
        componentState,
        task,
        fnName: 'describe',
        isAsync: true,
        callbackResult: ret,
      });
    } catch (err) {
      _debugLog("[Instruction::AsyncTaskReturn] driver loop call failure", { err });
    }
  });
  
  let taskRes = await task.completionPromise();
  if (task.getErrHandling() === 'throw-result-err') {
    if (typeof taskRes !== 'object') {
      return taskRes;
    }
    if (taskRes.tag === 'err') { throw taskRes.val; }
    if (taskRes.tag === 'ok') { taskRes = taskRes.val; }
  }
  
  return taskRes;
  
}
let trampoline0 = _trampoline0.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 0,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline0.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatS64],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline0,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 0,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline0.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatS64],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline0,
},
);
const trampoline1 = taskCancel.bind(null, 0);

const trampoline2 = taskReturn.bind(
null,
{
  componentIdx: 0,
  useDirectParams: true,
  getMemoryFn: () => null,
  memoryIdx: null,
  callbackFnIdx: null,
  liftFns: [],
  lowerFns: [],
  stringEncoding: 'utf8',
},
);
const trampoline3 = waitableJoin.bind(null, 0);

const trampoline4 = waitableSetNew.bind(null, 0);

const trampoline5 = waitableSetDrop.bind(null, 0);

function trampoline6(handle) {
  const handleEntry = rscTableRemove(handleTable1, handle);
  if (handleEntry.own) {
    
    const rsc = captureTable1.get(handleEntry.rep);
    if (rsc) {
      if (rsc[symbolDispose]) rsc[symbolDispose]();
      captureTable1.delete(handleEntry.rep);
    } else if (Error$1[symbolCabiDispose]) {
      Error$1[symbolCabiDispose](handleEntry.rep);
    }
  }
}
function trampoline7(handle) {
  const handleEntry = rscTableRemove(handleTable0, handle);
  if (handleEntry.own) {
    
    const rsc = captureTable0.get(handleEntry.rep);
    if (rsc) {
      if (rsc[symbolDispose]) rsc[symbolDispose]();
      captureTable0.delete(handleEntry.rep);
    } else if (Pollable[symbolCabiDispose]) {
      Pollable[symbolCabiDispose](handleEntry.rep);
    }
  }
}
function trampoline8(handle) {
  const handleEntry = rscTableRemove(handleTable2, handle);
  if (handleEntry.own) {
    
    const rsc = captureTable2.get(handleEntry.rep);
    if (rsc) {
      if (rsc[symbolDispose]) rsc[symbolDispose]();
      captureTable2.delete(handleEntry.rep);
    } else if (InputStream[symbolCabiDispose]) {
      InputStream[symbolCabiDispose](handleEntry.rep);
    }
  }
}
function trampoline9(handle) {
  const handleEntry = rscTableRemove(handleTable3, handle);
  if (handleEntry.own) {
    
    const rsc = captureTable3.get(handleEntry.rep);
    if (rsc) {
      if (rsc[symbolDispose]) rsc[symbolDispose]();
      captureTable3.delete(handleEntry.rep);
    } else if (OutputStream[symbolCabiDispose]) {
      OutputStream[symbolCabiDispose](handleEntry.rep);
    }
  }
}
function trampoline10(handle) {
  const handleEntry = rscTableRemove(handleTable4, handle);
  if (handleEntry.own) {
    
    const rsc = captureTable4.get(handleEntry.rep);
    if (rsc) {
      if (rsc[symbolDispose]) rsc[symbolDispose]();
      captureTable4.delete(handleEntry.rep);
    } else if (TerminalInput[symbolCabiDispose]) {
      TerminalInput[symbolCabiDispose](handleEntry.rep);
    }
  }
}
function trampoline11(handle) {
  const handleEntry = rscTableRemove(handleTable5, handle);
  if (handleEntry.own) {
    
    const rsc = captureTable5.get(handleEntry.rep);
    if (rsc) {
      if (rsc[symbolDispose]) rsc[symbolDispose]();
      captureTable5.delete(handleEntry.rep);
    } else if (TerminalOutput[symbolCabiDispose]) {
      TerminalOutput[symbolCabiDispose](handleEntry.rep);
    }
  }
}
let trampoline12 = _trampoline12.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 12,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline12.manuallyAsync,
  paramLiftFns: [
  _liftFlatResult({
    caseMetas: [['ok', null, 0, 0, 0],['err', null, 0, 0, 0],],
    variantSize32: 1,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 1,
  })
  ],
  resultLowerFns: [],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline12,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 12,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline12.manuallyAsync,
  paramLiftFns: [
  _liftFlatResult({
    caseMetas: [['ok', null, 0, 0, 0],['err', null, 0, 0, 0],],
    variantSize32: 1,
    variantAlign32: 1,
    variantPayloadOffset32: 1,
    variantFlatCount: 1,
  })
  ],
  resultLowerFns: [],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline12,
},
);
let trampoline13 = _trampoline13.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 13,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline13.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 0)],
  resultLowerFns: [],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline13,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 13,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline13.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 0)],
  resultLowerFns: [],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline13,
},
);
let trampoline14 = _trampoline14.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 14,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline14.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 3)],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Pollable(obj) {
      if (!(obj instanceof Pollable)) {
        throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt0;
        captureTable0.set(rep, obj);
        handle = rscTableCreateOwn(handleTable0, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline14,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 14,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline14.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 3)],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Pollable(obj) {
      if (!(obj instanceof Pollable)) {
        throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt0;
        captureTable0.set(rep, obj);
        handle = rscTableCreateOwn(handleTable0, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline14,
},
);
let trampoline15 = _trampoline15.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 15,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline15.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_InputStream(obj) {
      if (!(obj instanceof InputStream)) {
        throw new TypeError('Resource error: Not a valid \"InputStream\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt2;
        captureTable2.set(rep, obj);
        handle = rscTableCreateOwn(handleTable2, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline15,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 15,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline15.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_InputStream(obj) {
      if (!(obj instanceof InputStream)) {
        throw new TypeError('Resource error: Not a valid \"InputStream\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt2;
        captureTable2.set(rep, obj);
        handle = rscTableCreateOwn(handleTable2, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline15,
},
);
let trampoline16 = _trampoline16.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 16,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline16.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_OutputStream(obj) {
      if (!(obj instanceof OutputStream)) {
        throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt3;
        captureTable3.set(rep, obj);
        handle = rscTableCreateOwn(handleTable3, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline16,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 16,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline16.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_OutputStream(obj) {
      if (!(obj instanceof OutputStream)) {
        throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt3;
        captureTable3.set(rep, obj);
        handle = rscTableCreateOwn(handleTable3, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline16,
},
);
let trampoline17 = _trampoline17.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 17,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline17.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_OutputStream(obj) {
      if (!(obj instanceof OutputStream)) {
        throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt3;
        captureTable3.set(rep, obj);
        handle = rscTableCreateOwn(handleTable3, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline17,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 17,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline17.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_OutputStream(obj) {
      if (!(obj instanceof OutputStream)) {
        throw new TypeError('Resource error: Not a valid \"OutputStream\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt3;
        captureTable3.set(rep, obj);
        handle = rscTableCreateOwn(handleTable3, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline17,
},
);
let trampoline18 = _trampoline18.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 18,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline18.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatU64],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline18,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 18,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline18.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatU64],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline18,
},
);
let trampoline19 = _trampoline19.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 19,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline19.manuallyAsync,
  paramLiftFns: [_liftFlatU64],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Pollable(obj) {
      if (!(obj instanceof Pollable)) {
        throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt0;
        captureTable0.set(rep, obj);
        handle = rscTableCreateOwn(handleTable0, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline19,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 19,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline19.manuallyAsync,
  paramLiftFns: [_liftFlatU64],
  resultLowerFns: [_lowerFlatOwn({
    componentIdx: 0,
    lowerFn: 
    function lowerImportedOwnedHost_Pollable(obj) {
      if (!(obj instanceof Pollable)) {
        throw new TypeError('Resource error: Not a valid \"Pollable\" resource.');
      }
      let handle = obj[symbolRscHandle];
      if (!handle) {
        const rep = obj[symbolRscRep] || ++captureCnt0;
        captureTable0.set(rep, obj);
        handle = rscTableCreateOwn(handleTable0, rep);
      }
      return handle;
    }
    ,
  })],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: null,
  stringEncoding: 'utf8',
  getMemoryFn: () => null,
  getReallocFn: undefined,
  importFn: _trampoline19,
},
);
let trampoline20 = _trampoline20.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 20,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline20.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU64, 8, 8],[_lowerFlatU64, 8, 8],], size32: 16, align32: 8 })],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline20,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 20,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline20.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatTuple({ elemLowerMetas: [[_lowerFlatU64, 8, 8],[_lowerFlatU64, 8, 8],], size32: 16, align32: 8 })],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline20,
},
);
let trampoline21 = _trampoline21.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 21,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline21.manuallyAsync,
  paramLiftFns: [_liftFlatStringAny,_liftFlatStringAny],
  resultLowerFns: [],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline21,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 21,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline21.manuallyAsync,
  paramLiftFns: [_liftFlatStringAny,_liftFlatStringAny],
  resultLowerFns: [],
  hasResultPointer: false,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline21,
},
);

const trampoline22 = waitableSetPoll.bind(
null,
{
  componentIdx: 0,
  isAsync: false,
  isCancellable: false,
  memoryIdx: 0,
  getMemoryFn: () => memory0,
}
);

const trampoline23 = taskReturn.bind(
null,
{
  componentIdx: 0,
  useDirectParams: true,
  getMemoryFn: () => memory0,
  memoryIdx: 0,
  callbackFnIdx: null,
  liftFns: [
  _liftFlatResult({
    caseMetas: [['ok', null, 0, 0, 0],['err', _liftFlatVariant({
      caseMetas: [['fault', _liftFlatList({
        elemLiftFn: _liftFlatU8,
        elemAlign32: 1,
        elemSize32: 1,
        typedArray: Uint8Array,
      }), 8, 4, 2],],
      variantSize32: 12,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 3,
    } ), 12, 4, 3],],
    variantSize32: 16,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 4,
  })
  ],
  lowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 16, 4, 4 ],
    [ 'err', _lowerFlatVariant({
      caseMetas: [[ 'fault', _lowerFlatList({
        elemLowerFn: _lowerFlatU8,
        elemSize32: 1,
        elemAlign32: 1,
      }), 8, 4, 2 ],],
      variantSize32: 12,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 3,
    } ), 16, 4, 4 ],
    ],
    variantSize32: 16,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 4,
  })
  ],
  stringEncoding: 'utf8',
},
);
const trampoline24 = taskReturn.bind(
null,
{
  componentIdx: 0,
  useDirectParams: true,
  getMemoryFn: () => memory0,
  memoryIdx: 0,
  callbackFnIdx: null,
  liftFns: [
  _liftFlatResult({
    caseMetas: [['ok', _liftFlatList({
      elemLiftFn: _liftFlatU8,
      elemAlign32: 1,
      elemSize32: 1,
      typedArray: Uint8Array,
    }), 8, 4, 2],['err', _liftFlatVariant({
      caseMetas: [['fault', _liftFlatList({
        elemLiftFn: _liftFlatU8,
        elemAlign32: 1,
        elemSize32: 1,
        typedArray: Uint8Array,
      }), 8, 4, 2],],
      variantSize32: 12,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 3,
    } ), 12, 4, 3],],
    variantSize32: 16,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 4,
  })
  ],
  lowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatList({
      elemLowerFn: _lowerFlatU8,
      elemSize32: 1,
      elemAlign32: 1,
    }), 16, 4, 4 ],
    [ 'err', _lowerFlatVariant({
      caseMetas: [[ 'fault', _lowerFlatList({
        elemLowerFn: _lowerFlatU8,
        elemSize32: 1,
        elemAlign32: 1,
      }), 8, 4, 2 ],],
      variantSize32: 12,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 3,
    } ), 16, 4, 4 ],
    ],
    variantSize32: 16,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 4,
  })
  ],
  stringEncoding: 'utf8',
},
);
const trampoline25 = taskReturn.bind(
null,
{
  componentIdx: 0,
  useDirectParams: true,
  getMemoryFn: () => memory0,
  memoryIdx: 0,
  callbackFnIdx: null,
  liftFns: [
  _liftFlatResult({
    caseMetas: [['ok', _liftFlatVariant({
      caseMetas: [['running', 
      _liftFlatOption({
        caseMetas: [
        ['none', null, 0, 0, 0 ],
        ['some', _liftFlatList({
          elemLiftFn: _liftFlatU8,
          elemAlign32: 1,
          elemSize32: 1,
          typedArray: Uint8Array,
        }), 8, 4, 2 ],
        ],
        variantSize32: 12,
        variantAlign32: 4,
        variantPayloadOffset32: 4,
        variantFlatCount: 3,
      })
      , 12, 4, 3],['done', _liftFlatList({
        elemLiftFn: _liftFlatU8,
        elemAlign32: 1,
        elemSize32: 1,
        typedArray: Uint8Array,
      }), 8, 4, 2],['failed', _liftFlatList({
        elemLiftFn: _liftFlatU8,
        elemAlign32: 1,
        elemSize32: 1,
        typedArray: Uint8Array,
      }), 8, 4, 2],],
      variantSize32: 16,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 4,
    } ), 16, 4, 4],['err', _liftFlatVariant({
      caseMetas: [['fault', _liftFlatList({
        elemLiftFn: _liftFlatU8,
        elemAlign32: 1,
        elemSize32: 1,
        typedArray: Uint8Array,
      }), 8, 4, 2],],
      variantSize32: 12,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 3,
    } ), 12, 4, 3],],
    variantSize32: 20,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 5,
  })
  ],
  lowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatVariant({
      caseMetas: [[ 'running', 
      _lowerFlatOption({
        caseMetas: [
        [ 'none', null, 0, 0, 0 ],
        [ 'some', _lowerFlatList({
          elemLowerFn: _lowerFlatU8,
          elemSize32: 1,
          elemAlign32: 1,
        }), 8, 4, 2],
        ],
        variantSize32: 12,
        variantAlign32: 4,
        variantPayloadOffset32: 4,
        variantFlatCount: 3,
      })
      , 12, 4, 3 ],[ 'done', _lowerFlatList({
        elemLowerFn: _lowerFlatU8,
        elemSize32: 1,
        elemAlign32: 1,
      }), 8, 4, 2 ],[ 'failed', _lowerFlatList({
        elemLowerFn: _lowerFlatU8,
        elemSize32: 1,
        elemAlign32: 1,
      }), 8, 4, 2 ],],
      variantSize32: 16,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 4,
    } ), 20, 4, 4 ],
    [ 'err', _lowerFlatVariant({
      caseMetas: [[ 'fault', _lowerFlatList({
        elemLowerFn: _lowerFlatU8,
        elemSize32: 1,
        elemAlign32: 1,
      }), 8, 4, 2 ],],
      variantSize32: 12,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 3,
    } ), 20, 4, 4 ],
    ],
    variantSize32: 20,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 5,
  })
  ],
  stringEncoding: 'utf8',
},
);
const trampoline26 = taskReturn.bind(
null,
{
  componentIdx: 0,
  useDirectParams: true,
  getMemoryFn: () => memory0,
  memoryIdx: 0,
  callbackFnIdx: null,
  liftFns: [
  _liftFlatResult({
    caseMetas: [['ok', 
    _liftFlatOption({
      caseMetas: [
      ['none', null, 0, 0, 0 ],
      ['some', _liftFlatList({
        elemLiftFn: _liftFlatU8,
        elemAlign32: 1,
        elemSize32: 1,
        typedArray: Uint8Array,
      }), 8, 4, 2 ],
      ],
      variantSize32: 12,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 3,
    })
    , 12, 4, 3],['err', _liftFlatVariant({
      caseMetas: [['fault', _liftFlatList({
        elemLiftFn: _liftFlatU8,
        elemAlign32: 1,
        elemSize32: 1,
        typedArray: Uint8Array,
      }), 8, 4, 2],],
      variantSize32: 12,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 3,
    } ), 12, 4, 3],],
    variantSize32: 16,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 4,
  })
  ],
  lowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', 
    _lowerFlatOption({
      caseMetas: [
      [ 'none', null, 0, 0, 0 ],
      [ 'some', _lowerFlatList({
        elemLowerFn: _lowerFlatU8,
        elemSize32: 1,
        elemAlign32: 1,
      }), 8, 4, 2],
      ],
      variantSize32: 12,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 3,
    })
    , 16, 4, 4 ],
    [ 'err', _lowerFlatVariant({
      caseMetas: [[ 'fault', _lowerFlatList({
        elemLowerFn: _lowerFlatU8,
        elemSize32: 1,
        elemAlign32: 1,
      }), 8, 4, 2 ],],
      variantSize32: 12,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 3,
    } ), 16, 4, 4 ],
    ],
    variantSize32: 16,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 4,
  })
  ],
  stringEncoding: 'utf8',
},
);
const trampoline27 = taskReturn.bind(
null,
{
  componentIdx: 0,
  useDirectParams: false,
  getMemoryFn: () => memory0,
  memoryIdx: 0,
  callbackFnIdx: null,
  liftFns: [
  _liftFlatResult({
    caseMetas: [['ok', _liftFlatRecord({ fieldMetas: [['uiPatches', _liftFlatList({
      elemLiftFn: _liftFlatRecord({ fieldMetas: [['surface', _liftFlatRecord({ fieldMetas: [['instance', _liftFlatU32, 4, 4],['surface', _liftFlatStringAny, 8, 4],], size32: 12, align32: 4 }), 12, 4],['revision', _liftFlatU64, 8, 8],['baseRevision', _liftFlatU64, 8, 8],['ops', _liftFlatList({
        elemLiftFn: _liftFlatVariant({
          caseMetas: [['upsert', _liftFlatRecord({ fieldMetas: [['node', _liftFlatList({
            elemLiftFn: _liftFlatU8,
            elemAlign32: 1,
            elemSize32: 1,
            typedArray: Uint8Array,
          }), 8, 4],], size32: 8, align32: 4 }), 8, 4, 2],['set-component', _liftFlatRecord({ fieldMetas: [['node', _liftFlatU64, 8, 8],['component', _liftFlatList({
            elemLiftFn: _liftFlatU8,
            elemAlign32: 1,
            elemSize32: 1,
            typedArray: Uint8Array,
          }), 8, 4],], size32: 16, align32: 8 }), 16, 8, 3],['set-layout', _liftFlatRecord({ fieldMetas: [['node', _liftFlatU64, 8, 8],['layout', _liftFlatList({
            elemLiftFn: _liftFlatU8,
            elemAlign32: 1,
            elemSize32: 1,
            typedArray: Uint8Array,
          }), 8, 4],], size32: 16, align32: 8 }), 16, 8, 3],['set-activity', _liftFlatRecord({ fieldMetas: [['node', _liftFlatU64, 8, 8],['activity', _liftFlatList({
            elemLiftFn: _liftFlatU8,
            elemAlign32: 1,
            elemSize32: 1,
            typedArray: Uint8Array,
          }), 8, 4],], size32: 16, align32: 8 }), 16, 8, 3],['set-children', _liftFlatRecord({ fieldMetas: [['node', _liftFlatU64, 8, 8],['children', _liftFlatList({
            elemLiftFn: _liftFlatU64,
            elemAlign32: 8,
            elemSize32: 8,
            typedArray: BigUint64Array,
          }), 8, 4],], size32: 16, align32: 8 }), 16, 8, 3],['set-style', _liftFlatRecord({ fieldMetas: [['node', _liftFlatU64, 8, 8],['style', _liftFlatList({
            elemLiftFn: _liftFlatU8,
            elemAlign32: 1,
            elemSize32: 1,
            typedArray: Uint8Array,
          }), 8, 4],], size32: 16, align32: 8 }), 16, 8, 3],['set-accessibility', _liftFlatRecord({ fieldMetas: [['node', _liftFlatU64, 8, 8],['accessibility', _liftFlatList({
            elemLiftFn: _liftFlatU8,
            elemAlign32: 1,
            elemSize32: 1,
            typedArray: Uint8Array,
          }), 8, 4],], size32: 16, align32: 8 }), 16, 8, 3],['set-bindings', _liftFlatRecord({ fieldMetas: [['node', _liftFlatU64, 8, 8],['bindings', _liftFlatList({
            elemLiftFn: _liftFlatU8,
            elemAlign32: 1,
            elemSize32: 1,
            typedArray: Uint8Array,
          }), 8, 4],], size32: 16, align32: 8 }), 16, 8, 3],['set-menu', _liftFlatRecord({ fieldMetas: [['node', _liftFlatU64, 8, 8],['menu', _liftFlatList({
            elemLiftFn: _liftFlatU8,
            elemAlign32: 1,
            elemSize32: 1,
            typedArray: Uint8Array,
          }), 8, 4],], size32: 16, align32: 8 }), 16, 8, 3],['remove', _liftFlatU64, 8, 8, 1],['set-root', _liftFlatU64, 8, 8, 1],],
          variantSize32: 24,
          variantAlign32: 8,
          variantPayloadOffset32: 8,
          variantFlatCount: 4,
        } ),
        elemAlign32: 8,
        elemSize32: 24,
        typedArray: undefined,
      }), 8, 4],], size32: 40, align32: 8 }),
      elemAlign32: 8,
      elemSize32: 40,
      typedArray: undefined,
    }), 8, 4],['effects', _liftFlatList({
      elemLiftFn: _liftFlatVariant({
        caseMetas: [['send-message', _liftFlatRecord({ fieldMetas: [['target', _liftFlatVariant({
          caseMetas: [['shell', _liftFlatU32, 4, 4, 1],['backbone', _liftFlatStringAny, 8, 4, 2],['plugin-instance', _liftFlatU32, 4, 4, 1],['extension', _liftFlatStringAny, 8, 4, 2],['topic', _liftFlatStringAny, 8, 4, 2],],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        } ), 12, 4],['payload', _liftFlatList({
          elemLiftFn: _liftFlatU8,
          elemAlign32: 1,
          elemSize32: 1,
          typedArray: Uint8Array,
        }), 8, 4],], size32: 20, align32: 4 }), 20, 4, 5],['publish-event', _liftFlatRecord({ fieldMetas: [['topic', _liftFlatStringAny, 8, 4],['payload', _liftFlatList({
          elemLiftFn: _liftFlatU8,
          elemAlign32: 1,
          elemSize32: 1,
          typedArray: Uint8Array,
        }), 8, 4],], size32: 16, align32: 4 }), 16, 4, 4],['blob-load', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['params', _liftFlatRecord({ fieldMetas: [['hash', _liftFlatStringAny, 8, 4],], size32: 8, align32: 4 }), 8, 4],], size32: 16, align32: 8 }), 16, 8, 3],['blob-write', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['params', _liftFlatRecord({ fieldMetas: [['mediaType', _liftFlatList({
          elemLiftFn: _liftFlatU8,
          elemAlign32: 1,
          elemSize32: 1,
          typedArray: Uint8Array,
        }), 8, 4],['bytes', _liftFlatList({
          elemLiftFn: _liftFlatU8,
          elemAlign32: 1,
          elemSize32: 1,
          typedArray: Uint8Array,
        }), 8, 4],], size32: 16, align32: 4 }), 16, 4],], size32: 24, align32: 8 }), 24, 8, 5],['http-request', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['params', _liftFlatRecord({ fieldMetas: [['method', _liftFlatStringAny, 8, 4],['url', _liftFlatStringAny, 8, 4],['headers', _liftFlatList({
          elemLiftFn: _liftFlatTuple({ elemLiftFns: [[_liftFlatStringAny, 8, 4],[_liftFlatStringAny, 8, 4],], size32: 16, align32: 4 }),
          elemAlign32: 4,
          elemSize32: 16,
          typedArray: undefined,
        }), 8, 4],['body', 
        _liftFlatOption({
          caseMetas: [
          ['none', null, 0, 0, 0 ],
          ['some', _liftFlatList({
            elemLiftFn: _liftFlatU8,
            elemAlign32: 1,
            elemSize32: 1,
            typedArray: Uint8Array,
          }), 8, 4, 2 ],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4],['streaming', _liftFlatBool, 1, 1],], size32: 40, align32: 4 }), 40, 4],], size32: 48, align32: 8 }), 48, 8, 11],['artifact-read', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['params', _liftFlatRecord({ fieldMetas: [['doc', _liftFlatU64, 8, 8],['lane', _liftFlatStringAny, 8, 4],], size32: 16, align32: 8 }), 16, 8],], size32: 24, align32: 8 }), 24, 8, 4],['artifact-write', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['params', _liftFlatRecord({ fieldMetas: [['doc', _liftFlatU64, 8, 8],['lane', _liftFlatStringAny, 8, 4],['ops', _liftFlatList({
          elemLiftFn: _liftFlatU8,
          elemAlign32: 1,
          elemSize32: 1,
          typedArray: Uint8Array,
        }), 8, 4],], size32: 24, align32: 8 }), 24, 8],], size32: 32, align32: 8 }), 32, 8, 6],['link-resolve', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['link', _liftFlatList({
          elemLiftFn: _liftFlatU8,
          elemAlign32: 1,
          elemSize32: 1,
          typedArray: Uint8Array,
        }), 8, 4],], size32: 16, align32: 8 }), 16, 8, 3],['registry-query', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['params', _liftFlatRecord({ fieldMetas: [['kind', _liftFlatStringAny, 8, 4],['filter', _liftFlatList({
          elemLiftFn: _liftFlatU8,
          elemAlign32: 1,
          elemSize32: 1,
          typedArray: Uint8Array,
        }), 8, 4],], size32: 16, align32: 4 }), 16, 4],], size32: 24, align32: 8 }), 24, 8, 5],['io-compose', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['params', _liftFlatRecord({ fieldMetas: [['key', _liftFlatList({
          elemLiftFn: _liftFlatU8,
          elemAlign32: 1,
          elemSize32: 1,
          typedArray: Uint8Array,
        }), 8, 4],['sources', _liftFlatList({
          elemLiftFn: _liftFlatU8,
          elemAlign32: 1,
          elemSize32: 1,
          typedArray: Uint8Array,
        }), 8, 4],], size32: 16, align32: 4 }), 16, 4],], size32: 24, align32: 8 }), 24, 8, 5],['io-run', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['params', _liftFlatRecord({ fieldMetas: [['source', _liftFlatStringAny, 8, 4],['target', _liftFlatStringAny, 8, 4],['payload', _liftFlatList({
          elemLiftFn: _liftFlatU8,
          elemAlign32: 1,
          elemSize32: 1,
          typedArray: Uint8Array,
        }), 8, 4],], size32: 24, align32: 4 }), 24, 4],], size32: 32, align32: 8 }), 32, 8, 7],['cache-derive', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['params', _liftFlatRecord({ fieldMetas: [['engineId', _liftFlatStringAny, 8, 4],['input', _liftFlatList({
          elemLiftFn: _liftFlatU8,
          elemAlign32: 1,
          elemSize32: 1,
          typedArray: Uint8Array,
        }), 8, 4],], size32: 16, align32: 4 }), 16, 4],], size32: 24, align32: 8 }), 24, 8, 5],['cache-read', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['params', _liftFlatRecord({ fieldMetas: [['engineId', _liftFlatStringAny, 8, 4],['key', _liftFlatList({
          elemLiftFn: _liftFlatU8,
          elemAlign32: 1,
          elemSize32: 1,
          typedArray: Uint8Array,
        }), 8, 4],], size32: 16, align32: 4 }), 16, 4],], size32: 24, align32: 8 }), 24, 8, 5],['open-window', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['params', _liftFlatRecord({ fieldMetas: [['kind', _liftFlatStringAny, 8, 4],['params', _liftFlatList({
          elemLiftFn: _liftFlatU8,
          elemAlign32: 1,
          elemSize32: 1,
          typedArray: Uint8Array,
        }), 8, 4],], size32: 16, align32: 4 }), 16, 4],], size32: 24, align32: 8 }), 24, 8, 5],['close-window', _liftFlatRecord({ fieldMetas: [['window', _liftFlatU64, 8, 8],], size32: 8, align32: 8 }), 8, 8, 1],['dispatch-action', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['params', _liftFlatRecord({ fieldMetas: [['action', _liftFlatStringAny, 8, 4],['args', 
        _liftFlatOption({
          caseMetas: [
          ['none', null, 0, 0, 0 ],
          ['some', _liftFlatList({
            elemLiftFn: _liftFlatU8,
            elemAlign32: 1,
            elemSize32: 1,
            typedArray: Uint8Array,
          }), 8, 4, 2 ],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4],['delayMs', _liftFlatU64, 8, 8],], size32: 32, align32: 8 }), 32, 8],], size32: 40, align32: 8 }), 40, 8, 7],['invoke-extension', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['params', _liftFlatRecord({ fieldMetas: [['extensionId', _liftFlatStringAny, 8, 4],['capability', _liftFlatStringAny, 8, 4],['payload', _liftFlatList({
          elemLiftFn: _liftFlatU8,
          elemAlign32: 1,
          elemSize32: 1,
          typedArray: Uint8Array,
        }), 8, 4],], size32: 24, align32: 4 }), 24, 4],], size32: 32, align32: 8 }), 32, 8, 7],['notify', _liftFlatRecord({ fieldMetas: [['message', _liftFlatStringAny, 8, 4],], size32: 8, align32: 4 }), 8, 4, 2],['clipboard-write', _liftFlatRecord({ fieldMetas: [['fragment', _liftFlatList({
          elemLiftFn: _liftFlatU8,
          elemAlign32: 1,
          elemSize32: 1,
          typedArray: Uint8Array,
        }), 8, 4],], size32: 8, align32: 4 }), 8, 4, 2],['navigate', _liftFlatRecord({ fieldMetas: [['uri', _liftFlatStringAny, 8, 4],], size32: 8, align32: 4 }), 8, 4, 2],['open-external-url', _liftFlatRecord({ fieldMetas: [['url', _liftFlatStringAny, 8, 4],], size32: 8, align32: 4 }), 8, 4, 2],['set-panel', _liftFlatRecord({ fieldMetas: [['panelJson', _liftFlatStringAny, 8, 4],], size32: 8, align32: 4 }), 8, 4, 2],['set-active-utility', _liftFlatRecord({ fieldMetas: [['windowId', _liftFlatStringAny, 8, 4],['utilityId', _liftFlatStringAny, 8, 4],], size32: 16, align32: 4 }), 16, 4, 4],['set-active-tool', _liftFlatRecord({ fieldMetas: [['toolId', _liftFlatStringAny, 8, 4],], size32: 8, align32: 4 }), 8, 4, 2],['replay-shell-command', _liftFlatRecord({ fieldMetas: [['actionId', _liftFlatStringAny, 8, 4],['args', 
        _liftFlatOption({
          caseMetas: [
          ['none', null, 0, 0, 0 ],
          ['some', _liftFlatList({
            elemLiftFn: _liftFlatU8,
            elemAlign32: 1,
            elemSize32: 1,
            typedArray: Uint8Array,
          }), 8, 4, 2 ],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4],], size32: 20, align32: 4 }), 20, 4, 5],['spawn-plugin-instance', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['params', _liftFlatRecord({ fieldMetas: [['pluginId', _liftFlatStringAny, 8, 4],['appId', _liftFlatStringAny, 8, 4],['osInstanceId', 
        _liftFlatOption({
          caseMetas: [
          ['none', null, 0, 0, 0 ],
          ['some', _liftFlatStringAny, 8, 4, 2 ],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4],['label', 
        _liftFlatOption({
          caseMetas: [
          ['none', null, 0, 0, 0 ],
          ['some', _liftFlatStringAny, 8, 4, 2 ],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4],['artifactJson', 
        _liftFlatOption({
          caseMetas: [
          ['none', null, 0, 0, 0 ],
          ['some', _liftFlatStringAny, 8, 4, 2 ],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4],], size32: 52, align32: 4 }), 52, 4],], size32: 64, align32: 8 }), 64, 8, 14],['open-plugin-instance', _liftFlatRecord({ fieldMetas: [['pluginId', _liftFlatStringAny, 8, 4],['appId', _liftFlatStringAny, 8, 4],['osInstanceId', 
        _liftFlatOption({
          caseMetas: [
          ['none', null, 0, 0, 0 ],
          ['some', _liftFlatStringAny, 8, 4, 2 ],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4],], size32: 28, align32: 4 }), 28, 4, 7],['open-dialog', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['params', _liftFlatRecord({ fieldMetas: [['dialogId', _liftFlatStringAny, 8, 4],['args', 
        _liftFlatOption({
          caseMetas: [
          ['none', null, 0, 0, 0 ],
          ['some', _liftFlatList({
            elemLiftFn: _liftFlatU8,
            elemAlign32: 1,
            elemSize32: 1,
            typedArray: Uint8Array,
          }), 8, 4, 2 ],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4],], size32: 20, align32: 4 }), 20, 4],], size32: 32, align32: 8 }), 32, 8, 6],['icon-render-export', _liftFlatRecord({ fieldMetas: [['items', _liftFlatList({
          elemLiftFn: _liftFlatU8,
          elemAlign32: 1,
          elemSize32: 1,
          typedArray: Uint8Array,
        }), 8, 4],], size32: 8, align32: 4 }), 8, 4, 2],['download-media-export', _liftFlatRecord({ fieldMetas: [['filename', _liftFlatStringAny, 8, 4],['mimeType', _liftFlatStringAny, 8, 4],['data', _liftFlatStringAny, 8, 4],['encoding', 
        _liftFlatOption({
          caseMetas: [
          ['none', null, 0, 0, 0 ],
          ['some', _liftFlatStringAny, 8, 4, 2 ],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4],], size32: 36, align32: 4 }), 36, 4, 9],['request-file-open', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['params', _liftFlatRecord({ fieldMetas: [['accept', _liftFlatStringAny, 8, 4],['readAs', 
        _liftFlatOption({
          caseMetas: [
          ['none', null, 0, 0, 0 ],
          ['some', _liftFlatStringAny, 8, 4, 2 ],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4],['importAction', _liftFlatStringAny, 8, 4],['multiple', _liftFlatBool, 1, 1],], size32: 32, align32: 4 }), 32, 4],], size32: 40, align32: 8 }), 40, 8, 9],['request-media-frames', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['params', _liftFlatRecord({ fieldMetas: [['accept', _liftFlatStringAny, 8, 4],['frameAction', _liftFlatStringAny, 8, 4],['doneAction', _liftFlatStringAny, 8, 4],['fallbackAction', _liftFlatStringAny, 8, 4],['sampleStride', _liftFlatU32, 4, 4],['maxFrames', _liftFlatU32, 4, 4],['maxLongEdgePx', _liftFlatU32, 4, 4],['fpsHint', _liftFlatFloat64, 8, 8],['payload', 
        _liftFlatOption({
          caseMetas: [
          ['none', null, 0, 0, 0 ],
          ['some', _liftFlatStringAny, 8, 4, 2 ],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4],['args', 
        _liftFlatOption({
          caseMetas: [
          ['none', null, 0, 0, 0 ],
          ['some', _liftFlatList({
            elemLiftFn: _liftFlatU8,
            elemAlign32: 1,
            elemSize32: 1,
            typedArray: Uint8Array,
          }), 8, 4, 2 ],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4],], size32: 80, align32: 8 }), 80, 8],], size32: 88, align32: 8 }), 88, 8, null],['load-document', _liftFlatRecord({ fieldMetas: [['docPack', _liftFlatList({
          elemLiftFn: _liftFlatU8,
          elemAlign32: 1,
          elemSize32: 1,
          typedArray: Uint8Array,
        }), 8, 4],['spr', _liftFlatList({
          elemLiftFn: _liftFlatU8,
          elemAlign32: 1,
          elemSize32: 1,
          typedArray: Uint8Array,
        }), 8, 4],], size32: 16, align32: 4 }), 16, 4, 4],['request-sync', null, 0, 0, 0],['set-timer', _liftFlatRecord({ fieldMetas: [['id', _liftFlatU64, 8, 8],['afterMs', _liftFlatU32, 4, 4],['repeat', _liftFlatBool, 1, 1],], size32: 16, align32: 8 }), 16, 8, 3],['spawn-job', _liftFlatRecord({ fieldMetas: [['job', _liftFlatU64, 8, 8],['kind', _liftFlatStringAny, 8, 4],['input', _liftFlatList({
          elemLiftFn: _liftFlatU8,
          elemAlign32: 1,
          elemSize32: 1,
          typedArray: Uint8Array,
        }), 8, 4],['placement', 
        _liftFlatEnum({
          caseMetas: [['inline', null, 1, 1, 1],['isolated', null, 1, 1, 1],['exclusive', null, 1, 1, 1],],
          variantSize32: 1,
          variantAlign32: 1,
          variantPayloadOffset32: 1,
          variantFlatCount: 1,
        })
        , 1, 1],], size32: 32, align32: 8 }), 32, 8, 6],['cancel-job', _liftFlatRecord({ fieldMetas: [['job', _liftFlatU64, 8, 8],], size32: 8, align32: 8 }), 8, 8, 1],['respond', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['outcome', _liftFlatVariant({
          caseMetas: [['ok', _liftFlatList({
            elemLiftFn: _liftFlatU8,
            elemAlign32: 1,
            elemSize32: 1,
            typedArray: Uint8Array,
          }), 8, 4, 2],['fault', _liftFlatList({
            elemLiftFn: _liftFlatU8,
            elemAlign32: 1,
            elemSize32: 1,
            typedArray: Uint8Array,
          }), 8, 4, 2],],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        } ), 12, 4],], size32: 24, align32: 8 }), 24, 8, 4],['storage-read', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['params', _liftFlatRecord({ fieldMetas: [['key', _liftFlatStringAny, 8, 4],], size32: 8, align32: 4 }), 8, 4],], size32: 16, align32: 8 }), 16, 8, 3],['storage-write', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['params', _liftFlatRecord({ fieldMetas: [['key', _liftFlatStringAny, 8, 4],['value', _liftFlatList({
          elemLiftFn: _liftFlatU8,
          elemAlign32: 1,
          elemSize32: 1,
          typedArray: Uint8Array,
        }), 8, 4],], size32: 16, align32: 4 }), 16, 4],], size32: 24, align32: 8 }), 24, 8, 5],['storage-delete', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['params', _liftFlatRecord({ fieldMetas: [['key', _liftFlatStringAny, 8, 4],], size32: 8, align32: 4 }), 8, 4],], size32: 16, align32: 8 }), 16, 8, 3],['request-capability', _liftFlatRecord({ fieldMetas: [['req', _liftFlatU64, 8, 8],['params', _liftFlatRecord({ fieldMetas: [['id', _liftFlatStringAny, 8, 4],['scope', _liftFlatStringAny, 8, 4],['reason', _liftFlatStringAny, 8, 4],['optional', _liftFlatBool, 1, 1],], size32: 28, align32: 4 }), 28, 4],], size32: 40, align32: 8 }), 40, 8, 8],['release-capability', _liftFlatRecord({ fieldMetas: [['id', _liftFlatStringAny, 8, 4],], size32: 8, align32: 4 }), 8, 4, 2],['subscribe', _liftFlatRecord({ fieldMetas: [['topic', _liftFlatStringAny, 8, 4],], size32: 8, align32: 4 }), 8, 4, 2],['unsubscribe', _liftFlatRecord({ fieldMetas: [['topic', _liftFlatStringAny, 8, 4],], size32: 8, align32: 4 }), 8, 4, 2],['request-inference-proposal', _liftFlatRecord({ fieldMetas: [['kind', 
        _liftFlatEnum({
          caseMetas: [['gis-map-bounds-region', null, 1, 1, 1],],
          variantSize32: 1,
          variantAlign32: 1,
          variantPayloadOffset32: 1,
          variantFlatCount: 1,
        })
        , 1, 1],], size32: 1, align32: 1 }), 1, 1, 1],],
        variantSize32: 96,
        variantAlign32: 8,
        variantPayloadOffset32: 8,
        variantFlatCount: null,
      } ),
      elemAlign32: 8,
      elemSize32: 96,
      typedArray: undefined,
    }), 8, 4],['presence', _liftFlatList({
      elemLiftFn: _liftFlatRecord({ fieldMetas: [['update', _liftFlatList({
        elemLiftFn: _liftFlatU8,
        elemAlign32: 1,
        elemSize32: 1,
        typedArray: Uint8Array,
      }), 8, 4],], size32: 8, align32: 4 }),
      elemAlign32: 4,
      elemSize32: 8,
      typedArray: undefined,
    }), 8, 4],['nextWake', 
    _liftFlatOption({
      caseMetas: [
      ['none', null, 0, 0, 0 ],
      ['some', _liftFlatU64, 8, 8, 1 ],
      ],
      variantSize32: 16,
      variantAlign32: 8,
      variantPayloadOffset32: 8,
      variantFlatCount: 2,
    })
    , 16, 8],['status', _liftFlatVariant({
      caseMetas: [['idle', null, 0, 0, 0],['more-work', null, 0, 0, 0],['checkpoint-ready', _liftFlatRecord({ fieldMetas: [['state', _liftFlatList({
        elemLiftFn: _liftFlatU8,
        elemAlign32: 1,
        elemSize32: 1,
        typedArray: Uint8Array,
      }), 8, 4],['appliedProgress', _liftFlatU64, 8, 8],], size32: 16, align32: 8 }), 16, 8, 3],['faulted', _liftFlatList({
        elemLiftFn: _liftFlatU8,
        elemAlign32: 1,
        elemSize32: 1,
        typedArray: Uint8Array,
      }), 8, 4, 2],],
      variantSize32: 24,
      variantAlign32: 8,
      variantPayloadOffset32: 8,
      variantFlatCount: 4,
    } ), 24, 8],['fuelUsed', _liftFlatU64, 8, 8],['commandIngress', _liftFlatRecord({ fieldMetas: [['kind', _liftFlatU8, 1, 1],['cursor', _liftFlatRecord({ fieldMetas: [['owner', _liftFlatU64, 8, 8],['generation', _liftFlatU64, 8, 8],['commandIndex', _liftFlatU32, 4, 4],['commandCount', _liftFlatU32, 4, 4],['instance', _liftFlatU32, 4, 4],['seq', _liftFlatU64, 8, 8],['kind', _liftFlatU8, 1, 1],['pageIndex', _liftFlatU32, 4, 4],['pageCount', _liftFlatU32, 4, 4],['itemCount', _liftFlatU32, 4, 4],['metadata', _liftFlatU32, 4, 4],], size32: 64, align32: 8 }), 64, 8],['fault', _liftFlatList({
      elemLiftFn: _liftFlatU8,
      elemAlign32: 1,
      elemSize32: 1,
      typedArray: Uint8Array,
    }), 8, 4],], size32: 80, align32: 8 }), 80, 8],['coldPairIngress', _liftFlatVariant({
      caseMetas: [['idle', null, 0, 0, 0],['page-accepted', _liftFlatRecord({ fieldMetas: [['lifetime', _liftFlatRecord({ fieldMetas: [['activationGeneration', _liftFlatU64, 8, 8],['instanceId', _liftFlatU32, 4, 4],['guestLifetime', _liftFlatU64, 8, 8],], size32: 24, align32: 8 }), 24, 8],['transferGeneration', _liftFlatU64, 8, 8],['pageIndex', _liftFlatU32, 4, 4],['pageCount', _liftFlatU32, 4, 4],], size32: 40, align32: 8 }), 40, 8, 6],['backpressure', _liftFlatRecord({ fieldMetas: [['lifetime', _liftFlatRecord({ fieldMetas: [['activationGeneration', _liftFlatU64, 8, 8],['instanceId', _liftFlatU32, 4, 4],['guestLifetime', _liftFlatU64, 8, 8],], size32: 24, align32: 8 }), 24, 8],['transferGeneration', _liftFlatU64, 8, 8],['pageIndex', _liftFlatU32, 4, 4],['pageCount', _liftFlatU32, 4, 4],], size32: 40, align32: 8 }), 40, 8, 6],['loading', _liftFlatRecord({ fieldMetas: [['lifetime', _liftFlatRecord({ fieldMetas: [['activationGeneration', _liftFlatU64, 8, 8],['instanceId', _liftFlatU32, 4, 4],['guestLifetime', _liftFlatU64, 8, 8],], size32: 24, align32: 8 }), 24, 8],['transferGeneration', _liftFlatU64, 8, 8],['pageIndex', _liftFlatU32, 4, 4],['pageCount', _liftFlatU32, 4, 4],], size32: 40, align32: 8 }), 40, 8, 6],['applied', _liftFlatRecord({ fieldMetas: [['lifetime', _liftFlatRecord({ fieldMetas: [['activationGeneration', _liftFlatU64, 8, 8],['instanceId', _liftFlatU32, 4, 4],['guestLifetime', _liftFlatU64, 8, 8],], size32: 24, align32: 8 }), 24, 8],['transferGeneration', _liftFlatU64, 8, 8],['baselineFrontier', _liftFlatRecord({ fieldMetas: [['artifactId', _liftFlatStringAny, 8, 4],['headEditOrdinal', _liftFlatU64, 8, 8],['headEditId', _liftFlatStringAny, 8, 4],['lastCommitSeq', _liftFlatU64, 8, 8],['chainSha256', _liftFlatList({
        elemLiftFn: _liftFlatU8,
        elemAlign32: 1,
        elemSize32: 1,
        typedArray: Uint8Array,
      }), 8, 4],], size32: 40, align32: 8 }), 40, 8],['aggregateSha256', _liftFlatList({
        elemLiftFn: _liftFlatU8,
        elemAlign32: 1,
        elemSize32: 1,
        typedArray: Uint8Array,
      }), 8, 4],], size32: 80, align32: 8 }), 80, 8, 14],['fault', _liftFlatRecord({ fieldMetas: [['cursor', _liftFlatRecord({ fieldMetas: [['lifetime', _liftFlatRecord({ fieldMetas: [['activationGeneration', _liftFlatU64, 8, 8],['instanceId', _liftFlatU32, 4, 4],['guestLifetime', _liftFlatU64, 8, 8],], size32: 24, align32: 8 }), 24, 8],['transferGeneration', _liftFlatU64, 8, 8],['pageIndex', _liftFlatU32, 4, 4],['pageCount', _liftFlatU32, 4, 4],], size32: 40, align32: 8 }), 40, 8],['fault', _liftFlatList({
        elemLiftFn: _liftFlatU8,
        elemAlign32: 1,
        elemSize32: 1,
        typedArray: Uint8Array,
      }), 8, 4],], size32: 48, align32: 8 }), 48, 8, 8],],
      variantSize32: 88,
      variantAlign32: 8,
      variantPayloadOffset32: 8,
      variantFlatCount: 15,
    } ), 88, 8],['lifecycleReceipt', 
    _liftFlatOption({
      caseMetas: [
      ['none', null, 0, 0, 0 ],
      ['some', _liftFlatVariant({
        caseMetas: [['captured', _liftFlatRecord({ fieldMetas: [['lifetime', _liftFlatRecord({ fieldMetas: [['activationGeneration', _liftFlatU64, 8, 8],['instanceId', _liftFlatU32, 4, 4],['guestLifetime', _liftFlatU64, 8, 8],], size32: 24, align32: 8 }), 24, 8],['requestSequence', _liftFlatU64, 8, 8],], size32: 32, align32: 8 }), 32, 8, 4],['accepted', _liftFlatRecord({ fieldMetas: [['lifetime', _liftFlatRecord({ fieldMetas: [['activationGeneration', _liftFlatU64, 8, 8],['instanceId', _liftFlatU32, 4, 4],['guestLifetime', _liftFlatU64, 8, 8],], size32: 24, align32: 8 }), 24, 8],['requestSequence', _liftFlatU64, 8, 8],['closeGeneration', _liftFlatU64, 8, 8],], size32: 40, align32: 8 }), 40, 8, 5],['retired', _liftFlatRecord({ fieldMetas: [['lifetime', _liftFlatRecord({ fieldMetas: [['activationGeneration', _liftFlatU64, 8, 8],['instanceId', _liftFlatU32, 4, 4],['guestLifetime', _liftFlatU64, 8, 8],], size32: 24, align32: 8 }), 24, 8],['requestSequence', _liftFlatU64, 8, 8],['closeGeneration', _liftFlatU64, 8, 8],], size32: 40, align32: 8 }), 40, 8, 5],],
        variantSize32: 48,
        variantAlign32: 8,
        variantPayloadOffset32: 8,
        variantFlatCount: 6,
      } ), 48, 8, 6 ],
      ],
      variantSize32: 56,
      variantAlign32: 8,
      variantPayloadOffset32: 8,
      variantFlatCount: 7,
    })
    , 56, 8],['uiPatchReceipt', 
    _liftFlatOption({
      caseMetas: [
      ['none', null, 0, 0, 0 ],
      ['some', _liftFlatRecord({ fieldMetas: [['lifetime', _liftFlatRecord({ fieldMetas: [['activationGeneration', _liftFlatU64, 8, 8],['instanceId', _liftFlatU32, 4, 4],['guestLifetime', _liftFlatU64, 8, 8],], size32: 24, align32: 8 }), 24, 8],['patchSequence', _liftFlatU64, 8, 8],], size32: 32, align32: 8 }), 32, 8, 4 ],
      ],
      variantSize32: 40,
      variantAlign32: 8,
      variantPayloadOffset32: 8,
      variantFlatCount: 5,
    })
    , 40, 8],], size32: 336, align32: 8 }), 336, 8, null],['err', _liftFlatVariant({
      caseMetas: [['fault', _liftFlatList({
        elemLiftFn: _liftFlatU8,
        elemAlign32: 1,
        elemSize32: 1,
        typedArray: Uint8Array,
      }), 8, 4, 2],],
      variantSize32: 12,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 3,
    } ), 12, 4, 3],],
    variantSize32: 344,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: null,
  })
  ],
  lowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatRecord({ fieldMetas: [['uiPatches', _lowerFlatList({
      elemLowerFn: _lowerFlatRecord({ fieldMetas: [['surface', _lowerFlatRecord({ fieldMetas: [['instance', _lowerFlatU32, 4, 4 ],['surface', _lowerFlatStringAny, 8, 4 ],], size32: 12, align32: 4 }), 12, 4 ],['revision', _lowerFlatU64, 8, 8 ],['baseRevision', _lowerFlatU64, 8, 8 ],['ops', _lowerFlatList({
        elemLowerFn: _lowerFlatVariant({
          caseMetas: [[ 'upsert', _lowerFlatRecord({ fieldMetas: [['node', _lowerFlatList({
            elemLowerFn: _lowerFlatU8,
            elemSize32: 1,
            elemAlign32: 1,
          }), 8, 4 ],], size32: 8, align32: 4 }), 8, 4, 2 ],[ 'set-component', _lowerFlatRecord({ fieldMetas: [['node', _lowerFlatU64, 8, 8 ],['component', _lowerFlatList({
            elemLowerFn: _lowerFlatU8,
            elemSize32: 1,
            elemAlign32: 1,
          }), 8, 4 ],], size32: 16, align32: 8 }), 16, 8, 3 ],[ 'set-layout', _lowerFlatRecord({ fieldMetas: [['node', _lowerFlatU64, 8, 8 ],['layout', _lowerFlatList({
            elemLowerFn: _lowerFlatU8,
            elemSize32: 1,
            elemAlign32: 1,
          }), 8, 4 ],], size32: 16, align32: 8 }), 16, 8, 3 ],[ 'set-activity', _lowerFlatRecord({ fieldMetas: [['node', _lowerFlatU64, 8, 8 ],['activity', _lowerFlatList({
            elemLowerFn: _lowerFlatU8,
            elemSize32: 1,
            elemAlign32: 1,
          }), 8, 4 ],], size32: 16, align32: 8 }), 16, 8, 3 ],[ 'set-children', _lowerFlatRecord({ fieldMetas: [['node', _lowerFlatU64, 8, 8 ],['children', _lowerFlatList({
            elemLowerFn: _lowerFlatU64,
            elemSize32: 8,
            elemAlign32: 8,
          }), 8, 4 ],], size32: 16, align32: 8 }), 16, 8, 3 ],[ 'set-style', _lowerFlatRecord({ fieldMetas: [['node', _lowerFlatU64, 8, 8 ],['style', _lowerFlatList({
            elemLowerFn: _lowerFlatU8,
            elemSize32: 1,
            elemAlign32: 1,
          }), 8, 4 ],], size32: 16, align32: 8 }), 16, 8, 3 ],[ 'set-accessibility', _lowerFlatRecord({ fieldMetas: [['node', _lowerFlatU64, 8, 8 ],['accessibility', _lowerFlatList({
            elemLowerFn: _lowerFlatU8,
            elemSize32: 1,
            elemAlign32: 1,
          }), 8, 4 ],], size32: 16, align32: 8 }), 16, 8, 3 ],[ 'set-bindings', _lowerFlatRecord({ fieldMetas: [['node', _lowerFlatU64, 8, 8 ],['bindings', _lowerFlatList({
            elemLowerFn: _lowerFlatU8,
            elemSize32: 1,
            elemAlign32: 1,
          }), 8, 4 ],], size32: 16, align32: 8 }), 16, 8, 3 ],[ 'set-menu', _lowerFlatRecord({ fieldMetas: [['node', _lowerFlatU64, 8, 8 ],['menu', _lowerFlatList({
            elemLowerFn: _lowerFlatU8,
            elemSize32: 1,
            elemAlign32: 1,
          }), 8, 4 ],], size32: 16, align32: 8 }), 16, 8, 3 ],[ 'remove', _lowerFlatU64, 8, 8, 1 ],[ 'set-root', _lowerFlatU64, 8, 8, 1 ],],
          variantSize32: 24,
          variantAlign32: 8,
          variantPayloadOffset32: 8,
          variantFlatCount: 4,
        } ),
        elemSize32: 24,
        elemAlign32: 8,
      }), 8, 4 ],], size32: 40, align32: 8 }),
      elemSize32: 40,
      elemAlign32: 8,
    }), 8, 4 ],['effects', _lowerFlatList({
      elemLowerFn: _lowerFlatVariant({
        caseMetas: [[ 'send-message', _lowerFlatRecord({ fieldMetas: [['target', _lowerFlatVariant({
          caseMetas: [[ 'shell', _lowerFlatU32, 4, 4, 1 ],[ 'backbone', _lowerFlatStringAny, 8, 4, 2 ],[ 'plugin-instance', _lowerFlatU32, 4, 4, 1 ],[ 'extension', _lowerFlatStringAny, 8, 4, 2 ],[ 'topic', _lowerFlatStringAny, 8, 4, 2 ],],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        } ), 12, 4 ],['payload', _lowerFlatList({
          elemLowerFn: _lowerFlatU8,
          elemSize32: 1,
          elemAlign32: 1,
        }), 8, 4 ],], size32: 20, align32: 4 }), 20, 4, 5 ],[ 'publish-event', _lowerFlatRecord({ fieldMetas: [['topic', _lowerFlatStringAny, 8, 4 ],['payload', _lowerFlatList({
          elemLowerFn: _lowerFlatU8,
          elemSize32: 1,
          elemAlign32: 1,
        }), 8, 4 ],], size32: 16, align32: 4 }), 16, 4, 4 ],[ 'blob-load', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['params', _lowerFlatRecord({ fieldMetas: [['hash', _lowerFlatStringAny, 8, 4 ],], size32: 8, align32: 4 }), 8, 4 ],], size32: 16, align32: 8 }), 16, 8, 3 ],[ 'blob-write', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['params', _lowerFlatRecord({ fieldMetas: [['mediaType', _lowerFlatList({
          elemLowerFn: _lowerFlatU8,
          elemSize32: 1,
          elemAlign32: 1,
        }), 8, 4 ],['bytes', _lowerFlatList({
          elemLowerFn: _lowerFlatU8,
          elemSize32: 1,
          elemAlign32: 1,
        }), 8, 4 ],], size32: 16, align32: 4 }), 16, 4 ],], size32: 24, align32: 8 }), 24, 8, 5 ],[ 'http-request', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['params', _lowerFlatRecord({ fieldMetas: [['method', _lowerFlatStringAny, 8, 4 ],['url', _lowerFlatStringAny, 8, 4 ],['headers', _lowerFlatList({
          elemLowerFn: _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatStringAny, 8, 4],[_lowerFlatStringAny, 8, 4],], size32: 16, align32: 4 }),
          elemSize32: 16,
          elemAlign32: 4,
        }), 8, 4 ],['body', 
        _lowerFlatOption({
          caseMetas: [
          [ 'none', null, 0, 0, 0 ],
          [ 'some', _lowerFlatList({
            elemLowerFn: _lowerFlatU8,
            elemSize32: 1,
            elemAlign32: 1,
          }), 8, 4, 2],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4 ],['streaming', _lowerFlatBool, 1, 1 ],], size32: 40, align32: 4 }), 40, 4 ],], size32: 48, align32: 8 }), 48, 8, 11 ],[ 'artifact-read', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['params', _lowerFlatRecord({ fieldMetas: [['doc', _lowerFlatU64, 8, 8 ],['lane', _lowerFlatStringAny, 8, 4 ],], size32: 16, align32: 8 }), 16, 8 ],], size32: 24, align32: 8 }), 24, 8, 4 ],[ 'artifact-write', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['params', _lowerFlatRecord({ fieldMetas: [['doc', _lowerFlatU64, 8, 8 ],['lane', _lowerFlatStringAny, 8, 4 ],['ops', _lowerFlatList({
          elemLowerFn: _lowerFlatU8,
          elemSize32: 1,
          elemAlign32: 1,
        }), 8, 4 ],], size32: 24, align32: 8 }), 24, 8 ],], size32: 32, align32: 8 }), 32, 8, 6 ],[ 'link-resolve', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['link', _lowerFlatList({
          elemLowerFn: _lowerFlatU8,
          elemSize32: 1,
          elemAlign32: 1,
        }), 8, 4 ],], size32: 16, align32: 8 }), 16, 8, 3 ],[ 'registry-query', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['params', _lowerFlatRecord({ fieldMetas: [['kind', _lowerFlatStringAny, 8, 4 ],['filter', _lowerFlatList({
          elemLowerFn: _lowerFlatU8,
          elemSize32: 1,
          elemAlign32: 1,
        }), 8, 4 ],], size32: 16, align32: 4 }), 16, 4 ],], size32: 24, align32: 8 }), 24, 8, 5 ],[ 'io-compose', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['params', _lowerFlatRecord({ fieldMetas: [['key', _lowerFlatList({
          elemLowerFn: _lowerFlatU8,
          elemSize32: 1,
          elemAlign32: 1,
        }), 8, 4 ],['sources', _lowerFlatList({
          elemLowerFn: _lowerFlatU8,
          elemSize32: 1,
          elemAlign32: 1,
        }), 8, 4 ],], size32: 16, align32: 4 }), 16, 4 ],], size32: 24, align32: 8 }), 24, 8, 5 ],[ 'io-run', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['params', _lowerFlatRecord({ fieldMetas: [['source', _lowerFlatStringAny, 8, 4 ],['target', _lowerFlatStringAny, 8, 4 ],['payload', _lowerFlatList({
          elemLowerFn: _lowerFlatU8,
          elemSize32: 1,
          elemAlign32: 1,
        }), 8, 4 ],], size32: 24, align32: 4 }), 24, 4 ],], size32: 32, align32: 8 }), 32, 8, 7 ],[ 'cache-derive', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['params', _lowerFlatRecord({ fieldMetas: [['engineId', _lowerFlatStringAny, 8, 4 ],['input', _lowerFlatList({
          elemLowerFn: _lowerFlatU8,
          elemSize32: 1,
          elemAlign32: 1,
        }), 8, 4 ],], size32: 16, align32: 4 }), 16, 4 ],], size32: 24, align32: 8 }), 24, 8, 5 ],[ 'cache-read', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['params', _lowerFlatRecord({ fieldMetas: [['engineId', _lowerFlatStringAny, 8, 4 ],['key', _lowerFlatList({
          elemLowerFn: _lowerFlatU8,
          elemSize32: 1,
          elemAlign32: 1,
        }), 8, 4 ],], size32: 16, align32: 4 }), 16, 4 ],], size32: 24, align32: 8 }), 24, 8, 5 ],[ 'open-window', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['params', _lowerFlatRecord({ fieldMetas: [['kind', _lowerFlatStringAny, 8, 4 ],['params', _lowerFlatList({
          elemLowerFn: _lowerFlatU8,
          elemSize32: 1,
          elemAlign32: 1,
        }), 8, 4 ],], size32: 16, align32: 4 }), 16, 4 ],], size32: 24, align32: 8 }), 24, 8, 5 ],[ 'close-window', _lowerFlatRecord({ fieldMetas: [['window', _lowerFlatU64, 8, 8 ],], size32: 8, align32: 8 }), 8, 8, 1 ],[ 'dispatch-action', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['params', _lowerFlatRecord({ fieldMetas: [['action', _lowerFlatStringAny, 8, 4 ],['args', 
        _lowerFlatOption({
          caseMetas: [
          [ 'none', null, 0, 0, 0 ],
          [ 'some', _lowerFlatList({
            elemLowerFn: _lowerFlatU8,
            elemSize32: 1,
            elemAlign32: 1,
          }), 8, 4, 2],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4 ],['delayMs', _lowerFlatU64, 8, 8 ],], size32: 32, align32: 8 }), 32, 8 ],], size32: 40, align32: 8 }), 40, 8, 7 ],[ 'invoke-extension', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['params', _lowerFlatRecord({ fieldMetas: [['extensionId', _lowerFlatStringAny, 8, 4 ],['capability', _lowerFlatStringAny, 8, 4 ],['payload', _lowerFlatList({
          elemLowerFn: _lowerFlatU8,
          elemSize32: 1,
          elemAlign32: 1,
        }), 8, 4 ],], size32: 24, align32: 4 }), 24, 4 ],], size32: 32, align32: 8 }), 32, 8, 7 ],[ 'notify', _lowerFlatRecord({ fieldMetas: [['message', _lowerFlatStringAny, 8, 4 ],], size32: 8, align32: 4 }), 8, 4, 2 ],[ 'clipboard-write', _lowerFlatRecord({ fieldMetas: [['fragment', _lowerFlatList({
          elemLowerFn: _lowerFlatU8,
          elemSize32: 1,
          elemAlign32: 1,
        }), 8, 4 ],], size32: 8, align32: 4 }), 8, 4, 2 ],[ 'navigate', _lowerFlatRecord({ fieldMetas: [['uri', _lowerFlatStringAny, 8, 4 ],], size32: 8, align32: 4 }), 8, 4, 2 ],[ 'open-external-url', _lowerFlatRecord({ fieldMetas: [['url', _lowerFlatStringAny, 8, 4 ],], size32: 8, align32: 4 }), 8, 4, 2 ],[ 'set-panel', _lowerFlatRecord({ fieldMetas: [['panelJson', _lowerFlatStringAny, 8, 4 ],], size32: 8, align32: 4 }), 8, 4, 2 ],[ 'set-active-utility', _lowerFlatRecord({ fieldMetas: [['windowId', _lowerFlatStringAny, 8, 4 ],['utilityId', _lowerFlatStringAny, 8, 4 ],], size32: 16, align32: 4 }), 16, 4, 4 ],[ 'set-active-tool', _lowerFlatRecord({ fieldMetas: [['toolId', _lowerFlatStringAny, 8, 4 ],], size32: 8, align32: 4 }), 8, 4, 2 ],[ 'replay-shell-command', _lowerFlatRecord({ fieldMetas: [['actionId', _lowerFlatStringAny, 8, 4 ],['args', 
        _lowerFlatOption({
          caseMetas: [
          [ 'none', null, 0, 0, 0 ],
          [ 'some', _lowerFlatList({
            elemLowerFn: _lowerFlatU8,
            elemSize32: 1,
            elemAlign32: 1,
          }), 8, 4, 2],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4 ],], size32: 20, align32: 4 }), 20, 4, 5 ],[ 'spawn-plugin-instance', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['params', _lowerFlatRecord({ fieldMetas: [['pluginId', _lowerFlatStringAny, 8, 4 ],['appId', _lowerFlatStringAny, 8, 4 ],['osInstanceId', 
        _lowerFlatOption({
          caseMetas: [
          [ 'none', null, 0, 0, 0 ],
          [ 'some', _lowerFlatStringAny, 8, 4, 2],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4 ],['label', 
        _lowerFlatOption({
          caseMetas: [
          [ 'none', null, 0, 0, 0 ],
          [ 'some', _lowerFlatStringAny, 8, 4, 2],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4 ],['artifactJson', 
        _lowerFlatOption({
          caseMetas: [
          [ 'none', null, 0, 0, 0 ],
          [ 'some', _lowerFlatStringAny, 8, 4, 2],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4 ],], size32: 52, align32: 4 }), 52, 4 ],], size32: 64, align32: 8 }), 64, 8, 14 ],[ 'open-plugin-instance', _lowerFlatRecord({ fieldMetas: [['pluginId', _lowerFlatStringAny, 8, 4 ],['appId', _lowerFlatStringAny, 8, 4 ],['osInstanceId', 
        _lowerFlatOption({
          caseMetas: [
          [ 'none', null, 0, 0, 0 ],
          [ 'some', _lowerFlatStringAny, 8, 4, 2],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4 ],], size32: 28, align32: 4 }), 28, 4, 7 ],[ 'open-dialog', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['params', _lowerFlatRecord({ fieldMetas: [['dialogId', _lowerFlatStringAny, 8, 4 ],['args', 
        _lowerFlatOption({
          caseMetas: [
          [ 'none', null, 0, 0, 0 ],
          [ 'some', _lowerFlatList({
            elemLowerFn: _lowerFlatU8,
            elemSize32: 1,
            elemAlign32: 1,
          }), 8, 4, 2],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4 ],], size32: 20, align32: 4 }), 20, 4 ],], size32: 32, align32: 8 }), 32, 8, 6 ],[ 'icon-render-export', _lowerFlatRecord({ fieldMetas: [['items', _lowerFlatList({
          elemLowerFn: _lowerFlatU8,
          elemSize32: 1,
          elemAlign32: 1,
        }), 8, 4 ],], size32: 8, align32: 4 }), 8, 4, 2 ],[ 'download-media-export', _lowerFlatRecord({ fieldMetas: [['filename', _lowerFlatStringAny, 8, 4 ],['mimeType', _lowerFlatStringAny, 8, 4 ],['data', _lowerFlatStringAny, 8, 4 ],['encoding', 
        _lowerFlatOption({
          caseMetas: [
          [ 'none', null, 0, 0, 0 ],
          [ 'some', _lowerFlatStringAny, 8, 4, 2],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4 ],], size32: 36, align32: 4 }), 36, 4, 9 ],[ 'request-file-open', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['params', _lowerFlatRecord({ fieldMetas: [['accept', _lowerFlatStringAny, 8, 4 ],['readAs', 
        _lowerFlatOption({
          caseMetas: [
          [ 'none', null, 0, 0, 0 ],
          [ 'some', _lowerFlatStringAny, 8, 4, 2],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4 ],['importAction', _lowerFlatStringAny, 8, 4 ],['multiple', _lowerFlatBool, 1, 1 ],], size32: 32, align32: 4 }), 32, 4 ],], size32: 40, align32: 8 }), 40, 8, 9 ],[ 'request-media-frames', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['params', _lowerFlatRecord({ fieldMetas: [['accept', _lowerFlatStringAny, 8, 4 ],['frameAction', _lowerFlatStringAny, 8, 4 ],['doneAction', _lowerFlatStringAny, 8, 4 ],['fallbackAction', _lowerFlatStringAny, 8, 4 ],['sampleStride', _lowerFlatU32, 4, 4 ],['maxFrames', _lowerFlatU32, 4, 4 ],['maxLongEdgePx', _lowerFlatU32, 4, 4 ],['fpsHint', _lowerFlatFloat64, 8, 8 ],['payload', 
        _lowerFlatOption({
          caseMetas: [
          [ 'none', null, 0, 0, 0 ],
          [ 'some', _lowerFlatStringAny, 8, 4, 2],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4 ],['args', 
        _lowerFlatOption({
          caseMetas: [
          [ 'none', null, 0, 0, 0 ],
          [ 'some', _lowerFlatList({
            elemLowerFn: _lowerFlatU8,
            elemSize32: 1,
            elemAlign32: 1,
          }), 8, 4, 2],
          ],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        })
        , 12, 4 ],], size32: 80, align32: 8 }), 80, 8 ],], size32: 88, align32: 8 }), 88, 8, null ],[ 'load-document', _lowerFlatRecord({ fieldMetas: [['docPack', _lowerFlatList({
          elemLowerFn: _lowerFlatU8,
          elemSize32: 1,
          elemAlign32: 1,
        }), 8, 4 ],['spr', _lowerFlatList({
          elemLowerFn: _lowerFlatU8,
          elemSize32: 1,
          elemAlign32: 1,
        }), 8, 4 ],], size32: 16, align32: 4 }), 16, 4, 4 ],[ 'request-sync', null, 0, 0, 0 ],[ 'set-timer', _lowerFlatRecord({ fieldMetas: [['id', _lowerFlatU64, 8, 8 ],['afterMs', _lowerFlatU32, 4, 4 ],['repeat', _lowerFlatBool, 1, 1 ],], size32: 16, align32: 8 }), 16, 8, 3 ],[ 'spawn-job', _lowerFlatRecord({ fieldMetas: [['job', _lowerFlatU64, 8, 8 ],['kind', _lowerFlatStringAny, 8, 4 ],['input', _lowerFlatList({
          elemLowerFn: _lowerFlatU8,
          elemSize32: 1,
          elemAlign32: 1,
        }), 8, 4 ],['placement', 
        _lowerFlatEnum({
          caseMetas: [['inline', null, 1, 1, 1],['isolated', null, 1, 1, 1],['exclusive', null, 1, 1, 1],],
          variantSize32: 1,
          variantAlign32: 1,
          variantPayloadOffset32: 1,
          variantFlatCount: 1,
        })
        , 1, 1 ],], size32: 32, align32: 8 }), 32, 8, 6 ],[ 'cancel-job', _lowerFlatRecord({ fieldMetas: [['job', _lowerFlatU64, 8, 8 ],], size32: 8, align32: 8 }), 8, 8, 1 ],[ 'respond', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['outcome', _lowerFlatVariant({
          caseMetas: [[ 'ok', _lowerFlatList({
            elemLowerFn: _lowerFlatU8,
            elemSize32: 1,
            elemAlign32: 1,
          }), 8, 4, 2 ],[ 'fault', _lowerFlatList({
            elemLowerFn: _lowerFlatU8,
            elemSize32: 1,
            elemAlign32: 1,
          }), 8, 4, 2 ],],
          variantSize32: 12,
          variantAlign32: 4,
          variantPayloadOffset32: 4,
          variantFlatCount: 3,
        } ), 12, 4 ],], size32: 24, align32: 8 }), 24, 8, 4 ],[ 'storage-read', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['params', _lowerFlatRecord({ fieldMetas: [['key', _lowerFlatStringAny, 8, 4 ],], size32: 8, align32: 4 }), 8, 4 ],], size32: 16, align32: 8 }), 16, 8, 3 ],[ 'storage-write', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['params', _lowerFlatRecord({ fieldMetas: [['key', _lowerFlatStringAny, 8, 4 ],['value', _lowerFlatList({
          elemLowerFn: _lowerFlatU8,
          elemSize32: 1,
          elemAlign32: 1,
        }), 8, 4 ],], size32: 16, align32: 4 }), 16, 4 ],], size32: 24, align32: 8 }), 24, 8, 5 ],[ 'storage-delete', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['params', _lowerFlatRecord({ fieldMetas: [['key', _lowerFlatStringAny, 8, 4 ],], size32: 8, align32: 4 }), 8, 4 ],], size32: 16, align32: 8 }), 16, 8, 3 ],[ 'request-capability', _lowerFlatRecord({ fieldMetas: [['req', _lowerFlatU64, 8, 8 ],['params', _lowerFlatRecord({ fieldMetas: [['id', _lowerFlatStringAny, 8, 4 ],['scope', _lowerFlatStringAny, 8, 4 ],['reason', _lowerFlatStringAny, 8, 4 ],['optional', _lowerFlatBool, 1, 1 ],], size32: 28, align32: 4 }), 28, 4 ],], size32: 40, align32: 8 }), 40, 8, 8 ],[ 'release-capability', _lowerFlatRecord({ fieldMetas: [['id', _lowerFlatStringAny, 8, 4 ],], size32: 8, align32: 4 }), 8, 4, 2 ],[ 'subscribe', _lowerFlatRecord({ fieldMetas: [['topic', _lowerFlatStringAny, 8, 4 ],], size32: 8, align32: 4 }), 8, 4, 2 ],[ 'unsubscribe', _lowerFlatRecord({ fieldMetas: [['topic', _lowerFlatStringAny, 8, 4 ],], size32: 8, align32: 4 }), 8, 4, 2 ],[ 'request-inference-proposal', _lowerFlatRecord({ fieldMetas: [['kind', 
        _lowerFlatEnum({
          caseMetas: [['gis-map-bounds-region', null, 1, 1, 1],],
          variantSize32: 1,
          variantAlign32: 1,
          variantPayloadOffset32: 1,
          variantFlatCount: 1,
        })
        , 1, 1 ],], size32: 1, align32: 1 }), 1, 1, 1 ],],
        variantSize32: 96,
        variantAlign32: 8,
        variantPayloadOffset32: 8,
        variantFlatCount: null,
      } ),
      elemSize32: 96,
      elemAlign32: 8,
    }), 8, 4 ],['presence', _lowerFlatList({
      elemLowerFn: _lowerFlatRecord({ fieldMetas: [['update', _lowerFlatList({
        elemLowerFn: _lowerFlatU8,
        elemSize32: 1,
        elemAlign32: 1,
      }), 8, 4 ],], size32: 8, align32: 4 }),
      elemSize32: 8,
      elemAlign32: 4,
    }), 8, 4 ],['nextWake', 
    _lowerFlatOption({
      caseMetas: [
      [ 'none', null, 0, 0, 0 ],
      [ 'some', _lowerFlatU64, 8, 8, 1],
      ],
      variantSize32: 16,
      variantAlign32: 8,
      variantPayloadOffset32: 8,
      variantFlatCount: 2,
    })
    , 16, 8 ],['status', _lowerFlatVariant({
      caseMetas: [[ 'idle', null, 0, 0, 0 ],[ 'more-work', null, 0, 0, 0 ],[ 'checkpoint-ready', _lowerFlatRecord({ fieldMetas: [['state', _lowerFlatList({
        elemLowerFn: _lowerFlatU8,
        elemSize32: 1,
        elemAlign32: 1,
      }), 8, 4 ],['appliedProgress', _lowerFlatU64, 8, 8 ],], size32: 16, align32: 8 }), 16, 8, 3 ],[ 'faulted', _lowerFlatList({
        elemLowerFn: _lowerFlatU8,
        elemSize32: 1,
        elemAlign32: 1,
      }), 8, 4, 2 ],],
      variantSize32: 24,
      variantAlign32: 8,
      variantPayloadOffset32: 8,
      variantFlatCount: 4,
    } ), 24, 8 ],['fuelUsed', _lowerFlatU64, 8, 8 ],['commandIngress', _lowerFlatRecord({ fieldMetas: [['kind', _lowerFlatU8, 1, 1 ],['cursor', _lowerFlatRecord({ fieldMetas: [['owner', _lowerFlatU64, 8, 8 ],['generation', _lowerFlatU64, 8, 8 ],['commandIndex', _lowerFlatU32, 4, 4 ],['commandCount', _lowerFlatU32, 4, 4 ],['instance', _lowerFlatU32, 4, 4 ],['seq', _lowerFlatU64, 8, 8 ],['kind', _lowerFlatU8, 1, 1 ],['pageIndex', _lowerFlatU32, 4, 4 ],['pageCount', _lowerFlatU32, 4, 4 ],['itemCount', _lowerFlatU32, 4, 4 ],['metadata', _lowerFlatU32, 4, 4 ],], size32: 64, align32: 8 }), 64, 8 ],['fault', _lowerFlatList({
      elemLowerFn: _lowerFlatU8,
      elemSize32: 1,
      elemAlign32: 1,
    }), 8, 4 ],], size32: 80, align32: 8 }), 80, 8 ],['coldPairIngress', _lowerFlatVariant({
      caseMetas: [[ 'idle', null, 0, 0, 0 ],[ 'page-accepted', _lowerFlatRecord({ fieldMetas: [['lifetime', _lowerFlatRecord({ fieldMetas: [['activationGeneration', _lowerFlatU64, 8, 8 ],['instanceId', _lowerFlatU32, 4, 4 ],['guestLifetime', _lowerFlatU64, 8, 8 ],], size32: 24, align32: 8 }), 24, 8 ],['transferGeneration', _lowerFlatU64, 8, 8 ],['pageIndex', _lowerFlatU32, 4, 4 ],['pageCount', _lowerFlatU32, 4, 4 ],], size32: 40, align32: 8 }), 40, 8, 6 ],[ 'backpressure', _lowerFlatRecord({ fieldMetas: [['lifetime', _lowerFlatRecord({ fieldMetas: [['activationGeneration', _lowerFlatU64, 8, 8 ],['instanceId', _lowerFlatU32, 4, 4 ],['guestLifetime', _lowerFlatU64, 8, 8 ],], size32: 24, align32: 8 }), 24, 8 ],['transferGeneration', _lowerFlatU64, 8, 8 ],['pageIndex', _lowerFlatU32, 4, 4 ],['pageCount', _lowerFlatU32, 4, 4 ],], size32: 40, align32: 8 }), 40, 8, 6 ],[ 'loading', _lowerFlatRecord({ fieldMetas: [['lifetime', _lowerFlatRecord({ fieldMetas: [['activationGeneration', _lowerFlatU64, 8, 8 ],['instanceId', _lowerFlatU32, 4, 4 ],['guestLifetime', _lowerFlatU64, 8, 8 ],], size32: 24, align32: 8 }), 24, 8 ],['transferGeneration', _lowerFlatU64, 8, 8 ],['pageIndex', _lowerFlatU32, 4, 4 ],['pageCount', _lowerFlatU32, 4, 4 ],], size32: 40, align32: 8 }), 40, 8, 6 ],[ 'applied', _lowerFlatRecord({ fieldMetas: [['lifetime', _lowerFlatRecord({ fieldMetas: [['activationGeneration', _lowerFlatU64, 8, 8 ],['instanceId', _lowerFlatU32, 4, 4 ],['guestLifetime', _lowerFlatU64, 8, 8 ],], size32: 24, align32: 8 }), 24, 8 ],['transferGeneration', _lowerFlatU64, 8, 8 ],['baselineFrontier', _lowerFlatRecord({ fieldMetas: [['artifactId', _lowerFlatStringAny, 8, 4 ],['headEditOrdinal', _lowerFlatU64, 8, 8 ],['headEditId', _lowerFlatStringAny, 8, 4 ],['lastCommitSeq', _lowerFlatU64, 8, 8 ],['chainSha256', _lowerFlatList({
        elemLowerFn: _lowerFlatU8,
        elemSize32: 1,
        elemAlign32: 1,
      }), 8, 4 ],], size32: 40, align32: 8 }), 40, 8 ],['aggregateSha256', _lowerFlatList({
        elemLowerFn: _lowerFlatU8,
        elemSize32: 1,
        elemAlign32: 1,
      }), 8, 4 ],], size32: 80, align32: 8 }), 80, 8, 14 ],[ 'fault', _lowerFlatRecord({ fieldMetas: [['cursor', _lowerFlatRecord({ fieldMetas: [['lifetime', _lowerFlatRecord({ fieldMetas: [['activationGeneration', _lowerFlatU64, 8, 8 ],['instanceId', _lowerFlatU32, 4, 4 ],['guestLifetime', _lowerFlatU64, 8, 8 ],], size32: 24, align32: 8 }), 24, 8 ],['transferGeneration', _lowerFlatU64, 8, 8 ],['pageIndex', _lowerFlatU32, 4, 4 ],['pageCount', _lowerFlatU32, 4, 4 ],], size32: 40, align32: 8 }), 40, 8 ],['fault', _lowerFlatList({
        elemLowerFn: _lowerFlatU8,
        elemSize32: 1,
        elemAlign32: 1,
      }), 8, 4 ],], size32: 48, align32: 8 }), 48, 8, 8 ],],
      variantSize32: 88,
      variantAlign32: 8,
      variantPayloadOffset32: 8,
      variantFlatCount: 15,
    } ), 88, 8 ],['lifecycleReceipt', 
    _lowerFlatOption({
      caseMetas: [
      [ 'none', null, 0, 0, 0 ],
      [ 'some', _lowerFlatVariant({
        caseMetas: [[ 'captured', _lowerFlatRecord({ fieldMetas: [['lifetime', _lowerFlatRecord({ fieldMetas: [['activationGeneration', _lowerFlatU64, 8, 8 ],['instanceId', _lowerFlatU32, 4, 4 ],['guestLifetime', _lowerFlatU64, 8, 8 ],], size32: 24, align32: 8 }), 24, 8 ],['requestSequence', _lowerFlatU64, 8, 8 ],], size32: 32, align32: 8 }), 32, 8, 4 ],[ 'accepted', _lowerFlatRecord({ fieldMetas: [['lifetime', _lowerFlatRecord({ fieldMetas: [['activationGeneration', _lowerFlatU64, 8, 8 ],['instanceId', _lowerFlatU32, 4, 4 ],['guestLifetime', _lowerFlatU64, 8, 8 ],], size32: 24, align32: 8 }), 24, 8 ],['requestSequence', _lowerFlatU64, 8, 8 ],['closeGeneration', _lowerFlatU64, 8, 8 ],], size32: 40, align32: 8 }), 40, 8, 5 ],[ 'retired', _lowerFlatRecord({ fieldMetas: [['lifetime', _lowerFlatRecord({ fieldMetas: [['activationGeneration', _lowerFlatU64, 8, 8 ],['instanceId', _lowerFlatU32, 4, 4 ],['guestLifetime', _lowerFlatU64, 8, 8 ],], size32: 24, align32: 8 }), 24, 8 ],['requestSequence', _lowerFlatU64, 8, 8 ],['closeGeneration', _lowerFlatU64, 8, 8 ],], size32: 40, align32: 8 }), 40, 8, 5 ],],
        variantSize32: 48,
        variantAlign32: 8,
        variantPayloadOffset32: 8,
        variantFlatCount: 6,
      } ), 48, 8, 6],
      ],
      variantSize32: 56,
      variantAlign32: 8,
      variantPayloadOffset32: 8,
      variantFlatCount: 7,
    })
    , 56, 8 ],['uiPatchReceipt', 
    _lowerFlatOption({
      caseMetas: [
      [ 'none', null, 0, 0, 0 ],
      [ 'some', _lowerFlatRecord({ fieldMetas: [['lifetime', _lowerFlatRecord({ fieldMetas: [['activationGeneration', _lowerFlatU64, 8, 8 ],['instanceId', _lowerFlatU32, 4, 4 ],['guestLifetime', _lowerFlatU64, 8, 8 ],], size32: 24, align32: 8 }), 24, 8 ],['patchSequence', _lowerFlatU64, 8, 8 ],], size32: 32, align32: 8 }), 32, 8, 4],
      ],
      variantSize32: 40,
      variantAlign32: 8,
      variantPayloadOffset32: 8,
      variantFlatCount: 5,
    })
    , 40, 8 ],], size32: 336, align32: 8 }), 344, 8, 8 ],
    [ 'err', _lowerFlatVariant({
      caseMetas: [[ 'fault', _lowerFlatList({
        elemLowerFn: _lowerFlatU8,
        elemSize32: 1,
        elemAlign32: 1,
      }), 8, 4, 2 ],],
      variantSize32: 12,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 3,
    } ), 344, 8, 8 ],
    ],
    variantSize32: 344,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: null,
  })
  ],
  stringEncoding: 'utf8',
},
);
const trampoline28 = taskReturn.bind(
null,
{
  componentIdx: 0,
  useDirectParams: true,
  getMemoryFn: () => memory0,
  memoryIdx: 0,
  callbackFnIdx: null,
  liftFns: [_liftFlatList({
    elemLiftFn: _liftFlatU8,
    elemAlign32: 1,
    elemSize32: 1,
    typedArray: Uint8Array,
  })],
  lowerFns: [_lowerFlatList({
    elemLowerFn: _lowerFlatU8,
    elemSize32: 1,
    elemAlign32: 1,
  })],
  stringEncoding: 'utf8',
},
);
let trampoline29 = _trampoline29.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 29,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline29.manuallyAsync,
  paramLiftFns: [_liftFlatList({
    elemLiftFn: _liftFlatBorrow.bind(null, 0),
    elemAlign32: 4,
    elemSize32: 4,
    typedArray: undefined,
  })],
  resultLowerFns: [_lowerFlatList({
    elemLowerFn: _lowerFlatU32,
    elemSize32: 4,
    elemAlign32: 4,
  })],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: () => realloc0,
  importFn: _trampoline29,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 29,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline29.manuallyAsync,
  paramLiftFns: [_liftFlatList({
    elemLiftFn: _liftFlatBorrow.bind(null, 0),
    elemAlign32: 4,
    elemSize32: 4,
    typedArray: undefined,
  })],
  resultLowerFns: [_lowerFlatList({
    elemLowerFn: _lowerFlatU32,
    elemSize32: 4,
    elemAlign32: 4,
  })],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: () => realloc0,
  importFn: _trampoline29,
},
);
let trampoline30 = _trampoline30.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 30,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline30.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 3)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU64, 16, 8, 8 ],
    [ 'err', _lowerFlatVariant({
      caseMetas: [[ 'last-operation-failed', _lowerFlatOwn({
        componentIdx: 0,
        lowerFn: 
        function lowerImportedOwnedHost_Error$1(obj) {
          if (!(obj instanceof Error$1)) {
            throw new TypeError('Resource error: Not a valid \"Error$1\" resource.');
          }
          let handle = obj[symbolRscHandle];
          if (!handle) {
            const rep = obj[symbolRscRep] || ++captureCnt1;
            captureTable1.set(rep, obj);
            handle = rscTableCreateOwn(handleTable1, rep);
          }
          return handle;
        }
        ,
      }), 4, 4, 1 ],[ 'closed', null, 0, 0, 0 ],],
      variantSize32: 8,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 2,
    } ), 16, 8, 8 ],
    ],
    variantSize32: 16,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline30,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 30,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline30.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 3)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', _lowerFlatU64, 16, 8, 8 ],
    [ 'err', _lowerFlatVariant({
      caseMetas: [[ 'last-operation-failed', _lowerFlatOwn({
        componentIdx: 0,
        lowerFn: 
        function lowerImportedOwnedHost_Error$1(obj) {
          if (!(obj instanceof Error$1)) {
            throw new TypeError('Resource error: Not a valid \"Error$1\" resource.');
          }
          let handle = obj[symbolRscHandle];
          if (!handle) {
            const rep = obj[symbolRscRep] || ++captureCnt1;
            captureTable1.set(rep, obj);
            handle = rscTableCreateOwn(handleTable1, rep);
          }
          return handle;
        }
        ,
      }), 4, 4, 1 ],[ 'closed', null, 0, 0, 0 ],],
      variantSize32: 8,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 2,
    } ), 16, 8, 8 ],
    ],
    variantSize32: 16,
    variantAlign32: 8,
    variantPayloadOffset32: 8,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline30,
},
);
let trampoline31 = _trampoline31.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 31,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline31.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 3),_liftFlatList({
    elemLiftFn: _liftFlatU8,
    elemAlign32: 1,
    elemSize32: 1,
    typedArray: Uint8Array,
  })],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 12, 4, 4 ],
    [ 'err', _lowerFlatVariant({
      caseMetas: [[ 'last-operation-failed', _lowerFlatOwn({
        componentIdx: 0,
        lowerFn: 
        function lowerImportedOwnedHost_Error$1(obj) {
          if (!(obj instanceof Error$1)) {
            throw new TypeError('Resource error: Not a valid \"Error$1\" resource.');
          }
          let handle = obj[symbolRscHandle];
          if (!handle) {
            const rep = obj[symbolRscRep] || ++captureCnt1;
            captureTable1.set(rep, obj);
            handle = rscTableCreateOwn(handleTable1, rep);
          }
          return handle;
        }
        ,
      }), 4, 4, 1 ],[ 'closed', null, 0, 0, 0 ],],
      variantSize32: 8,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 2,
    } ), 12, 4, 4 ],
    ],
    variantSize32: 12,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline31,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 31,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline31.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 3),_liftFlatList({
    elemLiftFn: _liftFlatU8,
    elemAlign32: 1,
    elemSize32: 1,
    typedArray: Uint8Array,
  })],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 12, 4, 4 ],
    [ 'err', _lowerFlatVariant({
      caseMetas: [[ 'last-operation-failed', _lowerFlatOwn({
        componentIdx: 0,
        lowerFn: 
        function lowerImportedOwnedHost_Error$1(obj) {
          if (!(obj instanceof Error$1)) {
            throw new TypeError('Resource error: Not a valid \"Error$1\" resource.');
          }
          let handle = obj[symbolRscHandle];
          if (!handle) {
            const rep = obj[symbolRscRep] || ++captureCnt1;
            captureTable1.set(rep, obj);
            handle = rscTableCreateOwn(handleTable1, rep);
          }
          return handle;
        }
        ,
      }), 4, 4, 1 ],[ 'closed', null, 0, 0, 0 ],],
      variantSize32: 8,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 2,
    } ), 12, 4, 4 ],
    ],
    variantSize32: 12,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline31,
},
);
let trampoline32 = _trampoline32.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 32,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline32.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 3)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 12, 4, 4 ],
    [ 'err', _lowerFlatVariant({
      caseMetas: [[ 'last-operation-failed', _lowerFlatOwn({
        componentIdx: 0,
        lowerFn: 
        function lowerImportedOwnedHost_Error$1(obj) {
          if (!(obj instanceof Error$1)) {
            throw new TypeError('Resource error: Not a valid \"Error$1\" resource.');
          }
          let handle = obj[symbolRscHandle];
          if (!handle) {
            const rep = obj[symbolRscRep] || ++captureCnt1;
            captureTable1.set(rep, obj);
            handle = rscTableCreateOwn(handleTable1, rep);
          }
          return handle;
        }
        ,
      }), 4, 4, 1 ],[ 'closed', null, 0, 0, 0 ],],
      variantSize32: 8,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 2,
    } ), 12, 4, 4 ],
    ],
    variantSize32: 12,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline32,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 32,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline32.manuallyAsync,
  paramLiftFns: [_liftFlatBorrow.bind(null, 3)],
  resultLowerFns: [
  _lowerFlatResult({
    caseMetas: [
    [ 'ok', null, 12, 4, 4 ],
    [ 'err', _lowerFlatVariant({
      caseMetas: [[ 'last-operation-failed', _lowerFlatOwn({
        componentIdx: 0,
        lowerFn: 
        function lowerImportedOwnedHost_Error$1(obj) {
          if (!(obj instanceof Error$1)) {
            throw new TypeError('Resource error: Not a valid \"Error$1\" resource.');
          }
          let handle = obj[symbolRscHandle];
          if (!handle) {
            const rep = obj[symbolRscRep] || ++captureCnt1;
            captureTable1.set(rep, obj);
            handle = rscTableCreateOwn(handleTable1, rep);
          }
          return handle;
        }
        ,
      }), 4, 4, 1 ],[ 'closed', null, 0, 0, 0 ],],
      variantSize32: 8,
      variantAlign32: 4,
      variantPayloadOffset32: 4,
      variantFlatCount: 2,
    } ), 12, 4, 4 ],
    ],
    variantSize32: 12,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 3,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline32,
},
);
let trampoline33 = _trampoline33.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 33,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline33.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatList({
    elemLowerFn: _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatStringAny, 8, 4],[_lowerFlatStringAny, 8, 4],], size32: 16, align32: 4 }),
    elemSize32: 16,
    elemAlign32: 4,
  })],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: () => realloc0,
  importFn: _trampoline33,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 33,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline33.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatList({
    elemLowerFn: _lowerFlatTuple({ elemLowerMetas: [[_lowerFlatStringAny, 8, 4],[_lowerFlatStringAny, 8, 4],], size32: 16, align32: 4 }),
    elemSize32: 16,
    elemAlign32: 4,
  })],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: () => realloc0,
  importFn: _trampoline33,
},
);
let trampoline34 = _trampoline34.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 34,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline34.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [
  _lowerFlatOption({
    caseMetas: [
    [ 'none', null, 0, 0, 0 ],
    [ 'some', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_TerminalInput(obj) {
        if (!(obj instanceof TerminalInput)) {
          throw new TypeError('Resource error: Not a valid \"TerminalInput\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt4;
          captureTable4.set(rep, obj);
          handle = rscTableCreateOwn(handleTable4, rep);
        }
        return handle;
      }
      ,
    }), 4, 4, 1],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline34,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 34,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline34.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [
  _lowerFlatOption({
    caseMetas: [
    [ 'none', null, 0, 0, 0 ],
    [ 'some', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_TerminalInput(obj) {
        if (!(obj instanceof TerminalInput)) {
          throw new TypeError('Resource error: Not a valid \"TerminalInput\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt4;
          captureTable4.set(rep, obj);
          handle = rscTableCreateOwn(handleTable4, rep);
        }
        return handle;
      }
      ,
    }), 4, 4, 1],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline34,
},
);
let trampoline35 = _trampoline35.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 35,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline35.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [
  _lowerFlatOption({
    caseMetas: [
    [ 'none', null, 0, 0, 0 ],
    [ 'some', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_TerminalOutput(obj) {
        if (!(obj instanceof TerminalOutput)) {
          throw new TypeError('Resource error: Not a valid \"TerminalOutput\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt5;
          captureTable5.set(rep, obj);
          handle = rscTableCreateOwn(handleTable5, rep);
        }
        return handle;
      }
      ,
    }), 4, 4, 1],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline35,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 35,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline35.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [
  _lowerFlatOption({
    caseMetas: [
    [ 'none', null, 0, 0, 0 ],
    [ 'some', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_TerminalOutput(obj) {
        if (!(obj instanceof TerminalOutput)) {
          throw new TypeError('Resource error: Not a valid \"TerminalOutput\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt5;
          captureTable5.set(rep, obj);
          handle = rscTableCreateOwn(handleTable5, rep);
        }
        return handle;
      }
      ,
    }), 4, 4, 1],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline35,
},
);
let trampoline36 = _trampoline36.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 36,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline36.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [
  _lowerFlatOption({
    caseMetas: [
    [ 'none', null, 0, 0, 0 ],
    [ 'some', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_TerminalOutput(obj) {
        if (!(obj instanceof TerminalOutput)) {
          throw new TypeError('Resource error: Not a valid \"TerminalOutput\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt5;
          captureTable5.set(rep, obj);
          handle = rscTableCreateOwn(handleTable5, rep);
        }
        return handle;
      }
      ,
    }), 4, 4, 1],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline36,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 36,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline36.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [
  _lowerFlatOption({
    caseMetas: [
    [ 'none', null, 0, 0, 0 ],
    [ 'some', _lowerFlatOwn({
      componentIdx: 0,
      lowerFn: 
      function lowerImportedOwnedHost_TerminalOutput(obj) {
        if (!(obj instanceof TerminalOutput)) {
          throw new TypeError('Resource error: Not a valid \"TerminalOutput\" resource.');
        }
        let handle = obj[symbolRscHandle];
        if (!handle) {
          const rep = obj[symbolRscRep] || ++captureCnt5;
          captureTable5.set(rep, obj);
          handle = rscTableCreateOwn(handleTable5, rep);
        }
        return handle;
      }
      ,
    }), 4, 4, 1],
    ],
    variantSize32: 8,
    variantAlign32: 4,
    variantPayloadOffset32: 4,
    variantFlatCount: 2,
  })
  ],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline36,
},
);
let trampoline37 = _trampoline37.manuallyAsync ? new WebAssembly.Suspending(_lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 37,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline37.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatRecord({ fieldMetas: [['seconds', _lowerFlatU64, 8, 8 ],['nanoseconds', _lowerFlatU32, 4, 4 ],], size32: 16, align32: 8 })],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline37,
},
)) : _lowerImportBackwardsCompat.bind(
null,
{
  trampolineIdx: 37,
  componentIdx: 0,
  isAsync: false,
  isManualAsync: _trampoline37.manuallyAsync,
  paramLiftFns: [],
  resultLowerFns: [_lowerFlatRecord({ fieldMetas: [['seconds', _lowerFlatU64, 8, 8 ],['nanoseconds', _lowerFlatU32, 4, 4 ],], size32: 16, align32: 8 })],
  hasResultPointer: true,
  funcTypeIsAsync: false,
  getCallbackFn: () => null,
  getPostReturnFn: () => null,
  isCancellable: false,
  memoryIdx: 0,
  stringEncoding: 'utf8',
  getMemoryFn: () => memory0,
  getReallocFn: undefined,
  importFn: _trampoline37,
},
);

const $init = (() => {
  let gen = (function* _initGenerator () {
    const module0 = fetchCompile(__semioVersionedComponentAssetUrl('./semio_s_plugin_procedural_component.core.wasm'));
    const module1 = base64Compile('AGFzbQEAAAABQwtgAX8AYAR/f39/AGACf38Bf2AEf39/fwBgBH9/f38AYAV/f39/fwBgAX8AYAJ/fwBgA39/fwBgAn9/AGAEf39/fwADFhUAAQIDBAUDAwYDAwcICQoJAAAAAAAEBQFwARUVB2sWATAAAAExAAEBMgACATMAAwE0AAQBNQAFATYABgE3AAcBOAAIATkACQIxMAAKAjExAAsCMTIADAIxMwANAjE0AA4CMTUADwIxNgAQAjE3ABECMTgAEgIxOQATAjIwABQIJGltcG9ydHMBAAqXAhUJACAAQQARAAALDwAgACABIAIgA0EBEQEACwsAIAAgAUECEQIACw8AIAAgASACIANBAxEDAAsPACAAIAEgAiADQQQRBAALEQAgACABIAIgAyAEQQURBQALDwAgACABIAIgA0EGEQMACw8AIAAgASACIANBBxEDAAsJACAAQQgRBgALDwAgACABIAIgA0EJEQMACw8AIAAgASACIANBChEDAAsLACAAIAFBCxEHAAsNACAAIAEgAkEMEQgACwsAIAAgAUENEQkACw8AIAAgASACIANBDhEKAAsLACAAIAFBDxEJAAsJACAAQRARAAALCQAgAEEREQAACwkAIABBEhEAAAsJACAAQRMRAAALCQAgAEEUEQAACwAvCXByb2R1Y2VycwEMcHJvY2Vzc2VkLWJ5AQ13aXQtY29tcG9uZW50BzAuMjUyLjA');
    const module2 = base64Compile('AGFzbQEAAAABQwtgAX8AYAR/f39/AGACf38Bf2AEf39/fwBgBH9/f38AYAV/f39/fwBgAX8AYAJ/fwBgA39/fwBgAn9/AGAEf39/fwAChAEWAAEwAAAAATEAAQABMgACAAEzAAMAATQABAABNQAFAAE2AAMAATcAAwABOAAGAAE5AAMAAjEwAAMAAjExAAcAAjEyAAgAAjEzAAkAAjE0AAoAAjE1AAkAAjE2AAAAAjE3AAAAAjE4AAAAAjE5AAAAAjIwAAAACCRpbXBvcnRzAXABFRUJGwEAQQALFQABAgMEBQYHCAkKCwwNDg8QERITFAAvCXByb2R1Y2VycwEMcHJvY2Vzc2VkLWJ5AQ13aXQtY29tcG9uZW50BzAuMjUyLjA');
    ({ exports: exports0 } = yield instantiateCore(yield module1));
    ({ exports: exports1 } = yield instantiateCore(yield module0, {
      $root: {
        '[context-get-0]': contextGet.bind(null, { componentIdx: 0, slot: 0 }),
        '[context-set-0]': contextSet.bind(null, { componentIdx: 0, slot: 0 }),
        '[waitable-join]': trampoline3,
        '[waitable-set-drop]': trampoline5,
        '[waitable-set-new]': trampoline4,
        '[waitable-set-poll]': exports0['2'],
      },
      '[export]$root': {
        '[task-cancel]': trampoline1,
      },
      '[export]semio:framework/checkpoint@1.0.0': {
        '[task-return]checkpoint': exports0['4'],
        '[task-return]restore': exports0['3'],
      },
      '[export]semio:framework/describe@1.0.0': {
        '[task-return]describe': exports0['11'],
      },
      '[export]semio:framework/jobs@1.0.0': {
        '[task-return]cancel-job': trampoline2,
        '[task-return]start-job': exports0['6'],
        '[task-return]step-job': exports0['5'],
        '[task-return]take-segmented-download-chunk': exports0['7'],
      },
      '[export]semio:framework/reactor@1.0.0': {
        '[task-return]poll': exports0['8'],
        '[task-return]stage-cold-pair-page': exports0['10'],
        '[task-return]stage-command-page': exports0['9'],
      },
      'semio:framework/pure@1.0.0': {
        log: exports0['1'],
        'now-ms': trampoline0,
      },
      'wasi:cli/environment@0.2.0': {
        'get-environment': exports0['16'],
      },
      'wasi:cli/exit@0.2.0': {
        exit: trampoline12,
      },
      'wasi:cli/stderr@0.2.0': {
        'get-stderr': trampoline17,
      },
      'wasi:cli/stdin@0.2.0': {
        'get-stdin': trampoline15,
      },
      'wasi:cli/stdout@0.2.0': {
        'get-stdout': trampoline16,
      },
      'wasi:cli/terminal-input@0.2.0': {
        '[resource-drop]terminal-input': trampoline10,
      },
      'wasi:cli/terminal-output@0.2.0': {
        '[resource-drop]terminal-output': trampoline11,
      },
      'wasi:cli/terminal-stderr@0.2.0': {
        'get-terminal-stderr': exports0['19'],
      },
      'wasi:cli/terminal-stdin@0.2.0': {
        'get-terminal-stdin': exports0['17'],
      },
      'wasi:cli/terminal-stdout@0.2.0': {
        'get-terminal-stdout': exports0['18'],
      },
      'wasi:clocks/monotonic-clock@0.2.0': {
        now: trampoline18,
        'subscribe-duration': trampoline19,
      },
      'wasi:clocks/wall-clock@0.2.0': {
        now: exports0['20'],
      },
      'wasi:io/error@0.2.0': {
        '[resource-drop]error': trampoline6,
      },
      'wasi:io/poll@0.2.0': {
        '[method]pollable.block': trampoline13,
        '[resource-drop]pollable': trampoline7,
        poll: exports0['12'],
      },
      'wasi:io/streams@0.2.0': {
        '[method]output-stream.blocking-flush': exports0['15'],
        '[method]output-stream.check-write': exports0['13'],
        '[method]output-stream.subscribe': trampoline14,
        '[method]output-stream.write': exports0['14'],
        '[resource-drop]input-stream': trampoline8,
        '[resource-drop]output-stream': trampoline9,
      },
      'wasi:random/insecure-seed@0.2.9': {
        'insecure-seed': exports0['0'],
      },
    }));
    memory0 = exports1.memory;
    realloc0 = exports1.cabi_realloc;
    
    try {
      realloc0Async = WebAssembly.promising(exports1.cabi_realloc);
    } catch(err) {
      realloc0Async = exports1.cabi_realloc;
    }
    
    ({ exports: exports2 } = yield instantiateCore(yield module2, {
      '': {
        $imports: exports0.$imports,
        '0': trampoline20,
        '1': trampoline21,
        '10': trampoline23,
        '11': trampoline28,
        '12': trampoline29,
        '13': trampoline30,
        '14': trampoline31,
        '15': trampoline32,
        '16': trampoline33,
        '17': trampoline34,
        '18': trampoline35,
        '19': trampoline36,
        '2': trampoline22,
        '20': trampoline37,
        '3': trampoline23,
        '4': trampoline24,
        '5': trampoline25,
        '6': trampoline23,
        '7': trampoline26,
        '8': trampoline27,
        '9': trampoline23,
      },
    }));
    
    callback_0 = WebAssembly.promising(exports1['[callback][async-lift]semio:framework/checkpoint@1.0.0#checkpoint']);
    callback_0.fnName = "exports1['[callback][async-lift]semio:framework/checkpoint@1.0.0#checkpoint']";
    
    reactor100StageCommandPage = WebAssembly.promising(exports1['[async-lift]semio:framework/reactor@1.0.0#stage-command-page']);
    reactor100StageColdPairPage = WebAssembly.promising(exports1['[async-lift]semio:framework/reactor@1.0.0#stage-cold-pair-page']);
    reactor100Poll = WebAssembly.promising(exports1['[async-lift]semio:framework/reactor@1.0.0#poll']);
    jobs100StartJob = WebAssembly.promising(exports1['[async-lift]semio:framework/jobs@1.0.0#start-job']);
    jobs100StepJob = WebAssembly.promising(exports1['[async-lift]semio:framework/jobs@1.0.0#step-job']);
    jobs100CancelJob = WebAssembly.promising(exports1['[async-lift]semio:framework/jobs@1.0.0#cancel-job']);
    jobs100TakeSegmentedDownloadChunk = WebAssembly.promising(exports1['[async-lift]semio:framework/jobs@1.0.0#take-segmented-download-chunk']);
    checkpoint100Checkpoint = WebAssembly.promising(exports1['[async-lift]semio:framework/checkpoint@1.0.0#checkpoint']);
    checkpoint100Restore = WebAssembly.promising(exports1['[async-lift]semio:framework/checkpoint@1.0.0#restore']);
    describe100Describe = WebAssembly.promising(exports1['[async-lift]semio:framework/describe@1.0.0#describe']);
  })();
  let promise, resolve, reject;
  function runNext (value) {
    try {
      let done;
      do {
        ({ value, done } = gen.next(value));
      } while (!(value instanceof Promise) && !done);
      if (done) {
        if (resolve) resolve(value);
        else return value;
      }
      if (!promise) promise = new Promise((_resolve, _reject) => (resolve = _resolve, reject = _reject));
      value.then(runNext, reject);
    }
    catch (e) {
      if (reject) reject(e);
      else throw e;
    }
  }
  const maybeSyncReturn = runNext(null);
  return promise || maybeSyncReturn;
})();

await $init;
const checkpoint100 = {
  checkpoint: checkpoint,
  restore: restore,
  
};
const describe100 = {
  describe: describe,
  
};
const jobs100 = {
  cancelJob: cancelJob,
  startJob: startJob,
  stepJob: stepJob,
  takeSegmentedDownloadChunk: takeSegmentedDownloadChunk,
  
};
const reactor100 = {
  poll: poll$1,
  stageColdPairPage: stageColdPairPage,
  stageCommandPage: stageCommandPage,
  
};

export { checkpoint100 as checkpoint, describe100 as describe, jobs100 as jobs, reactor100 as reactor, checkpoint100 as 'semio:framework/checkpoint@1.0.0', describe100 as 'semio:framework/describe@1.0.0', jobs100 as 'semio:framework/jobs@1.0.0', reactor100 as 'semio:framework/reactor@1.0.0',  }
export const _util = {
  
}


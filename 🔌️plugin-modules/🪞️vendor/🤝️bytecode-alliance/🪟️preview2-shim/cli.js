import { inputStreamCreate, outputStreamCreate, pollableCreate, } from "./io.js";
export { _setEnv, _setArgs, environment } from "./environment.js";
export { _setCwd } from "./config.js";
const symbolDispose = Symbol.dispose ?? Symbol.for("dispose");
class ComponentExit extends Error {
    exitError = true;
    code;
    constructor(code) {
        super(`Component exited ${code === 0 ? "successfully" : "with error"}`);
        this.code = code;
    }
}
export const exit = {
    exit(status) {
        throw new ComponentExit(status.tag === "err" ? 1 : 0);
    },
    // @ts-expect-error - Available only wasi-cli v0.2.12
    exitWithCode(code) {
        throw new ComponentExit(code);
    },
};
export function _setStdin(handler) {
    stdinStream.handler = handler;
}
export function _setStderr(handler) {
    stderrStream.handler = handler;
}
export function _setStdout(handler) {
    stdoutStream.handler = handler;
}
const stdinStream = inputStreamCreate({
    blockingRead(_len) {
        // TODO
        return new Uint8Array(0);
    },
    subscribe() {
        // TODO
        return pollableCreate();
    },
    [symbolDispose]() {
        // TODO
    },
});
const textDecoder = new TextDecoder();
const stdoutCarry = { bytes: new Uint8Array(0) };
const stderrCarry = { bytes: new Uint8Array(0) };
function writeSemioGuestLogLine(channel, contents, carry) {
    const merged = new Uint8Array(carry.bytes.length + contents.length);
    merged.set(carry.bytes);
    merged.set(contents, carry.bytes.length);
    let start = 0;
    for (let i = 0; i < merged.length; i++) {
        if (merged[i] === 10) {
            const text = textDecoder.decode(merged.subarray(start, i));
            if (channel === "stdout") console.log(text);
            else if (text.startsWith("[DEBUG]")) console.debug(text);
            else console.error(text);
            start = i + 1;
        }
    }
    carry.bytes = start === 0 ? merged : merged.subarray(start);
}
writeSemioGuestLogLine.semioGuestLogCarry = true;
const stdoutStream = outputStreamCreate({
    write(contents) {
        writeSemioGuestLogLine("stdout", contents, stdoutCarry);
    },
    blockingFlush() { },
    [symbolDispose]() { },
});
const stderrStream = outputStreamCreate({
    write(contents) {
        writeSemioGuestLogLine("stderr", contents, stderrCarry);
    },
    blockingFlush() { },
    [symbolDispose]() { },
});
export const stdin = {
    getStdin() {
        return stdinStream;
    },
};
export const stdout = {
    getStdout() {
        return stdoutStream;
    },
};
export const stderr = {
    getStderr() {
        return stderrStream;
    },
};
class TerminalInput {
}
class TerminalOutput {
}
const terminalStdoutInstance = new TerminalOutput();
const terminalStderrInstance = new TerminalOutput();
const terminalStdinInstance = new TerminalInput();
export const terminalInput = {
    TerminalInput,
};
export const terminalOutput = {
    TerminalOutput,
};
export const terminalStderr = {
    getTerminalStderr() {
        return terminalStderrInstance;
    },
};
export const terminalStdin = {
    getTerminalStdin() {
        return terminalStdinInstance;
    },
};
export const terminalStdout = {
    getTerminalStdout() {
        return terminalStdoutInstance;
    },
};

/** @module Interface semio:framework/instance-lifetime@1.0.0 **/
export interface Lifetime {
  activationGeneration: bigint,
  instanceId: number,
  guestLifetime: bigint,
}
export interface CapturedReceipt {
  lifetime: Lifetime,
  requestSequence: bigint,
}
export interface CloseReceipt {
  lifetime: Lifetime,
  requestSequence: bigint,
  closeGeneration: bigint,
}
export type Receipt = ReceiptCaptured | ReceiptAccepted | ReceiptRetired;
export interface ReceiptCaptured {
  tag: 'captured',
  val: CapturedReceipt,
}
export interface ReceiptAccepted {
  tag: 'accepted',
  val: CloseReceipt,
}
export interface ReceiptRetired {
  tag: 'retired',
  val: CloseReceipt,
}
export interface UiPatchReceipt {
  lifetime: Lifetime,
  patchSequence: bigint,
}
export interface CloseRequest {
  lifetime: Lifetime,
  requestSequence: bigint,
}

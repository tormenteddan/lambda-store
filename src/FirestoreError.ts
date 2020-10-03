import * as te from './TaggedError'
import TaggedError = te.TaggedError

export type FirestoreErrorType = 'FirestoreError'
export type FirestoreError = TaggedError<FirestoreErrorType>
export const toFirestoreError = (x: unknown): FirestoreError =>
  te.ofUnknown('FirestoreError', x)

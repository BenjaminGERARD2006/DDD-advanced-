import { Brand } from "../shared/Brand";

export type StudentId = Brand<string, "StudentId">;

export function createStudentId(id: string): StudentId {
  if (!/^STU-\d+$/.test(id)) {
    throw new Error("Invalid StudentId (expected STU-123)");
  }
  return id as StudentId;
}

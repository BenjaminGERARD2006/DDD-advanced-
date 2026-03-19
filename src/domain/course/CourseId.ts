import { Brand } from "../shared/Brand";

export type CourseId = Brand<string, "CourseId">;

export function createCourseId(id: string): CourseId {
  if (!/^COURSE-\d+$/.test(id)) {
    throw new Error("Invalid CourseId (expected COURSE-123)");
  }
  return id as CourseId;
}

import { StudentId } from "../student/StudentId";
import { CourseId } from "../course/CourseId";

export class Enrollment {
  constructor(
    public readonly studentId: StudentId,
    public readonly courseId: CourseId
  ) {}
}

import { DomainEvent } from "./DomainEvent";
import { StudentId } from "../student/StudentId";
import { CourseId } from "../course/CourseId";

export class StudentEnrolledEvent implements DomainEvent {
  name = "StudentEnrolled";
  occurredAt = new Date();

  constructor(
    public readonly studentId: StudentId,
    public readonly courseId: CourseId
  ) {}
}

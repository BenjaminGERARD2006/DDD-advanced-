import { EnrollmentService } from "../../domain/enrollment/EnrollmentService";
import { EventBus } from "../../domain/events/EventBus";
import { StudentEnrolledEvent } from "../../domain/events/StudentEnrolledEvent";
import { StudentId } from "../../domain/student/StudentId";
import { Course } from "../../domain/course/Course";

export class EnrollStudentUseCase {
  constructor(
    private enrollmentService: EnrollmentService,
    private eventBus: EventBus
  ) {}

  execute(studentId: StudentId, course: Course) {
    // Aggregate handles logic
    course.enroll(studentId);

    // Optional: still persist enrollment
    this.enrollmentService.enroll(studentId, course.id);

    // Publish event
    this.eventBus.publish(
      new StudentEnrolledEvent(studentId, course.id)
    );
  }
}
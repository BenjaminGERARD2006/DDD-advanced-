import { EnrollmentRepository } from "../../domain/enrollment/EnrollmentRepository";
import { Enrollment } from "../../domain/enrollment/Enrollment";
import { StudentId } from "../../domain/student/StudentId";
import { CourseId } from "../../domain/course/CourseId";

export class InMemoryEnrollmentRepository implements EnrollmentRepository {
  private enrollments: Enrollment[] = [];

  save(enrollment: Enrollment): void {
    this.enrollments.push(enrollment);
  }

  findByStudentAndCourse(
    studentId: StudentId,
    courseId: CourseId
  ): Enrollment | undefined {
    return this.enrollments.find(
      e => e.studentId === studentId && e.courseId === courseId
    );
  }

  findAll(): Enrollment[] {
    return this.enrollments;
  }
}
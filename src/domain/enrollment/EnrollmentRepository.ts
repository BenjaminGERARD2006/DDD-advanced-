import { Enrollment } from "./Enrollment";
import { StudentId } from "../student/StudentId";
import { CourseId } from "../course/CourseId";

export interface EnrollmentRepository {
  save(enrollment: Enrollment): void;

  findByStudentAndCourse(
    studentId: StudentId,
    courseId: CourseId
  ): Enrollment | undefined;

  findAll(): Enrollment[];
}
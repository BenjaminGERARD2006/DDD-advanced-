import { Enrollment } from "./Enrollment";
import { StudentId } from "../student/StudentId";
import { CourseId } from "../course/CourseId";
import { EnrollmentRepository } from "./EnrollmentRepository";

export class EnrollmentService {
  constructor(private repo: EnrollmentRepository) {}

  enroll(studentId: StudentId, courseId: CourseId): Enrollment {
    const exists = this.repo.findByStudentAndCourse(studentId, courseId);

    if (exists) {
      throw new Error("Student already enrolled");
    }

    const enrollment = new Enrollment(studentId, courseId);

    this.repo.save(enrollment);

    return enrollment;
  }

  list(): Enrollment[] {
    return this.repo.findAll();
  }
}
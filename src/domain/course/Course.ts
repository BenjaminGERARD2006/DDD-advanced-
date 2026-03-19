import { CourseId } from "./CourseId";
import { StudentId } from "../student/StudentId";

export class Course {
  private enrolledStudents: StudentId[] = [];

  constructor(
    public readonly id: CourseId,
    public title: string,
    public capacity: number
  ) {}

  enroll(studentId: StudentId) {
    if (this.enrolledStudents.length >= this.capacity) {
      throw new Error("Course is full");
    }

    if (this.enrolledStudents.includes(studentId)) {
      throw new Error("Student already enrolled in this course");
    }

    this.enrolledStudents.push(studentId);
  }

  getEnrollments() {
    return this.enrolledStudents;
  }
}
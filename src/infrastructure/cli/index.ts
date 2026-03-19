import { createStudentId } from "../../domain/student/StudentId";
import { createCourseId } from "../../domain/course/CourseId";
import { Course } from "../../domain/course/Course";
import { EnrollmentService } from "../../domain/enrollment/EnrollmentService";
import { EventBus } from "../../domain/events/EventBus";
import { EnrollStudentUseCase } from "../../application/use-cases/EnrollStudent";
import { InMemoryEnrollmentRepository } from "../repositories/InMemoryEnrollmentRepository";

// Create course (Aggregate Root)
const course = new Course(
  createCourseId("COURSE-1"),
  "DDD Course",
  1 // capacity = 1 for testing
);

// Setup infrastructure
const repo = new InMemoryEnrollmentRepository();
const eventBus = new EventBus();
const enrollmentService = new EnrollmentService(repo);

const enrollUseCase = new EnrollStudentUseCase(
  enrollmentService,
  eventBus
);

// Observer (Event listener)
eventBus.subscribe("StudentEnrolled", (event) => {
  console.log("EVENT:", event);
});

// CLI
const command = process.argv[2];

try {
  if (command === "enroll") {
    const studentId = createStudentId(process.argv[3]);

    enrollUseCase.execute(studentId, course);

    console.log("Student enrolled!");
  } else if (command === "list") {
    console.log(enrollmentService.list());
  } else {
    console.log("Commands:");
    console.log("  enroll STU-1");
    console.log("  list");
  }
} catch (error: any) {
  console.error("❌ Error:", error.message);
}
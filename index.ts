import { EventBus } from "./src/infrastructure/event-bus";

function main(): void {
  const eventBus = new EventBus();

  //Subscriptions
  eventBus.subscribe("StudentEnrolled", (event) => {
    console.log("[EVENT] StudentEnrolled");
    console.log(event.payload);
    console.log("");
  });

  eventBus.subscribe("CourseCapacityReached", (event) => {
    console.log("[EVENT] CourseCapacityReached");
    console.log(event.payload);
    console.log("");
  });

  eventBus.subscribe("CourseFull", (event) => {
    console.log("[EVENT] CourseFull");
    console.log(event.payload);
    console.log("");
  });

  eventBus.subscribe("EnrollmentCancelled", (event) => {
    console.log("[EVENT] EnrollmentCancelled");
    console.log(event.payload);
    console.log("");
  });

  console.log("=== University Enrollment CLI ===\n");

  //Scenario 1: Successful enrollment
  eventBus.emit({
    type: "StudentEnrolled",
    payload: {
      enrollmentId: "ENR-001",
      studentId: "STU123456",
      courseCode: "CS101",
      semester: "Fall2026",
      occurredAt: new Date(),
    },
  });

  //Scenario 2: 80% capacity
  eventBus.emit({
    type: "CourseCapacityReached",
    payload: {
      courseCode: "CS101",
      enrolledCount: 8,
      capacity: 10,
      occurredAt: new Date(),
    },
  });

  //Scenario 3: Course full
  eventBus.emit({
    type: "CourseFull",
    payload: {
      courseCode: "CS101",
      occurredAt: new Date(),
    },
  });

  //Scenario 5: Cancel enrollment
  eventBus.emit({
    type: "EnrollmentCancelled",
    payload: {
      enrollmentId: "ENR-001",
      studentId: "STU123456",
      courseCode: "CS101",
      semester: "Fall2026",
      occurredAt: new Date(),
    },
  });
}

main();
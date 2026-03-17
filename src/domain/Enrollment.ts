import {
  EnrollmentId,
  StudentId,
  CourseCode,
  Semester,
} from "./brandedTypes.ts";

export type EnrollmentStatus = "active" | "cancelled";

export class Enrollment {
  private _id: EnrollmentId; // entity identity
  private _studentId: StudentId;
  private _courseCode: CourseCode;
  private _semester: Semester;
  private _status: EnrollmentStatus;

  constructor(
    id: EnrollmentId,
    studentId: StudentId,
    courseCode: CourseCode,
    semester: Semester,
  ) {
    this._id = id;
    this._studentId = studentId;
    this._courseCode = courseCode;
    this._semester = semester;
    this._status = "active";
  }

  // _____________ GETTERS ________________
  get id(): EnrollmentId {
    return this._id;
  }

  get studentId(): StudentId {
    return this._studentId;
  }

  get courseCode(): CourseCode {
    return this._courseCode;
  }

  get semester(): Semester {
    return this._semester;
  }

  get status(): EnrollmentStatus {
    return this._status;
  }

  // _____________ Domain Logic ________________

  isActive(): boolean {
    return this._status === "active";
  }

  // can get cancelled but can't be active after the cancellation
  cancel(): void {
    if (this._status === "cancelled") {
      throw new Error("no enrollment to cancel, cancelled already");
    }
    this._status = "cancelled";
  }
}

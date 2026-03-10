import { CourseCode, Credits } from "./brandedTypes.ts";

export class Course {
  private _code: CourseCode;
  private _name: string;
  private _credits: Credits;
  private _capacity: number;
  private _enrolledCount: number;

  constructor(
    code: CourseCode,
    name: string,
    credits: Credits,
    capacity: number,
  ) {
    // enforcing the capacity invariant
    if (capacity < 1 || capacity > 200) {
      throw new Error("course capacity must be between 1 and 200");
    }

    this._code = code;
    this._name = name;
    this._credits = credits;
    this._capacity = capacity;
    this._enrolledCount = 0;
  }

  // _____________ GETTERS ________________
  get code(): CourseCode {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  get credits(): Credits {
    return this._name;
  }

  get capacity(): number {
    return this._capacity;
  }

  get enrolledCount(): number {
    return this._enrolledCount;
  }

  // _____________ Domain Logic ________________
  hadCapactiy(): boolean {
    // prevent overflow
    return this._enrolledCount < this._capacity;
  }

  addStudent(): void {
    if (!this.hasCapacity()) {
      throw new Error("course is already full");
    }

    this._enrolledCount += 1;
  }

  removeStudent(): void {
    if (!this._enrolledCount <= 0) {
      throw new Error("No students to remove");
    }

    this._enrolledCount -= 1;
  }

  capacityPercentage(): number {
    return (this._enrolledCount / this._capacity) * 100;
  }

  // Scenario 2 requirement
  isAt80Percent(): boolean {
    return this.capacityPercentage() >= 80;
  }

  isFull(): boolean {
    return this._enrolledCount === this._capacity;
  }
}

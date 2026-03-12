export type Brand<K, T> = K & { __brand: T };

// Student id
export type StudentId = Brand<string, "StudentId">;
export function createStudentId(value: string): StudentId | Error {
  return /^STU\d{6}$/.test(value)
    ? (value as StudentId)
    : new Error(`Invalid StudentId: "${value}"`);
}

// Course Code
export type CourseCode = Brand<string, "CourseCode">;
export function createCourseCode(value: string): CourseCode | Error {
  return /^[A-Z]{2,4}\d{3}$/.test(value)
    ? (value as CourseCode)
    : new Error(`Invalid CourseCode: "${value}"`);
}

// email
export type Email = Brand<string, "Email">;
export function createEmail(value: string): Email | Error {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ? (value as Email)
    : new Error(`Invalid Email: "${value}"`);
}

// credits
export type Credits = Brand<number, "Credits">;
const VALID_CREDITS = [1, 2, 3, 4, 6] as const;
export function createCredits(value: number): Credits | Error {
  return (VALID_CREDITS as readonly number[]).includes(value)
    ? (value as Credits)
    : new Error(`Invalid Credits: ${value} (must be 1, 2, 3, 4, or 6)`);
}

// --- Semester ---
export type Semester = Brand<string, "Semester">;
export function createSemester(value: string): Semester | Error {
  return /^(Fall|Spring|Summer)\d{4}$/.test(value)
    ? (value as Semester)
    : new Error(`Invalid Semester: "${value}"`);
}

// enrollment id
export type EnrollmentId = Brand<string, "EnrollmentId">;
export function createEnrollmentId(value: string): EnrollmentId | Error {
  return /^ENR.+$/.test(value)
    ? (value as EnrollmentId)
    : new Error(`Invalid EnrollmentId: "${value}"`);
}

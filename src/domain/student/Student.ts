import { StudentId } from "./StudentId";
import { Email } from "../value-objects/Email";

export class Student {
  constructor(
    public readonly id: StudentId,
    public name: string,
    public email: Email
  ) {}
}

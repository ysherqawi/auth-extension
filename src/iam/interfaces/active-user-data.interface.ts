import { Role } from 'src/users/enums/role.enum';

export interface ActiveUserData {
  /**
   * The "subject" of the token. the value of this property is the user ID
   * that granted this token.
   */
  sub: number;

  /**
   * The subject's (user) email
   */
  email: string;

  /**
   *The subject's (user) email
   */
  role: Role;
}

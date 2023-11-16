import { Role } from 'src/users/enums/role.enum';
import { PermissionType } from '../authorization/permission.type';

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
   *The subject's (user) role
   */
  role: Role;

  /**
   *The subject's (user) permissions.
   * Note: Using this approach in combination with the 'role-based' approach
   * does not make sense. we have those two properties here ('roles and 'permissions')
   * just to showcase two alter approaches to authorization
   */
  permissions: PermissionType[];
}

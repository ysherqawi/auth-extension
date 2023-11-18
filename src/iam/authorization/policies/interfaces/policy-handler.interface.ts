import { ActiveUserData } from 'src/iam/interfaces/active-user-data.interface';
import { Policy } from './policy.interfaces';

export interface PolicyHandler<T extends Policy> {
  handle(policy: T, user: ActiveUserData): Promise<void>;
}

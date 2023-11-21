import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '../enums/role.enum';
import {
  Permission,
  PermissionType,
} from 'src/iam/authorization/permission.type';
import { ApiKey } from '../api-keys/entities/api-key.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ enum: Role, default: Role.Regular })
  role: Role;

  @Column({ nullable: true })
  googleId: string;

  @Column({ nullable: true })
  tfaSecret: string;

  @Column({ default: false })
  isTfaEnabled: boolean;

  @JoinTable()
  @OneToMany((type) => ApiKey, (apiKey) => apiKey.user)
  apiKeys: ApiKey[];

  // Note: Having the 'permissions' column in combination with the 'role'
  // likely does not make sense. we use both in this course just to showcase
  // two different approaches to authorization
  @Column({ enum: Permission, default: [], type: 'json' })
  permissions: PermissionType[];
}

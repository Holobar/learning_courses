import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserAccessCourse } from './user-access-course.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(
      () => UserAccessCourse,
      (userAccessCourse: UserAccessCourse) => userAccessCourse.user,
  )
  userAccessCourses: UserAccessCourse[];
}

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Course } from './course.entity';
import { User } from './user.entity';

@Entity('userAccessCourses')
export class UserAccessCourse {
  @PrimaryGeneratedColumn()
  user_access_course_id: number;

  @Column()
  current_week: number;

  @ManyToOne(() => Course, (course: Course) => course.userAccessCourses)
  @JoinColumn({ name: 'course_id' })
  course: Course;

  @ManyToOne(() => User, (user: User) => user.userAccessCourses)
  @JoinColumn({ name: 'user_id' })
  user: User;
}

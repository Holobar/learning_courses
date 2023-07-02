import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserAccessCourse } from './user-access-course.entity';
import { CoursesWeek } from './courses-week.entity';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  course_id: number;

  @Column({ nullable: false })
  title: string;

  @Column()
  description: string;

  @Column()
  thumbnail_path: string;

  @Column({ nullable: false })
  numberOfWeeks: number;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(
    () => UserAccessCourse,
    (userAccessCourse: UserAccessCourse) => userAccessCourse.course,
  )
  userAccessCourses: UserAccessCourse[];

  @OneToMany(
    () => CoursesWeek,
    (coursesWeek: CoursesWeek) => coursesWeek.course,
  )
  coursesWeeks: CoursesWeek[];
}

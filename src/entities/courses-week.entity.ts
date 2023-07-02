import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Course } from './course.entity';

@Entity('courses_weeks')
export class CoursesWeek {
  @PrimaryGeneratedColumn()
  course_week_id: number;

  @Column()
  week: number;

  @Column()
  description: string;

  @Column()
  video_path: string;

  @Column()
  file_path: string;

  @ManyToOne(() => Course, (course: Course) => course.coursesWeeks)
  @JoinColumn({ name: 'course_id' })
  course: Course;
}

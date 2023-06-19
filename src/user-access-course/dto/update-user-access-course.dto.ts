import { IsOptional } from 'class-validator';
import { Course } from '../../entities/course.entity';
import { User } from '../../entities/user.entity';

export class UpdateUserAccessCourseDto {
  @IsOptional()
  current_week: number;

  @IsOptional()
  course_id: Course;

  @IsOptional()
  user_id: User;
}

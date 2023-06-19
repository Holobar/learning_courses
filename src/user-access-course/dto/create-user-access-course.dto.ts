import { Course } from '../../entities/course.entity';
import { User } from '../../entities/user.entity';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserAccessCourseDto {
  @IsOptional()
  current_week: number;

  @IsNotEmpty()
  course_id: Course;

  @IsNotEmpty()
  user_id: User;
}

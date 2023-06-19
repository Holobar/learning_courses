import { Course } from '../../entities/course.entity';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCoursesWeekDto {
  @IsOptional()
  week: number;

  @IsOptional()
  video_path: string;

  @IsOptional()
  file_path: string;

  @IsNotEmpty()
  course_id: Course;
}

import { IsOptional } from 'class-validator';
import { Course } from '../../entities/course.entity';

export class UpdateCoursesWeekDto {
  @IsOptional()
  week: number;

  @IsOptional()
  video_path: string;

  @IsOptional()
  file_path: string;

  @IsOptional()
  course_id: Course;
}

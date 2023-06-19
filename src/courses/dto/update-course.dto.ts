import { IsOptional } from 'class-validator';

export class UpdateCourseDto {
  @IsOptional()
  title: string;

  @IsOptional()
  description: string;

  @IsOptional()
  thumbnail_path: string;

  @IsOptional()
  numberOfWeeks: number;
}

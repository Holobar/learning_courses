import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  description: string;

  @IsNotEmpty()
  thumbnail_path: string;

  @IsOptional()
  numberOfWeeks: number;
}

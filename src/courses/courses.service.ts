import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from '../entities/course.entity';
import { Repository } from 'typeorm';
import { UserAccessCourse } from '../entities/user-access-course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}
  async remove(user_id: number, courseId: number) {
    const remove = await this.courseRepository
      .createQueryBuilder()
      .delete()
      .from(UserAccessCourse)
      .where('user_id = :user_id', { user_id })
      .andWhere('course_id = :courseId', { courseId })
      .execute();

    return remove;
  }
}

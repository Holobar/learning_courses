import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccessCourse } from '../entities/user-access-course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserAccessCourseService {
  constructor(
    @InjectRepository(UserAccessCourse)
    private userAccessCourseRepository: Repository<UserAccessCourse>,
  ) {}

  async getCourses(user_id: number) {
    return await this.userAccessCourseRepository.find({
      where: { user: { user_id } },
      relations: ['course'],
    });
  }

  async unlockNextWeek(userId: number, courseId: number) {
    try {
      const coursesWeeks = await this.userAccessCourseRepository
        .createQueryBuilder()
        .update(UserAccessCourse)
        .set({ current_week: () => `"current_week" + 1` })
        .where('user_id = :userId', { userId })
        .andWhere('course_id = :courseId', { courseId })
        .execute();
    } catch (e) {
      return 'Napaka pri odklepanju novega tedna' + e;
    }
  }
}

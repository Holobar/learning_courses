import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoursesWeek } from '../entities/courses-week.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesWeeksService {
  constructor(
    @InjectRepository(CoursesWeek)
    private readonly coursesWeekRepository: Repository<CoursesWeek>,
  ) {}

  async findAllInCourse(
    user_id: number,
    courseId: number,
  ): Promise<CoursesWeek[]> {
    const coursesWeeks = await this.coursesWeekRepository
      .createQueryBuilder('cw')
      .select('cw.*')
      .addSelect(
        "CASE WHEN uAC.current_week >= cw.week THEN 'Unlocked' ELSE 'Locked' END",
        'odkleni',
      )
      .innerJoin('cw.course', 'c')
      .innerJoin('c.userAccessCourses', 'uAC')
      .where('uAC.user_id = :userId', { userId: user_id })
      .andWhere('c.course_id = :courseId', { courseId: courseId })
      .orderBy('week')
      .getRawMany();

    return coursesWeeks;
  }
}

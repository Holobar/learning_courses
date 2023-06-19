import { Injectable } from '@nestjs/common';
import { CreateCoursesWeekDto } from './dto/create-courses-week.dto';
import { UpdateCoursesWeekDto } from './dto/update-courses-week.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CoursesWeek } from '../entities/courses-week.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesWeeksService {
  constructor(
    @InjectRepository(CoursesWeek)
    private readonly coursesWeekRepository: Repository<CoursesWeek>,
  ) {}
  create(createCoursesWeekDto: CreateCoursesWeekDto) {
    return 'This action adds a new coursesWeek';
  }

  findAll() {
    return `This action returns all coursesWeeks`;
  }

  async findAllInCourse(course_id: number) {
    return await this.coursesWeekRepository.find({
      where: { course_id: { course_id } },
    });
  }

  update(id: number, updateCoursesWeekDto: UpdateCoursesWeekDto) {
    return `This action updates a #${id} coursesWeek`;
  }

  remove(id: number) {
    return `This action removes a #${id} coursesWeek`;
  }
}

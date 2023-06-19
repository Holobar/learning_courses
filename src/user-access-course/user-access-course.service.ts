import { Injectable } from '@nestjs/common';
import { CreateUserAccessCourseDto } from './dto/create-user-access-course.dto';
import { UpdateUserAccessCourseDto } from './dto/update-user-access-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccessCourse } from '../entities/user-access-course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserAccessCourseService {
  constructor(
    @InjectRepository(UserAccessCourse)
    private userAccessCourseRepository: Repository<UserAccessCourse>,
  ) {}
  create(createUserAccessCourseDto: CreateUserAccessCourseDto) {
    return 'This action adds a new userAccessCourse';
  }

  findAll() {
    return `This action returns all userAccessCourse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userAccessCourse`;
  }

  update(id: number, updateUserAccessCourseDto: UpdateUserAccessCourseDto) {
    return `This action updates a #${id} userAccessCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAccessCourse`;
  }

  async getCourses(user_id: number) {
    return await this.userAccessCourseRepository.find({
      where: { user: { user_id } },
    });
  }
}

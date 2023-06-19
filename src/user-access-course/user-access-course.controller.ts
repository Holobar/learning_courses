import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserAccessCourseService } from './user-access-course.service';
import { CreateUserAccessCourseDto } from './dto/create-user-access-course.dto';
import { UpdateUserAccessCourseDto } from './dto/update-user-access-course.dto';
import { JwtAuthGuard } from '../auth/guards/jwtAuth.guard';

@Controller('user-access-course')
export class UserAccessCourseController {
  constructor(
    private readonly userAccessCourseService: UserAccessCourseService,
  ) {}

  @Post()
  create(@Body() createUserAccessCourseDto: CreateUserAccessCourseDto) {
    return this.userAccessCourseService.create(createUserAccessCourseDto);
  }

  @Get()
  findAll() {
    return this.userAccessCourseService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserAccessCourseDto: UpdateUserAccessCourseDto,
  ) {
    return this.userAccessCourseService.update(+id, updateUserAccessCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userAccessCourseService.remove(+id);
  }
  @UseGuards(JwtAuthGuard)
  @Get('getCourses')
  async getCourses(@Request() req) {
    const user_id = req.user.id;
    return await this.userAccessCourseService.getCourses(+user_id);
  }
}

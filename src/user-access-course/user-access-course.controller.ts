import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserAccessCourseService } from './user-access-course.service';
import { JwtAuthGuard } from '../auth/guards/jwtAuth.guard';

@Controller('user-access-course')
export class UserAccessCourseController {
  constructor(
    private readonly userAccessCourseService: UserAccessCourseService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('getCourses')
  async getCourses(@Request() req) {
    const user_id = req.user.id;
    return await this.userAccessCourseService.getCourses(+user_id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('unlock-next-week')
  async unlockNextWeek(@Request() req, @Body() body: { courseId: number }) {
    const { courseId } = body;
    const user_id = req.user.id;
    return await this.userAccessCourseService.unlockNextWeek(
          +user_id,
          +courseId,
      );
  }
}

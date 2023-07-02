import { Controller, Get, Param, UseGuards, Request } from '@nestjs/common';
import { CoursesWeeksService } from './courses-weeks.service';
import { JwtAuthGuard } from '../auth/guards/jwtAuth.guard';

@Controller('courses-weeks')
export class CoursesWeeksController {
  constructor(private readonly coursesWeeksService: CoursesWeeksService) {}

  @UseGuards(JwtAuthGuard)
  @Get('findAllInCourse/:id')
  getCourses(@Request() req, @Param('id') course_id: number) {
    const user_id = req.user.id;
    return this.coursesWeeksService.findAllInCourse(+user_id, +course_id);
  }
}

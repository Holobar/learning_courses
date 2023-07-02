import { Controller, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { JwtAuthGuard } from '../auth/guards/jwtAuth.guard';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}
  @UseGuards(JwtAuthGuard)
  @Delete(':course_id')
  remove(@Request() req, @Param('course_id') course_id: string) {
    const user_id = req.user.id;
    return this.coursesService.remove(+user_id, +course_id);
  }
}

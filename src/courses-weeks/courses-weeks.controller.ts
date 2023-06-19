import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { CoursesWeeksService } from './courses-weeks.service';
import { CreateCoursesWeekDto } from './dto/create-courses-week.dto';
import { UpdateCoursesWeekDto } from './dto/update-courses-week.dto';

@Controller('courses-weeks')
export class CoursesWeeksController {
  constructor(private readonly coursesWeeksService: CoursesWeeksService) {}

  @Post()
  create(@Body() createCoursesWeekDto: CreateCoursesWeekDto) {
    return this.coursesWeeksService.create(createCoursesWeekDto);
  }

  @Get()
  findAll() {
    return this.coursesWeeksService.findAll();
  }

  @Get(':course_id')
  findAllInCourse(@Param('course_id') id: string) {
    return this.coursesWeeksService.findAllInCourse(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoursesWeekDto: UpdateCoursesWeekDto) {
    return this.coursesWeeksService.update(+id, updateCoursesWeekDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesWeeksService.remove(+id);
  }
}

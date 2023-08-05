import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesModule } from '../courses/courses.module';
import { UsersModule } from '../users/users.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
  exports:[
    CoursesModule,

  ]
})
export class DashboardModule { }

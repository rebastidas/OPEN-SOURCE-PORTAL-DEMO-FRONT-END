import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindProjectsRoutingModule } from './find-projects-routing.module';
import { FindProjectsComponent } from './find-projects.component';
import { BestMatchesComponent } from './best-matches/best-matches.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ProfilePreviewComponent } from './profile-preview/profile-preview.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    FindProjectsComponent,
    BestMatchesComponent,
    JobDetailsComponent,
    ProfilePreviewComponent,
  ],
  imports: [
    CommonModule,
    FindProjectsRoutingModule,
    MatGridListModule,
    MatButtonToggleModule
  ]
})
export class FindProjectsModule { }

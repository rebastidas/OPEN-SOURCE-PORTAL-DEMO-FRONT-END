import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindProjectsRoutingModule } from './find-projects-routing.module';
import { FindProjectsComponent } from './find-projects.component';
import { BestMatchesComponent } from './best-matches/best-matches.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ProfilePreviewComponent } from './profile-preview/profile-preview.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
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
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule
  ]
})
export class FindProjectsModule { }

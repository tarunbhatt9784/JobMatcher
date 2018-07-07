import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/fontawesome-free';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { JobsComponent } from './job/job.component';
import { CandidateComponent } from './candidate/candidate.component';
import {FilterJobs } from './job/filters/filter-jobs.pipe';


@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    CandidateComponent,
    FilterJobs    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

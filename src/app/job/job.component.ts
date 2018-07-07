import { Component, OnInit } from '@angular/core';

import { Job } from '../job/job';
import { JobService } from '../job/services/job.service';
import { Candidate } from 'src/app/candidate/candidate';
import { CandidateService } from 'src/app/candidate/services/candidate.service';
import * as _ from 'lodash';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-jobs',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})

export class JobsComponent implements OnInit {

  constructor(private jobService: JobService, private candidateService: CandidateService) { }
  jobs: Job[];
  selectedJob: Job;
  candidates: Candidate[];

  ngOnInit() {
    this.getJobs();
    this.getCandidates();
    this.createJob();
  }

  private getJobs(): void {
    this.jobService.getJobs().subscribe(
      (data: Job[]) => { this.jobs = data; },
      error => console.error(error),
      () => console.log('Jobs fetched Successfully')
    );
  }

  private getCandidates(): void {
    var candidates: Candidate[];
    this.candidateService.getCandidates().subscribe(
      (data: Candidate[]) => { candidates = data; this.candidates = candidates; },
      error => console.error(error),
      () => console.log("candidates fetched Successfully"));
  }

  private createJob(): void{
    let job:Job = new Job();
    job.name = "Senior Cloud Architect";
    job.skills = 'Azure, AWS, Sql Azure'
    job.company = "IBM";
    this.jobService.addJob(job).subscribe((data : Job) => {this.jobs.push(data)}, error => console.error(error),() => console.log("Job Added successfully"));
  }

  hideCandidateDetails(jobId: number): void {
    var selectedJob: Job = this.jobs.find(job => job.jobId === jobId);
   
      selectedJob.suitableCandidate = null;
   
     
    
  }

  findBestCandidate(jobId: number): void {
    var selectedJob: Job = this.jobs.find(job => job.jobId === jobId);
   
      var suitableCandidate: Candidate;
      var matchSkillCount: number = 0;
      this.candidates.forEach(function (candidate) {
        var count: number = _.intersection(selectedJob.skills.split(','), candidate.skills.split(',')).length;
        if (matchSkillCount < count) {
          matchSkillCount = count;
          suitableCandidate = candidate;
        }
      });
      selectedJob.suitableCandidate = suitableCandidate;     
    
  }
}

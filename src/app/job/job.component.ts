import { Component, OnInit } from '@angular/core';

import { Job } from '../job/job';
import { JobService } from '../job/services/job.service';
import { Candidate } from 'src/app/candidate/candidate';
import { CandidateService } from 'src/app/candidate/services/candidate.service';
import * as _ from 'lodash';

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
  }

  getJobs(): void {
    this.jobService.getJobs().subscribe(
      (data: Job[]) => { this.jobs = data; },
      error => console.error(error),
      () => console.log('Jobs fetched Successfully')
    );
  }

  getCandidates(): void {
    var candidates: Candidate[];
    this.candidateService.getCandidates().subscribe(
      (data: Candidate[]) => { candidates = data; this.candidates = candidates; },
      error => console.error(error),
      () => console.log("candidates fetched Successfully"));
  }

  toggleCandidateDisplay(jobId: number): void {
    var selectedJob: Job = this.jobs.find(job => job.jobId === jobId);
    if (!!selectedJob.suitableCandidate) {
      selectedJob.suitableCandidate = null;
    } else {
      var suitableCandidate: Candidate;
      var matchSkillCount: number = 0;
      this.candidates.forEach(function (candidate) {
        var count: number = _.intersection(selectedJob.skills.split(','), candidate.skillTags.split(',')).length;
        if (matchSkillCount < count) {
          matchSkillCount = count;
          suitableCandidate = candidate;
        }
      });
      selectedJob.suitableCandidate = suitableCandidate;     
    }
  }
}

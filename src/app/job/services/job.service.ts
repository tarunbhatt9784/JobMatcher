import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';import { CandidateService } from '../../candidate/services/candidate.service'
import { Job } from 'src/app/job/job';
import { catchError } from 'rxjs/operators';
import { error } from 'util';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class JobService {
  
  constructor(private http: HttpClient, private candidateService: CandidateService) {
   
   }
  getJobs() {
    return  this.http.get("http://localhost:5000/api/Job");
   
    
  } 
  
  addJob(job: Job) : Observable<Job>{
   
    
   

    return this.http.post<Job>("http://localhost:5000/api/Job/create", job, httpOptions)
    
    
  }


}

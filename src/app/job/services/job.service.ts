import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';import { CandidateService } from '../../candidate/services/candidate.service'

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient, private candidateService: CandidateService) {
   
   }
  getJobs() {
    return this.http.get("./assets/resources/Jobs.json")
  }  
}

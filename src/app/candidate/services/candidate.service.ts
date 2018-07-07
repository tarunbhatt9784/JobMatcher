import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Candidate} from '../../Candidate/candidate'

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http:HttpClient) { }

  getCandidates() { 
    return this.http.get("http://localhost:5000/api/Candidate");
  } 
 
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {SowReportModel } from './sow-report-model';


@Injectable()
export class SowReportService {

  getSowReportUrl = "getSowReport";

  constructor(private http:HttpClient){}

  getSowData(): Observable<SowReportModel[]> {
    return this.http.get<SowReportModel[]>(this.getSowReportUrl);
  }


  }




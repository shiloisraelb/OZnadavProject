import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../Models/custoner';
import { RequestOptions } from 'http';
import { parseJSON } from 'date-fns';
@Injectable({
  providedIn: 'root'
})
export class MyJsonDBService {

  constructor(private http: HttpClient) { 
  }
  getSitys():Observable<any[]>{
    const rtn = this.http.get('./assets/data/sitys.json') as Observable<any[]>;
    return rtn
  }

}


 
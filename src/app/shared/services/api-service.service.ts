import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      mode: 'no-cors'
    })
  }
  __apiUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  get(url: string, params = {}): Observable<any>{
    this.httpOptions["params"] = params
    return this.http.get<any>(this.__apiUrl +  url, this.httpOptions)
  }
  delete(url: string){
      return this.http.delete(this.__apiUrl +  url,  this.httpOptions)
  }
  post(url: string, body: any ){
      return this.http.post(this.__apiUrl +  url, body,  this.httpOptions)
  }
  put(url: string, body: any ){
      return this.http.put(this.__apiUrl +  url, body,  this.httpOptions)
  }
}

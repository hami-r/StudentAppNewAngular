import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchStudent = () => {
    return this.http.get("http://localhost:8080/view")
  }

  addStudent = (sendData:any) => {
    return this.http.post("http://localhost:8080/add",sendData)
  }

  searchStudent = (sendData:any) => {
    return this.http.post("http://localhost:8080/search",sendData)
  }

  deleteStudent = (sendData:any) => {
    return this.http.post("http://localhost:8080/delete",sendData)
  }

  
}

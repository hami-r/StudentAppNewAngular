import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent {
  constructor(private api:ApiService,private route:Router) {}
  admno = ""
  searchData:any = []

  searchStud = () => {
    let data:any = {
      "admno":this.admno
    }
    console.log(data);
    this.api.searchStudent(data).subscribe(
      (response:any) => {
        console.log(response);
        if(response.length == 0){
          alert("Not found")
        } else {
          this.searchData = response
        }
      }
    )
  }

  deleteBtn = (id:any) => {
    let data:any = {
      "id":id
    }
    this.api.deleteStudent(data).subscribe(
      (response:any) => {
        console.log(response);
        if(response.status=="success"){
          alert("deleted successfully")
          // this.route.navigate(['/search'])
          window.location.reload()
        }
      }
    )
  }
}

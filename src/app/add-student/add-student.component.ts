import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  constructor(private api:ApiService) {}
  
  name = ""
  rollno = ""
  admno = ""
  college = ""

  readValues = () => {
    let data = {
      "name":this.name,
      "rollNo":this.rollno,
      "admno":this.admno,
      "college":this.college
    }
    console.log(data);

    this.api.addStudent(data).subscribe(
      (response:any) => {
        if(response.status == "success"){
          alert("added successfully")
          this.name = ""
          this.rollno = ""
          this.admno = ""
          this.college = ""
        } else {
          alert("something went wrong")
        }
      }
    )
  }
}


import { Component } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  
  name = ""
  rollNo = ""
  admissionNo = ""
  college = ""

  readValues = () => {
    let data = {
      "name":this.name,
      "rollNo":this.rollNo,
      "admissionNo":this.admissionNo,
      "college":this.college
    }

    console.log(data);
    
  }
}


import { Component, OnInit } from '@angular/core';
import { IStudent } from '../Models/StudentDetails/student.interface';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  studentDetails:IStudent[]=[
    {StudentId:1,FirstName:"Nick",MiddleName:"",LastName:"Mark",Class:"X",RollNo:23,Math:90,English:95,Hindi:85,Science:95,Drawing:90 },
    {StudentId:2,FirstName:"James",MiddleName:"",LastName:"Mark",Class:"X",RollNo:24,Math:30,English:80,Hindi:70,Science:90,Drawing:90 },
    {StudentId:3,FirstName:"Milan",MiddleName:"",LastName:"Mark",Class:"X",RollNo:25,Math:70,English:30,Hindi:70,Science:90,Drawing:90 },
    {StudentId:4,FirstName:"Sunil",MiddleName:"",LastName:"Mark",Class:"X",RollNo:26,Math:70,English:80,Hindi:32,Science:90,Drawing:90 },
    {StudentId:5,FirstName:"Harry",MiddleName:"",LastName:"Mark",Class:"X",RollNo:27,Math:70,English:80,Hindi:70,Science:23,Drawing:90 },
    {StudentId:6,FirstName:"Billy",MiddleName:"",LastName:"Mark",Class:"X",RollNo:28,Math:70,English:80,Hindi:70,Science:90,Drawing:33 },
    {StudentId:7,FirstName:"Steven",MiddleName:"",LastName:"Mark",Class:"X",RollNo:29,Math:20,English:23,Hindi:35,Science:23,Drawing:30 },
    {StudentId:8,FirstName:"Rocky",MiddleName:"",LastName:"Mark",Class:"X",RollNo:30,Math:100,English:80,Hindi:95,Science:90,Drawing:95 },
    {StudentId:9,FirstName:"Peter",MiddleName:"",LastName:"Mark",Class:"X",RollNo:31,Math:70,English:80,Hindi:70,Science:90,Drawing:90 },
    {StudentId:10,FirstName:"Josh",MiddleName:"",LastName:"Mark",Class:"X",RollNo:32,Math:20,English:25,Hindi:40,Science:23,Drawing:40 },
  ]


}

import { Component, OnInit, Renderer2} from '@angular/core';
import {  FormGroup } from "@angular/forms";
import { UserService } from "../_services/user.service";
import { Router, ActivatedRoute } from '@angular/router';

export class Fitness {
  constructor(
    public inr: number,
    public paisa: number,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public phonenumber: number,
    public email: string,
    public firstname:string,
    public lastname: string,
    public age:number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string
  ) { }
}

@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html'
  
})

@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html'
  
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {
  
  
  allUser: Object;

  currentUser={
    fname : "",
    lname : "",
    age : "",
    email : "",
    city: "",
    state: "",
    pincode: "",
    date:"",
    packages:"",
    street:"",
    phone:"",
    trainer:"",
    physio:"",
    county:""
  }


  private isEdit: boolean = false;
  private submitted: boolean = false;
  private updated: boolean = false;
  
  private userid: number=0;
  
  constructor(private fetchdata:UserService, private route: Router, private route2: ActivatedRoute, private renderer:Renderer2) { }

  ngOnInit(): void {
    setTimeout(()=>this.renderer.selectRootElement('#fname').focus(),0); 
    this.userid=parseInt(this.route2.snapshot.paramMap.get("userid"));
    if(this.userid){
     this.isEdit = true;
      this.fetchdata.getspecificdata(this.userid).subscribe((response)=>
      this.currentUser=response
      );
    }

  }

  checkappointment(formObj){
    if(this.isEdit)
      this.updateappointment(this.currentUser);
    else
      this.saveappointment(formObj);
  }

  updateappointment(user){
    this.isEdit=!this.isEdit;
    this.updated=true;
    this.fetchdata.updateUser(this.currentUser).subscribe(()=>console.log("Updated"))
    this.route.navigateByUrl("view-appointment");

  }
  saveappointment(formObj){
    this.fetchdata.createUser(formObj).subscribe((response)=>
    this.submitted=true)
  }
}
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../_services/user.service";

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html'
})
export class ViewAppointmentComponent implements OnInit {
  allUser: Object;

  constructor(
    private fetchdata: UserService,
    private router: Router
    ) { }

  

ngOnInit(): void {
    this.getappointment();
  }
getappointment(){
    this.fetchdata.getAllUser().subscribe((response)=>{    
      this.allUser = response
  })
}

deleteUser(user){
    this.fetchdata.deleteUser(user).subscribe(()=>
    this.getappointment())
  }

confirmDeleteUser(user){
    if (confirm("Are you sure to delete record for "+user.fname+" "+user.lname)) {
      this.deleteUser(user);
    }
   
  }
editUser(user){
    this.router.navigate(['/place-fitness-trainer-appointment',{userid:user.id}]);
  }
  
}
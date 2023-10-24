import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendAccessService } from '.././backend-access.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {


  title = 'angularexpress';
  userList : any =[];
  data : any;
  expresponse : string = " ";
  constructor(private http : HttpClient, private baccess : BackendAccessService ){
  }
  getAllUsers(){
    this.userList = this.baccess.getAllUsers();
  }
 
  addUser(udata : any){
    this.expresponse = this.baccess.addUser(udata);
   
  }
}

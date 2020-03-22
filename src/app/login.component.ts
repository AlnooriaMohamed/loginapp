
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
    username:string;
    password:string;
    constructor() {}

    ngOnInit() {

    }

   LoginUser()
   {
       console.log("Funtion called")
       if(this.username == "Admin" && this.password == "admin123")
       {
           console.log("Welcome");
       }
   }
}
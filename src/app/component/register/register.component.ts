import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userModel = new user()

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmitHandler(){
  //console.log(data);
  console.log(this.userModel)
  this.authService.register(this.userModel).subscribe(Response => {
    console.log(Response)
  })
  

 }
}


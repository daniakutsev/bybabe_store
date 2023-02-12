import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../user/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

  logout(event:Event){
    event.preventDefault()
    console.log(this.auth.isAuthenticated())
    this.auth.logout()
  }


}

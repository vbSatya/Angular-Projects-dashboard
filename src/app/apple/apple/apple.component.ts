import { Component, VERSION } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent {
  name = 'Angular ' + VERSION.major;
  userList: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.userService.getUserList().subscribe((response: any) => {
      this.userList = response;
    });
  }

}

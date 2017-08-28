import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  templateUrl: './app/users/user-create/user-create.component.html'
})
export class UserCreateComponent implements OnInit {
  user: User = { name: '', last_name: '', avatar: '' };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }

  createUser() {
    this.successMessage = '';
    this.errorMessage   = '';

    this.service.createUser(this.user)
      .subscribe(user => {
        this.successMessage = 'Пользователь успешно создан!';

        setTimeout(() => {
            this.router.navigate(['/users', {action: "created"}]);
        }, 3000);
        
      })
  }

}
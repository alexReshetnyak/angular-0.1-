import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './app/users/user-edit/user-edit.component.html'
})
export class UserEditComponent implements OnInit {
  user: User;
  editInProgress: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private service: UserService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() { 
    console.log(this.activatedRoute.snapshot.paramMap);
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id, 'useredit');
    this.service.getUser(id).subscribe(user => this.user = user);
    this.editInProgress = true;
  }

  updateUser() {
    this.successMessage = '';
    this.errorMessage   = '';
    this.editInProgress = false;

    this.service.updateUser(this.user)
      .subscribe(
        user => {
          this.successMessage = 'Пользователь успешно отредактирован.';
          setTimeout(() => {
            this.router.navigate(['/users', this.user.id]);
          }, 3000);
        },
        err => {
          this.errorMessage = err;
          console.error(err);
        }        
      );
  }


}
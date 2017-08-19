import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  templateUrl: './app/users/user-create/user-create.component.html'
})
export class UserCreateComponent implements OnInit {
  film: User = {id: 0, title: '', overview: '', poster: '' };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }

  createFilm() {
    this.successMessage = '';
    this.errorMessage   = '';
    console.log(this.film);

    this.service.createFilm(this.film);
    this.successMessage = 'Фильм успешно создан!';

    setTimeout(() => {
        this.router.navigate(['/users', {action: "created"}]);
    }, 3000);
  }

}
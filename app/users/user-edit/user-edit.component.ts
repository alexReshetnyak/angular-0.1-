import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './app/users/user-edit/user-edit.component.html'
})
export class UserEditComponent implements OnInit {
  film: User;
  editInProgress: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';
  films;
  filmsObservable;

  constructor(
    private service: UserService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() { 
    let id = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.filmsObservable = this.service.getFilms().subscribe(films =>{
      this.films = films;
      console.log(films, 'films');
      this.film = this.service.getFilm(id, this.films);
    });
    this.editInProgress = true;
  }

  updateFilm() {
    this.successMessage = '';
    this.errorMessage   = '';
    this.editInProgress = false;

    this.service.updateFilm(this.film);
    this.successMessage = 'Фильм успешно отредактирован.';
    setTimeout(() => {
      this.router.navigate(['/users', this.film.id]);
    }, 3000);
  }

  ngOnDestroy() {
    this.filmsObservable.unsubscribe();
  }
}
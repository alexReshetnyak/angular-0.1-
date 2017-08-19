import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  styles:[`

  `],
  templateUrl: './app/users/user-single/user-single.component.html'
})
export class UserSingleComponent implements OnInit {
  film: User;
  films;
  filmsObservable;
  userRole: string;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private service: UserService,
    private authService: AuthService,
  ) {}

  ngOnInit() { 
    // статическое извлечение параметров, позходит не всегда
    //let id = +this.activatedRoute.snapshot.paramMap.get('id');
    //this.service.getUser(id)
    //  .subscribe(user => this.user = user);

    this.userRole = this.authService.userRole;
    
    // динамическое извлечение параметров
    this.activatedRoute.paramMap.forEach((params: Params) => {
            let id = +params.get("id");
            this.filmsObservable = this.service.getFilms().subscribe(films =>{
              this.films = films;
              console.log(films, 'films');
              this.film = this.service.getFilm(id, this.films);
            });
    });
  }

  deleteFilm() {
    this.service.deleteFilm(this.film);
    this.router.navigate(['/users', {action: "deleted"}]);
  }

  ngOnDestroy() {
    this.filmsObservable.unsubscribe();
  }

}
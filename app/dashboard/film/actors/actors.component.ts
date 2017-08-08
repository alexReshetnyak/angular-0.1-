import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FilmService} from '../../../services/film.service';


@Component({
    selector: 'actors-cmp',
    moduleId: module.id,
    templateUrl: 'actors.component.html',
    styleUrls: ['actors.component.css'],
})

export class ActorsComponent{

    @Input()
    id: string;
    actors: Object[] = [];

    constructor(
                private filmCardService: FilmService
                ){}

    ngOnInit() {
        this.filmCardService.getActors(this.id).subscribe(data =>{
            if (data.length > 5) {
                for (var i = 0; i < 5; i++) {
                    this.actors[i] = data[i];
                }
            }
        });
    }

}

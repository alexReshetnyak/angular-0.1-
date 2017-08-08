import { Component, OnInit, trigger, state, style, transition, animate, Input, Output } from '@angular/core';
import {FilmService} from '../../services/film.service';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.css'],
})

export class UserComponent implements OnInit{

    filmList : Object[] = [];
    selectedValue: number;
    filmCategory : string;
    pageList: number;
    hideLoader: boolean;

    constructor(private filmCardService: FilmService) { window.scrollTo(0, 0); }

    ngOnInit(){
        this.filmCategory = "revenue";
        this.selectedValue = 1;
        this.pageList = 1;
        this.hideLoader = true;
        this.getFilms();

        this.filmCardService.getFilmsFromMdb().subscribe(data => {
            console.log(data);
        });
    }

    getFilms(){
        this.hideLoader= false;
        if(!this.filmCategory) {return;}
        if(this.pageList === 1){ this.filmList = [] }
        this.filmCardService.getFilms(this.filmCategory, this.pageList).subscribe(data => {
            this.hideLoader= true;
            if (data.length > 0) {
                this.filmList = [...this.filmList, ...data];
            }
        }, 
            error =>  console.log(error));
    }

    getMoreFilms(){
        this.pageList++;
        this.getFilms();
    }

}

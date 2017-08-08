import { Component, OnInit, trigger, state, style, transition, animate, Input, Output } from '@angular/core';
import {FilmService} from '../../services/film.service';

declare var $:any;

@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit{

    filmList : Object[]= [];
    selectedValue: number;
    filmCategory : string;
    pageList: number;
    hideLoader: boolean;

    constructor(private filmCardService: FilmService) { window.scrollTo(0, 0); }

    ngOnInit(){
        this.filmCategory = "popularity";
        this.selectedValue = 1;
        this.pageList = 1;
        this.hideLoader = true;
        this.getFilms();
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

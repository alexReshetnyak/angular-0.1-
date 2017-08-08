import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FilmService} from '../../../services/film.service';


@Component({
    selector: 'rating-cmp',
    moduleId: module.id,
    templateUrl: 'rating.component.html',
    styleUrls: ['rating.component.css'],
})

export class RatingComponent{

    id: string;
    @Input()
    rating: any;
    leftProgressDeg: number = 0;
    rightProgressDeg: number = 0;
    colorProgress: string = '';

    ngOnChanges(changes: SimpleChanges) {
        for (var key in changes) {
            this.rating = changes[key].currentValue;
        }
        this.makeLoader();
    }

    constructor(
                private route: ActivatedRoute,
                private router: Router,
                private filmCardService: FilmService
                ){}

    ngOnInit() {      
    }

    makeLoader(){
        const self = this;
        let rating = this.rating? this.rating*10 : 0;

        if (rating > 70) {
            this.colorProgress = '#21D07A';
        }else if(rating > 60){
            this.colorProgress = '#D2D531';
        }else{
            this.colorProgress = '#ff3300';
        }
        this.startLoader(self, rating);
    }

    startLoader(self, rating){
        setTimeout(function() {
            if (rating > 0) {
                if (self.rightProgressDeg >= 180) {
                    self.leftProgressDeg = self.leftProgressDeg + 10.8;
                    rating = rating - 3;
                    self.startLoader(self, rating);
                }else{
                    if (self.rightProgressDeg >= 169) {
                        self.rightProgressDeg = 180;
                    }else{
                        self.rightProgressDeg = self.rightProgressDeg + 10.8;
                    }
                    rating = rating - 3;
                    self.startLoader(self, rating);
                } 
            }
        }, 30);
    }

}

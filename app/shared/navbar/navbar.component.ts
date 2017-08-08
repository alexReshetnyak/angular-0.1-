import { Component, OnInit } from '@angular/core';
import { ROUTES } from './navbar-routes.config';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'],
})

export class NavbarComponent implements OnInit{
    private listTitles: any[];
    public menuItems: any[];
    location: Location;

    constructor(location:Location) {
        this.location = location;
    }
    ngOnInit(){
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        this.menuItems = ROUTES.filter(menuItem => {if(menuItem.path != 'table'){return menuItem}});
    }
    /*getTitle(){
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if(titlee.charAt(0) === '#'){
            titlee = titlee.slice( 2 );
        }
        for(var i = 0; i < this.listTitles.length; i++){
            if(this.listTitles[i].path === titlee){
                return this.listTitles[i].title;
            }
        }
        return 'Dashboard';
    }*/
}

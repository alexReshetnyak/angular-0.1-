import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isCollapsed: boolean = true;
  links = [
        { path: '/enter', icon: 'home', label: 'Вход'},
        { path: '/card', icon: 'home', label: 'Пополнить'},
    ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  src = 'https://plnkr.co/edit/1eawJZ4eJ4KfUDxBMr1D?p=preview';
  links: Object[] = [
        { path: '/dashboard', icon: 'home', label: 'Главная'},
        { path: '/task', icon: 'event_name', label: 'Задачи'},
        { path: '/statistics', icon: 'settings', label: 'Статистика'}
    ];
}

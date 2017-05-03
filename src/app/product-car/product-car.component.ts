import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-car',
  templateUrl: './product-car.component.html',
  styleUrls: ['./product-car.component.css']
})

export class ProductCarComponent implements OnInit {
  products: Object[];
  stateButtonPrevious: boolean;
  stateButtonNext: boolean;
  currentItem:number;

  ngOnInit() {
  	this.currentItem = 0;
  	this.stateButtonPrevious = true;
  	this.stateButtonNext = false;
  	this.products = [
      {name: "Nikon", description: "Описание к фотоапарату Никон", url: "http://desktopwallpapers.org.ua/large/201702/56308.jpg"},
      {name: "Текстура", description: "Описание к Текстуре", url: "http://desktopwallpapers.org.ua/large/201702/56309.jpg"},
      {name: "Архитектура", description: "Очень необычный дом", url: "http://desktopwallpapers.org.ua/large/201702/56311.jpg"},
      {name: "Природа", description: "Картина весны", url: "http://desktopwallpapers.org.ua/large/201702/56313.jpg"},
      {name: "Космос", description: "Обнаружена черная дыра", url: "http://desktopwallpapers.org.ua/large/201702/56314.jpg"},
    ];
  }
  
  private nextItem(){
  	if ((this.products.length - 1) > this.currentItem) {
  		this.stateButtonPrevious = false;
  		this.currentItem++;
  		if ((this.products.length - 1) <= this.currentItem) {
  			this.stateButtonNext = true;
  		}
  	}    
  };
  
  private prevItem(){
    if ( this.currentItem  > 0) {
  		this.stateButtonNext = false;
  		this.currentItem--;
  		if (this.currentItem <= 0) {
  			this.stateButtonPrevious = true;
  		}
  	}
  };
}

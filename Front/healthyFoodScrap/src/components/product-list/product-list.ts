
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../../pages/product/product';

@Component({
  selector: 'product-list',
  templateUrl: 'product-list.html'
})
export class ProductListComponent {
  selectedItem: any;
  icons: string[];
  items: Array<{name: string, pricesPerStore: Array<{price: Number, store: string}>}>;
  products: Array<string>;
  slides: Array<Array<Array<{name: string, pricesPerStore: Array<{price: Number, store: string}>}>>>; 
  slidesAux: Array<Array<{name: string, pricesPerStore: Array<{price: Number, store: string}>}>>;  
  constructor(public navCtrl: NavController) {
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');
    this.slidesAux = [];
    this.slides = [];

    this.products = [];
    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane','american-football', 'boat', 'bluetooth', 'build'];
    var products = ["tu","elfa","no","te","ama","te","pan","palta","tomate","lechuga"];
    var pricesPerStores_ = [{price:1000,store:"Jumbo"},{price:500,store:"Santa Isabel"},{price:1000,store:"Lider"}];
    this.items = [];
    for (let i = 0; i < 11; i++) {
      if(i%6 == 0 && i != 0){
        this.slides.push(this.slidesAux);
        this.slidesAux= [];
      }
      this.items= [];
      this.items.push({
        name: products[i],
        pricesPerStore: pricesPerStores_,   
      });
      this.slidesAux.push(this.items);
      
    }
    
    if(this.slidesAux.length != 0){
      this.slides.push(this.slidesAux); 
      this.slidesAux=[];     
    } 
    console.log(this.slides);
    
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ProductPage, {
      data: item
    });
  }
}






/**
 * Generated class for the ProductListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
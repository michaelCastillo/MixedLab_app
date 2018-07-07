
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'product-list',
  templateUrl: 'product-list.html'
})
export class ProductListComponent {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  products: Array<string>;

  constructor(public navCtrl: NavController) {
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');

    this.products = [];
    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane','american-football', 'boat', 'bluetooth', 'build'];
    var products = ["pera","manzana","ají","sal","azucar","te","pan","palta","tomate","lechuga"];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: products[i],
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ProductListComponent, {
      item: item,
    });
  }
}






/**
 * Generated class for the ProductListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
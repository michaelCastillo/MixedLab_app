import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  item: {name: string, pricesPerStore: Array<{prices: Number, store: string}>};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

}
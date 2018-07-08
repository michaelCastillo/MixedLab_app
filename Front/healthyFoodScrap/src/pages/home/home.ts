import { ProductListComponent } from './../../components/product-list/product-list';
import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public name:string; 
  public age:number; 
  public conditions:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('name')); 
    console.log(this.navParams.get('age')); 
    console.log(this.navParams.get('conditions')); 
  }

}

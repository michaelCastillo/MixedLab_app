import { ProductListComponent } from './../../components/product-list/product-list';
import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public name:string = "Rosa"; 
  public age:number = 50; 
  public conditions:Array<any> = ["Diabetes"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    if(this.navParams.get('name')){
      this.name = this.navParams.get('name');
    }
    if(this.navParams.get('age')){
      this.age = this.navParams.get('age');
    } 
    if(this.navParams.get('conditions')){
      this.conditions = this.navParams.get('conditions');
    }
    window.localStorage.setItem("productList",JSON.stringify(this.conditions));
  }

}

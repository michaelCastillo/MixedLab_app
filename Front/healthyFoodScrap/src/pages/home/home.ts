import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public name:string;
  public age:number;
  public conditions:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = this.navParams.get('name');
    this.age = this.navParams.get('age');
    this.conditions = this.navParams.get('conditions');
    console.log(this.navParams.get('name'));
    console.log(this.navParams.get('age'));
    console.log(this.navParams.get('conditions'));

    //this.navCtrl.push(HomePage, {name:this.name.value, age:this.age.value, conditions:this.selectedItems});

  }

}

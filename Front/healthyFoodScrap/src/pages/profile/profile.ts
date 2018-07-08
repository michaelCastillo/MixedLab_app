import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms'
import { HomePage } from '../home/home';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  
  formgroup:FormGroup;
  name:AbstractControl;
  age:AbstractControl;
  toppings: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public formbuilder:FormBuilder, public appCtrl: App) {

    this.formgroup = formbuilder.group({
      name:['Rosa',Validators.required],
      age:['50',Validators.required],
      heigth:['160'],
      weigth:['70'],
    });
    this.toppings = ['Obesidad','Hipoglucemia'];
    this.name = this.formgroup.controls['name'];
    this.age = this.formgroup.controls['age'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  goHomePage(){
    //this.navCtrl.push(HomePage, {name:this.name.value, age:this.age.value, conditions:this.toppings});
    this.navCtrl.setRoot(HomePage, {name:this.name.value, age:this.age.value, conditions:this.toppings});
  }

  updateProfile(){
    alert("Perfil actualizado");
   // this.navCtrl.push(HomePage, {name:this.name.value, age:this.age.value, conditions:this.toppings});
    this.navCtrl.setRoot(HomePage, {name:this.name.value, age:this.age.value, conditions:this.toppings});

  }

}

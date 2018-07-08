import { Component } from '@angular/core';
import { Storage } from '@ionic/storage'
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms'
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  formgroup:FormGroup;
  name:AbstractControl;
  age:AbstractControl;

  itemsArray: Array<any> = ["Alergia","Vegetariano","Celiaco","Obesidad"];
  selectedItems: Array<any> = ["Alergia","Celiaco"];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public formbuilder:FormBuilder, private storage: Storage,
  public alertCtrl: AlertController) {

    this.formgroup = formbuilder.group({
      name:['Rosa',Validators.required],
      age:['50',Validators.required],
      heigth:['160'],
      weigth:['70'],
    });

    this.name = this.formgroup.controls['name'];
    this.age = this.formgroup.controls['age'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  onChange(val){
    //console.log(this.conditions)
  }

  setData(){
    console.log(this.formgroup.value['name']);
    console.log(this.formgroup.value['age']);
    console.log(this.formgroup.value['heigth']);
    console.log(this.formgroup.value['weigth']);
    //console.log(this.conditions);
    alert("Datos Actualizados");
  }

  

}

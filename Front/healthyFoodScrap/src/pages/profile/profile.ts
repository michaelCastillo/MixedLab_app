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
      name:['',Validators.required],
      age:['',Validators.required],
      heigth:[''],
      weigth:[''],
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
    console.log(this.conditions);
  }

  /**
   * Load itemsArray with object that will make up the select list
   */
  chooseItems() {
    this.itemsArray = this.loadItemsArray();
    if (this.selectedItems.length !== 0) {
      /**
       * selectedItems is not empty; iterate thru items array sending
       * each item object to the setCheckedItems function to determine witch
       * items need to be checked 
       */
      for (let i = 0; i < this.itemsArray.length; i++) {
        this.setCheckedItems(this.itemsArray[i]);
      }
      this.createMultiSelectList();
    } else {
      // selectedItems is empty; create list with all items unchecked
      this.createMultiSelectList();
    }
  }

  /**
   * Create an show the select list with the objects from the items Array
   */
  createMultiSelectList() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Items');
    for (let i = 0; i < this.itemsArray.length; i++) {
      alert.addInput(this.itemsArray[i]);
    }
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.selectedItems = data;
        console.log(this.selectedItems);
      }
    });
    alert.present();
  }

  /**
   * Compares each item in the selctedItems array to each item
   * int the itemsArray; If they match set checked to true
   * 
   * @param item 
   */
  setCheckedItems(item) {
    for (let i = 0; i < this.selectedItems.length; i++) {
      if (this.selectedItems[i] === item.value) {
        item.checked = true;
      }
    }
  }

  /**
   * Create initial items array will all item object having checked set to false
   */
  loadItemsArray(): Array<string> {
    let items = [];
    for (let i = 0; i < 5; i++) {
      let item = i + 1;
      let x = item.toString();
      let itemObject = {
        type: 'checkbox',
        label: 'Item ' + x,
        value: 'Item ' + x,
        checked: false
      };
      items.push(itemObject);
    }
    return items;
  }

}

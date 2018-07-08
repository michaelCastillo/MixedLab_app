
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../../pages/product/product';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'product-list',
  templateUrl: 'product-list.html'
})
export class ProductListComponent {
  selectedItem: any;
  condicion: string;
  icons: string[];
  items: Array<{ name: string, pricesPerStore: Array<{ price: number, store: string, url: string}> }>;
  products: Array<string>;
  prices: Array<{ price: number, store: string }>;
  dataBack: string[];
  imageUrl: string;
  constructor(public navCtrl: NavController, public http: Http) {
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');
    this.http = http;
    this.products = [];
    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane', 'american-football', 'boat', 'bluetooth', 'build'];
    var products = ["avena", "piña", "tallarines", "carne", "cafe", "te", "pan", "palta", "tomate", "lechuga"];
    this.items = [];
    this.prices = [];
    this.itemInit();

  }


  itemInit() {

    let ReceivedData = window.localStorage.getItem("productList");
    let dataCondition = JSON.parse(ReceivedData);
    let pricesTemp: Array<{ price: number, store: string, url: string }>;
    pricesTemp = [];    
    this.http.get('http://10.252.220.239:3000/condicion/').subscribe(data => {
      data.json().forEach(element => {
        
        if (element.nombre == dataCondition) {
          element.Productos.forEach(producto => {
            this.http.get('http://10.252.220.239:3000/precioProductoId/' + producto.Id).subscribe(dataPrice => {
              dataPrice.json().forEach(priceAux => {
                pricesTemp.push({
                  price: priceAux.monto,
                  store: priceAux.Empresa.nombre,
                  url: priceAux.url
                });
                
              });
            });
            this.items.push({
              name: producto.nombre,
              pricesPerStore: pricesTemp            
            });
          
          });
        }
      });
    });
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
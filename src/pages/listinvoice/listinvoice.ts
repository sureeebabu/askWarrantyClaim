import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-listinvoice',
  templateUrl: 'listinvoice.html',
})
export class ListinvoicePage {
  //public search;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ListinvoicePage');
  }

  searchitem(searchbar) {
    var q = searchbar.target.value;
    if (q.trim() == '') {
      return;
    }
    console.log(q);
    // this.productsList = this.productsList.filter((v) => {
    //   if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
    //     return true;
    //   }
    //   return false;
    // })
  }

}

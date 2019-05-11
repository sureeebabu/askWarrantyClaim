import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
  }

  goToChangePwd() {
    this.navCtrl.push('ChangepwdPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  authForm: FormGroup;
  public userPassword: string;
  public userName: string;
  public type = 'password';
  public showPass = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
  ) {

    this.authForm = fb.group({
      'userName': [null, Validators.compose([Validators.required])],
      'userPassword': [null, Validators.compose([Validators.required])]
    })
  }

  ionViewDidLoad() {

  }

  chkLogin() {
    
  }

  showPassword() {
    this.showPass = !this.showPass; 
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

}

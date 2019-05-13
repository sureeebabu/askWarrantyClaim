import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { CommfuncProvider } from '../../providers/commfunc/commfunc';
@IonicPage()
@Component({
  selector: 'page-claimdetails',
  templateUrl: 'claimdetails.html',
})
export class ClaimdetailsPage {
  public claimID;
  public claimDetJson:any;

  constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private http: HttpClient,
        private loadingCtrl: LoadingController,
        public myFunc: CommfuncProvider,
        private storage: Storage,
    ) {
    this.claimID = this.navParams.get('claimID');
  }


  ionViewDidLoad() {
    this.storage.get('lsCustCode').then((custCode) => {
      this.getClaimDetailsByID(this.claimID, custCode);
    }); 
  }

  getClaimDetailsByID(claimID,customerCode) {
    let data: Observable<any>;
    //alert(custCode);
    let url = this.myFunc.domainURL + "WarrantyAppAPI/WarrentyList.php?Sid=" + claimID + "&c_code=" + customerCode;
    let loader = this.loadingCtrl.create({
      content: 'Fetching Data From Server...'
    });
    data = this.http.get(url);
    loader.present().then(() => {
      data.subscribe(result => {
        console.log(result);
        this.claimDetJson = result; 
        loader.dismiss();
      }, error => {
        loader.dismiss();        
        console.log(error);
        //alert('Error in Claim Details');
      });
    });
  }

}

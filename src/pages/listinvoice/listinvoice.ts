import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { CommfuncProvider } from '../../providers/commfunc/commfunc';

@IonicPage()
@Component({
  selector: 'page-listinvoice',
  templateUrl: 'listinvoice.html',
})
export class ListinvoicePage {
  public invoiceJson: any;
  public isInvAvailable:boolean =false;
  constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private http: HttpClient,
        private storage: Storage,
        private loadingCtrl: LoadingController,
        private myFunc: CommfuncProvider
      ) 
    {
      
  }

  ionViewDidLoad() {
    this.storage.get('lsCustCode').then((custCode) => {
      this.getInvoiceByCustCode(custCode);
    });    
  }

  getInvoiceByCustCode(custCode) {
    let data: Observable<any>;
    //alert(custCode);
    let url = this.myFunc.domainURL + "WarrantyAppAPI/list_api.php?c_code=" + custCode;
    let loader = this.loadingCtrl.create({
      content: 'Fetching Data From Server...'
    });
    data = this.http.get(url);
    loader.present().then(() => {
      data.subscribe(result => {
        console.log(result);
        this.isInvAvailable = false;
        this.invoiceJson = result;
        loader.dismiss();
      }, error => {
        this.isInvAvailable = true;
        loader.dismiss();        
        console.log(error);
        //alert('Error in Invoice');
      });
    });
  }

  searchitem(searchbar) {
    console.log(searchbar);
    var val = searchbar.target.value;
    if (val && val.trim() != '') {
      this.invoiceJson = this.invoiceJson.filter((item) => {
        return item.invoice_no.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }

}

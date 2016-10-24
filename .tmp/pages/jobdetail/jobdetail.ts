import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-jobdetail',
  templateUrl: 'jobdetail.html'
})
export class JobDetailPage {
  http: Http;
  items: Array<{}>;
  j_id: string;
  j_type: string;
  j_title: string;
  j_desc: string;
  j_name: string;
  j_nickname: string;
  j_workdate: string;
  j_tel: string;
  j_line: string;
  j_cost: string;
  j_cash: string;
  j_payment: string;
  j_update: string;

  constructor(public nav: NavController, private navParams: NavParams, private httpService: Http) {
    this.http = httpService;
    this.j_id = navParams.get('j_id');
    this.j_type = navParams.get('j_type');
    this.j_title = navParams.get('j_title');
    this.j_nickname = navParams.get('j_nickname');
    this.j_workdate = navParams.get('j_workdate');
    this.http.get('http://www.araiwah.com/jobapi/detail.php?j_id=' + this.j_id).subscribe(
      (response) => {
        this.items = response.json();
      }
    );
  }


  doRefresh(refresher) {
    console.log('Refreshing', refresher);
    this.http.get('http://www.araiwah.com/jobapi/detail.php?j_id=' + this.j_id).subscribe(
      (response) => {
        this.items = response.json();
      }
    );


    setTimeout(() => {
      console.log('Pull to refresh complete!', refresher);
      refresher.complete();
    }, 1000);
  }

  doStrarting() {
    console.log('Pull started');
  }

  doPulling(amt) {
    console.log('You have pulled', amt);
  }


}

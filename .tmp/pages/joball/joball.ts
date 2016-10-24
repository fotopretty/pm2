import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { GoogleAnalytics } from 'ionic-native';
import { Http } from '@angular/http';
import { JobDetailPage } from '../jobdetail/jobdetail';


@Component({
  selector: 'page-joball',
  templateUrl: 'joball.html'
})

export class JobAllPage {
  http: Http;
  items: Array<{}>;
  itemstoday: Array<{}>;
  j_id: string;

  constructor(public nav: NavController, private navParams: NavParams, private httpService: Http, private platform: Platform) {
    this.http = httpService;
    this.nav = nav;

    this.http.get('http://www.araiwah.com/jobapi/joball.php').subscribe(
      (response) => {
        this.items = response.json();
      }
    );
    this.http.get('http://www.araiwah.com/jobapi/jobtoday.php').subscribe(
      (response) => {
        this.itemstoday = response.json();
      }
    );
  }

  trackJob() {
    this.platform.ready().then(() => {
      GoogleAnalytics.trackEvent('home', 'job', 'jobdetail', 12);
    });
  }


  goToJobdetail(events, item) {
    this.trackJob();
    this.nav.push(JobDetailPage, {
      j_id: item.j_id
    });
  }

  ionViewDidLoad() {
    console.log('Hello Joball Page');
  }

  doRefresh(refresher) {
    console.log('Refreshing', refresher);
    this.http.get('http://www.araiwah.com/jobapi/joball.php').subscribe(
      (response) => {
        this.items = response.json();
      }
    );
    this.http.get('http://www.araiwah.com/jobapi/jobtoday.php').subscribe(
      (response) => {
        this.itemstoday = response.json();
      }
    );

    setTimeout(() => {
      console.log('Pull to refresh complete!', refresher);
      refresher.complete();
    }, 1000);
  }

  doStart() {
    console.log('Pull started');
  }

  doPulling(amt) {
    console.log('You have pulled', amt);
  }

}

import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Platform, NavController } from 'ionic-angular';
import { GoogleAnalytics } from 'ionic-native';
import { JobAllPage } from '../joball/joball';
import { JobDetailPage } from '../jobdetail/jobdetail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Array<{}>;
  j_id: string;

  constructor(private nav: NavController, private platform: Platform, private http: Http) {
  this.nav = nav;
  this.http = http;
  this.platform = platform;

  this.http.get('http://www.araiwah.com/jobapi/').subscribe(
    (response) => {
      this.items = response.json();
    }
  );
  this.platform.ready().then(() => {
  this.trackHome();

  });

}

  launch() {
    this.platform.ready().then(() => {
      let browser = open('http://araiwah.com/job.php', '_self');
      this.trackLaunch();
      browser.addEventListener('exit', () => {
        console.log('Browser Closed');
      });

      browser.addEventListener('loadstart', () => {
        console.log('Browser STARTED');
      });

    });
  }

  trackHome() {
    this.platform.ready().then(() => {
      GoogleAnalytics.trackEvent('home', 'inbound', 'homepage', 11);
    });
  }

  trackJob() {
    this.platform.ready().then(() => {
      GoogleAnalytics.trackEvent('home', 'job', 'jobdetail', 12);
    });
  }

  trackJobAll() {
    this.platform.ready().then(() => {
      GoogleAnalytics.trackView("home to job all");
      GoogleAnalytics.trackEvent('home', 'job', 'alljob', 13);
    });
  }

  trackLaunch() {
    this.platform.ready().then(() => {
      GoogleAnalytics.trackEvent('home', 'araiwah', 'jobpost', 14);
    });
  }

  goToJoball() {
    this.trackJobAll();
    this.nav.push(JobAllPage, {},{animate: false});
  }

  goToJobdetail(events, item) {
    this.trackJob();
    this.nav.push(JobDetailPage, {
      j_id: item.j_id
    },{animate: false});
  }

  doRefresh(refresher) {
      console.log('Refreshing', refresher);
      this.http.get('http://www.araiwah.com/jobapi/').subscribe(
          (response) => {
              this.items = response.json();
          });

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

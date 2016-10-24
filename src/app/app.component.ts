import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, GoogleAnalytics } from 'ionic-native';
import { Http, Headers, RequestOptions } from '@angular/http';
import {
  Push,
  PushToken
} from '@ionic/cloud-angular';
import { HomePage } from '../pages/home/home';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform, public push: Push, public http: Http) {
    this.http = http;


    platform.ready().then(() => {
      StatusBar.styleDefault();
      // google
      GoogleAnalytics.debugMode();
      GoogleAnalytics.startTrackerWithId('UA-997685-46');
      GoogleAnalytics.enableUncaughtExceptionReporting(true)
        .then((_success) => {
          console.log(_success);
        }).catch((_error) => {
          console.log(_error);
        });
    });

    this.push.register().then((t: PushToken) => {
      return this.push.saveToken(t);
    }).then((t: PushToken) => {
      console.log('Token saved:', t.token);
      let bodyString = JSON.stringify({username:t.token});
      let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
      let options = new RequestOptions({ headers: headers });

      this.http
      .post("http://www.araiwah.com/push/api.php",bodyString, options)
      .subscribe(data=>{
//        alert('ok');
      })
      ;
//      alert(t.token);
    });

    this.push.rx.notification()
      .subscribe((msg) => {
        alert(msg.title + ': ' + msg.text);
      });
  }
}

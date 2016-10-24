import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, GoogleAnalytics } from 'ionic-native';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Push } from '@ionic/cloud-angular';
import { HomePage } from '../pages/home/home';
export var MyApp = (function () {
    function MyApp(platform, push, http) {
        var _this = this;
        this.push = push;
        this.http = http;
        this.rootPage = HomePage;
        this.http = http;
        platform.ready().then(function () {
            StatusBar.styleDefault();
            // google
            GoogleAnalytics.debugMode();
            GoogleAnalytics.startTrackerWithId('UA-997685-46');
            GoogleAnalytics.enableUncaughtExceptionReporting(true)
                .then(function (_success) {
                console.log(_success);
            }).catch(function (_error) {
                console.log(_error);
            });
        });
        this.push.register().then(function (t) {
            return _this.push.saveToken(t);
        }).then(function (t) {
            console.log('Token saved:', t.token);
            var bodyString = JSON.stringify({ username: t.token });
            var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
            var options = new RequestOptions({ headers: headers });
            _this.http
                .post("http://www.araiwah.com/push/api.php", bodyString, options)
                .subscribe(function (data) {
                //        alert('ok');
            });
            //      alert(t.token);
        });
        this.push.rx.notification()
            .subscribe(function (msg) {
            alert(msg.title + ': ' + msg.text);
        });
    }
    MyApp.decorators = [
        { type: Component, args: [{
                    template: "<ion-nav [root]=\"rootPage\"></ion-nav>"
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = [
        { type: Platform, },
        { type: Push, },
        { type: Http, },
    ];
    return MyApp;
}());

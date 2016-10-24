import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { GoogleAnalytics } from 'ionic-native';
import { Http } from '@angular/http';
import { JobDetailPage } from '../jobdetail/jobdetail';
export var JobAllPage = (function () {
    function JobAllPage(nav, navParams, httpService, platform) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.httpService = httpService;
        this.platform = platform;
        this.http = httpService;
        this.nav = nav;
        this.http.get('http://www.araiwah.com/jobapi/joball.php').subscribe(function (response) {
            _this.items = response.json();
        });
        this.http.get('http://www.araiwah.com/jobapi/jobtoday.php').subscribe(function (response) {
            _this.itemstoday = response.json();
        });
    }
    JobAllPage.prototype.trackJob = function () {
        this.platform.ready().then(function () {
            GoogleAnalytics.trackEvent('home', 'job', 'jobdetail', 12);
        });
    };
    JobAllPage.prototype.goToJobdetail = function (events, item) {
        this.trackJob();
        this.nav.push(JobDetailPage, {
            j_id: item.j_id
        });
    };
    JobAllPage.prototype.ionViewDidLoad = function () {
        console.log('Hello Joball Page');
    };
    JobAllPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Refreshing', refresher);
        this.http.get('http://www.araiwah.com/jobapi/joball.php').subscribe(function (response) {
            _this.items = response.json();
        });
        this.http.get('http://www.araiwah.com/jobapi/jobtoday.php').subscribe(function (response) {
            _this.itemstoday = response.json();
        });
        setTimeout(function () {
            console.log('Pull to refresh complete!', refresher);
            refresher.complete();
        }, 1000);
    };
    JobAllPage.prototype.doStart = function () {
        console.log('Pull started');
    };
    JobAllPage.prototype.doPulling = function (amt) {
        console.log('You have pulled', amt);
    };
    JobAllPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-joball',
                    templateUrl: 'joball.html'
                },] },
    ];
    /** @nocollapse */
    JobAllPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: Http, },
        { type: Platform, },
    ];
    return JobAllPage;
}());

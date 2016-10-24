import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Platform, NavController } from 'ionic-angular';
import { GoogleAnalytics } from 'ionic-native';
import { JobAllPage } from '../joball/joball';
import { JobDetailPage } from '../jobdetail/jobdetail';
export var HomePage = (function () {
    function HomePage(nav, platform, http) {
        var _this = this;
        this.nav = nav;
        this.platform = platform;
        this.http = http;
        this.nav = nav;
        this.http = http;
        this.platform = platform;
        this.http.get('http://www.araiwah.com/jobapi/').subscribe(function (response) {
            _this.items = response.json();
        });
        this.platform.ready().then(function () {
            _this.trackHome();
        });
    }
    HomePage.prototype.launch = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var browser = open('http://araiwah.com/job.php', '_self');
            _this.trackLaunch();
            browser.addEventListener('exit', function () {
                console.log('Browser Closed');
            });
            browser.addEventListener('loadstart', function () {
                console.log('Browser STARTED');
            });
        });
    };
    HomePage.prototype.trackHome = function () {
        this.platform.ready().then(function () {
            GoogleAnalytics.trackEvent('home', 'inbound', 'homepage', 11);
        });
    };
    HomePage.prototype.trackJob = function () {
        this.platform.ready().then(function () {
            GoogleAnalytics.trackEvent('home', 'job', 'jobdetail', 12);
        });
    };
    HomePage.prototype.trackJobAll = function () {
        this.platform.ready().then(function () {
            GoogleAnalytics.trackView("home to job all");
            GoogleAnalytics.trackEvent('home', 'job', 'alljob', 13);
        });
    };
    HomePage.prototype.trackLaunch = function () {
        this.platform.ready().then(function () {
            GoogleAnalytics.trackEvent('home', 'araiwah', 'jobpost', 14);
        });
    };
    HomePage.prototype.goToJoball = function () {
        this.trackJobAll();
        this.nav.push(JobAllPage, {}, { animate: false });
    };
    HomePage.prototype.goToJobdetail = function (events, item) {
        this.trackJob();
        this.nav.push(JobDetailPage, {
            j_id: item.j_id
        }, { animate: false });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Refreshing', refresher);
        this.http.get('http://www.araiwah.com/jobapi/').subscribe(function (response) {
            _this.items = response.json();
        });
        setTimeout(function () {
            console.log('Pull to refresh complete!', refresher);
            refresher.complete();
        }, 1000);
    };
    HomePage.prototype.doStart = function () {
        console.log('Pull started');
    };
    HomePage.prototype.doPulling = function (amt) {
        console.log('You have pulled', amt);
    };
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html'
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = [
        { type: NavController, },
        { type: Platform, },
        { type: Http, },
    ];
    return HomePage;
}());

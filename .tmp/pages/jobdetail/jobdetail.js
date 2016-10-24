import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
export var JobDetailPage = (function () {
    function JobDetailPage(nav, navParams, httpService) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.httpService = httpService;
        this.http = httpService;
        this.j_id = navParams.get('j_id');
        this.j_type = navParams.get('j_type');
        this.j_title = navParams.get('j_title');
        this.j_nickname = navParams.get('j_nickname');
        this.j_workdate = navParams.get('j_workdate');
        this.http.get('http://www.araiwah.com/jobapi/detail.php?j_id=' + this.j_id).subscribe(function (response) {
            _this.items = response.json();
        });
    }
    JobDetailPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Refreshing', refresher);
        this.http.get('http://www.araiwah.com/jobapi/detail.php?j_id=' + this.j_id).subscribe(function (response) {
            _this.items = response.json();
        });
        setTimeout(function () {
            console.log('Pull to refresh complete!', refresher);
            refresher.complete();
        }, 1000);
    };
    JobDetailPage.prototype.doStrarting = function () {
        console.log('Pull started');
    };
    JobDetailPage.prototype.doPulling = function (amt) {
        console.log('You have pulled', amt);
    };
    JobDetailPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-jobdetail',
                    templateUrl: 'jobdetail.html'
                },] },
    ];
    /** @nocollapse */
    JobDetailPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: Http, },
    ];
    return JobDetailPage;
}());

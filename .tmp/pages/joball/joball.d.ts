import { NavController, NavParams, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
export declare class JobAllPage {
    nav: NavController;
    private navParams;
    private httpService;
    private platform;
    http: Http;
    items: Array<{}>;
    itemstoday: Array<{}>;
    j_id: string;
    constructor(nav: NavController, navParams: NavParams, httpService: Http, platform: Platform);
    trackJob(): void;
    goToJobdetail(events: any, item: any): void;
    ionViewDidLoad(): void;
    doRefresh(refresher: any): void;
    doStart(): void;
    doPulling(amt: any): void;
}

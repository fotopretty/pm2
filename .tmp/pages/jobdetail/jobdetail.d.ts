import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
export declare class JobDetailPage {
    nav: NavController;
    private navParams;
    private httpService;
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
    constructor(nav: NavController, navParams: NavParams, httpService: Http);
    doRefresh(refresher: any): void;
    doStrarting(): void;
    doPulling(amt: any): void;
}

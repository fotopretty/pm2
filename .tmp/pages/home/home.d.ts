import { Http } from '@angular/http';
import { Platform, NavController } from 'ionic-angular';
export declare class HomePage {
    private nav;
    private platform;
    private http;
    items: Array<{}>;
    j_id: string;
    constructor(nav: NavController, platform: Platform, http: Http);
    launch(): void;
    trackHome(): void;
    trackJob(): void;
    trackJobAll(): void;
    trackLaunch(): void;
    goToJoball(): void;
    goToJobdetail(events: any, item: any): void;
    doRefresh(refresher: any): void;
    doStart(): void;
    doPulling(amt: any): void;
}

import { Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { Push } from '@ionic/cloud-angular';
import { HomePage } from '../pages/home/home';
export declare class MyApp {
    push: Push;
    http: Http;
    rootPage: typeof HomePage;
    constructor(platform: Platform, push: Push, http: Http);
}

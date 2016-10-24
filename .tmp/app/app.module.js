import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { JobAllPage } from '../pages/joball/joball';
import { JobDetailPage } from '../pages/jobdetail/jobdetail';
import { CloudModule } from '@ionic/cloud-angular';
var cloudSettings = {
    'core': {
        'app_id': 'c770671f'
    },
    'push': {
        'sender_id': '1023450592682',
        'pluginConfig': {
            'ios': {
                'badge': true,
                'sound': true
            },
            'android': {
                'iconColor': '#343434'
            }
        }
    }
};
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MyApp,
                        HomePage,
                        JobAllPage,
                        JobDetailPage
                    ],
                    imports: [
                        IonicModule.forRoot(MyApp),
                        CloudModule.forRoot(cloudSettings)
                    ],
                    bootstrap: [IonicApp],
                    entryComponents: [
                        MyApp,
                        HomePage,
                        JobAllPage,
                        JobDetailPage
                    ],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());

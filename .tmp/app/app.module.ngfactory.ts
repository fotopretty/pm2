/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/http/src/http_module';
import * as import6 from '@angular/forms/src/directives';
import * as import7 from '@angular/forms/src/form_providers';
import * as import8 from 'ionic-angular/module';
import * as import9 from '@ionic/cloud-angular/dist/es5/index';
import * as import10 from '@angular/common/src/localization';
import * as import11 from 'ionic-angular/components/app/app';
import * as import12 from '@angular/core/src/application_init';
import * as import13 from '@angular/core/src/testability/testability';
import * as import14 from '@angular/core/src/application_ref';
import * as import15 from '@angular/core/src/linker/compiler';
import * as import16 from 'ionic-angular/gestures/gesture-config';
import * as import17 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import18 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import19 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import20 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import21 from '@angular/core/src/linker/view_utils';
import * as import22 from '@angular/platform-browser/src/browser/title';
import * as import23 from '@angular/http/src/backends/browser_xhr';
import * as import24 from '@angular/http/src/base_response_options';
import * as import25 from '@angular/http/src/backends/xhr_backend';
import * as import26 from '@angular/http/src/base_request_options';
import * as import27 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import28 from '@angular/forms/src/form_builder';
import * as import29 from 'ionic-angular/components/action-sheet/action-sheet';
import * as import30 from 'ionic-angular/components/alert/alert';
import * as import31 from 'ionic-angular/util/events';
import * as import32 from 'ionic-angular/util/form';
import * as import33 from 'ionic-angular/gestures/gesture-controller';
import * as import34 from 'ionic-angular/util/keyboard';
import * as import35 from 'ionic-angular/components/loading/loading';
import * as import36 from '@angular/common/src/location/location';
import * as import37 from 'ionic-angular/components/menu/menu-controller';
import * as import38 from 'ionic-angular/components/modal/modal';
import * as import39 from 'ionic-angular/components/picker/picker';
import * as import40 from 'ionic-angular/components/popover/popover';
import * as import41 from 'ionic-angular/components/tap-click/tap-click';
import * as import42 from 'ionic-angular/components/toast/toast';
import * as import43 from 'ionic-angular/translation/translate';
import * as import44 from 'ionic-angular/transitions/transition-controller';
import * as import45 from '@angular/core/src/di/injector';
import * as import46 from '../node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory';
import * as import47 from '../node_modules/ionic-angular/components/alert/alert-component.ngfactory';
import * as import48 from '../node_modules/ionic-angular/components/app/app-root.ngfactory';
import * as import49 from '../node_modules/ionic-angular/components/loading/loading-component.ngfactory';
import * as import50 from '../node_modules/ionic-angular/components/modal/modal-component.ngfactory';
import * as import51 from '../node_modules/ionic-angular/components/picker/picker-component.ngfactory';
import * as import52 from '../node_modules/ionic-angular/components/popover/popover-component.ngfactory';
import * as import53 from '../node_modules/ionic-angular/components/toast/toast-component.ngfactory';
import * as import54 from './app.component.ngfactory';
import * as import55 from '../pages/home/home.ngfactory';
import * as import56 from '../pages/joball/joball.ngfactory';
import * as import57 from '../pages/jobdetail/jobdetail.ngfactory';
import * as import58 from '@angular/core/src/application_tokens';
import * as import59 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import60 from '@angular/platform-browser/src/dom/events/key_events';
import * as import61 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import62 from '@angular/core/src/zone/ng_zone';
import * as import63 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import64 from './app.component';
import * as import65 from '@angular/common/src/location/platform_location';
import * as import66 from '@angular/common/src/location/location_strategy';
import * as import67 from 'ionic-angular/navigation/url-serializer';
import * as import68 from 'ionic-angular/navigation/deep-linker';
import * as import69 from 'ionic-angular/platform/query-params';
import * as import70 from 'ionic-angular/platform/platform-registry';
import * as import71 from 'ionic-angular/platform/platform';
import * as import72 from 'ionic-angular/config/config';
import * as import73 from 'ionic-angular/config/mode-registry';
import * as import74 from 'ionic-angular/transitions/transition-registry';
import * as import75 from '@angular/core/src/console';
import * as import76 from '@angular/core/src/i18n/tokens';
import * as import77 from '@angular/core/src/error_handler';
import * as import78 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import79 from '@angular/platform-browser/src/dom/animation_driver';
import * as import80 from '@angular/core/src/render/api';
import * as import81 from '@angular/core/src/security';
import * as import82 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import83 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import84 from '@angular/http/src/interfaces';
import * as import85 from '@angular/http/src/http';
import * as import86 from 'ionic-angular/components/app/app-root';
class AppModuleInjector extends import0.NgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _HttpModule_3:import5.HttpModule;
  _InternalFormsSharedModule_4:import6.InternalFormsSharedModule;
  _FormsModule_5:import7.FormsModule;
  _ReactiveFormsModule_6:import7.ReactiveFormsModule;
  _IonicModule_7:import8.IonicModule;
  _CloudModule_8:import9.CloudModule;
  _AppModule_9:import1.AppModule;
  __LOCALE_ID_10:any;
  __NgLocalization_11:import10.NgLocaleLocalization;
  _ErrorHandler_12:any;
  _ConfigToken_13:any;
  _UrlToken_14:any;
  _QueryParams_15:any;
  _PlatformConfigToken_16:any;
  _UserAgentToken_17:any;
  _NavigatorPlatformToken_18:any;
  _DocumentDirToken_19:any;
  _DocLangToken_20:any;
  _Platform_21:any;
  _Config_22:any;
  _App_23:import11.App;
  _APP_INITIALIZER_24:any[];
  _ApplicationInitStatus_25:import12.ApplicationInitStatus;
  _Testability_26:import13.Testability;
  _ApplicationRef__27:import14.ApplicationRef_;
  __ApplicationRef_28:any;
  __Compiler_29:import15.Compiler;
  __APP_ID_30:any;
  __DOCUMENT_31:any;
  __HAMMER_GESTURE_CONFIG_32:import16.IonicGestureConfig;
  __EVENT_MANAGER_PLUGINS_33:any[];
  __EventManager_34:import17.EventManager;
  __DomSharedStylesHost_35:import18.DomSharedStylesHost;
  __AnimationDriver_36:any;
  __DomRootRenderer_37:import19.DomRootRenderer_;
  __RootRenderer_38:any;
  __DomSanitizer_39:import20.DomSanitizerImpl;
  __Sanitizer_40:any;
  __ViewUtils_41:import21.ViewUtils;
  __IterableDiffers_42:any;
  __KeyValueDiffers_43:any;
  __SharedStylesHost_44:any;
  __Title_45:import22.Title;
  __BrowserXhr_46:import23.BrowserXhr;
  __ResponseOptions_47:import24.BaseResponseOptions;
  __XSRFStrategy_48:any;
  __XHRBackend_49:import25.XHRBackend;
  __RequestOptions_50:import26.BaseRequestOptions;
  __Http_51:any;
  __RadioControlRegistry_52:import27.RadioControlRegistry;
  __FormBuilder_53:import28.FormBuilder;
  __AppRootToken_54:any;
  __DeepLinkConfigToken_55:any;
  __ActionSheetController_56:import29.ActionSheetController;
  __AlertController_57:import30.AlertController;
  __Events_58:import31.Events;
  __Form_59:import32.Form;
  __GestureController_60:import33.GestureController;
  __Keyboard_61:import34.Keyboard;
  __LoadingController_62:import35.LoadingController;
  __LocationStrategy_63:any;
  __Location_64:import36.Location;
  __MenuController_65:import37.MenuController;
  __ModalController_66:import38.ModalController;
  __PickerController_67:import39.PickerController;
  __PopoverController_68:import40.PopoverController;
  __TapClick_69:import41.TapClick;
  __ToastController_70:import42.ToastController;
  __Translate_71:import43.Translate;
  __TransitionController_72:import44.TransitionController;
  __UrlSerializer_73:any;
  __DeepLinker_74:any;
  __CloudSettingsToken_75:any;
  __DIContainer_76:any;
  __Auth_77:any;
  __Client_78:any;
  __Config_79:any;
  __Deploy_80:any;
  __Push_81:any;
  __User_82:any;
  constructor(parent:import45.Injector) {
    super(parent,[
      import46.ActionSheetCmpNgFactory,
      import47.AlertCmpNgFactory,
      import48.IonicAppNgFactory,
      import49.LoadingCmpNgFactory,
      import50.ModalCmpNgFactory,
      import51.PickerCmpNgFactory,
      import52.PopoverCmpNgFactory,
      import53.ToastCmpNgFactory,
      import54.MyAppNgFactory,
      import54.MyAppNgFactory,
      import55.HomePageNgFactory,
      import56.JobAllPageNgFactory,
      import57.JobDetailPageNgFactory,
      import48.IonicAppNgFactory
    ]
    ,[import48.IonicAppNgFactory]);
  }
  get _LOCALE_ID_10():any {
    if ((this.__LOCALE_ID_10 == (null as any))) { (this.__LOCALE_ID_10 = 'en-US'); }
    return this.__LOCALE_ID_10;
  }
  get _NgLocalization_11():import10.NgLocaleLocalization {
    if ((this.__NgLocalization_11 == (null as any))) { (this.__NgLocalization_11 = new import10.NgLocaleLocalization(this._LOCALE_ID_10)); }
    return this.__NgLocalization_11;
  }
  get _ApplicationRef_28():any {
    if ((this.__ApplicationRef_28 == (null as any))) { (this.__ApplicationRef_28 = this._ApplicationRef__27); }
    return this.__ApplicationRef_28;
  }
  get _Compiler_29():import15.Compiler {
    if ((this.__Compiler_29 == (null as any))) { (this.__Compiler_29 = new import15.Compiler()); }
    return this.__Compiler_29;
  }
  get _APP_ID_30():any {
    if ((this.__APP_ID_30 == (null as any))) { (this.__APP_ID_30 = import58._appIdRandomProviderFactory()); }
    return this.__APP_ID_30;
  }
  get _DOCUMENT_31():any {
    if ((this.__DOCUMENT_31 == (null as any))) { (this.__DOCUMENT_31 = import4._document()); }
    return this.__DOCUMENT_31;
  }
  get _HAMMER_GESTURE_CONFIG_32():import16.IonicGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_32 == (null as any))) { (this.__HAMMER_GESTURE_CONFIG_32 = new import16.IonicGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_32;
  }
  get _EVENT_MANAGER_PLUGINS_33():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_33 == (null as any))) { (this.__EVENT_MANAGER_PLUGINS_33 = [
      new import59.DomEventsPlugin(),
      new import60.KeyEventsPlugin(),
      new import61.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_32)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_33;
  }
  get _EventManager_34():import17.EventManager {
    if ((this.__EventManager_34 == (null as any))) { (this.__EventManager_34 = new import17.EventManager(this._EVENT_MANAGER_PLUGINS_33,this.parent.get(import62.NgZone))); }
    return this.__EventManager_34;
  }
  get _DomSharedStylesHost_35():import18.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_35 == (null as any))) { (this.__DomSharedStylesHost_35 = new import18.DomSharedStylesHost(this._DOCUMENT_31)); }
    return this.__DomSharedStylesHost_35;
  }
  get _AnimationDriver_36():any {
    if ((this.__AnimationDriver_36 == (null as any))) { (this.__AnimationDriver_36 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_36;
  }
  get _DomRootRenderer_37():import19.DomRootRenderer_ {
    if ((this.__DomRootRenderer_37 == (null as any))) { (this.__DomRootRenderer_37 = new import19.DomRootRenderer_(this._DOCUMENT_31,this._EventManager_34,this._DomSharedStylesHost_35,this._AnimationDriver_36)); }
    return this.__DomRootRenderer_37;
  }
  get _RootRenderer_38():any {
    if ((this.__RootRenderer_38 == (null as any))) { (this.__RootRenderer_38 = import63._createConditionalRootRenderer(this._DomRootRenderer_37,this.parent.get(import63.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_38;
  }
  get _DomSanitizer_39():import20.DomSanitizerImpl {
    if ((this.__DomSanitizer_39 == (null as any))) { (this.__DomSanitizer_39 = new import20.DomSanitizerImpl()); }
    return this.__DomSanitizer_39;
  }
  get _Sanitizer_40():any {
    if ((this.__Sanitizer_40 == (null as any))) { (this.__Sanitizer_40 = this._DomSanitizer_39); }
    return this.__Sanitizer_40;
  }
  get _ViewUtils_41():import21.ViewUtils {
    if ((this.__ViewUtils_41 == (null as any))) { (this.__ViewUtils_41 = new import21.ViewUtils(this._RootRenderer_38,this._APP_ID_30,this._Sanitizer_40)); }
    return this.__ViewUtils_41;
  }
  get _IterableDiffers_42():any {
    if ((this.__IterableDiffers_42 == (null as any))) { (this.__IterableDiffers_42 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_42;
  }
  get _KeyValueDiffers_43():any {
    if ((this.__KeyValueDiffers_43 == (null as any))) { (this.__KeyValueDiffers_43 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_43;
  }
  get _SharedStylesHost_44():any {
    if ((this.__SharedStylesHost_44 == (null as any))) { (this.__SharedStylesHost_44 = this._DomSharedStylesHost_35); }
    return this.__SharedStylesHost_44;
  }
  get _Title_45():import22.Title {
    if ((this.__Title_45 == (null as any))) { (this.__Title_45 = new import22.Title()); }
    return this.__Title_45;
  }
  get _BrowserXhr_46():import23.BrowserXhr {
    if ((this.__BrowserXhr_46 == (null as any))) { (this.__BrowserXhr_46 = new import23.BrowserXhr()); }
    return this.__BrowserXhr_46;
  }
  get _ResponseOptions_47():import24.BaseResponseOptions {
    if ((this.__ResponseOptions_47 == (null as any))) { (this.__ResponseOptions_47 = new import24.BaseResponseOptions()); }
    return this.__ResponseOptions_47;
  }
  get _XSRFStrategy_48():any {
    if ((this.__XSRFStrategy_48 == (null as any))) { (this.__XSRFStrategy_48 = import5._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_48;
  }
  get _XHRBackend_49():import25.XHRBackend {
    if ((this.__XHRBackend_49 == (null as any))) { (this.__XHRBackend_49 = new import25.XHRBackend(this._BrowserXhr_46,this._ResponseOptions_47,this._XSRFStrategy_48)); }
    return this.__XHRBackend_49;
  }
  get _RequestOptions_50():import26.BaseRequestOptions {
    if ((this.__RequestOptions_50 == (null as any))) { (this.__RequestOptions_50 = new import26.BaseRequestOptions()); }
    return this.__RequestOptions_50;
  }
  get _Http_51():any {
    if ((this.__Http_51 == (null as any))) { (this.__Http_51 = import5.httpFactory(this._XHRBackend_49,this._RequestOptions_50)); }
    return this.__Http_51;
  }
  get _RadioControlRegistry_52():import27.RadioControlRegistry {
    if ((this.__RadioControlRegistry_52 == (null as any))) { (this.__RadioControlRegistry_52 = new import27.RadioControlRegistry()); }
    return this.__RadioControlRegistry_52;
  }
  get _FormBuilder_53():import28.FormBuilder {
    if ((this.__FormBuilder_53 == (null as any))) { (this.__FormBuilder_53 = new import28.FormBuilder()); }
    return this.__FormBuilder_53;
  }
  get _AppRootToken_54():any {
    if ((this.__AppRootToken_54 == (null as any))) { (this.__AppRootToken_54 = import64.MyApp); }
    return this.__AppRootToken_54;
  }
  get _DeepLinkConfigToken_55():any {
    if ((this.__DeepLinkConfigToken_55 == (null as any))) { (this.__DeepLinkConfigToken_55 = (null as any)); }
    return this.__DeepLinkConfigToken_55;
  }
  get _ActionSheetController_56():import29.ActionSheetController {
    if ((this.__ActionSheetController_56 == (null as any))) { (this.__ActionSheetController_56 = new import29.ActionSheetController(this._App_23)); }
    return this.__ActionSheetController_56;
  }
  get _AlertController_57():import30.AlertController {
    if ((this.__AlertController_57 == (null as any))) { (this.__AlertController_57 = new import30.AlertController(this._App_23)); }
    return this.__AlertController_57;
  }
  get _Events_58():import31.Events {
    if ((this.__Events_58 == (null as any))) { (this.__Events_58 = new import31.Events()); }
    return this.__Events_58;
  }
  get _Form_59():import32.Form {
    if ((this.__Form_59 == (null as any))) { (this.__Form_59 = new import32.Form()); }
    return this.__Form_59;
  }
  get _GestureController_60():import33.GestureController {
    if ((this.__GestureController_60 == (null as any))) { (this.__GestureController_60 = new import33.GestureController(this._App_23)); }
    return this.__GestureController_60;
  }
  get _Keyboard_61():import34.Keyboard {
    if ((this.__Keyboard_61 == (null as any))) { (this.__Keyboard_61 = new import34.Keyboard(this._Config_22,this._Form_59,this.parent.get(import62.NgZone))); }
    return this.__Keyboard_61;
  }
  get _LoadingController_62():import35.LoadingController {
    if ((this.__LoadingController_62 == (null as any))) { (this.__LoadingController_62 = new import35.LoadingController(this._App_23)); }
    return this.__LoadingController_62;
  }
  get _LocationStrategy_63():any {
    if ((this.__LocationStrategy_63 == (null as any))) { (this.__LocationStrategy_63 = import8.provideLocationStrategy(this.parent.get(import65.PlatformLocation),this.parent.get(import66.APP_BASE_HREF,(null as any)),this._Config_22)); }
    return this.__LocationStrategy_63;
  }
  get _Location_64():import36.Location {
    if ((this.__Location_64 == (null as any))) { (this.__Location_64 = new import36.Location(this._LocationStrategy_63)); }
    return this.__Location_64;
  }
  get _MenuController_65():import37.MenuController {
    if ((this.__MenuController_65 == (null as any))) { (this.__MenuController_65 = new import37.MenuController()); }
    return this.__MenuController_65;
  }
  get _ModalController_66():import38.ModalController {
    if ((this.__ModalController_66 == (null as any))) { (this.__ModalController_66 = new import38.ModalController(this._App_23)); }
    return this.__ModalController_66;
  }
  get _PickerController_67():import39.PickerController {
    if ((this.__PickerController_67 == (null as any))) { (this.__PickerController_67 = new import39.PickerController(this._App_23)); }
    return this.__PickerController_67;
  }
  get _PopoverController_68():import40.PopoverController {
    if ((this.__PopoverController_68 == (null as any))) { (this.__PopoverController_68 = new import40.PopoverController(this._App_23)); }
    return this.__PopoverController_68;
  }
  get _TapClick_69():import41.TapClick {
    if ((this.__TapClick_69 == (null as any))) { (this.__TapClick_69 = new import41.TapClick(this._Config_22,this._App_23,this.parent.get(import62.NgZone))); }
    return this.__TapClick_69;
  }
  get _ToastController_70():import42.ToastController {
    if ((this.__ToastController_70 == (null as any))) { (this.__ToastController_70 = new import42.ToastController(this._App_23)); }
    return this.__ToastController_70;
  }
  get _Translate_71():import43.Translate {
    if ((this.__Translate_71 == (null as any))) { (this.__Translate_71 = new import43.Translate()); }
    return this.__Translate_71;
  }
  get _TransitionController_72():import44.TransitionController {
    if ((this.__TransitionController_72 == (null as any))) { (this.__TransitionController_72 = new import44.TransitionController(this._Config_22)); }
    return this.__TransitionController_72;
  }
  get _UrlSerializer_73():any {
    if ((this.__UrlSerializer_73 == (null as any))) { (this.__UrlSerializer_73 = import67.setupUrlSerializer(this._DeepLinkConfigToken_55)); }
    return this.__UrlSerializer_73;
  }
  get _DeepLinker_74():any {
    if ((this.__DeepLinker_74 == (null as any))) { (this.__DeepLinker_74 = import68.setupDeepLinker(this._App_23,this._UrlSerializer_73,this._Location_64)); }
    return this.__DeepLinker_74;
  }
  get _CloudSettingsToken_75():any {
    if ((this.__CloudSettingsToken_75 == (null as any))) { (this.__CloudSettingsToken_75 = {
      core: {app_id: 'c770671f'},
      push: {
        sender_id: '1023450592682',
        pluginConfig: {
          ios: {
            badge: true,
            sound: true
          }
          ,
          android: {iconColor: '#343434'}
        }

      }

    }
    ); }
    return this.__CloudSettingsToken_75;
  }
  get _DIContainer_76():any {
    if ((this.__DIContainer_76 == (null as any))) { (this.__DIContainer_76 = import9.provideContainer(this._CloudSettingsToken_75)); }
    return this.__DIContainer_76;
  }
  get _Auth_77():any {
    if ((this.__Auth_77 == (null as any))) { (this.__Auth_77 = import9.provideAuth(this._DIContainer_76)); }
    return this.__Auth_77;
  }
  get _Client_78():any {
    if ((this.__Client_78 == (null as any))) { (this.__Client_78 = import9.provideClient(this._DIContainer_76)); }
    return this.__Client_78;
  }
  get _Config_79():any {
    if ((this.__Config_79 == (null as any))) { (this.__Config_79 = import9.provideConfig(this._DIContainer_76)); }
    return this.__Config_79;
  }
  get _Deploy_80():any {
    if ((this.__Deploy_80 == (null as any))) { (this.__Deploy_80 = import9.provideDeploy(this._DIContainer_76)); }
    return this.__Deploy_80;
  }
  get _Push_81():any {
    if ((this.__Push_81 == (null as any))) { (this.__Push_81 = import9.providePush(this._DIContainer_76)); }
    return this.__Push_81;
  }
  get _User_82():any {
    if ((this.__User_82 == (null as any))) { (this.__User_82 = import9.provideUser(this._DIContainer_76)); }
    return this.__User_82;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._HttpModule_3 = new import5.HttpModule();
    this._InternalFormsSharedModule_4 = new import6.InternalFormsSharedModule();
    this._FormsModule_5 = new import7.FormsModule();
    this._ReactiveFormsModule_6 = new import7.ReactiveFormsModule();
    this._IonicModule_7 = new import8.IonicModule();
    this._CloudModule_8 = new import9.CloudModule();
    this._AppModule_9 = new import1.AppModule();
    this._ErrorHandler_12 = import4.errorHandler();
    this._ConfigToken_13 = (null as any);
    this._UrlToken_14 = import8.provideLocationHref();
    this._QueryParams_15 = import69.setupQueryParams(this._UrlToken_14);
    this._PlatformConfigToken_16 = import70.providePlatformConfigs();
    this._UserAgentToken_17 = import8.provideUserAgent();
    this._NavigatorPlatformToken_18 = import8.provideNavigatorPlatform();
    this._DocumentDirToken_19 = import8.provideDocumentDirection();
    this._DocLangToken_20 = import8.provideDocumentLang();
    this._Platform_21 = import71.setupPlatform(this._PlatformConfigToken_16,this._QueryParams_15,this._UserAgentToken_17,this._NavigatorPlatformToken_18,this._DocumentDirToken_19,this._DocLangToken_20,this.parent.get(import62.NgZone));
    this._Config_22 = import72.setupConfig(this._ConfigToken_13,this._QueryParams_15,this._Platform_21);
    this._App_23 = new import11.App(this._Config_22,this._Platform_21);
    this._APP_INITIALIZER_24 = [
      import73.registerModeConfigs(this._Config_22),
      import74.registerTransitions(this._Config_22),
      import31.setupProvideEvents(this._Platform_21),
      import41.setupTapClick(this._Config_22,this._App_23,this.parent.get(import62.NgZone))
    ]
    ;
    this._ApplicationInitStatus_25 = new import12.ApplicationInitStatus(this._APP_INITIALIZER_24);
    this._Testability_26 = new import13.Testability(this.parent.get(import62.NgZone));
    this._ApplicationRef__27 = new import14.ApplicationRef_(this.parent.get(import62.NgZone),this.parent.get(import75.Console),this,this._ErrorHandler_12,this,this._ApplicationInitStatus_25,this.parent.get(import13.TestabilityRegistry,(null as any)),this._Testability_26);
    return this._AppModule_9;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.HttpModule)) { return this._HttpModule_3; }
    if ((token === import6.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_4; }
    if ((token === import7.FormsModule)) { return this._FormsModule_5; }
    if ((token === import7.ReactiveFormsModule)) { return this._ReactiveFormsModule_6; }
    if ((token === import8.IonicModule)) { return this._IonicModule_7; }
    if ((token === import9.CloudModule)) { return this._CloudModule_8; }
    if ((token === import1.AppModule)) { return this._AppModule_9; }
    if ((token === import76.LOCALE_ID)) { return this._LOCALE_ID_10; }
    if ((token === import10.NgLocalization)) { return this._NgLocalization_11; }
    if ((token === import77.ErrorHandler)) { return this._ErrorHandler_12; }
    if ((token === import72.ConfigToken)) { return this._ConfigToken_13; }
    if ((token === import69.UrlToken)) { return this._UrlToken_14; }
    if ((token === import69.QueryParams)) { return this._QueryParams_15; }
    if ((token === import70.PlatformConfigToken)) { return this._PlatformConfigToken_16; }
    if ((token === import71.UserAgentToken)) { return this._UserAgentToken_17; }
    if ((token === import71.NavigatorPlatformToken)) { return this._NavigatorPlatformToken_18; }
    if ((token === import71.DocumentDirToken)) { return this._DocumentDirToken_19; }
    if ((token === import71.DocLangToken)) { return this._DocLangToken_20; }
    if ((token === import71.Platform)) { return this._Platform_21; }
    if ((token === import72.Config)) { return this._Config_22; }
    if ((token === import11.App)) { return this._App_23; }
    if ((token === import12.APP_INITIALIZER)) { return this._APP_INITIALIZER_24; }
    if ((token === import12.ApplicationInitStatus)) { return this._ApplicationInitStatus_25; }
    if ((token === import13.Testability)) { return this._Testability_26; }
    if ((token === import14.ApplicationRef_)) { return this._ApplicationRef__27; }
    if ((token === import14.ApplicationRef)) { return this._ApplicationRef_28; }
    if ((token === import15.Compiler)) { return this._Compiler_29; }
    if ((token === import58.APP_ID)) { return this._APP_ID_30; }
    if ((token === import78.DOCUMENT)) { return this._DOCUMENT_31; }
    if ((token === import61.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_32; }
    if ((token === import17.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_33; }
    if ((token === import17.EventManager)) { return this._EventManager_34; }
    if ((token === import18.DomSharedStylesHost)) { return this._DomSharedStylesHost_35; }
    if ((token === import79.AnimationDriver)) { return this._AnimationDriver_36; }
    if ((token === import19.DomRootRenderer)) { return this._DomRootRenderer_37; }
    if ((token === import80.RootRenderer)) { return this._RootRenderer_38; }
    if ((token === import20.DomSanitizer)) { return this._DomSanitizer_39; }
    if ((token === import81.Sanitizer)) { return this._Sanitizer_40; }
    if ((token === import21.ViewUtils)) { return this._ViewUtils_41; }
    if ((token === import82.IterableDiffers)) { return this._IterableDiffers_42; }
    if ((token === import83.KeyValueDiffers)) { return this._KeyValueDiffers_43; }
    if ((token === import18.SharedStylesHost)) { return this._SharedStylesHost_44; }
    if ((token === import22.Title)) { return this._Title_45; }
    if ((token === import23.BrowserXhr)) { return this._BrowserXhr_46; }
    if ((token === import24.ResponseOptions)) { return this._ResponseOptions_47; }
    if ((token === import84.XSRFStrategy)) { return this._XSRFStrategy_48; }
    if ((token === import25.XHRBackend)) { return this._XHRBackend_49; }
    if ((token === import26.RequestOptions)) { return this._RequestOptions_50; }
    if ((token === import85.Http)) { return this._Http_51; }
    if ((token === import27.RadioControlRegistry)) { return this._RadioControlRegistry_52; }
    if ((token === import28.FormBuilder)) { return this._FormBuilder_53; }
    if ((token === import86.AppRootToken)) { return this._AppRootToken_54; }
    if ((token === import67.DeepLinkConfigToken)) { return this._DeepLinkConfigToken_55; }
    if ((token === import29.ActionSheetController)) { return this._ActionSheetController_56; }
    if ((token === import30.AlertController)) { return this._AlertController_57; }
    if ((token === import31.Events)) { return this._Events_58; }
    if ((token === import32.Form)) { return this._Form_59; }
    if ((token === import33.GestureController)) { return this._GestureController_60; }
    if ((token === import34.Keyboard)) { return this._Keyboard_61; }
    if ((token === import35.LoadingController)) { return this._LoadingController_62; }
    if ((token === import66.LocationStrategy)) { return this._LocationStrategy_63; }
    if ((token === import36.Location)) { return this._Location_64; }
    if ((token === import37.MenuController)) { return this._MenuController_65; }
    if ((token === import38.ModalController)) { return this._ModalController_66; }
    if ((token === import39.PickerController)) { return this._PickerController_67; }
    if ((token === import40.PopoverController)) { return this._PopoverController_68; }
    if ((token === import41.TapClick)) { return this._TapClick_69; }
    if ((token === import42.ToastController)) { return this._ToastController_70; }
    if ((token === import43.Translate)) { return this._Translate_71; }
    if ((token === import44.TransitionController)) { return this._TransitionController_72; }
    if ((token === import67.UrlSerializer)) { return this._UrlSerializer_73; }
    if ((token === import68.DeepLinker)) { return this._DeepLinker_74; }
    if ((token === import9.CloudSettingsToken)) { return this._CloudSettingsToken_75; }
    if ((token === import9.DIContainer)) { return this._DIContainer_76; }
    if ((token === import9.Auth)) { return this._Auth_77; }
    if ((token === import9.Client)) { return this._Client_78; }
    if ((token === import9.Config)) { return this._Config_79; }
    if ((token === import9.Deploy)) { return this._Deploy_80; }
    if ((token === import9.Push)) { return this._Push_81; }
    if ((token === import9.User)) { return this._User_82; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__27.ngOnDestroy();
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);
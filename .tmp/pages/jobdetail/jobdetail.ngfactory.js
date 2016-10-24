/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './jobdetail';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/navigation/nav-params';
import * as import10 from '@angular/http/src/http';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from 'ionic-angular/components/content/content';
import * as import14 from 'ionic-angular/components/refresher/refresher';
import * as import15 from 'ionic-angular/components/refresher/refresher-content';
import * as import16 from 'ionic-angular/components/card/card';
import * as import17 from '@angular/common/src/directives/ng_for';
import * as import18 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import19 from 'ionic-angular/config/config';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from 'ionic-angular/components/app/app';
import * as import22 from 'ionic-angular/util/keyboard';
import * as import23 from '@angular/core/src/zone/ng_zone';
import * as import24 from 'ionic-angular/navigation/view-controller';
import * as import25 from 'ionic-angular/components/tabs/tabs';
import * as import26 from 'ionic-angular/gestures/gesture-controller';
import * as import27 from '../../node_modules/ionic-angular/components/refresher/refresher-content.ngfactory';
import * as import28 from '@angular/core/src/linker/template_ref';
import * as import29 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import30 from '@angular/core/src/security';
import * as import31 from 'ionic-angular/components/grid/grid';
var renderType_JobDetailPage_Host = null;
var _View_JobDetailPage_Host0 = (function (_super) {
    __extends(_View_JobDetailPage_Host0, _super);
    function _View_JobDetailPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobDetailPage_Host0, renderType_JobDetailPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_JobDetailPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-jobdetail', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_JobDetailPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._JobDetailPage_0_4 = new import3.JobDetailPage(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.NavParams), this.parentInjector.get(import10.Http));
        this._appEl_0.initComponent(this._JobDetailPage_0_4, [], compView_0);
        compView_0.create(this._JobDetailPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_JobDetailPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.JobDetailPage) && (0 === requestNodeIndex))) {
            return this._JobDetailPage_0_4;
        }
        return notFoundResult;
    };
    return _View_JobDetailPage_Host0;
}(import1.AppView));
function viewFactory_JobDetailPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_JobDetailPage_Host === null)) {
        (renderType_JobDetailPage_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_JobDetailPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var JobDetailPageNgFactory = new import12.ComponentFactory('page-jobdetail', viewFactory_JobDetailPage_Host0, import3.JobDetailPage);
var styles_JobDetailPage = [];
var renderType_JobDetailPage = null;
var _View_JobDetailPage0 = (function (_super) {
    __extends(_View_JobDetailPage0, _super);
    function _View_JobDetailPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobDetailPage0, renderType_JobDetailPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_JobDetailPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import18.viewFactory_Content0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Content_0_4 = new import13.Content(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import21.App), this.parentInjector.get(import22.Keyboard), this.parentInjector.get(import23.NgZone), this.parentInjector.get(import24.ViewController, null), this.parentInjector.get(import25.Tabs, null));
        this._appEl_0.initComponent(this._Content_0_4, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n  ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-refresher', null);
        this._Refresher_2_3 = new import14.Refresher(this._Content_0_4, this.parentInjector.get(import23.NgZone), this.parentInjector.get(import26.GestureController));
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'ion-refresher-content', null);
        this.renderer.setElementAttribute(this._el_4, 'pullingIcon', 'arrow-dropdown');
        this.renderer.setElementAttribute(this._el_4, 'pullingText', 'Pull to refresh');
        this.renderer.setElementAttribute(this._el_4, 'refreshingSpinner', 'circles');
        this.renderer.setElementAttribute(this._el_4, 'refreshingText', 'Refreshing...');
        this.renderer.setElementAttribute(this._el_4, 'refreshingicon', 'refresher-pulling-icon');
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import27.viewFactory_RefresherContent0(this.viewUtils, this.injector(4), this._appEl_4);
        this._RefresherContent_4_4 = new import15.RefresherContent(this._Refresher_2_3, this.parentInjector.get(import19.Config));
        this._appEl_4.initComponent(this._RefresherContent_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n    ', null);
        compView_4.create(this._RefresherContent_4_4, [], null);
        this._text_6 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_7 = this.renderer.createText(null, '\n', null);
        this._el_8 = this.renderer.createElement(null, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_8, 'class', 'jobdetail');
        this._appEl_8 = new import2.AppElement(8, 0, this, this._el_8);
        var compView_8 = import18.viewFactory_Content0(this.viewUtils, this.injector(8), this._appEl_8);
        this._Content_8_4 = new import13.Content(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_8), this.renderer, this.parentInjector.get(import21.App), this.parentInjector.get(import22.Keyboard), this.parentInjector.get(import23.NgZone), this.parentInjector.get(import24.ViewController, null), this.parentInjector.get(import25.Tabs, null));
        this._appEl_8.initComponent(this._Content_8_4, [], compView_8);
        this._text_9 = this.renderer.createText(null, '\n  ', null);
        this._el_10 = this.renderer.createElement(null, 'ion-card', null);
        this._Card_10_3 = new import16.Card(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_10), this.renderer);
        this._text_11 = this.renderer.createText(this._el_10, '\n    ', null);
        this._el_12 = this.renderer.createElement(this._el_10, 'ion-card-content', null);
        this._CardContent_12_3 = new import16.CardContent();
        this._text_13 = this.renderer.createText(this._el_12, '\n      ', null);
        this._anchor_14 = this.renderer.createTemplateAnchor(this._el_12, null);
        this._appEl_14 = new import2.AppElement(14, 12, this, this._anchor_14);
        this._TemplateRef_14_5 = new import28.TemplateRef_(this._appEl_14, viewFactory_JobDetailPage1);
        this._NgFor_14_6 = new import17.NgFor(this._appEl_14.vcRef, this._TemplateRef_14_5, this.parentInjector.get(import29.IterableDiffers), this.ref);
        this._text_15 = this.renderer.createText(this._el_12, '\n    ', null);
        this._text_16 = this.renderer.createText(this._el_10, '\n  ', null);
        this._text_17 = this.renderer.createText(null, '\n', null);
        compView_8.create(this._Content_8_4, [
            [],
            [].concat([
                this._text_9,
                this._el_10,
                this._text_17
            ]),
            []
        ], null);
        this._text_18 = this.renderer.createText(null, '\n', null);
        compView_0.create(this._Content_0_4, [
            [],
            [].concat([
                this._text_1,
                this._text_7,
                this._el_8,
                this._text_18
            ]),
            [].concat([this._el_2])
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_2, 'ionRefresh', this.eventHandler(this._handle_ionRefresh_2_0.bind(this)));
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        var subscription_0 = this._Refresher_2_3.ionRefresh.subscribe(this.eventHandler(this._handle_ionRefresh_2_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._anchor_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._text_18
        ], [disposable_0], [subscription_0]);
        return null;
    };
    _View_JobDetailPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.RefresherContent) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._RefresherContent_4_4;
        }
        if (((token === import14.Refresher) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Refresher_2_3;
        }
        if (((token === import28.TemplateRef) && (14 === requestNodeIndex))) {
            return this._TemplateRef_14_5;
        }
        if (((token === import17.NgFor) && (14 === requestNodeIndex))) {
            return this._NgFor_14_6;
        }
        if (((token === import16.CardContent) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._CardContent_12_3;
        }
        if (((token === import16.Card) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._Card_10_3;
        }
        if (((token === import13.Content) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._Content_8_4;
        }
        if (((token === import13.Content) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._Content_0_4;
        }
        return notFoundResult;
    };
    _View_JobDetailPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_0_4.ngOnInit();
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Refresher_2_3.ngOnInit();
        }
        var currVal_4 = 'arrow-dropdown';
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._RefresherContent_4_4.pullingIcon = currVal_4;
            this._expr_4 = currVal_4;
        }
        var currVal_5 = 'Pull to refresh';
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._RefresherContent_4_4.pullingText = currVal_5;
            this._expr_5 = currVal_5;
        }
        var currVal_6 = 'circles';
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._RefresherContent_4_4.refreshingSpinner = currVal_6;
            this._expr_6 = currVal_6;
        }
        var currVal_7 = 'Refreshing...';
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this._RefresherContent_4_4.refreshingText = currVal_7;
            this._expr_7 = currVal_7;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._RefresherContent_4_4.ngOnInit();
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_8_4.ngOnInit();
        }
        changes = null;
        var currVal_10 = this.context.items;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this._NgFor_14_6.ngForOf = currVal_10;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_10, currVal_10);
            this._expr_10 = currVal_10;
        }
        if ((changes !== null)) {
            this._NgFor_14_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_14_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = this._Content_0_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementClass(this._el_0, 'statusbar-padding', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_2 = (this._Refresher_2_3.state !== 'inactive');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_2, 'refresher-active', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this._Refresher_2_3._top;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementStyle(this._el_2, 'top', ((this.viewUtils.sanitizer.sanitize(import30.SecurityContext.STYLE, currVal_3) == null) ? null : this.viewUtils.sanitizer.sanitize(import30.SecurityContext.STYLE, currVal_3).toString()));
            this._expr_3 = currVal_3;
        }
        var currVal_8 = this._RefresherContent_4_4.r.state;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementAttribute(this._el_4, 'state', ((currVal_8 == null) ? null : currVal_8.toString()));
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._Content_8_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_8, 'statusbar-padding', currVal_9);
            this._expr_9 = currVal_9;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_JobDetailPage0.prototype.destroyInternal = function () {
        this._Refresher_2_3.ngOnDestroy();
        this._Content_8_4.ngOnDestroy();
        this._Content_0_4.ngOnDestroy();
    };
    _View_JobDetailPage0.prototype._handle_ionRefresh_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.doRefresh($event) !== false);
        return (true && pd_0);
    };
    return _View_JobDetailPage0;
}(import1.AppView));
export function viewFactory_JobDetailPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_JobDetailPage === null)) {
        (renderType_JobDetailPage = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, styles_JobDetailPage, {}));
    }
    return new _View_JobDetailPage0(viewUtils, parentInjector, declarationEl);
}
var _View_JobDetailPage1 = (function (_super) {
    __extends(_View_JobDetailPage1, _super);
    function _View_JobDetailPage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JobDetailPage1, renderType_JobDetailPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_JobDetailPage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-grid', null);
        this._Grid_0_3 = new import31.Grid();
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-row', null);
        this._Row_2_3 = new import31.Row();
        this._text_3 = this.renderer.createText(this._el_2, '\n          ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_4, 'width-33', '');
        this._Col_4_3 = new import31.Col();
        this._text_5 = this.renderer.createText(this._el_4, 'Job no.', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n          ', null);
        this._el_7 = this.renderer.createElement(this._el_2, 'ion-col', null);
        this._Col_7_3 = new import31.Col();
        this._text_8 = this.renderer.createText(this._el_7, '', null);
        this._el_9 = this.renderer.createElement(this._el_2, 'ion-col', null);
        this._Col_9_3 = new import31.Col();
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this._text_11 = this.renderer.createText(this._el_2, '\n        ', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_13 = this.renderer.createElement(this._el_0, 'ion-row', null);
        this._Row_13_3 = new import31.Row();
        this._text_14 = this.renderer.createText(this._el_13, '\n          ', null);
        this._el_15 = this.renderer.createElement(this._el_13, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_15, 'width-33', '');
        this._Col_15_3 = new import31.Col();
        this._text_16 = this.renderer.createText(this._el_15, 'หัวข้องาน', null);
        this._text_17 = this.renderer.createText(this._el_13, '\n          ', null);
        this._el_18 = this.renderer.createElement(this._el_13, 'ion-col', null);
        this._Col_18_3 = new import31.Col();
        this._text_19 = this.renderer.createText(this._el_18, '', null);
        this._text_20 = this.renderer.createText(this._el_13, '\n        ', null);
        this._text_21 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_22 = this.renderer.createElement(this._el_0, 'ion-row', null);
        this._Row_22_3 = new import31.Row();
        this._text_23 = this.renderer.createText(this._el_22, '\n          ', null);
        this._el_24 = this.renderer.createElement(this._el_22, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_24, 'width-33', '');
        this._Col_24_3 = new import31.Col();
        this._text_25 = this.renderer.createText(this._el_24, 'ทำงานวันที่', null);
        this._text_26 = this.renderer.createText(this._el_22, '\n          ', null);
        this._el_27 = this.renderer.createElement(this._el_22, 'ion-col', null);
        this._Col_27_3 = new import31.Col();
        this._text_28 = this.renderer.createText(this._el_27, '', null);
        this._text_29 = this.renderer.createText(this._el_22, '\n        ', null);
        this._text_30 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_31 = this.renderer.createElement(this._el_0, 'ion-row', null);
        this._Row_31_3 = new import31.Row();
        this._text_32 = this.renderer.createText(this._el_31, '\n          ', null);
        this._el_33 = this.renderer.createElement(this._el_31, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_33, 'width-33', '');
        this._Col_33_3 = new import31.Col();
        this._text_34 = this.renderer.createText(this._el_33, 'รายละเอียด', null);
        this._text_35 = this.renderer.createText(this._el_31, '\n          ', null);
        this._el_36 = this.renderer.createElement(this._el_31, 'ion-col', null);
        this._Col_36_3 = new import31.Col();
        this._el_37 = this.renderer.createElement(this._el_36, 'span', null);
        this.renderer.setElementAttribute(this._el_37, 'style', 'white-space:pre-line;');
        this._text_38 = this.renderer.createText(this._el_37, '', null);
        this._text_39 = this.renderer.createText(this._el_31, '\n        ', null);
        this._text_40 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_41 = this.renderer.createElement(this._el_0, 'ion-row', null);
        this._Row_41_3 = new import31.Row();
        this._text_42 = this.renderer.createText(this._el_41, '\n          ', null);
        this._el_43 = this.renderer.createElement(this._el_41, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_43, 'width-33', '');
        this._Col_43_3 = new import31.Col();
        this._text_44 = this.renderer.createText(this._el_43, 'ค่าจ้าง', null);
        this._text_45 = this.renderer.createText(this._el_41, '\n          ', null);
        this._el_46 = this.renderer.createElement(this._el_41, 'ion-col', null);
        this._Col_46_3 = new import31.Col();
        this._text_47 = this.renderer.createText(this._el_46, '', null);
        this._text_48 = this.renderer.createText(this._el_41, '\n        ', null);
        this._text_49 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_50 = this.renderer.createElement(this._el_0, 'ion-row', null);
        this._Row_50_3 = new import31.Row();
        this._text_51 = this.renderer.createText(this._el_50, '\n          ', null);
        this._el_52 = this.renderer.createElement(this._el_50, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_52, 'width-33', '');
        this._Col_52_3 = new import31.Col();
        this._text_53 = this.renderer.createText(this._el_52, 'ผู้ประกาศ', null);
        this._text_54 = this.renderer.createText(this._el_50, '\n          ', null);
        this._el_55 = this.renderer.createElement(this._el_50, 'ion-col', null);
        this._Col_55_3 = new import31.Col();
        this._text_56 = this.renderer.createText(this._el_55, '', null);
        this._text_57 = this.renderer.createText(this._el_50, '\n        ', null);
        this._text_58 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_59 = this.renderer.createElement(this._el_0, 'ion-row', null);
        this._Row_59_3 = new import31.Row();
        this._text_60 = this.renderer.createText(this._el_59, '\n          ', null);
        this._el_61 = this.renderer.createElement(this._el_59, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_61, 'width-33', '');
        this._Col_61_3 = new import31.Col();
        this._text_62 = this.renderer.createText(this._el_61, 'ชื่อเล่น', null);
        this._text_63 = this.renderer.createText(this._el_59, '\n          ', null);
        this._el_64 = this.renderer.createElement(this._el_59, 'ion-col', null);
        this._Col_64_3 = new import31.Col();
        this._text_65 = this.renderer.createText(this._el_64, '', null);
        this._text_66 = this.renderer.createText(this._el_59, '\n        ', null);
        this._text_67 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_68 = this.renderer.createElement(this._el_0, 'ion-row', null);
        this._Row_68_3 = new import31.Row();
        this._text_69 = this.renderer.createText(this._el_68, '\n          ', null);
        this._el_70 = this.renderer.createElement(this._el_68, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_70, 'width-33', '');
        this._Col_70_3 = new import31.Col();
        this._text_71 = this.renderer.createText(this._el_70, 'เบอร์ติดต่อ', null);
        this._text_72 = this.renderer.createText(this._el_68, '\n          ', null);
        this._el_73 = this.renderer.createElement(this._el_68, 'ion-col', null);
        this._Col_73_3 = new import31.Col();
        this._text_74 = this.renderer.createText(this._el_73, '', null);
        this._text_75 = this.renderer.createText(this._el_68, '\n        ', null);
        this._text_76 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_77 = this.renderer.createElement(this._el_0, 'ion-row', null);
        this._Row_77_3 = new import31.Row();
        this._text_78 = this.renderer.createText(this._el_77, '\n          ', null);
        this._el_79 = this.renderer.createElement(this._el_77, 'ion-col', null);
        this.renderer.setElementAttribute(this._el_79, 'width-33', '');
        this._Col_79_3 = new import31.Col();
        this._text_80 = this.renderer.createText(this._el_79, 'LINE', null);
        this._text_81 = this.renderer.createText(this._el_77, '\n          ', null);
        this._el_82 = this.renderer.createElement(this._el_77, 'ion-col', null);
        this._Col_82_3 = new import31.Col();
        this._el_83 = this.renderer.createElement(this._el_82, 'a', null);
        this._text_84 = this.renderer.createText(this._el_83, '', null);
        this._text_85 = this.renderer.createText(this._el_77, '\n        ', null);
        this._text_86 = this.renderer.createText(this._el_0, '\n\n\n      ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._el_36,
            this._el_37,
            this._text_38,
            this._text_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._text_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._el_52,
            this._text_53,
            this._text_54,
            this._el_55,
            this._text_56,
            this._text_57,
            this._text_58,
            this._el_59,
            this._text_60,
            this._el_61,
            this._text_62,
            this._text_63,
            this._el_64,
            this._text_65,
            this._text_66,
            this._text_67,
            this._el_68,
            this._text_69,
            this._el_70,
            this._text_71,
            this._text_72,
            this._el_73,
            this._text_74,
            this._text_75,
            this._text_76,
            this._el_77,
            this._text_78,
            this._el_79,
            this._text_80,
            this._text_81,
            this._el_82,
            this._el_83,
            this._text_84,
            this._text_85,
            this._text_86
        ], [], []);
        return null;
    };
    _View_JobDetailPage1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import31.Col) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._Col_4_3;
        }
        if (((token === import31.Col) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Col_7_3;
        }
        if (((token === import31.Col) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._Col_9_3;
        }
        if (((token === import31.Row) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._Row_2_3;
        }
        if (((token === import31.Col) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._Col_15_3;
        }
        if (((token === import31.Col) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._Col_18_3;
        }
        if (((token === import31.Row) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._Row_13_3;
        }
        if (((token === import31.Col) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._Col_24_3;
        }
        if (((token === import31.Col) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._Col_27_3;
        }
        if (((token === import31.Row) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._Row_22_3;
        }
        if (((token === import31.Col) && ((33 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._Col_33_3;
        }
        if (((token === import31.Col) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._Col_36_3;
        }
        if (((token === import31.Row) && ((31 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._Row_31_3;
        }
        if (((token === import31.Col) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 44)))) {
            return this._Col_43_3;
        }
        if (((token === import31.Col) && ((46 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._Col_46_3;
        }
        if (((token === import31.Row) && ((41 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._Row_41_3;
        }
        if (((token === import31.Col) && ((52 <= requestNodeIndex) && (requestNodeIndex <= 53)))) {
            return this._Col_52_3;
        }
        if (((token === import31.Col) && ((55 <= requestNodeIndex) && (requestNodeIndex <= 56)))) {
            return this._Col_55_3;
        }
        if (((token === import31.Row) && ((50 <= requestNodeIndex) && (requestNodeIndex <= 57)))) {
            return this._Row_50_3;
        }
        if (((token === import31.Col) && ((61 <= requestNodeIndex) && (requestNodeIndex <= 62)))) {
            return this._Col_61_3;
        }
        if (((token === import31.Col) && ((64 <= requestNodeIndex) && (requestNodeIndex <= 65)))) {
            return this._Col_64_3;
        }
        if (((token === import31.Row) && ((59 <= requestNodeIndex) && (requestNodeIndex <= 66)))) {
            return this._Row_59_3;
        }
        if (((token === import31.Col) && ((70 <= requestNodeIndex) && (requestNodeIndex <= 71)))) {
            return this._Col_70_3;
        }
        if (((token === import31.Col) && ((73 <= requestNodeIndex) && (requestNodeIndex <= 74)))) {
            return this._Col_73_3;
        }
        if (((token === import31.Row) && ((68 <= requestNodeIndex) && (requestNodeIndex <= 75)))) {
            return this._Row_68_3;
        }
        if (((token === import31.Col) && ((79 <= requestNodeIndex) && (requestNodeIndex <= 80)))) {
            return this._Col_79_3;
        }
        if (((token === import31.Col) && ((82 <= requestNodeIndex) && (requestNodeIndex <= 84)))) {
            return this._Col_82_3;
        }
        if (((token === import31.Row) && ((77 <= requestNodeIndex) && (requestNodeIndex <= 85)))) {
            return this._Row_77_3;
        }
        if (((token === import31.Grid) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 86)))) {
            return this._Grid_0_3;
        }
        return notFoundResult;
    };
    _View_JobDetailPage1.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '', this.context.$implicit.j_id, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_8, currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = import4.interpolate(1, 'ต้องการ ', this.context.$implicit.j_type, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_10, currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = import4.interpolate(1, '', this.context.$implicit.j_title, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_19, currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = import4.interpolate(1, '', this.context.$implicit.j_workdate, '');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_28, currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(1, '', this.context.$implicit.j_desc, '');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_38, currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = import4.interpolate(1, '', this.context.$implicit.j_cost, ' บาท');
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_47, currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = import4.interpolate(1, '', this.context.$implicit.j_name, '');
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setText(this._text_56, currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = import4.interpolate(1, '', this.context.$implicit.j_nickname, '');
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_65, currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = import4.interpolate(1, '', this.context.$implicit.j_tel, '');
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setText(this._text_74, currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = import4.interpolate(1, 'http://line.me/ti/p/~', this.context.$implicit.j_line, '');
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementProperty(this._el_83, 'href', this.viewUtils.sanitizer.sanitize(import30.SecurityContext.URL, currVal_9));
            this._expr_9 = currVal_9;
        }
        var currVal_10 = import4.interpolate(1, '', this.context.$implicit.j_line, '');
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setText(this._text_84, currVal_10);
            this._expr_10 = currVal_10;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_JobDetailPage1;
}(import1.AppView));
function viewFactory_JobDetailPage1(viewUtils, parentInjector, declarationEl) {
    return new _View_JobDetailPage1(viewUtils, parentInjector, declarationEl);
}
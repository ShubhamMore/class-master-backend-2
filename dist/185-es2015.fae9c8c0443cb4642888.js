(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[185],{

/***/ "./src/app/institute/branch/manage-branch/discount-and-offer/discount-and-offer-routing.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/institute/branch/manage-branch/discount-and-offer/discount-and-offer-routing.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: DiscountAndOfferRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountAndOfferRoutingModule", function() { return DiscountAndOfferRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _discount_and_offer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./discount-and-offer.component */ "./src/app/institute/branch/manage-branch/discount-and-offer/discount-and-offer.component.ts");





const routes = [
    {
        path: '',
        component: _discount_and_offer_component__WEBPACK_IMPORTED_MODULE_2__["DiscountAndOfferComponent"],
        children: [
            {
                path: 'manage',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(186)]).then(__webpack_require__.bind(null, /*! ./manage-discount-and-offer/manage-discount-and-offer.module */ "./src/app/institute/branch/manage-branch/discount-and-offer/manage-discount-and-offer/manage-discount-and-offer.module.ts")).then((m) => m.ManageDiscountAndOfferModule),
            },
            {
                path: 'add',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(31)]).then(__webpack_require__.bind(null, /*! ./add-discount-and-offer/add-discount-and-offer.module */ "./src/app/institute/branch/manage-branch/discount-and-offer/add-discount-and-offer/add-discount-and-offer.module.ts")).then((m) => m.AddDiscountAndOfferModule),
            },
            {
                path: 'edit',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(31)]).then(__webpack_require__.bind(null, /*! ./add-discount-and-offer/add-discount-and-offer.module */ "./src/app/institute/branch/manage-branch/discount-and-offer/add-discount-and-offer/add-discount-and-offer.module.ts")).then((m) => m.AddDiscountAndOfferModule),
            },
            {
                path: '',
                redirectTo: 'manage',
                pathMatch: 'full',
            },
            {
                path: 'page-not-found',
                loadChildren: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then((m) => m.PageNotFoundModule),
            },
            {
                path: '**',
                redirectTo: 'page-not-found',
                pathMatch: 'full',
            },
        ],
    },
];
let DiscountAndOfferRoutingModule = /*@__PURE__*/ (() => {
    class DiscountAndOfferRoutingModule {
    }
    DiscountAndOfferRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DiscountAndOfferRoutingModule });
    DiscountAndOfferRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DiscountAndOfferRoutingModule_Factory(t) { return new (t || DiscountAndOfferRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return DiscountAndOfferRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DiscountAndOfferRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/institute/branch/manage-branch/discount-and-offer/discount-and-offer.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/institute/branch/manage-branch/discount-and-offer/discount-and-offer.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DiscountAndOfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountAndOfferComponent", function() { return DiscountAndOfferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let DiscountAndOfferComponent = /*@__PURE__*/ (() => {
    class DiscountAndOfferComponent {
        constructor() { }
        ngOnInit() { }
    }
    DiscountAndOfferComponent.ɵfac = function DiscountAndOfferComponent_Factory(t) { return new (t || DiscountAndOfferComponent)(); };
    DiscountAndOfferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiscountAndOfferComponent, selectors: [["ngx-discount-and-offer"]], decls: 1, vars: 0, template: function DiscountAndOfferComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [""] });
    return DiscountAndOfferComponent;
})();


/***/ }),

/***/ "./src/app/institute/branch/manage-branch/discount-and-offer/discount-and-offer.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/institute/branch/manage-branch/discount-and-offer/discount-and-offer.module.ts ***!
  \************************************************************************************************/
/*! exports provided: DiscountAndOfferModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountAndOfferModule", function() { return DiscountAndOfferModule; });
/* harmony import */ var _discount_and_offer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discount-and-offer.component */ "./src/app/institute/branch/manage-branch/discount-and-offer/discount-and-offer.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _discount_and_offer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discount-and-offer-routing.module */ "./src/app/institute/branch/manage-branch/discount-and-offer/discount-and-offer-routing.module.ts");





let DiscountAndOfferModule = /*@__PURE__*/ (() => {
    class DiscountAndOfferModule {
    }
    DiscountAndOfferModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DiscountAndOfferModule });
    DiscountAndOfferModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DiscountAndOfferModule_Factory(t) { return new (t || DiscountAndOfferModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _discount_and_offer_routing_module__WEBPACK_IMPORTED_MODULE_3__["DiscountAndOfferRoutingModule"]]] });
    return DiscountAndOfferModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DiscountAndOfferModule, { declarations: [_discount_and_offer_component__WEBPACK_IMPORTED_MODULE_0__["DiscountAndOfferComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _discount_and_offer_routing_module__WEBPACK_IMPORTED_MODULE_3__["DiscountAndOfferRoutingModule"]] }); })();


/***/ })

}]);
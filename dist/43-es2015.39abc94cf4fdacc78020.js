(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./src/app/content/content-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/content/content-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ContentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRoutingModule", function() { return ContentRoutingModule; });
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _content_component__WEBPACK_IMPORTED_MODULE_0__["ContentComponent"],
        children: [
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() */ 44).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/content/home/home.module.ts")).then((m) => m.HomeModule),
                canActivate: [],
            },
            {
                path: 'login',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(80)]).then(__webpack_require__.bind(null, /*! ../authentication/login/login.module */ "./src/app/authentication/login/login.module.ts")).then((m) => m.LoginModule),
                canActivate: [],
            },
            {
                path: 'register',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e("common"), __webpack_require__.e(51)]).then(__webpack_require__.bind(null, /*! ../authentication/register/register.module */ "./src/app/authentication/register/register.module.ts")).then((m) => m.RegisterModule),
                canActivate: [],
            },
            {
                path: 'forgot-password',
                loadChildren: () => __webpack_require__.e(/*! import() */ 79).then(__webpack_require__.bind(null, /*! ../authentication/forgot-password/forgot-password.module */ "./src/app/authentication/forgot-password/forgot-password.module.ts")).then((m) => m.ForgotPasswordModule),
                canActivate: [],
            },
            {
                path: 'reset-password',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(81)]).then(__webpack_require__.bind(null, /*! ../authentication/reset-password/reset-password.module */ "./src/app/authentication/reset-password/reset-password.module.ts")).then((m) => m.ResetPasswordModule),
                canActivate: [],
            },
            {
                path: 'privacy-policy',
                loadChildren: () => __webpack_require__.e(/*! import() */ 82).then(__webpack_require__.bind(null, /*! ./privacy-policy/privacy-policy.module */ "./src/app/content/privacy-policy/privacy-policy.module.ts")).then((m) => m.PrivacyPolicyModule),
                canActivate: [],
            },
            {
                path: 'terms-and-conditions',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(5), __webpack_require__.e(83)]).then(__webpack_require__.bind(null, /*! ./terms-and-conditions/terms-and-conditions.module */ "./src/app/content/terms-and-conditions/terms-and-conditions.module.ts")).then((m) => m.TermsAndConditionsModule),
                canActivate: [],
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'page-not-found',
                loadChildren: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then((m) => m.PageNotFoundModule),
            },
            { path: '**', redirectTo: 'page-not-found' },
        ],
    },
];
let ContentRoutingModule = /*@__PURE__*/ (() => {
    class ContentRoutingModule {
    }
    ContentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ContentRoutingModule });
    ContentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ContentRoutingModule_Factory(t) { return new (t || ContentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return ContentRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _layout_component_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-component/content-header/content-header.component */ "./src/app/content/layout-component/content-header/content-header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_component_content_footer_content_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout-component/content-footer/content-footer.component */ "./src/app/content/layout-component/content-footer/content-footer.component.ts");






let ContentComponent = /*@__PURE__*/ (() => {
    class ContentComponent {
        constructor() { }
        ngOnInit() { }
    }
    ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(); };
    ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["ngx-content"]], decls: 7, vars: 0, consts: [[1, "p-0"]], template: function ContentComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-content-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-layout-column", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-layout-footer");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ngx-content-footer");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutHeaderComponent"], _layout_component_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_2__["ContentHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutFooterComponent"], _layout_component_content_footer_content_footer_component__WEBPACK_IMPORTED_MODULE_4__["ContentFooterComponent"]], styles: [""] });
    return ContentComponent;
})();


/***/ }),

/***/ "./src/app/content/content.module.ts":
/*!*******************************************!*\
  !*** ./src/app/content/content.module.ts ***!
  \*******************************************/
/*! exports provided: ContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentModule", function() { return ContentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _content_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-routing.module */ "./src/app/content/content-routing.module.ts");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _layout_component_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout-component/content-header/content-header.component */ "./src/app/content/layout-component/content-header/content-header.component.ts");
/* harmony import */ var _layout_component_content_footer_content_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout-component/content-footer/content-footer.component */ "./src/app/content/layout-component/content-footer/content-footer.component.ts");








let ContentModule = /*@__PURE__*/ (() => {
    class ContentModule {
    }
    ContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContentModule });
    ContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContentModule_Factory(t) { return new (t || ContentModule)(); }, imports: [[_content_routing_module__WEBPACK_IMPORTED_MODULE_1__["ContentRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"]]] });
    return ContentModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContentModule, { declarations: [_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"], _layout_component_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_5__["ContentHeaderComponent"], _layout_component_content_footer_content_footer_component__WEBPACK_IMPORTED_MODULE_6__["ContentFooterComponent"]], imports: [_content_routing_module__WEBPACK_IMPORTED_MODULE_1__["ContentRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"]] }); })();


/***/ }),

/***/ "./src/app/content/layout-component/content-footer/content-footer.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/content/layout-component/content-footer/content-footer.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ContentFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentFooterComponent", function() { return ContentFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let ContentFooterComponent = /*@__PURE__*/ (() => {
    class ContentFooterComponent {
        constructor() { }
        ngOnInit() { }
    }
    ContentFooterComponent.ɵfac = function ContentFooterComponent_Factory(t) { return new (t || ContentFooterComponent)(); };
    ContentFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentFooterComponent, selectors: [["ngx-content-footer"]], decls: 12, vars: 0, consts: [[1, "created-by"], ["href", "https://www.google.com", "target", "_blank"], ["routerLink", "/terms-and-conditions", 1, "pointer"], ["routerLink", "/privacy-policy", 1, "pointer"]], template: function ContentFooterComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Created with \u2665 by Class Master ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CLASS MASTER");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " 2020\n");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Terms & Conditions");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u00A0|\u00A0 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Privacy Policy");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".nb-theme-default   [_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media (max-width: 575.98px) {\n  .nb-theme-default   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n\n.nb-theme-dark   [_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media (max-width: 575.98px) {\n  .nb-theme-dark   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media (max-width: 575.98px) {\n  .nb-theme-cosmic   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n\n.nb-theme-corporate   [_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media (max-width: 575.98px) {\n  .nb-theme-corporate   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}"] });
    return ContentFooterComponent;
})();


/***/ }),

/***/ "./src/app/content/layout-component/content-header/content-header.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/content/layout-component/content-header/content-header.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ContentHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentHeaderComponent", function() { return ContentHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");




let ContentHeaderComponent = /*@__PURE__*/ (() => {
    class ContentHeaderComponent {
        constructor() { }
        ngOnInit() { }
    }
    ContentHeaderComponent.ɵfac = function ContentHeaderComponent_Factory(t) { return new (t || ContentHeaderComponent)(); };
    ContentHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentHeaderComponent, selectors: [["ngx-content-header"]], decls: 15, vars: 0, consts: [[1, "header-container"], [1, "logo-container"], ["routerLink", "/", 1, "logo", "pointer"], ["src", "../../../../assets/brand/class-master.png", "width", "60%", "alt", "IMS Master"], ["id", "home", "routerLink", "/", 1, "control-item"], [1, "pointer"], ["id", "login", "routerLink", "/login", 1, "control-item"], ["id", "register", "routerLink", "/register", 1, "control-item"]], template: function ContentHeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-actions");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-action", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-action", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-action", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Register");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionComponent"]], styles: [".nb-theme-default   [_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.nb-theme-default   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: calc(16rem - 1.25rem);\n}\n.nb-theme-default   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%] {\n  height: auto;\n  display: flex;\n  align-content: center;\n}\n.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: auto;\n}\n.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 0 1.25rem;\n  font-size: 1.75rem;\n  white-space: nowrap;\n  text-decoration: none;\n}\n@media (max-width: 767.98px) {\n  .nb-theme-default   [_nghost-%COMP%]   #home[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   #register[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.nb-theme-dark   [_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.nb-theme-dark   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: calc(16rem - 1.25rem);\n}\n.nb-theme-dark   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%] {\n  height: auto;\n  display: flex;\n  align-content: center;\n}\n.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: auto;\n}\n.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 0 1.25rem;\n  font-size: 1.75rem;\n  white-space: nowrap;\n  text-decoration: none;\n}\n@media (max-width: 767.98px) {\n  .nb-theme-dark   [_nghost-%COMP%]   #home[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   #register[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: calc(16rem - 1.25rem);\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%] {\n  height: auto;\n  display: flex;\n  align-content: center;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: auto;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 0 1.25rem;\n  font-size: 1.75rem;\n  white-space: nowrap;\n  text-decoration: none;\n}\n@media (max-width: 767.98px) {\n  .nb-theme-cosmic   [_nghost-%COMP%]   #home[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   #register[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.nb-theme-corporate   [_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: calc(16rem - 1.25rem);\n}\n.nb-theme-corporate   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%] {\n  height: auto;\n  display: flex;\n  align-content: center;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: auto;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 0 1.25rem;\n  font-size: 1.75rem;\n  white-space: nowrap;\n  text-decoration: none;\n}\n@media (max-width: 767.98px) {\n  .nb-theme-corporate   [_nghost-%COMP%]   #home[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   #register[_ngcontent-%COMP%] {\n    display: none;\n  }\n}"] });
    return ContentHeaderComponent;
})();


/***/ })

}]);
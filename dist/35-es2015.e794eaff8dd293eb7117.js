(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./src/app/admin/admin-menu.ts":
/*!*************************************!*\
  !*** ./src/app/admin/admin-menu.ts ***!
  \*************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
const MENU_ITEMS = [
    // 1
    {
        title: 'Home',
        icon: 'home',
        link: '/admin/home',
        home: true,
        hidden: false,
    },
    // 2
    {
        title: 'Institutes',
        icon: '',
        link: '/admin/institutes',
        hidden: false,
    },
    // 3
    {
        title: 'Membership Plans',
        icon: '',
        link: '/admin/membership-plans',
        hidden: false,
    },
    // 4
    {
        title: 'Coupon Codes',
        icon: '',
        link: '/admin/coupon',
        hidden: false,
    },
    // 5
    {
        title: 'Users',
        icon: '',
        link: '/admin/users',
        hidden: false,
    },
    // 6
    {
        title: 'Setting',
        icon: '',
        link: '/admin/settings',
        hidden: false,
    },
];


/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_0__["AdminComponent"],
        children: [
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() */ 46).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/admin/home/home.module.ts")).then((m) => m.HomeModule),
                canActivate: [],
            },
            {
                path: 'institutes',
                loadChildren: () => __webpack_require__.e(/*! import() */ 65).then(__webpack_require__.bind(null, /*! ./institutes/institutes.module */ "./src/app/admin/institutes/institutes.module.ts")).then((m) => m.InstitutesModule),
                canActivate: [],
            },
            {
                path: 'coupon',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(45)]).then(__webpack_require__.bind(null, /*! ./coupon/coupon.module */ "./src/app/admin/coupon/coupon.module.ts")).then((m) => m.CouponModule),
                canActivate: [],
            },
            {
                path: 'membership-plans',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(48)]).then(__webpack_require__.bind(null, /*! ./membership-plans/membership-plans.module */ "./src/app/admin/membership-plans/membership-plans.module.ts")).then((m) => m.MembershipPlansModule),
                canActivate: [],
            },
            {
                path: 'settings',
                loadChildren: () => __webpack_require__.e(/*! import() */ 66).then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "./src/app/admin/settings/settings.module.ts")).then((m) => m.SettingsModule),
                canActivate: [],
            },
            {
                path: 'users',
                loadChildren: () => __webpack_require__.e(/*! import() */ 67).then(__webpack_require__.bind(null, /*! ./users/users.module */ "./src/app/admin/users/users.module.ts")).then((m) => m.UsersModule),
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
            {
                path: '**',
                redirectTo: 'page-not-found',
                pathMatch: 'full',
            },
        ],
    },
];
let AdminRoutingModule = /*@__PURE__*/ (() => {
    class AdminRoutingModule {
    }
    AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
    AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return AdminRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.service */ "./src/app/admin/menu.service.ts");
/* harmony import */ var _theme_layouts_one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@theme/layouts/one-column/one-column.layout */ "./src/app/@theme/layouts/one-column/one-column.layout.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let AdminComponent = /*@__PURE__*/ (() => {
    class AdminComponent {
        constructor(menuService) {
            this.menuService = menuService;
            this.menu = [];
        }
        ngOnInit() {
            this.menuService.setMenuItemSequence();
            this.menu = this.menuService.getMenuItems();
        }
    }
    AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"])); };
    AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["ngx-admin"]], decls: 3, vars: 1, consts: [[3, "items"]], template: function AdminComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-one-column-layout");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-menu", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.menu);
            }
        }, directives: [_theme_layouts_one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_2__["OneColumnLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".nb-theme-default   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@-webkit-keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.nb-theme-dark   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.nb-theme-corporate   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}"] });
    return AdminComponent;
})();


/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/user.service */ "./src/app/admin/services/user.service.ts");
/* harmony import */ var _services_institute_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/institute.service */ "./src/app/admin/services/institute.service.ts");
/* harmony import */ var _services_admin_zoom_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/admin-zoom.service */ "./src/app/admin/services/admin-zoom.service.ts");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.service */ "./src/app/admin/menu.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");











let AdminModule = /*@__PURE__*/ (() => {
    class AdminModule {
    }
    AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AdminModule });
    AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, providers: [_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"], _services_admin_zoom_service__WEBPACK_IMPORTED_MODULE_2__["AdminZoomService"], _services_institute_service__WEBPACK_IMPORTED_MODULE_1__["InstituteService"], _services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbMenuModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_8__["AdminRoutingModule"]]] });
    return AdminModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbMenuModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_8__["AdminRoutingModule"]] }); })();


/***/ }),

/***/ "./src/app/admin/menu.service.ts":
/*!***************************************!*\
  !*** ./src/app/admin/menu.service.ts ***!
  \***************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _admin_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-menu */ "./src/app/admin/admin-menu.ts");



let MenuService = /*@__PURE__*/ (() => {
    class MenuService {
        constructor() {
            this.menuItems = [];
        }
        getMenuItems() {
            return this.menuItems;
        }
        setMenuItemSequence() {
            this.menuItems = [];
            this.menuItems.push(_admin_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][0]);
            this.menuItems.push(_admin_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][1]);
            this.menuItems.push(_admin_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][2]);
            this.menuItems.push(_admin_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][3]);
            this.menuItems.push(_admin_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][4]);
            this.menuItems.push(_admin_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][5]);
        }
    }
    MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(); };
    MenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac });
    return MenuService;
})();


/***/ }),

/***/ "./src/app/admin/services/admin-zoom.service.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/services/admin-zoom.service.ts ***!
  \******************************************************/
/*! exports provided: AdminZoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminZoomService", function() { return AdminZoomService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let AdminZoomService = /*@__PURE__*/ (() => {
    class AdminZoomService {
        constructor(httpService) {
            this.httpService = httpService;
        }
        saveAdminZoomKeys(keys) {
            const data = {
                api: 'saveAdminZoomKeys',
                data: keys,
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getAdminZoomKeys() {
            const data = {
                api: 'getAdminZoomKeys',
            };
            return this.httpService.httpGet(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getAdminZoomAuthLink() {
            const data = {
                api: 'getAdminZoomAuthLink',
                data: {},
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    AdminZoomService.ɵfac = function AdminZoomService_Factory(t) { return new (t || AdminZoomService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    AdminZoomService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminZoomService, factory: AdminZoomService.ɵfac });
    return AdminZoomService;
})();


/***/ }),

/***/ "./src/app/admin/services/institute.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/services/institute.service.ts ***!
  \*****************************************************/
/*! exports provided: InstituteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstituteService", function() { return InstituteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let InstituteService = /*@__PURE__*/ (() => {
    class InstituteService {
        constructor(httpService) {
            this.httpService = httpService;
            this.institute = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
            this.branch = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }
        getInstitute() {
            return this.institute;
        }
        setInstitute(institute) {
            this.institute.next(institute);
        }
        deleteInstitute() {
            this.institute.next(null);
        }
        getInstituteId() {
            return this.instituteId;
        }
        setInstituteId(id) {
            this.instituteId = id;
        }
        deleteInstituteId() {
            this.instituteId = null;
        }
        getBranch() {
            return this.branch;
        }
        setBranch(branch) {
            this.branch.next(branch);
        }
        deleteBranch() {
            this.branch.next(null);
        }
        getBranchId() {
            return this.branchId;
        }
        setBranchId(id) {
            this.branchId = id;
        }
        deleteBranchId() {
            this.branchId = null;
        }
        getInstitutes() {
            const data = {
                api: 'getInstitutes',
                data: {},
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getInstituteBranches(institute) {
            const data = {
                api: 'getInstituteBranches',
                data: { institute },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getInstituteBranch(branch) {
            const data = {
                api: 'getInstituteBranch',
                data: { branch },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getInstituteBranchHistory(branch) {
            const data = {
                api: 'getInstituteBranchHistory',
                data: { branch },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deactivateInstituteBranch(branch) {
            const data = {
                api: 'deactivateInstituteBranch',
                data: { branch },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        activateInstituteBranch(branch, planType, amount) {
            const data = {
                api: 'activateInstituteBranch',
                data: { branch, planType, amount },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    InstituteService.ɵfac = function InstituteService_Factory(t) { return new (t || InstituteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    InstituteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InstituteService, factory: InstituteService.ɵfac });
    return InstituteService;
})();


/***/ }),

/***/ "./src/app/admin/services/user.service.ts":
/*!************************************************!*\
  !*** ./src/app/admin/services/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let UserService = /*@__PURE__*/ (() => {
    class UserService {
        constructor(httpService) {
            this.httpService = httpService;
        }
        getUsers() {
            const data = {
                api: 'getUsers',
                data: {},
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        changeUserStatus(user, status) {
            const data = {
                api: 'changeUserStatus',
                data: { user, status },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });
    return UserService;
})();


/***/ })

}]);
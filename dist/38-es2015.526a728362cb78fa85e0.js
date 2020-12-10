(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./src/app/institute/institute-menu.ts":
/*!*********************************************!*\
  !*** ./src/app/institute/institute-menu.ts ***!
  \*********************************************/
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
        link: '/institute/home',
        home: true,
        hidden: false,
    },
    // 2
    {
        title: 'My Institutes',
        icon: 'cube-outline',
        link: '/institute/my-institutes',
        hidden: false,
    },
    // 3
    {
        title: 'Dashboard',
        icon: 'shield-outline',
        link: '/institute/branch/dashboard',
        hidden: true,
    },
    // 4
    {
        title: 'Branch Management',
        icon: 'share-outline',
        hidden: true,
        children: [
            {
                title: 'Receipt Details',
                link: '/institute/branch/manage-branch/receipt',
                hidden: true,
            },
            {
                title: 'Course',
                link: '/institute/branch/manage-branch/course',
                hidden: true,
            },
            {
                title: 'Discount & Offers',
                link: '/institute/branch/manage-branch/discount-and-offers',
                hidden: true,
            },
        ],
    },
    // 5
    {
        title: 'Student Management',
        icon: 'person-outline',
        hidden: true,
        children: [
            {
                title: 'Add Student',
                link: '/institute/branch/student/add',
                hidden: true,
            },
            {
                title: 'Active Students',
                link: '/institute/branch/student/manage',
                queryParams: { type: 'active' },
                hidden: true,
            },
            {
                title: 'Inactive Students',
                link: '/institute/branch/student/manage',
                queryParams: { type: 'inactive' },
                hidden: true,
            },
        ],
    },
    // 6
    {
        title: 'Schedule Class',
        icon: 'calendar-outline',
        link: '/institute/branch/schedule/batch',
        hidden: true,
    },
    // 7
    {
        title: 'Lecture Management',
        icon: 'book-open-outline',
        link: '/institute/branch/lecture/batch',
        hidden: true,
    },
    // 8
    {
        title: 'Assignment Management',
        icon: 'archive-outline',
        link: '/institute/branch/assignment/batch',
        hidden: true,
    },
    // 9
    {
        title: 'Exam Management',
        icon: 'edit-2-outline',
        hidden: true,
        children: [
            {
                title: 'Schedule Classroom Test',
                link: '/institute/branch/exam/test/batch',
                hidden: true,
            },
            {
                title: 'Schedule Online Exam',
                link: '/institute/branch/exam/online-test/batch',
                hidden: true,
            },
        ],
    },
    // 10
    {
        title: 'Employee Management',
        icon: 'people-outline',
        hidden: true,
        children: [
            {
                title: 'Add Employee',
                link: '/institute/branch/employee/add',
                hidden: true,
            },
            {
                title: 'Active Employees',
                link: '/institute/branch/employee/manage',
                queryParams: { type: 'active' },
                hidden: true,
            },
            {
                title: 'Inactive Employees',
                link: '/institute/branch/employee/manage',
                queryParams: { type: 'inactive' },
                hidden: true,
            },
        ],
    },
    // 11
    {
        title: 'Leave Management',
        icon: 'log-out-outline',
        link: '/institute/branch/leave',
        hidden: true,
    },
    // 12
    {
        title: 'Lead Management',
        icon: 'search-outline',
        hidden: true,
        children: [
            {
                title: 'Add Lead',
                link: '/institute/branch/lead/add',
                hidden: true,
            },
            {
                title: 'Active Leads',
                link: '/institute/branch/lead/manage',
                queryParams: { type: 'active' },
            },
            {
                title: 'Close Leads',
                link: '/institute/branch/lead/manage',
                queryParams: { type: 'inactive' },
            },
        ],
    },
    // 13
    {
        title: 'Student Reports',
        icon: 'bar-chart-outline',
        link: '/institute/branch/students-report',
        hidden: true,
    },
    // 14
    {
        title: 'Budget Management',
        icon: 'activity-outline',
        link: '/institute/branch/budget/manage',
        hidden: true,
    },
];


/***/ }),

/***/ "./src/app/institute/institute-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/institute/institute-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: InstituteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstituteRoutingModule", function() { return InstituteRoutingModule; });
/* harmony import */ var _institute_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./institute.component */ "./src/app/institute/institute.component.ts");
/* harmony import */ var _authentication_auth_guards_branch_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../authentication/auth/guards/branch.auth.guard */ "./src/app/authentication/auth/guards/branch.auth.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






const routes = [
    {
        path: '',
        component: _institute_component__WEBPACK_IMPORTED_MODULE_0__["InstituteComponent"],
        children: [
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e("common"), __webpack_require__.e(209)]).then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "./src/app/institute/profile/profile.module.ts")).then((m) => m.ProfileModule),
                canActivate: [],
            },
            {
                path: 'settings',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(210)]).then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "./src/app/institute/settings/settings.module.ts")).then((m) => m.SettingsModule),
                canActivate: [],
            },
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(205)]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/institute/home/home.module.ts")).then((m) => m.HomeModule),
                canActivate: [],
            },
            {
                path: 'my-institutes',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(206)]).then(__webpack_require__.bind(null, /*! ./manage-institute/manage-institute.module */ "./src/app/institute/manage-institute/manage-institute.module.ts")).then((m) => m.ManageInstituteModule),
                canActivate: [],
            },
            {
                path: 'membership-plans',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(6), __webpack_require__.e("common"), __webpack_require__.e(208)]).then(__webpack_require__.bind(null, /*! ./membership-plans/membership-plans.module */ "./src/app/institute/membership-plans/membership-plans.module.ts")).then((m) => m.MembershipPlansModule),
                canActivate: [],
            },
            {
                path: 'add',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(6), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./manage-institute/add-institute/add-institute.module */ "./src/app/institute/manage-institute/add-institute/add-institute.module.ts")).then((m) => m.AddInstituteModule),
                canActivate: [],
            },
            {
                path: 'view',
                loadChildren: () => __webpack_require__.e(/*! import() */ 207).then(__webpack_require__.bind(null, /*! ./manage-institute/view-institute/view-institute.module */ "./src/app/institute/manage-institute/view-institute/view-institute.module.ts")).then((m) => m.ViewInstituteModule),
                canActivate: [],
            },
            {
                path: 'edit',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(6), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./manage-institute/add-institute/add-institute.module */ "./src/app/institute/manage-institute/add-institute/add-institute.module.ts")).then((m) => m.AddInstituteModule),
                canActivate: [],
            },
            {
                path: 'branch',
                loadChildren: () => __webpack_require__.e(/*! import() */ 54).then(__webpack_require__.bind(null, /*! ./branch/branch.module */ "./src/app/institute/branch/branch.module.ts")).then((m) => m.BranchModule),
                canActivate: [_authentication_auth_guards_branch_auth_guard__WEBPACK_IMPORTED_MODULE_1__["BranchAuthGuard"]],
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
let InstituteRoutingModule = /*@__PURE__*/ (() => {
    class InstituteRoutingModule {
    }
    InstituteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: InstituteRoutingModule });
    InstituteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function InstituteRoutingModule_Factory(t) { return new (t || InstituteRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return InstituteRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](InstituteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/institute/institute.component.ts":
/*!**************************************************!*\
  !*** ./src/app/institute/institute.component.ts ***!
  \**************************************************/
/*! exports provided: InstituteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstituteComponent", function() { return InstituteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.service */ "./src/app/institute/menu.service.ts");
/* harmony import */ var _theme_layouts_one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@theme/layouts/one-column/one-column.layout */ "./src/app/@theme/layouts/one-column/one-column.layout.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let InstituteComponent = /*@__PURE__*/ (() => {
    class InstituteComponent {
        constructor(menuService) {
            this.menuService = menuService;
            this.menu = [];
        }
        ngOnInit() {
            this.menuService.setMenuItemSequence();
            this.menu = this.menuService.getMenuItems();
        }
    }
    InstituteComponent.ɵfac = function InstituteComponent_Factory(t) { return new (t || InstituteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"])); };
    InstituteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstituteComponent, selectors: [["ngx-institute"]], decls: 3, vars: 1, consts: [[3, "items"]], template: function InstituteComponent_Template(rf, ctx) {
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
    return InstituteComponent;
})();


/***/ }),

/***/ "./src/app/institute/institute.module.ts":
/*!***********************************************!*\
  !*** ./src/app/institute/institute.module.ts ***!
  \***********************************************/
/*! exports provided: InstituteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstituteModule", function() { return InstituteModule; });
/* harmony import */ var _institute_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./institute.component */ "./src/app/institute/institute.component.ts");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.service */ "./src/app/institute/menu.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _institute_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./institute-routing.module */ "./src/app/institute/institute-routing.module.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/institute/payment/payment.component.ts");








let InstituteModule = /*@__PURE__*/ (() => {
    class InstituteModule {
    }
    InstituteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: InstituteModule });
    InstituteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function InstituteModule_Factory(t) { return new (t || InstituteModule)(); }, providers: [_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]], imports: [[_institute_routing_module__WEBPACK_IMPORTED_MODULE_5__["InstituteRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuModule"]]] });
    return InstituteModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InstituteModule, { declarations: [_institute_component__WEBPACK_IMPORTED_MODULE_0__["InstituteComponent"], _payment_payment_component__WEBPACK_IMPORTED_MODULE_6__["PaymentComponent"]], imports: [_institute_routing_module__WEBPACK_IMPORTED_MODULE_5__["InstituteRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuModule"]] }); })();


/***/ }),

/***/ "./src/app/institute/menu.service.ts":
/*!*******************************************!*\
  !*** ./src/app/institute/menu.service.ts ***!
  \*******************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _institute_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./institute-menu */ "./src/app/institute/institute-menu.ts");



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
            this.menuItems.push(_institute_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][0]);
            this.menuItems.push(_institute_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][1]);
            this.menuItems.push(_institute_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][2]);
            this.menuItems.push(_institute_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][3]);
            this.menuItems.push(_institute_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][4]);
            this.menuItems.push(_institute_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][5]);
            this.menuItems.push(_institute_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][6]);
            this.menuItems.push(_institute_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][7]);
            this.menuItems.push(_institute_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][8]);
            this.menuItems.push(_institute_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][9]);
            this.menuItems.push(_institute_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][10]);
            this.menuItems.push(_institute_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][11]);
            this.menuItems.push(_institute_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][12]);
            this.menuItems.push(_institute_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][13]);
        }
        hideMenu() {
            this.menuItems = _institute_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"].map((menuItem, i) => {
                if (i !== 0 && i !== 1) {
                    menuItem.hidden = true;
                    if (menuItem.children) {
                        menuItem.children.map((menuItemChildren) => {
                            menuItemChildren.hidden = true;
                        });
                    }
                    return menuItem;
                }
            });
        }
        showMenu() {
            this.menuItems = _institute_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"].map((menuItem, i) => {
                menuItem.hidden = false;
                if (menuItem.children) {
                    menuItem.children.map((menuItemChildren) => {
                        menuItemChildren.hidden = false;
                    });
                }
                return menuItem;
            });
        }
    }
    MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(); };
    MenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac });
    return MenuService;
})();


/***/ }),

/***/ "./src/app/institute/payment/payment.component.ts":
/*!********************************************************!*\
  !*** ./src/app/institute/payment/payment.component.ts ***!
  \********************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/payment.service */ "./src/app/services/payment.service.ts");
/* harmony import */ var _services_coupon_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/coupon.service */ "./src/app/services/coupon.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../authentication/auth/auth-service/auth.service */ "./src/app/authentication/auth/auth-service/auth.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");









let PaymentComponent = /*@__PURE__*/ (() => {
    class PaymentComponent {
        constructor(branchService, paymentService, couponService, orderService, authService, toastrService, ref) {
            this.branchService = branchService;
            this.paymentService = paymentService;
            this.couponService = couponService;
            this.orderService = orderService;
            this.authService = authService;
            this.toastrService = toastrService;
            this.ref = ref;
        }
        ngOnInit() {
            this.loading = true;
            this.user = this.authService.getUserData();
            this.paymentDetails = this.paymentService.getPaymentDetails();
            this.options = {
                key: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].razorpayKeyId,
                amount: '',
                currency: 'INR',
                name: 'IMS Master',
                description: 'Class Master Transaction',
                image: '../../../assets/brand/class-master-mini.png',
                // tslint:disable-next-line: max-line-length
                order_id: '',
                handler: (response) => {
                    this.verifyPayment(response);
                },
                modal: {
                    ondismiss: () => {
                        this.deleteOrder();
                    },
                },
                prefill: {
                    name: this.user.name,
                    email: this.user.email,
                    contact: this.user.phone,
                },
                notes: {
                    address: '',
                },
                theme: {
                    color: '#528FF0',
                },
            };
            this.razorPay = new Razorpay(this.options);
            const coupon = this.couponService.getAppliedCoupon();
            const branchId = this.branchService.getBranchId();
            this.orderDetails = {
                branch: branchId,
                userId: this.user.imsMasterId,
                userPhone: this.user.phone,
                userName: this.user.name,
                userEmail: this.user.email,
                amount: this.paymentDetails.amount,
                packageType: this.paymentDetails.packageType,
                planType: this.paymentDetails.planType,
            };
            if (coupon) {
                this.orderDetails.coupon = coupon.code;
            }
            this.generateOrder();
            this.loading = false;
        }
        generateOrder() {
            this.orderService.generateOrder(this.orderDetails).subscribe((res) => {
                this.placedOrderReceipt = res.paymentReceipt;
                // this.options.amount = res.order.amount;
                this.options.amount = '1';
                this.options.order_id = res.order.id;
                this.options.currency = res.order.currency;
                this.options.prefill.name = this.user.name;
                this.options.prefill.email = this.user.email;
                this.options.prefill.contact = this.user.phone;
                this.razorPay = new Razorpay(this.options);
                this.pay();
            }, (err) => {
                this.showToastr('top-right', 'danger', err);
                this.onClose();
            });
        }
        pay() {
            this.razorPay.open();
        }
        deleteOrder() {
            this.orderService.deleteOrder(this.placedOrderReceipt._id).subscribe((res) => {
                this.placedOrderReceipt = null;
                this.ref.close({ status: false });
            }, (err) => {
                this.showToastr('top-right', 'danger', err);
                this.onClose();
            });
        }
        verifyPayment(payment) {
            this.paymentService.verifyPayment(payment, this.placedOrderReceipt).subscribe((res) => {
                this.showToastr('top-right', 'success', 'Payment Verified Successfully');
                this.ref.close({ status: true, order: res.orderId, receipt: res.receiptId });
            }, (err) => {
                this.showToastr('top-right', 'danger', err);
                this.onClose();
            });
        }
        onClose() {
            this.ref.close();
        }
        showToastr(position, status, message) {
            this.toastrService.show(status, message, {
                position,
                status,
            });
        }
        ngOnDestroy() {
            this.couponService.deleteAppliedCoupon();
        }
    }
    PaymentComponent.ɵfac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_coupon_service__WEBPACK_IMPORTED_MODULE_4__["CouponService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDialogRef"])); };
    PaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PaymentComponent, selectors: [["ngx-payment"]], decls: 0, vars: 0, template: function PaymentComponent_Template(rf, ctx) { }, styles: [""] });
    return PaymentComponent;
})();


/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let OrderService = /*@__PURE__*/ (() => {
    class OrderService {
        constructor(httpService) {
            this.httpService = httpService;
        }
        getOrderDetails() {
            return this.orderDetails;
        }
        setOrderDetails(order) {
            this.orderDetails = order;
        }
        deleteOrderDetails() {
            this.orderDetails = null;
        }
        deleteOrder(id) {
            const data = { api: 'deleteOrder', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        generateOrder(order) {
            const data = { api: 'generateOrder', data: order };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });
    return OrderService;
})();


/***/ })

}]);
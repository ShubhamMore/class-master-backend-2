(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./src/app/services/institute-order.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/institute-order.service.ts ***!
  \*****************************************************/
/*! exports provided: InstituteOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstituteOrderService", function() { return InstituteOrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let InstituteOrderService = /*@__PURE__*/ (() => {
    class InstituteOrderService {
        constructor(httpService) {
            this.httpService = httpService;
        }
        getInstituteOrderDetails() {
            return this.instituteOrderDetails;
        }
        setInstituteOrderDetails(instituteOrder) {
            this.instituteOrderDetails = instituteOrder;
        }
        deleteInstituteOrderDetails() {
            this.instituteOrderDetails = null;
        }
        deleteInstituteOrder(id) {
            const data = { api: 'deleteInstituteOrder', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        generateInstituteOrder(instituteOrder) {
            const data = { api: 'generateInstituteOrder', data: instituteOrder };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    InstituteOrderService.ɵfac = function InstituteOrderService_Factory(t) { return new (t || InstituteOrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    InstituteOrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InstituteOrderService, factory: InstituteOrderService.ɵfac, providedIn: 'root' });
    return InstituteOrderService;
})();


/***/ }),

/***/ "./src/app/student/menu.service.ts":
/*!*****************************************!*\
  !*** ./src/app/student/menu.service.ts ***!
  \*****************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _student_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-menu */ "./src/app/student/student-menu.ts");



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
            this.menuItems.push(_student_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][0]);
            this.menuItems.push(_student_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][1]);
            this.menuItems.push(_student_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][2]);
            this.menuItems.push(_student_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][3]);
            this.menuItems.push(_student_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][4]);
            this.menuItems.push(_student_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][5]);
            this.menuItems.push(_student_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][6]);
        }
        hideMenu() {
            this.menuItems = _student_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"].map((menuItem, i) => {
                if (i !== 0) {
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
            this.menuItems = _student_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"].map((menuItem, i) => {
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

/***/ "./src/app/student/payment/payment.component.ts":
/*!******************************************************!*\
  !*** ./src/app/student/payment/payment.component.ts ***!
  \******************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/payment.service */ "./src/app/services/payment.service.ts");
/* harmony import */ var _services_institute_keys_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/institute-keys.service */ "./src/app/services/institute-keys.service.ts");
/* harmony import */ var _services_student_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/student-course.service */ "./src/app/services/student-course.service.ts");
/* harmony import */ var _services_student_course_installment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/student-course-installment.service */ "./src/app/services/student-course-installment.service.ts");
/* harmony import */ var _services_institute_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/institute-order.service */ "./src/app/services/institute-order.service.ts");
/* harmony import */ var _authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../authentication/auth/auth-service/auth.service */ "./src/app/authentication/auth/auth-service/auth.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");










let PaymentComponent = /*@__PURE__*/ (() => {
    class PaymentComponent {
        constructor(branchService, paymentService, instituteKeysService, studentCourseService, studentCourseInstallmentService, instituteOrderService, authService, toastrService, ref) {
            this.branchService = branchService;
            this.paymentService = paymentService;
            this.instituteKeysService = instituteKeysService;
            this.studentCourseService = studentCourseService;
            this.studentCourseInstallmentService = studentCourseInstallmentService;
            this.instituteOrderService = instituteOrderService;
            this.authService = authService;
            this.toastrService = toastrService;
            this.ref = ref;
        }
        ngOnInit() {
            this.loading = true;
            this.user = this.authService.getUserData();
            this.branchId = this.branchService.getBranchId();
            this.branchService.getBranchData().subscribe((branch) => {
                this.branch = branch;
            });
            this.studentCourseService
                .getStudentCourseData()
                .subscribe((studentCourse) => {
                this.studentCourse = studentCourse;
            });
            this.paymentGatewayAccessKey = this.instituteKeysService.getLocalInstitutePaymentAccessKey();
            if (!this.branchId || !this.paymentGatewayAccessKey) {
                this.onClose();
                return;
            }
            this.studentCourseInstallmentService
                .getStudentCourseInstallmentData()
                .subscribe((studentCourseInstallment) => {
                this.studentCourseInstallment = studentCourseInstallment;
            });
            this.studentCourseInstallmentService
                .getCourseInstallmentData()
                .subscribe((courseInstallment) => {
                this.courseInstallment = courseInstallment;
            });
            this.orderDetails = {
                userId: this.user._id,
                userPhone: this.user.phone,
                userName: this.user.name,
                userEmail: this.user.email,
                imsMasterId: this.user.imsMasterId,
                amount: this.courseInstallment.installmentAmount,
                studentInstallment: this.studentCourseInstallment._id,
                installment: this.courseInstallment._id,
                branch: this.branchId,
            };
            this.options = {
                key: this.paymentGatewayAccessKey,
                amount: '',
                currency: 'INR',
                name: this.branch ? this.branch.basicDetails.branchName : 'Institute Fees',
                description: this.getPaymentDescription(),
                // image: '../../../assets/brand/class-master-mini.png',
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
            this.generateOrder();
            this.loading = false;
        }
        getPaymentDescription() {
            return `Installment ${this.courseInstallment.installmentNo} of Course ${this.studentCourse.courseName}`;
        }
        generateOrder() {
            this.instituteOrderService.generateInstituteOrder(this.orderDetails).subscribe((res) => {
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
            this.instituteOrderService.deleteInstituteOrder(this.placedOrderReceipt._id).subscribe((res) => {
                this.placedOrderReceipt = null;
                this.ref.close({ status: false });
            }, (err) => {
                this.showToastr('top-right', 'danger', err);
                this.onClose();
            });
        }
        verifyPayment(payment) {
            this.paymentService
                .verifyInstitutePayment(this.branchId, payment, this.placedOrderReceipt)
                .subscribe((res) => {
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
        ngOnDestroy() { }
    }
    PaymentComponent.ɵfac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_payment_service__WEBPACK_IMPORTED_MODULE_2__["PaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_institute_keys_service__WEBPACK_IMPORTED_MODULE_3__["InstituteKeysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_course_service__WEBPACK_IMPORTED_MODULE_4__["StudentCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_course_installment_service__WEBPACK_IMPORTED_MODULE_5__["StudentCourseInstallmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_institute_order_service__WEBPACK_IMPORTED_MODULE_6__["InstituteOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbDialogRef"])); };
    PaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentComponent, selectors: [["ngx-payment"]], decls: 0, vars: 0, template: function PaymentComponent_Template(rf, ctx) { }, styles: [""] });
    return PaymentComponent;
})();


/***/ }),

/***/ "./src/app/student/student-menu.ts":
/*!*****************************************!*\
  !*** ./src/app/student/student-menu.ts ***!
  \*****************************************/
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
        link: '/student/home',
        home: true,
        hidden: false,
    },
    // 2
    {
        title: 'Dashboard',
        icon: 'shield-outline',
        link: '/student/branch/dashboard',
        hidden: true,
    },
    // 3
    {
        title: 'My Courses',
        icon: 'share-outline',
        link: '/student/branch/course/manage',
        hidden: true,
        queryParams: { type: 'course' },
    },
    // 4
    {
        title: 'Lectures',
        icon: 'book-open-outline',
        link: '/student/branch/course/manage',
        hidden: true,
        queryParams: { type: 'lecture' },
    },
    // 5
    {
        title: 'Assignments',
        icon: 'archive-outline',
        link: '/student/branch/course/manage',
        hidden: true,
        queryParams: { type: 'assignment' },
    },
    // 6
    {
        title: 'Reports',
        icon: 'bar-chart-outline',
        link: '/student/branch/course/manage',
        hidden: true,
        queryParams: { type: 'report' },
    },
    // 7
    {
        title: 'Online Exams',
        icon: 'edit-2-outline',
        link: '/student/branch/course/manage',
        hidden: true,
        queryParams: { type: 'exam' },
    },
];


/***/ }),

/***/ "./src/app/student/student-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/student/student-routing.module.ts ***!
  \***************************************************/
/*! exports provided: StudentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRoutingModule", function() { return StudentRoutingModule; });
/* harmony import */ var _authentication_auth_guards_branch_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../authentication/auth/guards/branch.auth.guard */ "./src/app/authentication/auth/guards/branch.auth.guard.ts");
/* harmony import */ var _student_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const routes = [
    {
        path: '',
        component: _student_component__WEBPACK_IMPORTED_MODULE_1__["StudentComponent"],
        children: [
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e("common"), __webpack_require__.e(237)]).then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "./src/app/student/profile/profile.module.ts")).then((m) => m.ProfileModule),
                canActivate: [],
            },
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() */ 236).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/student/home/home.module.ts")).then((m) => m.HomeModule),
                canActivate: [],
            },
            {
                path: 'branch',
                loadChildren: () => __webpack_require__.e(/*! import() */ 44).then(__webpack_require__.bind(null, /*! ./branch/branch.module */ "./src/app/student/branch/branch.module.ts")).then((m) => m.BranchModule),
                canActivate: [_authentication_auth_guards_branch_auth_guard__WEBPACK_IMPORTED_MODULE_0__["BranchAuthGuard"]],
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
let StudentRoutingModule = /*@__PURE__*/ (() => {
    class StudentRoutingModule {
    }
    StudentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: StudentRoutingModule });
    StudentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function StudentRoutingModule_Factory(t) { return new (t || StudentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
    return StudentRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StudentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.service */ "./src/app/student/menu.service.ts");
/* harmony import */ var _theme_layouts_one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@theme/layouts/one-column/one-column.layout */ "./src/app/@theme/layouts/one-column/one-column.layout.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let StudentComponent = /*@__PURE__*/ (() => {
    class StudentComponent {
        constructor(menuService) {
            this.menuService = menuService;
            this.menu = [];
        }
        ngOnInit() {
            this.menuService.setMenuItemSequence();
            this.menu = this.menuService.getMenuItems();
        }
    }
    StudentComponent.ɵfac = function StudentComponent_Factory(t) { return new (t || StudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"])); };
    StudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentComponent, selectors: [["ngx-student"]], decls: 3, vars: 1, consts: [[3, "items"]], template: function StudentComponent_Template(rf, ctx) {
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
    return StudentComponent;
})();


/***/ }),

/***/ "./src/app/student/student.module.ts":
/*!*******************************************!*\
  !*** ./src/app/student/student.module.ts ***!
  \*******************************************/
/*! exports provided: StudentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentModule", function() { return StudentModule; });
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/student/payment/payment.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _student_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-routing.module */ "./src/app/student/student-routing.module.ts");
/* harmony import */ var _student_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.service */ "./src/app/student/menu.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../@theme/theme.module */ "./src/app/@theme/theme.module.ts");








let StudentModule = /*@__PURE__*/ (() => {
    class StudentModule {
    }
    StudentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StudentModule });
    StudentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function StudentModule_Factory(t) { return new (t || StudentModule)(); }, providers: [_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]], imports: [[_student_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"]]] });
    return StudentModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StudentModule, { declarations: [_student_component__WEBPACK_IMPORTED_MODULE_3__["StudentComponent"], _payment_payment_component__WEBPACK_IMPORTED_MODULE_0__["PaymentComponent"]], imports: [_student_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"]] }); })();


/***/ })

}]);
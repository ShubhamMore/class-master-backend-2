function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39], {
  /***/
  "./src/app/services/institute-order.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/institute-order.service.ts ***!
    \*****************************************************/

  /*! exports provided: InstituteOrderService */

  /***/
  function srcAppServicesInstituteOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstituteOrderService", function () {
      return InstituteOrderService;
    });
    /* harmony import */


    var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./shared-services/http.service */
    "./src/app/services/shared-services/http.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var InstituteOrderService =
    /*#__PURE__*/
    function () {
      function InstituteOrderService(httpService) {
        _classCallCheck(this, InstituteOrderService);

        this.httpService = httpService;
      }

      _createClass(InstituteOrderService, [{
        key: "getInstituteOrderDetails",
        value: function getInstituteOrderDetails() {
          return this.instituteOrderDetails;
        }
      }, {
        key: "setInstituteOrderDetails",
        value: function setInstituteOrderDetails(instituteOrder) {
          this.instituteOrderDetails = instituteOrder;
        }
      }, {
        key: "deleteInstituteOrderDetails",
        value: function deleteInstituteOrderDetails() {
          this.instituteOrderDetails = null;
        }
      }, {
        key: "deleteInstituteOrder",
        value: function deleteInstituteOrder(id) {
          var data = {
            api: 'deleteInstituteOrder',
            data: {
              id: id
            }
          };
          return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
          }));
        }
      }, {
        key: "generateInstituteOrder",
        value: function generateInstituteOrder(instituteOrder) {
          var data = {
            api: 'generateInstituteOrder',
            data: instituteOrder
          };
          return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
          }));
        }
      }]);

      return InstituteOrderService;
    }();

    InstituteOrderService.ɵfac = function InstituteOrderService_Factory(t) {
      return new (t || InstituteOrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"]));
    };

    InstituteOrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: InstituteOrderService,
      factory: InstituteOrderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InstituteOrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_services_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/student/menu.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/student/menu.service.ts ***!
    \*****************************************/

  /*! exports provided: MenuService */

  /***/
  function srcAppStudentMenuServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuService", function () {
      return MenuService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _student_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./student-menu */
    "./src/app/student/student-menu.ts");

    var MenuService =
    /*#__PURE__*/
    function () {
      function MenuService() {
        _classCallCheck(this, MenuService);

        this.menuItems = [];
      }

      _createClass(MenuService, [{
        key: "getMenuItems",
        value: function getMenuItems() {
          return this.menuItems;
        }
      }, {
        key: "setMenuItemSequence",
        value: function setMenuItemSequence() {
          this.menuItems = [];
          this.menuItems.push(_student_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][0]);
          this.menuItems.push(_student_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][1]);
          this.menuItems.push(_student_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][2]);
          this.menuItems.push(_student_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][3]);
          this.menuItems.push(_student_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][4]);
          this.menuItems.push(_student_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][5]);
          this.menuItems.push(_student_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][6]);
        }
      }, {
        key: "hideMenu",
        value: function hideMenu() {
          this.menuItems = _student_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"].map(function (menuItem, i) {
            if (i !== 0) {
              menuItem.hidden = true;

              if (menuItem.children) {
                menuItem.children.map(function (menuItemChildren) {
                  menuItemChildren.hidden = true;
                });
              }

              return menuItem;
            }
          });
        }
      }, {
        key: "showMenu",
        value: function showMenu() {
          this.menuItems = _student_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"].map(function (menuItem, i) {
            menuItem.hidden = false;

            if (menuItem.children) {
              menuItem.children.map(function (menuItemChildren) {
                menuItemChildren.hidden = false;
              });
            }

            return menuItem;
          });
        }
      }]);

      return MenuService;
    }();

    MenuService.ɵfac = function MenuService_Factory(t) {
      return new (t || MenuService)();
    };

    MenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MenuService,
      factory: MenuService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/student/payment/payment.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/student/payment/payment.component.ts ***!
    \******************************************************/

  /*! exports provided: PaymentComponent */

  /***/
  function srcAppStudentPaymentPaymentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentComponent", function () {
      return PaymentComponent;
    });
    /* harmony import */


    var _services_student_course_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../services/student-course.service */
    "./src/app/services/student-course.service.ts");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _services_institute_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/institute-order.service */
    "./src/app/services/institute-order.service.ts");
    /* harmony import */


    var _services_student_course_installment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/student-course-installment.service */
    "./src/app/services/student-course-installment.service.ts");
    /* harmony import */


    var _services_institute_keys_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/institute-keys.service */
    "./src/app/services/institute-keys.service.ts");
    /* harmony import */


    var _authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../authentication/auth/auth-service/auth.service */
    "./src/app/authentication/auth/auth-service/auth.service.ts");
    /* harmony import */


    var _services_payment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../services/payment.service */
    "./src/app/services/payment.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PaymentComponent =
    /*#__PURE__*/
    function () {
      function PaymentComponent(branchService, paymentService, instituteKeysService, studentCourseService, studentCourseInstallmentService, instituteOrderService, authService, toastrService, ref) {
        _classCallCheck(this, PaymentComponent);

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

      _createClass(PaymentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loading = true;
          this.user = this.authService.getUserData();
          this.branchId = this.branchService.getBranchId();
          this.branchService.getBranchData().subscribe(function (branch) {
            _this.branch = branch;
          });
          this.studentCourseService.getStudentCourseData().subscribe(function (studentCourse) {
            _this.studentCourse = studentCourse;
          });
          this.paymentGatewayAccessKey = this.instituteKeysService.getLocalInstitutePaymentAccessKey();

          if (!this.branchId || !this.paymentGatewayAccessKey) {
            this.onClose();
            return;
          }

          this.studentCourseInstallmentService.getStudentCourseInstallmentData().subscribe(function (studentCourseInstallment) {
            _this.studentCourseInstallment = studentCourseInstallment;
          });
          this.studentCourseInstallmentService.getCourseInstallmentData().subscribe(function (courseInstallment) {
            _this.courseInstallment = courseInstallment;
          });
          this.orderDetails = {
            userId: this.user._id,
            userPhone: this.user.phone,
            userName: this.user.name,
            userEmail: this.user.email,
            amount: this.courseInstallment.installmentAmount,
            studentInstallment: this.studentCourseInstallment._id,
            installment: this.courseInstallment._id,
            branch: this.branchId
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
            handler: function handler(response) {
              _this.verifyPayment(response);
            },
            modal: {
              ondismiss: function ondismiss() {
                _this.deleteOrder();
              }
            },
            prefill: {
              name: this.user.name,
              email: this.user.email,
              contact: this.user.phone
            },
            notes: {
              address: ''
            },
            theme: {
              color: '#528FF0'
            }
          };
          this.razorPay = new Razorpay(this.options);
          this.generateOrder();
          this.loading = false;
        }
      }, {
        key: "getPaymentDescription",
        value: function getPaymentDescription() {
          return "Installment ".concat(this.courseInstallment.installmentNo, " of Course ").concat(this.studentCourse.courseName);
        }
      }, {
        key: "generateOrder",
        value: function generateOrder() {
          var _this2 = this;

          this.instituteOrderService.generateInstituteOrder(this.orderDetails).subscribe(function (res) {
            _this2.placedOrderReceipt = res.paymentReceipt; // this.options.amount = res.order.amount;

            _this2.options.amount = '1';
            _this2.options.order_id = res.order.id;
            _this2.options.currency = res.order.currency;
            _this2.options.prefill.name = _this2.user.name;
            _this2.options.prefill.email = _this2.user.email;
            _this2.options.prefill.contact = _this2.user.phone;
            _this2.razorPay = new Razorpay(_this2.options);

            _this2.pay();
          }, function (err) {
            _this2.showToastr('top-right', 'danger', err);

            _this2.onClose();
          });
        }
      }, {
        key: "pay",
        value: function pay() {
          this.razorPay.open();
        }
      }, {
        key: "deleteOrder",
        value: function deleteOrder() {
          var _this3 = this;

          this.instituteOrderService.deleteInstituteOrder(this.placedOrderReceipt._id).subscribe(function (res) {
            _this3.placedOrderReceipt = null;

            _this3.ref.close({
              status: false
            });
          }, function (err) {
            _this3.showToastr('top-right', 'danger', err);

            _this3.onClose();
          });
        }
      }, {
        key: "verifyPayment",
        value: function verifyPayment(payment) {
          var _this4 = this;

          this.paymentService.verifyInstitutePayment(this.branchId, payment, this.placedOrderReceipt).subscribe(function (res) {
            _this4.showToastr('top-right', 'success', 'Payment Verified Successfully');

            _this4.ref.close({
              status: true,
              order: res.orderId,
              receipt: res.receiptId
            });
          }, function (err) {
            _this4.showToastr('top-right', 'danger', err);

            _this4.onClose();
          });
        }
      }, {
        key: "onClose",
        value: function onClose() {
          this.ref.close();
        }
      }, {
        key: "showToastr",
        value: function showToastr(position, status, message) {
          this.toastrService.show(status, message, {
            position: position,
            status: status
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return PaymentComponent;
    }();

    PaymentComponent.ɵfac = function PaymentComponent_Factory(t) {
      return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_payment_service__WEBPACK_IMPORTED_MODULE_6__["PaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_institute_keys_service__WEBPACK_IMPORTED_MODULE_4__["InstituteKeysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_student_course_service__WEBPACK_IMPORTED_MODULE_0__["StudentCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_student_course_installment_service__WEBPACK_IMPORTED_MODULE_3__["StudentCourseInstallmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_institute_order_service__WEBPACK_IMPORTED_MODULE_2__["InstituteOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDialogRef"]));
    };

    PaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: PaymentComponent,
      selectors: [["ngx-payment"]],
      decls: 0,
      vars: 0,
      template: function PaymentComponent_Template(rf, ctx) {},
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](PaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"],
        args: [{
          selector: 'ngx-payment',
          templateUrl: './payment.component.html',
          styleUrls: ['./payment.component.scss']
        }]
      }], function () {
        return [{
          type: _services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]
        }, {
          type: _services_payment_service__WEBPACK_IMPORTED_MODULE_6__["PaymentService"]
        }, {
          type: _services_institute_keys_service__WEBPACK_IMPORTED_MODULE_4__["InstituteKeysService"]
        }, {
          type: _services_student_course_service__WEBPACK_IMPORTED_MODULE_0__["StudentCourseService"]
        }, {
          type: _services_student_course_installment_service__WEBPACK_IMPORTED_MODULE_3__["StudentCourseInstallmentService"]
        }, {
          type: _services_institute_order_service__WEBPACK_IMPORTED_MODULE_2__["InstituteOrderService"]
        }, {
          type: _authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"]
        }, {
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/student/student-menu.ts":
  /*!*****************************************!*\
    !*** ./src/app/student/student-menu.ts ***!
    \*****************************************/

  /*! exports provided: MENU_ITEMS */

  /***/
  function srcAppStudentStudentMenuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function () {
      return MENU_ITEMS;
    });

    var MENU_ITEMS = [// 1
    {
      title: 'Home',
      icon: 'home',
      link: '/student/home',
      home: true,
      hidden: false
    }, // 2
    {
      title: 'Dashboard',
      icon: 'shield-outline',
      link: '/student/branch/dashboard',
      hidden: true
    }, // 3
    {
      title: 'My Courses',
      icon: 'share-outline',
      link: '/student/branch/course/manage',
      hidden: true,
      queryParams: {
        type: 'course'
      }
    }, // 4
    {
      title: 'Lectures',
      icon: 'book-open-outline',
      link: '/student/branch/course/manage',
      hidden: true,
      queryParams: {
        type: 'lecture'
      }
    }, // 5
    {
      title: 'Assignments',
      icon: 'archive-outline',
      link: '/student/branch/course/manage',
      hidden: true,
      queryParams: {
        type: 'assignment'
      }
    }, // 6
    {
      title: 'Reports',
      icon: 'bar-chart-outline',
      link: '/student/branch/course/manage',
      hidden: true,
      queryParams: {
        type: 'report'
      }
    }, // 7
    {
      title: 'Online Exams',
      icon: 'edit-2-outline',
      link: '/student/branch/course/manage',
      hidden: true,
      queryParams: {
        type: 'exam'
      }
    }];
    /***/
  },

  /***/
  "./src/app/student/student-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/student/student-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: StudentRoutingModule */

  /***/
  function srcAppStudentStudentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentRoutingModule", function () {
      return StudentRoutingModule;
    });
    /* harmony import */


    var _authentication_auth_guards_branch_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../authentication/auth/guards/branch.auth.guard */
    "./src/app/authentication/auth/guards/branch.auth.guard.ts");
    /* harmony import */


    var _student_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./student.component */
    "./src/app/student/student.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _student_component__WEBPACK_IMPORTED_MODULE_1__["StudentComponent"],
      children: [{
        path: 'profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e(1), __webpack_require__.e("common"), __webpack_require__.e(233)]).then(__webpack_require__.bind(null,
          /*! ./profile/profile.module */
          "./src/app/student/profile/profile.module.ts")).then(function (m) {
            return m.ProfileModule;
          });
        },
        canActivate: []
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          232).then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "./src/app/student/home/home.module.ts")).then(function (m) {
            return m.HomeModule;
          });
        },
        canActivate: []
      }, {
        path: 'branch',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          45).then(__webpack_require__.bind(null,
          /*! ./branch/branch.module */
          "./src/app/student/branch/branch.module.ts")).then(function (m) {
            return m.BranchModule;
          });
        },
        canActivate: [_authentication_auth_guards_branch_auth_guard__WEBPACK_IMPORTED_MODULE_0__["BranchAuthGuard"]]
      }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'page-not-found',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          0).then(__webpack_require__.bind(null,
          /*! ../shared/page-not-found/page-not-found.module */
          "./src/app/shared/page-not-found/page-not-found.module.ts")).then(function (m) {
            return m.PageNotFoundModule;
          });
        }
      }, {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full'
      }]
    }];

    var StudentRoutingModule = function StudentRoutingModule() {
      _classCallCheck(this, StudentRoutingModule);
    };

    StudentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: StudentRoutingModule
    });
    StudentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function StudentRoutingModule_Factory(t) {
        return new (t || StudentRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StudentRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](StudentRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/student/student.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/student/student.component.ts ***!
    \**********************************************/

  /*! exports provided: StudentComponent */

  /***/
  function srcAppStudentStudentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentComponent", function () {
      return StudentComponent;
    });
    /* harmony import */


    var _menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./menu.service */
    "./src/app/student/menu.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _theme_layouts_one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../@theme/layouts/one-column/one-column.layout */
    "./src/app/@theme/layouts/one-column/one-column.layout.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var StudentComponent =
    /*#__PURE__*/
    function () {
      function StudentComponent(menuService) {
        _classCallCheck(this, StudentComponent);

        this.menuService = menuService;
        this.menu = [];
      }

      _createClass(StudentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menuService.setMenuItemSequence();
          this.menu = this.menuService.getMenuItems();
        }
      }]);

      return StudentComponent;
    }();

    StudentComponent.ɵfac = function StudentComponent_Factory(t) {
      return new (t || StudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_0__["MenuService"]));
    };

    StudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: StudentComponent,
      selectors: [["ngx-student"]],
      decls: 3,
      vars: 1,
      consts: [[3, "items"]],
      template: function StudentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-one-column-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nb-menu", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.menu);
        }
      },
      directives: [_theme_layouts_one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_2__["OneColumnLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: [".nb-theme-default   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@-webkit-keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.nb-theme-dark   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.nb-theme-corporate   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StudentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'ngx-student',
          styleUrls: ['./student.component.scss'],
          template: "\n    <ngx-one-column-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-one-column-layout>\n  "
        }]
      }], function () {
        return [{
          type: _menu_service__WEBPACK_IMPORTED_MODULE_0__["MenuService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/student/student.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/student/student.module.ts ***!
    \*******************************************/

  /*! exports provided: StudentModule */

  /***/
  function srcAppStudentStudentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentModule", function () {
      return StudentModule;
    });
    /* harmony import */


    var _payment_payment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./payment/payment.component */
    "./src/app/student/payment/payment.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _student_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./student-routing.module */
    "./src/app/student/student-routing.module.ts");
    /* harmony import */


    var _student_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./student.component */
    "./src/app/student/student.component.ts");
    /* harmony import */


    var _menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./menu.service */
    "./src/app/student/menu.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../@theme/theme.module */
    "./src/app/@theme/theme.module.ts");

    var StudentModule = function StudentModule() {
      _classCallCheck(this, StudentModule);
    };

    StudentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: StudentModule
    });
    StudentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function StudentModule_Factory(t) {
        return new (t || StudentModule)();
      },
      providers: [_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]],
      imports: [[_student_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StudentModule, {
        declarations: [_student_component__WEBPACK_IMPORTED_MODULE_3__["StudentComponent"], _payment_payment_component__WEBPACK_IMPORTED_MODULE_0__["PaymentComponent"]],
        imports: [_student_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StudentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_student_component__WEBPACK_IMPORTED_MODULE_3__["StudentComponent"], _payment_payment_component__WEBPACK_IMPORTED_MODULE_0__["PaymentComponent"]],
          imports: [_student_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"]],
          providers: [_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
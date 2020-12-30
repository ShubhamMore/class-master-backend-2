function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38], {
  /***/
  "./src/app/institute/institute-menu.ts":
  /*!*********************************************!*\
    !*** ./src/app/institute/institute-menu.ts ***!
    \*********************************************/

  /*! exports provided: MENU_ITEMS */

  /***/
  function srcAppInstituteInstituteMenuTs(module, __webpack_exports__, __webpack_require__) {
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
      link: '/institute/home',
      home: true,
      hidden: false
    }, // 2
    {
      title: 'My Institutes',
      icon: 'cube-outline',
      link: '/institute/my-institutes',
      hidden: false
    }, // 3
    {
      title: 'Dashboard',
      icon: 'shield-outline',
      link: '/institute/branch/dashboard',
      hidden: true
    }, // 4
    {
      title: 'Branch Management',
      icon: 'share-outline',
      hidden: true,
      children: [{
        title: 'Receipt Details',
        link: '/institute/branch/manage-branch/receipt',
        hidden: true
      }, {
        title: 'Course',
        link: '/institute/branch/manage-branch/course',
        hidden: true
      }, {
        title: 'Discount & Offers',
        link: '/institute/branch/manage-branch/discount-and-offers',
        hidden: true
      }]
    }, // 5
    {
      title: 'Student Management',
      icon: 'person-outline',
      hidden: true,
      children: [{
        title: 'Add Student',
        link: '/institute/branch/student/add',
        hidden: true
      }, {
        title: 'Active Students',
        link: '/institute/branch/student/manage',
        queryParams: {
          type: 'active'
        },
        hidden: true
      }, {
        title: 'Inactive Students',
        link: '/institute/branch/student/manage',
        queryParams: {
          type: 'inactive'
        },
        hidden: true
      }]
    }, // 6
    {
      title: 'Schedule Class',
      icon: 'calendar-outline',
      link: '/institute/branch/schedule/batch',
      hidden: true
    }, // 7
    {
      title: 'Lecture Management',
      icon: 'book-open-outline',
      link: '/institute/branch/lecture/batch',
      hidden: true
    }, // 8
    {
      title: 'Assignment Management',
      icon: 'archive-outline',
      link: '/institute/branch/assignment/batch',
      hidden: true
    }, // 9
    {
      title: 'Exam Management',
      icon: 'edit-2-outline',
      hidden: true,
      children: [{
        title: 'Schedule Classroom Test',
        link: '/institute/branch/exam/test/batch',
        hidden: true
      }, {
        title: 'Schedule Online Exam',
        link: '/institute/branch/exam/online-test/batch',
        hidden: true
      }]
    }, // 10
    {
      title: 'Employee Management',
      icon: 'people-outline',
      hidden: true,
      children: [{
        title: 'Add Employee',
        link: '/institute/branch/employee/add',
        hidden: true
      }, {
        title: 'Active Employees',
        link: '/institute/branch/employee/manage',
        queryParams: {
          type: 'active'
        },
        hidden: true
      }, {
        title: 'Inactive Employees',
        link: '/institute/branch/employee/manage',
        queryParams: {
          type: 'inactive'
        },
        hidden: true
      }]
    }, // 11
    {
      title: 'Leave Management',
      icon: 'log-out-outline',
      link: '/institute/branch/leave',
      hidden: true
    }, // 12
    {
      title: 'Lead Management',
      icon: 'search-outline',
      hidden: true,
      children: [{
        title: 'Add Lead',
        link: '/institute/branch/lead/add',
        hidden: true
      }, {
        title: 'Active Leads',
        link: '/institute/branch/lead/manage',
        queryParams: {
          type: 'active'
        }
      }, {
        title: 'Close Leads',
        link: '/institute/branch/lead/manage',
        queryParams: {
          type: 'inactive'
        }
      }]
    }, // 13
    {
      title: 'Student Reports',
      icon: 'bar-chart-outline',
      link: '/institute/branch/students-report',
      hidden: true
    }, // 14
    {
      title: 'Budget Management',
      icon: 'activity-outline',
      link: '/institute/branch/budget/manage',
      // badge: {
      //   text: '30',
      //   status: 'primary',
      // },
      hidden: true
    }];
    /***/
  },

  /***/
  "./src/app/institute/institute-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/institute/institute-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: InstituteRoutingModule */

  /***/
  function srcAppInstituteInstituteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstituteRoutingModule", function () {
      return InstituteRoutingModule;
    });
    /* harmony import */


    var _institute_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./institute.component */
    "./src/app/institute/institute.component.ts");
    /* harmony import */


    var _authentication_auth_guards_branch_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../authentication/auth/guards/branch.auth.guard */
    "./src/app/authentication/auth/guards/branch.auth.guard.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var routes = [{
      path: '',
      component: _institute_component__WEBPACK_IMPORTED_MODULE_0__["InstituteComponent"],
      children: [{
        path: 'profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e(1), __webpack_require__.e("common"), __webpack_require__.e(209)]).then(__webpack_require__.bind(null,
          /*! ./profile/profile.module */
          "./src/app/institute/profile/profile.module.ts")).then(function (m) {
            return m.ProfileModule;
          });
        },
        canActivate: []
      }, {
        path: 'transaction',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(211)]).then(__webpack_require__.bind(null,
          /*! ./transaction/transaction.module */
          "./src/app/institute/transaction/transaction.module.ts")).then(function (m) {
            return m.TransactionModule;
          });
        },
        canActivate: []
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(210)]).then(__webpack_require__.bind(null,
          /*! ./settings/settings.module */
          "./src/app/institute/settings/settings.module.ts")).then(function (m) {
            return m.SettingsModule;
          });
        },
        canActivate: []
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(205)]).then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "./src/app/institute/home/home.module.ts")).then(function (m) {
            return m.HomeModule;
          });
        },
        canActivate: []
      }, {
        path: 'my-institutes',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(206)]).then(__webpack_require__.bind(null,
          /*! ./manage-institute/manage-institute.module */
          "./src/app/institute/manage-institute/manage-institute.module.ts")).then(function (m) {
            return m.ManageInstituteModule;
          });
        },
        canActivate: []
      }, {
        path: 'membership-plans',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e(6), __webpack_require__.e("common"), __webpack_require__.e(208)]).then(__webpack_require__.bind(null,
          /*! ./membership-plans/membership-plans.module */
          "./src/app/institute/membership-plans/membership-plans.module.ts")).then(function (m) {
            return m.MembershipPlansModule;
          });
        },
        canActivate: []
      }, {
        path: 'add',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e(2), __webpack_require__.e(6), __webpack_require__.e(7)]).then(__webpack_require__.bind(null,
          /*! ./manage-institute/add-institute/add-institute.module */
          "./src/app/institute/manage-institute/add-institute/add-institute.module.ts")).then(function (m) {
            return m.AddInstituteModule;
          });
        },
        canActivate: []
      }, {
        path: 'view',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          207).then(__webpack_require__.bind(null,
          /*! ./manage-institute/view-institute/view-institute.module */
          "./src/app/institute/manage-institute/view-institute/view-institute.module.ts")).then(function (m) {
            return m.ViewInstituteModule;
          });
        },
        canActivate: []
      }, {
        path: 'edit',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e(2), __webpack_require__.e(6), __webpack_require__.e(7)]).then(__webpack_require__.bind(null,
          /*! ./manage-institute/add-institute/add-institute.module */
          "./src/app/institute/manage-institute/add-institute/add-institute.module.ts")).then(function (m) {
            return m.AddInstituteModule;
          });
        },
        canActivate: []
      }, {
        path: 'branch',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          54).then(__webpack_require__.bind(null,
          /*! ./branch/branch.module */
          "./src/app/institute/branch/branch.module.ts")).then(function (m) {
            return m.BranchModule;
          });
        },
        canActivate: [_authentication_auth_guards_branch_auth_guard__WEBPACK_IMPORTED_MODULE_1__["BranchAuthGuard"]]
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

    var InstituteRoutingModule =
    /*@__PURE__*/
    function () {
      var InstituteRoutingModule = function InstituteRoutingModule() {
        _classCallCheck(this, InstituteRoutingModule);
      };

      InstituteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: InstituteRoutingModule
      });
      InstituteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function InstituteRoutingModule_Factory(t) {
          return new (t || InstituteRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
      return InstituteRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](InstituteRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/institute/institute.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/institute/institute.component.ts ***!
    \**************************************************/

  /*! exports provided: InstituteComponent */

  /***/
  function srcAppInstituteInstituteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstituteComponent", function () {
      return InstituteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./menu.service */
    "./src/app/institute/menu.service.ts");
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

    var InstituteComponent =
    /*@__PURE__*/
    function () {
      var InstituteComponent =
      /*#__PURE__*/
      function () {
        function InstituteComponent(menuService) {
          _classCallCheck(this, InstituteComponent);

          this.menuService = menuService;
          this.menu = [];
        }

        _createClass(InstituteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.menuService.setMenuItemSequence();
            this.menu = this.menuService.getMenuItems();
          }
        }]);

        return InstituteComponent;
      }();

      InstituteComponent.ɵfac = function InstituteComponent_Factory(t) {
        return new (t || InstituteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]));
      };

      InstituteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InstituteComponent,
        selectors: [["ngx-institute"]],
        decls: 3,
        vars: 1,
        consts: [[3, "items"]],
        template: function InstituteComponent_Template(rf, ctx) {
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
        },
        directives: [_theme_layouts_one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_2__["OneColumnLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
        styles: [".nb-theme-default   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@-webkit-keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.nb-theme-dark   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.nb-theme-corporate   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}"]
      });
      return InstituteComponent;
    }();
    /***/

  },

  /***/
  "./src/app/institute/institute.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/institute/institute.module.ts ***!
    \***********************************************/

  /*! exports provided: InstituteModule */

  /***/
  function srcAppInstituteInstituteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstituteModule", function () {
      return InstituteModule;
    });
    /* harmony import */


    var _institute_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./institute.component */
    "./src/app/institute/institute.component.ts");
    /* harmony import */


    var _menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./menu.service */
    "./src/app/institute/menu.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var _institute_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./institute-routing.module */
    "./src/app/institute/institute-routing.module.ts");
    /* harmony import */


    var _payment_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./payment/payment.component */
    "./src/app/institute/payment/payment.component.ts");

    var InstituteModule =
    /*@__PURE__*/
    function () {
      var InstituteModule = function InstituteModule() {
        _classCallCheck(this, InstituteModule);
      };

      InstituteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: InstituteModule
      });
      InstituteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function InstituteModule_Factory(t) {
          return new (t || InstituteModule)();
        },
        providers: [_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]],
        imports: [[_institute_routing_module__WEBPACK_IMPORTED_MODULE_5__["InstituteRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuModule"]]]
      });
      return InstituteModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InstituteModule, {
        declarations: [_institute_component__WEBPACK_IMPORTED_MODULE_0__["InstituteComponent"], _payment_payment_component__WEBPACK_IMPORTED_MODULE_6__["PaymentComponent"]],
        imports: [_institute_routing_module__WEBPACK_IMPORTED_MODULE_5__["InstituteRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/institute/menu.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/institute/menu.service.ts ***!
    \*******************************************/

  /*! exports provided: MenuService */

  /***/
  function srcAppInstituteMenuServiceTs(module, __webpack_exports__, __webpack_require__) {
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


    var _institute_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./institute-menu */
    "./src/app/institute/institute-menu.ts");

    var MenuService =
    /*@__PURE__*/
    function () {
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
        }, {
          key: "hideMenu",
          value: function hideMenu() {
            this.menuItems = _institute_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"].map(function (menuItem, i) {
              if (i !== 0 && i !== 1) {
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
            this.menuItems = _institute_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"].map(function (menuItem, i) {
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
      return MenuService;
    }();
    /***/

  },

  /***/
  "./src/app/institute/payment/payment.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/institute/payment/payment.component.ts ***!
    \********************************************************/

  /*! exports provided: PaymentComponent */

  /***/
  function srcAppInstitutePaymentPaymentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentComponent", function () {
      return PaymentComponent;
    });
    /* harmony import */


    var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _services_payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/payment.service */
    "./src/app/services/payment.service.ts");
    /* harmony import */


    var _services_coupon_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/coupon.service */
    "./src/app/services/coupon.service.ts");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../services/order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var _authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../authentication/auth/auth-service/auth.service */
    "./src/app/authentication/auth/auth-service/auth.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var PaymentComponent =
    /*@__PURE__*/
    function () {
      var PaymentComponent =
      /*#__PURE__*/
      function () {
        function PaymentComponent(branchService, paymentService, couponService, orderService, authService, toastrService, ref) {
          _classCallCheck(this, PaymentComponent);

          this.branchService = branchService;
          this.paymentService = paymentService;
          this.couponService = couponService;
          this.orderService = orderService;
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
            var coupon = this.couponService.getAppliedCoupon();
            var branchId = this.branchService.getBranchId();
            this.orderDetails = {
              branch: branchId,
              userId: this.user.imsMasterId,
              userPhone: this.user.phone,
              userName: this.user.name,
              userEmail: this.user.email,
              imsMasterId: this.user.imsMasterId,
              amount: this.paymentDetails.amount,
              packageType: this.paymentDetails.packageType,
              planType: this.paymentDetails.planType
            };

            if (coupon) {
              this.orderDetails.coupon = coupon.code;
            }

            this.generateOrder();
            this.loading = false;
          }
        }, {
          key: "generateOrder",
          value: function generateOrder() {
            var _this2 = this;

            this.orderService.generateOrder(this.orderDetails).subscribe(function (res) {
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

            this.orderService.deleteOrder(this.placedOrderReceipt._id).subscribe(function (res) {
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

            this.paymentService.verifyPayment(payment, this.placedOrderReceipt).subscribe(function (res) {
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
          value: function ngOnDestroy() {
            this.couponService.deleteAppliedCoupon();
          }
        }]);

        return PaymentComponent;
      }();

      PaymentComponent.ɵfac = function PaymentComponent_Factory(t) {
        return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_coupon_service__WEBPACK_IMPORTED_MODULE_4__["CouponService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDialogRef"]));
      };

      PaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PaymentComponent,
        selectors: [["ngx-payment"]],
        decls: 0,
        vars: 0,
        template: function PaymentComponent_Template(rf, ctx) {},
        styles: [""]
      });
      return PaymentComponent;
    }();
    /***/

  },

  /***/
  "./src/app/services/order.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/order.service.ts ***!
    \*******************************************/

  /*! exports provided: OrderService */

  /***/
  function srcAppServicesOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared-services/http.service */
    "./src/app/services/shared-services/http.service.ts");

    var OrderService =
    /*@__PURE__*/
    function () {
      var OrderService =
      /*#__PURE__*/
      function () {
        function OrderService(httpService) {
          _classCallCheck(this, OrderService);

          this.httpService = httpService;
        }

        _createClass(OrderService, [{
          key: "getOrderDetails",
          value: function getOrderDetails() {
            return this.orderDetails;
          }
        }, {
          key: "setOrderDetails",
          value: function setOrderDetails(order) {
            this.orderDetails = order;
          }
        }, {
          key: "deleteOrderDetails",
          value: function deleteOrderDetails() {
            this.orderDetails = null;
          }
        }, {
          key: "deleteOrder",
          value: function deleteOrder(id) {
            var data = {
              api: 'deleteOrder',
              data: {
                id: id
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "generateOrder",
          value: function generateOrder(order) {
            var data = {
              api: 'generateOrder',
              data: order
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }]);

        return OrderService;
      }();

      OrderService.ɵfac = function OrderService_Factory(t) {
        return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: OrderService,
        factory: OrderService.ɵfac,
        providedIn: 'root'
      });
      return OrderService;
    }();
    /***/

  }
}]);
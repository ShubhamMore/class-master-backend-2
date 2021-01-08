(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43], {
    /***/
    "./src/app/employee/employee-menu.ts":
    /*!*******************************************!*\
      !*** ./src/app/employee/employee-menu.ts ***!
      \*******************************************/

    /*! exports provided: MENU_ITEMS */

    /***/
    function srcAppEmployeeEmployeeMenuTs(module, __webpack_exports__, __webpack_require__) {
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
        link: '/employee/home',
        home: true,
        hidden: false
      }, // 2
      {
        title: 'Dashboard',
        icon: '',
        link: '/employee/branch/dashboard',
        hidden: true
      }, // 3
      {
        title: 'My Salaries',
        icon: '',
        link: '/employee/branch/my-salary/manage',
        hidden: true
      }, // 4
      {
        title: 'My Leaves',
        icon: '',
        link: '/employee/branch/my-leave',
        hidden: true
      }, // 5
      {
        title: 'Branch Management',
        icon: '',
        hidden: true,
        children: [{
          title: 'Receipt Details',
          link: '/employee/branch/manage-branch/receipt',
          hidden: true
        }, {
          title: 'Course',
          link: '/employee/branch/manage-branch/course',
          hidden: true
        }, {
          title: 'Discount & Offers',
          link: '/employee/branch/manage-branch/discount-and-offers',
          hidden: true
        }]
      }, // 6
      {
        title: 'Student Management',
        icon: '',
        hidden: true,
        children: [{
          title: 'Add Student',
          link: '/employee/branch/student/add',
          hidden: true
        }, {
          title: 'Active Students',
          link: '/employee/branch/student/manage',
          queryParams: {
            type: 'active'
          },
          hidden: true
        }, {
          title: 'Inactive Students',
          link: '/employee/branch/student/manage',
          queryParams: {
            type: 'inactive'
          },
          hidden: true
        }]
      }, // 7
      {
        title: 'Schedule Class',
        icon: 'calendar-outline',
        link: '/employee/branch/schedule/batch',
        hidden: true
      }, // 8
      {
        title: 'Lecture Management',
        icon: 'book-open-outline',
        link: '/employee/branch/lecture/batch',
        hidden: true
      }, // 9
      {
        title: 'Exam Management',
        icon: '',
        hidden: true,
        children: [{
          title: 'Schedule Classroom Test',
          link: '/employee/branch/exam/test/batch',
          hidden: true
        }, {
          title: 'Schedule Online Exam',
          link: '/employee/branch/exam/online-test/manage',
          hidden: true
        }]
      }, // 10
      {
        title: 'Employee Management',
        icon: '',
        hidden: true,
        children: [{
          title: 'Add Employee',
          link: '/employee/branch/employee/add',
          hidden: true
        }, {
          title: 'Active Employees',
          link: '/employee/branch/employee/manage',
          queryParams: {
            type: 'active'
          },
          hidden: true
        }, {
          title: 'Inactive Employees',
          link: '/employee/branch/employee/manage',
          queryParams: {
            type: 'inactive'
          },
          hidden: true
        }]
      }, // 11
      {
        title: 'Leave Management',
        icon: '',
        link: '/employee/branch/leave',
        hidden: true
      }, // 12
      {
        title: 'Lead Management',
        icon: '',
        hidden: true,
        children: [{
          title: 'Add Lead',
          link: '/employee/branch/lead/add',
          hidden: true
        }, {
          title: 'Active Leads',
          link: '/employee/branch/lead/manage',
          queryParams: {
            type: 'active'
          }
        }, {
          title: 'Close Leads',
          link: '/employee/branch/lead/manage',
          queryParams: {
            type: 'inactive'
          }
        }]
      }, // 13
      {
        title: 'Students Report',
        icon: '',
        link: '/employee/branch/students-report',
        hidden: true
      }, // 14
      {
        title: 'Budget Management',
        icon: '',
        link: '/employee/branch/budget/manage',
        hidden: true
      }];
      /***/
    },

    /***/
    "./src/app/employee/employee-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/employee/employee-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: EmployeeRoutingModule */

    /***/
    function srcAppEmployeeEmployeeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function () {
        return EmployeeRoutingModule;
      });
      /* harmony import */


      var _employee_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./employee.component */
      "./src/app/employee/employee.component.ts");
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
        component: _employee_component__WEBPACK_IMPORTED_MODULE_0__["EmployeeComponent"],
        children: [{
          path: 'profile',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e(1), __webpack_require__.e("common"), __webpack_require__.e(140)]).then(__webpack_require__.bind(null,
            /*! ./profile/profile.module */
            "./src/app/employee/profile/profile.module.ts")).then(function (m) {
              return m.ProfileModule;
            });
          },
          canActivate: []
        }, {
          path: 'home',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            139).then(__webpack_require__.bind(null,
            /*! ./home/home.module */
            "./src/app/employee/home/home.module.ts")).then(function (m) {
              return m.HomeModule;
            });
          },
          canActivate: []
        }, {
          path: 'branch',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(50)]).then(__webpack_require__.bind(null,
            /*! ./branch/branch.module */
            "./src/app/employee/branch/branch.module.ts")).then(function (m) {
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

      var EmployeeRoutingModule = /*@__PURE__*/function () {
        var EmployeeRoutingModule = function EmployeeRoutingModule() {
          _classCallCheck(this, EmployeeRoutingModule);
        };

        EmployeeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
          type: EmployeeRoutingModule
        });
        EmployeeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
          factory: function EmployeeRoutingModule_Factory(t) {
            return new (t || EmployeeRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
        return EmployeeRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EmployeeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/employee/employee.component.ts":
    /*!************************************************!*\
      !*** ./src/app/employee/employee.component.ts ***!
      \************************************************/

    /*! exports provided: EmployeeComponent */

    /***/
    function srcAppEmployeeEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function () {
        return EmployeeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menu.service */
      "./src/app/employee/menu.service.ts");
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

      var EmployeeComponent = /*@__PURE__*/function () {
        var EmployeeComponent = /*#__PURE__*/function () {
          function EmployeeComponent(menuService) {
            _classCallCheck(this, EmployeeComponent);

            this.menuService = menuService;
            this.menu = [];
          }

          _createClass(EmployeeComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.menuService.setMenuItemSequence();
              this.menu = this.menuService.getMenuItems();
            }
          }]);

          return EmployeeComponent;
        }();

        EmployeeComponent.ɵfac = function EmployeeComponent_Factory(t) {
          return new (t || EmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]));
        };

        EmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: EmployeeComponent,
          selectors: [["ngx-employee"]],
          decls: 3,
          vars: 1,
          consts: [[3, "items"]],
          template: function EmployeeComponent_Template(rf, ctx) {
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
        return EmployeeComponent;
      }();
      /***/

    },

    /***/
    "./src/app/employee/employee.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/employee/employee.module.ts ***!
      \*********************************************/

    /*! exports provided: EmployeeModule */

    /***/
    function srcAppEmployeeEmployeeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeModule", function () {
        return EmployeeModule;
      });
      /* harmony import */


      var _employee_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./employee.component */
      "./src/app/employee/employee.component.ts");
      /* harmony import */


      var _menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menu.service */
      "./src/app/employee/menu.service.ts");
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
      /*! ./../@theme/theme.module */
      "./src/app/@theme/theme.module.ts");
      /* harmony import */


      var _employee_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./employee-routing.module */
      "./src/app/employee/employee-routing.module.ts");

      var EmployeeModule = /*@__PURE__*/function () {
        var EmployeeModule = function EmployeeModule() {
          _classCallCheck(this, EmployeeModule);
        };

        EmployeeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
          type: EmployeeModule
        });
        EmployeeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
          factory: function EmployeeModule_Factory(t) {
            return new (t || EmployeeModule)();
          },
          providers: [_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]],
          imports: [[_employee_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmployeeRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuModule"]]]
        });
        return EmployeeModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmployeeModule, {
          declarations: [_employee_component__WEBPACK_IMPORTED_MODULE_0__["EmployeeComponent"]],
          imports: [_employee_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmployeeRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/employee/menu.service.ts":
    /*!******************************************!*\
      !*** ./src/app/employee/menu.service.ts ***!
      \******************************************/

    /*! exports provided: MenuService */

    /***/
    function srcAppEmployeeMenuServiceTs(module, __webpack_exports__, __webpack_require__) {
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


      var _employee_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./employee-menu */
      "./src/app/employee/employee-menu.ts");
      /* harmony import */


      var _services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../services/role.service */
      "./src/app/services/role.service.ts");

      var MenuService = /*@__PURE__*/function () {
        var MenuService = /*#__PURE__*/function () {
          function MenuService(roleService) {
            var _this = this;

            _classCallCheck(this, MenuService);

            this.roleService = roleService;
            this.menuItems = [];
            roleService.getEmployeeRole().subscribe(function (role) {
              _this.role = role;
            });
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
              this.menuItems.push(_employee_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][0]); // home

              this.menuItems.push(_employee_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][1]); // dashboard

              this.menuItems.push(_employee_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][2]); // My Salaries

              this.menuItems.push(_employee_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][3]); // My Leaves

              this.menuItems.push(_employee_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][4]); // branch management

              this.menuItems.push(_employee_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][5]); // student management

              this.menuItems.push(_employee_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][6]); // schedule management

              this.menuItems.push(_employee_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][7]); // lecture management

              this.menuItems.push(_employee_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][8]); // exam management

              this.menuItems.push(_employee_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][9]); // employee management

              this.menuItems.push(_employee_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][10]); // Leave management

              this.menuItems.push(_employee_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][11]); // lead management

              this.menuItems.push(_employee_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][12]); // students report

              this.menuItems.push(_employee_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][13]); // budget managements
            }
          }, {
            key: "showHideMenu",
            value: function showHideMenu(i, status) {
              var menuItem = _employee_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][i];
              menuItem.hidden = status;

              if (menuItem.children) {
                _employee_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"][i].children.map(function (menuItemChildren) {
                  menuItemChildren.hidden = status;
                });
              }
            }
          }, {
            key: "hideMenus",
            value: function hideMenus() {
              this.menuItems = _employee_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"].map(function (menuItem, i) {
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
            key: "showMenus",
            value: function showMenus() {
              this.showHideMenu(0, false);

              if (this.role) {
                this.showHideMenu(1, false);
              }

              if (this.role === 'manager') {
                this.showHideMenu(2, false);
                this.showHideMenu(3, false);
                this.showHideMenu(4, false);
                this.showHideMenu(5, false);
                this.showHideMenu(6, false);
                this.showHideMenu(7, false);
                this.showHideMenu(8, false);
                this.showHideMenu(9, false);
                this.showHideMenu(10, false);
                this.showHideMenu(11, false);
                this.showHideMenu(12, false);
                this.showHideMenu(13, false);
              } else if (this.role === 'teacher') {
                this.showHideMenu(2, false);
                this.showHideMenu(3, false);
                this.showHideMenu(4, false);
                this.showHideMenu(5, true);
                this.showHideMenu(6, false);
                this.showHideMenu(7, false);
                this.showHideMenu(8, false);
                this.showHideMenu(9, true);
                this.showHideMenu(10, true);
                this.showHideMenu(11, true);
                this.showHideMenu(12, false);
                this.showHideMenu(13, true);
              } else if (this.role === 'councillor') {
                this.showHideMenu(2, false);
                this.showHideMenu(3, false);
                this.showHideMenu(4, false);
                this.showHideMenu(5, true);
                this.showHideMenu(6, false);
                this.showHideMenu(7, false);
                this.showHideMenu(8, false);
                this.showHideMenu(9, true);
                this.showHideMenu(10, true);
                this.showHideMenu(11, true);
                this.showHideMenu(12, false);
                this.showHideMenu(13, true);
              } else {
                this.hideMenus();
              }
            }
          }]);

          return MenuService;
        }();

        MenuService.ɵfac = function MenuService_Factory(t) {
          return new (t || MenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"]));
        };

        MenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: MenuService,
          factory: MenuService.ɵfac
        });
        return MenuService;
      }();
      /***/

    }
  }]);
})();
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45], {
  /***/
  "./src/app/student/branch/branch-header/branch-header.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/student/branch/branch-header/branch-header.component.ts ***!
    \*************************************************************************/

  /*! exports provided: BranchHeaderComponent */

  /***/
  function srcAppStudentBranchBranchHeaderBranchHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BranchHeaderComponent", function () {
      return BranchHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BranchHeaderComponent =
    /*@__PURE__*/
    function () {
      var BranchHeaderComponent =
      /*#__PURE__*/
      function () {
        function BranchHeaderComponent(branchService, router, route) {
          _classCallCheck(this, BranchHeaderComponent);

          this.branchService = branchService;
          this.router = router;
          this.route = route;
        }

        _createClass(BranchHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.loading = true;
            this.branchId = this.branchService.getBranchId();

            if (!this.branchId) {
              this.router.navigate(['../page-not-found'], {
                relativeTo: this.route
              });
              return;
            }

            this.branchService.getBranch(this.branchId).subscribe(function (branch) {
              _this.branch = branch;

              _this.branchService.setBranchData(branch);

              _this.loading = false;
            }, function (err) {// this.router.navigate(['../page-not-found'], { relativeTo: this.route });
            });
          }
        }]);

        return BranchHeaderComponent;
      }();

      BranchHeaderComponent.ɵfac = function BranchHeaderComponent_Factory(t) {
        return new (t || BranchHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      BranchHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BranchHeaderComponent,
        selectors: [["ngx-branch-header"]],
        decls: 0,
        vars: 0,
        template: function BranchHeaderComponent_Template(rf, ctx) {},
        styles: [""]
      });
      return BranchHeaderComponent;
    }();
    /***/

  },

  /***/
  "./src/app/student/branch/branch-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/student/branch/branch-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: BranchRoutingModule */

  /***/
  function srcAppStudentBranchBranchRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BranchRoutingModule", function () {
      return BranchRoutingModule;
    });
    /* harmony import */


    var _branch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./branch.component */
    "./src/app/student/branch/branch.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var routes = [{
      path: '',
      component: _branch_component__WEBPACK_IMPORTED_MODULE_0__["BranchComponent"],
      children: [{
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(233)]).then(__webpack_require__.bind(null,
          /*! ./dashboard/dashboard.module */
          "./src/app/student/branch/dashboard/dashboard.module.ts")).then(function (m) {
            return m.DashboardModule;
          });
        }
      }, {
        path: 'course',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          220).then(__webpack_require__.bind(null,
          /*! ./course/course.module */
          "./src/app/student/branch/course/course.module.ts")).then(function (m) {
            return m.CourseModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'page-not-found',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          0).then(__webpack_require__.bind(null,
          /*! ../../shared/page-not-found/page-not-found.module */
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

    var BranchRoutingModule =
    /*@__PURE__*/
    function () {
      var BranchRoutingModule = function BranchRoutingModule() {
        _classCallCheck(this, BranchRoutingModule);
      };

      BranchRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: BranchRoutingModule
      });
      BranchRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function BranchRoutingModule_Factory(t) {
          return new (t || BranchRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      return BranchRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BranchRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/student/branch/branch.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/student/branch/branch.component.ts ***!
    \****************************************************/

  /*! exports provided: BranchComponent */

  /***/
  function srcAppStudentBranchBranchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BranchComponent", function () {
      return BranchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _services_institute_keys_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/institute-keys.service */
    "./src/app/services/institute-keys.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _branch_header_branch_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./branch-header/branch-header.component */
    "./src/app/student/branch/branch-header/branch-header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BranchComponent_router_outlet_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    }

    var BranchComponent =
    /*@__PURE__*/
    function () {
      var BranchComponent =
      /*#__PURE__*/
      function () {
        function BranchComponent(toastrService, branchService, instituteKeysService, router, route) {
          _classCallCheck(this, BranchComponent);

          this.toastrService = toastrService;
          this.branchService = branchService;
          this.instituteKeysService = instituteKeysService;
          this.router = router;
          this.route = route;
        }

        _createClass(BranchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.loading = true;
            this.branchId = this.branchService.getBranchId();

            if (!this.branchId) {
              this.router.navigate(['../page-not-found'], {
                relativeTo: this.route
              });
              return;
            }

            this.branchService.getBranchForStudent(this.branchId).subscribe(function (branch) {
              _this2.branchService.setBranchData(branch);

              _this2.loading = false;
            }, function (error) {
              _this2.showToastr('top-right', 'danger', error);

              _this2.router.navigate(['../'], {
                relativeTo: _this2.route
              });
            });
            this.instituteKeysService.getInstitutePaymentAccessKey(this.branchId).subscribe(function (paymentGateway) {
              if (paymentGateway && paymentGateway.accessKey) {
                _this2.instituteKeysService.setLocalInstitutePaymentAccessKey(paymentGateway.accessKey);
              }
            }, function (error) {});
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
            this.branchService.deleteBranchId();
            this.branchService.deleteBranchData();
            this.instituteKeysService.setLocalInstitutePaymentAccessKey(null);
          }
        }]);

        return BranchComponent;
      }();

      BranchComponent.ɵfac = function BranchComponent_Factory(t) {
        return new (t || BranchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_institute_keys_service__WEBPACK_IMPORTED_MODULE_3__["InstituteKeysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      BranchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BranchComponent,
        selectors: [["ngx-branch"]],
        decls: 2,
        vars: 1,
        consts: [[4, "ngIf"]],
        template: function BranchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-branch-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BranchComponent_router_outlet_1_Template, 1, 0, "router-outlet", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
          }
        },
        directives: [_branch_header_branch_header_component__WEBPACK_IMPORTED_MODULE_5__["BranchHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
        styles: [""]
      });
      return BranchComponent;
    }();
    /***/

  },

  /***/
  "./src/app/student/branch/branch.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/student/branch/branch.module.ts ***!
    \*************************************************/

  /*! exports provided: BranchModule */

  /***/
  function srcAppStudentBranchBranchModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BranchModule", function () {
      return BranchModule;
    });
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _branch_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./branch-routing.module */
    "./src/app/student/branch/branch-routing.module.ts");
    /* harmony import */


    var _branch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./branch.component */
    "./src/app/student/branch/branch.component.ts");
    /* harmony import */


    var _branch_header_branch_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./branch-header/branch-header.component */
    "./src/app/student/branch/branch-header/branch-header.component.ts");
    /* harmony import */


    var _student_branch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./student-branch.service */
    "./src/app/student/branch/student-branch.service.ts");

    var BranchModule =
    /*@__PURE__*/
    function () {
      var BranchModule = function BranchModule() {
        _classCallCheck(this, BranchModule);
      };

      BranchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: BranchModule
      });
      BranchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function BranchModule_Factory(t) {
          return new (t || BranchModule)();
        },
        providers: [_student_branch_service__WEBPACK_IMPORTED_MODULE_6__["StudentBranchService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _branch_routing_module__WEBPACK_IMPORTED_MODULE_3__["BranchRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbUserModule"]]]
      });
      return BranchModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BranchModule, {
        declarations: [_branch_component__WEBPACK_IMPORTED_MODULE_4__["BranchComponent"], _branch_header_branch_header_component__WEBPACK_IMPORTED_MODULE_5__["BranchHeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _branch_routing_module__WEBPACK_IMPORTED_MODULE_3__["BranchRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbUserModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/student/branch/student-branch.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/student/branch/student-branch.service.ts ***!
    \**********************************************************/

  /*! exports provided: StudentBranchService */

  /***/
  function srcAppStudentBranchStudentBranchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentBranchService", function () {
      return StudentBranchService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StudentBranchService =
    /*@__PURE__*/
    function () {
      var StudentBranchService =
      /*#__PURE__*/
      function () {
        function StudentBranchService() {
          _classCallCheck(this, StudentBranchService);
        }

        _createClass(StudentBranchService, [{
          key: "setType",
          value: function setType(type) {
            this.type = type;
          }
        }, {
          key: "getType",
          value: function getType() {
            return this.type;
          }
        }]);

        return StudentBranchService;
      }();

      StudentBranchService.ɵfac = function StudentBranchService_Factory(t) {
        return new (t || StudentBranchService)();
      };

      StudentBranchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StudentBranchService,
        factory: StudentBranchService.ɵfac
      });
      return StudentBranchService;
    }();
    /***/

  }
}]);
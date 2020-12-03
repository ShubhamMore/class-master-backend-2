function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[128], {
  /***/
  "./src/app/employee/branch/student/student-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/employee/branch/student/student-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: StudentRoutingModule */

  /***/
  function srcAppEmployeeBranchStudentStudentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentRoutingModule", function () {
      return StudentRoutingModule;
    });
    /* harmony import */


    var _student_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./student.component */
    "./src/app/employee/branch/student/student.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _student_component__WEBPACK_IMPORTED_MODULE_0__["StudentComponent"],
      children: [{
        path: 'add',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e(1), __webpack_require__.e("common"), __webpack_require__.e(19)]).then(__webpack_require__.bind(null,
          /*! ./add-student/add-student.module */
          "./src/app/employee/branch/student/add-student/add-student.module.ts")).then(function (m) {
            return m.AddStudentModule;
          });
        }
      }, {
        path: 'edit',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e(1), __webpack_require__.e("common"), __webpack_require__.e(19)]).then(__webpack_require__.bind(null,
          /*! ./add-student/add-student.module */
          "./src/app/employee/branch/student/add-student/add-student.module.ts")).then(function (m) {
            return m.AddStudentModule;
          });
        }
      }, {
        path: 'manage',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(120)]).then(__webpack_require__.bind(null,
          /*! ./manage-student/manage-student.module */
          "./src/app/employee/branch/student/manage-student/manage-student.module.ts")).then(function (m) {
            return m.ManageStudentModule;
          });
        }
      }, {
        path: 'course',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(127)]).then(__webpack_require__.bind(null,
          /*! ./student-course/student-course.module */
          "./src/app/employee/branch/student/student-course/student-course.module.ts")).then(function (m) {
            return m.StudentCourseModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'manage?type=active',
        pathMatch: 'full'
      }, {
        path: 'page-not-found',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          0).then(__webpack_require__.bind(null,
          /*! ../../../shared/page-not-found/page-not-found.module */
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

    StudentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: StudentRoutingModule
    });
    StudentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function StudentRoutingModule_Factory(t) {
        return new (t || StudentRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StudentRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StudentRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/employee/branch/student/student.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/employee/branch/student/student.component.ts ***!
    \**************************************************************/

  /*! exports provided: StudentComponent */

  /***/
  function srcAppEmployeeBranchStudentStudentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentComponent", function () {
      return StudentComponent;
    });
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var StudentComponent =
    /*#__PURE__*/
    function () {
      function StudentComponent(branchService, studentService, router, route) {
        _classCallCheck(this, StudentComponent);

        this.branchService = branchService;
        this.studentService = studentService;
        this.router = router;
        this.route = route;
      }

      _createClass(StudentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loading = true;
          this.branchId = this.branchService.getBranchId();

          if (!this.branchId) {
            this.router.navigate(['../'], {
              relativeTo: this.route
            });
            return;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.studentService.deleteStudentType();
        }
      }]);

      return StudentComponent;
    }();

    StudentComponent.ɵfac = function StudentComponent_Factory(t) {
      return new (t || StudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_0__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    StudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: StudentComponent,
      selectors: [["ngx-student"]],
      decls: 1,
      vars: 0,
      template: function StudentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StudentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'ngx-student',
          templateUrl: './student.component.html',
          styleUrls: ['./student.component.scss']
        }]
      }], function () {
        return [{
          type: _services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]
        }, {
          type: _services_student_service__WEBPACK_IMPORTED_MODULE_0__["StudentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/employee/branch/student/student.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/employee/branch/student/student.module.ts ***!
    \***********************************************************/

  /*! exports provided: StudentModule */

  /***/
  function srcAppEmployeeBranchStudentStudentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentModule", function () {
      return StudentModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _student_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./student-routing.module */
    "./src/app/employee/branch/student/student-routing.module.ts");
    /* harmony import */


    var _student_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./student.component */
    "./src/app/employee/branch/student/student.component.ts");

    var StudentModule = function StudentModule() {
      _classCallCheck(this, StudentModule);
    };

    StudentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StudentModule
    });
    StudentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function StudentModule_Factory(t) {
        return new (t || StudentModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _student_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentModule, {
        declarations: [_student_component__WEBPACK_IMPORTED_MODULE_3__["StudentComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _student_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_student_component__WEBPACK_IMPORTED_MODULE_3__["StudentComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _student_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
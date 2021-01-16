(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[211], {
    /***/
    "./src/app/institute/branch/students-report/students-report-routing.module.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/institute/branch/students-report/students-report-routing.module.ts ***!
      \************************************************************************************/

    /*! exports provided: StudentsReportRoutingModule */

    /***/
    function srcAppInstituteBranchStudentsReportStudentsReportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentsReportRoutingModule", function () {
        return StudentsReportRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: 'manage',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(206)]).then(__webpack_require__.bind(null,
          /*! ./manage-student-reports/manage-student-reports.module */
          "./src/app/institute/branch/students-report/manage-student-reports/manage-student-reports.module.ts")).then(function (m) {
            return m.ManageStudentReportsModule;
          });
        }
      }, {
        path: 'course',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(210)]).then(__webpack_require__.bind(null,
          /*! ./student-courses/student-courses.module */
          "./src/app/institute/branch/students-report/student-courses/student-courses.module.ts")).then(function (m) {
            return m.StudentCoursesModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'manage',
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
      }];

      var StudentsReportRoutingModule = /*@__PURE__*/function () {
        var StudentsReportRoutingModule = function StudentsReportRoutingModule() {
          _classCallCheck(this, StudentsReportRoutingModule);
        };

        StudentsReportRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: StudentsReportRoutingModule
        });
        StudentsReportRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function StudentsReportRoutingModule_Factory(t) {
            return new (t || StudentsReportRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return StudentsReportRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentsReportRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/institute/branch/students-report/students-report.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/institute/branch/students-report/students-report.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: StudentsReportComponent */

    /***/
    function srcAppInstituteBranchStudentsReportStudentsReportComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentsReportComponent", function () {
        return StudentsReportComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var StudentsReportComponent = /*@__PURE__*/function () {
        var StudentsReportComponent = /*#__PURE__*/function () {
          function StudentsReportComponent() {
            _classCallCheck(this, StudentsReportComponent);
          }

          _createClass(StudentsReportComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return StudentsReportComponent;
        }();

        StudentsReportComponent.ɵfac = function StudentsReportComponent_Factory(t) {
          return new (t || StudentsReportComponent)();
        };

        StudentsReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: StudentsReportComponent,
          selectors: [["ngx-students-report"]],
          decls: 1,
          vars: 0,
          template: function StudentsReportComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
          },
          directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
          styles: [""]
        });
        return StudentsReportComponent;
      }();
      /***/

    },

    /***/
    "./src/app/institute/branch/students-report/students-report.module.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/institute/branch/students-report/students-report.module.ts ***!
      \****************************************************************************/

    /*! exports provided: StudentsReportModule */

    /***/
    function srcAppInstituteBranchStudentsReportStudentsReportModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentsReportModule", function () {
        return StudentsReportModule;
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


      var _students_report_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./students-report-routing.module */
      "./src/app/institute/branch/students-report/students-report-routing.module.ts");
      /* harmony import */


      var _students_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./students-report.component */
      "./src/app/institute/branch/students-report/students-report.component.ts");

      var StudentsReportModule = /*@__PURE__*/function () {
        var StudentsReportModule = function StudentsReportModule() {
          _classCallCheck(this, StudentsReportModule);
        };

        StudentsReportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: StudentsReportModule
        });
        StudentsReportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function StudentsReportModule_Factory(t) {
            return new (t || StudentsReportModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _students_report_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentsReportRoutingModule"]]]
        });
        return StudentsReportModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentsReportModule, {
          declarations: [_students_report_component__WEBPACK_IMPORTED_MODULE_3__["StudentsReportComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _students_report_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentsReportRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();
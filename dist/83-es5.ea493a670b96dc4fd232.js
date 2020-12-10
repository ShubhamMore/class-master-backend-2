function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83], {
  /***/
  "./src/app/employee/branch/exam/online-test/online-test-question/online-test-question-routing.module.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/employee/branch/exam/online-test/online-test-question/online-test-question-routing.module.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: OnlineTestQuestionRoutingModule */

  /***/
  function srcAppEmployeeBranchExamOnlineTestOnlineTestQuestionOnlineTestQuestionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlineTestQuestionRoutingModule", function () {
      return OnlineTestQuestionRoutingModule;
    });
    /* harmony import */


    var _online_test_question_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./online-test-question.component */
    "./src/app/employee/branch/exam/online-test/online-test-question/online-test-question.component.ts");
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
      component: _online_test_question_component__WEBPACK_IMPORTED_MODULE_0__["OnlineTestQuestionComponent"],
      children: [{
        path: 'manage',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          82).then(__webpack_require__.bind(null,
          /*! ./manage-online-test-questions/manage-online-test-questions.module */
          "./src/app/employee/branch/exam/online-test/online-test-question/manage-online-test-questions/manage-online-test-questions.module.ts")).then(function (m) {
            return m.ManageOnlineTestQuestionsModule;
          });
        }
      }, {
        path: 'add',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          12).then(__webpack_require__.bind(null,
          /*! ./add-online-test-questions/add-online-test-questions.module */
          "./src/app/employee/branch/exam/online-test/online-test-question/add-online-test-questions/add-online-test-questions.module.ts")).then(function (m) {
            return m.AddOnlineTestQuestionsModule;
          });
        }
      }, {
        path: 'edit',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          12).then(__webpack_require__.bind(null,
          /*! ./add-online-test-questions/add-online-test-questions.module */
          "./src/app/employee/branch/exam/online-test/online-test-question/add-online-test-questions/add-online-test-questions.module.ts")).then(function (m) {
            return m.AddOnlineTestQuestionsModule;
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
          /*! ../../../../../shared/page-not-found/page-not-found.module */
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

    var OnlineTestQuestionRoutingModule =
    /*@__PURE__*/
    function () {
      var OnlineTestQuestionRoutingModule = function OnlineTestQuestionRoutingModule() {
        _classCallCheck(this, OnlineTestQuestionRoutingModule);
      };

      OnlineTestQuestionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: OnlineTestQuestionRoutingModule
      });
      OnlineTestQuestionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function OnlineTestQuestionRoutingModule_Factory(t) {
          return new (t || OnlineTestQuestionRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
      return OnlineTestQuestionRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OnlineTestQuestionRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/employee/branch/exam/online-test/online-test-question/online-test-question.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/employee/branch/exam/online-test/online-test-question/online-test-question.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: OnlineTestQuestionComponent */

  /***/
  function srcAppEmployeeBranchExamOnlineTestOnlineTestQuestionOnlineTestQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlineTestQuestionComponent", function () {
      return OnlineTestQuestionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_online_exam_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../../services/online-exam.service */
    "./src/app/services/online-exam.service.ts");
    /* harmony import */


    var _services_online_exam_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../../services/online-exam-question.service */
    "./src/app/services/online-exam-question.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function OnlineTestQuestionComponent_router_outlet_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    }

    var OnlineTestQuestionComponent =
    /*@__PURE__*/
    function () {
      var OnlineTestQuestionComponent =
      /*#__PURE__*/
      function () {
        function OnlineTestQuestionComponent(onlineExamService, onlineExamQuestionService, router, route) {
          _classCallCheck(this, OnlineTestQuestionComponent);

          this.onlineExamService = onlineExamService;
          this.onlineExamQuestionService = onlineExamQuestionService;
          this.router = router;
          this.route = route;
        }

        _createClass(OnlineTestQuestionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.loading = true;
            this.onlineExamService.getOnlineExamData().subscribe(function (onlineExam) {
              if (!onlineExam) {
                _this.router.navigate(['../'], {
                  relativeTo: _this.route
                });

                return;
              }

              _this.loading = false;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.onlineExamQuestionService.deleteOnlineExamQuestionId();
            this.onlineExamQuestionService.deleteOnlineExamQuestionData();
            this.onlineExamService.deleteOnlineExamId();
            this.onlineExamService.deleteOnlineExamData();
          }
        }]);

        return OnlineTestQuestionComponent;
      }();

      OnlineTestQuestionComponent.ɵfac = function OnlineTestQuestionComponent_Factory(t) {
        return new (t || OnlineTestQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_online_exam_service__WEBPACK_IMPORTED_MODULE_1__["OnlineExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_online_exam_question_service__WEBPACK_IMPORTED_MODULE_2__["OnlineExamQuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      OnlineTestQuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OnlineTestQuestionComponent,
        selectors: [["ngx-online-test-question"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"]],
        template: function OnlineTestQuestionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OnlineTestQuestionComponent_router_outlet_0_Template, 1, 0, "router-outlet", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: [""]
      });
      return OnlineTestQuestionComponent;
    }();
    /***/

  },

  /***/
  "./src/app/employee/branch/exam/online-test/online-test-question/online-test-question.module.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/employee/branch/exam/online-test/online-test-question/online-test-question.module.ts ***!
    \******************************************************************************************************/

  /*! exports provided: OnlineTestQuestionModule */

  /***/
  function srcAppEmployeeBranchExamOnlineTestOnlineTestQuestionOnlineTestQuestionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlineTestQuestionModule", function () {
      return OnlineTestQuestionModule;
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


    var _online_test_question_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./online-test-question-routing.module */
    "./src/app/employee/branch/exam/online-test/online-test-question/online-test-question-routing.module.ts");
    /* harmony import */


    var _online_test_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./online-test-question.component */
    "./src/app/employee/branch/exam/online-test/online-test-question/online-test-question.component.ts");

    var OnlineTestQuestionModule =
    /*@__PURE__*/
    function () {
      var OnlineTestQuestionModule = function OnlineTestQuestionModule() {
        _classCallCheck(this, OnlineTestQuestionModule);
      };

      OnlineTestQuestionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OnlineTestQuestionModule
      });
      OnlineTestQuestionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OnlineTestQuestionModule_Factory(t) {
          return new (t || OnlineTestQuestionModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _online_test_question_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnlineTestQuestionRoutingModule"]]]
      });
      return OnlineTestQuestionModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OnlineTestQuestionModule, {
        declarations: [_online_test_question_component__WEBPACK_IMPORTED_MODULE_3__["OnlineTestQuestionComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _online_test_question_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnlineTestQuestionRoutingModule"]]
      });
    })();
    /***/

  }
}]);
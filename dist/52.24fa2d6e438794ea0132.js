(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./src/app/institute/branch/exam/online-test/online-test-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/institute/branch/exam/online-test/online-test-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: OnlineTestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineTestRoutingModule", function() { return OnlineTestRoutingModule; });
/* harmony import */ var _online_test_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./online-test.component */ "./src/app/institute/branch/exam/online-test/online-test.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





var routes = [
    {
        path: '',
        component: _online_test_component__WEBPACK_IMPORTED_MODULE_0__["OnlineTestComponent"],
        children: [
            {
                path: 'batch',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() */ 169).then(__webpack_require__.bind(null, /*! ./manage-batch-online-test/manage-batch-online-test.module */ "./src/app/institute/branch/exam/online-test/manage-batch-online-test/manage-batch-online-test.module.ts")).then(function (m) { return m.ManageBatchOnlineTestModule; });
                },
            },
            {
                path: 'manage',
                loadChildren: function () {
                    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(170)]).then(__webpack_require__.bind(null, /*! ./manage-online-test/manage-online-test.module */ "./src/app/institute/branch/exam/online-test/manage-online-test/manage-online-test.module.ts")).then(function (m) { return m.ManageOnlineTestModule; });
                },
            },
            {
                path: 'add',
                loadChildren: function () {
                    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, /*! ./add-online-test/add-online-test.module */ "./src/app/institute/branch/exam/online-test/add-online-test/add-online-test.module.ts")).then(function (m) { return m.AddOnlineTestModule; });
                },
            },
            {
                path: 'edit',
                loadChildren: function () {
                    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, /*! ./add-online-test/add-online-test.module */ "./src/app/institute/branch/exam/online-test/add-online-test/add-online-test.module.ts")).then(function (m) { return m.AddOnlineTestModule; });
                },
            },
            {
                path: 'question',
                loadChildren: function () {
                    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(172)]).then(__webpack_require__.bind(null, /*! ./online-test-question/online-test-question.module */ "./src/app/institute/branch/exam/online-test/online-test-question/online-test-question.module.ts")).then(function (m) { return m.OnlineTestQuestionModule; });
                },
            },
            {
                path: '',
                redirectTo: 'batch',
                pathMatch: 'full',
            },
            {
                path: 'page-not-found',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then(function (m) { return m.PageNotFoundModule; });
                },
            },
            {
                path: '**',
                redirectTo: 'page-not-found',
                pathMatch: 'full',
            },
        ],
    },
];
var OnlineTestRoutingModule = /** @class */ /*@__PURE__*/ (function () {
    function OnlineTestRoutingModule() {
    }
    OnlineTestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OnlineTestRoutingModule });
    OnlineTestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function OnlineTestRoutingModule_Factory(t) { return new (t || OnlineTestRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return OnlineTestRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OnlineTestRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/institute/branch/exam/online-test/online-test.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/institute/branch/exam/online-test/online-test.component.ts ***!
  \****************************************************************************/
/*! exports provided: OnlineTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineTestComponent", function() { return OnlineTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_batch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/batch.service */ "./src/app/services/batch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");







function OnlineTestComponent_router_outlet_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
}
var OnlineTestComponent = /** @class */ /*@__PURE__*/ (function () {
    function OnlineTestComponent(branchService, courseService, batchService, router, route) {
        this.branchService = branchService;
        this.courseService = courseService;
        this.batchService = batchService;
        this.router = router;
        this.route = route;
    }
    OnlineTestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.branchId = this.branchService.getBranchId();
        if (!this.branchId) {
            this.router.navigate(['../'], { relativeTo: this.route });
            return;
        }
        this.courseService.getCourses(this.branchId, '').subscribe(function (courses) {
            _this.courseService.setCoursesData(courses);
        }, function (error) { });
        this.batchService.getBatches(this.branchId, '', '').subscribe(function (batches) {
            _this.batchService.setBatchesData(batches);
            _this.loading = false;
        }, function (error) { });
    };
    OnlineTestComponent.prototype.ngOnDestroy = function () {
        this.courseService.deleteCoursesData();
        this.batchService.deleteBatchesData();
    };
    OnlineTestComponent.ɵfac = function OnlineTestComponent_Factory(t) { return new (t || OnlineTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_3__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
    OnlineTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OnlineTestComponent, selectors: [["ngx-online-test"]], decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function OnlineTestComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OnlineTestComponent_router_outlet_0_Template, 1, 0, "router-outlet", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [""] });
    return OnlineTestComponent;
}());



/***/ }),

/***/ "./src/app/institute/branch/exam/online-test/online-test.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/institute/branch/exam/online-test/online-test.module.ts ***!
  \*************************************************************************/
/*! exports provided: OnlineTestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineTestModule", function() { return OnlineTestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _online_test_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./online-test-routing.module */ "./src/app/institute/branch/exam/online-test/online-test-routing.module.ts");
/* harmony import */ var _online_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./online-test.component */ "./src/app/institute/branch/exam/online-test/online-test.component.ts");





var OnlineTestModule = /** @class */ /*@__PURE__*/ (function () {
    function OnlineTestModule() {
    }
    OnlineTestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OnlineTestModule });
    OnlineTestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OnlineTestModule_Factory(t) { return new (t || OnlineTestModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _online_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnlineTestRoutingModule"]]] });
    return OnlineTestModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OnlineTestModule, { declarations: [_online_test_component__WEBPACK_IMPORTED_MODULE_3__["OnlineTestComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _online_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnlineTestRoutingModule"]] }); })();


/***/ }),

/***/ "./src/app/services/batch.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/batch.service.ts ***!
  \*******************************************/
/*! exports provided: BatchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchService", function() { return BatchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var BatchService = /** @class */ /*@__PURE__*/ (function () {
    function BatchService(httpService) {
        this.httpService = httpService;
        this.batches = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.batch = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    BatchService.prototype.setBatchId = function (batchId) {
        this.batchId = batchId;
    };
    BatchService.prototype.getBatchId = function () {
        return this.batchId;
    };
    BatchService.prototype.deleteBatchId = function () {
        this.batchId = null;
    };
    BatchService.prototype.setBatchesData = function (batches) {
        this.batches.next(batches);
    };
    BatchService.prototype.getBatchesData = function () {
        return this.batches;
    };
    BatchService.prototype.deleteBatchesData = function () {
        this.batches.next([]);
    };
    BatchService.prototype.setBatchData = function (batch) {
        this.batch.next(batch);
    };
    BatchService.prototype.getBatchData = function () {
        return this.batch;
    };
    BatchService.prototype.deleteBatchData = function () {
        this.batch.next(null);
    };
    BatchService.prototype.getBatchName = function (batchId) {
        return this.batches.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (batches) {
            var batch = batches.find(function (curBatch) { return curBatch._id === batchId; });
            if (batch) {
                return batch.basicDetails.batchName;
            }
            return '--';
        }));
    };
    BatchService.prototype.getBatches = function (branch, category, course) {
        var data = { api: 'getBatches', data: { branch: branch, category: category, course: course } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BatchService.prototype.getBatch = function (id) {
        var data = { api: 'getBatch', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BatchService.prototype.getBatchSubjects = function (course, batch) {
        var data = { api: 'getBatchSubjects', data: { course: course, batch: batch } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BatchService.prototype.getBatchForEditing = function (id) {
        var data = { api: 'getBatchForEditing', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BatchService.prototype.addBatch = function (batch) {
        var data = { api: 'newBatch', data: batch };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BatchService.prototype.editBatch = function (batch) {
        var data = { api: 'updateBatch', data: batch };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BatchService.prototype.deleteBatch = function (id) {
        var data = { api: 'deleteBatch', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BatchService.prototype.changeBatchStatus = function (id, status) {
        var data = { api: 'changeBatchStatus', data: { id: id, status: status } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BatchService.ɵfac = function BatchService_Factory(t) { return new (t || BatchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    BatchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BatchService, factory: BatchService.ɵfac, providedIn: 'root' });
    return BatchService;
}());



/***/ }),

/***/ "./src/app/services/course.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/course.service.ts ***!
  \********************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var CourseService = /** @class */ /*@__PURE__*/ (function () {
    function CourseService(httpService) {
        this.httpService = httpService;
        this.courses = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.course = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    CourseService.prototype.setCourseId = function (courseId) {
        this.courseId = courseId;
    };
    CourseService.prototype.getCourseId = function () {
        return this.courseId;
    };
    CourseService.prototype.deleteCourseId = function () {
        this.courseId = null;
    };
    CourseService.prototype.setCoursesData = function (courses) {
        this.courses.next(courses);
    };
    CourseService.prototype.getCoursesData = function () {
        return this.courses;
    };
    CourseService.prototype.deleteCoursesData = function () {
        this.courses.next([]);
    };
    CourseService.prototype.setCourseData = function (course) {
        this.course.next(course);
    };
    CourseService.prototype.getCourseData = function () {
        return this.course;
    };
    CourseService.prototype.deleteCourseData = function () {
        this.course.next(null);
    };
    CourseService.prototype.getCourseName = function (courseId) {
        return this.courses.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (courses) {
            var course = courses.find(function (curCourse) { return curCourse._id === courseId; });
            if (course) {
                return course.basicDetails.courseName;
            }
            return '--';
        }));
    };
    CourseService.prototype.getCourses = function (branch, category) {
        var data = { api: 'getCourses', data: { branch: branch, category: category } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    CourseService.prototype.getCourse = function (id) {
        var data = { api: 'getCourse', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    CourseService.prototype.getCourseForEditing = function (id) {
        var data = { api: 'getCourseForEditing', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    CourseService.prototype.addCourse = function (Course) {
        var data = { api: 'newCourse', data: Course };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    CourseService.prototype.editCourse = function (Course) {
        var data = { api: 'updateCourse', data: Course };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    CourseService.prototype.deleteCourse = function (id) {
        // this.Courses.splice(id, 1);
    };
    CourseService.prototype.changeCourseStatus = function (id, status) {
        var data = { api: 'changeCourseStatus', data: { id: id, status: status } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    CourseService.ɵfac = function CourseService_Factory(t) { return new (t || CourseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    CourseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CourseService, factory: CourseService.ɵfac, providedIn: 'root' });
    return CourseService;
}());



/***/ })

}]);
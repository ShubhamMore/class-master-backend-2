(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./src/app/employee/branch/lecture/lecture-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/employee/branch/lecture/lecture-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: LectureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureRoutingModule", function() { return LectureRoutingModule; });
/* harmony import */ var _lecture_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lecture.component */ "./src/app/employee/branch/lecture/lecture.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");





var routes = [
    {
        path: '',
        component: _lecture_component__WEBPACK_IMPORTED_MODULE_0__["LectureComponent"],
        children: [
            {
                path: 'batch',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() */ 117).then(__webpack_require__.bind(null, /*! ./batch-lecture/batch-lecture.module */ "./src/app/employee/branch/lecture/batch-lecture/batch-lecture.module.ts")).then(function (m) { return m.BatchLectureModule; });
                },
            },
            {
                path: 'manage',
                loadChildren: function () {
                    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(66)]).then(__webpack_require__.bind(null, /*! ./manage-lecture/manage-lecture.module */ "./src/app/employee/branch/lecture/manage-lecture/manage-lecture.module.ts")).then(function (m) { return m.ManageLectureModule; });
                },
            },
            {
                path: 'view',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() */ 122).then(__webpack_require__.bind(null, /*! ./view-lecture/view-lecture.module */ "./src/app/employee/branch/lecture/view-lecture/view-lecture.module.ts")).then(function (m) { return m.ViewLectureModule; });
                },
            },
            {
                path: 'material',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() */ 120).then(__webpack_require__.bind(null, /*! ./study-material/study-material.module */ "./src/app/employee/branch/lecture/study-material/study-material.module.ts")).then(function (m) { return m.StudyMaterialModule; });
                },
            },
            {
                path: 'q&a',
                loadChildren: function () {
                    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(37)]).then(__webpack_require__.bind(null, /*! ./question-answers/question-answers.module */ "./src/app/employee/branch/lecture/question-answers/question-answers.module.ts")).then(function (m) { return m.QuestionAnswersModule; });
                },
            },
            {
                path: 'attendance',
                loadChildren: function () {
                    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(116)]).then(__webpack_require__.bind(null, /*! ./attendance/attendance.module */ "./src/app/employee/branch/lecture/attendance/attendance.module.ts")).then(function (m) { return m.AttendanceModule; });
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
                    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then(function (m) { return m.PageNotFoundModule; });
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
var LectureRoutingModule = /** @class */ /*@__PURE__*/ (function () {
    function LectureRoutingModule() {
    }
    LectureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LectureRoutingModule });
    LectureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function LectureRoutingModule_Factory(t) { return new (t || LectureRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return LectureRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LectureRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/employee/branch/lecture/lecture.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/employee/branch/lecture/lecture.component.ts ***!
  \**************************************************************/
/*! exports provided: LectureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureComponent", function() { return LectureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_branch_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/branch-employee.service */ "./src/app/services/branch-employee.service.ts");
/* harmony import */ var _services_lecture_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/lecture.service */ "./src/app/services/lecture.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_batch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/batch.service */ "./src/app/services/batch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");








var LectureComponent = /** @class */ /*@__PURE__*/ (function () {
    function LectureComponent(branchService, branchEmployeeService, lectureService, courseService, batchService, router, route) {
        this.branchService = branchService;
        this.branchEmployeeService = branchEmployeeService;
        this.lectureService = lectureService;
        this.courseService = courseService;
        this.batchService = batchService;
        this.router = router;
        this.route = route;
    }
    LectureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.branchId = this.branchService.getBranchId();
        if (!this.branchId) {
            this.router.navigate(['../'], { relativeTo: this.route });
            return;
        }
        this.courseService.getCourses(this.branchId, '').subscribe(function (courses) {
            _this.courseService.setCoursesData(courses);
            _this.loading = false;
        }, function (error) { });
        this.batchService.getBatches(this.branchId, '', '').subscribe(function (batches) {
            _this.batchService.setBatchesData(batches);
        }, function (error) { });
        this.branchEmployeeService.getBranchEmployeesForBatch(this.branchId, 'teacher').subscribe(function (employees) {
            _this.branchEmployeeService.setBranchEmployeesData(employees);
            _this.loading = false;
        }, function (error) {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        });
    };
    LectureComponent.prototype.ngOnDestroy = function () {
        this.courseService.deleteCoursesData();
        this.batchService.deleteBatchesData();
        this.lectureService.setSearchDate(null);
    };
    LectureComponent.ɵfac = function LectureComponent_Factory(t) { return new (t || LectureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_employee_service__WEBPACK_IMPORTED_MODULE_2__["BranchEmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_lecture_service__WEBPACK_IMPORTED_MODULE_3__["LectureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_4__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_5__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
    LectureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LectureComponent, selectors: [["ngx-lecture"]], decls: 1, vars: 0, template: function LectureComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: [""] });
    return LectureComponent;
}());



/***/ }),

/***/ "./src/app/employee/branch/lecture/lecture.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/employee/branch/lecture/lecture.module.ts ***!
  \***********************************************************/
/*! exports provided: LectureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureModule", function() { return LectureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _lecture_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lecture-routing.module */ "./src/app/employee/branch/lecture/lecture-routing.module.ts");
/* harmony import */ var _lecture_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lecture.component */ "./src/app/employee/branch/lecture/lecture.component.ts");





var LectureModule = /** @class */ /*@__PURE__*/ (function () {
    function LectureModule() {
    }
    LectureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LectureModule });
    LectureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LectureModule_Factory(t) { return new (t || LectureModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _lecture_routing_module__WEBPACK_IMPORTED_MODULE_2__["LectureRoutingModule"]]] });
    return LectureModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LectureModule, { declarations: [_lecture_component__WEBPACK_IMPORTED_MODULE_3__["LectureComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _lecture_routing_module__WEBPACK_IMPORTED_MODULE_2__["LectureRoutingModule"]] }); })();


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
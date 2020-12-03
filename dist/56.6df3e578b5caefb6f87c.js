(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./src/app/institute/branch/student/student-course/student-course-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/institute/branch/student/student-course/student-course-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: StudentCourseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCourseRoutingModule", function() { return StudentCourseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _student_course_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-course.component */ "./src/app/institute/branch/student/student-course/student-course.component.ts");





var routes = [
    {
        path: '',
        component: _student_course_component__WEBPACK_IMPORTED_MODULE_2__["StudentCourseComponent"],
        children: [
            {
                path: 'manage',
                loadChildren: function () {
                    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(198)]).then(__webpack_require__.bind(null, /*! ./manage-student-course/manage-student-course.module */ "./src/app/institute/branch/student/student-course/manage-student-course/manage-student-course.module.ts")).then(function (m) { return m.ManageStudentCourseModule; });
                },
            },
            {
                path: 'add',
                loadChildren: function () {
                    return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e("common"), __webpack_require__.e(34)]).then(__webpack_require__.bind(null, /*! ./add-student-course/add-student-course.module */ "./src/app/institute/branch/student/student-course/add-student-course/add-student-course.module.ts")).then(function (m) { return m.AddStudentCourseModule; });
                },
            },
            {
                path: 'edit',
                loadChildren: function () {
                    return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e("common"), __webpack_require__.e(34)]).then(__webpack_require__.bind(null, /*! ./add-student-course/add-student-course.module */ "./src/app/institute/branch/student/student-course/add-student-course/add-student-course.module.ts")).then(function (m) { return m.AddStudentCourseModule; });
                },
            },
            {
                path: 'installment',
                loadChildren: function () {
                    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(202)]).then(__webpack_require__.bind(null, /*! ./student-course-installment/student-course-installment.module */ "./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment.module.ts")).then(function (m) { return m.StudentCourseInstallmentModule; });
                },
            },
            {
                path: 'attendance',
                loadChildren: function () {
                    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(199)]).then(__webpack_require__.bind(null, /*! ./student-course-attendance/student-course-attendance.module */ "./src/app/institute/branch/student/student-course/student-course-attendance/student-course-attendance.module.ts")).then(function (m) { return m.StudentCourseAttendanceModule; });
                },
            },
            {
                path: 'performance',
                loadChildren: function () {
                    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(203)]).then(__webpack_require__.bind(null, /*! ./student-course-performance/student-course-performance.module */ "./src/app/institute/branch/student/student-course/student-course-performance/student-course-performance.module.ts")).then(function (m) { return m.StudentCoursePerformanceModule; });
                },
            },
            {
                path: '',
                redirectTo: 'manage',
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
var StudentCourseRoutingModule = /** @class */ /*@__PURE__*/ (function () {
    function StudentCourseRoutingModule() {
    }
    StudentCourseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StudentCourseRoutingModule });
    StudentCourseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StudentCourseRoutingModule_Factory(t) { return new (t || StudentCourseRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return StudentCourseRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentCourseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/institute/branch/student/student-course/student-course.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/institute/branch/student/student-course/student-course.component.ts ***!
  \*************************************************************************************/
/*! exports provided: StudentCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCourseComponent", function() { return StudentCourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_batch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/batch.service */ "./src/app/services/batch.service.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _services_discount_and_offer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/discount-and-offer.service */ "./src/app/services/discount-and-offer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");









var StudentCourseComponent = /** @class */ /*@__PURE__*/ (function () {
    function StudentCourseComponent(branchService, toastrService, courseService, batchService, studentService, discountAndOfferService, router, route) {
        this.branchService = branchService;
        this.toastrService = toastrService;
        this.courseService = courseService;
        this.batchService = batchService;
        this.studentService = studentService;
        this.discountAndOfferService = discountAndOfferService;
        this.router = router;
        this.route = route;
    }
    StudentCourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.branchId = this.branchService.getBranchId();
        this.categoryId = this.branchService.getCategoryId();
        this.studentId = this.studentService.getStudentId();
        if (!this.branchId && !this.categoryId && !this.studentId) {
            this.back();
            this.showToastr('top-right', 'danger', 'Student Details Not Available');
            return;
        }
        this.studentService.getStudentByImsId(this.studentId).subscribe(function (student) {
            _this.studentService.setStudentData(student);
        }, function (err) {
            _this.studentService.setStudentData(null);
            _this.showToastr('top-right', 'danger', err);
            _this.back();
        });
        this.courseService.getCourses(this.branchId, this.categoryId).subscribe(function (courses) {
            _this.courseService.setCoursesData(courses);
        }, function (err) {
            _this.courseService.setCoursesData(null);
            _this.showToastr('top-right', 'danger', err);
            _this.back();
        });
        this.batchService.getBatches(this.branchId, this.categoryId, '').subscribe(function (batches) {
            _this.batchService.setBatchesData(batches);
        }, function (err) {
            _this.batchService.setBatchesData(null);
            _this.showToastr('top-right', 'danger', err);
            _this.back();
        });
        this.discountAndOfferService.getDiscountAndOffers(this.branchId).subscribe(function (discountAndOffers) {
            _this.discountAndOfferService.setDiscountAndOffersData(discountAndOffers);
        }, function (err) {
            _this.discountAndOfferService.setDiscountAndOffersData(null);
            _this.showToastr('top-right', 'danger', err);
            _this.back();
        });
    };
    StudentCourseComponent.prototype.showToastr = function (position, status, message) {
        this.toastrService.show(status, message, {
            position: position,
            status: status,
        });
    };
    StudentCourseComponent.prototype.back = function () {
        var type = this.studentService.getStudentType();
        this.router.navigate(['../'], { relativeTo: this.route, queryParams: { type: type } });
    };
    StudentCourseComponent.prototype.ngOnDestroy = function () {
        this.branchService.deleteCategoryId();
        this.studentService.deleteStudentId();
        this.studentService.deleteStudentData();
        this.courseService.deleteCoursesData();
        this.batchService.deleteBatchesData();
        this.discountAndOfferService.deleteDiscountAndOffersData();
    };
    StudentCourseComponent.ɵfac = function StudentCourseComponent_Factory(t) { return new (t || StudentCourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_4__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_5__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_discount_and_offer_service__WEBPACK_IMPORTED_MODULE_6__["DiscountAndOfferService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
    StudentCourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentCourseComponent, selectors: [["ngx-student-course"]], decls: 1, vars: 0, template: function StudentCourseComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], styles: [""] });
    return StudentCourseComponent;
}());



/***/ }),

/***/ "./src/app/institute/branch/student/student-course/student-course.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/institute/branch/student/student-course/student-course.module.ts ***!
  \**********************************************************************************/
/*! exports provided: StudentCourseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCourseModule", function() { return StudentCourseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _student_course_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-course-routing.module */ "./src/app/institute/branch/student/student-course/student-course-routing.module.ts");
/* harmony import */ var _student_course_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-course.component */ "./src/app/institute/branch/student/student-course/student-course.component.ts");





var StudentCourseModule = /** @class */ /*@__PURE__*/ (function () {
    function StudentCourseModule() {
    }
    StudentCourseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StudentCourseModule });
    StudentCourseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StudentCourseModule_Factory(t) { return new (t || StudentCourseModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _student_course_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentCourseRoutingModule"]]] });
    return StudentCourseModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentCourseModule, { declarations: [_student_course_component__WEBPACK_IMPORTED_MODULE_3__["StudentCourseComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _student_course_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentCourseRoutingModule"]] }); })();


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
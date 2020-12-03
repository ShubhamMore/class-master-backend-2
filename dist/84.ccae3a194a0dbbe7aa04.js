(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84],{

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



/***/ }),

/***/ "./src/app/student/branch/course/course-installment/course-installment-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/student/branch/course/course-installment/course-installment-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: CourseInstallmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseInstallmentRoutingModule", function() { return CourseInstallmentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _course_installment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-installment.component */ "./src/app/student/branch/course/course-installment/course-installment.component.ts");





var routes = [
    {
        path: '',
        component: _course_installment_component__WEBPACK_IMPORTED_MODULE_2__["CourseInstallmentComponent"],
        children: [
            {
                path: 'manage',
                loadChildren: function () {
                    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(86)]).then(__webpack_require__.bind(null, /*! ./manage-course-installment/manage-course-installment.module */ "./src/app/student/branch/course/course-installment/manage-course-installment/manage-course-installment.module.ts")).then(function (m) { return m.ManageCourseInstallmentModule; });
                },
            },
            {
                path: 'receipt',
                loadChildren: function () {
                    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(219)]).then(__webpack_require__.bind(null, /*! ./course-installment-receipt/course-installment-receipt.module */ "./src/app/student/branch/course/course-installment/course-installment-receipt/course-installment-receipt.module.ts")).then(function (m) { return m.CourseInstallmentReceiptModule; });
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
var CourseInstallmentRoutingModule = /** @class */ /*@__PURE__*/ (function () {
    function CourseInstallmentRoutingModule() {
    }
    CourseInstallmentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CourseInstallmentRoutingModule });
    CourseInstallmentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CourseInstallmentRoutingModule_Factory(t) { return new (t || CourseInstallmentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return CourseInstallmentRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CourseInstallmentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/student/branch/course/course-installment/course-installment.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/student/branch/course/course-installment/course-installment.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CourseInstallmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseInstallmentComponent", function() { return CourseInstallmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _student_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../student-branch.service */ "./src/app/student/branch/student-branch.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_student_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/student-course.service */ "./src/app/services/student-course.service.ts");
/* harmony import */ var _services_student_course_installment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../services/student-course-installment.service */ "./src/app/services/student-course-installment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");









function CourseInstallmentComponent_router_outlet_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
}
var CourseInstallmentComponent = /** @class */ /*@__PURE__*/ (function () {
    function CourseInstallmentComponent(branchService, studentBranchService, courseService, studentCourseService, studentCourseInstallmentService, router, route) {
        this.branchService = branchService;
        this.studentBranchService = studentBranchService;
        this.courseService = courseService;
        this.studentCourseService = studentCourseService;
        this.studentCourseInstallmentService = studentCourseInstallmentService;
        this.router = router;
        this.route = route;
    }
    CourseInstallmentComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.branchId = this.branchService.getBranchId();
        if (!this.branchId) {
            this.router.navigate(['../'], { relativeTo: this.route });
            return;
        }
        this.loading = false;
    };
    CourseInstallmentComponent.prototype.ngOnDestroy = function () {
        this.courseService.deleteCourseId();
        this.studentCourseService.deleteStudentCourseData();
        this.studentCourseInstallmentService.deleteStudentCourseInstallmentId();
        this.studentCourseInstallmentService.deleteStudentCourseInstallmentData();
    };
    CourseInstallmentComponent.ɵfac = function CourseInstallmentComponent_Factory(t) { return new (t || CourseInstallmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_branch_service__WEBPACK_IMPORTED_MODULE_2__["StudentBranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_course_service__WEBPACK_IMPORTED_MODULE_4__["StudentCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_course_installment_service__WEBPACK_IMPORTED_MODULE_5__["StudentCourseInstallmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
    CourseInstallmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseInstallmentComponent, selectors: [["ngx-course-installment"]], decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function CourseInstallmentComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CourseInstallmentComponent_router_outlet_0_Template, 1, 0, "router-outlet", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: [""] });
    return CourseInstallmentComponent;
}());



/***/ }),

/***/ "./src/app/student/branch/course/course-installment/course-installment.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/student/branch/course/course-installment/course-installment.module.ts ***!
  \***************************************************************************************/
/*! exports provided: CourseInstallmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseInstallmentModule", function() { return CourseInstallmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _course_installment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-installment-routing.module */ "./src/app/student/branch/course/course-installment/course-installment-routing.module.ts");
/* harmony import */ var _course_installment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-installment.component */ "./src/app/student/branch/course/course-installment/course-installment.component.ts");





var CourseInstallmentModule = /** @class */ /*@__PURE__*/ (function () {
    function CourseInstallmentModule() {
    }
    CourseInstallmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CourseInstallmentModule });
    CourseInstallmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CourseInstallmentModule_Factory(t) { return new (t || CourseInstallmentModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _course_installment_routing_module__WEBPACK_IMPORTED_MODULE_2__["CourseInstallmentRoutingModule"]]] });
    return CourseInstallmentModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CourseInstallmentModule, { declarations: [_course_installment_component__WEBPACK_IMPORTED_MODULE_3__["CourseInstallmentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _course_installment_routing_module__WEBPACK_IMPORTED_MODULE_2__["CourseInstallmentRoutingModule"]] }); })();


/***/ })

}]);
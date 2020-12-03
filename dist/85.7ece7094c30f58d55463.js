(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

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

/***/ "./src/app/student/branch/course/manage-course/manage-course-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/student/branch/course/manage-course/manage-course-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ManageCourseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCourseRoutingModule", function() { return ManageCourseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _manage_course_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-course.component */ "./src/app/student/branch/course/manage-course/manage-course.component.ts");





var routes = [
    {
        path: '',
        component: _manage_course_component__WEBPACK_IMPORTED_MODULE_2__["ManageCourseComponent"],
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
];
var ManageCourseRoutingModule = /** @class */ /*@__PURE__*/ (function () {
    function ManageCourseRoutingModule() {
    }
    ManageCourseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ManageCourseRoutingModule });
    ManageCourseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ManageCourseRoutingModule_Factory(t) { return new (t || ManageCourseRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ManageCourseRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManageCourseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/student/branch/course/manage-course/manage-course.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/student/branch/course/manage-course/manage-course.component.ts ***!
  \********************************************************************************/
/*! exports provided: ManageCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCourseComponent", function() { return ManageCourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/shared-services/date.service */ "./src/app/services/shared-services/date.service.ts");
/* harmony import */ var _student_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../student-branch.service */ "./src/app/student/branch/student-branch.service.ts");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_student_course_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/student-course.service */ "./src/app/services/student-course.service.ts");
/* harmony import */ var _services_student_course_installment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../services/student-course-installment.service */ "./src/app/services/student-course-installment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");











function ManageCourseComponent_small_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("for ", ctx_r0.getHeader(), "");
    }
}
function ManageCourseComponent_ng_container_10_div_1_th_16_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Installments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ManageCourseComponent_ng_container_10_div_1_th_17_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Attendance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ManageCourseComponent_ng_container_10_div_1_th_18_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ManageCourseComponent_ng_container_10_div_1_th_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Lecture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ManageCourseComponent_ng_container_10_div_1_th_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ManageCourseComponent_ng_container_10_div_1_th_21_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Online Exam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ManageCourseComponent_ng_container_10_div_1_tr_23_td_13_Template(rf, ctx) {
    if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageCourseComponent_ng_container_10_div_1_tr_23_td_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); var studentCourse_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r22.courseInstallments(studentCourse_r14); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Installments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ManageCourseComponent_ng_container_10_div_1_tr_23_td_14_Template(rf, ctx) {
    if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageCourseComponent_ng_container_10_div_1_tr_23_td_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); var studentCourse_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r25.courseAttendance(studentCourse_r14); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Attendance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ManageCourseComponent_ng_container_10_div_1_tr_23_td_15_Template(rf, ctx) {
    if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageCourseComponent_ng_container_10_div_1_tr_23_td_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); var studentCourse_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r28.coursePerformance(studentCourse_r14); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Performance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ManageCourseComponent_ng_container_10_div_1_tr_23_td_16_Template(rf, ctx) {
    if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageCourseComponent_ng_container_10_div_1_tr_23_td_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); var studentCourse_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r31.courseLecture(studentCourse_r14); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Lecture ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ManageCourseComponent_ng_container_10_div_1_tr_23_td_17_Template(rf, ctx) {
    if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageCourseComponent_ng_container_10_div_1_tr_23_td_17_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); var studentCourse_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r34.courseAssignment(studentCourse_r14); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Assignment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ManageCourseComponent_ng_container_10_div_1_tr_23_td_18_Template(rf, ctx) {
    if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageCourseComponent_ng_container_10_div_1_tr_23_td_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var studentCourse_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r37.courseOnlineExams(studentCourse_r14); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Online Exams ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ManageCourseComponent_ng_container_10_div_1_tr_23_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ManageCourseComponent_ng_container_10_div_1_tr_23_td_13_Template, 3, 0, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ManageCourseComponent_ng_container_10_div_1_tr_23_td_14_Template, 3, 0, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ManageCourseComponent_ng_container_10_div_1_tr_23_td_15_Template, 3, 0, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ManageCourseComponent_ng_container_10_div_1_tr_23_td_16_Template, 3, 0, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ManageCourseComponent_ng_container_10_div_1_tr_23_td_17_Template, 3, 0, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ManageCourseComponent_ng_container_10_div_1_tr_23_td_18_Template, 3, 0, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var studentCourse_r14 = ctx.$implicit;
        var i_r15 = ctx.index;
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r15 + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](studentCourse_r14.courseName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](studentCourse_r14.categoryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](studentCourse_r14.batchName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](studentCourse_r14.rollNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.dateService.formatDate(studentCourse_r14.activationDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.type === "course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.type === "report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.type === "report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.type === "lecture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.type === "assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.type === "exam");
    }
}
function ManageCourseComponent_ng_container_10_div_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Batch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Roll Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Activation date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ManageCourseComponent_ng_container_10_div_1_th_16_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ManageCourseComponent_ng_container_10_div_1_th_17_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ManageCourseComponent_ng_container_10_div_1_th_18_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ManageCourseComponent_ng_container_10_div_1_th_19_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ManageCourseComponent_ng_container_10_div_1_th_20_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ManageCourseComponent_ng_container_10_div_1_th_21_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ManageCourseComponent_ng_container_10_div_1_tr_23_Template, 19, 12, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.type === "course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.type === "report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.type === "report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.type === "lecture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.type === "assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.type === "exam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.studentCourses);
    }
}
function ManageCourseComponent_ng_container_10_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Student Courses Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ManageCourseComponent_ng_container_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManageCourseComponent_ng_container_10_div_1_Template, 24, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManageCourseComponent_ng_container_10_ng_template_2_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.studentCourses.length > 0)("ngIfElse", _r5);
    }
}
function ManageCourseComponent_ng_template_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
var ManageCourseComponent = /** @class */ /*@__PURE__*/ (function () {
    function ManageCourseComponent(dateService, studentBranchService, branchService, toastrService, courseService, studentCourseService, studentCourseInstallmentService, router, route) {
        this.dateService = dateService;
        this.studentBranchService = studentBranchService;
        this.branchService = branchService;
        this.toastrService = toastrService;
        this.courseService = courseService;
        this.studentCourseService = studentCourseService;
        this.studentCourseInstallmentService = studentCourseInstallmentService;
        this.router = router;
        this.route = route;
    }
    ManageCourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.branchId = this.branchService.getBranchId();
        if (!this.branchId) {
            this.router.navigate(['../'], { relativeTo: this.route });
            return;
        }
        this.studentCourses = [];
        this.route.queryParams.subscribe(function (param) {
            _this.type = param.type;
            if (!_this.type) {
                _this.router.navigate(['../manage'], {
                    relativeTo: _this.route,
                    queryParams: { type: 'course' },
                });
                return;
            }
            _this.studentBranchService.setType(_this.type);
            _this.getStudentCourses();
        });
    };
    ManageCourseComponent.prototype.getStudentCourses = function () {
        var _this = this;
        this.studentCourseService.getStudentAllCourses(this.branchId).subscribe(function (studentCourses) {
            _this.studentCourses = studentCourses;
            _this.loading = false;
        }, function (err) {
            _this.showToastr('top-right', 'danger', err);
            _this.loading = false;
        });
    };
    ManageCourseComponent.prototype.getHeader = function () {
        if (this.type === 'course') {
            return null;
        }
        else if (this.type === 'lecture') {
            return 'Lectures';
        }
        else if (this.type === 'report') {
            return 'Reports';
        }
        else if (this.type === 'assignment') {
            return 'Assignment';
        }
        else if (this.type === 'exam') {
            return 'Exam';
        }
    };
    ManageCourseComponent.prototype.courseInstallments = function (studentCourse) {
        if (this.type === 'course') {
            this.courseService.setCourseId(studentCourse.course);
            this.studentCourseService.setStudentCourseId(studentCourse._id);
            this.studentCourseService.setStudentCourseData(studentCourse);
            this.studentCourseInstallmentService.setStudentCourseInstallmentId(studentCourse.studentCourseInstallment);
            this.router.navigate(['../installment'], { relativeTo: this.route });
        }
    };
    ManageCourseComponent.prototype.courseAttendance = function (studentCourse) {
        if (this.type === 'report') {
            this.studentCourseService.setStudentCourseId(studentCourse._id);
            this.studentCourseService.setStudentCourseData(studentCourse);
            this.router.navigate(['../attendance'], { relativeTo: this.route });
        }
    };
    ManageCourseComponent.prototype.courseLecture = function (studentCourse) {
        if (this.type === 'lecture') {
            this.studentCourseService.setStudentCourseId(studentCourse._id);
            this.studentCourseService.setStudentCourseData(studentCourse);
            this.router.navigate(['../lecture'], { relativeTo: this.route });
        }
    };
    ManageCourseComponent.prototype.coursePerformance = function (studentCourse) {
        if (this.type === 'report') {
            this.studentCourseService.setStudentCourseId(studentCourse._id);
            this.studentCourseService.setStudentCourseData(studentCourse);
            this.router.navigate(['../performance'], { relativeTo: this.route });
        }
    };
    ManageCourseComponent.prototype.courseAssignment = function (studentCourse) {
        if (this.type === 'assignment') {
            this.studentCourseService.setStudentCourseId(studentCourse._id);
            this.studentCourseService.setStudentCourseData(studentCourse);
            this.router.navigate(['../assignment'], { relativeTo: this.route });
        }
    };
    ManageCourseComponent.prototype.courseOnlineExams = function (studentCourse) {
        if (this.type === 'exam') {
            this.studentCourseService.setStudentCourseId(studentCourse._id);
            this.studentCourseService.setStudentCourseData(studentCourse);
            this.router.navigate(['../online-test'], { relativeTo: this.route });
        }
    };
    ManageCourseComponent.prototype.showToastr = function (position, status, message) {
        this.toastrService.show(status, message, {
            position: position,
            status: status,
        });
    };
    ManageCourseComponent.prototype.back = function () {
        this.router.navigate(['../../'], { relativeTo: this.route });
    };
    ManageCourseComponent.prototype.ngOnDestroy = function () { };
    ManageCourseComponent.ɵfac = function ManageCourseComponent_Factory(t) { return new (t || ManageCourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_1__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_branch_service__WEBPACK_IMPORTED_MODULE_2__["StudentBranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_5__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_course_service__WEBPACK_IMPORTED_MODULE_6__["StudentCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_course_installment_service__WEBPACK_IMPORTED_MODULE_7__["StudentCourseInstallmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
    ManageCourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageCourseComponent, selectors: [["ngx-manage-course"]], decls: 13, vars: 3, consts: [[1, "row"], [1, "col-md-12"], [4, "ngIf"], [1, "body-container"], [4, "ngIf", "ngIfElse"], ["loadingData", ""], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noStudentCourses", ""], [1, "table-responsive"], [1, "table"], [4, "ngFor", "ngForOf"], ["nbButton", "", "size", "small", "status", "primary", 3, "click"], ["nbButton", "", "size", "small", "status", "info", 3, "click"], ["nbButton", "", "size", "small", "status", "success", 3, "click"], ["nbButton", "", "size", "small", "status", "warning", 3, "click"], [1, "text-center", "pt-5", "pb-5"]], template: function ManageCourseComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Courses ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ManageCourseComponent_small_6_Template, 2, 1, "small", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-body", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ManageCourseComponent_ng_container_10_Template, 4, 2, "ng-container", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ManageCourseComponent_ng_template_11_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type && ctx.type !== "course");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r2);
            }
        }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"]], styles: [""] });
    return ManageCourseComponent;
}());



/***/ }),

/***/ "./src/app/student/branch/course/manage-course/manage-course.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/student/branch/course/manage-course/manage-course.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ManageCourseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCourseModule", function() { return ManageCourseModule; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _manage_course_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-course-routing.module */ "./src/app/student/branch/course/manage-course/manage-course-routing.module.ts");
/* harmony import */ var _manage_course_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-course.component */ "./src/app/student/branch/course/manage-course/manage-course.component.ts");






var ManageCourseModule = /** @class */ /*@__PURE__*/ (function () {
    function ManageCourseModule() {
    }
    ManageCourseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ManageCourseModule });
    ManageCourseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ManageCourseModule_Factory(t) { return new (t || ManageCourseModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _manage_course_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageCourseRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
            ]] });
    return ManageCourseModule;
}());

(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageCourseModule, { declarations: [_manage_course_component__WEBPACK_IMPORTED_MODULE_4__["ManageCourseComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _manage_course_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageCourseRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"]] });
})();


/***/ })

}]);
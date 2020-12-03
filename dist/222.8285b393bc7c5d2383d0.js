(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[222],{

/***/ "./src/app/student/branch/course/lecture/manage-lecture/manage-lecture-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/student/branch/course/lecture/manage-lecture/manage-lecture-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: ManageLectureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageLectureRoutingModule", function() { return ManageLectureRoutingModule; });
/* harmony import */ var _manage_lecture_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-lecture.component */ "./src/app/student/branch/course/lecture/manage-lecture/manage-lecture.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





var routes = [
    {
        path: '',
        component: _manage_lecture_component__WEBPACK_IMPORTED_MODULE_0__["ManageLectureComponent"],
    },
    {
        path: 'page-not-found',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then(function (m) { return m.PageNotFoundModule; });
        },
    },
    { path: '**', redirectTo: 'page-not-found' },
];
var ManageLectureRoutingModule = /** @class */ /*@__PURE__*/ (function () {
    function ManageLectureRoutingModule() {
    }
    ManageLectureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ManageLectureRoutingModule });
    ManageLectureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ManageLectureRoutingModule_Factory(t) { return new (t || ManageLectureRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return ManageLectureRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageLectureRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/student/branch/course/lecture/manage-lecture/manage-lecture.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/student/branch/course/lecture/manage-lecture/manage-lecture.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ManageLectureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageLectureComponent", function() { return ManageLectureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_lecture_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../services/lecture.service */ "./src/app/services/lecture.service.ts");
/* harmony import */ var _student_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../student-branch.service */ "./src/app/student/branch/student-branch.service.ts");
/* harmony import */ var _services_student_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../services/student-course.service */ "./src/app/services/student-course.service.ts");
/* harmony import */ var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../services/shared-services/date.service */ "./src/app/services/shared-services/date.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");











function ManageLectureComponent_nb_card_body_10_div_1_tr_17_Template(rf, ctx) {
    if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageLectureComponent_nb_card_body_10_div_1_tr_17_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var lecture_r7 = ctx.$implicit; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r8.lectureMaterial(lecture_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Study Material ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageLectureComponent_nb_card_body_10_div_1_tr_17_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var lecture_r7 = ctx.$implicit; var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.questionAnswers(lecture_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Q&A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var lecture_r7 = ctx.$implicit;
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.getTime(lecture_r7.startTime, lecture_r7.endTime));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lecture_r7.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lecture_r7.topic);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("By ", lecture_r7.teacher, "");
    }
}
function ManageLectureComponent_nb_card_body_10_div_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Study Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Q&A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ManageLectureComponent_nb_card_body_10_div_1_tr_17_Template, 15, 4, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.lectures);
    }
}
function ManageLectureComponent_nb_card_body_10_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Lecture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ManageLectureComponent_nb_card_body_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManageLectureComponent_nb_card_body_10_div_1_Template, 18, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManageLectureComponent_nb_card_body_10_ng_template_2_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lectures.length > 0)("ngIfElse", _r4);
    }
}
function ManageLectureComponent_ng_template_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
var ManageLectureComponent = /** @class */ /*@__PURE__*/ (function () {
    function ManageLectureComponent(branchService, lectureService, studentBranchService, studentCourseService, dateService, router, route, toastrService) {
        this.branchService = branchService;
        this.lectureService = lectureService;
        this.studentBranchService = studentBranchService;
        this.studentCourseService = studentCourseService;
        this.dateService = dateService;
        this.router = router;
        this.route = route;
        this.toastrService = toastrService;
    }
    ManageLectureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.branchId = this.branchService.getBranchId();
        if (!this.branchId) {
            this.router.navigate(['../'], { relativeTo: this.route });
            return;
        }
        this.studentBranchService.setType('lecture');
        this.date = this.lectureService.getSearchDate();
        if (!this.date) {
            this.date = this.dateService.getDateString();
        }
        this.lectures = [];
        this.studentCourseService
            .getStudentCourseData()
            .subscribe(function (studentCourse) {
            _this.studentCourse = studentCourse;
            if (studentCourse) {
                _this.getLecture();
            }
            else {
                _this.back();
            }
        });
    };
    ManageLectureComponent.prototype.getTime = function (startTime, endTime) {
        startTime = this.dateService.formatTime(startTime);
        endTime = this.dateService.formatTime(endTime);
        return startTime + ' - ' + endTime;
    };
    ManageLectureComponent.prototype.lectureMaterial = function (lecture) {
        this.lectureService.setLectureId(lecture._id);
        this.lectureService.setLectureData(lecture);
        this.router.navigate(['../material'], {
            relativeTo: this.route,
        });
    };
    ManageLectureComponent.prototype.questionAnswers = function (lecture) {
        this.lectureService.setLectureId(lecture._id);
        this.lectureService.setLectureData(lecture);
        this.router.navigate(['../q&a'], {
            relativeTo: this.route,
        });
    };
    ManageLectureComponent.prototype.getLecture = function () {
        var _this = this;
        this.loading = true;
        this.lectureService
            .getLecturesForStudent(this.branchId, this.studentCourse.category, this.studentCourse.course, this.studentCourse.batch, this.date)
            .subscribe(function (lectures) {
            _this.lectures = lectures;
            _this.loading = false;
        }, function (error) {
            _this.showToastr('top-right', 'danger', error);
            _this.loading = false;
        });
    };
    ManageLectureComponent.prototype.dateChanged = function () {
        if (this.date) {
            this.lectureService.setSearchDate(this.date);
            this.getLecture();
        }
    };
    ManageLectureComponent.prototype.showToastr = function (position, status, message) {
        this.toastrService.show(status, message, {
            position: position,
            status: status,
        });
    };
    ManageLectureComponent.prototype.back = function () {
        var type = this.studentBranchService.getType();
        this.router.navigate(['../'], { relativeTo: this.route, queryParams: { type: type } });
    };
    ManageLectureComponent.ɵfac = function ManageLectureComponent_Factory(t) { return new (t || ManageLectureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_lecture_service__WEBPACK_IMPORTED_MODULE_2__["LectureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_branch_service__WEBPACK_IMPORTED_MODULE_3__["StudentBranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_course_service__WEBPACK_IMPORTED_MODULE_4__["StudentCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"])); };
    ManageLectureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageLectureComponent, selectors: [["ngx-manage-lecture"]], decls: 13, vars: 4, consts: [[1, "row"], [1, "col-md-9", "col-sm-8"], [1, "col-md-3", "col-sm-4"], ["type", "date", "nbInput", "", "fullWidth", "", 3, "ngModel", "ngModelChange", "change"], [4, "ngIf", "ngIfElse"], ["loadingTemplate", ""], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noLecture", ""], [1, "table-responsive"], [1, "table"], [4, "ngFor", "ngForOf"], ["status", "warning", "nbButton", "", "size", "small", 3, "click"], ["status", "success", "nbButton", "", "size", "small", 3, "click"], [1, "text-center", "pt-5", "pb-5"]], template: function ManageLectureComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Lecture of ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageLectureComponent_Template_input_ngModelChange_9_listener($event) { return ctx.date = $event; })("change", function ManageLectureComponent_Template_input_change_9_listener() { return ctx.dateChanged(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ManageLectureComponent_nb_card_body_10_Template, 4, 2, "nb-card-body", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ManageLectureComponent_ng_template_11_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.studentCourse.batchName);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
            }
        }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonComponent"]], styles: [""] });
    return ManageLectureComponent;
}());



/***/ }),

/***/ "./src/app/student/branch/course/lecture/manage-lecture/manage-lecture.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/student/branch/course/lecture/manage-lecture/manage-lecture.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ManageLectureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageLectureModule", function() { return ManageLectureModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _manage_lecture_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-lecture-routing.module */ "./src/app/student/branch/course/lecture/manage-lecture/manage-lecture-routing.module.ts");
/* harmony import */ var _manage_lecture_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-lecture.component */ "./src/app/student/branch/course/lecture/manage-lecture/manage-lecture.component.ts");







var ManageLectureModule = /** @class */ /*@__PURE__*/ (function () {
    function ManageLectureModule() {
    }
    ManageLectureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ManageLectureModule });
    ManageLectureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ManageLectureModule_Factory(t) { return new (t || ManageLectureModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _manage_lecture_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManageLectureRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTooltipModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbAccordionModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            ]] });
    return ManageLectureModule;
}());

(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ManageLectureModule, { declarations: [_manage_lecture_component__WEBPACK_IMPORTED_MODULE_5__["ManageLectureComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _manage_lecture_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManageLectureRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTooltipModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbAccordionModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]] });
})();


/***/ })

}]);
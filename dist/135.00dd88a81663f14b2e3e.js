(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[135],{

/***/ "./src/app/employee/branch/schedule/batch-schedule/manage-batch-schedule/manage-batch-schedule-routing.module.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/employee/branch/schedule/batch-schedule/manage-batch-schedule/manage-batch-schedule-routing.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ManageBatchScheduleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageBatchScheduleRoutingModule", function() { return ManageBatchScheduleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _manage_batch_schedule_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-batch-schedule.component */ "./src/app/employee/branch/schedule/batch-schedule/manage-batch-schedule/manage-batch-schedule.component.ts");





var routes = [{ path: '', component: _manage_batch_schedule_component__WEBPACK_IMPORTED_MODULE_2__["ManageBatchScheduleComponent"] }];
var ManageBatchScheduleRoutingModule = /** @class */ /*@__PURE__*/ (function () {
    function ManageBatchScheduleRoutingModule() {
    }
    ManageBatchScheduleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ManageBatchScheduleRoutingModule });
    ManageBatchScheduleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ManageBatchScheduleRoutingModule_Factory(t) { return new (t || ManageBatchScheduleRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ManageBatchScheduleRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManageBatchScheduleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/employee/branch/schedule/batch-schedule/manage-batch-schedule/manage-batch-schedule.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/employee/branch/schedule/batch-schedule/manage-batch-schedule/manage-batch-schedule.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ManageBatchScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageBatchScheduleComponent", function() { return ManageBatchScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_schedule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../services/schedule.service */ "./src/app/services/schedule.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_batch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/batch.service */ "./src/app/services/batch.service.ts");
/* harmony import */ var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../services/shared-services/date.service */ "./src/app/services/shared-services/date.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");










function ManageBatchScheduleComponent_nb_accordion_item_35_div_9_tr_2_Template(rf, ctx) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBatchScheduleComponent_nb_accordion_item_35_div_9_tr_2_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var schedule_r7 = ctx.$implicit; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r8.editSchedule(schedule_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBatchScheduleComponent_nb_accordion_item_35_div_9_tr_2_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var schedule_r7 = ctx.$implicit; var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.deleteSchedule(schedule_r7._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var schedule_r7 = ctx.$implicit;
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.getTime(schedule_r7.startTime, schedule_r7.endTime));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.getSubject(schedule_r7.subject));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schedule_r7.topic);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.getTeacher(schedule_r7.teacher));
    }
}
function ManageBatchScheduleComponent_nb_accordion_item_35_div_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManageBatchScheduleComponent_nb_accordion_item_35_div_9_tr_2_Template, 15, 4, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var day_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.getFilteredSchedule(day_r1));
    }
}
function ManageBatchScheduleComponent_nb_accordion_item_35_ng_template_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ManageBatchScheduleComponent_nb_accordion_item_35_Template(rf, ctx) {
    if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBatchScheduleComponent_nb_accordion_item_35_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var day_r1 = ctx.$implicit; var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.addScheduleOfDay(day_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ManageBatchScheduleComponent_nb_accordion_item_35_div_9_Template, 3, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ManageBatchScheduleComponent_nb_accordion_item_35_ng_template_10_Template, 2, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var day_r1 = ctx.$implicit;
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getFilteredSchedule(day_r1).length > 0)("ngIfElse", _r4);
    }
}
var ManageBatchScheduleComponent = /** @class */ /*@__PURE__*/ (function () {
    function ManageBatchScheduleComponent(branchService, scheduleService, courseService, batchService, dateService, router, route, toastrService) {
        this.branchService = branchService;
        this.scheduleService = scheduleService;
        this.courseService = courseService;
        this.batchService = batchService;
        this.dateService = dateService;
        this.router = router;
        this.route = route;
        this.toastrService = toastrService;
    }
    ManageBatchScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.branchId = this.branchService.getBranchId();
        if (!this.branchId) {
            this.router.navigate(['../'], { relativeTo: this.route });
            return;
        }
        this.branchService.getCategoryData().subscribe(function (category) {
            _this.category = category;
        });
        this.courseService.getCourseData().subscribe(function (course) {
            _this.course = course;
        });
        this.batchService.getBatchData().subscribe(function (batch) {
            _this.batch = batch;
        });
        this.days = [];
        this.schedules = [];
        this.setCurDate(this.dateService.getDate());
        this.changeScheduleCalenderType(0);
        this.getSchedule();
    };
    ManageBatchScheduleComponent.prototype.setCurDate = function (date) {
        this.curDate = date;
        this.curMonth = this.curDate.getMonth();
        this.curYear = this.curDate.getFullYear();
    };
    ManageBatchScheduleComponent.prototype.setStartDate = function () {
        var currentDate = new Date(this.curDate);
        if (this.scheduleCalenderType === 0) {
            this.startDate = new Date(currentDate);
        }
        else if (this.scheduleCalenderType === 1) {
            currentDate.setDate(currentDate.getDate() - currentDate.getDay());
            this.startDate = new Date(currentDate);
        }
        else {
            currentDate.setDate(1);
            this.startDate = new Date(currentDate);
        }
        this.calcNoOfDays();
        this.getSchedule();
    };
    ManageBatchScheduleComponent.prototype.calcNoOfDays = function () {
        var noOfDays;
        if (this.scheduleCalenderType === 0) {
            noOfDays = 1;
        }
        else if (this.scheduleCalenderType === 1) {
            noOfDays = 7;
        }
        else {
            noOfDays = this.daysInMonth(this.curMonth, this.curYear);
        }
        this.noOfDays = noOfDays;
        var day = 24 * 60 * 60 * 1000;
        this.days = [];
        for (var i = 0; i < noOfDays; i++) {
            var date = this.dateService.millisecondsToDate(this.dateService.dateToMilliseconds(this.startDate) + i * day);
            this.days.push(date.toString().substring(0, 15));
        }
    };
    ManageBatchScheduleComponent.prototype.headerDate = function () {
        var headerDate;
        if (this.scheduleCalenderType === 0) {
            headerDate = this.curDate.toString().substring(4, 15);
        }
        else if (this.scheduleCalenderType === 1) {
            var currentDate = this.curDate;
            currentDate.setDate(currentDate.getDate() - currentDate.getDay());
            var date = new Date(currentDate);
            var firstDay = date.toString().substring(4, 10);
            if (date.getDate() > 25 && date.getMonth() === 11) {
                firstDay = firstDay + ', ' + date.getFullYear();
            }
            currentDate.setDate(currentDate.getDate() + 6);
            date = new Date(currentDate);
            var lastDay = date.toString().substring(4, 10);
            if (firstDay.split(',')[1]) {
                lastDay = lastDay + ', ' + date.getFullYear();
            }
            headerDate = firstDay + ' - ' + lastDay;
        }
        else {
            headerDate = this.dateService.getMonth(this.curMonth) + ' ' + this.curYear;
        }
        return headerDate;
    };
    ManageBatchScheduleComponent.prototype.goToToday = function () {
        this.setCurDate(this.dateService.getDate());
        this.setStartDate();
    };
    ManageBatchScheduleComponent.prototype.nextMonth = function () {
        this.curYear = this.curMonth === 11 ? this.curYear + 1 : this.curYear;
        this.curMonth = (this.curMonth + 1) % 12;
        this.curDate = new Date(this.curYear, this.curMonth, 1);
    };
    ManageBatchScheduleComponent.prototype.previousMonth = function () {
        this.curYear = this.curMonth === 0 ? this.curYear - 1 : this.curYear;
        this.curMonth = this.curMonth === 0 ? 11 : this.curMonth - 1;
        this.curDate = new Date(this.curYear, this.curMonth, 1);
    };
    ManageBatchScheduleComponent.prototype.nextWeek = function () {
        var nextDate = new Date(this.curDate).getDate() + 7;
        var date = new Date(this.curDate).setDate(nextDate);
        this.setCurDate(new Date(date));
    };
    ManageBatchScheduleComponent.prototype.previousWeek = function () {
        var previousDate = new Date(this.curDate).getDate() - 7;
        var date = new Date(this.curDate).setDate(previousDate);
        this.setCurDate(new Date(date));
    };
    ManageBatchScheduleComponent.prototype.nextDay = function () {
        var nextDate = new Date(this.curDate).getDate() + 1;
        var date = new Date(this.curDate).setDate(nextDate);
        this.setCurDate(new Date(date));
    };
    ManageBatchScheduleComponent.prototype.previousDay = function () {
        var previousDate = new Date(this.curDate).getDate() - 1;
        var date = new Date(this.curDate).setDate(previousDate);
        this.setCurDate(new Date(date));
    };
    ManageBatchScheduleComponent.prototype.next = function () {
        if (this.scheduleCalenderType === 0) {
            this.nextDay();
        }
        else if (this.scheduleCalenderType === 1) {
            this.nextWeek();
        }
        else {
            this.nextMonth();
        }
        this.setStartDate();
    };
    ManageBatchScheduleComponent.prototype.previous = function () {
        if (this.scheduleCalenderType === 0) {
            this.previousDay();
        }
        else if (this.scheduleCalenderType === 1) {
            this.previousWeek();
        }
        else {
            this.previousMonth();
        }
        this.setStartDate();
    };
    ManageBatchScheduleComponent.prototype.changeScheduleCalenderType = function (type) {
        this.scheduleCalenderType = type;
        this.setStartDate();
    };
    ManageBatchScheduleComponent.prototype.daysInMonth = function (iMonth, iYear) {
        var daysInMonth = 32 - new Date(iYear, iMonth, 32).getDate();
        return daysInMonth;
    };
    ManageBatchScheduleComponent.prototype.getTime = function (startTime, endTime) {
        startTime = this.dateService.formatTime(startTime);
        endTime = this.dateService.formatTime(endTime);
        return startTime + ' - ' + endTime;
    };
    ManageBatchScheduleComponent.prototype.getTeacher = function (teacher) {
        return teacher;
    };
    ManageBatchScheduleComponent.prototype.getSubject = function (subject) {
        var mySubject = this.course.subjects.find(function (curSubject) { return curSubject._id === subject; });
        if (!mySubject) {
            return '--';
        }
        return mySubject.subject;
    };
    ManageBatchScheduleComponent.prototype.addSchedule = function () {
        this.router.navigate(['../add'], { relativeTo: this.route });
    };
    ManageBatchScheduleComponent.prototype.addScheduleOfDay = function (day) {
        this.scheduleService.setScheduleDay(day);
        this.router.navigate(['../add'], { relativeTo: this.route, queryParams: { mode: 'date' } });
    };
    ManageBatchScheduleComponent.prototype.editSchedule = function (schedule) {
        this.scheduleService.setScheduleId(schedule._id);
        this.scheduleService.setScheduleData(schedule);
        this.router.navigate(['../edit'], { relativeTo: this.route, queryParams: { mode: 'edit' } });
    };
    ManageBatchScheduleComponent.prototype.deleteSchedule = function (id) {
        var _this = this;
        this.scheduleService.deleteSchedule(id).subscribe(function (res) {
            var index = _this.schedules.findIndex(function (schedule) { return schedule._id === id; });
            if (index >= 0) {
                _this.schedules.splice(index, 1);
                _this.showToastr('top-right', 'success', 'Schedule Deleted Successfully');
            }
        }, function (error) {
            _this.showToastr('top-right', 'danger', error);
        });
    };
    ManageBatchScheduleComponent.prototype.getSchedule = function () {
        var _this = this;
        var startDate = this.dateService.convertToDateString(this.startDate);
        var endDate = this.dateService.convertToDateString(this.dateService.addDaysInDate(this.startDate, this.noOfDays));
        this.loading = true;
        this.scheduleService
            .getAllSchedules(this.branchId, this.category._id, this.course._id, this.batch._id, this.dateService.reverseDate(startDate), this.dateService.reverseDate(endDate))
            .subscribe(function (schedules) {
            _this.schedules = schedules;
            _this.loading = false;
        }, function (error) {
            _this.showToastr('top-right', 'danger', error);
            _this.loading = false;
        });
    };
    ManageBatchScheduleComponent.prototype.getFilteredSchedule = function (date) {
        date = this.dateService.convertToDateString(date);
        var schedules = this.schedules.filter(function (schedule) { return schedule.date === date; });
        return schedules;
    };
    ManageBatchScheduleComponent.prototype.showToastr = function (position, status, message) {
        this.toastrService.show(status, message, {
            position: position,
            status: status,
        });
    };
    ManageBatchScheduleComponent.ɵfac = function ManageBatchScheduleComponent_Factory(t) { return new (t || ManageBatchScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_schedule_service__WEBPACK_IMPORTED_MODULE_2__["ScheduleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_4__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"])); };
    ManageBatchScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageBatchScheduleComponent, selectors: [["ngx-manage-batch-schedule"]], decls: 36, vars: 3, consts: [[1, "row"], [1, "col-md-9", "col-sm-8"], [1, "col-md-3", "col-sm-4"], ["nbButton", "", "size", "small", "fullWidth", "", "status", "primary", 3, "click"], [1, "col-md-3", "pt-2"], [1, "btn-group"], ["nbButton", "", "size", "small", "status", "primary", 3, "click"], ["icon", "arrow-ios-back-outline"], ["icon", "arrow-ios-forward-outline"], [1, "col-md-5", "pt-2"], [1, "text-center"], [1, "col-md-4", "pt-2"], ["status", "basic", "multi", ""], [4, "ngFor", "ngForOf"], [1, "row", "accordion-header-item"], [1, "col-12"], ["nbButton", "", "size", "small", "status", "primary", 1, "float-right", 3, "click"], ["nbTooltip", "Add Schedule", "icon", "plus-outline"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noSchedule", ""], [1, "table-responsive"], [1, "table"], ["status", "basic", "nbButton", "", "size", "small", 3, "click"], ["status", "danger", "nbButton", "", "size", "small", 3, "click"], [1, "text-center", "pt-5", "pb-5"]], template: function ManageBatchScheduleComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Schedule of ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBatchScheduleComponent_Template_button_click_9_listener() { return ctx.addSchedule(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Add Schedule ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-card-body");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nb-card-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBatchScheduleComponent_Template_button_click_17_listener() { return ctx.previous(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "nb-icon", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBatchScheduleComponent_Template_button_click_19_listener() { return ctx.goToToday(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Today ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBatchScheduleComponent_Template_button_click_21_listener() { return ctx.next(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "nb-icon", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBatchScheduleComponent_Template_button_click_28_listener() { return ctx.changeScheduleCalenderType(0); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Day ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBatchScheduleComponent_Template_button_click_30_listener() { return ctx.changeScheduleCalenderType(1); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Week ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBatchScheduleComponent_Template_button_click_32_listener() { return ctx.changeScheduleCalenderType(2); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Month ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nb-accordion", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ManageBatchScheduleComponent_nb_accordion_item_35_Template, 12, 3, "nb-accordion-item", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.batch.basicDetails.batchName);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headerDate());
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.days);
            }
        }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbAccordionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbAccordionItemComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbAccordionItemHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbTooltipDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbAccordionItemBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: [".accordion-header-item[_ngcontent-%COMP%] {\n  width: 98%;\n}"] });
    return ManageBatchScheduleComponent;
}());



/***/ }),

/***/ "./src/app/employee/branch/schedule/batch-schedule/manage-batch-schedule/manage-batch-schedule.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/employee/branch/schedule/batch-schedule/manage-batch-schedule/manage-batch-schedule.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ManageBatchScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageBatchScheduleModule", function() { return ManageBatchScheduleModule; });
/* harmony import */ var _manage_batch_schedule_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-batch-schedule.component */ "./src/app/employee/branch/schedule/batch-schedule/manage-batch-schedule/manage-batch-schedule.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _manage_batch_schedule_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-batch-schedule-routing.module */ "./src/app/employee/branch/schedule/batch-schedule/manage-batch-schedule/manage-batch-schedule-routing.module.ts");






var ManageBatchScheduleModule = /** @class */ /*@__PURE__*/ (function () {
    function ManageBatchScheduleModule() {
    }
    ManageBatchScheduleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ManageBatchScheduleModule });
    ManageBatchScheduleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ManageBatchScheduleModule_Factory(t) { return new (t || ManageBatchScheduleModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _manage_batch_schedule_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManageBatchScheduleRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTooltipModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbAccordionModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbFormFieldModule"],
            ]] });
    return ManageBatchScheduleModule;
}());

(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ManageBatchScheduleModule, { declarations: [_manage_batch_schedule_component__WEBPACK_IMPORTED_MODULE_0__["ManageBatchScheduleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _manage_batch_schedule_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManageBatchScheduleRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTooltipModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbAccordionModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbFormFieldModule"]] });
})();


/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "./src/app/institute/branch/lecture/lecture-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/institute/branch/lecture/lecture-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: LectureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureRoutingModule", function() { return LectureRoutingModule; });
/* harmony import */ var _lecture_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lecture.component */ "./src/app/institute/branch/lecture/lecture.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");





const routes = [
    {
        path: '',
        component: _lecture_component__WEBPACK_IMPORTED_MODULE_0__["LectureComponent"],
        children: [
            {
                path: 'batch',
                loadChildren: () => __webpack_require__.e(/*! import() */ 175).then(__webpack_require__.bind(null, /*! ./batch-lecture/batch-lecture.module */ "./src/app/institute/branch/lecture/batch-lecture/batch-lecture.module.ts")).then((m) => m.BatchLectureModule),
            },
            {
                path: 'manage',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(70)]).then(__webpack_require__.bind(null, /*! ./manage-lecture/manage-lecture.module */ "./src/app/institute/branch/lecture/manage-lecture/manage-lecture.module.ts")).then((m) => m.ManageLectureModule),
            },
            {
                path: 'view',
                loadChildren: () => __webpack_require__.e(/*! import() */ 180).then(__webpack_require__.bind(null, /*! ./view-lecture/view-lecture.module */ "./src/app/institute/branch/lecture/view-lecture/view-lecture.module.ts")).then((m) => m.ViewLectureModule),
            },
            {
                path: 'material',
                loadChildren: () => __webpack_require__.e(/*! import() */ 178).then(__webpack_require__.bind(null, /*! ./study-material/study-material.module */ "./src/app/institute/branch/lecture/study-material/study-material.module.ts")).then((m) => m.StudyMaterialModule),
            },
            {
                path: 'q&a',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(39)]).then(__webpack_require__.bind(null, /*! ./question-answers/question-answers.module */ "./src/app/institute/branch/lecture/question-answers/question-answers.module.ts")).then((m) => m.QuestionAnswersModule),
            },
            {
                path: 'attendance',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(174)]).then(__webpack_require__.bind(null, /*! ./attendance/attendance.module */ "./src/app/institute/branch/lecture/attendance/attendance.module.ts")).then((m) => m.AttendanceModule),
            },
            {
                path: '',
                redirectTo: 'batch',
                pathMatch: 'full',
            },
            {
                path: 'page-not-found',
                loadChildren: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then((m) => m.PageNotFoundModule),
            },
            {
                path: '**',
                redirectTo: 'page-not-found',
                pathMatch: 'full',
            },
        ],
    },
];
let LectureRoutingModule = /*@__PURE__*/ (() => {
    class LectureRoutingModule {
    }
    LectureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LectureRoutingModule });
    LectureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function LectureRoutingModule_Factory(t) { return new (t || LectureRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return LectureRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LectureRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/institute/branch/lecture/lecture.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/institute/branch/lecture/lecture.component.ts ***!
  \***************************************************************/
/*! exports provided: LectureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureComponent", function() { return LectureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_branch_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/branch-employee.service */ "./src/app/services/branch-employee.service.ts");
/* harmony import */ var _services_lecture_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/lecture.service */ "./src/app/services/lecture.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_batch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/batch.service */ "./src/app/services/batch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let LectureComponent = /*@__PURE__*/ (() => {
    class LectureComponent {
        constructor(branchService, branchEmployeeService, lectureService, courseService, batchService, router, route) {
            this.branchService = branchService;
            this.branchEmployeeService = branchEmployeeService;
            this.lectureService = lectureService;
            this.courseService = courseService;
            this.batchService = batchService;
            this.router = router;
            this.route = route;
        }
        ngOnInit() {
            this.loading = true;
            this.branchId = this.branchService.getBranchId();
            if (!this.branchId) {
                this.router.navigate(['../'], { relativeTo: this.route });
                return;
            }
            this.courseService.getCourses(this.branchId, '').subscribe((courses) => {
                this.courseService.setCoursesData(courses);
                this.loading = false;
            }, (error) => { });
            this.batchService.getBatches(this.branchId, '', '').subscribe((batches) => {
                this.batchService.setBatchesData(batches);
            }, (error) => { });
            this.branchEmployeeService.getBranchEmployeesForBatch(this.branchId, 'teacher').subscribe((employees) => {
                this.branchEmployeeService.setBranchEmployeesData(employees);
                this.loading = false;
            }, (error) => {
                this.router.navigate(['../'], { relativeTo: this.route });
            });
        }
        ngOnDestroy() {
            this.courseService.deleteCoursesData();
            this.batchService.deleteBatchesData();
            this.lectureService.setSearchDate(null);
        }
    }
    LectureComponent.ɵfac = function LectureComponent_Factory(t) { return new (t || LectureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_employee_service__WEBPACK_IMPORTED_MODULE_2__["BranchEmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_lecture_service__WEBPACK_IMPORTED_MODULE_3__["LectureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_4__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_5__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
    LectureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LectureComponent, selectors: [["ngx-lecture"]], decls: 1, vars: 0, template: function LectureComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: [""] });
    return LectureComponent;
})();


/***/ }),

/***/ "./src/app/institute/branch/lecture/lecture.module.ts":
/*!************************************************************!*\
  !*** ./src/app/institute/branch/lecture/lecture.module.ts ***!
  \************************************************************/
/*! exports provided: LectureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureModule", function() { return LectureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _lecture_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lecture-routing.module */ "./src/app/institute/branch/lecture/lecture-routing.module.ts");
/* harmony import */ var _lecture_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lecture.component */ "./src/app/institute/branch/lecture/lecture.component.ts");





let LectureModule = /*@__PURE__*/ (() => {
    class LectureModule {
    }
    LectureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LectureModule });
    LectureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LectureModule_Factory(t) { return new (t || LectureModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _lecture_routing_module__WEBPACK_IMPORTED_MODULE_2__["LectureRoutingModule"]]] });
    return LectureModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LectureModule, { declarations: [_lecture_component__WEBPACK_IMPORTED_MODULE_3__["LectureComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _lecture_routing_module__WEBPACK_IMPORTED_MODULE_2__["LectureRoutingModule"]] }); })();


/***/ }),

/***/ "./src/app/services/branch-employee.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/branch-employee.service.ts ***!
  \*****************************************************/
/*! exports provided: BranchEmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchEmployeeService", function() { return BranchEmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let BranchEmployeeService = /*@__PURE__*/ (() => {
    class BranchEmployeeService {
        constructor(httpService) {
            this.httpService = httpService;
            this.branchEmployee = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
            this.branchEmployees = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
            this.branchEmployeeNameIds = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        }
        setBranchEmployeeData(branchEmployee) {
            this.branchEmployee.next(branchEmployee);
        }
        getBranchEmployeeData() {
            return this.branchEmployee;
        }
        deleteBranchEmployeeData() {
            this.branchEmployee.next(null);
        }
        setBranchEmployeesData(branchEmployees) {
            this.branchEmployees.next(branchEmployees);
        }
        getBranchEmployeesData() {
            return this.branchEmployees;
        }
        deleteBranchEmployeesData() {
            this.branchEmployees.next([]);
        }
        setBranchEmployeeNameIdsData(branchEmployeeNameIds) {
            this.branchEmployeeNameIds.next(branchEmployeeNameIds);
        }
        getBranchEmployeeNameIdsData() {
            return this.branchEmployeeNameIds;
        }
        deleteBranchEmployeeNameIdsData() {
            this.branchEmployeeNameIds.next([]);
        }
        setBranchEmployeeId(branchEmployeeId) {
            this.branchEmployeeId = branchEmployeeId;
        }
        getBranchEmployeeId() {
            return this.branchEmployeeId;
        }
        deleteBranchEmployeeId() {
            this.branchEmployeeId = null;
        }
        getBranchEmployees(branch, type) {
            const data = { api: 'getBranchEmployees', data: { branch, type } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchEmployeesForBatch(branch, role) {
            const data = { api: 'getBranchEmployeesForBatch', data: { branch, role } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchEmployeeNameIds(branch, type) {
            const data = { api: 'getBranchEmployeeNameIds', data: { branch, type } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchAllEmployeeNameIds(branch) {
            const data = { api: 'getBranchAllEmployeeNameIds', data: { branch } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchEmployeeNameIdsForBatch(branch, role) {
            const data = { api: 'getBranchEmployeeNameIdsForBatch', data: { branch, role } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchEmployee(id, employee) {
            const data = { api: 'addBranchEmployee', data: { id, employee } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchEmployeeRole(branch) {
            const data = { api: 'getBranchEmployeeRole', data: { branch } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchEmployeeForSalary(id, employee) {
            const data = { api: 'getBranchEmployeeForSalary', data: { id, employee } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        newBranchEmployee(branchEmployee) {
            const data = { api: 'newBranchEmployee', data: branchEmployee };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchEmployeeForEditing(id, employee) {
            const data = { api: 'getBranchEmployeeForEditing', data: { id, employee } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        editBranchEmployee(branchEmployee) {
            const data = { api: 'updateBranchEmployee', data: branchEmployee };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        changeBranchEmployeeStatus(id, status) {
            const data = { api: 'changeBranchEmployeeStatus', data: { id, status } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteBranchEmployee(id) {
            const data = { api: 'deleteBranchEmployee', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    BranchEmployeeService.ɵfac = function BranchEmployeeService_Factory(t) { return new (t || BranchEmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    BranchEmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BranchEmployeeService, factory: BranchEmployeeService.ɵfac, providedIn: 'root' });
    return BranchEmployeeService;
})();


/***/ })

}]);
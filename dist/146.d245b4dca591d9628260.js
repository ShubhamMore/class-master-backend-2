(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[146],{

/***/ "./src/app/employee/branch/students-report/manage-student-reports/manage-student-reports-routing.module.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/employee/branch/students-report/manage-student-reports/manage-student-reports-routing.module.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ManageStudentReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageStudentReportsRoutingModule", function() { return ManageStudentReportsRoutingModule; });
/* harmony import */ var _manage_student_reports_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-student-reports.component */ "./src/app/employee/branch/students-report/manage-student-reports/manage-student-reports.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





var routes = [
    {
        path: '',
        component: _manage_student_reports_component__WEBPACK_IMPORTED_MODULE_0__["ManageStudentReportsComponent"],
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
var ManageStudentReportsRoutingModule = /** @class */ /*@__PURE__*/ (function () {
    function ManageStudentReportsRoutingModule() {
    }
    ManageStudentReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ManageStudentReportsRoutingModule });
    ManageStudentReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ManageStudentReportsRoutingModule_Factory(t) { return new (t || ManageStudentReportsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return ManageStudentReportsRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageStudentReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/employee/branch/students-report/manage-student-reports/manage-student-reports.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/employee/branch/students-report/manage-student-reports/manage-student-reports.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ManageStudentReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageStudentReportsComponent", function() { return ManageStudentReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _services_branch_student_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/branch-student.service */ "./src/app/services/branch-student.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");









function ManageStudentReportsComponent_nb_option_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var category_r4 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", category_r4._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r4.category);
    }
}
function ManageStudentReportsComponent_ng_container_20_div_1_tr_15_Template(rf, ctx) {
    if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageStudentReportsComponent_ng_container_20_div_1_tr_15_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); var branchStudent_r9 = ctx.$implicit; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r11.branchStudentCourses(branchStudent_r9._id, branchStudent_r9.student, branchStudent_r9.category); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Course Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var branchStudent_r9 = ctx.$implicit;
        var i_r10 = ctx.index;
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r10 + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](branchStudent_r9.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.getCategory(branchStudent_r9.category));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", branchStudent_r9.status ? "active" : "inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](branchStudent_r9.status ? "Active" : "Inactive");
    }
}
function ManageStudentReportsComponent_ng_container_20_div_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Course Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ManageStudentReportsComponent_ng_container_20_div_1_tr_15_Template, 13, 5, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.filteredBranchStudents);
    }
}
function ManageStudentReportsComponent_ng_container_20_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Students Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function ManageStudentReportsComponent_ng_container_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManageStudentReportsComponent_ng_container_20_div_1_Template, 16, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ManageStudentReportsComponent_ng_container_20_ng_template_2_Template, 2, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.filteredBranchStudents.length > 0)("ngIfElse", _r6);
    }
}
function ManageStudentReportsComponent_ng_template_21_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
var ManageStudentReportsComponent = /** @class */ /*@__PURE__*/ (function () {
    function ManageStudentReportsComponent(branchService, studentService, toastrService, branchStudentService, router, route) {
        var _this = this;
        this.branchService = branchService;
        this.studentService = studentService;
        this.toastrService = toastrService;
        this.branchStudentService = branchStudentService;
        this.router = router;
        this.route = route;
        this.route.queryParams.subscribe(function (param) {
            // put the code from `ngOnInit` here
            _this.ngOnInit();
        });
    }
    ManageStudentReportsComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.branchId = this.branchService.getBranchId();
        if (!this.branchId) {
            this.router.navigate(['../'], { relativeTo: this.route });
            return;
        }
        this.branchStudents = [];
        this.filteredBranchStudents = [];
        this.categories = [];
        this.category = '';
        this.getCategories();
        this.getStudents(this.category);
    };
    ManageStudentReportsComponent.prototype.getCategories = function () {
        var _this = this;
        this.branchService.getBranchData().subscribe(function (branch) {
            if (branch) {
                _this.categories = branch.categories;
            }
        });
        if (!this.categories) {
            this.branchService.getBranch(this.branchId).subscribe(function (branch) {
                _this.branchService.setBranchData(branch);
                _this.categories = branch.categories;
            }, function (error) {
                _this.showToastr('top-right', 'danger', error);
                _this.loading = false;
            });
        }
    };
    ManageStudentReportsComponent.prototype.getStudents = function (category) {
        var _this = this;
        this.loading = true;
        this.branchStudentService.getBranchAllStudentNameIds(this.branchId, category).subscribe(function (branchStudents) {
            _this.branchStudents = branchStudents;
            _this.filteredBranchStudents = branchStudents;
            _this.loading = false;
        }, function (err) {
            _this.showToastr('top-right', 'danger', err);
            _this.loading = false;
        });
    };
    ManageStudentReportsComponent.prototype.searchStudent = function (student) {
        student = student.trim().toLowerCase();
        if (student) {
            this.filteredBranchStudents = this.branchStudents.filter(function (branchStudent) { return branchStudent.name.toLowerCase().includes(student); });
        }
        else {
            this.filteredBranchStudents = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.branchStudents);
        }
    };
    ManageStudentReportsComponent.prototype.branchStudentCourses = function (id, student, category) {
        this.studentService.setStudentId(student);
        this.branchService.setCategoryId(category);
        this.branchStudentService.setBranchStudentId(id);
        this.router.navigate(['../course'], { relativeTo: this.route });
    };
    ManageStudentReportsComponent.prototype.getCategory = function (categoryId) {
        var category = this.categories.find(function (curCategory) { return curCategory._id === categoryId; });
        if (category) {
            return category.category;
        }
        return '--';
    };
    ManageStudentReportsComponent.prototype.showToastr = function (position, status, message) {
        this.toastrService.show(status, message, {
            position: position,
            status: status,
        });
    };
    ManageStudentReportsComponent.ɵfac = function ManageStudentReportsComponent_Factory(t) { return new (t || ManageStudentReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_student_service__WEBPACK_IMPORTED_MODULE_5__["BranchStudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
    ManageStudentReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ManageStudentReportsComponent, selectors: [["ngx-manage-student-reports"]], decls: 23, vars: 4, consts: [[1, "row"], [1, "col-md-9", "col-sm-4"], [1, "col-md-3", "col-sm-4"], ["id", "select-category", "name", "category", "fullWidth", "", "placeholder", "Select Category", 3, "selected", "selectedChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "body-container"], [1, "col-md-6", "col-sm-8", "col-12"], ["nbPrefix", "", "icon", "search-outline", "pack", "eva"], ["type", "text", "nbInput", "", "shape", "round", "placeholder", "Search", "fullWidth", "", 3, "input"], [1, "col-md-12"], [4, "ngIf", "ngIfElse"], ["loadingData", ""], [3, "value"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noBranchStudents", ""], [1, "table-responsive"], [1, "table"], [4, "ngFor", "ngForOf"], [3, "ngClass"], ["nbButton", "", "size", "small", "status", "success", "nbPrefix", "", 3, "click"], [1, "text-center", "pt-5", "pb-5"]], template: function ManageStudentReportsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Student Reports");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nb-select", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedChange", function ManageStudentReportsComponent_Template_nb_select_selectedChange_7_listener($event) { return ctx.getStudents($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nb-option", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "All");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ManageStudentReportsComponent_nb_option_10_Template, 2, 2, "nb-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nb-card-body", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nb-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "nb-icon", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ManageStudentReportsComponent_Template_input_input_16_listener($event) { return ctx.searchStudent($event.target.value); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ManageStudentReportsComponent_ng_container_20_Template, 4, 2, "ng-container", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ManageStudentReportsComponent_ng_template_21_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx.category);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r2);
            }
        }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbPrefixDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"]], styles: [".active[_ngcontent-%COMP%] {\n  color: #00d68f;\n}\n\n.inactive[_ngcontent-%COMP%] {\n  color: #ff3d71;\n}"] });
    return ManageStudentReportsComponent;
}());



/***/ }),

/***/ "./src/app/employee/branch/students-report/manage-student-reports/manage-student-reports.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/employee/branch/students-report/manage-student-reports/manage-student-reports.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ManageStudentReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageStudentReportsModule", function() { return ManageStudentReportsModule; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _manage_student_reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-student-reports-routing.module */ "./src/app/employee/branch/students-report/manage-student-reports/manage-student-reports-routing.module.ts");
/* harmony import */ var _manage_student_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-student-reports.component */ "./src/app/employee/branch/students-report/manage-student-reports/manage-student-reports.component.ts");






var ManageStudentReportsModule = /** @class */ /*@__PURE__*/ (function () {
    function ManageStudentReportsModule() {
    }
    ManageStudentReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ManageStudentReportsModule });
    ManageStudentReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ManageStudentReportsModule_Factory(t) { return new (t || ManageStudentReportsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _manage_student_reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageStudentReportsRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbFormFieldModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"],
            ]] });
    return ManageStudentReportsModule;
}());

(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageStudentReportsModule, { declarations: [_manage_student_reports_component__WEBPACK_IMPORTED_MODULE_4__["ManageStudentReportsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _manage_student_reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageStudentReportsRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbFormFieldModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"]] });
})();


/***/ })

}]);
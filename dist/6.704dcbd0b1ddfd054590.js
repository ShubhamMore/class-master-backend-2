(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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



/***/ }),

/***/ "./src/app/services/subject.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/subject.service.ts ***!
  \*********************************************/
/*! exports provided: SubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectService", function() { return SubjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");




var SubjectService = /** @class */ /*@__PURE__*/ (function () {
    function SubjectService(httpService) {
        this.httpService = httpService;
        this.subjects = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    SubjectService.prototype.setSubjectId = function (subjectId) {
        this.subjectId = subjectId;
    };
    SubjectService.prototype.getSubjectId = function () {
        return this.subjectId;
    };
    SubjectService.prototype.deleteSubjectId = function () {
        this.subjectId = null;
    };
    SubjectService.prototype.setSubjectsData = function (subjects) {
        this.subjects.next(subjects);
    };
    SubjectService.prototype.getSubjectsData = function () {
        return this.subjects;
    };
    SubjectService.prototype.deleteSubjectsData = function () {
        this.subjects.next([]);
    };
    SubjectService.prototype.setSubjectData = function (subject) {
        this.subject.next(subject);
    };
    SubjectService.prototype.getSubjectData = function () {
        return this.subject;
    };
    SubjectService.prototype.deleteSubjectData = function () {
        this.subject.next(null);
    };
    SubjectService.ɵfac = function SubjectService_Factory(t) { return new (t || SubjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
    SubjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SubjectService, factory: SubjectService.ɵfac, providedIn: 'root' });
    return SubjectService;
}());



/***/ })

}]);
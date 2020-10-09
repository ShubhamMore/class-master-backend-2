function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{"52Hq":function(t,e,n){"use strict";n.r(e);var r=n("ofXK"),s=n("tyNb"),o=n("IAlr"),i=n("qsE9"),u=n("EQut"),l=n("JmRu"),a=n("fXoL"),c=n("aceb");function d(t,e){1&t&&a.Rb(0,"router-outlet")}var h,f,C=[{path:"",component:(h=function(){function t(e,n,r,s,o,i,u){_classCallCheck(this,t),this.branchService=e,this.toastrService=n,this.studentService=r,this.courseService=s,this.studentCourseInstallmentService=o,this.router=i,this.route=u}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.categoryId=this.branchService.getCategoryId(),this.courseId=this.courseService.getCourseId(),this.studentId=this.studentService.getStudentId(),this.studentCourseInstallmentId=this.studentCourseInstallmentService.getStudentCourseInstallmentId(),this.branchId&&this.categoryId&&this.courseId&&this.studentId&&this.studentCourseInstallmentId?this.studentCourseInstallmentService.getStudentCourseInstallment(this.studentCourseInstallmentId).subscribe((function(e){t.studentCourseInstallmentService.setStudentCourseInstallmentData(e),t.loading=!1}),(function(e){t.showToastr("top-right","danger",e),t.router.navigate(["../"],{relativeTo:t.route})})):this.router.navigate(["../"],{relativeTo:this.route})}},{key:"showToastr",value:function(t,e,n){this.toastrService.show(e,n,{position:t,status:e})}},{key:"ngOnDestroy",value:function(){this.courseService.deleteCourseId(),this.studentCourseInstallmentService.deleteStudentCourseInstallmentId(),this.studentCourseInstallmentService.deleteStudentCourseInstallmentData()}}]),t}(),h.\u0275fac=function(t){return new(t||h)(a.Qb(u.a),a.Qb(c.xb),a.Qb(l.a),a.Qb(o.a),a.Qb(i.a),a.Qb(s.c),a.Qb(s.a))},h.\u0275cmp=a.Kb({type:h,selectors:[["ngx-student-course-installment"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(t,e){1&t&&a.Ac(0,d,1,0,"router-outlet",0),2&t&&a.mc("ngIf",!e.loading)},directives:[r.n,s.h],styles:[""]}),h),children:[{path:"manage",loadChildren:function(){return Promise.all([n.e(1),n.e(95)]).then(n.bind(null,"Av0i")).then((function(t){return t.ManageStudentCourseInstallmentModule}))}},{path:"collect",loadChildren:function(){return Promise.all([n.e(1),n.e(19)]).then(n.bind(null,"7v65")).then((function(t){return t.CollectStudentCourseInstallmentModule}))}},{path:"edit",loadChildren:function(){return Promise.all([n.e(1),n.e(19)]).then(n.bind(null,"7v65")).then((function(t){return t.CollectStudentCourseInstallmentModule}))}},{path:"receipt",loadChildren:function(){return Promise.all([n.e(1),n.e(96)]).then(n.bind(null,"lrWQ")).then((function(t){return t.StudentCourseInstallmentReceiptModule}))}},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(t){return t.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],I=((f=function t(){_classCallCheck(this,t)}).\u0275mod=a.Ob({type:f}),f.\u0275inj=a.Nb({factory:function(t){return new(t||f)},imports:[[s.g.forChild(C)],s.g]}),f);n.d(e,"StudentCourseInstallmentModule",(function(){return p}));var m,p=((m=function t(){_classCallCheck(this,t)}).\u0275mod=a.Ob({type:m}),m.\u0275inj=a.Nb({factory:function(t){return new(t||m)},imports:[[r.c,I]]}),m)}}]);
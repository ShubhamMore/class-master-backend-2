!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{BWAu:function(n,r,o){"use strict";o.r(r),o.d(r,"StudentCourseInstallmentModule",(function(){return v}));var i=o("ofXK"),u=o("tyNb"),l=o("fXoL"),a=o("EQut"),c=o("IAlr"),s=o("qsE9");function d(e,t){1&e&&l["\u0275\u0275element"](0,"router-outlet")}var h,f,p,m=[{path:"",component:(h=function(){function n(t,r,o,i,u){e(this,n),this.branchService=t,this.courseService=r,this.studentCourseInstallmentService=o,this.router=i,this.route=u}var r,o,i;return r=n,(o=[{key:"ngOnInit",value:function(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.loading=!1:this.back()}},{key:"back",value:function(){this.router.navigate(["../"],{relativeTo:this.route})}},{key:"ngOnDestroy",value:function(){this.courseService.deleteCourseId(),this.studentCourseInstallmentService.deleteStudentCourseInstallmentId(),this.studentCourseInstallmentService.deleteStudentCourseInstallmentData()}}])&&t(r.prototype,o),i&&t(r,i),n}(),h.\u0275fac=function(e){return new(e||h)(l["\u0275\u0275directiveInject"](a.a),l["\u0275\u0275directiveInject"](c.a),l["\u0275\u0275directiveInject"](s.a),l["\u0275\u0275directiveInject"](u.c),l["\u0275\u0275directiveInject"](u.a))},h.\u0275cmp=l["\u0275\u0275defineComponent"]({type:h,selectors:[["ngx-student-course-installment"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(e,t){1&e&&l["\u0275\u0275template"](0,d,1,0,"router-outlet",0),2&e&&l["\u0275\u0275property"]("ngIf",!t.loading)},directives:[i.n,u.h],styles:[""]}),h),children:[{path:"manage",loadChildren:function(){return Promise.all([o.e(1),o.e(205)]).then(o.bind(null,"Sj0N")).then((function(e){return e.ManageStudentCourseInstallmentModule}))}},{path:"collect",loadChildren:function(){return Promise.all([o.e(1),o.e(35)]).then(o.bind(null,"1TA9")).then((function(e){return e.CollectStudentCourseInstallmentModule}))}},{path:"edit",loadChildren:function(){return Promise.all([o.e(1),o.e(35)]).then(o.bind(null,"1TA9")).then((function(e){return e.CollectStudentCourseInstallmentModule}))}},{path:"receipt",loadChildren:function(){return Promise.all([o.e(1),o.e(206)]).then(o.bind(null,"cgHg")).then((function(e){return e.StudentCourseInstallmentReceiptModule}))}},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return o.e(0).then(o.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],I=((p=function t(){e(this,t)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:p}),p.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||p)},imports:[[u.g.forChild(m)],u.g]}),p),v=((f=function t(){e(this,t)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:f}),f.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||f)},imports:[[i.c,I]]}),f)}}])}();
//# sourceMappingURL=207-es5.bc531a9008f34ab4ab52.js.map
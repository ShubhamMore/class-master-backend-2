(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{"7xId":function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),i=n("tyNb"),o=n("W14u"),s=n("IAlr"),l=n("qsE9"),a=n("EQut"),c=n("fXoL");function u(e,t){1&e&&c["\u0275\u0275element"](0,"router-outlet")}const d=[{path:"",component:(()=>{class e{constructor(e,t,n,r,i,o){this.branchService=e,this.courseService=t,this.studentCourseService=n,this.studentCourseInstallmentService=r,this.router=i,this.route=o}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.loading=!1:this.router.navigate(["../"],{relativeTo:this.route})}ngOnDestroy(){this.courseService.deleteCourseId(),this.studentCourseService.deleteStudentCourseData(),this.studentCourseInstallmentService.deleteStudentCourseInstallmentId(),this.studentCourseInstallmentService.deleteStudentCourseInstallmentData()}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](a.a),c["\u0275\u0275directiveInject"](s.a),c["\u0275\u0275directiveInject"](o.a),c["\u0275\u0275directiveInject"](l.a),c["\u0275\u0275directiveInject"](i.c),c["\u0275\u0275directiveInject"](i.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-course-installment"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(e,t){1&e&&c["\u0275\u0275template"](0,u,1,0,"router-outlet",0),2&e&&c["\u0275\u0275property"]("ngIf",!t.loading)},directives:[r.n,i.h],styles:[""]}),e})(),children:[{path:"manage",loadChildren:()=>Promise.all([n.e(1),n.e(205)]).then(n.bind(null,"hof6")).then(e=>e.ManageCourseInstallmentModule)},{path:"receipt",loadChildren:()=>Promise.all([n.e(1),n.e(203)]).then(n.bind(null,"qmfq")).then(e=>e.CourseInstallmentReceiptModule)},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let h=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.g.forChild(d)],i.g]}),e})();n.d(t,"CourseInstallmentModule",(function(){return p}));let p=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,h]]}),e})()}}]);
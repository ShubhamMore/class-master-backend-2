(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{R4cN:function(e,t,n){"use strict";n.r(t),n.d(t,"CourseMaterialModule",(function(){return h}));var r=n("ofXK"),i=n("fXoL"),o=n("EQut"),a=n("nF4J"),c=n("7kqb"),u=n("W14u"),s=n("tyNb");const d=[{path:"",component:(()=>{class e{constructor(e,t,n,r,i,o){this.branchService=e,this.studentBranchService=t,this.lectureService=n,this.studentCourseService=r,this.router=i,this.route=o}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId||this.router.navigate(["../"],{relativeTo:this.route})}ngOnDestroy(){this.lectureService.setSearchDate(null),this.studentCourseService.deleteStudentCourseData()}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](a.a),i["\u0275\u0275directiveInject"](c.a),i["\u0275\u0275directiveInject"](u.a),i["\u0275\u0275directiveInject"](s.c),i["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-course-material"]],decls:1,vars:0,template:function(e,t){1&e&&i["\u0275\u0275element"](0,"router-outlet")},directives:[s.h],styles:[""]}),e})(),children:[{path:"manage",loadChildren:()=>Promise.all([n.e(1),n.e(237)]).then(n.bind(null,"8O6N")).then(e=>e.ManageCourseMaterialModule)},{path:"view",loadChildren:()=>Promise.all([n.e(4),n.e(1),n.e(238)]).then(n.bind(null,"v5RP")).then(e=>e.ViewCourseMaterialModule)},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let l=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.g.forChild(d)],s.g]}),e})(),h=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,l]]}),e})()}}]);
//# sourceMappingURL=236-es2015.fac8d0b6f760fea35bfa.js.map
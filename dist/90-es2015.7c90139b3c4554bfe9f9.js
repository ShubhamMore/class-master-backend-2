(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{GD1K:function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),o=n("tyNb"),i=n("IAlr"),a=n("EQut"),c=n("fXoL");function l(e,t){1&e&&c["\u0275\u0275element"](0,"router-outlet")}const s=[{path:"",component:(()=>{class e{constructor(e,t,n,r){this.branchService=e,this.courseService=t,this.router=n,this.route=r}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.courseId=this.courseService.getCourseId(),this.branchId&&this.courseId&&this.courseService.getCourseData()?this.loading=!1:this.router.navigate(["../"],{relativeTo:this.route})}ngOnDestroy(){this.courseService.deleteCourseId(),this.courseService.deleteCourseData()}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](a.a),c["\u0275\u0275directiveInject"](i.a),c["\u0275\u0275directiveInject"](o.c),c["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-course-material"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(e,t){1&e&&c["\u0275\u0275template"](0,l,1,0,"router-outlet",0),2&e&&c["\u0275\u0275property"]("ngIf",!t.loading)},directives:[r.n,o.h],styles:[""]}),e})(),children:[{path:"manage",loadChildren:()=>Promise.all([n.e(1),n.e(91)]).then(n.bind(null,"Ylal")).then(e=>e.ManageCourseMaterialModule)},{path:"add",loadChildren:()=>Promise.all([n.e(1),n.e(89)]).then(n.bind(null,"7bFp")).then(e=>e.AddCourseMaterialModule)},{path:"view",loadChildren:()=>Promise.all([n.e(6),n.e(1),n.e(92)]).then(n.bind(null,"QBVm")).then(e=>e.ViewCourseMaterialModule)},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let d=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.g.forChild(s)],o.g]}),e})();n.d(t,"CourseMaterialModule",(function(){return u}));let u=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,d]]}),e})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{LKV4:function(e,t,n){"use strict";n.r(t),n.d(t,"CourseMaterialModule",(function(){return u}));var r=n("ofXK"),o=n("tyNb"),i=n("fXoL"),a=n("EQut"),c=n("IAlr");function s(e,t){1&e&&i["\u0275\u0275element"](0,"router-outlet")}const l=[{path:"",component:(()=>{class e{constructor(e,t,n,r){this.branchService=e,this.courseService=t,this.router=n,this.route=r}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.courseId=this.courseService.getCourseId(),this.branchId&&this.courseId&&this.courseService.getCourseData()?this.loading=!1:this.back()}back(){this.router.navigate(["../"],{relativeTo:this.route})}ngOnDestroy(){this.courseService.deleteCourseId(),this.courseService.deleteCourseData()}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](a.a),i["\u0275\u0275directiveInject"](c.a),i["\u0275\u0275directiveInject"](o.c),i["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-course-material"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(e,t){1&e&&i["\u0275\u0275template"](0,s,1,0,"router-outlet",0),2&e&&i["\u0275\u0275property"]("ngIf",!t.loading)},directives:[r.n,o.h],styles:[""]}),e})(),children:[{path:"manage",loadChildren:()=>Promise.all([n.e(1),n.e(192)]).then(n.bind(null,"4Gly")).then(e=>e.ManageCourseMaterialModule)},{path:"add",loadChildren:()=>Promise.all([n.e(1),n.e(190)]).then(n.bind(null,"6+PS")).then(e=>e.AddCourseMaterialModule)},{path:"view",loadChildren:()=>Promise.all([n.e(4),n.e(1),n.e(193)]).then(n.bind(null,"T5rS")).then(e=>e.ViewCourseMaterialModule)},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let d=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.g.forChild(l)],o.g]}),e})(),u=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,d]]}),e})()}}]);
//# sourceMappingURL=191-es2015.e7a5b103d81c42b4f807.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{LKV4:function(e,t,r){"use strict";r.r(t);var n=r("ofXK"),o=r("tyNb"),i=r("IAlr"),a=r("EQut"),s=r("fXoL");function l(e,t){1&e&&s.Rb(0,"router-outlet")}const u=[{path:"",component:(()=>{class e{constructor(e,t,r,n){this.branchService=e,this.courseService=t,this.router=r,this.route=n}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.courseId=this.courseService.getCourseId(),this.branchId&&this.courseId&&this.courseService.getCourseData()?this.loading=!1:this.router.navigate(["../"],{relativeTo:this.route})}ngOnDestroy(){this.courseService.deleteCourseId(),this.courseService.deleteCourseData()}}return e.\u0275fac=function(t){return new(t||e)(s.Qb(a.a),s.Qb(i.a),s.Qb(o.c),s.Qb(o.a))},e.\u0275cmp=s.Kb({type:e,selectors:[["ngx-course-material"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(e,t){1&e&&s.Ac(0,l,1,0,"router-outlet",0),2&e&&s.mc("ngIf",!t.loading)},directives:[n.n,o.h],styles:[""]}),e})(),children:[{path:"manage",loadChildren:()=>Promise.all([r.e(1),r.e(136)]).then(r.bind(null,"4Gly")).then(e=>e.ManageCourseMaterialModule)},{path:"add",loadChildren:()=>Promise.all([r.e(1),r.e(134)]).then(r.bind(null,"6+PS")).then(e=>e.AddCourseMaterialModule)},{path:"view",loadChildren:()=>Promise.all([r.e(5),r.e(1),r.e(137)]).then(r.bind(null,"T5rS")).then(e=>e.ViewCourseMaterialModule)},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>r.e(0).then(r.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let c=(()=>{class e{}return e.\u0275mod=s.Ob({type:e}),e.\u0275inj=s.Nb({factory:function(t){return new(t||e)},imports:[[o.g.forChild(u)],o.g]}),e})();r.d(t,"CourseMaterialModule",(function(){return h}));let h=(()=>{class e{}return e.\u0275mod=s.Ob({type:e}),e.\u0275inj=s.Nb({factory:function(t){return new(t||e)},imports:[[n.c,c]]}),e})()}}]);
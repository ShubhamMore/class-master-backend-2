(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{gVRm:function(e,t,n){"use strict";n.r(t);var o=n("ofXK"),r=n("EQut"),i=n("fXoL"),l=n("tyNb");const a=[{path:"",component:(()=>{class e{constructor(e,t,n){this.branchService=e,this.router=t,this.route=n}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.loading=!1:this.router.navigate(["../"],{relativeTo:this.route})}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](r.a),i["\u0275\u0275directiveInject"](l.c),i["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-course"]],decls:1,vars:0,template:function(e,t){1&e&&i["\u0275\u0275element"](0,"router-outlet")},directives:[l.h],styles:[""]}),e})(),children:[{path:"manage",loadChildren:()=>Promise.all([n.e(1),n.e(94)]).then(n.bind(null,"lc0P")).then(e=>e.ManageCourseModule)},{path:"add",loadChildren:()=>Promise.all([n.e(3),n.e(1),n.e(14)]).then(n.bind(null,"4spS")).then(e=>e.AddCourseModule)},{path:"edit",loadChildren:()=>Promise.all([n.e(3),n.e(1),n.e(14)]).then(n.bind(null,"4spS")).then(e=>e.AddCourseModule)},{path:"batch",loadChildren:()=>Promise.all([n.e(1),n.e(87)]).then(n.bind(null,"iQ/W")).then(e=>e.BatchModule)},{path:"course-material",loadChildren:()=>Promise.all([n.e(1),n.e(90)]).then(n.bind(null,"GD1K")).then(e=>e.CourseMaterialModule)},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let d=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.g.forChild(a)],l.g]}),e})();n.d(t,"CourseModule",(function(){return h}));let h=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,d]]}),e})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{r6Xq:function(e,t,n){"use strict";n.r(t),n.d(t,"CourseModule",(function(){return h}));var r=n("ofXK"),o=n("fXoL"),i=n("EQut"),l=n("tyNb");const a=[{path:"",component:(()=>{class e{constructor(e,t,n){this.branchService=e,this.router=t,this.route=n}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.loading=!1:this.router.navigate(["../"],{relativeTo:this.route})}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](i.a),o["\u0275\u0275directiveInject"](l.c),o["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-course"]],decls:1,vars:0,template:function(e,t){1&e&&o["\u0275\u0275element"](0,"router-outlet")},directives:[l.h],styles:[""]}),e})(),children:[{path:"manage",loadChildren:()=>Promise.all([n.e(1),n.e(195)]).then(n.bind(null,"iy8L")).then(e=>e.ManageCourseModule)},{path:"add",loadChildren:()=>Promise.all([n.e(3),n.e(1),n.e(29)]).then(n.bind(null,"0PO0")).then(e=>e.AddCourseModule)},{path:"edit",loadChildren:()=>Promise.all([n.e(3),n.e(1),n.e(29)]).then(n.bind(null,"0PO0")).then(e=>e.AddCourseModule)},{path:"batch",loadChildren:()=>Promise.all([n.e(1),n.e(188)]).then(n.bind(null,"zlMI")).then(e=>e.BatchModule)},{path:"course-material",loadChildren:()=>Promise.all([n.e(1),n.e(191)]).then(n.bind(null,"LKV4")).then(e=>e.CourseMaterialModule)},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let d=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.g.forChild(a)],l.g]}),e})(),h=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,d]]}),e})()}}]);
//# sourceMappingURL=194-es2015.cf2d95c77837c3731462.js.map
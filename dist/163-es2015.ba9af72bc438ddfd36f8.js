(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{zlMI:function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),i=n("IAlr"),o=n("EQut"),c=n("fXoL"),a=n("tyNb");const d=[{path:"",component:(()=>{class e{constructor(e,t,n,r){this.branchService=e,this.courseService=t,this.router=n,this.route=r}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.courseId=this.courseService.getCourseId(),this.branchId&&this.courseId&&this.courseService.getCourseData()?this.loading=!1:this.router.navigate(["../"],{relativeTo:this.route})}ngOnDestroy(){this.courseService.deleteCourseId(),this.courseService.deleteCourseData()}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](o.a),c["\u0275\u0275directiveInject"](i.a),c["\u0275\u0275directiveInject"](a.c),c["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-batch"]],decls:1,vars:0,template:function(e,t){1&e&&c["\u0275\u0275element"](0,"router-outlet")},directives:[a.h],styles:[""]}),e})(),children:[{path:"manage",loadChildren:()=>Promise.all([n.e(1),n.e(164)]).then(n.bind(null,"sFpH")).then(e=>e.ManageBatchModule)},{path:"add",loadChildren:()=>Promise.all([n.e(3),n.e(1),n.e(28)]).then(n.bind(null,"MDGh")).then(e=>e.AddBatchModule)},{path:"edit",loadChildren:()=>Promise.all([n.e(3),n.e(1),n.e(28)]).then(n.bind(null,"MDGh")).then(e=>e.AddBatchModule)},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let h=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.g.forChild(d)],a.g]}),e})();n.d(t,"BatchModule",(function(){return s}));let s=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,h]]}),e})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{ktXP:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),d=n("JmRu"),r=n("EQut"),o=n("fXoL"),l=n("tyNb");const a=[{path:"",component:(()=>{class e{constructor(e,t,n,i){this.branchService=e,this.studentService=t,this.router=n,this.route=i}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId||this.router.navigate(["../"],{relativeTo:this.route})}ngOnDestroy(){this.studentService.deleteStudentType()}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](r.a),o["\u0275\u0275directiveInject"](d.a),o["\u0275\u0275directiveInject"](l.c),o["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-student"]],decls:1,vars:0,template:function(e,t){1&e&&o["\u0275\u0275element"](0,"router-outlet")},directives:[l.h],styles:[""]}),e})(),children:[{path:"add",loadChildren:()=>Promise.all([n.e(2),n.e(1),n.e(18)]).then(n.bind(null,"gAi8")).then(e=>e.AddStudentModule)},{path:"edit",loadChildren:()=>Promise.all([n.e(2),n.e(1),n.e(18)]).then(n.bind(null,"gAi8")).then(e=>e.AddStudentModule)},{path:"manage",loadChildren:()=>Promise.all([n.e(1),n.e(107)]).then(n.bind(null,"dldG")).then(e=>e.ManageStudentModule)},{path:"course",loadChildren:()=>Promise.all([n.e(1),n.e(114)]).then(n.bind(null,"ojiR")).then(e=>e.StudentCourseModule)},{path:"",redirectTo:"manage?type=active",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let u=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.g.forChild(a)],l.g]}),e})();n.d(t,"StudentModule",(function(){return c}));let c=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,u]]}),e})()}}]);
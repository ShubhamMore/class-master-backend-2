(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{X0Xa:function(e,t,n){"use strict";n.r(t),n.d(t,"ManageBranchModule",(function(){return u}));var r=n("ofXK"),o=n("fXoL"),i=n("EQut"),c=n("tyNb");const a=[{path:"",component:(()=>{class e{constructor(e,t,n){this.branchService=e,this.router=t,this.route=n}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId||this.router.navigate(["../"],{relativeTo:this.route})}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](i.a),o["\u0275\u0275directiveInject"](c.c),o["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-manage-branch"]],decls:1,vars:0,template:function(e,t){1&e&&o["\u0275\u0275element"](0,"router-outlet")},directives:[c.h],styles:[""]}),e})(),children:[{path:"receipt",loadChildren:()=>Promise.all([n.e(1),n.e(122)]).then(n.bind(null,"R7iH")).then(e=>e.ReceiptInfoModule)},{path:"course",loadChildren:()=>n.e(117).then(n.bind(null,"gVRm")).then(e=>e.CourseModule)},{path:"discount-and-offers",loadChildren:()=>n.e(119).then(n.bind(null,"DuA9")).then(e=>e.DiscountAndOfferModule)},{path:"",redirectTo:"course",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let d=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[c.g.forChild(a)],c.g]}),e})(),u=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,d]]}),e})()}}]);
//# sourceMappingURL=121-es2015.64f2f9e7fb1c043bf498.js.map
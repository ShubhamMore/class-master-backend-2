(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{X0Xa:function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),o=n("EQut"),a=n("fXoL"),i=n("tyNb");const c=[{path:"",component:(()=>{class e{constructor(e,t,n){this.branchService=e,this.router=t,this.route=n}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId||this.router.navigate(["../"],{relativeTo:this.route})}}return e.\u0275fac=function(t){return new(t||e)(a.Qb(o.a),a.Qb(i.c),a.Qb(i.a))},e.\u0275cmp=a.Kb({type:e,selectors:[["ngx-manage-branch"]],decls:1,vars:0,template:function(e,t){1&e&&a.Rb(0,"router-outlet")},directives:[i.h],styles:[""]}),e})(),children:[{path:"receipt",loadChildren:()=>Promise.all([n.e(1),n.e(87)]).then(n.bind(null,"R7iH")).then(e=>e.ReceiptInfoModule)},{path:"course",loadChildren:()=>n.e(82).then(n.bind(null,"gVRm")).then(e=>e.CourseModule)},{path:"discount-and-offers",loadChildren:()=>n.e(84).then(n.bind(null,"DuA9")).then(e=>e.DiscountAndOfferModule)},{path:"",redirectTo:"course",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let h=(()=>{class e{}return e.\u0275mod=a.Ob({type:e}),e.\u0275inj=a.Nb({factory:function(t){return new(t||e)},imports:[[i.g.forChild(c)],i.g]}),e})();n.d(t,"ManageBranchModule",(function(){return u}));let u=(()=>{class e{}return e.\u0275mod=a.Ob({type:e}),e.\u0275inj=a.Nb({factory:function(t){return new(t||e)},imports:[[r.c,h]]}),e})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"3EhG":function(t,n,e){"use strict";e.r(n);var o=e("ofXK"),r=e("EQut"),i=e("fXoL"),c=e("tyNb");const s=[{path:"",component:(()=>{class t{constructor(t,n,e){this.branchService=t,this.router=n,this.route=e}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId||this.router.navigate(["../"],{relativeTo:this.route})}}return t.\u0275fac=function(n){return new(n||t)(i.Qb(r.a),i.Qb(c.c),i.Qb(c.a))},t.\u0275cmp=i.Kb({type:t,selectors:[["ngx-add-online-test"]],decls:2,vars:0,template:function(t,n){1&t&&(i.Wb(0,"p"),i.Cc(1,"add-online-test works!"),i.Vb())},styles:[""]}),t})()},{path:"page-not-found",loadChildren:()=>e.e(0).then(e.bind(null,"DeSt")).then(t=>t.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let a=(()=>{class t{}return t.\u0275mod=i.Ob({type:t}),t.\u0275inj=i.Nb({factory:function(n){return new(n||t)},imports:[[c.g.forChild(s)],c.g]}),t})();e.d(n,"AddOnlineTestModule",(function(){return u}));let u=(()=>{class t{}return t.\u0275mod=i.Ob({type:t}),t.\u0275inj=i.Nb({factory:function(n){return new(n||t)},imports:[[o.c,a]]}),t})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{jwG3:function(t,n,e){"use strict";e.r(n);var r=e("ofXK"),o=e("EQut"),a=e("fXoL"),c=e("tyNb");const i=[{path:"",component:(()=>{class t{constructor(t,n,e){this.branchService=t,this.router=n,this.route=e}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId||this.router.navigate(["../"],{relativeTo:this.route})}}return t.\u0275fac=function(n){return new(n||t)(a.Qb(o.a),a.Qb(c.c),a.Qb(c.a))},t.\u0275cmp=a.Kb({type:t,selectors:[["ngx-manage-budget"]],decls:2,vars:0,template:function(t,n){1&t&&(a.Wb(0,"p"),a.Cc(1,"manage-budget works!"),a.Vb())},styles:[""]}),t})()},{path:"page-not-found",loadChildren:()=>e.e(0).then(e.bind(null,"DeSt")).then(t=>t.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let s=(()=>{class t{}return t.\u0275mod=a.Ob({type:t}),t.\u0275inj=a.Nb({factory:function(n){return new(n||t)},imports:[[c.g.forChild(i)],c.g]}),t})();e.d(n,"ManageBudgetModule",(function(){return u}));let u=(()=>{class t{}return t.\u0275mod=a.Ob({type:t}),t.\u0275inj=a.Nb({factory:function(n){return new(n||t)},imports:[[r.c,s]]}),t})()}}]);
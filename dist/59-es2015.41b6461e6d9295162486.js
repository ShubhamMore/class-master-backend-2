(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"zy/B":function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),a=n("EQut"),r=n("fXoL"),d=n("tyNb");const i=[{path:"",component:(()=>{class t{constructor(t,e){this.branchService=t,this.location=e}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId||this.location.back()}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(a.a),r.Qb(o.i))},t.\u0275cmp=r.Kb({type:t,selectors:[["ngx-student"]],decls:1,vars:0,template:function(t,e){1&t&&r.Rb(0,"router-outlet")},directives:[d.h],styles:[""]}),t})(),children:[{path:"add",loadChildren:()=>Promise.all([n.e(2),n.e(1),n.e(17)]).then(n.bind(null,"7v7B")).then(t=>t.AddStudentModule)},{path:"edit",loadChildren:()=>Promise.all([n.e(2),n.e(1),n.e(17)]).then(n.bind(null,"7v7B")).then(t=>t.AddStudentModule)},{path:"manage",loadChildren:()=>Promise.all([n.e(1),n.e(58)]).then(n.bind(null,"O+B8")).then(t=>t.ManageStudentModule)},{path:"",redirectTo:"manage?type=active",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(t=>t.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let l=(()=>{class t{}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(e){return new(e||t)},imports:[[d.g.forChild(i)],d.g]}),t})();n.d(e,"StudentModule",(function(){return c}));let c=(()=>{class t{}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(e){return new(e||t)},imports:[[o.c,l]]}),t})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{J1Az:function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),a=n("F3IG"),o=n("IAlr"),i=n("EQut"),s=n("fXoL"),d=n("tyNb");function c(e,t){1&e&&s.Rb(0,"router-outlet")}const h=[{path:"",component:(()=>{class e{constructor(e,t,n,r,a){this.branchService=e,this.courseService=t,this.leadService=n,this.router=r,this.route=a}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.courseService.getCourses(this.branchId,"").subscribe(e=>{this.courseService.setCoursesData(e),this.loading=!1},e=>{this.router.navigate(["../"],{relativeTo:this.route})}):this.router.navigate(["../"],{relativeTo:this.route})}ngOnDestroy(){this.courseService.deleteCoursesData(),this.leadService.deleteLeadType()}}return e.\u0275fac=function(t){return new(t||e)(s.Qb(i.a),s.Qb(o.a),s.Qb(a.a),s.Qb(d.c),s.Qb(d.a))},e.\u0275cmp=s.Kb({type:e,selectors:[["ngx-lead"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(e,t){1&e&&s.Ac(0,c,1,0,"router-outlet",0),2&e&&s.mc("ngIf",!t.loading)},directives:[r.n,d.h],styles:[""]}),e})(),children:[{path:"add",loadChildren:()=>n.e(11).then(n.bind(null,"I87H")).then(e=>e.AddLeadModule)},{path:"edit",loadChildren:()=>n.e(11).then(n.bind(null,"I87H")).then(e=>e.AddLeadModule)},{path:"manage",loadChildren:()=>n.e(67).then(n.bind(null,"ojsi")).then(e=>e.ManageLeadModule)},{path:"",redirectTo:"manage?type=active",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let u=(()=>{class e{}return e.\u0275mod=s.Ob({type:e}),e.\u0275inj=s.Nb({factory:function(t){return new(t||e)},imports:[[d.g.forChild(h)],d.g]}),e})();n.d(t,"LeadModule",(function(){return l}));let l=(()=>{class e{}return e.\u0275mod=s.Ob({type:e}),e.\u0275inj=s.Nb({factory:function(t){return new(t||e)},imports:[[r.c,u]]}),e})()}}]);
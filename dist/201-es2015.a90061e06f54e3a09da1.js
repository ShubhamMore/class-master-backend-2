(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{"0Buk":function(e,t,n){"use strict";n.r(t);var r=n("aceb"),i=n("ofXK"),a=n("EQut"),c=n("fXoL"),o=n("tyNb");let h=(()=>{class e{constructor(e,t,n){this.branchService=e,this.router=t,this.route=n}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.branchService.getBranch(this.branchId).subscribe(e=>{this.branch=e,this.branchService.setBranchData(e),this.loading=!1},e=>{}):this.router.navigate(["../page-not-found"],{relativeTo:this.route})}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](a.a),c["\u0275\u0275directiveInject"](o.c),c["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-branch-header"]],decls:0,vars:0,template:function(e,t){},styles:[""]}),e})();function s(e,t){1&e&&c["\u0275\u0275element"](0,"router-outlet")}const d=[{path:"",component:(()=>{class e{constructor(e,t,n,r){this.toastrService=e,this.branchService=t,this.router=n,this.route=r}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.loading=!1:this.router.navigate(["../page-not-found"],{relativeTo:this.route})}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}ngOnDestroy(){this.branchService.deleteBranchId(),this.branchService.deleteBranchData()}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](r.Db),c["\u0275\u0275directiveInject"](a.a),c["\u0275\u0275directiveInject"](o.c),c["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-branch"]],decls:2,vars:1,consts:[[4,"ngIf"]],template:function(e,t){1&e&&(c["\u0275\u0275element"](0,"ngx-branch-header"),c["\u0275\u0275template"](1,s,1,0,"router-outlet",0)),2&e&&(c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",!t.loading))},directives:[h,i.n,o.h],styles:[""]}),e})(),children:[{path:"dashboard",loadChildren:()=>n.e(216).then(n.bind(null,"IHwy")).then(e=>e.DashboardModule)},{path:"exam",loadChildren:()=>n.e(217).then(n.bind(null,"UXwE")).then(e=>e.ExamModule)},{path:"course",loadChildren:()=>n.e(207).then(n.bind(null,"tphi")).then(e=>e.CourseModule)},{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let l=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.g.forChild(d)],o.g]}),e})();n.d(t,"BranchModule",(function(){return u}));let u=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,l,r.A,r.Ib]]}),e})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{cRAA:function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),i=n("Pj/w"),c=n("lst6"),a=n("IAlr"),o=n("EQut"),h=n("fXoL"),d=n("tyNb");function l(e,t){1&e&&h["\u0275\u0275element"](0,"router-outlet")}const s=[{path:"",component:(()=>{class e{constructor(e,t,n,r,i,c){this.branchService=e,this.courseService=t,this.batchService=n,this.router=r,this.route=i,this.branchEmployeeService=c}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.branchEmployeeService.getBranchEmployeeNameIdsForBatch(this.branchId,"teacher").subscribe(e=>{this.branchEmployeeService.setBranchEmployeeNameIdsData(e),this.loading=!1},e=>{this.router.navigate(["../"],{relativeTo:this.route})}):this.router.navigate(["../"],{relativeTo:this.route})}ngOnDestroy(){this.branchService.deleteCategoryId(),this.branchService.deleteCategoryData(),this.courseService.deleteCourseId(),this.courseService.deleteCourseData(),this.batchService.deleteBatchId(),this.batchService.deleteBatchData(),this.branchEmployeeService.deleteBranchEmployeeNameIdsData()}}return e.\u0275fac=function(t){return new(t||e)(h["\u0275\u0275directiveInject"](o.a),h["\u0275\u0275directiveInject"](a.a),h["\u0275\u0275directiveInject"](c.a),h["\u0275\u0275directiveInject"](d.c),h["\u0275\u0275directiveInject"](d.a),h["\u0275\u0275directiveInject"](i.a))},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-batch-schedule"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(e,t){1&e&&h["\u0275\u0275template"](0,l,1,0,"router-outlet",0),2&e&&h["\u0275\u0275property"]("ngIf",!t.loading)},directives:[r.n,d.h],styles:[""]}),e})(),children:[{path:"manage",loadChildren:()=>Promise.all([n.e(1),n.e(169)]).then(n.bind(null,"ony3")).then(e=>e.ManageBatchScheduleModule)},{path:"add",loadChildren:()=>Promise.all([n.e(1),n.e(30)]).then(n.bind(null,"CZmM")).then(e=>e.AddScheduleModule)},{path:"edit",loadChildren:()=>Promise.all([n.e(1),n.e(30)]).then(n.bind(null,"CZmM")).then(e=>e.AddScheduleModule)},{path:"view",loadChildren:()=>n.e(170).then(n.bind(null,"5+cP")).then(e=>e.ViewScheduleModule)},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let u=(()=>{class e{}return e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[d.g.forChild(s)],d.g]}),e})();n.d(t,"BatchScheduleModule",(function(){return p}));let p=(()=>{class e{}return e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,u]]}),e})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{Ojj6:function(e,t,n){"use strict";n.r(t),n.d(t,"BatchScheduleModule",(function(){return p}));var r=n("ofXK"),i=n("fXoL"),c=n("EQut"),a=n("IAlr"),h=n("lst6"),o=n("tyNb"),d=n("Pj/w");function l(e,t){1&e&&i["\u0275\u0275element"](0,"router-outlet")}const s=[{path:"",component:(()=>{class e{constructor(e,t,n,r,i,c){this.branchService=e,this.courseService=t,this.batchService=n,this.router=r,this.route=i,this.branchEmployeeService=c}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.branchEmployeeService.getBranchEmployeeNameIdsForBatch(this.branchId,"teacher").subscribe(e=>{this.branchEmployeeService.setBranchEmployeeNameIdsData(e),this.loading=!1},e=>{this.back()}):this.back()}back(){this.router.navigate(["../"],{relativeTo:this.route})}ngOnDestroy(){this.courseService.deleteCourseId(),this.courseService.deleteCourseData(),this.batchService.deleteBatchId(),this.batchService.deleteBatchData(),this.branchEmployeeService.deleteBranchEmployeeNameIdsData()}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](c.a),i["\u0275\u0275directiveInject"](a.a),i["\u0275\u0275directiveInject"](h.a),i["\u0275\u0275directiveInject"](o.c),i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](d.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-batch-schedule"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(e,t){1&e&&i["\u0275\u0275template"](0,l,1,0,"router-outlet",0),2&e&&i["\u0275\u0275property"]("ngIf",!t.loading)},directives:[r.n,o.h],styles:[""]}),e})(),children:[{path:"manage",loadChildren:()=>Promise.all([n.e(1),n.e(128)]).then(n.bind(null,"4lO2")).then(e=>e.ManageBatchScheduleModule)},{path:"add",loadChildren:()=>Promise.all([n.e(1),n.e(18)]).then(n.bind(null,"3FJh")).then(e=>e.AddScheduleModule)},{path:"edit",loadChildren:()=>Promise.all([n.e(1),n.e(18)]).then(n.bind(null,"3FJh")).then(e=>e.AddScheduleModule)},{path:"view",loadChildren:()=>n.e(129).then(n.bind(null,"M/t/")).then(e=>e.ViewScheduleModule)},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let u=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.g.forChild(s)],o.g]}),e})(),p=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,u]]}),e})()}}]);
//# sourceMappingURL=127-es2015.63ca8e8f77a2c55cadd8.js.map
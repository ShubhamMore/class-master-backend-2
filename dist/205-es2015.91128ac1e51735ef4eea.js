(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{"28mX":function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),r=n("IAlr"),c=n("lst6"),a=n("EQut"),s=n("fXoL"),o=n("tyNb");const h=[{path:"",component:(()=>{class e{constructor(e,t,n,i,r){this.branchService=e,this.courseService=t,this.batchService=n,this.router=i,this.route=r}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.courseService.getCourses(this.branchId,"").subscribe(e=>{this.courseService.setCoursesData(e),this.loading=!1},e=>{}),this.batchService.getBatches(this.branchId,"","").subscribe(e=>{this.batchService.setBatchesData(e)},e=>{})):this.router.navigate(["../"],{relativeTo:this.route})}ngOnDestroy(){this.courseService.deleteCoursesData(),this.batchService.deleteBatchesData()}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](a.a),s["\u0275\u0275directiveInject"](r.a),s["\u0275\u0275directiveInject"](c.a),s["\u0275\u0275directiveInject"](o.c),s["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-schedule"]],decls:1,vars:0,template:function(e,t){1&e&&s["\u0275\u0275element"](0,"router-outlet")},directives:[o.h],styles:[""]}),e})(),children:[{path:"manage",loadChildren:()=>n.e(204).then(n.bind(null,"Vqb6")).then(e=>e.ManageScheduleModule)},{path:"view",loadChildren:()=>n.e(206).then(n.bind(null,"xk0D")).then(e=>e.ViewScheduleModule)},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let d=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.g.forChild(h)],o.g]}),e})();n.d(t,"ScheduleModule",(function(){return u}));let u=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,d]]}),e})()}}]);
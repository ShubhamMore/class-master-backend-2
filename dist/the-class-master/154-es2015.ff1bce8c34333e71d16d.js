(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{MZNv:function(e,t,n){"use strict";n.r(t),n.d(t,"BranchModule",(function(){return u}));var r=n("aceb"),a=n("ofXK"),i=n("fXoL"),h=n("EQut"),o=n("tyNb");let l=(()=>{class e{constructor(e,t,n){this.branchService=e,this.router=t,this.route=n}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.branchService.getBranch(this.branchId).subscribe(e=>{this.branch=e,this.branchService.setBranchData(e),this.loading=!1},e=>{}):this.router.navigate(["../page-not-found"],{relativeTo:this.route})}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](h.a),i["\u0275\u0275directiveInject"](o.c),i["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-branch-header"]],decls:0,vars:0,template:function(e,t){},styles:[""]}),e})();function d(e,t){1&e&&i["\u0275\u0275element"](0,"router-outlet")}const s=[{path:"",component:(()=>{class e{constructor(e,t,n,r){this.branchService=e,this.toastrService=t,this.router=n,this.route=r}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.branchService.checkBranchStatus(this.branchId).subscribe(e=>{e.activated?this.loading=!1:(this.showToastr("top-right","danger","Please Activate Branch"),this.router.navigate(["../page-not-found"],{relativeTo:this.route}))},e=>{this.showToastr("top-right","danger",e),this.router.navigate(["../page-not-found"],{relativeTo:this.route})}):this.router.navigate(["../page-not-found"],{relativeTo:this.route})}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}ngOnDestroy(){this.branchService.deleteBranchId(),this.branchService.deleteBranchData()}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](h.a),i["\u0275\u0275directiveInject"](r.Gb),i["\u0275\u0275directiveInject"](o.c),i["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-branch"]],decls:2,vars:1,consts:[[4,"ngIf"]],template:function(e,t){1&e&&(i["\u0275\u0275element"](0,"ngx-branch-header"),i["\u0275\u0275template"](1,d,1,0,"router-outlet",0)),2&e&&(i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",!t.loading))},directives:[l,a.n,o.h],styles:[""]}),e})(),children:[{path:"dashboard",loadChildren:()=>Promise.all([n.e(6),n.e(1),n.e(158)]).then(n.bind(null,"8F4l")).then(e=>e.DashboardModule)},{path:"manage-branch",loadChildren:()=>n.e(198).then(n.bind(null,"7aow")).then(e=>e.ManageBranchModule)},{path:"schedule",loadChildren:()=>Promise.all([n.e(1),n.e(204)]).then(n.bind(null,"L0Lj")).then(e=>e.ScheduleModule)},{path:"lecture",loadChildren:()=>Promise.all([n.e(1),n.e(181)]).then(n.bind(null,"ZAMY")).then(e=>e.LectureModule)},{path:"assignment",loadChildren:()=>Promise.all([n.e(1),n.e(151)]).then(n.bind(null,"Zzv1")).then(e=>e.AssignmentModule)},{path:"lead",loadChildren:()=>Promise.all([n.e(1),n.e(176)]).then(n.bind(null,"Zshg")).then(e=>e.LeadModule)},{path:"exam",loadChildren:()=>n.e(165).then(n.bind(null,"/V2u")).then(e=>e.ExamModule)},{path:"budget",loadChildren:()=>n.e(155).then(n.bind(null,"yMqT")).then(e=>e.BudgetModule)},{path:"storage",loadChildren:()=>Promise.all([n.e(1),n.e(206)]).then(n.bind(null,"h88D")).then(e=>e.StorageModule)},{path:"sms",loadChildren:()=>Promise.all([n.e(1),n.e(205)]).then(n.bind(null,"eMwB")).then(e=>e.SmsModule)},{path:"student",loadChildren:()=>Promise.all([n.e(1),n.e(215)]).then(n.bind(null,"zy/B")).then(e=>e.StudentModule)},{path:"students-report",loadChildren:()=>n.e(221).then(n.bind(null,"7Tnk")).then(e=>e.StudentsReportModule)},{path:"employee",loadChildren:()=>Promise.all([n.e(1),n.e(159)]).then(n.bind(null,"1dP1")).then(e=>e.EmployeeModule)},{path:"leave",loadChildren:()=>Promise.all([n.e(1),n.e(178)]).then(n.bind(null,"SiIW")).then(e=>e.LeaveModule)},{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let c=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.g.forChild(s)],o.g]}),e})(),u=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,c,r.B,r.Lb]]}),e})()}}]);
//# sourceMappingURL=154-es2015.ff1bce8c34333e71d16d.js.map
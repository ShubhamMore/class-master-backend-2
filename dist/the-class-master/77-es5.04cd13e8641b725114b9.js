!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"1ucL":function(n,r,i){"use strict";i.r(r),i.d(r,"BranchModule",(function(){return m}));var o,a=i("aceb"),u=i("ofXK"),c=i("fXoL"),h=i("EQut"),l=i("tyNb"),d=((o=function(){function n(t,r,i){e(this,n),this.branchService=t,this.router=r,this.route=i}return t(n,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.branchService.getBranch(this.branchId).subscribe((function(n){e.branch=n,e.branchService.setBranchData(n),e.loading=!1}),(function(e){})):this.router.navigate(["../page-not-found"],{relativeTo:this.route})}}]),n}()).\u0275fac=function(e){return new(e||o)(c["\u0275\u0275directiveInject"](h.a),c["\u0275\u0275directiveInject"](l.c),c["\u0275\u0275directiveInject"](l.a))},o.\u0275cmp=c["\u0275\u0275defineComponent"]({type:o,selectors:[["ngx-branch-header"]],decls:0,vars:0,template:function(e,n){},styles:[""]}),o);function s(e,n){1&e&&c["\u0275\u0275element"](0,"router-outlet")}var f,b,p,v=[{path:"",component:(f=function(){function n(t,r,i,o){e(this,n),this.branchService=t,this.toastrService=r,this.router=i,this.route=o}return t(n,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.branchService.checkBranchStatus(this.branchId).subscribe((function(n){n.activated?e.loading=!1:(e.showToastr("top-right","danger","Please Activate Branch"),e.router.navigate(["../page-not-found"],{relativeTo:e.route}))}),(function(n){e.showToastr("top-right","danger",n),e.router.navigate(["../page-not-found"],{relativeTo:e.route})})):this.router.navigate(["../page-not-found"],{relativeTo:this.route})}},{key:"showToastr",value:function(e,n,t){this.toastrService.show(n,t,{position:e,status:n})}},{key:"ngOnDestroy",value:function(){this.branchService.deleteBranchId(),this.branchService.deleteBranchData()}}]),n}(),f.\u0275fac=function(e){return new(e||f)(c["\u0275\u0275directiveInject"](h.a),c["\u0275\u0275directiveInject"](a.Gb),c["\u0275\u0275directiveInject"](l.c),c["\u0275\u0275directiveInject"](l.a))},f.\u0275cmp=c["\u0275\u0275defineComponent"]({type:f,selectors:[["ngx-branch"]],decls:2,vars:1,consts:[[4,"ngIf"]],template:function(e,n){1&e&&(c["\u0275\u0275element"](0,"ngx-branch-header"),c["\u0275\u0275template"](1,s,1,0,"router-outlet",0)),2&e&&(c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",!n.loading))},directives:[d,u.n,l.h],styles:[""]}),f),children:[{path:"dashboard",loadChildren:function(){return Promise.all([i.e(6),i.e(1),i.e(81)]).then(i.bind(null,"xdzg")).then((function(e){return e.DashboardModule}))}},{path:"manage-branch",loadChildren:function(){return i.e(121).then(i.bind(null,"X0Xa")).then((function(e){return e.ManageBranchModule}))}},{path:"my-salary",loadChildren:function(){return i.e(125).then(i.bind(null,"whHR")).then((function(e){return e.SalaryModule}))}},{path:"my-leave",loadChildren:function(){return Promise.all([i.e(1),i.e(123)]).then(i.bind(null,"ZbxL")).then((function(e){return e.MyLeaveModule}))}},{path:"schedule",loadChildren:function(){return Promise.all([i.e(1),i.e(131)]).then(i.bind(null,"GeaL")).then((function(e){return e.ScheduleModule}))}},{path:"lecture",loadChildren:function(){return Promise.all([i.e(1),i.e(104)]).then(i.bind(null,"wOv/")).then((function(e){return e.LectureModule}))}},{path:"assignment",loadChildren:function(){return Promise.all([i.e(1),i.e(74)]).then(i.bind(null,"cbCt")).then((function(e){return e.AssignmentModule}))}},{path:"lead",loadChildren:function(){return Promise.all([i.e(1),i.e(99)]).then(i.bind(null,"J1Az")).then((function(e){return e.LeadModule}))}},{path:"exam",loadChildren:function(){return i.e(88).then(i.bind(null,"WA2b")).then((function(e){return e.ExamModule}))}},{path:"budget",loadChildren:function(){return i.e(78).then(i.bind(null,"dbKD")).then((function(e){return e.BudgetModule}))}},{path:"student",loadChildren:function(){return Promise.all([i.e(1),i.e(140)]).then(i.bind(null,"ktXP")).then((function(e){return e.StudentModule}))}},{path:"students-report",loadChildren:function(){return i.e(146).then(i.bind(null,"VOQw")).then((function(e){return e.StudentsReportModule}))}},{path:"employee",loadChildren:function(){return Promise.all([i.e(1),i.e(82)]).then(i.bind(null,"UTrs")).then((function(e){return e.EmployeeModule}))}},{path:"leave",loadChildren:function(){return Promise.all([i.e(1),i.e(101)]).then(i.bind(null,"1+cK")).then((function(e){return e.LeaveModule}))}},{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return i.e(0).then(i.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],g=((p=function n(){e(this,n)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:p}),p.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||p)},imports:[[l.g.forChild(v)],l.g]}),p),m=((b=function n(){e(this,n)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:b}),b.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||b)},imports:[[u.c,g,a.B,a.Lb]]}),b)}}])}();
//# sourceMappingURL=77-es5.04cd13e8641b725114b9.js.map
!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{wVrR:function(n,o,r){"use strict";r.r(o),r.d(o,"ManageEmployeeSalaryModule",(function(){return g}));var i=r("ofXK"),a=r("tyNb"),c=r("fXoL"),u=r("pjuo"),l=r("Pj/w"),s=r("EQut"),d=r("aceb");function h(e,t){1&e&&c["\u0275\u0275element"](0,"router-outlet")}var p,f,y,v=[{path:"",component:(p=function(){function n(t,o,r,i,a,c){e(this,n),this.employeeService=t,this.branchEmployeeService=o,this.branchService=r,this.router=i,this.route=a,this.toastrService=c}var o,r,i;return o=n,(r=[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchService.getBranchId()?this.branchEmployeeService.getBranchEmployeeData().subscribe((function(t){if(!t)return e.showToastr("top-right","danger","Branch Employee Not Found"),void e.back();e.employeeService.getEmployeeByIMSId(t.employee).subscribe((function(t){e.employeeService.setEmployeeData(t),e.loading=!1}),(function(t){e.showToastr("top-right","danger",t),e.back()}))})):this.back()}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}},{key:"back",value:function(){var e=this.employeeService.getEmployeeType();this.router.navigate(["../"],{relativeTo:this.route,queryParams:{type:e}})}},{key:"ngOnDestroy",value:function(){this.employeeService.deleteEmployeeData()}}])&&t(o.prototype,r),i&&t(o,i),n}(),p.\u0275fac=function(e){return new(e||p)(c["\u0275\u0275directiveInject"](u.a),c["\u0275\u0275directiveInject"](l.a),c["\u0275\u0275directiveInject"](s.a),c["\u0275\u0275directiveInject"](a.c),c["\u0275\u0275directiveInject"](a.a),c["\u0275\u0275directiveInject"](d.Gb))},p.\u0275cmp=c["\u0275\u0275defineComponent"]({type:p,selectors:[["ngx-manage-employee-salary"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(e,t){1&e&&c["\u0275\u0275template"](0,h,1,0,"router-outlet",0),2&e&&c["\u0275\u0275property"]("ngIf",!t.loading)},directives:[i.n,a.h],styles:[""]}),p),children:[{path:"add",loadChildren:function(){return Promise.all([r.e(1),r.e(83)]).then(r.bind(null,"cHWv")).then((function(e){return e.AddSalaryModule}))}},{path:"view",loadChildren:function(){return Promise.all([r.e(1),r.e(86)]).then(r.bind(null,"w+WK")).then((function(e){return e.ViewSalaryReceiptModule}))}},{path:"",loadChildren:function(){return Promise.all([r.e(1),r.e(85)]).then(r.bind(null,"tEkE")).then((function(e){return e.ManageSalaryModule}))}},{path:"page-not-found",loadChildren:function(){return r.e(0).then(r.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],m=((y=function t(){e(this,t)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:y}),y.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||y)},imports:[[a.g.forChild(v)],a.g]}),y),g=((f=function t(){e(this,t)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:f}),f.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||f)},imports:[[i.c,m]]}),f)}}])}();
//# sourceMappingURL=84-es5.1bc962d814a21ad18cb1.js.map
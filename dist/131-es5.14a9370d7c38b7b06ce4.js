function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{Bz6p:function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),o=n("tyNb"),i=n("EQut"),a=n("Pj/w"),c=n("pjuo"),l=n("fXoL"),u=n("aceb");function s(e,t){1&e&&l["\u0275\u0275element"](0,"router-outlet")}var h,d,p=[{path:"",component:(h=function(){function e(t,n,r,o,i,a){_classCallCheck(this,e),this.employeeService=t,this.branchEmployeeService=n,this.branchService=r,this.router=o,this.route=i,this.toastrService=a}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchService.getBranchId()?this.branchEmployeeService.getBranchEmployeeData().subscribe((function(t){if(!t)return e.showToastr("top-right","danger","Branch Employee Not Found"),void e.back();e.employeeService.getEmployeeByIMSId(t.employee).subscribe((function(t){e.employeeService.setEmployeeData(t),e.loading=!1}),(function(t){e.showToastr("top-right","danger",t),e.back()}))})):this.back()}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}},{key:"back",value:function(){var e=this.employeeService.getEmployeeType();this.router.navigate(["../"],{relativeTo:this.route,queryParams:{type:e}})}},{key:"ngOnDestroy",value:function(){this.employeeService.deleteEmployeeData()}}]),e}(),h.\u0275fac=function(e){return new(e||h)(l["\u0275\u0275directiveInject"](c.a),l["\u0275\u0275directiveInject"](a.a),l["\u0275\u0275directiveInject"](i.a),l["\u0275\u0275directiveInject"](o.c),l["\u0275\u0275directiveInject"](o.a),l["\u0275\u0275directiveInject"](u.Db))},h.\u0275cmp=l["\u0275\u0275defineComponent"]({type:h,selectors:[["ngx-manage-employee-salary"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(e,t){1&e&&l["\u0275\u0275template"](0,s,1,0,"router-outlet",0),2&e&&l["\u0275\u0275property"]("ngIf",!t.loading)},directives:[r.n,o.h],styles:[""]}),h),children:[{path:"add",loadChildren:function(){return Promise.all([n.e(1),n.e(130)]).then(n.bind(null,"1317")).then((function(e){return e.AddSalaryModule}))}},{path:"view",loadChildren:function(){return Promise.all([n.e(1),n.e(133)]).then(n.bind(null,"pM+J")).then((function(e){return e.ViewSalaryReceiptModule}))}},{path:"",loadChildren:function(){return Promise.all([n.e(1),n.e(132)]).then(n.bind(null,"/mb6")).then((function(e){return e.ManageSalaryModule}))}},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],f=((d=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:d}),d.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||d)},imports:[[o.g.forChild(p)],o.g]}),d);n.d(t,"ManageEmployeeSalaryModule",(function(){return v}));var y,v=((y=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:y}),y.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||y)},imports:[[r.c,f]]}),y)}}]);
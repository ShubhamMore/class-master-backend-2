function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{Bz6p:function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),o=n("tyNb"),a=n("EQut"),i=n("Pj/w"),c=n("pjuo"),l=n("fXoL"),u=n("aceb");function s(e,t){1&e&&l.Rb(0,"router-outlet")}var h,p,f=[{path:"",component:(h=function(){function e(t,n,r,o,a,i){_classCallCheck(this,e),this.employeeService=t,this.branchEmployeeService=n,this.branchService=r,this.router=o,this.route=a,this.toastrService=i}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchService.getBranchId()?this.branchEmployeeService.getBranchEmployeeData().subscribe((function(t){if(!t)return e.showToastr("top-right","danger","Branch Employee Not Found"),void e.back();e.employeeService.getEmployeeByIMSId(t.employee).subscribe((function(t){e.employeeService.setEmployeeData(t),e.loading=!1}),(function(t){e.showToastr("top-right","danger",t),e.back()}))})):this.back()}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}},{key:"back",value:function(){var e=this.employeeService.getEmployeeType();this.router.navigate(["../"],{relativeTo:this.route,queryParams:{type:e}})}},{key:"ngOnDestroy",value:function(){this.employeeService.deleteEmployeeData()}}]),e}(),h.\u0275fac=function(e){return new(e||h)(l.Qb(c.a),l.Qb(i.a),l.Qb(a.a),l.Qb(o.c),l.Qb(o.a),l.Qb(u.xb))},h.\u0275cmp=l.Kb({type:h,selectors:[["ngx-manage-employee-salary"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(e,t){1&e&&l.Ac(0,s,1,0,"router-outlet",0),2&e&&l.mc("ngIf",!t.loading)},directives:[r.n,o.h],styles:[""]}),h),children:[{path:"add",loadChildren:function(){return Promise.all([n.e(1),n.e(107)]).then(n.bind(null,"1317")).then((function(e){return e.AddSalaryModule}))}},{path:"view",loadChildren:function(){return Promise.all([n.e(1),n.e(110)]).then(n.bind(null,"pM+J")).then((function(e){return e.ViewSalaryReceiptModule}))}},{path:"",loadChildren:function(){return Promise.all([n.e(1),n.e(109)]).then(n.bind(null,"/mb6")).then((function(e){return e.ManageSalaryModule}))}},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],d=((p=function e(){_classCallCheck(this,e)}).\u0275mod=l.Ob({type:p}),p.\u0275inj=l.Nb({factory:function(e){return new(e||p)},imports:[[o.g.forChild(f)],o.g]}),p);n.d(t,"ManageEmployeeSalaryModule",(function(){return b}));var y,b=((y=function e(){_classCallCheck(this,e)}).\u0275mod=l.Ob({type:y}),y.\u0275inj=l.Nb({factory:function(e){return new(e||y)},imports:[[r.c,d]]}),y)}}]);
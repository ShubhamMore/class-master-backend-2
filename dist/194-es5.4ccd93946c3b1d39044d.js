function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{"0Buk":function(e,t,n){"use strict";n.r(t);var r,i=n("aceb"),c=n("ofXK"),o=n("3b5Z"),a=n("Pj/w"),h=n("EQut"),u=n("VAYa"),s=n("fXoL"),l=n("tyNb"),d=((r=function(){function e(t,n,r){_classCallCheck(this,e),this.branchService=t,this.router=n,this.route=r}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.branchService.getBranch(this.branchId).subscribe((function(t){e.branch=t,e.branchService.setBranchData(t),e.loading=!1}),(function(e){})):this.router.navigate(["../page-not-found"],{relativeTo:this.route})}}]),e}()).\u0275fac=function(e){return new(e||r)(s["\u0275\u0275directiveInject"](h.a),s["\u0275\u0275directiveInject"](l.c),s["\u0275\u0275directiveInject"](l.a))},r.\u0275cmp=s["\u0275\u0275defineComponent"]({type:r,selectors:[["ngx-branch-header"]],decls:0,vars:0,template:function(e,t){},styles:[""]}),r);function f(e,t){1&e&&s["\u0275\u0275element"](0,"router-outlet")}var p,v,b=[{path:"",component:(p=function(){function e(t,n,r,i,c,o,a){_classCallCheck(this,e),this.menuService=t,this.toastrService=n,this.branchService=r,this.branchEmployeeService=i,this.roleService=c,this.router=o,this.route=a}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.branchEmployeeService.getBranchEmployeeRole(this.branchId).subscribe((function(t){e.roleService.setEmployeeRole(t.role),e.menuService.showMenu(),e.loading=!1}),(function(t){e.showToastr("top-right","danger",t),e.router.navigate(["../"],{relativeTo:e.route})})):this.router.navigate(["../page-not-found"],{relativeTo:this.route})}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}},{key:"ngOnDestroy",value:function(){this.branchService.deleteBranchId(),this.branchService.deleteBranchData(),this.roleService.setEmployeeRole(null)}}]),e}(),p.\u0275fac=function(e){return new(e||p)(s["\u0275\u0275directiveInject"](u.a),s["\u0275\u0275directiveInject"](i.Db),s["\u0275\u0275directiveInject"](h.a),s["\u0275\u0275directiveInject"](a.a),s["\u0275\u0275directiveInject"](o.a),s["\u0275\u0275directiveInject"](l.c),s["\u0275\u0275directiveInject"](l.a))},p.\u0275cmp=s["\u0275\u0275defineComponent"]({type:p,selectors:[["ngx-branch"]],decls:2,vars:1,consts:[[4,"ngIf"]],template:function(e,t){1&e&&(s["\u0275\u0275element"](0,"ngx-branch-header"),s["\u0275\u0275template"](1,f,1,0,"router-outlet",0)),2&e&&(s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",!t.loading))},directives:[d,c.n,l.h],styles:[""]}),p),children:[{path:"dashboard",loadChildren:function(){return n.e(196).then(n.bind(null,"IHwy")).then((function(e){return e.DashboardModule}))}},{path:"schedule",loadChildren:function(){return Promise.all([n.e(1),n.e(205)]).then(n.bind(null,"28mX")).then((function(e){return e.ScheduleModule}))}},{path:"exam",loadChildren:function(){return n.e(197).then(n.bind(null,"UXwE")).then((function(e){return e.ExamModule}))}},{path:"course",loadChildren:function(){return n.e(195).then(n.bind(null,"tphi")).then((function(e){return e.CourseModule}))}},{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],g=((v=function e(){_classCallCheck(this,e)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:v}),v.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||v)},imports:[[l.g.forChild(b)],l.g]}),v);n.d(t,"BranchModule",(function(){return I}));var m,I=((m=function e(){_classCallCheck(this,e)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:m}),m.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||m)},imports:[[c.c,g,i.A,i.Ib]]}),m)}}]);
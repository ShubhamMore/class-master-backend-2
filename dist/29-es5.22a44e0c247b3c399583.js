function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"w/d0":function(n,e,t){"use strict";t.r(e);var r,o,a=t("ofXK"),i=t("EQut"),c=t("fXoL"),u=t("tyNb"),l=[{path:"",component:(r=function(){function n(e,t,r,o){_classCallCheck(this,n),this.branchService=e,this.router=t,this.route=r,this.location=o}return _createClass(n,[{key:"ngOnInit",value:function(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId||this.location.back()}}]),n}(),r.\u0275fac=function(n){return new(n||r)(c.Qb(i.a),c.Qb(u.c),c.Qb(u.a),c.Qb(a.i))},r.\u0275cmp=c.Kb({type:r,selectors:[["ngx-attendance"]],decls:1,vars:0,template:function(n,e){1&n&&c.Rb(0,"router-outlet")},directives:[u.h],styles:[""]}),r),children:[{path:"manage",loadChildren:function(){return t.e(30).then(t.bind(null,"fKso")).then((function(n){return n.ManageAttendanceModule}))}},{path:"add",loadChildren:function(){return t.e(7).then(t.bind(null,"eWJe")).then((function(n){return n.AddAttendanceModule}))}},{path:"edit",loadChildren:function(){return t.e(7).then(t.bind(null,"eWJe")).then((function(n){return n.AddAttendanceModule}))}},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return t.e(0).then(t.bind(null,"DeSt")).then((function(n){return n.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found"}]}],d=((o=function n(){_classCallCheck(this,n)}).\u0275mod=c.Ob({type:o}),o.\u0275inj=c.Nb({factory:function(n){return new(n||o)},imports:[[u.g.forChild(l)],u.g]}),o);t.d(e,"AttendanceModule",(function(){return s}));var h,s=((h=function n(){_classCallCheck(this,n)}).\u0275mod=c.Ob({type:h}),h.\u0275inj=c.Nb({factory:function(n){return new(n||h)},imports:[[a.c,d]]}),h)}}]);
function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{vfsj:function(n,e,t){"use strict";t.r(e);var o,r,a=t("ofXK"),i=t("EQut"),c=t("fXoL"),s=t("tyNb"),l=[{path:"",component:(o=function(){function n(e,t,o,r){_classCallCheck(this,n),this.branchService=e,this.router=t,this.route=o,this.location=r}return _createClass(n,[{key:"ngOnInit",value:function(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId||this.location.back()}}]),n}(),o.\u0275fac=function(n){return new(n||o)(c.Qb(i.a),c.Qb(s.c),c.Qb(s.a),c.Qb(a.i))},o.\u0275cmp=c.Kb({type:o,selectors:[["ngx-add-lead"]],decls:2,vars:0,template:function(n,e){1&n&&(c.Wb(0,"p"),c.Cc(1,"add-lead works!"),c.Vb())},styles:[""]}),o)},{path:"page-not-found",loadChildren:function(){return t.e(0).then(t.bind(null,"DeSt")).then((function(n){return n.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],u=((r=function n(){_classCallCheck(this,n)}).\u0275mod=c.Ob({type:r}),r.\u0275inj=c.Nb({factory:function(n){return new(n||r)},imports:[[s.g.forChild(l)],s.g]}),r);t.d(e,"AddLeadModule",(function(){return d}));var f,d=((f=function n(){_classCallCheck(this,n)}).\u0275mod=c.Ob({type:f}),f.\u0275inj=c.Nb({factory:function(n){return new(n||f)},imports:[[a.c,u]]}),f)}}]);
function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{dZea:function(n,e,t){"use strict";t.r(e);var a,o,r=t("ofXK"),i=t("EQut"),c=t("fXoL"),s=t("tyNb"),u=[{path:"",component:(a=function(){function n(e,t,a,o){_classCallCheck(this,n),this.branchService=e,this.router=t,this.route=a,this.location=o}return _createClass(n,[{key:"ngOnInit",value:function(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId||this.location.back()}}]),n}(),a.\u0275fac=function(n){return new(n||a)(c.Qb(i.a),c.Qb(s.c),c.Qb(s.a),c.Qb(r.i))},a.\u0275cmp=c.Kb({type:a,selectors:[["ngx-manage-test"]],decls:2,vars:0,template:function(n,e){1&n&&(c.Wb(0,"p"),c.Cc(1,"manage-test works!"),c.Vb())},styles:[""]}),a)},{path:"page-not-found",loadChildren:function(){return t.e(0).then(t.bind(null,"DeSt")).then((function(n){return n.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],l=((o=function n(){_classCallCheck(this,n)}).\u0275mod=c.Ob({type:o}),o.\u0275inj=c.Nb({factory:function(n){return new(n||o)},imports:[[s.g.forChild(u)],s.g]}),o);t.d(e,"ManageTestModule",(function(){return h}));var f,h=((f=function n(){_classCallCheck(this,n)}).\u0275mod=c.Ob({type:f}),f.\u0275inj=c.Nb({factory:function(n){return new(n||f)},imports:[[r.c,l]]}),f)}}]);
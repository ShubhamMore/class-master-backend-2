function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{Sw0X:function(e,n,t){"use strict";t.r(n);var i,o,r=t("ofXK"),a=t("EQut"),c=t("fXoL"),l=t("tyNb"),s=[{path:"",component:(i=function(){function e(n,t,i){_classCallCheck(this,e),this.branchService=n,this.router=t,this.route=i}return _createClass(e,[{key:"ngOnInit",value:function(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId||this.router.navigate(["../"],{relativeTo:this.route})}}]),e}(),i.\u0275fac=function(e){return new(e||i)(c["\u0275\u0275directiveInject"](a.a),c["\u0275\u0275directiveInject"](l.c),c["\u0275\u0275directiveInject"](l.a))},i.\u0275cmp=c["\u0275\u0275defineComponent"]({type:i,selectors:[["ngx-manage-online-test"]],decls:2,vars:0,template:function(e,n){1&e&&(c["\u0275\u0275elementStart"](0,"h3"),c["\u0275\u0275text"](1,"Online Test Module Comming Soon.."),c["\u0275\u0275elementEnd"]())},styles:[""]}),i)},{path:"page-not-found",loadChildren:function(){return t.e(0).then(t.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],u=((o=function e(){_classCallCheck(this,e)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:o}),o.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||o)},imports:[[l.g.forChild(s)],l.g]}),o);t.d(n,"ManageOnlineTestModule",(function(){return d}));var f,d=((f=function e(){_classCallCheck(this,e)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:f}),f.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||f)},imports:[[r.c,u]]}),f)}}]);
function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Vtcy:function(e,n,t){"use strict";t.r(n);var r,i,o=t("ofXK"),c=t("EQut"),a=t("fXoL"),s=t("tyNb"),l=[{path:"",component:(r=function(){function e(n,t,r){_classCallCheck(this,e),this.branchService=n,this.router=t,this.route=r}return _createClass(e,[{key:"ngOnInit",value:function(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId||this.router.navigate(["../"],{relativeTo:this.route})}}]),e}(),r.\u0275fac=function(e){return new(e||r)(a["\u0275\u0275directiveInject"](c.a),a["\u0275\u0275directiveInject"](s.c),a["\u0275\u0275directiveInject"](s.a))},r.\u0275cmp=a["\u0275\u0275defineComponent"]({type:r,selectors:[["ngx-add-online-test"]],decls:2,vars:0,template:function(e,n){1&e&&(a["\u0275\u0275elementStart"](0,"p"),a["\u0275\u0275text"](1,"add-online-test works!"),a["\u0275\u0275elementEnd"]())},styles:[""]}),r)},{path:"page-not-found",loadChildren:function(){return t.e(0).then(t.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],u=((i=function e(){_classCallCheck(this,e)}).\u0275mod=a["\u0275\u0275defineNgModule"]({type:i}),i.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||i)},imports:[[s.g.forChild(l)],s.g]}),i);t.d(n,"AddOnlineTestModule",(function(){return f}));var d,f=((d=function e(){_classCallCheck(this,e)}).\u0275mod=a["\u0275\u0275defineNgModule"]({type:d}),d.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||d)},imports:[[o.c,u]]}),d)}}]);
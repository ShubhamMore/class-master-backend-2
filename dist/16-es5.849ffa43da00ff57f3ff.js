function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var c=n[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"YI+o":function(e,n,t){"use strict";t.r(n);var c,r,i=t("ofXK"),o=t("EQut"),a=t("fXoL"),s=t("tyNb"),l=[{path:"",component:(c=function(){function e(n,t,c,r){_classCallCheck(this,e),this.branchService=n,this.router=t,this.route=c,this.location=r}return _createClass(e,[{key:"ngOnInit",value:function(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId||this.location.back()}}]),e}(),c.\u0275fac=function(e){return new(e||c)(a.Qb(o.a),a.Qb(s.c),a.Qb(s.a),a.Qb(i.i))},c.\u0275cmp=a.Kb({type:c,selectors:[["ngx-add-schedule"]],decls:2,vars:0,template:function(e,n){1&e&&(a.Wb(0,"p"),a.Cc(1,"add-schedule works!"),a.Vb())},styles:[""]}),c)}],u=((r=function e(){_classCallCheck(this,e)}).\u0275mod=a.Ob({type:r}),r.\u0275inj=a.Nb({factory:function(e){return new(e||r)},imports:[[s.g.forChild(l)],s.g]}),r);t.d(n,"AddScheduleModule",(function(){return h}));var f,h=((f=function e(){_classCallCheck(this,e)}).\u0275mod=a.Ob({type:f}),f.\u0275inj=a.Nb({factory:function(e){return new(e||f)},imports:[[i.c,u]]}),f)}}]);
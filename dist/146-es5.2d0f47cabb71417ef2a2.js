function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{"5+cP":function(e,n,t){"use strict";t.r(n);var r,i,c=t("ofXK"),o=t("EQut"),a=t("fXoL"),s=t("tyNb"),u=[{path:"",component:(r=function(){function e(n,t,r){_classCallCheck(this,e),this.branchService=n,this.router=t,this.route=r}return _createClass(e,[{key:"ngOnInit",value:function(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId||this.router.navigate(["../"],{relativeTo:this.route})}}]),e}(),r.\u0275fac=function(e){return new(e||r)(a.Qb(o.a),a.Qb(s.c),a.Qb(s.a))},r.\u0275cmp=a.Kb({type:r,selectors:[["ngx-view-schedule"]],decls:2,vars:0,template:function(e,n){1&e&&(a.Wb(0,"p"),a.Cc(1,"view-schedule works!"),a.Vb())},styles:[""]}),r)}],l=((i=function e(){_classCallCheck(this,e)}).\u0275mod=a.Ob({type:i}),i.\u0275inj=a.Nb({factory:function(e){return new(e||i)},imports:[[s.g.forChild(u)],s.g]}),i);t.d(n,"ViewScheduleModule",(function(){return h}));var f,h=((f=function e(){_classCallCheck(this,e)}).\u0275mod=a.Ob({type:f}),f.\u0275inj=a.Nb({factory:function(e){return new(e||f)},imports:[[c.c,l]]}),f)}}]);
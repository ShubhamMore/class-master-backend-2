function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{r6Xq:function(e,n,t){"use strict";t.r(n);var r,o,i=t("ofXK"),a=t("EQut"),u=t("fXoL"),l=t("tyNb"),c=[{path:"",component:(r=function(){function e(n,t,r){_classCallCheck(this,e),this.branchService=n,this.router=t,this.route=r}return _createClass(e,[{key:"ngOnInit",value:function(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.loading=!1:this.router.navigate(["../"],{relativeTo:this.route})}}]),e}(),r.\u0275fac=function(e){return new(e||r)(u.Qb(a.a),u.Qb(l.c),u.Qb(l.a))},r.\u0275cmp=u.Kb({type:r,selectors:[["ngx-course"]],decls:1,vars:0,template:function(e,n){1&e&&u.Rb(0,"router-outlet")},directives:[l.h],styles:[""]}),r),children:[{path:"manage",loadChildren:function(){return Promise.all([t.e(1),t.e(139)]).then(t.bind(null,"iy8L")).then((function(e){return e.ManageCourseModule}))}},{path:"add",loadChildren:function(){return Promise.all([t.e(2),t.e(1),t.e(26)]).then(t.bind(null,"0PO0")).then((function(e){return e.AddCourseModule}))}},{path:"edit",loadChildren:function(){return Promise.all([t.e(2),t.e(1),t.e(26)]).then(t.bind(null,"0PO0")).then((function(e){return e.AddCourseModule}))}},{path:"batch",loadChildren:function(){return Promise.all([t.e(1),t.e(132)]).then(t.bind(null,"zlMI")).then((function(e){return e.BatchModule}))}},{path:"course-material",loadChildren:function(){return Promise.all([t.e(1),t.e(135)]).then(t.bind(null,"LKV4")).then((function(e){return e.CourseMaterialModule}))}},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return t.e(0).then(t.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],h=((o=function e(){_classCallCheck(this,e)}).\u0275mod=u.Ob({type:o}),o.\u0275inj=u.Nb({factory:function(e){return new(e||o)},imports:[[l.g.forChild(c)],l.g]}),o);t.d(n,"CourseModule",(function(){return d}));var s,d=((s=function e(){_classCallCheck(this,e)}).\u0275mod=u.Ob({type:s}),s.\u0275inj=u.Nb({factory:function(e){return new(e||s)},imports:[[i.c,h]]}),s)}}]);
function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{gVRm:function(e,n,t){"use strict";t.r(n);var r,i,o=t("ofXK"),a=t("EQut"),u=t("fXoL"),l=t("tyNb"),c=[{path:"",component:(r=function(){function e(n,t,r){_classCallCheck(this,e),this.branchService=n,this.router=t,this.route=r}return _createClass(e,[{key:"ngOnInit",value:function(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.loading=!1:this.router.navigate(["../"],{relativeTo:this.route})}}]),e}(),r.\u0275fac=function(e){return new(e||r)(u["\u0275\u0275directiveInject"](a.a),u["\u0275\u0275directiveInject"](l.c),u["\u0275\u0275directiveInject"](l.a))},r.\u0275cmp=u["\u0275\u0275defineComponent"]({type:r,selectors:[["ngx-course"]],decls:1,vars:0,template:function(e,n){1&e&&u["\u0275\u0275element"](0,"router-outlet")},directives:[l.h],styles:[""]}),r),children:[{path:"manage",loadChildren:function(){return Promise.all([t.e(1),t.e(94)]).then(t.bind(null,"lc0P")).then((function(e){return e.ManageCourseModule}))}},{path:"add",loadChildren:function(){return Promise.all([t.e(3),t.e(1),t.e(14)]).then(t.bind(null,"4spS")).then((function(e){return e.AddCourseModule}))}},{path:"edit",loadChildren:function(){return Promise.all([t.e(3),t.e(1),t.e(14)]).then(t.bind(null,"4spS")).then((function(e){return e.AddCourseModule}))}},{path:"batch",loadChildren:function(){return Promise.all([t.e(1),t.e(87)]).then(t.bind(null,"iQ/W")).then((function(e){return e.BatchModule}))}},{path:"course-material",loadChildren:function(){return Promise.all([t.e(1),t.e(90)]).then(t.bind(null,"GD1K")).then((function(e){return e.CourseMaterialModule}))}},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return t.e(0).then(t.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],d=((i=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:i}),i.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||i)},imports:[[l.g.forChild(c)],l.g]}),i);t.d(n,"CourseModule",(function(){return s}));var h,s=((h=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:h}),h.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||h)},imports:[[o.c,d]]}),h)}}]);
function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{ynng:function(e,t,n){"use strict";n.r(t);var r,i,o=n("ofXK"),u=n("nF4J"),c=n("W14u"),a=n("7kqb"),l=n("EQut"),d=n("fXoL"),s=n("tyNb"),h=[{path:"",component:(r=function(){function e(t,n,r,i,o,u){_classCallCheck(this,e),this.branchService=t,this.studentBranchService=n,this.lectureService=r,this.studentCourseService=i,this.router=o,this.route=u}return _createClass(e,[{key:"ngOnInit",value:function(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId||this.router.navigate(["../"],{relativeTo:this.route})}},{key:"ngOnDestroy",value:function(){this.lectureService.setSearchDate(null),this.studentCourseService.deleteStudentCourseData()}}]),e}(),r.\u0275fac=function(e){return new(e||r)(d["\u0275\u0275directiveInject"](l.a),d["\u0275\u0275directiveInject"](u.a),d["\u0275\u0275directiveInject"](a.a),d["\u0275\u0275directiveInject"](c.a),d["\u0275\u0275directiveInject"](s.c),d["\u0275\u0275directiveInject"](s.a))},r.\u0275cmp=d["\u0275\u0275defineComponent"]({type:r,selectors:[["ngx-lecture"]],decls:1,vars:0,template:function(e,t){1&e&&d["\u0275\u0275element"](0,"router-outlet")},directives:[s.h],styles:[""]}),r),children:[{path:"manage",loadChildren:function(){return n.e(224).then(n.bind(null,"lzu1")).then((function(e){return e.ManageLectureModule}))}},{path:"view",loadChildren:function(){return n.e(229).then(n.bind(null,"mYgu")).then((function(e){return e.ViewLectureModule}))}},{path:"material",loadChildren:function(){return n.e(227).then(n.bind(null,"oZfr")).then((function(e){return e.StudyMaterialModule}))}},{path:"q&a",loadChildren:function(){return Promise.all([n.e(1),n.e(43)]).then(n.bind(null,"wPrP")).then((function(e){return e.QuestionAnswersModule}))}},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],f=((i=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:i}),i.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||i)},imports:[[s.g.forChild(h)],s.g]}),i);n.d(t,"LectureModule",(function(){return v}));var p,v=((p=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:p}),p.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||p)},imports:[[o.c,f]]}),p)}}]);
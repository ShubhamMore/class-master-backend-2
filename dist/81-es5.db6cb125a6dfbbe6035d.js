function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{fWff:function(e,t,n){"use strict";n.r(t);var r=n("3Pt+"),a=n("aceb"),i=n("ofXK"),c=n("IAlr"),l=n("7kqb"),o=n("ZatZ"),s=n("EQut"),u=n("lst6"),d=n("fXoL"),h=n("tyNb");function m(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"small"),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](n.batch.basicDetails.batchName)}}function f(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tr"),d["\u0275\u0275elementStart"](1,"td"),d["\u0275\u0275text"](2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"td"),d["\u0275\u0275text"](4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"td"),d["\u0275\u0275text"](6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"td"),d["\u0275\u0275text"](8),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"td"),d["\u0275\u0275elementStart"](10,"button",12),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"](3).markAttendance(e)})),d["\u0275\u0275text"](11," Attendance "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"td"),d["\u0275\u0275elementStart"](13,"button",13),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"](3).lectureMaterial(e)})),d["\u0275\u0275text"](14," Study Material "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"td"),d["\u0275\u0275elementStart"](16,"button",14),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"](3).questionAnswers(e)})),d["\u0275\u0275text"](17," Q&A "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit,a=d["\u0275\u0275nextContext"](3);d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](a.getTime(r.startTime,r.endTime)),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](a.getSubject(r.subject)),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](r.topic),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](r.teacher)}}function v(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",9),d["\u0275\u0275elementStart"](1,"table",10),d["\u0275\u0275template"](2,f,18,4,"tr",11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngForOf",n.lectures)}}function g(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p",15),d["\u0275\u0275text"](1,"No Lecture"),d["\u0275\u0275elementEnd"]())}function p(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"nb-card-body"),d["\u0275\u0275template"](1,v,3,1,"div",7),d["\u0275\u0275template"](2,g,2,0,"ng-template",null,8,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275reference"](3),r=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",r.lectures.length>0)("ngIfElse",n)}}function b(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p",15),d["\u0275\u0275text"](1,"Loading..."),d["\u0275\u0275elementEnd"]())}var S,x,I=[{path:"",component:(S=function(){function e(t,n,r,a,i,c,l,o){_classCallCheck(this,e),this.branchService=t,this.lectureService=n,this.courseService=r,this.batchService=a,this.dateService=i,this.router=c,this.route=l,this.toastrService=o}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.branchService.getCategoryData().subscribe((function(t){e.category=t})),this.courseService.getCourseData().subscribe((function(t){e.course=t})),this.batchService.getBatchData().subscribe((function(t){e.batch=t})),this.date=this.lectureService.getSearchDate(),this.date||(this.date=this.dateService.getDateString()),this.lectures=[],this.getLecture()):this.router.navigate(["../"],{relativeTo:this.route})}},{key:"getTime",value:function(e,t){return(e=this.dateService.formatTime(e))+" - "+this.dateService.formatTime(t)}},{key:"getSubject",value:function(e){var t=this.course.subjects.find((function(t){return t._id===e}));return t?t.subject:"--"}},{key:"markAttendance",value:function(e){this.lectureService.setLectureId(e._id),this.lectureService.setLectureData(e),this.router.navigate(["../attendance"],{relativeTo:this.route})}},{key:"lectureMaterial",value:function(e){this.lectureService.setLectureId(e._id),this.lectureService.setLectureData(e),this.router.navigate(["../material"],{relativeTo:this.route})}},{key:"questionAnswers",value:function(e){this.lectureService.setLectureId(e._id),this.lectureService.setLectureData(e),this.router.navigate(["../q&a"],{relativeTo:this.route})}},{key:"getLecture",value:function(){var e=this;this.loading=!0,this.lectureService.getLectures(this.branchId,this.category._id,this.course._id,this.batch._id,this.date).subscribe((function(t){e.lectures=t,e.loading=!1}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))}},{key:"dateChanged",value:function(){this.date&&(this.lectureService.setSearchDate(this.date),this.getLecture())}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}]),e}(),S.\u0275fac=function(e){return new(e||S)(d["\u0275\u0275directiveInject"](s.a),d["\u0275\u0275directiveInject"](l.a),d["\u0275\u0275directiveInject"](c.a),d["\u0275\u0275directiveInject"](u.a),d["\u0275\u0275directiveInject"](o.a),d["\u0275\u0275directiveInject"](h.c),d["\u0275\u0275directiveInject"](h.a),d["\u0275\u0275directiveInject"](a.Db))},S.\u0275cmp=d["\u0275\u0275defineComponent"]({type:S,selectors:[["ngx-manage-lecture"]],decls:12,vars:4,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[4,"ngIf"],[1,"col-md-3","col-sm-4"],["type","date","nbInput","","fullWidth","",3,"ngModel","ngModelChange","change"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["class","table-responsive",4,"ngIf","ngIfElse"],["noLecture",""],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],["status","primary","nbButton","","size","small",3,"click"],["status","warning","nbButton","","size","small",3,"click"],["status","success","nbButton","","size","small",3,"click"],[1,"text-center"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"nb-card"),d["\u0275\u0275elementStart"](1,"nb-card-header"),d["\u0275\u0275elementStart"](2,"div",0),d["\u0275\u0275elementStart"](3,"div",1),d["\u0275\u0275elementStart"](4,"h3"),d["\u0275\u0275text"](5," Lecture of "),d["\u0275\u0275template"](6,m,2,1,"small",2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"div",3),d["\u0275\u0275elementStart"](8,"input",4),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.date=e}))("change",(function(){return t.dateChanged()})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](9,p,4,2,"nb-card-body",5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](10,b,2,0,"ng-template",null,6,d["\u0275\u0275templateRefExtractor"])),2&e){var n=d["\u0275\u0275reference"](11);d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("ngIf",t.batch),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngModel",t.date),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",n)}},directives:[a.x,a.z,i.n,a.P,r.a,r.m,r.p,a.w,i.m,a.u],styles:[""]}),S)},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found"}],y=((x=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:x}),x.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||x)},imports:[[h.g.forChild(I)],h.g]}),x);n.d(t,"ManageLectureModule",(function(){return C}));var E,C=((E=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:E}),E.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||E)},imports:[[i.c,y,a.A,a.Gb,a.O,a.v,a.Q,a.k,a.L,r.h]]}),E)}}]);
function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{fWff:function(e,t,n){"use strict";n.r(t);var r=n("PCNd"),i=n("3Pt+"),a=n("aceb"),c=n("ofXK"),l=n("5hth"),o=n("nwtg"),s=n("AytR"),u=n("7kqb"),d=n("fXoL"),m=n("L09S");function h(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",1),d["\u0275\u0275element"](1,"iframe",2),d["\u0275\u0275pipe"](2,"safeUrl"),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("src",d["\u0275\u0275pipeBind1"](2,1,n.zoomURL),d["\u0275\u0275sanitizeResourceUrl"])}}var f,v=((f=function(){function e(t,n,r){_classCallCheck(this,e),this.lectureService=t,this.authService=n,this.encryptService=r}return _createClass(e,[{key:"ngOnInit",value:function(){this.loading=!0;var e=this.lectureService.getLectureId(),t=this.authService.getUserData().imsMasterId;this.zoomURL=s.a.zoomLiveURL+"?lecture="+e+"&user="+t,this.loading=!1}}]),e}()).\u0275fac=function(e){return new(e||f)(d["\u0275\u0275directiveInject"](u.a),d["\u0275\u0275directiveInject"](o.a),d["\u0275\u0275directiveInject"](l.a))},f.\u0275cmp=d["\u0275\u0275defineComponent"]({type:f,selectors:[["ngx-online-lecture"]],decls:1,vars:1,consts:[["class","zoom-meeting",4,"ngIf"],[1,"zoom-meeting"],["width","100%","height","100%","frameborder","0","allowfullscreen","true","allow","camera; microphone;",3,"src"]],template:function(e,t){1&e&&d["\u0275\u0275template"](0,h,3,3,"div",0),2&e&&d["\u0275\u0275property"]("ngIf",!t.loading)},directives:[c.n],pipes:[m.a],styles:[".zoom-meeting[_ngcontent-%COMP%]{width:90vw;height:80vh}"]}),f),p=n("IAlr"),g=n("ZatZ"),S=n("EQut"),b=n("lst6"),x=n("tyNb");function E(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"small"),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](n.batch.basicDetails.batchName)}}function I(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tr"),d["\u0275\u0275elementStart"](1,"td"),d["\u0275\u0275text"](2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"td"),d["\u0275\u0275text"](4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"td"),d["\u0275\u0275text"](6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"td"),d["\u0275\u0275text"](8),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"td"),d["\u0275\u0275elementStart"](10,"button",16),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"](3).markAttendance(e)})),d["\u0275\u0275text"](11," Attendance "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"td"),d["\u0275\u0275elementStart"](13,"button",17),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"](3).lectureMaterial(e)})),d["\u0275\u0275text"](14," Study Material "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"td"),d["\u0275\u0275elementStart"](16,"button",18),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"](3).questionAnswers(e)})),d["\u0275\u0275text"](17," Q&A "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit,i=d["\u0275\u0275nextContext"](3);d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](i.getTime(r.startTime,r.endTime)),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](i.getSubject(r.subject)),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](r.topic),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](r.teacher)}}function y(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",13),d["\u0275\u0275elementStart"](1,"table",14),d["\u0275\u0275elementStart"](2,"tbody"),d["\u0275\u0275template"](3,I,18,4,"tr",15),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngForOf",n.classroomLectures)}}function C(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tr"),d["\u0275\u0275elementStart"](1,"td"),d["\u0275\u0275text"](2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"td"),d["\u0275\u0275text"](4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"td"),d["\u0275\u0275text"](6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"td"),d["\u0275\u0275text"](8),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"td"),d["\u0275\u0275elementStart"](10,"button",19),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"](3).startOnlineLecture(e)})),d["\u0275\u0275text"](11," Go Live "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"td"),d["\u0275\u0275elementStart"](13,"button",16),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"](3).markAttendance(e)})),d["\u0275\u0275text"](14," Attendance "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"td"),d["\u0275\u0275elementStart"](16,"button",17),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"](3).lectureMaterial(e)})),d["\u0275\u0275text"](17," Study Material "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](18,"td"),d["\u0275\u0275elementStart"](19,"button",18),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"](3).questionAnswers(e)})),d["\u0275\u0275text"](20," Q&A "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit,i=d["\u0275\u0275nextContext"](3);d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](i.getTime(r.startTime,r.endTime)),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](i.getSubject(r.subject)),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](r.topic),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](r.teacher)}}function w(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",13),d["\u0275\u0275elementStart"](1,"table",14),d["\u0275\u0275elementStart"](2,"tbody"),d["\u0275\u0275template"](3,C,21,4,"tr",15),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngForOf",n.onlineLectures)}}function L(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"nb-card-body"),d["\u0275\u0275elementStart"](1,"nb-tabset",9),d["\u0275\u0275elementStart"](2,"nb-tab",10),d["\u0275\u0275template"](3,y,4,1,"div",11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"nb-tab",12),d["\u0275\u0275template"](5,w,4,1,"div",11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"](),r=d["\u0275\u0275reference"](11),i=d["\u0275\u0275reference"](13);d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngIf",n.classroomLectures.length>0)("ngIfElse",r),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",n.onlineLectures.length>0)("ngIfElse",i)}}function k(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p",20),d["\u0275\u0275text"](1,"No Classroom Lecture"),d["\u0275\u0275elementEnd"]())}function T(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p",20),d["\u0275\u0275text"](1,"No Online Lecture"),d["\u0275\u0275elementEnd"]())}function j(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p",21),d["\u0275\u0275text"](1,"Loading..."),d["\u0275\u0275elementEnd"]())}var _,M,O=[{path:"",component:(_=function(){function e(t,n,r,i,a,c,l,o,s){_classCallCheck(this,e),this.branchService=t,this.lectureService=n,this.courseService=r,this.batchService=i,this.dateService=a,this.router=c,this.route=l,this.windowService=o,this.toastrService=s}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.branchService.getCategoryData().subscribe((function(t){e.category=t})),this.courseService.getCourseData().subscribe((function(t){e.course=t})),this.batchService.getBatchData().subscribe((function(t){e.batch=t})),this.date=this.lectureService.getSearchDate(),this.date||(this.date=this.dateService.getDateString()),this.onlineLectures=[],this.classroomLectures=[],this.getLecture()):this.router.navigate(["../"],{relativeTo:this.route})}},{key:"getTime",value:function(e,t){return(e=this.dateService.formatTime(e))+" - "+this.dateService.formatTime(t)}},{key:"getSubject",value:function(e){var t=this.course.subjects.find((function(t){return t._id===e}));return t?t.subject:"--"}},{key:"markAttendance",value:function(e){this.lectureService.setLectureId(e._id),this.lectureService.setLectureData(e),this.router.navigate(["../attendance"],{relativeTo:this.route})}},{key:"startOnlineLecture",value:function(e){"online"===e.sessionType?(this.lectureService.setLectureId(e._id),this.windowService.open(v,{title:e.topic,context:{}})):this.showToastr("top-right","danger","This os not an Online Lecture")}},{key:"lectureMaterial",value:function(e){this.lectureService.setLectureId(e._id),this.lectureService.setLectureData(e),this.router.navigate(["../material"],{relativeTo:this.route})}},{key:"questionAnswers",value:function(e){this.lectureService.setLectureId(e._id),this.lectureService.setLectureData(e),this.router.navigate(["../q&a"],{relativeTo:this.route})}},{key:"getLecture",value:function(){var e=this;this.loading=!0,this.lectureService.getLectures(this.branchId,this.category._id,this.course._id,this.batch._id,this.date).subscribe((function(t){e.onlineLectures=t.filter((function(e){return"online"===e.sessionType})),e.classroomLectures=t.filter((function(e){return"classroom"===e.sessionType})),e.loading=!1}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))}},{key:"dateChanged",value:function(){this.date&&(this.lectureService.setSearchDate(this.date),this.getLecture())}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}]),e}(),_.\u0275fac=function(e){return new(e||_)(d["\u0275\u0275directiveInject"](S.a),d["\u0275\u0275directiveInject"](u.a),d["\u0275\u0275directiveInject"](p.a),d["\u0275\u0275directiveInject"](b.a),d["\u0275\u0275directiveInject"](g.a),d["\u0275\u0275directiveInject"](x.c),d["\u0275\u0275directiveInject"](x.a),d["\u0275\u0275directiveInject"](a.Kb),d["\u0275\u0275directiveInject"](a.Db))},_.\u0275cmp=d["\u0275\u0275defineComponent"]({type:_,selectors:[["ngx-manage-lecture"]],decls:16,vars:4,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[4,"ngIf"],[1,"col-md-3","col-sm-4"],["type","date","nbInput","","fullWidth","",3,"ngModel","ngModelChange","change"],[4,"ngIf","ngIfElse"],["noClassroomLecture",""],["noOnlineLecture",""],["loadingTemplate",""],["fullWidth",""],["tabTitle","Classroom Lecture"],["class","table-responsive",4,"ngIf","ngIfElse"],["tabTitle","Online Lecture"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],["status","primary","nbButton","","size","small",3,"click"],["status","warning","nbButton","","size","small",3,"click"],["status","success","nbButton","","size","small",3,"click"],["status","info","nbButton","","size","small",3,"click"],[1,"text-center","pt-5","pb-5"],[1,"text-center"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"nb-card"),d["\u0275\u0275elementStart"](1,"nb-card-header"),d["\u0275\u0275elementStart"](2,"div",0),d["\u0275\u0275elementStart"](3,"div",1),d["\u0275\u0275elementStart"](4,"h3"),d["\u0275\u0275text"](5," Lecture of "),d["\u0275\u0275template"](6,E,2,1,"small",2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"div",3),d["\u0275\u0275elementStart"](8,"input",4),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.date=e}))("change",(function(){return t.dateChanged()})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](9,L,6,4,"nb-card-body",5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](10,k,2,0,"ng-template",null,6,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275template"](12,T,2,0,"ng-template",null,7,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275template"](14,j,2,0,"ng-template",null,8,d["\u0275\u0275templateRefExtractor"])),2&e){var n=d["\u0275\u0275reference"](15);d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("ngIf",t.batch),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngModel",t.date),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",n)}},directives:[a.x,a.z,c.n,a.P,i.a,i.m,i.p,a.w,a.yb,a.xb,c.m,a.u],styles:[".online[_ngcontent-%COMP%]{color:#00d68f}"]}),_)},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found"}],z=((M=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:M}),M.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||M)},imports:[[x.g.forChild(O)],x.g]}),M);n.d(t,"ManageLectureModule",(function(){return D}));var A,D=((A=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:A}),A.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||A)},imports:[[c.c,r.a,z,a.A,a.Gb,a.O,a.v,a.Q,a.k,a.zb,a.L,i.h]]}),A)}}]);
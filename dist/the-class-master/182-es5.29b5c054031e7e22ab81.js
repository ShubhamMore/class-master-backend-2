!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{P9E7:function(t,r,i){"use strict";i.r(r),i.d(r,"ManageLectureModule",(function(){return N}));var a=i("PCNd"),c=i("3Pt+"),l=i("aceb"),o=i("ofXK"),s=i("AytR"),u=i("fXoL"),d=i("7kqb"),m=i("nwtg"),h=i("5hth"),f=i("L09S");function v(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"div",1),u["\u0275\u0275element"](1,"iframe",2),u["\u0275\u0275pipe"](2,"safeUrl"),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("src",u["\u0275\u0275pipeBind1"](2,1,n.zoomURL),u["\u0275\u0275sanitizeResourceUrl"])}}var p,g=((p=function(){function t(n,r,i){e(this,t),this.lectureService=n,this.authService=r,this.encryptService=i}return n(t,[{key:"ngOnInit",value:function(){this.loading=!0;var e=this.lectureService.getLectureId(),t=this.authService.getUserData().imsMasterId;this.zoomURL=s.a.zoomLiveURL+"?lecture="+e+"&user="+t,this.loading=!1}}]),t}()).\u0275fac=function(e){return new(e||p)(u["\u0275\u0275directiveInject"](d.a),u["\u0275\u0275directiveInject"](m.a),u["\u0275\u0275directiveInject"](h.a))},p.\u0275cmp=u["\u0275\u0275defineComponent"]({type:p,selectors:[["ngx-online-lecture"]],decls:1,vars:1,consts:[["class","zoom-meeting",4,"ngIf"],[1,"zoom-meeting"],["width","100%","height","100%","frameborder","0","allowfullscreen","true","allow","camera; microphone;",3,"src"]],template:function(e,t){1&e&&u["\u0275\u0275template"](0,v,3,3,"div",0),2&e&&u["\u0275\u0275property"]("ngIf",!t.loading)},directives:[o.n],pipes:[f.a],styles:[".zoom-meeting[_ngcontent-%COMP%]{width:90vw;height:80vh}"]}),p),S=i("EQut"),b=i("IAlr"),x=i("lst6"),E=i("ZatZ"),I=i("tyNb");function y(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"small"),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate"](n.batch.basicDetails.batchName)}}function w(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"tr"),u["\u0275\u0275elementStart"](1,"td"),u["\u0275\u0275text"](2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"td"),u["\u0275\u0275text"](4),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"td"),u["\u0275\u0275text"](6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"td"),u["\u0275\u0275text"](8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](9,"td"),u["\u0275\u0275elementStart"](10,"button",16),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](n);var e=t.$implicit;return u["\u0275\u0275nextContext"](3).markAttendance(e)})),u["\u0275\u0275text"](11," Attendance "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](12,"td"),u["\u0275\u0275elementStart"](13,"button",17),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](n);var e=t.$implicit;return u["\u0275\u0275nextContext"](3).lectureMaterial(e)})),u["\u0275\u0275text"](14," Study Material "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](15,"td"),u["\u0275\u0275elementStart"](16,"button",18),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](n);var e=t.$implicit;return u["\u0275\u0275nextContext"](3).questionAnswers(e)})),u["\u0275\u0275text"](17," Q&A "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit,i=u["\u0275\u0275nextContext"](3);u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](i.getTime(r.startTime,r.endTime)),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](i.getSubject(r.subject)),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](r.topic),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](r.teacher)}}function L(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"div",13),u["\u0275\u0275elementStart"](1,"table",14),u["\u0275\u0275elementStart"](2,"tbody"),u["\u0275\u0275template"](3,w,18,4,"tr",15),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"](2);u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("ngForOf",n.classroomLectures)}}function C(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"tr"),u["\u0275\u0275elementStart"](1,"td"),u["\u0275\u0275text"](2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"td"),u["\u0275\u0275text"](4),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"td"),u["\u0275\u0275text"](6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"td"),u["\u0275\u0275text"](8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](9,"td"),u["\u0275\u0275elementStart"](10,"button",19),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](n);var e=t.$implicit;return u["\u0275\u0275nextContext"](3).startOnlineLecture(e)})),u["\u0275\u0275text"](11," Go Live "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](12,"td"),u["\u0275\u0275elementStart"](13,"button",16),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](n);var e=t.$implicit;return u["\u0275\u0275nextContext"](3).markAttendance(e)})),u["\u0275\u0275text"](14," Attendance "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](15,"td"),u["\u0275\u0275elementStart"](16,"button",17),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](n);var e=t.$implicit;return u["\u0275\u0275nextContext"](3).lectureMaterial(e)})),u["\u0275\u0275text"](17," Study Material "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](18,"td"),u["\u0275\u0275elementStart"](19,"button",18),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](n);var e=t.$implicit;return u["\u0275\u0275nextContext"](3).questionAnswers(e)})),u["\u0275\u0275text"](20," Q&A "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit,i=u["\u0275\u0275nextContext"](3);u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](i.getTime(r.startTime,r.endTime)),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](i.getSubject(r.subject)),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](r.topic),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](r.teacher)}}function k(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"div",13),u["\u0275\u0275elementStart"](1,"table",14),u["\u0275\u0275elementStart"](2,"tbody"),u["\u0275\u0275template"](3,C,21,4,"tr",15),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"](2);u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("ngForOf",n.onlineLectures)}}function T(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"nb-card-body"),u["\u0275\u0275elementStart"](1,"nb-tabset",9),u["\u0275\u0275elementStart"](2,"nb-tab",10),u["\u0275\u0275template"](3,L,4,1,"div",11),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"nb-tab",12),u["\u0275\u0275template"](5,k,4,1,"div",11),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"](),r=u["\u0275\u0275reference"](11),i=u["\u0275\u0275reference"](13);u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("ngIf",n.classroomLectures.length>0)("ngIfElse",r),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngIf",n.onlineLectures.length>0)("ngIfElse",i)}}function j(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",20),u["\u0275\u0275text"](1,"No Classroom Lecture"),u["\u0275\u0275elementEnd"]())}function M(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",20),u["\u0275\u0275text"](1,"No Online Lecture"),u["\u0275\u0275elementEnd"]())}function A(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",20),u["\u0275\u0275text"](1,"Loading..."),u["\u0275\u0275elementEnd"]())}var O,D,z,_=[{path:"",component:(O=function(){function t(n,r,i,a,c,l,o,s,u){e(this,t),this.branchService=n,this.lectureService=r,this.courseService=i,this.batchService=a,this.dateService=c,this.router=l,this.route=o,this.windowService=s,this.toastrService=u}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.branchService.getCategoryData().subscribe((function(t){e.category=t})),this.courseService.getCourseData().subscribe((function(t){e.course=t})),this.batchService.getBatchData().subscribe((function(t){e.batch=t})),this.date=this.lectureService.getSearchDate(),this.date||(this.date=this.dateService.getDateString()),this.onlineLectures=[],this.classroomLectures=[],this.getLecture()):this.router.navigate(["../"],{relativeTo:this.route})}},{key:"getTime",value:function(e,t){return(e=this.dateService.formatTime(e))+" - "+this.dateService.formatTime(t)}},{key:"getSubject",value:function(e){var t=this.course.subjects.find((function(t){return t._id===e}));return t?t.subject:"--"}},{key:"markAttendance",value:function(e){this.lectureService.setLectureId(e._id),this.lectureService.setLectureData(e),this.router.navigate(["../attendance"],{relativeTo:this.route})}},{key:"startOnlineLecture",value:function(e){"online"===e.sessionType?(this.lectureService.setLectureId(e._id),this.windowService.open(g,{title:e.topic,context:{}})):this.showToastr("top-right","danger","This os not an Online Lecture")}},{key:"lectureMaterial",value:function(e){this.lectureService.setLectureId(e._id),this.lectureService.setLectureData(e),this.router.navigate(["../material"],{relativeTo:this.route})}},{key:"questionAnswers",value:function(e){this.lectureService.setLectureId(e._id),this.lectureService.setLectureData(e),this.router.navigate(["../q&a"],{relativeTo:this.route})}},{key:"getLecture",value:function(){var e=this;this.loading=!0,this.lectureService.getLectures(this.branchId,this.category._id,this.course._id,this.batch._id,this.date).subscribe((function(t){e.onlineLectures=t.filter((function(e){return"online"===e.sessionType})),e.classroomLectures=t.filter((function(e){return"classroom"===e.sessionType})),e.loading=!1}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))}},{key:"dateChanged",value:function(){this.date&&(this.lectureService.setSearchDate(this.date),this.getLecture())}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}]),t}(),O.\u0275fac=function(e){return new(e||O)(u["\u0275\u0275directiveInject"](S.a),u["\u0275\u0275directiveInject"](d.a),u["\u0275\u0275directiveInject"](b.a),u["\u0275\u0275directiveInject"](x.a),u["\u0275\u0275directiveInject"](E.a),u["\u0275\u0275directiveInject"](I.c),u["\u0275\u0275directiveInject"](I.a),u["\u0275\u0275directiveInject"](l.Nb),u["\u0275\u0275directiveInject"](l.Gb))},O.\u0275cmp=u["\u0275\u0275defineComponent"]({type:O,selectors:[["ngx-manage-lecture"]],decls:16,vars:4,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[4,"ngIf"],[1,"col-md-3","col-sm-4"],["type","date","nbInput","","fullWidth","",3,"ngModel","ngModelChange","change"],[4,"ngIf","ngIfElse"],["noClassroomLecture",""],["noOnlineLecture",""],["loadingTemplate",""],["fullWidth",""],["tabTitle","Classroom Lecture"],["class","table-responsive",4,"ngIf","ngIfElse"],["tabTitle","Online Lecture"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],["status","primary","nbButton","","size","small",3,"click"],["status","warning","nbButton","","size","small",3,"click"],["status","success","nbButton","","size","small",3,"click"],["status","info","nbButton","","size","small",3,"click"],[1,"text-center","pt-5","pb-5"]],template:function(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"nb-card"),u["\u0275\u0275elementStart"](1,"nb-card-header"),u["\u0275\u0275elementStart"](2,"div",0),u["\u0275\u0275elementStart"](3,"div",1),u["\u0275\u0275elementStart"](4,"h3"),u["\u0275\u0275text"](5," Lecture of "),u["\u0275\u0275template"](6,y,2,1,"small",2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"div",3),u["\u0275\u0275elementStart"](8,"input",4),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.date=e}))("change",(function(){return t.dateChanged()})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](9,T,6,4,"nb-card-body",5),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](10,j,2,0,"ng-template",null,6,u["\u0275\u0275templateRefExtractor"]),u["\u0275\u0275template"](12,M,2,0,"ng-template",null,7,u["\u0275\u0275templateRefExtractor"]),u["\u0275\u0275template"](14,A,2,0,"ng-template",null,8,u["\u0275\u0275templateRefExtractor"])),2&e){var n=u["\u0275\u0275reference"](15);u["\u0275\u0275advance"](6),u["\u0275\u0275property"]("ngIf",t.batch),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngModel",t.date),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",n)}},directives:[l.y,l.A,o.n,l.Q,c.a,c.m,c.p,l.x,l.Bb,l.Ab,o.m,l.v],styles:[".online[_ngcontent-%COMP%]{color:#00d68f}"]}),O)},{path:"page-not-found",loadChildren:function(){return i.e(0).then(i.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found"}],B=((z=function t(){e(this,t)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:z}),z.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||z)},imports:[[I.g.forChild(_)],I.g]}),z),N=((D=function t(){e(this,t)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:D}),D.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||D)},imports:[[o.c,a.a,B,l.B,l.Jb,l.P,l.w,l.R,l.k,l.Cb,l.M,c.h]]}),D)}}])}();
//# sourceMappingURL=182-es5.29b5c054031e7e22ab81.js.map
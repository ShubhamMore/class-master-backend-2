function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{dGLe:function(e,t,n){"use strict";n.r(t);var a=n("aceb"),r=n("ofXK"),c=n("ZatZ"),i=n("IAlr"),l=n("lst6"),o=n("7kqb"),d=n("ggm5"),s=n("EQut"),u=n("fXoL"),m=n("tyNb");function h(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"tr"),u["\u0275\u0275elementStart"](1,"td"),u["\u0275\u0275text"](2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"td"),u["\u0275\u0275text"](4),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"td",10),u["\u0275\u0275elementStart"](6,"div",11),u["\u0275\u0275elementStart"](7,"label"),u["\u0275\u0275elementStart"](8,"input",12),u["\u0275\u0275listener"]("change",(function(e){u["\u0275\u0275restoreView"](n);var a=t.index;return u["\u0275\u0275nextContext"](2).onChangeAttendance(e.target.checked,a)})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](9,"label",13),u["\u0275\u0275text"](10),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit;u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](a.name),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](a.rollNumber),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("id",a.student)("checked",a.attendance),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("for",a.student),u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate"](a.attendance?"P":"A")}}function v(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"div",6),u["\u0275\u0275elementStart"](1,"div",7),u["\u0275\u0275elementStart"](2,"table",8),u["\u0275\u0275elementStart"](3,"thead"),u["\u0275\u0275elementStart"](4,"tr"),u["\u0275\u0275elementStart"](5,"th"),u["\u0275\u0275text"](6,"Student Name"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"th"),u["\u0275\u0275text"](8,"Roll Number"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](9,"th"),u["\u0275\u0275text"](10,"Mark Attendance"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](11,"tbody"),u["\u0275\u0275template"](12,h,11,6,"tr",9),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](12),u["\u0275\u0275property"]("ngForOf",n.students)}}function f(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",10),u["\u0275\u0275text"](1,"No Students Found"),u["\u0275\u0275elementEnd"]())}var p,g,b=[{path:"",component:(p=function(){function e(t,n,a,r,c,i,l,o,d){_classCallCheck(this,e),this.branchService=t,this.courseService=n,this.batchService=a,this.dateService=r,this.lectureService=c,this.attendanceService=i,this.toastrService=l,this.router=o,this.route=d}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;return this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.lectureService.getLectureData().subscribe((function(t){e.lecture=t})),this.lecture?(this.courseService.getCourseData().subscribe((function(t){e.course=t})),this.batchService.getBatchData().subscribe((function(t){e.batch=t})),this.students=[],void this.getStudents()):(this.showToastr("top-right","danger","Lecture Not Found"),void this.back())):(this.showToastr("top-right","danger","Branch Not Found"),void this.back())}},{key:"getStudents",value:function(){var e=this;this.loading=!0,this.attendanceService.getStudents(this.lecture.branch,this.lecture.category,this.lecture.course,this.lecture.batch,this.lecture._id).subscribe((function(t){t.map((function(e){return e.attendance=!!e.attendance&&e.attendance})),e.students=t,e.loading=!1}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))}},{key:"onChangeAttendance",value:function(e,t){this.students[t].attendance=e}},{key:"saveAttendance",value:function(){var e=this;this.attendanceService.saveAttendance({date:this.lecture.date,branch:this.lecture.branch,category:this.lecture.category,course:this.lecture.course,batch:this.lecture.batch,subject:this.lecture.subject,lecture:this.lecture._id,attendance:this.students}).subscribe((function(t){e.showToastr("top-right","success","Attendance ".concat(t?"Updated":"Marked"," Successfully")),e.back()}),(function(t){e.showToastr("top-right","danger",t)}))}},{key:"getTime",value:function(e,t){return(e=this.dateService.formatTime(e))+" - "+this.dateService.formatTime(t)}},{key:"getTeacher",value:function(e){return e}},{key:"getSubject",value:function(e){var t=this.course.subjects.find((function(t){return t._id===e}));return t?t.subject:"--"}},{key:"back",value:function(){this.router.navigate(["../manage"],{relativeTo:this.route})}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}]),e}(),p.\u0275fac=function(e){return new(e||p)(u["\u0275\u0275directiveInject"](s.a),u["\u0275\u0275directiveInject"](i.a),u["\u0275\u0275directiveInject"](l.a),u["\u0275\u0275directiveInject"](c.a),u["\u0275\u0275directiveInject"](o.a),u["\u0275\u0275directiveInject"](d.a),u["\u0275\u0275directiveInject"](a.Db),u["\u0275\u0275directiveInject"](m.c),u["\u0275\u0275directiveInject"](m.a))},p.\u0275cmp=u["\u0275\u0275defineComponent"]({type:p,selectors:[["ngx-attendance"]],decls:46,vars:8,consts:[[1,"row"],[1,"col-md-4","col-sm-6","col-12"],["class","col-12",4,"ngIf","ngIfElse"],[1,"col-12","text-right"],["type","button","nbButton","","status","primary","size","small",3,"click"],["noStudents",""],[1,"col-12"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[1,"text-center"],[1,"mark-attendance-selector"],["type","checkbox",1,"mark-attendance",3,"id","checked","change"],[3,"for"]],template:function(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"nb-card"),u["\u0275\u0275elementStart"](1,"nb-card-header"),u["\u0275\u0275elementStart"](2,"div",0),u["\u0275\u0275elementStart"](3,"div",1),u["\u0275\u0275elementStart"](4,"span"),u["\u0275\u0275elementStart"](5,"strong"),u["\u0275\u0275text"](6,"Date: "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](7),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](8,"div",1),u["\u0275\u0275elementStart"](9,"span"),u["\u0275\u0275elementStart"](10,"strong"),u["\u0275\u0275text"](11,"Time: "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](12),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](13,"div",1),u["\u0275\u0275elementStart"](14,"span"),u["\u0275\u0275elementStart"](15,"strong"),u["\u0275\u0275text"](16,"Course: "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](17),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](18,"div",1),u["\u0275\u0275elementStart"](19,"span"),u["\u0275\u0275elementStart"](20,"strong"),u["\u0275\u0275text"](21,"Batch: "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](22),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](23,"div",1),u["\u0275\u0275elementStart"](24,"span"),u["\u0275\u0275elementStart"](25,"strong"),u["\u0275\u0275text"](26,"Subject: "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](27),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](28,"div",1),u["\u0275\u0275elementStart"](29,"span"),u["\u0275\u0275elementStart"](30,"strong"),u["\u0275\u0275text"](31,"Lecture Topic: "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](32),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](33,"nb-card"),u["\u0275\u0275elementStart"](34,"nb-card-header"),u["\u0275\u0275elementStart"](35,"h4"),u["\u0275\u0275text"](36,"ATTENDANCE RECORDING"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](37,"nb-card-body"),u["\u0275\u0275elementStart"](38,"div",0),u["\u0275\u0275template"](39,v,13,1,"div",2),u["\u0275\u0275element"](40,"hr"),u["\u0275\u0275elementStart"](41,"div",3),u["\u0275\u0275elementStart"](42,"button",4),u["\u0275\u0275listener"]("click",(function(){return t.saveAttendance()})),u["\u0275\u0275text"](43," Save "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](44,f,2,0,"ng-template",null,5,u["\u0275\u0275templateRefExtractor"]),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275reference"](45);u["\u0275\u0275advance"](7),u["\u0275\u0275textInterpolate"](t.dateService.formatDate(t.lecture.date)),u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate"](t.getTime(t.lecture.startTime,t.lecture.endTime)),u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate"](t.course.basicDetails.courseName),u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate"](t.batch.basicDetails.batchName),u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate"](t.getSubject(t.lecture.subject)),u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate"](t.lecture.topic),u["\u0275\u0275advance"](7),u["\u0275\u0275property"]("ngIf",t.students.length>0)("ngIfElse",n)}},directives:[a.x,a.z,a.w,r.n,a.u,r.m],styles:[".mark-attendance-selector[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none!important}.mark-attendance-selector[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{display:inline-block;font-size:75%;border:1px solid #aaa;border-radius:50%;background:#fff;height:30px;width:30px;padding:1px;margin:1px;line-height:25px;text-align:center;cursor:pointer;transition:background .2s,color .2s}.mark-attendance-selector[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:#0095ff;color:#fff}"]}),p)},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found"}],S=((g=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:g}),g.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||g)},imports:[[m.g.forChild(b)],m.g]}),g);n.d(t,"AttendanceModule",(function(){return x}));var E,x=((E=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:E}),E.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||E)},imports:[[r.c,S,a.A,a.v,a.O]]}),E)}}]);
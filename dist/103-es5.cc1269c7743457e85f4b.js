function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{"4lO2":function(e,t,n){"use strict";n.r(t);var a=n("aceb"),i=n("ofXK"),r=n("tyNb"),c=n("IAlr"),s=n("OeS+"),l=n("ZatZ"),u=n("EQut"),o=n("lst6"),d=n("fXoL");function h(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tr"),d["\u0275\u0275elementStart"](1,"td"),d["\u0275\u0275text"](2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"td"),d["\u0275\u0275text"](4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"td"),d["\u0275\u0275text"](6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"td"),d["\u0275\u0275text"](8),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"td"),d["\u0275\u0275elementStart"](10,"button",22),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"](3).editSchedule(e)})),d["\u0275\u0275text"](11," Edit "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"td"),d["\u0275\u0275elementStart"](13,"button",23),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"](3).deleteSchedule(e._id)})),d["\u0275\u0275text"](14," Delete "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit,i=d["\u0275\u0275nextContext"](3);d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](i.getTime(a.startTime,a.endTime)),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](i.getSubject(a.subject)),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](a.topic),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](i.getTeacher(a.teacher))}}function m(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",20),d["\u0275\u0275elementStart"](1,"table",21),d["\u0275\u0275template"](2,h,15,4,"tr",13),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]().$implicit,a=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngForOf",a.getFilteredSchedule(n))}}function v(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p",10),d["\u0275\u0275text"](1,"No Schedule"),d["\u0275\u0275elementEnd"]())}function S(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"nb-accordion-item"),d["\u0275\u0275elementStart"](1,"nb-accordion-item-header"),d["\u0275\u0275elementStart"](2,"div",14),d["\u0275\u0275elementStart"](3,"div",15),d["\u0275\u0275elementStart"](4,"button",16),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"]().addScheduleOfDay(e)})),d["\u0275\u0275element"](5,"nb-icon",17),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"span"),d["\u0275\u0275text"](7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"nb-accordion-item-body"),d["\u0275\u0275template"](9,m,3,1,"div",18),d["\u0275\u0275template"](10,v,2,0,"ng-template",null,19,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit,i=d["\u0275\u0275reference"](11),r=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](7),d["\u0275\u0275textInterpolate"](a),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",r.getFilteredSchedule(a).length>0)("ngIfElse",i)}}var f,D,g=[{path:"",component:(f=function(){function e(t,n,a,i,r,c,s,l){_classCallCheck(this,e),this.branchService=t,this.scheduleService=n,this.courseService=a,this.batchService=i,this.dateService=r,this.router=c,this.route=s,this.toastrService=l}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.branchService.getCategoryData().subscribe((function(t){e.category=t})),this.courseService.getCourseData().subscribe((function(t){e.course=t})),this.batchService.getBatchData().subscribe((function(t){e.batch=t})),this.days=[],this.schedules=[],this.setCurDate(this.dateService.getDate()),this.changeScheduleCalenderType(0),this.getSchedule()):this.router.navigate(["../"],{relativeTo:this.route})}},{key:"setCurDate",value:function(e){this.curDate=e,this.curMonth=this.curDate.getMonth(),this.curYear=this.curDate.getFullYear()}},{key:"setStartDate",value:function(){var e=new Date(this.curDate);0===this.scheduleCalenderType?this.startDate=new Date(e):1===this.scheduleCalenderType?(e.setDate(e.getDate()-e.getDay()),this.startDate=new Date(e)):(e.setDate(1),this.startDate=new Date(e)),this.calcNoOfDays(),this.getSchedule()}},{key:"calcNoOfDays",value:function(){var e;e=0===this.scheduleCalenderType?1:1===this.scheduleCalenderType?7:this.daysInMonth(this.curMonth,this.curYear),this.noOfDays=e,this.days=[];for(var t=0;t<e;t++){var n=this.dateService.millisecondsToDate(this.dateService.dateToMilliseconds(this.startDate)+864e5*t);this.days.push(n.toString().substring(0,15))}}},{key:"headerDate",value:function(){var e;if(0===this.scheduleCalenderType)e=this.curDate.toString().substring(4,15);else if(1===this.scheduleCalenderType){var t=this.curDate;t.setDate(t.getDate()-t.getDay());var n=new Date(t),a=n.toString().substring(4,10);n.getDate()>25&&11===n.getMonth()&&(a=a+", "+n.getFullYear()),t.setDate(t.getDate()+6);var i=(n=new Date(t)).toString().substring(4,10);a.split(",")[1]&&(i=i+", "+n.getFullYear()),e=a+" - "+i}else e=this.dateService.getMonth(this.curMonth)+" "+this.curYear;return e}},{key:"goToToday",value:function(){this.setCurDate(this.dateService.getDate()),this.setStartDate()}},{key:"nextMonth",value:function(){this.curYear=11===this.curMonth?this.curYear+1:this.curYear,this.curMonth=(this.curMonth+1)%12,this.curDate=new Date(this.curYear,this.curMonth,1)}},{key:"previousMonth",value:function(){this.curYear=0===this.curMonth?this.curYear-1:this.curYear,this.curMonth=0===this.curMonth?11:this.curMonth-1,this.curDate=new Date(this.curYear,this.curMonth,1)}},{key:"nextWeek",value:function(){var e=new Date(this.curDate).getDate()+7,t=new Date(this.curDate).setDate(e);this.setCurDate(new Date(t))}},{key:"previousWeek",value:function(){var e=new Date(this.curDate).getDate()-7,t=new Date(this.curDate).setDate(e);this.setCurDate(new Date(t))}},{key:"nextDay",value:function(){var e=new Date(this.curDate).getDate()+1,t=new Date(this.curDate).setDate(e);this.setCurDate(new Date(t))}},{key:"previousDay",value:function(){var e=new Date(this.curDate).getDate()-1,t=new Date(this.curDate).setDate(e);this.setCurDate(new Date(t))}},{key:"next",value:function(){0===this.scheduleCalenderType?this.nextDay():1===this.scheduleCalenderType?this.nextWeek():this.nextMonth(),this.setStartDate()}},{key:"previous",value:function(){0===this.scheduleCalenderType?this.previousDay():1===this.scheduleCalenderType?this.previousWeek():this.previousMonth(),this.setStartDate()}},{key:"changeScheduleCalenderType",value:function(e){this.scheduleCalenderType=e,this.setStartDate()}},{key:"daysInMonth",value:function(e,t){return 32-new Date(t,e,32).getDate()}},{key:"getTime",value:function(e,t){return(e=this.dateService.formatTime(e))+" - "+this.dateService.formatTime(t)}},{key:"getTeacher",value:function(e){return e}},{key:"getSubject",value:function(e){var t=this.course.subjects.find((function(t){return t._id===e}));return t?t.subject:"--"}},{key:"addSchedule",value:function(){this.router.navigate(["../add"],{relativeTo:this.route})}},{key:"addScheduleOfDay",value:function(e){this.scheduleService.setScheduleDay(e),this.router.navigate(["../add"],{relativeTo:this.route,queryParams:{mode:"date"}})}},{key:"editSchedule",value:function(e){this.scheduleService.setScheduleId(e._id),this.scheduleService.setScheduleData(e),this.router.navigate(["../edit"],{relativeTo:this.route,queryParams:{mode:"edit"}})}},{key:"deleteSchedule",value:function(e){var t=this;this.scheduleService.deleteSchedule(e).subscribe((function(n){var a=t.schedules.findIndex((function(t){return t._id===e}));a>=0&&(t.schedules.splice(a,1),t.showToastr("top-right","success","Schedule Deleted Successfully"))}),(function(e){t.showToastr("top-right","danger",e)}))}},{key:"getSchedule",value:function(){var e=this,t=this.dateService.convertToDateString(this.startDate),n=this.dateService.convertToDateString(this.dateService.addDaysInDate(this.startDate,this.noOfDays));this.loading=!0,this.scheduleService.getAllSchedules(this.branchId,this.category._id,this.course._id,this.batch._id,this.dateService.reverseDate(t),this.dateService.reverseDate(n)).subscribe((function(t){e.schedules=t,e.loading=!1}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))}},{key:"getFilteredSchedule",value:function(e){return e=this.dateService.convertToDateString(e),this.schedules.filter((function(t){return t.date===e}))}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}]),e}(),f.\u0275fac=function(e){return new(e||f)(d["\u0275\u0275directiveInject"](u.a),d["\u0275\u0275directiveInject"](s.a),d["\u0275\u0275directiveInject"](c.a),d["\u0275\u0275directiveInject"](o.a),d["\u0275\u0275directiveInject"](l.a),d["\u0275\u0275directiveInject"](r.c),d["\u0275\u0275directiveInject"](r.a),d["\u0275\u0275directiveInject"](a.Db))},f.\u0275cmp=d["\u0275\u0275defineComponent"]({type:f,selectors:[["ngx-manage-batch-schedule"]],decls:36,vars:3,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[1,"col-md-3","col-sm-4"],["nbButton","","fullWidth","","status","primary","size","small",3,"click"],[1,"col-md-3","pt-2"],[1,"btn-group"],["nbButton","","status","primary","size","small",3,"click"],["icon","arrow-ios-back-outline"],["icon","arrow-ios-forward-outline"],[1,"col-md-5","pt-2"],[1,"text-center"],[1,"col-md-4","pt-2"],["status","basic","multi",""],[4,"ngFor","ngForOf"],[1,"row","accordion-header-item"],[1,"col-12"],["nbButton","","status","primary","size","tiny",1,"float-right",3,"click"],["nbTooltip","Add Schedule","icon","plus-outline"],["class","table-responsive",4,"ngIf","ngIfElse"],["noSchedule",""],[1,"table-responsive"],[1,"table"],["status","basic","nbButton","","size","small",3,"click"],["status","danger","nbButton","","size","small",3,"click"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"nb-card"),d["\u0275\u0275elementStart"](1,"nb-card-header"),d["\u0275\u0275elementStart"](2,"div",0),d["\u0275\u0275elementStart"](3,"div",1),d["\u0275\u0275elementStart"](4,"h3"),d["\u0275\u0275text"](5," Schedule of "),d["\u0275\u0275elementStart"](6,"small"),d["\u0275\u0275text"](7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"div",2),d["\u0275\u0275elementStart"](9,"button",3),d["\u0275\u0275listener"]("click",(function(){return t.addSchedule()})),d["\u0275\u0275text"](10," Add Schedule "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"nb-card-body"),d["\u0275\u0275elementStart"](12,"nb-card"),d["\u0275\u0275elementStart"](13,"nb-card-header"),d["\u0275\u0275elementStart"](14,"div",0),d["\u0275\u0275elementStart"](15,"div",4),d["\u0275\u0275elementStart"](16,"div",5),d["\u0275\u0275elementStart"](17,"button",6),d["\u0275\u0275listener"]("click",(function(){return t.previous()})),d["\u0275\u0275element"](18,"nb-icon",7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](19,"button",6),d["\u0275\u0275listener"]("click",(function(){return t.goToToday()})),d["\u0275\u0275text"](20," Today "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](21,"button",6),d["\u0275\u0275listener"]("click",(function(){return t.next()})),d["\u0275\u0275element"](22,"nb-icon",8),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](23,"div",9),d["\u0275\u0275elementStart"](24,"h5",10),d["\u0275\u0275text"](25),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](26,"div",11),d["\u0275\u0275elementStart"](27,"div",5),d["\u0275\u0275elementStart"](28,"button",6),d["\u0275\u0275listener"]("click",(function(){return t.changeScheduleCalenderType(0)})),d["\u0275\u0275text"](29," Day "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](30,"button",6),d["\u0275\u0275listener"]("click",(function(){return t.changeScheduleCalenderType(1)})),d["\u0275\u0275text"](31," Week "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](32,"button",6),d["\u0275\u0275listener"]("click",(function(){return t.changeScheduleCalenderType(2)})),d["\u0275\u0275text"](33," Month "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](34,"nb-accordion",12),d["\u0275\u0275template"](35,S,12,3,"nb-accordion-item",13),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](7),d["\u0275\u0275textInterpolate"](t.batch.basicDetails.batchName),d["\u0275\u0275advance"](18),d["\u0275\u0275textInterpolate"](t.headerDate()),d["\u0275\u0275advance"](10),d["\u0275\u0275property"]("ngForOf",t.days))},directives:[a.x,a.z,a.u,a.w,a.M,a.g,i.m,a.i,a.j,a.Fb,a.h,i.n],styles:[".accordion-header-item[_ngcontent-%COMP%]{width:98%}"]}),f)}],p=((D=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:D}),D.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||D)},imports:[[r.g.forChild(g)],r.g]}),D);n.d(t,"ManageBatchScheduleModule",(function(){return b}));var y,b=((y=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:y}),y.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||y)},imports:[[i.c,p,a.A,a.Gb,a.O,a.v,a.Q,a.k,a.L]]}),y)}}]);
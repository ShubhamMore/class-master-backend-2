(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{"4lO2":function(e,t,n){"use strict";n.r(t);var i=n("aceb"),r=n("ofXK"),a=n("tyNb"),s=n("IAlr"),c=n("OeS+"),l=n("ZatZ"),d=n("EQut"),h=n("lst6"),o=n("fXoL");function u(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"tr"),o["\u0275\u0275elementStart"](1,"td"),o["\u0275\u0275text"](2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"td"),o["\u0275\u0275text"](4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"td"),o["\u0275\u0275text"](6),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"td"),o["\u0275\u0275text"](8),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](9,"td"),o["\u0275\u0275elementStart"](10,"button",22),o["\u0275\u0275listener"]("click",(function(){o["\u0275\u0275restoreView"](e);const n=t.$implicit;return o["\u0275\u0275nextContext"](3).editSchedule(n)})),o["\u0275\u0275text"](11," Edit "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](12,"td"),o["\u0275\u0275elementStart"](13,"button",23),o["\u0275\u0275listener"]("click",(function(){o["\u0275\u0275restoreView"](e);const n=t.$implicit;return o["\u0275\u0275nextContext"](3).deleteSchedule(n._id)})),o["\u0275\u0275text"](14," Delete "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=o["\u0275\u0275nextContext"](3);o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](n.getTime(e.startTime,e.endTime)),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](n.getSubject(e.subject)),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](e.topic),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](n.getTeacher(e.teacher))}}function m(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"div",20),o["\u0275\u0275elementStart"](1,"table",21),o["\u0275\u0275template"](2,u,15,4,"tr",13),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]().$implicit,t=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngForOf",t.getFilteredSchedule(e))}}function S(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"p",10),o["\u0275\u0275text"](1,"No Schedule"),o["\u0275\u0275elementEnd"]())}function D(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"nb-accordion-item"),o["\u0275\u0275elementStart"](1,"nb-accordion-item-header"),o["\u0275\u0275elementStart"](2,"div",14),o["\u0275\u0275elementStart"](3,"div",15),o["\u0275\u0275elementStart"](4,"button",16),o["\u0275\u0275listener"]("click",(function(){o["\u0275\u0275restoreView"](e);const n=t.$implicit;return o["\u0275\u0275nextContext"]().addScheduleOfDay(n)})),o["\u0275\u0275element"](5,"nb-icon",17),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"span"),o["\u0275\u0275text"](7),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](8,"nb-accordion-item-body"),o["\u0275\u0275template"](9,m,3,1,"div",18),o["\u0275\u0275template"](10,S,2,0,"ng-template",null,19,o["\u0275\u0275templateRefExtractor"]),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=o["\u0275\u0275reference"](11),i=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](7),o["\u0275\u0275textInterpolate"](e),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",i.getFilteredSchedule(e).length>0)("ngIfElse",n)}}const g=[{path:"",component:(()=>{class e{constructor(e,t,n,i,r,a,s,c){this.branchService=e,this.scheduleService=t,this.courseService=n,this.batchService=i,this.dateService=r,this.router=a,this.route=s,this.toastrService=c}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.branchService.getCategoryData().subscribe(e=>{this.category=e}),this.courseService.getCourseData().subscribe(e=>{this.course=e}),this.batchService.getBatchData().subscribe(e=>{this.batch=e}),this.days=[],this.schedules=[],this.setCurDate(this.dateService.getDate()),this.changeScheduleCalenderType(0),this.getSchedule()):this.router.navigate(["../"],{relativeTo:this.route})}setCurDate(e){this.curDate=e,this.curMonth=this.curDate.getMonth(),this.curYear=this.curDate.getFullYear()}setStartDate(){const e=new Date(this.curDate);0===this.scheduleCalenderType?this.startDate=new Date(e):1===this.scheduleCalenderType?(e.setDate(e.getDate()-e.getDay()),this.startDate=new Date(e)):(e.setDate(1),this.startDate=new Date(e)),this.calcNoOfDays(),this.getSchedule()}calcNoOfDays(){let e;e=0===this.scheduleCalenderType?1:1===this.scheduleCalenderType?7:this.daysInMonth(this.curMonth,this.curYear),this.noOfDays=e,this.days=[];for(let t=0;t<e;t++){const e=this.dateService.millisecondsToDate(this.dateService.dateToMilliseconds(this.startDate)+864e5*t);this.days.push(e.toString().substring(0,15))}}headerDate(){let e;if(0===this.scheduleCalenderType)e=this.curDate.toString().substring(4,15);else if(1===this.scheduleCalenderType){const t=this.curDate;t.setDate(t.getDate()-t.getDay());let n=new Date(t),i=n.toString().substring(4,10);n.getDate()>25&&11===n.getMonth()&&(i=i+", "+n.getFullYear()),t.setDate(t.getDate()+6),n=new Date(t);let r=n.toString().substring(4,10);i.split(",")[1]&&(r=r+", "+n.getFullYear()),e=i+" - "+r}else e=this.dateService.getMonth(this.curMonth)+" "+this.curYear;return e}goToToday(){this.setCurDate(this.dateService.getDate()),this.setStartDate()}nextMonth(){this.curYear=11===this.curMonth?this.curYear+1:this.curYear,this.curMonth=(this.curMonth+1)%12,this.curDate=new Date(this.curYear,this.curMonth,1)}previousMonth(){this.curYear=0===this.curMonth?this.curYear-1:this.curYear,this.curMonth=0===this.curMonth?11:this.curMonth-1,this.curDate=new Date(this.curYear,this.curMonth,1)}nextWeek(){const e=new Date(this.curDate).getDate()+7,t=new Date(this.curDate).setDate(e);this.setCurDate(new Date(t))}previousWeek(){const e=new Date(this.curDate).getDate()-7,t=new Date(this.curDate).setDate(e);this.setCurDate(new Date(t))}nextDay(){const e=new Date(this.curDate).getDate()+1,t=new Date(this.curDate).setDate(e);this.setCurDate(new Date(t))}previousDay(){const e=new Date(this.curDate).getDate()-1,t=new Date(this.curDate).setDate(e);this.setCurDate(new Date(t))}next(){0===this.scheduleCalenderType?this.nextDay():1===this.scheduleCalenderType?this.nextWeek():this.nextMonth(),this.setStartDate()}previous(){0===this.scheduleCalenderType?this.previousDay():1===this.scheduleCalenderType?this.previousWeek():this.previousMonth(),this.setStartDate()}changeScheduleCalenderType(e){this.scheduleCalenderType=e,this.setStartDate()}daysInMonth(e,t){return 32-new Date(t,e,32).getDate()}getTime(e,t){return(e=this.dateService.formatTime(e))+" - "+this.dateService.formatTime(t)}getTeacher(e){return e}getSubject(e){const t=this.course.subjects.find(t=>t._id===e);return t?t.subject:"--"}addSchedule(){this.router.navigate(["../add"],{relativeTo:this.route})}addScheduleOfDay(e){this.scheduleService.setScheduleDay(e),this.router.navigate(["../add"],{relativeTo:this.route,queryParams:{mode:"date"}})}editSchedule(e){this.scheduleService.setScheduleId(e._id),this.scheduleService.setScheduleData(e),this.router.navigate(["../edit"],{relativeTo:this.route,queryParams:{mode:"edit"}})}deleteSchedule(e){this.scheduleService.deleteSchedule(e).subscribe(t=>{const n=this.schedules.findIndex(t=>t._id===e);n>=0&&(this.schedules.splice(n,1),this.showToastr("top-right","success","Schedule Deleted Successfully"))},e=>{this.showToastr("top-right","danger",e)})}getSchedule(){const e=this.dateService.convertToDateString(this.startDate),t=this.dateService.convertToDateString(this.dateService.addDaysInDate(this.startDate,this.noOfDays));this.loading=!0,this.scheduleService.getAllSchedules(this.branchId,this.category._id,this.course._id,this.batch._id,this.dateService.reverseDate(e),this.dateService.reverseDate(t)).subscribe(e=>{this.schedules=e,this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.loading=!1})}getFilteredSchedule(e){return e=this.dateService.convertToDateString(e),this.schedules.filter(t=>t.date===e)}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](d.a),o["\u0275\u0275directiveInject"](c.a),o["\u0275\u0275directiveInject"](s.a),o["\u0275\u0275directiveInject"](h.a),o["\u0275\u0275directiveInject"](l.a),o["\u0275\u0275directiveInject"](a.c),o["\u0275\u0275directiveInject"](a.a),o["\u0275\u0275directiveInject"](i.Db))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-manage-batch-schedule"]],decls:36,vars:3,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[1,"col-md-3","col-sm-4"],["nbButton","","fullWidth","","status","primary","size","small",3,"click"],[1,"col-md-3","pt-2"],[1,"btn-group"],["nbButton","","status","primary","size","small",3,"click"],["icon","arrow-ios-back-outline"],["icon","arrow-ios-forward-outline"],[1,"col-md-5","pt-2"],[1,"text-center"],[1,"col-md-4","pt-2"],["status","basic","multi",""],[4,"ngFor","ngForOf"],[1,"row","accordion-header-item"],[1,"col-12"],["nbButton","","status","primary","size","tiny",1,"float-right",3,"click"],["nbTooltip","Add Schedule","icon","plus-outline"],["class","table-responsive",4,"ngIf","ngIfElse"],["noSchedule",""],[1,"table-responsive"],[1,"table"],["status","basic","nbButton","","size","small",3,"click"],["status","danger","nbButton","","size","small",3,"click"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"nb-card"),o["\u0275\u0275elementStart"](1,"nb-card-header"),o["\u0275\u0275elementStart"](2,"div",0),o["\u0275\u0275elementStart"](3,"div",1),o["\u0275\u0275elementStart"](4,"h3"),o["\u0275\u0275text"](5," Schedule of "),o["\u0275\u0275elementStart"](6,"small"),o["\u0275\u0275text"](7),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](8,"div",2),o["\u0275\u0275elementStart"](9,"button",3),o["\u0275\u0275listener"]("click",(function(){return t.addSchedule()})),o["\u0275\u0275text"](10," Add Schedule "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](11,"nb-card-body"),o["\u0275\u0275elementStart"](12,"nb-card"),o["\u0275\u0275elementStart"](13,"nb-card-header"),o["\u0275\u0275elementStart"](14,"div",0),o["\u0275\u0275elementStart"](15,"div",4),o["\u0275\u0275elementStart"](16,"div",5),o["\u0275\u0275elementStart"](17,"button",6),o["\u0275\u0275listener"]("click",(function(){return t.previous()})),o["\u0275\u0275element"](18,"nb-icon",7),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](19,"button",6),o["\u0275\u0275listener"]("click",(function(){return t.goToToday()})),o["\u0275\u0275text"](20," Today "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](21,"button",6),o["\u0275\u0275listener"]("click",(function(){return t.next()})),o["\u0275\u0275element"](22,"nb-icon",8),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](23,"div",9),o["\u0275\u0275elementStart"](24,"h5",10),o["\u0275\u0275text"](25),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](26,"div",11),o["\u0275\u0275elementStart"](27,"div",5),o["\u0275\u0275elementStart"](28,"button",6),o["\u0275\u0275listener"]("click",(function(){return t.changeScheduleCalenderType(0)})),o["\u0275\u0275text"](29," Day "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](30,"button",6),o["\u0275\u0275listener"]("click",(function(){return t.changeScheduleCalenderType(1)})),o["\u0275\u0275text"](31," Week "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](32,"button",6),o["\u0275\u0275listener"]("click",(function(){return t.changeScheduleCalenderType(2)})),o["\u0275\u0275text"](33," Month "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](34,"nb-accordion",12),o["\u0275\u0275template"](35,D,12,3,"nb-accordion-item",13),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](7),o["\u0275\u0275textInterpolate"](t.batch.basicDetails.batchName),o["\u0275\u0275advance"](18),o["\u0275\u0275textInterpolate"](t.headerDate()),o["\u0275\u0275advance"](10),o["\u0275\u0275property"]("ngForOf",t.days))},directives:[i.x,i.z,i.u,i.w,i.M,i.g,r.m,i.i,i.j,i.Fb,i.h,r.n],styles:[".accordion-header-item[_ngcontent-%COMP%]{width:98%}"]}),e})()}];let v=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.g.forChild(g)],a.g]}),e})();n.d(t,"ManageBatchScheduleModule",(function(){return p}));let p=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,v,i.A,i.Gb,i.O,i.v,i.Q,i.k,i.L]]}),e})()}}]);
function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/ehT":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("fCOA"),a=n("lJxs"),u=n("JIr8"),i=n("z6cu"),c=n("fXoL"),o=function(){var t=function(){function t(e){_classCallCheck(this,t),this.httpService=e}return _createClass(t,[{key:"setBranchStudentData",value:function(t){this.branchStudent=t}},{key:"getBranchStudentData",value:function(){return this.branchStudent}},{key:"deleteBranchStudentData",value:function(){this.branchStudent=null}},{key:"setBranchStudentId",value:function(t){this.branchStudentId=t}},{key:"getBranchStudentId",value:function(){return this.branchStudentId}},{key:"deleteBranchStudentId",value:function(){this.branchStudentId=null}},{key:"getBranchStudents",value:function(t,e,n){return this.httpService.httpPost({api:"getBranchStudents",data:{branch:t,category:e,type:n}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"getBranchStudent",value:function(t,e){return this.httpService.httpPost({api:"addBranchStudent",data:{id:t,student:e}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"newBranchStudent",value:function(t){return this.httpService.httpPost({api:"newBranchStudent",data:t}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"getBranchStudentForEditing",value:function(t,e){return this.httpService.httpPost({api:"getBranchStudentForEditing",data:{id:t,student:e}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"editBranchStudent",value:function(t){return this.httpService.httpPost({api:"updateBranchStudent",data:t}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"changeBranchStudentStatus",value:function(t,e){return this.httpService.httpPost({api:"changeBranchStudentStatus",data:{id:t,status:e}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"deleteBranchStudent",value:function(t){return this.httpService.httpPost({api:"deleteBranchStudent",data:{id:t}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.ac(r.a))},t.\u0275prov=c.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"3b5Z":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("fXoL"),a=function(){var t=function(){function t(){_classCallCheck(this,t),this.userRoles=["institute","employee","student"],this.employeeRoles=["manager","teacher","councillor"]}return _createClass(t,[{key:"getUserRoles",value:function(){return this.userRoles}},{key:"getEmployeeRoles",value:function(){return this.employeeRoles}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"5V5q":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("fCOA"),a=n("lJxs"),u=n("JIr8"),i=n("z6cu"),c=n("fXoL"),o=function(){var t=function(){function t(e){_classCallCheck(this,t),this.httpService=e,this.discountTypes=["percentage","amount"]}return _createClass(t,[{key:"getDiscountTypes",value:function(){return this.discountTypes}},{key:"setDiscountAndOfferId",value:function(t){this.discountAndOfferId=t}},{key:"getDiscountAndOfferId",value:function(){return this.discountAndOfferId}},{key:"deleteDiscountAndOfferId",value:function(){this.discountAndOfferId=null}},{key:"setDiscountAndOfferData",value:function(t){this.discountAndOffer=t}},{key:"getDiscountAndOfferData",value:function(){return this.discountAndOffer}},{key:"deleteDiscountAndOfferData",value:function(){this.discountAndOffer=null}},{key:"getDiscountAndOffers",value:function(t){return this.httpService.httpPost({api:"getDiscountAndOffers",data:{branch:t}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"getDiscountAndOffersForStudent",value:function(t){return this.httpService.httpPost({api:"getDiscountAndOffersForStudent",data:{branch:t}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"getDiscountAndOffer",value:function(t){return this.httpService.httpPost({api:"getDiscountAndOffer",data:{id:t}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"getDiscountAndOfferForEditing",value:function(t){return this.httpService.httpPost({api:"getDiscountAndOfferForEditing",data:{id:t}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"CheckDiscountAndOffer",value:function(t,e){return this.httpService.httpPost({api:"CheckDiscountAndOffer",data:{branch:t,code:e}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"addDiscountAndOffer",value:function(t){return this.httpService.httpPost({api:"newDiscountAndOffer",data:t}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"editDiscountAndOffer",value:function(t){return this.httpService.httpPost({api:"updateDiscountAndOffer",data:t}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"deleteDiscountAndOffer",value:function(t){return this.httpService.httpPost({api:"deleteDiscountAndOffer",data:{id:t}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"changeDiscountAndOfferStatus",value:function(t,e){return this.httpService.httpPost({api:"changeDiscountAndOfferStatus",data:{id:t,status:e}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.ac(r.a))},t.\u0275prov=c.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},IAlr:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("fCOA"),a=n("lJxs"),u=n("JIr8"),i=n("z6cu"),c=n("fXoL"),o=function(){var t=function(){function t(e){_classCallCheck(this,t),this.httpService=e}return _createClass(t,[{key:"setCourseId",value:function(t){this.courseId=t}},{key:"getCourseId",value:function(){return this.courseId}},{key:"deleteCourseId",value:function(){this.courseId=null}},{key:"setCourseData",value:function(t){this.course=t}},{key:"getCourseData",value:function(){return this.course}},{key:"deleteCourseData",value:function(){this.course=null}},{key:"getCourses",value:function(t,e){return this.httpService.httpPost({api:"getCourses",data:{branch:t,category:e}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"getCourse",value:function(t){return this.httpService.httpPost({api:"getCourse",data:{id:t}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"getCourseForEditing",value:function(t){return this.httpService.httpPost({api:"getCourseForEditing",data:{id:t}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"addCourse",value:function(t){return this.httpService.httpPost({api:"newCourse",data:t}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"editCourse",value:function(t){return this.httpService.httpPost({api:"updateCourse",data:t}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"deleteCourse",value:function(t){}},{key:"changeCourseStatus",value:function(t,e){return this.httpService.httpPost({api:"changeCourseStatus",data:{id:t,status:e}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.ac(r.a))},t.\u0275prov=c.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},JmRu:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("fCOA"),a=n("lJxs"),u=n("JIr8"),i=n("z6cu"),c=n("fXoL"),o=function(){var t=function(){function t(e){_classCallCheck(this,t),this.httpService=e}return _createClass(t,[{key:"setStudentData",value:function(t){this.student=t}},{key:"getStudentData",value:function(){return this.student}},{key:"deleteStudentData",value:function(){this.student=null}},{key:"setStudentId",value:function(t){this.studentId=t}},{key:"getStudentId",value:function(){return this.studentId}},{key:"deleteStudentId",value:function(){this.studentId=null}},{key:"addStudent",value:function(t,e){return this.httpService.httpPost({api:"newStudent",data:{student:t,branchStudent:e}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"getStudents",value:function(){return this.httpService.httpPost({api:"getStudents",data:{}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"getStudent",value:function(t){return this.httpService.httpPost({api:"getStudent",data:{id:t}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"searchStudent",value:function(t){return this.httpService.httpPost({api:"searchStudent",data:{studentId:t}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"getStudentForEditing",value:function(t){return this.httpService.httpPost({api:"getStudentForEditing",data:{id:t}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"changeStudentStatus",value:function(t,e){return this.httpService.httpPost({api:"changeStudentStatus",data:{id:t,status:e}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"editStudent",value:function(t){return this.httpService.httpPost({api:"updateStudent",data:t}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"deleteStudent",value:function(t){return this.httpService.httpPost({api:"deleteStudent",data:{id:t}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.ac(r.a))},t.\u0275prov=c.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"Pj/w":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("fCOA"),a=n("lJxs"),u=n("JIr8"),i=n("z6cu"),c=n("fXoL"),o=function(){var t=function(){function t(e){_classCallCheck(this,t),this.httpService=e}return _createClass(t,[{key:"setBranchEmployeeData",value:function(t){this.branchEmployee=t}},{key:"getBranchEmployeeData",value:function(){return this.branchEmployee}},{key:"deleteBranchEmployeeData",value:function(){this.branchEmployee=null}},{key:"setBranchEmployeeId",value:function(t){this.branchEmployeeId=t}},{key:"getBranchEmployeeId",value:function(){return this.branchEmployeeId}},{key:"deleteBranchEmployeeId",value:function(){this.branchEmployeeId=null}},{key:"getBranchEmployees",value:function(t,e){return this.httpService.httpPost({api:"getBranchEmployees",data:{branch:t,type:e}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"getBranchEmployeesForBatch",value:function(t,e){return this.httpService.httpPost({api:"getBranchEmployeesForBatch",data:{branch:t,role:e}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"getBranchEmployee",value:function(t,e){return this.httpService.httpPost({api:"addBranchEmployee",data:{id:t,employee:e}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"getBranchEmployeeForSalary",value:function(t,e){return this.httpService.httpPost({api:"getBranchEmployeeForSalary",data:{id:t,employee:e}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"newBranchEmployee",value:function(t){return this.httpService.httpPost({api:"newBranchEmployee",data:t}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"getBranchEmployeeForEditing",value:function(t,e){return this.httpService.httpPost({api:"getBranchEmployeeForEditing",data:{id:t,employee:e}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"editBranchEmployee",value:function(t){return this.httpService.httpPost({api:"updateBranchEmployee",data:t}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"changeBranchEmployeeStatus",value:function(t,e){return this.httpService.httpPost({api:"changeBranchEmployeeStatus",data:{id:t,status:e}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"deleteBranchEmployee",value:function(t){return this.httpService.httpPost({api:"deleteBranchEmployee",data:{id:t}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.ac(r.a))},t.\u0275prov=c.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},ZatZ:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("fXoL"),a=function(){var t=function(){function t(){_classCallCheck(this,t),this.date=new Date,this.dateString=this.convertToDateString(this.date),this.dateInMilliseconds=this.date.getMilliseconds(),this.dateTimeString=this.convertToDateTimeString(this.date),this.dateTimeISOString=this.convertToISOString(this.date)}return _createClass(t,[{key:"getDate",value:function(){return this.date}},{key:"getDateString",value:function(){return this.dateString}},{key:"getFormattedDate",value:function(){return this.formatDate(this.dateString)}},{key:"getDateInMilliseconds",value:function(){return this.dateInMilliseconds}},{key:"getDateTimeString",value:function(){return this.dateTimeString}},{key:"getDateTimeISOString",value:function(){return this.dateTimeISOString}},{key:"dateToMilliseconds",value:function(t){return new Date(t).getMilliseconds()}},{key:"millisecondsToDate",value:function(t){return new Date(t)}},{key:"millisecondsToDateString",value:function(t){return this.convertToDateString(new Date(t))}},{key:"convertToDate",value:function(t){return new Date(t)}},{key:"convertToDateString",value:function(t){return t?(t=new Date(t)).getFullYear()+"-"+(t.getMonth()+1).toString().padStart(2,"0")+"-"+t.getDate().toString().padStart(2,"0"):"--"}},{key:"convertToISOString",value:function(t){return t?new Date(t).toISOString():"--"}},{key:"convertToDateTimeString",value:function(t){return t?(t=new Date(t),this.convertToDateString(t)+"T"+t.getHours().toString().padStart(2,"0")+":"+t.getMinutes().toString().padStart(2,"0")):"--"}},{key:"formatDate",value:function(t){return t?t.split("-").reverse().join("-"):"--"}},{key:"formatTime",value:function(t){if(!t)return"--";var e=+(t=t.split(":"))[0],n=t[1],r=e>=12?"PM":"AM";return 0===e?e=12:e>=12&&(e-=12),e.toString().padStart(2,"0")+":"+n+" "+r}},{key:"formatDateTime",value:function(t){return t?(t=new Date(t).toISOString().split("T"),this.formatDate(t[0])+" "+this.formatTime(t[1])):"--"}},{key:"compareDates",value:function(t,e){return this.convertToDate(t)<=this.convertToDate(e)}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},cxbk:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={production:!0,backend:"",encKey:"b417cf7714f5c803ac31ea7ea4ee3a11",razorpayKeyId:"rzp_test_XYQP7wYaKsZjED"}},fvxu:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("fCOA"),a=n("lJxs"),u=n("JIr8"),i=n("z6cu"),c=n("fXoL"),o=function(){var t=function(){function t(e){_classCallCheck(this,t),this.httpService=e}return _createClass(t,[{key:"setUserProfile",value:function(t){this.userProfile=t}},{key:"getUserProfile",value:function(){return this.userProfile}},{key:"checkUser",value:function(t){return this.httpService.httpPost({api:"checkUser",data:{email:t}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"changePassword",value:function(t){return this.httpService.httpPost({api:"changePassword",data:t}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"saveProfile",value:function(t){return this.httpService.httpPost({api:"saveProfile",data:t}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"getProfile",value:function(){return this.httpService.httpPost({api:"getProfile",data:{}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.ac(r.a))},t.\u0275prov=c.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},lst6:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("fCOA"),a=n("lJxs"),u=n("JIr8"),i=n("z6cu"),c=n("fXoL"),o=function(){var t=function(){function t(e){_classCallCheck(this,t),this.httpService=e}return _createClass(t,[{key:"setBatchId",value:function(t){this.batchId=t}},{key:"getBatchId",value:function(){return this.batchId}},{key:"deleteBatchId",value:function(){this.batchId=null}},{key:"setBatchData",value:function(t){this.batch=t}},{key:"getBatchData",value:function(){return this.batch}},{key:"deleteBatchData",value:function(){this.batch=null}},{key:"getBatches",value:function(t,e,n){return this.httpService.httpPost({api:"getBatches",data:{branch:t,category:e,course:n}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"getBatch",value:function(t){return this.httpService.httpPost({api:"getBatch",data:{id:t}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"getBatchForEditing",value:function(t){return this.httpService.httpPost({api:"getBatchForEditing",data:{id:t}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"addBatch",value:function(t){return this.httpService.httpPost({api:"newBatch",data:t}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"editBatch",value:function(t){return this.httpService.httpPost({api:"updateBatch",data:t}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"deleteBatch",value:function(t){return this.httpService.httpPost({api:"deleteBatch",data:{id:t}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"changeBatchStatus",value:function(t,e){return this.httpService.httpPost({api:"changeBatchStatus",data:{id:t,status:e}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.ac(r.a))},t.\u0275prov=c.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},pjuo:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("fCOA"),a=n("lJxs"),u=n("JIr8"),i=n("z6cu"),c=n("fXoL"),o=function(){var t=function(){function t(e){_classCallCheck(this,t),this.httpService=e}return _createClass(t,[{key:"setEmployeeData",value:function(t){this.employee=t}},{key:"getEmployeeData",value:function(){return this.employee}},{key:"deleteEmployeeData",value:function(){this.employee=null}},{key:"setEmployeeId",value:function(t){this.employeeId=t}},{key:"getEmployeeId",value:function(){return this.employeeId}},{key:"deleteEmployeeId",value:function(){this.employeeId=null}},{key:"addEmployee",value:function(t,e){return this.httpService.httpPost({api:"newEmployee",data:{employee:t,branchEmployee:e}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"getEmployees",value:function(){return this.httpService.httpPost({api:"getEmployees",data:{}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"getEmployee",value:function(t){return this.httpService.httpPost({api:"getEmployee",data:{id:t}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"searchEmployee",value:function(t){return this.httpService.httpPost({api:"searchEmployee",data:{employeeId:t}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"getEmployeeForEditing",value:function(t){return this.httpService.httpPost({api:"getEmployeeForEditing",data:{id:t}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"changeEmployeeStatus",value:function(t,e){return this.httpService.httpPost({api:"changeEmployeeStatus",data:{id:t,status:e}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"editEmployee",value:function(t){return this.httpService.httpPost({api:"updateEmployee",data:t}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"deleteEmployee",value:function(t){return this.httpService.httpPost({api:"deleteEmployee",data:{id:t}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.ac(r.a))},t.\u0275prov=c.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},s5zK:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("fCOA"),a=n("lJxs"),u=n("JIr8"),i=n("z6cu"),c=n("fXoL"),o=function(){var t=function(){function t(e){_classCallCheck(this,t),this.httpService=e}return _createClass(t,[{key:"getPaymentDetails",value:function(){return this.paymentDetails}},{key:"setPaymentDetails",value:function(t,e){this.paymentDetails={planType:t,amount:e}}},{key:"deletePaymentDetails",value:function(){this.paymentDetails=null}},{key:"deleteOrder",value:function(t){return this.httpService.httpPost({api:"deleteOrder",data:{id:t}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"generateOrder",value:function(t){return this.httpService.httpPost({api:"generateOrder",data:t}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}},{key:"verifyPayment",value:function(t,e){return this.httpService.httpPost({api:"verifyPayment",data:{payment:t,receipt:e}}).pipe(Object(a.a)((function(t){return t})),Object(u.a)((function(t){return Object(i.a)(t)})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.ac(r.a))},t.\u0275prov=c.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);
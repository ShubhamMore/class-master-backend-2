(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,t,r){e.exports=r("zUnb")},zUnb:function(e,t,r){"use strict";r.r(t);var o=r("fXoL");const n="http://35.154.130.138:3100";var i=r("jhN1"),s=r("tk/3"),a=r("tyNb"),c=r("ofXK"),l=r("3hj0"),u=r("lJxs"),b=r("JIr8"),p=r("z6cu");let h=(()=>{class e{constructor(e){this.http=e}httpGet(e){return this.http.get(n+e.api).pipe(Object(u.a)(e=>e),Object(b.a)(e=>{let t="SOMETHING BAD HAPPENED";return e.error&&(t="object"==typeof e.error?"Can't Reach Server.., Please Try Again":e.error),Object(p.a)(t)}))}httpPost(e){return this.http.post(n+e.api,e.data).pipe(Object(u.a)(e=>e),Object(b.a)(e=>{let t="SOMETHING BAD HAPPENED";return e.error&&(t="object"==typeof e.error?"Can't Reach Server.., Please Try Again":e.error),Object(p.a)(t)}))}httpPatch(e){return this.http.patch(n+e.api,e.data).pipe(Object(u.a)(e=>e),Object(b.a)(e=>{let t="SOMETHING BAD HAPPENED";return e.error&&(t="object"==typeof e.error?"Can't Reach Server.., Please Try Again":e.error),Object(p.a)(t)}))}httpPut(e){return this.http.put(n+e.api,e.data).pipe(Object(u.a)(e=>e),Object(b.a)(e=>{let t="SOMETHING BAD HAPPENED";return e.error&&(t="object"==typeof e.error?"Can't Reach Server.., Please Try Again":e.error),Object(p.a)(t)}))}httpDelete(e){return this.http.delete(n+e.api,e.data).pipe(Object(u.a)(e=>e),Object(b.a)(e=>{let t="SOMETHING BAD HAPPENED";return e.error&&(t="object"==typeof e.error?"Can't Reach Server.., Please Try Again":e.error),Object(p.a)(t)}))}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(s.a))},e.\u0275prov=o.zb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function g(e,t){if(1&e){const e=o.Hb();o.Gb(0,"main"),o.Gb(1,"h1"),o.Wb(2,"Class Master Online Zoom Meeting"),o.Fb(),o.Gb(3,"button",3),o.Lb("click",(function(){return o.Rb(e),o.Nb(2).getSignature()})),o.Wb(4,"Join Meeting"),o.Fb(),o.Fb()}}function d(e,t){if(1&e&&(o.Gb(0,"div"),o.Ub(1,g,5,0,"main",0),o.Fb()),2&e){const e=o.Nb(),t=o.Qb(4);o.ub(1),o.Ob("ngIf",!e.error)("ngIfElse",t)}}function f(e,t){1&e&&(o.Gb(0,"h2",4),o.Wb(1,"Loading..."),o.Fb())}function m(e,t){if(1&e&&(o.Gb(0,"h2",5),o.Wb(1),o.Fb()),2&e){const e=o.Nb();o.ub(1),o.Xb(e.error)}}l.ZoomMtg.preLoadWasm(),l.ZoomMtg.prepareJssdk();let O=(()=>{class e{constructor(e,t,r,o){this.httpClient=e,this.route=r,this.httpService=o}ngOnInit(){this.loading=!0,this.route.queryParams.subscribe(e=>{this.lecture=e.lecture,this.user=e.user,this.error=this.lecture?this.user?null:"Invalid User":"Invalid Lecture",this.apiKey="-e4wJMiURO-i3gr436TgsQ",this.leaveUrl=`http://35.154.130.138:3100/online-meeting/#/?lecture=${this.lecture}&user=${this.user}`,console.log(this.leaveUrl),this.loading=!1})}getSignature(){this.loading=!0,this.httpService.httpPost({api:"/getZoomMeetingSignature",data:{lecture:this.lecture,user:this.user}}).subscribe(e=>{console.log(e),e.meetingNumber?this.startMeeting(e):this.error="Invalid Meeting Id",this.loading=!1},e=>{this.error=e,this.loading=!1})}startMeeting(e){document.getElementById("zmmtg-root").style.display="block",l.ZoomMtg.init({leaveUrl:this.leaveUrl,isSupportAV:!0,success:t=>{this.error=null,l.ZoomMtg.join({signature:e.signature,meetingNumber:+e.meetingNumber,userName:e.userName,apiKey:this.apiKey,userEmail:e.userEmail,passWord:e.password,success:e=>{console.log(e)},error:e=>{console.log(e)}})},error:e=>{console.log(e)}})}}return e.\u0275fac=function(t){return new(t||e)(o.Db(s.a),o.Db(c.c),o.Db(a.a),o.Db(h))},e.\u0275cmp=o.xb({type:e,selectors:[["app-root"]],decls:5,vars:2,consts:[[4,"ngIf","ngIfElse"],["loadingData",""],["showError",""],[3,"click"],[1,"pt-5","pb-5","text-center"],[1,"pt-5","pb-5","text-center","text-danger"]],template:function(e,t){if(1&e&&(o.Ub(0,d,2,2,"div",0),o.Ub(1,f,2,0,"ng-template",null,1,o.Vb),o.Ub(3,m,2,1,"ng-template",null,2,o.Vb)),2&e){const e=o.Qb(2);o.Ob("ngIf",!t.loading)("ngIfElse",e)}},directives:[c.h],styles:["main[_ngcontent-%COMP%]{width:70%;margin:auto;text-align:center}button[_ngcontent-%COMP%]{margin-top:20px;background-color:#2d8cff;color:#fff;text-decoration:none;padding:10px 40px;display:inline-block;border-radius:10px}button[_ngcontent-%COMP%]:hover{background-color:#2681f2}"]}),e})();const v=[];let P=(()=>{class e{}return e.\u0275mod=o.Bb({type:e,bootstrap:[O]}),e.\u0275inj=o.Ab({factory:function(t){return new(t||e)},providers:[],imports:[[i.a,s.b,a.b.forRoot(v,{useHash:!0,relativeLinkResolution:"corrected"})]]}),e})();Object(o.R)(),i.b().bootstrapModule(P).catch(e=>console.error(e))},zn8P:function(e,t){function r(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id="zn8P"}},[[0,0,4]]]);
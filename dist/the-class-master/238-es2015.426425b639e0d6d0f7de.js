(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{v5RP:function(e,t,n){"use strict";n.r(t),n.d(t,"ViewCourseMaterialModule",(function(){return h}));var r=n("IkSl"),i=n("aceb"),a=n("ofXK"),o=n("tyNb"),l=n("fXoL"),c=n("FYcy");function s(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"h3"),l["\u0275\u0275text"](1),l["\u0275\u0275pipe"](2,"uppercase"),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"](2);l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](2,1,e.courseMaterial.title))}}function d(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div"),l["\u0275\u0275element"](1,"pdf-viewer",6),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"](2);l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("src",e.courseMaterial.secureUrl)("render-text",!1)("original-size",!0)}}function u(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",7),l["\u0275\u0275element"](1,"img",8),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"](2);l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("src",e.courseMaterial.secureUrl,l["\u0275\u0275sanitizeUrl"])("alt",e.courseMaterial.title)}}function p(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",7),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"div",9),l["\u0275\u0275elementStart"](3,"video",10,11),l["\u0275\u0275element"](5,"source",12),l["\u0275\u0275text"](6," This browser/App does not support the video. "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"](2);l["\u0275\u0275advance"](5),l["\u0275\u0275property"]("src",e.courseMaterial.secureUrl,l["\u0275\u0275sanitizeUrl"])}}function m(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"nb-card"),l["\u0275\u0275elementStart"](1,"nb-card-header"),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"div",2),l["\u0275\u0275elementStart"](4,"button",3),l["\u0275\u0275listener"]("click",(function(){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().back()})),l["\u0275\u0275text"](5," Back "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](6,s,3,3,"h3",0),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"nb-card-body"),l["\u0275\u0275elementStart"](8,"div",1),l["\u0275\u0275elementStart"](9,"div",4),l["\u0275\u0275template"](10,d,2,3,"div",0),l["\u0275\u0275template"](11,u,2,2,"div",5),l["\u0275\u0275template"](12,p,7,1,"div",5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}if(2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](6),l["\u0275\u0275property"]("ngIf",e.courseMaterial.title),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngIf","PDF"===e.courseMaterial.fileType),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf","IMAGE"===e.courseMaterial.fileType),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf","MP4"===e.courseMaterial.fileType)}}const v=[{path:"",component:(()=>{class e{constructor(e,t,n,r){this.courseMaterialService=e,this.toastrService=t,this.router=n,this.route=r}ngOnInit(){if(this.loading=!0,this.courseMaterialId=this.courseMaterialService.getCourseMaterialId(),!this.courseMaterialId)return this.showToastr("top-right","danger","Invalid Course Material Id"),void this.back();this.courseMaterialService.getCourseMaterialData().subscribe(e=>{e?(this.courseMaterial=e,this.loading=!1):this.back()})}back(){this.loading=!0,this.router.navigate(["../"],{relativeTo:this.route})}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}ngOnDestroy(){this.courseMaterialService.deleteCourseMaterialId(),this.courseMaterialService.deleteCourseMaterialData()}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](c.a),l["\u0275\u0275directiveInject"](i.Gb),l["\u0275\u0275directiveInject"](o.c),l["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-view-course-material"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"row"],[1,"col-md-12"],["nbButton","","size","small","status","warning",1,"float-right",3,"click"],[1,"col-12"],["class","text-center",4,"ngIf"],["loading","lazy",3,"src","render-text","original-size"],[1,"text-center"],["loading","lazy","width","80%","height","auto",3,"src","alt"],[1,"col-md-10","col-12","mx-auto"],["disablePictureInPicture","","id","video","name","video","oncontextmenu","return false;","width","100%","loading","lazy","controls","","controlsList","nodownload",1,"video"],["videoPlayer",""],["type","video/mp4",3,"src"]],template:function(e,t){1&e&&l["\u0275\u0275template"](0,m,13,4,"nb-card",0),2&e&&l["\u0275\u0275property"]("ngIf",!t.loading)},directives:[a.n,i.y,i.A,i.v,i.x,r.a],pipes:[a.w],styles:[""]}),e})()},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let f=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.g.forChild(v)],o.g]}),e})(),h=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,f,i.B,i.w,r.b]]}),e})()}}]);
//# sourceMappingURL=238-es2015.426425b639e0d6d0f7de.js.map
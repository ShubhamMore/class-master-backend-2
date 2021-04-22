!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{"5S0K":function(n,r,i){"use strict";i.r(r),i.d(r,"ViewStudyMaterialModule",(function(){return b}));var a=i("IkSl"),l=i("aceb"),o=i("ofXK"),c=i("fXoL"),d=i("ziii"),u=i("tyNb");function s(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"h3"),c["\u0275\u0275text"](1),c["\u0275\u0275pipe"](2,"uppercase"),c["\u0275\u0275elementEnd"]()),2&e){var n=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](2,1,n.lectureMaterial.title))}}function f(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div"),c["\u0275\u0275element"](1,"pdf-viewer",6),c["\u0275\u0275elementEnd"]()),2&e){var n=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("src",n.lectureMaterial.secureUrl)("render-text",!1)("original-size",!0)}}function p(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",7),c["\u0275\u0275element"](1,"img",8),c["\u0275\u0275elementEnd"]()),2&e){var n=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("src",n.lectureMaterial.secureUrl,c["\u0275\u0275sanitizeUrl"])("alt",n.lectureMaterial.title)}}function v(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",7),c["\u0275\u0275elementStart"](1,"div",1),c["\u0275\u0275elementStart"](2,"div",9),c["\u0275\u0275elementStart"](3,"video",10,11),c["\u0275\u0275element"](5,"source",12),c["\u0275\u0275text"](6," This browser/App does not support the video. "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){var n=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("src",n.lectureMaterial.secureUrl,c["\u0275\u0275sanitizeUrl"])}}function m(e,t){if(1&e){var n=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"nb-card"),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275elementStart"](2,"div",1),c["\u0275\u0275elementStart"](3,"div",2),c["\u0275\u0275elementStart"](4,"button",3),c["\u0275\u0275listener"]("click",(function(){return c["\u0275\u0275restoreView"](n),c["\u0275\u0275nextContext"]().back()})),c["\u0275\u0275text"](5," Back "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](6,s,3,3,"h3",0),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"nb-card-body"),c["\u0275\u0275elementStart"](8,"div",1),c["\u0275\u0275elementStart"](9,"div",4),c["\u0275\u0275template"](10,f,2,3,"div",0),c["\u0275\u0275template"](11,p,2,2,"div",5),c["\u0275\u0275template"](12,v,7,1,"div",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){var r=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("ngIf",r.lectureMaterial.title),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("ngIf","PDF"===r.lectureMaterial.fileType),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf","IMAGE"===r.lectureMaterial.fileType),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf","MP4"===r.lectureMaterial.fileType)}}var h,g,y,M=[{path:"",component:(h=function(){function n(t,r,i,a){e(this,n),this.lectureMaterialService=t,this.toastrService=r,this.router=i,this.route=a}var r,i,a;return r=n,(i=[{key:"ngOnInit",value:function(){var e=this;if(this.loading=!0,this.lectureMaterialId=this.lectureMaterialService.getLectureMaterialId(),!this.lectureMaterialId)return this.showToastr("top-right","danger","Invalid Lecture Material Id"),void this.back();this.lectureMaterialService.getLectureMaterialData().subscribe((function(t){t?(e.lectureMaterial=t,e.loading=!1):e.back()}))}},{key:"back",value:function(){this.loading=!0,this.router.navigate(["../"],{relativeTo:this.route})}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}},{key:"ngOnDestroy",value:function(){this.lectureMaterialService.deleteLectureMaterialId(),this.lectureMaterialService.deleteLectureMaterialData()}}])&&t(r.prototype,i),a&&t(r,a),n}(),h.\u0275fac=function(e){return new(e||h)(c["\u0275\u0275directiveInject"](d.a),c["\u0275\u0275directiveInject"](l.Gb),c["\u0275\u0275directiveInject"](u.c),c["\u0275\u0275directiveInject"](u.a))},h.\u0275cmp=c["\u0275\u0275defineComponent"]({type:h,selectors:[["ngx-view-study-material"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"row"],[1,"col-md-12"],["nbButton","","size","small","status","warning",1,"float-right",3,"click"],[1,"col-12"],["class","text-center",4,"ngIf"],["loading","lazy",3,"src","render-text","original-size"],[1,"text-center"],["loading","lazy","width","80%","height","auto",3,"src","alt"],[1,"col-md-10","col-12","mx-auto"],["disablePictureInPicture","","id","video","name","video","oncontextmenu","return false;","width","100%","loading","lazy","controls","","controlsList","nodownload",1,"video"],["videoPlayer",""],["type","video/mp4",3,"src"]],template:function(e,t){1&e&&c["\u0275\u0275template"](0,m,13,4,"nb-card",0),2&e&&c["\u0275\u0275property"]("ngIf",!t.loading)},directives:[o.n,l.y,l.A,l.v,l.x,a.a],pipes:[o.w],styles:[""]}),h)},{path:"page-not-found",loadChildren:function(){return i.e(0).then(i.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found"}],w=((y=function t(){e(this,t)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:y}),y.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||y)},imports:[[u.g.forChild(M)],u.g]}),y),b=((g=function t(){e(this,t)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:g}),g.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||g)},imports:[[o.c,w,l.B,l.w,a.b]]}),g)}}])}();
//# sourceMappingURL=246-es5.614bd8fdfa1824957567.js.map
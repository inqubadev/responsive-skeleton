/*!
 * VERSION: beta 1.3.3
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=180/Math.PI,e=[],i=[],s=[],r={},n=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},a=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",o=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},h=(t+e)/2,l=(e+i)/2,u=(i+s)/2,_=(h+l)/2,f=(l+u)/2,c=(f-_)/8;return r.b=h+(t-h)/4,n.b=_+c,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(_+f)/2,a.b=f-c,o.b=u+(s-u)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},h=function(t,r,n,a,h){var l,u,_,f,c,p,d,m,g,v,y,T,w,x=t.length-1,b=0,P=t[0].a;for(l=0;x>l;l++)c=t[b],u=c.a,_=c.d,f=t[b+1].d,h?(y=e[l],T=i[l],w=.25*(T+y)*r/(a?.5:s[l]||.5),p=_-(_-u)*(a?.5*r:0!==y?w/y:0),d=_+(f-_)*(a?.5*r:0!==T?w/T:0),m=_-(p+((d-p)*(3*y/(y+T)+.5)/4||0))):(p=_-.5*(_-u)*r,d=_+.5*(f-_)*r,m=_-(p+d)/2),p+=m,d+=m,c.c=g=p,c.b=0!==l?P:P=c.a+.6*(c.c-c.a),c.da=_-u,c.ca=g-u,c.ba=P-u,n?(v=o(u,P,g,_),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=d;c=t[b],c.b=P,c.c=P+.4*(c.d-P),c.da=c.d-c.a,c.ca=c.c-c.a,c.ba=P-c.a,n&&(v=o(c.a,P,c.c,c.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},l=function(t,s,r,a){var o,h,l,u,_,f,c=[];if(a)for(t=[a].concat(t),h=t.length;--h>-1;)"string"==typeof(f=t[h][s])&&"="===f.charAt(1)&&(t[h][s]=a[s]+Number(f.charAt(0)+f.substr(2)));if(o=t.length-2,0>o)return c[0]=new n(t[0][s],0,0,t[-1>o?0:1][s]),c;for(h=0;o>h;h++)l=t[h][s],u=t[h+1][s],c[h]=new n(l,0,0,u),r&&(_=t[h+2][s],e[h]=(e[h]||0)+(u-l)*(u-l),i[h]=(i[h]||0)+(_-u)*(_-u));return c[h]=new n(t[h][s],0,0,t[h+1][s]),c},u=function(t,n,o,u,_,f){var c,p,d,m,g,v,y,T,w={},x=[],b=f||t[0];_="string"==typeof _?","+_+",":a,null==n&&(n=1);for(p in t[0])x.push(p);if(t.length>1){for(T=t[t.length-1],y=!0,c=x.length;--c>-1;)if(p=x[c],Math.abs(b[p]-T[p])>.05){y=!1;break}y&&(t=t.concat(),f&&t.unshift(f),t.push(t[1]),f=t[t.length-3])}for(e.length=i.length=s.length=0,c=x.length;--c>-1;)p=x[c],r[p]=-1!==_.indexOf(","+p+","),w[p]=l(t,p,r[p],f);for(c=e.length;--c>-1;)e[c]=Math.sqrt(e[c]),i[c]=Math.sqrt(i[c]);if(!u){for(c=x.length;--c>-1;)if(r[p])for(d=w[x[c]],v=d.length-1,m=0;v>m;m++)g=d[m+1].da/i[m]+d[m].da/e[m],s[m]=(s[m]||0)+g*g;for(c=s.length;--c>-1;)s[c]=Math.sqrt(s[c])}for(c=x.length,m=o?4:1;--c>-1;)p=x[c],d=w[p],h(d,n,o,u,r[p]),y&&(d.splice(0,m),d.splice(d.length-m,m));return w},_=function(t,e,i){e=e||"soft";var s,r,a,o,h,l,u,_,f,c,p,d={},m="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||m+1>t.length)throw"invalid Bezier data";for(f in t[0])v.push(f);for(l=v.length;--l>-1;){for(f=v[l],d[f]=h=[],c=0,_=t.length,u=0;_>u;u++)s=null==i?t[u][f]:"string"==typeof(p=t[u][f])&&"="===p.charAt(1)?i[f]+Number(p.charAt(0)+p.substr(2)):Number(p),g&&u>1&&_-1>u&&(h[c++]=(s+h[c-2])/2),h[c++]=s;for(_=c-m+1,c=0,u=0;_>u;u+=m)s=h[u],r=h[u+1],a=h[u+2],o=2===m?0:h[u+3],h[c++]=p=3===m?new n(s,r,a,o):new n(s,(2*r+s)/3,(2*r+a)/3,a);h.length=c}return d},f=function(t,e,i){for(var s,r,n,a,o,h,l,u,_,f,c,p=1/i,d=t.length;--d>-1;)for(f=t[d],n=f.a,a=f.d-n,o=f.c-n,h=f.b-n,s=r=0,u=1;i>=u;u++)l=p*u,_=1-l,s=r-(r=(l*l*a+3*_*(l*o+_*h))*l),c=d*i+u-1,e[c]=(e[c]||0)+s*s},c=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],h=0,l=0,u=e-1,_=[],c=[];for(i in t)f(t[i],a,e);for(r=a.length,s=0;r>s;s++)h+=Math.sqrt(a[s]),n=s%e,c[n]=h,n===u&&(l+=h,n=s/e>>0,_[n]=c,o[n]=l,h=0,c=[]);return{length:l,lengths:o,segments:_}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.3",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,h=e.values||[],l={},f=h[0],p=e.autoRotate||i.vars.orientToBezier;this._autoRotate=p?p instanceof Array?p:[["x","y","rotation",p===!0?0:Number(p)||0]]:null;for(s in f)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],l[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||l[s]!==h[0][s]&&(o=l);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?u(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):_(h,e.type,l),this._segCount=this._beziers[s].length,this._timeRes){var d=c(this._beziers,this._timeRes);this._length=d.length,this._lengths=d.lengths,this._segments=d.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(p=this._autoRotate)for(this._initialRotations=[],p[0]instanceof Array||(this._autoRotate=p=[p]),n=p.length;--n>-1;){for(a=0;3>a;a++)s=p[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;s=p[n][2],this._initialRotations[n]=this._func[s]?this._func[s].call(this._target):this._target[s]}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(e){var i,s,r,n,a,o,h,l,u,_,f=this._segCount,c=this._func,p=this._target,d=e!==this._startRatio;if(this._timeRes){if(u=this._lengths,_=this._curSeg,e*=this._length,r=this._li,e>this._l2&&f-1>r){for(l=f-1;l>r&&e>=(this._l2=u[++r]););this._l1=u[r-1],this._li=r,this._curSeg=_=this._segments[r],this._s2=_[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=u[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=u[r],this._li=r,this._curSeg=_=this._segments[r],this._s1=_[(this._si=_.length-1)-1]||0,this._s2=_[this._si]}if(i=r,e-=this._l1,r=this._si,e>this._s2&&_.length-1>r){for(l=_.length-1;l>r&&e>=(this._s2=_[++r]););this._s1=_[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=_[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=_[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?f-1:f*e>>0,o=(e-i*(1/f))*f;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],h=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(h=Math.round(h)),c[n]?p[n](h):p[n]=h;if(this._autoRotate){var m,g,v,y,T,w,x,b=this._autoRotate;for(r=b.length;--r>-1;)n=b[r][2],w=b[r][3]||0,x=b[r][4]===!0?1:t,a=this._beziers[b[r][0]],m=this._beziers[b[r][1]],a&&m&&(a=a[i],m=m[i],g=a.a+(a.b-a.a)*o,y=a.b+(a.c-a.b)*o,g+=(y-g)*o,y+=(a.c+(a.d-a.c)*o-y)*o,v=m.a+(m.b-m.a)*o,T=m.b+(m.c-m.b)*o,v+=(T-v)*o,T+=(m.c+(m.d-m.c)*o-T)*o,h=d?Math.atan2(T-v,y-g)*x+w:this._initialRotations[r],c[n]?p[n](h):p[n]=h)}}}),d=p.prototype;p.bezierThrough=u,p.cubicToQuadratic=o,p._autoCSS=!0,p.quadraticToCubic=function(t,e,i){return new n(t,(2*e+t)/3,(2*e+i)/3,i)},p._cssRegister=function(){var t=_gsScope._gsDefine.globals.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,h){e instanceof Array&&(e={values:e}),h=new p;var l,u,_,f=e.values,c=f.length-1,d=[],m={};if(0>c)return o;for(l=0;c>=l;l++)_=i(t,f[l],a,o,h,c!==l),d[l]=_.end;for(u in e)m[u]=e[u];return m.values=d,o=new r(t,"bezier",0,0,_.pt,2),o.data=_,o.plugin=h,o.setRatio=s,0===m.autoRotate&&(m.autoRotate=!0),!m.autoRotate||m.autoRotate instanceof Array||(l=m.autoRotate===!0?0:Number(m.autoRotate),m.autoRotate=null!=_.end.left?[["left","top","rotation",l,!1]]:null!=_.end.x?[["x","y","rotation",l,!1]]:!1),m.autoRotate&&(a._transform||a._enableTransforms(!1),_.autoRotate=a._target._gsTransform),h._onInitTween(_.proxy,m,a._tween),o}})}},d._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},d._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=e())}("BezierPlugin");
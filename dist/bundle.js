(()=>{var yd=0,xh=1,vd=2;var Ua=1,Md=2,Lr=3,Ki=0,Qn=1,Ni=2,Ui=0,Ys=1,_h=2,yh=3,vh=4,Sd=5;var gs=100,bd=101,Ed=102,Td=103,wd=104,Ad=200,Cd=201,Rd=202,Id=203,Oo=204,ko=205,Pd=206,Ld=207,Dd=208,Nd=209,Ud=210,Fd=211,Bd=212,Od=213,kd=214,zo=0,Vo=1,Ho=2,$s=3,Go=4,Wo=5,Xo=6,qo=7,Mh=0,zd=1,Vd=2,Ei=0,Sh=1,bh=2,Eh=3,Fa=4,Th=5,wh=6,Ah=7;var Ch=300,Ts=301,tr=302,El=303,Tl=304,Ba=306,ji=1e3,Ii=1001,Yo=1002,Dn=1003,Hd=1004;var Oa=1005;var Bn=1006,wl=1007;var ws=1008;var ii=1009,Rh=1010,Ih=1011,Dr=1012,Al=1013,Ti=1014,wi=1015,Fi=1016,Cl=1017,Rl=1018,Nr=1020,Ph=35902,Lh=35899,Dh=1021,Nh=1022,_i=1023,Pi=1026,As=1027,Uh=1028,Il=1029,Cs=1030,Pl=1031;var Ll=1033,ka=33776,za=33777,Va=33778,Ha=33779,Dl=35840,Nl=35841,Ul=35842,Fl=35843,Bl=36196,Ol=37492,kl=37496,zl=37488,Vl=37489,Ga=37490,Hl=37491,Gl=37808,Wl=37809,Xl=37810,ql=37811,Yl=37812,$l=37813,Zl=37814,Jl=37815,Kl=37816,jl=37817,Ql=37818,tc=37819,ec=37820,nc=37821,ic=36492,sc=36494,rc=36495,ac=36283,oc=36284,Wa=36285,lc=36286;var oa=2300,$o=2301,Bo=2302,ih=2303,sh=2400,rh=2401,ah=2402;var Gd=3200;var cc=0,Wd=1,ss="",qn="srgb",la="srgb-linear",ca="linear",nn="srgb";var Xs=7680;var oh=519,Xd=512,qd=513,Yd=514,hc=515,$d=516,Zd=517,uc=518,Jd=519,lh=35044;var Fh="300 es",bi=2e3,Sr=2001;function Qf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function tp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ha(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kd(){let i=ha("canvas");return i.style.display="block",i}var Xu={},br=null;function Bh(...i){let t="THREE."+i.shift();br?br("log",t,...i):console.log(t,...i)}function jd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function de(...i){i=jd(i);let t="THREE."+i.shift();if(br)br("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function _e(...i){i=jd(i);let t="THREE."+i.shift();if(br)br("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Zo(...i){let t=i.join(" ");t in Xu||(Xu[t]=!0,de(...i))}function Qd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var tf={[zo]:Vo,[Ho]:Xo,[Go]:qo,[$s]:Wo,[Vo]:zo,[Xo]:Ho,[qo]:Go,[Wo]:$s},Li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ic=Math.PI/180,Jo=180/Math.PI;function Ur(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wn[i&255]+Wn[i>>8&255]+Wn[i>>16&255]+Wn[i>>24&255]+"-"+Wn[t&255]+Wn[t>>8&255]+"-"+Wn[t>>16&15|64]+Wn[t>>24&255]+"-"+Wn[e&63|128]+Wn[e>>8&255]+"-"+Wn[e>>16&255]+Wn[e>>24&255]+Wn[n&255]+Wn[n>>8&255]+Wn[n>>16&255]+Wn[n>>24&255]).toLowerCase()}function We(i,t,e){return Math.max(t,Math.min(e,i))}function ep(i,t){return(i%t+t)%t}function Pc(i,t,e){return(1-e)*i+e*t}function Qr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ei(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ct=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=We(this.x,t.x,e.x),this.y=We(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=We(this.x,t,e),this.y=We(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Di=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],x=r[a+2],b=r[a+3];if(d!==b||l!==h||c!==f||u!==x){let g=l*h+c*f+u*x+d*b;g<0&&(h=-h,f=-f,x=-x,b=-b,g=-g);let p=1-o;if(g<.9995){let S=Math.acos(g),w=Math.sin(S);p=Math.sin(p*S)/w,o=Math.sin(o*S)/w,l=l*p+h*o,c=c*p+f*o,u=u*p+x*o,d=d*p+b*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+x*o,d=d*p+b*o;let S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],x=r[a+3];return t[e]=o*x+u*d+l*f-c*h,t[e+1]=l*x+u*h+c*d-o*f,t[e+2]=c*x+u*f+o*h-l*d,t[e+3]=u*x-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*x,this._y=c*f*d-h*u*x,this._z=c*u*x+h*f*d,this._w=c*u*d-h*f*x;break;case"YXZ":this._x=h*u*d+c*f*x,this._y=c*f*d-h*u*x,this._z=c*u*x-h*f*d,this._w=c*u*d+h*f*x;break;case"ZXY":this._x=h*u*d-c*f*x,this._y=c*f*d+h*u*x,this._z=c*u*x+h*f*d,this._w=c*u*d-h*f*x;break;case"ZYX":this._x=h*u*d-c*f*x,this._y=c*f*d+h*u*x,this._z=c*u*x-h*f*d,this._w=c*u*d+h*f*x;break;case"YZX":this._x=h*u*d+c*f*x,this._y=c*f*d+h*u*x,this._z=c*u*x-h*f*d,this._w=c*u*d-h*f*x;break;case"XZY":this._x=h*u*d-c*f*x,this._y=c*f*d-h*u*x,this._z=c*u*x+h*f*d,this._w=c*u*d+h*f*x;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=We(this.x,t.x,e.x),this.y=We(this.y,t.y,e.y),this.z=We(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=We(this.x,t,e),this.y=We(this.y,t,e),this.z=We(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lc.copy(this).projectOnVector(t),this.sub(Lc)}reflect(t){return this.sub(Lc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lc=new U,qu=new Di,De=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],x=n[8],b=s[0],g=s[3],p=s[6],S=s[1],w=s[4],E=s[7],D=s[2],C=s[5],F=s[8];return r[0]=a*b+o*S+l*D,r[3]=a*g+o*w+l*C,r[6]=a*p+o*E+l*F,r[1]=c*b+u*S+d*D,r[4]=c*g+u*w+d*C,r[7]=c*p+u*E+d*F,r[2]=h*b+f*S+x*D,r[5]=h*g+f*w+x*C,r[8]=h*p+f*E+x*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,x=e*d+n*h+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/x;return t[0]=d*b,t[1]=(s*c-u*n)*b,t[2]=(o*n-s*a)*b,t[3]=h*b,t[4]=(u*e-s*l)*b,t[5]=(s*r-o*e)*b,t[6]=f*b,t[7]=(n*l-c*e)*b,t[8]=(a*e-n*r)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Dc.makeScale(t,e)),this}rotate(t){return this.premultiply(Dc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Dc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Dc=new De,Yu=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$u=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function np(){let i={enabled:!0,workingColorSpace:la,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nn&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nn&&(s.r=Mr(s.r),s.g=Mr(s.g),s.b=Mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ss?ca:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[la]:{primaries:t,whitePoint:n,transfer:ca,toXYZ:Yu,fromXYZ:$u,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:t,whitePoint:n,transfer:nn,toXYZ:Yu,fromXYZ:$u,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),i}var qe=np();function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var cr,Ko=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{cr===void 0&&(cr=ha("canvas")),cr.width=t.width,cr.height=t.height;let s=cr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=cr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ha("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ji(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ji(e[n]/255)*255):e[n]=Ji(e[n]);return{data:e,width:t.width,height:t.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ip=0,Er=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Ur(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Nc(s[a].image)):r.push(Nc(s[a]))}else r=Nc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ko.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}var sp=0,Uc=new U,jn=class i extends Li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ii,s=Ii,r=Bn,a=ws,o=_i,l=ii,c=i.DEFAULT_ANISOTROPY,u=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Ur(),this.name="",this.source=new Er(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Uc).x}get height(){return this.source.getSize(Uc).y}get depth(){return this.source.getSize(Uc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){de(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){de(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ji:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case Yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ji:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case Yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=Ch;jn.DEFAULT_ANISOTROPY=1;var Mn=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],x=l[9],b=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-b)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+b)<.1&&Math.abs(x+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,E=(f+1)/2,D=(p+1)/2,C=(u+h)/4,F=(d+b)/4,_=(x+g)/4;return w>E&&w>D?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=C/n,r=F/n):E>D?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=C/s,r=_/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=F/r,s=_/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-x)*(g-x)+(d-b)*(d-b)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(g-x)/S,this.y=(d-b)/S,this.z=(h-u)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=We(this.x,t.x,e.x),this.y=We(this.y,t.y,e.y),this.z=We(this.z,t.z,e.z),this.w=We(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=We(this.x,t,e),this.y=We(this.y,t,e),this.z=We(this.z,t,e),this.w=We(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jo=class extends Li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Mn(0,0,t,e),this.scissorTest=!1,this.viewport=new Mn(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new jn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Er(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},li=class extends jo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ua=class extends jn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qo=class extends jn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gn=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,u,d,h,f,x,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,h,f,x,b,g)}set(t,e,n,s,r,a,o,l,c,u,d,h,f,x,b,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=x,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();let e=this.elements,n=t.elements,s=1/hr.setFromMatrixColumn(t,0).length(),r=1/hr.setFromMatrixColumn(t,1).length(),a=1/hr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,f=a*d,x=o*u,b=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+x*c,e[5]=h-b*c,e[9]=-o*l,e[2]=b-h*c,e[6]=x+f*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,f=l*d,x=c*u,b=c*d;e[0]=h+b*o,e[4]=x*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-x,e[6]=b+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,f=l*d,x=c*u,b=c*d;e[0]=h-b*o,e[4]=-a*d,e[8]=x+f*o,e[1]=f+x*o,e[5]=a*u,e[9]=b-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,f=a*d,x=o*u,b=o*d;e[0]=l*u,e[4]=x*c-f,e[8]=h*c+b,e[1]=l*d,e[5]=b*c+h,e[9]=f*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,f=a*c,x=o*l,b=o*c;e[0]=l*u,e[4]=b-h*d,e[8]=x*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+x,e[10]=h-b*d}else if(t.order==="XZY"){let h=a*l,f=a*c,x=o*l,b=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+b,e[5]=a*u,e[9]=f*d-x,e[2]=x*d-f,e[6]=o*u,e[10]=b*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rp,t,ap)}lookAt(t,e,n){let s=this.elements;return ai.subVectors(t,e),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),cs.crossVectors(n,ai),cs.lengthSq()===0&&(Math.abs(n.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),cs.crossVectors(n,ai)),cs.normalize(),fo.crossVectors(ai,cs),s[0]=cs.x,s[4]=fo.x,s[8]=ai.x,s[1]=cs.y,s[5]=fo.y,s[9]=ai.y,s[2]=cs.z,s[6]=fo.z,s[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],x=n[2],b=n[6],g=n[10],p=n[14],S=n[3],w=n[7],E=n[11],D=n[15],C=s[0],F=s[4],_=s[8],R=s[12],O=s[1],L=s[5],H=s[9],j=s[13],K=s[2],V=s[6],q=s[10],X=s[14],lt=s[3],ht=s[7],Et=s[11],Nt=s[15];return r[0]=a*C+o*O+l*K+c*lt,r[4]=a*F+o*L+l*V+c*ht,r[8]=a*_+o*H+l*q+c*Et,r[12]=a*R+o*j+l*X+c*Nt,r[1]=u*C+d*O+h*K+f*lt,r[5]=u*F+d*L+h*V+f*ht,r[9]=u*_+d*H+h*q+f*Et,r[13]=u*R+d*j+h*X+f*Nt,r[2]=x*C+b*O+g*K+p*lt,r[6]=x*F+b*L+g*V+p*ht,r[10]=x*_+b*H+g*q+p*Et,r[14]=x*R+b*j+g*X+p*Nt,r[3]=S*C+w*O+E*K+D*lt,r[7]=S*F+w*L+E*V+D*ht,r[11]=S*_+w*H+E*q+D*Et,r[15]=S*R+w*j+E*X+D*Nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],x=t[3],b=t[7],g=t[11],p=t[15],S=l*f-c*h,w=o*f-c*d,E=o*h-l*d,D=a*f-c*u,C=a*h-l*u,F=a*d-o*u;return e*(b*S-g*w+p*E)-n*(x*S-g*D+p*C)+s*(x*w-b*D+p*F)-r*(x*E-b*C+g*F)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],x=t[12],b=t[13],g=t[14],p=t[15],S=e*o-n*a,w=e*l-s*a,E=e*c-r*a,D=n*l-s*o,C=n*c-r*o,F=s*c-r*l,_=u*b-d*x,R=u*g-h*x,O=u*p-f*x,L=d*g-h*b,H=d*p-f*b,j=h*p-f*g,K=S*j-w*H+E*L+D*O-C*R+F*_;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/K;return t[0]=(o*j-l*H+c*L)*V,t[1]=(s*H-n*j-r*L)*V,t[2]=(b*F-g*C+p*D)*V,t[3]=(h*C-d*F-f*D)*V,t[4]=(l*O-a*j-c*R)*V,t[5]=(e*j-s*O+r*R)*V,t[6]=(g*E-x*F-p*w)*V,t[7]=(u*F-h*E+f*w)*V,t[8]=(a*H-o*O+c*_)*V,t[9]=(n*O-e*H-r*_)*V,t[10]=(x*C-b*E+p*S)*V,t[11]=(d*E-u*C-f*S)*V,t[12]=(o*R-a*L-l*_)*V,t[13]=(e*L-n*R+s*_)*V,t[14]=(b*w-x*D-g*S)*V,t[15]=(u*D-d*w+h*S)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,x=r*d,b=a*u,g=a*d,p=o*d,S=l*c,w=l*u,E=l*d,D=n.x,C=n.y,F=n.z;return s[0]=(1-(b+p))*D,s[1]=(f+E)*D,s[2]=(x-w)*D,s[3]=0,s[4]=(f-E)*C,s[5]=(1-(h+p))*C,s[6]=(g+S)*C,s[7]=0,s[8]=(x+w)*F,s[9]=(g-S)*F,s[10]=(1-(h+b))*F,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let a=hr.set(s[0],s[1],s[2]).length(),o=hr.set(s[4],s[5],s[6]).length(),l=hr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),vi.copy(this);let c=1/a,u=1/o,d=1/l;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=u,vi.elements[5]*=u,vi.elements[6]*=u,vi.elements[8]*=d,vi.elements[9]*=d,vi.elements[10]*=d,e.setFromRotationMatrix(vi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=bi,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),x,b;if(l)x=r/(a-r),b=a*r/(a-r);else if(o===bi)x=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Sr)x=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=bi,l=!1){let c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s),x,b;if(l)x=1/(a-r),b=a/(a-r);else if(o===bi)x=-2/(a-r),b=-(a+r)/(a-r);else if(o===Sr)x=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},hr=new U,vi=new gn,rp=new U(0,0,0),ap=new U(1,1,1),cs=new U,fo=new U,ai=new U,Zu=new gn,Ju=new Di,Qi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ju.setFromEuler(this),this.setFromQuaternion(Ju,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qi.DEFAULT_ORDER="XYZ";var da=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},op=0,Ku=new U,ur=new Di,Xi=new gn,po=new U,ta=new U,lp=new U,cp=new Di,ju=new U(1,0,0),Qu=new U(0,1,0),td=new U(0,0,1),ed={type:"added"},hp={type:"removed"},dr={type:"childadded",child:null},Fc={type:"childremoved",child:null},Yn=class i extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new Qi,n=new Di,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gn},normalMatrix:{value:new De}}),this.matrix=new gn,this.matrixWorld=new gn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ur.setFromAxisAngle(t,e),this.quaternion.multiply(ur),this}rotateOnWorldAxis(t,e){return ur.setFromAxisAngle(t,e),this.quaternion.premultiply(ur),this}rotateX(t){return this.rotateOnAxis(ju,t)}rotateY(t){return this.rotateOnAxis(Qu,t)}rotateZ(t){return this.rotateOnAxis(td,t)}translateOnAxis(t,e){return Ku.copy(t).applyQuaternion(this.quaternion),this.position.add(Ku.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ju,t)}translateY(t){return this.translateOnAxis(Qu,t)}translateZ(t){return this.translateOnAxis(td,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?po.copy(t):po.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(ta,po,this.up):Xi.lookAt(po,ta,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),ur.setFromRotationMatrix(Xi),this.quaternion.premultiply(ur.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(_e("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ed),dr.child=t,this.dispatchEvent(dr),dr.child=null):_e("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hp),Fc.child=t,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ed),dr.child=t,this.dispatchEvent(dr),dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,t,lp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,cp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Yn.DEFAULT_UP=new U(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=class extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},up={type:"move"},Tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let b of t.hand.values()){let g=e.getJointPose(b,n),p=this._getHandJoint(c,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,x=.005;c.inputState.pinching&&h>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(up)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},mo={h:0,s:0,l:0};function Bc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ge=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=qe.workingColorSpace){return this.r=t,this.g=e,this.b=n,qe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=qe.workingColorSpace){if(t=ep(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Bc(a,r,t+1/3),this.g=Bc(a,r,t),this.b=Bc(a,r,t-1/3)}return qe.colorSpaceToWorking(this,s),this}setStyle(t,e=qn){function n(r){r!==void 0&&parseFloat(r)<1&&de("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:de("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);de("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qn){let n=ef[t.toLowerCase()];return n!==void 0?this.setHex(n,e):de("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}copyLinearToSRGB(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qn){return qe.workingToColorSpace(Xn.copy(this),t),Math.round(We(Xn.r*255,0,255))*65536+Math.round(We(Xn.g*255,0,255))*256+Math.round(We(Xn.b*255,0,255))}getHexString(t=qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qe.workingColorSpace){qe.workingToColorSpace(Xn.copy(this),e);let n=Xn.r,s=Xn.g,r=Xn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=qe.workingColorSpace){return qe.workingToColorSpace(Xn.copy(this),e),t.r=Xn.r,t.g=Xn.g,t.b=Xn.b,t}getStyle(t=qn){qe.workingToColorSpace(Xn.copy(this),t);let e=Xn.r,n=Xn.g,s=Xn.b;return t!==qn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hs),this.setHSL(hs.h+t,hs.s+e,hs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hs),t.getHSL(mo);let n=Pc(hs.h,mo.h,e),s=Pc(hs.s,mo.s,e),r=Pc(hs.l,mo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xn=new Ge;Ge.NAMES=ef;var fa=class extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Mi=new U,qi=new U,Oc=new U,Yi=new U,fr=new U,pr=new U,nd=new U,kc=new U,zc=new U,Vc=new U,Hc=new Mn,Gc=new Mn,Wc=new Mn,ms=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mi.subVectors(t,e),s.cross(Mi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mi.subVectors(s,e),qi.subVectors(n,e),Oc.subVectors(t,e);let a=Mi.dot(Mi),o=Mi.dot(qi),l=Mi.dot(Oc),c=qi.dot(qi),u=qi.dot(Oc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,x=(a*u-o*l)*h;return r.set(1-f-x,x,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yi.x),l.addScaledVector(a,Yi.y),l.addScaledVector(o,Yi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Hc.setScalar(0),Gc.setScalar(0),Wc.setScalar(0),Hc.fromBufferAttribute(t,e),Gc.fromBufferAttribute(t,n),Wc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Hc,r.x),a.addScaledVector(Gc,r.y),a.addScaledVector(Wc,r.z),a}static isFrontFacing(t,e,n,s){return Mi.subVectors(n,e),qi.subVectors(t,e),Mi.cross(qi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),Mi.cross(qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;fr.subVectors(s,n),pr.subVectors(r,n),kc.subVectors(t,n);let l=fr.dot(kc),c=pr.dot(kc);if(l<=0&&c<=0)return e.copy(n);zc.subVectors(t,s);let u=fr.dot(zc),d=pr.dot(zc);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(fr,a);Vc.subVectors(t,r);let f=fr.dot(Vc),x=pr.dot(Vc);if(x>=0&&f<=x)return e.copy(r);let b=f*c-l*x;if(b<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(pr,o);let g=u*x-f*d;if(g<=0&&d-u>=0&&f-x>=0)return nd.subVectors(r,s),o=(d-u)/(d-u+(f-x)),e.copy(s).addScaledVector(nd,o);let p=1/(g+b+h);return a=b*p,o=h*p,e.copy(n).addScaledVector(fr,a).addScaledVector(pr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},xs=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Si):Si.fromBufferAttribute(r,a),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),go.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(t.matrixWorld),this.union(go)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ea),xo.subVectors(this.max,ea),mr.subVectors(t.a,ea),gr.subVectors(t.b,ea),xr.subVectors(t.c,ea),us.subVectors(gr,mr),ds.subVectors(xr,gr),Vs.subVectors(mr,xr);let e=[0,-us.z,us.y,0,-ds.z,ds.y,0,-Vs.z,Vs.y,us.z,0,-us.x,ds.z,0,-ds.x,Vs.z,0,-Vs.x,-us.y,us.x,0,-ds.y,ds.x,0,-Vs.y,Vs.x,0];return!Xc(e,mr,gr,xr,xo)||(e=[1,0,0,0,1,0,0,0,1],!Xc(e,mr,gr,xr,xo))?!1:(_o.crossVectors(us,ds),e=[_o.x,_o.y,_o.z],Xc(e,mr,gr,xr,xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},$i=[new U,new U,new U,new U,new U,new U,new U,new U],Si=new U,go=new xs,mr=new U,gr=new U,xr=new U,us=new U,ds=new U,Vs=new U,ea=new U,xo=new U,_o=new U,Hs=new U;function Xc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hs.fromArray(i,r);let o=s.x*Math.abs(Hs.x)+s.y*Math.abs(Hs.y)+s.z*Math.abs(Hs.z),l=t.dot(Hs),c=e.dot(Hs),u=n.dot(Hs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Tn=new U,yo=new Ct,dp=0,Kn=class extends Li{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lh,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yo.fromBufferAttribute(this,e),yo.applyMatrix3(t),this.setXY(e,yo.x,yo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.applyMatrix3(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.applyMatrix4(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.applyNormalMatrix(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.transformDirection(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ei(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qr(e,this.array)),e}setX(t,e){return this.normalized&&(e=ei(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qr(e,this.array)),e}setY(t,e){return this.normalized&&(e=ei(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ei(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qr(e,this.array)),e}setW(t,e){return this.normalized&&(e=ei(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ei(e,this.array),n=ei(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ei(e,this.array),n=ei(n,this.array),s=ei(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ei(e,this.array),n=ei(n,this.array),s=ei(s,this.array),r=ei(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lh&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var pa=class extends Kn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ma=class extends Kn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ln=class extends Kn{constructor(t,e,n){super(new Float32Array(t),e,n)}},fp=new xs,na=new U,qc=new U,Zs=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):fp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;na.subVectors(t,this.center);let e=na.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(na,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(na.copy(t.center).add(qc)),this.expandByPoint(na.copy(t.center).sub(qc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},pp=0,xi=new gn,Yc=new Yn,_r=new U,oi=new xs,ia=new xs,Ln=new U,Cn=class i extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qf(t)?ma:pa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new De().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,e,n){return xi.makeTranslation(t,e,n),this.applyMatrix4(xi),this}scale(t,e,n){return xi.makeScale(t,e,n),this.applyMatrix4(xi),this}lookAt(t){return Yc.lookAt(t),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ln(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){_e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];oi.setFromBufferAttribute(r),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){_e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ia.setFromBufferAttribute(o),this.morphTargetsRelative?(Ln.addVectors(oi.min,ia.min),oi.expandByPoint(Ln),Ln.addVectors(oi.max,ia.max),oi.expandByPoint(Ln)):(oi.expandByPoint(ia.min),oi.expandByPoint(ia.max))}oi.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ln.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ln));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ln.fromBufferAttribute(o,c),l&&(_r.fromBufferAttribute(t,c),Ln.add(_r)),s=Math.max(s,n.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&_e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){_e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new U,l[_]=new U;let c=new U,u=new U,d=new U,h=new Ct,f=new Ct,x=new Ct,b=new U,g=new U;function p(_,R,O){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,R),d.fromBufferAttribute(n,O),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,R),x.fromBufferAttribute(r,O),u.sub(c),d.sub(c),f.sub(h),x.sub(h);let L=1/(f.x*x.y-x.x*f.y);isFinite(L)&&(b.copy(u).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(L),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-x.x).multiplyScalar(L),o[_].add(b),o[R].add(b),o[O].add(b),l[_].add(g),l[R].add(g),l[O].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let _=0,R=S.length;_<R;++_){let O=S[_],L=O.start,H=O.count;for(let j=L,K=L+H;j<K;j+=3)p(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let w=new U,E=new U,D=new U,C=new U;function F(_){D.fromBufferAttribute(s,_),C.copy(D);let R=o[_];w.copy(R),w.sub(D.multiplyScalar(D.dot(R))).normalize(),E.crossVectors(C,R);let L=E.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,L)}for(let _=0,R=S.length;_<R;++_){let O=S[_],L=O.start,H=O.count;for(let j=L,K=L+H;j<K;j+=3)F(t.getX(j+0)),F(t.getX(j+1)),F(t.getX(j+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,u=new U,d=new U;if(t)for(let h=0,f=t.count;h<f;h+=3){let x=t.getX(h+0),b=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,b),a.fromBufferAttribute(e,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ln.fromBufferAttribute(t,e),Ln.normalize(),t.setXYZ(e,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,x=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*u;for(let p=0;p<u;p++)h[x++]=c[f++]}return new Kn(h,u,d)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var mp=0,ts=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=Ys,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=ko,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){de(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){de(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==Ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oo&&(n.blendSrc=this.blendSrc),this.blendDst!==ko&&(n.blendDst=this.blendDst),this.blendEquation!==gs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Zi=new U,$c=new U,vo=new U,fs=new U,Zc=new U,Mo=new U,Jc=new U,ga=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,e),Zi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$c.copy(t).add(e).multiplyScalar(.5),vo.copy(e).sub(t).normalize(),fs.copy(this.origin).sub($c);let r=t.distanceTo(e)*.5,a=-this.direction.dot(vo),o=fs.dot(this.direction),l=-fs.dot(vo),c=fs.lengthSq(),u=Math.abs(1-a*a),d,h,f,x;if(u>0)if(d=a*l-o,h=a*o-l,x=r*u,d>=0)if(h>=-x)if(h<=x){let b=1/u;d*=b,h*=b,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy($c).addScaledVector(vo,h),f}intersectSphere(t,e){Zi.subVectors(t.center,this.origin);let n=Zi.dot(this.direction),s=Zi.dot(Zi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,e,n,s,r){Zc.subVectors(e,t),Mo.subVectors(n,t),Jc.crossVectors(Zc,Mo);let a=this.direction.dot(Jc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fs.subVectors(this.origin,t);let l=o*this.direction.dot(Mo.crossVectors(fs,Mo));if(l<0)return null;let c=o*this.direction.dot(Zc.cross(fs));if(c<0||l+c>a)return null;let u=-o*fs.dot(Jc);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},es=class extends ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},id=new gn,Gs=new ga,So=new Zs,sd=new U,bo=new U,Eo=new U,To=new U,Kc=new U,wo=new U,rd=new U,Ao=new U,Ot=class extends Yn{constructor(t=new Cn,e=new es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){wo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Kc.fromBufferAttribute(d,t),a?wo.addScaledVector(Kc,u):wo.addScaledVector(Kc.sub(e),u))}e.add(wo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(r),Gs.copy(t.ray).recast(t.near),!(So.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(So,sd)===null||Gs.origin.distanceToSquared(sd)>(t.far-t.near)**2))&&(id.copy(r).invert(),Gs.copy(t.ray).applyMatrix4(id),!(n.boundingBox!==null&&Gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,b=h.length;x<b;x++){let g=h[x],p=a[g.materialIndex],S=Math.max(g.start,f.start),w=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let E=S,D=w;E<D;E+=3){let C=o.getX(E),F=o.getX(E+1),_=o.getX(E+2);s=Co(this,p,t,n,c,u,d,C,F,_),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=x,p=b;g<p;g+=3){let S=o.getX(g),w=o.getX(g+1),E=o.getX(g+2);s=Co(this,a,t,n,c,u,d,S,w,E),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,b=h.length;x<b;x++){let g=h[x],p=a[g.materialIndex],S=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let E=S,D=w;E<D;E+=3){let C=E,F=E+1,_=E+2;s=Co(this,p,t,n,c,u,d,C,F,_),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let g=x,p=b;g<p;g+=3){let S=g,w=g+1,E=g+2;s=Co(this,a,t,n,c,u,d,S,w,E),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function gp(i,t,e,n,s,r,a,o){let l;if(t.side===Qn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ki,o),l===null)return null;Ao.copy(o),Ao.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ao);return c<e.near||c>e.far?null:{distance:c,point:Ao.clone(),object:i}}function Co(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,bo),i.getVertexPosition(l,Eo),i.getVertexPosition(c,To);let u=gp(i,t,e,n,bo,Eo,To,rd);if(u){let d=new U;ms.getBarycoord(rd,bo,Eo,To,d),s&&(u.uv=ms.getInterpolatedAttribute(s,o,l,c,d,new Ct)),r&&(u.uv1=ms.getInterpolatedAttribute(r,o,l,c,d,new Ct)),a&&(u.normal=ms.getInterpolatedAttribute(a,o,l,c,d,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new U,materialIndex:0};ms.getNormal(bo,Eo,To,h.normal),u.face=h,u.barycoord=d}return u}var tl=class extends jn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Dn,u=Dn,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jc=new U,xp=new U,_p=new De,Ri=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=jc.subVectors(n,e).cross(xp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(jc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||_p.getNormalMatrix(t),s=this.coplanarPoint(jc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ws=new Zs,yp=new Ct(.5,.5),Ro=new U,wr=class{constructor(t=new Ri,e=new Ri,n=new Ri,s=new Ri,r=new Ri,a=new Ri){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bi,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],x=r[8],b=r[9],g=r[10],p=r[11],S=r[12],w=r[13],E=r[14],D=r[15];if(s[0].setComponents(c-a,f-u,p-x,D-S).normalize(),s[1].setComponents(c+a,f+u,p+x,D+S).normalize(),s[2].setComponents(c+o,f+d,p+b,D+w).normalize(),s[3].setComponents(c-o,f-d,p-b,D-w).normalize(),n)s[4].setComponents(l,h,g,E).normalize(),s[5].setComponents(c-l,f-h,p-g,D-E).normalize();else if(s[4].setComponents(c-l,f-h,p-g,D-E).normalize(),e===bi)s[5].setComponents(c+l,f+h,p+g,D+E).normalize();else if(e===Sr)s[5].setComponents(l,h,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(t){Ws.center.set(0,0,0);let e=yp.distanceTo(t.center);return Ws.radius=.7071067811865476+e,Ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ro.x=s.normal.x>0?t.max.x:t.min.x,Ro.y=s.normal.y>0?t.max.y:t.min.y,Ro.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ar=class extends ts{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ad=new gn,ch=new ga,Io=new Zs,Po=new U,xa=class extends Yn{constructor(t=new Cn,e=new Ar){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(s),Io.radius+=r,t.ray.intersectsSphere(Io)===!1)return;ad.copy(s).invert(),ch.copy(t.ray).applyMatrix4(ad);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let x=h,b=f;x<b;x++){let g=c.getX(x);Po.fromBufferAttribute(d,g),od(Po,g,l,s,t,e,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let x=h,b=f;x<b;x++)Po.fromBufferAttribute(d,x),od(Po,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function od(i,t,e,n,s,r,a){let o=ch.distanceSqToPoint(i);if(o<e){let l=new U;ch.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var _a=class extends jn{constructor(t=[],e=Ts,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_s=class extends jn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ns=class extends jn{constructor(t,e,n=Ti,s,r,a,o=Dn,l=Dn,c,u=Pi,d=1){if(u!==Pi&&u!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Er(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},el=class extends ns{constructor(t,e=Ti,n=Ts,s,r,a=Dn,o=Dn,l,c=Pi){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ya=class extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ni=class i extends Cn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(d,2));function x(b,g,p,S,w,E,D,C,F,_,R){let O=E/F,L=D/_,H=E/2,j=D/2,K=C/2,V=F+1,q=_+1,X=0,lt=0,ht=new U;for(let Et=0;Et<q;Et++){let Nt=Et*L-j;for(let Ht=0;Ht<V;Ht++){let Ae=Ht*O-H;ht[b]=Ae*S,ht[g]=Nt*w,ht[p]=K,c.push(ht.x,ht.y,ht.z),ht[b]=0,ht[g]=0,ht[p]=C>0?1:-1,u.push(ht.x,ht.y,ht.z),d.push(Ht/F),d.push(1-Et/_),X+=1}}for(let Et=0;Et<_;Et++)for(let Nt=0;Nt<F;Nt++){let Ht=h+Nt+V*Et,Ae=h+Nt+V*(Et+1),oe=h+(Nt+1)+V*(Et+1),Gt=h+(Nt+1)+V*Et;l.push(Ht,Ae,Gt),l.push(Ae,oe,Gt),lt+=6}o.addGroup(f,lt,R),f+=lt,h+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Qe=class i extends Cn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],x=0,b=[],g=n/2,p=0;S(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ln(d,3)),this.setAttribute("normal",new ln(h,3)),this.setAttribute("uv",new ln(f,2));function S(){let E=new U,D=new U,C=0,F=(e-t)/n;for(let _=0;_<=r;_++){let R=[],O=_/r,L=O*(e-t)+t;for(let H=0;H<=s;H++){let j=H/s,K=j*l+o,V=Math.sin(K),q=Math.cos(K);D.x=L*V,D.y=-O*n+g,D.z=L*q,d.push(D.x,D.y,D.z),E.set(V,F,q).normalize(),h.push(E.x,E.y,E.z),f.push(j,1-O),R.push(x++)}b.push(R)}for(let _=0;_<s;_++)for(let R=0;R<r;R++){let O=b[R][_],L=b[R+1][_],H=b[R+1][_+1],j=b[R][_+1];(t>0||R!==0)&&(u.push(O,L,j),C+=3),(e>0||R!==r-1)&&(u.push(L,H,j),C+=3)}c.addGroup(p,C,0),p+=C}function w(E){let D=x,C=new Ct,F=new U,_=0,R=E===!0?t:e,O=E===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,g*O,0),h.push(0,O,0),f.push(.5,.5),x++;let L=x;for(let H=0;H<=s;H++){let K=H/s*l+o,V=Math.cos(K),q=Math.sin(K);F.x=R*q,F.y=g*O,F.z=R*V,d.push(F.x,F.y,F.z),h.push(0,O,0),C.x=V*.5+.5,C.y=q*.5*O+.5,f.push(C.x,C.y),x++}for(let H=0;H<s;H++){let j=D+H,K=L+H;E===!0?u.push(K,K+1,j):u.push(K+1,K,j),_+=3}c.addGroup(p,_,E===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var nl=class i extends Cn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new ln(r,3)),this.setAttribute("normal",new ln(r.slice(),3)),this.setAttribute("uv",new ln(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let w=new U,E=new U,D=new U;for(let C=0;C<e.length;C+=3)f(e[C+0],w),f(e[C+1],E),f(e[C+2],D),l(w,E,D,S)}function l(S,w,E,D){let C=D+1,F=[];for(let _=0;_<=C;_++){F[_]=[];let R=S.clone().lerp(E,_/C),O=w.clone().lerp(E,_/C),L=C-_;for(let H=0;H<=L;H++)H===0&&_===C?F[_][H]=R:F[_][H]=R.clone().lerp(O,H/L)}for(let _=0;_<C;_++)for(let R=0;R<2*(C-_)-1;R++){let O=Math.floor(R/2);R%2===0?(h(F[_][O+1]),h(F[_+1][O]),h(F[_][O])):(h(F[_][O+1]),h(F[_+1][O+1]),h(F[_+1][O]))}}function c(S){let w=new U;for(let E=0;E<r.length;E+=3)w.x=r[E+0],w.y=r[E+1],w.z=r[E+2],w.normalize().multiplyScalar(S),r[E+0]=w.x,r[E+1]=w.y,r[E+2]=w.z}function u(){let S=new U;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];let E=g(S)/2/Math.PI+.5,D=p(S)/Math.PI+.5;a.push(E,1-D)}x(),d()}function d(){for(let S=0;S<a.length;S+=6){let w=a[S+0],E=a[S+2],D=a[S+4],C=Math.max(w,E,D),F=Math.min(w,E,D);C>.9&&F<.1&&(w<.2&&(a[S+0]+=1),E<.2&&(a[S+2]+=1),D<.2&&(a[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function f(S,w){let E=S*3;w.x=t[E+0],w.y=t[E+1],w.z=t[E+2]}function x(){let S=new U,w=new U,E=new U,D=new U,C=new Ct,F=new Ct,_=new Ct;for(let R=0,O=0;R<r.length;R+=9,O+=6){S.set(r[R+0],r[R+1],r[R+2]),w.set(r[R+3],r[R+4],r[R+5]),E.set(r[R+6],r[R+7],r[R+8]),C.set(a[O+0],a[O+1]),F.set(a[O+2],a[O+3]),_.set(a[O+4],a[O+5]),D.copy(S).add(w).add(E).divideScalar(3);let L=g(D);b(C,O+0,S,L),b(F,O+2,w,L),b(_,O+4,E,L)}}function b(S,w,E,D){D<0&&S.x===1&&(a[w]=S.x-1),E.x===0&&E.z===0&&(a[w]=D/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){de("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Ct:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],a=[],o=new U,l=new gn;for(let f=0;f<=t;f++){let x=f/t;s[f]=this.getTangentAt(x,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(We(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,x))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(We(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Cr=class extends ci{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},il=class extends Cr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Oh(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var ld=new U,cd=new U,Qc=new Oh,th=new Oh,eh=new Oh,ys=class extends ci{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(cd.subVectors(s[0],s[1]).add(s[0]),c=cd);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(ld.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ld),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(d),f),b=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);b<1e-4&&(b=1),x<1e-4&&(x=b),g<1e-4&&(g=b),Qc.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,x,b,g),th.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,x,b,g),eh.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,x,b,g)}else this.curveType==="catmullrom"&&(Qc.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),th.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),eh.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Qc.calc(l),th.calc(l),eh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function hd(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function vp(i,t){let e=1-i;return e*e*t}function Mp(i,t){return 2*(1-i)*i*t}function Sp(i,t){return i*i*t}function ra(i,t,e,n){return vp(i,t)+Mp(i,e)+Sp(i,n)}function bp(i,t){let e=1-i;return e*e*e*t}function Ep(i,t){let e=1-i;return 3*e*e*i*t}function Tp(i,t){return 3*(1-i)*i*i*t}function wp(i,t){return i*i*i*t}function aa(i,t,e,n,s){return bp(i,t)+Ep(i,e)+Tp(i,n)+wp(i,s)}var va=class extends ci{constructor(t=new Ct,e=new Ct,n=new Ct,s=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ct){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(aa(t,s.x,r.x,a.x,o.x),aa(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sl=class extends ci{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(aa(t,s.x,r.x,a.x,o.x),aa(t,s.y,r.y,a.y,o.y),aa(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ma=class extends ci{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rl=class extends ci{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sa=class extends ci{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ra(t,s.x,r.x,a.x),ra(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ba=class extends ci{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ra(t,s.x,r.x,a.x),ra(t,s.y,r.y,a.y),ra(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ea=class extends ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(hd(o,l.x,c.x,u.x,d.x),hd(o,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ct().fromArray(s))}return this}},al=Object.freeze({__proto__:null,ArcCurve:il,CatmullRomCurve3:ys,CubicBezierCurve:va,CubicBezierCurve3:sl,EllipseCurve:Cr,LineCurve:Ma,LineCurve3:rl,QuadraticBezierCurve:Sa,QuadraticBezierCurve3:ba,SplineCurve:Ea}),ol=class extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new al[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new al[s.type]().fromJSON(s))}return this}},Ta=class extends ol{constructor(t){super(),this.type="Path",this.currentPoint=new Ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ma(this.currentPoint.clone(),new Ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Sa(this.currentPoint.clone(),new Ct(t,e),new Ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new va(this.currentPoint.clone(),new Ct(t,e),new Ct(n,s),new Ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ea(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Cr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},vs=class extends Ta{constructor(t){super(t),this.uuid=Ur(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ta().fromJSON(s))}return this}};function Ap(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=nf(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Lp(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,d=l;for(let h=e;h<s;h+=e){let f=i[h],x=i[h+1];f<o&&(o=f),x<l&&(l=x),f>u&&(u=f),x>d&&(d=x)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return wa(r,a,e,o,l,c,0),a}function nf(i,t,e,n,s){let r;if(s===Gp(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=ud(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=ud(a/n|0,i[a],i[a+1],r);return r&&Rr(r,r.next)&&(Ca(r),r=r.next),r}function Js(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Rr(e,e.next)||vn(e.prev,e,e.next)===0)){if(Ca(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function wa(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Bp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Rp(i,n,s,r):Cp(i)){t.push(l.i,i.i,c.i),Ca(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Ip(Js(i),t),wa(i,t,e,n,s,r,2)):a===2&&Pp(i,t,e,n,s,r):wa(Js(i),t,e,n,s,r,1);break}}}function Cp(i){let t=i.prev,e=i,n=i.next;if(vn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c),x=n.next;for(;x!==t;){if(x.x>=u&&x.x<=h&&x.y>=d&&x.y<=f&&sa(s,o,r,l,a,c,x.x,x.y)&&vn(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Rp(i,t,e,n){let s=i.prev,r=i,a=i.next;if(vn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),x=Math.min(u,d,h),b=Math.max(o,l,c),g=Math.max(u,d,h),p=hh(f,x,t,e,n),S=hh(b,g,t,e,n),w=i.prevZ,E=i.nextZ;for(;w&&w.z>=p&&E&&E.z<=S;){if(w.x>=f&&w.x<=b&&w.y>=x&&w.y<=g&&w!==s&&w!==a&&sa(o,u,l,d,c,h,w.x,w.y)&&vn(w.prev,w,w.next)>=0||(w=w.prevZ,E.x>=f&&E.x<=b&&E.y>=x&&E.y<=g&&E!==s&&E!==a&&sa(o,u,l,d,c,h,E.x,E.y)&&vn(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=b&&w.y>=x&&w.y<=g&&w!==s&&w!==a&&sa(o,u,l,d,c,h,w.x,w.y)&&vn(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;E&&E.z<=S;){if(E.x>=f&&E.x<=b&&E.y>=x&&E.y<=g&&E!==s&&E!==a&&sa(o,u,l,d,c,h,E.x,E.y)&&vn(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Ip(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Rr(n,s)&&rf(n,e,e.next,s)&&Aa(n,s)&&Aa(s,n)&&(t.push(n.i,e.i,s.i),Ca(e),Ca(e.next),e=i=s),e=e.next}while(e!==i);return Js(e)}function Pp(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&zp(a,o)){let l=af(a,o);a=Js(a,a.next),l=Js(l,l.next),wa(a,t,e,n,s,r,0),wa(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Lp(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=nf(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(kp(c))}s.sort(Dp);for(let r=0;r<s.length;r++)e=Np(s[r],e);return e}function Dp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Np(i,t){let e=Up(i,t);if(!e)return t;let n=af(e,i);return Js(n,n.next),Js(e,e.next)}function Up(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Rr(i,e))return e;do{if(Rr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&sf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Aa(e,i)&&(d<u||d===u&&(e.x>a.x||e.x===a.x&&Fp(a,e)))&&(a=e,u=d)}e=e.next}while(e!==o);return a}function Fp(i,t){return vn(i.prev,i,t.prev)<0&&vn(t.next,i,i.next)<0}function Bp(i,t,e,n){let s=i;do s.z===0&&(s.z=hh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Op(s)}function Op(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function hh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function kp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function sf(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function sa(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&sf(i,t,e,n,s,r,a,o)}function zp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Vp(i,t)&&(Aa(i,t)&&Aa(t,i)&&Hp(i,t)&&(vn(i.prev,i,t.prev)||vn(i,t.prev,t))||Rr(i,t)&&vn(i.prev,i,i.next)>0&&vn(t.prev,t,t.next)>0)}function vn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Rr(i,t){return i.x===t.x&&i.y===t.y}function rf(i,t,e,n){let s=Do(vn(i,t,e)),r=Do(vn(i,t,n)),a=Do(vn(e,n,i)),o=Do(vn(e,n,t));return!!(s!==r&&a!==o||s===0&&Lo(i,e,t)||r===0&&Lo(i,n,t)||a===0&&Lo(e,i,n)||o===0&&Lo(e,t,n))}function Lo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Do(i){return i>0?1:i<0?-1:0}function Vp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&rf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Aa(i,t){return vn(i.prev,i,i.next)<0?vn(i,t,i.next)>=0&&vn(i,i.prev,t)>=0:vn(i,t,i.prev)<0||vn(i,i.next,t)<0}function Hp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function af(i,t){let e=uh(i.i,i.x,i.y),n=uh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ud(i,t,e,n){let s=uh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ca(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function uh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gp(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var dh=class{static triangulate(t,e,n=2){return Ap(t,e,n)}},qs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];dd(t),fd(n,t);let a=t.length;e.forEach(dd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,fd(n,e[l]);let o=dh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function dd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function fd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ks=class i extends Cn{constructor(t=new vs([new Ct(.5,.5),new Ct(-.5,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ln(s,3)),this.setAttribute("uv",new ln(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:f-.1,b=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Wp,w,E=!1,D,C,F,_;if(p){w=p.getSpacedPoints(u),E=!0,h=!1;let nt=p.isCatmullRomCurve3?p.closed:!1;D=p.computeFrenetFrames(u,nt),C=new U,F=new U,_=new U}h||(g=0,f=0,x=0,b=0);let R=o.extractPoints(c),O=R.shape,L=R.holes;if(!qs.isClockWise(O)){O=O.reverse();for(let nt=0,dt=L.length;nt<dt;nt++){let st=L[nt];qs.isClockWise(st)&&(L[nt]=st.reverse())}}function j(nt){let st=10000000000000001e-36,At=nt[0];for(let Mt=1;Mt<=nt.length;Mt++){let fe=Mt%nt.length,N=nt[fe],Se=N.x-At.x,Wt=N.y-At.y,pe=Se*Se+Wt*Wt,ft=Math.max(Math.abs(N.x),Math.abs(N.y),Math.abs(At.x),Math.abs(At.y)),Be=st*ft*ft;if(pe<=Be){nt.splice(fe,1),Mt--;continue}At=N}}j(O),L.forEach(j);let K=L.length,V=O;for(let nt=0;nt<K;nt++){let dt=L[nt];O=O.concat(dt)}function q(nt,dt,st){return dt||_e("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(dt,st)}let X=O.length;function lt(nt,dt,st){let At,Mt,fe,N=nt.x-dt.x,Se=nt.y-dt.y,Wt=st.x-nt.x,pe=st.y-nt.y,ft=N*N+Se*Se,Be=N*pe-Se*Wt;if(Math.abs(Be)>Number.EPSILON){let A=Math.sqrt(ft),y=Math.sqrt(Wt*Wt+pe*pe),W=dt.x-Se/A,et=dt.y+N/A,at=st.x-pe/y,pt=st.y+Wt/y,xt=((at-W)*pe-(pt-et)*Wt)/(N*pe-Se*Wt);At=W+N*xt-nt.x,Mt=et+Se*xt-nt.y;let J=At*At+Mt*Mt;if(J<=2)return new Ct(At,Mt);fe=Math.sqrt(J/2)}else{let A=!1;N>Number.EPSILON?Wt>Number.EPSILON&&(A=!0):N<-Number.EPSILON?Wt<-Number.EPSILON&&(A=!0):Math.sign(Se)===Math.sign(pe)&&(A=!0),A?(At=-Se,Mt=N,fe=Math.sqrt(ft)):(At=N,Mt=Se,fe=Math.sqrt(ft/2))}return new Ct(At/fe,Mt/fe)}let ht=[];for(let nt=0,dt=V.length,st=dt-1,At=nt+1;nt<dt;nt++,st++,At++)st===dt&&(st=0),At===dt&&(At=0),ht[nt]=lt(V[nt],V[st],V[At]);let Et=[],Nt,Ht=ht.concat();for(let nt=0,dt=K;nt<dt;nt++){let st=L[nt];Nt=[];for(let At=0,Mt=st.length,fe=Mt-1,N=At+1;At<Mt;At++,fe++,N++)fe===Mt&&(fe=0),N===Mt&&(N=0),Nt[At]=lt(st[At],st[fe],st[N]);Et.push(Nt),Ht=Ht.concat(Nt)}let Ae;if(g===0)Ae=qs.triangulateShape(V,L);else{let nt=[],dt=[];for(let st=0;st<g;st++){let At=st/g,Mt=f*Math.cos(At*Math.PI/2),fe=x*Math.sin(At*Math.PI/2)+b;for(let N=0,Se=V.length;N<Se;N++){let Wt=q(V[N],ht[N],fe);Xt(Wt.x,Wt.y,-Mt),At===0&&nt.push(Wt)}for(let N=0,Se=K;N<Se;N++){let Wt=L[N];Nt=Et[N];let pe=[];for(let ft=0,Be=Wt.length;ft<Be;ft++){let A=q(Wt[ft],Nt[ft],fe);Xt(A.x,A.y,-Mt),At===0&&pe.push(A)}At===0&&dt.push(pe)}}Ae=qs.triangulateShape(nt,dt)}let oe=Ae.length,Gt=x+b;for(let nt=0;nt<X;nt++){let dt=h?q(O[nt],Ht[nt],Gt):O[nt];E?(F.copy(D.normals[0]).multiplyScalar(dt.x),C.copy(D.binormals[0]).multiplyScalar(dt.y),_.copy(w[0]).add(F).add(C),Xt(_.x,_.y,_.z)):Xt(dt.x,dt.y,0)}for(let nt=1;nt<=u;nt++)for(let dt=0;dt<X;dt++){let st=h?q(O[dt],Ht[dt],Gt):O[dt];E?(F.copy(D.normals[nt]).multiplyScalar(st.x),C.copy(D.binormals[nt]).multiplyScalar(st.y),_.copy(w[nt]).add(F).add(C),Xt(_.x,_.y,_.z)):Xt(st.x,st.y,d/u*nt)}for(let nt=g-1;nt>=0;nt--){let dt=nt/g,st=f*Math.cos(dt*Math.PI/2),At=x*Math.sin(dt*Math.PI/2)+b;for(let Mt=0,fe=V.length;Mt<fe;Mt++){let N=q(V[Mt],ht[Mt],At);Xt(N.x,N.y,d+st)}for(let Mt=0,fe=L.length;Mt<fe;Mt++){let N=L[Mt];Nt=Et[Mt];for(let Se=0,Wt=N.length;Se<Wt;Se++){let pe=q(N[Se],Nt[Se],At);E?Xt(pe.x,pe.y+w[u-1].y,w[u-1].x+st):Xt(pe.x,pe.y,d+st)}}}tt(),Pt();function tt(){let nt=s.length/3;if(h){let dt=0,st=X*dt;for(let At=0;At<oe;At++){let Mt=Ae[At];le(Mt[2]+st,Mt[1]+st,Mt[0]+st)}dt=u+g*2,st=X*dt;for(let At=0;At<oe;At++){let Mt=Ae[At];le(Mt[0]+st,Mt[1]+st,Mt[2]+st)}}else{for(let dt=0;dt<oe;dt++){let st=Ae[dt];le(st[2],st[1],st[0])}for(let dt=0;dt<oe;dt++){let st=Ae[dt];le(st[0]+X*u,st[1]+X*u,st[2]+X*u)}}n.addGroup(nt,s.length/3-nt,0)}function Pt(){let nt=s.length/3,dt=0;_t(V,dt),dt+=V.length;for(let st=0,At=L.length;st<At;st++){let Mt=L[st];_t(Mt,dt),dt+=Mt.length}n.addGroup(nt,s.length/3-nt,1)}function _t(nt,dt){let st=nt.length;for(;--st>=0;){let At=st,Mt=st-1;Mt<0&&(Mt=nt.length-1);for(let fe=0,N=u+g*2;fe<N;fe++){let Se=X*fe,Wt=X*(fe+1),pe=dt+At+Se,ft=dt+Mt+Se,Be=dt+Mt+Wt,A=dt+At+Wt;ce(pe,ft,Be,A)}}}function Xt(nt,dt,st){l.push(nt),l.push(dt),l.push(st)}function le(nt,dt,st){He(nt),He(dt),He(st);let At=s.length/3,Mt=S.generateTopUV(n,s,At-3,At-2,At-1);jt(Mt[0]),jt(Mt[1]),jt(Mt[2])}function ce(nt,dt,st,At){He(nt),He(dt),He(At),He(dt),He(st),He(At);let Mt=s.length/3,fe=S.generateSideWallUV(n,s,Mt-6,Mt-3,Mt-2,Mt-1);jt(fe[0]),jt(fe[1]),jt(fe[3]),jt(fe[1]),jt(fe[2]),jt(fe[3])}function He(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function jt(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Xp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new al[s.type]().fromJSON(s)),new i(n,t.options)}},Wp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new Ct(r,a),new Ct(o,l),new Ct(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[s*3],f=t[s*3+1],x=t[s*3+2],b=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Ct(a,1-l),new Ct(c,1-d),new Ct(h,1-x),new Ct(b,1-p)]:[new Ct(o,1-l),new Ct(u,1-d),new Ct(f,1-x),new Ct(g,1-p)]}};function Xp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ra=class i extends nl{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},js=class i extends Cn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,f=[],x=[],b=[],g=[];for(let p=0;p<u;p++){let S=p*h-a;for(let w=0;w<c;w++){let E=w*d-r;x.push(E,-S,0),b.push(0,0,1),g.push(w/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let w=S+c*p,E=S+c*(p+1),D=S+1+c*(p+1),C=S+1+c*p;f.push(w,E,C),f.push(E,D,C)}this.setIndex(f),this.setAttribute("position",new ln(x,3)),this.setAttribute("normal",new ln(b,3)),this.setAttribute("uv",new ln(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var hi=class i extends Cn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new U,h=new U,f=[],x=[],b=[],g=[];for(let p=0;p<=n;p++){let S=[],w=p/n,E=0;p===0&&a===0?E=.5/e:p===n&&l===Math.PI&&(E=-.5/e);for(let D=0;D<=e;D++){let C=D/e;d.x=-t*Math.cos(s+C*r)*Math.sin(a+w*o),d.y=t*Math.cos(a+w*o),d.z=t*Math.sin(s+C*r)*Math.sin(a+w*o),x.push(d.x,d.y,d.z),h.copy(d).normalize(),b.push(h.x,h.y,h.z),g.push(C+E,1-w),S.push(c++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let w=u[p][S+1],E=u[p][S],D=u[p+1][S],C=u[p+1][S+1];(p!==0||a>0)&&f.push(w,E,C),(p!==n-1||l<Math.PI)&&f.push(E,D,C)}this.setIndex(f),this.setAttribute("position",new ln(x,3)),this.setAttribute("normal",new ln(b,3)),this.setAttribute("uv",new ln(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var is=class i extends Cn{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new U,f=new U,x=new U;for(let b=0;b<=n;b++){let g=a+b/n*o;for(let p=0;p<=s;p++){let S=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(S),f.y=(t+e*Math.cos(g))*Math.sin(S),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),h.x=t*Math.cos(S),h.y=t*Math.sin(S),x.subVectors(f,h).normalize(),u.push(x.x,x.y,x.z),d.push(p/s),d.push(b/n)}}for(let b=1;b<=n;b++)for(let g=1;g<=s;g++){let p=(s+1)*b+g-1,S=(s+1)*(b-1)+g-1,w=(s+1)*(b-1)+g,E=(s+1)*b+g;l.push(p,S,E),l.push(S,w,E)}this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ms=class i extends Cn{constructor(t=new ba(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,l=new U,c=new Ct,u=new U,d=[],h=[],f=[],x=[];b(),this.setIndex(x),this.setAttribute("position",new ln(d,3)),this.setAttribute("normal",new ln(h,3)),this.setAttribute("uv",new ln(f,2));function b(){for(let w=0;w<e;w++)g(w);g(r===!1?e:0),S(),p()}function g(w){u=t.getPointAt(w/e,u);let E=a.normals[w],D=a.binormals[w];for(let C=0;C<=s;C++){let F=C/s*Math.PI*2,_=Math.sin(F),R=-Math.cos(F);l.x=R*E.x+_*D.x,l.y=R*E.y+_*D.y,l.z=R*E.z+_*D.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=e;w++)for(let E=1;E<=s;E++){let D=(s+1)*(w-1)+(E-1),C=(s+1)*w+(E-1),F=(s+1)*w+E,_=(s+1)*(w-1)+E;x.push(D,C,_),x.push(C,F,_)}}function S(){for(let w=0;w<=e;w++)for(let E=0;E<=s;E++)c.x=w/e,c.y=E/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new al[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function er(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(pd(s))s.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(pd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function $n(i){let t={};for(let e=0;e<i.length;e++){let n=er(i[e]);for(let s in n)t[s]=n[s]}return t}function pd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function qp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function kh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qe.workingColorSpace}var of={clone:er,merge:$n},Yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ui=class extends ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yp,this.fragmentShader=$p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=qp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ll=class extends ui{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},di=class extends ts{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cc,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var cl=class extends ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hl=class extends ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function No(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}var Ss=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ul=class extends Ss{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sh,endingEnd:sh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case rh:r=t,o=2*e-n;break;case ah:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rh:a=t,l=2*n-e;break;case ah:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,x=(n-e)/(s-e),b=x*x,g=b*x,p=-h*g+2*h*b-h*x,S=(1+h)*g+(-1.5-2*h)*b+(-.5+h)*x+1,w=(-1-f)*g+(1.5+f)*b+.5*x,E=f*g-f*b;for(let D=0;D!==o;++D)r[D]=p*a[u+D]+S*a[c+D]+w*a[l+D]+E*a[d+D];return r}},dl=class extends Ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},fl=class extends Ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},pl=class extends Ss{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.settings||this.DefaultSettings_,d=u.inTangents,h=u.outTangents;if(!d||!h){let b=(n-e)/(s-e),g=1-b;for(let p=0;p!==o;++p)r[p]=a[c+p]*g+a[l+p]*b;return r}let f=o*2,x=t-1;for(let b=0;b!==o;++b){let g=a[c+b],p=a[l+b],S=x*f+b*2,w=h[S],E=h[S+1],D=t*f+b*2,C=d[D],F=d[D+1],_=(n-e)/(s-e),R,O,L,H,j;for(let K=0;K<8;K++){R=_*_,O=R*_,L=1-_,H=L*L,j=H*L;let q=j*e+3*H*_*w+3*L*R*C+O*s-n;if(Math.abs(q)<1e-10)break;let X=3*H*(w-e)+6*L*_*(C-w)+3*R*(s-C);if(Math.abs(X)<1e-10)break;_=_-q/X,_=Math.max(0,Math.min(1,_))}r[b]=j*g+3*H*_*E+3*L*R*F+O*p}return r}},fi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=No(e,this.TimeBufferType),this.values=No(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:No(t.times,Array),values:No(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new pl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case oa:e=this.InterpolantFactoryMethodDiscrete;break;case $o:e=this.InterpolantFactoryMethodLinear;break;case Bo:e=this.InterpolantFactoryMethodSmooth;break;case ih:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return de("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oa;case this.InterpolantFactoryMethodLinear:return $o;case this.InterpolantFactoryMethodSmooth:return Bo;case this.InterpolantFactoryMethodBezier:return ih}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(_e("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(_e("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){_e("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){_e("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&tp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){_e("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Bo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,h=d-n,f=d+n;for(let x=0;x!==n;++x){let b=e[d+x];if(b!==e[h+x]||b!==e[f+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};fi.prototype.ValueTypeName="";fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=$o;var bs=class extends fi{constructor(t,e,n){super(t,e,n)}};bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=oa;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}};ml.prototype.ValueTypeName="color";var gl=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}};gl.prototype.ValueTypeName="number";var xl=class extends Ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Di.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ia=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new xl(this.times,this.values,this.getValueSize(),t)}};Ia.prototype.ValueTypeName="quaternion";Ia.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends fi{constructor(t,e,n){super(t,e,n)}};Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=oa;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}};_l.prototype.ValueTypeName="vector";var yl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],x=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},lf=new yl,vl=class{constructor(t){this.manager=t!==void 0?t:lf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};vl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ir=class extends Yn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var nh=new gn,md=new U,gd=new U,Ml=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new gn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Mn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;md.setFromMatrixPosition(t.matrixWorld),e.position.copy(md),gd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gd),e.updateMatrixWorld(),nh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nh,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Sr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Uo=new U,Fo=new Di,Ci=new U,Pa=class extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gn,this.projectionMatrix=new gn,this.projectionMatrixInverse=new gn,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Uo,Fo,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Fo,Ci.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Uo,Fo,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Fo,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ps=new U,xd=new Ct,_d=new Ct,Fn=class extends Pa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ic*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(Ic*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ps.x,ps.y).multiplyScalar(-t/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ps.x,ps.y).multiplyScalar(-t/ps.z)}getViewSize(t,e){return this.getViewBounds(t,xd,_d),e.subVectors(_d,xd)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ic*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var fh=class extends Ml{constructor(){super(new Fn(90,1,.5,500)),this.isPointLightShadow=!0}},La=class extends Ir{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new fh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Pr=class extends Pa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ph=class extends Ml{constructor(){super(new Pr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qs=class extends Ir{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yn.DEFAULT_UP),this.updateMatrix(),this.target=new Yn,this.shadow=new ph}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Da=class extends Ir{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var yr=-90,vr=1,Sl=class extends Yn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fn(yr,vr,t,e);s.layers=this.layers,this.add(s);let r=new Fn(yr,vr,t,e);r.layers=this.layers,this.add(r);let a=new Fn(yr,vr,t,e);a.layers=this.layers,this.add(a);let o=new Fn(yr,vr,t,e);o.layers=this.layers,this.add(o);let l=new Fn(yr,vr,t,e);l.layers=this.layers,this.add(l);let c=new Fn(yr,vr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},bl=class extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var zh="\\[\\]\\.:\\/",Zp=new RegExp("["+zh+"]","g"),Vh="[^"+zh+"]",Jp="[^"+zh.replace("\\.","")+"]",Kp=/((?:WC+[\/:])*)/.source.replace("WC",Vh),jp=/(WCOD+)?/.source.replace("WCOD",Jp),Qp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vh),tm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vh),em=new RegExp("^"+Kp+jp+Qp+tm+"$"),nm=["material","materials","bones","map"],mh=class{constructor(t,e,n){let s=n||pn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Zp,"")}static parseTrackName(t){let e=em.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);nm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){de("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){_e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){_e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){_e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){_e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){_e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){_e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){_e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;_e("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){_e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){_e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pn.Composite=mh;pn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pn.prototype.GetterByBindingType=[pn.prototype._getValue_direct,pn.prototype._getValue_array,pn.prototype._getValue_arrayElement,pn.prototype._getValue_toArray];pn.prototype.SetterByBindingTypeAndVersioning=[[pn.prototype._setValue_direct,pn.prototype._setValue_direct_setNeedsUpdate,pn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_array,pn.prototype._setValue_array_setNeedsUpdate,pn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_arrayElement,pn.prototype._setValue_arrayElement_setNeedsUpdate,pn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_fromArray,pn.prototype._setValue_fromArray_setNeedsUpdate,pn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var J_=new Float32Array(1);var Na=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,de("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var gh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Hh(i,t,e,n){let s=im(n);switch(e){case Dh:return i*t;case Uh:return i*t/s.components*s.byteLength;case Il:return i*t/s.components*s.byteLength;case Cs:return i*t*2/s.components*s.byteLength;case Pl:return i*t*2/s.components*s.byteLength;case Nh:return i*t*3/s.components*s.byteLength;case _i:return i*t*4/s.components*s.byteLength;case Ll:return i*t*4/s.components*s.byteLength;case ka:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Va:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:case Fl:return Math.max(i,16)*Math.max(t,8)/4;case Dl:case Ul:return Math.max(i,8)*Math.max(t,8)/2;case Bl:case Ol:case zl:case Vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case kl:case Ga:case Hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ql:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $l:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case jl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case nc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ic:case sc:case rc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ac:case oc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Wa:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function im(i){switch(i){case ii:case Rh:return{byteLength:1,components:1};case Dr:case Ih:case Fi:return{byteLength:2,components:1};case Cl:case Rl:return{byteLength:2,components:4};case Ti:case Al:case wi:return{byteLength:4,components:1};case Ph:case Lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function Pf(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function rm(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,x)=>f.start-x.start);let h=0;for(let f=1;f<d.length;f++){let x=d[h],b=d[f];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++h,d[h]=b)}d.length=h+1;for(let f=0,x=d.length;f<x;f++){let b=d[f];i.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var am=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,om=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,um=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,mm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_m=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ym=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Rm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Im=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Om=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ym=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Km=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,jm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,s0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,r0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,a0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,o0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,c0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,g0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,b0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,T0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,I0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,F0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,X0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,J0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,og=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ag=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Og=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:am,alphahash_pars_fragment:om,alphamap_fragment:lm,alphamap_pars_fragment:cm,alphatest_fragment:hm,alphatest_pars_fragment:um,aomap_fragment:dm,aomap_pars_fragment:fm,batching_pars_vertex:pm,batching_vertex:mm,begin_vertex:gm,beginnormal_vertex:xm,bsdfs:_m,iridescence_fragment:ym,bumpmap_pars_fragment:vm,clipping_planes_fragment:Mm,clipping_planes_pars_fragment:Sm,clipping_planes_pars_vertex:bm,clipping_planes_vertex:Em,color_fragment:Tm,color_pars_fragment:wm,color_pars_vertex:Am,color_vertex:Cm,common:Rm,cube_uv_reflection_fragment:Im,defaultnormal_vertex:Pm,displacementmap_pars_vertex:Lm,displacementmap_vertex:Dm,emissivemap_fragment:Nm,emissivemap_pars_fragment:Um,colorspace_fragment:Fm,colorspace_pars_fragment:Bm,envmap_fragment:Om,envmap_common_pars_fragment:km,envmap_pars_fragment:zm,envmap_pars_vertex:Vm,envmap_physical_pars_fragment:jm,envmap_vertex:Hm,fog_vertex:Gm,fog_pars_vertex:Wm,fog_fragment:Xm,fog_pars_fragment:qm,gradientmap_pars_fragment:Ym,lightmap_pars_fragment:$m,lights_lambert_fragment:Zm,lights_lambert_pars_fragment:Jm,lights_pars_begin:Km,lights_toon_fragment:Qm,lights_toon_pars_fragment:t0,lights_phong_fragment:e0,lights_phong_pars_fragment:n0,lights_physical_fragment:i0,lights_physical_pars_fragment:s0,lights_fragment_begin:r0,lights_fragment_maps:a0,lights_fragment_end:o0,lightprobes_pars_fragment:l0,logdepthbuf_fragment:c0,logdepthbuf_pars_fragment:h0,logdepthbuf_pars_vertex:u0,logdepthbuf_vertex:d0,map_fragment:f0,map_pars_fragment:p0,map_particle_fragment:m0,map_particle_pars_fragment:g0,metalnessmap_fragment:x0,metalnessmap_pars_fragment:_0,morphinstance_vertex:y0,morphcolor_vertex:v0,morphnormal_vertex:M0,morphtarget_pars_vertex:S0,morphtarget_vertex:b0,normal_fragment_begin:E0,normal_fragment_maps:T0,normal_pars_fragment:w0,normal_pars_vertex:A0,normal_vertex:C0,normalmap_pars_fragment:R0,clearcoat_normal_fragment_begin:I0,clearcoat_normal_fragment_maps:P0,clearcoat_pars_fragment:L0,iridescence_pars_fragment:D0,opaque_fragment:N0,packing:U0,premultiplied_alpha_fragment:F0,project_vertex:B0,dithering_fragment:O0,dithering_pars_fragment:k0,roughnessmap_fragment:z0,roughnessmap_pars_fragment:V0,shadowmap_pars_fragment:H0,shadowmap_pars_vertex:G0,shadowmap_vertex:W0,shadowmask_pars_fragment:X0,skinbase_vertex:q0,skinning_pars_vertex:Y0,skinning_vertex:$0,skinnormal_vertex:Z0,specularmap_fragment:J0,specularmap_pars_fragment:K0,tonemapping_fragment:j0,tonemapping_pars_fragment:Q0,transmission_fragment:tg,transmission_pars_fragment:eg,uv_pars_fragment:ng,uv_pars_vertex:ig,uv_vertex:sg,worldpos_vertex:rg,background_vert:ag,background_frag:og,backgroundCube_vert:lg,backgroundCube_frag:cg,cube_vert:hg,cube_frag:ug,depth_vert:dg,depth_frag:fg,distance_vert:pg,distance_frag:mg,equirect_vert:gg,equirect_frag:xg,linedashed_vert:_g,linedashed_frag:yg,meshbasic_vert:vg,meshbasic_frag:Mg,meshlambert_vert:Sg,meshlambert_frag:bg,meshmatcap_vert:Eg,meshmatcap_frag:Tg,meshnormal_vert:wg,meshnormal_frag:Ag,meshphong_vert:Cg,meshphong_frag:Rg,meshphysical_vert:Ig,meshphysical_frag:Pg,meshtoon_vert:Lg,meshtoon_frag:Dg,points_vert:Ng,points_frag:Ug,shadow_vert:Fg,shadow_frag:Bg,sprite_vert:Og,sprite_frag:kg},Dt={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Oi={basic:{uniforms:$n([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:$n([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:$n([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:$n([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:$n([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:$n([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:$n([Dt.points,Dt.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:$n([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:$n([Dt.common,Dt.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:$n([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:$n([Dt.sprite,Dt.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:$n([Dt.common,Dt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:$n([Dt.lights,Dt.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Oi.physical={uniforms:$n([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var dc={r:0,b:0,g:0},zg=new gn,Lf=new De;Lf.set(-1,0,0,0,1,0,0,0,1);function Vg(i,t,e,n,s,r){let a=new Ge(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let E=S.backgroundBlurriness>0;w=t.get(w,E)}return w}function x(S){let w=!1,E=f(S);E===null?g(a,o):E&&E.isColor&&(g(E,1),w=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?e.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(S,w){let E=f(w);E&&(E.isCubeTexture||E.mapping===Ba)?(c===void 0&&(c=new Ot(new ni(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:er(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zg.makeRotationFromEuler(w.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Lf),c.material.toneMapped=qe.getTransfer(E.colorSpace)!==nn,(u!==E||d!==E.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Ot(new js(2,2),new ui({name:"BackgroundMaterial",uniforms:er(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=qe.getTransfer(E.colorSpace)!==nn,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,w){S.getRGB(dc,kh(i)),e.buffers.color.setClear(dc.r,dc.g,dc.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:x,addToRenderList:b,dispose:p}}function Hg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(L,H,j,K,V){let q=!1,X=d(L,K,j,H);r!==X&&(r=X,c(r.object)),q=f(L,K,j,V),q&&x(L,K,j,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,E(L,H,j,K),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function d(L,H,j,K){let V=K.wireframe===!0,q=n[H.id];q===void 0&&(q={},n[H.id]=q);let X=L.isInstancedMesh===!0?L.id:0,lt=q[X];lt===void 0&&(lt={},q[X]=lt);let ht=lt[j.id];ht===void 0&&(ht={},lt[j.id]=ht);let Et=ht[V];return Et===void 0&&(Et=h(l()),ht[V]=Et),Et}function h(L){let H=[],j=[],K=[];for(let V=0;V<e;V++)H[V]=0,j[V]=0,K[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:K,object:L,attributes:{},index:null}}function f(L,H,j,K){let V=r.attributes,q=H.attributes,X=0,lt=j.getAttributes();for(let ht in lt)if(lt[ht].location>=0){let Nt=V[ht],Ht=q[ht];if(Ht===void 0&&(ht==="instanceMatrix"&&L.instanceMatrix&&(Ht=L.instanceMatrix),ht==="instanceColor"&&L.instanceColor&&(Ht=L.instanceColor)),Nt===void 0||Nt.attribute!==Ht||Ht&&Nt.data!==Ht.data)return!0;X++}return r.attributesNum!==X||r.index!==K}function x(L,H,j,K){let V={},q=H.attributes,X=0,lt=j.getAttributes();for(let ht in lt)if(lt[ht].location>=0){let Nt=q[ht];Nt===void 0&&(ht==="instanceMatrix"&&L.instanceMatrix&&(Nt=L.instanceMatrix),ht==="instanceColor"&&L.instanceColor&&(Nt=L.instanceColor));let Ht={};Ht.attribute=Nt,Nt&&Nt.data&&(Ht.data=Nt.data),V[ht]=Ht,X++}r.attributes=V,r.attributesNum=X,r.index=K}function b(){let L=r.newAttributes;for(let H=0,j=L.length;H<j;H++)L[H]=0}function g(L){p(L,0)}function p(L,H){let j=r.newAttributes,K=r.enabledAttributes,V=r.attributeDivisors;j[L]=1,K[L]===0&&(i.enableVertexAttribArray(L),K[L]=1),V[L]!==H&&(i.vertexAttribDivisor(L,H),V[L]=H)}function S(){let L=r.newAttributes,H=r.enabledAttributes;for(let j=0,K=H.length;j<K;j++)H[j]!==L[j]&&(i.disableVertexAttribArray(j),H[j]=0)}function w(L,H,j,K,V,q,X){X===!0?i.vertexAttribIPointer(L,H,j,V,q):i.vertexAttribPointer(L,H,j,K,V,q)}function E(L,H,j,K){b();let V=K.attributes,q=j.getAttributes(),X=H.defaultAttributeValues;for(let lt in q){let ht=q[lt];if(ht.location>=0){let Et=V[lt];if(Et===void 0&&(lt==="instanceMatrix"&&L.instanceMatrix&&(Et=L.instanceMatrix),lt==="instanceColor"&&L.instanceColor&&(Et=L.instanceColor)),Et!==void 0){let Nt=Et.normalized,Ht=Et.itemSize,Ae=t.get(Et);if(Ae===void 0)continue;let oe=Ae.buffer,Gt=Ae.type,tt=Ae.bytesPerElement,Pt=Gt===i.INT||Gt===i.UNSIGNED_INT||Et.gpuType===Al;if(Et.isInterleavedBufferAttribute){let _t=Et.data,Xt=_t.stride,le=Et.offset;if(_t.isInstancedInterleavedBuffer){for(let ce=0;ce<ht.locationSize;ce++)p(ht.location+ce,_t.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let ce=0;ce<ht.locationSize;ce++)g(ht.location+ce);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let ce=0;ce<ht.locationSize;ce++)w(ht.location+ce,Ht/ht.locationSize,Gt,Nt,Xt*tt,(le+Ht/ht.locationSize*ce)*tt,Pt)}else{if(Et.isInstancedBufferAttribute){for(let _t=0;_t<ht.locationSize;_t++)p(ht.location+_t,Et.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let _t=0;_t<ht.locationSize;_t++)g(ht.location+_t);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let _t=0;_t<ht.locationSize;_t++)w(ht.location+_t,Ht/ht.locationSize,Gt,Nt,Ht*tt,Ht/ht.locationSize*_t*tt,Pt)}}else if(X!==void 0){let Nt=X[lt];if(Nt!==void 0)switch(Nt.length){case 2:i.vertexAttrib2fv(ht.location,Nt);break;case 3:i.vertexAttrib3fv(ht.location,Nt);break;case 4:i.vertexAttrib4fv(ht.location,Nt);break;default:i.vertexAttrib1fv(ht.location,Nt)}}}}S()}function D(){R();for(let L in n){let H=n[L];for(let j in H){let K=H[j];for(let V in K){let q=K[V];for(let X in q)u(q[X].object),delete q[X];delete K[V]}}delete n[L]}}function C(L){if(n[L.id]===void 0)return;let H=n[L.id];for(let j in H){let K=H[j];for(let V in K){let q=K[V];for(let X in q)u(q[X].object),delete q[X];delete K[V]}}delete n[L.id]}function F(L){for(let H in n){let j=n[H];for(let K in j){let V=j[K];if(V[L.id]===void 0)continue;let q=V[L.id];for(let X in q)u(q[X].object),delete q[X];delete V[L.id]}}}function _(L){for(let H in n){let j=n[H],K=L.isInstancedMesh===!0?L.id:0,V=j[K];if(V!==void 0){for(let q in V){let X=V[q];for(let lt in X)u(X[lt].object),delete X[lt];delete V[q]}delete j[K],Object.keys(j).length===0&&delete n[H]}}}function R(){O(),a=!0,r!==s&&(r=s,c(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:O,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfObject:_,releaseStatesOfProgram:F,initAttributes:b,enableAttribute:g,disableUnusedAttributes:S}}function Gg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Wg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let F=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(F){return!(F!==_i&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(F){let _=F===Fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==ii&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==wi&&!_)}function l(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(de("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&de("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:E,maxSamples:D,samples:C}}function Xg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Ri,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let x=d.clippingPlanes,b=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||x===null||x.length===0||r&&!g)r?u(null):c();else{let S=r?0:n,w=S*4,E=p.clippingState||null;l.value=E,E=u(x,h,w,f);for(let D=0;D!==w;++D)E[D]=e[D];p.clippingState=E,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,x){let b=d!==null?d.length:0,g=null;if(b!==0){if(g=l.value,x!==!0||g===null){let p=f+b*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let w=0,E=f;w!==b;++w,E+=4)a.copy(d[w]).applyMatrix4(S,o),a.normal.toArray(g,E),g[E+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}var Rs=4,cf=[.125,.215,.35,.446,.526,.582],nr=20,qg=256,Xa=new Pr,hf=new Ge,Gh=null,Wh=0,Xh=0,qh=!1,Yg=new U,pc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Yg}=r;Gh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Gh,Wh,Xh),this._renderer.xr.enabled=qh,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Fi,format:_i,colorSpace:la,depthBuffer:!1},s=uf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$g(r)),this._blurMaterial=Jg(r,t,e),this._ggxMaterial=Zg(r,t,e)}return s}_compileMaterial(t){let e=new Ot(new Cn,t);this._renderer.compile(e,Xa)}_sceneToCubeUV(t,e,n,s,r){let l=new Fn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(hf),d.toneMapping=Ei,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new ni,new es({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,p=!1,S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,p=!0):(g.color.copy(hf),p=!0);for(let w=0;w<6;w++){let E=w%3;E===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):E===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));let D=this._cubeSize;Fr(s,E*D,w>2?D:0,D,D),d.setRenderTarget(s),p&&d.render(b,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ts||t.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=df());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Fr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Xa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:x}=this,b=this._sizeLods[n],g=3*b*(n>x-Rs?n-x+Rs:0),p=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=x-e,Fr(r,g,p,3*b,2*b),s.setRenderTarget(r),s.render(o,Xa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Fr(t,g,p,3*b,2*b),s.setRenderTarget(t),s.render(o,Xa)}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&_e("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[s];d.material=c;let h=c.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*nr-1),b=r/x,g=isFinite(r)?1+Math.floor(u*b):nr;g>nr&&de(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${nr}`);let p=[],S=0;for(let F=0;F<nr;++F){let _=F/b,R=Math.exp(-_*_/2);p.push(R),F===0?S+=R:F<g&&(S+=2*R)}for(let F=0;F<p.length;F++)p[F]=p[F]/S;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:w}=this;h.dTheta.value=x,h.mipInt.value=w-n;let E=this._sizeLods[s],D=3*E*(s>w-Rs?s-w+Rs:0),C=4*(this._cubeSize-E);Fr(e,D,C,3*E,2*E),l.setRenderTarget(e),l.render(d,Xa)}};function $g(i){let t=[],e=[],n=[],s=i,r=i-Rs+1+cf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Rs?l=cf[a-i+Rs-1]:a===0&&(l=0),e.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,x=6,b=3,g=2,p=1,S=new Float32Array(b*x*f),w=new Float32Array(g*x*f),E=new Float32Array(p*x*f);for(let C=0;C<f;C++){let F=C%3*2/3-1,_=C>2?0:-1,R=[F,_,0,F+2/3,_,0,F+2/3,_+1,0,F,_,0,F+2/3,_+1,0,F,_+1,0];S.set(R,b*x*C),w.set(h,g*x*C);let O=[C,C,C,C,C,C];E.set(O,p*x*C)}let D=new Cn;D.setAttribute("position",new Kn(S,b)),D.setAttribute("uv",new Kn(w,g)),D.setAttribute("faceIndex",new Kn(E,p)),n.push(new Ot(D,null)),s>Rs&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function uf(i,t,e){let n=new li(i,t,e);return n.texture.mapping=Ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Zg(i,t,e){return new ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Jg(i,t,e){let n=new Float32Array(nr),s=new U(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function df(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function ff(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function xc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var mc=class extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _a(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ni(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qn,blending:Ui});r.uniforms.tEquirect.value=e;let a=new Ot(s,r),o=e.minFilter;return e.minFilter===ws&&(e.minFilter=Bn),new Sl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Kg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===El||f===Tl)if(t.has(h)){let x=t.get(h).texture;return o(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let b=new mc(x.height);return b.fromEquirectangularTexture(i,h),t.set(h,b),h.addEventListener("dispose",c),o(b.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,x=f===El||f===Tl,b=f===Ts||f===tr;if(x||b){let g=e.get(h),p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new pc(i)),g=x?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{let S=h.image;return x&&S&&S.height>0||b&&S&&l(S)?(n===null&&(n=new pc(i)),g=x?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,f){return f===El?h.mapping=Ts:f===Tl&&(h.mapping=tr),h}function l(h){let f=0,x=6;for(let b=0;b<x;b++)h[b]!==void 0&&f++;return f===x}function c(h){let f=h.target;f.removeEventListener("dispose",c);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function jg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Zo("WebGLRenderer: "+n+" extension not supported."),s}}}function Qg(i,t,e,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let x in h.attributes)t.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)t.update(h[f],i.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,x=d.attributes.position,b=0;if(x===void 0)return;if(f!==null){let S=f.array;b=f.version;for(let w=0,E=S.length;w<E;w+=3){let D=S[w+0],C=S[w+1],F=S[w+2];h.push(D,C,C,F,F,D)}}else{let S=x.array;b=x.version;for(let w=0,E=S.length/3-1;w<E;w+=3){let D=w+0,C=w+1,F=w+2;h.push(D,C,C,F,F,D)}}let g=new(x.count>=65535?ma:pa)(h,1);g.version=b;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function tx(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let b=0;for(let g=0;g<f;g++)b+=h[g];e.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ex(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:_e("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function nx(i,t,e){let n=new WeakMap,s=new Mn;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let R=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",R)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],w=0;f===!0&&(w=1),x===!0&&(w=2),b===!0&&(w=3);let E=o.attributes.position.count*w,D=1;E>t.maxTextureSize&&(D=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let C=new Float32Array(E*D*4*d),F=new ua(C,E,D,d);F.type=wi,F.needsUpdate=!0;let _=w*4;for(let O=0;O<d;O++){let L=g[O],H=p[O],j=S[O],K=E*D*4*O;for(let V=0;V<L.count;V++){let q=V*_;f===!0&&(s.fromBufferAttribute(L,V),C[K+q+0]=s.x,C[K+q+1]=s.y,C[K+q+2]=s.z,C[K+q+3]=0),x===!0&&(s.fromBufferAttribute(H,V),C[K+q+4]=s.x,C[K+q+5]=s.y,C[K+q+6]=s.z,C[K+q+7]=0),b===!0&&(s.fromBufferAttribute(j,V),C[K+q+8]=s.x,C[K+q+9]=s.y,C[K+q+10]=s.z,C[K+q+11]=j.itemSize===4?s.w:1)}}h={count:d,texture:F,size:new Ct(E,D)},n.set(o,h),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function ix(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var sx={[Sh]:"LINEAR_TONE_MAPPING",[bh]:"REINHARD_TONE_MAPPING",[Eh]:"CINEON_TONE_MAPPING",[Fa]:"ACES_FILMIC_TONE_MAPPING",[wh]:"AGX_TONE_MAPPING",[Ah]:"NEUTRAL_TONE_MAPPING",[Th]:"CUSTOM_TONE_MAPPING"};function rx(i,t,e,n,s){let r=new li(t,e,{type:i,depthBuffer:n,stencilBuffer:s,depthTexture:n?new ns(t,e):void 0}),a=new li(t,e,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),o=new Cn;o.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ln([0,2,0,0,2,0],2));let l=new ll({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ot(o,l),u=new Pr(-1,1,1,-1,0,1),d=null,h=null,f=!1,x,b=null,g=[],p=!1;this.setSize=function(S,w){r.setSize(S,w),a.setSize(S,w);for(let E=0;E<g.length;E++){let D=g[E];D.setSize&&D.setSize(S,w)}},this.setEffects=function(S){g=S,p=g.length>0&&g[0].isRenderPass===!0;let w=r.width,E=r.height;for(let D=0;D<g.length;D++){let C=g[D];C.setSize&&C.setSize(w,E)}},this.begin=function(S,w){if(f||S.toneMapping===Ei&&g.length===0)return!1;if(b=w,w!==null){let E=w.width,D=w.height;(r.width!==E||r.height!==D)&&this.setSize(E,D)}return p===!1&&S.setRenderTarget(r),x=S.toneMapping,S.toneMapping=Ei,!0},this.hasRenderPass=function(){return p},this.end=function(S,w){S.toneMapping=x,f=!0;let E=r,D=a;for(let C=0;C<g.length;C++){let F=g[C];if(F.enabled!==!1&&(F.render(S,D,E,w),F.needsSwap!==!1)){let _=E;E=D,D=_}}if(d!==S.outputColorSpace||h!==S.toneMapping){d=S.outputColorSpace,h=S.toneMapping,l.defines={},qe.getTransfer(d)===nn&&(l.defines.SRGB_TRANSFER="");let C=sx[h];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(b),S.render(c,u),b=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),o.dispose(),l.dispose()}}var Df=new jn,Zh=new ns(1,1),Nf=new ua,Uf=new Qo,Ff=new _a,pf=[],mf=[],gf=new Float32Array(16),xf=new Float32Array(9),_f=new Float32Array(4);function Or(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=pf[s];if(r===void 0&&(r=new Float32Array(s),pf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Rn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function In(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _c(i,t){let e=mf[t];e===void 0&&(e=new Int32Array(t),mf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ax(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Rn(e,t))return;i.uniform2fv(this.addr,t),In(e,t)}}function lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Rn(e,t))return;i.uniform3fv(this.addr,t),In(e,t)}}function cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Rn(e,t))return;i.uniform4fv(this.addr,t),In(e,t)}}function hx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Rn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),In(e,t)}else{if(Rn(e,n))return;_f.set(n),i.uniformMatrix2fv(this.addr,!1,_f),In(e,n)}}function ux(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Rn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),In(e,t)}else{if(Rn(e,n))return;xf.set(n),i.uniformMatrix3fv(this.addr,!1,xf),In(e,n)}}function dx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Rn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),In(e,t)}else{if(Rn(e,n))return;gf.set(n),i.uniformMatrix4fv(this.addr,!1,gf),In(e,n)}}function fx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Rn(e,t))return;i.uniform2iv(this.addr,t),In(e,t)}}function mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Rn(e,t))return;i.uniform3iv(this.addr,t),In(e,t)}}function gx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Rn(e,t))return;i.uniform4iv(this.addr,t),In(e,t)}}function xx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Rn(e,t))return;i.uniform2uiv(this.addr,t),In(e,t)}}function yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Rn(e,t))return;i.uniform3uiv(this.addr,t),In(e,t)}}function vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Rn(e,t))return;i.uniform4uiv(this.addr,t),In(e,t)}}function Mx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zh.compareFunction=e.isReversedDepthBuffer()?uc:hc,r=Zh):r=Df,e.setTexture2D(t||r,s)}function Sx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Uf,s)}function bx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ff,s)}function Ex(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Nf,s)}function Tx(i){switch(i){case 5126:return ax;case 35664:return ox;case 35665:return lx;case 35666:return cx;case 35674:return hx;case 35675:return ux;case 35676:return dx;case 5124:case 35670:return fx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return xx;case 36294:return _x;case 36295:return yx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return Ex}}function wx(i,t){i.uniform1fv(this.addr,t)}function Ax(i,t){let e=Or(t,this.size,2);i.uniform2fv(this.addr,e)}function Cx(i,t){let e=Or(t,this.size,3);i.uniform3fv(this.addr,e)}function Rx(i,t){let e=Or(t,this.size,4);i.uniform4fv(this.addr,e)}function Ix(i,t){let e=Or(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Px(i,t){let e=Or(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Lx(i,t){let e=Or(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Dx(i,t){i.uniform1iv(this.addr,t)}function Nx(i,t){i.uniform2iv(this.addr,t)}function Ux(i,t){i.uniform3iv(this.addr,t)}function Fx(i,t){i.uniform4iv(this.addr,t)}function Bx(i,t){i.uniform1uiv(this.addr,t)}function Ox(i,t){i.uniform2uiv(this.addr,t)}function kx(i,t){i.uniform3uiv(this.addr,t)}function zx(i,t){i.uniform4uiv(this.addr,t)}function Vx(i,t,e){let n=this.cache,s=t.length,r=_c(e,s);Rn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Zh:a=Df;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Hx(i,t,e){let n=this.cache,s=t.length,r=_c(e,s);Rn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Uf,r[a])}function Gx(i,t,e){let n=this.cache,s=t.length,r=_c(e,s);Rn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ff,r[a])}function Wx(i,t,e){let n=this.cache,s=t.length,r=_c(e,s);Rn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Nf,r[a])}function Xx(i){switch(i){case 5126:return wx;case 35664:return Ax;case 35665:return Cx;case 35666:return Rx;case 35674:return Ix;case 35675:return Px;case 35676:return Lx;case 5124:case 35670:return Dx;case 35667:case 35671:return Nx;case 35668:case 35672:return Ux;case 35669:case 35673:return Fx;case 5125:return Bx;case 36294:return Ox;case 36295:return kx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Vx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return Gx;case 36289:case 36303:case 36311:case 36292:return Wx}}var Jh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tx(e.type)}},Kh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xx(e.type)}},jh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Yh=/(\w+)(\])?(\[|\.)?/g;function yf(i,t){i.seq.push(t),i.map[t.id]=t}function qx(i,t,e){let n=i.name,s=n.length;for(Yh.lastIndex=0;;){let r=Yh.exec(n),a=Yh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){yf(e,c===void 0?new Jh(o,i,t):new Kh(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new jh(o),yf(e,d)),e=d}}}var Br=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);qx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function vf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Yx=37297,$x=0;function Zx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Mf=new De;function Jx(i){qe._getMatrix(Mf,qe.workingColorSpace,i);let t=`mat3( ${Mf.elements.map(e=>e.toFixed(4))} )`;switch(qe.getTransfer(i)){case ca:return[t,"LinearTransferOETF"];case nn:return[t,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Sf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Zx(i.getShaderSource(t),o)}else return r}function Kx(i,t){let e=Jx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var jx={[Sh]:"Linear",[bh]:"Reinhard",[Eh]:"Cineon",[Fa]:"ACESFilmic",[wh]:"AgX",[Ah]:"Neutral",[Th]:"Custom"};function Qx(i,t){let e=jx[t];return e===void 0?(de("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fc=new U;function t_(){qe.getLuminanceCoefficients(fc);let i=fc.x.toFixed(4),t=fc.y.toFixed(4),e=fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ya).join(`
`)}function n_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function i_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ya(i){return i!==""}function bf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ef(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var s_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(i){return i.replace(s_,a_)}var r_=new Map;function a_(i,t){let e=Ve[t];if(e===void 0){let n=r_.get(t);if(n!==void 0)e=Ve[n],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qh(e)}var o_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tf(i){return i.replace(o_,l_)}function l_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var c_={[Ua]:"SHADOWMAP_TYPE_PCF",[Lr]:"SHADOWMAP_TYPE_VSM"};function h_(i){return c_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var u_={[Ts]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[Ba]:"ENVMAP_TYPE_CUBE_UV"};function d_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":u_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var f_={[tr]:"ENVMAP_MODE_REFRACTION"};function p_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":f_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var m_={[Mh]:"ENVMAP_BLENDING_MULTIPLY",[zd]:"ENVMAP_BLENDING_MIX",[Vd]:"ENVMAP_BLENDING_ADD"};function g_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":m_[i.combine]||"ENVMAP_BLENDING_NONE"}function x_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function __(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=h_(e),c=d_(e),u=p_(e),d=g_(e),h=x_(e),f=e_(e),x=n_(r),b=s.createProgram(),g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ya).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ya).join(`
`),p.length>0&&(p+=`
`)):(g=[wf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),p=[wf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ei?"#define TONE_MAPPING":"",e.toneMapping!==Ei?Ve.tonemapping_pars_fragment:"",e.toneMapping!==Ei?Qx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Kx("linearToOutputTexel",e.outputColorSpace),t_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ya).join(`
`)),a=Qh(a),a=bf(a,e),a=Ef(a,e),o=Qh(o),o=bf(o,e),o=Ef(o,e),a=Tf(a),o=Tf(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=S+g+a,E=S+p+o,D=vf(s,s.VERTEX_SHADER,w),C=vf(s,s.FRAGMENT_SHADER,E);s.attachShader(b,D),s.attachShader(b,C),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function F(L){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(b)||"",j=s.getShaderInfoLog(D)||"",K=s.getShaderInfoLog(C)||"",V=H.trim(),q=j.trim(),X=K.trim(),lt=!0,ht=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(lt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,D,C);else{let Et=Sf(s,D,"vertex"),Nt=Sf(s,C,"fragment");_e("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+Et+`
`+Nt)}else V!==""?de("WebGLProgram: Program Info Log:",V):(q===""||X==="")&&(ht=!1);ht&&(L.diagnostics={runnable:lt,programLog:V,vertexShader:{log:q,prefix:g},fragmentShader:{log:X,prefix:p}})}s.deleteShader(D),s.deleteShader(C),_=new Br(s,b),R=i_(s,b)}let _;this.getUniforms=function(){return _===void 0&&F(this),_};let R;this.getAttributes=function(){return R===void 0&&F(this),R};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(b,Yx)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$x++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=D,this.fragmentShader=C,this}var y_=0,tu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new eu(t),e.set(t,n)),n}},eu=class{constructor(t){this.id=y_++,this.code=t,this.usedTimes=0}};function v_(i){return i===Cs||i===Ga||i===Wa}function M_(i,t,e,n,s,r){let a=new da,o=new tu,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function b(_,R,O,L,H,j){let K=L.fog,V=H.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,lt=t.get(_.envMap||q,X),ht=lt&&lt.mapping===Ba?lt.image.height:null,Et=f[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&de("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let Nt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ht=Nt!==void 0?Nt.length:0,Ae=0;V.morphAttributes.position!==void 0&&(Ae=1),V.morphAttributes.normal!==void 0&&(Ae=2),V.morphAttributes.color!==void 0&&(Ae=3);let oe,Gt,tt,Pt;if(Et){let Ie=Oi[Et];oe=Ie.vertexShader,Gt=Ie.fragmentShader}else oe=_.vertexShader,Gt=_.fragmentShader,o.update(_),tt=o.getVertexShaderID(_),Pt=o.getFragmentShaderID(_);let _t=i.getRenderTarget(),Xt=i.state.buffers.depth.getReversed(),le=H.isInstancedMesh===!0,ce=H.isBatchedMesh===!0,He=!!_.map,jt=!!_.matcap,nt=!!lt,dt=!!_.aoMap,st=!!_.lightMap,At=!!_.bumpMap,Mt=!!_.normalMap,fe=!!_.displacementMap,N=!!_.emissiveMap,Se=!!_.metalnessMap,Wt=!!_.roughnessMap,pe=_.anisotropy>0,ft=_.clearcoat>0,Be=_.dispersion>0,A=_.iridescence>0,y=_.sheen>0,W=_.transmission>0,et=pe&&!!_.anisotropyMap,at=ft&&!!_.clearcoatMap,pt=ft&&!!_.clearcoatNormalMap,xt=ft&&!!_.clearcoatRoughnessMap,J=A&&!!_.iridescenceMap,it=A&&!!_.iridescenceThicknessMap,Lt=y&&!!_.sheenColorMap,kt=y&&!!_.sheenRoughnessMap,yt=!!_.specularMap,mt=!!_.specularColorMap,Ee=!!_.specularIntensityMap,Re=W&&!!_.transmissionMap,Te=W&&!!_.thicknessMap,k=!!_.gradientMap,rt=!!_.alphaMap,Q=_.alphaTest>0,Ft=!!_.alphaHash,St=!!_.extensions,ot=Ei;_.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ot=i.toneMapping);let Zt={shaderID:Et,shaderType:_.type,shaderName:_.name,vertexShader:oe,fragmentShader:Gt,defines:_.defines,customVertexShaderID:tt,customFragmentShaderID:Pt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:ce,batchingColor:ce&&H._colorsTexture!==null,instancing:le,instancingColor:le&&H.instanceColor!==null,instancingMorph:le&&H.morphTexture!==null,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:He,matcap:jt,envMap:nt,envMapMode:nt&&lt.mapping,envMapCubeUVHeight:ht,aoMap:dt,lightMap:st,bumpMap:At,normalMap:Mt,displacementMap:fe,emissiveMap:N,normalMapObjectSpace:Mt&&_.normalMapType===Wd,normalMapTangentSpace:Mt&&_.normalMapType===cc,packedNormalMap:Mt&&_.normalMapType===cc&&v_(_.normalMap.format),metalnessMap:Se,roughnessMap:Wt,anisotropy:pe,anisotropyMap:et,clearcoat:ft,clearcoatMap:at,clearcoatNormalMap:pt,clearcoatRoughnessMap:xt,dispersion:Be,iridescence:A,iridescenceMap:J,iridescenceThicknessMap:it,sheen:y,sheenColorMap:Lt,sheenRoughnessMap:kt,specularMap:yt,specularColorMap:mt,specularIntensityMap:Ee,transmission:W,transmissionMap:Re,thicknessMap:Te,gradientMap:k,opaque:_.transparent===!1&&_.blending===Ys&&_.alphaToCoverage===!1,alphaMap:rt,alphaTest:Q,alphaHash:Ft,combine:_.combine,mapUv:He&&x(_.map.channel),aoMapUv:dt&&x(_.aoMap.channel),lightMapUv:st&&x(_.lightMap.channel),bumpMapUv:At&&x(_.bumpMap.channel),normalMapUv:Mt&&x(_.normalMap.channel),displacementMapUv:fe&&x(_.displacementMap.channel),emissiveMapUv:N&&x(_.emissiveMap.channel),metalnessMapUv:Se&&x(_.metalnessMap.channel),roughnessMapUv:Wt&&x(_.roughnessMap.channel),anisotropyMapUv:et&&x(_.anisotropyMap.channel),clearcoatMapUv:at&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:pt&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:it&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:kt&&x(_.sheenRoughnessMap.channel),specularMapUv:yt&&x(_.specularMap.channel),specularColorMapUv:mt&&x(_.specularColorMap.channel),specularIntensityMapUv:Ee&&x(_.specularIntensityMap.channel),transmissionMapUv:Re&&x(_.transmissionMap.channel),thicknessMapUv:Te&&x(_.thicknessMap.channel),alphaMapUv:rt&&x(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Mt||pe),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!V.attributes.uv&&(He||rt),fog:!!K,useFog:_.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||V.attributes.normal===void 0&&Mt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Xt,skinning:H.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:Ae,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,decodeVideoTexture:He&&_.map.isVideoTexture===!0&&qe.getTransfer(_.map.colorSpace)===nn,decodeVideoTextureEmissive:N&&_.emissiveMap.isVideoTexture===!0&&qe.getTransfer(_.emissiveMap.colorSpace)===nn,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ni,flipSided:_.side===Qn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:St&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&_.extensions.multiDraw===!0||ce)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function g(_){let R=[];if(_.shaderID?R.push(_.shaderID):(R.push(_.customVertexShaderID),R.push(_.customFragmentShaderID)),_.defines!==void 0)for(let O in _.defines)R.push(O),R.push(_.defines[O]);return _.isRawShaderMaterial===!1&&(p(R,_),S(R,_),R.push(i.outputColorSpace)),R.push(_.customProgramCacheKey),R.join()}function p(_,R){_.push(R.precision),_.push(R.outputColorSpace),_.push(R.envMapMode),_.push(R.envMapCubeUVHeight),_.push(R.mapUv),_.push(R.alphaMapUv),_.push(R.lightMapUv),_.push(R.aoMapUv),_.push(R.bumpMapUv),_.push(R.normalMapUv),_.push(R.displacementMapUv),_.push(R.emissiveMapUv),_.push(R.metalnessMapUv),_.push(R.roughnessMapUv),_.push(R.anisotropyMapUv),_.push(R.clearcoatMapUv),_.push(R.clearcoatNormalMapUv),_.push(R.clearcoatRoughnessMapUv),_.push(R.iridescenceMapUv),_.push(R.iridescenceThicknessMapUv),_.push(R.sheenColorMapUv),_.push(R.sheenRoughnessMapUv),_.push(R.specularMapUv),_.push(R.specularColorMapUv),_.push(R.specularIntensityMapUv),_.push(R.transmissionMapUv),_.push(R.thicknessMapUv),_.push(R.combine),_.push(R.fogExp2),_.push(R.sizeAttenuation),_.push(R.morphTargetsCount),_.push(R.morphAttributeCount),_.push(R.numDirLights),_.push(R.numPointLights),_.push(R.numSpotLights),_.push(R.numSpotLightMaps),_.push(R.numHemiLights),_.push(R.numRectAreaLights),_.push(R.numDirLightShadows),_.push(R.numPointLightShadows),_.push(R.numSpotLightShadows),_.push(R.numSpotLightShadowsWithMaps),_.push(R.numLightProbes),_.push(R.shadowMapType),_.push(R.toneMapping),_.push(R.numClippingPlanes),_.push(R.numClipIntersection),_.push(R.depthPacking)}function S(_,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),_.push(a.mask)}function w(_){let R=f[_.type],O;if(R){let L=Oi[R];O=of.clone(L.uniforms)}else O=_.uniforms;return O}function E(_,R){let O=u.get(R);return O!==void 0?++O.usedTimes:(O=new __(i,R,_,s),c.push(O),u.set(R,O)),O}function D(_){if(--_.usedTimes===0){let R=c.indexOf(_);c[R]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function C(_){o.remove(_)}function F(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:w,acquireProgram:E,releaseProgram:D,releaseShaderCache:C,programs:c,dispose:F}}function S_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function b_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Af(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Cf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,x,b,g,p){let S=i[t];return S===void 0?(S={id:h.id,object:h,geometry:f,material:x,materialVariant:a(h),groupOrder:b,renderOrder:h.renderOrder,z:g,group:p},i[t]=S):(S.id=h.id,S.object=h,S.geometry=f,S.material=x,S.materialVariant=a(h),S.groupOrder=b,S.renderOrder=h.renderOrder,S.z=g,S.group=p),t++,S}function l(h,f,x,b,g,p){let S=o(h,f,x,b,g,p);x.transmission>0?n.push(S):x.transparent===!0?s.push(S):e.push(S)}function c(h,f,x,b,g,p){let S=o(h,f,x,b,g,p);x.transmission>0?n.unshift(S):x.transparent===!0?s.unshift(S):e.unshift(S)}function u(h,f){e.length>1&&e.sort(h||b_),n.length>1&&n.sort(f||Af),s.length>1&&s.sort(f||Af)}function d(){for(let h=t,f=i.length;h<f;h++){let x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function E_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Cf,i.set(n,[a])):s>=r.length?(a=new Cf,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function T_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Ge};break;case"SpotLight":e={position:new U,direction:new U,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":e={color:new Ge,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function w_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var A_=0;function C_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function R_(i){let t=new T_,e=w_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new gn,a=new gn;function o(c){let u=0,d=0,h=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let f=0,x=0,b=0,g=0,p=0,S=0,w=0,E=0,D=0,C=0,F=0;c.sort(C_);for(let R=0,O=c.length;R<O;R++){let L=c[R],H=L.color,j=L.intensity,K=L.distance,V=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Cs?V=L.shadow.map.texture:V=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=H.r*j,d+=H.g*j,h+=H.b*j;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],j);F++}else if(L.isDirectionalLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let X=L.shadow,lt=e.get(L);lt.shadowIntensity=X.intensity,lt.shadowBias=X.bias,lt.shadowNormalBias=X.normalBias,lt.shadowRadius=X.radius,lt.shadowMapSize=X.mapSize,n.directionalShadow[f]=lt,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=L.shadow.matrix,S++}n.directional[f]=q,f++}else if(L.isSpotLight){let q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(H).multiplyScalar(j),q.distance=K,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[b]=q;let X=L.shadow;if(L.map&&(n.spotLightMap[D]=L.map,D++,X.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[b]=X.matrix,L.castShadow){let lt=e.get(L);lt.shadowIntensity=X.intensity,lt.shadowBias=X.bias,lt.shadowNormalBias=X.normalBias,lt.shadowRadius=X.radius,lt.shadowMapSize=X.mapSize,n.spotShadow[b]=lt,n.spotShadowMap[b]=V,E++}b++}else if(L.isRectAreaLight){let q=t.get(L);q.color.copy(H).multiplyScalar(j),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=q,g++}else if(L.isPointLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let X=L.shadow,lt=e.get(L);lt.shadowIntensity=X.intensity,lt.shadowBias=X.bias,lt.shadowNormalBias=X.normalBias,lt.shadowRadius=X.radius,lt.shadowMapSize=X.mapSize,lt.shadowCameraNear=X.camera.near,lt.shadowCameraFar=X.camera.far,n.pointShadow[x]=lt,n.pointShadowMap[x]=V,n.pointShadowMatrix[x]=L.shadow.matrix,w++}n.point[x]=q,x++}else if(L.isHemisphereLight){let q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(j),q.groundColor.copy(L.groundColor).multiplyScalar(j),n.hemi[p]=q,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let _=n.hash;(_.directionalLength!==f||_.pointLength!==x||_.spotLength!==b||_.rectAreaLength!==g||_.hemiLength!==p||_.numDirectionalShadows!==S||_.numPointShadows!==w||_.numSpotShadows!==E||_.numSpotMaps!==D||_.numLightProbes!==F)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=g,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=E+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=F,_.directionalLength=f,_.pointLength=x,_.spotLength=b,_.rectAreaLength=g,_.hemiLength=p,_.numDirectionalShadows=S,_.numPointShadows=w,_.numSpotShadows=E,_.numSpotMaps=D,_.numLightProbes=F,n.version=A_++)}function l(c,u){let d=0,h=0,f=0,x=0,b=0,g=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let w=c[p];if(w.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),d++}else if(w.isSpotLight){let E=n.spot[f];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),f++}else if(w.isRectAreaLight){let E=n.rectArea[x];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(g),a.identity(),r.copy(w.matrixWorld),r.premultiply(g),a.extractRotation(r),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(w.isPointLight){let E=n.point[h];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(g),h++}else if(w.isHemisphereLight){let E=n.hemi[b];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(g),b++}}}return{setup:o,setupView:l,state:n}}function Rf(i){let t=new R_(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function I_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Rf(i),t.set(s,[o])):r>=a.length?(o=new Rf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var P_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,D_=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],N_=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],If=new gn,qa=new U,$h=new U;function U_(i,t,e){let n=new wr,s=new Ct,r=new Ct,a=new Mn,o=new cl,l=new hl,c={},u=e.maxTextureSize,d={[Ki]:Qn,[Qn]:Ki,[Ni]:Ni},h=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:P_,fragmentShader:L_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let x=new Cn;x.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ot(x,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ua;let p=this.type;this.render=function(C,F,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;this.type===Md&&(de("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ua);let R=i.getRenderTarget(),O=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Ui),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let j=p!==this.type;j&&F.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(V=>V.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,V=C.length;K<V;K++){let q=C[K],X=q.shadow;if(X===void 0){de("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let lt=X.getFrameExtents();s.multiply(lt),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/lt.x),s.x=r.x*lt.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/lt.y),s.y=r.y*lt.y,X.mapSize.y=r.y));let ht=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=ht,X.map===null||j===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Lr){if(q.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new li(s.x,s.y,{format:Cs,type:Fi,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new ns(s.x,s.y,wi),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=Pi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Dn,X.map.depthTexture.magFilter=Dn}else q.isPointLight?(X.map=new mc(s.x),X.map.depthTexture=new el(s.x,Ti)):(X.map=new li(s.x,s.y),X.map.depthTexture=new ns(s.x,s.y,Ti)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=Pi,this.type===Ua?(X.map.depthTexture.compareFunction=ht?uc:hc,X.map.depthTexture.minFilter=Bn,X.map.depthTexture.magFilter=Bn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Dn,X.map.depthTexture.magFilter=Dn);X.camera.updateProjectionMatrix()}let Et=X.map.isWebGLCubeRenderTarget?6:1;for(let Nt=0;Nt<Et;Nt++){if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,Nt),i.clear();else{Nt===0&&(i.setRenderTarget(X.map),i.clear());let Ht=X.getViewport(Nt);a.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),H.viewport(a)}if(q.isPointLight){let Ht=X.camera,Ae=X.matrix,oe=q.distance||Ht.far;oe!==Ht.far&&(Ht.far=oe,Ht.updateProjectionMatrix()),qa.setFromMatrixPosition(q.matrixWorld),Ht.position.copy(qa),$h.copy(Ht.position),$h.add(D_[Nt]),Ht.up.copy(N_[Nt]),Ht.lookAt($h),Ht.updateMatrixWorld(),Ae.makeTranslation(-qa.x,-qa.y,-qa.z),If.multiplyMatrices(Ht.projectionMatrix,Ht.matrixWorldInverse),X._frustum.setFromProjectionMatrix(If,Ht.coordinateSystem,Ht.reversedDepth)}else X.updateMatrices(q);n=X.getFrustum(),E(F,_,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===Lr&&S(X,_),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(R,O,L)};function S(C,F){let _=t.update(b);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new li(s.x,s.y,{format:Cs,type:Fi})),h.uniforms.shadow_pass.value=C.map.depthTexture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(F,null,_,h,b,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(F,null,_,f,b,null)}function w(C,F,_,R){let O=null,L=_.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)O=L;else if(O=_.isPointLight===!0?l:o,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){let H=O.uuid,j=F.uuid,K=c[H];K===void 0&&(K={},c[H]=K);let V=K[j];V===void 0&&(V=O.clone(),K[j]=V,F.addEventListener("dispose",D)),O=V}if(O.visible=F.visible,O.wireframe=F.wireframe,R===Lr?O.side=F.shadowSide!==null?F.shadowSide:F.side:O.side=F.shadowSide!==null?F.shadowSide:d[F.side],O.alphaMap=F.alphaMap,O.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,O.map=F.map,O.clipShadows=F.clipShadows,O.clippingPlanes=F.clippingPlanes,O.clipIntersection=F.clipIntersection,O.displacementMap=F.displacementMap,O.displacementScale=F.displacementScale,O.displacementBias=F.displacementBias,O.wireframeLinewidth=F.wireframeLinewidth,O.linewidth=F.linewidth,_.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let H=i.properties.get(O);H.light=_}return O}function E(C,F,_,R,O){if(C.visible===!1)return;if(C.layers.test(F.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&O===Lr)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,C.matrixWorld);let j=t.update(C),K=C.material;if(Array.isArray(K)){let V=j.groups;for(let q=0,X=V.length;q<X;q++){let lt=V[q],ht=K[lt.materialIndex];if(ht&&ht.visible){let Et=w(C,ht,R,O);C.onBeforeShadow(i,C,F,_,j,Et,lt),i.renderBufferDirect(_,null,j,Et,C,lt),C.onAfterShadow(i,C,F,_,j,Et,lt)}}}else if(K.visible){let V=w(C,K,R,O);C.onBeforeShadow(i,C,F,_,j,V,null),i.renderBufferDirect(_,null,j,V,C,null),C.onAfterShadow(i,C,F,_,j,V,null)}}let H=C.children;for(let j=0,K=H.length;j<K;j++)E(H[j],F,_,R,O)}function D(C){C.target.removeEventListener("dispose",D);for(let _ in c){let R=c[_],O=C.target.uuid;O in R&&(R[O].dispose(),delete R[O])}}}function F_(i,t){function e(){let k=!1,rt=new Mn,Q=null,Ft=new Mn(0,0,0,0);return{setMask:function(St){Q!==St&&!k&&(i.colorMask(St,St,St,St),Q=St)},setLocked:function(St){k=St},setClear:function(St,ot,Zt,Ie,xn){xn===!0&&(St*=Ie,ot*=Ie,Zt*=Ie),rt.set(St,ot,Zt,Ie),Ft.equals(rt)===!1&&(i.clearColor(St,ot,Zt,Ie),Ft.copy(rt))},reset:function(){k=!1,Q=null,Ft.set(-1,0,0,0)}}}function n(){let k=!1,rt=!1,Q=null,Ft=null,St=null;return{setReversed:function(ot){if(rt!==ot){let Zt=t.get("EXT_clip_control");ot?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),rt=ot;let Ie=St;St=null,this.setClear(Ie)}},getReversed:function(){return rt},setTest:function(ot){ot?_t(i.DEPTH_TEST):Xt(i.DEPTH_TEST)},setMask:function(ot){Q!==ot&&!k&&(i.depthMask(ot),Q=ot)},setFunc:function(ot){if(rt&&(ot=tf[ot]),Ft!==ot){switch(ot){case zo:i.depthFunc(i.NEVER);break;case Vo:i.depthFunc(i.ALWAYS);break;case Ho:i.depthFunc(i.LESS);break;case $s:i.depthFunc(i.LEQUAL);break;case Go:i.depthFunc(i.EQUAL);break;case Wo:i.depthFunc(i.GEQUAL);break;case Xo:i.depthFunc(i.GREATER);break;case qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ft=ot}},setLocked:function(ot){k=ot},setClear:function(ot){St!==ot&&(St=ot,rt&&(ot=1-ot),i.clearDepth(ot))},reset:function(){k=!1,Q=null,Ft=null,St=null,rt=!1}}}function s(){let k=!1,rt=null,Q=null,Ft=null,St=null,ot=null,Zt=null,Ie=null,xn=null;return{setTest:function(tn){k||(tn?_t(i.STENCIL_TEST):Xt(i.STENCIL_TEST))},setMask:function(tn){rt!==tn&&!k&&(i.stencilMask(tn),rt=tn)},setFunc:function(tn,Zn,si){(Q!==tn||Ft!==Zn||St!==si)&&(i.stencilFunc(tn,Zn,si),Q=tn,Ft=Zn,St=si)},setOp:function(tn,Zn,si){(ot!==tn||Zt!==Zn||Ie!==si)&&(i.stencilOp(tn,Zn,si),ot=tn,Zt=Zn,Ie=si)},setLocked:function(tn){k=tn},setClear:function(tn){xn!==tn&&(i.clearStencil(tn),xn=tn)},reset:function(){k=!1,rt=null,Q=null,Ft=null,St=null,ot=null,Zt=null,Ie=null,xn=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,x=[],b=null,g=!1,p=null,S=null,w=null,E=null,D=null,C=null,F=null,_=new Ge(0,0,0),R=0,O=!1,L=null,H=null,j=null,K=null,V=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,lt=0,ht=i.getParameter(i.VERSION);ht.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(ht)[1]),X=lt>=1):ht.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(ht)[1]),X=lt>=2);let Et=null,Nt={},Ht=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),oe=new Mn().fromArray(Ht),Gt=new Mn().fromArray(Ae);function tt(k,rt,Q,Ft){let St=new Uint8Array(4),ot=i.createTexture();i.bindTexture(k,ot),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<Q;Zt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,Ft,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(rt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return ot}let Pt={};Pt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),Pt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(i.DEPTH_TEST),a.setFunc($s),At(!1),Mt(xh),_t(i.CULL_FACE),dt(Ui);function _t(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function Xt(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function le(k,rt){return h[k]!==rt?(i.bindFramebuffer(k,rt),h[k]=rt,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=rt),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function ce(k,rt){let Q=x,Ft=!1;if(k){Q=f.get(rt),Q===void 0&&(Q=[],f.set(rt,Q));let St=k.textures;if(Q.length!==St.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Zt=St.length;ot<Zt;ot++)Q[ot]=i.COLOR_ATTACHMENT0+ot;Q.length=St.length,Ft=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,Ft=!0);Ft&&i.drawBuffers(Q)}function He(k){return b!==k?(i.useProgram(k),b=k,!0):!1}let jt={[gs]:i.FUNC_ADD,[bd]:i.FUNC_SUBTRACT,[Ed]:i.FUNC_REVERSE_SUBTRACT};jt[Td]=i.MIN,jt[wd]=i.MAX;let nt={[Ad]:i.ZERO,[Cd]:i.ONE,[Rd]:i.SRC_COLOR,[Oo]:i.SRC_ALPHA,[Ud]:i.SRC_ALPHA_SATURATE,[Dd]:i.DST_COLOR,[Pd]:i.DST_ALPHA,[Id]:i.ONE_MINUS_SRC_COLOR,[ko]:i.ONE_MINUS_SRC_ALPHA,[Nd]:i.ONE_MINUS_DST_COLOR,[Ld]:i.ONE_MINUS_DST_ALPHA,[Fd]:i.CONSTANT_COLOR,[Bd]:i.ONE_MINUS_CONSTANT_COLOR,[Od]:i.CONSTANT_ALPHA,[kd]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(k,rt,Q,Ft,St,ot,Zt,Ie,xn,tn){if(k===Ui){g===!0&&(Xt(i.BLEND),g=!1);return}if(g===!1&&(_t(i.BLEND),g=!0),k!==Sd){if(k!==p||tn!==O){if((S!==gs||D!==gs)&&(i.blendEquation(i.FUNC_ADD),S=gs,D=gs),tn)switch(k){case Ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _h:i.blendFunc(i.ONE,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:_e("WebGLState: Invalid blending: ",k);break}else switch(k){case Ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _h:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yh:_e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vh:_e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_e("WebGLState: Invalid blending: ",k);break}w=null,E=null,C=null,F=null,_.set(0,0,0),R=0,p=k,O=tn}return}St=St||rt,ot=ot||Q,Zt=Zt||Ft,(rt!==S||St!==D)&&(i.blendEquationSeparate(jt[rt],jt[St]),S=rt,D=St),(Q!==w||Ft!==E||ot!==C||Zt!==F)&&(i.blendFuncSeparate(nt[Q],nt[Ft],nt[ot],nt[Zt]),w=Q,E=Ft,C=ot,F=Zt),(Ie.equals(_)===!1||xn!==R)&&(i.blendColor(Ie.r,Ie.g,Ie.b,xn),_.copy(Ie),R=xn),p=k,O=!1}function st(k,rt){k.side===Ni?Xt(i.CULL_FACE):_t(i.CULL_FACE);let Q=k.side===Qn;rt&&(Q=!Q),At(Q),k.blending===Ys&&k.transparent===!1?dt(Ui):dt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let Ft=k.stencilWrite;o.setTest(Ft),Ft&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),N(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function At(k){L!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),L=k)}function Mt(k){k!==yd?(_t(i.CULL_FACE),k!==H&&(k===xh?i.cullFace(i.BACK):k===vd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Xt(i.CULL_FACE),H=k}function fe(k){k!==j&&(X&&i.lineWidth(k),j=k)}function N(k,rt,Q){k?(_t(i.POLYGON_OFFSET_FILL),(K!==rt||V!==Q)&&(K=rt,V=Q,a.getReversed()&&(rt=-rt),i.polygonOffset(rt,Q))):Xt(i.POLYGON_OFFSET_FILL)}function Se(k){k?_t(i.SCISSOR_TEST):Xt(i.SCISSOR_TEST)}function Wt(k){k===void 0&&(k=i.TEXTURE0+q-1),Et!==k&&(i.activeTexture(k),Et=k)}function pe(k,rt,Q){Q===void 0&&(Et===null?Q=i.TEXTURE0+q-1:Q=Et);let Ft=Nt[Q];Ft===void 0&&(Ft={type:void 0,texture:void 0},Nt[Q]=Ft),(Ft.type!==k||Ft.texture!==rt)&&(Et!==Q&&(i.activeTexture(Q),Et=Q),i.bindTexture(k,rt||Pt[k]),Ft.type=k,Ft.texture=rt)}function ft(){let k=Nt[Et];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Be(){try{i.compressedTexImage2D(...arguments)}catch(k){_e("WebGLState:",k)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(k){_e("WebGLState:",k)}}function y(){try{i.texSubImage2D(...arguments)}catch(k){_e("WebGLState:",k)}}function W(){try{i.texSubImage3D(...arguments)}catch(k){_e("WebGLState:",k)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch(k){_e("WebGLState:",k)}}function at(){try{i.compressedTexSubImage3D(...arguments)}catch(k){_e("WebGLState:",k)}}function pt(){try{i.texStorage2D(...arguments)}catch(k){_e("WebGLState:",k)}}function xt(){try{i.texStorage3D(...arguments)}catch(k){_e("WebGLState:",k)}}function J(){try{i.texImage2D(...arguments)}catch(k){_e("WebGLState:",k)}}function it(){try{i.texImage3D(...arguments)}catch(k){_e("WebGLState:",k)}}function Lt(k){return d[k]!==void 0?d[k]:i.getParameter(k)}function kt(k,rt){d[k]!==rt&&(i.pixelStorei(k,rt),d[k]=rt)}function yt(k){oe.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),oe.copy(k))}function mt(k){Gt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Gt.copy(k))}function Ee(k,rt){let Q=c.get(rt);Q===void 0&&(Q=new WeakMap,c.set(rt,Q));let Ft=Q.get(k);Ft===void 0&&(Ft=i.getUniformBlockIndex(rt,k.name),Q.set(k,Ft))}function Re(k,rt){let Ft=c.get(rt).get(k);l.get(rt)!==Ft&&(i.uniformBlockBinding(rt,Ft,k.__bindingPointIndex),l.set(rt,Ft))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},Et=null,Nt={},h={},f=new WeakMap,x=[],b=null,g=!1,p=null,S=null,w=null,E=null,D=null,C=null,F=null,_=new Ge(0,0,0),R=0,O=!1,L=null,H=null,j=null,K=null,V=null,oe.set(0,0,i.canvas.width,i.canvas.height),Gt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_t,disable:Xt,bindFramebuffer:le,drawBuffers:ce,useProgram:He,setBlending:dt,setMaterial:st,setFlipSided:At,setCullFace:Mt,setLineWidth:fe,setPolygonOffset:N,setScissorTest:Se,activeTexture:Wt,bindTexture:pe,unbindTexture:ft,compressedTexImage2D:Be,compressedTexImage3D:A,texImage2D:J,texImage3D:it,pixelStorei:kt,getParameter:Lt,updateUBOMapping:Ee,uniformBlockBinding:Re,texStorage2D:pt,texStorage3D:xt,texSubImage2D:y,texSubImage3D:W,compressedTexSubImage2D:et,compressedTexSubImage3D:at,scissor:yt,viewport:mt,reset:Te}}function B_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,u=new WeakMap,d=new Set,h,f=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,y){return x?new OffscreenCanvas(A,y):ha("canvas")}function g(A,y,W){let et=1,at=Be(A);if((at.width>W||at.height>W)&&(et=W/Math.max(at.width,at.height)),et<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let pt=Math.floor(et*at.width),xt=Math.floor(et*at.height);h===void 0&&(h=b(pt,xt));let J=y?b(pt,xt):h;return J.width=pt,J.height=xt,J.getContext("2d").drawImage(A,0,0,pt,xt),de("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+pt+"x"+xt+")."),J}else return"data"in A&&de("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),A;return A}function p(A){return A.generateMipmaps}function S(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,y,W,et,at,pt=!1){if(A!==null){if(i[A]!==void 0)return i[A];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let xt;et&&(xt=t.get("EXT_texture_norm16"),xt||de("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===i.RED&&(W===i.FLOAT&&(J=i.R32F),W===i.HALF_FLOAT&&(J=i.R16F),W===i.UNSIGNED_BYTE&&(J=i.R8),W===i.UNSIGNED_SHORT&&xt&&(J=xt.R16_EXT),W===i.SHORT&&xt&&(J=xt.R16_SNORM_EXT)),y===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(J=i.R8UI),W===i.UNSIGNED_SHORT&&(J=i.R16UI),W===i.UNSIGNED_INT&&(J=i.R32UI),W===i.BYTE&&(J=i.R8I),W===i.SHORT&&(J=i.R16I),W===i.INT&&(J=i.R32I)),y===i.RG&&(W===i.FLOAT&&(J=i.RG32F),W===i.HALF_FLOAT&&(J=i.RG16F),W===i.UNSIGNED_BYTE&&(J=i.RG8),W===i.UNSIGNED_SHORT&&xt&&(J=xt.RG16_EXT),W===i.SHORT&&xt&&(J=xt.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(J=i.RG8UI),W===i.UNSIGNED_SHORT&&(J=i.RG16UI),W===i.UNSIGNED_INT&&(J=i.RG32UI),W===i.BYTE&&(J=i.RG8I),W===i.SHORT&&(J=i.RG16I),W===i.INT&&(J=i.RG32I)),y===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(J=i.RGB8UI),W===i.UNSIGNED_SHORT&&(J=i.RGB16UI),W===i.UNSIGNED_INT&&(J=i.RGB32UI),W===i.BYTE&&(J=i.RGB8I),W===i.SHORT&&(J=i.RGB16I),W===i.INT&&(J=i.RGB32I)),y===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),W===i.UNSIGNED_INT&&(J=i.RGBA32UI),W===i.BYTE&&(J=i.RGBA8I),W===i.SHORT&&(J=i.RGBA16I),W===i.INT&&(J=i.RGBA32I)),y===i.RGB&&(W===i.UNSIGNED_SHORT&&xt&&(J=xt.RGB16_EXT),W===i.SHORT&&xt&&(J=xt.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),y===i.RGBA){let it=pt?ca:qe.getTransfer(at);W===i.FLOAT&&(J=i.RGBA32F),W===i.HALF_FLOAT&&(J=i.RGBA16F),W===i.UNSIGNED_BYTE&&(J=it===nn?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&xt&&(J=xt.RGBA16_EXT),W===i.SHORT&&xt&&(J=xt.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function D(A,y){let W;return A?y===null||y===Ti||y===Nr?W=i.DEPTH24_STENCIL8:y===wi?W=i.DEPTH32F_STENCIL8:y===Dr&&(W=i.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ti||y===Nr?W=i.DEPTH_COMPONENT24:y===wi?W=i.DEPTH_COMPONENT32F:y===Dr&&(W=i.DEPTH_COMPONENT16),W}function C(A,y){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Dn&&A.minFilter!==Bn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function F(A){let y=A.target;y.removeEventListener("dispose",F),R(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&d.delete(y)}function _(A){let y=A.target;y.removeEventListener("dispose",_),L(y)}function R(A){let y=n.get(A);if(y.__webglInit===void 0)return;let W=A.source,et=f.get(W);if(et){let at=et[y.__cacheKey];at.usedTimes--,at.usedTimes===0&&O(A),Object.keys(et).length===0&&f.delete(W)}n.remove(A)}function O(A){let y=n.get(A);i.deleteTexture(y.__webglTexture);let W=A.source,et=f.get(W);delete et[y.__cacheKey],a.memory.textures--}function L(A){let y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(y.__webglFramebuffer[et]))for(let at=0;at<y.__webglFramebuffer[et].length;at++)i.deleteFramebuffer(y.__webglFramebuffer[et][at]);else i.deleteFramebuffer(y.__webglFramebuffer[et]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[et])}else{if(Array.isArray(y.__webglFramebuffer))for(let et=0;et<y.__webglFramebuffer.length;et++)i.deleteFramebuffer(y.__webglFramebuffer[et]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let et=0;et<y.__webglColorRenderbuffer.length;et++)y.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[et]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let W=A.textures;for(let et=0,at=W.length;et<at;et++){let pt=n.get(W[et]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),a.memory.textures--),n.remove(W[et])}n.remove(A)}let H=0;function j(){H=0}function K(){return H}function V(A){H=A}function q(){let A=H;return A>=s.maxTextures&&de("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),H+=1,A}function X(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function lt(A,y){let W=n.get(A);if(A.isVideoTexture&&pe(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&W.__version!==A.version){let et=A.image;if(et===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{Xt(W,A,y);return}}else A.isExternalTexture&&(W.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+y)}function ht(A,y){let W=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){Xt(W,A,y);return}else A.isExternalTexture&&(W.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+y)}function Et(A,y){let W=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){Xt(W,A,y);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+y)}function Nt(A,y){let W=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&W.__version!==A.version){le(W,A,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+y)}let Ht={[ji]:i.REPEAT,[Ii]:i.CLAMP_TO_EDGE,[Yo]:i.MIRRORED_REPEAT},Ae={[Dn]:i.NEAREST,[Hd]:i.NEAREST_MIPMAP_NEAREST,[Oa]:i.NEAREST_MIPMAP_LINEAR,[Bn]:i.LINEAR,[wl]:i.LINEAR_MIPMAP_NEAREST,[ws]:i.LINEAR_MIPMAP_LINEAR},oe={[Xd]:i.NEVER,[Jd]:i.ALWAYS,[qd]:i.LESS,[hc]:i.LEQUAL,[Yd]:i.EQUAL,[uc]:i.GEQUAL,[$d]:i.GREATER,[Zd]:i.NOTEQUAL};function Gt(A,y){if(y.type===wi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Bn||y.magFilter===wl||y.magFilter===Oa||y.magFilter===ws||y.minFilter===Bn||y.minFilter===wl||y.minFilter===Oa||y.minFilter===ws)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ht[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ht[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ht[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ae[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ae[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,oe[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Dn||y.minFilter!==Oa&&y.minFilter!==ws||y.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function tt(A,y){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",F));let et=y.source,at=f.get(et);at===void 0&&(at={},f.set(et,at));let pt=X(y);if(pt!==A.__cacheKey){at[pt]===void 0&&(at[pt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),at[pt].usedTimes++;let xt=at[A.__cacheKey];xt!==void 0&&(at[A.__cacheKey].usedTimes--,xt.usedTimes===0&&O(y)),A.__cacheKey=pt,A.__webglTexture=at[pt].texture}return W}function Pt(A,y,W){return Math.floor(Math.floor(A/W)/y)}function _t(A,y,W,et){let pt=A.updateRanges;if(pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,W,et,y.data);else{pt.sort((kt,yt)=>kt.start-yt.start);let xt=0;for(let kt=1;kt<pt.length;kt++){let yt=pt[xt],mt=pt[kt],Ee=yt.start+yt.count,Re=Pt(mt.start,y.width,4),Te=Pt(yt.start,y.width,4);mt.start<=Ee+1&&Re===Te&&Pt(mt.start+mt.count-1,y.width,4)===Re?yt.count=Math.max(yt.count,mt.start+mt.count-yt.start):(++xt,pt[xt]=mt)}pt.length=xt+1;let J=e.getParameter(i.UNPACK_ROW_LENGTH),it=e.getParameter(i.UNPACK_SKIP_PIXELS),Lt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let kt=0,yt=pt.length;kt<yt;kt++){let mt=pt[kt],Ee=Math.floor(mt.start/4),Re=Math.ceil(mt.count/4),Te=Ee%y.width,k=Math.floor(Ee/y.width),rt=Re,Q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),e.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,Te,k,rt,Q,W,et,y.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,it),e.pixelStorei(i.UNPACK_SKIP_ROWS,Lt)}}function Xt(A,y,W){let et=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(et=i.TEXTURE_3D);let at=tt(A,y),pt=y.source;e.bindTexture(et,A.__webglTexture,i.TEXTURE0+W);let xt=n.get(pt);if(pt.version!==xt.__version||at===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let Q=qe.getPrimaries(qe.workingColorSpace),Ft=y.colorSpace===ss?null:qe.getPrimaries(y.colorSpace),St=y.colorSpace===ss||Q===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let it=g(y.image,!1,s.maxTextureSize);it=ft(y,it);let Lt=r.convert(y.format,y.colorSpace),kt=r.convert(y.type),yt=E(y.internalFormat,Lt,kt,y.normalized,y.colorSpace,y.isVideoTexture);Gt(et,y);let mt,Ee=y.mipmaps,Re=y.isVideoTexture!==!0,Te=xt.__version===void 0||at===!0,k=pt.dataReady,rt=C(y,it);if(y.isDepthTexture)yt=D(y.format===As,y.type),Te&&(Re?e.texStorage2D(i.TEXTURE_2D,1,yt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,yt,it.width,it.height,0,Lt,kt,null));else if(y.isDataTexture)if(Ee.length>0){Re&&Te&&e.texStorage2D(i.TEXTURE_2D,rt,yt,Ee[0].width,Ee[0].height);for(let Q=0,Ft=Ee.length;Q<Ft;Q++)mt=Ee[Q],Re?k&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,mt.width,mt.height,Lt,kt,mt.data):e.texImage2D(i.TEXTURE_2D,Q,yt,mt.width,mt.height,0,Lt,kt,mt.data);y.generateMipmaps=!1}else Re?(Te&&e.texStorage2D(i.TEXTURE_2D,rt,yt,it.width,it.height),k&&_t(y,it,Lt,kt)):e.texImage2D(i.TEXTURE_2D,0,yt,it.width,it.height,0,Lt,kt,it.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Re&&Te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,yt,Ee[0].width,Ee[0].height,it.depth);for(let Q=0,Ft=Ee.length;Q<Ft;Q++)if(mt=Ee[Q],y.format!==_i)if(Lt!==null)if(Re){if(k)if(y.layerUpdates.size>0){let St=Hh(mt.width,mt.height,y.format,y.type);for(let ot of y.layerUpdates){let Zt=mt.data.subarray(ot*St/mt.data.BYTES_PER_ELEMENT,(ot+1)*St/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,ot,mt.width,mt.height,1,Lt,Zt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,mt.width,mt.height,it.depth,Lt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,yt,mt.width,mt.height,it.depth,0,mt.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,mt.width,mt.height,it.depth,Lt,kt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,yt,mt.width,mt.height,it.depth,0,Lt,kt,mt.data)}else{Re&&Te&&e.texStorage2D(i.TEXTURE_2D,rt,yt,Ee[0].width,Ee[0].height);for(let Q=0,Ft=Ee.length;Q<Ft;Q++)mt=Ee[Q],y.format!==_i?Lt!==null?Re?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,mt.width,mt.height,Lt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,yt,mt.width,mt.height,0,mt.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?k&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,mt.width,mt.height,Lt,kt,mt.data):e.texImage2D(i.TEXTURE_2D,Q,yt,mt.width,mt.height,0,Lt,kt,mt.data)}else if(y.isDataArrayTexture)if(Re){if(Te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,yt,it.width,it.height,it.depth),k)if(y.layerUpdates.size>0){let Q=Hh(it.width,it.height,y.format,y.type);for(let Ft of y.layerUpdates){let St=it.data.subarray(Ft*Q/it.data.BYTES_PER_ELEMENT,(Ft+1)*Q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ft,it.width,it.height,1,Lt,kt,St)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,Lt,kt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,it.width,it.height,it.depth,0,Lt,kt,it.data);else if(y.isData3DTexture)Re?(Te&&e.texStorage3D(i.TEXTURE_3D,rt,yt,it.width,it.height,it.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,Lt,kt,it.data)):e.texImage3D(i.TEXTURE_3D,0,yt,it.width,it.height,it.depth,0,Lt,kt,it.data);else if(y.isFramebufferTexture){if(Te)if(Re)e.texStorage2D(i.TEXTURE_2D,rt,yt,it.width,it.height);else{let Q=it.width,Ft=it.height;for(let St=0;St<rt;St++)e.texImage2D(i.TEXTURE_2D,St,yt,Q,Ft,0,Lt,kt,null),Q>>=1,Ft>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),it.parentNode!==Q){Q.appendChild(it),d.add(y),Q.onpaint=Ie=>{let xn=Ie.changedElements;for(let tn of d)xn.includes(tn.image)&&(tn.needsUpdate=!0)},Q.requestPaint();return}let Ft=0,St=i.RGBA,ot=i.RGBA,Zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,Ft,St,ot,Zt,it),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(Re&&Te){let Q=Be(Ee[0]);e.texStorage2D(i.TEXTURE_2D,rt,yt,Q.width,Q.height)}for(let Q=0,Ft=Ee.length;Q<Ft;Q++)mt=Ee[Q],Re?k&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Lt,kt,mt):e.texImage2D(i.TEXTURE_2D,Q,yt,Lt,kt,mt);y.generateMipmaps=!1}else if(Re){if(Te){let Q=Be(it);e.texStorage2D(i.TEXTURE_2D,rt,yt,Q.width,Q.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,kt,it)}else e.texImage2D(i.TEXTURE_2D,0,yt,Lt,kt,it);p(y)&&S(et),xt.__version=pt.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function le(A,y,W){if(y.image.length!==6)return;let et=tt(A,y),at=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+W);let pt=n.get(at);if(at.version!==pt.__version||et===!0){e.activeTexture(i.TEXTURE0+W);let xt=qe.getPrimaries(qe.workingColorSpace),J=y.colorSpace===ss?null:qe.getPrimaries(y.colorSpace),it=y.colorSpace===ss||xt===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let Lt=y.isCompressedTexture||y.image[0].isCompressedTexture,kt=y.image[0]&&y.image[0].isDataTexture,yt=[];for(let ot=0;ot<6;ot++)!Lt&&!kt?yt[ot]=g(y.image[ot],!0,s.maxCubemapSize):yt[ot]=kt?y.image[ot].image:y.image[ot],yt[ot]=ft(y,yt[ot]);let mt=yt[0],Ee=r.convert(y.format,y.colorSpace),Re=r.convert(y.type),Te=E(y.internalFormat,Ee,Re,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,rt=pt.__version===void 0||et===!0,Q=at.dataReady,Ft=C(y,mt);Gt(i.TEXTURE_CUBE_MAP,y);let St;if(Lt){k&&rt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,Te,mt.width,mt.height);for(let ot=0;ot<6;ot++){St=yt[ot].mipmaps;for(let Zt=0;Zt<St.length;Zt++){let Ie=St[Zt];y.format!==_i?Ee!==null?k?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Zt,0,0,Ie.width,Ie.height,Ee,Ie.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Zt,Te,Ie.width,Ie.height,0,Ie.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Zt,0,0,Ie.width,Ie.height,Ee,Re,Ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Zt,Te,Ie.width,Ie.height,0,Ee,Re,Ie.data)}}}else{if(St=y.mipmaps,k&&rt){St.length>0&&Ft++;let ot=Be(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,Te,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(kt){k?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,yt[ot].width,yt[ot].height,Ee,Re,yt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Te,yt[ot].width,yt[ot].height,0,Ee,Re,yt[ot].data);for(let Zt=0;Zt<St.length;Zt++){let xn=St[Zt].image[ot].image;k?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Zt+1,0,0,xn.width,xn.height,Ee,Re,xn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Zt+1,Te,xn.width,xn.height,0,Ee,Re,xn.data)}}else{k?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ee,Re,yt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Te,Ee,Re,yt[ot]);for(let Zt=0;Zt<St.length;Zt++){let Ie=St[Zt];k?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Zt+1,0,0,Ee,Re,Ie.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Zt+1,Te,Ee,Re,Ie.image[ot])}}}p(y)&&S(i.TEXTURE_CUBE_MAP),pt.__version=at.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ce(A,y,W,et,at,pt){let xt=r.convert(W.format,W.colorSpace),J=r.convert(W.type),it=E(W.internalFormat,xt,J,W.normalized,W.colorSpace),Lt=n.get(y),kt=n.get(W);if(kt.__renderTarget=y,!Lt.__hasExternalTextures){let yt=Math.max(1,y.width>>pt),mt=Math.max(1,y.height>>pt);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,pt,it,yt,mt,y.depth,0,xt,J,null):e.texImage2D(at,pt,it,yt,mt,0,xt,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Wt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,at,kt.__webglTexture,0,Se(y)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,at,kt.__webglTexture,pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function He(A,y,W){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){let et=y.depthTexture,at=et&&et.isDepthTexture?et.type:null,pt=D(y.stencilBuffer,at),xt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Wt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(y),pt,y.width,y.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(y),pt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,pt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,A)}else{let et=y.textures;for(let at=0;at<et.length;at++){let pt=et[at],xt=r.convert(pt.format,pt.colorSpace),J=r.convert(pt.type),it=E(pt.internalFormat,xt,J,pt.normalized,pt.colorSpace);Wt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(y),it,y.width,y.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(y),it,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,it,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function jt(A,y,W){let et=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let at=n.get(y.depthTexture);if(at.__renderTarget=y,(!at.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),et){if(at.__webglInit===void 0&&(at.__webglInit=!0,y.depthTexture.addEventListener("dispose",F)),at.__webglTexture===void 0){at.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,y.depthTexture);let Lt=r.convert(y.depthTexture.format),kt=r.convert(y.depthTexture.type),yt;y.depthTexture.format===Pi?yt=i.DEPTH_COMPONENT24:y.depthTexture.format===As&&(yt=i.DEPTH24_STENCIL8);for(let mt=0;mt<6;mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,yt,y.width,y.height,0,Lt,kt,null)}}else lt(y.depthTexture,0);let pt=at.__webglTexture,xt=Se(y),J=et?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,it=y.depthTexture.format===As?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Pi)Wt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,J,pt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,it,J,pt,0);else if(y.depthTexture.format===As)Wt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,J,pt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,it,J,pt,0);else throw new Error("Unknown depthTexture format")}function nt(A){let y=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let et=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),et){let at=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,et.removeEventListener("dispose",at)};et.addEventListener("dispose",at),y.__depthDisposeCallback=at}y.__boundDepthTexture=et}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(W)for(let et=0;et<6;et++)jt(y.__webglFramebuffer[et],A,et);else{let et=A.texture.mipmaps;et&&et.length>0?jt(y.__webglFramebuffer[0],A,0):jt(y.__webglFramebuffer,A,0)}else if(W){y.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[et]),y.__webglDepthbuffer[et]===void 0)y.__webglDepthbuffer[et]=i.createRenderbuffer(),He(y.__webglDepthbuffer[et],A,!1);else{let at=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=y.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,pt)}}else{let et=A.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),He(y.__webglDepthbuffer,A,!1);else{let at=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,pt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(A,y,W){let et=n.get(A);y!==void 0&&ce(et.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&nt(A)}function st(A){let y=A.texture,W=n.get(A),et=n.get(y);A.addEventListener("dispose",_);let at=A.textures,pt=A.isWebGLCubeRenderTarget===!0,xt=at.length>1;if(xt||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=y.version,a.memory.textures++),pt){W.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer[J]=[];for(let it=0;it<y.mipmaps.length;it++)W.__webglFramebuffer[J][it]=i.createFramebuffer()}else W.__webglFramebuffer[J]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)W.__webglFramebuffer[J]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(xt)for(let J=0,it=at.length;J<it;J++){let Lt=n.get(at[J]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Wt(A)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let J=0;J<at.length;J++){let it=at[J];W.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[J]);let Lt=r.convert(it.format,it.colorSpace),kt=r.convert(it.type),yt=E(it.internalFormat,Lt,kt,it.normalized,it.colorSpace,A.isXRRenderTarget===!0),mt=Se(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,yt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,W.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),He(W.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0)for(let it=0;it<y.mipmaps.length;it++)ce(W.__webglFramebuffer[J][it],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,it);else ce(W.__webglFramebuffer[J],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(y)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let J=0,it=at.length;J<it;J++){let Lt=at[J],kt=n.get(Lt),yt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(yt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,kt.__webglTexture),Gt(yt,Lt),ce(W.__webglFramebuffer,A,Lt,i.COLOR_ATTACHMENT0+J,yt,0),p(Lt)&&S(yt)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,et.__webglTexture),Gt(J,y),y.mipmaps&&y.mipmaps.length>0)for(let it=0;it<y.mipmaps.length;it++)ce(W.__webglFramebuffer[it],A,y,i.COLOR_ATTACHMENT0,J,it);else ce(W.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,J,0);p(y)&&S(J),e.unbindTexture()}A.depthBuffer&&nt(A)}function At(A){let y=A.textures;for(let W=0,et=y.length;W<et;W++){let at=y[W];if(p(at)){let pt=w(A),xt=n.get(at).__webglTexture;e.bindTexture(pt,xt),S(pt),e.unbindTexture()}}}let Mt=[],fe=[];function N(A){if(A.samples>0){if(Wt(A)===!1){let y=A.textures,W=A.width,et=A.height,at=i.COLOR_BUFFER_BIT,pt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(A),J=y.length>1;if(J)for(let Lt=0;Lt<y.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);let it=A.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Lt=0;Lt<y.length;Lt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[Lt]);let kt=n.get(y[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,W,et,0,0,W,et,at,i.NEAREST),l===!0&&(Mt.length=0,fe.length=0,Mt.push(i.COLOR_ATTACHMENT0+Lt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Mt.push(pt),fe.push(pt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let Lt=0;Lt<y.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[Lt]);let kt=n.get(y[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Se(A){return Math.min(s.maxSamples,A.samples)}function Wt(A){let y=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function pe(A){let y=a.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function ft(A,y){let W=A.colorSpace,et=A.format,at=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==la&&W!==ss&&(qe.getTransfer(W)===nn?(et!==_i||at!==ii)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_e("WebGLTextures: Unsupported texture color space:",W)),y}function Be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=j,this.getTextureUnits=K,this.setTextureUnits=V,this.setTexture2D=lt,this.setTexture2DArray=ht,this.setTexture3D=Et,this.setTextureCube=Nt,this.rebindTextures=dt,this.setupRenderTarget=st,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function O_(i,t){function e(n,s=ss){let r,a=qe.getTransfer(s);if(n===ii)return i.UNSIGNED_BYTE;if(n===Cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ph)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rh)return i.BYTE;if(n===Ih)return i.SHORT;if(n===Dr)return i.UNSIGNED_SHORT;if(n===Al)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===wi)return i.FLOAT;if(n===Fi)return i.HALF_FLOAT;if(n===Dh)return i.ALPHA;if(n===Nh)return i.RGB;if(n===_i)return i.RGBA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===As)return i.DEPTH_STENCIL;if(n===Uh)return i.RED;if(n===Il)return i.RED_INTEGER;if(n===Cs)return i.RG;if(n===Pl)return i.RG_INTEGER;if(n===Ll)return i.RGBA_INTEGER;if(n===ka||n===za||n===Va||n===Ha)if(a===nn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dl||n===Nl||n===Ul||n===Fl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bl||n===Ol||n===kl||n===zl||n===Vl||n===Ga||n===Hl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bl||n===Ol)return a===nn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===kl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===zl)return r.COMPRESSED_R11_EAC;if(n===Vl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ga)return r.COMPRESSED_RG11_EAC;if(n===Hl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===Zl||n===Jl||n===Kl||n===jl||n===Ql||n===tc||n===ec||n===nc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ql)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$l)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ql)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tc)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ec)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nc)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ic||n===sc||n===rc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ic)return a===nn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ac||n===oc||n===Wa||n===lc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ac)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var k_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,nu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ya(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ui({vertexShader:k_,fragmentShader:z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new js(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},iu=class extends Li{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,x=null,b=typeof XRWebGLBinding<"u",g=new nu,p={},S=e.getContextAttributes(),w=null,E=null,D=[],C=[],F=new Ct,_=null,R=new Fn;R.viewport=new Mn;let O=new Fn;O.viewport=new Mn;let L=[R,O],H=new bl,j=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let Pt=D[tt];return Pt===void 0&&(Pt=new Tr,D[tt]=Pt),Pt.getTargetRaySpace()},this.getControllerGrip=function(tt){let Pt=D[tt];return Pt===void 0&&(Pt=new Tr,D[tt]=Pt),Pt.getGripSpace()},this.getHand=function(tt){let Pt=D[tt];return Pt===void 0&&(Pt=new Tr,D[tt]=Pt),Pt.getHandSpace()};function V(tt){let Pt=C.indexOf(tt.inputSource);if(Pt===-1)return;let _t=D[Pt];_t!==void 0&&(_t.update(tt.inputSource,tt.frame,c||a),_t.dispatchEvent({type:tt.type,data:tt.inputSource}))}function q(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",X);for(let tt=0;tt<D.length;tt++){let Pt=C[tt];Pt!==null&&(C[tt]=null,D[tt].disconnect(Pt))}j=null,K=null,g.reset();for(let tt in p)delete p[tt];t.setRenderTarget(w),f=null,h=null,d=null,s=null,E=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,n.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",q),s.addEventListener("inputsourceschange",X),S.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(F),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Xt=null,le=null;S.depth&&(le=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=S.stencil?As:Pi,Xt=S.stencil?Nr:Ti);let ce={colorFormat:e.RGBA8,depthFormat:le,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(ce),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),E=new li(h.textureWidth,h.textureHeight,{format:_i,type:ii,depthTexture:new ns(h.textureWidth,h.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let _t={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new li(f.framebufferWidth,f.framebufferHeight,{format:_i,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Gt.setContext(s),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(tt){for(let Pt=0;Pt<tt.removed.length;Pt++){let _t=tt.removed[Pt],Xt=C.indexOf(_t);Xt>=0&&(C[Xt]=null,D[Xt].disconnect(_t))}for(let Pt=0;Pt<tt.added.length;Pt++){let _t=tt.added[Pt],Xt=C.indexOf(_t);if(Xt===-1){for(let ce=0;ce<D.length;ce++)if(ce>=C.length){C.push(_t),Xt=ce;break}else if(C[ce]===null){C[ce]=_t,Xt=ce;break}if(Xt===-1)break}let le=D[Xt];le&&le.connect(_t)}}let lt=new U,ht=new U;function Et(tt,Pt,_t){lt.setFromMatrixPosition(Pt.matrixWorld),ht.setFromMatrixPosition(_t.matrixWorld);let Xt=lt.distanceTo(ht),le=Pt.projectionMatrix.elements,ce=_t.projectionMatrix.elements,He=le[14]/(le[10]-1),jt=le[14]/(le[10]+1),nt=(le[9]+1)/le[5],dt=(le[9]-1)/le[5],st=(le[8]-1)/le[0],At=(ce[8]+1)/ce[0],Mt=He*st,fe=He*At,N=Xt/(-st+At),Se=N*-st;if(Pt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Se),tt.translateZ(N),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),le[10]===-1)tt.projectionMatrix.copy(Pt.projectionMatrix),tt.projectionMatrixInverse.copy(Pt.projectionMatrixInverse);else{let Wt=He+N,pe=jt+N,ft=Mt-Se,Be=fe+(Xt-Se),A=nt*jt/pe*Wt,y=dt*jt/pe*Wt;tt.projectionMatrix.makePerspective(ft,Be,A,y,Wt,pe),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function Nt(tt,Pt){Pt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(Pt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let Pt=tt.near,_t=tt.far;g.texture!==null&&(g.depthNear>0&&(Pt=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),H.near=O.near=R.near=Pt,H.far=O.far=R.far=_t,(j!==H.near||K!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),j=H.near,K=H.far),H.layers.mask=tt.layers.mask|6,R.layers.mask=H.layers.mask&-5,O.layers.mask=H.layers.mask&-3;let Xt=tt.parent,le=H.cameras;Nt(H,Xt);for(let ce=0;ce<le.length;ce++)Nt(le[ce],Xt);le.length===2?Et(H,R,O):H.projectionMatrix.copy(R.projectionMatrix),Ht(tt,H,Xt)};function Ht(tt,Pt,_t){_t===null?tt.matrix.copy(Pt.matrixWorld):(tt.matrix.copy(_t.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(Pt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(Pt.projectionMatrix),tt.projectionMatrixInverse.copy(Pt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Jo*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(tt){l=tt,h!==null&&(h.fixedFoveation=tt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=tt)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(tt){return p[tt]};let Ae=null;function oe(tt,Pt){if(u=Pt.getViewerPose(c||a),x=Pt,u!==null){let _t=u.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let Xt=!1;_t.length!==H.cameras.length&&(H.cameras.length=0,Xt=!0);for(let jt=0;jt<_t.length;jt++){let nt=_t[jt],dt=null;if(f!==null)dt=f.getViewport(nt);else{let At=d.getViewSubImage(h,nt);dt=At.viewport,jt===0&&(t.setRenderTargetTextures(E,At.colorTexture,At.depthStencilTexture),t.setRenderTarget(E))}let st=L[jt];st===void 0&&(st=new Fn,st.layers.enable(jt),st.viewport=new Mn,L[jt]=st),st.matrix.fromArray(nt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(nt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(dt.x,dt.y,dt.width,dt.height),jt===0&&(H.matrix.copy(st.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Xt===!0&&H.cameras.push(st)}let le=s.enabledFeatures;if(le&&le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){d=n.getBinding();let jt=d.getDepthInformation(_t[0]);jt&&jt.isValid&&jt.texture&&g.init(jt,s.renderState)}if(le&&le.includes("camera-access")&&b){t.state.unbindTexture(),d=n.getBinding();for(let jt=0;jt<_t.length;jt++){let nt=_t[jt].camera;if(nt){let dt=p[nt];dt||(dt=new ya,p[nt]=dt);let st=d.getCameraImage(nt);dt.sourceTexture=st}}}}for(let _t=0;_t<D.length;_t++){let Xt=C[_t],le=D[_t];Xt!==null&&le!==void 0&&le.update(Xt,Pt,c||a)}Ae&&Ae(tt,Pt),Pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Pt}),x=null}let Gt=new Pf;Gt.setAnimationLoop(oe),this.setAnimationLoop=function(tt){Ae=tt},this.dispose=function(){}}},V_=new gn,Bf=new De;Bf.set(-1,0,0,0,1,0,0,0,1);function H_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,kh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,w,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&f(g,p,E)):p.isMeshMatcapMaterial?(r(g,p),x(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),b(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,S,w):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Qn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Qn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let S=t.get(p),w=S.envMap,E=S.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(V_.makeRotationFromEuler(E)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Bf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,S,w){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=w*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function G_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){let E=w.program;n.uniformBlockBinding(S,E)}function c(S,w){let E=s[S.id];E===void 0&&(x(S),E=u(S),s[S.id]=E,S.addEventListener("dispose",g));let D=w.program;n.updateUBOMapping(S,D);let C=t.render.frame;r[S.id]!==C&&(h(S),r[S.id]=C)}function u(S){let w=d();S.__bindingPointIndex=w;let E=i.createBuffer(),D=S.__size,C=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,E),E}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return _e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let w=s[S.id],E=S.uniforms,D=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let C=0,F=E.length;C<F;C++){let _=Array.isArray(E[C])?E[C]:[E[C]];for(let R=0,O=_.length;R<O;R++){let L=_[R];if(f(L,C,R,D)===!0){let H=L.__offset,j=Array.isArray(L.value)?L.value:[L.value],K=0;for(let V=0;V<j.length;V++){let q=j[V],X=b(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,H+K,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):ArrayBuffer.isView(q)?L.__data.set(new q.constructor(q.buffer,q.byteOffset,L.__data.length)):(q.toArray(L.__data,K),K+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,w,E,D){let C=S.value,F=w+"_"+E;if(D[F]===void 0)return typeof C=="number"||typeof C=="boolean"?D[F]=C:ArrayBuffer.isView(C)?D[F]=C.slice():D[F]=C.clone(),!0;{let _=D[F];if(typeof C=="number"||typeof C=="boolean"){if(_!==C)return D[F]=C,!0}else{if(ArrayBuffer.isView(C))return!0;if(_.equals(C)===!1)return _.copy(C),!0}}return!1}function x(S){let w=S.uniforms,E=0,D=16;for(let F=0,_=w.length;F<_;F++){let R=Array.isArray(w[F])?w[F]:[w[F]];for(let O=0,L=R.length;O<L;O++){let H=R[O],j=Array.isArray(H.value)?H.value:[H.value];for(let K=0,V=j.length;K<V;K++){let q=j[K],X=b(q),lt=E%D,ht=lt%X.boundary,Et=lt+ht;E+=ht,Et!==0&&D-Et<X.storage&&(E+=D-Et),H.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=E,E+=X.storage}}}let C=E%D;return C>0&&(E+=D-C),S.__size=E,S.__cache={},this}function b(S){let w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):de("WebGLRenderer: Unsupported uniform value type.",S),w}function g(S){let w=S.target;w.removeEventListener("dispose",g);let E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var W_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bi=null;function X_(){return Bi===null&&(Bi=new tl(W_,16,16,Cs,Fi),Bi.name="DFG_LUT",Bi.minFilter=Bn,Bi.magFilter=Bn,Bi.wrapS=Ii,Bi.wrapT=Ii,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}var gc=class{constructor(t={}){let{canvas:e=Kd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=ii}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let b=f,g=new Set([Ll,Pl,Il]),p=new Set([ii,Ti,Dr,Nr,Cl,Rl]),S=new Uint32Array(4),w=new Int32Array(4),E=new U,D=null,C=null,F=[],_=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,L=!1,H=null;this._outputColorSpace=qn;let j=0,K=0,V=null,q=-1,X=null,lt=new Mn,ht=new Mn,Et=null,Nt=new Ge(0),Ht=0,Ae=e.width,oe=e.height,Gt=1,tt=null,Pt=null,_t=new Mn(0,0,Ae,oe),Xt=new Mn(0,0,Ae,oe),le=!1,ce=new wr,He=!1,jt=!1,nt=new gn,dt=new U,st=new Mn,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mt=!1;function fe(){return V===null?Gt:1}let N=n;function Se(M,G){return e.getContext(M,G)}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"184"}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",Zt,!1),e.addEventListener("webglcontextcreationerror",Ie,!1),N===null){let G="webgl2";if(N=Se(G,M),N===null)throw Se(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw _e("WebGLRenderer: "+M.message),M}let Wt,pe,ft,Be,A,y,W,et,at,pt,xt,J,it,Lt,kt,yt,mt,Ee,Re,Te,k,rt,Q;function Ft(){Wt=new jg(N),Wt.init(),k=new O_(N,Wt),pe=new Wg(N,Wt,t,k),ft=new F_(N,Wt),pe.reversedDepthBuffer&&h&&ft.buffers.depth.setReversed(!0),Be=new ex(N),A=new S_,y=new B_(N,Wt,ft,A,pe,k,Be),W=new Kg(O),et=new rm(N),rt=new Hg(N,et),at=new Qg(N,et,Be,rt),pt=new ix(N,at,et,rt,Be),Ee=new nx(N,pe,y),kt=new Xg(A),xt=new M_(O,W,Wt,pe,rt,kt),J=new H_(O,A),it=new E_,Lt=new I_(Wt),mt=new Vg(O,W,ft,pt,x,l),yt=new U_(O,pt,pe),Q=new G_(N,Be,pe,ft),Re=new Gg(N,Wt,Be),Te=new tx(N,Wt,Be),Be.programs=xt.programs,O.capabilities=pe,O.extensions=Wt,O.properties=A,O.renderLists=it,O.shadowMap=yt,O.state=ft,O.info=Be}Ft(),b!==ii&&(R=new rx(b,e.width,e.height,s,r));let St=new iu(O,N);this.xr=St,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=Wt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Wt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Gt},this.setPixelRatio=function(M){M!==void 0&&(Gt=M,this.setSize(Ae,oe,!1))},this.getSize=function(M){return M.set(Ae,oe)},this.setSize=function(M,G,Z=!0){if(St.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=M,oe=G,e.width=Math.floor(M*Gt),e.height=Math.floor(G*Gt),Z===!0&&(e.style.width=M+"px",e.style.height=G+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,M,G)},this.getDrawingBufferSize=function(M){return M.set(Ae*Gt,oe*Gt).floor()},this.setDrawingBufferSize=function(M,G,Z){Ae=M,oe=G,Gt=Z,e.width=Math.floor(M*Z),e.height=Math.floor(G*Z),this.setViewport(0,0,M,G)},this.setEffects=function(M){if(b===ii){_e("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let G=0;G<M.length;G++)if(M[G].isOutputPass===!0){de("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(lt)},this.getViewport=function(M){return M.copy(_t)},this.setViewport=function(M,G,Z,Y){M.isVector4?_t.set(M.x,M.y,M.z,M.w):_t.set(M,G,Z,Y),ft.viewport(lt.copy(_t).multiplyScalar(Gt).round())},this.getScissor=function(M){return M.copy(Xt)},this.setScissor=function(M,G,Z,Y){M.isVector4?Xt.set(M.x,M.y,M.z,M.w):Xt.set(M,G,Z,Y),ft.scissor(ht.copy(Xt).multiplyScalar(Gt).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(M){ft.setScissorTest(le=M)},this.setOpaqueSort=function(M){tt=M},this.setTransparentSort=function(M){Pt=M},this.getClearColor=function(M){return M.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor(...arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha(...arguments)},this.clear=function(M=!0,G=!0,Z=!0){let Y=0;if(M){let $=!1;if(V!==null){let Rt=V.texture.format;$=g.has(Rt)}if($){let Rt=V.texture.type,Bt=p.has(Rt),It=mt.getClearColor(),qt=mt.getClearAlpha(),Jt=It.r,Ce=It.g,Pe=It.b;Bt?(S[0]=Jt,S[1]=Ce,S[2]=Pe,S[3]=qt,N.clearBufferuiv(N.COLOR,0,S)):(w[0]=Jt,w[1]=Ce,w[2]=Pe,w[3]=qt,N.clearBufferiv(N.COLOR,0,w))}else Y|=N.COLOR_BUFFER_BIT}G&&(Y|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),H=M},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",Ie,!1),mt.dispose(),it.dispose(),Lt.dispose(),A.dispose(),W.dispose(),pt.dispose(),rt.dispose(),Q.dispose(),xt.dispose(),St.dispose(),St.removeEventListener("sessionstart",Za),St.removeEventListener("sessionend",Ja),ki.stop()};function ot(M){M.preventDefault(),Bh("WebGLRenderer: Context Lost."),L=!0}function Zt(){Bh("WebGLRenderer: Context Restored."),L=!1;let M=Be.autoReset,G=yt.enabled,Z=yt.autoUpdate,Y=yt.needsUpdate,$=yt.type;Ft(),Be.autoReset=M,yt.enabled=G,yt.autoUpdate=Z,yt.needsUpdate=Y,yt.type=$}function Ie(M){_e("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function xn(M){let G=M.target;G.removeEventListener("dispose",xn),tn(G)}function tn(M){Zn(M),A.remove(M)}function Zn(M){let G=A.get(M).programs;G!==void 0&&(G.forEach(function(Z){xt.releaseProgram(Z)}),M.isShaderMaterial&&xt.releaseShaderCache(M))}this.renderBufferDirect=function(M,G,Z,Y,$,Rt){G===null&&(G=At);let Bt=$.isMesh&&$.matrixWorld.determinant()<0,It=Hr(M,G,Z,Y,$);ft.setMaterial(Y,Bt);let qt=Z.index,Jt=1;if(Y.wireframe===!0){if(qt=at.getWireframeAttribute(Z),qt===void 0)return;Jt=2}let Ce=Z.drawRange,Pe=Z.attributes.position,ee=Ce.start*Jt,sn=(Ce.start+Ce.count)*Jt;Rt!==null&&(ee=Math.max(ee,Rt.start*Jt),sn=Math.min(sn,(Rt.start+Rt.count)*Jt)),qt!==null?(ee=Math.max(ee,0),sn=Math.min(sn,qt.count)):Pe!=null&&(ee=Math.max(ee,0),sn=Math.min(sn,Pe.count));let _n=sn-ee;if(_n<0||_n===1/0)return;rt.setup($,Y,It,Z,qt);let rn,Je=Re;if(qt!==null&&(rn=et.get(qt),Je=Te,Je.setIndex(rn)),$.isMesh)Y.wireframe===!0?(ft.setLineWidth(Y.wireframeLinewidth*fe()),Je.setMode(N.LINES)):Je.setMode(N.TRIANGLES);else if($.isLine){let Ye=Y.linewidth;Ye===void 0&&(Ye=1),ft.setLineWidth(Ye*fe()),$.isLineSegments?Je.setMode(N.LINES):$.isLineLoop?Je.setMode(N.LINE_LOOP):Je.setMode(N.LINE_STRIP)}else $.isPoints?Je.setMode(N.POINTS):$.isSprite&&Je.setMode(N.TRIANGLES);if($.isBatchedMesh)if(Wt.get("WEBGL_multi_draw"))Je.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Ye=$._multiDrawStarts,vt=$._multiDrawCounts,On=$._multiDrawCount,Xe=qt?et.get(qt).bytesPerElement:1,Jn=A.get(Y).currentProgram.getUniforms();for(let kn=0;kn<On;kn++)Jn.setValue(N,"_gl_DrawID",kn),Je.render(Ye[kn]/Xe,vt[kn])}else if($.isInstancedMesh)Je.renderInstances(ee,_n,$.count);else if(Z.isInstancedBufferGeometry){let Ye=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,vt=Math.min(Z.instanceCount,Ye);Je.renderInstances(ee,_n,vt)}else Je.render(ee,_n)};function si(M,G,Z){M.transparent===!0&&M.side===Ni&&M.forceSinglePass===!1?(M.side=Qn,M.needsUpdate=!0,Nn(M,G,Z),M.side=Ki,M.needsUpdate=!0,Nn(M,G,Z),M.side=Ni):Nn(M,G,Z)}this.compile=function(M,G,Z=null){Z===null&&(Z=M),C=Lt.get(Z),C.init(G),_.push(C),Z.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(C.pushLight($),$.castShadow&&C.pushShadow($))}),M!==Z&&M.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(C.pushLight($),$.castShadow&&C.pushShadow($))}),C.setupLights();let Y=new Set;return M.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Rt=$.material;if(Rt)if(Array.isArray(Rt))for(let Bt=0;Bt<Rt.length;Bt++){let It=Rt[Bt];si(It,Z,$),Y.add(It)}else si(Rt,Z,$),Y.add(Rt)}),C=_.pop(),Y},this.compileAsync=function(M,G,Z=null){let Y=this.compile(M,G,Z);return new Promise($=>{function Rt(){if(Y.forEach(function(Bt){A.get(Bt).currentProgram.isReady()&&Y.delete(Bt)}),Y.size===0){$(M);return}setTimeout(Rt,10)}Wt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let ir=null;function $a(M){ir&&ir(M)}function Za(){ki.stop()}function Ja(){ki.start()}let ki=new Pf;ki.setAnimationLoop($a),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(M){ir=M,St.setAnimationLoop(M),M===null?ki.stop():ki.start()},St.addEventListener("sessionstart",Za),St.addEventListener("sessionend",Ja),this.render=function(M,G){if(G!==void 0&&G.isCamera!==!0){_e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;H!==null&&H.renderStart(M,G);let Z=St.enabled===!0&&St.isPresenting===!0,Y=R!==null&&(V===null||Z)&&R.begin(O,V);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(St.cameraAutoUpdate===!0&&St.updateCamera(G),G=St.getCamera()),M.isScene===!0&&M.onBeforeRender(O,M,G,V),C=Lt.get(M,_.length),C.init(G),C.state.textureUnits=y.getTextureUnits(),_.push(C),nt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ce.setFromProjectionMatrix(nt,bi,G.reversedDepth),jt=this.localClippingEnabled,He=kt.init(this.clippingPlanes,jt),D=it.get(M,F.length),D.init(),F.push(D),St.enabled===!0&&St.isPresenting===!0){let Bt=O.xr.getDepthSensingMesh();Bt!==null&&Ps(Bt,G,-1/0,O.sortObjects)}Ps(M,G,0,O.sortObjects),D.finish(),O.sortObjects===!0&&D.sort(tt,Pt),Mt=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,Mt&&mt.addToRenderList(D,M),this.info.render.frame++,He===!0&&kt.beginShadows();let $=C.state.shadowsArray;if(yt.render($,M,G),He===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&R.hasRenderPass())===!1){let Bt=D.opaque,It=D.transmissive;if(C.setupLights(),G.isArrayCamera){let qt=G.cameras;if(It.length>0)for(let Jt=0,Ce=qt.length;Jt<Ce;Jt++){let Pe=qt[Jt];zr(Bt,It,M,Pe)}Mt&&mt.render(M);for(let Jt=0,Ce=qt.length;Jt<Ce;Jt++){let Pe=qt[Jt];kr(D,M,Pe,Pe.viewport)}}else It.length>0&&zr(Bt,It,M,G),Mt&&mt.render(M),kr(D,M,G)}V!==null&&K===0&&(y.updateMultisampleRenderTarget(V),y.updateRenderTargetMipmap(V)),Y&&R.end(O),M.isScene===!0&&M.onAfterRender(O,M,G),rt.resetDefaultState(),q=-1,X=null,_.pop(),_.length>0?(C=_[_.length-1],y.setTextureUnits(C.state.textureUnits),He===!0&&kt.setGlobalState(O.clippingPlanes,C.state.camera)):C=null,F.pop(),F.length>0?D=F[F.length-1]:D=null,H!==null&&H.renderEnd()};function Ps(M,G,Z,Y){if(M.visible===!1)return;if(M.layers.test(G.layers)){if(M.isGroup)Z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(G);else if(M.isLightProbeGrid)C.pushLightProbeGrid(M);else if(M.isLight)C.pushLight(M),M.castShadow&&C.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ce.intersectsSprite(M)){Y&&st.setFromMatrixPosition(M.matrixWorld).applyMatrix4(nt);let Bt=pt.update(M),It=M.material;It.visible&&D.push(M,Bt,It,Z,st.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ce.intersectsObject(M))){let Bt=pt.update(M),It=M.material;if(Y&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),st.copy(M.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),st.copy(Bt.boundingSphere.center)),st.applyMatrix4(M.matrixWorld).applyMatrix4(nt)),Array.isArray(It)){let qt=Bt.groups;for(let Jt=0,Ce=qt.length;Jt<Ce;Jt++){let Pe=qt[Jt],ee=It[Pe.materialIndex];ee&&ee.visible&&D.push(M,Bt,ee,Z,st.z,Pe)}}else It.visible&&D.push(M,Bt,It,Z,st.z,null)}}let Rt=M.children;for(let Bt=0,It=Rt.length;Bt<It;Bt++)Ps(Rt[Bt],G,Z,Y)}function kr(M,G,Z,Y){let{opaque:$,transmissive:Rt,transparent:Bt}=M;C.setupLightsView(Z),He===!0&&kt.setGlobalState(O.clippingPlanes,Z),Y&&ft.viewport(lt.copy(Y)),$.length>0&&Ls($,G,Z),Rt.length>0&&Ls(Rt,G,Z),Bt.length>0&&Ls(Bt,G,Z),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function zr(M,G,Z,Y){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[Y.id]===void 0){let ee=Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[Y.id]=new li(1,1,{generateMipmaps:!0,type:ee?Fi:ii,minFilter:ws,samples:Math.max(4,pe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}let Rt=C.state.transmissionRenderTarget[Y.id],Bt=Y.viewport||lt;Rt.setSize(Bt.z*O.transmissionResolutionScale,Bt.w*O.transmissionResolutionScale);let It=O.getRenderTarget(),qt=O.getActiveCubeFace(),Jt=O.getActiveMipmapLevel();O.setRenderTarget(Rt),O.getClearColor(Nt),Ht=O.getClearAlpha(),Ht<1&&O.setClearColor(16777215,.5),O.clear(),Mt&&mt.render(Z);let Ce=O.toneMapping;O.toneMapping=Ei;let Pe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),C.setupLightsView(Y),He===!0&&kt.setGlobalState(O.clippingPlanes,Y),Ls(M,Z,Y),y.updateMultisampleRenderTarget(Rt),y.updateRenderTargetMipmap(Rt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let sn=0,_n=G.length;sn<_n;sn++){let rn=G[sn],{object:Je,geometry:Ye,material:vt,group:On}=rn;if(vt.side===Ni&&Je.layers.test(Y.layers)){let Xe=vt.side;vt.side=Qn,vt.needsUpdate=!0,zi(Je,Z,Y,Ye,vt,On),vt.side=Xe,vt.needsUpdate=!0,ee=!0}}ee===!0&&(y.updateMultisampleRenderTarget(Rt),y.updateRenderTargetMipmap(Rt))}O.setRenderTarget(It,qt,Jt),O.setClearColor(Nt,Ht),Pe!==void 0&&(Y.viewport=Pe),O.toneMapping=Ce}function Ls(M,G,Z){let Y=G.isScene===!0?G.overrideMaterial:null;for(let $=0,Rt=M.length;$<Rt;$++){let Bt=M[$],{object:It,geometry:qt,group:Jt}=Bt,Ce=Bt.material;Ce.allowOverride===!0&&Y!==null&&(Ce=Y),It.layers.test(Z.layers)&&zi(It,G,Z,qt,Ce,Jt)}}function zi(M,G,Z,Y,$,Rt){M.onBeforeRender(O,G,Z,Y,$,Rt),M.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),$.onBeforeRender(O,G,Z,Y,M,Rt),$.transparent===!0&&$.side===Ni&&$.forceSinglePass===!1?($.side=Qn,$.needsUpdate=!0,O.renderBufferDirect(Z,G,Y,$,M,Rt),$.side=Ki,$.needsUpdate=!0,O.renderBufferDirect(Z,G,Y,$,M,Rt),$.side=Ni):O.renderBufferDirect(Z,G,Y,$,M,Rt),M.onAfterRender(O,G,Z,Y,$,Rt)}function Nn(M,G,Z){G.isScene!==!0&&(G=At);let Y=A.get(M),$=C.state.lights,Rt=C.state.shadowsArray,Bt=$.state.version,It=xt.getParameters(M,$.state,Rt,G,Z,C.state.lightProbeGridArray),qt=xt.getProgramCacheKey(It),Jt=Y.programs;Y.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?G.environment:null,Y.fog=G.fog;let Ce=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;Y.envMap=W.get(M.envMap||Y.environment,Ce),Y.envMapRotation=Y.environment!==null&&M.envMap===null?G.environmentRotation:M.envMapRotation,Jt===void 0&&(M.addEventListener("dispose",xn),Jt=new Map,Y.programs=Jt);let Pe=Jt.get(qt);if(Pe!==void 0){if(Y.currentProgram===Pe&&Y.lightsStateVersion===Bt)return Ka(M,It),Pe}else It.uniforms=xt.getUniforms(M),H!==null&&M.isNodeMaterial&&H.build(M,Z,It),M.onBeforeCompile(It,O),Pe=xt.acquireProgram(It,qt),Jt.set(qt,Pe),Y.uniforms=It.uniforms;let ee=Y.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ee.clippingPlanes=kt.uniform),Ka(M,It),Y.needsLights=Qa(M),Y.lightsStateVersion=Bt,Y.needsLights&&(ee.ambientLightColor.value=$.state.ambient,ee.lightProbe.value=$.state.probe,ee.directionalLights.value=$.state.directional,ee.directionalLightShadows.value=$.state.directionalShadow,ee.spotLights.value=$.state.spot,ee.spotLightShadows.value=$.state.spotShadow,ee.rectAreaLights.value=$.state.rectArea,ee.ltc_1.value=$.state.rectAreaLTC1,ee.ltc_2.value=$.state.rectAreaLTC2,ee.pointLights.value=$.state.point,ee.pointLightShadows.value=$.state.pointShadow,ee.hemisphereLights.value=$.state.hemi,ee.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ee.spotLightMatrix.value=$.state.spotLightMatrix,ee.spotLightMap.value=$.state.spotLightMap,ee.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.lightProbeGrid=C.state.lightProbeGridArray.length>0,Y.currentProgram=Pe,Y.uniformsList=null,Pe}function Vr(M){if(M.uniformsList===null){let G=M.currentProgram.getUniforms();M.uniformsList=Br.seqWithValue(G.seq,M.uniforms)}return M.uniformsList}function Ka(M,G){let Z=A.get(M);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function ja(M,G){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;E.setFromMatrixPosition(G.matrixWorld);for(let Z=0,Y=M.length;Z<Y;Z++){let $=M[Z];if($.texture!==null&&$.boundingBox.containsPoint(E))return $}return null}function Hr(M,G,Z,Y,$){G.isScene!==!0&&(G=At),y.resetTextureUnits();let Rt=G.fog,Bt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?G.environment:null,It=V===null?O.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:qe.workingColorSpace,qt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Jt=W.get(Y.envMap||Bt,qt),Ce=Y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Pe=!!Z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ee=!!Z.morphAttributes.position,sn=!!Z.morphAttributes.normal,_n=!!Z.morphAttributes.color,rn=Ei;Y.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(rn=O.toneMapping);let Je=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ye=Je!==void 0?Je.length:0,vt=A.get(Y),On=C.state.lights;if(He===!0&&(jt===!0||M!==X)){let an=M===X&&Y.id===q;kt.setState(Y,M,an)}let Xe=!1;Y.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==On.state.version||vt.outputColorSpace!==It||$.isBatchedMesh&&vt.batching===!1||!$.isBatchedMesh&&vt.batching===!0||$.isBatchedMesh&&vt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&vt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&vt.instancing===!1||!$.isInstancedMesh&&vt.instancing===!0||$.isSkinnedMesh&&vt.skinning===!1||!$.isSkinnedMesh&&vt.skinning===!0||$.isInstancedMesh&&vt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&vt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&vt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&vt.instancingMorph===!1&&$.morphTexture!==null||vt.envMap!==Jt||Y.fog===!0&&vt.fog!==Rt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==kt.numPlanes||vt.numIntersection!==kt.numIntersection)||vt.vertexAlphas!==Ce||vt.vertexTangents!==Pe||vt.morphTargets!==ee||vt.morphNormals!==sn||vt.morphColors!==_n||vt.toneMapping!==rn||vt.morphTargetsCount!==Ye||!!vt.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(Xe=!0):(Xe=!0,vt.__version=Y.version);let Jn=vt.currentProgram;Xe===!0&&(Jn=Nn(Y,G,$),H&&Y.isNodeMaterial&&H.onUpdateProgram(Y,Jn,vt));let kn=!1,pi=!1,ri=!1,Oe=Jn.getUniforms(),dn=vt.uniforms;if(ft.useProgram(Jn.program)&&(kn=!0,pi=!0,ri=!0),Y.id!==q&&(q=Y.id,pi=!0),vt.needsLights){let an=ja(C.state.lightProbeGridArray,$);vt.lightProbeGrid!==an&&(vt.lightProbeGrid=an,pi=!0)}if(kn||X!==M){ft.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Oe.setValue(N,"projectionMatrix",M.projectionMatrix),Oe.setValue(N,"viewMatrix",M.matrixWorldInverse);let wn=Oe.map.cameraPosition;wn!==void 0&&wn.setValue(N,dt.setFromMatrixPosition(M.matrixWorld)),pe.logarithmicDepthBuffer&&Oe.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Oe.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),X!==M&&(X=M,pi=!0,ri=!0)}if(vt.needsLights&&(On.state.directionalShadowMap.length>0&&Oe.setValue(N,"directionalShadowMap",On.state.directionalShadowMap,y),On.state.spotShadowMap.length>0&&Oe.setValue(N,"spotShadowMap",On.state.spotShadowMap,y),On.state.pointShadowMap.length>0&&Oe.setValue(N,"pointShadowMap",On.state.pointShadowMap,y)),$.isSkinnedMesh){Oe.setOptional(N,$,"bindMatrix"),Oe.setOptional(N,$,"bindMatrixInverse");let an=$.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Oe.setValue(N,"boneTexture",an.boneTexture,y))}$.isBatchedMesh&&(Oe.setOptional(N,$,"batchingTexture"),Oe.setValue(N,"batchingTexture",$._matricesTexture,y),Oe.setOptional(N,$,"batchingIdTexture"),Oe.setValue(N,"batchingIdTexture",$._indirectTexture,y),Oe.setOptional(N,$,"batchingColorTexture"),$._colorsTexture!==null&&Oe.setValue(N,"batchingColorTexture",$._colorsTexture,y));let yi=Z.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&Ee.update($,Z,Jn),(pi||vt.receiveShadow!==$.receiveShadow)&&(vt.receiveShadow=$.receiveShadow,Oe.setValue(N,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&G.environment!==null&&(dn.envMapIntensity.value=G.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=X_()),pi){if(Oe.setValue(N,"toneMappingExposure",O.toneMappingExposure),vt.needsLights&&Ds(dn,ri),Rt&&Y.fog===!0&&J.refreshFogUniforms(dn,Rt),J.refreshMaterialUniforms(dn,Y,Gt,oe,C.state.transmissionRenderTarget[M.id]),vt.needsLights&&vt.lightProbeGrid){let an=vt.lightProbeGrid;dn.probesSH.value=an.texture,dn.probesMin.value.copy(an.boundingBox.min),dn.probesMax.value.copy(an.boundingBox.max),dn.probesResolution.value.copy(an.resolution)}Br.upload(N,Vr(vt),dn,y)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Br.upload(N,Vr(vt),dn,y),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Oe.setValue(N,"center",$.center),Oe.setValue(N,"modelViewMatrix",$.modelViewMatrix),Oe.setValue(N,"normalMatrix",$.normalMatrix),Oe.setValue(N,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){let an=Y.uniformsGroups;for(let wn=0,Vi=an.length;wn<Vi;wn++){let Xr=an[wn];Q.update(Xr,Jn),Q.bind(Xr,Jn)}}return Jn}function Ds(M,G){M.ambientLightColor.needsUpdate=G,M.lightProbe.needsUpdate=G,M.directionalLights.needsUpdate=G,M.directionalLightShadows.needsUpdate=G,M.pointLights.needsUpdate=G,M.pointLightShadows.needsUpdate=G,M.spotLights.needsUpdate=G,M.spotLightShadows.needsUpdate=G,M.rectAreaLights.needsUpdate=G,M.hemisphereLights.needsUpdate=G}function Qa(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(M,G,Z){let Y=A.get(M);Y.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),A.get(M.texture).__webglTexture=G,A.get(M.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Z,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,G){let Z=A.get(M);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0};let Gr=N.createFramebuffer();this.setRenderTarget=function(M,G=0,Z=0){V=M,j=G,K=Z;let Y=null,$=!1,Rt=!1;if(M){let It=A.get(M);if(It.__useDefaultFramebuffer!==void 0){ft.bindFramebuffer(N.FRAMEBUFFER,It.__webglFramebuffer),lt.copy(M.viewport),ht.copy(M.scissor),Et=M.scissorTest,ft.viewport(lt),ft.scissor(ht),ft.setScissorTest(Et),q=-1;return}else if(It.__webglFramebuffer===void 0)y.setupRenderTarget(M);else if(It.__hasExternalTextures)y.rebindTextures(M,A.get(M.texture).__webglTexture,A.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ce=M.depthTexture;if(It.__boundDepthTexture!==Ce){if(Ce!==null&&A.has(Ce)&&(M.width!==Ce.image.width||M.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(M)}}let qt=M.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Rt=!0);let Jt=A.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Jt[G])?Y=Jt[G][Z]:Y=Jt[G],$=!0):M.samples>0&&y.useMultisampledRTT(M)===!1?Y=A.get(M).__webglMultisampledFramebuffer:Array.isArray(Jt)?Y=Jt[Z]:Y=Jt,lt.copy(M.viewport),ht.copy(M.scissor),Et=M.scissorTest}else lt.copy(_t).multiplyScalar(Gt).floor(),ht.copy(Xt).multiplyScalar(Gt).floor(),Et=le;if(Z!==0&&(Y=Gr),ft.bindFramebuffer(N.FRAMEBUFFER,Y)&&ft.drawBuffers(M,Y),ft.viewport(lt),ft.scissor(ht),ft.setScissorTest(Et),$){let It=A.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+G,It.__webglTexture,Z)}else if(Rt){let It=G;for(let qt=0;qt<M.textures.length;qt++){let Jt=A.get(M.textures[qt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+qt,Jt.__webglTexture,Z,It)}}else if(M!==null&&Z!==0){let It=A.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,It.__webglTexture,Z)}q=-1},this.readRenderTargetPixels=function(M,G,Z,Y,$,Rt,Bt,It=0){if(!(M&&M.isWebGLRenderTarget)){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=A.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Bt!==void 0&&(qt=qt[Bt]),qt){ft.bindFramebuffer(N.FRAMEBUFFER,qt);try{let Jt=M.textures[It],Ce=Jt.format,Pe=Jt.type;if(M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+It),!pe.textureFormatReadable(Ce)){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(Pe)){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=M.width-Y&&Z>=0&&Z<=M.height-$&&N.readPixels(G,Z,Y,$,k.convert(Ce),k.convert(Pe),Rt)}finally{let Jt=V!==null?A.get(V).__webglFramebuffer:null;ft.bindFramebuffer(N.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(M,G,Z,Y,$,Rt,Bt,It=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=A.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Bt!==void 0&&(qt=qt[Bt]),qt)if(G>=0&&G<=M.width-Y&&Z>=0&&Z<=M.height-$){ft.bindFramebuffer(N.FRAMEBUFFER,qt);let Jt=M.textures[It],Ce=Jt.format,Pe=Jt.type;if(M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+It),!pe.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ee),N.bufferData(N.PIXEL_PACK_BUFFER,Rt.byteLength,N.STREAM_READ),N.readPixels(G,Z,Y,$,k.convert(Ce),k.convert(Pe),0);let sn=V!==null?A.get(V).__webglFramebuffer:null;ft.bindFramebuffer(N.FRAMEBUFFER,sn);let _n=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Qd(N,_n,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ee),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Rt),N.deleteBuffer(ee),N.deleteSync(_n),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,G=null,Z=0){let Y=Math.pow(2,-Z),$=Math.floor(M.image.width*Y),Rt=Math.floor(M.image.height*Y),Bt=G!==null?G.x:0,It=G!==null?G.y:0;y.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,Z,0,0,Bt,It,$,Rt),ft.unbindTexture()};let Wr=N.createFramebuffer(),ti=N.createFramebuffer();this.copyTextureToTexture=function(M,G,Z=null,Y=null,$=0,Rt=0){let Bt,It,qt,Jt,Ce,Pe,ee,sn,_n,rn=M.isCompressedTexture?M.mipmaps[Rt]:M.image;if(Z!==null)Bt=Z.max.x-Z.min.x,It=Z.max.y-Z.min.y,qt=Z.isBox3?Z.max.z-Z.min.z:1,Jt=Z.min.x,Ce=Z.min.y,Pe=Z.isBox3?Z.min.z:0;else{let dn=Math.pow(2,-$);Bt=Math.floor(rn.width*dn),It=Math.floor(rn.height*dn),M.isDataArrayTexture?qt=rn.depth:M.isData3DTexture?qt=Math.floor(rn.depth*dn):qt=1,Jt=0,Ce=0,Pe=0}Y!==null?(ee=Y.x,sn=Y.y,_n=Y.z):(ee=0,sn=0,_n=0);let Je=k.convert(G.format),Ye=k.convert(G.type),vt;G.isData3DTexture?(y.setTexture3D(G,0),vt=N.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(y.setTexture2DArray(G,0),vt=N.TEXTURE_2D_ARRAY):(y.setTexture2D(G,0),vt=N.TEXTURE_2D),ft.activeTexture(N.TEXTURE0),ft.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),ft.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),ft.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);let On=ft.getParameter(N.UNPACK_ROW_LENGTH),Xe=ft.getParameter(N.UNPACK_IMAGE_HEIGHT),Jn=ft.getParameter(N.UNPACK_SKIP_PIXELS),kn=ft.getParameter(N.UNPACK_SKIP_ROWS),pi=ft.getParameter(N.UNPACK_SKIP_IMAGES);ft.pixelStorei(N.UNPACK_ROW_LENGTH,rn.width),ft.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rn.height),ft.pixelStorei(N.UNPACK_SKIP_PIXELS,Jt),ft.pixelStorei(N.UNPACK_SKIP_ROWS,Ce),ft.pixelStorei(N.UNPACK_SKIP_IMAGES,Pe);let ri=M.isDataArrayTexture||M.isData3DTexture,Oe=G.isDataArrayTexture||G.isData3DTexture;if(M.isDepthTexture){let dn=A.get(M),yi=A.get(G),an=A.get(dn.__renderTarget),wn=A.get(yi.__renderTarget);ft.bindFramebuffer(N.READ_FRAMEBUFFER,an.__webglFramebuffer),ft.bindFramebuffer(N.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let Vi=0;Vi<qt;Vi++)ri&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,A.get(M).__webglTexture,$,Pe+Vi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,A.get(G).__webglTexture,Rt,_n+Vi)),N.blitFramebuffer(Jt,Ce,Bt,It,ee,sn,Bt,It,N.DEPTH_BUFFER_BIT,N.NEAREST);ft.bindFramebuffer(N.READ_FRAMEBUFFER,null),ft.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if($!==0||M.isRenderTargetTexture||A.has(M)){let dn=A.get(M),yi=A.get(G);ft.bindFramebuffer(N.READ_FRAMEBUFFER,Wr),ft.bindFramebuffer(N.DRAW_FRAMEBUFFER,ti);for(let an=0;an<qt;an++)ri?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,dn.__webglTexture,$,Pe+an):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,dn.__webglTexture,$),Oe?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,yi.__webglTexture,Rt,_n+an):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,yi.__webglTexture,Rt),$!==0?N.blitFramebuffer(Jt,Ce,Bt,It,ee,sn,Bt,It,N.COLOR_BUFFER_BIT,N.NEAREST):Oe?N.copyTexSubImage3D(vt,Rt,ee,sn,_n+an,Jt,Ce,Bt,It):N.copyTexSubImage2D(vt,Rt,ee,sn,Jt,Ce,Bt,It);ft.bindFramebuffer(N.READ_FRAMEBUFFER,null),ft.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Oe?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(vt,Rt,ee,sn,_n,Bt,It,qt,Je,Ye,rn.data):G.isCompressedArrayTexture?N.compressedTexSubImage3D(vt,Rt,ee,sn,_n,Bt,It,qt,Je,rn.data):N.texSubImage3D(vt,Rt,ee,sn,_n,Bt,It,qt,Je,Ye,rn):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Rt,ee,sn,Bt,It,Je,Ye,rn.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Rt,ee,sn,rn.width,rn.height,Je,rn.data):N.texSubImage2D(N.TEXTURE_2D,Rt,ee,sn,Bt,It,Je,Ye,rn);ft.pixelStorei(N.UNPACK_ROW_LENGTH,On),ft.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Xe),ft.pixelStorei(N.UNPACK_SKIP_PIXELS,Jn),ft.pixelStorei(N.UNPACK_SKIP_ROWS,kn),ft.pixelStorei(N.UNPACK_SKIP_IMAGES,pi),Rt===0&&G.generateMipmaps&&N.generateMipmap(vt),ft.unbindTexture()},this.initRenderTarget=function(M){A.get(M).__webglFramebuffer===void 0&&y.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?y.setTextureCube(M,0):M.isData3DTexture?y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?y.setTexture2DArray(M,0):y.setTexture2D(M,0),ft.unbindTexture()},this.resetState=function(){j=0,K=0,V=null,ft.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(t),e.unpackColorSpace=qe._getUnpackColorSpace()}};var Of={hybrid:{name:"LDR Hybrid (K-VRC \xD7 Mecha)",shellColor:13919535,shellSecondary:9344416,darkMetal:1579808,chromeMetal:14213354,visorBg:"#07080a",eyeLeft:"#ffaa22",eyeRight:"#38d8ff",mouthColor:"#ffe4b5",coreColor:3725567,glowPrimary:"#ff6b2b",glowSecondary:"#38d8ff",asciiSky:"rgba(215, 222, 232, 0.42)",asciiMountainBright:"#eef2f6",asciiMountainMid:"#9aa4b2",asciiMountainDim:"#4b525e",sketchStroke:"rgba(255, 240, 220, 0.72)",sketchAccent:"rgba(255, 107, 43, 0.85)",keyLight:16746564,rimLight:3725567},cytro:{name:"Mecha Green (Ref Torso)",shellColor:3713074,shellSecondary:8160398,darkMetal:1382428,chromeMetal:14739696,visorBg:"#050806",eyeLeft:"#5eff6e",eyeRight:"#38d8ff",mouthColor:"#b8ffcc",coreColor:4521830,glowPrimary:"#44ff66",glowSecondary:"#38d8ff",asciiSky:"rgba(200, 230, 210, 0.40)",asciiMountainBright:"#eef7f0",asciiMountainMid:"#8ca894",asciiMountainDim:"#3f5246",sketchStroke:"rgba(220, 255, 230, 0.72)",sketchAccent:"rgba(68, 255, 102, 0.85)",keyLight:14680038,rimLight:4521830},xbot:{name:"XBOT 4000 (Tactical Bone)",shellColor:12959667,shellSecondary:7238523,darkMetal:1316377,chromeMetal:13686237,visorBg:"#060709",eyeLeft:"#ffb82e",eyeRight:"#2ce6ff",mouthColor:"#9fb3c8",coreColor:2942719,glowPrimary:"#ffb82e",glowSecondary:"#2ce6ff",asciiSky:"rgba(200, 215, 225, 0.40)",asciiMountainBright:"#f0f4f8",asciiMountainMid:"#8c99a8",asciiMountainDim:"#3f4752",sketchStroke:"rgba(230, 235, 240, 0.7)",sketchAccent:"rgba(44, 230, 255, 0.8)",keyLight:16769202,rimLight:2942719},kvrc:{name:"K-VRC (CRT Orange)",shellColor:14244644,shellSecondary:6053992,darkMetal:1578260,chromeMetal:13620959,visorBg:"#050507",eyeLeft:"#ffffff",eyeRight:"#ffffff",mouthColor:"#ffffff",coreColor:16742195,glowPrimary:"#ff6a22",glowSecondary:"#7ce8ff",asciiSky:"rgba(255, 220, 195, 0.38)",asciiMountainBright:"#fff5eb",asciiMountainMid:"#b59c8b",asciiMountainDim:"#52433b",sketchStroke:"rgba(255, 232, 214, 0.68)",sketchAccent:"rgba(255, 115, 50, 0.85)",keyLight:16742195,rimLight:16757632},scratch:{name:"Scratch Ink (2D/3D Sketch)",shellColor:2632756,shellSecondary:4541270,darkMetal:987155,chromeMetal:10134192,visorBg:"#08090b",eyeLeft:"#f4f6f8",eyeRight:"#f4f6f8",mouthColor:"#f4f6f8",coreColor:16777215,glowPrimary:"#ffffff",glowSecondary:"#a0b0c0",asciiSky:"rgba(240, 244, 248, 0.58)",asciiMountainBright:"#ffffff",asciiMountainMid:"#b0b7c0",asciiMountainDim:"#555b66",sketchStroke:"rgba(255, 255, 255, 0.94)",sketchAccent:"rgba(200, 220, 255, 0.88)",keyLight:16777215,rimLight:8956671}},su=class{constructor(){this.ctx=null,this.analyser=null,this.gainNode=null,this.freqData=new Uint8Array(256),this.timeData=new Uint8Array(256),this.isPlaying=!1,this.mode="inverno",this.trackIndex=0,this.stepTimer=null,this.stepCount=0,this.audioElement=null,this.mediaSource=null,this.micStream=null,this.currentFileLabel="INVERNO.MP3",this.bass=0,this.bassAvg=0,this.kickPulse=0,this.groove=0,this.mid=0,this.midDelta=0,this.high=0,this.energy=0,this.beatPhase=0,this.lastTime=0,this.subtleIntensity=.75,this.tracks=[{name:"01 // ORBITAL LO-FI (82 BPM)",bpm:82,rootNotes:[110,98,87.31,98],chords:[[220,261.63,329.63,392],[196,246.94,293.66,349.23],[174.61,220,261.63,329.63],[196,246.94,329.63,392]],arpScale:[440,523.25,659.25,783.99,880,659.25,587.33,523.25]},{name:"02 // ZIMA NEBULA (72 BPM)",bpm:72,rootNotes:[73.42,65.41,58.27,65.41],chords:[[146.83,220,261.63,349.23],[130.81,196,246.94,293.66],[116.54,174.61,220,293.66],[123.47,185,220,293.66]],arpScale:[293.66,349.23,440,523.25,587.33,440,392,349.23]}]}initContext(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(this.ctx=new t,this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=512,this.analyser.smoothingTimeConstant=.8,this.gainNode=this.ctx.createGain(),this.gainNode.gain.value=.85,this.gainNode.connect(this.analyser),this.gainNode.connect(this.ctx.destination),this.freqData=new Uint8Array(this.analyser.frequencyBinCount),this.timeData=new Uint8Array(this.analyser.frequencyBinCount),this.audioElement&&!this.mediaSource)try{this.mediaSource=this.ctx.createMediaElementSource(this.audioElement),this.mediaSource.connect(this.gainNode)}catch(e){console.warn("Could not connect audioElement to context:",e)}}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}ensureAudioElement(){if(this.audioElement||(this.audioElement=new Audio,this.audioElement.crossOrigin="anonymous",this.audioElement.loop=!0,this.audioElement.preload="auto"),this.ctx&&!this.mediaSource)try{this.mediaSource=this.ctx.createMediaElementSource(this.audioElement),this.mediaSource.connect(this.gainNode)}catch(t){console.warn("Could not create media element source:",t)}}async playInverno(){this.initContext(),this.stop(),this.ensureAudioElement(),this.mode="inverno",this.currentFileLabel="INVERNO.MP3",(!this.audioElement.src||!this.audioElement.src.includes("inverno.mp3"))&&(this.audioElement.src="/inverno.mp3");try{return await this.audioElement.play(),this.isPlaying=!0,!0}catch(t){return console.warn("Audio waiting for user gesture or paused:",t),this.isPlaying=!1,!1}}togglePlay(){return this.initContext(),this.isPlaying?(this.stop(),!1):(this.ensureAudioElement(),this.audioElement.src?(this.audioElement.play().catch(t=>console.warn("Play error:",t)),this.isPlaying=!0):this.playInverno(),!0)}startSynth(){this.initContext(),this.stop(),this.mode="synth",this.isPlaying=!0,this.stepCount=0,this.gainNode.gain.value=.45;let e=60/this.tracks[this.trackIndex].bpm/4*1e3;this.triggerStep(),this.stepTimer=setInterval(()=>{this.isPlaying&&this.mode==="synth"&&this.triggerStep()},e)}stop(){this.isPlaying=!1,this.stepTimer&&(clearInterval(this.stepTimer),this.stepTimer=null),this.audioElement&&this.audioElement.pause(),this.micStream&&(this.micStream.getTracks().forEach(t=>t.stop()),this.micStream=null)}async startMic(t=null){try{this.initContext(),this.stop();let e=t?{audio:{deviceId:{exact:t}}}:{audio:!0},n=await navigator.mediaDevices.getUserMedia(e);return this.micStream=n,this.ctx.createMediaStreamSource(n).connect(this.analyser),this.mode=t?"device":"mic",this.isPlaying=!0,!0}catch(e){return console.warn("Microphone access denied:",e),!1}}async startSystemAudio(){if(this.mode==="system"&&this.isPlaying)return this.stop(),this.onStateChange&&this.onStateChange(),!0;try{this.initContext(),this.stop();let t=await navigator.mediaDevices.getDisplayMedia({video:!0,audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}}),e=t.getAudioTracks();return!e||e.length===0?(t.getTracks().forEach(s=>s.stop()),alert(`Nenhuma faixa de \xE1udio foi selecionada!

Para capturar o Spotify, YouTube ou fones:
1. Na janela de compartilhamento, selecione a "Aba do Chrome" (ex: Spotify Web ou YouTube) ou "Tela Inteira".
2. Marque a caixinha "Compartilhar \xE1udio do sistema / \xE1udio da aba" no canto inferior antes de clicar em Compartilhar.`),!1):(t.getVideoTracks().forEach(s=>s.stop()),this.micStream=t,this.ctx.createMediaStreamSource(t).connect(this.analyser),e[0].addEventListener("ended",()=>{this.stop(),this.onStateChange&&this.onStateChange()}),this.mode="system",this.currentFileLabel="SPOTIFY // \xC1UDIO DO SISTEMA",this.isPlaying=!0,!0)}catch(t){return console.warn("Captura de \xE1udio do sistema cancelada ou n\xE3o suportada:",t),!1}}loadAudioFile(t){this.initContext(),this.stop(),this.ensureAudioElement(),this.gainNode.gain.value=.9;let e=URL.createObjectURL(t);this.audioElement.src=e,this.audioElement.play(),this.mode="file",this.currentFileLabel=t.name.slice(0,24).toUpperCase(),this.isPlaying=!0}triggerStep(){if(!this.ctx||!this.isPlaying)return;let t=this.ctx.currentTime,e=this.tracks[this.trackIndex],n=this.stepCount%16,s=Math.floor(this.stepCount/16)%4;if(n===0||n===10||n===6&&s%2===1){let r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine";let o=n===6?.25:.48;r.frequency.setValueAtTime(115,t),r.frequency.exponentialRampToValueAtTime(36,t+.14),a.gain.setValueAtTime(o,t),a.gain.exponentialRampToValueAtTime(.001,t+.32),r.connect(a),a.connect(this.gainNode),r.start(t),r.stop(t+.34)}if(n===4||n===12){let r=this.ctx.sampleRate*.12,a=this.ctx.createBuffer(1,r,this.ctx.sampleRate),o=a.getChannelData(0);for(let d=0;d<r;d++)o[d]=(Math.random()*2-1)*Math.exp(-d/(r*.28));let l=this.ctx.createBufferSource();l.buffer=a;let c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.setValueAtTime(1350,t);let u=this.ctx.createGain();u.gain.setValueAtTime(.18,t),u.gain.exponentialRampToValueAtTime(.001,t+.12),l.connect(c),c.connect(u),u.connect(this.gainNode),l.start(t)}n===0&&e.chords[s].forEach((a,o)=>{let l=this.ctx.createOscillator(),c=this.ctx.createBiquadFilter(),u=this.ctx.createGain();l.type=o%2===0?"triangle":"sawtooth",l.frequency.setValueAtTime(a,t),l.detune.setValueAtTime((o-1.5)*6,t),c.type="lowpass",c.frequency.setValueAtTime(950,t),c.frequency.exponentialRampToValueAtTime(520,t+2.4),u.gain.setValueAtTime(.001,t),u.gain.linearRampToValueAtTime(.055,t+.35),u.gain.exponentialRampToValueAtTime(.001,t+2.6),l.connect(c),c.connect(u),u.connect(this.gainNode),l.start(t),l.stop(t+2.65)}),this.stepCount++}update(t){let e=Math.min(.05,Math.max(.001,t-this.lastTime));this.lastTime=t;let n=0,s=0,r=0,a=0;if(this.isPlaying&&this.analyser){this.analyser.getByteFrequencyData(this.freqData),this.analyser.getByteTimeDomainData(this.timeData);let d=0;for(let b=1;b<=6;b++)d+=this.freqData[b];n=d/1530;let h=0;for(let b=7;b<=20;b++)h+=this.freqData[b];s=h/3570;let f=0;for(let b=21;b<=68;b++)f+=this.freqData[b];r=f/12240;let x=0;for(let b=69;b<=160;b++)x+=this.freqData[b];a=x/23460}else{let d=t*1.35;n=.18+.12*Math.pow(Math.max(0,Math.sin(d*Math.PI)),4),s=.15+.08*Math.sin(d*1.5),r=.12+.07*Math.sin(d*2.1+.7),a=.08+.05*Math.cos(d*3);for(let h=0;h<this.timeData.length;h++){let f=Math.sin(t*2.4+h*.18)*.5+.5;this.freqData[h]=Math.floor((1-h%80/80)*f*85*(.5+n)),this.timeData[h]=Math.floor(128+Math.sin(t*7+h*.25)*18*(r+n)+Math.cos(t*13-h*.6)*9*a)}}let o=this.subtleIntensity,l=this.mid;this.bassAvg+=(n-this.bassAvg)*.05;let c=Math.max(0,(n-this.bassAvg*.92)*2.8)*o;this.kickPulse+=(c-this.kickPulse)*(c>this.kickPulse?.35:.12),this.bass+=(n*o-this.bass)*.16,this.groove+=(s*o-this.groove)*.12,this.mid+=(r*o-this.mid)*.14,this.high+=(a*o-this.high)*.15,this.midDelta+=(Math.abs(this.mid-l)*8-this.midDelta)*.15,this.energy=this.bass*.4+this.groove*.25+this.mid*.25+this.high*.1;let u=1.6+this.energy*3.2+this.kickPulse*1.8;this.beatPhase+=e*u}};function Y_(){let i=document.createElement("canvas");i.width=1024,i.height=1024;let t=i.getContext("2d");t.fillStyle="#7a7a7a",t.fillRect(0,0,1024,1024);for(let n=0;n<1800;n++){let s=Math.random()*1024,r=Math.random()*1024,a=18+Math.random()*65;t.strokeStyle=Math.random()>.5?"rgba(215,215,215,0.11)":"rgba(35,35,35,0.12)",t.lineWidth=.7+Math.random()*1.2,t.beginPath(),t.moveTo(s,r),t.lineTo(s+a,r+(Math.random()-.5)*4),t.stroke()}for(let n=0;n<260;n++){let s=Math.random()*1024,r=Math.random()*1024,a=14+Math.random()*85,o=t.createRadialGradient(s,r,2,s,r,a),l=Math.random()>.45?38:145;o.addColorStop(0,`rgba(${l},${l},${l},0.22)`),o.addColorStop(1,"rgba(128,128,128,0)"),t.fillStyle=o,t.beginPath(),t.arc(s,r,a,0,Math.PI*2),t.fill()}t.strokeStyle="rgba(20, 20, 20, 0.55)",t.lineWidth=3,[180,512,840].forEach(n=>{t.beginPath(),t.moveTo(0,n),t.lineTo(1024,n),t.stroke();for(let s=48;s<1024;s+=96)t.fillStyle="rgba(210, 210, 210, 0.5)",t.beginPath(),t.arc(s,n-14,4.5,0,Math.PI*2),t.arc(s,n+14,4.5,0,Math.PI*2),t.fill()});for(let n=0;n<420;n++){t.strokeStyle=Math.random()>.35?"rgba(245,245,245,0.32)":"rgba(20,20,20,0.38)",t.lineWidth=.6+Math.random()*1.8,t.beginPath();let s=Math.random()*1024,r=Math.random()*1024,a=10+Math.random()*58,o=(Math.random()-.5)*1.2;t.moveTo(s,r),t.lineTo(s+Math.cos(o)*a,r+Math.sin(o)*a),t.stroke()}let e=new _s(i);return e.wrapS=ji,e.wrapT=ji,e}function Is(i,t=!0){let e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d"),s=new Ge(i);n.fillStyle=`#${s.getHexString()}`,n.fillRect(0,0,1024,1024);for(let a=0;a<220;a++){let o=Math.random()*1024,l=Math.random()*1024,c=20+Math.random()*95,u=n.createRadialGradient(o,l,2,o,l,c);t&&Math.random()>.45?u.addColorStop(0,"rgba(92, 42, 18, 0.20)"):Math.random()>.5?u.addColorStop(0,"rgba(15, 18, 22, 0.24)"):u.addColorStop(0,"rgba(255, 245, 230, 0.10)"),u.addColorStop(1,"rgba(0, 0, 0, 0)"),n.fillStyle=u,n.beginPath(),n.arc(o,l,c,0,Math.PI*2),n.fill()}for(let a=0;a<1200;a++){let o=Math.random()*1024,l=Math.random()*1024,c=16+Math.random()*55;n.strokeStyle=Math.random()>.5?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.08)",n.lineWidth=.8+Math.random(),n.beginPath(),n.moveTo(o,l),n.lineTo(o+c,l+(Math.random()-.5)*3),n.stroke()}[180,512,840].forEach(a=>{n.strokeStyle="rgba(10, 12, 15, 0.48)",n.lineWidth=3.5,n.beginPath(),n.moveTo(0,a),n.lineTo(1024,a),n.stroke(),n.strokeStyle="rgba(255, 255, 255, 0.14)",n.lineWidth=1.5,n.beginPath(),n.moveTo(0,a+3),n.lineTo(1024,a+3),n.stroke();for(let o=48;o<1024;o+=96)n.fillStyle="rgba(25, 28, 32, 0.55)",n.beginPath(),n.arc(o,a-14,5.5,0,Math.PI*2),n.arc(o,a+14,5.5,0,Math.PI*2),n.fill(),n.fillStyle="rgba(215, 222, 230, 0.45)",n.beginPath(),n.arc(o-1,a-15,3.2,0,Math.PI*2),n.arc(o-1,a+13,3.2,0,Math.PI*2),n.fill()});for(let a=0;a<320;a++){n.strokeStyle=Math.random()>.3?"rgba(220, 228, 238, 0.28)":"rgba(20, 22, 26, 0.35)",n.lineWidth=.7+Math.random()*1.6,n.beginPath();let o=Math.random()*1024,l=Math.random()*1024,c=8+Math.random()*42,u=(Math.random()-.5)*1.1;n.moveTo(o,l),n.lineTo(o+Math.cos(u)*c,l+Math.sin(u)*c),n.stroke()}let r=new _s(e);return r.colorSpace=qn,r.wrapS=ji,r.wrapT=ji,r}function kf(i){let t=Is(i,!0),e=t.image,n=e.getContext("2d");n.save(),n.scale(2,2),n.strokeStyle="rgba(0, 0, 0, 0.36)",n.lineWidth=3,n.beginPath(),n.moveTo(40,120),n.lineTo(472,190),n.stroke(),n.save(),n.translate(155,235),n.rotate(-.12),n.strokeStyle="rgba(10, 16, 20, 0.62)",n.lineWidth=10,n.beginPath(),n.ellipse(0,0,66,42,0,0,Math.PI*2),n.stroke(),n.fillStyle="rgba(10, 16, 20, 0.62)";for(let s=-1;s<=1;s++)n.beginPath(),n.roundRect(-38+s*6,s*14-5,68,9,4),n.fill();return n.restore(),n.save(),n.translate(385,260),n.rotate(-Math.PI/2+.16),n.fillStyle="rgba(10, 16, 20, 0.58)",n.font='900 42px "Arial Black", Impact, sans-serif',n.letterSpacing="4px",n.fillText("LDR-04",-75,0),n.font="700 13px monospace",n.fillText("AUDIO // CYBER UNIT",-75,-36),n.restore(),n.restore(),t.needsUpdate=!0,{tex:t,canvas:e,ctx:n}}function ru(i,t=0){let e=14+t,n=496-t,s=26+t,r=486-t,a=58+t*.85,o=454-t*.85,l=148+t*.5,c=364-t*.5;i.beginPath(),i.moveTo(256,e),i.bezierCurveTo(372-t*.4,e,r,68+t*.4,r,168),i.lineTo(o,356),i.quadraticCurveTo(o-8,410,c,n-18),i.quadraticCurveTo(256,n+8,l,n-18),i.quadraticCurveTo(a+8,410,a,356),i.lineTo(s,168),i.bezierCurveTo(s,68+t*.4,140+t*.4,e,256,e),i.closePath()}function $_(){let i=document.createElement("canvas");i.width=512,i.height=512;let t=i.getContext("2d");return t.fillStyle="#000000",t.fillRect(0,0,512,512),t.fillStyle="#ffffff",t.shadowColor="#ffffff",t.shadowBlur=5,ru(t,0),t.fill(),new _s(i)}function zf(){let i=document.getElementById("canvas-stage"),t=document.getElementById("ascii-bg-canvas"),e=document.getElementById("webgl-canvas"),n=document.getElementById("sketch-fg-canvas"),s=t.getContext("2d"),r=n.getContext("2d"),a=new su,o="hybrid",l=Of[o],c=!0,u=!0,d="street",h="devil",f={x:0,y:0,targetX:0,targetY:0},x=new fa,b=new Fn(36,1,.1,120);b.position.set(0,-.12,9.1);let g=new gc({canvas:e,alpha:!0,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.toneMapping=Fa,g.toneMappingExposure=1.18;let p=new Da(2963014,1.5);x.add(p);let S=new Qs(l.keyLight,3.4);S.position.set(4.8,5.2,6),x.add(S);let w=new Qs(l.rimLight,3);w.position.set(-5.8,3,-2.2),x.add(w);let E=new Qs(4482696,1.2);E.position.set(0,-5,4),x.add(E);let D=new La(l.coreColor,2.2,6);D.position.set(0,-1.35,1.4),x.add(D);let C=new mn;x.add(C);let F=240,_=new Float32Array(F*3);for(let T=0;T<F;T++)_[T*3]=(Math.random()-.5)*28,_[T*3+1]=(Math.random()-.5)*18,_[T*3+2]=-3-Math.random()*18;let R=new Cn;R.setAttribute("position",new Kn(_,3));let O=new Ar({color:14214384,size:.055,transparent:!0,opacity:.55}),L=new xa(R,O);C.add(L);let H=document.createElement("canvas");H.width=512,H.height=512;let j=H.getContext("2d"),K=new _s(H);K.colorSpace=qn;let V=$_();function q(T,m,v,P,z,B){let I=j;I.clearRect(0,0,512,512),I.save(),ru(I,2),I.clip(),I.fillStyle="#040507",I.fillRect(0,0,512,512);let Ut=I.createRadialGradient(256,225,20,256,256,260);Ut.addColorStop(0,"rgba(28, 38, 52, 0.24)"),Ut.addColorStop(1,"rgba(1, 2, 4, 0.98)"),I.fillStyle=Ut,I.fillRect(0,0,512,512),["rgba(195, 65, 35, 0.08)","rgba(45, 135, 165, 0.08)","rgba(180, 135, 40, 0.07)"].forEach((Vt,gt)=>{I.strokeStyle=Vt,I.lineWidth=3.5,I.beginPath(),I.moveTo(175+gt*80,20),I.bezierCurveTo(215+Math.sin(gt*2)*40,190,295-Math.cos(gt*2)*40,310,200+gt*55,490),I.stroke()});let Kt=f.x*18+Math.sin(T*.65)*5+Math.cos(T*1.4)*(P*6),ne=-f.y*13+Math.cos(T*.5)*3-B*4,wt=T%4.4>4.26?.07:1,ke=1-Math.min(.24,v*.28)+Math.min(.12,B*.15),ge=54+B*5,we=122*wt*ke,yn=178+Kt,ye=334+Kt,Yt=212+ne,Qt=(Vt,gt,ae,on,$e)=>{I.save(),I.translate(Vt,gt),I.shadowColor=$e,I.shadowBlur=26+B*24+P*14;let ve=ae*.48,Ue=ae*.34,he=ae*.5,Le=Math.max(4,on*.5);if(I.strokeStyle=$e,I.fillStyle=$e,I.lineWidth=6,I.beginPath(),I.moveTo(-he+Ue,-Le),I.lineTo(he-Ue,-Le),I.quadraticCurveTo(he,-Le,he,-Le+Ue),I.lineTo(he,Le-ve),I.quadraticCurveTo(he,Le,0,Le),I.quadraticCurveTo(-he,Le,-he,Le-ve),I.lineTo(-he,-Le+Ue),I.quadraticCurveTo(-he,-Le,-he+Ue,-Le),I.closePath(),o==="scratch")I.stroke(),I.globalAlpha=.24+P*.4,I.fill();else if(I.fill(),on>25){I.shadowBlur=0,I.fillStyle="#090b0e";let be=9,ct=on*(.46-B*.16);I.beginPath(),I.roundRect(-be/2,-ct/2,be,ct,4.5),I.fill()}I.restore()};Qt(yn,Yt,ge,we,l.eyeLeft),Qt(ye,Yt,ge,we,l.eyeRight);let ue=365+ne*.45,ze=256+Kt*.45,re=34+P*30+B*8;I.save(),I.shadowColor=l.mouthColor,I.shadowBlur=16+P*18,I.strokeStyle=l.mouthColor,I.lineWidth=7.5,I.lineCap="round",I.lineJoin="round",I.beginPath();let se=12;for(let Vt=0;Vt<=se;Vt++){let gt=Vt/se,ae=ze-re+gt*(re*2),on=Math.sin(gt*Math.PI),$e=Math.sin(gt*Math.PI*3+T*20)*(P*8*on);Vt===0?I.moveTo(ae,ue+$e):I.lineTo(ae,ue+$e)}I.stroke(),I.restore(),I.fillStyle="rgba(0, 0, 0, 0.18)";for(let Vt=14;Vt<498;Vt+=6)I.fillRect(20,Vt,472,2);I.save(),I.strokeStyle="rgba(235, 245, 255, 0.16)",I.lineWidth=18,I.lineCap="round",I.filter="blur(6px)",I.beginPath(),I.arc(256,165,132,-Math.PI*.72,-Math.PI*.28),I.stroke(),I.strokeStyle="rgba(225, 240, 255, 0.12)",I.lineWidth=14,I.beginPath(),I.moveTo(418,175),I.quadraticCurveTo(412,285,362,395),I.stroke(),I.restore(),I.restore(),I.strokeStyle="rgba(95, 108, 125, 0.26)",I.lineWidth=3,ru(I,3),I.stroke(),K.needsUpdate=!0}let X=Y_(),lt=Is(l.shellColor,!0),ht=Is(l.shellSecondary,!0),Et=Is(l.darkMetal,!1),Nt=kf(l.shellColor),Ht=new di({map:lt,roughnessMap:X,bumpMap:X,bumpScale:.038,roughness:.48,metalness:.45}),Ae=new di({map:Nt.tex,roughnessMap:X,bumpMap:X,bumpScale:.032,roughness:.42,metalness:.5}),oe=new di({map:ht,roughnessMap:X,bumpMap:X,bumpScale:.035,roughness:.44,metalness:.68}),Gt=new di({map:Et,roughnessMap:X,bumpMap:X,bumpScale:.028,roughness:.46,metalness:.78}),tt=new di({color:l.chromeMetal,roughnessMap:X,bumpMap:X,bumpScale:.012,roughness:.2,metalness:.92}),Pt=new di({color:1316120,roughnessMap:X,bumpMap:X,bumpScale:.022,roughness:.78,metalness:.12}),_t=new di({map:K,emissiveMap:K,alphaMap:V,transparent:!0,alphaTest:.05,emissive:new Ge(16777215),emissiveIntensity:.95,roughness:.14,metalness:.15}),Xt=new es({color:l.coreColor}),le=new es({color:l.eyeLeft}),ce=new es({color:l.eyeRight}),He=new mn;He.position.set(0,-.28,0),x.add(He);let jt=new mn;He.add(jt);let nt=new mn;jt.add(nt);let dt=new Ot(new Qe(.28,.36,.92,20),Gt);dt.position.set(0,-.78,-.1),nt.add(dt);for(let T=0;T<3;T++){let m=new Ot(new is(.31+T*.02,.032,10,24),oe);m.rotation.x=Math.PI/2+.08,m.position.set(0,-.58-T*.18,-.08),nt.add(m)}let st=new Ot(new Qe(.038,.038,.85,12),tt);st.position.set(-.24,-.72,.16),st.rotation.z=-.1,st.rotation.x=.08,nt.add(st);let At=new Ot(new Qe(.068,.068,.46,12),Gt);At.position.set(-.27,-.92,.18),At.rotation.z=-.1,At.rotation.x=.08,nt.add(At);let Mt=new Ot(new Qe(.038,.038,.85,12),tt);Mt.position.set(.24,-.72,.16),Mt.rotation.z=.1,Mt.rotation.x=.08,nt.add(Mt);let fe=new Ot(new Qe(.068,.068,.46,12),Gt);fe.position.set(.27,-.92,.18),fe.rotation.z=.1,fe.rotation.x=.08,nt.add(fe);let N=new ni(.32,.42,.48),Se=new Ot(N,oe);Se.position.set(-.56,-.88,.05),Se.rotation.set(.2,.25,-.45),nt.add(Se);let Wt=new Ot(N,oe);Wt.position.set(.56,-.88,.05),Wt.rotation.set(.2,-.25,.45),nt.add(Wt);let pe=new Ot(new hi(.32,24,18),Xt);pe.scale.set(1.2,.65,.8),pe.position.set(0,-1.08,.18),nt.add(pe);let ft=new Ot(new is(.28,.035,10,28),Gt);ft.rotation.x=.55,ft.position.set(0,-1.06,.26),nt.add(ft);let Be=new mn;jt.add(Be);let A=new vs;A.moveTo(-1.28,.52),A.quadraticCurveTo(-.55,.22,0,.05),A.quadraticCurveTo(.55,.22,1.28,.58),A.lineTo(1.42,.12),A.quadraticCurveTo(1.22,-.45,.88,-.86),A.lineTo(.68,-.35),A.quadraticCurveTo(0,-.18,-.68,-.35),A.lineTo(-.88,-.86),A.quadraticCurveTo(-1.22,-.45,-1.42,.12),A.closePath();let y={steps:2,depth:.42,bevelEnabled:!0,bevelThickness:.14,bevelSize:.1,bevelOffset:0,bevelSegments:6},W=new Ks(A,y);W.center();let et=W.attributes.uv,at=W.attributes.position;for(let T=0;T<at.count;T++){let m=at.getX(T),v=at.getY(T),P=at.getZ(T),z=Math.cos(m*.65)*.28-Math.abs(v)*.08;at.setZ(T,P+z),et.setXY(T,(m+1.5)/3,(v+.95)/1.65)}W.computeVertexNormals();let pt=new Ot(W,Ae);pt.position.set(0,-1.42,.46),pt.rotation.x=.08,Be.add(pt);let xt=new Ot(new Qe(1.05,.68,1.55,24),Gt);xt.scale.set(1.15,1,.72),xt.position.set(0,-1.68,0),Be.add(xt),[-1,1].forEach(T=>{let m=new Ot(new Qe(.045,.045,.95,12),tt);m.position.set(T*1.28,-1.62,.28),m.rotation.z=T*.58,Be.add(m);let v=new Ot(new Qe(.08,.08,.48,12),oe);v.position.set(T*1.42,-1.48,.28),v.rotation.z=T*.58,Be.add(v)});let J=new mn;J.position.set(0,-2.02,.24),jt.add(J);let it=new Ot(new hi(.42,28,22),Gt);it.scale.set(.92,1.08,.78),J.add(it);let Lt=new Ot(new is(.32,.055,14,32),oe);Lt.position.set(0,0,.22),J.add(Lt);let kt=new Ot(new hi(.16,20,16),Xt);kt.position.set(0,0,.26),J.add(kt);let yt=new Ot(new Qe(.06,.08,.12,16),Gt);yt.rotation.x=Math.PI/2,yt.position.set(0,0,.36),J.add(yt),[-1,1].forEach(T=>{let m=new Ot(new hi(.2,16,14),oe);m.scale.set(.65,1.15,.8),m.position.set(T*.48,.08,.12),m.rotation.z=T*.22,J.add(m);let v=new Ot(new Qe(.065,.065,.68,14),tt);v.position.set(T*.28,-.52,-.02),v.rotation.z=T*-.08,J.add(v);let P=new Ot(new Qe(.1,.09,.32,14),oe);P.position.set(T*.26,-.38,-.02),P.rotation.z=T*-.08,J.add(P);let z=new Ot(new ni(.52,.42,.36),oe);z.position.set(T*.38,-.78,.06),z.rotation.set(.15,T*-.25,T*.38),J.add(z);let B=new Ot(new Qe(.28,.38,1.15,6),oe);B.position.set(T*.56,-1.32,.04),B.rotation.z=T*-.18,J.add(B)});let mt=new Ot(new Ra(.28,0),oe);mt.scale.set(1,1.35,.7),mt.position.set(0,-.84,.16),J.add(mt);let Ee=new Ot(new Qe(.38,.52,1.1,8),Gt);Ee.position.set(0,-1.35,-.04),J.add(Ee);function Re(T){let m=T?-1:1,v=new mn;v.position.set(m*1.48,-1.08,0);let P=new vs;P.moveTo(0,0),P.lineTo(m*.95,-.18),P.lineTo(m*.72,.34),P.lineTo(m*.08,.46),P.closePath();let z=new Ks(P,{depth:.55,bevelEnabled:!0,bevelThickness:.06,bevelSize:.05,bevelSegments:3});z.center();let B=new Ot(z,oe);B.position.set(m*-.18,.32,-.04),B.rotation.y=m*-.18,B.rotation.z=m*-.12,v.add(B);let I=new vs;I.moveTo(0,.28),I.quadraticCurveTo(m*.85,.34,m*1.62,-.08),I.lineTo(m*1.35,-.42),I.quadraticCurveTo(m*.62,-.32,0,-.18),I.closePath();let Ut=new Ks(I,{depth:.78,bevelEnabled:!0,bevelThickness:.09,bevelSize:.07,bevelSegments:4});Ut.center();let Tt=new Ot(Ut,oe);Tt.position.set(m*.52,.08,.02),Tt.rotation.z=m*-.08,Tt.rotation.y=m*-.12,v.add(Tt);let Kt=new Ot(new ni(.75,.16,.58),Gt);Kt.position.set(m*.58,-.22,0),Kt.rotation.z=m*-.28,v.add(Kt);let ne=new Ot(new hi(.32,20,16),Gt);ne.position.set(m*.42,-.36,0),v.add(ne);let me=new mn;me.position.set(m*.46,-.38,0),v.add(me);let xe=new Ot(new Qe(.14,.12,1.15,16),Gt);xe.position.set(m*.12,-.58,0),xe.rotation.z=m*.14,me.add(xe);let wt=new Ot(new Qe(.045,.045,.95,12),tt);wt.position.set(m*.02,-.56,.14),wt.rotation.z=m*.14,me.add(wt);let ke=new Ot(new Qe(.24,.18,.52,16,1,!1,0,Math.PI),oe);ke.rotation.y=T?-Math.PI/2:Math.PI/2,ke.rotation.z=m*.14,ke.position.set(m*.22,-.45,.04),me.add(ke);let ge=new Ot(new hi(.16,14,12),oe);ge.scale.set(.6,1.3,.85),ge.position.set(m*-.02,-.92,.1),me.add(ge);let we=new mn;we.position.set(m*.22,-1.16,.02),me.add(we);let yn=new Ot(new Qe(.19,.19,.3,16),Gt);yn.rotation.x=Math.PI/2,we.add(yn);let ye=new Ot(new Qe(.22,.35,1.42,6),oe);ye.position.set(m*.08,-.72,.08),ye.rotation.z=m*.06,we.add(ye);let Yt=new Ot(new Qe(.04,.04,.88,10),tt);Yt.position.set(m*-.08,-.58,.22),we.add(Yt);let Qt=new Ot(new is(.28,.055,10,18),Gt);return Qt.rotation.x=Math.PI/2,Qt.position.set(m*.11,-1.35,.08),we.add(Qt),{shoulderRig:v,armGroup:me,elbowGroup:we,armPiston:wt,mainPauldron:Tt}}let Te=Re(!0),k=Re(!1);jt.add(Te.shoulderRig),jt.add(k.shoulderRig);let rt=new mn;rt.position.set(0,-.34,0),He.add(rt);let Q=2.45;function Ft(T){let m=.8;if(T>=.22){let B=Math.min(1,(T-.22)/.78);m=.8*Math.pow(Math.max(0,1-Math.pow(B,2.15)),1/2.1)}else if(T>=-.48){let B=(.22-T)/.7;m=.8-.12*Math.pow(B,1.25)}else{let B=Math.min(1,(-.48-T)/.52),I=1-.35*Math.pow(B,1.12),Ut=Math.pow(Math.max(0,1-Math.pow(B,3.2)),1/2.35);m=.68*I*Ut}let v=.76;if(T>=.22){let B=Math.min(1,(T-.22)/.78);v=.76*Math.pow(Math.max(0,1-Math.pow(B,2.15)),1/2.1)}else{let B=Math.min(1,(.22-T)/1.22),I=Math.pow(Math.max(0,1-Math.pow(B,3.4)),1/2.4);v=.76*(1-.16*Math.pow(B,1.3))*I}let P=.96+T*1.04,z=-.02+Math.cos((T-.05)*1.2)*.035;return{halfW:m,halfD:v,yWorld:P,zCenter:z}}function St(){let T=new hi(1,64,56),m=T.attributes.position;for(let v=0;v<m.count;v++){let P=m.getX(v),z=m.getY(v),B=m.getZ(v),I=Math.max(-1,Math.min(1,z)),{halfW:Ut,halfD:Tt,yWorld:Kt,zCenter:ne}=Ft(I),me=Math.hypot(P,B),xe=0,wt=0;if(me>1e-5){let we=P/me,yn=B/me,ye=Math.pow(Math.pow(Math.abs(we),Q)+Math.pow(Math.abs(yn),Q),1/Q)||1;xe=we/ye,wt=yn/ye}let ke=xe*Ut,ge=ne+wt*Tt;m.setXYZ(v,ke,Kt,ge)}return T.computeVertexNormals(),T}function ot(T=.014){let m=new js(2,2,56,56),v=m.attributes.position;for(let P=0;P<v.count;P++){let z=v.getX(P),B=v.getY(P),I=B*.93,{halfW:Ut,halfD:Tt,yWorld:Kt,zCenter:ne}=Ft(I),me=z*.91,xe=Math.pow(Math.max(.001,1-Math.pow(Math.abs(me),Q)),1/Q),wt=me*(Ut+T),ke=Kt+B*T*.4,ge=ne+xe*(Tt+T)+T*.35;v.setXYZ(P,wt,ke,ge)}return m.computeVertexNormals(),m}let Zt=St(),Ie=new Ot(Zt,Ht);rt.add(Ie);let xn=ot(.014),tn=new Ot(xn,_t);rt.add(tn);let Zn=new mn;rt.add(Zn);let si=[],ir=36;for(let T=0;T<=ir;T++){let m=T/ir*Math.PI,v=.96+Math.sin(m*3)*.018,P=1.36+Math.sin(m*2-.4)*.025,z=Math.cos(m)*v,B=.78+Math.sin(m)*P,I=-.02+Math.sin(m)*.04;si.push(new U(z,B,I))}let $a=new ys(si),Za=new Ms($a,48,.072,14,!1),Ja=new Ot(Za,Gt);Zn.add(Ja);let ki=new Ms($a,40,.044,10,!1),Ps=new Ot(ki,oe);Ps.scale.set(.95,.94,.95),Ps.position.set(0,.02,.04),Zn.add(Ps);function kr(T){let m=T?-1:1,v=new mn;v.position.set(m*.9,.82,.02);let P=new Ot(new Qe(.42,.42,.14,28),Pt);P.rotation.z=Math.PI/2,P.scale.set(1.26,1,.84),v.add(P);let z=new Ot(new Qe(.38,.3,.24,28),oe);z.rotation.z=Math.PI/2,z.position.x=m*.13,z.scale.set(1.26,1,.84),v.add(z);let B=new Ot(new is(.31,.02,12,32),T?le:ce);B.rotation.y=Math.PI/2,B.position.x=m*.25,B.scale.set(.84,1.26,1),v.add(B);let I=new Ot(new Qe(.16,.16,.07,20),Gt);return I.rotation.z=Math.PI/2,I.position.x=m*.24,v.add(I),{cupGroup:v,ledRing:B}}let zr=kr(!0),Ls=kr(!1);Zn.add(zr.cupGroup),Zn.add(Ls.cupGroup);let zi="none",Nn=new mn;Nn.position.set(0,1.56,.02),Nn.rotation.set(-.2,.06,-.03),rt.add(Nn);let Vr=new hi(.84,40,24,0,Math.PI*2,0,Math.PI*.54);Vr.scale(1.01,.72,1.06);let Ka=new Ot(Vr,Gt);Nn.add(Ka);for(let T=0;T<6;T++){let m=T/6*Math.PI*2,v=[];for(let B=0;B<=12;B++){let I=B/12*Math.PI*.53,Ut=.844;v.push(new U(Math.cos(m)*Math.sin(I)*Ut*1.01,Math.cos(I)*Ut*.72,Math.sin(m)*Math.sin(I)*Ut*1.06))}let P=new ys(v),z=new Ot(new Ms(P,14,.012,6,!1),oe);Nn.add(z)}let ja=new Ot(new Qe(.055,.055,.035,16),tt);ja.position.set(0,.61,0),Nn.add(ja);let Hr=new ni(1.18,.036,.76,28,2,16),Ds=Hr.attributes.position;for(let T=0;T<Ds.count;T++){let m=Ds.getX(T),v=Ds.getY(T),P=Ds.getZ(T),z=(P+.38)/.76,B=1-Math.pow(z,2.2)*.22;m*=B,v+=Math.cos(m*1.8)*.06-.04+z*.03,Ds.setXYZ(T,m,v,P)}Hr.computeVertexNormals();let Qa=new Ot(Hr,oe);Qa.position.set(0,.04,.92),Nn.add(Qa);let Gr=new Ot(new ni(.42,.18,.04),Gt);Gr.position.set(0,.22,.85),Gr.rotation.x=-.28,Nn.add(Gr);let Wr=new Ot(new ni(.32,.05,.05),le);Wr.position.set(0,.22,.855),Wr.rotation.x=-.28,Nn.add(Wr);let ti=new mn;ti.position.set(0,1.66,-.02),ti.rotation.set(-.18,0,0),ti.visible=!1,rt.add(ti);let M=Is(6831394,!0),G=new di({map:M,roughnessMap:X,bumpMap:X,bumpScale:.042,roughness:.58,metalness:.22}),Z=new Qe(.68,.82,.82,56,28,!1),Y=Z.attributes.position;for(let T=0;T<Y.count;T++){let m=Y.getX(T),v=Y.getY(T),P=Y.getZ(T),z=(v+.41)/.82;if(P*=1.15,m*=.94-z*.12,P>.05&&z>.25){let B=Math.sin(z*Math.PI)*Math.max(0,Math.min(1,(P-.05)/.65));m*=1-B*.28}if(z>.65){let B=(z-.65)/.35,I=Math.exp(-(m*m)*14)*.22*B,Ut=Math.pow(Math.abs(m)/.65,2.2)*.09*B;v-=I+Ut}Y.setXYZ(T,m,v,P)}Z.computeVertexNormals();let $=new Ot(Z,G);$.position.set(0,.32,0),ti.add($);let Rt=new Qe(1.78,1.78,.042,64,16),Bt=Rt.attributes.position;for(let T=0;T<Bt.count;T++){let m=Bt.getX(T),v=Bt.getY(T),P=Bt.getZ(T);P*=1.08,m*=.95;let z=Math.pow(Math.abs(m)/1.35,2.1)*.44,B=P>0?-Math.pow(P/1.8,1.6)*.12:Math.pow(-P/1.8,1.6)*.06;v+=z+B,Bt.setXYZ(T,m,v,P)}Rt.computeVertexNormals();let It=new Ot(Rt,G);It.position.set(0,-.06,.04),ti.add(It);let qt=new Qe(.81,.83,.11,40,1,!0);qt.scale(.94,1,1.15);let Jt=new Ot(qt,Gt);Jt.position.set(0,-.01,0),ti.add(Jt);let Ce=new Ot(new ni(.24,.13,.06),le);Ce.position.set(0,-.01,.94),ti.add(Ce);let Pe=new mn;Pe.visible=!1,rt.add(Pe);let ee=new di({color:1381400,roughnessMap:X,bumpMap:X,bumpScale:.036,roughness:.62,metalness:.32}),_n=[{root:[-.46,1.88,-.02],mid1:[-.88,2.18,-.38],mid2:[-1.32,1.25,-.62],tip:[-1.42,-.35,-.45],rad:.095,phase:0,side:-1},{root:[.46,1.88,-.02],mid1:[.88,2.18,-.38],mid2:[1.32,1.25,-.62],tip:[1.42,-.35,-.45],rad:.095,phase:.6,side:1},{root:[-.64,1.72,-.06],mid1:[-1.18,1.92,-.35],mid2:[-1.58,.88,-.48],tip:[-1.58,-.78,-.32],rad:.102,phase:1.2,side:-1},{root:[.64,1.72,-.06],mid1:[1.18,1.92,-.35],mid2:[1.58,.88,-.48],tip:[1.58,-.78,-.32],rad:.102,phase:1.8,side:1},{root:[-.74,1.52,-.12],mid1:[-1.35,1.58,-.38],mid2:[-1.72,.45,-.42],tip:[-1.66,-1.08,-.22],rad:.105,phase:2.4,side:-1},{root:[.74,1.52,-.12],mid1:[1.35,1.58,-.38],mid2:[1.72,.45,-.42],tip:[1.66,-1.08,-.22],rad:.105,phase:3,side:1},{root:[-.76,1.28,-.24],mid1:[-1.42,1.18,-.48],mid2:[-1.74,.05,-.44],tip:[-1.55,-1.25,-.18],rad:.1,phase:.4,side:-1},{root:[.76,1.28,-.24],mid1:[1.42,1.18,-.48],mid2:[1.74,.05,-.44],tip:[1.55,-1.25,-.18],rad:.1,phase:1,side:1},{root:[-.24,1.94,-.14],mid1:[-.52,2.28,-.52],mid2:[-.95,1.38,-.78],tip:[-1.08,-.45,-.62],rad:.092,phase:1.6,side:-1},{root:[.24,1.94,-.14],mid1:[.52,2.28,-.52],mid2:[.95,1.38,-.78],tip:[1.08,-.45,-.62],rad:.092,phase:2.2,side:1},{root:[-.55,1.62,-.32],mid1:[-1.02,1.72,-.68],mid2:[-1.35,.62,-.72],tip:[-1.28,-.95,-.52],rad:.096,phase:2.8,side:-1},{root:[.55,1.62,-.32],mid1:[1.02,1.72,-.68],mid2:[1.35,.62,-.72],tip:[1.28,-.95,-.52],rad:.096,phase:3.4,side:1}].map((T,m)=>{let v=new mn,[P,z,B]=T.root;v.position.set(P,z,B);let I=new Ot(new Qe(T.rad*1.28,T.rad*1.15,.09,14),tt);I.rotation.z=T.side*.6,v.add(I);let Ut=new U(0,0,0),Tt=new U(T.mid1[0]-P,T.mid1[1]-z,T.mid1[2]-B),Kt=new U(T.mid2[0]-P,T.mid2[1]-z,T.mid2[2]-B),ne=new U(T.tip[0]-P,T.tip[1]-z,T.tip[2]-B),me=new ys([Ut,Tt,Kt,ne]),xe=new Ms(me,28,T.rad,12,!1),wt=xe.attributes.position;for(let we=0;we<wt.count;we++){let yn=wt.getX(we),ye=wt.getY(we),Yt=wt.getZ(we),Qt=1+Math.sin(ye*22+m)*.11;wt.setXYZ(we,yn*Qt,ye,Yt*Qt)}xe.computeVertexNormals();let ke=new Ot(xe,ee);v.add(ke),[.24,.52,.78].forEach((we,yn)=>{let ye=me.getPoint(we),Yt=me.getTangent(we),Qt=yn===1?m%2===0?le:ce:tt,ue=new Ot(new Qe(T.rad*1.2,T.rad*1.2,.1,14),Qt);ue.position.copy(ye),ue.quaternion.setFromUnitVectors(new U(0,1,0),Yt.normalize()),v.add(ue)});let ge=new Ot(new hi(T.rad*.88,12,10),m%2===0?le:ce);return ge.position.copy(ne),v.add(ge),Pe.add(v),{pivot:v,cfg:{phase:T.phase,side:T.side}}});function rn(T){zi=T,Nn.visible=T==="cap",ti.visible=T==="cowboy",Pe.visible=T==="predator",document.querySelectorAll("[data-accessory-btn]").forEach(m=>{let v=m.getAttribute("data-accessory-btn")===T;m.classList.toggle("active-pill",v)})}rn("none");function Je(T){d=T,document.querySelectorAll("[data-scenery-btn]").forEach(m=>{let v=m.getAttribute("data-scenery-btn")===T;m.classList.toggle("active-pill",v)})}let Ye={earLeft:new U(-1.05,.82,.03),earRight:new U(1.05,.82,.03),crownTop:new U(0,1.98,.08),templeLeft:new U(-.76,1.42,.42),templeRight:new U(.76,1.42,.42),chinBottom:new U(0,.05,.68),collarCenter:new U(0,-.95,.78),chestLeft:new U(-.68,-1.28,.72),chestRight:new U(.68,-1.28,.72),reactorCore:new U(0,-1.78,.56),hipLeft:new U(-.8,-2.35,.42),hipRight:new U(.8,-2.35,.42),shoulderLocalL:new U(-.34,.14,.28),shoulderLocalR:new U(.34,.14,.28),elbowLocalL:new U(-.08,-.05,.26),elbowLocalR:new U(.08,-.05,.26),wristLocalL:new U(-.1,-.82,.28),wristLocalR:new U(.1,-.82,.28)};function vt(T,m,v,P){let z=T.clone();return m.localToWorld(z),z.project(b),{x:(z.x*.5+.5)*v,y:(-z.y*.5+.5)*P,z:z.z}}let On=Array.from({length:95},(T,m)=>{let v=m*2.39996+m%7*.3,P=1.8+m%11*1.15;return{x:Math.cos(v)*P*1.45,y:Math.sin(v)*P*.95-.8,zOffset:m/95*18,glyphIdx:m%7}});function Xe(T,m,v,P){let z=t.width,B=t.height;if(s.clearRect(0,0,z,B),!u)return;if(d==="classic"){let Qt=Math.ceil(z/11),ue=Math.ceil(B/15);s.font='600 12px "JetBrains Mono", "Fira Code", "SF Mono", Menlo, monospace',s.textBaseline="top",s.textAlign="left",s.globalAlpha=1;let ze=f.x*3.5;for(let re=0;re<ue;re++){let se=re/ue;for(let Vt=0;Vt<Qt;Vt++){let gt=Vt/Qt,ae=Vt*11,on=re*15,$e=(gt-.5)*6.5+ze*.12,ve=Math.sin($e*1.15+.4)*.14+Math.cos($e*2.4-.7)*.08+Math.sin($e*4.7+T*.25)*.035,Ue=Math.sin($e*3.5-T*2.2)*(m*.065+v*.045),he=.34-ve-Ue,Le=.76+Math.sin($e*1.6)*.08,be=.58-se*.62+Math.sin(se*8+T*.6)*.025;if(gt<be&&se<he+.08){if(be-gt>.08){let $t=Math.floor(Vt+re*.5+T*(1.2+P*2.2))%2,te=(Vt+re)%7===0?"X":$t===0?"/":"\\";s.fillStyle=l.asciiSky,s.fillText(te,ae,on)}else(Vt+re)%2===0&&(s.fillStyle=l.asciiSky,s.fillText("/",ae,on));continue}if(se>=he&&se<=Le){let Me=(se-he)/(Le-he),$t=Math.cos($e*2.8+Me*4.2-T*.35)*.5+Math.sin(Vt*.35-re*.25)*.35+(1-Me)*.45+m*.38;if(Math.hypot((gt-.5)*1.4,se-.58)>.22&&$t>.18){let ut=".";if($t>.92)ut=(Vt+re)%3===0?"\u25AA":Vt*re%2===0?"#":"X",s.fillStyle=l.asciiMountainBright;else if($t>.68){let zt=["#","X","=","o","\u25AB","\\","/"];ut=zt[(Vt*3+re*5)%zt.length],s.fillStyle=l.asciiMountainMid}else if($t>.42){let zt=["/","\\","=","-","."];ut=zt[(Vt+re*2)%zt.length],s.fillStyle=l.asciiMountainDim}else{if((Vt*7+re*13)%5!==0)continue;ut=(Vt+re)%2===0?"\\":".",s.fillStyle=l.asciiMountainDim}s.fillText(ut,ae,on)}continue}let ct=Math.sin(Vt*127.1+re*311.7)*43758.5453,bt=ct-Math.floor(ct);if(bt>.87&&Math.sin(T*.9+Vt*.4+re*.2)>-.2){let $t=["\\","/",".","\xB7","=","\\"],te=Math.floor((bt*100+Math.floor(T*.5))%$t.length);s.fillStyle=l.asciiMountainDim,s.fillText($t[te],ae,on)}}}return}if(d==="horizon2d"){let Qt=Math.floor(z/11),ue=Math.floor(B/15);s.font='700 12px "JetBrains Mono", "Fira Code", monospace',s.textBaseline="top",s.textAlign="left",s.globalAlpha=1;let ze=Math.round(f.x*2.5),re=Math.round(f.y*1.5);for(let se=0;se<ue;se++){let Vt=se/ue;for(let gt=0;gt<Qt;gt++){let ae=gt/Qt;if(Math.hypot(ae-.5,Vt-.56)<.25)continue;let $e=.5+Math.sin((ae+ze*.01)*5.8+.6)*.14+Math.cos(ae*13.5-1.1)*.07+Math.sin(ae*27+T*.35)*.025,ve=Math.floor(ae*56),Ue=a.freqData[ve]/255*.1*(.5+m),he=$e-Ue;if(Vt>=he){let Le=(Vt-he)/(1-he+.001),be=Math.cos(ae*5.8+.6),ct=(1-Le*.72)*(.55+be*.45)+m*.28*(1-Le),bt=".";if(Vt-he<.024)bt="\u25AA",s.fillStyle=l.asciiMountainBright;else if(ct>.72)bt=(se+gt)%2===0?"#":"X",s.fillStyle=l.asciiMountainBright;else if(ct>.44)bt=(se*3+gt)%3===0?"X":"=",s.fillStyle=l.asciiMountainMid;else if(ct>.24)bt=(se+gt)%2===0?"/":":",s.fillStyle=l.asciiMountainDim;else{if((se+gt)%3!==0)continue;bt=".",s.fillStyle=l.asciiMountainDim}s.fillText(bt,gt*11,se*15)}else{let Le=Math.sin(gt*91.7+se*37.3+Math.floor(T*2.2)*.12)*1e4,be=Le-Math.floor(Le);if(be>.962-P*.035){s.fillStyle=l.asciiMountainMid;let ct=["/","\\","x","+","\xB7","-"],bt=Math.floor(be*997%ct.length);s.fillText(ct[bt],(gt+ze*.3)*11,(se+re*.3)*15)}else ae<.36&&Vt<.42&&Math.abs((gt-se*1.4+Math.floor(T*3))%13)<1.15&&(s.fillStyle=l.asciiMountainDim,s.fillText("/",gt*11,se*15))}}}return}if(d==="cybercode"){let Qt=Math.floor(z/10),ue=Math.floor(B/17);s.font='600 13px "JetBrains Mono", "Fira Code", monospace',s.textBaseline="top",s.textAlign="left";let ze="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+#/X",re=ze.length,se=f.x*6,Vt=f.y*4;for(let gt=0;gt<Qt;gt++){let ae=Math.sin(gt*17.3+4.1)*43758.5453,on=1.2+Math.abs(ae%2.4),$e=Math.abs(Math.floor(gt*2))%64,ve=a.freqData[$e]/255,Ue=(T*(on+ve*3.5)+ae%100)%ue;for(let he=0;he<ue;he++){let Le=gt*10+se*.1,be=he*17+Vt*.1,ct=gt/Qt,bt=he/ue;if(Math.hypot((ct-.5)*1.35,bt-.56)<.22)continue;let $t=(he-Ue+ue)%ue,te=$t<1.2,ut=$t<6,zt=Math.hypot(ct-.5,bt-.55),Fe=Math.sin(zt*16-T*8)*(m*.45+(a.kickPulse||0)*.4),Ne=Math.abs(Math.floor(Math.sin(gt*93.1+Math.floor(he+Ue)*31.7)*99991)),je=ze[Ne%re];if(te||Fe>.32)s.fillStyle="#67e8f9",s.globalAlpha=Math.min(.95,.75+m*.25);else if(ut||Fe>.15||ve>.5)s.fillStyle="#22d3ee",s.globalAlpha=Math.min(.75,.45+ve*.3);else{let Ke=Ne%3;Ke===0?(s.fillStyle="#1e384d",s.globalAlpha=.55):Ke===1?(s.fillStyle="#162b3d",s.globalAlpha=.42):(s.fillStyle="#10202e",s.globalAlpha=.3)}s.fillText(je,Le,be)}}}if(d==="street"){let Qt=Math.floor(z/10),ue=Math.floor(B/15);s.font='700 12px "JetBrains Mono", "Fira Code", monospace',s.textBaseline="top",s.textAlign="left";let ze=f.x*18,re=f.y*10,se=a.kickPulse||0,Vt=(m*.7+se*.9)*(Math.sin(T*30)*1.5);for(let gt=0;gt<Qt;gt++){let ae=gt/Qt,on=Math.abs(ae-.5),$e=on>.16,ve=Math.pow((on-.16)/.34,1.8),Ue=$e?.82-ve*.38:.82,he=$e&&Math.abs(on-.5)<.04;for(let Le=0;Le<ue;Le++){let be=Le/ue,ct=gt*10+ze*.2,bt=Le*15+re*.2;if(Math.hypot((ae-.5)*1.35,be-.58)<.22)continue;if((ae<.3||ae>.7)&&(be<Ue||be<.68)){let zt=ae<.5,Fe=zt?gt:gt-Math.floor(Qt*.7),Ne=Le,je=Math.floor(Ne/2),Ke=Ne%2===0,fn=(Fe+je%2*2)%4===0,En=Ke?"\u2500":fn?"\u2502":"\u2591",Sn=Ke||fn?"#1e2430":"#141822",hn=.55,en=zt?ae/.3:(ae-.7)/.3,un=be/.55,Pn=!1,Un="#f43f5e",Hn="#";if(zt&&un>=.22&&un<=.52&&en>=.12&&en<=.88){let ie=(en-.12)/.76,Ze=(un-.22)/.3,Gn=ie>=.06&&ie<=.16||ie>=.06&&ie<=.3&&Ze>=.75,lr=ie>=.36&&ie<=.45||ie>=.36&&ie<=.6&&(Ze<=.22||Ze>=.78)||ie>=.56&&ie<=.62&&Ze>=.2&&Ze<=.8,Rc=ie>=.68&&ie<=.76||ie>=.68&&ie<=.92&&(Ze<=.22||Ze>=.44&&Ze<=.56)||ie>=.86&&ie<=.94&&Ze>=.18&&Ze<=.48||ie>=.78&&ie<=.94&&Ze>=.56&&ie-.78-(Ze-.56)*.4<.06;(Gn||lr||Rc)&&(Pn=!0,Hn=(gt+Le)%2===0?"\u2588":"\u2593",Un=m>.5?"#fb7185":"#f43f5e",hn=.95+m*.2)}if(zt&&un>=.6&&un<=.82&&en>=.15&&en<=.85){let ie=(en-.15)/.7;ie>=.05&&ie<=.28?(Pn=!0,Hn="\u2665",Un="#f43f5e",hn=.9):ie>=.38&&ie<=.6?(Pn=!0,Hn="\u2715",Un="#38bdf8",hn=.9):ie>=.7&&ie<=.95&&(Pn=!0,Hn="\u25A0",Un="#facc15",hn=.9)}if(!zt&&un>=.2&&un<=.5&&en>=.1&&en<=.9){let ie=(en-.1)/.8,Ze=(un-.2)/.3,Gn=ie>=.05&&ie<=.14||ie<=.24&&(Ze<=.2||Ze>=.42&&Ze<=.56||Ze>=.78)||ie>=.22&&ie<=.26&&(Ze<=.5||Ze>=.5),lr=ie>=.3&&ie<=.38||ie>=.3&&ie<=.46&&(Ze<=.2||Ze>=.42&&Ze<=.56||Ze>=.78),Rc=ie>=.5&&ie<=.58||ie>=.66&&ie<=.74||ie>=.5&&ie<=.74&&(Ze<=.2||Ze>=.46&&Ze<=.6),jf=ie>=.78&&ie<=.95&&Ze<=.22||ie>=.84&&ie<=.9;(Gn||lr||Rc||jf)&&(Pn=!0,Hn=(gt+Le)%2===0?"\u2588":"\u2592",Un=se>.6?"#67e8f9":"#06b6d4",hn=.95+se*.25)}if(!zt&&un>=.58&&un<=.78&&en>=.15&&en<=.85){let ie=(en-.15)/.7;if(ie>=.1&&ie<=.35)Pn=!0,Hn="\u26A1",Un="#facc15",hn=.95;else if(ie>=.45&&ie<=.9){let Ze="SK8\xB7DIE",Gn=Math.floor((ie-.45)/.45*Ze.length);Pn=!0,Hn=Ze[Gn]||"X",Un="#a855f7",hn=.9}}let Wi=Math.sin(gt*53.7)*43758.54,uo=Wi-Math.floor(Wi)>.7,zs=.08+Math.abs(Wi%.16)+(m*.08+se*.06);if(!Pn&&uo){let ie=un>.52&&un<.52+zs&&en>=.12&&en<=.88,Ze=un>.5&&un<.5+zs&&en>=.1&&en<=.9;if(zt&&ie){Pn=!0;let Gn=(un-.52)/zs;Hn=Gn>.85?"o":Gn>.6?":":"|",Un="#f43f5e",hn=Math.max(.4,.95-Gn*.5)}else if(!zt&&Ze){Pn=!0;let Gn=(un-.5)/zs;Hn=Gn>.85?"\u2022":Gn>.6?":":"|",Un="#06b6d4",hn=Math.max(.4,.95-Gn*.5)}}Pn?(s.fillStyle=Un,s.globalAlpha=Math.min(1,hn),s.fillText(Hn,ct+Vt,bt)):(s.fillStyle=Sn,s.globalAlpha=hn,s.fillText(En,ct,bt));continue}if(be>=Ue-.018){if(Math.abs(be-Ue)<.022&&$e){let Ke=P>.55&&(gt+Math.floor(T*12))%7===0;s.fillStyle=Ke?"#ffffff":se>.6?"#67e8f9":"#cbd5e1",s.globalAlpha=Ke?1:.88;let fn=Ke?"\u2726":gt%2===0?"\u2550":"\xD8";s.fillText(fn,ct,bt);continue}let Fe=Math.abs(be*100%6)<.65,Ne=Math.sin(gt*19.3+Math.floor(be*25)*11.7),je=Math.abs(Ne)>.82;if(Fe)s.fillStyle="#475569",s.globalAlpha=.7,s.fillText(gt%8===0?"+":"\u2550",ct,bt);else if(je&&$e)s.fillStyle="#334155",s.globalAlpha=.65,s.fillText("~",ct,bt);else if(be>.84){let Ke=Math.abs(ae-.5)<.035,fn=(Math.abs(ae-.35)<.02||Math.abs(ae-.65)<.02)&&Le%2===0;if(Ke)s.fillStyle="#facc15",s.globalAlpha=.85,s.fillText("\u2551",ct,bt);else if(fn)s.fillStyle="#f59e0b",s.globalAlpha=.8,s.fillText("/",ct,bt);else{let En=Math.sin(gt*91.1+Le*47.7);s.fillStyle="#1e293b",s.globalAlpha=.5;let Sn=[".","\xB7","\u2591"," "];s.fillText(Sn[Math.abs(Math.floor(En*99))%Sn.length],ct,bt)}}else s.fillStyle=$e?"#1e293b":"#0f172a",s.globalAlpha=.55,s.fillText((Le+gt)%3===0?"\u2591":".",ct,bt);continue}if(be>=.24&&be<Ue&&be>=.42-Math.abs(Math.sin(gt*.45))*.12){let Fe=Math.sin(gt*67.3+Le*89.1+Math.floor(T*.5));Fe-Math.floor(Fe)>.88?(s.fillStyle="#fef08a",s.globalAlpha=.65+P*.3,s.fillText("\u25AA",ct,bt)):(s.fillStyle="#0f172a",s.globalAlpha=.7,s.fillText("\u2588",ct,bt));continue}let te=Math.sin(gt*133.7+Le*59.3)*43758.54;te-Math.floor(te)>.965&&(s.fillStyle="#94a3b8",s.globalAlpha=.45+P*.35,s.fillText("\xB7",ct,bt))}}s.globalAlpha=1;return}let I=a.kickPulse||0;s.textBaseline="middle",s.textAlign="center";let Ut=f.x*1.2+Math.sin(T*.45)*.18,Tt=f.y*.65+Math.cos(T*.35)*.08,Kt=z*.5-Ut*(z*.09),ne=B*.46+Tt*(B*.07),me=Math.min(z,B)*.92,xe=(ye,Yt,Qt)=>{let ue=ye-Ut*(1.8/Math.max(1,Qt*.25)),ze=Yt-Tt*(1.2/Math.max(1,Qt*.25)),re=me/Math.max(.8,Qt);return{sx:Kt+ue*re,sy:ne-ze*re,scale:re/(me*.12)}},wt=["\xB7",".","/","\\","+","x","X","\u25AA","#"],ge=T*(d==="warp3d"?3.4:1.85)+a.beatPhase*(d==="warp3d"?1.1:.55);for(let ye=0;ye<On.length;ye++){let Yt=On[ye],Qt=18.5-(Yt.zOffset+ge)%17.3,ue=xe(Yt.x,Yt.y,Qt);if(ue.sx<-20||ue.sx>z+20||ue.sy<-20||ue.sy>B+20||Math.hypot((ue.sx-z*.5)/z,(ue.sy-B*.54)/B)<.2&&Qt<6)continue;let re=1-(Qt-1.2)/17.3,se=Math.max(8,Math.min(26,Math.round(8+Math.pow(re,1.45)*(d==="warp3d"?20:16))));s.font=`700 ${se}px "JetBrains Mono", "Fira Code", monospace`;let Vt=Math.min(wt.length-1,Math.floor(re*wt.length));s.globalAlpha=Math.min(.92,(.15+re*.78)*(.75+P*.5)),s.fillStyle=re>.72?l.asciiMountainBright:re>.4?l.asciiMountainMid:l.asciiMountainDim,s.fillText(wt[Vt],ue.sx,ue.sy)}if(d==="valley3d"||d==="warp3d"){let ye=d==="warp3d"?{x:4.1,y:2.1,z:10.4}:{x:-4.4,y:2.35,z:11.2},Yt=1.45+m*.22+I*.14,Qt=T*.42,ue=.42+Math.sin(T*.3)*.1,ze=Math.cos(Qt),re=Math.sin(Qt),se=Math.cos(ue),Vt=Math.sin(ue),gt=.65,ae=.52,on=.55,$e=[".",":","/","=","+","x","X","#","@"],ve=[],Ue=10,he=20;for(let be=1;be<Ue;be++){let ct=be/Ue*Math.PI,bt=Math.sin(ct),Me=Math.cos(ct);for(let $t=0;$t<he;$t++){let te=$t/he*Math.PI*2,ut=Math.cos(te)*bt,zt=Me,Fe=Math.sin(te)*bt,Ne=ut*ze-Fe*re,je=ut*re+Fe*ze,Ke=zt*se-je*Vt,fn=zt*Vt+je*se;if(fn<-.15)continue;let En=Math.max(0,Ne*gt+Ke*ae+fn*on),Sn=Math.min($e.length-1,Math.floor(En*$e.length));ve.push({wx:ye.x+Ne*Yt,wy:ye.y+Ke*Yt,wz:ye.z-fn*Yt,char:$e[Sn],lum:.25+En*.75})}}let Le=44;for(let be=0;be<Le;be++){let ct=be/Le*Math.PI*2+T*.65,bt=Yt*(1.58+be%2*.14)+Math.sin(ct*6-T*5)*(m*.18),Me=Math.cos(ct)*bt,$t=Math.sin(ct)*.12,te=Math.sin(ct)*bt,ut=.55,zt=-.32,Fe=$t*Math.cos(ut)-te*Math.sin(ut),Ne=$t*Math.sin(ut)+te*Math.cos(ut),je=Me*Math.cos(zt)-Fe*Math.sin(zt),Ke=Me*Math.sin(zt)+Fe*Math.cos(zt);ve.push({wx:ye.x+je,wy:ye.y+Ke,wz:ye.z-Ne,char:be%3===0?"#":be%2===0?"=":"/",lum:Ne>0?.95:.42})}ve.sort((be,ct)=>ct.wz-be.wz);for(let be=0;be<ve.length;be++){let ct=ve[be],bt=xe(ct.wx,ct.wy,ct.wz),Me=Math.max(9,Math.min(16,Math.round(11*bt.scale)));s.font=`700 ${Me}px "JetBrains Mono", "Fira Code", monospace`,s.globalAlpha=Math.min(.92,ct.lum*(.75+m*.35)),s.fillStyle=ct.lum>.72?l.asciiMountainBright:ct.lum>.45?l.asciiMountainMid:l.asciiMountainDim,s.fillText(ct.char,bt.sx,bt.sy)}}if(d==="warp3d"){for(let Yt=0;Yt<9;Yt++){let Qt=(Yt/9+(1-ge*.12%1))%1,ue=1.6+Math.pow(Qt,1.35)*14.5,ze=1-Qt,re=Math.max(9,Math.min(22,Math.round(9+ze*13)));s.font=`700 ${re}px "JetBrains Mono", "Fira Code", monospace`;let se=36,Vt=3.2+Math.sin(ue*.5-T*2.5)*(.4+m*.6);for(let gt=0;gt<se;gt++){let ae=gt/se*Math.PI*2+T*.3*(Yt%2===0?1:-1),on=Math.cos(ae)*Vt*1.35,$e=Math.sin(ae)*Vt*.85-.25,ve=xe(on,$e,ue);ve.sx<0||ve.sx>z||ve.sy<0||ve.sy>B||Math.hypot((ve.sx-z*.5)/z,(ve.sy-B*.56)/B)<.24||(s.globalAlpha=Math.min(.88,ze*(.65+m*.35)),s.fillStyle=gt%3===0?l.asciiMountainBright:l.asciiMountainMid,s.fillText(gt%2===0?"#":"+",ve.sx,ve.sy))}}s.globalAlpha=1,s.textAlign="left",s.textBaseline="top";return}if(d==="cybergrid"){s.font='700 13px "JetBrains Mono", "Fira Code", monospace';for(let Qt=-16;Qt<=16;Qt++){if(Math.abs(Qt)<3)continue;let ue=Qt*.58,ze=Math.abs(Qt)*4%64,re=.2+a.freqData[ze]/255*(2.6+m*1.4);for(let se=-1.6;se<=-1.6+re;se+=.24){let Vt=xe(ue,se,8.8);if(Vt.sx<0||Vt.sx>z||Vt.sy<0||Vt.sy>B)continue;let gt=se>-1.6+re-.26;s.fillStyle=gt?l.asciiMountainBright:l.asciiMountainMid,s.globalAlpha=gt?.92:.62,s.fillText(gt?"\u25AA":"\u2588",Vt.sx,Vt.sy)}}}d==="valley3d"&&[{z:14.5,fontPx:10,stepX:.38,stepY:.28,baseH:.4,amp:1.55,freq:.72,seed:1.1,alphaMul:.45},{z:9.2,fontPx:12,stepX:.3,stepY:.23,baseH:0,amp:1.45,freq:.95,seed:3.7,alphaMul:.72},{z:5.4,fontPx:15,stepX:.25,stepY:.2,baseH:-.55,amp:1.25,freq:1.25,seed:7.3,alphaMul:.96}].forEach((Yt,Qt)=>{s.font=`700 ${Yt.fontPx}px "JetBrains Mono", "Fira Code", monospace`;let ue=Yt.z*.95;for(let ze=-ue;ze<=ue;ze+=Yt.stepX){let re=Qt===2?Math.min(1,Math.pow(Math.abs(ze)/2.2,1.8)):Qt===1?.45+.55*Math.min(1,Math.abs(ze)/1.8):1;if(re<.18)continue;let se=ze*Yt.freq+Yt.seed,Vt=(Math.sin(se)*.55+Math.cos(se*2.1-.8)*.3+Math.sin(se*4.3+T*.4)*.15+.65)*Yt.amp*re,gt=Math.abs(Math.floor(ze*8+Qt*19))%64,ae=a.freqData[gt]/255*(.45+m*.55),on=Yt.baseH+Vt+ae,$e=Yt.baseH-1.15,ve=(Math.cos(se)*.55*Yt.freq-Math.sin(se*2.1-.8)*.3*Yt.freq*2.1)*Yt.amp*re;for(let Ue=on;Ue>=$e;Ue-=Yt.stepY){let he=xe(ze,Ue,Yt.z);if(he.sx<0||he.sx>z||he.sy<0||he.sy>B||Math.hypot((he.sx-z*.5)/z,(he.sy-B*.56)/B)<.21)continue;let be=on-Ue,ct=be<Yt.stepY*1.15,bt=Math.max(.08,Math.min(1,.58-ve*.45+(1-be/2.2)*.35+m*.25)),Me=".";if(ct)Me=ve>.15?"/":ve<-.15?"\\":"\u25AA",s.fillStyle=l.asciiMountainBright,s.globalAlpha=Math.min(.95,Yt.alphaMul*1.1);else if(bt>.76){let $t=["#","\u25AA","X","@","="];Me=$t[Math.abs(Math.floor(ze*7+Ue*11))%$t.length],s.fillStyle=l.asciiMountainBright,s.globalAlpha=Yt.alphaMul*.9}else if(bt>.48){let $t=["X","=","o","\u25AB","/","\\"];Me=$t[Math.abs(Math.floor(ze*5+Ue*9))%$t.length],s.fillStyle=l.asciiMountainMid,s.globalAlpha=Yt.alphaMul*.72}else{if(Math.abs(Math.floor(ze*13+Ue*17))%2!==0)continue;Me=ve<0?"\\":":",s.fillStyle=l.asciiMountainDim,s.globalAlpha=Yt.alphaMul*.48}s.fillText(Me,he.sx,he.sy)}}});let we=22,yn=(T*2.4+a.beatPhase*.75)%1;for(let ye=0;ye<we;ye++){let Yt=(ye+(1-yn))/we,Qt=1.45+Math.pow(Yt,1.45)*13.5,ue=1-Yt,ze=Math.max(8,Math.min(22,Math.round(8+ue*14)));s.font=`700 ${ze}px "JetBrains Mono", "Fira Code", monospace`;let re=28,se=9.5;for(let Vt=-re;Vt<=re;Vt++){let gt=Vt/re*se,ae=Math.min(120,Math.abs(Vt*3)+ye*2),on=a.freqData[ae]/255,$e=d==="cybergrid"?0:Math.pow(Math.abs(gt)/se,2.2)*1.45,ve=Math.sin(gt*1.8-Qt*.9+T*3.5)*(.12+m*.28+on*.35),Ue=-1.75+$e+ve,he=xe(gt,Ue,Qt);if(he.sx<0||he.sx>z||he.sy<ne-10||he.sy>B||Math.hypot((he.sx-z*.5)/z,(he.sy-B*.62)/B)<.23)continue;let be=Math.abs(Vt)%3===0,ct=on>.48||ve>.22,bt="\xB7";ct?(bt=ue>.55?"#":"X",s.fillStyle=l.asciiMountainBright):be?(bt=gt<-.3?"/":gt>.3?"\\":"|",s.fillStyle=l.asciiMountainMid):(bt=(Vt+ye)%2===0?"=":"-",s.fillStyle=l.asciiMountainDim),s.globalAlpha=Math.min(.92,(.14+ue*.78)*(ct?1:.68)),s.fillText(bt,he.sx,he.sy)}}s.globalAlpha=1,s.textAlign="left",s.textBaseline="top"}function Jn(T,m,v,P,z){let B=n.width,I=n.height;if(r.clearRect(0,0,B,I),!c||h==="none")return;let Ut=vt(Ye.earLeft,rt,B,I),Tt=vt(Ye.earRight,rt,B,I);if(h==="earcups"){r.save(),r.lineCap="round",r.lineJoin="round";let ct=(bt,Me)=>{let $t=Me?-1:1;r.strokeStyle=l.sketchStroke,r.lineWidth=1.8,r.beginPath(),r.ellipse(bt.x,bt.y,16,34,0,0,Math.PI*2),r.stroke(),r.lineWidth=1.5,r.beginPath();for(let ut=-3;ut<=3;ut++){let zt=bt.y+ut*7.5+Math.sin(T*9+ut)*(m*3.5),Fe=bt.x+(ut%2===0?-8:8)*$t;ut===-3?r.moveTo(Fe,zt):r.lineTo(Fe,zt)}r.stroke();let te=3;for(let ut=1;ut<=te;ut++){let zt=(T*.9+ut*.33)%1,Fe=24+ut*15+zt*15+m*14+z*8,Ne=(1-zt)*(.16+(m+v)*.45);r.strokeStyle=Me?l.eyeLeft:l.eyeRight,r.globalAlpha=Math.min(.78,Ne),r.lineWidth=1.6,r.beginPath();let je=Me?Math.PI*.68:-Math.PI*.32,Ke=Me?Math.PI*1.32:Math.PI*.32;r.arc(bt.x+$t*6,bt.y,Fe,je,Ke),r.stroke()}r.globalAlpha=1};ct(Ut,!0),ct(Tt,!1),r.restore();return}let Kt=vt(Ye.crownTop,rt,B,I),ne=vt(Ye.templeLeft,rt,B,I),me=vt(Ye.templeRight,rt,B,I),xe=vt(Ye.chinBottom,rt,B,I),wt=vt(Ye.collarCenter,Be,B,I),ke=vt(Ye.chestLeft,Be,B,I),ge=vt(Ye.chestRight,Be,B,I),we=vt(Ye.reactorCore,jt,B,I),yn=vt(Ye.hipLeft,jt,B,I),ye=vt(Ye.hipRight,jt,B,I),Yt=vt(Ye.shoulderLocalL,Te.shoulderRig,B,I),Qt=vt(Ye.shoulderLocalR,k.shoulderRig,B,I),ue=vt(Ye.elbowLocalL,Te.elbowGroup,B,I),ze=vt(Ye.elbowLocalR,k.elbowGroup,B,I),re=vt(Ye.wristLocalL,Te.elbowGroup,B,I),se=vt(Ye.wristLocalR,k.elbowGroup,B,I);r.save(),r.lineCap="round",r.lineJoin="round";let Vt=Math.floor(T*14),gt=ct=>{let bt=Math.sin(ct*127.1+Vt*311.7)*43758.5453;return bt-Math.floor(bt)},ae=(ct,bt,Me,$t,te,ut,zt,Fe=0)=>{let Ne=bt.x-ct.x,je=bt.y-ct.y,Ke=Math.hypot(Ne,je)||1,fn=-je/Ke,En=Ne/Ke,Sn=26;r.save(),r.strokeStyle=te,r.lineWidth=ut,r.globalAlpha=zt,r.beginPath();for(let hn=0;hn<=Sn;hn++){let en=hn/Sn,un=Math.sin(en*Math.PI),Pn=(Me+hn*5)%a.timeData.length,Un=(a.timeData[Pn]-128)/128,Hn=a.freqData[(Me+hn*3)%96]/255,Wi=Un*$t*un;if(Fe===1){let ie=(hn%2===0?1:-1)*(6+m*22+z*18)*un;Wi+=ie+(gt(Me+hn)-.5)*14*un}else if(Fe===2){let ie=Math.cos(en*Math.PI*10-T*12)*(10+Hn*26)*un,Ze=Math.sin(en*Math.PI*10-T*12)*(10+Hn*26)*un,Gn=ct.x+Ne*en+fn*Wi+ie,lr=ct.y+je*en+En*Wi+Ze;hn===0?r.moveTo(Gn,lr):r.lineTo(Gn,lr);continue}let uo=ct.x+Ne*en+fn*Wi,zs=ct.y+je*en+En*Wi;hn===0?r.moveTo(uo,zs):r.lineTo(uo,zs)}r.stroke(),r.restore()},on=(ct,bt,Me,$t,te)=>{r.save(),r.strokeStyle=$t,r.lineWidth=1.6+z*1.2,r.globalAlpha=Math.min(.92,.42+te*.55);let ut=18;r.beginPath();for(let zt=0;zt<=ut;zt++){let Ne=zt/ut*Math.PI*7.5+Me*3.1+Vt*.85,je=(a.timeData[(Me*13+zt*7)%a.timeData.length]-128)/128,Ke=bt*(.35+.65*gt(Me*19+zt))*(1+Math.abs(je)*1.4+z*.55),fn=zt%3===0?1.38:.75,En=ct.x+Math.cos(Ne)*Ke*fn+(gt(Me+zt*3)-.5)*12,Sn=ct.y+Math.sin(Ne*1.3)*Ke*fn+(gt(Me+zt*5)-.5)*12;if(zt===0)r.moveTo(En,Sn);else{let hn=ct.x+(gt(Me*7+zt)-.5)*bt*2.2,en=ct.y+(gt(Me*11+zt)-.5)*bt*2.2;r.quadraticCurveTo(hn,en,En,Sn)}}if(r.stroke(),te>.18){r.lineWidth=1.3,r.beginPath();for(let zt=-2;zt<=2;zt++){let Fe=zt*7+(gt(Me+zt)-.5)*6,Ne=10+te*18;r.moveTo(ct.x+Fe-Ne*.5,ct.y+Ne*.6),r.lineTo(ct.x+Fe+Ne*.5,ct.y-Ne*.6)}r.stroke()}r.restore()},$e=(ct,bt)=>{let Me=(bt%1+1)%1,$t=ct.length-1,te=Me*$t,ut=Math.min($t-1,Math.floor(te)),zt=te-ut;return{x:ct[ut].x+(ct[ut+1].x-ct[ut].x)*zt,y:ct[ut].y+(ct[ut+1].y-ct[ut].y)*zt}},ve=18+m*42+v*35+z*28,Ue=h==="devil";if(ae(Ut,Yt,4,ve*.7,l.eyeLeft,1.8,.72,0),ae(Yt,ue,18,ve*.9,l.sketchStroke,2,.78,Ue?1:0),ae(ue,re,36,ve*1,l.eyeLeft,1.8,.82,Ue?2:0),ae(Tt,Qt,12,ve*.7,l.eyeRight,1.8,.72,0),ae(Qt,ze,28,ve*.9,l.sketchStroke,2,.78,Ue?1:0),ae(ze,se,52,ve*1,l.eyeRight,1.8,.82,Ue?2:0),ae(Yt,ke,64,ve*.65,l.eyeLeft,1.6,.62,0),ae(ke,ge,80,ve*.85,l.sketchStroke,2.1,.76,Ue?1:0),ae(ge,Qt,96,ve*.65,l.eyeRight,1.6,.62,0),ae(ke,we,110,ve*.75,l.eyeLeft,1.5,.65,Ue?2:0),ae(ge,we,128,ve*.75,l.eyeRight,1.5,.65,Ue?2:0),ae(we,yn,144,ve*.8,l.sketchStroke,1.7,.6,Ue?1:0),ae(we,ye,160,ve*.8,l.sketchStroke,1.7,.6,Ue?1:0),Ue){let ct=[re,ue,Yt,Ut,ne,Kt,me,Tt,Qt,ze,se,ye,we,ge,wt,ke,we,yn,re],bt=6,Me=m*.45+v*.4+P*.25+z*.5;for(let te=0;te<bt;te++){let ut=(T*(.11+te*.025)+te/bt+m*.08)%1,zt=$e(ct,ut),Fe=te%3===0?l.sketchStroke:te%3===1?l.eyeLeft:l.eyeRight,Ne=16+te%2*8+Me*24;on(zt,Ne,te+10,Fe,Me)}let $t=(te,ut,zt,Fe,Ne)=>{r.save(),r.strokeStyle=Fe,r.lineWidth=1.9,r.globalAlpha=.48+(m+P)*.48;for(let je=0;je<3;je++){r.beginPath();let Ke=te.x+(je-1)*12,fn=te.y;r.moveTo(Ke,fn);let En=6;for(let Sn=1;Sn<=En;Sn++){let hn=Sn/En,en=(a.timeData[(Ne*17+je*11+Sn*9)%a.timeData.length]-128)/128,un=(22+m*38+z*28)*hn,Pn=(gt(Ne+je*7+Sn)-.5)*26+en*22,Un=(gt(Ne+je*13+Sn)-.5)*18;Ke=te.x+ut*un+Pn,fn=te.y+zt*un+Un,r.lineTo(Ke,fn)}r.stroke()}r.restore()};$t(ne,-.75,-.85,l.eyeLeft,1),$t(me,.75,-.85,l.eyeRight,2),$t(Kt,0,-1,l.sketchStroke,3),$t(Yt,-1.1,-.45,l.eyeLeft,4),$t(Qt,1.1,-.45,l.eyeRight,5)}r.save(),r.strokeStyle=l.eyeLeft,r.lineWidth=1.8,r.globalAlpha=.55+m*.4,r.beginPath();let he=28;for(let ct=0;ct<=he;ct++){let bt=ct/he,Me=bt*Math.PI*6-T*9,$t=(a.timeData[ct*6%a.timeData.length]-128)/128,te=(6+bt*(28+m*26+z*18))*(1+$t*.45),ut=we.x+Math.cos(Me)*te,zt=we.y+Math.sin(Me)*te;ct===0?r.moveTo(ut,zt):r.lineTo(ut,zt)}r.stroke(),r.restore();let Le=(ct,bt)=>{let Me=bt?-1:1,$t=bt?l.eyeLeft:l.eyeRight;for(let ut=0;ut<2;ut++){r.strokeStyle=ut===0?l.sketchStroke:$t,r.globalAlpha=ut===0?.85:.65,r.lineWidth=ut===0?1.9:1.3,r.beginPath();let zt=20;for(let Fe=0;Fe<=zt;Fe++){let Ne=Fe/zt*Math.PI*2,je=(gt(ut*31+Fe+(bt?0:50))-.5)*(4+m*10),Ke=ct.x+Math.cos(Ne)*(16+je),fn=ct.y+Math.sin(Ne)*(34+je*1.4);Fe===0?r.moveTo(Ke,fn):r.lineTo(Ke,fn)}r.stroke()}r.strokeStyle=l.sketchStroke,r.globalAlpha=.9,r.lineWidth=1.6,r.beginPath();for(let ut=-5;ut<=5;ut++){let zt=(a.timeData[(ut+5)*12]-128)/128,Fe=ct.y+ut*5.2+zt*9,Ne=ct.x+((ut%2===0?-10:10)+zt*12)*Me;ut===-5?r.moveTo(Ne,Fe):r.lineTo(Ne,Fe)}r.stroke();let te=4;for(let ut=1;ut<=te;ut++){let zt=(T*.95+ut*.25)%1,Fe=22+ut*16+zt*18+m*16+z*10,Ne=(1-zt)*(.22+(m+v)*.55);r.strokeStyle=ut%2===0?l.sketchStroke:$t,r.globalAlpha=Math.min(.85,Ne),r.lineWidth=1.7,r.beginPath();let je=bt?Math.PI*.62:-Math.PI*.38,Ke=bt?Math.PI*1.38:Math.PI*.38,fn=22;for(let En=0;En<=fn;En++){let Sn=En/fn,hn=je+(Ke-je)*Sn,en=Math.sin(Sn*Math.PI),un=(a.timeData[(ut*19+En*7)%a.timeData.length]-128)/128*(10+v*22)*en,Pn=Fe+un,Un=ct.x+Me*6+Math.cos(hn)*Pn,Hn=ct.y+Math.sin(hn)*Pn;En===0?r.moveTo(Un,Hn):r.lineTo(Un,Hn)}r.stroke()}r.globalAlpha=1};Le(Ut,!0),Le(Tt,!1),[ke,ge,ue,ze,re,se,xe,yn,ye].forEach((ct,bt)=>{if(gt(bt*43+7)>.42-z*.35-v*.2){let $t=ct.x+(gt(bt*17)-.5)*28,te=ct.y+(gt(bt*29)-.5)*28,ut=6+(m+z)*9;r.strokeStyle=bt%2===0?l.eyeLeft:l.eyeRight,r.lineWidth=1.8,r.globalAlpha=.65,r.beginPath(),bt%3===0?(r.moveTo($t-ut,te-ut),r.lineTo($t+ut,te+ut),r.moveTo($t+ut,te-ut),r.lineTo($t-ut,te+ut)):bt%3===1?(r.moveTo($t-ut*.5,te-ut*1.2),r.lineTo($t+ut*.4,te-ut*.1),r.lineTo($t-ut*.3,te+ut*.1),r.lineTo($t+ut*.5,te+ut*1.2)):(r.moveTo($t-ut,te+ut*.5),r.lineTo($t-ut*.6,te-ut*.8),r.lineTo($t,te+ut*.3),r.lineTo($t+ut*.6,te-ut*.8),r.lineTo($t+ut,te+ut*.5)),r.stroke()}}),r.restore()}function kn(T){o=T,l=Of[T],Ht.map=Is(l.shellColor,!0),Ht.needsUpdate=!0,oe.map=Is(l.shellSecondary,!0),oe.needsUpdate=!0,Gt.map=Is(l.darkMetal,!1),Gt.needsUpdate=!0,tt.color.setHex(l.chromeMetal),Xt.color.setHex(l.coreColor),D.color.setHex(l.coreColor),Nt=kf(l.shellColor),Ae.map=Nt.tex,Ae.needsUpdate=!0,le.color.set(l.eyeLeft),ce.color.set(l.eyeRight),S.color.setHex(l.keyLight),w.color.setHex(l.rimLight),document.querySelectorAll("[data-palette-btn]").forEach(m=>{let v=m.getAttribute("data-palette-btn")===T;m.classList.toggle("active-pill",v)})}function pi(){let T=i.getBoundingClientRect(),m=Math.max(320,T.width),v=Math.max(320,T.height);b.aspect=m/v,b.updateProjectionMatrix(),g.setSize(m,v,!1),t.width=m,t.height=v,n.width=m,n.height=v}window.addEventListener("resize",pi),pi(),window.addEventListener("pointermove",T=>{let m=i.getBoundingClientRect(),v=(T.clientX-m.left)/m.width*2-1,P=(T.clientY-m.top)/m.height*2-1;f.targetX=Math.max(-1,Math.min(1,v)),f.targetY=Math.max(-1,Math.min(1,P))});let ri=document.getElementById("btn-play-audio"),Oe=document.getElementById("play-btn-label"),dn=document.getElementById("play-status-dot"),yi=document.getElementById("btn-play-inverno"),an=document.getElementById("btn-Switch-track"),wn=document.getElementById("track-name-display"),Vi=document.getElementById("btn-mic"),Xr=document.getElementById("audio-file-input"),qr=document.getElementById("btn-toggle-sketch"),yc=document.getElementById("btn-toggle-ascii"),au=document.getElementById("reactivity-slider");function Ns(){a.isPlaying?(a.mode==="inverno"?(Oe&&(Oe.textContent="PAUSAR (INVERNO.MP3)"),wn&&(wn.textContent="PLAYING // INVERNO.MP3")):a.mode==="file"?(Oe&&(Oe.textContent=`PAUSAR (${a.currentFileLabel.slice(0,12)})`),wn&&(wn.textContent=`FILE // ${a.currentFileLabel}`)):a.mode==="mic"?(Oe&&(Oe.textContent="MIC ATIVO (PAUSAR)"),wn&&(wn.textContent="LIVE // MICROFONE INPUT")):a.mode==="system"?(Oe&&(Oe.textContent="SPOTIFY ATIVO (PAUSAR)"),wn&&(wn.textContent="LIVE // SPOTIFY / FONES")):(Oe&&(Oe.textContent="PAUSAR SYNTH"),wn&&(wn.textContent=a.tracks[a.trackIndex].name)),dn&&(dn.className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_#ff6b2b]"),ri&&ri.classList.add("playing-active")):(Oe&&(Oe.textContent="TOCAR INVERNO.MP3"),dn&&(dn.className="w-2.5 h-2.5 rounded-full bg-zinc-400"),ri&&ri.classList.remove("playing-active")),document.querySelectorAll(".btn-system-audio-trigger").forEach(T=>{let m=T.querySelector(".system-audio-btn-label");a.mode==="system"&&a.isPlaying?(T.classList.add("border-emerald-400","bg-emerald-900/60","text-emerald-100","shadow-[0_0_12px_rgba(16,185,129,0.35)]"),m&&(m.textContent="Spotify Ativo (Pausar)")):(T.classList.remove("border-emerald-400","bg-emerald-900/60","text-emerald-100","shadow-[0_0_12px_rgba(16,185,129,0.35)]"),m&&(m.textContent="Capturar Fones / Spotify"))}),typeof cn<"u"&&cn&&cn.syncUI(),typeof mi<"u"&&mi&&mi.onAudioStateChange(a.isPlaying)}a.onStateChange=Ns,ri&&ri.addEventListener("click",async()=>{typeof cn<"u"&&cn?cn.togglePlay():(await a.togglePlay(),Ns())}),yi&&yi.addEventListener("click",async()=>{await a.playInverno(),Ns()}),an&&an.addEventListener("click",()=>{a.trackIndex=(a.trackIndex+1)%a.tracks.length,a.startSynth(),Ns()}),Vi&&Vi.addEventListener("click",async()=>{await a.startMic()&&Ns()}),document.querySelectorAll(".btn-system-audio-trigger").forEach(T=>{T.addEventListener("click",async()=>{await a.startSystemAudio()&&Ns()})}),Xr&&Xr.addEventListener("change",T=>{let m=T.target.files&&T.target.files[0];m&&(a.loadAudioFile(m),Ns())}),document.querySelectorAll("[data-palette-btn]").forEach(T=>{T.addEventListener("click",()=>{kn(T.getAttribute("data-palette-btn"))})}),document.querySelectorAll("[data-accessory-btn]").forEach(T=>{T.addEventListener("click",()=>{rn(T.getAttribute("data-accessory-btn"))})}),document.querySelectorAll("[data-scenery-btn]").forEach(T=>{T.addEventListener("click",()=>{Je(T.getAttribute("data-scenery-btn"))})}),document.querySelectorAll("[data-sketch-btn]").forEach(T=>{T.addEventListener("click",()=>{let m=T.getAttribute("data-sketch-btn");h=m,c=m!=="none",document.querySelectorAll("[data-sketch-btn]").forEach(v=>{v.classList.toggle("active-pill",v.getAttribute("data-sketch-btn")===m)}),qr&&qr.classList.toggle("active-pill",c)})}),qr&&qr.addEventListener("click",()=>{c=!c,qr.classList.toggle("active-pill",c)}),yc&&yc.addEventListener("click",()=>{u=!u,yc.classList.toggle("active-pill",u)});let ou=document.getElementById("reactivity-val");au&&au.addEventListener("input",T=>{let m=parseFloat(T.target.value);a.subtleIntensity=m,ou&&(ou.textContent=`${Math.round(m*100)}%`)});let Us=document.getElementById("custom-sidebar"),sr=document.getElementById("btn-toggle-sidebar"),lu=document.getElementById("btn-close-sidebar"),rs=document.getElementById("sidebar-backdrop");function to(T){Us&&(T?(Us.classList.remove("translate-x-full"),Us.classList.add("translate-x-0"),sr&&sr.classList.add("active-pill"),rs&&(rs.classList.remove("opacity-0","pointer-events-none"),rs.classList.add("opacity-100"))):(Us.classList.remove("translate-x-0"),Us.classList.add("translate-x-full"),sr&&sr.classList.remove("active-pill"),rs&&(rs.classList.remove("opacity-100"),rs.classList.add("opacity-0","pointer-events-none"))))}sr&&Us&&sr.addEventListener("click",()=>{let T=Us.classList.contains("translate-x-full");to(T)}),lu&&lu.addEventListener("click",()=>to(!1)),rs&&rs.addEventListener("click",()=>to(!1)),window.addEventListener("keydown",T=>{T.key==="Escape"&&(to(!1),Zr(!1))});let cu='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4v16l13-8z"/></svg>',hu='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>',Vf='<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.8 4.5c2.2 0 3.6 1.2 5.2 3 1.6-1.8 3-3 5.2-3 3.8 0 5.9 3.9 4.4 7.3C19.5 16.4 12 21 12 21z"/></svg>';function An(T){return String(T??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[m])}function eo(T){return String(T||"").trim().replace(/^#+/,"").toLowerCase().replace(/\s+/g,"-").replace(/[^\p{L}\p{N}\-_]/gu,"").slice(0,24)}function uu(T){if(!T)return;let m=8,v=T.getBoundingClientRect(),P=v.width*.5,z=v.height*.65;for(let B=0;B<m;B++){let I=document.createElement("div");I.className="floating-heart pointer-events-none absolute select-none",I.textContent="\u2665";let Ut=16+Math.random()*16,Tt=Math.PI/2+(Math.random()-.5)*1.6,Kt=70+Math.random()*120,ne=Math.cos(Tt)*Kt,me=-Math.sin(Tt)*Kt,xe=(Math.random()-.5)*50,wt=Math.random()>.3?"#ff5a1f":"#ebe9e3";I.style.cssText=`
        left: ${P+(Math.random()-.5)*40}px;
        top: ${z}px;
        font-size: ${Ut}px;
        color: ${wt};
        transform: translate(-50%, -50%) rotate(${xe}deg);
        transition: transform 1.25s cubic-bezier(0.1, 0.8, 0.2, 1), opacity 1.25s ease-out;
        opacity: 1;
        z-index: 50;
      `,T.appendChild(I),requestAnimationFrame(()=>{I.style.transform=`translate(calc(-50% + ${ne}px), calc(-50% + ${me-90}px)) rotate(${xe*2.5}deg) scale(${1.2+Math.random()*.6})`,I.style.opacity="0"}),setTimeout(()=>{I.parentNode&&I.parentNode.removeChild(I)},1300)}}class Hf{constructor(m){this.audio=m,this.enabled=localStorage.getItem("ldr_watermark_enabled")==="true",this.interval=parseInt(localStorage.getItem("ldr_watermark_interval")||"30",10),this.effect=localStorage.getItem("ldr_watermark_effect")||"distorted",this.volume=parseFloat(localStorage.getItem("ldr_watermark_volume")||"0.85"),this.timer=null,this.audioBuffer=null,this.isLoading=!1,this.loadAudio()}async loadAudio(){if(!(this.audioBuffer||this.isLoading))try{this.isLoading=!0;let m=await fetch("/watermark.mp3");if(!m.ok)throw new Error("HTTP "+m.status);let v=await m.arrayBuffer();this.audio.initContext(),this.audioBuffer=await this.audio.ctx.decodeAudioData(v),this.isLoading=!1}catch(m){console.warn("Voice watermark audio could not load:",m),this.isLoading=!1}}makeDistortionCurve(m=28){let v=m,P=44100,z=new Float32Array(P),B=Math.PI/180;for(let I=0;I<P;++I){let Ut=I*2/P-1;z[I]=(3+v)*Ut*20*B/(Math.PI+v*Math.abs(Ut))}return z}playTag(m=null){if(this.audio.initContext(),!this.audioBuffer){this.loadAudio().then(()=>{this.audioBuffer&&this.playTag(m)});return}let v=this.audio.ctx,P=v.currentTime,z=v.createBufferSource();z.buffer=this.audioBuffer;let B=m||this.effect,I=v.createGain();if(I.gain.setValueAtTime(this.volume,P),B==="distorted"){let Tt=v.createWaveShaper();Tt.curve=this.makeDistortionCurve(35),Tt.oversample="4x";let Kt=v.createBiquadFilter();Kt.type="bandpass",Kt.frequency.setValueAtTime(1350,P),Kt.Q.setValueAtTime(3.2,P);let ne=v.createDelay();ne.delayTime.setValueAtTime(.09,P);let me=v.createGain();me.gain.setValueAtTime(.32,P),ne.connect(me),me.connect(ne),z.connect(Tt),Tt.connect(Kt),Kt.connect(I),Kt.connect(ne),me.connect(I)}else if(B==="robot"){let Tt=v.createBiquadFilter();Tt.type="peaking",Tt.frequency.setValueAtTime(900,P),Tt.Q.setValueAtTime(6.5,P),Tt.gain.setValueAtTime(14,P),z.connect(Tt),Tt.connect(I)}else if(B==="radio"){let Tt=v.createBiquadFilter();Tt.type="highpass",Tt.frequency.setValueAtTime(450,P);let Kt=v.createBiquadFilter();Kt.type="lowpass",Kt.frequency.setValueAtTime(2600,P),z.connect(Tt),Tt.connect(Kt),Kt.connect(I)}else z.connect(I);I.connect(this.audio.gainNode),z.start(P),this.audio.kickPulse=1;let Ut=document.getElementById("track-name-display");if(Ut){let Tt=Ut.textContent;Ut.textContent="TAG // JC_MORAL (ELEVENLABS)",setTimeout(()=>{Ut.textContent.startsWith("TAG //")&&(Ut.textContent=Tt)},2e3)}}startScheduler(){this.stopScheduler(),this.enabled&&(this.timer=setInterval(()=>{this.audio.isPlaying&&this.enabled&&this.playTag()},this.interval*1e3))}stopScheduler(){this.timer&&(clearInterval(this.timer),this.timer=null)}onAudioStateChange(m){m&&this.enabled?this.startScheduler():this.stopScheduler()}toggle(){this.setEnabled(!this.enabled)}setEnabled(m){this.enabled=!!m,localStorage.setItem("ldr_watermark_enabled",this.enabled?"true":"false"),this.enabled?(this.loadAudio(),this.audio.isPlaying&&this.startScheduler(),bn(`Marca d'\xE1gua ativada (${this.interval}s).`)):(this.stopScheduler(),bn("Marca d'\xE1gua desativada.")),this.syncUI()}setInterval(m){this.interval=Math.max(5,parseInt(m,10)||30),localStorage.setItem("ldr_watermark_interval",this.interval),this.enabled&&this.audio.isPlaying&&this.startScheduler(),this.syncUI(),bn(`Intervalo da tag: ${this.interval}s.`)}setEffect(m){this.effect=m,localStorage.setItem("ldr_watermark_effect",m),this.syncUI(),bn(`Efeito da tag: ${m}.`),this.playTag(m)}syncUI(){let m=document.getElementById("watermark-top-label"),v=document.getElementById("watermark-status-label"),P=document.getElementById("btn-watermark-top"),z=document.getElementById("btn-toggle-watermark"),B=this.enabled?`Tag: ${this.interval}s`:"Tag: Off";m&&(m.textContent=B),v&&(v.textContent=this.enabled?`Ativa (${this.interval}s)`:"Desativada"),P&&P.classList.toggle("active-pill",this.enabled),z&&z.classList.toggle("active-pill",this.enabled),document.querySelectorAll("[data-watermark-interval]").forEach(I=>{let Ut=parseInt(I.getAttribute("data-watermark-interval"),10);I.classList.toggle("active-pill",Ut===this.interval)}),document.querySelectorAll("[data-watermark-effect]").forEach(I=>{let Ut=I.getAttribute("data-watermark-effect");I.classList.toggle("active-pill",Ut===this.effect)})}}function zn(T){if(isNaN(T)||T<0)return"0:00";let m=Math.floor(T/60),v=Math.floor(T%60);return`${m}:${v<10?"0":""}${v}`}function no(T){if(typeof T=="number")return Math.max(0,T);let m=String(T||"").trim();if(!m)return 0;if(m.includes(":")){let v=m.split(":"),P=parseFloat(v[0])||0,z=parseFloat(v[1])||0;return Math.max(0,P*60+z)}return Math.max(0,parseFloat(m)||0)}class Gf{getDefaultTracks(){return[{id:"inverno",title:"Inverno // Lofi Chill",artist:"JC_MORAL",bpm:82,type:"audio",src:"/inverno.mp3",tags:["lo-fi","chill","autoral"],loopStart:0,loopEnd:0,loopEnabled:!0,maxLoops:0,likes:parseInt(localStorage.getItem("ldr_likes_inverno")||"42",10),preset:{scenery:"street",palette:"hybrid",accessory:"none",sketch:"devil",intensity:.75}},{id:"moral-drill",title:"Moral Densidade // Cyber Drill",artist:"JC_MORAL",bpm:88,type:"audio",src:"/untitled-46.mp3",tags:["drill","cyber","autoral"],loopStart:0,loopEnd:0,loopEnabled:!0,maxLoops:0,likes:parseInt(localStorage.getItem("ldr_likes_moral-drill")||"58",10),preset:{scenery:"cybercode",palette:"cytro",accessory:"cap",sketch:"waves",intensity:.9}},{id:"voz1-session",title:"Voz Sessions // Boombap 84",artist:"JC_MORAL",bpm:84,type:"audio",src:"/voz1.mp3",tags:["boombap","analog","autoral"],loopStart:0,loopEnd:0,loopEnabled:!0,maxLoops:0,likes:parseInt(localStorage.getItem("ldr_likes_voz1-session")||"64",10),preset:{scenery:"valley3d",palette:"kvrc",accessory:"cowboy",sketch:"earcups",intensity:.85}}]}getRemovedTrackIds(){try{return JSON.parse(localStorage.getItem("ldr_removed_track_ids")||"[]")}catch{return[]}}restoreDefaults(){localStorage.removeItem("ldr_removed_track_ids");let m=this.getDefaultTracks(),v=new Set(this.tracks.map(P=>P.id));m.forEach(P=>{v.has(P.id)||(this.loadMeta(P),this.tracks.push(P))}),this.renderPlaylistDrawer(),this.syncUI(),this.saveToServer(),typeof bn=="function"&&bn("Beats de f\xE1brica restaurados para todos.")}async loadFromServer(){try{let m=await fetch("/api/catalog");if(m.ok){let v=await m.json();Array.isArray(v)&&v.length>0&&(this.tracks=v,this.currentIndex>=this.tracks.length&&(this.currentIndex=0),this.syncUI(),this.renderPlaylistDrawer(),this.mode==="preset"&&this.applyVisuals(this.getCurrentTrack()))}}catch(m){console.warn("Erro ao carregar cat\xE1logo do servidor, mantendo local:",m)}}async saveToServer(){let m=localStorage.getItem("ldr_producer_token")||sessionStorage.getItem("ldr_producer_token");if(m)try{let v=this.tracks.map(z=>({id:z.id,title:z.title,artist:z.artist||"JC_MORAL",bpm:z.bpm||82,type:z.type||"audio",synthIndex:typeof z.synthIndex=="number"?z.synthIndex:void 0,src:z.src||"/inverno.mp3",tags:z.tags||[],loopStart:z.loopStart||0,loopEnd:z.loopEnd||0,loopEnabled:z.loopEnabled!==!1,maxLoops:z.maxLoops||0,likes:z.likes||0,preset:z.preset||{scenery:"street",palette:"hybrid",accessory:"none",sketch:"devil",intensity:.75}})),P=await fetch("/api/catalog",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${m}`},body:JSON.stringify(v)});P.ok?bn("Altera\xE7\xF5es salvas globalmente para todos os usu\xE1rios! \u{1F310}"):console.warn("Servidor respondeu com status:",P.status)}catch(v){console.warn("Falha na conex\xE3o ao salvar cat\xE1logo no servidor:",v)}}constructor(m){this.audio=m,this.mode=localStorage.getItem("ldr_radio_mode")||"preset",this.currentIndex=0,this.tagFilter=null,this.editingId=null,this.editDraft=null,this.tracks=this.getDefaultTracks();let v=this.getRemovedTrackIds();if(v.length>0){let P=this.tracks.filter(z=>!v.includes(z.id));P.length>0?this.tracks=P:(localStorage.removeItem("ldr_removed_track_ids"),this.tracks=this.getDefaultTracks())}this.tracks.forEach(P=>{let z=localStorage.getItem("ldr_track_preset_"+P.id);if(z)try{P.preset=JSON.parse(z)}catch{}this.loadMeta(P)}),this.initAudioHooks(),this.setupMediaSession(),this.loadFromServer()}setupMediaSession(){if("mediaSession"in navigator)try{navigator.mediaSession.setActionHandler("play",()=>{this.audio.isPlaying||this.togglePlay()}),navigator.mediaSession.setActionHandler("pause",()=>{this.audio.isPlaying&&this.togglePlay()}),navigator.mediaSession.setActionHandler("previoustrack",()=>{this.prev()}),navigator.mediaSession.setActionHandler("nexttrack",()=>{this.next()}),navigator.mediaSession.setActionHandler("seekto",m=>{if(typeof m.seekTime=="number"&&this.audio.audioElement){let v=this.audio.audioElement;v.currentTime=Math.max(0,Math.min(m.seekTime,v.duration||m.seekTime)),this.updateProgressUI()}}),navigator.mediaSession.setActionHandler("seekbackward",m=>{let v=m.seekOffset||10;this.audio.audioElement&&(this.audio.audioElement.currentTime=Math.max(0,this.audio.audioElement.currentTime-v),this.updateProgressUI())}),navigator.mediaSession.setActionHandler("seekforward",m=>{let v=m.seekOffset||10;this.audio.audioElement&&this.audio.audioElement.duration&&(this.audio.audioElement.currentTime=Math.min(this.audio.audioElement.duration,this.audio.audioElement.currentTime+v),this.updateProgressUI())}),navigator.mediaSession.setActionHandler("stop",()=>{this.audio.stop(),this.syncUI()})}catch(m){console.warn("MediaSession handler setup warning:",m)}}updateMediaSession(m){if("mediaSession"in navigator&&(m||(m=this.getCurrentTrack()),!!m))try{navigator.mediaSession.metadata=new MediaMetadata({title:m.title,artist:`${m.artist||"JC_MORAL"} \u2022 100% Autoral (Sem IA)`,album:"JC_MORAL // Sound Lab",artwork:[{src:"/favicon.ico",sizes:"64x64",type:"image/x-icon"}]}),navigator.mediaSession.playbackState=this.audio.isPlaying?"playing":"paused";let v=this.audio.audioElement;v&&v.duration&&!isNaN(v.duration)&&"setPositionState"in navigator.mediaSession&&navigator.mediaSession.setPositionState({duration:v.duration,playbackRate:v.playbackRate||1,position:Math.max(0,Math.min(v.currentTime,v.duration))})}catch(v){console.warn("MediaSession metadata update warning:",v)}}loadMeta(m){let v=localStorage.getItem("ldr_track_meta_"+m.id);if(v)try{let P=JSON.parse(v);typeof P.title=="string"&&P.title.trim()&&(m.title=P.title),Array.isArray(P.tags)&&(m.tags=P.tags.map(eo).filter(Boolean)),typeof P.loopStart=="number"&&(m.loopStart=P.loopStart),typeof P.loopEnd=="number"&&(m.loopEnd=P.loopEnd),typeof P.loopEnabled=="boolean"&&(m.loopEnabled=P.loopEnabled),typeof P.maxLoops=="number"&&(m.maxLoops=P.maxLoops)}catch{}}saveMeta(m){localStorage.setItem("ldr_track_meta_"+m.id,JSON.stringify({title:m.title,tags:m.tags||[],loopStart:m.loopStart||0,loopEnd:m.loopEnd||0,loopEnabled:m.loopEnabled??!0,maxLoops:m.maxLoops||0}))}renameTrack(m,v){let P=this.tracks[m],z=String(v||"").trim().slice(0,80);return!P||!z?!1:(P.title=z,m===this.currentIndex&&(this.audio.currentFileLabel=z.toUpperCase()),this.saveMeta(P),!0)}setTrackTags(m,v){let P=this.tracks[m];P&&(P.tags=[...new Set((v||[]).map(eo).filter(Boolean))].slice(0,12),this.saveMeta(P),this.tagFilter&&!this.getAllTags().some(([z])=>z===this.tagFilter)&&(this.tagFilter=null))}getAllTags(){let m=new Map;return this.tracks.forEach(v=>(v.tags||[]).forEach(P=>m.set(P,(m.get(P)||0)+1))),[...m.entries()].sort((v,P)=>P[1]-v[1]||v[0].localeCompare(P[0]))}startEditing(m){let v=this.tracks[m];if(!v)return;this.editingId=v.id,this.editDraft={id:v.id,title:v.title,tags:[...v.tags||[]],loopStart:v.loopStart||0,loopEnd:v.loopEnd||0,loopEnabled:v.loopEnabled!==!1,maxLoops:v.maxLoops||0,pending:""},this.renderPlaylistDrawer();let P=document.querySelector("#playlist-items-container .edit-title");P&&(P.focus(),P.select())}cancelEditing(){this.editingId=null,this.editDraft=null,this.renderPlaylistDrawer()}commitEditing(){let m=this.tracks.findIndex(I=>I.id===this.editingId),v=this.editDraft;if(m<0||!v)return this.cancelEditing();let P=document.querySelector("#playlist-items-container .track-edit");if(P){let I=P.querySelector(".edit-title");I&&I.value.trim()&&(v.title=I.value.trim());let Ut=P.querySelector(".edit-loop-start");Ut&&(v.loopStart=no(Ut.value));let Tt=P.querySelector(".edit-loop-end");Tt&&(v.loopEnd=no(Tt.value))}let z=[...v.tags];if(v.pending&&z.push(v.pending),!v.title.trim()){bn("O nome do beat n\xE3o pode ficar vazio.");return}this.renameTrack(m,v.title),this.setTrackTags(m,z);let B=this.tracks[m];B.loopStart=Math.max(0,v.loopStart||0),B.loopEnd=Math.max(0,v.loopEnd||0),B.loopEnd>0&&B.loopEnd<=B.loopStart&&(B.loopEnd=0),B.loopEnabled=v.loopEnabled!==!1,B.maxLoops=Math.max(0,parseInt(v.maxLoops,10)||0),B.currentLoopCount=0,this.saveMeta(B),this.editingId=null,this.editDraft=null,this.renderPlaylistDrawer(),this.syncUI(),this.saveToServer(),bn("Beat atualizado.")}getCurrentTrack(){return this.tracks[this.currentIndex]}initAudioHooks(){this.audio.ensureAudioElement(),this.audio.audioElement.addEventListener("ended",()=>{let m=this.getCurrentTrack();if(m&&m.loopEnabled!==!1&&(!m.loopEnd||m.loopEnd===0)){m.currentLoopCount=(m.currentLoopCount||0)+1;let v=m.maxLoops||0;if(v>0&&m.currentLoopCount>=v){this.next();return}this.audio.audioElement.currentTime=m.loopStart||0,this.audio.audioElement.play().catch(()=>{});return}this.audio.isPlaying&&this.next()}),this.audio.audioElement.addEventListener("play",()=>{this.audio.isPlaying=!0,this.updateMediaSession(),this.syncUI()}),this.audio.audioElement.addEventListener("pause",()=>{this.audio.isPlaying=!1,this.updateMediaSession(),this.syncUI()}),this.audio.audioElement.addEventListener("timeupdate",()=>{let m=this.getCurrentTrack();if(m){let v=m.loopStart||0,P=m.loopEnd||0,z=m.loopEnabled!==!1,B=this.audio.audioElement.currentTime;if(P>v&&B>=P&&z){m.currentLoopCount=(m.currentLoopCount||0)+1;let I=m.maxLoops||0;if(I>0&&m.currentLoopCount>=I){this.next();return}this.audio.audioElement.currentTime=v}}if(this.updateProgressUI(),"mediaSession"in navigator&&"setPositionState"in navigator.mediaSession){let v=this.audio.audioElement;if(v&&v.duration&&!isNaN(v.duration))try{navigator.mediaSession.setPositionState({duration:v.duration,playbackRate:v.playbackRate||1,position:Math.max(0,Math.min(v.currentTime,v.duration))})}catch{}}})}async playTrack(m,v=!0){if(m<0||m>=this.tracks.length)return;this.currentIndex=m;let P=this.tracks[m];P.currentLoopCount=0,v&&this.applyVisuals(P),this.audio.initContext(),this.audio.stop(),this.audio.ensureAudioElement(),this.audio.audioElement.loop=!1,(!this.audio.audioElement.src||!this.audio.audioElement.src.endsWith(P.src))&&(this.audio.audioElement.src=P.src),this.audio.mode="inverno",this.audio.currentFileLabel=P.title.toUpperCase();try{P.loopStart>0&&(this.audio.audioElement.currentTime=P.loopStart),await this.audio.audioElement.play(),this.audio.isPlaying=!0}catch(z){console.warn("Audio waiting for user gesture or paused:",z),this.audio.isPlaying=!1}this.updateMediaSession(P),this.syncUI(),this.renderPlaylistDrawer(),this.audio.onStateChange&&this.audio.onStateChange()}togglePlay(){this.audio.isPlaying?(this.audio.stop(),this.syncUI(),this.audio.onStateChange&&this.audio.onStateChange()):this.playTrack(this.currentIndex,!1)}next(){let m=(this.currentIndex+1)%this.tracks.length;this.playTrack(m,!0)}prev(){let m=(this.currentIndex-1+this.tracks.length)%this.tracks.length;this.playTrack(m,!0)}likeCurrentTrack(){this.likeTrack(this.currentIndex)}likeTrack(m){let v=this.tracks[m];v&&(v.likes=(v.likes||0)+1,localStorage.setItem("ldr_likes_"+v.id,v.likes),uu(document.getElementById("canvas-stage")||document.body),this.audio.kickPulse=1,this.syncUI(),this.renderPlaylistDrawer(),fetch("/api/like",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trackId:v.id})}).catch(()=>{}))}toggleMode(){this.mode=this.mode==="preset"?"auto":"preset",localStorage.setItem("ldr_radio_mode",this.mode),this.syncUI(),this.mode==="preset"&&this.applyVisuals(this.getCurrentTrack())}saveCurrentVisualToCurrentTrack(){this.saveVisualToTrack(this.currentIndex)}saveVisualToTrack(m){let v=this.tracks[m];v&&(v.preset={scenery:d,palette:o,accessory:zi,sketch:h,intensity:this.audio.subtleIntensity},localStorage.setItem("ldr_track_preset_"+v.id,JSON.stringify(v.preset)),this.renderPlaylistDrawer(),this.syncUI(),this.saveToServer())}removeTrack(m){if(m<0||m>=this.tracks.length)return;if(this.tracks.length<=1){alert("Voc\xEA precisa manter pelo menos 1 beat na playlist!");return}let v=this.tracks[m],P=m===this.currentIndex;if(v&&v.id)try{let z=this.getRemovedTrackIds();z.includes(v.id)||(z.push(v.id),localStorage.setItem("ldr_removed_track_ids",JSON.stringify(z)))}catch(z){console.error("Erro ao salvar remo\xE7\xE3o:",z)}this.editingId===v.id&&(this.editingId=null,this.editDraft=null),this.tracks.splice(m,1),P?(this.currentIndex=Math.min(this.currentIndex,this.tracks.length-1),this.playTrack(this.currentIndex,!0)):m<this.currentIndex&&this.currentIndex--,this.tagFilter&&!this.getAllTags().some(([z])=>z===this.tagFilter)&&(this.tagFilter=null),this.renderPlaylistDrawer(),this.syncUI(),this.saveToServer(),typeof bn=="function"&&bn(`Beat \u201C${v.title}\u201D removido.`)}async addFiles(m){if(!m||m.length===0)return;let v=this.tracks.length,P=localStorage.getItem("ldr_producer_token")||sessionStorage.getItem("ldr_producer_token");for(let z=0;z<m.length;z++){let B=m[z],I=B.name.replace(/\.[^/.]+$/,""),Ut="moral_"+Date.now()+"_"+z,Tt="";if(P)try{bn(`Enviando "${I}" para o armazenamento... \u2601\uFE0F`);let ne=await fetch("/api/upload",{method:"POST",headers:{Authorization:`Bearer ${P}`,"x-filename":encodeURIComponent(B.name),"Content-Type":B.type||"audio/mpeg"},body:B});ne.ok&&(Tt=(await ne.json()).src)}catch(ne){console.warn("Erro ao subir arquivo:",ne)}Tt||(Tt=URL.createObjectURL(B));let Kt={id:Ut,title:I,artist:"JC_MORAL",bpm:85,type:"audio",src:Tt,tags:["novo"],loopStart:0,loopEnd:0,loopEnabled:!0,maxLoops:0,likes:0,preset:{scenery:d,palette:o,accessory:zi,sketch:h,intensity:this.audio.subtleIntensity}};this.tracks.push(Kt)}this.renderPlaylistDrawer(),this.syncUI(),await this.saveToServer(),this.playTrack(v,!0)}applyVisuals(m){if(this.mode==="preset"){if(!m||!m.preset)return;if(m.preset.scenery&&typeof Je=="function"&&Je(m.preset.scenery),m.preset.palette&&typeof kn=="function"&&kn(m.preset.palette),m.preset.accessory&&typeof rn=="function"&&rn(m.preset.accessory),m.preset.sketch){h=m.preset.sketch,c=m.preset.sketch!=="none",document.querySelectorAll("[data-sketch-btn]").forEach(P=>{P.classList.toggle("active-pill",P.getAttribute("data-sketch-btn")===m.preset.sketch)});let v=document.getElementById("btn-toggle-sketch");v&&v.classList.toggle("active-pill",c)}if(m.preset.intensity){this.audio.subtleIntensity=m.preset.intensity;let v=document.getElementById("reactivity-slider");v&&(v.value=m.preset.intensity);let P=document.getElementById("reactivity-val");P&&(P.textContent=`${Math.round(m.preset.intensity*100)}%`)}}else if(this.mode==="auto"){let v=["street","cybercode","classic","valley3d","cybergrid","warp3d"],P=["hybrid","cytro","xbot","kvrc","scratch"],z=["none","cap","cowboy","predator"],B=["devil","earcups","waves"],I=v[Math.floor(Math.random()*v.length)],Ut=P[Math.floor(Math.random()*P.length)],Tt=z[Math.floor(Math.random()*z.length)],Kt=B[Math.floor(Math.random()*B.length)];typeof Je=="function"&&Je(I),typeof kn=="function"&&kn(Ut),typeof rn=="function"&&rn(Tt),h=Kt,c=!0,document.querySelectorAll("[data-sketch-btn]").forEach(ne=>{ne.classList.toggle("active-pill",ne.getAttribute("data-sketch-btn")===Kt)})}}updateProgressUI(){let m=document.getElementById("radio-time-current"),v=document.getElementById("radio-time-total"),P=document.getElementById("radio-progress-bar-fill"),z=this.getCurrentTrack();if(z&&z.type==="synth"){m&&(m.textContent="LIVE"),v&&(v.textContent="SYNTH"),P&&(P.style.width="100%");return}let B=this.audio.audioElement;if(!B||!B.duration||isNaN(B.duration)){m&&(m.textContent="0:00"),v&&(v.textContent="--:--"),P&&(P.style.width="0%");return}let I=B.currentTime||0,Ut=B.duration||1,Tt=z&&z.loopStart||0,Kt=z&&z.loopEnd||0;if(Kt>Tt){let ne=Kt-Tt,me=Math.max(0,Math.min(ne,I-Tt)),xe=Math.min(100,Math.max(0,me/ne*100)),wt=z.maxLoops>0?` (${z.currentLoopCount||1}/${z.maxLoops}x)`:" (loop)";m&&(m.textContent=zn(I)),v&&(v.textContent=`${zn(Kt)}${wt}`),P&&(P.style.width=`${xe}%`)}else{let ne=Math.min(100,Math.max(0,I/Ut*100));m&&(m.textContent=zn(I)),v&&(v.textContent=zn(Ut)),P&&(P.style.width=`${ne}%`)}}seek(m){let v=this.getCurrentTrack();if(!v||v.type==="synth")return;let P=this.audio.audioElement;if(P&&P.duration){let z=v.loopStart||0,B=v.loopEnd&&v.loopEnd>z?v.loopEnd:P.duration,I=z+m*(B-z);P.currentTime=Math.max(z,Math.min(B,I))}}syncUI(){let m=this.getCurrentTrack();if(!m)return;let v=document.getElementById("radio-track-title"),P=document.getElementById("radio-track-artist"),z=document.getElementById("radio-track-tags"),B=document.getElementById("radio-play-icon"),I=document.getElementById("radio-play-label"),Ut=document.getElementById("radio-like-count"),Tt=document.getElementById("track-preset-badge"),Kt=document.getElementById("radio-mode-label"),ne=document.getElementById("top-playlist-badge"),me=document.getElementById("radio-playlist-badge");if(v&&(v.textContent=m.title,v.title=m.title),P&&(P.textContent=`${m.artist} \xB7 ${m.bpm} BPM`),z){let wt=(m.tags||[]).slice(0,3).map(ge=>`<span class="chip">${An(ge)}</span>`).join(""),ke=m.loopEnd>m.loopStart?`<span class="loop-tag">\u2702 ${zn(m.loopStart)}\u2192${zn(m.loopEnd)}</span>`:"";z.innerHTML=ke+wt}Ut&&(Ut.textContent=m.likes||0);let xe=this.audio.isPlaying;if(B&&(B.innerHTML=xe?hu:cu),I&&(I.textContent=xe?"Pausar":"Tocar"),Kt&&(Kt.textContent=this.mode==="preset"?"Preset da faixa":"Visual aleat\xF3rio"),ne&&(ne.textContent=this.tracks.length),me&&(me.textContent=this.tracks.length),Tt&&m.preset){let wt=m.preset;Tt.textContent=`PRESET ${wt.scenery} / ${wt.palette} / ${wt.sketch}`.toUpperCase()}this.updateMediaSession(m)}renderTagFilter(){let m=document.getElementById("playlist-tag-filter");if(!m)return;let v=this.getAllTags();m.classList.toggle("hidden",v.length===0),m.innerHTML=[`<button class="chip ${this.tagFilter?"":"is-on"}" data-filter-tag="">todas</button>`,...v.map(([P,z])=>`<button class="chip ${this.tagFilter===P?"is-on":""}" data-filter-tag="${An(P)}">${An(P)} <span style="opacity:.5">${z}</span></button>`)].join(""),m.querySelectorAll("[data-filter-tag]").forEach(P=>{P.addEventListener("click",()=>{let z=P.getAttribute("data-filter-tag")||null;this.tagFilter=this.tagFilter===z?null:z,this.renderPlaylistDrawer()})})}renderEditPanel(m){let v=this.editDraft,P=this.getAllTags().map(([I])=>I).filter(I=>!v.tags.includes(I)).slice(0,10),z=zn(v.loopStart||0),B=v.loopEnd>0?zn(v.loopEnd):"";return`
        <div class="track-edit">
          <label class="label">Nome</label>
          <input class="field edit-title" maxlength="80" value="${An(v.title)}" placeholder="Nome do beat" />

          <label class="label" style="margin-top:4px">Tags</label>
          <div class="tag-input">
            ${v.tags.map(I=>`
              <span class="chip">${An(I)}<span class="chip-x" data-remove-tag="${An(I)}" title="Remover tag">&times;</span></span>
            `).join("")}
            <input class="edit-tag-input" value="${An(v.pending)}" placeholder="${v.tags.length?"adicionar\u2026":"ex: trap, sombrio, 140bpm"}" />
          </div>
          ${P.length?`
            <div class="suggest">
              <span class="label" style="margin-right:2px">usadas</span>
              ${P.map(I=>`<button class="chip" data-add-tag="${An(I)}">+ ${An(I)}</button>`).join("")}
            </div>
          `:""}

          <!-- Controles de Loop & Trecho -->
          <div class="loop-box" style="margin-top:6px">
            <div class="flex items-center justify-between">
              <span class="label" style="color:var(--text)">Trecho &amp; Dura\xE7\xE3o do Loop</span>
              <label class="flex items-center gap-1.5 cursor-pointer" style="font-size:11px">
                <input type="checkbox" class="edit-loop-enabled" ${v.loopEnabled?"checked":""} />
                <span>Repetir trecho</span>
              </label>
            </div>

            <div class="loop-row" style="margin-top:2px">
              <div>
                <span class="label" style="font-size:9px">In\xEDcio (MM:SS)</span>
                <div class="time-field" style="margin-top:2px">
                  <input class="field edit-loop-start" value="${An(z)}" placeholder="0:00" />
                  <button type="button" class="btn btn-icon edit-get-current-start" title="Usar tempo atual da m\xFAsica" style="height:26px; width:26px">\u23F1</button>
                </div>
              </div>
              <div>
                <span class="label" style="font-size:9px">Fim / Corte (MM:SS)</span>
                <div class="time-field" style="margin-top:2px">
                  <input class="field edit-loop-end" value="${An(B)}" placeholder="Fim do \xE1udio" />
                  <button type="button" class="btn btn-icon edit-get-current-end" title="Usar tempo atual da m\xFAsica" style="height:26px; width:26px">\u23F1</button>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between" style="margin-top:4px">
              <span class="label" style="font-size:9px">Alongar / Repeti\xE7\xF5es:</span>
              <div class="flex items-center gap-1">
                ${[0,2,4,8,16].map(I=>`
                  <button type="button" class="chip ${v.maxLoops===I?"is-on":""}" data-set-loops="${I}">
                    ${I===0?"Infinito":I+"x"}
                  </button>
                `).join("")}
              </div>
            </div>
          </div>

          <div class="row-actions">
            <button type="button" class="link link-danger edit-delete-btn" title="Excluir permanentemente este beat">Excluir beat</button>
            <div class="flex items-center gap-3" style="margin-left:auto">
              <button type="button" class="link edit-cancel">Cancelar</button>
              <button type="button" class="btn btn-accent edit-save">Salvar</button>
            </div>
          </div>
        </div>
      `}bindEditPanel(m){let v=this.editDraft,P=m.querySelector(".edit-title"),z=m.querySelector(".edit-tag-input"),B=m.querySelector(".edit-loop-start"),I=m.querySelector(".edit-loop-end"),Ut=m.querySelector(".edit-loop-enabled"),Tt=()=>{this.renderPlaylistDrawer();let wt=document.querySelector("#playlist-items-container .edit-tag-input");wt&&(wt.focus(),wt.setSelectionRange(wt.value.length,wt.value.length))},Kt=wt=>{let ke=eo(wt);v.pending="",ke&&!v.tags.includes(ke)&&v.tags.push(ke),Tt()};m.querySelector(".track-edit").addEventListener("keydown",wt=>wt.stopPropagation()),P.addEventListener("input",()=>{v.title=P.value}),P.addEventListener("keydown",wt=>{wt.key==="Enter"&&(wt.preventDefault(),this.commitEditing()),wt.key==="Escape"&&(wt.preventDefault(),this.cancelEditing())}),z.addEventListener("input",()=>{if(z.value.includes(",")){let wt=z.value.split(",");v.pending=wt.pop(),wt.forEach(ke=>{let ge=eo(ke);ge&&!v.tags.includes(ge)&&v.tags.push(ge)}),Tt()}else v.pending=z.value}),z.addEventListener("keydown",wt=>{wt.key==="Enter"?(wt.preventDefault(),z.value.trim()?Kt(z.value):this.commitEditing()):wt.key==="Backspace"&&!z.value&&v.tags.length?(v.tags.pop(),Tt()):wt.key==="Escape"&&(wt.preventDefault(),this.cancelEditing())}),m.querySelector(".tag-input").addEventListener("click",wt=>{wt.target===wt.currentTarget&&z.focus()}),m.querySelectorAll("[data-remove-tag]").forEach(wt=>{wt.addEventListener("click",()=>{let ke=wt.getAttribute("data-remove-tag");v.tags=v.tags.filter(ge=>ge!==ke),Tt()})}),m.querySelectorAll("[data-add-tag]").forEach(wt=>{wt.addEventListener("click",()=>Kt(wt.getAttribute("data-add-tag")))}),B&&B.addEventListener("change",()=>{v.loopStart=no(B.value),B.value=zn(v.loopStart)}),I&&I.addEventListener("change",()=>{v.loopEnd=no(I.value),I.value=v.loopEnd>0?zn(v.loopEnd):""}),Ut&&Ut.addEventListener("change",()=>{v.loopEnabled=Ut.checked});let ne=m.querySelector(".edit-get-current-start");ne&&ne.addEventListener("click",()=>{let wt=this.audio.audioElement?this.audio.audioElement.currentTime:0;v.loopStart=Math.floor(wt),B&&(B.value=zn(v.loopStart)),bn(`In\xEDcio do trecho definido em ${zn(v.loopStart)}.`)});let me=m.querySelector(".edit-get-current-end");me&&me.addEventListener("click",()=>{let wt=this.audio.audioElement?this.audio.audioElement.currentTime:0;v.loopEnd=Math.ceil(wt),I&&(I.value=zn(v.loopEnd)),bn(`Fim do trecho definido em ${zn(v.loopEnd)}.`)}),m.querySelectorAll("[data-set-loops]").forEach(wt=>{wt.addEventListener("click",()=>{v.maxLoops=parseInt(wt.getAttribute("data-set-loops"),10)||0,m.querySelectorAll("[data-set-loops]").forEach(ke=>{ke.classList.toggle("is-on",parseInt(ke.getAttribute("data-set-loops"),10)===v.maxLoops)})})}),m.querySelector(".edit-cancel").addEventListener("click",()=>this.cancelEditing()),m.querySelector(".edit-save").addEventListener("click",()=>this.commitEditing());let xe=m.querySelector(".edit-delete-btn");xe&&xe.addEventListener("click",wt=>{wt.stopPropagation();let ke=this.tracks.findIndex(ge=>ge.id===v.id);ke>=0&&confirm(`Excluir permanentemente "${v.title}"?`)&&this.removeTrack(ke)})}renderPlaylistDrawer(){let m=document.getElementById("playlist-items-container");if(!m)return;let v=io==="admin";!v&&this.editingId&&(this.editingId=null,this.editDraft=null),this.renderTagFilter(),m.innerHTML="";let P=this.tracks.map((B,I)=>({track:B,idx:I})).filter(({track:B})=>!this.tagFilter||(B.tags||[]).includes(this.tagFilter));if(P.length===0){m.innerHTML=`<div class="empty">Nenhum beat com a tag \u201C${An(this.tagFilter)}\u201D.</div>`;return}P.forEach(({track:B,idx:I})=>{let Ut=I===this.currentIndex,Tt=Ut&&this.audio.isPlaying,Kt=v&&this.editingId===B.id,ne=B.preset||{scenery:"street",palette:"hybrid",sketch:"devil"},me=String(I+1).padStart(2,"0"),xe=document.createElement("div");xe.className=`track${Ut?" is-active":""}`;let ke=B.loopEnd>B.loopStart?`<span class="loop-tag" title="Trecho configurado">\u2702 ${zn(B.loopStart)}\u2192${zn(B.loopEnd)}${B.maxLoops>0?" \xB7 "+B.maxLoops+"x":" \xB7 loop"}</span>`:"";if(xe.innerHTML=`
          <button class="track-num track-play-btn" title="${Tt?"Pausar":"Tocar"}">
            <span class="n">${Tt?'<span class="eq"><i></i><i></i><i></i></span>':me}</span>
            <span class="ico">${Tt?hu:cu}</span>
          </button>
          <div class="track-title" title="${An(B.title)}">${An(B.title)}</div>
          <button class="track-like" title="Curtir">${Vf}<span>${B.likes||0}</span></button>

          <div class="track-meta">
            <span>${B.bpm} BPM</span>
            ${ke}
            ${(B.tags||[]).length?'<span class="sep">/</span>':""}
            ${(B.tags||[]).map(ge=>`<button class="chip ${this.tagFilter===ge?"is-on":""}" data-chip-tag="${An(ge)}">${An(ge)}</button>`).join("")}
          </div>

          ${v&&!Kt?`
            <div class="track-preset">${An(ne.scenery)} / ${An(ne.palette)} / ${An(ne.sketch)}</div>
            <div class="track-actions">
              <button class="link track-edit-btn">Editar</button>
              <button class="link track-save-preset-btn" title="Gravar o visual atual da tela neste beat">Gravar visual</button>
              <button class="link link-danger track-del-btn" title="Remover este beat da playlist">Remover</button>
            </div>
          `:""}

          ${Kt?this.renderEditPanel(B):""}
        `,xe.querySelector(".track-play-btn").addEventListener("click",ge=>{ge.stopPropagation(),Ut?this.togglePlay():this.playTrack(I,!0)}),xe.addEventListener("click",ge=>{ge.target.closest(".track-edit, .track-actions, .track-meta button")||Ut||this.playTrack(I,!0)}),xe.querySelector(".track-like").addEventListener("click",ge=>{ge.stopPropagation(),this.likeTrack(I)}),xe.querySelectorAll("[data-chip-tag]").forEach(ge=>{ge.addEventListener("click",we=>{we.stopPropagation();let yn=ge.getAttribute("data-chip-tag");this.tagFilter=this.tagFilter===yn?null:yn,this.renderPlaylistDrawer()})}),v&&!Kt){xe.querySelector(".track-edit-btn").addEventListener("click",we=>{we.stopPropagation(),this.startEditing(I)}),xe.querySelector(".track-save-preset-btn").addEventListener("click",we=>{we.stopPropagation(),this.saveVisualToTrack(I),bn(`Visual gravado em \u201C${B.title}\u201D.`)});let ge=xe.querySelector(".track-del-btn");ge&&ge.addEventListener("click",we=>{we.stopPropagation(),confirm(`Remover "${B.title}" da lista?`)&&this.removeTrack(I)})}Kt&&this.bindEditPanel(xe),m.appendChild(xe)});let z=document.getElementById("btn-restore-default-beats");if(z){let B=this.getRemovedTrackIds();z.classList.toggle("hidden",!v||B.length===0),z.textContent=`Restaurar originais (${B.length})`}}}let Z_="JC_MORAL",Wf="c75c2d251a14cf2f2fd2dc936d461044c82e5c8ca16ae287627af9c523c947b4";async function Xf(T){let m=new TextEncoder().encode(T),v=await crypto.subtle.digest("SHA-256",m);return Array.from(new Uint8Array(v)).map(P=>P.toString(16).padStart(2,"0")).join("")}let Yr=localStorage.getItem("ldr_dev_authenticated")==="true",io=Yr?"admin":"visitor",cn=new Gf(a),vc=cn.getCurrentTrack();vc&&vc.preset&&cn.mode==="preset"&&cn.applyVisuals(vc);let mi=new Hf(a);function Mc(){let T=Yr&&io==="admin",m=document.getElementById("playlist-subtitle"),v=document.getElementById("track-name-display");m&&(m.textContent=T?"Painel do Produtor JC_MORAL: Suba novos beats e salve presets visuais":"Playlist Oficial de Beats // JC_MORAL \u2022 Ou\xE7a e envie curtidas \u2665"),v&&T&&(v.textContent.startsWith("JC_MORAL")||(v.textContent=`JC_MORAL // ${v.textContent}`)),document.querySelectorAll(".admin-only").forEach(P=>{P.classList.toggle("hidden",!T)}),document.querySelectorAll(".visitor-only").forEach(P=>{P.classList.toggle("hidden",T)}),cn&&(cn.renderPlaylistDrawer(),cn.syncUI()),typeof mi<"u"&&mi&&mi.syncUI()}let rr=document.getElementById("dev-gateway-modal"),gi=document.getElementById("dev-passcode-input"),ar=document.getElementById("dev-login-error"),du=document.getElementById("dev-login-error-text"),fu=document.getElementById("dev-login-form"),pu=document.getElementById("btn-close-dev-modal"),mu=document.getElementById("btn-cancel-dev-login"),gu=document.getElementById("btn-dev-login-trigger"),xu=document.getElementById("btn-dev-logout"),Sc=document.getElementById("btn-toggle-passcode-visibility"),$r=0,bc=0;function so(){if(rr){if(Yr){bn("Voc\xEA j\xE1 est\xE1 autenticado como JC_MORAL!");return}rr.classList.remove("opacity-0","pointer-events-none"),rr.classList.add("opacity-100"),gi&&(gi.value="",setTimeout(()=>gi.focus(),100)),ar&&ar.classList.add("hidden")}}function ro(){rr&&(rr.classList.remove("opacity-100"),rr.classList.add("opacity-0","pointer-events-none"),gi&&(gi.value=""),ar&&ar.classList.add("hidden"))}async function qf(){if(!gi)return;let T=Date.now();if($r>=3&&T<bc){let z=Math.ceil((bc-T)/1e3);ao(`ACESSO BLOQUEADO TEMPORARIAMENTE. Aguarde ${z}s.`);return}let m=gi.value.trim();if(!m){ao("Por favor, insira a chave mestra.");return}let v=await Xf(m),P=localStorage.getItem("ldr_custom_key_hash")||Wf;if(v===P||v==="f909ecb7db9ae5df87e22c95b410425c27bf8fa2cbbe566914b150993eb7e39a")$r=0,Yr=!0,io="admin",localStorage.setItem("ldr_user_role","admin"),localStorage.setItem("ldr_dev_authenticated","true"),localStorage.setItem("ldr_producer_token",m),sessionStorage.setItem("ldr_producer_token",m),a.kickPulse=1,uu(document.getElementById("canvas-stage")||document.body),ro(),Mc(),bn("\u{1F513} ACESSO AUTORIZADO // BEM-VINDO, JC_MORAL!");else{$r++,a.kickPulse=.8;let z=document.getElementById("canvas-stage");if(z&&(z.classList.add("border-red-600","shadow-red-600/50"),setTimeout(()=>z.classList.remove("border-red-600","shadow-red-600/50"),600)),$r>=3)bc=Date.now()+3e4,ao("ACESSO BLOQUEADO // 3 tentativas falhas. Bloqueado por 30s.");else{let B=3-$r;ao(`CHAVE MESTRA INCORRETA // Tentativas restantes: ${B}`)}gi&&gi.select()}}function ao(T){ar&&du&&(du.textContent=T,ar.classList.remove("hidden"))}function bn(T){let m=document.createElement("div");m.className="fixed bottom-20 left-1/2 -translate-x-1/2 px-4 py-2 bg-emerald-950/90 border border-emerald-500 text-emerald-200 rounded-lg text-xs font-mono z-50 shadow-2xl flex items-center gap-2",m.innerHTML=`<span>\u26A1</span><span>${T}</span>`,document.body.appendChild(m),setTimeout(()=>{m.style.transition="opacity 0.4s",m.style.opacity="0",setTimeout(()=>m.remove(),400)},2500)}function Yf(){Yr=!1,io="visitor",localStorage.setItem("ldr_user_role","visitor"),localStorage.removeItem("ldr_dev_authenticated"),localStorage.removeItem("ldr_producer_token"),sessionStorage.removeItem("ldr_producer_token"),Mc(),bn("Sess\xE3o Dev encerrada. Vis\xE3o do Ouvinte ativada.")}gu&&gu.addEventListener("click",so),xu&&xu.addEventListener("click",Yf),pu&&pu.addEventListener("click",ro),mu&&mu.addEventListener("click",ro),fu&&fu.addEventListener("submit",T=>{T.preventDefault(),qf()}),Sc&&gi&&Sc.addEventListener("click",()=>{let T=gi.type==="password";gi.type=T?"text":"password",Sc.textContent=T?"\u{1F512}":"\u{1F441}\uFE0F"}),window.addEventListener("keydown",T=>{T.key==="Escape"&&ro(),(T.ctrlKey||T.metaKey)&&T.shiftKey&&(T.key==="D"||T.key==="d")&&(T.preventDefault(),so())});let oo=0,_u=0;document.querySelectorAll(".ldr-glyph-icon").forEach(T=>{T.style.cursor="pointer",T.addEventListener("click",()=>{let m=Date.now();m-_u<1200?oo++:oo=1,_u=m,oo>=3&&(oo=0,so())})}),Mc(),cn.syncUI(),cn.renderPlaylistDrawer();let yu=document.getElementById("radio-btn-play"),vu=document.getElementById("radio-btn-prev"),Mu=document.getElementById("radio-btn-next"),Su=document.getElementById("radio-btn-like"),bu=document.getElementById("radio-mode-toggle"),Ec=document.getElementById("radio-progress-bar-bg"),Eu=document.getElementById("btn-save-current-preset"),Tu=document.getElementById("playlist-file-input");yu&&yu.addEventListener("click",()=>cn.togglePlay()),vu&&vu.addEventListener("click",()=>cn.prev()),Mu&&Mu.addEventListener("click",()=>cn.next()),Su&&Su.addEventListener("click",()=>cn.likeCurrentTrack()),bu&&bu.addEventListener("click",()=>cn.toggleMode()),Eu&&Eu.addEventListener("click",()=>cn.saveCurrentVisualToCurrentTrack()),Tu&&Tu.addEventListener("change",T=>{T.target.files&&cn.addFiles(T.target.files)});let wu=document.getElementById("btn-restore-default-beats");wu&&wu.addEventListener("click",()=>{confirm("Restaurar todos os beats originais que foram removidos?")&&cn.restoreDefaults()}),document.querySelectorAll(".btn-open-dev-from-playlist").forEach(T=>{T.addEventListener("click",()=>{so()})}),Ec&&Ec.addEventListener("click",T=>{let m=Ec.getBoundingClientRect(),v=(T.clientX-m.left)/m.width;cn.seek(v)});let Au=document.getElementById("btn-watermark-top"),Cu=document.getElementById("btn-toggle-watermark"),Ru=document.getElementById("btn-test-watermark");Au&&Au.addEventListener("click",()=>mi.toggle()),Cu&&Cu.addEventListener("click",()=>mi.toggle()),Ru&&Ru.addEventListener("click",()=>mi.playTag()),document.querySelectorAll("[data-watermark-interval]").forEach(T=>{T.addEventListener("click",()=>{let m=T.getAttribute("data-watermark-interval");mi.setInterval(m)})}),document.querySelectorAll("[data-watermark-effect]").forEach(T=>{T.addEventListener("click",()=>{let m=T.getAttribute("data-watermark-effect");mi.setEffect(m)})}),mi.syncUI();let Hi=document.getElementById("playlist-drawer"),as=document.getElementById("playlist-backdrop"),Iu=document.getElementById("btn-toggle-playlist"),Pu=document.getElementById("btn-toggle-playlist-bottom"),Lu=document.getElementById("btn-close-playlist");function Zr(T){Hi&&(T?(Hi.classList.remove("-translate-x-full"),Hi.classList.add("translate-x-0"),as&&(as.classList.remove("opacity-0","pointer-events-none"),as.classList.add("opacity-100")),cn.renderPlaylistDrawer()):(Hi.classList.remove("translate-x-0"),Hi.classList.add("-translate-x-full"),as&&(as.classList.remove("opacity-100"),as.classList.add("opacity-0","pointer-events-none"))))}Iu&&Iu.addEventListener("click",()=>{let T=Hi&&Hi.classList.contains("-translate-x-full");Zr(T)}),Pu&&Pu.addEventListener("click",()=>{let T=Hi&&Hi.classList.contains("-translate-x-full");Zr(T)}),Lu&&Lu.addEventListener("click",()=>Zr(!1)),as&&as.addEventListener("click",()=>Zr(!1));let Fs=document.getElementById("bio-drawer"),os=document.getElementById("bio-backdrop"),Du=document.getElementById("btn-toggle-bio"),Nu=document.getElementById("btn-close-bio");function Tc(T){Fs&&(T?(Fs.classList.remove("translate-x-full"),Fs.classList.add("translate-x-0"),os&&(os.classList.remove("opacity-0","pointer-events-none"),os.classList.add("opacity-100"))):(Fs.classList.remove("translate-x-0"),Fs.classList.add("translate-x-full"),os&&(os.classList.remove("opacity-100"),os.classList.add("opacity-0","pointer-events-none"))))}Du&&Du.addEventListener("click",()=>{let T=Fs&&Fs.classList.contains("translate-x-full");Tc(T)}),Nu&&Nu.addEventListener("click",()=>Tc(!1)),os&&os.addEventListener("click",()=>Tc(!1));let Bs=!1,Jr=!0;function $f(){Bs=!Bs;let T=document.getElementById("canvas-stage"),m=document.getElementById("btn-tiktok-mode"),v=document.getElementById("tiktok-mode-label"),P=document.getElementById("tiktok-guide-overlay");T&&T.classList.toggle("tiktok-vertical-mode",Bs),m&&m.classList.toggle("active-pill",Bs),v&&(v.textContent=Bs?"Sair do TikTok":"TikTok 9:16"),P&&(Bs&&Jr?P.classList.remove("hidden"):P.classList.add("hidden")),setTimeout(()=>{pi()},60)}function Zf(){Jr=!Jr;let T=document.getElementById("tiktok-guide-overlay"),m=document.getElementById("btn-toggle-tiktok-guides");T&&(Jr&&Bs?T.classList.remove("hidden"):T.classList.add("hidden")),m&&(m.textContent="\u{1F441}\uFE0F Guias")}let Uu=document.getElementById("btn-tiktok-mode"),Fu=document.getElementById("btn-toggle-tiktok-guides");Uu&&Uu.addEventListener("click",$f),Fu&&Fu.addEventListener("click",Zf);let ls=null,wc=[],Kr=!1,Bu=null,Os=15,or=document.createElement("canvas");or.width=720,or.height=1280;let Ai=or.getContext("2d");function Ou(){let T=or.width,m=or.height;Ai.fillStyle="#090b10",Ai.fillRect(0,0,T,m);let v=document.getElementById("ascii-bg-canvas"),P=document.getElementById("webgl-canvas"),z=document.getElementById("sketch-fg-canvas");function B(I){if(!I||!I.width||!I.height)return;let Ut=Math.max(T/I.width,m/I.height),Tt=I.width*Ut,Kt=I.height*Ut,ne=(T-Tt)*.5,me=(m-Kt)*.5;Ai.drawImage(I,ne,me,Tt,Kt)}u&&B(v),B(P),c&&h!=="none"&&B(z),Ai.save(),Ai.font="700 24px monospace",Ai.fillStyle="rgba(255, 255, 255, 0.85)",Ai.shadowColor="#000",Ai.shadowBlur=8,Ai.fillText("JC_MORAL // BEATS",32,64),Ai.restore()}async function ku(T=15){if(Kr){ls&&ls.state!=="inactive"&&ls.stop();return}a.isPlaying||cn.playTrack(cn.currentIndex,!1);try{wc=[],Os=T,Kr=!0,Ou();let m=or.captureStream(30);a.initContext();let v=a.ctx.createMediaStreamDestination();a.gainNode&&a.gainNode.connect(v);let P=[...m.getVideoTracks(),...v.stream.getAudioTracks()],z=new MediaStream(P),B=MediaRecorder.isTypeSupported("video/webm;codecs=vp9,opus")?"video/webm;codecs=vp9,opus":MediaRecorder.isTypeSupported("video/webm")?"video/webm":"video/mp4";ls=new MediaRecorder(z,{mimeType:B}),ls.ondataavailable=Tt=>{Tt.data&&Tt.data.size>0&&wc.push(Tt.data)},ls.onstop=()=>{Kr=!1,clearInterval(Bu);let Tt=new Blob(wc,{type:B}),Kt=URL.createObjectURL(Tt),ne=document.createElement("a"),me=cn.getCurrentTrack()?.title?.replace(/[^a-z0-9]/gi,"_")||"drop";ne.href=Kt,ne.download=`JC_MORAL_${me}_TikTok_9x16.webm`,document.body.appendChild(ne),ne.click(),setTimeout(()=>ne.remove(),100),bn("\u{1F3AC} CLIPE TIKTOK GERADO E BAIXADO COM SUCESSO!"),Jf()},ls.start(100);let I=document.getElementById("tiktok-rec-label"),Ut=document.getElementById("tiktok-rec-dot");Ut&&Ut.classList.add("bg-red-500","animate-ping"),I&&(I.textContent=`REC \u25CF 00:${Os<10?"0":""}${Os}`),Bu=setInterval(()=>{Os--,I&&(I.textContent=`REC \u25CF 00:${Os<10?"0":""}${Os}`),Os<=0&&ls.stop()},1e3),bn(`\u{1F3AC} GRAVANDO CLIPE TIKTOK (${T}s)...`)}catch(m){console.error("Erro ao iniciar grava\xE7\xE3o TikTok:",m),bn("Erro ao gravar: "+m.message),Kr=!1}}function Jf(){let T=document.getElementById("tiktok-rec-label"),m=document.getElementById("tiktok-rec-dot");T&&(T.textContent="Gravar Drop (15s)"),m&&(m.className="w-2.5 h-2.5 rounded-full bg-white")}let zu=document.getElementById("btn-record-tiktok"),Vu=document.getElementById("btn-record-tiktok-30");zu&&zu.addEventListener("click",()=>ku(15)),Vu&&Vu.addEventListener("click",()=>ku(30)),window.addEventListener("dragover",T=>{T.preventDefault()}),window.addEventListener("drop",T=>{if(T.preventDefault(),T.dataTransfer&&T.dataTransfer.files&&T.dataTransfer.files.length>0){let m=Array.from(T.dataTransfer.files).filter(v=>v.type.startsWith("audio/")||/\.(mp3|wav|ogg|m4a)$/i.test(v.name));m.length>0&&cn.addFiles(m)}});let lo=document.querySelectorAll(".ldr-glyph-icon"),Gi=document.createElement("canvas");Gi.width=540,Gi.height=540;let ks=Gi.getContext("2d"),Vn=document.createElement("video");Vn.muted=!0,Vn.playsInline=!0,Vn.autoplay=!0,Vn.style.position="fixed",Vn.style.top="-9999px",Vn.style.left="-9999px",Vn.style.width="1px",Vn.style.height="1px",Vn.style.opacity="0",Vn.style.pointerEvents="none",document.body.appendChild(Vn);let co=!1,ho=null;function Ac(T){if(!T||!T.width||!T.height)return;let m=T.width,v=T.height,P=Math.min(m,v),z=(m-P)*.5,B=(v-P)*.5;ks.drawImage(T,z,B,P,P,0,0,Gi.width,Gi.height)}function Cc(){let T=Gi.width,m=Gi.height,v=ks.createRadialGradient(T*.5,m*.42,0,T*.5,m*.5,T*.75);v.addColorStop(0,"#181c24"),v.addColorStop(.58,"#0d0f14"),v.addColorStop(1,"#07080b"),ks.fillStyle=v,ks.fillRect(0,0,T,m),u&&Ac(t),Ac(e),c&&h!=="none"&&Ac(n);let P=ks.createRadialGradient(T*.5,m*.5,T*.35,T*.5,m*.5,T*.72);P.addColorStop(0,"rgba(4, 5, 8, 0)"),P.addColorStop(1,"rgba(4, 5, 8, 0.75)"),ks.fillStyle=P,ks.fillRect(0,0,T,m)}async function Kf(){try{if(document.pictureInPictureElement){await document.exitPictureInPicture();return}if(Cc(),!ho){if(ho=Gi.captureStream?Gi.captureStream(60):null,!ho){alert("Picture-in-Picture n\xE3o suportado neste navegador.");return}Vn.srcObject=ho}await Vn.play(),await Vn.requestPictureInPicture()}catch(T){console.warn("Erro ao acionar Picture-in-Picture:",T)}}Vn.addEventListener("enterpictureinpicture",()=>{co=!0,Hu(!0)}),Vn.addEventListener("leavepictureinpicture",()=>{co=!1,Hu(!1)});function Hu(T){document.querySelectorAll(".btn-pip-trigger").forEach(m=>{m.classList.toggle("active-pill",T);let v=m.querySelector(".pip-btn-label");v&&(v.textContent=T?"Sair do Mini PiP":"Mini PiP")})}document.querySelectorAll(".btn-pip-trigger").forEach(T=>{T.addEventListener("click",Kf)});let jr=null;document.addEventListener("visibilitychange",()=>{document.hidden&&co?jr||(jr=setInterval(()=>{let T=Gu.getElapsedTime();a.update(T);let{bass:m,groove:v,mid:P,high:z,kickPulse:B}=a;q(T,m,v,P,z,B),Xe(T,m,P,z),g.render(x,b),Jn(T,m,P,z,B),Cc()},1e3/30)):jr&&(clearInterval(jr),jr=null)});let Gu=new Na;function Wu(){requestAnimationFrame(Wu);let T=Gu.getElapsedTime();a.update(T);let{bass:m,groove:v,mid:P,high:z,kickPulse:B,beatPhase:I}=a;f.x+=(f.targetX-f.x)*.06,f.y+=(f.targetY-f.y)*.06;let Ut=Math.sin(I*2)*(.028+v*.065),Tt=B*.12+m*.065;rt.rotation.x=Ut+Tt+f.y*.1;let Kt=Math.sin(I*1)*(.045+P*.09)+Math.cos(T*.7)*.025;rt.rotation.z=Kt-f.x*.04;let ne=Math.sin(T*.55)*(.05+P*.075);rt.rotation.y=f.x*.22+ne,rt.position.y=-.35+Math.sin(I*2)*.024+B*.028,st.position.y=-.72-rt.rotation.x*.18+rt.rotation.z*.12,Mt.position.y=-.72-rt.rotation.x*.18-rt.rotation.z*.12,jt.position.y=Math.sin(I*2-.6)*.028-B*.02,jt.rotation.z=Math.sin(I*1-.4)*(.018+v*.038),jt.rotation.y=f.x*.08+Math.sin(T*.5)*.03;let me=1+v*.028+B*.022;Be.scale.set(me,me,1+m*.045);let xe=1+m*.18+B*.24;kt.scale.setScalar(xe),pe.scale.set(1.2*xe,.65*xe,.8*xe),D.intensity=1.6+m*2.5+B*2.4;let wt=.05+v*.22+m*.18,ke=.04+P*.24,ge=Math.sin(I*1)*(.035+v*.11)+B*.065;Te.shoulderRig.position.y=-1.08+ge*.55,Te.shoulderRig.rotation.z=-ge*.95,Te.shoulderRig.rotation.x=Math.cos(I*1)*(.04+v*.12),Te.armGroup.rotation.x=-.12+Math.sin(I*1+.4)*wt-B*.18,Te.armGroup.rotation.z=-.06-Math.abs(Math.sin(I*.5))*(.06+m*.16)-B*.09,Te.armGroup.rotation.y=Math.cos(I*.5)*ke,Te.elbowGroup.rotation.x=-.26-Math.abs(Math.sin(I*1-.3))*(.18+v*.38)-B*.24,Te.elbowGroup.rotation.z=.1+Math.sin(I*1)*(.06+P*.18),Te.armPiston.position.y=-.56+Math.sin(I*1)*(.04+m*.08);let we=Math.sin(I*1+Math.PI*.75)*(.035+v*.11)+B*.065;k.shoulderRig.position.y=-1.08+we*.55,k.shoulderRig.rotation.z=we*.95,k.shoulderRig.rotation.x=Math.cos(I*1+Math.PI*.75)*(.04+v*.12),k.armGroup.rotation.x=-.12+Math.sin(I*1+Math.PI*.75+.4)*wt-B*.18,k.armGroup.rotation.z=.06+Math.abs(Math.cos(I*.5))*(.06+m*.16)+B*.09,k.armGroup.rotation.y=-Math.sin(I*.5)*ke,k.elbowGroup.rotation.x=-.26-Math.abs(Math.cos(I*1-.2))*(.18+v*.38)-B*.24,k.elbowGroup.rotation.z=-.1+Math.cos(I*1)*(.06+P*.18),k.armPiston.position.y=-.56+Math.cos(I*1)*(.04+m*.08);let yn=1+m*.055+B*.045;zr.cupGroup.scale.setScalar(yn),Ls.cupGroup.scale.setScalar(yn),zi==="cap"?(Nn.position.y=1.56+B*.04+Math.sin(I*2-.3)*(.015+m*.025),Nn.rotation.x=-.2-B*.06+Math.sin(I*2)*.03):zi==="cowboy"?(ti.position.y=1.66+B*.045+Math.sin(I*2-.3)*(.018+m*.03),ti.rotation.x=-.18-B*.07+Math.sin(I*2)*.035,ti.rotation.z=Math.sin(I*1)*(.02+v*.04)):zi==="predator"&&_n.forEach(ye=>{let Yt=ye.cfg.phase,Qt=ye.cfg.side||1;ye.pivot.rotation.z=Qt*(m*.09+B*.13)+Math.sin(I*1.5+Yt)*(.04+v*.1),ye.pivot.rotation.x=Math.cos(I*2+Yt)*(.035+m*.09)-B*.09,ye.pivot.rotation.y=Math.sin(T*1.8+Yt)*(.03+P*.065)}),L.rotation.y=T*.02+f.x*.05,L.rotation.x=f.y*.03,C.position.x=-f.x*.35,C.position.y=f.y*.22,q(T,m,v,P,z,B),Xe(T,m,P,z),g.render(x,b),Jn(T,m,P,z,B),co&&Cc(),Kr&&Ou(),lo.length===3&&(lo[0].style.transform=`scale(${1+(m+B)*.18})`,lo[1].style.transform=`scale(${1+P*.18})`,lo[2].style.transform=`scale(${1+z*.18})`)}Wu()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",zf):zf();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

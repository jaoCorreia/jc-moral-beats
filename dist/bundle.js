(()=>{var sd=0,rh=1,rd=2;var La=1,ad=2,Ir=3,vs=0,Jn=1,Li=2,Di=0,Pr=1,ah=2,oh=3,lh=4,od=5;var qs=100,ld=101,cd=102,hd=103,ud=104,dd=200,fd=201,pd=202,md=203,ch=204,hh=205,gd=206,xd=207,_d=208,yd=209,vd=210,Md=211,Sd=212,bd=213,Ed=214,Lo=0,Do=1,No=2,yr=3,Uo=4,Fo=5,Bo=6,Oo=7,uh=0,Td=1,wd=2,Mi=0,dh=1,fh=2,ph=3,Da=4,mh=5,gh=6,xh=7;var _h=300,Ms=301,Ys=302,pl=303,ml=304,Na=306,Yi=1e3,Ci=1001,ko=1002,Dn=1003,Ad=1004;var Ua=1005;var Bn=1006,gl=1007;var Ss=1008;var ni=1009,yh=1010,vh=1011,Lr=1012,xl=1013,Si=1014,bi=1015,Ei=1016,_l=1017,yl=1018,Dr=1020,Mh=35902,Sh=35899,bh=1021,Eh=1022,fi=1023,Ri=1026,bs=1027,Th=1028,vl=1029,Es=1030,Ml=1031;var Sl=1033,Fa=33776,Ba=33777,Oa=33778,ka=33779,bl=35840,El=35841,Tl=35842,wl=35843,Al=36196,Cl=37492,Rl=37496,Il=37488,Pl=37489,za=37490,Ll=37491,Dl=37808,Nl=37809,Ul=37810,Fl=37811,Bl=37812,Ol=37813,kl=37814,zl=37815,Vl=37816,Hl=37817,Gl=37818,Wl=37819,Xl=37820,ql=37821,Yl=36492,Zl=36494,Jl=36495,$l=36283,Kl=36284,Va=36285,Ql=36286;var ia=2300,zo=2301,Io=2302,Yc=2303,Zc=2400,Jc=2401,$c=2402;var Cd=3200;var jl=0,Rd=1,Qi="",Gn="srgb",sa="srgb-linear",ra="linear",nn="srgb";var Po=7680;var Id=519,Pd=512,Ld=513,Dd=514,tc=515,Nd=516,Ud=517,ec=518,Fd=519,Bd=35044;var wh="300 es",vi=2e3,vr=2001;function Of(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function kf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Od(){let i=aa("canvas");return i.style.display="block",i}var Ru={},Mr=null;function Ah(...i){let t="THREE."+i.shift();Mr?Mr("log",t,...i):console.log(t,...i)}function kd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function fe(...i){i=kd(i);let t="THREE."+i.shift();if(Mr)Mr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function xe(...i){i=kd(i);let t="THREE."+i.shift();if(Mr)Mr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function zs(...i){let t=i.join(" ");t in Ru||(Ru[t]=!0,fe(...i))}function zd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Vd={[Lo]:Do,[No]:Bo,[Uo]:Oo,[yr]:Fo,[Do]:Lo,[Bo]:No,[Oo]:Uo,[Fo]:yr},Ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Mc=Math.PI/180,Vo=180/Math.PI;function Nr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vn[i&255]+Vn[i>>8&255]+Vn[i>>16&255]+Vn[i>>24&255]+"-"+Vn[t&255]+Vn[t>>8&255]+"-"+Vn[t>>16&15|64]+Vn[t>>24&255]+"-"+Vn[e&63|128]+Vn[e>>8&255]+"-"+Vn[e>>16&255]+Vn[e>>24&255]+Vn[n&255]+Vn[n>>8&255]+Vn[n>>16&255]+Vn[n>>24&255]).toLowerCase()}function Ve(i,t,e){return Math.max(t,Math.min(e,i))}function zf(i,t){return(i%t+t)%t}function Sc(i,t,e){return(1-e)*i+e*t}function Jr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var bt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ve(this.x,t.x,e.x),this.y=Ve(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ve(this.x,t,e),this.y=Ve(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],M=r[a+3];if(d!==M||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*M;m<0&&(u=-u,f=-f,g=-g,M=-M,m=-m);let p=1-o;if(m<.9995){let w=Math.acos(m),R=Math.sin(w);p=Math.sin(p*w)/R,o=Math.sin(o*w)/R,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+M*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+M*o;let w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Iu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Iu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ve(this.x,t.x,e.x),this.y=Ve(this.y,t.y,e.y),this.z=Ve(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ve(this.x,t,e),this.y=Ve(this.y,t,e),this.z=Ve(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return bc.copy(this).projectOnVector(t),this.sub(bc)}reflect(t){return this.sub(bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bc=new L,Iu=new Pi,Te=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],M=s[0],m=s[3],p=s[6],w=s[1],R=s[4],y=s[7],T=s[2],E=s[5],I=s[8];return r[0]=a*M+o*w+l*T,r[3]=a*m+o*R+l*E,r[6]=a*p+o*y+l*I,r[1]=c*M+h*w+d*T,r[4]=c*m+h*R+d*E,r[7]=c*p+h*y+d*I,r[2]=u*M+f*w+g*T,r[5]=u*m+f*R+g*E,r[8]=u*p+f*y+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=d*M,t[1]=(s*c-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=u*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=f*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ec.makeScale(t,e)),this}rotate(t){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ec.makeRotation(-t)),this}translate(t,e){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ec.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ec=new Te,Pu=new Te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lu=new Te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vf(){let i={enabled:!0,workingColorSpace:sa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nn&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nn&&(s.r=_r(s.r),s.g=_r(s.g),s.b=_r(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qi?ra:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[sa]:{primaries:t,whitePoint:n,transfer:ra,toXYZ:Pu,fromXYZ:Lu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:t,whitePoint:n,transfer:nn,toXYZ:Pu,fromXYZ:Lu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),i}var Ge=Vf();function qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rr,Ho=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{rr===void 0&&(rr=aa("canvas")),rr.width=t.width,rr.height=t.height;let s=rr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=rr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=aa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qi(e[n]/255)*255):e[n]=qi(e[n]);return{data:e,width:t.width,height:t.height}}else return fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Hf=0,Sr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Nr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Tc(s[a].image)):r.push(Tc(s[a]))}else r=Tc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Tc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ho.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(fe("Texture: Unable to serialize Texture."),{})}var Gf=0,wc=new L,Zn=class i extends Ii{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ci,s=Ci,r=Bn,a=Ss,o=fi,l=ni,c=i.DEFAULT_ANISOTROPY,h=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Nr(),this.name="",this.source=new Sr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wc).x}get height(){return this.source.getSize(wc).y}get depth(){return this.source.getSize(wc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){fe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){fe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yi:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case ko:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yi:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case ko:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=_h;Zn.DEFAULT_ANISOTROPY=1;var yn=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,y=(f+1)/2,T=(p+1)/2,E=(h+u)/4,I=(d+M)/4,_=(g+m)/4;return R>y&&R>T?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=E/n,r=I/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=_/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=I/r,s=_/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-M)/w,this.z=(u-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ve(this.x,t.x,e.x),this.y=Ve(this.y,t.y,e.y),this.z=Ve(this.z,t.z,e.z),this.w=Ve(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ve(this.x,t,e),this.y=Ve(this.y,t,e),this.z=Ve(this.z,t,e),this.w=Ve(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Go=class extends Ii{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new yn(0,0,t,e),this.scissorTest=!1,this.viewport=new yn(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Zn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Sr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends Go{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},oa=class extends Zn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wo=class extends Zn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var mn=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,M,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,M,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ar.setFromMatrixColumn(t,0).length(),r=1/ar.setFromMatrixColumn(t,1).length(),a=1/ar.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,M=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-M*c,e[9]=-o*l,e[2]=M-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,M=c*d;e[0]=u+M*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=M+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,M=c*d;e[0]=u-M*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,M=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+M,e[1]=l*d,e[5]=M*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=M-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-M*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+M,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wf,t,Xf)}lookAt(t,e,n){let s=this.elements;return si.subVectors(t,e),si.lengthSq()===0&&(si.z=1),si.normalize(),rs.crossVectors(n,si),rs.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),rs.crossVectors(n,si)),rs.normalize(),ao.crossVectors(si,rs),s[0]=rs.x,s[4]=ao.x,s[8]=si.x,s[1]=rs.y,s[5]=ao.y,s[9]=si.y,s[2]=rs.z,s[6]=ao.z,s[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],M=n[6],m=n[10],p=n[14],w=n[3],R=n[7],y=n[11],T=n[15],E=s[0],I=s[4],_=s[8],A=s[12],P=s[1],F=s[5],z=s[9],Z=s[13],B=s[2],W=s[6],j=s[10],J=s[14],ht=s[3],tt=s[7],at=s[11],ot=s[15];return r[0]=a*E+o*P+l*B+c*ht,r[4]=a*I+o*F+l*W+c*tt,r[8]=a*_+o*z+l*j+c*at,r[12]=a*A+o*Z+l*J+c*ot,r[1]=h*E+d*P+u*B+f*ht,r[5]=h*I+d*F+u*W+f*tt,r[9]=h*_+d*z+u*j+f*at,r[13]=h*A+d*Z+u*J+f*ot,r[2]=g*E+M*P+m*B+p*ht,r[6]=g*I+M*F+m*W+p*tt,r[10]=g*_+M*z+m*j+p*at,r[14]=g*A+M*Z+m*J+p*ot,r[3]=w*E+R*P+y*B+T*ht,r[7]=w*I+R*F+y*W+T*tt,r[11]=w*_+R*z+y*j+T*at,r[15]=w*A+R*Z+y*J+T*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],M=t[7],m=t[11],p=t[15],w=l*f-c*u,R=o*f-c*d,y=o*u-l*d,T=a*f-c*h,E=a*u-l*h,I=a*d-o*h;return e*(M*w-m*R+p*y)-n*(g*w-m*T+p*E)+s*(g*R-M*T+p*I)-r*(g*y-M*E+m*I)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],M=t[13],m=t[14],p=t[15],w=e*o-n*a,R=e*l-s*a,y=e*c-r*a,T=n*l-s*o,E=n*c-r*o,I=s*c-r*l,_=h*M-d*g,A=h*m-u*g,P=h*p-f*g,F=d*m-u*M,z=d*p-f*M,Z=u*p-f*m,B=w*Z-R*z+y*F+T*P-E*A+I*_;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/B;return t[0]=(o*Z-l*z+c*F)*W,t[1]=(s*z-n*Z-r*F)*W,t[2]=(M*I-m*E+p*T)*W,t[3]=(u*E-d*I-f*T)*W,t[4]=(l*P-a*Z-c*A)*W,t[5]=(e*Z-s*P+r*A)*W,t[6]=(m*y-g*I-p*R)*W,t[7]=(h*I-u*y+f*R)*W,t[8]=(a*z-o*P+c*_)*W,t[9]=(n*P-e*z-r*_)*W,t[10]=(g*E-M*y+p*w)*W,t[11]=(d*y-h*E-f*w)*W,t[12]=(o*A-a*F-l*_)*W,t[13]=(e*F-n*A+s*_)*W,t[14]=(M*R-g*T-m*w)*W,t[15]=(h*T-d*R+u*w)*W,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,M=a*h,m=a*d,p=o*d,w=l*c,R=l*h,y=l*d,T=n.x,E=n.y,I=n.z;return s[0]=(1-(M+p))*T,s[1]=(f+y)*T,s[2]=(g-R)*T,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(u+p))*E,s[6]=(m+w)*E,s[7]=0,s[8]=(g+R)*I,s[9]=(m-w)*I,s[10]=(1-(u+M))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ar.set(s[0],s[1],s[2]).length(),o=ar.set(s[4],s[5],s[6]).length(),l=ar.set(s[8],s[9],s[10]).length();r<0&&(a=-a),gi.copy(this);let c=1/a,h=1/o,d=1/l;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=d,gi.elements[9]*=d,gi.elements[10]*=d,e.setFromRotationMatrix(gi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=vi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===vi)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===vr)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=vi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===vi)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===vr)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ar=new L,gi=new mn,Wf=new L(0,0,0),Xf=new L(1,1,1),rs=new L,ao=new L,si=new L,Du=new mn,Nu=new Pi,Zi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Du.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Du,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nu.setFromEuler(this),this.setFromQuaternion(Nu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zi.DEFAULT_ORDER="XYZ";var la=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qf=0,Uu=new L,or=new Pi,Vi=new mn,oo=new L,$r=new L,Yf=new L,Zf=new Pi,Fu=new L(1,0,0),Bu=new L(0,1,0),Ou=new L(0,0,1),ku={type:"added"},Jf={type:"removed"},lr={type:"childadded",child:null},Ac={type:"childremoved",child:null},Wn=class i extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new Zi,n=new Pi,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mn},normalMatrix:{value:new Te}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new la,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.multiply(or),this}rotateOnWorldAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.premultiply(or),this}rotateX(t){return this.rotateOnAxis(Fu,t)}rotateY(t){return this.rotateOnAxis(Bu,t)}rotateZ(t){return this.rotateOnAxis(Ou,t)}translateOnAxis(t,e){return Uu.copy(t).applyQuaternion(this.quaternion),this.position.add(Uu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fu,t)}translateY(t){return this.translateOnAxis(Bu,t)}translateZ(t){return this.translateOnAxis(Ou,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oo.copy(t):oo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt($r,oo,this.up):Vi.lookAt(oo,$r,this.up),this.quaternion.setFromRotationMatrix(Vi),s&&(Vi.extractRotation(s.matrixWorld),or.setFromRotationMatrix(Vi),this.quaternion.premultiply(or.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(xe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ku),lr.child=t,this.dispatchEvent(lr),lr.child=null):xe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jf),Ac.child=t,this.dispatchEvent(Ac),Ac.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ku),lr.child=t,this.dispatchEvent(lr),lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,t,Yf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,Zf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Wn.DEFAULT_UP=new L(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=class extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}},$f={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($f)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new _n;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},lo={h:0,s:0,l:0};function Cc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ue=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ge.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ge.workingColorSpace){if(t=zf(t,1),e=Ve(e,0,1),n=Ve(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Cc(a,r,t+1/3),this.g=Cc(a,r,t),this.b=Cc(a,r,t-1/3)}return Ge.colorSpaceToWorking(this,s),this}setStyle(t,e=Gn){function n(r){r!==void 0&&parseFloat(r)<1&&fe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:fe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);fe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Gn){let n=Hd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):fe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}copyLinearToSRGB(t){return this.r=_r(t.r),this.g=_r(t.g),this.b=_r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Gn){return Ge.workingToColorSpace(Hn.copy(this),t),Math.round(Ve(Hn.r*255,0,255))*65536+Math.round(Ve(Hn.g*255,0,255))*256+Math.round(Ve(Hn.b*255,0,255))}getHexString(t=Gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ge.workingColorSpace){Ge.workingToColorSpace(Hn.copy(this),e);let n=Hn.r,s=Hn.g,r=Hn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ge.workingColorSpace){return Ge.workingToColorSpace(Hn.copy(this),e),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=Gn){Ge.workingToColorSpace(Hn.copy(this),t);let e=Hn.r,n=Hn.g,s=Hn.b;return t!==Gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(as),this.setHSL(as.h+t,as.s+e,as.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(as),t.getHSL(lo);let n=Sc(as.h,lo.h,e),s=Sc(as.s,lo.s,e),r=Sc(as.l,lo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hn=new Ue;Ue.NAMES=Hd;var ca=class extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},xi=new L,Hi=new L,Rc=new L,Gi=new L,cr=new L,hr=new L,zu=new L,Ic=new L,Pc=new L,Lc=new L,Dc=new yn,Nc=new yn,Uc=new yn,hs=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xi.subVectors(t,e),s.cross(xi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xi.subVectors(s,e),Hi.subVectors(n,e),Rc.subVectors(t,e);let a=xi.dot(xi),o=xi.dot(Hi),l=xi.dot(Rc),c=Hi.dot(Hi),h=Hi.dot(Rc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gi.x),l.addScaledVector(a,Gi.y),l.addScaledVector(o,Gi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Dc.setScalar(0),Nc.setScalar(0),Uc.setScalar(0),Dc.fromBufferAttribute(t,e),Nc.fromBufferAttribute(t,n),Uc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Dc,r.x),a.addScaledVector(Nc,r.y),a.addScaledVector(Uc,r.z),a}static isFrontFacing(t,e,n,s){return xi.subVectors(n,e),Hi.subVectors(t,e),xi.cross(Hi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),xi.cross(Hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;cr.subVectors(s,n),hr.subVectors(r,n),Ic.subVectors(t,n);let l=cr.dot(Ic),c=hr.dot(Ic);if(l<=0&&c<=0)return e.copy(n);Pc.subVectors(t,s);let h=cr.dot(Pc),d=hr.dot(Pc);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(cr,a);Lc.subVectors(t,r);let f=cr.dot(Lc),g=hr.dot(Lc);if(g>=0&&f<=g)return e.copy(r);let M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(hr,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return zu.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(zu,o);let p=1/(m+M+u);return a=M*p,o=u*p,e.copy(n).addScaledVector(cr,a).addScaledVector(hr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},us=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_i.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_i.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=_i.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_i):_i.fromBufferAttribute(r,a),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),co.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox)),co.applyMatrix4(t.matrixWorld),this.union(co)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Kr),ho.subVectors(this.max,Kr),ur.subVectors(t.a,Kr),dr.subVectors(t.b,Kr),fr.subVectors(t.c,Kr),os.subVectors(dr,ur),ls.subVectors(fr,dr),Us.subVectors(ur,fr);let e=[0,-os.z,os.y,0,-ls.z,ls.y,0,-Us.z,Us.y,os.z,0,-os.x,ls.z,0,-ls.x,Us.z,0,-Us.x,-os.y,os.x,0,-ls.y,ls.x,0,-Us.y,Us.x,0];return!Fc(e,ur,dr,fr,ho)||(e=[1,0,0,0,1,0,0,0,1],!Fc(e,ur,dr,fr,ho))?!1:(uo.crossVectors(os,ls),e=[uo.x,uo.y,uo.z],Fc(e,ur,dr,fr,ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Wi=[new L,new L,new L,new L,new L,new L,new L,new L],_i=new L,co=new us,ur=new L,dr=new L,fr=new L,os=new L,ls=new L,Us=new L,Kr=new L,ho=new L,uo=new L,Fs=new L;function Fc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Fs.fromArray(i,r);let o=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),l=t.dot(Fs),c=e.dot(Fs),h=n.dot(Fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var En=new L,fo=new bt,Kf=0,jn=class extends Ii{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bd,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fo.fromBufferAttribute(this,e),fo.applyMatrix3(t),this.setXY(e,fo.x,fo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyMatrix3(t),this.setXYZ(e,En.x,En.y,En.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyMatrix4(t),this.setXYZ(e,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyNormalMatrix(t),this.setXYZ(e,En.x,En.y,En.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.transformDirection(t),this.setXYZ(e,En.x,En.y,En.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Jr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Jr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Jr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Jr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Jr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qn(e,this.array),n=Qn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Qn(e,this.array),n=Qn(n,this.array),s=Qn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Qn(e,this.array),n=Qn(n,this.array),s=Qn(s,this.array),r=Qn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ha=class extends jn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ua=class extends jn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var an=class extends jn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Qf=new us,Qr=new L,Bc=new L,Vs=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Qf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qr.subVectors(t,this.center);let e=Qr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qr.copy(t.center).add(Bc)),this.expandByPoint(Qr.copy(t.center).sub(Bc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},jf=0,di=new mn,Oc=new Wn,pr=new L,ri=new us,jr=new us,Ln=new L,wn=class i extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Of(t)?ua:ha)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,e,n){return di.makeTranslation(t,e,n),this.applyMatrix4(di),this}scale(t,e,n){return di.makeScale(t,e,n),this.applyMatrix4(di),this}lookAt(t){return Oc.lookAt(t),Oc.updateMatrix(),this.applyMatrix4(Oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new an(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];jr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ln.addVectors(ri.min,jr.min),ri.expandByPoint(Ln),Ln.addVectors(ri.max,jr.max),ri.expandByPoint(Ln)):(ri.expandByPoint(jr.min),ri.expandByPoint(jr.max))}ri.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ln.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ln));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ln.fromBufferAttribute(o,c),l&&(pr.fromBufferAttribute(t,c),Ln.add(pr)),s=Math.max(s,n.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new jn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new L,l[_]=new L;let c=new L,h=new L,d=new L,u=new bt,f=new bt,g=new bt,M=new L,m=new L;function p(_,A,P){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,P),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,P),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let F=1/(f.x*g.y-g.x*f.y);isFinite(F)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(F),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(F),o[_].add(M),o[A].add(M),o[P].add(M),l[_].add(m),l[A].add(m),l[P].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let _=0,A=w.length;_<A;++_){let P=w[_],F=P.start,z=P.count;for(let Z=F,B=F+z;Z<B;Z+=3)p(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}let R=new L,y=new L,T=new L,E=new L;function I(_){T.fromBufferAttribute(s,_),E.copy(T);let A=o[_];R.copy(A),R.sub(T.multiplyScalar(T.dot(A))).normalize(),y.crossVectors(E,A);let F=y.dot(l[_])<0?-1:1;a.setXYZW(_,R.x,R.y,R.z,F)}for(let _=0,A=w.length;_<A;++_){let P=w[_],F=P.start,z=P.count;for(let Z=F,B=F+z;Z<B;Z+=3)I(t.getX(Z+0)),I(t.getX(Z+1)),I(t.getX(Z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new jn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ln.fromBufferAttribute(t,e),Ln.normalize(),t.setXYZ(e,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new jn(u,h,d)}if(this.index===null)return fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var kc=new L,tp=new L,ep=new Te,yi=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=kc.subVectors(n,e).cross(tp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(kc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ep.getNormalMatrix(t),s=this.coplanarPoint(kc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},np=0,Ji=class extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Nr(),this.name="",this.type="Material",this.blending=Pr,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=hh,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Po,this.stencilZFail=Po,this.stencilZPass=Po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){fe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){fe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new yi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new bt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new bt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Xi=new L,zc=new L,po=new L,mo=new L,da=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xi.copy(this.origin).addScaledVector(this.direction,e),Xi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){zc.copy(t).add(e).multiplyScalar(.5),po.copy(e).sub(t).normalize(),mo.copy(this.origin).sub(zc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(po),o=mo.dot(this.direction),l=-mo.dot(po),c=mo.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let M=1/h;d*=M,u*=M,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(zc).addScaledVector(po,u),f}intersectSphere(t,e){if(t.radius<0)return null;Xi.subVectors(t.center,this.origin);let n=Xi.dot(this.direction),s=Xi.dot(Xi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,M=e.y-a.y,m=e.z-a.z,p=n.x-a.x,w=n.y-a.y,R=n.z-a.z,y=Math.abs(l),T=Math.abs(c),E=Math.abs(h),I,_,A,P,F,z,Z,B,W,j,J,ht;if(y>=T&&y>=E?(A=l,z=d,W=g,ht=p,l>=0?(I=c,_=h,P=u,F=f,Z=M,B=m,j=w,J=R):(I=h,_=c,P=f,F=u,Z=m,B=M,j=R,J=w)):T>=E?(A=c,z=u,W=M,ht=w,c>=0?(I=h,_=l,P=f,F=d,Z=m,B=g,j=R,J=p):(I=l,_=h,P=d,F=f,Z=g,B=m,j=p,J=R)):(A=h,z=f,W=m,ht=R,h>=0?(I=l,_=c,P=d,F=u,Z=g,B=M,j=p,J=w):(I=c,_=l,P=u,F=d,Z=M,B=g,j=w,J=p)),A===0)return null;let tt=I/A,at=_/A,ot=1/A,Vt=P-tt*z,Bt=F-at*z,oe=Z-tt*W,$t=B-at*W,we=j-tt*ht,nt=J-at*ht,lt=we*$t-nt*oe,Ct=Vt*nt-Bt*we,ee=oe*Bt-$t*Vt;if(s){if(lt<0||Ct<0||ee<0)return null}else if((lt<0||Ct<0||ee<0)&&(lt>0||Ct>0||ee>0))return null;let Pt=lt+Ct+ee;if(Pt===0)return null;let le=ot*(lt*z+Ct*W+ee*ht);return(Pt>0?le<0:le>0)?null:this.at(le/Pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$i=class extends Ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Vu=new mn,Bs=new da,go=new Vs,Hu=new L,xo=new L,_o=new L,yo=new L,Vc=new L,vo=new L,Gu=new L,Mo=new L,Dt=class extends Wn{constructor(t=new wn,e=new $i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Vc.fromBufferAttribute(d,t),a?vo.addScaledVector(Vc,h):vo.addScaledVector(Vc.sub(e),h))}e.add(vo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(r),Bs.copy(t.ray).recast(t.near),!(go.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(go,Hu)===null||Bs.origin.distanceToSquared(Hu)>(t.far-t.near)**2))&&(Vu.copy(r).invert(),Bs.copy(t.ray).applyMatrix4(Vu),!(n.boundingBox!==null&&Bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),R=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,T=R;y<T;y+=3){let E=o.getX(y),I=o.getX(y+1),_=o.getX(y+2);s=So(this,p,t,n,c,h,d,E,I,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){let w=o.getX(m),R=o.getX(m+1),y=o.getX(m+2);s=So(this,a,t,n,c,h,d,w,R,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),R=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,T=R;y<T;y+=3){let E=y,I=y+1,_=y+2;s=So(this,p,t,n,c,h,d,E,I,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){let w=m,R=m+1,y=m+2;s=So(this,a,t,n,c,h,d,w,R,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function ip(i,t,e,n,s,r,a,o){let l;if(t.side===Jn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===vs,o),l===null)return null;Mo.copy(o),Mo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Mo);return c<e.near||c>e.far?null:{distance:c,point:Mo.clone(),object:i}}function So(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,xo),i.getVertexPosition(l,_o),i.getVertexPosition(c,yo);let h=ip(i,t,e,n,xo,_o,yo,Gu);if(h){let d=new L;hs.getBarycoord(Gu,xo,_o,yo,d),s&&(h.uv=hs.getInterpolatedAttribute(s,o,l,c,d,new bt)),r&&(h.uv1=hs.getInterpolatedAttribute(r,o,l,c,d,new bt)),a&&(h.normal=hs.getInterpolatedAttribute(a,o,l,c,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};hs.getNormal(xo,_o,yo,u.normal),h.face=u,h.barycoord=d}return h}var Xo=class extends Zn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Dn,h=Dn,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Os=new Vs,sp=new bt(.5,.5),bo=new L,Er=class{constructor(t=new yi,e=new yi,n=new yi,s=new yi,r=new yi,a=new yi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vi,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],M=r[9],m=r[10],p=r[11],w=r[12],R=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-a,f-h,p-g,T-w).normalize(),s[1].setComponents(c+a,f+h,p+g,T+w).normalize(),s[2].setComponents(c+o,f+d,p+M,T+R).normalize(),s[3].setComponents(c-o,f-d,p-M,T-R).normalize(),n)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,f-u,p-m,T-y).normalize();else if(s[4].setComponents(c-l,f-u,p-m,T-y).normalize(),e===vi)s[5].setComponents(c+l,f+u,p+m,T+y).normalize();else if(e===vr)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){Os.center.set(0,0,0);let e=sp.distanceTo(t.center);return Os.radius=.7071067811865476+e,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(bo.x=s.normal.x>0?t.max.x:t.min.x,bo.y=s.normal.y>0?t.max.y:t.min.y,bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Tr=class extends Ji{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Wu=new mn,Kc=new da,Eo=new Vs,To=new L,fa=class extends Wn{constructor(t=new wn,e=new Tr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,t.ray.intersectsSphere(Eo)===!1)return;Wu.copy(s).invert(),Kc.copy(t.ray).applyMatrix4(Wu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,M=f;g<M;g++){let m=c.getX(g);To.fromBufferAttribute(d,m),Xu(To,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,M=f;g<M;g++)To.fromBufferAttribute(d,g),Xu(To,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Xu(i,t,e,n,s,r,a){let o=Kc.distanceSqToPoint(i);if(o<e){let l=new L;Kc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var pa=class extends Zn{constructor(t=[],e=Ms,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ds=class extends Zn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fs=class extends Zn{constructor(t,e,n=Si,s,r,a,o=Dn,l=Dn,c,h=Ri,d=1){if(h!==Ri&&h!==bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Sr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},qo=class extends fs{constructor(t,e=Si,n=Ms,s,r,a=Dn,o=Dn,l,c=Ri){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ma=class extends Zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ei=class i extends wn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(h,3)),this.setAttribute("uv",new an(d,2));function g(M,m,p,w,R,y,T,E,I,_,A){let P=y/I,F=T/_,z=y/2,Z=T/2,B=E/2,W=I+1,j=_+1,J=0,ht=0,tt=new L;for(let at=0;at<j;at++){let ot=at*F-Z;for(let Vt=0;Vt<W;Vt++){let Bt=Vt*P-z;tt[M]=Bt*w,tt[m]=ot*R,tt[p]=B,c.push(tt.x,tt.y,tt.z),tt[M]=0,tt[m]=0,tt[p]=E>0?1:-1,h.push(tt.x,tt.y,tt.z),d.push(Vt/I),d.push(1-at/_),J+=1}}for(let at=0;at<_;at++)for(let ot=0;ot<I;ot++){let Vt=u+ot+W*at,Bt=u+ot+W*(at+1),oe=u+(ot+1)+W*(at+1),$t=u+(ot+1)+W*at;l.push(Vt,Bt,$t),l.push(Bt,oe,$t),ht+=6}o.addGroup(f,ht,A),f+=ht,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var je=class i extends wn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,M=[],m=n/2,p=0;w(),a===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new an(d,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(f,2));function w(){let y=new L,T=new L,E=0,I=(e-t)/n;for(let _=0;_<=r;_++){let A=[],P=_/r,F=P*(e-t)+t;for(let z=0;z<=s;z++){let Z=z/s,B=Z*l+o,W=Math.sin(B),j=Math.cos(B);T.x=F*W,T.y=-P*n+m,T.z=F*j,d.push(T.x,T.y,T.z),y.set(W,I,j).normalize(),u.push(y.x,y.y,y.z),f.push(Z,1-P),A.push(g++)}M.push(A)}for(let _=0;_<s;_++)for(let A=0;A<r;A++){let P=M[A][_],F=M[A+1][_],z=M[A+1][_+1],Z=M[A][_+1];(t>0||A!==0)&&(h.push(P,F,Z),E+=3),(e>0||A!==r-1)&&(h.push(F,z,Z),E+=3)}c.addGroup(p,E,0),p+=E}function R(y){let T=g,E=new bt,I=new L,_=0,A=y===!0?t:e,P=y===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*P,0),u.push(0,P,0),f.push(.5,.5),g++;let F=g;for(let z=0;z<=s;z++){let B=z/s*l+o,W=Math.cos(B),j=Math.sin(B);I.x=A*j,I.y=m*P,I.z=A*W,d.push(I.x,I.y,I.z),u.push(0,P,0),E.x=W*.5+.5,E.y=j*.5*P+.5,f.push(E.x,E.y),g++}for(let z=0;z<s;z++){let Z=T+z,B=F+z;y===!0?h.push(B,B+1,Z):h.push(B+1,B,Z),_+=3}c.addGroup(p,_,y===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Yo=class i extends wn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new an(r,3)),this.setAttribute("normal",new an(r.slice(),3)),this.setAttribute("uv",new an(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){let R=new L,y=new L,T=new L;for(let E=0;E<e.length;E+=3)f(e[E+0],R),f(e[E+1],y),f(e[E+2],T),l(R,y,T,w)}function l(w,R,y,T){let E=T+1,I=[];for(let _=0;_<=E;_++){I[_]=[];let A=w.clone().lerp(y,_/E),P=R.clone().lerp(y,_/E),F=E-_;for(let z=0;z<=F;z++)z===0&&_===E?I[_][z]=A:I[_][z]=A.clone().lerp(P,z/F)}for(let _=0;_<E;_++)for(let A=0;A<2*(E-_)-1;A++){let P=Math.floor(A/2);A%2===0?(u(I[_][P+1]),u(I[_+1][P]),u(I[_][P])):(u(I[_][P+1]),u(I[_+1][P+1]),u(I[_+1][P]))}}function c(w){let R=new L;for(let y=0;y<r.length;y+=3)R.x=r[y+0],R.y=r[y+1],R.z=r[y+2],R.normalize().multiplyScalar(w),r[y+0]=R.x,r[y+1]=R.y,r[y+2]=R.z}function h(){let w=new L;for(let R=0;R<r.length;R+=3){w.x=r[R+0],w.y=r[R+1],w.z=r[R+2];let y=m(w)/2/Math.PI+.5,T=p(w)/Math.PI+.5;a.push(y,1-T)}g(),d()}function d(){for(let w=0;w<a.length;w+=6){let R=a[w+0],y=a[w+2],T=a[w+4],E=Math.max(R,y,T),I=Math.min(R,y,T);E>.9&&I<.1&&(R<.2&&(a[w+0]+=1),y<.2&&(a[w+2]+=1),T<.2&&(a[w+4]+=1))}}function u(w){r.push(w.x,w.y,w.z)}function f(w,R){let y=w*3;R.x=t[y+0],R.y=t[y+1],R.z=t[y+2]}function g(){let w=new L,R=new L,y=new L,T=new L,E=new bt,I=new bt,_=new bt;for(let A=0,P=0;A<r.length;A+=9,P+=6){w.set(r[A+0],r[A+1],r[A+2]),R.set(r[A+3],r[A+4],r[A+5]),y.set(r[A+6],r[A+7],r[A+8]),E.set(a[P+0],a[P+1]),I.set(a[P+2],a[P+3]),_.set(a[P+4],a[P+5]),T.copy(w).add(R).add(y).divideScalar(3);let F=m(T);M(E,P+0,w,F),M(I,P+2,R,F),M(_,P+4,y,F)}}function M(w,R,y,T){T<0&&w.x===1&&(a[R]=w.x-1),y.x===0&&y.z===0&&(a[R]=T/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){fe("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new bt:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,s=[],r=[],a=[],o=new L,l=new mn;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ve(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ve(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},wr=class extends ai{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new bt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Zo=class extends wr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ch(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var qu=new L,Yu=new L,Hc=new Ch,Gc=new Ch,Wc=new Ch,ps=class extends ai{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Yu.subVectors(s[0],s[1]).add(s[0]),c=Yu);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(qu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),Hc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,M,m),Gc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,M,m),Wc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(Hc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Gc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Wc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Hc.calc(l),Gc.calc(l),Wc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function rp(i,t){let e=1-i;return e*e*t}function ap(i,t){return 2*(1-i)*i*t}function op(i,t){return i*i*t}function ea(i,t,e,n){return rp(i,t)+ap(i,e)+op(i,n)}function lp(i,t){let e=1-i;return e*e*e*t}function cp(i,t){let e=1-i;return 3*e*e*i*t}function hp(i,t){return 3*(1-i)*i*i*t}function up(i,t){return i*i*i*t}function na(i,t,e,n,s){return lp(i,t)+cp(i,e)+hp(i,n)+up(i,s)}var ga=class extends ai{constructor(t=new bt,e=new bt,n=new bt,s=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new bt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(na(t,s.x,r.x,a.x,o.x),na(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Jo=class extends ai{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(na(t,s.x,r.x,a.x,o.x),na(t,s.y,r.y,a.y,o.y),na(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xa=class extends ai{constructor(t=new bt,e=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$o=class extends ai{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_a=class extends ai{constructor(t=new bt,e=new bt,n=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new bt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ea(t,s.x,r.x,a.x),ea(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ya=class extends ai{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ea(t,s.x,r.x,a.x),ea(t,s.y,r.y,a.y),ea(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},va=class extends ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Zu(o,l.x,c.x,h.x,d.x),Zu(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new bt().fromArray(s))}return this}},Ko=Object.freeze({__proto__:null,ArcCurve:Zo,CatmullRomCurve3:ps,CubicBezierCurve:ga,CubicBezierCurve3:Jo,EllipseCurve:wr,LineCurve:xa,LineCurve3:$o,QuadraticBezierCurve:_a,QuadraticBezierCurve3:ya,SplineCurve:va}),Qo=class extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ko[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ko[s.type]().fromJSON(s))}return this}},Ma=class extends Qo{constructor(t){super(),this.type="Path",this.currentPoint=new bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new xa(this.currentPoint.clone(),new bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new _a(this.currentPoint.clone(),new bt(t,e),new bt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new ga(this.currentPoint.clone(),new bt(t,e),new bt(n,s),new bt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new va(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new wr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ms=class extends Ma{constructor(t){super(t),this.uuid=Nr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ma().fromJSON(s))}return this}};function dp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Gd(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=xp(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=i[u],g=i[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Sa(r,a,e,o,l,c,0),a}function Gd(i,t,e,n,s){let r;if(s===Cp(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Ju(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Ju(a/n|0,i[a],i[a+1],r);return r&&Ar(r,r.next)&&(Ea(r),r=r.next),r}function Hs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ar(e,e.next)||vn(e.prev,e,e.next)===0)){if(Ea(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Sa(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Sp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?pp(i,n,s,r):fp(i)){t.push(l.i,i.i,c.i),Ea(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=mp(Hs(i),t),Sa(i,t,e,n,s,r,2)):a===2&&gp(i,t,e,n,s,r):Sa(Hs(i),t,e,n,s,r,1);break}}}function fp(i){let t=i.prev,e=i,n=i.next;if(vn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&ta(s,o,r,l,a,c,g.x,g.y)&&vn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function pp(i,t,e,n){let s=i.prev,r=i,a=i.next;if(vn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),M=Math.max(o,l,c),m=Math.max(h,d,u),p=Qc(f,g,t,e,n),w=Qc(M,m,t,e,n),R=i.prevZ,y=i.nextZ;for(;R&&R.z>=p&&y&&y.z<=w;){if(R.x>=f&&R.x<=M&&R.y>=g&&R.y<=m&&R!==s&&R!==a&&ta(o,h,l,d,c,u,R.x,R.y)&&vn(R.prev,R,R.next)>=0||(R=R.prevZ,y.x>=f&&y.x<=M&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ta(o,h,l,d,c,u,y.x,y.y)&&vn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;R&&R.z>=p;){if(R.x>=f&&R.x<=M&&R.y>=g&&R.y<=m&&R!==s&&R!==a&&ta(o,h,l,d,c,u,R.x,R.y)&&vn(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;y&&y.z<=w;){if(y.x>=f&&y.x<=M&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ta(o,h,l,d,c,u,y.x,y.y)&&vn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function mp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ar(n,s)&&Xd(n,e,e.next,s)&&ba(n,s)&&ba(s,n)&&(t.push(n.i,e.i,s.i),Ea(e),Ea(e.next),e=i=s),e=e.next}while(e!==i);return Hs(e)}function gp(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Tp(a,o)){let l=qd(a,o);a=Hs(a,a.next),l=Hs(l,l.next),Sa(a,t,e,n,s,r,0),Sa(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function xp(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Gd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Ep(c))}s.sort(_p);for(let r=0;r<s.length;r++)e=yp(s[r],e);return e}function _p(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function yp(i,t){let e=vp(i,t);if(!e)return t;let n=qd(e,i);return Hs(n,n.next),Hs(e,e.next)}function vp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ar(i,e))return e;do{if(Ar(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Wd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);ba(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Mp(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Mp(i,t){return vn(i.prev,i,t.prev)<0&&vn(t.next,i,i.next)<0}function Sp(i,t,e,n){let s=i;do s.z===0&&(s.z=Qc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,bp(s)}function bp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Qc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ep(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wd(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ta(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Wd(i,t,e,n,s,r,a,o)}function Tp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!wp(i,t)&&(ba(i,t)&&ba(t,i)&&Ap(i,t)&&(vn(i.prev,i,t.prev)||vn(i,t.prev,t))||Ar(i,t)&&vn(i.prev,i,i.next)>0&&vn(t.prev,t,t.next)>0)}function vn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ar(i,t){return i.x===t.x&&i.y===t.y}function Xd(i,t,e,n){let s=Ao(vn(i,t,e)),r=Ao(vn(i,t,n)),a=Ao(vn(e,n,i)),o=Ao(vn(e,n,t));return!!(s!==r&&a!==o||s===0&&wo(i,e,t)||r===0&&wo(i,n,t)||a===0&&wo(e,i,n)||o===0&&wo(e,t,n))}function wo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ao(i){return i>0?1:i<0?-1:0}function wp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ba(i,t){return vn(i.prev,i,i.next)<0?vn(i,t,i.next)>=0&&vn(i,i.prev,t)>=0:vn(i,t,i.prev)<0||vn(i,i.next,t)<0}function Ap(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function qd(i,t){let e=jc(i.i,i.x,i.y),n=jc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ju(i,t,e,n){let s=jc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ea(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function jc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cp(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var th=class{static triangulate(t,e,n=2){return dp(t,e,n)}},ks=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];$u(t),Ku(n,t);let a=t.length;e.forEach($u);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Ku(n,e[l]);let o=th.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function $u(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ku(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Gs=class i extends wn{constructor(t=new ms([new bt(.5,.5),new bt(-.5,.5),new bt(-.5,-.5),new bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new an(s,3)),this.setAttribute("uv",new an(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:Rp,R,y=!1,T,E,I,_;if(p){R=p.getSpacedPoints(h),y=!0,u=!1;let it=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(h,it),E=new L,I=new L,_=new L}u||(m=0,f=0,g=0,M=0);let A=o.extractPoints(c),P=A.shape,F=A.holes;if(!ks.isClockWise(P)){P=P.reverse();for(let it=0,ut=F.length;it<ut;it++){let pt=F[it];ks.isClockWise(pt)&&(F[it]=pt.reverse())}}function Z(it){let pt=10000000000000001e-36,mt=it[0];for(let yt=1;yt<=it.length;yt++){let ne=yt%it.length,jt=it[ne],he=jt.x-mt.x,_e=jt.y-mt.y,D=he*he+_e*_e,qe=Math.max(Math.abs(jt.x),Math.abs(jt.y),Math.abs(mt.x),Math.abs(mt.y)),Me=pt*qe*qe;if(D<=Me){it.splice(ne,1),yt--;continue}mt=jt}}Z(P),F.forEach(Z);let B=F.length,W=P;for(let it=0;it<B;it++){let ut=F[it];P=P.concat(ut)}function j(it,ut,pt){return ut||xe("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(ut,pt)}let J=P.length;function ht(it,ut,pt){let mt,yt,ne,jt=it.x-ut.x,he=it.y-ut.y,_e=pt.x-it.x,D=pt.y-it.y,qe=jt*jt+he*he,Me=jt*D-he*_e;if(Math.abs(Me)>Number.EPSILON){let C=Math.sqrt(qe),x=Math.sqrt(_e*_e+D*D),V=ut.x-he/C,Y=ut.y+jt/C,Q=pt.x-D/x,xt=pt.y+_e/x,vt=((Q-V)*D-(xt-Y)*_e)/(jt*D-he*_e);mt=V+jt*vt-it.x,yt=Y+he*vt-it.y;let K=mt*mt+yt*yt;if(K<=2)return new bt(mt,yt);ne=Math.sqrt(K/2)}else{let C=!1;jt>Number.EPSILON?_e>Number.EPSILON&&(C=!0):jt<-Number.EPSILON?_e<-Number.EPSILON&&(C=!0):Math.sign(he)===Math.sign(D)&&(C=!0),C?(mt=-he,yt=jt,ne=Math.sqrt(qe)):(mt=jt,yt=he,ne=Math.sqrt(qe/2))}return new bt(mt/ne,yt/ne)}let tt=[];for(let it=0,ut=W.length,pt=ut-1,mt=it+1;it<ut;it++,pt++,mt++)pt===ut&&(pt=0),mt===ut&&(mt=0),tt[it]=ht(W[it],W[pt],W[mt]);let at=[],ot,Vt=tt.concat();for(let it=0,ut=B;it<ut;it++){let pt=F[it];ot=[];for(let mt=0,yt=pt.length,ne=yt-1,jt=mt+1;mt<yt;mt++,ne++,jt++)ne===yt&&(ne=0),jt===yt&&(jt=0),ot[mt]=ht(pt[mt],pt[ne],pt[jt]);at.push(ot),Vt=Vt.concat(ot)}let Bt;if(m===0)Bt=ks.triangulateShape(W,F);else{let it=[],ut=[];for(let pt=0;pt<m;pt++){let mt=pt/m,yt=f*Math.cos(mt*Math.PI/2),ne=g*Math.sin(mt*Math.PI/2)+M;for(let jt=0,he=W.length;jt<he;jt++){let _e=j(W[jt],tt[jt],ne);Ct(_e.x,_e.y,-yt),mt===0&&it.push(_e)}for(let jt=0,he=B;jt<he;jt++){let _e=F[jt];ot=at[jt];let D=[];for(let qe=0,Me=_e.length;qe<Me;qe++){let C=j(_e[qe],ot[qe],ne);Ct(C.x,C.y,-yt),mt===0&&D.push(C)}mt===0&&ut.push(D)}}Bt=ks.triangulateShape(it,ut)}let oe=Bt.length,$t=g+M;for(let it=0;it<J;it++){let ut=u?j(P[it],Vt[it],$t):P[it];y?(I.copy(T.normals[0]).multiplyScalar(ut.x),E.copy(T.binormals[0]).multiplyScalar(ut.y),_.copy(R[0]).add(I).add(E),Ct(_.x,_.y,_.z)):Ct(ut.x,ut.y,0)}for(let it=1;it<=h;it++)for(let ut=0;ut<J;ut++){let pt=u?j(P[ut],Vt[ut],$t):P[ut];y?(I.copy(T.normals[it]).multiplyScalar(pt.x),E.copy(T.binormals[it]).multiplyScalar(pt.y),_.copy(R[it]).add(I).add(E),Ct(_.x,_.y,_.z)):Ct(pt.x,pt.y,d/h*it)}for(let it=m-1;it>=0;it--){let ut=it/m,pt=f*Math.cos(ut*Math.PI/2),mt=g*Math.sin(ut*Math.PI/2)+M;for(let yt=0,ne=W.length;yt<ne;yt++){let jt=j(W[yt],tt[yt],mt);Ct(jt.x,jt.y,d+pt)}for(let yt=0,ne=F.length;yt<ne;yt++){let jt=F[yt];ot=at[yt];for(let he=0,_e=jt.length;he<_e;he++){let D=j(jt[he],ot[he],mt);y?Ct(D.x,D.y+R[h-1].y,R[h-1].x+pt):Ct(D.x,D.y,d+pt)}}}we(),nt();function we(){let it=s.length/3;if(u){let ut=0,pt=J*ut;for(let mt=0;mt<oe;mt++){let yt=Bt[mt];ee(yt[2]+pt,yt[1]+pt,yt[0]+pt)}ut=h+m*2,pt=J*ut;for(let mt=0;mt<oe;mt++){let yt=Bt[mt];ee(yt[0]+pt,yt[1]+pt,yt[2]+pt)}}else{for(let ut=0;ut<oe;ut++){let pt=Bt[ut];ee(pt[2],pt[1],pt[0])}for(let ut=0;ut<oe;ut++){let pt=Bt[ut];ee(pt[0]+J*h,pt[1]+J*h,pt[2]+J*h)}}n.addGroup(it,s.length/3-it,0)}function nt(){let it=s.length/3,ut=0;lt(W,ut),ut+=W.length;for(let pt=0,mt=F.length;pt<mt;pt++){let yt=F[pt];lt(yt,ut),ut+=yt.length}n.addGroup(it,s.length/3-it,1)}function lt(it,ut){let pt=it.length;for(;--pt>=0;){let mt=pt,yt=pt-1;yt<0&&(yt=it.length-1);for(let ne=0,jt=h+m*2;ne<jt;ne++){let he=J*ne,_e=J*(ne+1),D=ut+mt+he,qe=ut+yt+he,Me=ut+yt+_e,C=ut+mt+_e;Pt(D,qe,Me,C)}}}function Ct(it,ut,pt){l.push(it),l.push(ut),l.push(pt)}function ee(it,ut,pt){le(it),le(ut),le(pt);let mt=s.length/3,yt=w.generateTopUV(n,s,mt-3,mt-2,mt-1);Ie(yt[0]),Ie(yt[1]),Ie(yt[2])}function Pt(it,ut,pt,mt){le(it),le(ut),le(mt),le(ut),le(pt),le(mt);let yt=s.length/3,ne=w.generateSideWallUV(n,s,yt-6,yt-3,yt-2,yt-1);Ie(ne[0]),Ie(ne[1]),Ie(ne[3]),Ie(ne[1]),Ie(ne[2]),Ie(ne[3])}function le(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function Ie(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ip(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ko[s.type]().fromJSON(s)),new i(n,t.options)}},Rp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new bt(r,a),new bt(o,l),new bt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],M=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new bt(a,1-l),new bt(c,1-d),new bt(u,1-g),new bt(M,1-p)]:[new bt(o,1-l),new bt(h,1-d),new bt(f,1-g),new bt(m,1-p)]}};function Ip(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ta=class i extends Yo{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Ws=class i extends wn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],M=[],m=[];for(let p=0;p<h;p++){let w=p*u-a;for(let R=0;R<c;R++){let y=R*d-r;g.push(y,-w,0),M.push(0,0,1),m.push(R/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let R=w+c*p,y=w+c*(p+1),T=w+1+c*(p+1),E=w+1+c*p;f.push(R,y,E),f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(M,3)),this.setAttribute("uv",new an(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var oi=class i extends wn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new L,u=new L,f=[],g=[],M=[],m=[];for(let p=0;p<=n;p++){let w=[],R=p/n,y=a+R*o,T=t*Math.cos(y),E=Math.sqrt(t*t-T*T),I=0;p===0&&a===0?I=.5/e:p===n&&l===Math.PI&&(I=-.5/e);for(let _=0;_<=e;_++){let A=_/e,P=s+A*r;d.x=-E*Math.cos(P),d.y=T,d.z=E*Math.sin(P),g.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),m.push(A+I,1-R),w.push(c++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){let R=h[p][w+1],y=h[p][w],T=h[p+1][w],E=h[p+1][w+1];(p!==0||a>0)&&f.push(R,y,E),(p!==n-1||l<Math.PI)&&f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(M,3)),this.setAttribute("uv",new an(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ki=class i extends wn{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new L,f=new L,g=new L;for(let M=0;M<=n;M++){let m=a+M/n*o;for(let p=0;p<=s;p++){let w=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(w),f.y=(t+e*Math.cos(m))*Math.sin(w),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(w),u.y=t*Math.sin(w),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=s;m++){let p=(s+1)*M+m-1,w=(s+1)*(M-1)+m-1,R=(s+1)*(M-1)+m,y=(s+1)*M+m;l.push(p,w,y),l.push(w,R,y)}this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(h,3)),this.setAttribute("uv",new an(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var gs=class i extends wn{constructor(t=new ya(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,c=new bt,h=new L,d=[],u=[],f=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new an(d,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(f,2));function M(){for(let R=0;R<e;R++)m(R);m(r===!1?e:0),w(),p()}function m(R){h=t.getPointAt(R/e,h);let y=a.normals[R],T=a.binormals[R];for(let E=0;E<=s;E++){let I=E/s*Math.PI*2,_=Math.sin(I),A=-Math.cos(I);l.x=A*y.x+_*T.x,l.y=A*y.y+_*T.y,l.z=A*y.z+_*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let R=1;R<=e;R++)for(let y=1;y<=s;y++){let T=(s+1)*(R-1)+(y-1),E=(s+1)*R+(y-1),I=(s+1)*R+y,_=(s+1)*(R-1)+y;g.push(T,E,_),g.push(E,I,_)}}function w(){for(let R=0;R<=e;R++)for(let y=0;y<=s;y++)c.x=R/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ko[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Zs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Qu(s))s.isRenderTargetTexture?(fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Qu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Xn(i){let t={};for(let e=0;e<i.length;e++){let n=Zs(i[e]);for(let s in n)t[s]=n[s]}return t}function Qu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Pp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Rh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ge.workingColorSpace}var Yd={clone:Zs,merge:Xn},Lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,li=class extends Ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lp,this.fragmentShader=Dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=Pp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new bt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new yn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Te().fromArray(s.value);break;case"m4":this.uniforms[n].value=new mn().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},jo=class extends li{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ci=class extends Ji{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var tl=class extends Ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},el=class extends Ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function mr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Xc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var xs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},nl=class extends xs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zc,endingEnd:Zc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Jc:r=t,o=2*e-n;break;case $c:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jc:a=t,l=2*n-e;break;case $c:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),M=g*g,m=M*g,p=-u*m+2*u*M-u*g,w=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*g+1,R=(-1-f)*m+(1.5+f)*M+.5*g,y=f*m-f*M;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+w*a[c+T]+R*a[l+T]+y*a[d+T];return r}},il=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},sl=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},rl=class extends xs{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),M=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let M=a[c+g],m=a[l+g],p=f*u+g*2,w=d[p],R=d[p+1],y=t*u+g*2,T=h[y],E=h[y+1],I=Up(n,e,w,T,s);r[g]=Zd(I,M,R,E,m)}return r}};function Zd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Np(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Up(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Zd(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Np(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var hi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=mr(e,this.TimeBufferType),this.values=mr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:mr(t.times,Array),values:mr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Xc(t.settings)&&(n.settings={inTangents:mr(t.settings.inTangents,Array),outTangents:mr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new rl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ia:e=this.InterpolantFactoryMethodDiscrete;break;case zo:e=this.InterpolantFactoryMethodLinear;break;case Io:e=this.InterpolantFactoryMethodSmooth;break;case Yc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return fe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ia;case this.InterpolantFactoryMethodLinear:return zo;case this.InterpolantFactoryMethodSmooth:return Io;case this.InterpolantFactoryMethodBezier:return Yc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Xc(this.settings)&&(ju(this.settings.inTangents,t),ju(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(xe("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(xe("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){xe("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){xe("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&kf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){xe("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Io,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let M=e[d+g];if(M!==e[u+g]||M!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Xc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ju(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}hi.prototype.ValueTypeName="";hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=zo;var _s=class extends hi{constructor(t,e,n){super(t,e,n)}};_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=ia;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}};al.prototype.ValueTypeName="color";var ol=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}};ol.prototype.ValueTypeName="number";var ll=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Pi.slerpFlat(r,0,a,c-o,a,c,l);return r}},wa=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ll(this.times,this.values,this.getValueSize(),t)}};wa.prototype.ValueTypeName="quaternion";wa.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends hi{constructor(t,e,n){super(t,e,n)}};ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=ia;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}};cl.prototype.ValueTypeName="vector";var hl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jd=new hl,ul=class{constructor(t){this.manager=t!==void 0?t:Jd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ul.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cr=class extends Wn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var qc=new mn,td=new L,ed=new L,Aa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new mn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new yn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;td.setFromMatrixPosition(t.matrixWorld),e.position.copy(td),ed.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ed),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){qc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(qc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===vr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(qc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Co=new L,Ro=new Pi,Ai=new L,Ca=class extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Co,Ro,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Ro,Ai.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Co,Ro,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Ro,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},cs=new L,nd=new bt,id=new bt,Fn=class extends Ca{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Vo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Mc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vo*2*Math.atan(Math.tan(Mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cs.x,cs.y).multiplyScalar(-t/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cs.x,cs.y).multiplyScalar(-t/cs.z)}getViewSize(t,e){return this.getViewBounds(t,nd,id),e.subVectors(id,nd)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Mc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var eh=class extends Aa{constructor(){super(new Fn(90,1,.5,500)),this.isPointLightShadow=!0}},Ra=class extends Cr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new eh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Rr=class extends Ca{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},nh=class extends Aa{constructor(){super(new Rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xs=class extends Cr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wn.DEFAULT_UP),this.updateMatrix(),this.target=new Wn,this.shadow=new nh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Ia=class extends Cr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var gr=-90,xr=1,dl=class extends Wn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fn(gr,xr,t,e);s.layers=this.layers,this.add(s);let r=new Fn(gr,xr,t,e);r.layers=this.layers,this.add(r);let a=new Fn(gr,xr,t,e);a.layers=this.layers,this.add(a);let o=new Fn(gr,xr,t,e);o.layers=this.layers,this.add(o);let l=new Fn(gr,xr,t,e);l.layers=this.layers,this.add(l);let c=new Fn(gr,xr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===vi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},fl=class extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ih="\\[\\]\\.:\\/",Fp=new RegExp("["+Ih+"]","g"),Ph="[^"+Ih+"]",Bp="[^"+Ih.replace("\\.","")+"]",Op=/((?:WC+[\/:])*)/.source.replace("WC",Ph),kp=/(WCOD+)?/.source.replace("WCOD",Bp),zp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ph),Vp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ph),Hp=new RegExp("^"+Op+kp+zp+Vp+"$"),Gp=["material","materials","bones","map"],ih=class{constructor(t,e,n){let s=n||pn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Fp,"")}static parseTrackName(t){let e=Hp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;xe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pn.Composite=ih;pn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pn.prototype.GetterByBindingType=[pn.prototype._getValue_direct,pn.prototype._getValue_array,pn.prototype._getValue_arrayElement,pn.prototype._getValue_toArray];pn.prototype.SetterByBindingTypeAndVersioning=[[pn.prototype._setValue_direct,pn.prototype._setValue_direct_setNeedsUpdate,pn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_array,pn.prototype._setValue_array_setNeedsUpdate,pn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_arrayElement,pn.prototype._setValue_arrayElement_setNeedsUpdate,pn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_fromArray,pn.prototype._setValue_fromArray_setNeedsUpdate,pn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var k_=new Float32Array(1);var Pa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,fe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var sh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Lh(i,t,e,n){let s=Wp(n);switch(e){case bh:return i*t;case Th:return i*t/s.components*s.byteLength;case vl:return i*t/s.components*s.byteLength;case Es:return i*t*2/s.components*s.byteLength;case Ml:return i*t*2/s.components*s.byteLength;case Eh:return i*t*3/s.components*s.byteLength;case fi:return i*t*4/s.components*s.byteLength;case Sl:return i*t*4/s.components*s.byteLength;case Fa:case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oa:case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case El:case wl:return Math.max(i,16)*Math.max(t,8)/4;case bl:case Tl:return Math.max(i,8)*Math.max(t,8)/2;case Al:case Cl:case Il:case Pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rl:case za:case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Yl:case Zl:case Jl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $l:case Kl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Va:case Ql:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wp(i){switch(i){case ni:case yh:return{byteLength:1,components:1};case Lr:case vh:case Ei:return{byteLength:2,components:1};case _l:case yl:return{byteLength:2,components:4};case Si:case xl:case bi:return{byteLength:4,components:1};case Mh:case Sh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function _f(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function qp(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],M=d[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let M=d[f];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zp=`#ifdef USE_ALPHAHASH
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
#endif`,Jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jp=`#ifdef USE_AOMAP
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
#endif`,tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,em=`#ifdef USE_BATCHING
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
#endif`,nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,am=`#ifdef USE_IRIDESCENCE
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
#endif`,om=`#ifdef USE_BUMPMAP
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gm=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_m=`vec3 transformedNormal = objectNormal;
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
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nm=`#ifdef USE_GRADIENTMAP
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
}`,Um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Om=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,km=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wm=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,Xm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,qm=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,i0=`#if defined( USE_POINTS_UV )
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
#endif`,s0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`#ifdef USE_MORPHTARGETS
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
#endif`,h0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,d0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,g0=`#ifdef USE_NORMALMAP
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
#endif`,x0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,b0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,P0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,L0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,D0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N0=`#ifdef USE_SKINNING
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
#endif`,U0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F0=`#ifdef USE_SKINNING
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
#endif`,B0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V0=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,H0=`#ifdef USE_TRANSMISSION
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z0=`uniform sampler2D t2D;
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`#include <common>
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
}`,tg=`#if DEPTH_PACKING == 3200
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
}`,eg=`#define DISTANCE
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
}`,ng=`#define DISTANCE
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
void main() {
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`uniform float scale;
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
}`,ag=`uniform vec3 diffuse;
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
}`,og=`#include <common>
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
}`,lg=`uniform vec3 diffuse;
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
}`,cg=`#define LAMBERT
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
}`,hg=`#define LAMBERT
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
}`,ug=`#define MATCAP
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
}`,dg=`#define MATCAP
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
}`,fg=`#define NORMAL
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
}`,pg=`#define NORMAL
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
}`,mg=`#define PHONG
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
}`,gg=`#define PHONG
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
}`,xg=`#define STANDARD
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
}`,_g=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,yg=`#define TOON
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
}`,vg=`#define TOON
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
}`,Mg=`uniform float size;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,bg=`#include <common>
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
}`,Eg=`uniform vec3 color;
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
}`,Tg=`uniform float rotation;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:Yp,alphahash_pars_fragment:Zp,alphamap_fragment:Jp,alphamap_pars_fragment:$p,alphatest_fragment:Kp,alphatest_pars_fragment:Qp,aomap_fragment:jp,aomap_pars_fragment:tm,batching_pars_vertex:em,batching_vertex:nm,begin_vertex:im,beginnormal_vertex:sm,bsdfs:rm,iridescence_fragment:am,bumpmap_pars_fragment:om,clipping_planes_fragment:lm,clipping_planes_pars_fragment:cm,clipping_planes_pars_vertex:hm,clipping_planes_vertex:um,color_fragment:dm,color_pars_fragment:fm,color_pars_vertex:pm,color_vertex:mm,common:gm,cube_uv_reflection_fragment:xm,defaultnormal_vertex:_m,displacementmap_pars_vertex:ym,displacementmap_vertex:vm,emissivemap_fragment:Mm,emissivemap_pars_fragment:Sm,colorspace_fragment:bm,colorspace_pars_fragment:Em,envmap_fragment:Tm,envmap_common_pars_fragment:wm,envmap_pars_fragment:Am,envmap_pars_vertex:Cm,envmap_physical_pars_fragment:km,envmap_vertex:Rm,fog_vertex:Im,fog_pars_vertex:Pm,fog_fragment:Lm,fog_pars_fragment:Dm,gradientmap_pars_fragment:Nm,lightmap_pars_fragment:Um,lights_lambert_fragment:Fm,lights_lambert_pars_fragment:Bm,lights_pars_begin:Om,lights_toon_fragment:zm,lights_toon_pars_fragment:Vm,lights_phong_fragment:Hm,lights_phong_pars_fragment:Gm,lights_physical_fragment:Wm,lights_physical_pars_fragment:Xm,lights_fragment_begin:qm,lights_fragment_maps:Ym,lights_fragment_end:Zm,lightprobes_pars_fragment:Jm,logdepthbuf_fragment:$m,logdepthbuf_pars_fragment:Km,logdepthbuf_pars_vertex:Qm,logdepthbuf_vertex:jm,map_fragment:t0,map_pars_fragment:e0,map_particle_fragment:n0,map_particle_pars_fragment:i0,metalnessmap_fragment:s0,metalnessmap_pars_fragment:r0,morphinstance_vertex:a0,morphcolor_vertex:o0,morphnormal_vertex:l0,morphtarget_pars_vertex:c0,morphtarget_vertex:h0,normal_fragment_begin:u0,normal_fragment_maps:d0,normal_pars_fragment:f0,normal_pars_vertex:p0,normal_vertex:m0,normalmap_pars_fragment:g0,clearcoat_normal_fragment_begin:x0,clearcoat_normal_fragment_maps:_0,clearcoat_pars_fragment:y0,iridescence_pars_fragment:v0,opaque_fragment:M0,packing:S0,premultiplied_alpha_fragment:b0,project_vertex:E0,dithering_fragment:T0,dithering_pars_fragment:w0,roughnessmap_fragment:A0,roughnessmap_pars_fragment:C0,shadowmap_pars_fragment:R0,shadowmap_pars_vertex:I0,shadowmap_vertex:P0,shadowmask_pars_fragment:L0,skinbase_vertex:D0,skinning_pars_vertex:N0,skinning_vertex:U0,skinnormal_vertex:F0,specularmap_fragment:B0,specularmap_pars_fragment:O0,tonemapping_fragment:k0,tonemapping_pars_fragment:z0,transmission_fragment:V0,transmission_pars_fragment:H0,uv_pars_fragment:G0,uv_pars_vertex:W0,uv_vertex:X0,worldpos_vertex:q0,background_vert:Y0,background_frag:Z0,backgroundCube_vert:J0,backgroundCube_frag:$0,cube_vert:K0,cube_frag:Q0,depth_vert:j0,depth_frag:tg,distance_vert:eg,distance_frag:ng,equirect_vert:ig,equirect_frag:sg,linedashed_vert:rg,linedashed_frag:ag,meshbasic_vert:og,meshbasic_frag:lg,meshlambert_vert:cg,meshlambert_frag:hg,meshmatcap_vert:ug,meshmatcap_frag:dg,meshnormal_vert:fg,meshnormal_frag:pg,meshphong_vert:mg,meshphong_frag:gg,meshphysical_vert:xg,meshphysical_frag:_g,meshtoon_vert:yg,meshtoon_frag:vg,points_vert:Mg,points_frag:Sg,shadow_vert:bg,shadow_frag:Eg,sprite_vert:Tg,sprite_frag:wg},It={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Te}},envmap:{envMap:{value:null},envMapRotation:{value:new Te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Te},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0},uvTransform:{value:new Te}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}}},Ui={basic:{uniforms:Xn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Xn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Xn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Xn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Xn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Xn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Xn([It.points,It.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Xn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Xn([It.common,It.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Xn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Xn([It.sprite,It.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Te}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:Xn([It.common,It.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:Xn([It.lights,It.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Ui.physical={uniforms:Xn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Te},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Te},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Te},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Te},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Te},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Te}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};var nc={r:0,b:0,g:0},Ag=new mn,yf=new Te;yf.set(-1,0,0,0,1,0,0,0,1);function Cg(i,t,e,n,s,r){let a=new Ue(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){let y=w.backgroundBlurriness>0;R=t.get(R,y)}return R}function g(w){let R=!1,y=f(w);y===null?m(a,o):y&&y.isColor&&(m(y,1),R=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(w,R){let y=f(R);y&&(y.isCubeTexture||y.mapping===Na)?(c===void 0&&(c=new Dt(new ei(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Zs(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(R.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yf),c.material.toneMapped=Ge.getTransfer(y.colorSpace)!==nn,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Dt(new Ws(2,2),new li({name:"BackgroundMaterial",uniforms:Zs(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(y.colorSpace)!==nn,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,R){w.getRGB(nc,Rh(i)),e.buffers.color.setClear(nc.r,nc.g,nc.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,R=1){a.set(w),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:g,addToRenderList:M,dispose:p}}function Rg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(F,z,Z,B,W){let j=!1,J=d(F,B,Z,z);r!==J&&(r=J,c(r.object)),j=f(F,B,Z,W),j&&g(F,B,Z,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,y(F,z,Z,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function h(F){return i.deleteVertexArray(F)}function d(F,z,Z,B){let W=B.wireframe===!0,j=n[z.id];j===void 0&&(j={},n[z.id]=j);let J=F.isInstancedMesh===!0?F.id:0,ht=j[J];ht===void 0&&(ht={},j[J]=ht);let tt=ht[Z.id];tt===void 0&&(tt={},ht[Z.id]=tt);let at=tt[W];return at===void 0&&(at=u(l()),tt[W]=at),at}function u(F){let z=[],Z=[],B=[];for(let W=0;W<e;W++)z[W]=0,Z[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Z,attributeDivisors:B,object:F,attributes:{},index:null}}function f(F,z,Z,B){let W=r.attributes,j=z.attributes,J=0,ht=Z.getAttributes();for(let tt in ht)if(ht[tt].location>=0){let ot=W[tt],Vt=j[tt];if(Vt===void 0&&(tt==="instanceMatrix"&&F.instanceMatrix&&(Vt=F.instanceMatrix),tt==="instanceColor"&&F.instanceColor&&(Vt=F.instanceColor)),ot===void 0||ot.attribute!==Vt||Vt&&ot.data!==Vt.data)return!0;J++}return r.attributesNum!==J||r.index!==B}function g(F,z,Z,B){let W={},j=z.attributes,J=0,ht=Z.getAttributes();for(let tt in ht)if(ht[tt].location>=0){let ot=j[tt];ot===void 0&&(tt==="instanceMatrix"&&F.instanceMatrix&&(ot=F.instanceMatrix),tt==="instanceColor"&&F.instanceColor&&(ot=F.instanceColor));let Vt={};Vt.attribute=ot,ot&&ot.data&&(Vt.data=ot.data),W[tt]=Vt,J++}r.attributes=W,r.attributesNum=J,r.index=B}function M(){let F=r.newAttributes;for(let z=0,Z=F.length;z<Z;z++)F[z]=0}function m(F){p(F,0)}function p(F,z){let Z=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;Z[F]=1,B[F]===0&&(i.enableVertexAttribArray(F),B[F]=1),W[F]!==z&&(i.vertexAttribDivisor(F,z),W[F]=z)}function w(){let F=r.newAttributes,z=r.enabledAttributes;for(let Z=0,B=z.length;Z<B;Z++)z[Z]!==F[Z]&&(i.disableVertexAttribArray(Z),z[Z]=0)}function R(F,z,Z,B,W,j,J){J===!0?i.vertexAttribIPointer(F,z,Z,W,j):i.vertexAttribPointer(F,z,Z,B,W,j)}function y(F,z,Z,B){M();let W=B.attributes,j=Z.getAttributes(),J=z.defaultAttributeValues;for(let ht in j){let tt=j[ht];if(tt.location>=0){let at=W[ht];if(at===void 0&&(ht==="instanceMatrix"&&F.instanceMatrix&&(at=F.instanceMatrix),ht==="instanceColor"&&F.instanceColor&&(at=F.instanceColor)),at!==void 0){let ot=at.normalized,Vt=at.itemSize,Bt=t.get(at);if(Bt===void 0)continue;let oe=Bt.buffer,$t=Bt.type,we=Bt.bytesPerElement,nt=$t===i.INT||$t===i.UNSIGNED_INT||at.gpuType===xl;if(at.isInterleavedBufferAttribute){let lt=at.data,Ct=lt.stride,ee=at.offset;if(lt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<tt.locationSize;Pt++)p(tt.location+Pt,lt.meshPerAttribute);F.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Pt=0;Pt<tt.locationSize;Pt++)m(tt.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let Pt=0;Pt<tt.locationSize;Pt++)R(tt.location+Pt,Vt/tt.locationSize,$t,ot,Ct*we,(ee+Vt/tt.locationSize*Pt)*we,nt)}else{if(at.isInstancedBufferAttribute){for(let lt=0;lt<tt.locationSize;lt++)p(tt.location+lt,at.meshPerAttribute);F.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let lt=0;lt<tt.locationSize;lt++)m(tt.location+lt);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let lt=0;lt<tt.locationSize;lt++)R(tt.location+lt,Vt/tt.locationSize,$t,ot,Vt*we,Vt/tt.locationSize*lt*we,nt)}}else if(J!==void 0){let ot=J[ht];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(tt.location,ot);break;case 3:i.vertexAttrib3fv(tt.location,ot);break;case 4:i.vertexAttrib4fv(tt.location,ot);break;default:i.vertexAttrib1fv(tt.location,ot)}}}}w()}function T(){A();for(let F in n){let z=n[F];for(let Z in z){let B=z[Z];for(let W in B){let j=B[W];for(let J in j)h(j[J].object),delete j[J];delete B[W]}}delete n[F]}}function E(F){if(n[F.id]===void 0)return;let z=n[F.id];for(let Z in z){let B=z[Z];for(let W in B){let j=B[W];for(let J in j)h(j[J].object),delete j[J];delete B[W]}}delete n[F.id]}function I(F){for(let z in n){let Z=n[z];for(let B in Z){let W=Z[B];if(W[F.id]===void 0)continue;let j=W[F.id];for(let J in j)h(j[J].object),delete j[J];delete W[F.id]}}}function _(F){for(let z in n){let Z=n[z],B=F.isInstancedMesh===!0?F.id:0,W=Z[B];if(W!==void 0){for(let j in W){let J=W[j];for(let ht in J)h(J[ht].object),delete J[ht];delete W[j]}delete Z[B],Object.keys(Z).length===0&&delete n[z]}}}function A(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:m,disableUnusedAttributes:w}}function Ig(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Pg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==fi&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let _=I===Ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==ni&&I!==bi&&!_&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(fe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:y,maxSamples:T,samples:E}}function Lg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new yi,o=new Te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let w=r?0:n,R=w*4,y=p.clippingState||null;l.value=y,y=h(g,u,R,f);for(let T=0;T!==R;++T)y[T]=e[T];p.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let p=f+M*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,y=f;R!==M;++R,y+=4)a.copy(d[R]).applyMatrix4(w,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var Fr=4,Dg=6,Ng=20,Ug=256,Ha=new Rr,$d=new Ue,Dh=null,Nh=0,Uh=0,Fh=!1,Fg=new L,Js=new L,sc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Fg}=r;Dh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Dh,Nh,Uh),this._renderer.xr.enabled=Fh,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===Ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Ei,format:fi,colorSpace:sa,depthBuffer:!1},s=Kd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Bg(r)),this._blurMaterial=kg(r,t,e),this._ggxMaterial=Og(r,t,e)}return s}_compileMaterial(t){let e=new Dt(new wn,t);this._renderer.compile(e,Ha)}_sceneToCubeUV(t,e,n,s,r){let l=new Fn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor($d),d.toneMapping=Mi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dt(new ei,new $i({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,p=!1,w=t.background;w?w.isColor&&(m.color.copy(w),t.background=null,p=!0):(m.color.copy($d),p=!0);for(let R=0;R<6;R++){let y=R%3;y===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):y===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let T=this._cubeSize;Ur(s,y*T,R>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(M,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ms||t.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ur(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ha)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-Fr?n-g+Fr:0),p=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Ur(r,m,p,3*M,2*M),s.setRenderTarget(r),s.render(o,Ha),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ur(t,m,p,3*M,2*M),s.setRenderTarget(t),s.render(o,Ha)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Fr?s-this._lodMax+Fr:0),u=4*(this._cubeSize-h);Ur(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Ha)}};function Bg(i){let t=[],e=[],n=i,s=i-Fr+1+Dg;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),M=new Float32Array(f*u*d);for(let p=0;p<d;p++){let w=p%3*2/3-1,R=p>2?0:-1,y=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];g.set(y,f*u*p);for(let T=0;T<u;T++){let E=h[T*2]*2-1,I=h[T*2+1]*2-1;p===0?Js.set(1,I,E):p===1?Js.set(-E,1,-I):p===2?Js.set(-E,I,1):p===3?Js.set(-1,I,-E):p===4?Js.set(-E,-1,I):Js.set(E,I,-1),Js.toArray(M,(p*u+T)*f)}}let m=new wn;m.setAttribute("position",new jn(g,f)),m.setAttribute("outputDirection",new jn(M,f)),e.push(new Dt(m,null)),n>Fr&&n--}return{lodMeshes:e,sizeLods:t}}function Kd(i,t,e){let n=new ti(i,t,e);return n.texture.mapping=Na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Og(i,t,e){return new li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ug,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function kg(i,t,e){return new li({name:"SphericalGaussianBlur",defines:{SAMPLES:Ng,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Qd(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function jd(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function oc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var rc=class extends ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new pa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ei(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jn,blending:Di});r.uniforms.tEquirect.value=e;let a=new Dt(s,r),o=e.minFilter;return e.minFilter===Ss&&(e.minFilter=Bn),new dl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function zg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===pl||f===ml)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let M=new rc(g.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===pl||f===ml,M=f===Ms||f===Ys;if(g||M){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new sc(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let w=u.image;return g&&w&&w.height>0||M&&w&&l(w)?(n===null&&(n=new sc(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===pl?u.mapping=Ms:f===ml&&(u.mapping=Ys),u}function l(u){let f=0,g=6;for(let M=0;M<g;M++)u[M]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Vg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&zs("WebGLRenderer: "+n+" extension not supported."),s}}}function Hg(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,M=0;if(g===void 0)return;if(f!==null){let w=f.array;M=f.version;for(let R=0,y=w.length;R<y;R+=3){let T=w[R+0],E=w[R+1],I=w[R+2];u.push(T,E,E,I,I,T)}}else{let w=g.array;M=g.version;for(let R=0,y=w.length/3-1;R<y;R+=3){let T=R+0,E=R+1,I=R+2;u.push(T,E,E,I,I,T)}}let m=new(g.count>=65535?ua:ha)(u,1);m.version=M;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Gg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let M=0;for(let m=0;m<f;m++)M+=u[m];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Wg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:xe("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Xg(i,t,e){let n=new WeakMap,s=new yn;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let A=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],R=0;f===!0&&(R=1),g===!0&&(R=2),M===!0&&(R=3);let y=o.attributes.position.count*R,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*T*4*d),I=new oa(E,y,T,d);I.type=bi,I.needsUpdate=!0;let _=R*4;for(let P=0;P<d;P++){let F=m[P],z=p[P],Z=w[P],B=y*T*4*P;for(let W=0;W<F.count;W++){let j=W*_;f===!0&&(s.fromBufferAttribute(F,W),E[B+j+0]=s.x,E[B+j+1]=s.y,E[B+j+2]=s.z,E[B+j+3]=0),g===!0&&(s.fromBufferAttribute(z,W),E[B+j+4]=s.x,E[B+j+5]=s.y,E[B+j+6]=s.z,E[B+j+7]=0),M===!0&&(s.fromBufferAttribute(Z,W),E[B+j+8]=s.x,E[B+j+9]=s.y,E[B+j+10]=s.z,E[B+j+11]=Z.itemSize===4?s.w:1)}}u={count:d,texture:I,size:new bt(y,T)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function qg(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Yg={[dh]:"LINEAR_TONE_MAPPING",[fh]:"REINHARD_TONE_MAPPING",[ph]:"CINEON_TONE_MAPPING",[Da]:"ACES_FILMIC_TONE_MAPPING",[gh]:"AGX_TONE_MAPPING",[xh]:"NEUTRAL_TONE_MAPPING",[mh]:"CUSTOM_TONE_MAPPING"};function Zg(i,t,e,n,s,r){let a=new ti(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new wn;c.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new an([0,2,0,0,2,0],2));let h=new jo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Dt(c,h),u=new Rr(-1,1,1,-1,0,1),f=null,g=null,M=!1,m,p=null,w=[],R=!1;this.setSize=function(y,T){a.setSize(y,T),o!==null&&o.setSize(y,T),l!==null&&l.setSize(y,T);for(let E=0;E<w.length;E++){let I=w[E];I.setSize&&I.setSize(y,T)}},this.setEffects=function(y){w=y,R=w.length>0&&w[0].isRenderPass===!0;let T=a.width,E=a.height;w.length>0&&o===null&&(o=new ti(T,E,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),l=new ti(T,E,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<w.length;I++){let _=w[I];_.setSize&&_.setSize(T,E)}},this.begin=function(y,T){if(M||y.toneMapping===Mi&&w.length===0)return!1;if(p=T,T!==null){let E=T.width,I=T.height;(a.width!==E||a.height!==I)&&this.setSize(E,I)}return R===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Mi,!0},this.hasRenderPass=function(){return R},this.end=function(y,T){y.toneMapping=m,M=!0;let E=a,I=o;for(let _=0;_<w.length;_++){let A=w[_];A.enabled!==!1&&(A.render(y,I,E,T),A.needsSwap!==!1&&(E=I,I=I===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},Ge.getTransfer(f)===nn&&(h.defines.SRGB_TRANSFER="");let _=Yg[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(p),y.render(d,u),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var vf=new Zn,kh=new fs(1,1),Mf=new oa,Sf=new Wo,bf=new pa,tf=[],ef=[],nf=new Float32Array(16),sf=new Float32Array(9),rf=new Float32Array(4);function Or(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=tf[s];if(r===void 0&&(r=new Float32Array(s),tf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function An(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Cn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function lc(i,t){let e=ef[t];e===void 0&&(e=new Int32Array(t),ef[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Jg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(An(e,t))return;i.uniform2fv(this.addr,t),Cn(e,t)}}function Kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(An(e,t))return;i.uniform3fv(this.addr,t),Cn(e,t)}}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(An(e,t))return;i.uniform4fv(this.addr,t),Cn(e,t)}}function jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(An(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Cn(e,t)}else{if(An(e,n))return;rf.set(n),i.uniformMatrix2fv(this.addr,!1,rf),Cn(e,n)}}function tx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(An(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Cn(e,t)}else{if(An(e,n))return;sf.set(n),i.uniformMatrix3fv(this.addr,!1,sf),Cn(e,n)}}function ex(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(An(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Cn(e,t)}else{if(An(e,n))return;nf.set(n),i.uniformMatrix4fv(this.addr,!1,nf),Cn(e,n)}}function nx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(An(e,t))return;i.uniform2iv(this.addr,t),Cn(e,t)}}function sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(An(e,t))return;i.uniform3iv(this.addr,t),Cn(e,t)}}function rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(An(e,t))return;i.uniform4iv(this.addr,t),Cn(e,t)}}function ax(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(An(e,t))return;i.uniform2uiv(this.addr,t),Cn(e,t)}}function lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(An(e,t))return;i.uniform3uiv(this.addr,t),Cn(e,t)}}function cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(An(e,t))return;i.uniform4uiv(this.addr,t),Cn(e,t)}}function hx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kh.compareFunction=e.isReversedDepthBuffer()?ec:tc,r=kh):r=vf,e.setTexture2D(t||r,s)}function ux(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Sf,s)}function dx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bf,s)}function fx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Mf,s)}function px(i){switch(i){case 5126:return Jg;case 35664:return $g;case 35665:return Kg;case 35666:return Qg;case 35674:return jg;case 35675:return tx;case 35676:return ex;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return sx;case 35669:case 35673:return rx;case 5125:return ax;case 36294:return ox;case 36295:return lx;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return fx}}function mx(i,t){i.uniform1fv(this.addr,t)}function gx(i,t){let e=Or(t,this.size,2);i.uniform2fv(this.addr,e)}function xx(i,t){let e=Or(t,this.size,3);i.uniform3fv(this.addr,e)}function _x(i,t){let e=Or(t,this.size,4);i.uniform4fv(this.addr,e)}function yx(i,t){let e=Or(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function vx(i,t){let e=Or(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Mx(i,t){let e=Or(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Sx(i,t){i.uniform1iv(this.addr,t)}function bx(i,t){i.uniform2iv(this.addr,t)}function Ex(i,t){i.uniform3iv(this.addr,t)}function Tx(i,t){i.uniform4iv(this.addr,t)}function wx(i,t){i.uniform1uiv(this.addr,t)}function Ax(i,t){i.uniform2uiv(this.addr,t)}function Cx(i,t){i.uniform3uiv(this.addr,t)}function Rx(i,t){i.uniform4uiv(this.addr,t)}function Ix(i,t,e){let n=this.cache,s=t.length,r=lc(e,s);An(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=kh:a=vf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Px(i,t,e){let n=this.cache,s=t.length,r=lc(e,s);An(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Sf,r[a])}function Lx(i,t,e){let n=this.cache,s=t.length,r=lc(e,s);An(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||bf,r[a])}function Dx(i,t,e){let n=this.cache,s=t.length,r=lc(e,s);An(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Mf,r[a])}function Nx(i){switch(i){case 5126:return mx;case 35664:return gx;case 35665:return xx;case 35666:return _x;case 35674:return yx;case 35675:return vx;case 35676:return Mx;case 5124:case 35670:return Sx;case 35667:case 35671:return bx;case 35668:case 35672:return Ex;case 35669:case 35673:return Tx;case 5125:return wx;case 36294:return Ax;case 36295:return Cx;case 36296:return Rx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Lx;case 36289:case 36303:case 36311:case 36292:return Dx}}var zh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=px(e.type)}},Vh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Nx(e.type)}},Hh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Bh=/(\w+)(\])?(\[|\.)?/g;function af(i,t){i.seq.push(t),i.map[t.id]=t}function Ux(i,t,e){let n=i.name,s=n.length;for(Bh.lastIndex=0;;){let r=Bh.exec(n),a=Bh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){af(e,c===void 0?new zh(o,i,t):new Vh(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Hh(o),af(e,d)),e=d}}}var Br=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ux(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function of(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Fx=37297,Bx=0;function Ox(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var lf=new Te;function kx(i){Ge._getMatrix(lf,Ge.workingColorSpace,i);let t=`mat3( ${lf.elements.map(e=>e.toFixed(4))} )`;switch(Ge.getTransfer(i)){case ra:return[t,"LinearTransferOETF"];case nn:return[t,"sRGBTransferOETF"];default:return fe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ox(i.getShaderSource(t),o)}else return r}function zx(i,t){let e=kx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Vx={[dh]:"Linear",[fh]:"Reinhard",[ph]:"Cineon",[Da]:"ACESFilmic",[gh]:"AgX",[xh]:"Neutral",[mh]:"Custom"};function Hx(i,t){let e=Vx[t];return e===void 0?(fe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ic=new L;function Gx(){Ge.getLuminanceCoefficients(ic);let i=ic.x.toFixed(4),t=ic.y.toFixed(4),e=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function Xx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Wa(i){return i!==""}function hf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(i){return i.replace(Yx,Jx)}var Zx=new Map;function Jx(i,t){let e=Fe[t];if(e===void 0){let n=Zx.get(t);if(n!==void 0)e=Fe[n],fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Gh(e)}var $x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(i){return i.replace($x,Kx)}function Kx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ff(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Qx={[La]:"SHADOWMAP_TYPE_PCF",[Ir]:"SHADOWMAP_TYPE_VSM"};function jx(i){return Qx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var t_={[Ms]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[Na]:"ENVMAP_TYPE_CUBE_UV"};function e_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":t_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var n_={[Ys]:"ENVMAP_MODE_REFRACTION"};function i_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":n_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var s_={[uh]:"ENVMAP_BLENDING_MULTIPLY",[Td]:"ENVMAP_BLENDING_MIX",[wd]:"ENVMAP_BLENDING_ADD"};function r_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":s_[i.combine]||"ENVMAP_BLENDING_NONE"}function a_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function o_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=jx(e),c=e_(e),h=i_(e),d=r_(e),u=a_(e),f=Wx(e),g=Xx(r),M=s.createProgram(),m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wa).join(`
`),p.length>0&&(p+=`
`)):(m=[ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),p=[ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?Fe.tonemapping_pars_fragment:"",e.toneMapping!==Mi?Hx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,zx("linearToOutputTexel",e.outputColorSpace),Gx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wa).join(`
`)),a=Gh(a),a=hf(a,e),a=uf(a,e),o=Gh(o),o=hf(o,e),o=uf(o,e),a=df(a),o=df(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=w+m+a,y=w+p+o,T=of(s,s.VERTEX_SHADER,R),E=of(s,s.FRAGMENT_SHADER,y);s.attachShader(M,T),s.attachShader(M,E),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function I(F){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(M)||"",Z=s.getShaderInfoLog(T)||"",B=s.getShaderInfoLog(E)||"",W=z.trim(),j=Z.trim(),J=B.trim(),ht=!0,tt=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ht=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,T,E);else{let at=cf(s,T,"vertex"),ot=cf(s,E,"fragment");xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+W+`
`+at+`
`+ot)}else W!==""?fe("WebGLProgram: Program Info Log:",W):(j===""||J==="")&&(tt=!1);tt&&(F.diagnostics={runnable:ht,programLog:W,vertexShader:{log:j,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(T),s.deleteShader(E),_=new Br(s,M),A=qx(s,M)}let _;this.getUniforms=function(){return _===void 0&&I(this),_};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(M,Fx)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bx++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=E,this}var l_=0,Wh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xh(t),e.set(t,n)),n}},Xh=class{constructor(t){this.id=l_++,this.code=t,this.usedTimes=0}};function c_(i){return i===Es||i===za||i===Va}function h_(i,t,e,n,s,r){let a=new la,o=new Wh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,A,P,F,z,Z){let B=F.fog,W=z.geometry,j=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?F.environment:null,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ht=t.get(_.envMap||j,J),tt=ht&&ht.mapping===Na?ht.image.height:null,at=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&fe("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let ot=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Vt=ot!==void 0?ot.length:0,Bt=0;W.morphAttributes.position!==void 0&&(Bt=1),W.morphAttributes.normal!==void 0&&(Bt=2),W.morphAttributes.color!==void 0&&(Bt=3);let oe,$t,we,nt;if(at){let on=Ui[at];oe=on.vertexShader,$t=on.fragmentShader}else{oe=_.vertexShader,$t=_.fragmentShader;let on=o.getVertexShaderStage(_),$e=o.getFragmentShaderStage(_);o.update(_,on,$e),we=on.id,nt=$e.id}let lt=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),ee=z.isInstancedMesh===!0,Pt=z.isBatchedMesh===!0,le=!!_.map,Ie=!!_.matcap,it=!!ht,ut=!!_.aoMap,pt=!!_.lightMap,mt=!!_.bumpMap&&_.wireframe===!1,yt=!!_.normalMap,ne=!!_.displacementMap,jt=!!_.emissiveMap,he=!!_.metalnessMap,_e=!!_.roughnessMap,D=_.anisotropy>0,qe=_.clearcoat>0,Me=_.dispersion>0,C=_.retroreflectivity>0,x=_.iridescence>0,V=_.sheen>0,Y=_.transmission>0,Q=D&&!!_.anisotropyMap,xt=qe&&!!_.clearcoatMap,vt=qe&&!!_.clearcoatNormalMap,K=qe&&!!_.clearcoatRoughnessMap,rt=x&&!!_.iridescenceMap,Et=x&&!!_.iridescenceThicknessMap,Xt=V&&!!_.sheenColorMap,wt=V&&!!_.sheenRoughnessMap,St=!!_.specularMap,Yt=!!_.specularColorMap,ae=!!_.specularIntensityMap,ie=Y&&!!_.transmissionMap,N=Y&&!!_.thicknessMap,dt=!!_.gradientMap,st=!!_.alphaMap,Tt=_.alphaTest>0,Lt=!!_.alphaHash,ct=!!_.extensions,Kt=Mi;_.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Kt=i.toneMapping);let Ht={shaderID:at,shaderType:_.type,shaderName:_.name,vertexShader:oe,fragmentShader:$t,defines:_.defines,customVertexShaderID:we,customFragmentShaderID:nt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Pt,batchingColor:Pt&&z._colorsTexture!==null,instancing:ee,instancingColor:ee&&z.instanceColor!==null,instancingMorph:ee&&z.morphTexture!==null,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:le,matcap:Ie,envMap:it,envMapMode:it&&ht.mapping,envMapCubeUVHeight:tt,aoMap:ut,lightMap:pt,bumpMap:mt,normalMap:yt,displacementMap:ne,emissiveMap:jt,normalMapObjectSpace:yt&&_.normalMapType===Rd,normalMapTangentSpace:yt&&_.normalMapType===jl,packedNormalMap:yt&&_.normalMapType===jl&&c_(_.normalMap.format),metalnessMap:he,roughnessMap:_e,anisotropy:D,anisotropyMap:Q,clearcoat:qe,clearcoatMap:xt,clearcoatNormalMap:vt,clearcoatRoughnessMap:K,dispersion:Me,retroreflection:C,iridescence:x,iridescenceMap:rt,iridescenceThicknessMap:Et,sheen:V,sheenColorMap:Xt,sheenRoughnessMap:wt,specularMap:St,specularColorMap:Yt,specularIntensityMap:ae,transmission:Y,transmissionMap:ie,thicknessMap:N,gradientMap:dt,opaque:_.transparent===!1&&_.blending===Pr&&_.alphaToCoverage===!1,alphaMap:st,alphaTest:Tt,alphaHash:Lt,combine:_.combine,mapUv:le&&g(_.map.channel),aoMapUv:ut&&g(_.aoMap.channel),lightMapUv:pt&&g(_.lightMap.channel),bumpMapUv:mt&&g(_.bumpMap.channel),normalMapUv:yt&&g(_.normalMap.channel),displacementMapUv:ne&&g(_.displacementMap.channel),emissiveMapUv:jt&&g(_.emissiveMap.channel),metalnessMapUv:he&&g(_.metalnessMap.channel),roughnessMapUv:_e&&g(_.roughnessMap.channel),anisotropyMapUv:Q&&g(_.anisotropyMap.channel),clearcoatMapUv:xt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:vt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:wt&&g(_.sheenRoughnessMap.channel),specularMapUv:St&&g(_.specularMap.channel),specularColorMapUv:Yt&&g(_.specularColorMap.channel),specularIntensityMapUv:ae&&g(_.specularIntensityMap.channel),transmissionMapUv:ie&&g(_.transmissionMap.channel),thicknessMapUv:N&&g(_.thicknessMap.channel),alphaMapUv:st&&g(_.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(yt||D),vertexNormals:!!W.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(le||st),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||W.attributes.normal===void 0&&yt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ct,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:Bt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Kt,decodeVideoTexture:le&&_.map.isVideoTexture===!0&&Ge.getTransfer(_.map.colorSpace)===nn,decodeVideoTextureEmissive:jt&&_.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(_.emissiveMap.colorSpace)===nn,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Li,flipSided:_.side===Jn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ct&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&_.extensions.multiDraw===!0||Pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function m(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)A.push(P),A.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(A,_),w(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function p(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function w(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function R(_){let A=f[_.type],P;if(A){let F=Ui[A];P=Yd.clone(F.uniforms)}else P=_.uniforms;return P}function y(_,A){let P=h.get(A);return P!==void 0?++P.usedTimes:(P=new o_(i,A,_,s),c.push(P),h.set(A,P)),P}function T(_){if(--_.usedTimes===0){let A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function I(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:R,acquireProgram:y,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:I}}function u_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function d_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function pf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function mf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,M,m,p){let w=i[t];return w===void 0?(w={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:p},i[t]=w):(w.id=u.id,w.object=u,w.geometry=f,w.material=g,w.materialVariant=a(u),w.groupOrder=M,w.renderOrder=u.renderOrder,w.z=m,w.group=p),t++,w}function l(u,f,g,M,m,p,w){w.reversedDepth===!0&&(m=-m);let R=o(u,f,g,M,m,p);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):e.push(R)}function c(u,f,g,M,m,p){let w=o(u,f,g,M,m,p);g.transmission>0?n.unshift(w):g.transparent===!0?s.unshift(w):e.unshift(w)}function h(u,f){e.length>1&&e.sort(u||d_),n.length>1&&n.sort(f||pf),s.length>1&&s.sort(f||pf)}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function f_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new mf,i.set(n,[a])):s>=r.length?(a=new mf,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function p_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new Ue};break;case"SpotLight":e={position:new L,direction:new L,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":e={color:new Ue,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function m_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var g_=0;function x_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function __(i){let t=new p_,e=m_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new mn,a=new mn;function o(c){let h=0,d=0,u=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,g=0,M=0,m=0,p=0,w=0,R=0,y=0,T=0,E=0,I=0,_=0,A=0,P=0;c.sort(x_);for(let z=0,Z=c.length;z<Z;z++){let B=c[z],W=B.color,j=B.intensity,J=B.distance,ht=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Es?ht=B.shadow.map.texture:ht=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)h+=W.r*j,d+=W.g*j,u+=W.b*j;else if(B.isLightProbe){for(let tt=0;tt<9;tt++)n.probe[tt].addScaledVector(B.sh.coefficients[tt],j);P++}else if(B.isSunLight){let tt=t.get(B);if(tt.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let at=B.shadow,ot=e.get(B);ot.shadowIntensity=at.intensity,ot.shadowBias=at.bias,ot.shadowNormalBias=at.normalBias,ot.shadowRadius=at.radius,ot.shadowMapSize.copy(at.mapSize).multiply(at.getFrameExtents()),n.sunShadow[g]=ot,n.sunShadowMap[g]=ht;let Vt=at.getViewportCount();for(let Bt=0;Bt<Vt;Bt++)n.sunShadowMatrix[M+Bt]=at.getMatrix(Bt),n.sunShadowCascade[M+Bt]=at._cascadeData[Bt];M+=Vt,g++}n.sun[f]=tt,f++}else if(B.isDirectionalLight){let tt=t.get(B);if(tt.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let at=B.shadow,ot=e.get(B);ot.shadowIntensity=at.intensity,ot.shadowBias=at.bias,ot.shadowNormalBias=at.normalBias,ot.shadowRadius=at.radius,ot.shadowMapSize=at.mapSize,n.directionalShadow[m]=ot,n.directionalShadowMap[m]=ht,n.directionalShadowMatrix[m]=B.shadow.matrix,T++}n.directional[m]=tt,m++}else if(B.isSpotLight){let tt=t.get(B);tt.position.setFromMatrixPosition(B.matrixWorld),tt.color.copy(W).multiplyScalar(j),tt.distance=J,tt.coneCos=Math.cos(B.angle),tt.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),tt.decay=B.decay,n.spot[w]=tt;let at=B.shadow;if(B.map&&(n.spotLightMap[_]=B.map,_++,at.updateMatrices(B),B.castShadow&&A++),n.spotLightMatrix[w]=at.matrix,B.castShadow){let ot=e.get(B);ot.shadowIntensity=at.intensity,ot.shadowBias=at.bias,ot.shadowNormalBias=at.normalBias,ot.shadowRadius=at.radius,ot.shadowMapSize=at.mapSize,n.spotShadow[w]=ot,n.spotShadowMap[w]=ht,I++}w++}else if(B.isRectAreaLight){let tt=t.get(B);tt.color.copy(W).multiplyScalar(j),tt.halfWidth.set(B.width*.5,0,0),tt.halfHeight.set(0,B.height*.5,0),n.rectArea[R]=tt,R++}else if(B.isPointLight){let tt=t.get(B);if(tt.color.copy(B.color).multiplyScalar(B.intensity),tt.distance=B.distance,tt.decay=B.decay,B.castShadow){let at=B.shadow,ot=e.get(B);ot.shadowIntensity=at.intensity,ot.shadowBias=at.bias,ot.shadowNormalBias=at.normalBias,ot.shadowRadius=at.radius,ot.shadowMapSize=at.mapSize,ot.shadowCameraNear=at.camera.near,ot.shadowCameraFar=at.camera.far,n.pointShadow[p]=ot,n.pointShadowMap[p]=ht,n.pointShadowMatrix[p]=B.shadow.matrix,E++}n.point[p]=tt,p++}else if(B.isHemisphereLight){let tt=t.get(B);tt.skyColor.copy(B.color).multiplyScalar(j),tt.groundColor.copy(B.groundColor).multiplyScalar(j),n.hemi[y]=tt,y++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let F=n.hash;(F.sunLength!==f||F.directionalLength!==m||F.pointLength!==p||F.spotLength!==w||F.rectAreaLength!==R||F.hemiLength!==y||F.numSunShadows!==g||F.numDirectionalShadows!==T||F.numPointShadows!==E||F.numSpotShadows!==I||F.numSpotMaps!==_||F.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=w,n.rectArea.length=R,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=I,n.spotShadowMap.length=I,n.spotLightMatrix.length=I+_-A,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,F.sunLength=f,F.directionalLength=m,F.pointLength=p,F.spotLength=w,F.rectAreaLength=R,F.hemiLength=y,F.numSunShadows=g,F.numDirectionalShadows=T,F.numPointShadows=E,F.numSpotShadows=I,F.numSpotMaps=_,F.numLightProbes=P,n.version=g_++)}function l(c,h){let d=0,u=0,f=0,g=0,M=0,m=0,p=h.matrixWorldInverse;for(let w=0,R=c.length;w<R;w++){let y=c[w];if(y.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),u++}else if(y.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let T=n.rectArea[M];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function gf(i){let t=new __(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function y_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new gf(i),t.set(s,[o])):r>=a.length?(o=new gf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var v_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M_=`uniform sampler2D shadow_pass;
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
}`,S_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],b_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],xf=new mn,Ga=new L,Oh=new L;function E_(i,t,e){let n=new Er,s=new bt,r=new bt,a=new yn,o=new tl,l=new el,c={},h=e.maxTextureSize,d={[vs]:Jn,[Jn]:vs,[Li]:Li},u=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:v_,fragmentShader:M_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new wn;g.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Dt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=La;let p=this.type;this.render=function(E,I,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===ad&&(fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=La);let A=i.getRenderTarget(),P=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Di),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let Z=p!==this.type;Z&&I.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(W=>W.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,W=E.length;B<W;B++){let j=E[B],J=j.shadow;if(J===void 0){fe("WebGLShadowMap:",j,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let ht=J.getFrameExtents();s.multiply(ht),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,J.mapSize.y=r.y));let tt=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=tt,J.map===null||Z===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Ir){if(j.isPointLight){fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new ti(s.x,s.y,{format:Es,type:Ei,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),J.map.texture.name=j.name+".shadowMap",J.map.depthTexture=new fs(s.x,s.y,bi),J.map.depthTexture.name=j.name+".shadowMapDepth",J.map.depthTexture.format=Ri,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Dn,J.map.depthTexture.magFilter=Dn}else j.isPointLight?(J.map=new rc(s.x),J.map.depthTexture=new qo(s.x,Si)):(J.map=new ti(s.x,s.y),J.map.depthTexture=new fs(s.x,s.y,Si)),J.map.depthTexture.name=j.name+".shadowMap",J.map.depthTexture.format=Ri,this.type===La?(J.map.depthTexture.compareFunction=tt?ec:tc,J.map.depthTexture.minFilter=Bn,J.map.depthTexture.magFilter=Bn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Dn,J.map.depthTexture.magFilter=Dn);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let at=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();j.isPointLight!==!0&&J.updateMatrices(j,_);for(let ot=0;ot<at;ot++){let Vt=J.getCamera(ot);if(j.isPointLight){let Bt=J.camera,oe=J.matrix,$t=j.distance||Bt.far;$t!==Bt.far&&(Bt.far=$t,Bt.updateProjectionMatrix()),Ga.setFromMatrixPosition(j.matrixWorld),Bt.position.copy(Ga),Oh.copy(Bt.position),Oh.add(S_[ot]),Bt.up.copy(b_[ot]),Bt.lookAt(Oh),Bt.updateMatrixWorld(),oe.makeTranslation(-Ga.x,-Ga.y,-Ga.z),xf.multiplyMatrices(Bt.projectionMatrix,Bt.matrixWorldInverse),J._frustum.setFromProjectionMatrix(xf,Bt.coordinateSystem,Bt.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,ot),i.clear();else{ot===0&&(i.setRenderTarget(J.map),i.clear());let Bt=J.getViewport(ot);a.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),z.viewport(a)}n=J.getFrustum(ot),y(I,_,Vt,j,this.type)}J.isPointLightShadow!==!0&&this.type===Ir&&w(J,_),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,P,F)};function w(E,I){let _=t.update(M);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new ti(s.x,s.y,{format:Es,type:Ei}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(I,null,_,u,M,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(I,null,_,f,M,null)}function R(E,I,_,A){let P=null,F=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)P=F;else if(P=_.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let z=P.uuid,Z=I.uuid,B=c[z];B===void 0&&(B={},c[z]=B);let W=B[Z];W===void 0&&(W=P.clone(),B[Z]=W,I.addEventListener("dispose",T)),P=W}if(P.visible=I.visible,P.wireframe=I.wireframe,A===Ir?P.side=I.shadowSide!==null?I.shadowSide:I.side:P.side=I.shadowSide!==null?I.shadowSide:d[I.side],P.alphaMap=I.alphaMap,P.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,P.map=I.map,P.clipShadows=I.clipShadows,P.clippingPlanes=I.clippingPlanes,P.clipIntersection=I.clipIntersection,P.displacementMap=I.displacementMap,P.displacementScale=I.displacementScale,P.displacementBias=I.displacementBias,P.wireframeLinewidth=I.wireframeLinewidth,P.linewidth=I.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let z=i.properties.get(P);z.light=_}return P}function y(E,I,_,A,P){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Ir)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let Z=t.update(E),B=E.material;if(Array.isArray(B)){let W=Z.groups;for(let j=0,J=W.length;j<J;j++){let ht=W[j],tt=B[ht.materialIndex];if(tt&&tt.visible){let at=R(E,tt,A,P);E.onBeforeShadow(i,E,I,_,Z,at,ht),i.renderBufferDirect(_,null,Z,at,E,ht),E.onAfterShadow(i,E,I,_,Z,at,ht)}}}else if(B.visible){let W=R(E,B,A,P);E.onBeforeShadow(i,E,I,_,Z,W,null),i.renderBufferDirect(_,null,Z,W,E,null),E.onAfterShadow(i,E,I,_,Z,W,null)}}let z=E.children;for(let Z=0,B=z.length;Z<B;Z++)y(z[Z],I,_,A,P)}function T(E){E.target.removeEventListener("dispose",T);for(let _ in c){let A=c[_],P=E.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function T_(i,t){function e(){let N=!1,dt=new yn,st=null,Tt=new yn(0,0,0,0);return{setMask:function(Lt){st!==Lt&&!N&&(i.colorMask(Lt,Lt,Lt,Lt),st=Lt)},setLocked:function(Lt){N=Lt},setClear:function(Lt,ct,Kt,Ht,on){on===!0&&(Lt*=Ht,ct*=Ht,Kt*=Ht),dt.set(Lt,ct,Kt,Ht),Tt.equals(dt)===!1&&(i.clearColor(Lt,ct,Kt,Ht),Tt.copy(dt))},reset:function(){N=!1,st=null,Tt.set(-1,0,0,0)}}}function n(){let N=!1,dt=!1,st=null,Tt=null,Lt=null;return{setReversed:function(ct){if(dt!==ct){let Kt=t.get("EXT_clip_control");ct?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT),dt=ct;let Ht=Lt;Lt=null,this.setClear(Ht)}},getReversed:function(){return dt},setTest:function(ct){ct?lt(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(ct){st!==ct&&!N&&(i.depthMask(ct),st=ct)},setFunc:function(ct){if(dt&&(ct=Vd[ct]),Tt!==ct){switch(ct){case Lo:i.depthFunc(i.NEVER);break;case Do:i.depthFunc(i.ALWAYS);break;case No:i.depthFunc(i.LESS);break;case yr:i.depthFunc(i.LEQUAL);break;case Uo:i.depthFunc(i.EQUAL);break;case Fo:i.depthFunc(i.GEQUAL);break;case Bo:i.depthFunc(i.GREATER);break;case Oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=ct}},setLocked:function(ct){N=ct},setClear:function(ct){Lt!==ct&&(Lt=ct,dt&&(ct=1-ct),i.clearDepth(ct))},reset:function(){N=!1,st=null,Tt=null,Lt=null,dt=!1}}}function s(){let N=!1,dt=null,st=null,Tt=null,Lt=null,ct=null,Kt=null,Ht=null,on=null;return{setTest:function($e){N||($e?lt(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function($e){dt!==$e&&!N&&(i.stencilMask($e),dt=$e)},setFunc:function($e,Nn,ii){(st!==$e||Tt!==Nn||Lt!==ii)&&(i.stencilFunc($e,Nn,ii),st=$e,Tt=Nn,Lt=ii)},setOp:function($e,Nn,ii){(ct!==$e||Kt!==Nn||Ht!==ii)&&(i.stencilOp($e,Nn,ii),ct=$e,Kt=Nn,Ht=ii)},setLocked:function($e){N=$e},setClear:function($e){on!==$e&&(i.clearStencil($e),on=$e)},reset:function(){N=!1,dt=null,st=null,Tt=null,Lt=null,ct=null,Kt=null,Ht=null,on=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],M=null,m=!1,p=null,w=null,R=null,y=null,T=null,E=null,I=null,_=new Ue(0,0,0),A=0,P=!1,F=null,z=null,Z=null,B=null,W=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,ht=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(tt)[1]),J=ht>=1):tt.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),J=ht>=2);let at=null,ot={},Vt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),oe=new yn().fromArray(Vt),$t=new yn().fromArray(Bt);function we(N,dt,st,Tt){let Lt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(N,ct),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<st;Kt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,Lt):i.texImage2D(dt+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Lt);return ct}let nt={};nt[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc(yr),mt(!1),yt(rh),lt(i.CULL_FACE),ut(Di);function lt(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Ct(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function ee(N,dt){return u[N]!==dt?(i.bindFramebuffer(N,dt),u[N]=dt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=dt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function Pt(N,dt){let st=g,Tt=!1;if(N){st=f.get(dt),st===void 0&&(st=[],f.set(dt,st));let Lt=N.textures;if(st.length!==Lt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Kt=Lt.length;ct<Kt;ct++)st[ct]=i.COLOR_ATTACHMENT0+ct;st.length=Lt.length,Tt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(st)}function le(N){return M!==N?(i.useProgram(N),M=N,!0):!1}let Ie={[qs]:i.FUNC_ADD,[ld]:i.FUNC_SUBTRACT,[cd]:i.FUNC_REVERSE_SUBTRACT};Ie[hd]=i.MIN,Ie[ud]=i.MAX;let it={[dd]:i.ZERO,[fd]:i.ONE,[pd]:i.SRC_COLOR,[ch]:i.SRC_ALPHA,[vd]:i.SRC_ALPHA_SATURATE,[_d]:i.DST_COLOR,[gd]:i.DST_ALPHA,[md]:i.ONE_MINUS_SRC_COLOR,[hh]:i.ONE_MINUS_SRC_ALPHA,[yd]:i.ONE_MINUS_DST_COLOR,[xd]:i.ONE_MINUS_DST_ALPHA,[Md]:i.CONSTANT_COLOR,[Sd]:i.ONE_MINUS_CONSTANT_COLOR,[bd]:i.CONSTANT_ALPHA,[Ed]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(N,dt,st,Tt,Lt,ct,Kt,Ht,on,$e){if(N===Di){m===!0&&(Ct(i.BLEND),m=!1);return}if(m===!1&&(lt(i.BLEND),m=!0),N!==od){if(N!==p||$e!==P){if((w!==qs||T!==qs)&&(i.blendEquation(i.FUNC_ADD),w=qs,T=qs),$e)switch(N){case Pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ah:i.blendFunc(i.ONE,i.ONE);break;case oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:xe("WebGLState: Invalid blending: ",N);break}else switch(N){case Pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ah:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case oh:xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lh:xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xe("WebGLState: Invalid blending: ",N);break}R=null,y=null,E=null,I=null,_.set(0,0,0),A=0,p=N,P=$e}return}Lt=Lt||dt,ct=ct||st,Kt=Kt||Tt,(dt!==w||Lt!==T)&&(i.blendEquationSeparate(Ie[dt],Ie[Lt]),w=dt,T=Lt),(st!==R||Tt!==y||ct!==E||Kt!==I)&&(i.blendFuncSeparate(it[st],it[Tt],it[ct],it[Kt]),R=st,y=Tt,E=ct,I=Kt),(Ht.equals(_)===!1||on!==A)&&(i.blendColor(Ht.r,Ht.g,Ht.b,on),_.copy(Ht),A=on),p=N,P=!1}function pt(N,dt){N.side===Li?Ct(i.CULL_FACE):lt(i.CULL_FACE);let st=N.side===Jn;dt&&(st=!st),mt(st),N.blending===Pr&&N.transparent===!1?ut(Di):ut(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let Tt=N.stencilWrite;o.setTest(Tt),Tt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),jt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(N){F!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),F=N)}function yt(N){N!==sd?(lt(i.CULL_FACE),N!==z&&(N===rh?i.cullFace(i.BACK):N===rd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),z=N}function ne(N){N!==Z&&(J&&i.lineWidth(N),Z=N)}function jt(N,dt,st){N?(lt(i.POLYGON_OFFSET_FILL),(B!==dt||W!==st)&&(B=dt,W=st,a.getReversed()&&(dt=-dt),i.polygonOffset(dt,st))):Ct(i.POLYGON_OFFSET_FILL)}function he(N){N?lt(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function _e(N){N===void 0&&(N=i.TEXTURE0+j-1),at!==N&&(i.activeTexture(N),at=N)}function D(N,dt,st){st===void 0&&(at===null?st=i.TEXTURE0+j-1:st=at);let Tt=ot[st];Tt===void 0&&(Tt={type:void 0,texture:void 0},ot[st]=Tt),(Tt.type!==N||Tt.texture!==dt)&&(at!==st&&(i.activeTexture(st),at=st),i.bindTexture(N,dt||nt[N]),Tt.type=N,Tt.texture=dt)}function qe(){let N=ot[at];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Me(){try{i.compressedTexImage2D(...arguments)}catch(N){xe("WebGLState:",N)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(N){xe("WebGLState:",N)}}function x(){try{i.texSubImage2D(...arguments)}catch(N){xe("WebGLState:",N)}}function V(){try{i.texSubImage3D(...arguments)}catch(N){xe("WebGLState:",N)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(N){xe("WebGLState:",N)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(N){xe("WebGLState:",N)}}function xt(){try{i.texStorage2D(...arguments)}catch(N){xe("WebGLState:",N)}}function vt(){try{i.texStorage3D(...arguments)}catch(N){xe("WebGLState:",N)}}function K(){try{i.texImage2D(...arguments)}catch(N){xe("WebGLState:",N)}}function rt(){try{i.texImage3D(...arguments)}catch(N){xe("WebGLState:",N)}}function Et(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function Xt(N,dt){d[N]!==dt&&(i.pixelStorei(N,dt),d[N]=dt)}function wt(N){oe.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),oe.copy(N))}function St(N){$t.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),$t.copy(N))}function Yt(N,dt){let st=c.get(dt);st===void 0&&(st=new WeakMap,c.set(dt,st));let Tt=st.get(N);Tt===void 0&&(Tt=i.getUniformBlockIndex(dt,N.name),st.set(N,Tt))}function ae(N,dt){let Tt=c.get(dt).get(N);l.get(dt)!==Tt&&(i.uniformBlockBinding(dt,Tt,N.__bindingPointIndex),l.set(dt,Tt))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},at=null,ot={},u={},f=new WeakMap,g=[],M=null,m=!1,p=null,w=null,R=null,y=null,T=null,E=null,I=null,_=new Ue(0,0,0),A=0,P=!1,F=null,z=null,Z=null,B=null,W=null,oe.set(0,0,i.canvas.width,i.canvas.height),$t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Ct,bindFramebuffer:ee,drawBuffers:Pt,useProgram:le,setBlending:ut,setMaterial:pt,setFlipSided:mt,setCullFace:yt,setLineWidth:ne,setPolygonOffset:jt,setScissorTest:he,activeTexture:_e,bindTexture:D,unbindTexture:qe,compressedTexImage2D:Me,compressedTexImage3D:C,texImage2D:K,texImage3D:rt,pixelStorei:Xt,getParameter:Et,updateUBOMapping:Yt,uniformBlockBinding:ae,texStorage2D:xt,texStorage3D:vt,texSubImage2D:x,texSubImage3D:V,compressedTexSubImage2D:Y,compressedTexSubImage3D:Q,scissor:wt,viewport:St,reset:ie}}function w_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,x){return g?new OffscreenCanvas(C,x):aa("canvas")}function m(C,x,V){let Y=1,Q=Me(C);if((Q.width>V||Q.height>V)&&(Y=V/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let xt=Math.floor(Y*Q.width),vt=Math.floor(Y*Q.height);u===void 0&&(u=M(xt,vt));let K=x?M(xt,vt):u;return K.width=xt,K.height=vt,K.getContext("2d").drawImage(C,0,0,xt,vt),fe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+xt+"x"+vt+")."),K}else return"data"in C&&fe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function p(C){return C.generateMipmaps}function w(C){i.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,x,V,Y,Q,xt=!1){if(C!==null){if(i[C]!==void 0)return i[C];fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let vt;Y&&(vt=t.get("EXT_texture_norm16"),vt||fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=x;if(x===i.RED&&(V===i.FLOAT&&(K=i.R32F),V===i.HALF_FLOAT&&(K=i.R16F),V===i.UNSIGNED_BYTE&&(K=i.R8),V===i.UNSIGNED_SHORT&&vt&&(K=vt.R16_EXT),V===i.SHORT&&vt&&(K=vt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.R8UI),V===i.UNSIGNED_SHORT&&(K=i.R16UI),V===i.UNSIGNED_INT&&(K=i.R32UI),V===i.BYTE&&(K=i.R8I),V===i.SHORT&&(K=i.R16I),V===i.INT&&(K=i.R32I)),x===i.RG&&(V===i.FLOAT&&(K=i.RG32F),V===i.HALF_FLOAT&&(K=i.RG16F),V===i.UNSIGNED_BYTE&&(K=i.RG8),V===i.UNSIGNED_SHORT&&vt&&(K=vt.RG16_EXT),V===i.SHORT&&vt&&(K=vt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RG8UI),V===i.UNSIGNED_SHORT&&(K=i.RG16UI),V===i.UNSIGNED_INT&&(K=i.RG32UI),V===i.BYTE&&(K=i.RG8I),V===i.SHORT&&(K=i.RG16I),V===i.INT&&(K=i.RG32I)),x===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGB8UI),V===i.UNSIGNED_SHORT&&(K=i.RGB16UI),V===i.UNSIGNED_INT&&(K=i.RGB32UI),V===i.BYTE&&(K=i.RGB8I),V===i.SHORT&&(K=i.RGB16I),V===i.INT&&(K=i.RGB32I)),x===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),V===i.UNSIGNED_INT&&(K=i.RGBA32UI),V===i.BYTE&&(K=i.RGBA8I),V===i.SHORT&&(K=i.RGBA16I),V===i.INT&&(K=i.RGBA32I)),x===i.RGB&&(V===i.UNSIGNED_SHORT&&vt&&(K=vt.RGB16_EXT),V===i.SHORT&&vt&&(K=vt.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),x===i.RGBA){let rt=xt?ra:Ge.getTransfer(Q);V===i.FLOAT&&(K=i.RGBA32F),V===i.HALF_FLOAT&&(K=i.RGBA16F),V===i.UNSIGNED_BYTE&&(K=rt===nn?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&vt&&(K=vt.RGBA16_EXT),V===i.SHORT&&vt&&(K=vt.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function T(C,x){let V;return C?x===null||x===Si||x===Dr?V=i.DEPTH24_STENCIL8:x===bi?V=i.DEPTH32F_STENCIL8:x===Lr&&(V=i.DEPTH24_STENCIL8,fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Si||x===Dr?V=i.DEPTH_COMPONENT24:x===bi?V=i.DEPTH_COMPONENT32F:x===Lr&&(V=i.DEPTH_COMPONENT16),V}function E(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Dn&&C.minFilter!==Bn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function I(C){let x=C.target;x.removeEventListener("dispose",I),A(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function _(C){let x=C.target;x.removeEventListener("dispose",_),F(x)}function A(C){let x=n.get(C);if(x.__webglInit===void 0)return;let V=C.source,Y=f.get(V);if(Y){let Q=Y[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(C),Object.keys(Y).length===0&&f.delete(V)}n.remove(C)}function P(C){let x=n.get(C);i.deleteTexture(x.__webglTexture);let V=C.source,Y=f.get(V);delete Y[x.__cacheKey],a.memory.textures--}function F(C){let x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let Q=0;Q<x.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let V=C.textures;for(let Y=0,Q=V.length;Y<Q;Y++){let xt=n.get(V[Y]);xt.__webglTexture&&(i.deleteTexture(xt.__webglTexture),a.memory.textures--),n.remove(V[Y])}n.remove(C)}let z=0;function Z(){z=0}function B(){return z}function W(C){z=C}function j(){let C=z;return C>=s.maxTextures&&fe("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,C}function J(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function ht(C,x){let V=n.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){let Y=C.image;if(Y===null)fe("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(V,C,x);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+x)}function tt(C,x){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Ct(V,C,x);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+x)}function at(C,x){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Ct(V,C,x);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+x)}function ot(C,x){let V=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&V.__version!==C.version){ee(V,C,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+x)}let Vt={[Yi]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[ko]:i.MIRRORED_REPEAT},Bt={[Dn]:i.NEAREST,[Ad]:i.NEAREST_MIPMAP_NEAREST,[Ua]:i.NEAREST_MIPMAP_LINEAR,[Bn]:i.LINEAR,[gl]:i.LINEAR_MIPMAP_NEAREST,[Ss]:i.LINEAR_MIPMAP_LINEAR},oe={[Pd]:i.NEVER,[Fd]:i.ALWAYS,[Ld]:i.LESS,[tc]:i.LEQUAL,[Dd]:i.EQUAL,[ec]:i.GEQUAL,[Nd]:i.GREATER,[Ud]:i.NOTEQUAL};function $t(C,x){if(x.type===bi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Bn||x.magFilter===gl||x.magFilter===Ua||x.magFilter===Ss||x.minFilter===Bn||x.minFilter===gl||x.minFilter===Ua||x.minFilter===Ss)&&fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Vt[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Vt[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Vt[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Bt[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Bt[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,oe[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Dn||x.minFilter!==Ua&&x.minFilter!==Ss||x.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function we(C,x){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",I));let Y=x.source,Q=f.get(Y);Q===void 0&&(Q={},f.set(Y,Q));let xt=J(x);if(xt!==C.__cacheKey){Q[xt]===void 0&&(Q[xt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[xt].usedTimes++;let vt=Q[C.__cacheKey];vt!==void 0&&(Q[C.__cacheKey].usedTimes--,vt.usedTimes===0&&P(x)),C.__cacheKey=xt,C.__webglTexture=Q[xt].texture}return V}function nt(C,x,V){return Math.floor(Math.floor(C/V)/x)}function lt(C,x,V,Y){let xt=C.updateRanges;if(xt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,V,Y,x.data);else{xt.sort((Xt,wt)=>Xt.start-wt.start);let vt=0;for(let Xt=1;Xt<xt.length;Xt++){let wt=xt[vt],St=xt[Xt],Yt=wt.start+wt.count,ae=nt(St.start,x.width,4),ie=nt(wt.start,x.width,4);St.start<=Yt+1&&ae===ie&&nt(St.start+St.count-1,x.width,4)===ae?wt.count=Math.max(wt.count,St.start+St.count-wt.start):(++vt,xt[vt]=St)}xt.length=vt+1;let K=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),Et=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Xt=0,wt=xt.length;Xt<wt;Xt++){let St=xt[Xt],Yt=Math.floor(St.start/4),ae=Math.ceil(St.count/4),ie=Yt%x.width,N=Math.floor(Yt/x.width),dt=ae,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),e.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,ie,N,dt,st,V,Y,x.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Et)}}function Ct(C,x,V){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);let Q=we(C,x),xt=x.source;e.bindTexture(Y,C.__webglTexture,i.TEXTURE0+V);let vt=n.get(xt);if(xt.version!==vt.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let st=Ge.getPrimaries(Ge.workingColorSpace),Tt=x.colorSpace===Qi?null:Ge.getPrimaries(x.colorSpace),Lt=x.colorSpace===Qi||st===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let rt=m(x.image,!1,s.maxTextureSize);rt=qe(x,rt);let Et=r.convert(x.format,x.colorSpace),Xt=r.convert(x.type),wt=y(x.internalFormat,Et,Xt,x.normalized,x.colorSpace,x.isVideoTexture);$t(Y,x);let St,Yt=x.mipmaps,ae=x.isVideoTexture!==!0,ie=vt.__version===void 0||Q===!0,N=xt.dataReady,dt=E(x,rt);if(x.isDepthTexture)wt=T(x.format===bs,x.type),ie&&(ae?e.texStorage2D(i.TEXTURE_2D,1,wt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,wt,rt.width,rt.height,0,Et,Xt,null));else if(x.isDataTexture)if(Yt.length>0){ae&&ie&&e.texStorage2D(i.TEXTURE_2D,dt,wt,Yt[0].width,Yt[0].height);for(let st=0,Tt=Yt.length;st<Tt;st++)St=Yt[st],ae?N&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,St.width,St.height,Et,Xt,St.data):e.texImage2D(i.TEXTURE_2D,st,wt,St.width,St.height,0,Et,Xt,St.data);x.generateMipmaps=!1}else ae?(ie&&e.texStorage2D(i.TEXTURE_2D,dt,wt,rt.width,rt.height),N&&lt(x,rt,Et,Xt)):e.texImage2D(i.TEXTURE_2D,0,wt,rt.width,rt.height,0,Et,Xt,rt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ae&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,wt,Yt[0].width,Yt[0].height,rt.depth);for(let st=0,Tt=Yt.length;st<Tt;st++)if(St=Yt[st],x.format!==fi)if(Et!==null)if(ae){if(N)if(x.layerUpdates.size>0){let Lt=Lh(St.width,St.height,x.format,x.type);for(let ct of x.layerUpdates){let Kt=St.data.subarray(ct*Lt/St.data.BYTES_PER_ELEMENT,(ct+1)*Lt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,ct,St.width,St.height,1,Et,Kt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,St.width,St.height,rt.depth,Et,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,wt,St.width,St.height,rt.depth,0,St.data,0,0);else fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,St.width,St.height,rt.depth,Et,Xt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,wt,St.width,St.height,rt.depth,0,Et,Xt,St.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ae&&ie&&e.texStorage2D(i.TEXTURE_2D,dt,wt,Yt[0].width,Yt[0].height);for(let st=0,Tt=Yt.length;st<Tt;st++)St=Yt[st],x.format!==fi?Et!==null?ae?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,St.width,St.height,Et,St.data):e.compressedTexImage2D(i.TEXTURE_2D,st,wt,St.width,St.height,0,St.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?N&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,St.width,St.height,Et,Xt,St.data):e.texImage2D(i.TEXTURE_2D,st,wt,St.width,St.height,0,Et,Xt,St.data)}else if(x.isDataArrayTexture)if(ae){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,wt,rt.width,rt.height,rt.depth),N)if(x.layerUpdates.size>0){let st=Lh(rt.width,rt.height,x.format,x.type);for(let Tt of x.layerUpdates){let Lt=rt.data.subarray(Tt*st/rt.data.BYTES_PER_ELEMENT,(Tt+1)*st/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,rt.width,rt.height,1,Et,Xt,Lt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Et,Xt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,rt.width,rt.height,rt.depth,0,Et,Xt,rt.data);else if(x.isData3DTexture)ae?(ie&&e.texStorage3D(i.TEXTURE_3D,dt,wt,rt.width,rt.height,rt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Et,Xt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,wt,rt.width,rt.height,rt.depth,0,Et,Xt,rt.data);else if(x.isFramebufferTexture){if(ie)if(ae)e.texStorage2D(i.TEXTURE_2D,dt,wt,rt.width,rt.height);else{let st=rt.width,Tt=rt.height;for(let Lt=0;Lt<dt;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,wt,st,Tt,0,Et,Xt,null),st>>=1,Tt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),rt.parentNode!==st){st.appendChild(rt),d.add(x),st.onpaint=Tt=>{let Lt=Tt.changedElements;for(let ct of d)Lt.includes(ct.image)&&(ct.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{let Lt=i.RGBA,ct=i.RGBA,Kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Lt,ct,Kt,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Yt.length>0){if(ae&&ie){let st=Me(Yt[0]);e.texStorage2D(i.TEXTURE_2D,dt,wt,st.width,st.height)}for(let st=0,Tt=Yt.length;st<Tt;st++)St=Yt[st],ae?N&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Et,Xt,St):e.texImage2D(i.TEXTURE_2D,st,wt,Et,Xt,St);x.generateMipmaps=!1}else if(ae){if(ie){let st=Me(rt);e.texStorage2D(i.TEXTURE_2D,dt,wt,st.width,st.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Xt,rt)}else e.texImage2D(i.TEXTURE_2D,0,wt,Et,Xt,rt);p(x)&&w(Y),vt.__version=xt.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function ee(C,x,V){if(x.image.length!==6)return;let Y=we(C,x),Q=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+V);let xt=n.get(Q);if(Q.version!==xt.__version||Y===!0){e.activeTexture(i.TEXTURE0+V);let vt=Ge.getPrimaries(Ge.workingColorSpace),K=x.colorSpace===Qi?null:Ge.getPrimaries(x.colorSpace),rt=x.colorSpace===Qi||vt===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Et=x.isCompressedTexture||x.image[0].isCompressedTexture,Xt=x.image[0]&&x.image[0].isDataTexture,wt=[];for(let ct=0;ct<6;ct++)!Et&&!Xt?wt[ct]=m(x.image[ct],!0,s.maxCubemapSize):wt[ct]=Xt?x.image[ct].image:x.image[ct],wt[ct]=qe(x,wt[ct]);let St=wt[0],Yt=r.convert(x.format,x.colorSpace),ae=r.convert(x.type),ie=y(x.internalFormat,Yt,ae,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,dt=xt.__version===void 0||Y===!0,st=Q.dataReady,Tt=E(x,St);$t(i.TEXTURE_CUBE_MAP,x);let Lt;if(Et){N&&dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,ie,St.width,St.height);for(let ct=0;ct<6;ct++){Lt=wt[ct].mipmaps;for(let Kt=0;Kt<Lt.length;Kt++){let Ht=Lt[Kt];x.format!==fi?Yt!==null?N?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Kt,0,0,Ht.width,Ht.height,Yt,Ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Kt,ie,Ht.width,Ht.height,0,Ht.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Kt,0,0,Ht.width,Ht.height,Yt,ae,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Kt,ie,Ht.width,Ht.height,0,Yt,ae,Ht.data)}}}else{if(Lt=x.mipmaps,N&&dt){Lt.length>0&&Tt++;let ct=Me(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,ie,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Xt){N?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,wt[ct].width,wt[ct].height,Yt,ae,wt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ie,wt[ct].width,wt[ct].height,0,Yt,ae,wt[ct].data);for(let Kt=0;Kt<Lt.length;Kt++){let on=Lt[Kt].image[ct].image;N?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Kt+1,0,0,on.width,on.height,Yt,ae,on.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Kt+1,ie,on.width,on.height,0,Yt,ae,on.data)}}else{N?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Yt,ae,wt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ie,Yt,ae,wt[ct]);for(let Kt=0;Kt<Lt.length;Kt++){let Ht=Lt[Kt];N?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Kt+1,0,0,Yt,ae,Ht.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Kt+1,ie,Yt,ae,Ht.image[ct])}}}p(x)&&w(i.TEXTURE_CUBE_MAP),xt.__version=Q.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Pt(C,x,V,Y,Q,xt){let vt=r.convert(V.format,V.colorSpace),K=r.convert(V.type),rt=y(V.internalFormat,vt,K,V.normalized,V.colorSpace),Et=n.get(x),Xt=n.get(V);if(Xt.__renderTarget=x,!Et.__hasExternalTextures){let wt=Math.max(1,x.width>>xt),St=Math.max(1,x.height>>xt);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,xt,rt,wt,St,x.depth,0,vt,K,null):e.texImage2D(Q,xt,rt,wt,St,0,vt,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),_e(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,Xt.__webglTexture,0,he(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,Xt.__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function le(C,x,V){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){let Y=x.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,xt=T(x.stencilBuffer,Q),vt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_e(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(x),xt,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(x),xt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,xt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,C)}else{let Y=x.textures;for(let Q=0;Q<Y.length;Q++){let xt=Y[Q],vt=r.convert(xt.format,xt.colorSpace),K=r.convert(xt.type),rt=y(xt.internalFormat,vt,K,xt.normalized,xt.colorSpace);_e(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(x),rt,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(x),rt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,rt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(C,x,V){let Y=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(x.depthTexture);if(Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,x.depthTexture.addEventListener("dispose",I)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),$t(i.TEXTURE_CUBE_MAP,x.depthTexture);let Et=r.convert(x.depthTexture.format),Xt=r.convert(x.depthTexture.type),wt;x.depthTexture.format===Ri?wt=i.DEPTH_COMPONENT24:x.depthTexture.format===bs&&(wt=i.DEPTH24_STENCIL8);for(let St=0;St<6;St++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,wt,x.width,x.height,0,Et,Xt,null)}}else ht(x.depthTexture,0);let xt=Q.__webglTexture,vt=he(x),K=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,rt=x.depthTexture.format===bs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ri)_e(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,K,xt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,rt,K,xt,0);else if(x.depthTexture.format===bs)_e(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,K,xt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,rt,K,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(C){let x=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let Y=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=Y}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(V)for(let Y=0;Y<6;Y++)Ie(x.__webglFramebuffer[Y],C,Y);else{let Y=C.texture.mipmaps;Y&&Y.length>0?Ie(x.__webglFramebuffer[0],C,0):Ie(x.__webglFramebuffer,C,0)}else if(V){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),le(x.__webglDepthbuffer[Y],C,!1);else{let Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,xt)}}else{let Y=C.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),le(x.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,xt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(C,x,V){let Y=n.get(C);x!==void 0&&Pt(Y.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&it(C)}function pt(C){let x=C.texture,V=n.get(C),Y=n.get(x);C.addEventListener("dispose",_);let Q=C.textures,xt=C.isWebGLCubeRenderTarget===!0,vt=Q.length>1;if(vt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,a.memory.textures++),xt){V.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[K]=[];for(let rt=0;rt<x.mipmaps.length;rt++)V.__webglFramebuffer[K][rt]=i.createFramebuffer()}else V.__webglFramebuffer[K]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)V.__webglFramebuffer[K]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(vt)for(let K=0,rt=Q.length;K<rt;K++){let Et=n.get(Q[K]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&_e(C)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let K=0;K<Q.length;K++){let rt=Q[K];V.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[K]);let Et=r.convert(rt.format,rt.colorSpace),Xt=r.convert(rt.type),wt=y(rt.internalFormat,Et,Xt,rt.normalized,rt.colorSpace,C.isXRRenderTarget===!0),St=he(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,wt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,V.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),le(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xt){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),$t(i.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0)for(let rt=0;rt<x.mipmaps.length;rt++)Pt(V.__webglFramebuffer[K][rt],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,rt);else Pt(V.__webglFramebuffer[K],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(x)&&w(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let K=0,rt=Q.length;K<rt;K++){let Et=Q[K],Xt=n.get(Et),wt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(wt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,Xt.__webglTexture),$t(wt,Et),Pt(V.__webglFramebuffer,C,Et,i.COLOR_ATTACHMENT0+K,wt,0),p(Et)&&w(wt)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,Y.__webglTexture),$t(K,x),x.mipmaps&&x.mipmaps.length>0)for(let rt=0;rt<x.mipmaps.length;rt++)Pt(V.__webglFramebuffer[rt],C,x,i.COLOR_ATTACHMENT0,K,rt);else Pt(V.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,K,0);p(x)&&w(K),e.unbindTexture()}C.depthBuffer&&it(C)}function mt(C){let x=C.textures;for(let V=0,Y=x.length;V<Y;V++){let Q=x[V];if(p(Q)){let xt=R(C),vt=n.get(Q).__webglTexture;e.bindTexture(xt,vt),w(xt),e.unbindTexture()}}}let yt=[],ne=[];function jt(C){if(C.samples>0){if(_e(C)===!1){let x=C.textures,V=C.width,Y=C.height,Q=i.COLOR_BUFFER_BIT,xt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(C),K=x.length>1;if(K)for(let Et=0;Et<x.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);let rt=C.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Et=0;Et<x.length;Et++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Et]);let Xt=n.get(x[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,V,Y,0,0,V,Y,Q,i.NEAREST),l===!0&&(yt.length=0,ne.length=0,yt.push(i.COLOR_ATTACHMENT0+Et),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(yt.push(xt),ne.push(xt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let Et=0;Et<x.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Et]);let Xt=n.get(x[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function he(C){return Math.min(s.maxSamples,C.samples)}function _e(C){let x=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function D(C){let x=a.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function qe(C,x){let V=C.colorSpace,Y=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==sa&&V!==Qi&&(Ge.getTransfer(V)===nn?(Y!==fi||Q!==ni)&&fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xe("WebGLTextures: Unsupported texture color space:",V)),x}function Me(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=Z,this.getTextureUnits=B,this.setTextureUnits=W,this.setTexture2D=ht,this.setTexture2DArray=tt,this.setTexture3D=at,this.setTextureCube=ot,this.rebindTextures=ut,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function A_(i,t){function e(n,s=Qi){let r,a=Ge.getTransfer(s);if(n===ni)return i.UNSIGNED_BYTE;if(n===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yh)return i.BYTE;if(n===vh)return i.SHORT;if(n===Lr)return i.UNSIGNED_SHORT;if(n===xl)return i.INT;if(n===Si)return i.UNSIGNED_INT;if(n===bi)return i.FLOAT;if(n===Ei)return i.HALF_FLOAT;if(n===bh)return i.ALPHA;if(n===Eh)return i.RGB;if(n===fi)return i.RGBA;if(n===Ri)return i.DEPTH_COMPONENT;if(n===bs)return i.DEPTH_STENCIL;if(n===Th)return i.RED;if(n===vl)return i.RED_INTEGER;if(n===Es)return i.RG;if(n===Ml)return i.RG_INTEGER;if(n===Sl)return i.RGBA_INTEGER;if(n===Fa||n===Ba||n===Oa||n===ka)if(a===nn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bl||n===El||n===Tl||n===wl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===Cl||n===Rl||n===Il||n===Pl||n===za||n===Ll)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Al||n===Cl)return a===nn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Il)return r.COMPRESSED_R11_EAC;if(n===Pl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===za)return r.COMPRESSED_RG11_EAC;if(n===Ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dl||n===Nl||n===Ul||n===Fl||n===Bl||n===Ol||n===kl||n===zl||n===Vl||n===Hl||n===Gl||n===Wl||n===Xl||n===ql)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ul)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ol)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xl)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ql)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yl||n===Zl||n===Jl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yl)return a===nn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$l||n===Kl||n===Va||n===Ql)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$l)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Dr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var C_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R_=`
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

}`,qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ma(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new li({vertexShader:C_,fragmentShader:R_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dt(new Ws(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yh=class extends Ii{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,M=typeof XRWebGLBinding<"u",m=new qh,p={},w=e.getContextAttributes(),R=null,y=null,T=[],E=[],I=new bt,_=null,A=null,P=new Fn;P.viewport=new yn;let F=new Fn;F.viewport=new yn;let z=[P,F],Z=new fl,B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let lt=T[nt];return lt===void 0&&(lt=new br,T[nt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(nt){let lt=T[nt];return lt===void 0&&(lt=new br,T[nt]=lt),lt.getGripSpace()},this.getHand=function(nt){let lt=T[nt];return lt===void 0&&(lt=new br,T[nt]=lt),lt.getHandSpace()};function j(nt){let lt=E.indexOf(nt.inputSource);if(lt===-1)return;let Ct=T[lt];Ct!==void 0&&(Ct.update(nt.inputSource,nt.frame,c||a),Ct.dispatchEvent({type:nt.type,data:nt.inputSource}))}function J(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ht);for(let nt=0;nt<T.length;nt++){let lt=E[nt];lt!==null&&(E[nt]=null,T[nt].disconnect(lt))}B=null,W=null,m.reset();for(let nt in p)delete p[nt];if(t.setRenderTarget(R),f=null,u=null,d=null,s=null,y=null,we.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(I.width,I.height,!1),A!==null){let nt=A.camera;nt.fov=A.fov,nt.zoom=A.zoom,nt.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){o=nt,n.isPresenting===!0&&fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ht),w.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,ee=null,Pt=null;w.depth&&(Pt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=w.stencil?bs:Ri,ee=w.stencil?Dr:Si);let le={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(le),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new ti(u.textureWidth,u.textureHeight,{format:fi,type:ni,depthTexture:new fs(u.textureWidth,u.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ct={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Ct),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ti(f.framebufferWidth,f.framebufferHeight,{format:fi,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),we.setContext(s),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ht(nt){for(let lt=0;lt<nt.removed.length;lt++){let Ct=nt.removed[lt],ee=E.indexOf(Ct);ee>=0&&(E[ee]=null,T[ee].disconnect(Ct))}for(let lt=0;lt<nt.added.length;lt++){let Ct=nt.added[lt],ee=E.indexOf(Ct);if(ee===-1){for(let le=0;le<T.length;le++)if(le>=E.length){E.push(Ct),ee=le;break}else if(E[le]===null){E[le]=Ct,ee=le;break}if(ee===-1)break}let Pt=T[ee];Pt&&Pt.connect(Ct)}}let tt=new L,at=new L;function ot(nt,lt,Ct){tt.setFromMatrixPosition(lt.matrixWorld),at.setFromMatrixPosition(Ct.matrixWorld);let ee=tt.distanceTo(at),Pt=lt.projectionMatrix.elements,le=Ct.projectionMatrix.elements,Ie=Pt[14]/(Pt[10]-1),it=Pt[14]/(Pt[10]+1),ut=(Pt[9]+1)/Pt[5],pt=(Pt[9]-1)/Pt[5],mt=(Pt[8]-1)/Pt[0],yt=(le[8]+1)/le[0],ne=Ie*mt,jt=Ie*yt,he=ee/(-mt+yt),_e=he*-mt;if(lt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(_e),nt.translateZ(he),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Pt[10]===-1)nt.projectionMatrix.copy(lt.projectionMatrix),nt.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{let D=Ie+he,qe=it+he,Me=ne-_e,C=jt+(ee-_e),x=ut*it/qe*D,V=pt*it/qe*D;nt.projectionMatrix.makePerspective(Me,C,x,V,D,qe),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function Vt(nt,lt){lt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(lt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let lt=nt.near,Ct=nt.far;m.texture!==null&&(m.depthNear>0&&(lt=m.depthNear),m.depthFar>0&&(Ct=m.depthFar)),Z.near=F.near=P.near=lt,Z.far=F.far=P.far=Ct,(B!==Z.near||W!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),B=Z.near,W=Z.far),Z.layers.mask=nt.layers.mask|6,P.layers.mask=Z.layers.mask&-5,F.layers.mask=Z.layers.mask&-3;let ee=nt.parent,Pt=Z.cameras;Vt(Z,ee);for(let le=0;le<Pt.length;le++)Vt(Pt[le],ee);Pt.length===2?ot(Z,P,F):Z.projectionMatrix.copy(P.projectionMatrix),A===null&&nt.isPerspectiveCamera&&(A={camera:nt,fov:nt.fov,zoom:nt.zoom}),Bt(nt,Z,ee)};function Bt(nt,lt,Ct){Ct===null?nt.matrix.copy(lt.matrixWorld):(nt.matrix.copy(Ct.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(lt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(lt.projectionMatrix),nt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Vo*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(nt){l=nt,u!==null&&(u.fixedFoveation=nt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=nt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Z)},this.getCameraTexture=function(nt){return p[nt]};let oe=null;function $t(nt,lt){if(h=lt.getViewerPose(c||a),g=lt,h!==null){let Ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let ee=!1;Ct.length!==Z.cameras.length&&(Z.cameras.length=0,ee=!0);for(let it=0;it<Ct.length;it++){let ut=Ct[it],pt=null;if(f!==null)pt=f.getViewport(ut);else{let yt=d.getViewSubImage(u,ut);pt=yt.viewport,it===0&&(t.setRenderTargetTextures(y,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(y))}let mt=z[it];mt===void 0&&(mt=new Fn,mt.layers.enable(it),mt.viewport=new yn,z[it]=mt),mt.matrix.fromArray(ut.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(ut.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(pt.x,pt.y,pt.width,pt.height),it===0&&(Z.matrix.copy(mt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),ee===!0&&Z.cameras.push(mt)}let Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let it=d.getDepthInformation(Ct[0]);it&&it.isValid&&it.texture&&m.init(it,s.renderState)}if(Pt&&Pt.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let it=0;it<Ct.length;it++){let ut=Ct[it].camera;if(ut){let pt=p[ut];pt||(pt=new ma,p[ut]=pt);let mt=d.getCameraImage(ut);pt.sourceTexture=mt}}}}for(let Ct=0;Ct<T.length;Ct++){let ee=E[Ct],Pt=T[Ct];ee!==null&&Pt!==void 0&&Pt.update(ee,lt,c||a)}oe&&oe(nt,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),g=null}let we=new _f;we.setAnimationLoop($t),this.setAnimationLoop=function(nt){oe=nt},this.dispose=function(){}}},I_=new mn,Ef=new Te;Ef.set(-1,0,0,0,1,0,0,0,1);function P_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Rh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,R,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,R):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=t.get(p),R=w.envMap,y=w.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(I_.makeRotationFromEuler(y)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ef),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=R*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function L_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){let E=T.program;n.uniformBlockBinding(y,E)}function c(y,T){let E=s[y.id];E===void 0&&(m(y),E=h(y),s[y.id]=E,y.addEventListener("dispose",w));let I=T.program;n.updateUBOMapping(y,I);let _=t.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let T=d();y.__bindingPointIndex=T;let E=i.createBuffer(),I=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,I,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let T=s[y.id],E=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let _=0,A=E.length;_<A;_++){let P=E[_];if(Array.isArray(P))for(let F=0,z=P.length;F<z;F++)f(P[F],_,F,I);else f(P,_,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,T,E,I){if(M(y,T,E,I)===!0){let _=y.__offset,A=y.value;if(Array.isArray(A)){let P=0;for(let F=0;F<A.length;F++){let z=A[F],Z=p(z);g(z,y.__data,P),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(P+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function g(y,T,E){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,E)}function M(y,T,E,I){let _=y.value,A=T+"_"+E;if(I[A]===void 0)return typeof _=="number"||typeof _=="boolean"?I[A]=_:ArrayBuffer.isView(_)?I[A]=_.slice():I[A]=_.clone(),!0;{let P=I[A];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return I[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(y){let T=y.uniforms,E=0,I=16;for(let A=0,P=T.length;A<P;A++){let F=Array.isArray(T[A])?T[A]:[T[A]];for(let z=0,Z=F.length;z<Z;z++){let B=F[z],W=Array.isArray(B.value)?B.value:[B.value];for(let j=0,J=W.length;j<J;j++){let ht=W[j],tt=p(ht),at=E%I,ot=at%tt.boundary,Vt=at+ot;E+=ot,Vt!==0&&I-Vt<tt.storage&&(E+=I-Vt),B.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=tt.storage}}}let _=E%I;return _>0&&(E+=I-_),y.__size=E,y.__cache={},this}function p(y){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):fe("WebGLRenderer: Unsupported uniform value type.",y),T}function w(y){let T=y.target;T.removeEventListener("dispose",w);let E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function R(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}var D_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ni=null;function N_(){return Ni===null&&(Ni=new Xo(D_,16,16,Es,Ei),Ni.name="DFG_LUT",Ni.minFilter=Bn,Ni.magFilter=Bn,Ni.wrapS=Ci,Ni.wrapT=Ci,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}var ac=class{constructor(t={}){let{canvas:e=Od(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ni}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=f,m=new Set([Sl,Ml,vl]),p=new Set([ni,Si,Lr,Dr,_l,yl]),w=new Uint32Array(4),R=new Int32Array(4),y=new L,T=null,E=null,I=[],_=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,F=!1,z=null,Z=null,B=null,W=null;this._outputColorSpace=Gn;let j=0,J=0,ht=null,tt=-1,at=null,ot=new yn,Vt=new yn,Bt=null,oe=new Ue(0),$t=0,we=e.width,nt=e.height,lt=1,Ct=null,ee=null,Pt=new yn(0,0,we,nt),le=new yn(0,0,we,nt),Ie=!1,it=new Er,ut=!1,pt=!1,mt=new mn,yt=new L,ne=new yn,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function _e(){return ht===null?lt:1}let D=n;function qe(v,U){return e.getContext(v,U)}let Me,C,x,V,Y,Q,xt,vt,K,rt,Et,Xt,wt,St,Yt,ae,ie,N,dt,st,Tt,Lt,ct;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",on,!1),e.addEventListener("webglcontextrestored",$e,!1),e.addEventListener("webglcontextcreationerror",Nn,!1),D===null){let U="webgl2";if(D=qe(U,v),D===null)throw qe(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(v){throw e.removeEventListener("webglcontextlost",on,!1),e.removeEventListener("webglcontextrestored",$e,!1),e.removeEventListener("webglcontextcreationerror",Nn,!1),xe("WebGLRenderer: "+v.message),v}function Kt(){Me=new Vg(D),Me.init(),Tt=new A_(D,Me),C=new Pg(D,Me,t,Tt),x=new T_(D,Me),C.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),Z=D.createFramebuffer(),B=D.createFramebuffer(),W=D.createFramebuffer(),V=new Wg(D),Y=new u_,Q=new w_(D,Me,x,Y,C,Tt,V),xt=new zg(P),vt=new qp(D),Lt=new Rg(D,vt),K=new Hg(D,vt,V,Lt),rt=new qg(D,K,vt,Lt,V),N=new Xg(D,C,Q),Yt=new Lg(Y),Et=new h_(P,xt,Me,C,Lt,Yt),Xt=new P_(P,Y),wt=new f_,St=new y_(Me),ie=new Cg(P,xt,x,rt,g,l),ae=new E_(P,rt,C),ct=new L_(D,V,C,x),dt=new Ig(D,Me,V),st=new Gg(D,Me,V),V.programs=Et.programs,P.capabilities=C,P.extensions=Me,P.properties=Y,P.renderLists=wt,P.shadowMap=ae,P.state=x,P.info=V}M!==ni&&(A=new Zg(M,e.width,e.height,o,s,r));let Ht=new Yh(P,D);this.xr=Ht,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let v=Me.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Me.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(v){v!==void 0&&(lt=v,this.setSize(we,nt,!1))},this.getSize=function(v){return v.set(we,nt)},this.setSize=function(v,U,$=!0){if(Ht.isPresenting){fe("WebGLRenderer: Can't change size while VR device is presenting.");return}we=v,nt=U,e.width=Math.floor(v*lt),e.height=Math.floor(U*lt),$===!0&&(e.style.width=v+"px",e.style.height=U+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(we*lt,nt*lt).floor()},this.setDrawingBufferSize=function(v,U,$){we=v,nt=U,lt=$,e.width=Math.floor(v*$),e.height=Math.floor(U*$),this.setViewport(0,0,v,U)},this.setEffects=function(v){if(M===ni){xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let U=0;U<v.length;U++)if(v[U].isOutputPass===!0){fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ot)},this.getViewport=function(v){return v.copy(Pt)},this.setViewport=function(v,U,$,q){v.isVector4?Pt.set(v.x,v.y,v.z,v.w):Pt.set(v,U,$,q),x.viewport(ot.copy(Pt).multiplyScalar(lt).round())},this.getScissor=function(v){return v.copy(le)},this.setScissor=function(v,U,$,q){v.isVector4?le.set(v.x,v.y,v.z,v.w):le.set(v,U,$,q),x.scissor(Vt.copy(le).multiplyScalar(lt).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(v){x.setScissorTest(Ie=v)},this.setOpaqueSort=function(v){Ct=v},this.setTransparentSort=function(v){ee=v},this.getClearColor=function(v){return v.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,$=!0){let q=0;if(v){let X=!1;if(ht!==null){let At=ht.texture.format;X=m.has(At)}if(X){let At=ht.texture.type,Ft=p.has(At),Rt=ie.getClearColor(),kt=ie.getClearAlpha(),Gt=Rt.r,be=Rt.g,Be=Rt.b;Ft?(w[0]=Gt,w[1]=be,w[2]=Be,w[3]=kt,D.clearBufferuiv(D.COLOR,0,w)):(R[0]=Gt,R[1]=be,R[2]=Be,R[3]=kt,D.clearBufferiv(D.COLOR,0,R))}else q|=D.COLOR_BUFFER_BIT}U&&(q|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),z=v},this.dispose=function(){e.removeEventListener("webglcontextlost",on,!1),e.removeEventListener("webglcontextrestored",$e,!1),e.removeEventListener("webglcontextcreationerror",Nn,!1),ie.dispose(),wt.dispose(),St.dispose(),Y.dispose(),xt.dispose(),rt.dispose(),Lt.dispose(),ct.dispose(),Et.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",$s),Ht.removeEventListener("sessionend",zr),Ti.stop()};function on(v){v.preventDefault(),Ah("WebGLRenderer: Context Lost."),F=!0}function $e(){Ah("WebGLRenderer: Context Restored."),F=!1;let v=V.autoReset,U=ae.enabled,$=ae.autoUpdate,q=ae.needsUpdate,X=ae.type;Kt(),V.autoReset=v,ae.enabled=U,ae.autoUpdate=$,ae.needsUpdate=q,ae.type=X}function Nn(v){xe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ii(v){let U=v.target;U.removeEventListener("dispose",ii),Xa(U)}function Xa(v){qa(v),Y.remove(v)}function qa(v){let U=Y.get(v).programs;U!==void 0&&(U.forEach(function($){Et.releaseProgram($)}),v.isShaderMaterial&&Et.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,$,q,X,At){U===null&&(U=jt);let Ft=X.isMesh&&X.matrixWorld.determinantAffine()<0,Rt=Vr(v,U,$,q,X);x.setMaterial(q,Ft);let kt=$.index,Gt=1;if(q.wireframe===!0){if(kt=K.getWireframeAttribute($),kt===void 0)return;Gt=2}let be=$.drawRange,Be=$.attributes.position,zt=be.start*Gt,Ke=(be.start+be.count)*Gt;At!==null&&(zt=Math.max(zt,At.start*Gt),Ke=Math.min(Ke,(At.start+At.count)*Gt)),kt!==null?(zt=Math.max(zt,0),Ke=Math.min(Ke,kt.count)):Be!=null&&(zt=Math.max(zt,0),Ke=Math.min(Ke,Be.count));let hn=Ke-zt;if(hn<0||hn===1/0)return;Lt.setup(X,q,Rt,$,kt);let tn,Se=dt;if(kt!==null&&(tn=vt.get(kt),Se=st,Se.setIndex(tn)),X.isMesh)q.wireframe===!0?(x.setLineWidth(q.wireframeLinewidth*_e()),Se.setMode(D.LINES)):Se.setMode(D.TRIANGLES);else if(X.isLine){let We=q.linewidth;We===void 0&&(We=1),x.setLineWidth(We*_e()),X.isLineSegments?Se.setMode(D.LINES):X.isLineLoop?Se.setMode(D.LINE_LOOP):Se.setMode(D.LINE_STRIP)}else X.isPoints?Se.setMode(D.POINTS):X.isSprite&&Se.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(Me.get("WEBGL_multi_draw"))Se.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let We=X._multiDrawStarts,Nt=X._multiDrawCounts,Rn=X._multiDrawCount,He=kt?vt.get(kt).bytesPerElement:1,In=Y.get(q).currentProgram.getUniforms();for(let Kn=0;Kn<Rn;Kn++)In.setValue(D,"_gl_DrawID",Kn),Se.render(We[Kn]/He,Nt[Kn])}else if(X.isInstancedMesh)Se.renderInstances(zt,hn,X.count);else if($.isInstancedBufferGeometry){let We=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Nt=Math.min($.instanceCount,We);Se.renderInstances(zt,hn,Nt)}else Se.render(zt,hn)};function Ya(v,U,$,q){z!==null&&v.isNodeMaterial&&z.setObject(q,v),ut===!0&&Yt.setState(v,$,!1),v.transparent===!0&&v.side===Li&&v.forceSinglePass===!1?(v.side=Jn,v.needsUpdate=!0,As(v,U,q),v.side=vs,v.needsUpdate=!0,As(v,U,q),v.side=Li):As(v,U,q)}this.compile=function(v,U,$=null){$===null&&($=v),z!==null&&z.renderStart(v,U,$),E=St.get($),E.init(U),_.push(E),$.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),v!==$&&v.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),z!==null&&z.updateLights(E.state.lightsArray),pt=this.localClippingEnabled,ut=Yt.init(this.clippingPlanes,pt),ut===!0&&Yt.setGlobalState(this.clippingPlanes,U),z!==null&&ae.render(E.state.shadowsArray,$,U);let q=new Set;return v.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let At=X.material;if(At)if(Array.isArray(At))for(let Ft=0;Ft<At.length;Ft++){let Rt=At[Ft];Ya(Rt,$,U,X),q.add(Rt)}else Ya(At,$,U,X),q.add(At)}),E=_.pop(),z!==null&&z.renderEnd(),q},this.compileAsync=function(v,U,$=null){let q=this.compile(v,U,$);return new Promise(X=>{function At(){if(q.forEach(function(Ft){let kt=Y.get(Ft).currentProgram;(kt===void 0||kt.isReady())&&q.delete(Ft)}),q.size===0){X(v);return}setTimeout(At,10)}Me.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let kr=null;function cc(v){kr&&kr(v)}function $s(){Ti.stop()}function zr(){Ti.start()}let Ti=new _f;Ti.setAnimationLoop(cc),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(v){kr=v,Ht.setAnimationLoop(v),v===null?Ti.stop():Ti.start()},Ht.addEventListener("sessionstart",$s),Ht.addEventListener("sessionend",zr),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;z!==null&&z.renderStart(v,U);let $=Ht.enabled===!0&&Ht.isPresenting===!0,q=A!==null&&(ht===null||$)&&A.begin(P,ht);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(U),U=Ht.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,U,ht),E=St.get(v,_.length),E.init(U),E.state.textureUnits=Q.getTextureUnits(),_.push(E),mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),it.setFromProjectionMatrix(mt,vi,U.reversedDepth),pt=this.localClippingEnabled,ut=Yt.init(this.clippingPlanes,pt),T=wt.get(v,I.length),T.init(),I.push(T),Ht.enabled===!0&&Ht.isPresenting===!0){let Ft=P.xr.getDepthSensingMesh();Ft!==null&&Ks(Ft,U,-1/0,P.sortObjects)}Ks(v,U,0,P.sortObjects),T.finish(),z!==null&&z.updateLights(E.state.lightsArray),P.sortObjects===!0&&T.sort(Ct,ee),he=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,he&&ie.addToRenderList(T,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&Yt.beginShadows();let X=E.state.shadowsArray;if(ae.render(X,v,U),ut===!0&&Yt.endShadows(),(q&&A.hasRenderPass())===!1){let Ft=T.opaque,Rt=T.transmissive;if(E.setupLights(),U.isArrayCamera){let kt=U.cameras;if(Rt.length>0)for(let Gt=0,be=kt.length;Gt<be;Gt++){let Be=kt[Gt];qn(Ft,Rt,v,Be)}he&&ie.render(v);for(let Gt=0,be=kt.length;Gt<be;Gt++){let Be=kt[Gt];Fi(T,v,Be,Be.viewport)}}else Rt.length>0&&qn(Ft,Rt,v,U),he&&ie.render(v),Fi(T,v,U)}ht!==null&&J===0&&(Q.updateMultisampleRenderTarget(ht),Q.updateRenderTargetMipmap(ht)),q&&A.end(P),v.isScene===!0&&v.onAfterRender(P,v,U),Lt.resetDefaultState(),tt=-1,at=null,_.pop(),_.length>0?(E=_[_.length-1],Q.setTextureUnits(E.state.textureUnits),ut===!0&&Yt.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,I.pop(),I.length>0?T=I[I.length-1]:T=null,z!==null&&z.renderEnd()};function Ks(v,U,$,q){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)$=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLightProbeGrid)E.pushLightProbeGrid(v);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(it)){q&&ne.setFromMatrixPosition(v.matrixWorld).applyMatrix4(mt);let Ft=rt.update(v),Rt=v.material;Rt.visible&&T.push(v,Ft,Rt,$,ne.z,null,U)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(it))){let Ft=rt.update(v),Rt=v.material;if(q&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ne.copy(v.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),ne.copy(Ft.boundingSphere.center)),ne.applyMatrix4(v.matrixWorld).applyMatrix4(mt)),Array.isArray(Rt)){let kt=Ft.groups;for(let Gt=0,be=kt.length;Gt<be;Gt++){let Be=kt[Gt],zt=Rt[Be.materialIndex];zt&&zt.visible&&T.push(v,Ft,zt,$,ne.z,Be,U)}}else Rt.visible&&T.push(v,Ft,Rt,$,ne.z,null,U)}}let At=v.children;for(let Ft=0,Rt=At.length;Ft<Rt;Ft++)Ks(At[Ft],U,$,q)}function Fi(v,U,$,q){let{opaque:X,transmissive:At,transparent:Ft}=v;E.setupLightsView($),ut===!0&&Yt.setGlobalState(P.clippingPlanes,$),q&&x.viewport(ot.copy(q)),X.length>0&&ws(X,U,$),At.length>0&&ws(At,U,$),Ft.length>0&&ws(Ft,U,$),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function qn(v,U,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[q.id]===void 0){let zt=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[q.id]=new ti(1,1,{generateMipmaps:!0,type:zt?Ei:ni,minFilter:Ss,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}let At=E.state.transmissionRenderTarget[q.id],Ft=q.viewport||ot;At.setSize(Ft.z*P.transmissionResolutionScale,Ft.w*P.transmissionResolutionScale);let Rt=P.getRenderTarget(),kt=P.getActiveCubeFace(),Gt=P.getActiveMipmapLevel();P.setRenderTarget(At),P.getClearColor(oe),$t=P.getClearAlpha(),$t<1&&P.setClearColor(16777215,.5),P.clear(),he&&ie.render($);let be=P.toneMapping;P.toneMapping=Mi;let Be=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),E.setupLightsView(q),ut===!0&&Yt.setGlobalState(P.clippingPlanes,q),ws(v,$,q),Q.updateMultisampleRenderTarget(At),Q.updateRenderTargetMipmap(At),Me.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Ke=0,hn=U.length;Ke<hn;Ke++){let tn=U[Ke],{object:Se,geometry:We,material:Nt,group:Rn}=tn;if(Nt.side===Li&&Se.layers.test(q.layers)){let He=Nt.side;Nt.side=Jn,Nt.needsUpdate=!0,Za(Se,$,q,We,Nt,Rn),Nt.side=He,Nt.needsUpdate=!0,zt=!0}}zt===!0&&(Q.updateMultisampleRenderTarget(At),Q.updateRenderTargetMipmap(At))}P.setRenderTarget(Rt,kt,Gt),P.setClearColor(oe,$t),Be!==void 0&&(q.viewport=Be),P.toneMapping=be}function ws(v,U,$){let q=U.isScene===!0?U.overrideMaterial:null;for(let X=0,At=v.length;X<At;X++){let Ft=v[X],{object:Rt,geometry:kt,group:Gt}=Ft,be=Ft.material;be.allowOverride===!0&&q!==null&&(be=q),Rt.layers.test($.layers)&&Za(Rt,U,$,kt,be,Gt)}}function Za(v,U,$,q,X,At){z!==null&&X.isNodeMaterial&&z.setObject(v,X),v.onBeforeRender(P,U,$,q,X,At),v.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),X.onBeforeRender(P,U,$,q,v,At),X.transparent===!0&&X.side===Li&&X.forceSinglePass===!1?(X.side=Jn,X.needsUpdate=!0,P.renderBufferDirect($,U,q,X,v,At),X.side=vs,X.needsUpdate=!0,P.renderBufferDirect($,U,q,X,v,At),X.side=Li):P.renderBufferDirect($,U,q,X,v,At),v.onAfterRender(P,U,$,q,X,At)}function As(v,U,$){U.isScene!==!0&&(U=jt);let q=Y.get(v),X=E.state.lights,At=E.state.shadowsArray,Ft=X.state.version,Rt=Et.getParameters(v,X.state,At,U,$,E.state.lightProbeGridArray),kt=Et.getProgramCacheKey(Rt),Gt=q.programs;q.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,q.fog=U.fog;let be=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;q.envMap=xt.get(v.envMap||q.environment,be),q.envMapRotation=q.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Gt===void 0&&(v.addEventListener("dispose",ii),Gt=new Map,q.programs=Gt);let Be=Gt.get(kt);if(Be!==void 0){if(q.currentProgram===Be&&q.lightsStateVersion===Ft)return ji(v,Rt),Be}else Rt.uniforms=Et.getUniforms(v),z!==null&&v.isNodeMaterial&&z.build(v,$,Rt),v.onBeforeCompile(Rt,P),Be=Et.acquireProgram(Rt,kt),Gt.set(kt,Be),q.uniforms=Rt.uniforms;let zt=q.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(zt.clippingPlanes=Yt.uniform),ji(v,Rt),q.needsLights=$n(v),q.lightsStateVersion=Ft,q.needsLights&&(zt.ambientLightColor.value=X.state.ambient,zt.lightProbe.value=X.state.probe,zt.sunLights.value=X.state.sun,zt.sunLightShadows.value=X.state.sunShadow,zt.directionalLights.value=X.state.directional,zt.directionalLightShadows.value=X.state.directionalShadow,zt.spotLights.value=X.state.spot,zt.spotLightShadows.value=X.state.spotShadow,zt.rectAreaLights.value=X.state.rectArea,zt.ltc_1.value=X.state.rectAreaLTC1,zt.ltc_2.value=X.state.rectAreaLTC2,zt.pointLights.value=X.state.point,zt.pointLightShadows.value=X.state.pointShadow,zt.hemisphereLights.value=X.state.hemi,zt.sunShadowMatrix.value=X.state.sunShadowMatrix,zt.sunShadowCascade.value=X.state.sunShadowCascade,zt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,zt.spotLightMatrix.value=X.state.spotLightMatrix,zt.spotLightMap.value=X.state.spotLightMap,zt.pointShadowMatrix.value=X.state.pointShadowMatrix),q.lightProbeGrid=E.state.lightProbeGridArray.length>0,q.currentProgram=Be,q.uniformsList=null,Be}function Qs(v){if(v.uniformsList===null){let U=v.currentProgram.getUniforms();v.uniformsList=Br.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function ji(v,U){let $=Y.get(v);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}function Ja(v,U){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let $=0,q=v.length;$<q;$++){let X=v[$];if(X.texture!==null&&X.boundingBox.containsPoint(y))return X}return null}function Vr(v,U,$,q,X){U.isScene!==!0&&(U=jt),Q.resetTextureUnits();let At=U.fog,Ft=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?U.environment:null,Rt=ht===null?P.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Ge.workingColorSpace,kt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Gt=xt.get(q.envMap||Ft,kt),be=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Be=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),zt=!!$.morphAttributes.position,Ke=!!$.morphAttributes.normal,hn=!!$.morphAttributes.color,tn=Mi;q.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(tn=P.toneMapping);let Se=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,We=Se!==void 0?Se.length:0,Nt=Y.get(q),Rn=E.state.lights;if(ut===!0&&(pt===!0||v!==at)){let ke=v===at&&q.id===tt;Yt.setState(q,v,ke)}let He=!1;q.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Rn.state.version||Nt.outputColorSpace!==Rt||X.isBatchedMesh&&Nt.batching===!1||!X.isBatchedMesh&&Nt.batching===!0||X.isBatchedMesh&&Nt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Nt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Nt.instancing===!1||!X.isInstancedMesh&&Nt.instancing===!0||X.isSkinnedMesh&&Nt.skinning===!1||!X.isSkinnedMesh&&Nt.skinning===!0||X.isInstancedMesh&&Nt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Nt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Nt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Nt.instancingMorph===!1&&X.morphTexture!==null||Nt.envMap!==Gt||q.fog===!0&&Nt.fog!==At||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==Yt.numPlanes||Nt.numIntersection!==Yt.numIntersection)||Nt.vertexAlphas!==be||Nt.vertexTangents!==Be||Nt.morphTargets!==zt||Nt.morphNormals!==Ke||Nt.morphColors!==hn||Nt.toneMapping!==tn||Nt.morphTargetsCount!==We||!!Nt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(He=!0):(He=!0,Nt.__version=q.version);let In=Nt.currentProgram;He===!0&&(In=As(q,U,X),z&&q.isNodeMaterial&&z.onUpdateProgram(q,In,Nt));let Kn=!1,Yn=!1,Tn=!1,Ze=In.getUniforms(),gn=Nt.uniforms;if(x.useProgram(In.program)&&(Kn=!0,Yn=!0,Tn=!0),q.id!==tt&&(tt=q.id,Yn=!0),Nt.needsLights){let ke=Ja(E.state.lightProbeGridArray,X);Nt.lightProbeGrid!==ke&&(Nt.lightProbeGrid=ke,Yn=!0)}if(Kn||at!==v){x.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Ze.setValue(D,"projectionMatrix",v.projectionMatrix),Ze.setValue(D,"viewMatrix",v.matrixWorldInverse);let mi=Ze.map.cameraPosition;mi!==void 0&&mi.setValue(D,yt.setFromMatrixPosition(v.matrixWorld)),C.logarithmicDepthBuffer&&Ze.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ze.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),at!==v&&(at=v,Yn=!0,Tn=!0)}if(Nt.needsLights&&(Rn.state.sunShadowMap.length>0&&Ze.setValue(D,"sunShadowMap",Rn.state.sunShadowMap,Q),Rn.state.directionalShadowMap.length>0&&Ze.setValue(D,"directionalShadowMap",Rn.state.directionalShadowMap,Q),Rn.state.spotShadowMap.length>0&&Ze.setValue(D,"spotShadowMap",Rn.state.spotShadowMap,Q),Rn.state.pointShadowMap.length>0&&Ze.setValue(D,"pointShadowMap",Rn.state.pointShadowMap,Q)),X.isSkinnedMesh){Ze.setOptional(D,X,"bindMatrix"),Ze.setOptional(D,X,"bindMatrixInverse");let ke=X.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),Ze.setValue(D,"boneTexture",ke.boneTexture,Q))}X.isBatchedMesh&&(Ze.setOptional(D,X,"batchingTexture"),Ze.setValue(D,"batchingTexture",X._matricesTexture,Q),Ze.setOptional(D,X,"batchingIdTexture"),Ze.setValue(D,"batchingIdTexture",X._indirectTexture,Q),Ze.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&Ze.setValue(D,"batchingColorTexture",X._colorsTexture,Q));let pi=$.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&N.update(X,$,In),(Yn||Nt.receiveShadow!==X.receiveShadow)&&(Nt.receiveShadow=X.receiveShadow,Ze.setValue(D,"receiveShadow",X.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&U.environment!==null&&(gn.envMapIntensity.value=U.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=N_()),Yn){if(Ze.setValue(D,"toneMappingExposure",P.toneMappingExposure),Nt.needsLights&&Hr(gn,Tn),At&&q.fog===!0&&Xt.refreshFogUniforms(gn,At),Xt.refreshMaterialUniforms(gn,q,lt,nt,E.state.transmissionRenderTarget[v.id]),Nt.needsLights&&Nt.lightProbeGrid){let ke=Nt.lightProbeGrid;gn.probesSH.value=ke.texture,gn.probesMin.value.copy(ke.boundingBox.min),gn.probesMax.value.copy(ke.boundingBox.max),gn.probesResolution.value.copy(ke.resolution)}Br.upload(D,Qs(Nt),gn,Q)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Br.upload(D,Qs(Nt),gn,Q),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ze.setValue(D,"center",X.center),Ze.setValue(D,"modelViewMatrix",X.modelViewMatrix),Ze.setValue(D,"normalMatrix",X.normalMatrix),Ze.setValue(D,"modelMatrix",X.matrixWorld),q.uniformsGroups!==void 0){let ke=q.uniformsGroups;for(let mi=0,Bi=ke.length;mi<Bi;mi++){let ts=ke[mi];ct.update(ts,In),ct.bind(ts,In)}}return In}function Hr(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.sunLights.needsUpdate=U,v.sunLightShadows.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function $n(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return ht},this.setRenderTargetTextures=function(v,U,$){let q=Y.get(v);q.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Y.get(v.texture).__webglTexture=U,Y.get(v.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){let $=Y.get(v);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(v,U=0,$=0){ht=v,j=U,J=$;let q=null,X=!1,At=!1;if(v){let Rt=Y.get(v);if(Rt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(D.FRAMEBUFFER,Rt.__webglFramebuffer),ot.copy(v.viewport),Vt.copy(v.scissor),Bt=v.scissorTest,x.viewport(ot),x.scissor(Vt),x.setScissorTest(Bt),tt=-1;return}else if(Rt.__webglFramebuffer===void 0)Q.setupRenderTarget(v);else if(Rt.__hasExternalTextures)Q.rebindTextures(v,Y.get(v.texture).__webglTexture,Y.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let be=v.depthTexture;if(Rt.__boundDepthTexture!==be){if(be!==null&&Y.has(be)&&(v.width!==be.image.width||v.height!==be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(v)}}let kt=v.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(At=!0);let Gt=Y.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Gt[U])?q=Gt[U][$]:q=Gt[U],X=!0):v.samples>0&&Q.useMultisampledRTT(v)===!1?q=Y.get(v).__webglMultisampledFramebuffer:Array.isArray(Gt)?q=Gt[$]:q=Gt,ot.copy(v.viewport),Vt.copy(v.scissor),Bt=v.scissorTest}else ot.copy(Pt).multiplyScalar(lt).floor(),Vt.copy(le).multiplyScalar(lt).floor(),Bt=Ie;if($!==0&&(q=Z),x.bindFramebuffer(D.FRAMEBUFFER,q)&&x.drawBuffers(v,q),x.viewport(ot),x.scissor(Vt),x.setScissorTest(Bt),X){let Rt=Y.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Rt.__webglTexture,$)}else if(At){let Rt=U;for(let kt=0;kt<v.textures.length;kt++){let Gt=Y.get(v.textures[kt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+kt,Gt.__webglTexture,$,Rt)}}else if(v!==null&&$!==0){let Rt=Y.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Rt.__webglTexture,$)}tt=-1};function $a(v){let U=Y.get(v);return(U.__readFormat!==v.format||U.__readType!==v.type)&&(U.__readFormat=v.format,U.__readType=v.type,U.__formatReadable=C.textureFormatReadable(v.format),U.__typeReadable=C.textureTypeReadable(v.type)),U}this.readRenderTargetPixels=function(v,U,$,q,X,At,Ft,Rt=0){if(!(v&&v.isWebGLRenderTarget)){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=Y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ft!==void 0&&(kt=kt[Ft]),kt){x.bindFramebuffer(D.FRAMEBUFFER,kt);try{let Gt=v.textures[Rt],be=Gt.format,Be=Gt.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Rt);let zt=$a(Gt);if(zt.__formatReadable===!1){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(zt.__typeReadable===!1){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-q&&$>=0&&$<=v.height-X&&D.readPixels(U,$,q,X,Tt.convert(be),Tt.convert(Be),At)}finally{let Gt=ht!==null?Y.get(ht).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(v,U,$,q,X,At,Ft,Rt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=Y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ft!==void 0&&(kt=kt[Ft]),kt)if(U>=0&&U<=v.width-q&&$>=0&&$<=v.height-X){x.bindFramebuffer(D.FRAMEBUFFER,kt);let Gt=v.textures[Rt],be=Gt.format,Be=Gt.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Rt);let zt=$a(Gt);if(zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ke=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ke),D.bufferData(D.PIXEL_PACK_BUFFER,At.byteLength,D.STREAM_READ),D.readPixels(U,$,q,X,Tt.convert(be),Tt.convert(Be),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let hn=ht!==null?Y.get(ht).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,hn);let tn=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await zd(D,tn,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ke),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,At),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Ke),D.deleteSync(tn),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,$=0){let q=Math.pow(2,-$),X=Math.floor(v.image.width*q),At=Math.floor(v.image.height*q),Ft=U!==null?U.x:0,Rt=U!==null?U.y:0;Q.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,Ft,Rt,X,At),x.unbindTexture()},this.copyTextureToTexture=function(v,U,$=null,q=null,X=0,At=0){let Ft,Rt,kt,Gt,be,Be,zt,Ke,hn,tn=v.isCompressedTexture?v.mipmaps[At]:v.image;if($!==null)Ft=$.max.x-$.min.x,Rt=$.max.y-$.min.y,kt=$.isBox3?$.max.z-$.min.z:1,Gt=$.min.x,be=$.min.y,Be=$.isBox3?$.min.z:0;else{let gn=Math.pow(2,-X);Ft=Math.floor(tn.width*gn),Rt=Math.floor(tn.height*gn),v.isDataArrayTexture?kt=tn.depth:v.isData3DTexture?kt=Math.floor(tn.depth*gn):kt=1,Gt=0,be=0,Be=0}q!==null?(zt=q.x,Ke=q.y,hn=q.z):(zt=0,Ke=0,hn=0);let Se=Tt.convert(U.format),We=Tt.convert(U.type),Nt;U.isData3DTexture?(Q.setTexture3D(U,0),Nt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Q.setTexture2DArray(U,0),Nt=D.TEXTURE_2D_ARRAY):(Q.setTexture2D(U,0),Nt=D.TEXTURE_2D),x.activeTexture(D.TEXTURE0),x.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let Rn=x.getParameter(D.UNPACK_ROW_LENGTH),He=x.getParameter(D.UNPACK_IMAGE_HEIGHT),In=x.getParameter(D.UNPACK_SKIP_PIXELS),Kn=x.getParameter(D.UNPACK_SKIP_ROWS),Yn=x.getParameter(D.UNPACK_SKIP_IMAGES);x.pixelStorei(D.UNPACK_ROW_LENGTH,tn.width),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,tn.height),x.pixelStorei(D.UNPACK_SKIP_PIXELS,Gt),x.pixelStorei(D.UNPACK_SKIP_ROWS,be),x.pixelStorei(D.UNPACK_SKIP_IMAGES,Be);let Tn=v.isDataArrayTexture||v.isData3DTexture,Ze=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){let gn=Y.get(v),pi=Y.get(U),ke=Y.get(gn.__renderTarget),mi=Y.get(pi.__renderTarget);x.bindFramebuffer(D.READ_FRAMEBUFFER,ke.__webglFramebuffer),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let Bi=0;Bi<kt;Bi++)Tn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Y.get(v).__webglTexture,X,Be+Bi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Y.get(U).__webglTexture,At,hn+Bi)),D.blitFramebuffer(Gt,be,Ft,Rt,zt,Ke,Ft,Rt,D.DEPTH_BUFFER_BIT,D.NEAREST);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(X!==0||v.isRenderTargetTexture||Y.has(v)){let gn=Y.get(v),pi=Y.get(U);x.bindFramebuffer(D.READ_FRAMEBUFFER,B),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,W);for(let ke=0;ke<kt;ke++)Tn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,gn.__webglTexture,X,Be+ke):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,gn.__webglTexture,X),Ze?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pi.__webglTexture,At,hn+ke):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pi.__webglTexture,At),X!==0?D.blitFramebuffer(Gt,be,Ft,Rt,zt,Ke,Ft,Rt,D.COLOR_BUFFER_BIT,D.NEAREST):Ze?D.copyTexSubImage3D(Nt,At,zt,Ke,hn+ke,Gt,be,Ft,Rt):D.copyTexSubImage2D(Nt,At,zt,Ke,Gt,be,Ft,Rt);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ze?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(Nt,At,zt,Ke,hn,Ft,Rt,kt,Se,We,tn.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Nt,At,zt,Ke,hn,Ft,Rt,kt,Se,tn.data):D.texSubImage3D(Nt,At,zt,Ke,hn,Ft,Rt,kt,Se,We,tn):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,At,zt,Ke,Ft,Rt,Se,We,tn.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,At,zt,Ke,tn.width,tn.height,Se,tn.data):D.texSubImage2D(D.TEXTURE_2D,At,zt,Ke,Ft,Rt,Se,We,tn);x.pixelStorei(D.UNPACK_ROW_LENGTH,Rn),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,He),x.pixelStorei(D.UNPACK_SKIP_PIXELS,In),x.pixelStorei(D.UNPACK_SKIP_ROWS,Kn),x.pixelStorei(D.UNPACK_SKIP_IMAGES,Yn),At===0&&U.generateMipmaps&&D.generateMipmap(Nt),x.unbindTexture()},this.initRenderTarget=function(v){Y.get(v).__webglFramebuffer===void 0&&Q.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Q.setTextureCube(v,0):v.isData3DTexture?Q.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Q.setTexture2DArray(v,0):Q.setTexture2D(v,0),x.unbindTexture()},this.resetState=function(){j=0,J=0,ht=null,x.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ge._getUnpackColorSpace()}};var Tf={hybrid:{name:"LDR Hybrid (K-VRC \xD7 Mecha)",shellColor:13919535,shellSecondary:9344416,darkMetal:1579808,chromeMetal:14213354,visorBg:"#07080a",eyeLeft:"#ffaa22",eyeRight:"#38d8ff",mouthColor:"#ffe4b5",coreColor:3725567,glowPrimary:"#ff6b2b",glowSecondary:"#38d8ff",asciiSky:"rgba(215, 222, 232, 0.42)",asciiMountainBright:"#eef2f6",asciiMountainMid:"#9aa4b2",asciiMountainDim:"#4b525e",sketchStroke:"rgba(255, 240, 220, 0.72)",sketchAccent:"rgba(255, 107, 43, 0.85)",keyLight:16746564,rimLight:3725567},cytro:{name:"Mecha Green (Ref Torso)",shellColor:3713074,shellSecondary:8160398,darkMetal:1382428,chromeMetal:14739696,visorBg:"#050806",eyeLeft:"#5eff6e",eyeRight:"#38d8ff",mouthColor:"#b8ffcc",coreColor:4521830,glowPrimary:"#44ff66",glowSecondary:"#38d8ff",asciiSky:"rgba(200, 230, 210, 0.40)",asciiMountainBright:"#eef7f0",asciiMountainMid:"#8ca894",asciiMountainDim:"#3f5246",sketchStroke:"rgba(220, 255, 230, 0.72)",sketchAccent:"rgba(68, 255, 102, 0.85)",keyLight:14680038,rimLight:4521830},xbot:{name:"XBOT 4000 (Tactical Bone)",shellColor:12959667,shellSecondary:7238523,darkMetal:1316377,chromeMetal:13686237,visorBg:"#060709",eyeLeft:"#ffb82e",eyeRight:"#2ce6ff",mouthColor:"#9fb3c8",coreColor:2942719,glowPrimary:"#ffb82e",glowSecondary:"#2ce6ff",asciiSky:"rgba(200, 215, 225, 0.40)",asciiMountainBright:"#f0f4f8",asciiMountainMid:"#8c99a8",asciiMountainDim:"#3f4752",sketchStroke:"rgba(230, 235, 240, 0.7)",sketchAccent:"rgba(44, 230, 255, 0.8)",keyLight:16769202,rimLight:2942719},kvrc:{name:"K-VRC (CRT Orange)",shellColor:14244644,shellSecondary:6053992,darkMetal:1578260,chromeMetal:13620959,visorBg:"#050507",eyeLeft:"#ffffff",eyeRight:"#ffffff",mouthColor:"#ffffff",coreColor:16742195,glowPrimary:"#ff6a22",glowSecondary:"#7ce8ff",asciiSky:"rgba(255, 220, 195, 0.38)",asciiMountainBright:"#fff5eb",asciiMountainMid:"#b59c8b",asciiMountainDim:"#52433b",sketchStroke:"rgba(255, 232, 214, 0.68)",sketchAccent:"rgba(255, 115, 50, 0.85)",keyLight:16742195,rimLight:16757632},scratch:{name:"Scratch Ink (2D/3D Sketch)",shellColor:2632756,shellSecondary:4541270,darkMetal:987155,chromeMetal:10134192,visorBg:"#08090b",eyeLeft:"#f4f6f8",eyeRight:"#f4f6f8",mouthColor:"#f4f6f8",coreColor:16777215,glowPrimary:"#ffffff",glowSecondary:"#a0b0c0",asciiSky:"rgba(240, 244, 248, 0.58)",asciiMountainBright:"#ffffff",asciiMountainMid:"#b0b7c0",asciiMountainDim:"#555b66",sketchStroke:"rgba(255, 255, 255, 0.94)",sketchAccent:"rgba(200, 220, 255, 0.88)",keyLight:16777215,rimLight:8956671}},Zh=class{constructor(){this.ctx=null,this.analyser=null,this.gainNode=null,this.freqData=new Uint8Array(256),this.timeData=new Uint8Array(256),this.isPlaying=!1,this.mode="inverno",this.trackIndex=0,this.stepTimer=null,this.stepCount=0,this.audioElement=null,this.mediaSource=null,this.micStream=null,this.currentFileLabel="INVERNO.MP3",this.bass=0,this.bassAvg=0,this.kickPulse=0,this.groove=0,this.mid=0,this.midDelta=0,this.high=0,this.energy=0,this.beatPhase=0,this.lastTime=0,this.subtleIntensity=.75,this.tracks=[{name:"01 // ORBITAL LO-FI (82 BPM)",bpm:82,rootNotes:[110,98,87.31,98],chords:[[220,261.63,329.63,392],[196,246.94,293.66,349.23],[174.61,220,261.63,329.63],[196,246.94,329.63,392]],arpScale:[440,523.25,659.25,783.99,880,659.25,587.33,523.25]},{name:"02 // ZIMA NEBULA (72 BPM)",bpm:72,rootNotes:[73.42,65.41,58.27,65.41],chords:[[146.83,220,261.63,349.23],[130.81,196,246.94,293.66],[116.54,174.61,220,293.66],[123.47,185,220,293.66]],arpScale:[293.66,349.23,440,523.25,587.33,440,392,349.23]}]}initContext(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(this.ctx=new t,this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=512,this.analyser.smoothingTimeConstant=.8,this.gainNode=this.ctx.createGain(),this.gainNode.gain.value=.85,this.gainNode.connect(this.analyser),this.gainNode.connect(this.ctx.destination),this.freqData=new Uint8Array(this.analyser.frequencyBinCount),this.timeData=new Uint8Array(this.analyser.frequencyBinCount),this.audioElement&&!this.mediaSource)try{this.mediaSource=this.ctx.createMediaElementSource(this.audioElement),this.mediaSource.connect(this.gainNode)}catch(e){console.warn("Could not connect audioElement to context:",e)}}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}ensureAudioElement(){if(this.audioElement||(this.audioElement=new Audio,this.audioElement.crossOrigin="anonymous",this.audioElement.loop=!0,this.audioElement.preload="auto"),this.ctx&&!this.mediaSource)try{this.mediaSource=this.ctx.createMediaElementSource(this.audioElement),this.mediaSource.connect(this.gainNode)}catch(t){console.warn("Could not create media element source:",t)}}async playInverno(){this.initContext(),this.stop(),this.ensureAudioElement(),this.mode="inverno",this.currentFileLabel="INVERNO.MP3",(!this.audioElement.src||!this.audioElement.src.includes("inverno.mp3"))&&(this.audioElement.src="/inverno.mp3");try{return await this.audioElement.play(),this.isPlaying=!0,!0}catch(t){return console.warn("Fallback to synth if inverno.mp3 not reachable:",t),this.startSynth(),!0}}togglePlay(){return this.initContext(),this.isPlaying?(this.stop(),!1):(this.mode==="inverno"||this.mode==="file"?(this.ensureAudioElement(),this.audioElement.src?(this.audioElement.play(),this.isPlaying=!0):this.playInverno()):this.startSynth(),!0)}startSynth(){this.initContext(),this.stop(),this.mode="synth",this.isPlaying=!0,this.stepCount=0,this.gainNode.gain.value=.45;let e=60/this.tracks[this.trackIndex].bpm/4*1e3;this.triggerStep(),this.stepTimer=setInterval(()=>{this.isPlaying&&this.mode==="synth"&&this.triggerStep()},e)}stop(){this.isPlaying=!1,this.stepTimer&&(clearInterval(this.stepTimer),this.stepTimer=null),this.audioElement&&this.audioElement.pause(),this.micStream&&(this.micStream.getTracks().forEach(t=>t.stop()),this.micStream=null)}async startMic(t=null){try{this.initContext(),this.stop();let e=t?{audio:{deviceId:{exact:t}}}:{audio:!0},n=await navigator.mediaDevices.getUserMedia(e);return this.micStream=n,this.ctx.createMediaStreamSource(n).connect(this.analyser),this.mode=t?"device":"mic",this.isPlaying=!0,!0}catch(e){return console.warn("Microphone access denied:",e),!1}}async startSystemAudio(){if(this.mode==="system"&&this.isPlaying)return this.stop(),this.onStateChange&&this.onStateChange(),!0;try{this.initContext(),this.stop();let t=await navigator.mediaDevices.getDisplayMedia({video:!0,audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}}),e=t.getAudioTracks();return!e||e.length===0?(t.getTracks().forEach(s=>s.stop()),alert(`Nenhuma faixa de \xE1udio foi selecionada!

Para capturar o Spotify, YouTube ou fones:
1. Na janela de compartilhamento, selecione a "Aba do Chrome" (ex: Spotify Web ou YouTube) ou "Tela Inteira".
2. Marque a caixinha "Compartilhar \xE1udio do sistema / \xE1udio da aba" no canto inferior antes de clicar em Compartilhar.`),!1):(t.getVideoTracks().forEach(s=>s.stop()),this.micStream=t,this.ctx.createMediaStreamSource(t).connect(this.analyser),e[0].addEventListener("ended",()=>{this.stop(),this.onStateChange&&this.onStateChange()}),this.mode="system",this.currentFileLabel="SPOTIFY // \xC1UDIO DO SISTEMA",this.isPlaying=!0,!0)}catch(t){return console.warn("Captura de \xE1udio do sistema cancelada ou n\xE3o suportada:",t),!1}}loadAudioFile(t){this.initContext(),this.stop(),this.ensureAudioElement(),this.gainNode.gain.value=.9;let e=URL.createObjectURL(t);this.audioElement.src=e,this.audioElement.play(),this.mode="file",this.currentFileLabel=t.name.slice(0,24).toUpperCase(),this.isPlaying=!0}triggerStep(){if(!this.ctx||!this.isPlaying)return;let t=this.ctx.currentTime,e=this.tracks[this.trackIndex],n=this.stepCount%16,s=Math.floor(this.stepCount/16)%4;if(n===0||n===10||n===6&&s%2===1){let r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine";let o=n===6?.25:.48;r.frequency.setValueAtTime(115,t),r.frequency.exponentialRampToValueAtTime(36,t+.14),a.gain.setValueAtTime(o,t),a.gain.exponentialRampToValueAtTime(.001,t+.32),r.connect(a),a.connect(this.gainNode),r.start(t),r.stop(t+.34)}if(n===4||n===12){let r=this.ctx.sampleRate*.12,a=this.ctx.createBuffer(1,r,this.ctx.sampleRate),o=a.getChannelData(0);for(let d=0;d<r;d++)o[d]=(Math.random()*2-1)*Math.exp(-d/(r*.28));let l=this.ctx.createBufferSource();l.buffer=a;let c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.setValueAtTime(1350,t);let h=this.ctx.createGain();h.gain.setValueAtTime(.18,t),h.gain.exponentialRampToValueAtTime(.001,t+.12),l.connect(c),c.connect(h),h.connect(this.gainNode),l.start(t)}n===0&&e.chords[s].forEach((a,o)=>{let l=this.ctx.createOscillator(),c=this.ctx.createBiquadFilter(),h=this.ctx.createGain();l.type=o%2===0?"triangle":"sawtooth",l.frequency.setValueAtTime(a,t),l.detune.setValueAtTime((o-1.5)*6,t),c.type="lowpass",c.frequency.setValueAtTime(950,t),c.frequency.exponentialRampToValueAtTime(520,t+2.4),h.gain.setValueAtTime(.001,t),h.gain.linearRampToValueAtTime(.055,t+.35),h.gain.exponentialRampToValueAtTime(.001,t+2.6),l.connect(c),c.connect(h),h.connect(this.gainNode),l.start(t),l.stop(t+2.65)}),this.stepCount++}update(t){let e=Math.min(.05,Math.max(.001,t-this.lastTime));this.lastTime=t;let n=0,s=0,r=0,a=0;if(this.isPlaying&&this.analyser){this.analyser.getByteFrequencyData(this.freqData),this.analyser.getByteTimeDomainData(this.timeData);let d=0;for(let M=1;M<=6;M++)d+=this.freqData[M];n=d/1530;let u=0;for(let M=7;M<=20;M++)u+=this.freqData[M];s=u/3570;let f=0;for(let M=21;M<=68;M++)f+=this.freqData[M];r=f/12240;let g=0;for(let M=69;M<=160;M++)g+=this.freqData[M];a=g/23460}else{let d=t*1.35;n=.18+.12*Math.pow(Math.max(0,Math.sin(d*Math.PI)),4),s=.15+.08*Math.sin(d*1.5),r=.12+.07*Math.sin(d*2.1+.7),a=.08+.05*Math.cos(d*3);for(let u=0;u<this.timeData.length;u++){let f=Math.sin(t*2.4+u*.18)*.5+.5;this.freqData[u]=Math.floor((1-u%80/80)*f*85*(.5+n)),this.timeData[u]=Math.floor(128+Math.sin(t*7+u*.25)*18*(r+n)+Math.cos(t*13-u*.6)*9*a)}}let o=this.subtleIntensity,l=this.mid;this.bassAvg+=(n-this.bassAvg)*.05;let c=Math.max(0,(n-this.bassAvg*.92)*2.8)*o;this.kickPulse+=(c-this.kickPulse)*(c>this.kickPulse?.35:.12),this.bass+=(n*o-this.bass)*.16,this.groove+=(s*o-this.groove)*.12,this.mid+=(r*o-this.mid)*.14,this.high+=(a*o-this.high)*.15,this.midDelta+=(Math.abs(this.mid-l)*8-this.midDelta)*.15,this.energy=this.bass*.4+this.groove*.25+this.mid*.25+this.high*.1;let h=1.6+this.energy*3.2+this.kickPulse*1.8;this.beatPhase+=e*h}};function F_(){let i=document.createElement("canvas");i.width=1024,i.height=1024;let t=i.getContext("2d");t.fillStyle="#7a7a7a",t.fillRect(0,0,1024,1024);for(let n=0;n<1800;n++){let s=Math.random()*1024,r=Math.random()*1024,a=18+Math.random()*65;t.strokeStyle=Math.random()>.5?"rgba(215,215,215,0.11)":"rgba(35,35,35,0.12)",t.lineWidth=.7+Math.random()*1.2,t.beginPath(),t.moveTo(s,r),t.lineTo(s+a,r+(Math.random()-.5)*4),t.stroke()}for(let n=0;n<260;n++){let s=Math.random()*1024,r=Math.random()*1024,a=14+Math.random()*85,o=t.createRadialGradient(s,r,2,s,r,a),l=Math.random()>.45?38:145;o.addColorStop(0,`rgba(${l},${l},${l},0.22)`),o.addColorStop(1,"rgba(128,128,128,0)"),t.fillStyle=o,t.beginPath(),t.arc(s,r,a,0,Math.PI*2),t.fill()}t.strokeStyle="rgba(20, 20, 20, 0.55)",t.lineWidth=3,[180,512,840].forEach(n=>{t.beginPath(),t.moveTo(0,n),t.lineTo(1024,n),t.stroke();for(let s=48;s<1024;s+=96)t.fillStyle="rgba(210, 210, 210, 0.5)",t.beginPath(),t.arc(s,n-14,4.5,0,Math.PI*2),t.arc(s,n+14,4.5,0,Math.PI*2),t.fill()});for(let n=0;n<420;n++){t.strokeStyle=Math.random()>.35?"rgba(245,245,245,0.32)":"rgba(20,20,20,0.38)",t.lineWidth=.6+Math.random()*1.8,t.beginPath();let s=Math.random()*1024,r=Math.random()*1024,a=10+Math.random()*58,o=(Math.random()-.5)*1.2;t.moveTo(s,r),t.lineTo(s+Math.cos(o)*a,r+Math.sin(o)*a),t.stroke()}let e=new ds(i);return e.wrapS=Yi,e.wrapT=Yi,e}function Ts(i,t=!0){let e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d"),s=new Ue(i);n.fillStyle=`#${s.getHexString()}`,n.fillRect(0,0,1024,1024);for(let a=0;a<220;a++){let o=Math.random()*1024,l=Math.random()*1024,c=20+Math.random()*95,h=n.createRadialGradient(o,l,2,o,l,c);t&&Math.random()>.45?h.addColorStop(0,"rgba(92, 42, 18, 0.20)"):Math.random()>.5?h.addColorStop(0,"rgba(15, 18, 22, 0.24)"):h.addColorStop(0,"rgba(255, 245, 230, 0.10)"),h.addColorStop(1,"rgba(0, 0, 0, 0)"),n.fillStyle=h,n.beginPath(),n.arc(o,l,c,0,Math.PI*2),n.fill()}for(let a=0;a<1200;a++){let o=Math.random()*1024,l=Math.random()*1024,c=16+Math.random()*55;n.strokeStyle=Math.random()>.5?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.08)",n.lineWidth=.8+Math.random(),n.beginPath(),n.moveTo(o,l),n.lineTo(o+c,l+(Math.random()-.5)*3),n.stroke()}[180,512,840].forEach(a=>{n.strokeStyle="rgba(10, 12, 15, 0.48)",n.lineWidth=3.5,n.beginPath(),n.moveTo(0,a),n.lineTo(1024,a),n.stroke(),n.strokeStyle="rgba(255, 255, 255, 0.14)",n.lineWidth=1.5,n.beginPath(),n.moveTo(0,a+3),n.lineTo(1024,a+3),n.stroke();for(let o=48;o<1024;o+=96)n.fillStyle="rgba(25, 28, 32, 0.55)",n.beginPath(),n.arc(o,a-14,5.5,0,Math.PI*2),n.arc(o,a+14,5.5,0,Math.PI*2),n.fill(),n.fillStyle="rgba(215, 222, 230, 0.45)",n.beginPath(),n.arc(o-1,a-15,3.2,0,Math.PI*2),n.arc(o-1,a+13,3.2,0,Math.PI*2),n.fill()});for(let a=0;a<320;a++){n.strokeStyle=Math.random()>.3?"rgba(220, 228, 238, 0.28)":"rgba(20, 22, 26, 0.35)",n.lineWidth=.7+Math.random()*1.6,n.beginPath();let o=Math.random()*1024,l=Math.random()*1024,c=8+Math.random()*42,h=(Math.random()-.5)*1.1;n.moveTo(o,l),n.lineTo(o+Math.cos(h)*c,l+Math.sin(h)*c),n.stroke()}let r=new ds(e);return r.colorSpace=Gn,r.wrapS=Yi,r.wrapT=Yi,r}function wf(i){let t=Ts(i,!0),e=t.image,n=e.getContext("2d");n.save(),n.scale(2,2),n.strokeStyle="rgba(0, 0, 0, 0.36)",n.lineWidth=3,n.beginPath(),n.moveTo(40,120),n.lineTo(472,190),n.stroke(),n.save(),n.translate(155,235),n.rotate(-.12),n.strokeStyle="rgba(10, 16, 20, 0.62)",n.lineWidth=10,n.beginPath(),n.ellipse(0,0,66,42,0,0,Math.PI*2),n.stroke(),n.fillStyle="rgba(10, 16, 20, 0.62)";for(let s=-1;s<=1;s++)n.beginPath(),n.roundRect(-38+s*6,s*14-5,68,9,4),n.fill();return n.restore(),n.save(),n.translate(385,260),n.rotate(-Math.PI/2+.16),n.fillStyle="rgba(10, 16, 20, 0.58)",n.font='900 42px "Arial Black", Impact, sans-serif',n.letterSpacing="4px",n.fillText("LDR-04",-75,0),n.font="700 13px monospace",n.fillText("AUDIO // CYBER UNIT",-75,-36),n.restore(),n.restore(),t.needsUpdate=!0,{tex:t,canvas:e,ctx:n}}function Jh(i,t=0){let e=14+t,n=496-t,s=26+t,r=486-t,a=58+t*.85,o=454-t*.85,l=148+t*.5,c=364-t*.5;i.beginPath(),i.moveTo(256,e),i.bezierCurveTo(372-t*.4,e,r,68+t*.4,r,168),i.lineTo(o,356),i.quadraticCurveTo(o-8,410,c,n-18),i.quadraticCurveTo(256,n+8,l,n-18),i.quadraticCurveTo(a+8,410,a,356),i.lineTo(s,168),i.bezierCurveTo(s,68+t*.4,140+t*.4,e,256,e),i.closePath()}function B_(){let i=document.createElement("canvas");i.width=512,i.height=512;let t=i.getContext("2d");return t.fillStyle="#000000",t.fillRect(0,0,512,512),t.fillStyle="#ffffff",t.shadowColor="#ffffff",t.shadowBlur=5,Jh(t,0),t.fill(),new ds(i)}function Af(){let i=document.getElementById("canvas-stage"),t=document.getElementById("ascii-bg-canvas"),e=document.getElementById("webgl-canvas"),n=document.getElementById("sketch-fg-canvas"),s=t.getContext("2d"),r=n.getContext("2d"),a=new Zh,o="hybrid",l=Tf[o],c=!0,h=!0,d="street",u="devil",f={x:0,y:0,targetX:0,targetY:0},g=new ca,M=new Fn(36,1,.1,120);M.position.set(0,-.12,9.1);let m=new ac({canvas:e,alpha:!0,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.toneMapping=Da,m.toneMappingExposure=1.18;let p=new Ia(2963014,1.5);g.add(p);let w=new Xs(l.keyLight,3.4);w.position.set(4.8,5.2,6),g.add(w);let R=new Xs(l.rimLight,3);R.position.set(-5.8,3,-2.2),g.add(R);let y=new Xs(4482696,1.2);y.position.set(0,-5,4),g.add(y);let T=new Ra(l.coreColor,2.2,6);T.position.set(0,-1.35,1.4),g.add(T);let E=new _n;g.add(E);let I=240,_=new Float32Array(I*3);for(let b=0;b<I;b++)_[b*3]=(Math.random()-.5)*28,_[b*3+1]=(Math.random()-.5)*18,_[b*3+2]=-3-Math.random()*18;let A=new wn;A.setAttribute("position",new jn(_,3));let P=new Tr({color:14214384,size:.055,transparent:!0,opacity:.55}),F=new fa(A,P);E.add(F);let z=document.createElement("canvas");z.width=512,z.height=512;let Z=z.getContext("2d"),B=new ds(z);B.colorSpace=Gn;let W=B_();function j(b,S,k,H,et,G){let O=Z;O.clearRect(0,0,512,512),O.save(),Jh(O,2),O.clip(),O.fillStyle="#040507",O.fillRect(0,0,512,512);let ue=O.createRadialGradient(256,225,20,256,256,260);ue.addColorStop(0,"rgba(28, 38, 52, 0.24)"),ue.addColorStop(1,"rgba(1, 2, 4, 0.98)"),O.fillStyle=ue,O.fillRect(0,0,512,512),["rgba(195, 65, 35, 0.08)","rgba(45, 135, 165, 0.08)","rgba(180, 135, 40, 0.07)"].forEach((Ot,_t)=>{O.strokeStyle=Ot,O.lineWidth=3.5,O.beginPath(),O.moveTo(175+_t*80,20),O.bezierCurveTo(215+Math.sin(_t*2)*40,190,295-Math.cos(_t*2)*40,310,200+_t*55,490),O.stroke()});let De=f.x*18+Math.sin(b*.65)*5+Math.cos(b*1.4)*(H*6),Ce=-f.y*13+Math.cos(b*.5)*3-G*4,sn=b%4.4>4.26?.07:1,dn=1-Math.min(.24,k*.28)+Math.min(.12,G*.15),fn=54+G*5,Oe=122*sn*dn,bn=178+De,pe=334+De,Wt=212+Ce,Zt=(Ot,_t,re,rn,Xe)=>{O.save(),O.translate(Ot,_t),O.shadowColor=Xe,O.shadowBlur=26+G*24+H*14;let me=re*.48,Pe=re*.34,ce=re*.5,Ae=Math.max(4,rn*.5);if(O.strokeStyle=Xe,O.fillStyle=Xe,O.lineWidth=6,O.beginPath(),O.moveTo(-ce+Pe,-Ae),O.lineTo(ce-Pe,-Ae),O.quadraticCurveTo(ce,-Ae,ce,-Ae+Pe),O.lineTo(ce,Ae-me),O.quadraticCurveTo(ce,Ae,0,Ae),O.quadraticCurveTo(-ce,Ae,-ce,Ae-me),O.lineTo(-ce,-Ae+Pe),O.quadraticCurveTo(-ce,-Ae,-ce+Pe,-Ae),O.closePath(),o==="scratch")O.stroke(),O.globalAlpha=.24+H*.4,O.fill();else if(O.fill(),rn>25){O.shadowBlur=0,O.fillStyle="#090b0e";let ve=9,ft=rn*(.46-G*.16);O.beginPath(),O.roundRect(-ve/2,-ft/2,ve,ft,4.5),O.fill()}O.restore()};Zt(bn,Wt,fn,Oe,l.eyeLeft),Zt(pe,Wt,fn,Oe,l.eyeRight);let de=365+Ce*.45,Ne=256+De*.45,se=34+H*30+G*8;O.save(),O.shadowColor=l.mouthColor,O.shadowBlur=16+H*18,O.strokeStyle=l.mouthColor,O.lineWidth=7.5,O.lineCap="round",O.lineJoin="round",O.beginPath();let te=12;for(let Ot=0;Ot<=te;Ot++){let _t=Ot/te,re=Ne-se+_t*(se*2),rn=Math.sin(_t*Math.PI),Xe=Math.sin(_t*Math.PI*3+b*20)*(H*8*rn);Ot===0?O.moveTo(re,de+Xe):O.lineTo(re,de+Xe)}O.stroke(),O.restore(),O.fillStyle="rgba(0, 0, 0, 0.18)";for(let Ot=14;Ot<498;Ot+=6)O.fillRect(20,Ot,472,2);O.save(),O.strokeStyle="rgba(235, 245, 255, 0.16)",O.lineWidth=18,O.lineCap="round",O.filter="blur(6px)",O.beginPath(),O.arc(256,165,132,-Math.PI*.72,-Math.PI*.28),O.stroke(),O.strokeStyle="rgba(225, 240, 255, 0.12)",O.lineWidth=14,O.beginPath(),O.moveTo(418,175),O.quadraticCurveTo(412,285,362,395),O.stroke(),O.restore(),O.restore(),O.strokeStyle="rgba(95, 108, 125, 0.26)",O.lineWidth=3,Jh(O,3),O.stroke(),B.needsUpdate=!0}let J=F_(),ht=Ts(l.shellColor,!0),tt=Ts(l.shellSecondary,!0),at=Ts(l.darkMetal,!1),ot=wf(l.shellColor),Vt=new ci({map:ht,roughnessMap:J,bumpMap:J,bumpScale:.038,roughness:.48,metalness:.45}),Bt=new ci({map:ot.tex,roughnessMap:J,bumpMap:J,bumpScale:.032,roughness:.42,metalness:.5}),oe=new ci({map:tt,roughnessMap:J,bumpMap:J,bumpScale:.035,roughness:.44,metalness:.68}),$t=new ci({map:at,roughnessMap:J,bumpMap:J,bumpScale:.028,roughness:.46,metalness:.78}),we=new ci({color:l.chromeMetal,roughnessMap:J,bumpMap:J,bumpScale:.012,roughness:.2,metalness:.92}),nt=new ci({color:1316120,roughnessMap:J,bumpMap:J,bumpScale:.022,roughness:.78,metalness:.12}),lt=new ci({map:B,emissiveMap:B,alphaMap:W,transparent:!0,alphaTest:.05,emissive:new Ue(16777215),emissiveIntensity:.95,roughness:.14,metalness:.15}),Ct=new $i({color:l.coreColor}),ee=new $i({color:l.eyeLeft}),Pt=new $i({color:l.eyeRight}),le=new _n;le.position.set(0,-.28,0),g.add(le);let Ie=new _n;le.add(Ie);let it=new _n;Ie.add(it);let ut=new Dt(new je(.28,.36,.92,20),$t);ut.position.set(0,-.78,-.1),it.add(ut);for(let b=0;b<3;b++){let S=new Dt(new Ki(.31+b*.02,.032,10,24),oe);S.rotation.x=Math.PI/2+.08,S.position.set(0,-.58-b*.18,-.08),it.add(S)}let pt=new Dt(new je(.038,.038,.85,12),we);pt.position.set(-.24,-.72,.16),pt.rotation.z=-.1,pt.rotation.x=.08,it.add(pt);let mt=new Dt(new je(.068,.068,.46,12),$t);mt.position.set(-.27,-.92,.18),mt.rotation.z=-.1,mt.rotation.x=.08,it.add(mt);let yt=new Dt(new je(.038,.038,.85,12),we);yt.position.set(.24,-.72,.16),yt.rotation.z=.1,yt.rotation.x=.08,it.add(yt);let ne=new Dt(new je(.068,.068,.46,12),$t);ne.position.set(.27,-.92,.18),ne.rotation.z=.1,ne.rotation.x=.08,it.add(ne);let jt=new ei(.32,.42,.48),he=new Dt(jt,oe);he.position.set(-.56,-.88,.05),he.rotation.set(.2,.25,-.45),it.add(he);let _e=new Dt(jt,oe);_e.position.set(.56,-.88,.05),_e.rotation.set(.2,-.25,.45),it.add(_e);let D=new Dt(new oi(.32,24,18),Ct);D.scale.set(1.2,.65,.8),D.position.set(0,-1.08,.18),it.add(D);let qe=new Dt(new Ki(.28,.035,10,28),$t);qe.rotation.x=.55,qe.position.set(0,-1.06,.26),it.add(qe);let Me=new _n;Ie.add(Me);let C=new ms;C.moveTo(-1.28,.52),C.quadraticCurveTo(-.55,.22,0,.05),C.quadraticCurveTo(.55,.22,1.28,.58),C.lineTo(1.42,.12),C.quadraticCurveTo(1.22,-.45,.88,-.86),C.lineTo(.68,-.35),C.quadraticCurveTo(0,-.18,-.68,-.35),C.lineTo(-.88,-.86),C.quadraticCurveTo(-1.22,-.45,-1.42,.12),C.closePath();let x={steps:2,depth:.42,bevelEnabled:!0,bevelThickness:.14,bevelSize:.1,bevelOffset:0,bevelSegments:6},V=new Gs(C,x);V.center();let Y=V.attributes.uv,Q=V.attributes.position;for(let b=0;b<Q.count;b++){let S=Q.getX(b),k=Q.getY(b),H=Q.getZ(b),et=Math.cos(S*.65)*.28-Math.abs(k)*.08;Q.setZ(b,H+et),Y.setXY(b,(S+1.5)/3,(k+.95)/1.65)}V.computeVertexNormals();let xt=new Dt(V,Bt);xt.position.set(0,-1.42,.46),xt.rotation.x=.08,Me.add(xt);let vt=new Dt(new je(1.05,.68,1.55,24),$t);vt.scale.set(1.15,1,.72),vt.position.set(0,-1.68,0),Me.add(vt),[-1,1].forEach(b=>{let S=new Dt(new je(.045,.045,.95,12),we);S.position.set(b*1.28,-1.62,.28),S.rotation.z=b*.58,Me.add(S);let k=new Dt(new je(.08,.08,.48,12),oe);k.position.set(b*1.42,-1.48,.28),k.rotation.z=b*.58,Me.add(k)});let K=new _n;K.position.set(0,-2.02,.24),Ie.add(K);let rt=new Dt(new oi(.42,28,22),$t);rt.scale.set(.92,1.08,.78),K.add(rt);let Et=new Dt(new Ki(.32,.055,14,32),oe);Et.position.set(0,0,.22),K.add(Et);let Xt=new Dt(new oi(.16,20,16),Ct);Xt.position.set(0,0,.26),K.add(Xt);let wt=new Dt(new je(.06,.08,.12,16),$t);wt.rotation.x=Math.PI/2,wt.position.set(0,0,.36),K.add(wt),[-1,1].forEach(b=>{let S=new Dt(new oi(.2,16,14),oe);S.scale.set(.65,1.15,.8),S.position.set(b*.48,.08,.12),S.rotation.z=b*.22,K.add(S);let k=new Dt(new je(.065,.065,.68,14),we);k.position.set(b*.28,-.52,-.02),k.rotation.z=b*-.08,K.add(k);let H=new Dt(new je(.1,.09,.32,14),oe);H.position.set(b*.26,-.38,-.02),H.rotation.z=b*-.08,K.add(H);let et=new Dt(new ei(.52,.42,.36),oe);et.position.set(b*.38,-.78,.06),et.rotation.set(.15,b*-.25,b*.38),K.add(et);let G=new Dt(new je(.28,.38,1.15,6),oe);G.position.set(b*.56,-1.32,.04),G.rotation.z=b*-.18,K.add(G)});let St=new Dt(new Ta(.28,0),oe);St.scale.set(1,1.35,.7),St.position.set(0,-.84,.16),K.add(St);let Yt=new Dt(new je(.38,.52,1.1,8),$t);Yt.position.set(0,-1.35,-.04),K.add(Yt);function ae(b){let S=b?-1:1,k=new _n;k.position.set(S*1.48,-1.08,0);let H=new ms;H.moveTo(0,0),H.lineTo(S*.95,-.18),H.lineTo(S*.72,.34),H.lineTo(S*.08,.46),H.closePath();let et=new Gs(H,{depth:.55,bevelEnabled:!0,bevelThickness:.06,bevelSize:.05,bevelSegments:3});et.center();let G=new Dt(et,oe);G.position.set(S*-.18,.32,-.04),G.rotation.y=S*-.18,G.rotation.z=S*-.12,k.add(G);let O=new ms;O.moveTo(0,.28),O.quadraticCurveTo(S*.85,.34,S*1.62,-.08),O.lineTo(S*1.35,-.42),O.quadraticCurveTo(S*.62,-.32,0,-.18),O.closePath();let ue=new Gs(O,{depth:.78,bevelEnabled:!0,bevelThickness:.09,bevelSize:.07,bevelSegments:4});ue.center();let ye=new Dt(ue,oe);ye.position.set(S*.52,.08,.02),ye.rotation.z=S*-.08,ye.rotation.y=S*-.12,k.add(ye);let De=new Dt(new ei(.75,.16,.58),$t);De.position.set(S*.58,-.22,0),De.rotation.z=S*-.28,k.add(De);let Ce=new Dt(new oi(.32,20,16),$t);Ce.position.set(S*.42,-.36,0),k.add(Ce);let Ee=new _n;Ee.position.set(S*.46,-.38,0),k.add(Ee);let ze=new Dt(new je(.14,.12,1.15,16),$t);ze.position.set(S*.12,-.58,0),ze.rotation.z=S*.14,Ee.add(ze);let sn=new Dt(new je(.045,.045,.95,12),we);sn.position.set(S*.02,-.56,.14),sn.rotation.z=S*.14,Ee.add(sn);let dn=new Dt(new je(.24,.18,.52,16,1,!1,0,Math.PI),oe);dn.rotation.y=b?-Math.PI/2:Math.PI/2,dn.rotation.z=S*.14,dn.position.set(S*.22,-.45,.04),Ee.add(dn);let fn=new Dt(new oi(.16,14,12),oe);fn.scale.set(.6,1.3,.85),fn.position.set(S*-.02,-.92,.1),Ee.add(fn);let Oe=new _n;Oe.position.set(S*.22,-1.16,.02),Ee.add(Oe);let bn=new Dt(new je(.19,.19,.3,16),$t);bn.rotation.x=Math.PI/2,Oe.add(bn);let pe=new Dt(new je(.22,.35,1.42,6),oe);pe.position.set(S*.08,-.72,.08),pe.rotation.z=S*.06,Oe.add(pe);let Wt=new Dt(new je(.04,.04,.88,10),we);Wt.position.set(S*-.08,-.58,.22),Oe.add(Wt);let Zt=new Dt(new Ki(.28,.055,10,18),$t);return Zt.rotation.x=Math.PI/2,Zt.position.set(S*.11,-1.35,.08),Oe.add(Zt),{shoulderRig:k,armGroup:Ee,elbowGroup:Oe,armPiston:sn,mainPauldron:ye}}let ie=ae(!0),N=ae(!1);Ie.add(ie.shoulderRig),Ie.add(N.shoulderRig);let dt=new _n;dt.position.set(0,-.34,0),le.add(dt);let st=2.45;function Tt(b){let S=.8;if(b>=.22){let G=Math.min(1,(b-.22)/.78);S=.8*Math.pow(Math.max(0,1-Math.pow(G,2.15)),1/2.1)}else if(b>=-.48){let G=(.22-b)/.7;S=.8-.12*Math.pow(G,1.25)}else{let G=Math.min(1,(-.48-b)/.52),O=1-.35*Math.pow(G,1.12),ue=Math.pow(Math.max(0,1-Math.pow(G,3.2)),1/2.35);S=.68*O*ue}let k=.76;if(b>=.22){let G=Math.min(1,(b-.22)/.78);k=.76*Math.pow(Math.max(0,1-Math.pow(G,2.15)),1/2.1)}else{let G=Math.min(1,(.22-b)/1.22),O=Math.pow(Math.max(0,1-Math.pow(G,3.4)),1/2.4);k=.76*(1-.16*Math.pow(G,1.3))*O}let H=.96+b*1.04,et=-.02+Math.cos((b-.05)*1.2)*.035;return{halfW:S,halfD:k,yWorld:H,zCenter:et}}function Lt(){let b=new oi(1,64,56),S=b.attributes.position;for(let k=0;k<S.count;k++){let H=S.getX(k),et=S.getY(k),G=S.getZ(k),O=Math.max(-1,Math.min(1,et)),{halfW:ue,halfD:ye,yWorld:De,zCenter:Ce}=Tt(O),Ee=Math.hypot(H,G),ze=0,sn=0;if(Ee>1e-5){let Oe=H/Ee,bn=G/Ee,pe=Math.pow(Math.pow(Math.abs(Oe),st)+Math.pow(Math.abs(bn),st),1/st)||1;ze=Oe/pe,sn=bn/pe}let dn=ze*ue,fn=Ce+sn*ye;S.setXYZ(k,dn,De,fn)}return b.computeVertexNormals(),b}function ct(b=.014){let S=new Ws(2,2,56,56),k=S.attributes.position;for(let H=0;H<k.count;H++){let et=k.getX(H),G=k.getY(H),O=G*.93,{halfW:ue,halfD:ye,yWorld:De,zCenter:Ce}=Tt(O),Ee=et*.91,ze=Math.pow(Math.max(.001,1-Math.pow(Math.abs(Ee),st)),1/st),sn=Ee*(ue+b),dn=De+G*b*.4,fn=Ce+ze*(ye+b)+b*.35;k.setXYZ(H,sn,dn,fn)}return S.computeVertexNormals(),S}let Kt=Lt(),Ht=new Dt(Kt,Vt);dt.add(Ht);let on=ct(.014),$e=new Dt(on,lt);dt.add($e);let Nn=new _n;dt.add(Nn);let ii=[],Xa=36;for(let b=0;b<=Xa;b++){let S=b/Xa*Math.PI,k=.96+Math.sin(S*3)*.018,H=1.36+Math.sin(S*2-.4)*.025,et=Math.cos(S)*k,G=.78+Math.sin(S)*H,O=-.02+Math.sin(S)*.04;ii.push(new L(et,G,O))}let qa=new ps(ii),Ya=new gs(qa,48,.072,14,!1),kr=new Dt(Ya,$t);Nn.add(kr);let cc=new gs(qa,40,.044,10,!1),$s=new Dt(cc,oe);$s.scale.set(.95,.94,.95),$s.position.set(0,.02,.04),Nn.add($s);function zr(b){let S=b?-1:1,k=new _n;k.position.set(S*.9,.82,.02);let H=new Dt(new je(.42,.42,.14,28),nt);H.rotation.z=Math.PI/2,H.scale.set(1.26,1,.84),k.add(H);let et=new Dt(new je(.38,.3,.24,28),oe);et.rotation.z=Math.PI/2,et.position.x=S*.13,et.scale.set(1.26,1,.84),k.add(et);let G=new Dt(new Ki(.31,.02,12,32),b?ee:Pt);G.rotation.y=Math.PI/2,G.position.x=S*.25,G.scale.set(.84,1.26,1),k.add(G);let O=new Dt(new je(.16,.16,.07,20),$t);return O.rotation.z=Math.PI/2,O.position.x=S*.24,k.add(O),{cupGroup:k,ledRing:G}}let Ti=zr(!0),Ks=zr(!1);Nn.add(Ti.cupGroup),Nn.add(Ks.cupGroup);let Fi="cap",qn=new _n;qn.position.set(0,1.56,.02),qn.rotation.set(-.2,.06,-.03),dt.add(qn);let ws=new oi(.84,40,24,0,Math.PI*2,0,Math.PI*.54);ws.scale(1.01,.72,1.06);let Za=new Dt(ws,$t);qn.add(Za);for(let b=0;b<6;b++){let S=b/6*Math.PI*2,k=[];for(let G=0;G<=12;G++){let O=G/12*Math.PI*.53,ue=.844;k.push(new L(Math.cos(S)*Math.sin(O)*ue*1.01,Math.cos(O)*ue*.72,Math.sin(S)*Math.sin(O)*ue*1.06))}let H=new ps(k),et=new Dt(new gs(H,14,.012,6,!1),oe);qn.add(et)}let As=new Dt(new je(.055,.055,.035,16),we);As.position.set(0,.61,0),qn.add(As);let Qs=new ei(1.18,.036,.76,28,2,16),ji=Qs.attributes.position;for(let b=0;b<ji.count;b++){let S=ji.getX(b),k=ji.getY(b),H=ji.getZ(b),et=(H+.38)/.76,G=1-Math.pow(et,2.2)*.22;S*=G,k+=Math.cos(S*1.8)*.06-.04+et*.03,ji.setXYZ(b,S,k,H)}Qs.computeVertexNormals();let Ja=new Dt(Qs,oe);Ja.position.set(0,.04,.92),qn.add(Ja);let Vr=new Dt(new ei(.42,.18,.04),$t);Vr.position.set(0,.22,.85),Vr.rotation.x=-.28,qn.add(Vr);let Hr=new Dt(new ei(.32,.05,.05),ee);Hr.position.set(0,.22,.855),Hr.rotation.x=-.28,qn.add(Hr);let $n=new _n;$n.position.set(0,1.66,-.02),$n.rotation.set(-.18,0,0),$n.visible=!1,dt.add($n);let $a=Ts(6831394,!0),v=new ci({map:$a,roughnessMap:J,bumpMap:J,bumpScale:.042,roughness:.58,metalness:.22}),U=new je(.68,.82,.82,56,28,!1),$=U.attributes.position;for(let b=0;b<$.count;b++){let S=$.getX(b),k=$.getY(b),H=$.getZ(b),et=(k+.41)/.82;if(H*=1.15,S*=.94-et*.12,H>.05&&et>.25){let G=Math.sin(et*Math.PI)*Math.max(0,Math.min(1,(H-.05)/.65));S*=1-G*.28}if(et>.65){let G=(et-.65)/.35,O=Math.exp(-(S*S)*14)*.22*G,ue=Math.pow(Math.abs(S)/.65,2.2)*.09*G;k-=O+ue}$.setXYZ(b,S,k,H)}U.computeVertexNormals();let q=new Dt(U,v);q.position.set(0,.32,0),$n.add(q);let X=new je(1.78,1.78,.042,64,16),At=X.attributes.position;for(let b=0;b<At.count;b++){let S=At.getX(b),k=At.getY(b),H=At.getZ(b);H*=1.08,S*=.95;let et=Math.pow(Math.abs(S)/1.35,2.1)*.44,G=H>0?-Math.pow(H/1.8,1.6)*.12:Math.pow(-H/1.8,1.6)*.06;k+=et+G,At.setXYZ(b,S,k,H)}X.computeVertexNormals();let Ft=new Dt(X,v);Ft.position.set(0,-.06,.04),$n.add(Ft);let Rt=new je(.81,.83,.11,40,1,!0);Rt.scale(.94,1,1.15);let kt=new Dt(Rt,$t);kt.position.set(0,-.01,0),$n.add(kt);let Gt=new Dt(new ei(.24,.13,.06),ee);Gt.position.set(0,-.01,.94),$n.add(Gt);let be=new _n;be.visible=!1,dt.add(be);let Be=new ci({color:1381400,roughnessMap:J,bumpMap:J,bumpScale:.036,roughness:.62,metalness:.32}),Ke=[{root:[-.46,1.88,-.02],mid1:[-.88,2.18,-.38],mid2:[-1.32,1.25,-.62],tip:[-1.42,-.35,-.45],rad:.095,phase:0,side:-1},{root:[.46,1.88,-.02],mid1:[.88,2.18,-.38],mid2:[1.32,1.25,-.62],tip:[1.42,-.35,-.45],rad:.095,phase:.6,side:1},{root:[-.64,1.72,-.06],mid1:[-1.18,1.92,-.35],mid2:[-1.58,.88,-.48],tip:[-1.58,-.78,-.32],rad:.102,phase:1.2,side:-1},{root:[.64,1.72,-.06],mid1:[1.18,1.92,-.35],mid2:[1.58,.88,-.48],tip:[1.58,-.78,-.32],rad:.102,phase:1.8,side:1},{root:[-.74,1.52,-.12],mid1:[-1.35,1.58,-.38],mid2:[-1.72,.45,-.42],tip:[-1.66,-1.08,-.22],rad:.105,phase:2.4,side:-1},{root:[.74,1.52,-.12],mid1:[1.35,1.58,-.38],mid2:[1.72,.45,-.42],tip:[1.66,-1.08,-.22],rad:.105,phase:3,side:1},{root:[-.76,1.28,-.24],mid1:[-1.42,1.18,-.48],mid2:[-1.74,.05,-.44],tip:[-1.55,-1.25,-.18],rad:.1,phase:.4,side:-1},{root:[.76,1.28,-.24],mid1:[1.42,1.18,-.48],mid2:[1.74,.05,-.44],tip:[1.55,-1.25,-.18],rad:.1,phase:1,side:1},{root:[-.24,1.94,-.14],mid1:[-.52,2.28,-.52],mid2:[-.95,1.38,-.78],tip:[-1.08,-.45,-.62],rad:.092,phase:1.6,side:-1},{root:[.24,1.94,-.14],mid1:[.52,2.28,-.52],mid2:[.95,1.38,-.78],tip:[1.08,-.45,-.62],rad:.092,phase:2.2,side:1},{root:[-.55,1.62,-.32],mid1:[-1.02,1.72,-.68],mid2:[-1.35,.62,-.72],tip:[-1.28,-.95,-.52],rad:.096,phase:2.8,side:-1},{root:[.55,1.62,-.32],mid1:[1.02,1.72,-.68],mid2:[1.35,.62,-.72],tip:[1.28,-.95,-.52],rad:.096,phase:3.4,side:1}].map((b,S)=>{let k=new _n,[H,et,G]=b.root;k.position.set(H,et,G);let O=new Dt(new je(b.rad*1.28,b.rad*1.15,.09,14),we);O.rotation.z=b.side*.6,k.add(O);let ue=new L(0,0,0),ye=new L(b.mid1[0]-H,b.mid1[1]-et,b.mid1[2]-G),De=new L(b.mid2[0]-H,b.mid2[1]-et,b.mid2[2]-G),Ce=new L(b.tip[0]-H,b.tip[1]-et,b.tip[2]-G),Ee=new ps([ue,ye,De,Ce]),ze=new gs(Ee,28,b.rad,12,!1),sn=ze.attributes.position;for(let Oe=0;Oe<sn.count;Oe++){let bn=sn.getX(Oe),pe=sn.getY(Oe),Wt=sn.getZ(Oe),Zt=1+Math.sin(pe*22+S)*.11;sn.setXYZ(Oe,bn*Zt,pe,Wt*Zt)}ze.computeVertexNormals();let dn=new Dt(ze,Be);k.add(dn),[.24,.52,.78].forEach((Oe,bn)=>{let pe=Ee.getPoint(Oe),Wt=Ee.getTangent(Oe),Zt=bn===1?S%2===0?ee:Pt:we,de=new Dt(new je(b.rad*1.2,b.rad*1.2,.1,14),Zt);de.position.copy(pe),de.quaternion.setFromUnitVectors(new L(0,1,0),Wt.normalize()),k.add(de)});let fn=new Dt(new oi(b.rad*.88,12,10),S%2===0?ee:Pt);return fn.position.copy(Ce),k.add(fn),be.add(k),{pivot:k,cfg:{phase:b.phase,side:b.side}}});function hn(b){Fi=b,qn.visible=b==="cap",$n.visible=b==="cowboy",be.visible=b==="predator",document.querySelectorAll("[data-accessory-btn]").forEach(S=>{let k=S.getAttribute("data-accessory-btn")===b;S.classList.toggle("active-pill",k)})}function tn(b){d=b,document.querySelectorAll("[data-scenery-btn]").forEach(S=>{let k=S.getAttribute("data-scenery-btn")===b;S.classList.toggle("active-pill",k)})}let Se={earLeft:new L(-1.05,.82,.03),earRight:new L(1.05,.82,.03),crownTop:new L(0,1.98,.08),templeLeft:new L(-.76,1.42,.42),templeRight:new L(.76,1.42,.42),chinBottom:new L(0,.05,.68),collarCenter:new L(0,-.95,.78),chestLeft:new L(-.68,-1.28,.72),chestRight:new L(.68,-1.28,.72),reactorCore:new L(0,-1.78,.56),hipLeft:new L(-.8,-2.35,.42),hipRight:new L(.8,-2.35,.42),shoulderLocalL:new L(-.34,.14,.28),shoulderLocalR:new L(.34,.14,.28),elbowLocalL:new L(-.08,-.05,.26),elbowLocalR:new L(.08,-.05,.26),wristLocalL:new L(-.1,-.82,.28),wristLocalR:new L(.1,-.82,.28)};function We(b,S,k,H){let et=b.clone();return S.localToWorld(et),et.project(M),{x:(et.x*.5+.5)*k,y:(-et.y*.5+.5)*H,z:et.z}}let Nt=Array.from({length:95},(b,S)=>{let k=S*2.39996+S%7*.3,H=1.8+S%11*1.15;return{x:Math.cos(k)*H*1.45,y:Math.sin(k)*H*.95-.8,zOffset:S/95*18,glyphIdx:S%7}});function Rn(b,S,k,H){let et=t.width,G=t.height;if(s.clearRect(0,0,et,G),!h)return;if(d==="classic"){let Zt=Math.ceil(et/11),de=Math.ceil(G/15);s.font='600 12px "JetBrains Mono", "Fira Code", "SF Mono", Menlo, monospace',s.textBaseline="top",s.textAlign="left",s.globalAlpha=1;let Ne=f.x*3.5;for(let se=0;se<de;se++){let te=se/de;for(let Ot=0;Ot<Zt;Ot++){let _t=Ot/Zt,re=Ot*11,rn=se*15,Xe=(_t-.5)*6.5+Ne*.12,me=Math.sin(Xe*1.15+.4)*.14+Math.cos(Xe*2.4-.7)*.08+Math.sin(Xe*4.7+b*.25)*.035,Pe=Math.sin(Xe*3.5-b*2.2)*(S*.065+k*.045),ce=.34-me-Pe,Ae=.76+Math.sin(Xe*1.6)*.08,ve=.58-te*.62+Math.sin(te*8+b*.6)*.025;if(_t<ve&&te<ce+.08){if(ve-_t>.08){let qt=Math.floor(Ot+se*.5+b*(1.2+H*2.2))%2,Jt=(Ot+se)%7===0?"X":qt===0?"/":"\\";s.fillStyle=l.asciiSky,s.fillText(Jt,re,rn)}else(Ot+se)%2===0&&(s.fillStyle=l.asciiSky,s.fillText("/",re,rn));continue}if(te>=ce&&te<=Ae){let ge=(te-ce)/(Ae-ce),qt=Math.cos(Xe*2.8+ge*4.2-b*.35)*.5+Math.sin(Ot*.35-se*.25)*.35+(1-ge)*.45+S*.38;if(Math.hypot((_t-.5)*1.4,te-.58)>.22&&qt>.18){let gt=".";if(qt>.92)gt=(Ot+se)%3===0?"\u25AA":Ot*se%2===0?"#":"X",s.fillStyle=l.asciiMountainBright;else if(qt>.68){let Ut=["#","X","=","o","\u25AB","\\","/"];gt=Ut[(Ot*3+se*5)%Ut.length],s.fillStyle=l.asciiMountainMid}else if(qt>.42){let Ut=["/","\\","=","-","."];gt=Ut[(Ot+se*2)%Ut.length],s.fillStyle=l.asciiMountainDim}else{if((Ot*7+se*13)%5!==0)continue;gt=(Ot+se)%2===0?"\\":".",s.fillStyle=l.asciiMountainDim}s.fillText(gt,re,rn)}continue}let ft=Math.sin(Ot*127.1+se*311.7)*43758.5453,Mt=ft-Math.floor(ft);if(Mt>.87&&Math.sin(b*.9+Ot*.4+se*.2)>-.2){let qt=["\\","/",".","\xB7","=","\\"],Jt=Math.floor((Mt*100+Math.floor(b*.5))%qt.length);s.fillStyle=l.asciiMountainDim,s.fillText(qt[Jt],re,rn)}}}return}if(d==="horizon2d"){let Zt=Math.floor(et/11),de=Math.floor(G/15);s.font='700 12px "JetBrains Mono", "Fira Code", monospace',s.textBaseline="top",s.textAlign="left",s.globalAlpha=1;let Ne=Math.round(f.x*2.5),se=Math.round(f.y*1.5);for(let te=0;te<de;te++){let Ot=te/de;for(let _t=0;_t<Zt;_t++){let re=_t/Zt;if(Math.hypot(re-.5,Ot-.56)<.25)continue;let Xe=.5+Math.sin((re+Ne*.01)*5.8+.6)*.14+Math.cos(re*13.5-1.1)*.07+Math.sin(re*27+b*.35)*.025,me=Math.floor(re*56),Pe=a.freqData[me]/255*.1*(.5+S),ce=Xe-Pe;if(Ot>=ce){let Ae=(Ot-ce)/(1-ce+.001),ve=Math.cos(re*5.8+.6),ft=(1-Ae*.72)*(.55+ve*.45)+S*.28*(1-Ae),Mt=".";if(Ot-ce<.024)Mt="\u25AA",s.fillStyle=l.asciiMountainBright;else if(ft>.72)Mt=(te+_t)%2===0?"#":"X",s.fillStyle=l.asciiMountainBright;else if(ft>.44)Mt=(te*3+_t)%3===0?"X":"=",s.fillStyle=l.asciiMountainMid;else if(ft>.24)Mt=(te+_t)%2===0?"/":":",s.fillStyle=l.asciiMountainDim;else{if((te+_t)%3!==0)continue;Mt=".",s.fillStyle=l.asciiMountainDim}s.fillText(Mt,_t*11,te*15)}else{let Ae=Math.sin(_t*91.7+te*37.3+Math.floor(b*2.2)*.12)*1e4,ve=Ae-Math.floor(Ae);if(ve>.962-H*.035){s.fillStyle=l.asciiMountainMid;let ft=["/","\\","x","+","\xB7","-"],Mt=Math.floor(ve*997%ft.length);s.fillText(ft[Mt],(_t+Ne*.3)*11,(te+se*.3)*15)}else re<.36&&Ot<.42&&Math.abs((_t-te*1.4+Math.floor(b*3))%13)<1.15&&(s.fillStyle=l.asciiMountainDim,s.fillText("/",_t*11,te*15))}}}return}if(d==="cybercode"){let Zt=Math.floor(et/10),de=Math.floor(G/17);s.font='600 13px "JetBrains Mono", "Fira Code", monospace',s.textBaseline="top",s.textAlign="left";let Ne="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+#/X",se=Ne.length,te=f.x*6,Ot=f.y*4;for(let _t=0;_t<Zt;_t++){let re=Math.sin(_t*17.3+4.1)*43758.5453,rn=1.2+Math.abs(re%2.4),Xe=Math.abs(Math.floor(_t*2))%64,me=a.freqData[Xe]/255,Pe=(b*(rn+me*3.5)+re%100)%de;for(let ce=0;ce<de;ce++){let Ae=_t*10+te*.1,ve=ce*17+Ot*.1,ft=_t/Zt,Mt=ce/de;if(Math.hypot((ft-.5)*1.35,Mt-.56)<.22)continue;let qt=(ce-Pe+de)%de,Jt=qt<1.2,gt=qt<6,Ut=Math.hypot(ft-.5,Mt-.55),Le=Math.sin(Ut*16-b*8)*(S*.45+(a.kickPulse||0)*.4),Re=Math.abs(Math.floor(Math.sin(_t*93.1+Math.floor(ce+Pe)*31.7)*99991)),Qe=Ne[Re%se];if(Jt||Le>.32)s.fillStyle="#67e8f9",s.globalAlpha=Math.min(.95,.75+S*.25);else if(gt||Le>.15||me>.5)s.fillStyle="#22d3ee",s.globalAlpha=Math.min(.75,.45+me*.3);else{let Je=Re%3;Je===0?(s.fillStyle="#1e384d",s.globalAlpha=.55):Je===1?(s.fillStyle="#162b3d",s.globalAlpha=.42):(s.fillStyle="#10202e",s.globalAlpha=.3)}s.fillText(Qe,Ae,ve)}}}if(d==="street"){let Zt=Math.floor(et/10),de=Math.floor(G/15);s.font='700 12px "JetBrains Mono", "Fira Code", monospace',s.textBaseline="top",s.textAlign="left";let Ne=f.x*18,se=f.y*10,te=a.kickPulse||0,Ot=(S*.7+te*.9)*(Math.sin(b*30)*1.5);for(let _t=0;_t<Zt;_t++){let re=_t/Zt,rn=Math.abs(re-.5),Xe=rn>.16,me=Math.pow((rn-.16)/.34,1.8),Pe=Xe?.82-me*.38:.82,ce=Xe&&Math.abs(rn-.5)<.04;for(let Ae=0;Ae<de;Ae++){let ve=Ae/de,ft=_t*10+Ne*.2,Mt=Ae*15+se*.2;if(Math.hypot((re-.5)*1.35,ve-.58)<.22)continue;if((re<.3||re>.7)&&(ve<Pe||ve<.68)){let Ut=re<.5,Le=Ut?_t:_t-Math.floor(Zt*.7),Re=Ae,Qe=Math.floor(Re/2),Je=Re%2===0,un=(Le+Qe%2*2)%4===0,Sn=Je?"\u2500":un?"\u2502":"\u2591",Mn=Je||un?"#1e2430":"#141822",ln=.55,en=Ut?re/.3:(re-.7)/.3,cn=ve/.55,Pn=!1,Un="#f43f5e",kn="#";if(Ut&&cn>=.22&&cn<=.52&&en>=.12&&en<=.88){let Qt=(en-.12)/.76,Ye=(cn-.22)/.3,zn=Qt>=.06&&Qt<=.16||Qt>=.06&&Qt<=.3&&Ye>=.75,sr=Qt>=.36&&Qt<=.45||Qt>=.36&&Qt<=.6&&(Ye<=.22||Ye>=.78)||Qt>=.56&&Qt<=.62&&Ye>=.2&&Ye<=.8,vc=Qt>=.68&&Qt<=.76||Qt>=.68&&Qt<=.92&&(Ye<=.22||Ye>=.44&&Ye<=.56)||Qt>=.86&&Qt<=.94&&Ye>=.18&&Ye<=.48||Qt>=.78&&Qt<=.94&&Ye>=.56&&Qt-.78-(Ye-.56)*.4<.06;(zn||sr||vc)&&(Pn=!0,kn=(_t+Ae)%2===0?"\u2588":"\u2593",Un=S>.5?"#fb7185":"#f43f5e",ln=.95+S*.2)}if(Ut&&cn>=.6&&cn<=.82&&en>=.15&&en<=.85){let Qt=(en-.15)/.7;Qt>=.05&&Qt<=.28?(Pn=!0,kn="\u2665",Un="#f43f5e",ln=.9):Qt>=.38&&Qt<=.6?(Pn=!0,kn="\u2715",Un="#38bdf8",ln=.9):Qt>=.7&&Qt<=.95&&(Pn=!0,kn="\u25A0",Un="#facc15",ln=.9)}if(!Ut&&cn>=.2&&cn<=.5&&en>=.1&&en<=.9){let Qt=(en-.1)/.8,Ye=(cn-.2)/.3,zn=Qt>=.05&&Qt<=.14||Qt<=.24&&(Ye<=.2||Ye>=.42&&Ye<=.56||Ye>=.78)||Qt>=.22&&Qt<=.26&&(Ye<=.5||Ye>=.5),sr=Qt>=.3&&Qt<=.38||Qt>=.3&&Qt<=.46&&(Ye<=.2||Ye>=.42&&Ye<=.56||Ye>=.78),vc=Qt>=.5&&Qt<=.58||Qt>=.66&&Qt<=.74||Qt>=.5&&Qt<=.74&&(Ye<=.2||Ye>=.46&&Ye<=.6),Bf=Qt>=.78&&Qt<=.95&&Ye<=.22||Qt>=.84&&Qt<=.9;(zn||sr||vc||Bf)&&(Pn=!0,kn=(_t+Ae)%2===0?"\u2588":"\u2592",Un=te>.6?"#67e8f9":"#06b6d4",ln=.95+te*.25)}if(!Ut&&cn>=.58&&cn<=.78&&en>=.15&&en<=.85){let Qt=(en-.15)/.7;if(Qt>=.1&&Qt<=.35)Pn=!0,kn="\u26A1",Un="#facc15",ln=.95;else if(Qt>=.45&&Qt<=.9){let Ye="SK8\xB7DIE",zn=Math.floor((Qt-.45)/.45*Ye.length);Pn=!0,kn=Ye[zn]||"X",Un="#a855f7",ln=.9}}let zi=Math.sin(_t*53.7)*43758.54,ro=zi-Math.floor(zi)>.7,Ns=.08+Math.abs(zi%.16)+(S*.08+te*.06);if(!Pn&&ro){let Qt=cn>.52&&cn<.52+Ns&&en>=.12&&en<=.88,Ye=cn>.5&&cn<.5+Ns&&en>=.1&&en<=.9;if(Ut&&Qt){Pn=!0;let zn=(cn-.52)/Ns;kn=zn>.85?"o":zn>.6?":":"|",Un="#f43f5e",ln=Math.max(.4,.95-zn*.5)}else if(!Ut&&Ye){Pn=!0;let zn=(cn-.5)/Ns;kn=zn>.85?"\u2022":zn>.6?":":"|",Un="#06b6d4",ln=Math.max(.4,.95-zn*.5)}}Pn?(s.fillStyle=Un,s.globalAlpha=Math.min(1,ln),s.fillText(kn,ft+Ot,Mt)):(s.fillStyle=Mn,s.globalAlpha=ln,s.fillText(Sn,ft,Mt));continue}if(ve>=Pe-.018){if(Math.abs(ve-Pe)<.022&&Xe){let Je=H>.55&&(_t+Math.floor(b*12))%7===0;s.fillStyle=Je?"#ffffff":te>.6?"#67e8f9":"#cbd5e1",s.globalAlpha=Je?1:.88;let un=Je?"\u2726":_t%2===0?"\u2550":"\xD8";s.fillText(un,ft,Mt);continue}let Le=Math.abs(ve*100%6)<.65,Re=Math.sin(_t*19.3+Math.floor(ve*25)*11.7),Qe=Math.abs(Re)>.82;if(Le)s.fillStyle="#475569",s.globalAlpha=.7,s.fillText(_t%8===0?"+":"\u2550",ft,Mt);else if(Qe&&Xe)s.fillStyle="#334155",s.globalAlpha=.65,s.fillText("~",ft,Mt);else if(ve>.84){let Je=Math.abs(re-.5)<.035,un=(Math.abs(re-.35)<.02||Math.abs(re-.65)<.02)&&Ae%2===0;if(Je)s.fillStyle="#facc15",s.globalAlpha=.85,s.fillText("\u2551",ft,Mt);else if(un)s.fillStyle="#f59e0b",s.globalAlpha=.8,s.fillText("/",ft,Mt);else{let Sn=Math.sin(_t*91.1+Ae*47.7);s.fillStyle="#1e293b",s.globalAlpha=.5;let Mn=[".","\xB7","\u2591"," "];s.fillText(Mn[Math.abs(Math.floor(Sn*99))%Mn.length],ft,Mt)}}else s.fillStyle=Xe?"#1e293b":"#0f172a",s.globalAlpha=.55,s.fillText((Ae+_t)%3===0?"\u2591":".",ft,Mt);continue}if(ve>=.24&&ve<Pe&&ve>=.42-Math.abs(Math.sin(_t*.45))*.12){let Le=Math.sin(_t*67.3+Ae*89.1+Math.floor(b*.5));Le-Math.floor(Le)>.88?(s.fillStyle="#fef08a",s.globalAlpha=.65+H*.3,s.fillText("\u25AA",ft,Mt)):(s.fillStyle="#0f172a",s.globalAlpha=.7,s.fillText("\u2588",ft,Mt));continue}let Jt=Math.sin(_t*133.7+Ae*59.3)*43758.54;Jt-Math.floor(Jt)>.965&&(s.fillStyle="#94a3b8",s.globalAlpha=.45+H*.35,s.fillText("\xB7",ft,Mt))}}s.globalAlpha=1;return}let O=a.kickPulse||0;s.textBaseline="middle",s.textAlign="center";let ue=f.x*1.2+Math.sin(b*.45)*.18,ye=f.y*.65+Math.cos(b*.35)*.08,De=et*.5-ue*(et*.09),Ce=G*.46+ye*(G*.07),Ee=Math.min(et,G)*.92,ze=(pe,Wt,Zt)=>{let de=pe-ue*(1.8/Math.max(1,Zt*.25)),Ne=Wt-ye*(1.2/Math.max(1,Zt*.25)),se=Ee/Math.max(.8,Zt);return{sx:De+de*se,sy:Ce-Ne*se,scale:se/(Ee*.12)}},sn=["\xB7",".","/","\\","+","x","X","\u25AA","#"],fn=b*(d==="warp3d"?3.4:1.85)+a.beatPhase*(d==="warp3d"?1.1:.55);for(let pe=0;pe<Nt.length;pe++){let Wt=Nt[pe],Zt=18.5-(Wt.zOffset+fn)%17.3,de=ze(Wt.x,Wt.y,Zt);if(de.sx<-20||de.sx>et+20||de.sy<-20||de.sy>G+20||Math.hypot((de.sx-et*.5)/et,(de.sy-G*.54)/G)<.2&&Zt<6)continue;let se=1-(Zt-1.2)/17.3,te=Math.max(8,Math.min(26,Math.round(8+Math.pow(se,1.45)*(d==="warp3d"?20:16))));s.font=`700 ${te}px "JetBrains Mono", "Fira Code", monospace`;let Ot=Math.min(sn.length-1,Math.floor(se*sn.length));s.globalAlpha=Math.min(.92,(.15+se*.78)*(.75+H*.5)),s.fillStyle=se>.72?l.asciiMountainBright:se>.4?l.asciiMountainMid:l.asciiMountainDim,s.fillText(sn[Ot],de.sx,de.sy)}if(d==="valley3d"||d==="warp3d"){let pe=d==="warp3d"?{x:4.1,y:2.1,z:10.4}:{x:-4.4,y:2.35,z:11.2},Wt=1.45+S*.22+O*.14,Zt=b*.42,de=.42+Math.sin(b*.3)*.1,Ne=Math.cos(Zt),se=Math.sin(Zt),te=Math.cos(de),Ot=Math.sin(de),_t=.65,re=.52,rn=.55,Xe=[".",":","/","=","+","x","X","#","@"],me=[],Pe=10,ce=20;for(let ve=1;ve<Pe;ve++){let ft=ve/Pe*Math.PI,Mt=Math.sin(ft),ge=Math.cos(ft);for(let qt=0;qt<ce;qt++){let Jt=qt/ce*Math.PI*2,gt=Math.cos(Jt)*Mt,Ut=ge,Le=Math.sin(Jt)*Mt,Re=gt*Ne-Le*se,Qe=gt*se+Le*Ne,Je=Ut*te-Qe*Ot,un=Ut*Ot+Qe*te;if(un<-.15)continue;let Sn=Math.max(0,Re*_t+Je*re+un*rn),Mn=Math.min(Xe.length-1,Math.floor(Sn*Xe.length));me.push({wx:pe.x+Re*Wt,wy:pe.y+Je*Wt,wz:pe.z-un*Wt,char:Xe[Mn],lum:.25+Sn*.75})}}let Ae=44;for(let ve=0;ve<Ae;ve++){let ft=ve/Ae*Math.PI*2+b*.65,Mt=Wt*(1.58+ve%2*.14)+Math.sin(ft*6-b*5)*(S*.18),ge=Math.cos(ft)*Mt,qt=Math.sin(ft)*.12,Jt=Math.sin(ft)*Mt,gt=.55,Ut=-.32,Le=qt*Math.cos(gt)-Jt*Math.sin(gt),Re=qt*Math.sin(gt)+Jt*Math.cos(gt),Qe=ge*Math.cos(Ut)-Le*Math.sin(Ut),Je=ge*Math.sin(Ut)+Le*Math.cos(Ut);me.push({wx:pe.x+Qe,wy:pe.y+Je,wz:pe.z-Re,char:ve%3===0?"#":ve%2===0?"=":"/",lum:Re>0?.95:.42})}me.sort((ve,ft)=>ft.wz-ve.wz);for(let ve=0;ve<me.length;ve++){let ft=me[ve],Mt=ze(ft.wx,ft.wy,ft.wz),ge=Math.max(9,Math.min(16,Math.round(11*Mt.scale)));s.font=`700 ${ge}px "JetBrains Mono", "Fira Code", monospace`,s.globalAlpha=Math.min(.92,ft.lum*(.75+S*.35)),s.fillStyle=ft.lum>.72?l.asciiMountainBright:ft.lum>.45?l.asciiMountainMid:l.asciiMountainDim,s.fillText(ft.char,Mt.sx,Mt.sy)}}if(d==="warp3d"){for(let Wt=0;Wt<9;Wt++){let Zt=(Wt/9+(1-fn*.12%1))%1,de=1.6+Math.pow(Zt,1.35)*14.5,Ne=1-Zt,se=Math.max(9,Math.min(22,Math.round(9+Ne*13)));s.font=`700 ${se}px "JetBrains Mono", "Fira Code", monospace`;let te=36,Ot=3.2+Math.sin(de*.5-b*2.5)*(.4+S*.6);for(let _t=0;_t<te;_t++){let re=_t/te*Math.PI*2+b*.3*(Wt%2===0?1:-1),rn=Math.cos(re)*Ot*1.35,Xe=Math.sin(re)*Ot*.85-.25,me=ze(rn,Xe,de);me.sx<0||me.sx>et||me.sy<0||me.sy>G||Math.hypot((me.sx-et*.5)/et,(me.sy-G*.56)/G)<.24||(s.globalAlpha=Math.min(.88,Ne*(.65+S*.35)),s.fillStyle=_t%3===0?l.asciiMountainBright:l.asciiMountainMid,s.fillText(_t%2===0?"#":"+",me.sx,me.sy))}}s.globalAlpha=1,s.textAlign="left",s.textBaseline="top";return}if(d==="cybergrid"){s.font='700 13px "JetBrains Mono", "Fira Code", monospace';for(let Zt=-16;Zt<=16;Zt++){if(Math.abs(Zt)<3)continue;let de=Zt*.58,Ne=Math.abs(Zt)*4%64,se=.2+a.freqData[Ne]/255*(2.6+S*1.4);for(let te=-1.6;te<=-1.6+se;te+=.24){let Ot=ze(de,te,8.8);if(Ot.sx<0||Ot.sx>et||Ot.sy<0||Ot.sy>G)continue;let _t=te>-1.6+se-.26;s.fillStyle=_t?l.asciiMountainBright:l.asciiMountainMid,s.globalAlpha=_t?.92:.62,s.fillText(_t?"\u25AA":"\u2588",Ot.sx,Ot.sy)}}}d==="valley3d"&&[{z:14.5,fontPx:10,stepX:.38,stepY:.28,baseH:.4,amp:1.55,freq:.72,seed:1.1,alphaMul:.45},{z:9.2,fontPx:12,stepX:.3,stepY:.23,baseH:0,amp:1.45,freq:.95,seed:3.7,alphaMul:.72},{z:5.4,fontPx:15,stepX:.25,stepY:.2,baseH:-.55,amp:1.25,freq:1.25,seed:7.3,alphaMul:.96}].forEach((Wt,Zt)=>{s.font=`700 ${Wt.fontPx}px "JetBrains Mono", "Fira Code", monospace`;let de=Wt.z*.95;for(let Ne=-de;Ne<=de;Ne+=Wt.stepX){let se=Zt===2?Math.min(1,Math.pow(Math.abs(Ne)/2.2,1.8)):Zt===1?.45+.55*Math.min(1,Math.abs(Ne)/1.8):1;if(se<.18)continue;let te=Ne*Wt.freq+Wt.seed,Ot=(Math.sin(te)*.55+Math.cos(te*2.1-.8)*.3+Math.sin(te*4.3+b*.4)*.15+.65)*Wt.amp*se,_t=Math.abs(Math.floor(Ne*8+Zt*19))%64,re=a.freqData[_t]/255*(.45+S*.55),rn=Wt.baseH+Ot+re,Xe=Wt.baseH-1.15,me=(Math.cos(te)*.55*Wt.freq-Math.sin(te*2.1-.8)*.3*Wt.freq*2.1)*Wt.amp*se;for(let Pe=rn;Pe>=Xe;Pe-=Wt.stepY){let ce=ze(Ne,Pe,Wt.z);if(ce.sx<0||ce.sx>et||ce.sy<0||ce.sy>G||Math.hypot((ce.sx-et*.5)/et,(ce.sy-G*.56)/G)<.21)continue;let ve=rn-Pe,ft=ve<Wt.stepY*1.15,Mt=Math.max(.08,Math.min(1,.58-me*.45+(1-ve/2.2)*.35+S*.25)),ge=".";if(ft)ge=me>.15?"/":me<-.15?"\\":"\u25AA",s.fillStyle=l.asciiMountainBright,s.globalAlpha=Math.min(.95,Wt.alphaMul*1.1);else if(Mt>.76){let qt=["#","\u25AA","X","@","="];ge=qt[Math.abs(Math.floor(Ne*7+Pe*11))%qt.length],s.fillStyle=l.asciiMountainBright,s.globalAlpha=Wt.alphaMul*.9}else if(Mt>.48){let qt=["X","=","o","\u25AB","/","\\"];ge=qt[Math.abs(Math.floor(Ne*5+Pe*9))%qt.length],s.fillStyle=l.asciiMountainMid,s.globalAlpha=Wt.alphaMul*.72}else{if(Math.abs(Math.floor(Ne*13+Pe*17))%2!==0)continue;ge=me<0?"\\":":",s.fillStyle=l.asciiMountainDim,s.globalAlpha=Wt.alphaMul*.48}s.fillText(ge,ce.sx,ce.sy)}}});let Oe=22,bn=(b*2.4+a.beatPhase*.75)%1;for(let pe=0;pe<Oe;pe++){let Wt=(pe+(1-bn))/Oe,Zt=1.45+Math.pow(Wt,1.45)*13.5,de=1-Wt,Ne=Math.max(8,Math.min(22,Math.round(8+de*14)));s.font=`700 ${Ne}px "JetBrains Mono", "Fira Code", monospace`;let se=28,te=9.5;for(let Ot=-se;Ot<=se;Ot++){let _t=Ot/se*te,re=Math.min(120,Math.abs(Ot*3)+pe*2),rn=a.freqData[re]/255,Xe=d==="cybergrid"?0:Math.pow(Math.abs(_t)/te,2.2)*1.45,me=Math.sin(_t*1.8-Zt*.9+b*3.5)*(.12+S*.28+rn*.35),Pe=-1.75+Xe+me,ce=ze(_t,Pe,Zt);if(ce.sx<0||ce.sx>et||ce.sy<Ce-10||ce.sy>G||Math.hypot((ce.sx-et*.5)/et,(ce.sy-G*.62)/G)<.23)continue;let ve=Math.abs(Ot)%3===0,ft=rn>.48||me>.22,Mt="\xB7";ft?(Mt=de>.55?"#":"X",s.fillStyle=l.asciiMountainBright):ve?(Mt=_t<-.3?"/":_t>.3?"\\":"|",s.fillStyle=l.asciiMountainMid):(Mt=(Ot+pe)%2===0?"=":"-",s.fillStyle=l.asciiMountainDim),s.globalAlpha=Math.min(.92,(.14+de*.78)*(ft?1:.68)),s.fillText(Mt,ce.sx,ce.sy)}}s.globalAlpha=1,s.textAlign="left",s.textBaseline="top"}function He(b,S,k,H,et){let G=n.width,O=n.height;if(r.clearRect(0,0,G,O),!c||u==="none")return;let ue=We(Se.earLeft,dt,G,O),ye=We(Se.earRight,dt,G,O);if(u==="earcups"){r.save(),r.lineCap="round",r.lineJoin="round";let ft=(Mt,ge)=>{let qt=ge?-1:1;r.strokeStyle=l.sketchStroke,r.lineWidth=1.8,r.beginPath(),r.ellipse(Mt.x,Mt.y,16,34,0,0,Math.PI*2),r.stroke(),r.lineWidth=1.5,r.beginPath();for(let gt=-3;gt<=3;gt++){let Ut=Mt.y+gt*7.5+Math.sin(b*9+gt)*(S*3.5),Le=Mt.x+(gt%2===0?-8:8)*qt;gt===-3?r.moveTo(Le,Ut):r.lineTo(Le,Ut)}r.stroke();let Jt=3;for(let gt=1;gt<=Jt;gt++){let Ut=(b*.9+gt*.33)%1,Le=24+gt*15+Ut*15+S*14+et*8,Re=(1-Ut)*(.16+(S+k)*.45);r.strokeStyle=ge?l.eyeLeft:l.eyeRight,r.globalAlpha=Math.min(.78,Re),r.lineWidth=1.6,r.beginPath();let Qe=ge?Math.PI*.68:-Math.PI*.32,Je=ge?Math.PI*1.32:Math.PI*.32;r.arc(Mt.x+qt*6,Mt.y,Le,Qe,Je),r.stroke()}r.globalAlpha=1};ft(ue,!0),ft(ye,!1),r.restore();return}let De=We(Se.crownTop,dt,G,O),Ce=We(Se.templeLeft,dt,G,O),Ee=We(Se.templeRight,dt,G,O),ze=We(Se.chinBottom,dt,G,O),sn=We(Se.collarCenter,Me,G,O),dn=We(Se.chestLeft,Me,G,O),fn=We(Se.chestRight,Me,G,O),Oe=We(Se.reactorCore,Ie,G,O),bn=We(Se.hipLeft,Ie,G,O),pe=We(Se.hipRight,Ie,G,O),Wt=We(Se.shoulderLocalL,ie.shoulderRig,G,O),Zt=We(Se.shoulderLocalR,N.shoulderRig,G,O),de=We(Se.elbowLocalL,ie.elbowGroup,G,O),Ne=We(Se.elbowLocalR,N.elbowGroup,G,O),se=We(Se.wristLocalL,ie.elbowGroup,G,O),te=We(Se.wristLocalR,N.elbowGroup,G,O);r.save(),r.lineCap="round",r.lineJoin="round";let Ot=Math.floor(b*14),_t=ft=>{let Mt=Math.sin(ft*127.1+Ot*311.7)*43758.5453;return Mt-Math.floor(Mt)},re=(ft,Mt,ge,qt,Jt,gt,Ut,Le=0)=>{let Re=Mt.x-ft.x,Qe=Mt.y-ft.y,Je=Math.hypot(Re,Qe)||1,un=-Qe/Je,Sn=Re/Je,Mn=26;r.save(),r.strokeStyle=Jt,r.lineWidth=gt,r.globalAlpha=Ut,r.beginPath();for(let ln=0;ln<=Mn;ln++){let en=ln/Mn,cn=Math.sin(en*Math.PI),Pn=(ge+ln*5)%a.timeData.length,Un=(a.timeData[Pn]-128)/128,kn=a.freqData[(ge+ln*3)%96]/255,zi=Un*qt*cn;if(Le===1){let Qt=(ln%2===0?1:-1)*(6+S*22+et*18)*cn;zi+=Qt+(_t(ge+ln)-.5)*14*cn}else if(Le===2){let Qt=Math.cos(en*Math.PI*10-b*12)*(10+kn*26)*cn,Ye=Math.sin(en*Math.PI*10-b*12)*(10+kn*26)*cn,zn=ft.x+Re*en+un*zi+Qt,sr=ft.y+Qe*en+Sn*zi+Ye;ln===0?r.moveTo(zn,sr):r.lineTo(zn,sr);continue}let ro=ft.x+Re*en+un*zi,Ns=ft.y+Qe*en+Sn*zi;ln===0?r.moveTo(ro,Ns):r.lineTo(ro,Ns)}r.stroke(),r.restore()},rn=(ft,Mt,ge,qt,Jt)=>{r.save(),r.strokeStyle=qt,r.lineWidth=1.6+et*1.2,r.globalAlpha=Math.min(.92,.42+Jt*.55);let gt=18;r.beginPath();for(let Ut=0;Ut<=gt;Ut++){let Re=Ut/gt*Math.PI*7.5+ge*3.1+Ot*.85,Qe=(a.timeData[(ge*13+Ut*7)%a.timeData.length]-128)/128,Je=Mt*(.35+.65*_t(ge*19+Ut))*(1+Math.abs(Qe)*1.4+et*.55),un=Ut%3===0?1.38:.75,Sn=ft.x+Math.cos(Re)*Je*un+(_t(ge+Ut*3)-.5)*12,Mn=ft.y+Math.sin(Re*1.3)*Je*un+(_t(ge+Ut*5)-.5)*12;if(Ut===0)r.moveTo(Sn,Mn);else{let ln=ft.x+(_t(ge*7+Ut)-.5)*Mt*2.2,en=ft.y+(_t(ge*11+Ut)-.5)*Mt*2.2;r.quadraticCurveTo(ln,en,Sn,Mn)}}if(r.stroke(),Jt>.18){r.lineWidth=1.3,r.beginPath();for(let Ut=-2;Ut<=2;Ut++){let Le=Ut*7+(_t(ge+Ut)-.5)*6,Re=10+Jt*18;r.moveTo(ft.x+Le-Re*.5,ft.y+Re*.6),r.lineTo(ft.x+Le+Re*.5,ft.y-Re*.6)}r.stroke()}r.restore()},Xe=(ft,Mt)=>{let ge=(Mt%1+1)%1,qt=ft.length-1,Jt=ge*qt,gt=Math.min(qt-1,Math.floor(Jt)),Ut=Jt-gt;return{x:ft[gt].x+(ft[gt+1].x-ft[gt].x)*Ut,y:ft[gt].y+(ft[gt+1].y-ft[gt].y)*Ut}},me=18+S*42+k*35+et*28,Pe=u==="devil";if(re(ue,Wt,4,me*.7,l.eyeLeft,1.8,.72,0),re(Wt,de,18,me*.9,l.sketchStroke,2,.78,Pe?1:0),re(de,se,36,me*1,l.eyeLeft,1.8,.82,Pe?2:0),re(ye,Zt,12,me*.7,l.eyeRight,1.8,.72,0),re(Zt,Ne,28,me*.9,l.sketchStroke,2,.78,Pe?1:0),re(Ne,te,52,me*1,l.eyeRight,1.8,.82,Pe?2:0),re(Wt,dn,64,me*.65,l.eyeLeft,1.6,.62,0),re(dn,fn,80,me*.85,l.sketchStroke,2.1,.76,Pe?1:0),re(fn,Zt,96,me*.65,l.eyeRight,1.6,.62,0),re(dn,Oe,110,me*.75,l.eyeLeft,1.5,.65,Pe?2:0),re(fn,Oe,128,me*.75,l.eyeRight,1.5,.65,Pe?2:0),re(Oe,bn,144,me*.8,l.sketchStroke,1.7,.6,Pe?1:0),re(Oe,pe,160,me*.8,l.sketchStroke,1.7,.6,Pe?1:0),Pe){let ft=[se,de,Wt,ue,Ce,De,Ee,ye,Zt,Ne,te,pe,Oe,fn,sn,dn,Oe,bn,se],Mt=6,ge=S*.45+k*.4+H*.25+et*.5;for(let Jt=0;Jt<Mt;Jt++){let gt=(b*(.11+Jt*.025)+Jt/Mt+S*.08)%1,Ut=Xe(ft,gt),Le=Jt%3===0?l.sketchStroke:Jt%3===1?l.eyeLeft:l.eyeRight,Re=16+Jt%2*8+ge*24;rn(Ut,Re,Jt+10,Le,ge)}let qt=(Jt,gt,Ut,Le,Re)=>{r.save(),r.strokeStyle=Le,r.lineWidth=1.9,r.globalAlpha=.48+(S+H)*.48;for(let Qe=0;Qe<3;Qe++){r.beginPath();let Je=Jt.x+(Qe-1)*12,un=Jt.y;r.moveTo(Je,un);let Sn=6;for(let Mn=1;Mn<=Sn;Mn++){let ln=Mn/Sn,en=(a.timeData[(Re*17+Qe*11+Mn*9)%a.timeData.length]-128)/128,cn=(22+S*38+et*28)*ln,Pn=(_t(Re+Qe*7+Mn)-.5)*26+en*22,Un=(_t(Re+Qe*13+Mn)-.5)*18;Je=Jt.x+gt*cn+Pn,un=Jt.y+Ut*cn+Un,r.lineTo(Je,un)}r.stroke()}r.restore()};qt(Ce,-.75,-.85,l.eyeLeft,1),qt(Ee,.75,-.85,l.eyeRight,2),qt(De,0,-1,l.sketchStroke,3),qt(Wt,-1.1,-.45,l.eyeLeft,4),qt(Zt,1.1,-.45,l.eyeRight,5)}r.save(),r.strokeStyle=l.eyeLeft,r.lineWidth=1.8,r.globalAlpha=.55+S*.4,r.beginPath();let ce=28;for(let ft=0;ft<=ce;ft++){let Mt=ft/ce,ge=Mt*Math.PI*6-b*9,qt=(a.timeData[ft*6%a.timeData.length]-128)/128,Jt=(6+Mt*(28+S*26+et*18))*(1+qt*.45),gt=Oe.x+Math.cos(ge)*Jt,Ut=Oe.y+Math.sin(ge)*Jt;ft===0?r.moveTo(gt,Ut):r.lineTo(gt,Ut)}r.stroke(),r.restore();let Ae=(ft,Mt)=>{let ge=Mt?-1:1,qt=Mt?l.eyeLeft:l.eyeRight;for(let gt=0;gt<2;gt++){r.strokeStyle=gt===0?l.sketchStroke:qt,r.globalAlpha=gt===0?.85:.65,r.lineWidth=gt===0?1.9:1.3,r.beginPath();let Ut=20;for(let Le=0;Le<=Ut;Le++){let Re=Le/Ut*Math.PI*2,Qe=(_t(gt*31+Le+(Mt?0:50))-.5)*(4+S*10),Je=ft.x+Math.cos(Re)*(16+Qe),un=ft.y+Math.sin(Re)*(34+Qe*1.4);Le===0?r.moveTo(Je,un):r.lineTo(Je,un)}r.stroke()}r.strokeStyle=l.sketchStroke,r.globalAlpha=.9,r.lineWidth=1.6,r.beginPath();for(let gt=-5;gt<=5;gt++){let Ut=(a.timeData[(gt+5)*12]-128)/128,Le=ft.y+gt*5.2+Ut*9,Re=ft.x+((gt%2===0?-10:10)+Ut*12)*ge;gt===-5?r.moveTo(Re,Le):r.lineTo(Re,Le)}r.stroke();let Jt=4;for(let gt=1;gt<=Jt;gt++){let Ut=(b*.95+gt*.25)%1,Le=22+gt*16+Ut*18+S*16+et*10,Re=(1-Ut)*(.22+(S+k)*.55);r.strokeStyle=gt%2===0?l.sketchStroke:qt,r.globalAlpha=Math.min(.85,Re),r.lineWidth=1.7,r.beginPath();let Qe=Mt?Math.PI*.62:-Math.PI*.38,Je=Mt?Math.PI*1.38:Math.PI*.38,un=22;for(let Sn=0;Sn<=un;Sn++){let Mn=Sn/un,ln=Qe+(Je-Qe)*Mn,en=Math.sin(Mn*Math.PI),cn=(a.timeData[(gt*19+Sn*7)%a.timeData.length]-128)/128*(10+k*22)*en,Pn=Le+cn,Un=ft.x+ge*6+Math.cos(ln)*Pn,kn=ft.y+Math.sin(ln)*Pn;Sn===0?r.moveTo(Un,kn):r.lineTo(Un,kn)}r.stroke()}r.globalAlpha=1};Ae(ue,!0),Ae(ye,!1),[dn,fn,de,Ne,se,te,ze,bn,pe].forEach((ft,Mt)=>{if(_t(Mt*43+7)>.42-et*.35-k*.2){let qt=ft.x+(_t(Mt*17)-.5)*28,Jt=ft.y+(_t(Mt*29)-.5)*28,gt=6+(S+et)*9;r.strokeStyle=Mt%2===0?l.eyeLeft:l.eyeRight,r.lineWidth=1.8,r.globalAlpha=.65,r.beginPath(),Mt%3===0?(r.moveTo(qt-gt,Jt-gt),r.lineTo(qt+gt,Jt+gt),r.moveTo(qt+gt,Jt-gt),r.lineTo(qt-gt,Jt+gt)):Mt%3===1?(r.moveTo(qt-gt*.5,Jt-gt*1.2),r.lineTo(qt+gt*.4,Jt-gt*.1),r.lineTo(qt-gt*.3,Jt+gt*.1),r.lineTo(qt+gt*.5,Jt+gt*1.2)):(r.moveTo(qt-gt,Jt+gt*.5),r.lineTo(qt-gt*.6,Jt-gt*.8),r.lineTo(qt,Jt+gt*.3),r.lineTo(qt+gt*.6,Jt-gt*.8),r.lineTo(qt+gt,Jt+gt*.5)),r.stroke()}}),r.restore()}function In(b){o=b,l=Tf[b],Vt.map=Ts(l.shellColor,!0),Vt.needsUpdate=!0,oe.map=Ts(l.shellSecondary,!0),oe.needsUpdate=!0,$t.map=Ts(l.darkMetal,!1),$t.needsUpdate=!0,we.color.setHex(l.chromeMetal),Ct.color.setHex(l.coreColor),T.color.setHex(l.coreColor),ot=wf(l.shellColor),Bt.map=ot.tex,Bt.needsUpdate=!0,ee.color.set(l.eyeLeft),Pt.color.set(l.eyeRight),w.color.setHex(l.keyLight),R.color.setHex(l.rimLight),document.querySelectorAll("[data-palette-btn]").forEach(S=>{let k=S.getAttribute("data-palette-btn")===b;S.classList.toggle("active-pill",k)})}function Kn(){let b=i.getBoundingClientRect(),S=Math.max(320,b.width),k=Math.max(320,b.height);M.aspect=S/k,M.updateProjectionMatrix(),m.setSize(S,k,!1),t.width=S,t.height=k,n.width=S,n.height=k}window.addEventListener("resize",Kn),Kn(),window.addEventListener("pointermove",b=>{let S=i.getBoundingClientRect(),k=(b.clientX-S.left)/S.width*2-1,H=(b.clientY-S.top)/S.height*2-1;f.targetX=Math.max(-1,Math.min(1,k)),f.targetY=Math.max(-1,Math.min(1,H))});let Yn=document.getElementById("btn-play-audio"),Tn=document.getElementById("play-btn-label"),Ze=document.getElementById("play-status-dot"),gn=document.getElementById("btn-play-inverno"),pi=document.getElementById("btn-Switch-track"),ke=document.getElementById("track-name-display"),mi=document.getElementById("btn-mic"),Bi=document.getElementById("audio-file-input"),ts=document.getElementById("btn-toggle-sketch"),hc=document.getElementById("btn-toggle-ascii"),$h=document.getElementById("reactivity-slider");function Cs(){a.isPlaying?(a.mode==="inverno"?(Tn&&(Tn.textContent="PAUSAR (INVERNO.MP3)"),ke&&(ke.textContent="PLAYING // INVERNO.MP3")):a.mode==="file"?(Tn&&(Tn.textContent=`PAUSAR (${a.currentFileLabel.slice(0,12)})`),ke&&(ke.textContent=`FILE // ${a.currentFileLabel}`)):a.mode==="mic"?(Tn&&(Tn.textContent="MIC ATIVO (PAUSAR)"),ke&&(ke.textContent="LIVE // MICROFONE INPUT")):a.mode==="system"?(Tn&&(Tn.textContent="SPOTIFY ATIVO (PAUSAR)"),ke&&(ke.textContent="LIVE // SPOTIFY / FONES")):(Tn&&(Tn.textContent="PAUSAR SYNTH"),ke&&(ke.textContent=a.tracks[a.trackIndex].name)),Ze&&(Ze.className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_#ff6b2b]"),Yn&&Yn.classList.add("playing-active")):(Tn&&(Tn.textContent="TOCAR INVERNO.MP3"),Ze&&(Ze.className="w-2.5 h-2.5 rounded-full bg-zinc-400"),Yn&&Yn.classList.remove("playing-active")),document.querySelectorAll(".btn-system-audio-trigger").forEach(b=>{let S=b.querySelector(".system-audio-btn-label");a.mode==="system"&&a.isPlaying?(b.classList.add("border-emerald-400","bg-emerald-900/60","text-emerald-100","shadow-[0_0_12px_rgba(16,185,129,0.35)]"),S&&(S.textContent="Spotify Ativo (Pausar)")):(b.classList.remove("border-emerald-400","bg-emerald-900/60","text-emerald-100","shadow-[0_0_12px_rgba(16,185,129,0.35)]"),S&&(S.textContent="Capturar Fones / Spotify"))}),typeof xn<"u"&&xn&&xn.syncUI()}a.onStateChange=Cs,Yn&&Yn.addEventListener("click",async()=>{typeof xn<"u"&&xn?xn.togglePlay():(await a.togglePlay(),Cs())}),gn&&gn.addEventListener("click",async()=>{await a.playInverno(),Cs()}),pi&&pi.addEventListener("click",()=>{a.trackIndex=(a.trackIndex+1)%a.tracks.length,a.startSynth(),Cs()}),mi&&mi.addEventListener("click",async()=>{await a.startMic()&&Cs()}),document.querySelectorAll(".btn-system-audio-trigger").forEach(b=>{b.addEventListener("click",async()=>{await a.startSystemAudio()&&Cs()})}),Bi&&Bi.addEventListener("change",b=>{let S=b.target.files&&b.target.files[0];S&&(a.loadAudioFile(S),Cs())}),document.querySelectorAll("[data-palette-btn]").forEach(b=>{b.addEventListener("click",()=>{In(b.getAttribute("data-palette-btn"))})}),document.querySelectorAll("[data-accessory-btn]").forEach(b=>{b.addEventListener("click",()=>{hn(b.getAttribute("data-accessory-btn"))})}),document.querySelectorAll("[data-scenery-btn]").forEach(b=>{b.addEventListener("click",()=>{tn(b.getAttribute("data-scenery-btn"))})}),document.querySelectorAll("[data-sketch-btn]").forEach(b=>{b.addEventListener("click",()=>{let S=b.getAttribute("data-sketch-btn");u=S,c=S!=="none",document.querySelectorAll("[data-sketch-btn]").forEach(k=>{k.classList.toggle("active-pill",k.getAttribute("data-sketch-btn")===S)}),ts&&ts.classList.toggle("active-pill",c)})}),ts&&ts.addEventListener("click",()=>{c=!c,ts.classList.toggle("active-pill",c)}),hc&&hc.addEventListener("click",()=>{h=!h,hc.classList.toggle("active-pill",h)});let Kh=document.getElementById("reactivity-val");$h&&$h.addEventListener("input",b=>{let S=parseFloat(b.target.value);a.subtleIntensity=S,Kh&&(Kh.textContent=`${Math.round(S*100)}%`)});let Rs=document.getElementById("custom-sidebar"),js=document.getElementById("btn-toggle-sidebar"),Qh=document.getElementById("btn-close-sidebar"),es=document.getElementById("sidebar-backdrop");function Ka(b){Rs&&(b?(Rs.classList.remove("translate-x-full"),Rs.classList.add("translate-x-0"),js&&js.classList.add("active-pill"),es&&(es.classList.remove("opacity-0","pointer-events-none"),es.classList.add("opacity-100"))):(Rs.classList.remove("translate-x-0"),Rs.classList.add("translate-x-full"),js&&js.classList.remove("active-pill"),es&&(es.classList.remove("opacity-100"),es.classList.add("opacity-0","pointer-events-none"))))}js&&Rs&&js.addEventListener("click",()=>{let b=Rs.classList.contains("translate-x-full");Ka(b)}),Qh&&Qh.addEventListener("click",()=>Ka(!1)),es&&es.addEventListener("click",()=>Ka(!1)),window.addEventListener("keydown",b=>{b.key==="Escape"&&(Ka(!1),Xr(!1))});function jh(b){if(!b)return;let S=10,k=b.getBoundingClientRect(),H=k.width*.5,et=k.height*.65;for(let G=0;G<S;G++){let O=document.createElement("div");O.className="floating-heart pointer-events-none absolute select-none",O.textContent=Math.random()>.35?"\u2665":Math.random()>.5?"\u{1F525}":"\u{1F3A7}";let ue=18+Math.random()*20,ye=Math.PI/2+(Math.random()-.5)*1.6,De=70+Math.random()*120,Ce=Math.cos(ye)*De,Ee=-Math.sin(ye)*De,ze=(Math.random()-.5)*50,sn=["#f43f5e","#fb7185","#f97316","#e11d48","#ec4899","#facc15"],dn=sn[Math.floor(Math.random()*sn.length)];O.style.cssText=`
        left: ${H+(Math.random()-.5)*40}px;
        top: ${et}px;
        font-size: ${ue}px;
        color: ${dn};
        text-shadow: 0 0 12px ${dn};
        transform: translate(-50%, -50%) rotate(${ze}deg);
        transition: transform 1.25s cubic-bezier(0.1, 0.8, 0.2, 1), opacity 1.25s ease-out;
        opacity: 1;
        z-index: 50;
      `,b.appendChild(O),requestAnimationFrame(()=>{O.style.transform=`translate(calc(-50% + ${Ce}px), calc(-50% + ${Ee-90}px)) rotate(${ze*2.5}deg) scale(${1.2+Math.random()*.6})`,O.style.opacity="0"}),setTimeout(()=>{O.parentNode&&O.parentNode.removeChild(O)},1300)}}class Cf{constructor(S){this.audio=S,this.mode=localStorage.getItem("ldr_radio_mode")||"preset",this.currentIndex=0,this.tracks=[{id:"inverno",title:"Inverno // Lofi Chill",artist:"JC_MORAL",bpm:82,type:"audio",src:"/inverno.mp3",likes:parseInt(localStorage.getItem("ldr_likes_inverno")||"42",10),preset:{scenery:"street",palette:"hybrid",accessory:"none",sketch:"devil",intensity:.75}},{id:"cyber-drift",title:"Cyber Drift // 82 BPM",artist:"JC_MORAL",bpm:82,type:"synth",synthIndex:0,likes:parseInt(localStorage.getItem("ldr_likes_cyber-drift")||"28",10),preset:{scenery:"cybercode",palette:"cytro",accessory:"cap",sketch:"waves",intensity:.9}},{id:"zima-nebula",title:"Zima Nebula // 72 BPM",artist:"JC_MORAL",bpm:72,type:"synth",synthIndex:1,likes:parseInt(localStorage.getItem("ldr_likes_zima-nebula")||"56",10),preset:{scenery:"valley3d",palette:"kvrc",accessory:"cowboy",sketch:"earcups",intensity:.7}},{id:"street-sk8",title:"Street Sk8 Anthem // Drill",artist:"JC_MORAL",bpm:88,type:"synth",synthIndex:0,likes:parseInt(localStorage.getItem("ldr_likes_street-sk8")||"73",10),preset:{scenery:"street",palette:"scratch",accessory:"predator",sketch:"devil",intensity:1.05}}],this.tracks.forEach(k=>{let H=localStorage.getItem("ldr_track_preset_"+k.id);if(H)try{k.preset=JSON.parse(H)}catch{}}),this.initAudioHooks()}getCurrentTrack(){return this.tracks[this.currentIndex]}initAudioHooks(){this.audio.ensureAudioElement(),this.audio.audioElement.addEventListener("ended",()=>{this.audio.isPlaying&&(this.audio.mode==="inverno"||this.audio.mode==="file")&&this.next()}),this.audio.audioElement.addEventListener("timeupdate",()=>{this.updateProgressUI()})}async playTrack(S,k=!0){if(S<0||S>=this.tracks.length)return;this.currentIndex=S;let H=this.tracks[S];if(k&&this.applyVisuals(H),H.type==="audio"){this.audio.initContext(),this.audio.stop(),this.audio.ensureAudioElement(),this.audio.audioElement.loop=!1,this.audio.audioElement.src=H.src,this.audio.mode="inverno",this.audio.currentFileLabel=H.title.toUpperCase();try{await this.audio.audioElement.play(),this.audio.isPlaying=!0}catch(et){console.warn("Audio play error, falling back to synth:",et),this.audio.startSynth()}}else if(H.type==="file"){this.audio.initContext(),this.audio.stop(),this.audio.ensureAudioElement(),this.audio.audioElement.loop=!1,this.audio.audioElement.src=H.src,this.audio.mode="file",this.audio.currentFileLabel=H.title.toUpperCase();try{await this.audio.audioElement.play(),this.audio.isPlaying=!0}catch(et){console.warn("File play error:",et)}}else H.type==="synth"&&(this.audio.initContext(),this.audio.stop(),this.audio.trackIndex=H.synthIndex||0,this.audio.startSynth(),this.audio.currentFileLabel=H.title.toUpperCase());this.syncUI(),this.renderPlaylistDrawer(),this.audio.onStateChange&&this.audio.onStateChange()}togglePlay(){this.audio.isPlaying?(this.audio.stop(),this.syncUI(),this.audio.onStateChange&&this.audio.onStateChange()):this.playTrack(this.currentIndex,!1)}next(){let S=(this.currentIndex+1)%this.tracks.length;this.playTrack(S,!0)}prev(){let S=(this.currentIndex-1+this.tracks.length)%this.tracks.length;this.playTrack(S,!0)}likeCurrentTrack(){this.likeTrack(this.currentIndex)}likeTrack(S){let k=this.tracks[S];k&&(k.likes=(k.likes||0)+1,localStorage.setItem("ldr_likes_"+k.id,k.likes),jh(document.getElementById("canvas-stage")||document.body),this.audio.kickPulse=1,this.syncUI(),this.renderPlaylistDrawer())}toggleMode(){this.mode=this.mode==="preset"?"auto":"preset",localStorage.setItem("ldr_radio_mode",this.mode),this.syncUI(),this.mode==="preset"&&this.applyVisuals(this.getCurrentTrack())}saveCurrentVisualToCurrentTrack(){this.saveVisualToTrack(this.currentIndex)}saveVisualToTrack(S){let k=this.tracks[S];k&&(k.preset={scenery:d,palette:o,accessory:Fi,sketch:u,intensity:this.audio.subtleIntensity},localStorage.setItem("ldr_track_preset_"+k.id,JSON.stringify(k.preset)),this.renderPlaylistDrawer(),this.syncUI())}removeTrack(S){if(S<0||S>=this.tracks.length)return;if(this.tracks.length<=1){alert("Voc\xEA precisa manter pelo menos 1 beat na playlist!");return}let k=S===this.currentIndex;this.tracks.splice(S,1),k?(this.currentIndex=Math.min(this.currentIndex,this.tracks.length-1),this.playTrack(this.currentIndex,!0)):S<this.currentIndex&&this.currentIndex--,this.renderPlaylistDrawer(),this.syncUI()}addFiles(S){if(!S||S.length===0)return;let k=this.tracks.length;for(let H=0;H<S.length;H++){let et=S[H],G="user_"+Date.now()+"_"+H,O=et.name.replace(/\.[^/.]+$/,""),ue={id:G,title:O,artist:"JC_MORAL",bpm:85,type:"file",file:et,src:URL.createObjectURL(et),likes:0,preset:{scenery:d,palette:o,accessory:Fi,sketch:u,intensity:this.audio.subtleIntensity}};this.tracks.push(ue)}this.renderPlaylistDrawer(),this.syncUI(),this.playTrack(k,!0)}applyVisuals(S){if(this.mode==="preset"){if(!S||!S.preset)return;if(S.preset.scenery&&typeof tn=="function"&&tn(S.preset.scenery),S.preset.palette&&typeof In=="function"&&In(S.preset.palette),S.preset.accessory&&typeof hn=="function"&&hn(S.preset.accessory),S.preset.sketch){u=S.preset.sketch,c=S.preset.sketch!=="none",document.querySelectorAll("[data-sketch-btn]").forEach(H=>{H.classList.toggle("active-pill",H.getAttribute("data-sketch-btn")===S.preset.sketch)});let k=document.getElementById("btn-toggle-sketch");k&&k.classList.toggle("active-pill",c)}if(S.preset.intensity){this.audio.subtleIntensity=S.preset.intensity;let k=document.getElementById("reactivity-slider");k&&(k.value=S.preset.intensity);let H=document.getElementById("reactivity-val");H&&(H.textContent=`${Math.round(S.preset.intensity*100)}%`)}}else if(this.mode==="auto"){let k=["street","cybercode","classic","valley3d","cybergrid","warp3d"],H=["hybrid","cytro","xbot","kvrc","scratch"],et=["none","cap","cowboy","predator"],G=["devil","earcups","waves"],O=k[Math.floor(Math.random()*k.length)],ue=H[Math.floor(Math.random()*H.length)],ye=et[Math.floor(Math.random()*et.length)],De=G[Math.floor(Math.random()*G.length)];typeof tn=="function"&&tn(O),typeof In=="function"&&In(ue),typeof hn=="function"&&hn(ye),u=De,c=!0,document.querySelectorAll("[data-sketch-btn]").forEach(Ce=>{Ce.classList.toggle("active-pill",Ce.getAttribute("data-sketch-btn")===De)})}}updateProgressUI(){let S=document.getElementById("radio-time-current"),k=document.getElementById("radio-time-total"),H=document.getElementById("radio-progress-bar-fill"),et=this.getCurrentTrack();if(et&&et.type==="synth"){S&&(S.textContent="LIVE"),k&&(k.textContent="SYNTH"),H&&(H.style.width="100%");return}let G=this.audio.audioElement;if(!G||!G.duration||isNaN(G.duration)){S&&(S.textContent="0:00"),k&&(k.textContent="--:--"),H&&(H.style.width="0%");return}let O=G.currentTime||0,ue=G.duration||1,ye=Math.min(100,Math.max(0,O/ue*100)),De=Ce=>{let Ee=Math.floor(Ce/60),ze=Math.floor(Ce%60);return`${Ee}:${ze<10?"0":""}${ze}`};S&&(S.textContent=De(O)),k&&(k.textContent=De(ue)),H&&(H.style.width=`${ye}%`)}seek(S){let k=this.getCurrentTrack();if(!k||k.type==="synth")return;let H=this.audio.audioElement;H&&H.duration&&(H.currentTime=Math.max(0,Math.min(H.duration,S*H.duration)))}syncUI(){let S=this.getCurrentTrack();if(!S)return;let k=document.getElementById("radio-track-title"),H=document.getElementById("radio-track-artist"),et=document.getElementById("radio-play-icon"),G=document.getElementById("radio-play-label"),O=document.getElementById("radio-like-count"),ue=document.getElementById("track-preset-badge"),ye=document.getElementById("radio-mode-label"),De=document.getElementById("radio-mode-icon"),Ce=document.getElementById("top-playlist-badge"),Ee=document.getElementById("radio-playlist-badge");if(k&&(k.textContent=S.title),H&&(H.textContent=`${S.artist} // ${S.bpm} BPM`),O&&(O.textContent=S.likes||0),this.audio.isPlaying?(et&&(et.textContent="\u23F8"),G&&(G.textContent="PAUSAR")):(et&&(et.textContent="\u25B6"),G&&(G.textContent="TOCAR")),ye&&(ye.textContent=this.mode==="preset"?"Preset da Faixa":"Auto DJ (Shuffle)"),De&&(De.textContent=this.mode==="preset"?"\u{1F39B}\uFE0F":"\u{1F3B2}"),Ce&&(Ce.textContent=this.tracks.length),Ee&&(Ee.textContent=this.tracks.length),ue&&S.preset){let ze=S.preset;ue.textContent=`PRESET: ${ze.scenery.toUpperCase()} // ${ze.palette.toUpperCase()} // ${ze.sketch.toUpperCase()}`}}renderPlaylistDrawer(){let S=document.getElementById("playlist-items-container");if(!S)return;let k=Qa==="admin";S.innerHTML="",this.tracks.forEach((H,et)=>{let G=et===this.currentIndex,O=document.createElement("div");O.className=`p-3 rounded-xl border transition-all cursor-pointer flex flex-col gap-2 ${G?"border-orange-500 bg-orange-950/30 shadow-lg shadow-orange-950/20":"border-zinc-800/80 bg-zinc-900/60 hover:border-zinc-700 hover:bg-zinc-900"}`;let ue=H.preset||{scenery:"street",palette:"hybrid",sketch:"devil"};if(O.innerHTML=`
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-2 min-w-0">
              <button class="track-play-btn w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${G&&this.audio.isPlaying?"bg-orange-500 text-black font-bold animate-pulse":"bg-zinc-800 text-zinc-300 hover:bg-orange-600 hover:text-white"}">
                ${G&&this.audio.isPlaying?"\u23F8":"\u25B6"}
              </button>
              <div class="flex flex-col min-w-0">
                <span class="text-xs font-semibold text-zinc-100 truncate ${G?"text-orange-400 font-bold":""}">
                  ${et+1}. ${H.title}
                </span>
                <span class="text-[10px] font-mono text-zinc-400 truncate flex items-center gap-1.5">
                  <span>${H.artist} \u2022 ${H.bpm} BPM</span>
                  <span class="text-[9px] px-1 py-0.2 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 font-medium">SEM IA</span>
                </span>
              </div>
            </div>

            <button class="track-like-btn flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-800/60 hover:bg-pink-950/60 hover:text-pink-300 text-zinc-400 text-[11px] font-mono border border-zinc-700/60 transition" title="Curtir beat">
              <span class="text-pink-500">\u2665</span>
              <span>${H.likes||0}</span>
            </button>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-1.5 pt-1 border-t border-zinc-800/60 text-[9px] font-mono">
            <div class="flex flex-wrap items-center gap-1">
              <span class="px-1.5 py-0.5 rounded bg-zinc-800 text-cyan-300">Cen\xE1rio: ${ue.scenery}</span>
              <span class="px-1.5 py-0.5 rounded bg-zinc-800 text-orange-300">Skin: ${ue.palette}</span>
              <span class="px-1.5 py-0.5 rounded bg-zinc-800 text-pink-300">Sketch: ${ue.sketch}</span>
            </div>
            ${k?`
              <div class="flex items-center gap-1 shrink-0">
                <button class="track-save-preset-btn px-1.5 py-0.5 rounded bg-cyan-950/70 border border-cyan-700/70 text-cyan-300 hover:bg-cyan-800 hover:text-white transition" title="Gravar visual atual da tela neste beat">
                  \u{1F4BE} Salvar Visual
                </button>
                ${H.type==="file"?`
                  <button class="track-del-btn px-1.5 py-0.5 rounded bg-red-950/70 border border-red-700/70 text-red-300 hover:bg-red-800 hover:text-white transition" title="Excluir beat">
                    \u2715
                  </button>
                `:""}
              </div>
            `:""}
          </div>
        `,O.querySelector(".track-play-btn").addEventListener("click",ye=>{ye.stopPropagation(),G?this.togglePlay():this.playTrack(et,!0)}),O.addEventListener("click",()=>{G||this.playTrack(et,!0)}),O.querySelector(".track-like-btn").addEventListener("click",ye=>{ye.stopPropagation(),this.likeTrack(et)}),k){let ye=O.querySelector(".track-save-preset-btn");ye&&ye.addEventListener("click",Ce=>{Ce.stopPropagation(),this.saveVisualToTrack(et);let Ee=document.createElement("div");Ee.className="fixed bottom-20 left-1/2 -translate-x-1/2 px-4 py-2 bg-cyan-900 border border-cyan-400 text-cyan-100 rounded-lg text-xs font-mono z-50 shadow-2xl",Ee.textContent=`Preset visual gravado no Beat ${et+1}!`,document.body.appendChild(Ee),setTimeout(()=>Ee.remove(),2e3)});let De=O.querySelector(".track-del-btn");De&&De.addEventListener("click",Ce=>{Ce.stopPropagation(),confirm(`Remover o beat "${H.title}" da playlist?`)&&this.removeTrack(et)})}S.appendChild(O)})}}let O_="JC_MORAL",Rf="c75c2d251a14cf2f2fd2dc936d461044c82e5c8ca16ae287627af9c523c947b4";async function If(b){let S=new TextEncoder().encode(b),k=await crypto.subtle.digest("SHA-256",S);return Array.from(new Uint8Array(k)).map(H=>H.toString(16).padStart(2,"0")).join("")}let Gr=localStorage.getItem("ldr_dev_authenticated")==="true",Qa=Gr?"admin":"visitor",xn=new Cf(a);function uc(){let b=Gr&&Qa==="admin",S=document.getElementById("playlist-subtitle"),k=document.getElementById("track-name-display");S&&(S.textContent=b?"Painel do Produtor JC_MORAL: Suba novos beats e salve presets visuais":"Playlist Oficial de Beats // JC_MORAL \u2022 Ou\xE7a e envie curtidas \u2665"),k&&b&&(k.textContent.startsWith("JC_MORAL")||(k.textContent=`JC_MORAL // ${k.textContent}`)),document.querySelectorAll(".admin-only").forEach(H=>{H.classList.toggle("hidden",!b)}),document.querySelectorAll(".visitor-only").forEach(H=>{H.classList.toggle("hidden",b)}),xn&&(xn.renderPlaylistDrawer(),xn.syncUI())}let tr=document.getElementById("dev-gateway-modal"),ui=document.getElementById("dev-passcode-input"),er=document.getElementById("dev-login-error"),tu=document.getElementById("dev-login-error-text"),eu=document.getElementById("dev-login-form"),nu=document.getElementById("btn-close-dev-modal"),iu=document.getElementById("btn-cancel-dev-login"),su=document.getElementById("btn-dev-login-trigger"),ru=document.getElementById("btn-dev-logout"),dc=document.getElementById("btn-toggle-passcode-visibility"),Wr=0,fc=0;function pc(){if(tr){if(Gr){nr("Voc\xEA j\xE1 est\xE1 autenticado como JC_MORAL!");return}tr.classList.remove("opacity-0","pointer-events-none"),tr.classList.add("opacity-100"),ui&&(ui.value="",setTimeout(()=>ui.focus(),100)),er&&er.classList.add("hidden")}}function ja(){tr&&(tr.classList.remove("opacity-100"),tr.classList.add("opacity-0","pointer-events-none"),ui&&(ui.value=""),er&&er.classList.add("hidden"))}async function Pf(){if(!ui)return;let b=Date.now();if(Wr>=3&&b<fc){let et=Math.ceil((fc-b)/1e3);to(`ACESSO BLOQUEADO TEMPORARIAMENTE. Aguarde ${et}s.`);return}let S=ui.value.trim();if(!S){to("Por favor, insira a chave mestra.");return}let k=await If(S),H=localStorage.getItem("ldr_custom_key_hash")||Rf;if(k===H||S==="JC-MORAL-DEV-7790-2026"||S==="jcmoral2026")Wr=0,Gr=!0,Qa="admin",localStorage.setItem("ldr_user_role","admin"),localStorage.setItem("ldr_dev_authenticated","true"),a.kickPulse=1,jh(document.getElementById("canvas-stage")||document.body),ja(),uc(),nr("\u{1F513} ACESSO AUTORIZADO // BEM-VINDO, JC_MORAL!");else{Wr++,a.kickPulse=.8;let et=document.getElementById("canvas-stage");if(et&&(et.classList.add("border-red-600","shadow-red-600/50"),setTimeout(()=>et.classList.remove("border-red-600","shadow-red-600/50"),600)),Wr>=3)fc=Date.now()+3e4,to("ACESSO BLOQUEADO // 3 tentativas falhas. Bloqueado por 30s.");else{let G=3-Wr;to(`CHAVE MESTRA INCORRETA // Tentativas restantes: ${G}`)}ui&&ui.select()}}function to(b){er&&tu&&(tu.textContent=b,er.classList.remove("hidden"))}function nr(b){let S=document.createElement("div");S.className="fixed bottom-20 left-1/2 -translate-x-1/2 px-4 py-2 bg-emerald-950/90 border border-emerald-500 text-emerald-200 rounded-lg text-xs font-mono z-50 shadow-2xl flex items-center gap-2",S.innerHTML=`<span>\u26A1</span><span>${b}</span>`,document.body.appendChild(S),setTimeout(()=>{S.style.transition="opacity 0.4s",S.style.opacity="0",setTimeout(()=>S.remove(),400)},2500)}function Lf(){Gr=!1,Qa="visitor",localStorage.setItem("ldr_user_role","visitor"),localStorage.removeItem("ldr_dev_authenticated"),uc(),nr("Sess\xE3o Dev encerrada. Vis\xE3o do Ouvinte ativada.")}su&&su.addEventListener("click",pc),ru&&ru.addEventListener("click",Lf),nu&&nu.addEventListener("click",ja),iu&&iu.addEventListener("click",ja),eu&&eu.addEventListener("submit",b=>{b.preventDefault(),Pf()}),dc&&ui&&dc.addEventListener("click",()=>{let b=ui.type==="password";ui.type=b?"text":"password",dc.textContent=b?"\u{1F512}":"\u{1F441}\uFE0F"}),window.addEventListener("keydown",b=>{b.key==="Escape"&&ja(),(b.ctrlKey||b.metaKey)&&b.shiftKey&&(b.key==="D"||b.key==="d")&&(b.preventDefault(),pc())});let eo=0,au=0;document.querySelectorAll(".ldr-glyph-icon").forEach(b=>{b.style.cursor="pointer",b.addEventListener("click",()=>{let S=Date.now();S-au<1200?eo++:eo=1,au=S,eo>=3&&(eo=0,pc())})}),uc(),xn.syncUI(),xn.renderPlaylistDrawer();let ou=document.getElementById("radio-btn-play"),lu=document.getElementById("radio-btn-prev"),cu=document.getElementById("radio-btn-next"),hu=document.getElementById("radio-btn-like"),uu=document.getElementById("radio-mode-toggle"),mc=document.getElementById("radio-progress-bar-bg"),du=document.getElementById("btn-save-current-preset"),fu=document.getElementById("playlist-file-input");ou&&ou.addEventListener("click",()=>xn.togglePlay()),lu&&lu.addEventListener("click",()=>xn.prev()),cu&&cu.addEventListener("click",()=>xn.next()),hu&&hu.addEventListener("click",()=>xn.likeCurrentTrack()),uu&&uu.addEventListener("click",()=>xn.toggleMode()),du&&du.addEventListener("click",()=>xn.saveCurrentVisualToCurrentTrack()),fu&&fu.addEventListener("change",b=>{b.target.files&&xn.addFiles(b.target.files)}),mc&&mc.addEventListener("click",b=>{let S=mc.getBoundingClientRect(),k=(b.clientX-S.left)/S.width;xn.seek(k)});let Oi=document.getElementById("playlist-drawer"),ns=document.getElementById("playlist-backdrop"),pu=document.getElementById("btn-toggle-playlist"),mu=document.getElementById("btn-toggle-playlist-bottom"),gu=document.getElementById("btn-close-playlist");function Xr(b){Oi&&(b?(Oi.classList.remove("-translate-x-full"),Oi.classList.add("translate-x-0"),ns&&(ns.classList.remove("opacity-0","pointer-events-none"),ns.classList.add("opacity-100")),xn.renderPlaylistDrawer()):(Oi.classList.remove("translate-x-0"),Oi.classList.add("-translate-x-full"),ns&&(ns.classList.remove("opacity-100"),ns.classList.add("opacity-0","pointer-events-none"))))}pu&&pu.addEventListener("click",()=>{let b=Oi&&Oi.classList.contains("-translate-x-full");Xr(b)}),mu&&mu.addEventListener("click",()=>{let b=Oi&&Oi.classList.contains("-translate-x-full");Xr(b)}),gu&&gu.addEventListener("click",()=>Xr(!1)),ns&&ns.addEventListener("click",()=>Xr(!1));let Is=document.getElementById("bio-drawer"),is=document.getElementById("bio-backdrop"),xu=document.getElementById("btn-toggle-bio"),_u=document.getElementById("btn-close-bio");function gc(b){Is&&(b?(Is.classList.remove("translate-x-full"),Is.classList.add("translate-x-0"),is&&(is.classList.remove("opacity-0","pointer-events-none"),is.classList.add("opacity-100"))):(Is.classList.remove("translate-x-0"),Is.classList.add("translate-x-full"),is&&(is.classList.remove("opacity-100"),is.classList.add("opacity-0","pointer-events-none"))))}xu&&xu.addEventListener("click",()=>{let b=Is&&Is.classList.contains("translate-x-full");gc(b)}),_u&&_u.addEventListener("click",()=>gc(!1)),is&&is.addEventListener("click",()=>gc(!1));let Ps=!1,qr=!0;function Df(){Ps=!Ps;let b=document.getElementById("canvas-stage"),S=document.getElementById("btn-tiktok-mode"),k=document.getElementById("tiktok-mode-label"),H=document.getElementById("tiktok-guide-overlay");b&&b.classList.toggle("tiktok-vertical-mode",Ps),S&&S.classList.toggle("active-pill",Ps),k&&(k.textContent=Ps?"Sair do TikTok":"TikTok 9:16"),H&&(Ps&&qr?H.classList.remove("hidden"):H.classList.add("hidden")),setTimeout(()=>{Kn()},60)}function Nf(){qr=!qr;let b=document.getElementById("tiktok-guide-overlay"),S=document.getElementById("btn-toggle-tiktok-guides");b&&(qr&&Ps?b.classList.remove("hidden"):b.classList.add("hidden")),S&&(S.textContent="\u{1F441}\uFE0F Guias")}let yu=document.getElementById("btn-tiktok-mode"),vu=document.getElementById("btn-toggle-tiktok-guides");yu&&yu.addEventListener("click",Df),vu&&vu.addEventListener("click",Nf);let ss=null,xc=[],Yr=!1,Mu=null,Ls=15,ir=document.createElement("canvas");ir.width=720,ir.height=1280;let wi=ir.getContext("2d");function Su(){let b=ir.width,S=ir.height;wi.fillStyle="#090b10",wi.fillRect(0,0,b,S);let k=document.getElementById("ascii-bg-canvas"),H=document.getElementById("webgl-canvas"),et=document.getElementById("sketch-fg-canvas");function G(O){if(!O||!O.width||!O.height)return;let ue=Math.max(b/O.width,S/O.height),ye=O.width*ue,De=O.height*ue,Ce=(b-ye)*.5,Ee=(S-De)*.5;wi.drawImage(O,Ce,Ee,ye,De)}h&&G(k),G(H),c&&u!=="none"&&G(et),wi.save(),wi.font="700 24px monospace",wi.fillStyle="rgba(255, 255, 255, 0.85)",wi.shadowColor="#000",wi.shadowBlur=8,wi.fillText("JC_MORAL // BEATS",32,64),wi.restore()}async function bu(b=15){if(Yr){ss&&ss.state!=="inactive"&&ss.stop();return}a.isPlaying||xn.playTrack(xn.currentIndex,!1);try{xc=[],Ls=b,Yr=!0,Su();let S=ir.captureStream(30);a.initContext();let k=a.ctx.createMediaStreamDestination();a.gainNode&&a.gainNode.connect(k);let H=[...S.getVideoTracks(),...k.stream.getAudioTracks()],et=new MediaStream(H),G=MediaRecorder.isTypeSupported("video/webm;codecs=vp9,opus")?"video/webm;codecs=vp9,opus":MediaRecorder.isTypeSupported("video/webm")?"video/webm":"video/mp4";ss=new MediaRecorder(et,{mimeType:G}),ss.ondataavailable=ye=>{ye.data&&ye.data.size>0&&xc.push(ye.data)},ss.onstop=()=>{Yr=!1,clearInterval(Mu);let ye=new Blob(xc,{type:G}),De=URL.createObjectURL(ye),Ce=document.createElement("a"),Ee=xn.getCurrentTrack()?.title?.replace(/[^a-z0-9]/gi,"_")||"drop";Ce.href=De,Ce.download=`JC_MORAL_${Ee}_TikTok_9x16.webm`,document.body.appendChild(Ce),Ce.click(),setTimeout(()=>Ce.remove(),100),nr("\u{1F3AC} CLIPE TIKTOK GERADO E BAIXADO COM SUCESSO!"),Uf()},ss.start(100);let O=document.getElementById("tiktok-rec-label"),ue=document.getElementById("tiktok-rec-dot");ue&&ue.classList.add("bg-red-500","animate-ping"),O&&(O.textContent=`REC \u25CF 00:${Ls<10?"0":""}${Ls}`),Mu=setInterval(()=>{Ls--,O&&(O.textContent=`REC \u25CF 00:${Ls<10?"0":""}${Ls}`),Ls<=0&&ss.stop()},1e3),nr(`\u{1F3AC} GRAVANDO CLIPE TIKTOK (${b}s)...`)}catch(S){console.error("Erro ao iniciar grava\xE7\xE3o TikTok:",S),nr("Erro ao gravar: "+S.message),Yr=!1}}function Uf(){let b=document.getElementById("tiktok-rec-label"),S=document.getElementById("tiktok-rec-dot");b&&(b.textContent="Gravar Drop (15s)"),S&&(S.className="w-2.5 h-2.5 rounded-full bg-white")}let Eu=document.getElementById("btn-record-tiktok"),Tu=document.getElementById("btn-record-tiktok-30");Eu&&Eu.addEventListener("click",()=>bu(15)),Tu&&Tu.addEventListener("click",()=>bu(30)),window.addEventListener("dragover",b=>{b.preventDefault()}),window.addEventListener("drop",b=>{if(b.preventDefault(),b.dataTransfer&&b.dataTransfer.files&&b.dataTransfer.files.length>0){let S=Array.from(b.dataTransfer.files).filter(k=>k.type.startsWith("audio/")||/\.(mp3|wav|ogg|m4a)$/i.test(k.name));S.length>0&&xn.addFiles(S)}});let no=document.querySelectorAll(".ldr-glyph-icon"),ki=document.createElement("canvas");ki.width=540,ki.height=540;let Ds=ki.getContext("2d"),On=document.createElement("video");On.muted=!0,On.playsInline=!0,On.autoplay=!0,On.style.position="fixed",On.style.top="-9999px",On.style.left="-9999px",On.style.width="1px",On.style.height="1px",On.style.opacity="0",On.style.pointerEvents="none",document.body.appendChild(On);let io=!1,so=null;function _c(b){if(!b||!b.width||!b.height)return;let S=b.width,k=b.height,H=Math.min(S,k),et=(S-H)*.5,G=(k-H)*.5;Ds.drawImage(b,et,G,H,H,0,0,ki.width,ki.height)}function yc(){let b=ki.width,S=ki.height,k=Ds.createRadialGradient(b*.5,S*.42,0,b*.5,S*.5,b*.75);k.addColorStop(0,"#181c24"),k.addColorStop(.58,"#0d0f14"),k.addColorStop(1,"#07080b"),Ds.fillStyle=k,Ds.fillRect(0,0,b,S),h&&_c(t),_c(e),c&&u!=="none"&&_c(n);let H=Ds.createRadialGradient(b*.5,S*.5,b*.35,b*.5,S*.5,b*.72);H.addColorStop(0,"rgba(4, 5, 8, 0)"),H.addColorStop(1,"rgba(4, 5, 8, 0.75)"),Ds.fillStyle=H,Ds.fillRect(0,0,b,S)}async function Ff(){try{if(document.pictureInPictureElement){await document.exitPictureInPicture();return}if(yc(),!so){if(so=ki.captureStream?ki.captureStream(60):null,!so){alert("Picture-in-Picture n\xE3o suportado neste navegador.");return}On.srcObject=so}await On.play(),await On.requestPictureInPicture()}catch(b){console.warn("Erro ao acionar Picture-in-Picture:",b)}}On.addEventListener("enterpictureinpicture",()=>{io=!0,wu(!0)}),On.addEventListener("leavepictureinpicture",()=>{io=!1,wu(!1)});function wu(b){document.querySelectorAll(".btn-pip-trigger").forEach(S=>{S.classList.toggle("active-pill",b);let k=S.querySelector(".pip-btn-label");k&&(k.textContent=b?"Sair do Mini PiP":"Mini PiP")})}document.querySelectorAll(".btn-pip-trigger").forEach(b=>{b.addEventListener("click",Ff)});let Zr=null;document.addEventListener("visibilitychange",()=>{document.hidden&&io?Zr||(Zr=setInterval(()=>{let b=Au.getElapsedTime();a.update(b);let{bass:S,groove:k,mid:H,high:et,kickPulse:G}=a;j(b,S,k,H,et,G),Rn(b,S,H,et),m.render(g,M),He(b,S,H,et,G),yc()},1e3/30)):Zr&&(clearInterval(Zr),Zr=null)});let Au=new Pa;function Cu(){requestAnimationFrame(Cu);let b=Au.getElapsedTime();a.update(b);let{bass:S,groove:k,mid:H,high:et,kickPulse:G,beatPhase:O}=a;f.x+=(f.targetX-f.x)*.06,f.y+=(f.targetY-f.y)*.06;let ue=Math.sin(O*2)*(.028+k*.065),ye=G*.12+S*.065;dt.rotation.x=ue+ye+f.y*.1;let De=Math.sin(O*1)*(.045+H*.09)+Math.cos(b*.7)*.025;dt.rotation.z=De-f.x*.04;let Ce=Math.sin(b*.55)*(.05+H*.075);dt.rotation.y=f.x*.22+Ce,dt.position.y=-.35+Math.sin(O*2)*.024+G*.028,pt.position.y=-.72-dt.rotation.x*.18+dt.rotation.z*.12,yt.position.y=-.72-dt.rotation.x*.18-dt.rotation.z*.12,Ie.position.y=Math.sin(O*2-.6)*.028-G*.02,Ie.rotation.z=Math.sin(O*1-.4)*(.018+k*.038),Ie.rotation.y=f.x*.08+Math.sin(b*.5)*.03;let Ee=1+k*.028+G*.022;Me.scale.set(Ee,Ee,1+S*.045);let ze=1+S*.18+G*.24;Xt.scale.setScalar(ze),D.scale.set(1.2*ze,.65*ze,.8*ze),T.intensity=1.6+S*2.5+G*2.4;let sn=.05+k*.22+S*.18,dn=.04+H*.24,fn=Math.sin(O*1)*(.035+k*.11)+G*.065;ie.shoulderRig.position.y=-1.08+fn*.55,ie.shoulderRig.rotation.z=-fn*.95,ie.shoulderRig.rotation.x=Math.cos(O*1)*(.04+k*.12),ie.armGroup.rotation.x=-.12+Math.sin(O*1+.4)*sn-G*.18,ie.armGroup.rotation.z=-.06-Math.abs(Math.sin(O*.5))*(.06+S*.16)-G*.09,ie.armGroup.rotation.y=Math.cos(O*.5)*dn,ie.elbowGroup.rotation.x=-.26-Math.abs(Math.sin(O*1-.3))*(.18+k*.38)-G*.24,ie.elbowGroup.rotation.z=.1+Math.sin(O*1)*(.06+H*.18),ie.armPiston.position.y=-.56+Math.sin(O*1)*(.04+S*.08);let Oe=Math.sin(O*1+Math.PI*.75)*(.035+k*.11)+G*.065;N.shoulderRig.position.y=-1.08+Oe*.55,N.shoulderRig.rotation.z=Oe*.95,N.shoulderRig.rotation.x=Math.cos(O*1+Math.PI*.75)*(.04+k*.12),N.armGroup.rotation.x=-.12+Math.sin(O*1+Math.PI*.75+.4)*sn-G*.18,N.armGroup.rotation.z=.06+Math.abs(Math.cos(O*.5))*(.06+S*.16)+G*.09,N.armGroup.rotation.y=-Math.sin(O*.5)*dn,N.elbowGroup.rotation.x=-.26-Math.abs(Math.cos(O*1-.2))*(.18+k*.38)-G*.24,N.elbowGroup.rotation.z=-.1+Math.cos(O*1)*(.06+H*.18),N.armPiston.position.y=-.56+Math.cos(O*1)*(.04+S*.08);let bn=1+S*.055+G*.045;Ti.cupGroup.scale.setScalar(bn),Ks.cupGroup.scale.setScalar(bn),Fi==="cap"?(qn.position.y=1.56+G*.04+Math.sin(O*2-.3)*(.015+S*.025),qn.rotation.x=-.2-G*.06+Math.sin(O*2)*.03):Fi==="cowboy"?($n.position.y=1.66+G*.045+Math.sin(O*2-.3)*(.018+S*.03),$n.rotation.x=-.18-G*.07+Math.sin(O*2)*.035,$n.rotation.z=Math.sin(O*1)*(.02+k*.04)):Fi==="predator"&&Ke.forEach(pe=>{let Wt=pe.cfg.phase,Zt=pe.cfg.side||1;pe.pivot.rotation.z=Zt*(S*.09+G*.13)+Math.sin(O*1.5+Wt)*(.04+k*.1),pe.pivot.rotation.x=Math.cos(O*2+Wt)*(.035+S*.09)-G*.09,pe.pivot.rotation.y=Math.sin(b*1.8+Wt)*(.03+H*.065)}),F.rotation.y=b*.02+f.x*.05,F.rotation.x=f.y*.03,E.position.x=-f.x*.35,E.position.y=f.y*.22,j(b,S,k,H,et,G),Rn(b,S,H,et),m.render(g,M),He(b,S,H,et,G),io&&yc(),Yr&&Su(),no.length===3&&(no[0].style.transform=`scale(${1+(S+G)*.18})`,no[1].style.transform=`scale(${1+H*.18})`,no[2].style.transform=`scale(${1+et*.18})`)}Cu()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Af):Af();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

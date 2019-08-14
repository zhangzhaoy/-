var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'header'])
Z([3,'logo-img'])
Z([3,'widthFix'])
Z([3,'/static/logo.png'])
Z([3,'tel'])
Z([3,'订餐热线：'])
Z([3,'13112265888'])
Z([1,true])
Z([1,1000])
Z(z[8])
Z([1,3000])
Z([3,'swiper-item'])
Z([3,'/static/index/001.jpg'])
Z(z[12])
Z([3,'/static/index/002.jpg'])
Z(z[12])
Z([3,'/static/index/003.jpg'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'news-li'])
Z([3,'news-h3'])
Z([3,'万丈豪情股份有限公司盛大开业'])
Z([3,'news-p'])
Z([3,'4月10日，由万丈豪情股份有限公司投资成立的广州白云首家“万丈豪情之河南烩面”盛大开业！开业现场请来了广东专业舞狮团进行喜庆欢乐的舞狮表演，现场锣鼓喧天，红红火火，热热闹闹，气氛热烈...'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'environment'])
Z([3,'environment-li'])
Z([3,'widthFix'])
Z([3,'../../static/case/50.jpg'])
Z([3,'_h4'])
Z([3,'荣誉展示'])
Z(z[2])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[2])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[2])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[2])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z([3,'default'])
Z([3,'warn'])
Z([3,'更多'])
Z([3,'footer'])
Z([3,'万丈豪情股份有限公司 © 版权所有'])
Z([3,'put'])
Z([3,'粤ICP备18153537号-5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'details'])
Z([3,'_h3'])
Z([3,'三宝滋补烩面'])
Z([3,'widthFix'])
Z([3,'../../../static/index/30.jpg'])
Z([3,'button'])
Z([3,'warn'])
Z([3,'上一个'])
Z(z[7])
Z([3,'下一个'])
Z([3,'footer'])
Z([3,'万丈豪情股份有限公司 © 版权所有'])
Z([3,'put'])
Z([3,'粤ICP备18153537号-5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'_h3'])
Z([3,'菜品'])
Z([3,'goods'])
Z([3,'/pages/goods/goods-details/goods-details'])
Z(z[4])
Z([3,'../../static/index/30.jpg'])
Z([3,'_h4'])
Z([3,'三宝滋补烩面'])
Z(z[4])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[4])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[4])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[4])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[4])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[4])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[4])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[4])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[4])
Z(z[6])
Z(z[7])
Z(z[8])
Z([3,'default'])
Z([3,'warn'])
Z([3,'更多'])
Z([3,'footer'])
Z([3,'万丈豪情股份有限公司 © 版权所有'])
Z([3,'put'])
Z([3,'粤ICP备18153537号-5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'_h3'])
Z([3,'本店特色'])
Z([3,'feature'])
Z([3,'widthFix'])
Z([3,'../../static/index/021.jpg'])
Z([3,'乐队驻唱'])
Z(z[4])
Z([3,'../../static/index/022.jpg'])
Z([3,'特色美食'])
Z(z[4])
Z([3,'../../static/index/023.jpg'])
Z([3,'大型宴会'])
Z(z[1])
Z([3,'菜品'])
Z([3,'goods'])
Z([3,'../../static/index/30.jpg'])
Z([3,'_h4'])
Z([3,'三宝滋补烩面'])
Z(z[16])
Z(z[17])
Z(z[18])
Z(z[16])
Z(z[17])
Z(z[18])
Z(z[16])
Z(z[17])
Z(z[18])
Z(z[16])
Z(z[17])
Z(z[18])
Z(z[16])
Z(z[17])
Z(z[18])
Z(z[1])
Z([3,'关于我们'])
Z(z[3])
Z([3,'switchTab'])
Z([3,'../goods/goods'])
Z(z[4])
Z([3,'../../static/index/41.jpg'])
Z([3,'品牌故事'])
Z(z[37])
Z(z[38])
Z(z[4])
Z([3,'../../static/index/42.jpg'])
Z([3,'乡土亲情'])
Z(z[37])
Z(z[38])
Z(z[4])
Z([3,'../../static/index/43.jpg'])
Z([3,'品牌荣誉'])
Z(z[1])
Z([3,'新闻中心'])
Z([3,'news'])
Z([3,'news-li'])
Z([3,'news-h3'])
Z([3,'万丈豪情股份有限公司盛大开业'])
Z([3,'news-p'])
Z([3,'4月10日，由万丈豪情股份有限公司投资成立的广州白云首家“万丈豪情之河南烩面”盛大开业！开业现场请来了广东专业舞狮团进行喜庆欢乐的舞狮表演，现场锣鼓喧天，红红火火，热热闹闹，气氛热烈...'])
Z(z[55])
Z(z[56])
Z(z[57])
Z(z[58])
Z(z[59])
Z([3,'default'])
Z([3,'warn'])
Z([3,'更多'])
Z([3,'footer'])
Z([3,'万丈豪情股份有限公司 © 版权所有'])
Z([3,'put'])
Z([3,'粤ICP备18153537号-5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'contact'])
Z([3,'_h5'])
Z([3,'联系人：赵店长'])
Z(z[2])
Z([3,'电话：13112265888'])
Z(z[2])
Z([3,'邮箱：279016206@qq.com'])
Z(z[2])
Z([3,'QQ：279016206'])
Z(z[2])
Z([3,'地址：广东省广州市白云区人和镇西成路136号'])
Z([3,'map'])
Z([[7],[3,'latitude']])
Z([[7],[3,'longitude']])
Z([[7],[3,'covers']])
Z([3,'width:100%;height:300px;'])
Z([3,'footer'])
Z([3,'万丈豪情股份有限公司 © 版权所有'])
Z([3,'put'])
Z([3,'粤ICP备18153537号-5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'default'])
Z([3,'warn'])
Z([3,'更多'])
Z([3,'footer'])
Z([3,'万丈豪情股份有限公司 © 版权所有'])
Z([3,'put'])
Z([3,'粤ICP备18153537号-5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/toubu.wxml','./components/xinwen.wxml','./pages/case/case.wxml','./pages/goods/goods-details/goods-details.wxml','./pages/goods/goods.wxml','./pages/index/index.wxml','./pages/me/me.wxml','./pages/news/news.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
cs.push("./components/toubu.wxml:view:1:1")
var oB=_n('view')
_rz(z,oB,'bind:__l',0,e,s,gg)
cs.push("./components/toubu.wxml:view:1:22")
var xC=_n('view')
_rz(z,xC,'class',1,e,s,gg)
cs.push("./components/toubu.wxml:image:1:43")
var oD=_mz(z,'image',['class',2,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(xC,oD)
cs.push("./components/toubu.wxml:text:1:114")
var fE=_n('text')
_rz(z,fE,'class',5,e,s,gg)
cs.push("./components/toubu.wxml:text:1:132")
var cF=_n('text')
var hG=_oz(z,6,e,s,gg)
_(cF,hG)
cs.pop()
_(fE,cF)
var oH=_oz(z,7,e,s,gg)
_(fE,oH)
cs.pop()
_(xC,fE)
cs.pop()
_(oB,xC)
cs.push("./components/toubu.wxml:swiper:1:185")
var cI=_mz(z,'swiper',['autoplay',8,'duration',1,'indicatorDots',2,'interval',3],[],e,s,gg)
cs.push("./components/toubu.wxml:swiper-item:1:279")
var oJ=_n('swiper-item')
cs.push("./components/toubu.wxml:view:1:292")
var lK=_n('view')
_rz(z,lK,'class',12,e,s,gg)
cs.push("./components/toubu.wxml:image:1:318")
var aL=_n('image')
_rz(z,aL,'src',13,e,s,gg)
cs.pop()
_(lK,aL)
cs.pop()
_(oJ,lK)
cs.pop()
_(cI,oJ)
cs.push("./components/toubu.wxml:swiper-item:1:382")
var tM=_n('swiper-item')
cs.push("./components/toubu.wxml:view:1:395")
var eN=_n('view')
_rz(z,eN,'class',14,e,s,gg)
cs.push("./components/toubu.wxml:image:1:421")
var bO=_n('image')
_rz(z,bO,'src',15,e,s,gg)
cs.pop()
_(eN,bO)
cs.pop()
_(tM,eN)
cs.pop()
_(cI,tM)
cs.push("./components/toubu.wxml:swiper-item:1:485")
var oP=_n('swiper-item')
cs.push("./components/toubu.wxml:view:1:498")
var xQ=_n('view')
_rz(z,xQ,'class',16,e,s,gg)
cs.push("./components/toubu.wxml:image:1:524")
var oR=_n('image')
_rz(z,oR,'src',17,e,s,gg)
cs.pop()
_(xQ,oR)
cs.pop()
_(oP,xQ)
cs.pop()
_(cI,oP)
cs.pop()
_(oB,cI)
cs.pop()
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
cs.push("./components/xinwen.wxml:view:1:1")
var cT=_n('view')
_rz(z,cT,'bind:__l',0,e,s,gg)
cs.push("./components/xinwen.wxml:view:1:22")
var hU=_n('view')
_rz(z,hU,'class',1,e,s,gg)
cs.push("./components/xinwen.wxml:view:1:44")
var oV=_n('view')
_rz(z,oV,'class',2,e,s,gg)
var cW=_oz(z,3,e,s,gg)
_(oV,cW)
cs.pop()
_(hU,oV)
cs.push("./components/xinwen.wxml:view:1:115")
var oX=_n('view')
_rz(z,oX,'class',4,e,s,gg)
var lY=_oz(z,5,e,s,gg)
_(oX,lY)
cs.pop()
_(hU,oX)
cs.pop()
_(cT,hU)
cs.pop()
_(r,cT)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
cs.push("./pages/case/case.wxml:view:1:1")
var t1=_n('view')
_rz(z,t1,'bind:__l',0,e,s,gg)
cs.push("./pages/case/case.wxml:toubu:1:22")
var e2=_n('toubu')
cs.pop()
_(t1,e2)
cs.push("./pages/case/case.wxml:view:1:37")
var b3=_n('view')
_rz(z,b3,'class',1,e,s,gg)
cs.push("./pages/case/case.wxml:view:1:63")
var o4=_n('view')
_rz(z,o4,'class',2,e,s,gg)
cs.push("./pages/case/case.wxml:image:1:92")
var x5=_mz(z,'image',['mode',3,'src',1],[],e,s,gg)
cs.pop()
_(o4,x5)
cs.push("./pages/case/case.wxml:view:1:154")
var o6=_n('view')
_rz(z,o6,'class',5,e,s,gg)
var f7=_oz(z,6,e,s,gg)
_(o6,f7)
cs.pop()
_(o4,o6)
cs.pop()
_(b3,o4)
cs.push("./pages/case/case.wxml:view:1:198")
var c8=_n('view')
_rz(z,c8,'class',7,e,s,gg)
cs.push("./pages/case/case.wxml:image:1:227")
var h9=_mz(z,'image',['mode',8,'src',1],[],e,s,gg)
cs.pop()
_(c8,h9)
cs.push("./pages/case/case.wxml:view:1:289")
var o0=_n('view')
_rz(z,o0,'class',10,e,s,gg)
var cAB=_oz(z,11,e,s,gg)
_(o0,cAB)
cs.pop()
_(c8,o0)
cs.pop()
_(b3,c8)
cs.push("./pages/case/case.wxml:view:1:333")
var oBB=_n('view')
_rz(z,oBB,'class',12,e,s,gg)
cs.push("./pages/case/case.wxml:image:1:362")
var lCB=_mz(z,'image',['mode',13,'src',1],[],e,s,gg)
cs.pop()
_(oBB,lCB)
cs.push("./pages/case/case.wxml:view:1:424")
var aDB=_n('view')
_rz(z,aDB,'class',15,e,s,gg)
var tEB=_oz(z,16,e,s,gg)
_(aDB,tEB)
cs.pop()
_(oBB,aDB)
cs.pop()
_(b3,oBB)
cs.push("./pages/case/case.wxml:view:1:468")
var eFB=_n('view')
_rz(z,eFB,'class',17,e,s,gg)
cs.push("./pages/case/case.wxml:image:1:497")
var bGB=_mz(z,'image',['mode',18,'src',1],[],e,s,gg)
cs.pop()
_(eFB,bGB)
cs.push("./pages/case/case.wxml:view:1:559")
var oHB=_n('view')
_rz(z,oHB,'class',20,e,s,gg)
var xIB=_oz(z,21,e,s,gg)
_(oHB,xIB)
cs.pop()
_(eFB,oHB)
cs.pop()
_(b3,eFB)
cs.push("./pages/case/case.wxml:view:1:603")
var oJB=_n('view')
_rz(z,oJB,'class',22,e,s,gg)
cs.push("./pages/case/case.wxml:image:1:632")
var fKB=_mz(z,'image',['mode',23,'src',1],[],e,s,gg)
cs.pop()
_(oJB,fKB)
cs.push("./pages/case/case.wxml:view:1:694")
var cLB=_n('view')
_rz(z,cLB,'class',25,e,s,gg)
var hMB=_oz(z,26,e,s,gg)
_(cLB,hMB)
cs.pop()
_(oJB,cLB)
cs.pop()
_(b3,oJB)
cs.pop()
_(t1,b3)
cs.push("./pages/case/case.wxml:button:1:745")
var oNB=_mz(z,'button',['size',27,'type',1],[],e,s,gg)
var cOB=_oz(z,29,e,s,gg)
_(oNB,cOB)
cs.pop()
_(t1,oNB)
cs.push("./pages/case/case.wxml:view:1:795")
var oPB=_n('view')
_rz(z,oPB,'class',30,e,s,gg)
cs.push("./pages/case/case.wxml:view:1:816")
var lQB=_n('view')
cs.push("./pages/case/case.wxml:text:1:822")
var aRB=_n('text')
var tSB=_oz(z,31,e,s,gg)
_(aRB,tSB)
cs.pop()
_(lQB,aRB)
cs.push("./pages/case/case.wxml:navigator:1:881")
var eTB=_n('navigator')
eTB.attr['url']=true
cs.push("./pages/case/case.wxml:text:1:896")
var bUB=_n('text')
_rz(z,bUB,'class',32,e,s,gg)
var oVB=_oz(z,33,e,s,gg)
_(bUB,oVB)
cs.pop()
_(eTB,bUB)
cs.pop()
_(lQB,eTB)
cs.pop()
_(oPB,lQB)
cs.pop()
_(t1,oPB)
cs.pop()
_(r,t1)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
cs.push("./pages/goods/goods-details/goods-details.wxml:view:1:1")
var oXB=_n('view')
_rz(z,oXB,'bind:__l',0,e,s,gg)
cs.push("./pages/goods/goods-details/goods-details.wxml:toubu:1:22")
var fYB=_n('toubu')
cs.pop()
_(oXB,fYB)
cs.push("./pages/goods/goods-details/goods-details.wxml:view:1:37")
var cZB=_n('view')
_rz(z,cZB,'class',1,e,s,gg)
cs.push("./pages/goods/goods-details/goods-details.wxml:view:1:59")
var h1B=_n('view')
_rz(z,h1B,'class',2,e,s,gg)
var o2B=_oz(z,3,e,s,gg)
_(h1B,o2B)
cs.pop()
_(cZB,h1B)
cs.push("./pages/goods/goods-details/goods-details.wxml:image:1:102")
var c3B=_mz(z,'image',['mode',4,'src',1],[],e,s,gg)
cs.pop()
_(cZB,c3B)
cs.pop()
_(oXB,cZB)
cs.push("./pages/goods/goods-details/goods-details.wxml:view:1:175")
var o4B=_n('view')
_rz(z,o4B,'class',6,e,s,gg)
cs.push("./pages/goods/goods-details/goods-details.wxml:button:1:196")
var l5B=_n('button')
_rz(z,l5B,'type',7,e,s,gg)
var a6B=_oz(z,8,e,s,gg)
_(l5B,a6B)
cs.pop()
_(o4B,l5B)
cs.push("./pages/goods/goods-details/goods-details.wxml:button:1:234")
var t7B=_n('button')
_rz(z,t7B,'type',9,e,s,gg)
var e8B=_oz(z,10,e,s,gg)
_(t7B,e8B)
cs.pop()
_(o4B,t7B)
cs.pop()
_(oXB,o4B)
cs.push("./pages/goods/goods-details/goods-details.wxml:view:1:279")
var b9B=_n('view')
_rz(z,b9B,'class',11,e,s,gg)
cs.push("./pages/goods/goods-details/goods-details.wxml:view:1:300")
var o0B=_n('view')
cs.push("./pages/goods/goods-details/goods-details.wxml:text:1:306")
var xAC=_n('text')
var oBC=_oz(z,12,e,s,gg)
_(xAC,oBC)
cs.pop()
_(o0B,xAC)
cs.push("./pages/goods/goods-details/goods-details.wxml:navigator:1:365")
var fCC=_n('navigator')
fCC.attr['url']=true
cs.push("./pages/goods/goods-details/goods-details.wxml:text:1:380")
var cDC=_n('text')
_rz(z,cDC,'class',13,e,s,gg)
var hEC=_oz(z,14,e,s,gg)
_(cDC,hEC)
cs.pop()
_(fCC,cDC)
cs.pop()
_(o0B,fCC)
cs.pop()
_(b9B,o0B)
cs.pop()
_(oXB,b9B)
cs.pop()
_(r,oXB)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
cs.push("./pages/goods/goods.wxml:view:1:1")
var cGC=_n('view')
_rz(z,cGC,'bind:__l',0,e,s,gg)
cs.push("./pages/goods/goods.wxml:toubu:1:22")
var oHC=_n('toubu')
cs.pop()
_(cGC,oHC)
cs.push("./pages/goods/goods.wxml:view:1:37")
var lIC=_n('view')
_rz(z,lIC,'class',1,e,s,gg)
var aJC=_oz(z,2,e,s,gg)
_(lIC,aJC)
cs.pop()
_(cGC,lIC)
cs.push("./pages/goods/goods.wxml:view:1:68")
var tKC=_n('view')
_rz(z,tKC,'class',3,e,s,gg)
cs.push("./pages/goods/goods.wxml:view:1:88")
var eLC=_n('view')
cs.push("./pages/goods/goods.wxml:navigator:1:94")
var bMC=_n('navigator')
_rz(z,bMC,'url',4,e,s,gg)
cs.push("./pages/goods/goods.wxml:navigator:1:152")
var oNC=_n('navigator')
_rz(z,oNC,'url',5,e,s,gg)
cs.push("./pages/goods/goods.wxml:image:1:210")
var xOC=_mz(z,'image',['mode',-1,'src',6],[],e,s,gg)
cs.pop()
_(oNC,xOC)
cs.push("./pages/goods/goods.wxml:view:1:262")
var oPC=_n('view')
_rz(z,oPC,'class',7,e,s,gg)
var fQC=_oz(z,8,e,s,gg)
_(oPC,fQC)
cs.pop()
_(oNC,oPC)
cs.pop()
_(bMC,oNC)
cs.pop()
_(eLC,bMC)
cs.pop()
_(tKC,eLC)
cs.push("./pages/goods/goods.wxml:view:1:336")
var cRC=_n('view')
cs.push("./pages/goods/goods.wxml:navigator:1:342")
var hSC=_n('navigator')
_rz(z,hSC,'url',9,e,s,gg)
cs.push("./pages/goods/goods.wxml:image:1:400")
var oTC=_mz(z,'image',['mode',-1,'src',10],[],e,s,gg)
cs.pop()
_(hSC,oTC)
cs.push("./pages/goods/goods.wxml:view:1:452")
var cUC=_n('view')
_rz(z,cUC,'class',11,e,s,gg)
var oVC=_oz(z,12,e,s,gg)
_(cUC,oVC)
cs.pop()
_(hSC,cUC)
cs.pop()
_(cRC,hSC)
cs.pop()
_(tKC,cRC)
cs.push("./pages/goods/goods.wxml:view:1:514")
var lWC=_n('view')
cs.push("./pages/goods/goods.wxml:navigator:1:520")
var aXC=_n('navigator')
_rz(z,aXC,'url',13,e,s,gg)
cs.push("./pages/goods/goods.wxml:image:1:578")
var tYC=_mz(z,'image',['mode',-1,'src',14],[],e,s,gg)
cs.pop()
_(aXC,tYC)
cs.push("./pages/goods/goods.wxml:view:1:630")
var eZC=_n('view')
_rz(z,eZC,'class',15,e,s,gg)
var b1C=_oz(z,16,e,s,gg)
_(eZC,b1C)
cs.pop()
_(aXC,eZC)
cs.pop()
_(lWC,aXC)
cs.pop()
_(tKC,lWC)
cs.push("./pages/goods/goods.wxml:view:1:692")
var o2C=_n('view')
cs.push("./pages/goods/goods.wxml:navigator:1:698")
var x3C=_n('navigator')
_rz(z,x3C,'url',17,e,s,gg)
cs.push("./pages/goods/goods.wxml:image:1:756")
var o4C=_mz(z,'image',['mode',-1,'src',18],[],e,s,gg)
cs.pop()
_(x3C,o4C)
cs.push("./pages/goods/goods.wxml:view:1:808")
var f5C=_n('view')
_rz(z,f5C,'class',19,e,s,gg)
var c6C=_oz(z,20,e,s,gg)
_(f5C,c6C)
cs.pop()
_(x3C,f5C)
cs.pop()
_(o2C,x3C)
cs.pop()
_(tKC,o2C)
cs.push("./pages/goods/goods.wxml:view:1:870")
var h7C=_n('view')
cs.push("./pages/goods/goods.wxml:navigator:1:876")
var o8C=_n('navigator')
_rz(z,o8C,'url',21,e,s,gg)
cs.push("./pages/goods/goods.wxml:image:1:934")
var c9C=_mz(z,'image',['mode',-1,'src',22],[],e,s,gg)
cs.pop()
_(o8C,c9C)
cs.push("./pages/goods/goods.wxml:view:1:986")
var o0C=_n('view')
_rz(z,o0C,'class',23,e,s,gg)
var lAD=_oz(z,24,e,s,gg)
_(o0C,lAD)
cs.pop()
_(o8C,o0C)
cs.pop()
_(h7C,o8C)
cs.pop()
_(tKC,h7C)
cs.push("./pages/goods/goods.wxml:view:1:1048")
var aBD=_n('view')
cs.push("./pages/goods/goods.wxml:navigator:1:1054")
var tCD=_n('navigator')
_rz(z,tCD,'url',25,e,s,gg)
cs.push("./pages/goods/goods.wxml:image:1:1112")
var eDD=_mz(z,'image',['mode',-1,'src',26],[],e,s,gg)
cs.pop()
_(tCD,eDD)
cs.push("./pages/goods/goods.wxml:view:1:1164")
var bED=_n('view')
_rz(z,bED,'class',27,e,s,gg)
var oFD=_oz(z,28,e,s,gg)
_(bED,oFD)
cs.pop()
_(tCD,bED)
cs.pop()
_(aBD,tCD)
cs.pop()
_(tKC,aBD)
cs.push("./pages/goods/goods.wxml:view:1:1226")
var xGD=_n('view')
cs.push("./pages/goods/goods.wxml:navigator:1:1232")
var oHD=_n('navigator')
_rz(z,oHD,'url',29,e,s,gg)
cs.push("./pages/goods/goods.wxml:image:1:1290")
var fID=_mz(z,'image',['mode',-1,'src',30],[],e,s,gg)
cs.pop()
_(oHD,fID)
cs.push("./pages/goods/goods.wxml:view:1:1342")
var cJD=_n('view')
_rz(z,cJD,'class',31,e,s,gg)
var hKD=_oz(z,32,e,s,gg)
_(cJD,hKD)
cs.pop()
_(oHD,cJD)
cs.pop()
_(xGD,oHD)
cs.pop()
_(tKC,xGD)
cs.push("./pages/goods/goods.wxml:view:1:1404")
var oLD=_n('view')
cs.push("./pages/goods/goods.wxml:navigator:1:1410")
var cMD=_n('navigator')
_rz(z,cMD,'url',33,e,s,gg)
cs.push("./pages/goods/goods.wxml:image:1:1468")
var oND=_mz(z,'image',['mode',-1,'src',34],[],e,s,gg)
cs.pop()
_(cMD,oND)
cs.push("./pages/goods/goods.wxml:view:1:1520")
var lOD=_n('view')
_rz(z,lOD,'class',35,e,s,gg)
var aPD=_oz(z,36,e,s,gg)
_(lOD,aPD)
cs.pop()
_(cMD,lOD)
cs.pop()
_(oLD,cMD)
cs.pop()
_(tKC,oLD)
cs.push("./pages/goods/goods.wxml:view:1:1582")
var tQD=_n('view')
cs.push("./pages/goods/goods.wxml:navigator:1:1588")
var eRD=_n('navigator')
_rz(z,eRD,'url',37,e,s,gg)
cs.push("./pages/goods/goods.wxml:image:1:1646")
var bSD=_mz(z,'image',['mode',-1,'src',38],[],e,s,gg)
cs.pop()
_(eRD,bSD)
cs.push("./pages/goods/goods.wxml:view:1:1698")
var oTD=_n('view')
_rz(z,oTD,'class',39,e,s,gg)
var xUD=_oz(z,40,e,s,gg)
_(oTD,xUD)
cs.pop()
_(eRD,oTD)
cs.pop()
_(tQD,eRD)
cs.pop()
_(tKC,tQD)
cs.push("./pages/goods/goods.wxml:view:1:1760")
var oVD=_n('view')
cs.push("./pages/goods/goods.wxml:navigator:1:1766")
var fWD=_n('navigator')
_rz(z,fWD,'url',41,e,s,gg)
cs.push("./pages/goods/goods.wxml:image:1:1824")
var cXD=_mz(z,'image',['mode',-1,'src',42],[],e,s,gg)
cs.pop()
_(fWD,cXD)
cs.push("./pages/goods/goods.wxml:view:1:1876")
var hYD=_n('view')
_rz(z,hYD,'class',43,e,s,gg)
var oZD=_oz(z,44,e,s,gg)
_(hYD,oZD)
cs.pop()
_(fWD,hYD)
cs.pop()
_(oVD,fWD)
cs.pop()
_(tKC,oVD)
cs.pop()
_(cGC,tKC)
cs.push("./pages/goods/goods.wxml:button:1:1945")
var c1D=_mz(z,'button',['size',45,'type',1],[],e,s,gg)
var o2D=_oz(z,47,e,s,gg)
_(c1D,o2D)
cs.pop()
_(cGC,c1D)
cs.push("./pages/goods/goods.wxml:view:1:1995")
var l3D=_n('view')
_rz(z,l3D,'class',48,e,s,gg)
cs.push("./pages/goods/goods.wxml:view:1:2016")
var a4D=_n('view')
cs.push("./pages/goods/goods.wxml:text:1:2022")
var t5D=_n('text')
var e6D=_oz(z,49,e,s,gg)
_(t5D,e6D)
cs.pop()
_(a4D,t5D)
cs.push("./pages/goods/goods.wxml:navigator:1:2081")
var b7D=_n('navigator')
b7D.attr['url']=true
cs.push("./pages/goods/goods.wxml:text:1:2096")
var o8D=_n('text')
_rz(z,o8D,'class',50,e,s,gg)
var x9D=_oz(z,51,e,s,gg)
_(o8D,x9D)
cs.pop()
_(b7D,o8D)
cs.pop()
_(a4D,b7D)
cs.pop()
_(l3D,a4D)
cs.pop()
_(cGC,l3D)
cs.pop()
_(r,cGC)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
cs.push("./pages/index/index.wxml:view:1:1")
var fAE=_n('view')
_rz(z,fAE,'bind:__l',0,e,s,gg)
cs.push("./pages/index/index.wxml:toubu:1:22")
var cBE=_n('toubu')
cs.pop()
_(fAE,cBE)
cs.push("./pages/index/index.wxml:view:1:37")
var hCE=_n('view')
_rz(z,hCE,'class',1,e,s,gg)
var oDE=_oz(z,2,e,s,gg)
_(hCE,oDE)
cs.pop()
_(fAE,hCE)
cs.push("./pages/index/index.wxml:view:1:74")
var cEE=_n('view')
_rz(z,cEE,'class',3,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:96")
var oFE=_n('view')
cs.push("./pages/index/index.wxml:image:1:102")
var lGE=_mz(z,'image',['mode',4,'src',1],[],e,s,gg)
cs.pop()
_(oFE,lGE)
cs.push("./pages/index/index.wxml:text:1:166")
var aHE=_n('text')
var tIE=_oz(z,6,e,s,gg)
_(aHE,tIE)
cs.pop()
_(oFE,aHE)
cs.pop()
_(cEE,oFE)
cs.push("./pages/index/index.wxml:view:1:198")
var eJE=_n('view')
cs.push("./pages/index/index.wxml:image:1:204")
var bKE=_mz(z,'image',['mode',7,'src',1],[],e,s,gg)
cs.pop()
_(eJE,bKE)
cs.push("./pages/index/index.wxml:text:1:268")
var oLE=_n('text')
var xME=_oz(z,9,e,s,gg)
_(oLE,xME)
cs.pop()
_(eJE,oLE)
cs.pop()
_(cEE,eJE)
cs.push("./pages/index/index.wxml:view:1:300")
var oNE=_n('view')
cs.push("./pages/index/index.wxml:image:1:306")
var fOE=_mz(z,'image',['mode',10,'src',1],[],e,s,gg)
cs.pop()
_(oNE,fOE)
cs.push("./pages/index/index.wxml:text:1:370")
var cPE=_n('text')
var hQE=_oz(z,12,e,s,gg)
_(cPE,hQE)
cs.pop()
_(oNE,cPE)
cs.pop()
_(cEE,oNE)
cs.pop()
_(fAE,cEE)
cs.push("./pages/index/index.wxml:view:1:409")
var oRE=_n('view')
_rz(z,oRE,'class',13,e,s,gg)
var cSE=_oz(z,14,e,s,gg)
_(oRE,cSE)
cs.pop()
_(fAE,oRE)
cs.push("./pages/index/index.wxml:view:1:440")
var oTE=_n('view')
_rz(z,oTE,'class',15,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:460")
var lUE=_n('view')
cs.push("./pages/index/index.wxml:image:1:466")
var aVE=_mz(z,'image',['mode',-1,'src',16],[],e,s,gg)
cs.pop()
_(lUE,aVE)
cs.push("./pages/index/index.wxml:view:1:518")
var tWE=_n('view')
_rz(z,tWE,'class',17,e,s,gg)
var eXE=_oz(z,18,e,s,gg)
_(tWE,eXE)
cs.pop()
_(lUE,tWE)
cs.pop()
_(oTE,lUE)
cs.push("./pages/index/index.wxml:view:1:568")
var bYE=_n('view')
cs.push("./pages/index/index.wxml:image:1:574")
var oZE=_mz(z,'image',['mode',-1,'src',19],[],e,s,gg)
cs.pop()
_(bYE,oZE)
cs.push("./pages/index/index.wxml:view:1:626")
var x1E=_n('view')
_rz(z,x1E,'class',20,e,s,gg)
var o2E=_oz(z,21,e,s,gg)
_(x1E,o2E)
cs.pop()
_(bYE,x1E)
cs.pop()
_(oTE,bYE)
cs.push("./pages/index/index.wxml:view:1:676")
var f3E=_n('view')
cs.push("./pages/index/index.wxml:image:1:682")
var c4E=_mz(z,'image',['mode',-1,'src',22],[],e,s,gg)
cs.pop()
_(f3E,c4E)
cs.push("./pages/index/index.wxml:view:1:734")
var h5E=_n('view')
_rz(z,h5E,'class',23,e,s,gg)
var o6E=_oz(z,24,e,s,gg)
_(h5E,o6E)
cs.pop()
_(f3E,h5E)
cs.pop()
_(oTE,f3E)
cs.push("./pages/index/index.wxml:view:1:784")
var c7E=_n('view')
cs.push("./pages/index/index.wxml:image:1:790")
var o8E=_mz(z,'image',['mode',-1,'src',25],[],e,s,gg)
cs.pop()
_(c7E,o8E)
cs.push("./pages/index/index.wxml:view:1:842")
var l9E=_n('view')
_rz(z,l9E,'class',26,e,s,gg)
var a0E=_oz(z,27,e,s,gg)
_(l9E,a0E)
cs.pop()
_(c7E,l9E)
cs.pop()
_(oTE,c7E)
cs.push("./pages/index/index.wxml:view:1:892")
var tAF=_n('view')
cs.push("./pages/index/index.wxml:image:1:898")
var eBF=_mz(z,'image',['mode',-1,'src',28],[],e,s,gg)
cs.pop()
_(tAF,eBF)
cs.push("./pages/index/index.wxml:view:1:950")
var bCF=_n('view')
_rz(z,bCF,'class',29,e,s,gg)
var oDF=_oz(z,30,e,s,gg)
_(bCF,oDF)
cs.pop()
_(tAF,bCF)
cs.pop()
_(oTE,tAF)
cs.push("./pages/index/index.wxml:view:1:1000")
var xEF=_n('view')
cs.push("./pages/index/index.wxml:image:1:1006")
var oFF=_mz(z,'image',['mode',-1,'src',31],[],e,s,gg)
cs.pop()
_(xEF,oFF)
cs.push("./pages/index/index.wxml:view:1:1058")
var fGF=_n('view')
_rz(z,fGF,'class',32,e,s,gg)
var cHF=_oz(z,33,e,s,gg)
_(fGF,cHF)
cs.pop()
_(xEF,fGF)
cs.pop()
_(oTE,xEF)
cs.pop()
_(fAE,oTE)
cs.push("./pages/index/index.wxml:view:1:1115")
var hIF=_n('view')
_rz(z,hIF,'class',34,e,s,gg)
var oJF=_oz(z,35,e,s,gg)
_(hIF,oJF)
cs.pop()
_(fAE,hIF)
cs.push("./pages/index/index.wxml:view:1:1152")
var cKF=_n('view')
_rz(z,cKF,'class',36,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:1174")
var oLF=_n('view')
cs.push("./pages/index/index.wxml:navigator:1:1180")
var lMF=_mz(z,'navigator',['openType',37,'url',1],[],e,s,gg)
cs.push("./pages/index/index.wxml:image:1:1234")
var aNF=_mz(z,'image',['mode',39,'src',1],[],e,s,gg)
cs.pop()
_(lMF,aNF)
cs.push("./pages/index/index.wxml:text:1:1297")
var tOF=_n('text')
var ePF=_oz(z,41,e,s,gg)
_(tOF,ePF)
cs.pop()
_(lMF,tOF)
cs.pop()
_(oLF,lMF)
cs.pop()
_(cKF,oLF)
cs.push("./pages/index/index.wxml:view:1:1341")
var bQF=_n('view')
cs.push("./pages/index/index.wxml:navigator:1:1347")
var oRF=_mz(z,'navigator',['openType',42,'url',1],[],e,s,gg)
cs.push("./pages/index/index.wxml:image:1:1401")
var xSF=_mz(z,'image',['mode',44,'src',1],[],e,s,gg)
cs.pop()
_(oRF,xSF)
cs.push("./pages/index/index.wxml:text:1:1464")
var oTF=_n('text')
var fUF=_oz(z,46,e,s,gg)
_(oTF,fUF)
cs.pop()
_(oRF,oTF)
cs.pop()
_(bQF,oRF)
cs.pop()
_(cKF,bQF)
cs.push("./pages/index/index.wxml:view:1:1508")
var cVF=_n('view')
cs.push("./pages/index/index.wxml:navigator:1:1514")
var hWF=_mz(z,'navigator',['openType',47,'url',1],[],e,s,gg)
cs.push("./pages/index/index.wxml:image:1:1568")
var oXF=_mz(z,'image',['mode',49,'src',1],[],e,s,gg)
cs.pop()
_(hWF,oXF)
cs.push("./pages/index/index.wxml:text:1:1631")
var cYF=_n('text')
var oZF=_oz(z,51,e,s,gg)
_(cYF,oZF)
cs.pop()
_(hWF,cYF)
cs.pop()
_(cVF,hWF)
cs.pop()
_(cKF,cVF)
cs.pop()
_(fAE,cKF)
cs.push("./pages/index/index.wxml:view:1:1682")
var l1F=_n('view')
_rz(z,l1F,'class',52,e,s,gg)
var a2F=_oz(z,53,e,s,gg)
_(l1F,a2F)
cs.pop()
_(fAE,l1F)
cs.push("./pages/index/index.wxml:view:1:1719")
var t3F=_n('view')
_rz(z,t3F,'class',54,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:1738")
var e4F=_n('view')
_rz(z,e4F,'class',55,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:1760")
var b5F=_n('view')
_rz(z,b5F,'class',56,e,s,gg)
var o6F=_oz(z,57,e,s,gg)
_(b5F,o6F)
cs.pop()
_(e4F,b5F)
cs.push("./pages/index/index.wxml:view:1:1831")
var x7F=_n('view')
_rz(z,x7F,'class',58,e,s,gg)
var o8F=_oz(z,59,e,s,gg)
_(x7F,o8F)
cs.pop()
_(e4F,x7F)
cs.pop()
_(t3F,e4F)
cs.push("./pages/index/index.wxml:view:1:2136")
var f9F=_n('view')
_rz(z,f9F,'class',60,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:2158")
var c0F=_n('view')
_rz(z,c0F,'class',61,e,s,gg)
var hAG=_oz(z,62,e,s,gg)
_(c0F,hAG)
cs.pop()
_(f9F,c0F)
cs.push("./pages/index/index.wxml:view:1:2229")
var oBG=_n('view')
_rz(z,oBG,'class',63,e,s,gg)
var cCG=_oz(z,64,e,s,gg)
_(oBG,cCG)
cs.pop()
_(f9F,oBG)
cs.pop()
_(t3F,f9F)
cs.pop()
_(fAE,t3F)
cs.push("./pages/index/index.wxml:button:1:2541")
var oDG=_mz(z,'button',['size',65,'type',1],[],e,s,gg)
var lEG=_oz(z,67,e,s,gg)
_(oDG,lEG)
cs.pop()
_(fAE,oDG)
cs.push("./pages/index/index.wxml:view:1:2591")
var aFG=_n('view')
_rz(z,aFG,'class',68,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:2612")
var tGG=_n('view')
cs.push("./pages/index/index.wxml:text:1:2618")
var eHG=_n('text')
var bIG=_oz(z,69,e,s,gg)
_(eHG,bIG)
cs.pop()
_(tGG,eHG)
cs.push("./pages/index/index.wxml:navigator:1:2677")
var oJG=_n('navigator')
oJG.attr['url']=true
cs.push("./pages/index/index.wxml:text:1:2692")
var xKG=_n('text')
_rz(z,xKG,'class',70,e,s,gg)
var oLG=_oz(z,71,e,s,gg)
_(xKG,oLG)
cs.pop()
_(oJG,xKG)
cs.pop()
_(tGG,oJG)
cs.pop()
_(aFG,tGG)
cs.pop()
_(fAE,aFG)
cs.pop()
_(r,fAE)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
cs.push("./pages/me/me.wxml:view:1:1")
var cNG=_n('view')
_rz(z,cNG,'bind:__l',0,e,s,gg)
cs.push("./pages/me/me.wxml:toubu:1:22")
var hOG=_n('toubu')
cs.pop()
_(cNG,hOG)
cs.push("./pages/me/me.wxml:view:1:37")
var oPG=_n('view')
_rz(z,oPG,'class',1,e,s,gg)
cs.push("./pages/me/me.wxml:view:1:59")
var cQG=_n('view')
_rz(z,cQG,'class',2,e,s,gg)
var oRG=_oz(z,3,e,s,gg)
_(cQG,oRG)
cs.pop()
_(oPG,cQG)
cs.push("./pages/me/me.wxml:view:1:105")
var lSG=_n('view')
_rz(z,lSG,'class',4,e,s,gg)
var aTG=_oz(z,5,e,s,gg)
_(lSG,aTG)
cs.pop()
_(oPG,lSG)
cs.push("./pages/me/me.wxml:view:1:150")
var tUG=_n('view')
_rz(z,tUG,'class',6,e,s,gg)
var eVG=_oz(z,7,e,s,gg)
_(tUG,eVG)
cs.pop()
_(oPG,tUG)
cs.push("./pages/me/me.wxml:view:1:200")
var bWG=_n('view')
_rz(z,bWG,'class',8,e,s,gg)
var oXG=_oz(z,9,e,s,gg)
_(bWG,oXG)
cs.pop()
_(oPG,bWG)
cs.push("./pages/me/me.wxml:view:1:239")
var xYG=_n('view')
_rz(z,xYG,'class',10,e,s,gg)
var oZG=_oz(z,11,e,s,gg)
_(xYG,oZG)
cs.pop()
_(oPG,xYG)
cs.pop()
_(cNG,oPG)
cs.push("./pages/me/me.wxml:view:1:331")
var f1G=_n('view')
_rz(z,f1G,'class',12,e,s,gg)
cs.push("./pages/me/me.wxml:map:1:349")
var c2G=_mz(z,'map',['latitude',13,'longitude',1,'markers',2,'style',3],[],e,s,gg)
cs.pop()
_(f1G,c2G)
cs.pop()
_(cNG,f1G)
cs.push("./pages/me/me.wxml:view:1:471")
var h3G=_n('view')
_rz(z,h3G,'class',17,e,s,gg)
cs.push("./pages/me/me.wxml:view:1:492")
var o4G=_n('view')
cs.push("./pages/me/me.wxml:text:1:498")
var c5G=_n('text')
var o6G=_oz(z,18,e,s,gg)
_(c5G,o6G)
cs.pop()
_(o4G,c5G)
cs.push("./pages/me/me.wxml:navigator:1:557")
var l7G=_n('navigator')
l7G.attr['url']=true
cs.push("./pages/me/me.wxml:text:1:572")
var a8G=_n('text')
_rz(z,a8G,'class',19,e,s,gg)
var t9G=_oz(z,20,e,s,gg)
_(a8G,t9G)
cs.pop()
_(l7G,a8G)
cs.pop()
_(o4G,l7G)
cs.pop()
_(h3G,o4G)
cs.pop()
_(cNG,h3G)
cs.pop()
_(r,cNG)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
cs.push("./pages/news/news.wxml:view:1:1")
var bAH=_n('view')
_rz(z,bAH,'bind:__l',0,e,s,gg)
cs.push("./pages/news/news.wxml:toubu:1:22")
var oBH=_n('toubu')
cs.pop()
_(bAH,oBH)
cs.push("./pages/news/news.wxml:xinwen:1:37")
var xCH=_n('xinwen')
cs.pop()
_(bAH,xCH)
cs.push("./pages/news/news.wxml:xinwen:1:54")
var oDH=_n('xinwen')
cs.pop()
_(bAH,oDH)
cs.push("./pages/news/news.wxml:xinwen:1:71")
var fEH=_n('xinwen')
cs.pop()
_(bAH,fEH)
cs.push("./pages/news/news.wxml:xinwen:1:88")
var cFH=_n('xinwen')
cs.pop()
_(bAH,cFH)
cs.push("./pages/news/news.wxml:xinwen:1:105")
var hGH=_n('xinwen')
cs.pop()
_(bAH,hGH)
cs.push("./pages/news/news.wxml:button:1:122")
var oHH=_mz(z,'button',['size',1,'type',1],[],e,s,gg)
var cIH=_oz(z,3,e,s,gg)
_(oHH,cIH)
cs.pop()
_(bAH,oHH)
cs.push("./pages/news/news.wxml:view:1:172")
var oJH=_n('view')
_rz(z,oJH,'class',4,e,s,gg)
cs.push("./pages/news/news.wxml:view:1:193")
var lKH=_n('view')
cs.push("./pages/news/news.wxml:text:1:199")
var aLH=_n('text')
var tMH=_oz(z,5,e,s,gg)
_(aLH,tMH)
cs.pop()
_(lKH,aLH)
cs.push("./pages/news/news.wxml:navigator:1:258")
var eNH=_n('navigator')
eNH.attr['url']=true
cs.push("./pages/news/news.wxml:text:1:273")
var bOH=_n('text')
_rz(z,bOH,'class',6,e,s,gg)
var oPH=_oz(z,7,e,s,gg)
_(bOH,oPH)
cs.pop()
_(eNH,bOH)
cs.pop()
_(lKH,eNH)
cs.pop()
_(oJH,lKH)
cs.pop()
_(bAH,oJH)
cs.pop()
_(r,bAH)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["wx-view.",[1],"header {display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-justify-content:space-around; -ms-flex-pack:distribute; justify-content:space-around;margin: ",[0,6]," 0;}\n.",[1],"logo-img {width: ",[0,350],";height: auto;}\n.",[1],"tel {font-size: 14px;float: right;font-weight: 600;}\n.",[1],"tel wx-text {color: #d60c18;}\nwx-swiper {width: 100%;border-bottom: 1px solid #EBCB0C;}\nwx-swiper wx-image,wx-swiper {width: ",[0,750],";height: ",[0,234],";}\n.",[1],"_h3{color: #E7272D; text-align: center;margin-top: ",[0,40],";}\n.",[1],"_h4{color: #000; text-align: center;font-size: 16px; font-weight: 400;margin-bottom: ",[0,12],";}\n.",[1],"footer wx-text {font-size: 15px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap;-webkit-box-pack: center;-webkit-justify-content: center;-ms-flex-pack: center;justify-content: center;}\n.",[1],"news-h3{color: #000; text-align: center;font-style: 16px; font-weight: 400;margin-bottom: ",[0,12],";}\nwx-view.",[1],"news-p {font-size: 15px;}\n.",[1],"news {width: 96%; margin: auto;}\n.",[1],"news-li {border:1px dotted #ccc; padding: ",[0,10],";margin: ",[0,20]," 0;}\n.",[1],"button {display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;}\n.",[1],"put {color: red;}\n.",[1],"details {min-height: ",[0,800],";}\n.",[1],"details wx-image {margin:",[0,30]," auto;display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;}\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/toubu.wxss']=undefined;    
__wxAppCode__['components/toubu.wxml']=$gwx('./components/toubu.wxml');

__wxAppCode__['components/xinwen.wxss']=undefined;    
__wxAppCode__['components/xinwen.wxml']=$gwx('./components/xinwen.wxml');

__wxAppCode__['pages/case/case.wxss']=setCssToHead([".",[1],"environment {display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;-webkit-box-pack: center;-webkit-justify-content: center;-ms-flex-pack: center;justify-content: center;-webkit-flex-wrap: wrap;-ms-flex-wrap: wrap;flex-wrap: wrap;margin: ",[0,50]," 0;}\n.",[1],"environment-li {}\n",],undefined,{path:"./pages/case/case.wxss"});    
__wxAppCode__['pages/case/case.wxml']=$gwx('./pages/case/case.wxml');

__wxAppCode__['pages/goods/goods-details/goods-details.wxss']=undefined;    
__wxAppCode__['pages/goods/goods-details/goods-details.wxml']=$gwx('./pages/goods/goods-details/goods-details.wxml');

__wxAppCode__['pages/goods/goods.wxss']=setCssToHead([".",[1],"feature {display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around;margin: ",[0,20]," 0;}\n.",[1],"feature wx-text{display: block; text-align: center;}\n.",[1],"feature wx-image {width: ",[0,200],";}\n.",[1],"goods {display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around;margin: ",[0,20]," 0;}\n.",[1],"goods wx-image {width: ",[0,300],";height: ",[0,200],";}\nwx-button {margin: ",[0,30]," 0;}\n",],undefined,{path:"./pages/goods/goods.wxss"});    
__wxAppCode__['pages/goods/goods.wxml']=$gwx('./pages/goods/goods.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"feature {display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around;margin: ",[0,20]," 0;}\n.",[1],"feature wx-text{display: block; text-align: center;}\n.",[1],"feature wx-image {width: ",[0,200],";}\n.",[1],"goods {display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around;margin: ",[0,20]," 0;}\n.",[1],"goods wx-image {width: ",[0,300],";height: ",[0,200],";}\nwx-button {margin: ",[0,30]," 0;}\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/me/me.wxss']=setCssToHead([".",[1],"feature {display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around;margin: ",[0,20]," 0;}\n.",[1],"feature wx-text{display: block; text-align: center;}\n.",[1],"feature wx-image {width: ",[0,200],";}\n.",[1],"goods {display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around;margin: ",[0,20]," 0;}\n.",[1],"goods wx-image {width: ",[0,300],";height: ",[0,200],";}\nwx-button {margin: ",[0,30]," 0;}\n.",[1],"contact {width: 90%; margin:",[0,30]," auto;}\n.",[1],"contact .",[1],"_h5{color: #33; font-style: 18px;line-height: ",[0,50],";}\n.",[1],"map{width: ",[0,720],"; margin:",[0,50]," auto;}\n",],undefined,{path:"./pages/me/me.wxss"});    
__wxAppCode__['pages/me/me.wxml']=$gwx('./pages/me/me.wxml');

__wxAppCode__['pages/news/news.wxss']=setCssToHead([".",[1],"feature {display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around;margin: ",[0,20]," 0;}\n.",[1],"feature wx-text{display: block; text-align: center;}\n.",[1],"feature wx-image {width: ",[0,200],";}\n.",[1],"goods {display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around;margin: ",[0,20]," 0;}\n.",[1],"goods wx-image {width: ",[0,300],";height: ",[0,200],";}\nwx-button {margin: ",[0,30]," 0;}\n",],undefined,{path:"./pages/news/news.wxss"});    
__wxAppCode__['pages/news/news.wxml']=$gwx('./pages/news/news.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        plus.webview.postMessageToUniNView({
            type: 'UniWebviewReady-' + plus.webview.currentWebview().id
        }, '__uniapp__service');
})();

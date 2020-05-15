import{copy_clipboard}from './snippets/passplexer-9cbb6de13d0db281/src/copy.js';import{reset}from './snippets/passplexer-9cbb6de13d0db281/src/reset.js';let wasm;const heap=new Array(32).fill(undefined);heap.push(undefined,null,true,false);function getObject(idx){return heap[idx];}
let heap_next=heap.length;function dropObject(idx){if(idx<36)return;heap[idx]=heap_next;heap_next=idx;}
function takeObject(idx){const ret=getObject(idx);dropObject(idx);return ret;}
function addHeapObject(obj){if(heap_next===heap.length)heap.push(heap.length+1);const idx=heap_next;heap_next=heap[idx];heap[idx]=obj;return idx;}
let cachedTextDecoder=new TextDecoder('utf-8',{ignoreBOM:true,fatal:true});cachedTextDecoder.decode();let cachegetUint8Memory0=null;function getUint8Memory0(){if(cachegetUint8Memory0===null||cachegetUint8Memory0.buffer!==wasm.memory.buffer){cachegetUint8Memory0=new Uint8Array(wasm.memory.buffer);}
return cachegetUint8Memory0;}
function getStringFromWasm0(ptr,len){return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr,ptr+len));}
function debugString(val){const type=typeof val;if(type=='number'||type=='boolean'||val==null){return `${val}`;}
if(type=='string'){return `"${val}"`;}
if(type=='symbol'){const description=val.description;if(description==null){return 'Symbol';}else{return `Symbol(${description})`;}}
if(type=='function'){const name=val.name;if(typeof name=='string'&&name.length>0){return `Function(${name})`;}else{return 'Function';}}
if(Array.isArray(val)){const length=val.length;let debug='[';if(length>0){debug+=debugString(val[0]);}
for(let i=1;i<length;i++){debug+=', '+debugString(val[i]);}
debug+=']';return debug;}
const builtInMatches=/\[object ([^\]]+)\]/.exec(toString.call(val));let className;if(builtInMatches.length>1){className=builtInMatches[1];}else{return toString.call(val);}
if(className=='Object'){try{return 'Object('+JSON.stringify(val)+')';}catch(_){return 'Object';}}
if(val instanceof Error){return `${val.name}: ${val.message}\n${val.stack}`;}
return className;}
let WASM_VECTOR_LEN=0;let cachedTextEncoder=new TextEncoder('utf-8');const encodeString=(typeof cachedTextEncoder.encodeInto==='function'?function(arg,view){return cachedTextEncoder.encodeInto(arg,view);}:function(arg,view){const buf=cachedTextEncoder.encode(arg);view.set(buf);return{read:arg.length,written:buf.length};});function passStringToWasm0(arg,malloc,realloc){if(realloc===undefined){const buf=cachedTextEncoder.encode(arg);const ptr=malloc(buf.length);getUint8Memory0().subarray(ptr,ptr+buf.length).set(buf);WASM_VECTOR_LEN=buf.length;return ptr;}
let len=arg.length;let ptr=malloc(len);const mem=getUint8Memory0();let offset=0;for(;offset<len;offset++){const code=arg.charCodeAt(offset);if(code>0x7F)break;mem[ptr+offset]=code;}
if(offset!==len){if(offset!==0){arg=arg.slice(offset);}
ptr=realloc(ptr,len,len=offset+arg.length*3);const view=getUint8Memory0().subarray(ptr+offset,ptr+len);const ret=encodeString(arg,view);offset+=ret.written;}
WASM_VECTOR_LEN=offset;return ptr;}
let cachegetInt32Memory0=null;function getInt32Memory0(){if(cachegetInt32Memory0===null||cachegetInt32Memory0.buffer!==wasm.memory.buffer){cachegetInt32Memory0=new Int32Array(wasm.memory.buffer);}
return cachegetInt32Memory0;}
function makeMutClosure(arg0,arg1,dtor,f){const state={a:arg0,b:arg1,cnt:1};const real=(...args)=>{state.cnt++;const a=state.a;state.a=0;try{return f(a,state.b,...args);}finally{if(--state.cnt===0)wasm.__wbindgen_export_2.get(dtor)(a,state.b);else state.a=a;}};real.original=state;return real;}
let stack_pointer=32;function addBorrowedObject(obj){if(stack_pointer==1)throw new Error('out of js stack');heap[--stack_pointer]=obj;return stack_pointer;}
function __wbg_adapter_18(arg0,arg1,arg2){try{wasm._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h5c5953c7a149b857(arg0,arg1,addBorrowedObject(arg2));}finally{heap[stack_pointer++]=undefined;}}
export function main(){wasm.main();}
function isLikeNone(x){return x===undefined||x===null;}
function handleError(f){return function(){try{return f.apply(this,arguments);}catch(e){wasm.__wbindgen_exn_store(addHeapObject(e));}};}
async function load(module,imports){if(typeof Response==='function'&&module instanceof Response){if(typeof WebAssembly.instantiateStreaming==='function'){try{return await WebAssembly.instantiateStreaming(module,imports);}catch(e){if(module.headers.get('Content-Type')!='application/wasm'){console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e);}else{throw e;}}}
const bytes=await module.arrayBuffer();return await WebAssembly.instantiate(bytes,imports);}else{const instance=await WebAssembly.instantiate(module,imports);if(instance instanceof WebAssembly.Instance){return{instance,module};}else{return instance;}}}
async function init(input){if(typeof input==='undefined'){input=import.meta.url.replace(/\.js$/,'_bg.wasm');}
const imports={};imports.wbg={};imports.wbg.__wbindgen_cb_forget=function(arg0){takeObject(arg0);};imports.wbg.__wbindgen_cb_drop=function(arg0){const obj=takeObject(arg0).original;if(obj.cnt--==1){obj.a=0;return true;}
var ret=false;return ret;};imports.wbg.__wbindgen_object_clone_ref=function(arg0){var ret=getObject(arg0);return addHeapObject(ret);};imports.wbg.__wbindgen_object_drop_ref=function(arg0){takeObject(arg0);};imports.wbg.__wbg_reset_a7401b59465cc0bc=function(arg0,arg1){try{reset(getStringFromWasm0(arg0,arg1));}finally{wasm.__wbindgen_free(arg0,arg1);}};imports.wbg.__wbg_copyclipboard_76caf1acb9e4800c=function(arg0,arg1){try{copy_clipboard(getStringFromWasm0(arg0,arg1));}finally{wasm.__wbindgen_free(arg0,arg1);}};imports.wbg.__wbg_new_59cb74e423758ede=function(){var ret=new Error();return addHeapObject(ret);};imports.wbg.__wbg_stack_558ba5917b466edd=function(arg0,arg1){var ret=getObject(arg1).stack;var ptr0=passStringToWasm0(ret,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var len0=WASM_VECTOR_LEN;getInt32Memory0()[arg0/4+1]=len0;getInt32Memory0()[arg0/4+0]=ptr0;};imports.wbg.__wbg_error_4bb6c2a97407129a=function(arg0,arg1){try{console.error(getStringFromWasm0(arg0,arg1));}finally{wasm.__wbindgen_free(arg0,arg1);}};imports.wbg.__wbg_instanceof_Window_17fdb5cd280d476d=function(arg0){var ret=getObject(arg0)instanceof Window;return ret;};imports.wbg.__wbg_document_c26d0f423c143e0c=function(arg0){var ret=getObject(arg0).document;return isLikeNone(ret)?0:addHeapObject(ret);};imports.wbg.__wbg_getElementById_df597d226f179219=function(arg0,arg1,arg2){var ret=getObject(arg0).getElementById(getStringFromWasm0(arg1,arg2));return isLikeNone(ret)?0:addHeapObject(ret);};imports.wbg.__wbg_addEventListener_3526086a053a131e=handleError(function(arg0,arg1,arg2,arg3,arg4){getObject(arg0).addEventListener(getStringFromWasm0(arg1,arg2),getObject(arg3),getObject(arg4));});imports.wbg.__wbindgen_string_new=function(arg0,arg1){var ret=getStringFromWasm0(arg0,arg1);return addHeapObject(ret);};imports.wbg.__wbg_innerHTML_5ccbebf45da6c1ea=function(arg0,arg1){var ret=getObject(arg1).innerHTML;var ptr0=passStringToWasm0(ret,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var len0=WASM_VECTOR_LEN;getInt32Memory0()[arg0/4+1]=len0;getInt32Memory0()[arg0/4+0]=ptr0;};imports.wbg.__wbg_setinnerHTML_3eadb06031bae824=function(arg0,arg1,arg2){getObject(arg0).innerHTML=getStringFromWasm0(arg1,arg2);};imports.wbg.__wbg_setAttribute_1e9980589f904db6=handleError(function(arg0,arg1,arg2,arg3,arg4){getObject(arg0).setAttribute(getStringFromWasm0(arg1,arg2),getStringFromWasm0(arg3,arg4));});imports.wbg.__wbg_instanceof_HtmlInputElement_9e9349535b986dc4=function(arg0){var ret=getObject(arg0)instanceof HTMLInputElement;return ret;};imports.wbg.__wbg_value_c2fd875fedc14f57=function(arg0,arg1){var ret=getObject(arg1).value;var ptr0=passStringToWasm0(ret,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var len0=WASM_VECTOR_LEN;getInt32Memory0()[arg0/4+1]=len0;getInt32Memory0()[arg0/4+0]=ptr0;};imports.wbg.__wbg_instanceof_HtmlSelectElement_683d936519b8829b=function(arg0){var ret=getObject(arg0)instanceof HTMLSelectElement;return ret;};imports.wbg.__wbg_value_c8fa22fd1a96b1fc=function(arg0,arg1){var ret=getObject(arg1).value;var ptr0=passStringToWasm0(ret,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var len0=WASM_VECTOR_LEN;getInt32Memory0()[arg0/4+1]=len0;getInt32Memory0()[arg0/4+0]=ptr0;};imports.wbg.__wbg_newnoargs_8aad4a6554f38345=function(arg0,arg1){var ret=new Function(getStringFromWasm0(arg0,arg1));return addHeapObject(ret);};imports.wbg.__wbg_call_1f85aaa5836dfb23=handleError(function(arg0,arg1){var ret=getObject(arg0).call(getObject(arg1));return addHeapObject(ret);});imports.wbg.__wbg_new_d6227c3c833572bb=function(){var ret=new Object();return addHeapObject(ret);};imports.wbg.__wbg_self_c0d3a5923e013647=handleError(function(){var ret=self.self;return addHeapObject(ret);});imports.wbg.__wbg_window_7ee6c8be3432927d=handleError(function(){var ret=window.window;return addHeapObject(ret);});imports.wbg.__wbg_globalThis_c6de1d938e089cf0=handleError(function(){var ret=globalThis.globalThis;return addHeapObject(ret);});imports.wbg.__wbg_global_c9a01ce4680907f8=handleError(function(){var ret=global.global;return addHeapObject(ret);});imports.wbg.__wbindgen_is_undefined=function(arg0){var ret=getObject(arg0)===undefined;return ret;};imports.wbg.__wbg_set_6a666216929b0387=handleError(function(arg0,arg1,arg2){var ret=Reflect.set(getObject(arg0),getObject(arg1),getObject(arg2));return ret;});imports.wbg.__wbindgen_debug_string=function(arg0,arg1){var ret=debugString(getObject(arg1));var ptr0=passStringToWasm0(ret,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var len0=WASM_VECTOR_LEN;getInt32Memory0()[arg0/4+1]=len0;getInt32Memory0()[arg0/4+0]=ptr0;};imports.wbg.__wbindgen_throw=function(arg0,arg1){throw new Error(getStringFromWasm0(arg0,arg1));};imports.wbg.__wbindgen_closure_wrapper38=function(arg0,arg1,arg2){var ret=makeMutClosure(arg0,arg1,23,__wbg_adapter_18);return addHeapObject(ret);};if(typeof input==='string'||(typeof Request==='function'&&input instanceof Request)||(typeof URL==='function'&&input instanceof URL)){input=fetch(input);}
const{instance,module}=await load(await input,imports);wasm=instance.exports;init.__wbindgen_wasm_module=module;return wasm;}
export default init;
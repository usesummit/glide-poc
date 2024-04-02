(()=>{var w=Object.defineProperty,P=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var g=(t,e,n)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,l=(t,e)=>{for(var n in e||(e={}))L.call(e,n)&&g(t,n,e[n]);if(d)for(var n of d(e))b.call(e,n)&&g(t,n,e[n]);return t},y=(t,e)=>P(t,S(e));var u=(t,e,n)=>new Promise((s,i)=>{var o=m=>{try{r(n.next(m))}catch(p){i(p)}},a=m=>{try{r(n.throw(m))}catch(p){i(p)}},r=m=>m.done?s(m.value):Promise.resolve(m.value).then(o,a);r((n=n.apply(t,e)).next())});function f(t){return t instanceof Date?t.toISOString():Array.isArray(t)?t.map(f):t}function M(t,e){return u(this,null,function*(){var r;let{data:{key:n,params:s}}=t,i,o;try{i=yield e(...s)}catch(m){i=void 0;try{o=m.toString()}catch(p){o="Exception can't be stringified."}}let a={key:n};i!==void 0&&(i=f(i),a.result={type:"string",value:i}),o!==void 0&&(a.error=o),((r=t.source)==null?void 0:r.postMessage).call(r,a,"*")})}function h(t){return typeof window!="undefined"&&window.addEventListener("message",e=>M(e,t.run)),y(l({},t),{json:JSON.stringify(O(t),null,2)})}var x=`
        <svg
          width="48"
          height="48"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 14.85L14.3 0V7.29C14.3 11.4653 11.0406 14.85 7.02 14.85H0Z"
            fill="currentColor"
          />
          <path
            d="M11.7 19.71C11.7 15.5347 14.9594 12.15 18.98 12.15H26L11.7 27V19.71Z"
            fill="currentColor"
          />
        </svg>
    `,N=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function O(t){let{name:e,description:n,author:s,result:i,params:o,about:a,video:r}=t,{icon:m=N}=t;return m==="glide"&&(m=x),{name:e,description:n,author:s,result:i,about:a,icon:m,video:r,params:Object.entries(o).map(([p,T])=>l({name:p},T))}}var C={timeoutSeconds:10};function v(t){return(new Date().getTime()-t.getTime())/1e3}var c=class{constructor(e=C){this.cache=new Map;this.props=l(l({},e),C)}get(e){return u(this,null,function*(){var i;let{timestamp:n,item:s}=(i=this.cache.get(e))!=null?i:{timestamp:new Date(0)};if(v(n)<this.props.timeoutSeconds)return s;this.cache.delete(e)})}getWith(e,n){return u(this,null,function*(){var o;let{timestamp:s,item:i}=(o=this.cache.get(e))!=null?o:{timestamp:new Date(0)};if(v(s)<this.props.timeoutSeconds)return i;{let a=yield n(e);return this.set(e,a),a}})}set(e,n){return this.cache.set(e,{timestamp:new Date,item:n})}fetch(i,o){return u(this,arguments,function*(e,n,s=e){return yield this.getWith(s,()=>fetch(e,n).then(a=>a.json()))})}};var D=new c,_=h({name:"Estimated Completion",description:"Returns a completion date based on provided schedule and task duration.",author:"Matt Wensing <matt@usesummit.com>",params:{summitApiKey:{displayName:"Summit API Key",type:"string"},submittedAt:{displayName:"Submitted At",type:"string"},operationalStatus:{displayName:"Operational Status",type:"number"},averageTtc:{displayName:"Average Time to Complete",type:"number"},operationalSchedule:{displayName:"Operational Schedule",type:"string"},timezone:{displayName:"Timezone (Olson)",type:"string"}},result:{type:"string"},run(t,e,n,s,i,o){return u(this,null,function*(){let a;try{let r="https://api.usesummit.com/v1/zapier-partner-test-account/38b4dc/estimated-resolution-time/";a=yield D.fetch(r,{method:"POST",headers:{"Content-Type":"application/json","X-Api-Key":t.value},body:JSON.stringify({options:{start:"2024-02-01T00:00:00Z",end:"2025-03-01T00:00:00Z"},parameters:{ticket_submitted_at:e.value,is_open:n.value,average_ttc:s.value,operational_schedule:i.value,timezone:o.value}})})}catch(r){return JSON.stringify({error:r})}return JSON.stringify({data:a})})}});})();
//# sourceMappingURL=index.js.map
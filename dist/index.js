"use strict";var B=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(c){throw (a=0, c)}};};var F=B(function(W,E){
function K(r,a,c,y,v,l,s,i,u,x,e,f,q){var g,b,p,n,P,h,w,o,t,R,z,j,A;for(g=a.data,b=v.data,p=i.data,n=e.data,P=a.accessors[0],h=v.accessors[0],w=i.accessors[0],o=e.accessors[1],t=y,R=s,z=x,j=q,A=0;A<r;A++)P(g,t)?o(n,j,h(b,R)):o(n,j,w(p,z)),t+=c,R+=l,z+=u,j+=f;return e}E.exports=K
});var D=B(function(Z,G){
var k=require('@stdlib/array-base-arraylike2object/dist'),L=F();function M(r,a,c,y,v,l,s,i,u,x,e,f,q){var g,b,p,n,P,h,w,o,t;if(r<=0)return e;if(g=k(a),b=k(v),p=k(i),n=k(e),g.accessorProtocol||b.accessorProtocol||p.accessorProtocol||n.accessorProtocol)return L(r,g,c,y,b,l,s,p,u,x,n,f,q),e;for(P=y,h=s,w=x,o=q,t=0;t<r;t++)a[P]?e[o]=v[h]:e[o]=i[w],P+=c,h+=l,w+=u,o+=f;return e}G.exports=M
});var I=B(function(_,H){
var m=require('@stdlib/strided-base-stride2offset/dist'),Q=D();function S(r,a,c,y,v,l,s,i,u){var x=m(r,c),e=m(r,v),f=m(r,s),q=m(r,u);return Q(r,a,c,x,y,v,e,l,s,f,i,u,q)}H.exports=S
});var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),J=I(),U=D();T(J,"ndarray",U);module.exports=J;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

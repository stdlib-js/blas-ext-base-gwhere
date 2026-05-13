"use strict";var B=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var F=B(function(W,E){
function K(r,a,o,y,c,l,s,i,u,x,e,f,q){var g,b,p,n,P,h,w,v,t,R,z,j,A;for(g=a.data,b=c.data,p=i.data,n=e.data,P=a.accessors[0],h=c.accessors[0],w=i.accessors[0],v=e.accessors[1],t=y,R=s,z=x,j=q,A=0;A<r;A++)P(g,t)?v(n,j,h(b,R)):v(n,j,w(p,z)),t+=o,R+=l,z+=u,j+=f;return e}E.exports=K
});var D=B(function(Z,G){
var k=require('@stdlib/array-base-arraylike2object/dist'),L=F();function M(r,a,o,y,c,l,s,i,u,x,e,f,q){var g,b,p,n,P,h,w,v,t;if(r<=0)return e;if(g=k(a),b=k(c),p=k(i),n=k(e),g.accessorProtocol||b.accessorProtocol||p.accessorProtocol||n.accessorProtocol)return L(r,g,o,y,b,l,s,p,u,x,n,f,q),e;for(P=y,h=s,w=x,v=q,t=0;t<r;t++)a[P]?e[v]=c[h]:e[v]=i[w],P+=o,h+=l,w+=u,v+=f;return e}G.exports=M
});var I=B(function(_,H){
var m=require('@stdlib/strided-base-stride2offset/dist'),Q=D();function S(r,a,o,y,c,l,s,i,u){var x=m(r,o),e=m(r,c),f=m(r,s),q=m(r,u);return Q(r,a,o,x,y,c,e,l,s,f,i,u,q)}H.exports=S
});var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),J=I(),U=D();T(J,"ndarray",U);module.exports=J;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

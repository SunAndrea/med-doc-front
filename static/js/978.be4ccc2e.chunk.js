"use strict";(self.webpackChunkmed_doc_front=self.webpackChunkmed_doc_front||[]).push([[978],{3988:function(t,e,n){var i=n(6151),r=n(1087),s=n(184);e.Z=function(t){var e=t.children,n=t.id;return(0,s.jsx)(r.rU,{to:"".concat(n),children:(0,s.jsx)(i.Z,{variant:"outlined",color:"primary",children:e})})}},4978:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var i=n(9439),r=n(9939),s=n(3988),u=n(6038),a=n(8523),f=n(2412),c=n(2791),o=n(9434),l=n(9107),d="ListOfPatients_filter__qHovY",h=n(184),v=function(){var t=(0,c.useState)([]),e=(0,i.Z)(t,2),n=e[0],v=e[1],w=(0,c.useState)([]),Z=(0,i.Z)(w,2),j=Z[0],x=Z[1],m=(0,c.useState)([]),p=(0,i.Z)(m,2),S=p[0],_=p[1],E=(0,c.useState)("All"),P=(0,i.Z)(E,2),y=P[0],O=P[1],k=(0,c.useState)(1),b=(0,i.Z)(k,2),g=b[0],z=b[1],A=(0,c.useState)(),L=(0,i.Z)(A,2),W=L[0],X=L[1],q=(0,c.useState)(window.innerWidth),C=(0,i.Z)(q,2),H=C[0],N=C[1],U=(0,o.I0)();(0,c.useEffect)((function(){function t(){N(window.innerWidth)}return(0,u.X5)(window.innerWidth,X),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),(0,c.useEffect)((function(){var t=(0,u.X5)(H,X,null,"yes");U((0,l.Pq)("Patient")).then((function(e){var n=e.payload,i=(0,u.f7)(n,t);v(n),_(i)}))}),[U]),(0,c.useEffect)((function(){(0,u.X5)(H,X);var t=(0,u.f7)(j,W);_(t)}),[H]),(0,c.useEffect)((function(){var t=n;"All"!==y&&(t=n.filter((function(t){return t.patientStatus===y}))),x(t);var e=(0,u.f7)(t,W);_(e)}),[n,y]);var V=0;return S&&(V=S.length),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:d,children:(0,h.jsx)(r.Z,{title:"Patients",filter:["All","New","Permanent"],sortDoctors:function(t){O(t)},styles:{width:"204px"}})}),W&&(0,h.jsx)(f.Z,{listOfUsers:S[g-1]||j,children:(0,h.jsx)(a.j,{children:(0,h.jsx)(s.Z,{children:"view profile"})})}),W&&(0,h.jsx)(u.Rz,{numberOfBtnsOnVisitsHistory:V,handlePageOnVisits:function(t){z(t)}})]})}}}]);
//# sourceMappingURL=978.be4ccc2e.chunk.js.map
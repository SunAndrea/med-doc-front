(self.webpackChunkmed_doc_front=self.webpackChunkmed_doc_front||[]).push([[948],{3988:function(t,e,n){"use strict";var i=n(6151),r=n(1087),o=n(184);e.Z=function(t){var e=t.children,n=t.id;return(0,o.jsx)(r.rU,{to:"".concat(n),children:(0,o.jsx)(i.Z,{variant:"outlined",color:"primary",children:e})})}},4948:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return _}});var i=n(1413),r=n(9439),o=n(5987),u=n(1060),s=n(2007),l=n.n(s),c=["color","size"],a=function(t){var e=t.color,n=t.size,r=(0,o.Z)(t,c);return u.createElement("svg",(0,i.Z)({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:e},r),u.createElement("path",{d:"M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"}))};a.propTypes={color:l().string,size:l().oneOfType([l().string,l().number])},a.defaultProps={color:"currentColor",size:"24"};var f=a,d=n(4110),p=n(3400),h=n(5770),x=n(6989),v=n(3988),m=n(2922),g=n(2412),w=n(5095),j=n.n(w),Z=n(2791),b=n(9434),y=n(9107),S=n(4208),O="Colleagues_filter__XOBn8",A="Colleagues_filterSelect__lVwJa",C=n(6038),E=n(184),M=["Show All","Ophthalmologist","Surgeon","Therapist","Neurologist","Gynecologist","Endocrinologist","Psychiatrist","Psychotherapist","Otolaryngologist","Oncologist"],T=["Show All","The First","The Second","Higher"],W={"&.MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon.MuiAutocomplete-root .MuiOutlinedInput-root":{borderRadius:"16px",padding:"14px 18px"},"&.MuiAutocomplete-root .MuiOutlinedInput-root .MuiAutocomplete-input ":{padding:"0px",fontWeight:"500",fontSize:"16px",lineHeight:"1.5",color:"#111111",width:"100%"}},_=function(){var t=(0,Z.useState)([]),e=(0,r.Z)(t,2),n=e[0],o=e[1],u=(0,Z.useState)([]),s=(0,r.Z)(u,2),l=s[0],c=s[1],a=(0,Z.useState)("Show All"),w=(0,r.Z)(a,2),_=w[0],z=w[1],I=(0,Z.useState)("Show All"),P=(0,r.Z)(I,2),N=P[0],k=P[1],B=(0,Z.useState)([]),L=(0,r.Z)(B,2),R=L[0],$=L[1],F=(0,Z.useState)(),H=(0,r.Z)(F,2),U=H[0],V=H[1],X=(0,Z.useState)(window.innerWidth),D=(0,r.Z)(X,2),G=D[0],q=D[1],J=(0,Z.useState)(1),K=(0,r.Z)(J,2),Q=K[0],Y=K[1],tt=(0,b.I0)(),et=(0,b.v9)(S.Bv);(0,Z.useEffect)((function(){tt((0,y.Pq)("Doctor"))}),[]);(0,Z.useEffect)((function(){function t(){q(window.innerWidth)}return(0,C.X5)(window.innerWidth,V),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),(0,Z.useEffect)((function(){(0,C.X5)(G,V);var t=(0,C.f7)(l,U);$(t)}),[G]),(0,Z.useEffect)((function(){var t=et;_&&"Show All"!==_&&(t=t.filter((function(t){return t.specialization===_}))),N&&"Show All"!==N&&(t=t.filter((function(t){return t.category===N})));var e=(0,C.f7)(t,U);$(e),o(t),c(t)}),[et,_,N]);var nt=1;return R&&(nt=R.length),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("div",{className:O,children:[(0,E.jsx)("div",{children:(0,E.jsx)(d.Z,{sx:{minWidth:"270px"},variant:"filter",color:"primary",disableUnderline:!0,type:"text",placeholder:"Search",onChange:j()((function(t){var e=t.target.value.trim(),i=n.filter((function(t){return t.name.toLowerCase().startsWith(e.toLowerCase())}));c(i)}),300),endAdornment:(0,E.jsx)(p.Z,{disableRipple:!0,sx:{padding:"0px"},children:(0,E.jsx)(f,{})})})}),(0,E.jsx)("div",{className:A,children:(0,E.jsxs)("ul",{style:{display:"flex"},children:[(0,E.jsx)("li",{children:(0,E.jsx)(h.Z,{disablePortal:!0,id:"combo-box-demo",options:M,sx:(0,i.Z)((0,i.Z)({},W),{},{maxWidth:"220px",marginRight:{xs:"8px",md:"16px"}}),value:_,onChange:function(t,e){z(e)},renderInput:function(t){return(0,E.jsx)(x.Z,(0,i.Z)({},t))}})}),(0,E.jsx)("li",{children:(0,E.jsx)(h.Z,{disablePortal:!0,id:"combo-box-demo",options:T,sx:(0,i.Z)((0,i.Z)({},W),{},{maxWidth:"184px"}),value:N,onChange:function(t,e){k(e)},renderInput:function(t){return(0,E.jsx)(x.Z,(0,i.Z)({},t))}})})]})})]}),(0,E.jsx)(g.Z,{listOfUsers:R[Q-1]||l,children:(0,E.jsx)(m.G,{children:(0,E.jsx)(v.Z,{children:"view profile"})})}),(0,E.jsx)(C.Rz,{numberOfBtnsOnVisitsHistory:nt,handlePageOnVisits:function(t){Y(t)}})]})}},5095:function(t,e,n){var i=NaN,r="[object Symbol]",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,f="object"==typeof self&&self&&self.Object===Object&&self,d=a||f||Function("return this")(),p=Object.prototype.toString,h=Math.max,x=Math.min,v=function(){return d.Date.now()};function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&p.call(t)==r}(t))return i;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=s.test(t);return n||l.test(t)?c(t.slice(2),n?2:8):u.test(t)?i:+t}t.exports=function(t,e,n){var i,r,o,u,s,l,c=0,a=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var n=i,o=r;return i=r=void 0,c=e,u=t.apply(o,n)}function w(t){var n=t-l;return void 0===l||n>=e||n<0||f&&t-c>=o}function j(){var t=v();if(w(t))return Z(t);s=setTimeout(j,function(t){var n=e-(t-l);return f?x(n,o-(t-c)):n}(t))}function Z(t){return s=void 0,d&&i?p(t):(i=r=void 0,u)}function b(){var t=v(),n=w(t);if(i=arguments,r=this,l=t,n){if(void 0===s)return function(t){return c=t,s=setTimeout(j,e),a?p(t):u}(l);if(f)return s=setTimeout(j,e),p(l)}return void 0===s&&(s=setTimeout(j,e)),u}return e=g(e)||0,m(n)&&(a=!!n.leading,o=(f="maxWait"in n)?h(g(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,i=l=r=s=void 0},b.flush=function(){return void 0===s?u:Z(v())},b}}}]);
//# sourceMappingURL=948.611d97b3.chunk.js.map
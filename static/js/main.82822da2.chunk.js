(this["webpackJsonpzoovu-logo-game"]=this["webpackJsonpzoovu-logo-game"]||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/zoovu-o.987e802d.svg"},57:function(e,t,a){e.exports=a.p+"static/media/zoovu-z.98d275b2.svg"},58:function(e,t,a){e.exports=a.p+"static/media/zoovu-u.509452d2.svg"},59:function(e,t,a){e.exports=a.p+"static/media/zoovu-v.f04e5e7e.svg"},68:function(e,t,a){e.exports=a(85)},73:function(e,t,a){},74:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),i=(a(73),a(11)),s=a(119),l=a(118),u=a(54),m=a.n(u),p=(a(74),function(e){var t=e.setUsername,a=Object(n.useState)(""),c=Object(i.a)(a,2),o=c[0],u=c[1];return r.a.createElement("div",{className:"welcome-container wrapper"},r.a.createElement("div",{className:"welcome-content"},r.a.createElement("h3",null,"Hello friend, tell me your name..."),r.a.createElement(l.a,{value:o,inputProps:{min:0,style:{textAlign:"center"}},onChange:function(e){var t=e.target;u(t.value)},"data-testid":"text-input",className:"welcome-input",placeholder:"Your name here"}),r.a.createElement(s.a,{variant:"contained","data-testid":"continue-button",onClick:function(){return t(o)},className:"welcome-button",endIcon:r.a.createElement(m.a,{fontSize:"large"})},"Let's go")))}),d=a(45),f=a(117),v=a(60),g=a(55),b=a.n(g),E=(a(79),function(e){var t=e.seconds,a=e.username;return r.a.createElement("div",{className:"info-margin-top"},r.a.createElement("div",{className:"info-row"},r.a.createElement("div",{className:"info-username"},"Good Luck, ",a,"!"),r.a.createElement("div",{className:"info-score"},r.a.createElement(b.a,{style:{color:"green"}})," Your score: ",t," ","seconds")),r.a.createElement("div",{className:"info-row info-subtitle"},r.a.createElement("span",null,"Pick up the right cards"),r.a.createElement("span",null,"The faster the better!")))}),y=a(120),h=(a(80),function(e){var t=e.item,a=t.type,n=t.image,c=t.index,o=t.droppable,s=e.startTimer,l=e.isFinished,u=Object(y.a)({item:{type:a,index:c,droppable:o},begin:function(){l||s()},collect:function(e){return{isDragging:!!e.isDragging()}}}),m=Object(i.a)(u,2),p=m[0].isDragging,d=m[1];return r.a.createElement("div",{ref:d,style:{opacity:p?.5:1,fontSize:25,fontWeight:"bold",cursor:"move"}},r.a.createElement("img",{className:"logo-image",src:n,alt:"React Logo"}))}),O=a(121),j=(a(82),function(e){var t=e.item,a=e.updateArrays,n=e.startTimer,c=e.isFinished,o=e.className,s=Object(O.a)({accept:t.type,drop:function(e){a(e.index,t.index)},canDrop:function(e){return e.type===t.type&&t.droppable&&!e.droppable&&!t.active},collect:function(e){return{isOver:!!e.isOver(),canDrop:!!e.canDrop()}}}),l=Object(i.a)(s,2),u=l[0],m=(u.isOver,u.canDrop,l[1]);return r.a.createElement("div",{ref:m,className:"square-container ".concat(o)},t.active&&r.a.createElement(h,{isFinished:c,item:t,startTimer:n}))}),w=function(){return r.a.createElement("div",{className:"info-margin-top"},r.a.createElement("div",{className:"info-row info-subtitle"},r.a.createElement("span",null,"...and drop them here to make the logo great ",r.a.createElement("label",null,"again!"))))},k=a(57),N=a.n(k),x=a(44),z=a.n(x),S=a(58),D=a.n(S),F=a(59),I=a.n(F),T=[{image:N.a,type:"z",key:"1"},{image:z.a,type:"o",key:"2"},{image:z.a,type:"o",key:"3"},{image:I.a,type:"v",key:"4"},{image:D.a,type:"u",key:"5"}],q=a(61),A=function(e,t,a){var n=t.image,r=t.type;return{active:e,image:n,key:t.key,type:r,index:a,droppable:!e}},L=function(e){return e.every((function(e){return e.active}))},W=(a(83),function(e){var t=e.username,a=Object(n.useState)(0),c=Object(i.a)(a,2),o=c[0],s=c[1],l=Object(n.useState)(!1),u=Object(i.a)(l,2),m=u[0],p=u[1],g=Object(n.useState)([]),b=Object(i.a)(g,2),y=b[0],h=b[1],O=Object(n.useState)([]),k=Object(i.a)(O,2),N=k[0],x=k[1],z=Object(n.useState)(!1),S=Object(i.a)(z,2),D=S[0],F=S[1],I=function(e,t){F(!0),y[e]=Object(d.a)({},y[e],{active:!1}),N[t]=Object(d.a)({},N[t],{active:!0}),h(y),x(N),F(!1),L(N)&&p(!1)},W=function(e,t){return r.a.createElement("div",{className:"game-items-row"},e.map((function(e){return r.a.createElement(j,{key:"sq-".concat(e.key,"-").concat(e.droppable),startTimer:function(){return p(!0)},updateArrays:I,item:e,className:t,isFinished:L(N)})})))};return Object(n.useEffect)((function(){var e;h((e=T,Object(q.a)(e).sort((function(){return Math.random()-.5}))).map((function(e,t){return A(!0,e,t)}))),x(T.map((function(e,t){return A(!1,e,t)})))}),[]),Object(n.useEffect)((function(){var e=null;return m?e=setInterval((function(){s(o+1)}),1e3):m||0===o||clearInterval(e),function(){return clearInterval(e)}}),[m,o]),r.a.createElement("div",{className:"wrapper"},r.a.createElement(f.a,{backend:v.a},!D&&r.a.createElement("div",{className:"game-wrapper wrapper"},r.a.createElement(E,{username:t,seconds:o}),W(y,"init-squares"),r.a.createElement(w,null),W(N,"target-squares"))))}),B=(a(84),function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(W,{username:a}):r.a.createElement(p,{setUsername:c}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.82822da2.chunk.js.map
(this["webpackJsonpb64-url-editor"]=this["webpackJsonpb64-url-editor"]||[]).push([[0],{117:function(e,t,n){e.exports=n(193)},122:function(e,t,n){},131:function(e,t,n){},193:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=(n(122),n(55)),i=n(47),s=n(200),u=n(32),m=n(194),f=n(48),d=n(21),p=n(196),h=n(197),E=n(199),v=n(195),y=n(198),g=n(210),j=n(211),b=n(212),w=n(213),O=n(214),C=n(209),k=n(99),S=n.n(k),I=n(100),x=n.n(I);n(131);var A=function(){var e=p.a.TextArea,t=h.a.Option,n=(E.a.Header,E.a.Footer),c=(E.a.Sider,E.a.Content),o=v.a.confirm,k=Object(a.useState)(""),I=Object(i.a)(k,2),A=I[0],R=I[1],J=Object(a.useState)([]),N=Object(i.a)(J,2),U=N[0],W=N[1],z=Object(a.useState)({}),T=Object(i.a)(z,2),B=T[0],Z=T[1],L=x()(),P=Object(i.a)(L,2),$=P[0],F=P[1],G=Object(a.useState)(!0),H=Object(i.a)(G,2),q=H[0],D=H[1],K=function(e){return btoa(unescape(encodeURIComponent(e)))},M=function(e){return decodeURIComponent(escape(atob(e)))},Q=function(e){return e.startsWith("vmess://")?"vmess":e.startsWith("trojan://")?"trojan":e.startsWith("ss://")?"ss":"unsupported"},V=function(e){if("vmess"===Q(e))return JSON.parse(M(e.replace("vmess://","")));if("ss"===Q(e)){var t=e.search("#");return M(e.slice(5,t))}return e},X=function(e){if("vmess"===Q(e))return V(e).ps;if("trojan"===Q(e)){var t=e.search("#");return decodeURIComponent(e.slice(t+1))}if("ss"===Q(e)){var n=e.search("#");return decodeURIComponent(e.slice(n+1))}},Y=function(e){if(e.length&&function(e){return/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(e)}(e)){var t=M(e).split("\n"),n=[],a=!0,r=!1,c=void 0;try{for(var o,l=t[Symbol.iterator]();!(a=(o=l.next()).done);a=!0){var i=o.value,s={type:Q(i),name:X(i),json:V(i),raw:i,id:S.a.generate()};n.push(s)}}catch(u){r=!0,c=u}finally{try{a||null==l.return||l.return()}finally{if(r)throw c}}return W(n),Z(n[0]),console.log(n),n}},_=function(){W(U.map((function(e){return e.id===B.id?Object(l.a)({},e,{name:B.name}):e})))},ee=r.a.createElement(s.a,{placement:"bottom",title:"\u4fee\u6539",arrowPointAtCenter:!0},r.a.createElement(u.a,{type:"link",icon:r.a.createElement(g.a,null),size:"small",onClick:_})),te=function(e){var t=U.findIndex((function(t){return t.id===e.id}));U.filter((function(t){return t.id!==e.id})).length?Z(U[(t+1)%U.length]):Z({}),W(U.filter((function(t){return t.id!==e.id}))),y.a.success("\u522a\u9664 "+e.name+" \u6210\u529f")};return r.a.createElement("div",{className:"App"},r.a.createElement(E.a,null,r.a.createElement(f.a,{justify:"center"},r.a.createElement("h2",null,"Shawdowrockets v2RaNG \u8a02\u95b1\u93c8\u63a5\u7de8\u8f2f\u5668")),r.a.createElement(c,null,r.a.createElement(f.a,{gutter:16,justify:"space-between"},r.a.createElement(d.a,{span:12},r.a.createElement(m.a,null,r.a.createElement(f.a,{gutter:[16,24],justify:"center"},r.a.createElement(d.a,{span:14},r.a.createElement(h.a,{showSearch:!0,value:U.length?B.name:"",disabled:q||!A.length,style:{width:"100%"},onChange:function(e){Z(U[U.findIndex((function(t){return t.id===e[1]}))])},filterOption:function(e,t){return t.children[2].toLowerCase().indexOf(e.toLowerCase())>=0}},U.map((function(e){return r.a.createElement(t,{key:e.id,value:[e.name,e.id]},r.a.createElement("b",null,"[",e.type,"]")," ",e.name)})))),r.a.createElement(d.a,{span:2},r.a.createElement(u.a,{type:"primary",disabled:q,icon:r.a.createElement(j.a,null),onClick:function(){o({title:"\u78ba\u5b9a\u8981\u522a\u9664"+B.name+"?",icon:r.a.createElement(C.a,null),content:"\u9019\u9805\u64cd\u4f5c\u7121\u6cd5\u5fa9\u539f",okText:"\u78ba\u5b9a",cancelText:"\u53d6\u6d88",onOk:function(){te(B)},onCancel:function(){}})},danger:!0}))),r.a.createElement(f.a,{gutter:[16,24],justify:"center"},r.a.createElement(d.a,{span:16},r.a.createElement(p.a,{addonAfter:ee,value:B.name,onChange:function(e){Z(Object(l.a)({},B,{name:e.target.value}))},onPressEnter:_}))),r.a.createElement(f.a,{gutter:[48,1],justify:"center"},r.a.createElement(d.a,null,r.a.createElement(u.a,{type:"primary",icon:r.a.createElement(b.a,null),onClick:function(){var e=X(U[U.findIndex((function(e){return e.id===B.id}))].raw);Z(Object(l.a)({},B,{name:e})),W(U.map((function(t){return t.id===B.id?Object(l.a)({},t,{name:e}):t})))}},"\u5fa9\u539f")),r.a.createElement(d.a,null,r.a.createElement(u.a,{type:"primary",icon:r.a.createElement(w.a,null),onClick:function(){_();var e=function(e){console.log(e);for(var t="",n=0;n<e.length;++n){var a=e[n];if("vmess"===a.type){var r=JSON.parse(JSON.stringify(a.json));r.ps=a.name,t+="vmess://"+K(JSON.stringify(r))}else if("trojan"===a.type){var c=a.json.search("#");t+=a.json.slice(0,c)+"#"+encodeURIComponent(a.name)}else{if("ss"!==a.type)continue;var o=a.json.search("#");t+="ss://"+a.json.slice(0,o)+"#"+encodeURIComponent(a.name)}n+1<e.length&&(t+="\n")}return console.log(K(t)),F(K(t)),y.a.success("\u65b0\u93c8\u63a5\u5df1\u751f\u6210"),K(t)}(U);R(e)}},"\u4fdd\u5b58")),r.a.createElement(d.a,null,r.a.createElement(u.a,{type:"primary",icon:r.a.createElement(O.a,null)},"\u532f\u51fa"))))),r.a.createElement(d.a,{span:12},r.a.createElement(m.a,null,r.a.createElement(e,{rows:4,onChange:function(e){R(e.target.value),Y(e.target.value)&&D(!1)},value:A,style:{marginBottom:16}}),r.a.createElement(u.a,{type:"primary",block:!0,onClick:function(){var e=$;R(e),Y(e)&&D(!1)}},"\u5f9e\u526a\u8cbc\u7248\u5c0e\u5165"))))),r.a.createElement(n,null,r.a.createElement(f.a,{justify:"center",style:{marginTop:"50vh"}},"Created by\xa0 ",r.a.createElement("a",{href:"https:www.phlinhng.com"},"phlinhng"),". \xa0All rights reserved."))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[117,1,2]]]);
//# sourceMappingURL=main.f19f2569.chunk.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(5970)}])},5970:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSP:function(){return s}});var i=e(5893),u=e(7294);let a=async()=>{let t=await fetch("https://api.thecatapi.com/v1/images/search"),n=await t.json();return n[0]},r=t=>{let{initialCatImageUrl:n}=t,[e,r]=(0,u.useState)(n),s=async()=>{let t=await a();r(t.url)};return(0,i.jsxs)("div",{children:[(0,i.jsx)("button",{onClick:s,children:"きょうのにゃんこ\uD83D\uDE3A"}),(0,i.jsx)("div",{style:{marginTop:8},children:(0,i.jsx)("img",{src:e,width:500,height:"auto"})})]})};var s=!0;n.default=r}},function(t){t.O(0,[774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);
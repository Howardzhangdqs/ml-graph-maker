import{d as f,j as m,g as l,k as u,m as k,l as B,o as p,c as _,f as b,p as h,_ as v,h as x}from"./index-v9fQkra3.js";import{r as y,B as g,M as z,n as M,N as $}from"./NormalModule-BIgHA59H.js";const C=f({__name:"Functional",props:{name:{default:"\\mathcal{F}"},color:{default:"#fff"},math:{type:Boolean,default:!0}},setup(s,{expose:n}){m(e=>({a7101da0:t.color,"4fb5feda":`${r.value}px`}));const t=s,a=l(),r=l(1e3);u(()=>{const e=M(()=>{const i=a.value.$el;r.value=Math.max(i.offsetWidth??0,i.offsetHeight??0)??0}),d=new ResizeObserver(e);window.addEventListener("resize",e),e(),d.observe(a.value.$el)});const o=l(),c=k([]);return u(()=>{B(y(o.value,()=>{const e=o.value.getBoundingClientRect();c.length=0,g(e,c)}))}),n({keypoints:c,el:o}),(e,d)=>(p(),_("div",null,[b("div",{class:"functional-module",ref_key:"self",ref:o},[h(z,{content:t.name,math:t.math,ref_key:"mathDisplay",ref:a},null,8,["content","math"])],512)]))}}),D=v(C,[["__scopeId","data-v-6080cbd2"]]),F={class:"block-module"},N=f({__name:"Block",props:{color:{default:"#ff01"}},setup(s){m(t=>({"71a5a3a3":n.color}));const n=s;return(t,a)=>(p(),_("div",F,[x(t.$slots,"default",{},()=>[h($)],!0)]))}}),E=v(N,[["__scopeId","data-v-c4517b0d"]]);export{E as B,D as F};
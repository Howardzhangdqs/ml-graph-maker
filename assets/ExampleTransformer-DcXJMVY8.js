import{N as m,n as z,K as t}from"./NormalModule-CNffFcEc.js";import{P as le}from"./PositionalEncoding-CZEbD13H.js";import{B as re,l as ie}from"./Block-rZPjTf6H.js";import{_ as u,v as S,l as K}from"./vSameWidth-DMZsxKkA.js";import{T as A,F as M,a as y,r as se,D as n}from"./resizeSvg-CnbPSCAH.js";import{_ as ue,o as h,c as x,h as de,d as q,g as o,s as R,p as e,w as a,q as O,F as V,v as $,u as C}from"./index-KutmUbA1.js";const me={},fe={class:"block-container"};function pe(D,c){return h(),x("div",fe,[de(D.$slots,"default",{},void 0,!0)])}const L=ue(me,[["render",pe],["__scopeId","data-v-ceedbfea"]]),ce=q({__name:"ExampleTransformerEncoder",setup(D,{expose:c}){const k=o(),d=o(),v=o(),f=o(),p=o(),_=o(),b=o(),g=o(),r=o();return R(z(()=>{var w,E,l,i,N,P,H,T,I,B;se(r,k),n(r.value,t(((w=g.value)==null?void 0:w.keypoints)??[]).top,t(((E=p.value)==null?void 0:E.keypoints)??[]).bottom,"direct"),n(r.value,t(((l=p.value)==null?void 0:l.keypoints)??[]).top,t(((i=f.value)==null?void 0:i.keypoints)??[]).bottom,"direct");const s=t(((N=v.value)==null?void 0:N.keypoints)??[]);n(r.value,t(((P=f.value)==null?void 0:P.keypoints)??[]).top,s.bottom,"direct"),n(r.value,[s.bottom[0],s.bottom[1]+20],[s.bottom[0]+40,s.bottom[1]],[],void 0,void 0,!1),n(r.value,[s.bottom[0],s.bottom[1]+20],[s.bottom[0]-40,s.bottom[1]],[],void 0,void 0,!1),n(r.value,[s.bottom[0],s.bottom[1]+35],t(((H=_.value)==null?void 0:H.keypoints)??[]).left,[[-90,0]],void 0,void 0,!0),n(r.value,s.top,t(((T=d.value)==null?void 0:T.keypoints)??[]).bottom,"direct",void 0,void 0,!0);const F=t(((I=d.value)==null?void 0:I.keypoints)??[]).bottom;n(r.value,[F[0],F[1]+18],t(((B=b.value)==null?void 0:B.keypoints)??[]).left,[[-90,0]],void 0,void 0,!0)})),c({FeedForward:d}),(s,F)=>(h(),x(V,null,[e(y,{ref_key:"self",ref:k,gap:"0"},{default:a(()=>[e(u,{height:"2em"}),e(A,{style:O({position:"relative",transform:"translate(-116px, 187px)"}),name:"N\\times",math:""},null,8,["style"]),e(A,{style:O({position:"relative",transform:"translate(-114px, 303px)"}),name:"Positional<br>Encoding"},null,8,["style"]),e(re,null,{default:a(()=>[e(M,null,{default:a(()=>[e(u,{width:"1.3em"}),e(y,{gap:".5rem"},{default:a(()=>[e(m,{ref_key:"AddAndNorm2",ref:b,name:"Add & Norm"},null,512),e(m,{ref_key:"FeedForward",ref:d,name:"Feed Forward"},null,512),e(u),e(m,{ref_key:"AddAndNorm1",ref:_,name:"Add & Norm"},null,512),e(m,{ref_key:"MultiHeadAttention",ref:v,name:"Multi-Head<br>Attention"},null,512),e(u,{height:"2em"})]),_:1})]),_:1})]),_:1}),e(L,null,{default:a(()=>[e(M,null,{default:a(()=>[e(u,{width:"1.3em"}),e(y,{gap:".5rem"},{default:a(()=>[e(le,{ref_key:"PositionalEncode",ref:f,style:{margin:"auto",width:"auto"}},null,512),e(m,{ref_key:"InputEmbedding",ref:p,name:"Input Embedding"},null,512),e(u),e(y,null,{default:a(()=>[e(A,{ref_key:"InputText",ref:g,name:"Inputs"},null,512),e(u,{height:"calc(1rem + 5px)"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},512),(h(),x("svg",{ref_key:"svg",ref:r,class:"mask"},null,512))],64))}}),ve=q({__name:"ExampleTransformerDecoder",setup(D,{expose:c}){const k=o(),d=o(),v=o(),f=o(),p=o(),_=o(),b=o(),g=o(),r=o(),s=o(),F=o(),w=o(),E=o(),l=o();return R(z(()=>{var P,H,T,I,B,W,j,G,J,Q,U,X,Y,Z,ee,te,oe,ne,ae;se(l,k),n(l.value,t(((P=s.value)==null?void 0:P.keypoints)??[]).top,t(((H=_.value)==null?void 0:H.keypoints)??[]).bottom,"direct"),n(l.value,t(((T=_.value)==null?void 0:T.keypoints)??[]).top,t(((I=p.value)==null?void 0:I.keypoints)??[]).bottom,"direct"),n(l.value,t(((B=p.value)==null?void 0:B.keypoints)??[]).top,t(((W=v.value)==null?void 0:W.keypoints)??[]).bottom,"direct"),n(l.value,t(((j=f.value)==null?void 0:j.keypoints)??[]).top,t(((G=d.value)==null?void 0:G.keypoints)??[]).bottom,"direct");const i=t(((J=v.value)==null?void 0:J.keypoints)??[]);n(l.value,[i.bottom[0],i.bottom[1]+20],[i.bottom[0]+40,i.bottom[1]],[],void 0,void 0,!1),n(l.value,[i.bottom[0],i.bottom[1]+20],[i.bottom[0]-40,i.bottom[1]],[],void 0,void 0,!1),n(l.value,[i.bottom[0],i.bottom[1]+35],t(((Q=b.value)==null?void 0:Q.keypoints)??[]).right,[[90,0]],void 0,void 0,!0),n(l.value,i.top,K(t(((U=f.value)==null?void 0:U.keypoints)??[]).bottom,[40,0]),[[0,-55]],void 0,void 0,!1);const N=t(((X=d.value)==null?void 0:X.keypoints)??[]).bottom;n(l.value,[N[0],N[1]+18],t(((Y=r.value)==null?void 0:Y.keypoints)??[]).right,[[90,0]],void 0,void 0,!0),n(l.value,t(((Z=d.value)==null?void 0:Z.keypoints)??[]).top,t(((ee=E.value)==null?void 0:ee.keypoints)??[]).bottom,"direct"),n(l.value,t(((te=E.value)==null?void 0:te.keypoints)??[]).top,t(((oe=w.value)==null?void 0:oe.keypoints)??[]).bottom,"direct"),n(l.value,t(((ne=w.value)==null?void 0:ne.keypoints)??[]).top,t(((ae=F.value)==null?void 0:ae.keypoints)??[]).bottom,"direct")})),c({MultiHeadAttention:f}),(i,N)=>(h(),x(V,null,[e(y,{ref_key:"self",ref:k,gap:"0"},{default:a(()=>[e(L,null,{default:a(()=>[e(M,null,{default:a(()=>[e(y,{gap:"0"},{default:a(()=>[e(y,{gap:"1rem"},{default:a(()=>[e(A,{name:"Output<br>Probabilities",ref_key:"OutputProbabilities",ref:F},null,512),$(e(m,{ref_key:"Softmax",ref:w,name:"Softmax"},null,512),[[C(S),"Output Probabilities"]]),$(e(m,{ref_key:"Linear",ref:E,name:"Linear"},null,512),[[C(S),"Output Probabilities"]])]),_:1}),e(u,{height:".5rem"})]),_:1}),e(u,{width:"1.3em"})]),_:1})]),_:1}),e(A,{style:O({position:"absolute",transform:"translate(116px, 349px)"}),name:"\\times N",math:""},null,8,["style"]),e(A,{style:O({position:"absolute",transform:"translate(114px, 570px)"}),name:"Positional<br>Encoding"},null,8,["style"]),e(re,null,{default:a(()=>[e(M,null,{default:a(()=>[e(y,{gap:".5rem"},{default:a(()=>[$(e(m,{ref_key:"AddAndNorm3",ref:r,name:"Add & Norm"},null,512),[[C(S),"Output Probabilities"]]),e(m,{ref_key:"FeedForward",ref:d,name:"Feed Forward"},null,512),e(u),e(m,{ref_key:"AddAndNorm2",ref:g,name:"Add & Norm"},null,512),e(m,{ref_key:"MultiHeadAttention",ref:f,name:"Multi-Head<br>Attention"},null,512),e(u),e(m,{ref_key:"AddAndNorm1",ref:b,name:"Add & Norm"},null,512),e(m,{ref_key:"MaskedMultiHeadAttention",ref:v,name:"Masked<br>Multi-Head<br>Attention"},null,512),e(u,{height:"2em"})]),_:1}),e(u,{width:"1.3em"})]),_:1})]),_:1}),e(L,null,{default:a(()=>[e(M,null,{default:a(()=>[e(y,{gap:".5rem"},{default:a(()=>[e(le,{ref_key:"PositionalEncode",ref:p,style:{margin:"auto",width:"auto",transform:"rotate(180deg)"}},null,512),e(m,{ref_key:"InputEmbedding",ref:_,name:"Input Embedding"},null,512),e(u),e(A,{ref_key:"InputText",ref:s,name:"Outputs<br>(shifted right)"},null,512)]),_:1}),e(u,{width:"1.3em"})]),_:1})]),_:1})]),_:1},512),(h(),x("svg",{ref_key:"svg",ref:l,class:"mask"},null,512))],64))}}),he=q({__name:"ExampleTransformer",setup(D){const c=o(),k=o(),d=o(),v=o();return R(z(()=>{var f,p,_,b,g,r;c.value.innerHTML="",c.value.style.height=`${(f=k.value.el.parentElement)==null?void 0:f.clientHeight}px`,ie("AddAndNorm2",(p=d.value)==null?void 0:p.FeedForward.keypoints),n(c.value,t(((_=d.value)==null?void 0:_.FeedForward.keypoints)??[]).top,t(((b=v.value)==null?void 0:b.MultiHeadAttention.keypoints)??[]).bottom,[[0,-63],[99,0],[0,93]]),n(c.value,K(t(((g=d.value)==null?void 0:g.FeedForward.keypoints)??[]).top,[120,30]),K(t(((r=v.value)==null?void 0:r.MultiHeadAttention.keypoints)??[]).bottom,[-40,0]),[],void 0,void 0,!1)})),(f,p)=>(h(),x(V,null,[e(M,{style:{AlignItems:"flex-end"},ref_key:"self",ref:k},{default:a(()=>[e(ce,{ref_key:"TransformerEncoder",ref:d},null,512),e(ve,{ref_key:"TransformerDncoder",ref:v},null,512)]),_:1},512),(h(),x("svg",{ref_key:"svg",ref:c,class:"mask"},null,512))],64))}});export{he as default};

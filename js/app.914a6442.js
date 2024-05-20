(function(){"use strict";var s={215:function(s,a,t){var l=t(5130),n=t(6768);function c(s,a,t,l,c,i){const e=(0,n.g2)("MVC_Menu"),r=(0,n.g2)("router-view"),d=(0,n.g2)("MVC_Footer");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(e),(0,n.bF)(r),(0,n.bF)(d)],64)}const i={class:"header-element main"},e={class:"top_info"},r={class:"top_inner"},d=(0,n.Lk)("p",null,"영화 커뮤니티 무비캣입니다.",-1),o={class:"top_right_menu"},p={class:"body-area"},v={class:"gnb-element"},u={class:"logo-area"},k=(0,n.Lk)("span",{class:"movie"},"MOVIE",-1),b=(0,n.Lk)("span",{class:"cat"},"CAT",-1),L=(0,n.Fv)('<ul class="gnb-area" id="gnb"><li class="gnb_menu menu1"><a href="#">영화리뷰</a></li><li class="gnb_menu menu2"><a href="#">영화토크</a></li><li class="gnb_menu menu3"><a href="#">생활토크</a></li><li class="gnb_menu menu4"><a href="#">영화평점</a></li></ul><div class="input-search"><input type="text" class="main-input-search-pc" name="" id="" placeholder="검색어를 입력하세요." title="검색어 입력" autocomplete="off"><button type="submit" class="btn-search">검색버튼</button></div>',2);var f={__name:"MVC_Menu",setup(s){const a=()=>{const s=document.querySelector(".body-area"),a=window.scrollY;a>=60?s.classList.add("sticky"):s.classList.remove("sticky")};document.addEventListener("DOMContentLoaded",(()=>{window.addEventListener("scroll",a)}));const t=()=>{const s=document.querySelector(".body-area");s&&window.innerWidth<=1280&&s.classList.remove("sticky")};return window.addEventListener("resize",t),t(),(s,a)=>{const t=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",i,[(0,n.Lk)("div",e,[(0,n.Lk)("div",r,[d,(0,n.Lk)("div",o,[(0,n.Lk)("ul",null,[(0,n.Lk)("li",null,[(0,n.bF)(t,{to:"/login"},{default:(0,n.k6)((()=>[(0,n.eW)("로그인")])),_:1})]),(0,n.Lk)("li",null,[(0,n.bF)(t,{to:"/join"},{default:(0,n.k6)((()=>[(0,n.eW)("회원가입")])),_:1})])])])])]),(0,n.Lk)("div",p,[(0,n.Lk)("div",v,[(0,n.Lk)("h1",u,[(0,n.bF)(t,{to:"/"},{default:(0,n.k6)((()=>[k,b])),_:1})]),L])])])}}};const m=f;var h=m;const g={id:"footer"},_=(0,n.Fv)('<div class="top"><div class="inner"><div class="bi"><span class="movie">MOVIE</span><span class="cat">CAT</span></div></div></div><div class="bot"><div class="inner"><div class="left"><span class="copyright">Copyright © 2024.MOVIE CAT All rights reserved.</span></div></div><div class="inner"><div class="left"><div><span class="by">front-end. 임시연</span><span class="github"><a href="https://github.com/devmango1128">https://github.com/devmango1128</a></span><span class="mail"><a href="mailto:devmango1128@gmail.com"> devmango1128@gmail.com </a></span></div><div><span class="by">back-end. 김강산</span><span class="github"><a href="https://github.com/devstar1223">https://github.com/devstar1223</a></span><span class="mail"><a href="mailto:devstar1223@gmail.com"> devstar1223@gmail.com </a></span></div></div></div></div>',2),y=[_];function w(s,a,t,l,c,i){return(0,n.uX)(),(0,n.CE)("footer",g,y)}var x={},C=t(1241);const F=(0,C.A)(x,[["render",w]]);var j=F,E={name:"App",components:{MVC_Menu:h,MVC_Footer:j}};const O=(0,C.A)(E,[["render",c]]);var M=O,A=t(1387);const I={class:"board-contents"},X={class:"inner-wrap"},V={class:"block review_box"},W={class:"board-area"},T=(0,n.Fv)('<div class="board-title"><span class="title"> 영화 리뷰 </span><span class="more"><a>+more</a></span></div><div class="board-content"><table><colgroup><col style="width:88px;"><col><col style="width:85px;"><col style="width:90px;"><col style="width:95px;"></colgroup><tbody><tr class="popularity"><td colspan="2" class="tit"><div class="board-tag"><strong class="board-tag-txt"><span class="inner">인기</span></strong></div><div class="board-list"><div class="inner_list"><a href="#" class="article"><span> 범죄도시4 완전 재밌게 봤음!!! 니네들도 꼭 봐!! </span></a><a href="#" class="cmt"><span> [<em>259</em>] </span></a></div></div></td><td class="writer"> 마석도 </td><td class="ro"><span class="rcmdtn">999+</span><span class="">/</span><span class="objc">30</span></td><td class="date">16:29</td></tr><tr class="popularity"><td colspan="2" class="tit"><div class="board-tag"><strong class="board-tag-txt"><span class="inner">인기</span></strong></div><div class="board-list"><div class="inner_list"><a href="#" class="article"><span class="list-new">N</span><span> 시민덕희 실화를 바탕으로 해서 그런지 몰입감이 장난아니였다. </span></a><a href="#" class="cmt"><span> [<em>10</em>] </span></a></div></div></td><td class="writer"> 김강산 </td><td class="ro"><span class="rcmdtn">999+</span><span class="">/</span><span class="objc">999+</span></td><td class="date">2024.05.07</td></tr><tr class="popularity"><td colspan="2" class="tit"><div class="board-tag"><strong class="board-tag-txt"><span class="inner">인기</span></strong></div><div class="board-list"><div class="inner_list"><a href="#" class="article"><span> 범죄도시 난 재미없더라 </span></a><a href="#" class="cmt"><span> [<em>20</em>] </span></a></div></div></td><td class="writer"> 곽철용 </td><td class="ro"><span class="rcmdtn">1</span><span class="">/</span><span class="objc">0</span></td><td class="date">2024.02.19</td></tr></tbody></table></div>',2),K={class:"board-content"},N=(0,n.Lk)("colgroup",null,[(0,n.Lk)("col",{style:{width:"88px"}}),(0,n.Lk)("col"),(0,n.Lk)("col",{style:{width:"85px"}}),(0,n.Lk)("col",{style:{width:"90px"}}),(0,n.Lk)("col",{style:{width:"95px"}})],-1),S=(0,n.Lk)("td",{colspan:"2",class:"tit"},[(0,n.Lk)("div",{class:"board-list"},[(0,n.Lk)("div",{class:"inner_list"},[(0,n.Lk)("a",{href:"#",class:"article"},[(0,n.Lk)("span",{class:"list-new"},"N"),(0,n.Lk)("span",null," 범죄도시4 완전 재밌게 봤음!!! 니네들도 꼭 봐!! ")]),(0,n.Lk)("a",{href:"#",class:"cmt"},[(0,n.Lk)("span",null,[(0,n.eW)(" ["),(0,n.Lk)("em",null,"259"),(0,n.eW)("] ")])])])])],-1),q=(0,n.Lk)("td",{class:"writer"}," 경산남부준혁 ",-1),P=(0,n.Lk)("td",{class:"ro"},[(0,n.Lk)("span",{class:"rcmdtn"},"999+"),(0,n.Lk)("span",{class:""},"/"),(0,n.Lk)("span",{class:"objc"},"80")],-1),z=(0,n.Lk)("td",{class:"date"},"16:29",-1),D=[S,q,P,z],Y={class:"block review_box"},B={class:"board-area"},G=(0,n.Fv)('<div class="board-title"><span class="title"> 영화 토크 </span><span class="more"><a>+more</a></span></div><div class="board-content"><table><colgroup><col style="width:88px;"><col><col style="width:85px;"><col style="width:90px;"><col style="width:95px;"></colgroup><tbody><tr class="popularity"><td colspan="2" class="tit"><div class="board-tag"><strong class="board-tag-txt"><span class="inner">인기</span></strong></div><div class="board-list"><div class="inner_list"><a href="#" class="article"><span> 범죄도시4 완전 재밌게 봤음!!! 니네들도 꼭 봐!! </span></a><a href="#" class="cmt"><span> [<em>259</em>] </span></a></div></div></td><td class="writer"> 마석도 </td><td class="ro"><span class="rcmdtn">999+</span><span class="">/</span><span class="objc">30</span></td><td class="date">16:29</td></tr><tr class="popularity"><td colspan="2" class="tit"><div class="board-tag"><strong class="board-tag-txt"><span class="inner">인기</span></strong></div><div class="board-list"><div class="inner_list"><a href="#" class="article"><span class="list-new">N</span><span> 시민덕희 실화를 바탕으로 해서 그런지 몰입감이 장난아니였다. </span></a><a href="#" class="cmt"><span> [<em>10</em>] </span></a></div></div></td><td class="writer"> 김강산 </td><td class="ro"><span class="rcmdtn">999+</span><span class="">/</span><span class="objc">999+</span></td><td class="date">2024.05.07</td></tr><tr class="popularity"><td colspan="2" class="tit"><div class="board-tag"><strong class="board-tag-txt"><span class="inner">인기</span></strong></div><div class="board-list"><div class="inner_list"><a href="#" class="article"><span> 범죄도시 난 재미없더라 </span></a><a href="#" class="cmt"><span> [<em>20</em>] </span></a></div></div></td><td class="writer"> 곽철용 </td><td class="ro"><span class="rcmdtn">1</span><span class="">/</span><span class="objc">0</span></td><td class="date">2024.02.19</td></tr></tbody></table></div>',2),H={class:"board-content"},J=(0,n.Lk)("colgroup",null,[(0,n.Lk)("col",{style:{width:"88px"}}),(0,n.Lk)("col"),(0,n.Lk)("col",{style:{width:"85px"}}),(0,n.Lk)("col",{style:{width:"90px"}}),(0,n.Lk)("col",{style:{width:"95px"}})],-1),Q=(0,n.Lk)("td",{colspan:"2",class:"tit"},[(0,n.Lk)("div",{class:"board-list"},[(0,n.Lk)("div",{class:"inner_list"},[(0,n.Lk)("a",{href:"#",class:"article"},[(0,n.Lk)("span",null," 범죄도시4 볼만하냐? ")]),(0,n.Lk)("a",{href:"#",class:"cmt"},[(0,n.Lk)("span",null,[(0,n.eW)(" ["),(0,n.Lk)("em",null,"259"),(0,n.eW)("] ")])])])])],-1),R=(0,n.Lk)("td",{class:"writer"}," 서울남부강산 ",-1),U=(0,n.Lk)("td",{class:"ro"},[(0,n.Lk)("span",{class:"rcmdtn"},"99"),(0,n.Lk)("span",{class:""},"/"),(0,n.Lk)("span",{class:"objc"},"80")],-1),Z=(0,n.Lk)("td",{class:"date"},"2024.05.18",-1),$=[Q,R,U,Z],ss={class:"inner-wrap"},as={class:"star"},ts={class:"board-area"},ls=(0,n.Lk)("div",{class:"board-title"},[(0,n.Lk)("span",{class:"title"}," 영화 평점 "),(0,n.Lk)("span",{class:"more"},[(0,n.Lk)("a",null,"+more")])],-1),ns={class:"board-content"},cs=(0,n.Lk)("colgroup",null,[(0,n.Lk)("col"),(0,n.Lk)("col",{style:{width:"150px"}}),(0,n.Lk)("col",{style:{width:"85px"}}),(0,n.Lk)("col",{style:{width:"90px"}}),(0,n.Lk)("col",{style:{width:"95px"}})],-1),is=(0,n.Lk)("td",{class:"tit"},[(0,n.Lk)("div",{class:"board-list"},[(0,n.Lk)("div",{class:"inner_list"},[(0,n.Lk)("a",{href:"#",class:"article"},[(0,n.Lk)("span",null," [그녀가 죽었다] 연출과 스토리 구성이 세련되고 감각적임 배우들 연기도 좋아서 몰입감이 높습니다. ")])])])],-1),es=(0,n.Lk)("td",{class:"star-grade"},[(0,n.Lk)("div",{class:"lego_movie_pure_star"},[(0,n.Lk)("div",{class:"area_icon_box"},[(0,n.Lk)("div",{class:"area_card"},[(0,n.Lk)("span",{class:"play_star state_fill"}),(0,n.Lk)("span",{class:"play_star state_fill"})]),(0,n.Lk)("div",{class:"area_card"},[(0,n.Lk)("span",{class:"play_star state_fill"}),(0,n.Lk)("span",{class:"play_star state_fill"})]),(0,n.Lk)("div",{class:"area_card"},[(0,n.Lk)("span",{class:"play_star state_fill"}),(0,n.Lk)("span",{class:"play_star state_fill"})]),(0,n.Lk)("div",{class:"area_card"},[(0,n.Lk)("span",{class:"play_star state_fill"}),(0,n.Lk)("span",{class:"play_star state_fill"})]),(0,n.Lk)("div",{class:"area_card"},[(0,n.Lk)("span",{class:"play_star state_fill"}),(0,n.Lk)("span",{class:"play_star"})])]),(0,n.Lk)("div",{class:"area_text_box"},[(0,n.Lk)("span",{class:"blind"},"별점(10점 만점 중)"),(0,n.eW)("9")])])],-1),rs=(0,n.Lk)("td",{class:"writer"}," 서울남부강산 ",-1),ds=(0,n.Lk)("td",{class:"ro"},[(0,n.Lk)("span",{class:"rcmdtn"},"99"),(0,n.Lk)("span",{class:""},"/"),(0,n.Lk)("span",{class:"objc"},"80")],-1),os=(0,n.Lk)("td",{class:"date"},"2024.05.18",-1),ps=[is,es,rs,ds,os];function vs(s,a,t,l,c,i){return(0,n.uX)(),(0,n.CE)("section",I,[(0,n.Lk)("div",X,[(0,n.Lk)("div",V,[(0,n.Lk)("div",W,[T,(0,n.Lk)("div",K,[(0,n.Lk)("table",null,[N,(0,n.Lk)("tbody",null,[((0,n.uX)(),(0,n.CE)(n.FK,null,(0,n.pI)(7,(s=>(0,n.Lk)("tr",{key:s,class:"general"},D))),64))])])])])]),(0,n.Lk)("div",Y,[(0,n.Lk)("div",B,[G,(0,n.Lk)("div",H,[(0,n.Lk)("table",null,[J,(0,n.Lk)("tbody",null,[((0,n.uX)(),(0,n.CE)(n.FK,null,(0,n.pI)(7,(s=>(0,n.Lk)("tr",{key:s,class:"general"},$))),64))])])])])])]),(0,n.Lk)("div",ss,[(0,n.Lk)("div",as,[(0,n.Lk)("div",ts,[ls,(0,n.Lk)("div",ns,[(0,n.Lk)("table",null,[cs,(0,n.Lk)("tbody",null,[((0,n.uX)(),(0,n.CE)(n.FK,null,(0,n.pI)(8,(s=>(0,n.Lk)("tr",{key:s,class:"general"},ps))),64))])])])])])])])}var us={};const ks=(0,C.A)(us,[["render",vs]]);var bs=ks;const Ls={class:"board-contents"},fs=(0,n.Fv)('<div class="inner-wrap"><div class="login_box"><div class="title" id="pageCont"><h1>로그인</h1></div><div class="scanContents"><div class="login-box-wrap"><div class="login-inbox"><div><div class="input-inbox mg-b5"><label for="userId" class="">아이디</label><input type="text" id="userId" name="userId" maxlength="16" placeholder="아이디를 입력하세요" class=""></div><div class="input-inbox"><label for="password" class="">비밀번호</label><input type="password" id="password" name="password" maxlength="16" placeholder="비밀번호를 입력하세요" class=""></div></div><div><p class="ipt_bottom_info mg-t10"><input type="checkbox" class="id-save-chk"><label for="idSaveFlag" class="id-save-chk">아이디 저장</label></p></div></div><div class="btn_login_wrap"><button type="submit" class="btn_login" id="log.login"><span class="btn_text">로그인</span></button></div><div><ul class="find_wrap" id="find_wrap"><li><a target="_blank" href="#" class="find_text">비밀번호 찾기</a></li><li><a target="_blank" href="#" class="find_text">아이디 찾기</a></li><li><a target="_blank" href="#" class="find_text">회원가입</a></li></ul></div><div><div class="sns-login"><ul class="sns-top-area"><li><a href="#" class="kakao border_round sns_shadow"><span class="kakao_img"> 카카오 로그인 </span></a></li><li><a href="#" class="naver border_round sns_shadow"><span class="naver_img">네이버 로그인</span></a></li></ul></div></div></div></div></div></div>',1),ms=[fs];function hs(s,a,t,l,c,i){return(0,n.uX)(),(0,n.CE)("section",Ls,ms)}var gs={};const _s=(0,C.A)(gs,[["render",hs]]);var ys=_s;function ws(s,a,t,l,c,i){return(0,n.uX)(),(0,n.CE)("div",null," join ")}var xs={};const Cs=(0,C.A)(xs,[["render",ws]]);var Fs=Cs;const js=[{path:"/",component:bs},{path:"/moviecat/",component:bs},{path:"/login",component:ys},{path:"/join",component:Fs}];var Es=(0,A.aE)({history:(0,A.LA)(),routes:js});const Os=(0,l.Ef)(M);Os.use(Es),Os.mount("#app")}},a={};function t(l){var n=a[l];if(void 0!==n)return n.exports;var c=a[l]={exports:{}};return s[l].call(c.exports,c,c.exports,t),c.exports}t.m=s,function(){var s=[];t.O=function(a,l,n,c){if(!l){var i=1/0;for(o=0;o<s.length;o++){l=s[o][0],n=s[o][1],c=s[o][2];for(var e=!0,r=0;r<l.length;r++)(!1&c||i>=c)&&Object.keys(t.O).every((function(s){return t.O[s](l[r])}))?l.splice(r--,1):(e=!1,c<i&&(i=c));if(e){s.splice(o--,1);var d=n();void 0!==d&&(a=d)}}return a}c=c||0;for(var o=s.length;o>0&&s[o-1][2]>c;o--)s[o]=s[o-1];s[o]=[l,n,c]}}(),function(){t.n=function(s){var a=s&&s.__esModule?function(){return s["default"]}:function(){return s};return t.d(a,{a:a}),a}}(),function(){t.d=function(s,a){for(var l in a)t.o(a,l)&&!t.o(s,l)&&Object.defineProperty(s,l,{enumerable:!0,get:a[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(s){if("object"===typeof window)return window}}()}(),function(){t.o=function(s,a){return Object.prototype.hasOwnProperty.call(s,a)}}(),function(){var s={524:0};t.O.j=function(a){return 0===s[a]};var a=function(a,l){var n,c,i=l[0],e=l[1],r=l[2],d=0;if(i.some((function(a){return 0!==s[a]}))){for(n in e)t.o(e,n)&&(t.m[n]=e[n]);if(r)var o=r(t)}for(a&&a(l);d<i.length;d++)c=i[d],t.o(s,c)&&s[c]&&s[c][0](),s[c]=0;return t.O(o)},l=self["webpackChunkmoviecat_front"]=self["webpackChunkmoviecat_front"]||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var l=t.O(void 0,[504],(function(){return t(215)}));l=t.O(l)})();
//# sourceMappingURL=app.914a6442.js.map
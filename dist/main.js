!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=function(e,t){e?t.animate([{transform:"rotate(-90deg)"},{transform:"rotate(0)"}],{duration:800,fill:"forwards"}):t.animate([{transform:"rotate(0)"},{transform:"rotate(-90deg)"}],{duration:800,fill:"forwards"})};var r=function(e,t){e?t.animate([{transform:"translateX(0)"},{transform:"translateX(-105%)"}],{duration:800,fill:"forwards"}):t.animate([{transform:"translateX(-105%)"},{transform:"translateX(0)"}],{duration:800,fill:"forwards"})};var i=function(e,t){e.animate([{transform:"translateX(-105%)"},{transform:"translateX(0)"}],{duration:800,fill:"forwards"}),t.animate([{transform:"rotate(-90deg)"},{transform:"rotate(0)"}],{duration:800,fill:"forwards"})};var d=function(e,t,n,a,r,i){let d=document.createElement("div");d.classList.add("book"),i.appendChild(d);let o=document.createElement("div");o.classList.add("bookData"),d.appendChild(o);let l=document.createElement("div");l.classList.add("author"),l.innerHTML=e,o.appendChild(l);let s=document.createElement("div");s.classList.add("space"),o.appendChild(s);let u=document.createElement("div");u.classList.add("title"),u.innerHTML=t,o.appendChild(u);let c=document.createElement("div");c.classList.add("space"),o.appendChild(c);let f=document.createElement("div");f.classList.add("title"),f.innerHTML=n,o.appendChild(f);let m=document.createElement("div");m.classList.add("space"),o.appendChild(m);let p=document.createElement("div");p.classList.add("title"),p.innerHTML=a,o.appendChild(p);let h=document.createElement("button");h.classList.add("bookStatusButton"),d.appendChild(h),h.addEventListener("click",()=>{p.innerHTML=r.changeBookStatus()});let v=document.createElement("button");v.classList.add("deleteBookButton"),d.appendChild(v),v.addEventListener("click",()=>{i.removeChild(d);let e=[];r=e,r=library[length.length-1],library[library.length-1]=e,library.pop()})};var o=function(e,t,n,a){let r=Object.create({changeBookStatus:function(){return"Reading"===this.isRead?(this.isRead="Completed",this.isRead):"Completed"===this.isRead?(this.isRead="Not Read Yet",this.isRead):"Not Read Yet"===this.isRead?(this.isRead="Reading",this.isRead):void 0}});return r.author=e,r.title=t,r.numberOfChapters=n,r.isRead=a,console.log(r),r};let l=[],s=document.querySelector(".library");let u=document.querySelector(".addBookButton"),c=document.querySelector(".animationLine"),f=!1;u.addEventListener("click",()=>{a(f,c),f=!f});let m=document.querySelector(".addBookForm");u.addEventListener("click",()=>{r(f,m)}),document.querySelector(".submitButton").addEventListener("click",()=>{i(m,c),f=!f}),m.addEventListener("submit",e=>{e.preventDefault();let t=m.author.value,n=m.title.value,a=m.numberOfChapters.value,r=m.status.value;var i;!function(e){l.length,l[l.length]=e}(o(t,n,a,r)),d((i=l)[i.length-1].author,i[i.length-1].title,i[i.length-1].numberOfChapters,i[i.length-1].isRead,i[i.length-1],s)})}]);
(self.webpackChunksngy_bab3=self.webpackChunksngy_bab3||[]).push([[5773],{5773:(t,e,n)=>{"use strict";n.r(e),n.d(e,{HomePageModule:()=>v});var i=n(6274),s=n(5401),o=n(4988),r=n(3991),u=n(1855),c=n(2755);const a=(0,n(8107).fo)("Browser",{web:()=>n.e(3853).then(n.bind(n,3853)).then(t=>new t.BrowserWeb)});var l=n(3606),h=n(8213);function g(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"ion-buttons",19),l.TgZ(1,"ion-button",6),l.NdJ("click",function(){return l.CHM(t),l.oxw(2).updateUserMenu()}),l._UZ(2,"ion-icon",20),l.qZA(),l.qZA()}}function d(t,e){if(1&t&&(l.TgZ(0,"ion-item"),l.TgZ(1,"ion-avatar",13),l._UZ(2,"img",14),l.qZA(),l.TgZ(3,"ion-label"),l.TgZ(4,"h3"),l._uU(5),l.qZA(),l.TgZ(6,"h4",15),l._uU(7),l.qZA(),l.TgZ(8,"h4",16),l._uU(9),l.qZA(),l.TgZ(10,"h4",17),l._uU(11),l.qZA(),l.qZA(),l.YNc(12,g,3,0,"ion-buttons",18),l.qZA()),2&t){const t=e.$implicit,n=l.oxw();l.xp6(5),l.Oqu(t.name),l.xp6(2),l.Oqu(t.menu),l.xp6(2),l.Oqu(t.cnt+"\uac1c"),l.xp6(2),l.Oqu(t.price.toLocaleString("ko-KR")+"\uc6d0"),l.xp6(1),l.Q6J("ngIf",t.name===n.userName)}}const p=(t,e)=>(0,u.mG)(void 0,void 0,void 0,function*(){yield c.K.set({key:t,value:e})}),m=t=>(0,u.mG)(void 0,void 0,void 0,function*(){yield c.K.remove({key:t})}),f=[{path:"",component:(()=>{class t{constructor(t,e,n,i,s,o){this.router=t,this.alertCtrl=e,this.toastCtrl=n,this.api=i,this.platform=s,this._zone=o,this.scrolling=!1,this.menuList=[],this.resetEveryValue(),this.setToday(),this.setUserName(),this.getMenuList(),this.getMenuInfo()}getValue(t){return(0,u.mG)(this,void 0,void 0,function*(){return yield c.K.get({key:t})})}resetEveryValue(){this.api.getApi("badal",this.today).subscribe(t=>{""==t&&(this.infoId="",m("infoId"),this.userId="",m("userId"),this.url="",m("url"),this.menu="",m("menu"),this.state="",m("state"),this.userMenu="",m("userMenu"),this.count=null,m("count"),this.price=null,m("price"))},t=>{console.log(JSON.stringify(t))}),this.api.getApi("menu",this.today).subscribe(t=>{""==t&&(this.infoId="",m("infoId"),this.userId="",m("userId"),this.url="",m("url"),this.menu="",m("menu"),this.state="",m("state"),this.userMenu="",m("userMenu"),this.count=null,m("count"),this.price=null,m("price"))},t=>{console.log(JSON.stringify(t))})}setToday(){const t=new Date,e=t.getFullYear(),n=("0"+(t.getMonth()+1)).slice(-2),i=("0"+t.getDate()).slice(-2),s=t.getHours();this.today=s<16?"L"+e+n+i:"D"+e+n+i}setUserName(){this.getValue("userName").then(t=>{this.userName=t.value})}setInfoValue(){this.getValue("infoId").then(t=>{t.value&&(this.infoId=t.value)}),this.getValue("url").then(t=>{this.url=t.value?t.value:""}),this.getValue("menu").then(t=>{this.menu=t.value?t.value:""}),this.getValue("state").then(t=>{this.state=t.value?t.value:""})}setListValue(){this.getValue("userId").then(t=>{this.userId=t.value?t.value:""}),this.getValue("userMenu").then(t=>{this.userMenu=t.value?t.value:""}),this.getValue("count").then(t=>{this.count=t.value?t.value:null}),this.getValue("price").then(t=>{this.price=t.value?t.value:null})}getMenuInfo(){this.api.getApi("badal",this.today).subscribe(t=>{if(""==t)return this.infoId="",p("infoId",this.infoId),!1;this.infoId=t[0].id,p("infoId",this.infoId),this.url=t[0].url,p("url",this.url),this.menu=t[0].menu,p("menu",this.menu),this.state=t[0].etc,p("state",this.state)},t=>{console.log(JSON.stringify(t))}),this.setInfoValue()}getMenuList(){this.api.getApi("menu",this.today).subscribe(t=>{if(""==t)return!1;this.menuList=JSON.parse(JSON.stringify(t)),this.menuList.forEach(t=>{t.name===this.userName&&(this.userId=t.id,p("userId",this.userId),this.userMenu=t.menu,p("userMenu",this.userMenu),this.count=t.cnt,p("count",this.count),this.price=t.price,p("price",this.price))})},t=>{console.log(JSON.stringify(t))}),this.setListValue()}postMenuList(){this.api.postApi("menu",{day:this.today,name:this.userName,menu:this.userMenu,cnt:this.count,price:this.price}).subscribe(t=>{console.log(JSON.stringify(t))},t=>{console.log(JSON.stringify(t))}),this.getMenuList()}putMenuInfo(){this.infoId?this.api.putApi("badal",this.infoId,{name:this.userName,url:this.url,menu:this.menu,etc:this.state}).subscribe(t=>{console.log(JSON.stringify(t))},t=>{console.log(JSON.stringify(t))}):this.api.postApi("badal",{day:this.today,grp:"sky",name:this.userName,url:this.url,menu:this.menu,etc:this.state}).subscribe(t=>{console.log(JSON.stringify(t))},t=>{console.log(JSON.stringify(t))}),this.getMenuInfo()}putMenuList(){this.api.putApi("menu",this.userId,{menu:this.userMenu,cnt:this.count,price:this.price}).subscribe(t=>{console.log(JSON.stringify(t))},t=>{console.log(JSON.stringify(t))}),this.getMenuList()}goResult(){this.router.navigate(["/result"])}goLogin(){this.router.navigate(["/login"])}goLink(){this.url?a.open({url:this.url}):alert("\uc544\uc9c1 \ub9c1\ud06c\uac00 \uc785\ub825\ub418\uc9c0 \uc54a\uc558\ub124\uc694.")}onChange(t){this.userMenu=t.target.value}onKeyUp(t){13===t.keyCode&&this.createUserMenu()}onRefresh(t){this.pageReload(),setTimeout(()=>{t.target.complete()},500)}scrollStart(){this._zone.run(()=>{this.scrolling=!0})}scrollEnd(){this._zone.run(()=>{this.scrolling=!1})}scrollDown(){let t=this;setTimeout(()=>{t.content.scrollToBottom(0)},500)}pageReload(){this.getMenuInfo(),this.getMenuList(),location.reload()}updateMenuInfo(){return(0,u.mG)(this,void 0,void 0,function*(){if("\uc120\ud0dd\uc644\ub8cc"===this.state)return this.noticeToast(`${this.state} \uc0c1\ud0dc\uc608\uc694.`),!1;const t=yield this.alertCtrl.create({cssClass:"updateMenuInfo",header:"\uc624\ub298\uc758 \uba54\ub274 \uc124\uc815\ud558\uae30",subHeader:"\uba54\ub274\ub294 \ub418\ub3c4\ub85d \uac04\ub2e8\ud558\uac8c \uc785\ub825\ud574\uc8fc\uc138\uc694.",inputs:[{id:"url",name:"url",value:this.url,placeholder:"\ub9c1\ud06c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."},{id:"menu",name:"menu",type:"text",value:this.menu,placeholder:"\uc0c1\ub2e8\uc5d0 \ud45c\uc2dc\ud560 \uba54\ub274\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."}],buttons:[{text:"\ucde8\uc18c\ud558\uae30",cssClass:"cancel",handler:()=>{}},{text:"\ud655\uc778\ud558\uae30",cssClass:"confirm",handler:t=>t.url?t.menu?(this.url=t.url,p("url",this.url),this.menu=t.menu,p("menu",this.menu),this.state="\uc120\ud0dd\uc911",p("state",this.state),this.putMenuInfo(),void this.pageReload()):(this.noticeToast("\uc0c1\ub2e8\uc5d0 \ud45c\uc2dc\ud560 \uba54\ub274\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1):(this.noticeToast("\ub9c1\ud06c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1)}]});yield t.present().then(t=>{document.getElementById("menu").setAttribute("maxLength","10")})})}createUserMenu(){return(0,u.mG)(this,void 0,void 0,function*(){if(""===this.state)return this.noticeToast("\ud654\uba74 \uc0c1\ub2e8\uc5d0\uc11c \uba54\ub274\ub97c \uc124\uc815\ud574\uc8fc\uc138\uc694."),!1;if("\uc120\ud0dd\uc644\ub8cc"===this.state)return this.noticeToast(`${this.state} \uc0c1\ud0dc\uc608\uc694.`),!1;if(this.userId)return this.noticeToast("\uc774\ubbf8 \uba54\ub274\ub97c \uc120\ud0dd\ud558\uc168\uc5b4\uc694."),!1;if(!this.userMenu)return this.noticeToast("\uc8fc\ubb38\ud560 \uba54\ub274\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1;const t=yield this.alertCtrl.create({cssClass:"createUserMenu",header:"\ub0b4 \uba54\ub274 \uc785\ub825\ud558\uae30",subHeader:"1\uc778\ubd84\uc774\ub77c\uba74 \uc218\ub7c9\uc740 \uc0dd\ub7b5\ud558\uc154\ub3c4 \uc88b\uc544\uc694.",inputs:[{id:"count",name:"count",type:"number",placeholder:"\uc218\ub7c9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."},{id:"price",name:"price",type:"number",placeholder:"\uac00\uaca9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}],buttons:[{text:"\ucde8\uc18c\ud558\uae30",cssClass:"cancel",handler:()=>{}},{text:"\ud655\uc778\ud558\uae30",cssClass:"confirm",handler:t=>{if(this.count=t.count?t.count:1,p("count",this.count),!t.price)return this.noticeToast("\uac00\uaca9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1;this.price=t.price,p("price",this.price),this.postMenuList(),this.pageReload(),this.scrollDown()}}]});yield t.present()})}updateUserMenu(){return(0,u.mG)(this,void 0,void 0,function*(){if("\uc120\ud0dd\uc644\ub8cc"===this.state)return this.noticeToast(`${this.state} \uc0c1\ud0dc\uc608\uc694!`),!1;const t=yield this.alertCtrl.create({cssClass:"updateUserMenu",header:"\ub0b4 \uba54\ub274 \ubcc0\uacbd\ud558\uae30",subHeader:"\ubcc0\uacbd\ud560 \uba54\ub274\uc758 \uc815\ubcf4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",inputs:[{id:"userMenu",name:"userMenu",type:"text",value:this.userMenu,placeholder:"\uba54\ub274\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."},{id:"count",name:"count",type:"number",value:this.count,placeholder:"\uc218\ub7c9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."},{id:"price",name:"price",type:"number",value:this.price,placeholder:"\uac00\uaca9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}],buttons:[{text:"\ucde8\uc18c\ud558\uae30",cssClass:"cancel",handler:()=>{}},{text:"\ud655\uc778\ud558\uae30",cssClass:"confirm",handler:t=>t.userMenu?(this.userMenu=t.userMenu,p("userMenu",this.userMenu),t.count?(this.count=t.count,p("count",this.count)):this.count=1,t.price?(this.price=t.price,p("price",this.price),this.putMenuList(),void this.pageReload()):(this.noticeToast("\uac00\uaca9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1)):(this.noticeToast("\uba54\ub274\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1)}]});yield t.present()})}noticeToast(t){return(0,u.mG)(this,void 0,void 0,function*(){const e=yield this.toastCtrl.create({mode:"md",message:t,duration:1e3,cssClass:"toast"});yield e.present()})}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(r.F0),l.Y36(s.Br),l.Y36(s.yF),l.Y36(h.s),l.Y36(s.t4),l.Y36(l.R0b))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-home"]],viewQuery:function(t,e){if(1&t&&l.Gf(s.W2,5),2&t){let t;l.iGM(t=l.CRH())&&(e.content=t.first)}},decls:37,vars:6,consts:[[3,"fullscreen","ngClass"],["slot","fixed",2,"margin-top","1.5rem",3,"ionRefresh"],["id","header1"],["color","secondary"],["color","primary"],["id","header2"],[3,"click"],["name","restaurant"],["name","hammer"],["name","receipt"],[4,"ngFor","ngForOf"],["clearInput","","placeholder","\uc8fc\ubb38\ud560 \uba54\ub274\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",3,"ionChange","keyup"],["name","paper-plane"],["slot","start"],["src","./assets/icon/avatar.png"],[1,"menu"],[1,"cnt"],[1,"price"],["id","userOnly",4,"ngIf"],["id","userOnly"],["name","pencil"]],template:function(t,e){1&t&&(l.TgZ(0,"ion-content",0),l.TgZ(1,"ion-refresher",1),l.NdJ("ionRefresh",function(t){return e.onRefresh(t)}),l._UZ(2,"ion-refresher-content"),l.qZA(),l.TgZ(3,"ion-card"),l.TgZ(4,"ion-list"),l.TgZ(5,"ion-list-header",2),l.TgZ(6,"h2"),l._uU(7),l.qZA(),l.TgZ(8,"ion-chip",3),l.TgZ(9,"ion-label"),l._uU(10),l.qZA(),l.qZA(),l.TgZ(11,"ion-chip",4),l.TgZ(12,"ion-label"),l._uU(13),l.qZA(),l.qZA(),l.qZA(),l.TgZ(14,"ion-list-header",5),l.TgZ(15,"ion-buttons"),l.TgZ(16,"ion-button",6),l.NdJ("click",function(){return e.goLink()}),l.TgZ(17,"ion-label"),l._uU(18,"\uc74c\uc2dd\uc810"),l.qZA(),l._UZ(19,"ion-icon",7),l.qZA(),l.TgZ(20,"ion-button",6),l.NdJ("click",function(){return e.updateMenuInfo()}),l.TgZ(21,"ion-label"),l._uU(22,"\uba54\ub274 \uc124\uc815"),l.qZA(),l._UZ(23,"ion-icon",8),l.qZA(),l.TgZ(24,"ion-button",6),l.NdJ("click",function(){return e.goResult()}),l.TgZ(25,"ion-label"),l._uU(26,"\uc8fc\ubb38\uc11c"),l.qZA(),l._UZ(27,"ion-icon",9),l.qZA(),l.qZA(),l.qZA(),l.YNc(28,d,13,5,"ion-item",10),l.qZA(),l.TgZ(29,"ion-text"),l._uU(30,"\ud654\uba74\uc744 \uc544\ub798\ub85c \ub2f9\uaca8 \ubaa9\ub85d\uc744 \uc0c8\ub85c\uace0\uce68 \ud574\ubcf4\uc138\uc694!"),l.qZA(),l.qZA(),l.TgZ(31,"ion-footer"),l.TgZ(32,"ion-item"),l.TgZ(33,"ion-input",11),l.NdJ("ionChange",function(t){return e.onChange(t)})("keyup",function(t){return e.onKeyUp(t)}),l.qZA(),l.TgZ(34,"ion-buttons"),l.TgZ(35,"ion-button",6),l.NdJ("click",function(){return e.createUserMenu()}),l._UZ(36,"ion-icon",12),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&t&&(l.Q6J("fullscreen",!0)("ngClass",e.scrolling?"scroll_view":""),l.xp6(7),l.hij("\uc624\ub298\uc758 ","L"==e.today.slice(0,1)?"\uc810\uc2ec":"\uc800\ub141",""),l.xp6(3),l.hij(" ",e.menu?e.menu:"---"," "),l.xp6(3),l.hij(" ",e.state?e.state:"---"," "),l.xp6(15),l.Q6J("ngForOf",e.menuList))},directives:[s.W2,i.mk,s.nJ,s.Wo,s.PM,s.q_,s.yh,s.hM,s.Q$,s.Sm,s.YG,s.gu,i.sg,s.yW,s.fr,s.Ie,s.pK,s.j9,s.BJ,i.O5],styles:["h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{font-weight:700}h2[_ngcontent-%COMP%]{font-size:1.5rem;margin-right:3vw}h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{font-size:.9rem}h4[_ngcontent-%COMP%]{margin-top:.4rem;padding-right:.2rem;display:inline-block}ion-content[_ngcontent-%COMP%]{--ion-background-color:#dae0e9}ion-card[_ngcontent-%COMP%]{min-height:90vh;margin:3.7vw 3.7vw 10vh;padding-bottom:2vh;border-radius:.9rem;overflow:hidden;--ion-background-color:#fff;text-align:center}ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin:2.2vmin}ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:10vmin;height:10vmin}ion-list[_ngcontent-%COMP%]{padding:2.3vmin}ion-label[_ngcontent-%COMP%]{margin:0;padding:0}ion-chip[_ngcontent-%COMP%]{height:1.5rem;margin-top:1rem;margin-left:.5rem}ion-chip[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:.8rem}ion-button[_ngcontent-%COMP%]{color:#002f67}ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem}ion-text[_ngcontent-%COMP%]{font-size:.6rem}ion-footer[_ngcontent-%COMP%]{position:fixed;bottom:0}ion-footer[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{font-size:1rem}#header1[_ngcontent-%COMP%]{height:5vh;margin-top:1.5vh;margin-left:2.5vw}#header2[_ngcontent-%COMP%]{margin-left:1.5vw;margin-top:1vmin}#header2[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:7vmin;padding:0 1.5vmin;margin-right:2vmin;border:.25vmin solid #768dab;border-radius:.5rem}#header2[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:.78rem}#header2[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:.88rem;padding:1vmin}#header2[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:active{background-color:#e6eaef}.menu[_ngcontent-%COMP%]{width:25vw}.cnt[_ngcontent-%COMP%]{width:10vw;text-align:center}.price[_ngcontent-%COMP%]{width:16vw;text-align:right}#userOnly[_ngcontent-%COMP%]{position:relative;top:.5rem;right:.2rem}#userOnly[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1rem}.scroll_view[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%]{overflow-y:overlay}.scroll_view[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%]::-webkit-scrollbar{-webkit-appearance:none}.scroll_view[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%]::-webkit-scrollbar:vertical{width:3px}.scroll_view[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%]::-webkit-scrollbar:horizontal{height:3px}.scroll_view[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:8px;background-color:#00000080}"]}),t})()}];let M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[r.Bz.forChild(f)],r.Bz]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[i.ez,o.u5,s.Pc,M]]}),t})()}}]);
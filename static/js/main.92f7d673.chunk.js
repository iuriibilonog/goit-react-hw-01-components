(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__1-CIo",avatar:"Profile_avatar__16M98",name:"Profile_name__1UVJS",tag:"Profile_tag__1FPS0",location:"Profile_location__2b7fE",stats:"Profile_stats__3jREC",statItem:"Profile_statItem__2UNKa",label:"Profile_label__3z5dh",quantity:"Profile_quantity__HPAnC"}},function(e,a,t){e.exports={friendList:"Friends_friendList__oC5h_",item:"Friends_item__2vYkT",avatar:"Friends_avatar__2AsaY",name:"Friends_name__1H96c",online:"Friends_online__2xoXi",offline:"Friends_offline__2KR2D"}},function(e,a,t){e.exports={statistics:"Statistics_statistics__2lMqd",title:"Statistics_title__38Uoe",statList:"Statistics_statList__1TClc",item:"Statistics_item__2S4Lr",label:"Statistics_label__3hll0",percentage:"Statistics_percentage__3MojO"}},function(e,a,t){e.exports={transactionHistory:"Transaction_transactionHistory__svvJD",header:"Transaction_header__374JV",tableColumn:"Transaction_tableColumn__34ZdS",tableRow:"Transaction_tableRow__2Xcs7"}},,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(5),c=t.n(n),s=t(8),i=t.n(s),r=(t(16),t(17),t(1)),l=t.n(r),d=t(0),o=function(e){var a=e.user;return Object(d.jsxs)("div",{className:l.a.profile,children:[Object(d.jsxs)("div",{className:"description",children:[Object(d.jsx)("img",{src:a.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:l.a.avatar}),Object(d.jsx)("p",{className:l.a.name,children:a.name}),Object(d.jsxs)("p",{className:l.a.tag,children:["@",a.tag]}),Object(d.jsx)("p",{className:l.a.location,children:a.location})]}),Object(d.jsxs)("ul",{className:l.a.stats,children:[Object(d.jsxs)("li",{className:l.a.statItem,children:[Object(d.jsx)("span",{className:l.a.label,children:"Followers "}),Object(d.jsx)("span",{className:l.a.quantity,children:a.stats.followers})]}),Object(d.jsxs)("li",{className:l.a.statItem,children:[Object(d.jsx)("span",{className:l.a.label,children:"Views "}),Object(d.jsx)("span",{className:l.a.quantity,children:a.stats.views})]}),Object(d.jsxs)("li",{className:l.a.statItem,children:[Object(d.jsx)("span",{className:l.a.label,children:"Likes "}),Object(d.jsx)("span",{className:l.a.quantity,children:a.stats.likes})]})]})]})},b=t(9),m=t(7),p=t(10),u=t(3),j=t.n(u),f=function(e){var a=e.title,t=e.stats;return Object(d.jsxs)("section",{className:j.a.statistics,children:[a&&Object(d.jsx)("h2",{className:j.a.title,children:a}),Object(d.jsx)("ul",{className:j.a.statList,children:t.map((function(e){var a=e.id,t=e.label,n=e.percentage;return Object(d.jsxs)("li",{className:j.a.item,children:[Object(d.jsx)("span",{className:j.a.label,children:t}),Object(d.jsxs)("span",{className:j.a.percentage,children:[n,"%"]})]},a)}))})]})},_=t(2),h=t.n(_),O=function(e){var a=e.name,t=e.avatar,n=e.isOnline,c=n?h.a.online:h.a.offline;return Object(d.jsxs)("li",{className:h.a.item,children:[Object(d.jsx)("span",{className:c,children:n}),Object(d.jsx)("img",{className:h.a.avatar,src:t,alt:a,width:"48"}),Object(d.jsx)("p",{className:h.a.name,children:a})]})},y=function(e){var a=e.friends;return Object(d.jsx)("ul",{className:h.a.friendList,children:a.map((function(e){var a=e.id,t=e.name,n=e.avatar,c=e.isOnline;return Object(d.jsx)(O,{name:t,avatar:n,isOnline:c},a)}))})};y.defaultProps={friends:[]};var x=y,v=function(e){var a=e.type,t=e.amount,n=e.currency;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("td",{children:a}),Object(d.jsx)("td",{children:t}),Object(d.jsx)("td",{children:n})]})},N=t(4),g=t.n(N),w=function(e){var a=e.transaction.map((function(e){var a=e.id,t=e.type,n=e.amount,c=e.currency;return Object(d.jsx)("tr",{className:g.a.tableRow,children:Object(d.jsx)(v,{type:t,amount:n,currency:c})},a)}));return Object(d.jsxs)("table",{className:g.a.transactionHistory,children:[Object(d.jsx)("thead",{className:g.a.header,children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:g.a.tableColumn,children:"Type"}),Object(d.jsx)("th",{className:g.a.tableColumn,children:"Amount"}),Object(d.jsx)("th",{className:g.a.tableColumn,children:"Currency"})]})}),Object(d.jsx)("tbody",{children:a})]})};w.defaultProps={transaction:[]};var P=w,S=t(11);var C=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(o,{user:b}),Object(d.jsx)(f,{title:"Upload stats",stats:m}),Object(d.jsx)(f,{stats:m}),Object(d.jsx)(x,{friends:p}),Object(d.jsx)(P,{transaction:S})]})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.92f7d673.chunk.js.map
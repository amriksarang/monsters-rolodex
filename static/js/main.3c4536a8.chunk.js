(this["webpackJsonp1-rolodex"]=this["webpackJsonp1-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),c=n(3),o=n.n(c),a=(n(13),n(4)),i=n(5),h=n(7),u=n(6),l=(n(14),function(e){return Object(s.jsxs)("div",{className:"card-container",children:[Object(s.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(s.jsxs)("h2",{children:[" ",e.monster.name," "]}),Object(s.jsxs)("p",{children:[" ",e.monster.email," "]})]})}),j=(n(15),function(e){return Object(s.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(s.jsx)(l,{monster:e},e.id)}))})}),d=(n(16),function(e){return Object(s.jsx)("input",{className:"search-box",type:"search",placeholder:"search monsters",onChange:e.onSearchChange})}),m=(n(17),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Monsters Rolodex"}),Object(s.jsx)(d,{onSearchChange:this.onSearchChange}),Object(s.jsx)(j,{monsters:r})]})}}]),n}(r.Component));o.a.render(Object(s.jsx)(m,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.3c4536a8.chunk.js.map
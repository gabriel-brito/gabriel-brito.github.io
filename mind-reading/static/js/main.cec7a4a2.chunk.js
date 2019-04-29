(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(28)},,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),s=(n(17),n(18),n(1)),i=n.n(s),u=n(2),l=n(3),d=n(6),h=n(7),p=n(9),m=n(8),f=n(10),v=(n(20),function(e){var t=e.weight,n=e.text;return 1===t?r.a.createElement("h1",{className:"appTitle"},n):r.a.createElement("h2",{className:"appTitle"},n)});v.defaultProps={weight:1};var w=v,g=(n(21),function(e){var t=e.step;return t&&r.a.createElement("p",{className:"appText"},"instructions"===t?"Instructions: You'll see twenty-one cards displayed in three rows of seven cards each. You need to pick a card and remember it. Then, you should click on the button that corresponds to the row on which your card is. This process is repeated three times and at the end, your card will be revealed!":"",1===t?"Choose a card, remember it, and click on the button that corresponds to the row on which your card is.":"",2===t?"Now, click on the row that the card you've previously chosen is.":"",3===t?"One last time! Click on the row on which your card is.":"")}),k=(n(22),function(e){var t=e.children,n=e.action,a=e.cssStyle;return r.a.createElement("button",{className:a,onClick:n},t)}),E=(n(23),function(e){var t=e.appName,n=e.goOn,a=e.step;return r.a.createElement("section",{className:"instructions"},r.a.createElement(w,{text:t}),r.a.createElement(g,{step:a}),r.a.createElement(k,{cssStyle:"instructionsButton",action:n},"Continue"))}),y=(n(24),function(e){var t=e.image,n=e.suit,a=e.value;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:t,alt:"".concat(a," of ").concat(n)}))}),b=(n(25),function(e){var t=e.cards,n=e.chooseRow,a=e.value;return r.a.createElement("div",{className:"trickRow"},r.a.createElement(k,{cssStyle:"trickRow__Button",action:function(){n(a-1)}},a),t.map(function(e,t){return r.a.createElement(y,{image:e.image,value:e.value,suit:e.suit,key:t,index:t})}))}),C=(n(26),function(){return r.a.createElement("div",{className:"loader"})}),O=(n(27),function(e){var t=e.appName,n=e.cards,a=e.chooseRow,c=e.isLoading,o=e.step;return r.a.createElement("main",null,r.a.createElement(w,{text:t}),r.a.createElement(g,{step:o}),r.a.createElement("section",{className:"trickWrapper"},c&&r.a.createElement(C,null),!c&&n.map(function(e,t){return r.a.createElement(b,{chooseRow:a,cards:e,value:t+1,key:t})})))}),N=function(e){var t=e.chosenCard,n=e.tryAgain;return r.a.createElement("section",{className:"chosenCard"},r.a.createElement(w,{text:"And your card is...",weight:2}),r.a.createElement("img",{className:"chosenCard__image",src:t.image,alt:"".concat(t.value," of ").concat(t.suit)}),r.a.createElement(k,{cssStyle:"chosenCard__button",action:n},"Try again"))},x=function(e){var t=e.appName,n=e.cards,a=e.chosenCard,c=e.chooseRow,o=e.goOn,s=e.isChosenCard,i=e.isInstructions,u=e.isLoading,l=e.isTrick,d=e.tryAgain,h=e.step;return r.a.createElement("div",{className:"wrapper"},i&&r.a.createElement(E,{appName:t,goOn:o,step:h}),l&&r.a.createElement(O,{appName:t,cards:n,chooseRow:c,isLoading:u,step:h}),s&&r.a.createElement(N,{chosenCard:a,tryAgain:d}))},S="https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",j=function(e){return"https://deckofcardsapi.com/api/deck/".concat(e,"/draw/?count=21")},T=function(){var e=Object(l.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t).then(function(e){return e.json()}).then(function(e){return e});case 3:n=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error(TypeError,"Something went wrong in config call");case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(l.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(j(t)).then(function(e){return e.json()});case 3:n=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error(TypeError,"Something went wrong in deck call");case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),_=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,a=[[],[],[]],r=n?[]:null;for(e=0;e<t.length;e++)a[0].push(t[e]),e++,a[1].push(t[e]),e++,a[2].push(t[e]);return"number"===typeof n&&(r=a.splice(n,0===n?1:n),a=[a[0],r[0],a[1]]),a},I=function(e){var t,n,a=[[],[],[]];for(t=[].concat(Object(u.a)(e[0][0]),Object(u.a)(e[1][0]),Object(u.a)(e[2][0])),n=0;n<21;n++)a[0].push(t[n]),n++,a[1].push(t[n]),n++,a[2].push(t[n]);return a},A=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).state={appName:"Mind-reading card Trick",cards:"",chosenCard:{},deck_id:"",isChosenCard:!1,isInstructions:!0,isLoading:!1,isTrick:!1,step:"instructions"},e.goOn=function(){e.setState({isInstructions:!1,isTrick:!0,step:1})},e.chooseRow=function(t){var n=e.state.cards,a=I(_(n,t)),r=e.state.step;3===r&&e.chosenCard(a[1][3]),e.setState({cards:a,step:r+=1})},e.chosenCard=function(t){var n=t.image,a=t.suit,r=t.value;e.setState({chosenCard:{image:n,suit:a,value:r},isTrick:!1,isChosenCard:!0})},e.tryAgain=function(){var t=e.state.cards;e.setState({cards:I(_(t)),isChosenCard:!1,isTrick:!0,step:1})},e.fillCards=Object(l.a)(i.a.mark(function t(){var n,a,r,c,o,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!!localStorage.getItem("cards"),e.setState({isLoading:!0}),n){t.next=16;break}return t.next=5,T(S);case 5:return a=t.sent,r=a.deck_id,t.next=9,R(r);case 9:c=t.sent,o=c.cards,o=_(o),localStorage.setItem("cards",JSON.stringify(o)),e.setState({cards:o,deck_id:r,isLoading:!1}),t.next=19;break;case 16:s=JSON.parse(localStorage.getItem("cards")),s=Object(u.a)(s),e.setState({cards:s,isLoading:!1});case 19:case"end":return t.stop()}},t)})),e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.fillCards()}},{key:"render",value:function(){return r.a.createElement(x,Object.assign({},this.state,{chooseRow:this.chooseRow,goOn:this.goOn,tryAgain:this.tryAgain}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.cec7a4a2.chunk.js.map
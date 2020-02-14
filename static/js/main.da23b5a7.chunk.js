(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{105:function(e,t,r){},106:function(e,t,r){},107:function(e,t,r){},108:function(e,t,r){},207:function(e,t,r){},208:function(e,t,r){},209:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(41),i=r.n(o),s=r(11),m=r(5),c=r(88),u=r(14),p=r(15),l=r(18),T=r(16),h=r(19),f=r(61),b=r(44),d=null,v=function(e){return{type:"TIMER_SET",payload:e}},k=function(){return{type:"TIMER_TICK"}},E=function(){return clearInterval(d),{type:"TIMER_STOP"}},O=(r(105),function(e){function t(){var e,r;Object(u.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(l.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(a)))).formatMilliSec=function(e){var t=Math.floor(e%(36e5+1)/6e4),r=Math.floor(e%6e4/1e3),n="0".concat(r).slice(-2);return"".concat(t,":").concat(n)},r}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"timer"},a.a.createElement("h1",{className:"timer__display"},this.formatMilliSec(this.props.time)),a.a.createElement("h3",{className:"timer__type"},this.props.type.toUpperCase()))}}]),t}(n.Component)),_=r(89),y=r.n(_),g=r(90),A=r.n(g),j=r(91),I=r.n(j),w=(r(106),function(e){function t(){var e,r;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(r=Object(l.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(o)))).audioRef=a.a.createRef(),r.toggleTimerState=function(e){r.props.timerIsOn?r.props.stopTimer():r.props.startTimer()},r.onReset=function(){"work"===r.props.type?r.props.time!==6e4*r.props.workTimerAmount&&r.props.resetTimer(r.props.workTimerAmount):"break"===r.props.type&&r.props.time!==6e4*r.props.breakTimerAmount&&r.props.resetTimer(r.props.breakTimerAmount)},r.onSkip=function(){r.props.count===2*r.props.rounds?r.props.resetToOriginal(r.props.workTimerAmount):"work"===r.props.type?r.props.skipTimer(r.props.breakTimerAmount):"break"===r.props.type&&r.props.skipTimer(r.props.workTimerAmount),r.audioRef.current.play()},r}return Object(h.a)(t,e),Object(p.a)(t,[{key:"renderButtonIcon",value:function(e){return a.a.createElement(f.a,{icon:e?b.a:b.b})}},{key:"componentDidMount",value:function(){this.props.setTimer(this.props.workTimerAmount)}},{key:"componentDidUpdate",value:function(){var e=this;if(0===this.props.time&&this.props.count<2*this.props.rounds){this.props.stopTimer();var t="work"===this.props.type?this.props.breakTimerAmount:this.props.workTimerAmount;this.props.setTimer(t),this.audioRef.current.play(),setTimeout((function(){e.props.startTimer()}),2e3)}else 0===this.props.time&&(this.props.stopTimer(),this.audioRef.current.play(),this.props.resetToOriginal(this.props.workTimerAmount))}},{key:"render",value:function(){return a.a.createElement("div",{className:"timer-controller"},a.a.createElement("audio",{ref:this.audioRef},a.a.createElement("source",{src:y.a,type:"audio/mpeg"}),a.a.createElement("source",{src:A.a,type:"audio/ogg"}),a.a.createElement("source",{src:I.a,type:"audio/mp4"})),a.a.createElement(O,{time:this.props.time,type:this.props.type}),a.a.createElement("div",{className:"control-panel"},a.a.createElement("div",{className:"control-panel__start",onClick:this.toggleTimerState},this.renderButtonIcon(this.props.timerIsOn)),a.a.createElement("div",{className:"control-panel__menu"},a.a.createElement("div",{className:"control-panel__menu-left"},a.a.createElement("h3",null,Math.ceil(this.props.count/2),"/",this.props.rounds),a.a.createElement("p",{onClick:this.onReset,className:"control-panel__reset"},"Reset")),a.a.createElement("div",{className:"control-panel__menu-right"},a.a.createElement("div",{onClick:this.onSkip,className:"control-panel__skip"},a.a.createElement(f.a,{icon:b.c}))))))}}]),t}(n.Component)),N=Object(s.b)((function(e){var t,r,n=null!==(t=null===(r=e.form.timerForm)||void 0===r?void 0:r.values)&&void 0!==t?t:{work:0,break:0,rounds:0},a=n.work,o=n.break,i=n.rounds;return{time:e.timer.time,type:e.timer.type,count:e.timer.count,workTimerAmount:a,breakTimerAmount:o,rounds:i,timerIsOn:e.timer.isTimerOn}}),{setTimer:v,startTimer:function(){return function(e){clearInterval(d),d=setInterval((function(){return e(k())}),1e3),e({type:"TIMER_START"}),e(k())}},stopTimer:E,resetToOriginal:function(e){return function(t){clearInterval(d),t({type:"RESET_T0_ORIGINAL"}),t(v(e))}},resetTimer:function(e){return function(t){clearInterval(d),t({type:"RESET_TIMER"}),t(v(e))}},skipTimer:function(e){return function(t){t({type:"SKIP_TIMER"}),t(v(e))}}})(w);r(107);function R(e){return a.a.createElement("button",{onClick:function(){e.toggleMenu()},className:"hamburger-button"},a.a.createElement("div",{className:"hamburger-button__line"}),a.a.createElement("div",{className:"hamburger-button__line"}),a.a.createElement("div",{className:"hamburger-button__line"}))}var M=r(211),S=r(210),C=(r(108),function(e){function t(){var e,r;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(r=Object(l.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(o)))).formatMinutes=function(e){return"".concat(e,":00")},r.renderField=function(e){var t=e.input,n=t.onChange,o=t.value,i=e.label,s=e.type,m=e.min,c=e.max;return a.a.createElement("div",{className:"form-control"},a.a.createElement("label",{className:"form-control__label"},i),a.a.createElement("p",{className:"form-control__value"},"Rounds"===i?o:r.formatMinutes(o)),a.a.createElement("div",null,a.a.createElement("input",{className:"form-control__input",onChange:n,type:s,min:m,max:c,value:o})))},r}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"menu"},a.a.createElement("p",{className:"menu__header"},"Timer"),a.a.createElement("form",{className:"menu__form"},a.a.createElement(M.a,{name:"work",type:"range",min:"1",max:"60",component:this.renderField,label:"Work"}),a.a.createElement(M.a,{name:"break",type:"range",min:"1",max:"60",component:this.renderField,label:"Break"}),a.a.createElement(M.a,{name:"rounds",type:"range",min:"1",max:"10",component:this.renderField,label:"Rounds"})))}}]),t}(n.Component)),x=Object(S.a)({form:"timerForm"})(C),P=(r(207),function(e){function t(){var e,r;Object(u.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(l.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(a)))).state={menuOpen:!1},r.prevWorkTimerAmount=0,r.prevBreakTimerAmount=0,r.toggleMenu=function(){r.state.menuOpen?r.verifyTimerAmountChanges():r.gatherPreviousTimerAmounts(),r.setState({menuOpen:!r.state.menuOpen})},r}return Object(h.a)(t,e),Object(p.a)(t,[{key:"gatherPreviousTimerAmounts",value:function(){this.prevWorkTimerAmount=this.props.workTimerAmount,this.prevBreakTimerAmount=this.props.breakTimerAmount}},{key:"verifyTimerAmountChanges",value:function(){"work"===this.props.type&&this.prevWorkTimerAmount!==this.props.workTimerAmount?this.resetCurrentTimerIteration(this.props.workTimerAmount):"break"===this.props.type&&this.prevBreakTimerAmount!==this.props.breakTimerAmount&&this.resetCurrentTimerIteration(this.props.breakTimerAmount)}},{key:"resetCurrentTimerIteration",value:function(e){this.props.timerIsOn&&this.props.stopTimer(),this.props.setTimer(e)}},{key:"render",value:function(){return a.a.createElement("div",{className:"toolbar"},a.a.createElement("div",{className:"toolbar__nav"},a.a.createElement("div",null,a.a.createElement(R,{toggleMenu:this.toggleMenu})),a.a.createElement("div",{className:"toolbar__title"},"Pomodoro")),a.a.createElement("div",{className:this.state.menuOpen?"toolbar__menu toolbar__menu--open":"toolbar__menu"},a.a.createElement(x,{initialValues:{work:1,break:1,rounds:1}})),a.a.createElement("div",{className:"toolbar__footer"}))}}]),t}(n.Component)),B=Object(s.b)((function(e){var t,r,n=null!==(t=null===(r=e.form.timerForm)||void 0===r?void 0:r.values)&&void 0!==t?t:{work:0,break:0},a=n.work,o=n.break;return{type:e.timer.type,timerIsOn:e.timer.isTimerOn,workTimerAmount:a,breakTimerAmount:o}}),{stopTimer:E,setTimer:v})(P);r(208);var F=r(212),D=r(12),K={time:0,type:"work",count:1,isTimerOn:!1},W=Object(m.c)({timer:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"RESET_T0_ORIGINAL":return Object(D.a)({},K);case"TIMER_SET":return Object(D.a)({},t,{time:6e4*r.payload});case"TIMER_TICK":return Object(D.a)({},t,{time:t.time-1e3});case"TIMER_STOP":return e="work"===t.type?"break":"work",0===t.time?Object(D.a)({},t,{type:e,count:t.count+1,isTimerOn:!t.isTimerOn}):Object(D.a)({},t,{isTimerOn:!t.isTimerOn});case"TIMER_START":return Object(D.a)({},t,{isTimerOn:!t.isTimerOn});case"SKIP_TIMER":return e="work"===t.type?"break":"work",Object(D.a)({},t,{type:e,count:t.count+1});case"RESET_TIMER":return Object(D.a)({},t,{isTimerOn:!!t.isTimerOn&&!t.isTimerOn});default:return t}},form:F.a}),L=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,U=Object(m.e)(W,L(Object(m.a)(c.a)));i.a.render(a.a.createElement(s.a,{store:U},a.a.createElement((function(){return a.a.createElement("div",{className:"app"},a.a.createElement(B,null),a.a.createElement(N,null))}),null)),document.getElementById("root"))},89:function(e,t,r){e.exports=r.p+"static/media/just-saying.594e6e42.mp3"},90:function(e,t,r){e.exports=r.p+"static/media/just-saying.418b9aff.ogg"},91:function(e,t,r){e.exports=r.p+"static/media/just-saying.ec10c895.m4a"},94:function(e,t,r){e.exports=r(209)}},[[94,1,2]]]);
//# sourceMappingURL=main.da23b5a7.chunk.js.map
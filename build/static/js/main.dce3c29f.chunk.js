(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{246:function(e,t,c){},292:function(e,t,c){},293:function(e,t,c){},294:function(e,t,c){},433:function(e,t,c){},434:function(e,t,c){},435:function(e,t,c){},436:function(e,t,c){},442:function(e,t,c){},443:function(e,t,c){},444:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(37),r=c.n(s),l=c(92),o=(c(292),c(17)),i=c(19),d=c(21),j=c(22),h=c(23),b=c.n(h),m=c(38),u=c(40),x=(c(293),c(294),c(29)),p=(c(145),c(455)),O=c(1),f=p.a.Title,g=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){var e=this;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"col-lg-3",children:Object(O.jsxs)("div",{className:"bg-white text-dark dashboard-box px-3 py-2",children:[1==e.props.icon?Object(O.jsx)(x.h,{style:{fontSize:"30px",color:"#008269"}}):2==e.props.icon?Object(O.jsx)(x.n,{style:{fontSize:"30px",color:"#008269"}}):3==e.props.icon?Object(O.jsx)(x.g,{style:{fontSize:"30px",color:"#008269"}}):4==e.props.icon?Object(O.jsx)(x.o,{style:{fontSize:"30px",color:"#008269"}}):void 0,Object(O.jsxs)("div",{className:"px-3 py-1",children:[Object(O.jsx)(f,{level:3,className:"m-0 p-0",children:this.props.value}),Object(O.jsx)(f,{level:5,className:"m-0 p-0",style:{color:"#008269"},children:this.props.name})]})]})})})}}]),c}(n.a.Component),v=c(447),y=c(448),N=c(452),k=c(175),w=c(176),S=c(143),C=c(270),T=c(453),D=c(282),L=p.a.Title,E=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:""},e}return Object(i.a)(c,[{key:"dashboard",value:function(){var e=Object(m.a)(b.a.mark((function e(t){var c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/dashboard/".concat(t.d1,"/max/").concat(t.d2),{method:"get",headers:{"Content-Type":"application/json"}});case 2:return c=e.sent,e.next=5,c.json();case 5:if((a=e.sent).message){e.next=9;break}return this.props.login(),e.abrupt("return");case 9:this.setState({data:a.message}),console.log(this.state.data);case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"check_date",value:function(e){var t=["01","02","03","04","05","06","07","08","09","10","11","12"],c=null!=e?new Date(e):new Date,a="".concat(c.getFullYear(),"-").concat(t[c.getMonth()],"-").concat(c.getDate()),n=c.getDate();return{d1:a,d2:"".concat(c.getFullYear(),"-").concat(t[c.getMonth()],"-").concat(++n)}}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"py-5 dashboard-cover h-100",children:Object(O.jsxs)("div",{className:"dashboard",style:{width:"97%"},children:[Object(O.jsxs)("div",{className:"row w-100 p-0 m-0  my-3",children:[Object(O.jsx)(g,{value:this.state.data?this.state.data.users:"-",name:"Employees",icon:"1"}),Object(O.jsx)(g,{value:this.state.data?this.state.data.check_in:"-",name:"Check In",icon:"2"}),Object(O.jsx)(g,{value:this.state.data?this.state.data.late:"-",name:"Late",icon:"3"}),Object(O.jsx)(g,{value:this.state.data?this.state.data.late:"-",name:"Check Out",icon:"4"})]}),Object(O.jsxs)("div",{className:"row w-100 p-0 m-0  my-3",children:[Object(O.jsx)("div",{className:"col-lg-6",children:Object(O.jsxs)("div",{className:"graphs p-2 border",children:[Object(O.jsx)(L,{level:5,style:{color:"#008269"},children:"Attendance Log"}),Object(O.jsxs)("div",{className:"graph-title py-2",children:[Object(O.jsx)(x.c,{color:"#008290",className:"mr-1"}),Object(O.jsx)("span",{className:"mr-3",children:"Check In"}),Object(O.jsx)(x.c,{color:"#008269",className:"mr-1"}),Object(O.jsx)("span",{children:"Late"})]}),Object(O.jsx)(v.a,{width:"100%",aspect:2,children:Object(O.jsxs)(y.a,{data:this.state.data?this.state.data.graph:"",children:[Object(O.jsx)(N.a,{strokeDasharray:"3 3"}),Object(O.jsx)(k.a,{dataKey:"date",interval:"preserveStartEnd"}),Object(O.jsx)(w.a,{}),Object(O.jsx)(S.a,{contentStyle:{backgroundColor:"white",borderRadius:"3px"}}),Object(O.jsx)(C.a,{dataKey:"check_in",type:"natural",stroke:"#008290",activeDot:{r:8}}),Object(O.jsx)(C.a,{dataKey:"late",type:"natural",stroke:"#008269",activeDot:{r:8}})]})})]})}),Object(O.jsx)("div",{className:"col-lg-6",children:Object(O.jsxs)("div",{className:"graphs p-2 border",children:[Object(O.jsx)(L,{level:5,style:{color:"#008269"},children:"Attendance Log"}),Object(O.jsxs)("div",{className:"graph-title py-2",children:[Object(O.jsx)(x.c,{color:"#008290",className:"mr-1"}),Object(O.jsx)("span",{className:"mr-3",children:"Check In"}),Object(O.jsx)(x.c,{color:"#008269",className:"mr-1"}),Object(O.jsx)("span",{children:"Late"})]}),Object(O.jsx)(v.a,{width:"100%",aspect:2,children:Object(O.jsxs)(T.a,{data:this.state.data?this.state.data.graph:"",children:[Object(O.jsx)(N.a,{strokeDasharray:"3 3"}),Object(O.jsx)(k.a,{dataKey:"date"}),Object(O.jsx)(w.a,{}),Object(O.jsx)(S.a,{}),Object(O.jsx)(D.a,{dataKey:"check_in",fill:"#008290"}),Object(O.jsx)(D.a,{dataKey:"late",fill:"#008269"})]})})]})})]})]})})})}},{key:"componentDidMount",value:function(){this.dashboard(this.check_date())}}]),c}(n.a.Component),_=c(456),B=c(458),I=c(179),A=(c(246),c(102)),z=c(460),F=p.a.Title,M=_.a.Option,P=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:"",shift:""},e.getData=Object(m.a)(b.a.mark((function t(){var c,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/user",{method:"get",headers:{"Content-Type":"application/json"}});case 2:return c=t.sent,t.next=5,c.json();case 5:a=t.sent,e.setState({data:a.message});case 7:case"end":return t.stop()}}),t)}))),e.updateData=function(){var t=Object(m.a)(b.a.mark((function t(c,a){var n,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({data:""}),n={id:c,salary:document.getElementsByClassName("salary")[a].value,shift:document.getElementsByClassName("shift")[a].value},t.next=4,fetch("/user",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return s=t.sent,t.next=7,s.json();case 7:t.sent,e.getData();case 9:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}(),e.updateUsers=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/users",{method:"POST",headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:e.sent;case 6:case"end":return e.stop()}}),e)}))),e.fun=function(){alert(new Date("1/1/1999 8:00")>new Date("1/1/1999 15:00"))},e}return Object(i.a)(c,[{key:"render",value:function(){var e=this;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"my-5 d-flex flex-column align-items-center w-100",children:Object(O.jsx)("div",{className:"border rounded",style:{width:"97%"},children:Object(O.jsxs)("div",{style:{background:"rgb(255,255,255)"},className:"p-3",children:[Object(O.jsx)(F,{level:5,className:"p-0 m-0",style:{color:"#008269"},children:"Employees Record"}),Object(O.jsxs)("div",{className:"py-2",children:[Object(O.jsxs)(_.a,{defaultValue:"Search By",style:{width:120},children:[Object(O.jsx)(M,{value:"id",children:"ID"}),Object(O.jsx)(M,{value:"name",children:"Name"})]}),Object(O.jsx)(B.a.Search,{allowClear:!0,style:{width:150},defaultValue:"",className:"ml-2"}),Object(O.jsx)(I.a,{className:"ml-2",id:"reload",onClick:this.fun,children:Object(O.jsx)(x.b,{style:{fontSize:"20px"}})})]}),Object(O.jsxs)("table",{className:"table table-hover table-sm",children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{children:"User ID"}),Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"Role"}),Object(O.jsx)("th",{children:"Card No"}),Object(O.jsx)("th",{children:"Salary(Per Hour)"}),Object(O.jsx)("th",{children:"Shift"}),Object(O.jsx)("th",{children:"Working Hours(Aug)"}),Object(O.jsx)("th",{children:"Operation"})]}),Object(O.jsx)("tbody",{id:"table",children:this.state.data?this.state.data.map((function(t,c){return Object(O.jsxs)("tr",{style:{cursor:"pointer"},children:[Object(O.jsx)("td",{children:c+1}),Object(O.jsx)("td",{children:t.userId}),Object(O.jsx)("td",{className:"text-capitalize",children:t.name}),Object(O.jsx)("td",{children:t.role}),Object(O.jsx)("td",{children:t.cardno}),Object(O.jsx)("td",{children:Object(O.jsx)(B.a,{size:"small",defaultValue:t.salary,style:{width:"100px",border:"none"},className:"salary"})}),Object(O.jsx)("td",{children:Object(O.jsxs)("select",{style:{width:"100px",border:"none"},className:"p-0 shift",defaultValue:t.shift,children:[Object(O.jsx)("option",{value:"Morning",children:"Morning"}),Object(O.jsx)("option",{value:"Evening",children:"Evening"}),Object(O.jsx)("option",{value:"Night",children:"Night"})]})}),Object(O.jsx)("td",{children:"120"}),Object(O.jsxs)("td",{children:[Object(O.jsx)(x.k,{style:{cursor:"pointer",color:"#008269"},onClick:function(){e.updateData("".concat(t.userId),c)}}),Object(O.jsx)(z.a,{style:{cursor:"pointer",color:"crimson"},className:"ml-3"})]})]})})):Object(O.jsx)("td",{colSpan:"9",children:Object(O.jsx)("center",{children:Object(O.jsx)(A.a,{className:"my-3",style:{fontSize:"40px",color:"#008269"}})})})})]})]})})})})}},{key:"componentDidMount",value:function(){this.getData()}}]),c}(n.a.Component),U=c(454),Y=(c(433),p.a.Title),q=_.a.Option,J=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:!1,break_data:[]},e.updateAttendanceLog=function(){var t=Object(m.a)(b.a.mark((function t(c){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/attendance_log",{method:"post",headers:{"Content-Type":"application/json"}});case 2:return t.sent,t.next=5,fetch("/attendance_log/".concat(c.d1,"/max/").concat(c.d2),{method:"get",headers:{"Content-Type":"application/json"}});case 5:t.sent,e.getAttendanceLog(c);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.fun2=function(t){e.setState({data:!1}),e.updateAttendanceLog(e.check_date(document.getElementById("date").value))},e.show_break_record=function(t){document.querySelector(".emp-table").classList.toggle("emp-table-show"),e.setState({break_data:JSON.parse(e.state.data[t].data)})},e}return Object(i.a)(c,[{key:"getAttendanceLog",value:function(){var e=Object(m.a)(b.a.mark((function e(t){var c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/attendance_record/".concat(t.d1,"/max/").concat(t.d2),{method:"get",headers:{"Content-Type":"application/json"}});case 2:return c=e.sent,e.next=5,c.json();case 5:a=e.sent,this.setState({data:JSON.parse(a.message)});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"check_date",value:function(e){var t=["01","02","03","04","05","06","07","08","09","10","11","12"],c=null!=e?new Date(e):new Date,a="".concat(c.getFullYear(),"-").concat(t[c.getMonth()],"-").concat(c.getDate()),n=c.getDate();return{d1:a,d2:"".concat(c.getFullYear(),"-").concat(t[c.getMonth()],"-").concat(++n)}}},{key:"render",value:function(){var e=this;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"my-5 d-flex flex-column align-items-center w-100",children:Object(O.jsx)("div",{className:"border",style:{width:"97%"},children:Object(O.jsxs)("div",{style:{background:"rgb(255,255,255)"},className:"p-3",children:[Object(O.jsx)(Y,{level:5,className:"p-0 m-0",style:{color:"#008269"},children:"Attendance Log"}),Object(O.jsxs)("div",{className:"py-2",children:[Object(O.jsx)(U.a,{format:"YYYY/MM/DD",onChange:function(t){e.fun2(t)},id:"date"}),Object(O.jsxs)(_.a,{defaultValue:"Search By",style:{width:120},className:"ml-2",children:[Object(O.jsx)(q,{value:"id",children:"ID"}),Object(O.jsx)(q,{value:"name",children:"Name"})]}),Object(O.jsx)(B.a.Search,{allowClear:!0,style:{width:150},defaultValue:"",className:"ml-2"}),Object(O.jsx)(I.a,{className:"ml-2",id:"reload",children:Object(O.jsx)(x.b,{style:{fontSize:"20px"}})})]}),Object(O.jsxs)("table",{className:"table table-sm table-hover rounded",children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{children:"User ID"}),Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"Check In"}),Object(O.jsx)("th",{children:"check Out"}),Object(O.jsx)("th",{children:"Shift"}),Object(O.jsx)("th",{children:"Late"}),Object(O.jsx)("th",{children:"Active Hours"}),Object(O.jsx)("th",{children:"Break"})]}),Object(O.jsx)("tbody",{id:"attendance_log_table",children:0==this.state.data?Object(O.jsx)("td",{colSpan:"9",children:Object(O.jsx)("center",{children:Object(O.jsx)(A.a,{className:"my-3",style:{fontSize:"40px",color:"#008269"}})})}):this.state.data.map((function(t,c){return Object(O.jsxs)("tr",{style:{cursor:"pointer"},onClick:function(){e.show_break_record(c)},children:[Object(O.jsx)("td",{children:c+1}),Object(O.jsx)("td",{children:t.id}),Object(O.jsx)("td",{className:"text-capitalize",children:t.name}),Object(O.jsx)("td",{children:t.entry}),Object(O.jsx)("td",{children:t.leave}),Object(O.jsx)("td",{children:t.shift}),Object(O.jsx)("td",{children:t.late?"Yes":"No"}),Object(O.jsx)("td",{children:t.work}),Object(O.jsx)("td",{children:t.break})]},c)}))})]})]})})}),Object(O.jsx)("div",{className:"emp-table bg-secondary shadow",children:Object(O.jsxs)("div",{className:"py-2",children:[Object(O.jsx)("div",{className:"mb-2",children:Object(O.jsx)(x.q,{style:{fontSize:"26px",cursor:"pointer"},className:"close"})}),Object(O.jsxs)("table",{className:"table table-sm table-hover rounded",children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{children:"Break-In"}),Object(O.jsx)("th",{children:"Break-Out"}),Object(O.jsx)("th",{children:"Total"})]}),Object(O.jsx)("tbody",{id:"break_data",children:0==this.state.break_data.length?Object(O.jsx)("tr",{children:Object(O.jsx)("td",{colSpan:"7",children:"No Data Found"})}):this.state.break_data.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t+1}),Object(O.jsx)("td",{children:e.leave}),Object(O.jsx)("td",{children:e.back}),Object(O.jsx)("td",{children:e.total})]},t)}))})]})]})})]})}},{key:"componentDidUpdate",value:function(){}},{key:"componentDidMount",value:function(){var e=this;document.getElementById("reload").addEventListener("click",(function(){e.setState({data:!1}),e.updateAttendanceLog(e.check_date())})),this.getAttendanceLog(this.check_date());var t=function(){document.querySelector(".emp-table").classList.toggle("emp-table-show")};document.getElementsByClassName("close")[0].addEventListener("click",t);document.getElementById("change_date")}}]),c}(n.a.Component),R=(c(434),function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).alert=function(){document.querySelector(".alert-box").classList.toggle("alert-box2")},e}return Object(i.a)(c,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"alert-box",id:"alert",style:{zIndex:"400"},children:Object(O.jsxs)("div",{className:"alert",children:[Object(O.jsx)("span",{className:"alert-msg mr-3",children:"Time Table Updated Successfully."}),Object(O.jsx)(x.q,{style:{fontSize:"26px",cursor:"pointer"},onClick:this.alert})]})})}},{key:"componentDidMount",value:function(){this.alert()}}]),c}(n.a.Component)),K=(c(435),p.a.Title),V=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={notificationBar:!1},e}return Object(i.a)(c,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"settings bg-secondary",children:Object(O.jsxs)("div",{className:"py-3",children:[Object(O.jsxs)("div",{className:"mb-3 border-bottom",children:[Object(O.jsx)(K,{level:5,className:"p-0 m-0",style:{color:"#008269"},children:"Time Table"}),Object(O.jsx)(x.q,{className:"settings-close main-clr",style:{fontSize:"26px",cursor:"pointer"}})]}),Object(O.jsxs)("form",{action:"/attend",method:"POST",className:"row w-100 m-0 p-0",id:"settings_form",children:[Object(O.jsx)("div",{class:"col-sm-12",children:Object(O.jsx)("label",{for:"fri",className:"font-weight-bold main-clr",children:"Morning Shift"})}),Object(O.jsxs)("div",{class:"form-group col-sm-12",children:[Object(O.jsx)("label",{for:"",className:"font-weight-bold",children:"Check-In Timing"}),Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)("input",{type:"time",class:"time form-control form-control-sm mr-2"}),Object(O.jsx)("input",{type:"time",class:"time form-control form-control-sm"})]})]}),Object(O.jsxs)("div",{class:"form-group col-sm-12",children:[Object(O.jsx)("label",{for:"",className:"font-weight-bold",children:"Check-Out Timing"}),Object(O.jsx)("div",{className:"d-flex",children:Object(O.jsx)("input",{type:"time",class:"time form-control form-control-sm"})})]}),Object(O.jsx)("div",{class:"col-sm-12 mt-3",children:Object(O.jsx)("label",{for:"fri",className:"font-weight-bold main-clr",children:"Evening Shift"})}),Object(O.jsxs)("div",{class:"form-group col-sm-12",children:[Object(O.jsx)("label",{for:"",className:"font-weight-bold",children:"Check-In Timing"}),Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)("input",{type:"time",class:"time form-control form-control-sm mr-2"}),Object(O.jsx)("input",{type:"time",class:"time form-control form-control-sm"})]})]}),Object(O.jsxs)("div",{class:"form-group col-sm-12",children:[Object(O.jsx)("label",{for:"",className:"font-weight-bold",children:"Check-Out Timing"}),Object(O.jsx)("div",{className:"d-flex",children:Object(O.jsx)("input",{type:"time",class:"time form-control form-control-sm"})})]}),Object(O.jsx)("div",{class:"col-sm-12 mt-3",children:Object(O.jsx)("label",{for:"fri",className:"font-weight-bold main-clr",children:"Night Shift"})}),Object(O.jsxs)("div",{class:"form-group col-sm-12",children:[Object(O.jsx)("label",{for:"",className:"font-weight-bold",children:"Check-In Timing"}),Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)("input",{type:"time",class:"time form-control form-control-sm mr-2"}),Object(O.jsx)("input",{type:"time",class:"time form-control form-control-sm"})]})]}),Object(O.jsxs)("div",{class:"form-group col-sm-12",children:[Object(O.jsx)("label",{for:"",className:"font-weight-bold",children:"Check-Out Timing"}),Object(O.jsx)("div",{className:"d-flex",children:Object(O.jsx)("input",{type:"time",class:"time form-control form-control-sm"})})]}),Object(O.jsx)("div",{class:"form-group col-12",children:Object(O.jsxs)("button",{class:"btn button btn-sm",value:"update",id:"settings_update",children:["Update",Object(O.jsx)(x.f,{className:"ml-1"})]})})]})]})}),this.state.notificationBar?Object(O.jsx)(R,{notificationBar:this.state.notificationBar}):""]})}},{key:"componentDidMount",value:function(){var e=this,t=function(){var e=Object(m.a)(b.a.mark((function e(){var t,c,a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.querySelector(".settings").classList.toggle("settings-show"),t=document.getElementById("settings_form"),c=t.elements,e.next=5,fetch("/settings",{method:"GET",headers:{"Content-Type":"application/json"}});case 5:return a=e.sent,e.next=8,a.json();case 8:n=e.sent,console.log(n),n=n.message,c[0].value=n.morning[0][0],c[1].value=n.morning[0][1],c[2].value=n.morning[1],c[3].value=n.evening[0][0],c[4].value=n.evening[0][1],c[5].value=n.evening[1],c[6].value=n.night[0][0],c[7].value=n.night[0][1],c[8].value=n.night[1];case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();document.getElementsByClassName("settings-close")[0].addEventListener("click",t),document.getElementById("settings").addEventListener("click",t);var c=function(){var t=Object(m.a)(b.a.mark((function t(c){var a,n,s,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),a=document.getElementById("settings_form"),n=a.elements,s={morning:[[n[0].value,n[1].value],n[2].value],evening:[[n[3].value,n[4].value],n[5].value],night:[[n[6].value,n[7].value],n[8].value]},t.next=6,fetch("/settings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 6:return r=t.sent,t.next=9,r.json();case 9:t.sent,e.setState({notificationBar:!0}),setTimeout((function(){e.setState({notificationBar:!1})}),3e3);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();document.getElementById("settings_update").addEventListener("click",c)}}]),c}(n.a.Component),H=(c(436),c(461)),G=(p.a.Title,function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).logout=Object(m.a)(b.a.mark((function t(){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/logout",{method:"get",headers:{"Content-Type":"application/json"}});case 2:return c=t.sent,t.next=5,c.json();case 5:t.sent.message&&e.props.login();case 7:case"end":return t.stop()}}),t)}))),e}return Object(i.a)(c,[{key:"render",value:function(){var e=this;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"panel",children:[Object(O.jsxs)("div",{className:"panel-left-part py-3",children:[Object(O.jsx)("div",{className:"py-2 px-2 toggle",children:Object(O.jsx)("img",{src:"/nutrifactor.png"})}),Object(O.jsxs)("div",{className:"py-3",children:[Object(O.jsxs)(l.b,{className:"p-2 option",to:"/",children:[Object(O.jsx)(x.e,{className:"mr-2",style:{fontSize:"20px"}}),Object(O.jsx)("span",{className:"toggle",children:"Dashboard"})," "]}),Object(O.jsxs)(l.b,{className:"p-2 option",to:"/getUser",children:[Object(O.jsx)(x.l,{className:"mr-2",style:{fontSize:"20px"}}),Object(O.jsx)("span",{className:"toggle",children:"Employees"})]}),Object(O.jsxs)(l.b,{className:"p-2 option",to:"/AttendanceLog",children:[Object(O.jsx)(x.p,{className:"mr-2",style:{fontSize:"20px"}}),Object(O.jsx)("span",{className:"toggle",children:"Attendance Log"})]}),Object(O.jsxs)("div",{className:"p-2 option",id:"settings",children:[Object(O.jsx)(x.d,{className:"mr-2",style:{fontSize:"20px"}}),Object(O.jsx)("span",{className:"toggle",children:"Time Table"})]}),Object(O.jsxs)("div",{className:"p-2 option",onClick:this.logout,children:[Object(O.jsx)(x.a,{className:"mr-2",style:{fontSize:"20px"}}),Object(O.jsx)("span",{className:"toggle",children:"Logout"})]}),Object(O.jsxs)(l.b,{className:"p-2 option",to:"",id:"title",children:[" ",Object(O.jsx)(H.a,{id:"rollback",className:"mr-2"}),Object(O.jsx)("span",{className:"toggle",children:"Resize"})]})]})]}),Object(O.jsxs)("div",{className:"panel-right-part",style:{backgroundColor:"rgb(245,246,248)"},children:[Object(O.jsx)("div",{className:"w-100 py-3 bg-white",children:Object(O.jsx)("div",{})}),Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{exact:!0,path:"/",component:function(){return Object(O.jsx)(E,{login:e.props.login})}}),Object(O.jsx)(u.a,{exact:!0,path:"/getUser",component:P}),Object(O.jsx)(u.a,{exact:!0,path:"/AttendanceLog",component:J})]})]})]}),Object(O.jsx)(V,{})]})}},{key:"componentDidMount",value:function(){var e=document.getElementById("rollback"),t=document.getElementsByClassName("panel-left-part")[0],c=document.getElementsByClassName("toggle");document.getElementsByClassName("option");e.addEventListener("click",(function(){for(var e=0;e<c.length;e++)c[e].classList.toggle("hide");t.classList.toggle("panel-left-part-width")}))}}]),c}(n.a.Component)),W=(c(442),c(459)),Q=c(462),X=c(283),Z=p.a.Title,$=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={login:!1},e.Login=Object(m.a)(b.a.mark((function t(){var c,a,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({login:!0}),c=document.getElementById("username").value,a=document.getElementById("pswd").value,t.next=5,fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:c,pswd:a})});case 5:return n=t.sent,t.next=8,n.json();case 8:(n=t.sent).message?e.props.login():document.querySelector("#login_error").innerHTML="usermame or password incorrect!!",e.setState({login:!1});case 11:case"end":return t.stop()}}),t)}))),e}return Object(i.a)(c,[{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"row login-form  m-0 p-0",children:[Object(O.jsxs)("div",{className:"col-md-6 p-0 m-0 flex-column d-none d-md-flex",children:[Object(O.jsx)("img",{src:"/nutrifactor.png",className:""}),Object(O.jsx)(Z,{level:4,style:{color:"white"},children:"Nutrifactor Attendance System"})]}),Object(O.jsx)("div",{className:"col-md-6  p-0 m-0",children:Object(O.jsxs)("form",{className:"form ",children:[Object(O.jsxs)(Z,{level:5,className:"m-0 mb-3",style:{color:"#008269"},children:[Object(O.jsx)(x.i,{className:"mr-2"}),"Log in to your account"]}),Object(O.jsx)(B.a,{addonAfter:Object(O.jsx)(x.m,{style:{fontSize:"17px"}}),placeholder:"user name",className:"mb-3",id:"username"}),Object(O.jsx)(B.a.Password,{placeholder:"password",className:"mb-3",iconRender:function(e){return e?Object(O.jsx)(Q.a,{}):Object(O.jsx)(X.a,{})},addonAfter:Object(O.jsx)(x.j,{style:{fontSize:"17px"}}),id:"pswd"}),Object(O.jsx)(W.a,{className:"mb-3",style:{color:"#008269"},children:"Remember me"}),this.state.login?Object(O.jsxs)(I.a,{type:"primary",block:!0,style:{backgroundColor:"#008269",borderColor:"#008269"},children:[Object(O.jsx)(A.a,{className:"mr-1"}),"Login"]}):Object(O.jsxs)(I.a,{type:"primary",block:!0,style:{backgroundColor:"#008269",borderColor:"#008269"},onClick:this.Login,children:[Object(O.jsx)(x.i,{className:"mr-2"}),"Login"]}),Object(O.jsx)("small",{id:"login_error",style:{color:"crimson"},className:"mt-3",children:"-"})]})})]})})}}]),c}(n.a.Component),ee=(c(443),function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={login:!1},e.login=function(){e.state.login?e.setState({login:!1}):e.setState({login:!0})},e}return Object(i.a)(c,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:this.state.login?Object(O.jsx)(G,{login:this.login}):Object(O.jsx)($,{login:this.login})})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return function(e){for(var t=e+"=",c=decodeURIComponent(document.cookie).split(";"),a=0;a<c.length;a++){for(var n=c[a];" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(t))return n.substring(t.length,n.length)}return""}("jwt_token")?{login:!0}:null}}]),c}(n.a.Component)),te=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,463)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(l.a,{children:Object(O.jsx)(ee,{})})}),document.getElementById("root")),te()}},[[444,1,2]]]);
//# sourceMappingURL=main.dce3c29f.chunk.js.map
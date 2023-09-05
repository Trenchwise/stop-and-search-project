(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,r){e.exports=r(50)},38:function(e,t,r){},48:function(e,t,r){},50:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(22),o=r(8),c=r(13),l=Object(c.b)({name:"policeData",initialState:{data:"",crimes:[]},reducers:{setPoliceData:function(e,t){e.crimes=t.payload},setCoords:function(e,t){e.coords=t.payload},setStopData:function(e,t){e.stops=t.payload}}}),s=l.actions,u=s.setPoliceData,d=s.setCoords,p=s.setStopData,m=function(e){return e.data.crimes},h=function(e){return e.data.coords},f=function(e){return e.data.stops},v=l.reducer,g=Object(c.a)({reducer:{data:v}}),y=r(20),E=r(6),k=r(53),b=(r(38),function(e){return n.a.createElement("div",{className:"crime"},n.a.createElement("p",{className:"crimeCategory"},"category: ",e.crime.category),n.a.createElement("p",{className:"crimeCategory"},"location type: ",e.crime.location_type),e.crime.context&&n.a.createElement("p",null,"context: ",e.crime.context),n.a.createElement("p",{className:"crimeCategory"},"location: ",e.crime.location.street.name),e.crime.outcome_status&&n.a.createElement("p",{className:"crimeCategory"},"outcome: ",e.crime.outcome_status.category))}),w=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{className:"titles crimeTotals"},"More info"),n.a.createElement("div",{className:"crimes"},e.policeData&&e.policeData.map(function(e,t){return n.a.createElement(b,{crime:e,key:t})})))},x=function(e){return n.a.createElement("p",{className:"crimeTotal"},e.total[0],": ",e.total[1])},C=r(4),_=["#bd6aab","#bd9502","#22a094","#F45B69","#114B5F","#553E4E","#9EBC9E","#9EBC9E","#2274A5","#r3f1259","#g3b0c22","#0d4242","#2a420d","#664c14","#662214","#870808","#051a66","#5c4c53","#515c4c"],N=function(e){for(var t={},r=0;r<e.length;r++)t[e[r].legislation]=t[e[r].legislation]?t[e[r].legislation]+1:1;var a=[];for(var n in t){var i=Math.floor(Math.random()*(_.length-1)),o=_[i];a.push({title:n,value:t[n],color:o})}return a},j=function(e){for(var t=0,r=0;r<e.length;r++)e[r].outcome_linked_to_object_of_search&&(t+=1);return[{title:"Yes",value:t,color:"#bd6aab"},{title:"No  \ud83d\udc40",value:e.length-t,color:"#ffc900"}]},S=function(e){var t=[];return e.forEach(function(e,r){var a={};a.title=e[0],a.value=e[1],a.color=_[r],t.push(a)}),t},A={"Black/African/Caribbean/Black British - Any other Black/African/Caribbean background":"Black","Black/African/Caribbean/Black British - African":"Black African","Black/African/Caribbean/Black British - Caribbean":"Black Caribbean","Mixed/Multiple ethnic groups - Any other Mixed/Multiple ethnic background":"Mixed ethnicity","Mixed/Multiple ethnic groups - White and Asian":"Mixed Asian & White","Mixed/Multiple ethnic groups - White and Black Caribbean":"Mixed Black Caribean & White","Other ethnic group - Any other ethnic group":"Other ethnic group","White - Any other White background":"Other white","White - English/Welsh/Scottish/Northern Irish/British":"White","White - Irish":"White - Irish",null:"Not provided","Other ethnic group - Not stated":"Not stated","Asian/Asian British - Any other Asian background":"Asian other","Asian/Asian British - Bangladeshi":"Aisan - Bangladeshi","Asian/Asian British - Chinese":"Asian - Chinese","Asian/Asian British - Indian":"Asian - Indian","Asian/Asian British - Pakistani":"Asian - Pakistani"},L=function(e){var t={};console.log(t);for(var r=0;r<e.length;r++)t[e[r].self_defined_ethnicity]=t[e[r].self_defined_ethnicity]?t[e[r].self_defined_ethnicity]+1:1;var a=[];for(var n in t)a.push({title:A[n],value:t[n],color:_[Math.floor(Math.random()*_.length-2)]});return a},M=function(e){return n.a.createElement("div",{className:"crimeTotals"},n.a.createElement("h2",{id:"crimesByAreaTitle",className:"titles"},"Crimes in your area"),n.a.createElement("div",{id:"totalsAndCrimeWrapper"},n.a.createElement("div",{id:"totalsPiechart"},n.a.createElement(C.PieChart,{labelPosition:70,style:{fontFamily:'"Urbanist", -apple-system, Helvetica, Arial, sans-serif',fontSize:"10px"},labelStyle:{fill:"#ffffff",opacity:.95,pointerEvents:"none",fontSize:"5px"},lineWidth:60,segmentsStyle:{transition:"stroke .2s",cursor:"pointer"},animate:!0,radius:C.pieChartDefaultProps.radius-10,center:[50,50],segmentsShift:function(e){return 0===e?7:.5},data:S(e.totalsAsArray),label:function(e){return e.dataEntry.title},background:"#1b2d48"}),n.a.createElement("div",{id:"crimeTotalsTextWrapper"},n.a.createElement("h2",{id:"totalsPieChartText"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))),n.a.createElement("div",{id:"totalNumberCrimesWrapper"},n.a.createElement("p",{id:"totalNumberCrimes"}," ","Total Number ",e.policeData&&e.policeData.length),e.totalsAsArray.map(function(e,t){return n.a.createElement(x,{total:e,key:t})}))))},O=function(e){return n.a.createElement("div",{className:"lds-roller"},n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null))},B=r(10),P=r(25),W=function(){return Object(a.useLayoutEffect)(function(){var e;P.a.fromTo(".eye",{x:-25,y:15,duration:2},(e={x:25},Object(B.a)(e,"x",15),Object(B.a)(e,"duration",2),e),{ease:"elastic"})},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"headerWrapper"},n.a.createElement("header",{id:"header"}," ",n.a.createElement("h1",{className:"headerTitle"}," Crime Checker"),n.a.createElement("div",{className:"headerSvgWrapper"},n.a.createElement("svg",{id:"headersvg",viewBox:"0 0 400 400",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),n.a.createElement("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),n.a.createElement("g",{id:"SVGRepo_iconCarrier"}," ",n.a.createElement("path",{className:"glasses",d:"M107.959 118.707C112.507 109.238 119.972 102.956 130.392 101.245C179.396 93.2005 214.204 155.467 173.452 188.916C136.661 219.112 88.5141 182.545 101.445 140.091",stroke:"#000000","stroke-opacity":"0.9","stroke-width":"20","stroke-linecap":"round","stroke-linejoin":"round"})," ",n.a.createElement("path",{className:"glasses",d:"M223.138 126.077C256.976 65.954 347.241 123.665 303.865 178.979C274.655 216.229 207.817 202.447 216.774 149.735",stroke:"#000000","stroke-opacity":"0.9","stroke-width":"20","stroke-linecap":"round","stroke-linejoin":"round"})," ",n.a.createElement("path",{d:"M89.8422 154.097C79.9992 170.208 37.6369 197.245 28.5285 218.499C21.7425 234.332 92.924 220.223 102.399 218.499",stroke:"#1b2d48","stroke-opacity":"0.9","stroke-width":"16","stroke-linecap":"round","stroke-linejoin":"round"})," ",n.a.createElement("path",{d:"M324.597 159.292C395.562 218.499 388.822 230.513 290.988 230.513",stroke:"#1b2d48","stroke-opacity":"0.9","stroke-width":"16","stroke-linecap":"round","stroke-linejoin":"round"})," ",n.a.createElement("path",{d:"M290.988 230.513C291.352 256.859 299.318 320.051 294.391 346.115",stroke:"#1b2d48","stroke-opacity":"0.9","stroke-width":"16","stroke-linecap":"round","stroke-linejoin":"round"})," ",n.a.createElement("path",{d:"M102.402 218.5C108.739 248.16 110.802 315.959 110.802 346.115",stroke:"#1b2d48","stroke-opacity":"0.9","stroke-width":"16","stroke-linecap":"round","stroke-linejoin":"round"})," ",n.a.createElement("path",{d:"M137.364 91.9387C172.521 41.4597 241.039 42.7016 266.303 86.6748",stroke:"#1b2d48","stroke-opacity":"0.9","stroke-width":"16","stroke-linecap":"round","stroke-linejoin":"round"})," ",n.a.createElement("path",{d:"M195.08 148.426C199.92 146.748 211.061 147.13 215.956 147.596",stroke:"#0c0c0d","stroke-opacity":"0.9","stroke-width":"16","stroke-linecap":"round","stroke-linejoin":"round"})," ",n.a.createElement("path",{d:"M132.697 205.682C157.035 257.62 239.597 256.499 260.201 211.626",stroke:"#1b2d48","stroke-opacity":"0.9","stroke-width":"16","stroke-linecap":"round","stroke-linejoin":"round"})," ",n.a.createElement("path",{className:"eye",d:"M142.439 155.071C142.866 151.4 142.787 147.686 142.787 143.991",stroke:"#ffc900","stroke-opacity":"1","stroke-width":"30","stroke-linecap":"round","stroke-linejoin":"round"})," ",n.a.createElement("path",{className:"eye",d:"M265.689 160.092C265.689 155.18 265.811 151.693 266.303 147.198",stroke:"#ffc900","stroke-opacity":"1","stroke-width":"30","stroke-linecap":"round","stroke-linejoin":"round"})," ",n.a.createElement("path",{d:"M91.5781 167.377C86.3674 153.643 89.5855 145.207 91.7203 135.239",stroke:"#1b2d48","stroke-opacity":"0.9","stroke-width":"16","stroke-linecap":"round","stroke-linejoin":"round"})," ",n.a.createElement("path",{d:"M327.589 159.301C332.555 150.783 329.747 143.94 324.789 136.501",stroke:"#1b2d48","stroke-opacity":"0.9","stroke-width":"16","stroke-linecap":"round","stroke-linejoin":"round"})," ",n.a.createElement("path",{d:"M324.393 168.901C325.826 168.178 326.526 166.501 327.593 165.301",stroke:"#1b2d48","stroke-opacity":"0.9","stroke-width":"16","stroke-linecap":"round","stroke-linejoin":"round"})," ",n.a.createElement("path",{d:"M94.0039 160.501C95.4013 159.585 96.9383 159.701 98.4035 159.301",stroke:"#1b2d48","stroke-opacity":"0.9","stroke-width":"16","stroke-linecap":"round","stroke-linejoin":"round"})," "))))))},D=function(){return n.a.createElement("footer",{id:"footer"},"Copyright Jellypop Crime app")},T=function(){return n.a.createElement("div",{id:"introWrapper",className:"globalCard"},n.a.createElement("div",{className:"introSentenceOneWrapper"},n.a.createElement("svg",{className:"introIcon",viewBox:"-143.36 -143.36 1310.72 1310.72",version:"1.1",xmlns:"http://www.w3.org/2000/svg",fill:"#000000",stroke:"#000000","stroke-width":"23.552"},n.a.createElement("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),n.a.createElement("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),n.a.createElement("g",{id:"SVGRepo_iconCarrier"},n.a.createElement("path",{d:"M474.9 489.3m-140.3 0a140.3 140.3 0 1 0 280.6 0 140.3 140.3 0 1 0-280.6 0Z",fill:"#ffc900"}),n.a.createElement("path",{d:"M582.8 465.5c-13.3 0-24.6 8.7-28.5 20.7h-0.1c-2 6.4-4.6 12.7-7.7 18.7l0.2 0.1c-2.3 4.2-3.6 9.1-3.6 14.3 0 16.6 13.4 30 30 30 13 0 24-8.2 28.2-19.8 3.6-7.3 6.7-14.8 9.3-22.6 1.4-3.5 2.2-7.3 2.2-11.4 0-16.5-13.4-30-30-30z",fill:"#ff90e7"}),n.a.createElement("path",{d:"M512 552.5c-6.8 0-13 2.3-18.1 6.1-17.9 9.6-38 14.6-58.8 14.6-33.4 0-64.8-13-88.4-36.6-23.6-23.6-36.6-55-36.6-88.4s13-64.8 36.6-88.4c23.6-23.6 55-36.6 88.4-36.6s64.8 13 88.4 36.6c15.6 15.6 26.6 34.7 32.2 55.4v0.2h0.1c2.9 13.5 14.9 23.7 29.3 23.7 16.6 0 30-13.4 30-30 0-3.5-0.6-6.8-1.7-9.9-21.5-78.4-93.2-136-178.4-136-102.2 0-185 82.8-185 185s82.8 185 185 185c33.6 0 65-8.9 92.1-24.6l-0.1-0.2c8.9-5.2 14.9-14.9 14.9-25.9 0.1-16.6-13.3-30-29.9-30z",fill:"#ff90e7"}),n.a.createElement("path",{d:"M435.1 122.6c42.2 0 83.1 8.3 121.6 24.5 37.2 15.7 70.6 38.3 99.4 67s51.3 62.1 67 99.4c16.3 38.5 24.5 79.4 24.5 121.6 0 42.2-8.3 83.1-24.5 121.6-15.7 37.2-38.3 70.6-67 99.4-28.7 28.7-62.1 51.3-99.4 67-38.5 16.3-79.4 24.5-121.6 24.5s-83.1-8.3-121.6-24.5c-37.2-15.7-70.6-38.3-99.3-67-28.7-28.7-51.3-62.1-67-99.3-16.3-38.5-24.5-79.4-24.5-121.6s8.3-83.1 24.5-121.6c15.7-37.2 38.3-70.6 67-99.4 28.7-28.7 62.1-51.3 99.4-67 38.4-16.3 79.3-24.6 121.5-24.6m0-60c-205.7 0-372.5 166.8-372.5 372.5s166.8 372.5 372.5 372.5 372.5-166.8 372.5-372.5S640.8 62.6 435.1 62.6z",fill:"#45484C"}),n.a.createElement("path",{d:"M906.7 949.4L671.8 714.5c-11.7-11.7-11.7-30.8 0-42.4 11.7-11.7 30.8-11.7 42.4 0L949.1 907c11.7 11.7 11.7 30.8 0 42.4-11.6 11.6-30.7 11.6-42.4 0z",fill:"#45484C"}))),n.a.createElement("h3",{className:"headerSubTitle"},"Check the type and frequency of crime in your area")),n.a.createElement("div",{className:"introSentenceTwoWrapper"},n.a.createElement("svg",{className:"introIcon",viewBox:"-143.36 -143.36 1310.72 1310.72",version:"1.1",xmlns:"http://www.w3.org/2000/svg",fill:"#000000",stroke:"#000000","stroke-width":"23.552"},n.a.createElement("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),n.a.createElement("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),n.a.createElement("g",{id:"SVGRepo_iconCarrier"},n.a.createElement("path",{d:"M474.9 489.3m-140.3 0a140.3 140.3 0 1 0 280.6 0 140.3 140.3 0 1 0-280.6 0Z",fill:"#ffc900"}),n.a.createElement("path",{d:"M582.8 465.5c-13.3 0-24.6 8.7-28.5 20.7h-0.1c-2 6.4-4.6 12.7-7.7 18.7l0.2 0.1c-2.3 4.2-3.6 9.1-3.6 14.3 0 16.6 13.4 30 30 30 13 0 24-8.2 28.2-19.8 3.6-7.3 6.7-14.8 9.3-22.6 1.4-3.5 2.2-7.3 2.2-11.4 0-16.5-13.4-30-30-30z",fill:"#ff90e7"}),n.a.createElement("path",{d:"M512 552.5c-6.8 0-13 2.3-18.1 6.1-17.9 9.6-38 14.6-58.8 14.6-33.4 0-64.8-13-88.4-36.6-23.6-23.6-36.6-55-36.6-88.4s13-64.8 36.6-88.4c23.6-23.6 55-36.6 88.4-36.6s64.8 13 88.4 36.6c15.6 15.6 26.6 34.7 32.2 55.4v0.2h0.1c2.9 13.5 14.9 23.7 29.3 23.7 16.6 0 30-13.4 30-30 0-3.5-0.6-6.8-1.7-9.9-21.5-78.4-93.2-136-178.4-136-102.2 0-185 82.8-185 185s82.8 185 185 185c33.6 0 65-8.9 92.1-24.6l-0.1-0.2c8.9-5.2 14.9-14.9 14.9-25.9 0.1-16.6-13.3-30-29.9-30z",fill:"#ff90e7"}),n.a.createElement("path",{d:"M435.1 122.6c42.2 0 83.1 8.3 121.6 24.5 37.2 15.7 70.6 38.3 99.4 67s51.3 62.1 67 99.4c16.3 38.5 24.5 79.4 24.5 121.6 0 42.2-8.3 83.1-24.5 121.6-15.7 37.2-38.3 70.6-67 99.4-28.7 28.7-62.1 51.3-99.4 67-38.5 16.3-79.4 24.5-121.6 24.5s-83.1-8.3-121.6-24.5c-37.2-15.7-70.6-38.3-99.3-67-28.7-28.7-51.3-62.1-67-99.3-16.3-38.5-24.5-79.4-24.5-121.6s8.3-83.1 24.5-121.6c15.7-37.2 38.3-70.6 67-99.4 28.7-28.7 62.1-51.3 99.4-67 38.4-16.3 79.3-24.6 121.5-24.6m0-60c-205.7 0-372.5 166.8-372.5 372.5s166.8 372.5 372.5 372.5 372.5-166.8 372.5-372.5S640.8 62.6 435.1 62.6z",fill:"#45484C"}),n.a.createElement("path",{d:"M906.7 949.4L671.8 714.5c-11.7-11.7-11.7-30.8 0-42.4 11.7-11.7 30.8-11.7 42.4 0L949.1 907c11.7 11.7 11.7 30.8 0 42.4-11.6 11.6-30.7 11.6-42.4 0z",fill:"#45484C"}))),n.a.createElement("h3",null,"Check stops made by the police. Did they find what they were looking for?")))},I=function(e){return n.a.createElement("div",{className:"stopItemWrapper"},n.a.createElement("p",{className:"stopItem"},"type: ",e.stop.type),n.a.createElement("p",{className:"stopItem"},"outcome: ",e.stop.outcome),n.a.createElement("p",{className:"stopItem"},"outcome_linked_to_object_of_search:",e.stop.outcome_linked_to_object_of_search),n.a.createElement("p",{className:"stopItem"},"age of person: ",e.stop.age_range),n.a.createElement("p",{className:"stopItem"},"self_defined_ethnicity: ",e.stop.self_defined_ethnicity),n.a.createElement("p",{className:"stopItem"},"gender: ",e.stop.gender),n.a.createElement("p",{className:"stopItem"},"officer_defined_ethnicity: ",e.stop.officer_defined_ethnicity))},F=function(e){return n.a.createElement("div",{className:"stops"},e.stopsData&&e.stopsData.map(function(e,t){return n.a.createElement(I,{stop:e,key:t})}))},q=function(e){return n.a.createElement("div",{className:"OutcomeLinkedPieWrapper"},n.a.createElement("h2",{id:"outcomesTitle",className:"titles"},"Did the police find what they were looking for?"),n.a.createElement("div",{className:"innerOutcomeLinkedWrapper"},n.a.createElement(C.PieChart,{labelPosition:70,style:{fontFamily:'"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',fontSize:"2px"},labelStyle:{fill:"#ffffff",opacity:.85,pointerEvents:"none",fontSize:"px"},radius:C.pieChartDefaultProps.radius-7,center:[50,50],segmentsShift:function(e){return 0===e?7:.5},data:j(e.stopsData),label:function(e){var t=e.dataEntry;return t.title+" "+t.value},background:"#1b2d48"}),n.a.createElement("div",{id:"OutcomeLinkedTextWrapper"},n.a.createElement("h2",{className:"pieText"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))))},G=function(e){return n.a.createElement("div",{className:"legislationPieWrapper"},n.a.createElement("h2",{className:"titles"},"Legislation used to conduct Stop and Search"),n.a.createElement("div",{className:"innerlegislationPieWrapper"},n.a.createElement(C.PieChart,{labelPosition:70,style:{fontFamily:'"Urbanist", -apple-system, Helvetica, Arial, sans-serif',fontSize:"5px"},labelStyle:{fill:"#fff",opacity:.95,pointerEvents:"none",fontSize:"5px"},lineWidth:60,segmentsStyle:{transition:"stroke .2s",cursor:"pointer"},animate:!0,radius:C.pieChartDefaultProps.radius-10,center:[50,50],segmentsShift:function(e){return 0===e?7:.5},data:N(e.stopsData),label:function(e){var t=e.dataEntry;return t.title+" "+t.value},background:"#1b2d48"}),n.a.createElement("div",null,n.a.createElement("h2",{className:"pieText"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))))},z=function(e){return n.a.createElement("div",{className:"EthnicityPieWrapper"},n.a.createElement("h2",{className:"titles"},"Legislation used to conduct Stop and Search"),n.a.createElement("div",{className:"innerEthnicityPieWrapper"},n.a.createElement(C.PieChart,{labelPosition:70,style:{fontFamily:'"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',fontSize:"2px"},labelStyle:{fill:"#888",opacity:.85,pointerEvents:"none",fontSize:"px"},lineWidth:60,segmentsStyle:{transition:"stroke .2s",cursor:"pointer"},animate:!0,radius:C.pieChartDefaultProps.radius-7,center:[50,50],segmentsShift:function(e){return 0===e?7:.5},data:L(e.stopsData),label:function(e){var t=e.dataEntry;return t.title+" "+t.value},background:"#1b2d48"}),n.a.createElement("div",{id:"EthnicityPieWrapper"},n.a.createElement("h2",{className:"pieText"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))))};function R(){R=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var i=t&&t.prototype instanceof p?t:p,o=Object.create(i.prototype),c=new _(n||[]);return a(o,"_invoke",{value:b(e,r,c)}),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var d={};function p(){}function m(){}function h(){}var f={};l(f,i,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(N([])));g&&g!==t&&r.call(g,i)&&(f=g);var y=h.prototype=p.prototype=Object.create(f);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function k(e,t){var n;a(this,"_invoke",{value:function(a,i){function o(){return new t(function(n,o){!function a(n,i,o,c){var l=u(e[n],e,i);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then(function(e){a("next",e,o,c)},function(e){a("throw",e,o,c)}):t.resolve(d).then(function(e){s.value=e,o(s)},function(e){return a("throw",e,o,c)})}c(l.arg)}(a,i,n,o)})}return n=n?n.then(o,o):o()}})}function b(e,t,r){var a="suspendedStart";return function(n,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw i;return j()}for(r.method=n,r.arg=i;;){var o=r.delegate;if(o){var c=w(o,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var l=u(e,t,r);if("normal"===l.type){if(a=r.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a="completed",r.method="throw",r.arg=l.arg)}}}function w(e,t){var r=t.method,a=e.iterator[r];if(void 0===a)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var n=u(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function N(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,n=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return m.prototype=h,a(y,"constructor",{value:h,configurable:!0}),a(h,"constructor",{value:m,configurable:!0}),m.displayName=l(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(k.prototype),l(k.prototype,o,function(){return this}),e.AsyncIterator=k,e.async=function(t,r,a,n,i){void 0===i&&(i=Promise);var o=new k(s(t,r,a,n),i);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(y),l(y,c,"Generator"),l(y,i,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var a in t)r.push(a);return r.reverse(),function e(){for(;r.length;){var a=r.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=N,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return o.type="throw",o.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;C(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}var V=function(){var e=Object(o.b)(),t=Object(o.c)(h),r=Object(o.c)(m),i=Object(o.c)(f),c=Object(a.useState)(!1),l=Object(E.a)(c,2),s=l[0],v=l[1];Object(a.useEffect)(function(){navigator.geolocation.getCurrentPosition(function(t){e(d({latitude:t.coords.latitude,longitude:t.coords.longitude}))},function(e){console.log(e)})},[]);var g=function(){var r=Object(y.a)(R().mark(function r(){var a,n,i,o,c;return R().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=2;break}return r.abrupt("return");case 2:return a=new Date,n="https://data.police.uk/api/crimes-at-location?date=".concat(a.getFullYear(),"-0").concat(a.getMonth()-2,"&lat=").concat(t.latitude,"&lng=").concat(t.longitude),i="https://data.police.uk/api/stops-street?&date=".concat(a.getFullYear(),"-0").concat(a.getMonth()-2,"&lat=").concat(t.latitude,"&lng=").concat(t.longitude),r.prev=5,r.next=8,k.a.get(n);case 8:return o=r.sent,r.next=11,k.a.get(i);case 11:c=r.sent,e(u(o.data)),e(p(c.data)),N(c.data),r.next=20;break;case 17:r.prev=17,r.t0=r.catch(5),console.log(r.t0);case 20:case"end":return r.stop()}},r,null,[[5,17]])}));return function(){return r.apply(this,arguments)}}();Object(a.useEffect)(function(){g()},[t]);var b=function(){var t=Object(y.a)(R().mark(function t(r){var a,n;return R().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v(!0),t.next=4,k.a.get("https://api.openweathermap.org/geo/1.0/direct?q=".concat(r.target.value,"&limit=1&appid=17a3e02a9cc47ed1eac90bc2f9c0012a"));case 4:if(a=t.sent,n=a.data,v(!1),0!==n.length||"GB"===n[0].country){t.next=9;break}return t.abrupt("return");case 9:e(d({latitude:n[0].lat,longitude:n[0].lon})),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(0);case 14:case"end":return t.stop()}},t,null,[[0,12]])}));return function(e){return t.apply(this,arguments)}}(),x={};r.forEach(function(e){x[e.category]=x[e.category]?x[e.category]+1:1});var C=Object.entries(x),_={};r.forEach(function(e){_[e.outcome_linked_to_object_of_search]=_[e.outcome_linked_to_object_of_search]?_[e.outcome_linked_to_object_of_search]+1:1});var j=Object.entries(q);return n.a.createElement("div",{id:"pageContainer"},n.a.createElement("div",{className:"crimeApp"},n.a.createElement(W,null),n.a.createElement(T,null),s&&n.a.createElement(O,null),n.a.createElement("div",{id:"inputBoxWrapper"},n.a.createElement("input",{onInput:b,type:"text",placeholder:"Area here",id:"inputBox"}))),r.length>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement(M,{totalsAsArray:C,policeData:r,linkedObjectsAsArray:j}),n.a.createElement(G,{stopsData:i}),n.a.createElement(q,{stopsData:i}),n.a.createElement(z,{stopsData:i}),n.a.createElement(w,{policeData:r}),n.a.createElement(F,{stopsData:i})),n.a.createElement(D,null))},U=function(e){e&&e instanceof Function&&r.e(1).then(r.bind(null,52)).then(function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,o=t.getTTFB;r(e),a(e),n(e),i(e),o(e)})},Y=(r(48),document.getElementById("root"));Object(i.createRoot)(Y).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(o.a,{store:g},n.a.createElement(V,null)))),U()}},[[26,3,2]]]);
//# sourceMappingURL=main.555c2478.chunk.js.map
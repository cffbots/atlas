(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3,4],{238:function(e,t,n){"use strict";n.r(t);var r={props:{text:{type:String,required:!0},target:{type:String,required:!1,default:""}}},c=n(38),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("NuxtLink",{attrs:{to:e.target}},[n("button",{staticClass:"bg-transparent hover:bg-gray-500 active:bg-gray-700\n      text-gray-700 font-semibold hover:text-white py-2 px-4 border\n      border-gray-500 hover:border-transparent rounded-full\n      focus:outline-none"},[e._v("\n      "+e._s(e.text)+"\n    ")])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:n(238).default})},239:function(e,t,n){"use strict";n.r(t);var r={props:{value:null,options:{type:Object,required:!0}},data:function(){return{selectedOption:null}},watch:{value:function(e){this.selectedOption=e}},mounted:function(){this.selectedOption=this.value}},c=n(38),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative inline-flex"},[n("svg",{staticClass:"w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 412 232"}},[n("path",{attrs:{d:"M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355\n    0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677\n    7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592\n    0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z",fill:"#648299","fill-rule":"nonzero"}})]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption,expression:"selectedOption"}],staticClass:"border border-gray-300 rounded-full\n  text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400\n  focus:outline-none appearance-none",on:{input:function(t){e.$emit("input",t.target.value)},change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedOption=t.target.multiple?n:n[0]}}},e._l(e.options,(function(option,t){return n("option",{key:t,domProps:{value:t}},[e._v("\n      "+e._s(option)+"\n    ")])})),0)])}),[],!1,null,null,null);t.default=component.exports},240:function(e,t,n){var map={"./eur_pr_41-60_djf_cmip6_10perc.png":241,"./eur_pr_41-60_djf_cmip6_25perc.png":242,"./eur_pr_41-60_djf_cmip6_50perc.png":243,"./eur_pr_41-60_djf_cmip6_75perc.png":244,"./eur_pr_41-60_djf_cmip6_90perc.png":245,"./eur_pr_41-60_jja_cmip6_10perc.png":246,"./eur_pr_41-60_jja_cmip6_25perc.png":247,"./eur_pr_41-60_jja_cmip6_50perc.png":248,"./eur_pr_41-60_jja_cmip6_75perc.png":249,"./eur_pr_41-60_jja_cmip6_90perc.png":250,"./eur_tas_41-60_djf_cmip6_10perc.png":251,"./eur_tas_41-60_djf_cmip6_25perc.png":252,"./eur_tas_41-60_djf_cmip6_50perc.png":253,"./eur_tas_41-60_djf_cmip6_75perc.png":254,"./eur_tas_41-60_djf_cmip6_90perc.png":255,"./eur_tas_41-60_jja_cmip6_10perc.png":256,"./eur_tas_41-60_jja_cmip6_25perc.png":257,"./eur_tas_41-60_jja_cmip6_50perc.png":258,"./eur_tas_41-60_jja_cmip6_75perc.png":259,"./eur_tas_41-60_jja_cmip6_90perc.png":260};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=c,e.exports=r,r.id=240},241:function(e,t,n){e.exports=n.p+"img/eur_pr_41-60_djf_cmip6_10perc.aa0aaae.png"},242:function(e,t,n){e.exports=n.p+"img/eur_pr_41-60_djf_cmip6_25perc.f1b9c07.png"},243:function(e,t,n){e.exports=n.p+"img/eur_pr_41-60_djf_cmip6_50perc.4a05096.png"},244:function(e,t,n){e.exports=n.p+"img/eur_pr_41-60_djf_cmip6_75perc.1709c4c.png"},245:function(e,t,n){e.exports=n.p+"img/eur_pr_41-60_djf_cmip6_90perc.8bab82b.png"},246:function(e,t,n){e.exports=n.p+"img/eur_pr_41-60_jja_cmip6_10perc.fa84b0d.png"},247:function(e,t,n){e.exports=n.p+"img/eur_pr_41-60_jja_cmip6_25perc.c1377f7.png"},248:function(e,t,n){e.exports=n.p+"img/eur_pr_41-60_jja_cmip6_50perc.a7ee2d2.png"},249:function(e,t,n){e.exports=n.p+"img/eur_pr_41-60_jja_cmip6_75perc.96c2b05.png"},250:function(e,t,n){e.exports=n.p+"img/eur_pr_41-60_jja_cmip6_90perc.7b70418.png"},251:function(e,t,n){e.exports=n.p+"img/eur_tas_41-60_djf_cmip6_10perc.658abb5.png"},252:function(e,t,n){e.exports=n.p+"img/eur_tas_41-60_djf_cmip6_25perc.b147bb5.png"},253:function(e,t,n){e.exports=n.p+"img/eur_tas_41-60_djf_cmip6_50perc.efdca7e.png"},254:function(e,t,n){e.exports=n.p+"img/eur_tas_41-60_djf_cmip6_75perc.9bef2bc.png"},255:function(e,t,n){e.exports=n.p+"img/eur_tas_41-60_djf_cmip6_90perc.bd390ce.png"},256:function(e,t,n){e.exports=n.p+"img/eur_tas_41-60_jja_cmip6_10perc.6626262.png"},257:function(e,t,n){e.exports=n.p+"img/eur_tas_41-60_jja_cmip6_25perc.24e0495.png"},258:function(e,t,n){e.exports=n.p+"img/eur_tas_41-60_jja_cmip6_50perc.adc999c.png"},259:function(e,t,n){e.exports=n.p+"img/eur_tas_41-60_jja_cmip6_75perc.bef0b26.png"},260:function(e,t,n){e.exports=n.p+"img/eur_tas_41-60_jja_cmip6_90perc.74d512c.png"},261:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{selectedDataset:"cmip6",selectedPercentile:"10",selectedSeason:"djf",selectedVariable:"tas",selectedMethod:"climwip",selectedConstrained:"diff",datasets:{cmip6:"CMIP6"},percentiles:{10:"10-percentile",25:"25-percentile",50:"50-percentile",75:"75-percentile",90:"90-percentile"},seasons:{djf:"Winter",jja:"Summer"},variables:{tas:"Temperature",pr:"Precipitation"},methods:{climwip:"ClimWIP"},constrainedOptions:{constrained:"Constrained",unconstrained:"Unconstrained",diff:"Difference"}}}},c=n(38),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),e._v(" "),r("div",{staticClass:"flex place-content-center space-x-1"},[r("Dropdown",{attrs:{options:e.variables},model:{value:e.selectedVariable,callback:function(t){e.selectedVariable=t},expression:"selectedVariable"}}),e._v(" "),r("Dropdown",{attrs:{options:e.seasons},model:{value:e.selectedSeason,callback:function(t){e.selectedSeason=t},expression:"selectedSeason"}}),e._v(" "),r("Dropdown",{attrs:{options:e.percentiles},model:{value:e.selectedPercentile,callback:function(t){e.selectedPercentile=t},expression:"selectedPercentile"}}),e._v(" "),r("Dropdown",{attrs:{options:e.datasets},model:{value:e.selectedDataset,callback:function(t){e.selectedDataset=t},expression:"selectedDataset"}}),e._v(" "),r("Dropdown",{attrs:{options:e.methods},model:{value:e.selectedMethod,callback:function(t){e.selectedMethod=t},expression:"selectedMethod"}}),e._v(" "),r("Dropdown",{attrs:{options:e.constrainedOptions},model:{value:e.selectedConstrained,callback:function(t){e.selectedConstrained=t},expression:"selectedConstrained"}})],1),e._v(" "),r("div",{staticClass:"flex overflow-auto place-content-center"},[r("img",{staticClass:"object-contain h-96 w-auto max-w-full max-h-full",attrs:{src:n(240)("./eur_"+e.selectedVariable+"_41-60_"+e.selectedSeason+"_"+e.selectedDataset+"_"+e.selectedPercentile+"perc.png"),alt:"Map of climate projections for Europe"}})]),e._v(" "),r("div",{staticClass:"flex place-content-end space-x-3"},[r("Button",{attrs:{text:"More info",target:"/about"}}),e._v(" "),r("Button",{attrs:{text:"Download data"}})],1)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex place-content-center m-4"},[n("h1",{staticClass:"text-2xl"},[e._v("\n      EUCP WP2 - Atlas of constrained climate projections")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Dropdown:n(239).default,Button:n(238).default})}}]);
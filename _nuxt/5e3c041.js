(window.webpackJsonp=window.webpackJsonp||[]).push([[0,3,4],Array(239).concat([function(_,e,n){"use strict";n.r(e);var c={props:{text:{type:String,required:!0},target:{type:String,required:!1,default:""}}},r=n(38),component=Object(r.a)(c,(function(){var _=this,e=_.$createElement,n=_._self._c||e;return n("div",[n("NuxtLink",{attrs:{to:_.target}},[n("button",{staticClass:"bg-transparent hover:bg-gray-500 active:bg-gray-700\n      text-gray-700 font-semibold hover:text-white py-2 px-4 border\n      border-gray-500 hover:border-transparent rounded-full\n      focus:outline-none"},[_._v("\n      "+_._s(_.text)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(239).default})},function(_,e,n){var content=n(242);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[_.i,content,""]]),content.locals&&(_.exports=content.locals);(0,n(66).default)("e742697c",content,!0,{sourceMap:!1})},function(_,e,n){"use strict";n(240)},function(_,e,n){var c=n(65)((function(i){return i[1]}));c.push([_.i,"/*purgecss start ignore*/\n.custom-top{\n  top:4.3rem\n}\n\n/*purgecss end ignore*/",""]),c.locals={},_.exports=c},function(_,e,n){"use strict";n.r(e);var c={props:{value:null,options:{type:Object,required:!0},alttext:null},data:function(){return{hover:!1,selectedOption:null}},watch:{value:function(_){this.selectedOption=_}},mounted:function(){this.selectedOption=this.value}},r=(n(241),n(38)),component=Object(r.a)(c,(function(){var _=this,e=_.$createElement,n=_._self._c||e;return n("div",{staticClass:"relative inline-flex"},[n("svg",{staticClass:"w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 412 232"}},[n("path",{attrs:{d:"M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355\n    0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677\n    7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592\n    0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z",fill:"#648299","fill-rule":"nonzero"}})]),_._v(" "),n("div",[_.hover?n("span",{staticClass:"absolute flex justify-center items-center bg-white bottom-14 right-0\n    border border-gray-100 rounded shadow-lg h-20 w-40",attrs:{id:"popup"}},[n("div",{staticClass:"absolute custom-top bg-white transform rotate-45 z-0\n      border-b-3 border-t-0 border-r-3 border-l-0 border-gray-100 p-2"}),_._v(" "),n("p",{staticClass:"text-gray-600 w-30 text-sm text-center m-1 p-1 z-10"},[_._v("\n        "+_._s(_.alttext)+"\n      ")])]):_._e(),_._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:_.selectedOption,expression:"selectedOption"}],staticClass:"border border-gray-300 rounded-full cursor-pointer\n    text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400\n    focus:outline-none appearance-none",on:{mouseover:function(e){_.hover=!0},mouseleave:function(e){_.hover=!1},input:function(e){_.$emit("input",e.target.value)},change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(_){return _.selected})).map((function(_){return"_value"in _?_._value:_.value}));_.selectedOption=e.target.multiple?n:n[0]}}},_._l(_.options,(function(option,e){return n("option",{key:e,domProps:{value:e}},[_._v("\n        "+_._s(option)+"\n      ")])})),0)])])}),[],!1,null,null,null);e.default=component.exports},function(_,e,n){var map={"./eur_ETHZ_ClimWIP_pr_41-60_djf_cmip6_10perc_cons.png":245,"./eur_ETHZ_ClimWIP_pr_41-60_djf_cmip6_10perc_uncons.png":246,"./eur_ETHZ_ClimWIP_pr_41-60_djf_cmip6_25perc_cons.png":247,"./eur_ETHZ_ClimWIP_pr_41-60_djf_cmip6_25perc_uncons.png":248,"./eur_ETHZ_ClimWIP_pr_41-60_djf_cmip6_50perc_cons.png":249,"./eur_ETHZ_ClimWIP_pr_41-60_djf_cmip6_50perc_uncons.png":250,"./eur_ETHZ_ClimWIP_pr_41-60_djf_cmip6_75perc_cons.png":251,"./eur_ETHZ_ClimWIP_pr_41-60_djf_cmip6_75perc_uncons.png":252,"./eur_ETHZ_ClimWIP_pr_41-60_djf_cmip6_90perc_cons.png":253,"./eur_ETHZ_ClimWIP_pr_41-60_djf_cmip6_90perc_uncons.png":254,"./eur_ETHZ_ClimWIP_pr_41-60_jja_cmip6_10perc_cons.png":255,"./eur_ETHZ_ClimWIP_pr_41-60_jja_cmip6_10perc_uncons.png":256,"./eur_ETHZ_ClimWIP_pr_41-60_jja_cmip6_25perc_cons.png":257,"./eur_ETHZ_ClimWIP_pr_41-60_jja_cmip6_25perc_uncons.png":258,"./eur_ETHZ_ClimWIP_pr_41-60_jja_cmip6_50perc_cons.png":259,"./eur_ETHZ_ClimWIP_pr_41-60_jja_cmip6_50perc_uncons.png":260,"./eur_ETHZ_ClimWIP_pr_41-60_jja_cmip6_75perc_cons.png":261,"./eur_ETHZ_ClimWIP_pr_41-60_jja_cmip6_75perc_uncons.png":262,"./eur_ETHZ_ClimWIP_pr_41-60_jja_cmip6_90perc_cons.png":263,"./eur_ETHZ_ClimWIP_pr_41-60_jja_cmip6_90perc_uncons.png":264,"./eur_ETHZ_ClimWIP_tas_41-60_djf_cmip6_10perc_cons.png":265,"./eur_ETHZ_ClimWIP_tas_41-60_djf_cmip6_10perc_uncons.png":266,"./eur_ETHZ_ClimWIP_tas_41-60_djf_cmip6_25perc_cons.png":267,"./eur_ETHZ_ClimWIP_tas_41-60_djf_cmip6_25perc_uncons.png":268,"./eur_ETHZ_ClimWIP_tas_41-60_djf_cmip6_50perc_cons.png":269,"./eur_ETHZ_ClimWIP_tas_41-60_djf_cmip6_50perc_uncons.png":270,"./eur_ETHZ_ClimWIP_tas_41-60_djf_cmip6_75perc_cons.png":271,"./eur_ETHZ_ClimWIP_tas_41-60_djf_cmip6_75perc_uncons.png":272,"./eur_ETHZ_ClimWIP_tas_41-60_djf_cmip6_90perc_cons.png":273,"./eur_ETHZ_ClimWIP_tas_41-60_djf_cmip6_90perc_uncons.png":274,"./eur_ETHZ_ClimWIP_tas_41-60_jja_cmip6_10perc_cons.png":275,"./eur_ETHZ_ClimWIP_tas_41-60_jja_cmip6_10perc_uncons.png":276,"./eur_ETHZ_ClimWIP_tas_41-60_jja_cmip6_25perc_cons.png":277,"./eur_ETHZ_ClimWIP_tas_41-60_jja_cmip6_25perc_uncons.png":278,"./eur_ETHZ_ClimWIP_tas_41-60_jja_cmip6_50perc_cons.png":279,"./eur_ETHZ_ClimWIP_tas_41-60_jja_cmip6_50perc_uncons.png":280,"./eur_ETHZ_ClimWIP_tas_41-60_jja_cmip6_75perc_cons.png":281,"./eur_ETHZ_ClimWIP_tas_41-60_jja_cmip6_75perc_uncons.png":282,"./eur_ETHZ_ClimWIP_tas_41-60_jja_cmip6_90perc_cons.png":283,"./eur_ETHZ_ClimWIP_tas_41-60_jja_cmip6_90perc_uncons.png":284,"./eur_IPSL_REA_pr_41-60_djf_cmip5_10perc_cons.png":285,"./eur_IPSL_REA_pr_41-60_djf_cmip5_10perc_uncons.png":286,"./eur_IPSL_REA_pr_41-60_djf_cmip5_25perc_cons.png":287,"./eur_IPSL_REA_pr_41-60_djf_cmip5_25perc_uncons.png":288,"./eur_IPSL_REA_pr_41-60_djf_cmip5_50perc_cons.png":289,"./eur_IPSL_REA_pr_41-60_djf_cmip5_50perc_uncons.png":290,"./eur_IPSL_REA_pr_41-60_djf_cmip5_75perc_cons.png":291,"./eur_IPSL_REA_pr_41-60_djf_cmip5_75perc_uncons.png":292,"./eur_IPSL_REA_pr_41-60_djf_cmip5_90perc_cons.png":293,"./eur_IPSL_REA_pr_41-60_djf_cmip5_90perc_uncons.png":294,"./eur_IPSL_REA_pr_41-60_djf_cmip6_10perc_cons.png":295,"./eur_IPSL_REA_pr_41-60_djf_cmip6_10perc_uncons.png":296,"./eur_IPSL_REA_pr_41-60_djf_cmip6_25perc_cons.png":297,"./eur_IPSL_REA_pr_41-60_djf_cmip6_25perc_uncons.png":298,"./eur_IPSL_REA_pr_41-60_djf_cmip6_50perc_cons.png":299,"./eur_IPSL_REA_pr_41-60_djf_cmip6_50perc_uncons.png":300,"./eur_IPSL_REA_pr_41-60_djf_cmip6_75perc_cons.png":301,"./eur_IPSL_REA_pr_41-60_djf_cmip6_75perc_uncons.png":302,"./eur_IPSL_REA_pr_41-60_djf_cmip6_90perc_cons.png":303,"./eur_IPSL_REA_pr_41-60_djf_cmip6_90perc_uncons.png":304,"./eur_IPSL_REA_pr_41-60_jja_cmip5_10perc_cons.png":305,"./eur_IPSL_REA_pr_41-60_jja_cmip5_10perc_uncons.png":306,"./eur_IPSL_REA_pr_41-60_jja_cmip5_25perc_cons.png":307,"./eur_IPSL_REA_pr_41-60_jja_cmip5_25perc_uncons.png":308,"./eur_IPSL_REA_pr_41-60_jja_cmip5_50perc_cons.png":309,"./eur_IPSL_REA_pr_41-60_jja_cmip5_50perc_uncons.png":310,"./eur_IPSL_REA_pr_41-60_jja_cmip5_75perc_cons.png":311,"./eur_IPSL_REA_pr_41-60_jja_cmip5_75perc_uncons.png":312,"./eur_IPSL_REA_pr_41-60_jja_cmip5_90perc_cons.png":313,"./eur_IPSL_REA_pr_41-60_jja_cmip5_90perc_uncons.png":314,"./eur_IPSL_REA_pr_41-60_jja_cmip6_10perc_cons.png":315,"./eur_IPSL_REA_pr_41-60_jja_cmip6_10perc_uncons.png":316,"./eur_IPSL_REA_pr_41-60_jja_cmip6_25perc_cons.png":317,"./eur_IPSL_REA_pr_41-60_jja_cmip6_25perc_uncons.png":318,"./eur_IPSL_REA_pr_41-60_jja_cmip6_50perc_cons.png":319,"./eur_IPSL_REA_pr_41-60_jja_cmip6_50perc_uncons.png":320,"./eur_IPSL_REA_pr_41-60_jja_cmip6_75perc_cons.png":321,"./eur_IPSL_REA_pr_41-60_jja_cmip6_75perc_uncons.png":322,"./eur_IPSL_REA_pr_41-60_jja_cmip6_90perc_cons.png":323,"./eur_IPSL_REA_pr_41-60_jja_cmip6_90perc_uncons.png":324,"./eur_IPSL_REA_tas_41-60_djf_cmip5_10perc_cons.png":325,"./eur_IPSL_REA_tas_41-60_djf_cmip5_10perc_uncons.png":326,"./eur_IPSL_REA_tas_41-60_djf_cmip5_25perc_cons.png":327,"./eur_IPSL_REA_tas_41-60_djf_cmip5_25perc_uncons.png":328,"./eur_IPSL_REA_tas_41-60_djf_cmip5_50perc_cons.png":329,"./eur_IPSL_REA_tas_41-60_djf_cmip5_50perc_uncons.png":330,"./eur_IPSL_REA_tas_41-60_djf_cmip5_75perc_cons.png":331,"./eur_IPSL_REA_tas_41-60_djf_cmip5_75perc_uncons.png":332,"./eur_IPSL_REA_tas_41-60_djf_cmip5_90perc_cons.png":333,"./eur_IPSL_REA_tas_41-60_djf_cmip5_90perc_uncons.png":334,"./eur_IPSL_REA_tas_41-60_djf_cmip6_10perc_cons.png":335,"./eur_IPSL_REA_tas_41-60_djf_cmip6_10perc_uncons.png":336,"./eur_IPSL_REA_tas_41-60_djf_cmip6_25perc_cons.png":337,"./eur_IPSL_REA_tas_41-60_djf_cmip6_25perc_uncons.png":338,"./eur_IPSL_REA_tas_41-60_djf_cmip6_50perc_cons.png":339,"./eur_IPSL_REA_tas_41-60_djf_cmip6_50perc_uncons.png":340,"./eur_IPSL_REA_tas_41-60_djf_cmip6_75perc_cons.png":341,"./eur_IPSL_REA_tas_41-60_djf_cmip6_75perc_uncons.png":342,"./eur_IPSL_REA_tas_41-60_djf_cmip6_90perc_cons.png":343,"./eur_IPSL_REA_tas_41-60_djf_cmip6_90perc_uncons.png":344,"./eur_IPSL_REA_tas_41-60_jja_cmip5_10perc_cons.png":345,"./eur_IPSL_REA_tas_41-60_jja_cmip5_10perc_uncons.png":346,"./eur_IPSL_REA_tas_41-60_jja_cmip5_25perc_cons.png":347,"./eur_IPSL_REA_tas_41-60_jja_cmip5_25perc_uncons.png":348,"./eur_IPSL_REA_tas_41-60_jja_cmip5_50perc_cons.png":349,"./eur_IPSL_REA_tas_41-60_jja_cmip5_50perc_uncons.png":350,"./eur_IPSL_REA_tas_41-60_jja_cmip5_75perc_cons.png":351,"./eur_IPSL_REA_tas_41-60_jja_cmip5_75perc_uncons.png":352,"./eur_IPSL_REA_tas_41-60_jja_cmip5_90perc_cons.png":353,"./eur_IPSL_REA_tas_41-60_jja_cmip5_90perc_uncons.png":354,"./eur_IPSL_REA_tas_41-60_jja_cmip6_10perc_cons.png":355,"./eur_IPSL_REA_tas_41-60_jja_cmip6_10perc_uncons.png":356,"./eur_IPSL_REA_tas_41-60_jja_cmip6_25perc_cons.png":357,"./eur_IPSL_REA_tas_41-60_jja_cmip6_25perc_uncons.png":358,"./eur_IPSL_REA_tas_41-60_jja_cmip6_50perc_cons.png":359,"./eur_IPSL_REA_tas_41-60_jja_cmip6_50perc_uncons.png":360,"./eur_IPSL_REA_tas_41-60_jja_cmip6_75perc_cons.png":361,"./eur_IPSL_REA_tas_41-60_jja_cmip6_75perc_uncons.png":362,"./eur_IPSL_REA_tas_41-60_jja_cmip6_90perc_cons.png":363,"./eur_IPSL_REA_tas_41-60_jja_cmip6_90perc_uncons.png":364};function c(_){var e=r(_);return n(e)}function r(_){if(!n.o(map,_)){var e=new Error("Cannot find module '"+_+"'");throw e.code="MODULE_NOT_FOUND",e}return map[_]}c.keys=function(){return Object.keys(map)},c.resolve=r,_.exports=c,c.id=244},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_pr_41-60_djf_cmip6_10perc_cons.0454aa8.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_pr_41-60_djf_cmip6_10perc_uncons.838925e.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_pr_41-60_djf_cmip6_25perc_cons.c77310a.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_pr_41-60_djf_cmip6_25perc_uncons.1ee4f3b.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_pr_41-60_djf_cmip6_50perc_cons.cef20d4.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_pr_41-60_djf_cmip6_50perc_uncons.135e0a9.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_pr_41-60_djf_cmip6_75perc_cons.4a8768a.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_pr_41-60_djf_cmip6_75perc_uncons.63af75a.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_pr_41-60_djf_cmip6_90perc_cons.427d2eb.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_pr_41-60_djf_cmip6_90perc_uncons.94666ab.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_pr_41-60_jja_cmip6_10perc_cons.e76a3a8.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_pr_41-60_jja_cmip6_10perc_uncons.e23b727.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_pr_41-60_jja_cmip6_25perc_cons.0bdf5dc.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_pr_41-60_jja_cmip6_25perc_uncons.fe41e17.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_pr_41-60_jja_cmip6_50perc_cons.81f6ddc.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_pr_41-60_jja_cmip6_50perc_uncons.52cfbb1.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_pr_41-60_jja_cmip6_75perc_cons.fc71e99.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_pr_41-60_jja_cmip6_75perc_uncons.5c87b3a.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_pr_41-60_jja_cmip6_90perc_cons.5871e88.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_pr_41-60_jja_cmip6_90perc_uncons.d969f8c.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_tas_41-60_djf_cmip6_10perc_cons.2ad8daf.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_tas_41-60_djf_cmip6_10perc_uncons.2bb07ba.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_tas_41-60_djf_cmip6_25perc_cons.b6cd051.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_tas_41-60_djf_cmip6_25perc_uncons.40fe445.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_tas_41-60_djf_cmip6_50perc_cons.00618e2.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_tas_41-60_djf_cmip6_50perc_uncons.ad538e8.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_tas_41-60_djf_cmip6_75perc_cons.f15a88e.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_tas_41-60_djf_cmip6_75perc_uncons.2971507.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_tas_41-60_djf_cmip6_90perc_cons.45e44b1.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_tas_41-60_djf_cmip6_90perc_uncons.9d5e97b.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_tas_41-60_jja_cmip6_10perc_cons.d8b2cd5.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_tas_41-60_jja_cmip6_10perc_uncons.1d4aad7.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_tas_41-60_jja_cmip6_25perc_cons.32c071a.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_tas_41-60_jja_cmip6_25perc_uncons.dee35e4.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_tas_41-60_jja_cmip6_50perc_cons.ac35532.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_tas_41-60_jja_cmip6_50perc_uncons.82e9ae3.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_tas_41-60_jja_cmip6_75perc_cons.b342a1f.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_tas_41-60_jja_cmip6_75perc_uncons.a57f7e8.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_tas_41-60_jja_cmip6_90perc_cons.7e45826.png"},function(_,e,n){_.exports=n.p+"img/eur_ETHZ_ClimWIP_tas_41-60_jja_cmip6_90perc_uncons.83a4b4b.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_djf_cmip5_10perc_cons.a611c81.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_djf_cmip5_10perc_uncons.760724b.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_djf_cmip5_25perc_cons.52a351a.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_djf_cmip5_25perc_uncons.c87f8e8.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_djf_cmip5_50perc_cons.23c4d2b.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_djf_cmip5_50perc_uncons.28a1bf5.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_djf_cmip5_75perc_cons.87240a9.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_djf_cmip5_75perc_uncons.781467e.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_djf_cmip5_90perc_cons.a806a0e.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_djf_cmip5_90perc_uncons.30726e9.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_djf_cmip6_10perc_cons.8e87f82.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_djf_cmip6_10perc_uncons.7fb6731.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_djf_cmip6_25perc_cons.6e63777.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_djf_cmip6_25perc_uncons.e7e6c63.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_djf_cmip6_50perc_cons.3511608.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_djf_cmip6_50perc_uncons.d3d2b1d.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_djf_cmip6_75perc_cons.c2fb273.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_djf_cmip6_75perc_uncons.553efe3.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_djf_cmip6_90perc_cons.a2056c8.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_djf_cmip6_90perc_uncons.1919016.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_jja_cmip5_10perc_cons.32aca5b.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_jja_cmip5_10perc_uncons.ec370bb.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_jja_cmip5_25perc_cons.b1a87f9.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_jja_cmip5_25perc_uncons.9a3dcab.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_jja_cmip5_50perc_cons.8073b40.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_jja_cmip5_50perc_uncons.ae93f5f.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_jja_cmip5_75perc_cons.a98aa90.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_jja_cmip5_75perc_uncons.7b7fb2d.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_jja_cmip5_90perc_cons.254156a.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_jja_cmip5_90perc_uncons.c327dee.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_jja_cmip6_10perc_cons.a686d2e.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_jja_cmip6_10perc_uncons.543df4c.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_jja_cmip6_25perc_cons.425a68e.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_jja_cmip6_25perc_uncons.d6d5b66.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_jja_cmip6_50perc_cons.c1a038a.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_jja_cmip6_50perc_uncons.9c1bb7f.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_jja_cmip6_75perc_cons.cf42469.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_jja_cmip6_75perc_uncons.270f086.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_jja_cmip6_90perc_cons.25ce41c.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_pr_41-60_jja_cmip6_90perc_uncons.861bd83.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_djf_cmip5_10perc_cons.88ac7f1.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_djf_cmip5_10perc_uncons.ec6bf8a.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_djf_cmip5_25perc_cons.0510bbe.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_djf_cmip5_25perc_uncons.e11abda.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_djf_cmip5_50perc_cons.e8ae167.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_djf_cmip5_50perc_uncons.1a72017.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_djf_cmip5_75perc_cons.8dca896.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_djf_cmip5_75perc_uncons.8640aa5.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_djf_cmip5_90perc_cons.2a7e0fa.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_djf_cmip5_90perc_uncons.40b9b45.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_djf_cmip6_10perc_cons.04def79.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_djf_cmip6_10perc_uncons.c8ccaca.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_djf_cmip6_25perc_cons.d4c5653.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_djf_cmip6_25perc_uncons.b880ffd.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_djf_cmip6_50perc_cons.182e67a.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_djf_cmip6_50perc_uncons.64c3c44.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_djf_cmip6_75perc_cons.22d3879.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_djf_cmip6_75perc_uncons.36332a4.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_djf_cmip6_90perc_cons.fa121db.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_djf_cmip6_90perc_uncons.bd297a9.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_jja_cmip5_10perc_cons.14a40fb.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_jja_cmip5_10perc_uncons.94b8e43.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_jja_cmip5_25perc_cons.a348a28.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_jja_cmip5_25perc_uncons.0567911.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_jja_cmip5_50perc_cons.f9257be.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_jja_cmip5_50perc_uncons.33e3d02.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_jja_cmip5_75perc_cons.f435215.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_jja_cmip5_75perc_uncons.70c6f72.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_jja_cmip5_90perc_cons.aa424a6.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_jja_cmip5_90perc_uncons.e29876a.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_jja_cmip6_10perc_cons.baef37d.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_jja_cmip6_10perc_uncons.59c9d4c.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_jja_cmip6_25perc_cons.88a0718.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_jja_cmip6_25perc_uncons.fd4fb0b.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_jja_cmip6_50perc_cons.85a626a.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_jja_cmip6_50perc_uncons.8e8207b.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_jja_cmip6_75perc_cons.9254b95.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_jja_cmip6_75perc_uncons.03769a0.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_jja_cmip6_90perc_cons.775cc89.png"},function(_,e,n){_.exports=n.p+"img/eur_IPSL_REA_tas_41-60_jja_cmip6_90perc_uncons.6556b63.png"},,,,,,,,,,,,function(_,e,n){"use strict";n.r(e);var c={data:function(){return{selectedDataset:"cmip6",selectedPercentile:"10",selectedSeason:"djf",selectedVariable:"tas",selectedMethod:"ETHZ_ClimWIP",selectedConstrained:"cons",datasets:{cmip6:"CMIP6"},percentiles:{10:"10-percentile",25:"25-percentile",50:"50-percentile",75:"75-percentile",90:"90-percentile"},seasons:{djf:"Winter",jja:"Summer"},variables:{tas:"Temperature",pr:"Precipitation"},methods:{ETHZ_ClimWIP:"ClimWIP",IPSL_REA:"REA"},constrainedOptions:{cons:"Constrained",uncons:"Unconstrained"}}}},r=n(38),component=Object(r.a)(c,(function(){var _=this,e=_.$createElement,c=_._self._c||e;return c("div",{staticClass:"flex flex-col place-content-center items-center h-full"},[c("h1",{staticClass:"m-4 text-3xl"},[_._v("\n    EUCP WP2 - Atlas of constrained climate projections\n  ")]),_._v(" "),c("div",{staticClass:"space-x-1"},[c("Dropdown",{attrs:{options:_.variables,alttext:"Choose a variable."},model:{value:_.selectedVariable,callback:function(e){_.selectedVariable=e},expression:"selectedVariable"}}),_._v(" "),c("Dropdown",{attrs:{options:_.seasons,alttext:"Select a season. Winter is DJF and summer is JJA."},model:{value:_.selectedSeason,callback:function(e){_.selectedSeason=e},expression:"selectedSeason"}}),_._v(" "),c("Dropdown",{attrs:{options:_.percentiles,alttext:"Percentiles indicate how likely these changes are."},model:{value:_.selectedPercentile,callback:function(e){_.selectedPercentile=e},expression:"selectedPercentile"}}),_._v(" "),c("Dropdown",{attrs:{options:_.datasets,alttext:"Select a dataset. Currently only CMIP6 is included."},model:{value:_.selectedDataset,callback:function(e){_.selectedDataset=e},expression:"selectedDataset"}}),_._v(" "),c("Dropdown",{attrs:{options:_.methods,alttext:"Select a method. See More info for explanations of the methods."},model:{value:_.selectedMethod,callback:function(e){_.selectedMethod=e},expression:"selectedMethod"}}),_._v(" "),c("Dropdown",{attrs:{options:_.constrainedOptions,alttext:"Whether to display constrained or unconstrained projections."},model:{value:_.selectedConstrained,callback:function(e){_.selectedConstrained=e},expression:"selectedConstrained"}})],1),_._v(" "),c("div",{staticClass:"bg-center bg-no-repeat bg-contain flex-grow w-full",style:{backgroundImage:"url("+n(244)("./eur_"+_.selectedMethod+"_"+_.selectedVariable+"_41-60_"+_.selectedSeason+"_"+_.selectedDataset+"_"+_.selectedPercentile+"perc_"+_.selectedConstrained+".png")+")"}}),_._v(" "),c("div",{staticClass:"flex place-content-center space-x-3"},[c("Button",{attrs:{text:"More info",target:"/about"}}),_._v(" "),c("Button",{attrs:{text:"Download data"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Dropdown:n(243).default,Button:n(239).default})}])]);
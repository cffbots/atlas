(window.webpackJsonp=window.webpackJsonp||[]).push([[0,3,4],Array(244).concat([function(_,n,c){"use strict";c.r(n);var e={props:{text:{type:String,required:!0},target:{type:String,required:!1,default:""}}},r=c(40),component=Object(r.a)(e,(function(){var _=this,n=_.$createElement,c=_._self._c||n;return c("div",[c("NuxtLink",{attrs:{to:_.target}},[c("button",{staticClass:"bg-transparent hover:bg-gray-500 active:bg-gray-700\n      text-gray-700 font-semibold hover:text-white py-2 px-4 border\n      border-gray-500 hover:border-transparent rounded-full\n      focus:outline-none"},[_._v("\n      "+_._s(_.text)+"\n    ")])])],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Button:c(244).default})},function(_,n,c){var content=c(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[_.i,content,""]]),content.locals&&(_.exports=content.locals);(0,c(72).default)("e742697c",content,!0,{sourceMap:!1})},function(_,n,c){"use strict";c(245)},function(_,n,c){var e=c(71)((function(i){return i[1]}));e.push([_.i,"/*purgecss start ignore*/\n.custom-top{\n  top:4.3rem\n}\n\n/*purgecss end ignore*/",""]),e.locals={},_.exports=e},function(_,n,c){"use strict";c.r(n);var e={props:{value:null,options:{type:Object,required:!0},alttext:null},data:function(){return{hover:!1,selectedOption:null}},watch:{value:function(_){this.selectedOption=_}},mounted:function(){this.selectedOption=this.value}},r=(c(246),c(40)),component=Object(r.a)(e,(function(){var _=this,n=_.$createElement,c=_._self._c||n;return c("div",{staticClass:"relative inline-flex"},[c("svg",{staticClass:"w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 412 232"}},[c("path",{attrs:{d:"M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355\n    0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677\n    7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592\n    0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z",fill:"#648299","fill-rule":"nonzero"}})]),_._v(" "),c("div",[_.hover?c("span",{staticClass:"absolute flex justify-center items-center bg-white bottom-14 right-0\n    border border-gray-100 rounded shadow-lg h-20 w-40",attrs:{id:"popup"}},[c("div",{staticClass:"absolute custom-top bg-white transform rotate-45 z-0\n      border-b-3 border-t-0 border-r-3 border-l-0 border-gray-100 p-2"}),_._v(" "),c("p",{staticClass:"text-gray-600 w-30 text-sm text-center m-1 p-1 z-10"},[_._v("\n        "+_._s(_.alttext)+"\n      ")])]):_._e(),_._v(" "),c("select",{directives:[{name:"model",rawName:"v-model",value:_.selectedOption,expression:"selectedOption"}],staticClass:"border border-gray-300 rounded-full cursor-pointer\n    text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400\n    focus:outline-none appearance-none",on:{mouseover:function(n){_.hover=!0},mouseleave:function(n){_.hover=!1},input:function(n){_.$emit("input",n.target.value)},change:function(n){var c=Array.prototype.filter.call(n.target.options,(function(_){return _.selected})).map((function(_){return"_value"in _?_._value:_.value}));_.selectedOption=n.target.multiple?c:c[0]}}},_._l(_.options,(function(option,n){return c("option",{key:n,domProps:{value:n}},[_._v("\n        "+_._s(option)+"\n      ")])})),0)])])}),[],!1,null,null,null);n.default=component.exports},function(_,n,c){var map={"./eur_ASK_tas_41-60_djf_cmip6_10perc_cons.png":250,"./eur_ASK_tas_41-60_djf_cmip6_25perc_cons.png":251,"./eur_ASK_tas_41-60_djf_cmip6_50perc_cons.png":252,"./eur_ASK_tas_41-60_djf_cmip6_75perc_cons.png":253,"./eur_ASK_tas_41-60_djf_cmip6_90perc_cons.png":254,"./eur_ASK_tas_41-60_jja_cmip6_10perc_cons.png":255,"./eur_ASK_tas_41-60_jja_cmip6_25perc_cons.png":256,"./eur_ASK_tas_41-60_jja_cmip6_50perc_cons.png":257,"./eur_ASK_tas_41-60_jja_cmip6_75perc_cons.png":258,"./eur_ASK_tas_41-60_jja_cmip6_90perc_cons.png":259,"./eur_ClimWIP_pr_41-60_djf_cmip6_10perc_cons.png":260,"./eur_ClimWIP_pr_41-60_djf_cmip6_10perc_uncons.png":261,"./eur_ClimWIP_pr_41-60_djf_cmip6_25perc_cons.png":262,"./eur_ClimWIP_pr_41-60_djf_cmip6_25perc_uncons.png":263,"./eur_ClimWIP_pr_41-60_djf_cmip6_50perc_cons.png":264,"./eur_ClimWIP_pr_41-60_djf_cmip6_50perc_uncons.png":265,"./eur_ClimWIP_pr_41-60_djf_cmip6_75perc_cons.png":266,"./eur_ClimWIP_pr_41-60_djf_cmip6_75perc_uncons.png":267,"./eur_ClimWIP_pr_41-60_djf_cmip6_90perc_cons.png":268,"./eur_ClimWIP_pr_41-60_djf_cmip6_90perc_uncons.png":269,"./eur_ClimWIP_pr_41-60_jja_cmip6_10perc_cons.png":270,"./eur_ClimWIP_pr_41-60_jja_cmip6_10perc_uncons.png":271,"./eur_ClimWIP_pr_41-60_jja_cmip6_25perc_cons.png":272,"./eur_ClimWIP_pr_41-60_jja_cmip6_25perc_uncons.png":273,"./eur_ClimWIP_pr_41-60_jja_cmip6_50perc_cons.png":274,"./eur_ClimWIP_pr_41-60_jja_cmip6_50perc_uncons.png":275,"./eur_ClimWIP_pr_41-60_jja_cmip6_75perc_cons.png":276,"./eur_ClimWIP_pr_41-60_jja_cmip6_75perc_uncons.png":277,"./eur_ClimWIP_pr_41-60_jja_cmip6_90perc_cons.png":278,"./eur_ClimWIP_pr_41-60_jja_cmip6_90perc_uncons.png":279,"./eur_ClimWIP_tas_41-60_djf_cmip6_10perc_cons.png":280,"./eur_ClimWIP_tas_41-60_djf_cmip6_10perc_uncons.png":281,"./eur_ClimWIP_tas_41-60_djf_cmip6_25perc_cons.png":282,"./eur_ClimWIP_tas_41-60_djf_cmip6_25perc_uncons.png":283,"./eur_ClimWIP_tas_41-60_djf_cmip6_50perc_cons.png":284,"./eur_ClimWIP_tas_41-60_djf_cmip6_50perc_uncons.png":285,"./eur_ClimWIP_tas_41-60_djf_cmip6_75perc_cons.png":286,"./eur_ClimWIP_tas_41-60_djf_cmip6_75perc_uncons.png":287,"./eur_ClimWIP_tas_41-60_djf_cmip6_90perc_cons.png":288,"./eur_ClimWIP_tas_41-60_djf_cmip6_90perc_uncons.png":289,"./eur_ClimWIP_tas_41-60_jja_cmip6_10perc_cons.png":290,"./eur_ClimWIP_tas_41-60_jja_cmip6_10perc_uncons.png":291,"./eur_ClimWIP_tas_41-60_jja_cmip6_25perc_cons.png":292,"./eur_ClimWIP_tas_41-60_jja_cmip6_25perc_uncons.png":293,"./eur_ClimWIP_tas_41-60_jja_cmip6_50perc_cons.png":294,"./eur_ClimWIP_tas_41-60_jja_cmip6_50perc_uncons.png":295,"./eur_ClimWIP_tas_41-60_jja_cmip6_75perc_cons.png":296,"./eur_ClimWIP_tas_41-60_jja_cmip6_75perc_uncons.png":297,"./eur_ClimWIP_tas_41-60_jja_cmip6_90perc_cons.png":298,"./eur_ClimWIP_tas_41-60_jja_cmip6_90perc_uncons.png":299,"./eur_HistC_tas_41-60_djf_cmip6_10perc_cons.png":300,"./eur_HistC_tas_41-60_djf_cmip6_10perc_uncons.png":301,"./eur_HistC_tas_41-60_djf_cmip6_25perc_cons.png":302,"./eur_HistC_tas_41-60_djf_cmip6_25perc_uncons.png":303,"./eur_HistC_tas_41-60_djf_cmip6_75perc_cons.png":304,"./eur_HistC_tas_41-60_djf_cmip6_75perc_uncons.png":305,"./eur_HistC_tas_41-60_djf_cmip6_90perc_cons.png":306,"./eur_HistC_tas_41-60_djf_cmip6_90perc_uncons.png":307,"./eur_HistC_tas_41-60_jja_cmip6_10perc_cons.png":308,"./eur_HistC_tas_41-60_jja_cmip6_10perc_uncons.png":309,"./eur_HistC_tas_41-60_jja_cmip6_25perc_cons.png":310,"./eur_HistC_tas_41-60_jja_cmip6_25perc_uncons.png":311,"./eur_HistC_tas_41-60_jja_cmip6_75perc_cons.png":312,"./eur_HistC_tas_41-60_jja_cmip6_75perc_uncons.png":313,"./eur_HistC_tas_41-60_jja_cmip6_90perc_cons.png":314,"./eur_HistC_tas_41-60_jja_cmip6_90perc_uncons.png":315,"./eur_REA_pr_41-60_djf_cmip5_10perc_cons.png":316,"./eur_REA_pr_41-60_djf_cmip5_10perc_uncons.png":317,"./eur_REA_pr_41-60_djf_cmip5_25perc_cons.png":318,"./eur_REA_pr_41-60_djf_cmip5_25perc_uncons.png":319,"./eur_REA_pr_41-60_djf_cmip5_50perc_cons.png":320,"./eur_REA_pr_41-60_djf_cmip5_50perc_uncons.png":321,"./eur_REA_pr_41-60_djf_cmip5_75perc_cons.png":322,"./eur_REA_pr_41-60_djf_cmip5_75perc_uncons.png":323,"./eur_REA_pr_41-60_djf_cmip5_90perc_cons.png":324,"./eur_REA_pr_41-60_djf_cmip5_90perc_uncons.png":325,"./eur_REA_pr_41-60_djf_cmip6_10perc_cons.png":326,"./eur_REA_pr_41-60_djf_cmip6_10perc_uncons.png":327,"./eur_REA_pr_41-60_djf_cmip6_25perc_cons.png":328,"./eur_REA_pr_41-60_djf_cmip6_25perc_uncons.png":329,"./eur_REA_pr_41-60_djf_cmip6_50perc_cons.png":330,"./eur_REA_pr_41-60_djf_cmip6_50perc_uncons.png":331,"./eur_REA_pr_41-60_djf_cmip6_75perc_cons.png":332,"./eur_REA_pr_41-60_djf_cmip6_75perc_uncons.png":333,"./eur_REA_pr_41-60_djf_cmip6_90perc_cons.png":334,"./eur_REA_pr_41-60_djf_cmip6_90perc_uncons.png":335,"./eur_REA_pr_41-60_jja_cmip5_10perc_cons.png":336,"./eur_REA_pr_41-60_jja_cmip5_10perc_uncons.png":337,"./eur_REA_pr_41-60_jja_cmip5_25perc_cons.png":338,"./eur_REA_pr_41-60_jja_cmip5_25perc_uncons.png":339,"./eur_REA_pr_41-60_jja_cmip5_50perc_cons.png":340,"./eur_REA_pr_41-60_jja_cmip5_50perc_uncons.png":341,"./eur_REA_pr_41-60_jja_cmip5_75perc_cons.png":342,"./eur_REA_pr_41-60_jja_cmip5_75perc_uncons.png":343,"./eur_REA_pr_41-60_jja_cmip5_90perc_cons.png":344,"./eur_REA_pr_41-60_jja_cmip5_90perc_uncons.png":345,"./eur_REA_pr_41-60_jja_cmip6_10perc_cons.png":346,"./eur_REA_pr_41-60_jja_cmip6_10perc_uncons.png":347,"./eur_REA_pr_41-60_jja_cmip6_25perc_cons.png":348,"./eur_REA_pr_41-60_jja_cmip6_25perc_uncons.png":349,"./eur_REA_pr_41-60_jja_cmip6_50perc_cons.png":350,"./eur_REA_pr_41-60_jja_cmip6_50perc_uncons.png":351,"./eur_REA_pr_41-60_jja_cmip6_75perc_cons.png":352,"./eur_REA_pr_41-60_jja_cmip6_75perc_uncons.png":353,"./eur_REA_pr_41-60_jja_cmip6_90perc_cons.png":354,"./eur_REA_pr_41-60_jja_cmip6_90perc_uncons.png":355,"./eur_REA_tas_41-60_djf_cmip5_10perc_cons.png":356,"./eur_REA_tas_41-60_djf_cmip5_10perc_uncons.png":357,"./eur_REA_tas_41-60_djf_cmip5_25perc_cons.png":358,"./eur_REA_tas_41-60_djf_cmip5_25perc_uncons.png":359,"./eur_REA_tas_41-60_djf_cmip5_50perc_cons.png":360,"./eur_REA_tas_41-60_djf_cmip5_50perc_uncons.png":361,"./eur_REA_tas_41-60_djf_cmip5_75perc_cons.png":362,"./eur_REA_tas_41-60_djf_cmip5_75perc_uncons.png":363,"./eur_REA_tas_41-60_djf_cmip5_90perc_cons.png":364,"./eur_REA_tas_41-60_djf_cmip5_90perc_uncons.png":365,"./eur_REA_tas_41-60_djf_cmip6_10perc_cons.png":366,"./eur_REA_tas_41-60_djf_cmip6_10perc_uncons.png":367,"./eur_REA_tas_41-60_djf_cmip6_25perc_cons.png":368,"./eur_REA_tas_41-60_djf_cmip6_25perc_uncons.png":369,"./eur_REA_tas_41-60_djf_cmip6_50perc_cons.png":370,"./eur_REA_tas_41-60_djf_cmip6_50perc_uncons.png":371,"./eur_REA_tas_41-60_djf_cmip6_75perc_cons.png":372,"./eur_REA_tas_41-60_djf_cmip6_75perc_uncons.png":373,"./eur_REA_tas_41-60_djf_cmip6_90perc_cons.png":374,"./eur_REA_tas_41-60_djf_cmip6_90perc_uncons.png":375,"./eur_REA_tas_41-60_jja_cmip5_10perc_cons.png":376,"./eur_REA_tas_41-60_jja_cmip5_10perc_uncons.png":377,"./eur_REA_tas_41-60_jja_cmip5_25perc_cons.png":378,"./eur_REA_tas_41-60_jja_cmip5_25perc_uncons.png":379,"./eur_REA_tas_41-60_jja_cmip5_50perc_cons.png":380,"./eur_REA_tas_41-60_jja_cmip5_50perc_uncons.png":381,"./eur_REA_tas_41-60_jja_cmip5_75perc_cons.png":382,"./eur_REA_tas_41-60_jja_cmip5_75perc_uncons.png":383,"./eur_REA_tas_41-60_jja_cmip5_90perc_cons.png":384,"./eur_REA_tas_41-60_jja_cmip5_90perc_uncons.png":385,"./eur_REA_tas_41-60_jja_cmip6_10perc_cons.png":386,"./eur_REA_tas_41-60_jja_cmip6_10perc_uncons.png":387,"./eur_REA_tas_41-60_jja_cmip6_25perc_cons.png":388,"./eur_REA_tas_41-60_jja_cmip6_25perc_uncons.png":389,"./eur_REA_tas_41-60_jja_cmip6_50perc_cons.png":390,"./eur_REA_tas_41-60_jja_cmip6_50perc_uncons.png":391,"./eur_REA_tas_41-60_jja_cmip6_75perc_cons.png":392,"./eur_REA_tas_41-60_jja_cmip6_75perc_uncons.png":393,"./eur_REA_tas_41-60_jja_cmip6_90perc_cons.png":394,"./eur_REA_tas_41-60_jja_cmip6_90perc_uncons.png":395,"./eur_UKCP_pr_41-60_djf_cmip6_10perc_cons.png":396,"./eur_UKCP_pr_41-60_djf_cmip6_10perc_uncons.png":397,"./eur_UKCP_pr_41-60_djf_cmip6_25perc_cons.png":398,"./eur_UKCP_pr_41-60_djf_cmip6_25perc_uncons.png":399,"./eur_UKCP_pr_41-60_djf_cmip6_50perc_cons.png":400,"./eur_UKCP_pr_41-60_djf_cmip6_50perc_uncons.png":401,"./eur_UKCP_pr_41-60_djf_cmip6_75perc_cons.png":402,"./eur_UKCP_pr_41-60_djf_cmip6_75perc_uncons.png":403,"./eur_UKCP_pr_41-60_djf_cmip6_90perc_cons.png":404,"./eur_UKCP_pr_41-60_djf_cmip6_90perc_uncons.png":405,"./eur_UKCP_pr_41-60_jja_cmip6_10perc_cons.png":406,"./eur_UKCP_pr_41-60_jja_cmip6_10perc_uncons.png":407,"./eur_UKCP_pr_41-60_jja_cmip6_25perc_cons.png":408,"./eur_UKCP_pr_41-60_jja_cmip6_25perc_uncons.png":409,"./eur_UKCP_pr_41-60_jja_cmip6_50perc_cons.png":410,"./eur_UKCP_pr_41-60_jja_cmip6_50perc_uncons.png":411,"./eur_UKCP_pr_41-60_jja_cmip6_75perc_cons.png":412,"./eur_UKCP_pr_41-60_jja_cmip6_75perc_uncons.png":413,"./eur_UKCP_pr_41-60_jja_cmip6_90perc_cons.png":414,"./eur_UKCP_pr_41-60_jja_cmip6_90perc_uncons.png":415,"./eur_UKCP_tas_41-60_djf_cmip6_10perc_cons.png":416,"./eur_UKCP_tas_41-60_djf_cmip6_10perc_uncons.png":417,"./eur_UKCP_tas_41-60_djf_cmip6_25perc_cons.png":418,"./eur_UKCP_tas_41-60_djf_cmip6_25perc_uncons.png":419,"./eur_UKCP_tas_41-60_djf_cmip6_50perc_cons.png":420,"./eur_UKCP_tas_41-60_djf_cmip6_50perc_uncons.png":421,"./eur_UKCP_tas_41-60_djf_cmip6_75perc_cons.png":422,"./eur_UKCP_tas_41-60_djf_cmip6_75perc_uncons.png":423,"./eur_UKCP_tas_41-60_djf_cmip6_90perc_cons.png":424,"./eur_UKCP_tas_41-60_djf_cmip6_90perc_uncons.png":425,"./eur_UKCP_tas_41-60_jja_cmip6_10perc_cons.png":426,"./eur_UKCP_tas_41-60_jja_cmip6_10perc_uncons.png":427,"./eur_UKCP_tas_41-60_jja_cmip6_25perc_cons.png":428,"./eur_UKCP_tas_41-60_jja_cmip6_25perc_uncons.png":429,"./eur_UKCP_tas_41-60_jja_cmip6_50perc_cons.png":430,"./eur_UKCP_tas_41-60_jja_cmip6_50perc_uncons.png":431,"./eur_UKCP_tas_41-60_jja_cmip6_75perc_cons.png":432,"./eur_UKCP_tas_41-60_jja_cmip6_75perc_uncons.png":433,"./eur_UKCP_tas_41-60_jja_cmip6_90perc_cons.png":434,"./eur_UKCP_tas_41-60_jja_cmip6_90perc_uncons.png":435};function e(_){var n=r(_);return c(n)}function r(_){if(!c.o(map,_)){var n=new Error("Cannot find module '"+_+"'");throw n.code="MODULE_NOT_FOUND",n}return map[_]}e.keys=function(){return Object.keys(map)},e.resolve=r,_.exports=e,e.id=249},function(_,n,c){_.exports=c.p+"img/eur_ASK_tas_41-60_djf_cmip6_10perc_cons.8f2ff4d.png"},function(_,n,c){_.exports=c.p+"img/eur_ASK_tas_41-60_djf_cmip6_25perc_cons.0c965d7.png"},function(_,n,c){_.exports=c.p+"img/eur_ASK_tas_41-60_djf_cmip6_50perc_cons.27fbcab.png"},function(_,n,c){_.exports=c.p+"img/eur_ASK_tas_41-60_djf_cmip6_75perc_cons.682b5fc.png"},function(_,n,c){_.exports=c.p+"img/eur_ASK_tas_41-60_djf_cmip6_90perc_cons.bf84fb0.png"},function(_,n,c){_.exports=c.p+"img/eur_ASK_tas_41-60_jja_cmip6_10perc_cons.0d84d14.png"},function(_,n,c){_.exports=c.p+"img/eur_ASK_tas_41-60_jja_cmip6_25perc_cons.06caf7d.png"},function(_,n,c){_.exports=c.p+"img/eur_ASK_tas_41-60_jja_cmip6_50perc_cons.5c9d7c1.png"},function(_,n,c){_.exports=c.p+"img/eur_ASK_tas_41-60_jja_cmip6_75perc_cons.8fa6c89.png"},function(_,n,c){_.exports=c.p+"img/eur_ASK_tas_41-60_jja_cmip6_90perc_cons.e281997.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_pr_41-60_djf_cmip6_10perc_cons.a0ce839.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_pr_41-60_djf_cmip6_10perc_uncons.3dd763d.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_pr_41-60_djf_cmip6_25perc_cons.e4845f5.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_pr_41-60_djf_cmip6_25perc_uncons.c137e12.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_pr_41-60_djf_cmip6_50perc_cons.e046ee2.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_pr_41-60_djf_cmip6_50perc_uncons.211b89e.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_pr_41-60_djf_cmip6_75perc_cons.8ef72ca.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_pr_41-60_djf_cmip6_75perc_uncons.c30a711.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_pr_41-60_djf_cmip6_90perc_cons.6649fd6.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_pr_41-60_djf_cmip6_90perc_uncons.6a11dba.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_pr_41-60_jja_cmip6_10perc_cons.5950e0a.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_pr_41-60_jja_cmip6_10perc_uncons.c06e355.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_pr_41-60_jja_cmip6_25perc_cons.5fc7201.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_pr_41-60_jja_cmip6_25perc_uncons.f032f23.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_pr_41-60_jja_cmip6_50perc_cons.1266e37.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_pr_41-60_jja_cmip6_50perc_uncons.283b7c8.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_pr_41-60_jja_cmip6_75perc_cons.1d415aa.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_pr_41-60_jja_cmip6_75perc_uncons.ce5d412.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_pr_41-60_jja_cmip6_90perc_cons.f945e72.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_pr_41-60_jja_cmip6_90perc_uncons.2707c91.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_tas_41-60_djf_cmip6_10perc_cons.d4a23e0.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_tas_41-60_djf_cmip6_10perc_uncons.191054a.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_tas_41-60_djf_cmip6_25perc_cons.4672b72.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_tas_41-60_djf_cmip6_25perc_uncons.b16c68a.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_tas_41-60_djf_cmip6_50perc_cons.24aacd6.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_tas_41-60_djf_cmip6_50perc_uncons.ab36adf.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_tas_41-60_djf_cmip6_75perc_cons.7f61e01.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_tas_41-60_djf_cmip6_75perc_uncons.cebd134.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_tas_41-60_djf_cmip6_90perc_cons.2f26d2b.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_tas_41-60_djf_cmip6_90perc_uncons.faa530d.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_tas_41-60_jja_cmip6_10perc_cons.ebe41eb.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_tas_41-60_jja_cmip6_10perc_uncons.d85a6f8.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_tas_41-60_jja_cmip6_25perc_cons.3d1746b.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_tas_41-60_jja_cmip6_25perc_uncons.1f16dc2.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_tas_41-60_jja_cmip6_50perc_cons.48c9d22.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_tas_41-60_jja_cmip6_50perc_uncons.a8a479c.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_tas_41-60_jja_cmip6_75perc_cons.72f7257.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_tas_41-60_jja_cmip6_75perc_uncons.c877afb.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_tas_41-60_jja_cmip6_90perc_cons.780ee77.png"},function(_,n,c){_.exports=c.p+"img/eur_ClimWIP_tas_41-60_jja_cmip6_90perc_uncons.e712bec.png"},function(_,n,c){_.exports=c.p+"img/eur_HistC_tas_41-60_djf_cmip6_10perc_cons.a0d9432.png"},function(_,n,c){_.exports=c.p+"img/eur_HistC_tas_41-60_djf_cmip6_10perc_uncons.ee30771.png"},function(_,n,c){_.exports=c.p+"img/eur_HistC_tas_41-60_djf_cmip6_25perc_cons.ab3db59.png"},function(_,n,c){_.exports=c.p+"img/eur_HistC_tas_41-60_djf_cmip6_25perc_uncons.963be63.png"},function(_,n,c){_.exports=c.p+"img/eur_HistC_tas_41-60_djf_cmip6_75perc_cons.bd8dcf6.png"},function(_,n,c){_.exports=c.p+"img/eur_HistC_tas_41-60_djf_cmip6_75perc_uncons.e750a57.png"},function(_,n,c){_.exports=c.p+"img/eur_HistC_tas_41-60_djf_cmip6_90perc_cons.ee4049d.png"},function(_,n,c){_.exports=c.p+"img/eur_HistC_tas_41-60_djf_cmip6_90perc_uncons.8753a15.png"},function(_,n,c){_.exports=c.p+"img/eur_HistC_tas_41-60_jja_cmip6_10perc_cons.495fb30.png"},function(_,n,c){_.exports=c.p+"img/eur_HistC_tas_41-60_jja_cmip6_10perc_uncons.37c3cfc.png"},function(_,n,c){_.exports=c.p+"img/eur_HistC_tas_41-60_jja_cmip6_25perc_cons.32c016e.png"},function(_,n,c){_.exports=c.p+"img/eur_HistC_tas_41-60_jja_cmip6_25perc_uncons.7703ca6.png"},function(_,n,c){_.exports=c.p+"img/eur_HistC_tas_41-60_jja_cmip6_75perc_cons.6ca0787.png"},function(_,n,c){_.exports=c.p+"img/eur_HistC_tas_41-60_jja_cmip6_75perc_uncons.56fc51a.png"},function(_,n,c){_.exports=c.p+"img/eur_HistC_tas_41-60_jja_cmip6_90perc_cons.0c61c39.png"},function(_,n,c){_.exports=c.p+"img/eur_HistC_tas_41-60_jja_cmip6_90perc_uncons.e465081.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_djf_cmip5_10perc_cons.d9c3b0d.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_djf_cmip5_10perc_uncons.524d083.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_djf_cmip5_25perc_cons.a1553e3.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_djf_cmip5_25perc_uncons.8bdd885.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_djf_cmip5_50perc_cons.3be9254.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_djf_cmip5_50perc_uncons.5048e6a.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_djf_cmip5_75perc_cons.4fcc472.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_djf_cmip5_75perc_uncons.acf2a81.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_djf_cmip5_90perc_cons.ae85693.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_djf_cmip5_90perc_uncons.c38b3a8.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_djf_cmip6_10perc_cons.4d0d502.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_djf_cmip6_10perc_uncons.7873271.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_djf_cmip6_25perc_cons.5ed97e6.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_djf_cmip6_25perc_uncons.6456bb4.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_djf_cmip6_50perc_cons.20a8a7e.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_djf_cmip6_50perc_uncons.a190df6.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_djf_cmip6_75perc_cons.8daa5dc.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_djf_cmip6_75perc_uncons.4e0da3e.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_djf_cmip6_90perc_cons.30f78dd.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_djf_cmip6_90perc_uncons.e3b0283.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_jja_cmip5_10perc_cons.1152065.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_jja_cmip5_10perc_uncons.25693f4.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_jja_cmip5_25perc_cons.c7d5317.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_jja_cmip5_25perc_uncons.d8745a2.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_jja_cmip5_50perc_cons.41c131c.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_jja_cmip5_50perc_uncons.77e1485.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_jja_cmip5_75perc_cons.20699bd.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_jja_cmip5_75perc_uncons.919f59d.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_jja_cmip5_90perc_cons.ce914e4.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_jja_cmip5_90perc_uncons.1bc7fd0.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_jja_cmip6_10perc_cons.593f9f6.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_jja_cmip6_10perc_uncons.72fc3ca.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_jja_cmip6_25perc_cons.f1b22ee.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_jja_cmip6_25perc_uncons.4d518ff.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_jja_cmip6_50perc_cons.ad0540a.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_jja_cmip6_50perc_uncons.63214d6.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_jja_cmip6_75perc_cons.762366c.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_jja_cmip6_75perc_uncons.a66e30e.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_jja_cmip6_90perc_cons.9faf355.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_pr_41-60_jja_cmip6_90perc_uncons.1d2d8ed.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_djf_cmip5_10perc_cons.ddc3635.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_djf_cmip5_10perc_uncons.0c64092.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_djf_cmip5_25perc_cons.226ebd1.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_djf_cmip5_25perc_uncons.087fd88.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_djf_cmip5_50perc_cons.b9eb365.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_djf_cmip5_50perc_uncons.09fa83e.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_djf_cmip5_75perc_cons.4a68284.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_djf_cmip5_75perc_uncons.7cd9058.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_djf_cmip5_90perc_cons.7ead754.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_djf_cmip5_90perc_uncons.4585d3e.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_djf_cmip6_10perc_cons.925bd66.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_djf_cmip6_10perc_uncons.7306781.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_djf_cmip6_25perc_cons.bba40ed.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_djf_cmip6_25perc_uncons.5c7a7d4.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_djf_cmip6_50perc_cons.1c679cd.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_djf_cmip6_50perc_uncons.be5e6e7.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_djf_cmip6_75perc_cons.550a744.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_djf_cmip6_75perc_uncons.206651f.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_djf_cmip6_90perc_cons.2532e7d.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_djf_cmip6_90perc_uncons.7cee173.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_jja_cmip5_10perc_cons.bf7557e.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_jja_cmip5_10perc_uncons.c0fb1b5.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_jja_cmip5_25perc_cons.d85c44c.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_jja_cmip5_25perc_uncons.f966cfe.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_jja_cmip5_50perc_cons.4c07102.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_jja_cmip5_50perc_uncons.a4de536.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_jja_cmip5_75perc_cons.4e2a244.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_jja_cmip5_75perc_uncons.4efc375.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_jja_cmip5_90perc_cons.73743bb.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_jja_cmip5_90perc_uncons.b9f2dc5.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_jja_cmip6_10perc_cons.fd9998d.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_jja_cmip6_10perc_uncons.f1622e6.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_jja_cmip6_25perc_cons.c23a5b9.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_jja_cmip6_25perc_uncons.eb56098.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_jja_cmip6_50perc_cons.891a368.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_jja_cmip6_50perc_uncons.6b1523a.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_jja_cmip6_75perc_cons.e7a1def.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_jja_cmip6_75perc_uncons.d6dc46f.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_jja_cmip6_90perc_cons.45b2681.png"},function(_,n,c){_.exports=c.p+"img/eur_REA_tas_41-60_jja_cmip6_90perc_uncons.358e040.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_pr_41-60_djf_cmip6_10perc_cons.45cb9db.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_pr_41-60_djf_cmip6_10perc_uncons.e3da7fe.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_pr_41-60_djf_cmip6_25perc_cons.b013079.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_pr_41-60_djf_cmip6_25perc_uncons.09c924d.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_pr_41-60_djf_cmip6_50perc_cons.941b7af.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_pr_41-60_djf_cmip6_50perc_uncons.57041b9.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_pr_41-60_djf_cmip6_75perc_cons.87be452.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_pr_41-60_djf_cmip6_75perc_uncons.ef807d6.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_pr_41-60_djf_cmip6_90perc_cons.e086ee4.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_pr_41-60_djf_cmip6_90perc_uncons.f4fcd71.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_pr_41-60_jja_cmip6_10perc_cons.3f765ce.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_pr_41-60_jja_cmip6_10perc_uncons.8370daa.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_pr_41-60_jja_cmip6_25perc_cons.853b475.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_pr_41-60_jja_cmip6_25perc_uncons.ca158fa.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_pr_41-60_jja_cmip6_50perc_cons.6ccfcd3.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_pr_41-60_jja_cmip6_50perc_uncons.a0bfc97.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_pr_41-60_jja_cmip6_75perc_cons.43e48d4.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_pr_41-60_jja_cmip6_75perc_uncons.0d04b29.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_pr_41-60_jja_cmip6_90perc_cons.8ad4070.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_pr_41-60_jja_cmip6_90perc_uncons.3585479.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_tas_41-60_djf_cmip6_10perc_cons.ab6b070.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_tas_41-60_djf_cmip6_10perc_uncons.4b493e0.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_tas_41-60_djf_cmip6_25perc_cons.832de31.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_tas_41-60_djf_cmip6_25perc_uncons.c4df185.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_tas_41-60_djf_cmip6_50perc_cons.aa0363f.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_tas_41-60_djf_cmip6_50perc_uncons.0f83111.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_tas_41-60_djf_cmip6_75perc_cons.ddccd82.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_tas_41-60_djf_cmip6_75perc_uncons.df823fb.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_tas_41-60_djf_cmip6_90perc_cons.80996e9.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_tas_41-60_djf_cmip6_90perc_uncons.952e2fc.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_tas_41-60_jja_cmip6_10perc_cons.639bf06.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_tas_41-60_jja_cmip6_10perc_uncons.8f7c8dd.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_tas_41-60_jja_cmip6_25perc_cons.09b2407.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_tas_41-60_jja_cmip6_25perc_uncons.98beee6.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_tas_41-60_jja_cmip6_50perc_cons.f6fc959.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_tas_41-60_jja_cmip6_50perc_uncons.889a90f.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_tas_41-60_jja_cmip6_75perc_cons.c2ae7e4.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_tas_41-60_jja_cmip6_75perc_uncons.09a2b46.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_tas_41-60_jja_cmip6_90perc_cons.7373095.png"},function(_,n,c){_.exports=c.p+"img/eur_UKCP_tas_41-60_jja_cmip6_90perc_uncons.a212687.png"},,,,,,,,,,,,function(_,n,c){"use strict";c.r(n);var e={data:function(){return{selectedDataset:"cmip6",selectedPercentile:"10",selectedSeason:"djf",selectedVariable:"tas",selectedMethod:"ClimWIP",selectedConstrained:"cons",datasets:{cmip6:"CMIP6",cmip5:"CMIP5"},percentiles:{10:"10-percentile",25:"25-percentile",50:"50-percentile",75:"75-percentile",90:"90-percentile"},seasons:{djf:"Winter",jja:"Summer"},variables:{tas:"Temperature",pr:"Precipitation"},methods:{ASK:"ASK",ClimWIP:"ClimWIP",HistC:"HistC",REA:"REA",UKCP:"UKCP"},constrainedOptions:{cons:"Constrained",uncons:"Unconstrained"}}},computed:{bgImage:function(){try{return c(249)("./eur_"+this.selectedMethod+"_"+this.selectedVariable+"_41-60_"+this.selectedSeason+"_"+this.selectedDataset+"_"+this.selectedPercentile+"perc_"+this.selectedConstrained+".png")}catch(_){return"placeholder.png"}}}},r=c(40),component=Object(r.a)(e,(function(){var _=this,n=_.$createElement,c=_._self._c||n;return c("div",{staticClass:"flex flex-col place-content-center items-center h-full"},[c("h1",{staticClass:"m-4 text-3xl"},[_._v("\n    EUCP WP2 - Atlas of constrained climate projections\n  ")]),_._v(" "),c("div",{staticClass:"space-x-1"},[c("Dropdown",{attrs:{options:_.variables,alttext:"Choose a variable."},model:{value:_.selectedVariable,callback:function(n){_.selectedVariable=n},expression:"selectedVariable"}}),_._v(" "),c("Dropdown",{attrs:{options:_.seasons,alttext:"Select a season. Winter is DJF and summer is JJA."},model:{value:_.selectedSeason,callback:function(n){_.selectedSeason=n},expression:"selectedSeason"}}),_._v(" "),c("Dropdown",{attrs:{options:_.percentiles,alttext:"Percentiles indicate how likely these changes are."},model:{value:_.selectedPercentile,callback:function(n){_.selectedPercentile=n},expression:"selectedPercentile"}}),_._v(" "),c("Dropdown",{attrs:{options:_.datasets,alttext:"Select a dataset. Currently only CMIP6 is included."},model:{value:_.selectedDataset,callback:function(n){_.selectedDataset=n},expression:"selectedDataset"}}),_._v(" "),c("Dropdown",{attrs:{options:_.methods,alttext:"Select a method. See More info for explanations of the methods."},model:{value:_.selectedMethod,callback:function(n){_.selectedMethod=n},expression:"selectedMethod"}}),_._v(" "),c("Dropdown",{attrs:{options:_.constrainedOptions,alttext:"Whether to display constrained or unconstrained projections."},model:{value:_.selectedConstrained,callback:function(n){_.selectedConstrained=n},expression:"selectedConstrained"}})],1),_._v(" "),c("div",{staticClass:"bg-center bg-no-repeat bg-contain flex-grow w-full",style:{backgroundImage:"url("+_.bgImage+")"}}),_._v(" "),c("div",{staticClass:"flex place-content-center space-x-3"},[c("Button",{attrs:{text:"More info",target:"/about"}}),_._v(" "),c("Button",{attrs:{text:"Download data"}})],1)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Dropdown:c(248).default,Button:c(244).default})}])]);
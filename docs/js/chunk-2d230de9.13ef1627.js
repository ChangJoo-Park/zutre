(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230de9"],{edb6:function(e,t,o){"use strict";o.r(t);var d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("z-container",[o("z-breadcrumbs",{attrs:{items:[{name:"Home",link:{name:"home"}},{name:"Layout"},{name:"Responsive",link:{name:"docsFlexboxResponsive"}}]}}),o("h4",[e._v("Responsive")]),o("p",[e._v("Layout includes flexbox based responsive grid system with 12 columns and a neat responsive layout grid system and responsive visibility utilities.")]),o("p",[e._v("More detaied info about responsive grid and viewports please read at Spectre documentation "),o("a",{attrs:{href:"https://picturepan2.github.io/spectre/layout/responsive.html",target:"_blank"}},[e._v("here")]),e._v(".")]),o("p",[e._v("\n        Components: \n        "),o("code",[e._v("<z-container>")]),e._v(","),o("code",[e._v("<z-columns>")]),e._v(","),o("code",[e._v("<z-column>")])]),o("z-divider",{attrs:{content:"SHRINK WINDOW ON DESKTOP"}}),o("z-columns",[o("z-column",{attrs:{sizeXL:12,size:4}},[o("div",{staticClass:"bg-primary text-secondary docs-block"},[e._v("col-4 col-xl-12")])]),o("z-column",{attrs:{sizeXL:12,size:4}},[o("div",{staticClass:"bg-primary text-secondary docs-block"},[e._v("col-4 col-xl-12")])]),o("z-column",{attrs:{sizeXL:12,size:4}},[o("div",{staticClass:"bg-primary text-secondary docs-block"},[e._v("col-4 col-xl-12")])])],1),o("z-code",{attrs:{lang:"Vue"}},[e._v('\nimport { ZContainer, ZColumns, ZColumn } from \'zutre\'\n\n<z-container>\n  <z-columns>\n    <z-column :sizeXL="12" :size="4">col-4 col-xl-12</z-column>\n    <z-column :sizeXL="12" :size="4">col-4 col-xl-12</z-column>\n    <z-column :sizeXL="12" :size="4">col-4 col-xl-12</z-column>\n  </z-columns>\n</z-container>\n      ')]),o("z-divider",{attrs:{content:"API"}}),o("h4",[e._v("API")]),o("h5",[e._v("Columns "),o("code",[e._v("<z-columns />")])]),o("z-table",[o("z-thead",[o("z-th",[e._v("Name")]),o("z-th",[e._v("Description")]),o("z-th",[e._v("Type")]),o("z-th",[e._v("Values")]),o("z-th",[e._v("Default")])],1),o("z-tbody",[o("z-tr",[o("z-td",[o("code",[e._v("gapless")])]),o("z-td",[e._v("\n              set "),o("code",[e._v("true")]),e._v(" to have gapless columns\n            ")]),o("z-td",[e._v("Boolean")]),o("z-td",[o("code",[e._v("true")]),e._v("/"),o("code",[e._v("false")])]),o("z-td",[e._v("false")])],1),o("z-tr",[o("z-td",[o("code",[e._v("oneline")])]),o("z-td",[e._v("\n              set "),o("code",[e._v("true")]),e._v(" to have make all child columns positioned in the same single row\n            ")]),o("z-td",[e._v("Boolean")]),o("z-td",[o("code",[e._v("true")]),e._v("/"),o("code",[e._v("false")])]),o("z-td",[e._v("false")])],1),o("z-tr",[o("z-td",[o("code",[e._v("size")])]),o("z-td",[e._v("\n              set for a fixed-width container with the specific max-width\n            ")]),o("z-td",[e._v("String")]),o("z-td",[o("code",[e._v("xs")]),e._v(", "),o("code",[e._v("sm")]),e._v(", "),o("code",[e._v("lg")]),e._v(", "),o("code",[e._v("xl")])]),o("z-td",[e._v("---")])],1)],1)],1),o("br"),o("h5",[e._v("Column "),o("code",[e._v("<z-column />")])]),o("z-table",[o("z-thead",[o("z-th",[e._v("Name")]),o("z-th",[e._v("Description")]),o("z-th",[e._v("Type")]),o("z-th",[e._v("Values")]),o("z-th",[e._v("Default")])],1),o("z-tbody",[o("z-tr",[o("z-td",[o("code",[e._v("size")])]),o("z-td",[e._v("\n              column size\n            ")]),o("z-td",[e._v("Number")]),o("z-td",[o("code",[e._v("1")]),e._v(" to "),o("code",[e._v("12")])]),o("z-td",[e._v("---")])],1),o("z-tr",[o("z-td",[o("code",[e._v("sizeXS")])]),o("z-td",[e._v("\n              column size for xs viewport "),o("code",[e._v("col-xs-")])]),o("z-td",[e._v("Number")]),o("z-td",[o("code",[e._v("1")]),e._v(" to "),o("code",[e._v("12")])]),o("z-td",[e._v("---")])],1),o("z-tr",[o("z-td",[o("code",[e._v("sizeSM")])]),o("z-td",[e._v("\n              column size for sm viewport "),o("code",[e._v("col-sm-")])]),o("z-td",[e._v("Number")]),o("z-td",[o("code",[e._v("1")]),e._v(" to "),o("code",[e._v("12")])]),o("z-td",[e._v("---")])],1),o("z-tr",[o("z-td",[o("code",[e._v("sizeLG")])]),o("z-td",[e._v("\n              column size for lg viewport "),o("code",[e._v("col-lg-")])]),o("z-td",[e._v("Number")]),o("z-td",[o("code",[e._v("1")]),e._v(" to "),o("code",[e._v("12")])]),o("z-td",[e._v("---")])],1),o("z-tr",[o("z-td",[o("code",[e._v("sizeXL")])]),o("z-td",[e._v("\n              column size for xl viewport "),o("code",[e._v("col-xl-")])]),o("z-td",[e._v("Number")]),o("z-td",[o("code",[e._v("1")]),e._v(" to "),o("code",[e._v("12")])]),o("z-td",[e._v("---")])],1),o("z-tr",[o("z-td",[o("code",[e._v("mxAuto")])]),o("z-td",[e._v("set margins between columns without using empty columns\n            ")]),o("z-td",[e._v("Boolean")]),o("z-td",[o("code",[e._v("true")]),e._v(" / "),o("code",[e._v("false")])]),o("z-td",[e._v("false")])],1),o("z-tr",[o("z-td",[o("code",[e._v("mlAuto")])]),o("z-td",[e._v("set margins between columns without using empty columns\n            ")]),o("z-td",[e._v("Boolean")]),o("z-td",[o("code",[e._v("true")]),e._v(" / "),o("code",[e._v("false")])]),o("z-td",[e._v("false")])],1),o("z-tr",[o("z-td",[o("code",[e._v("mrAuto")])]),o("z-td",[e._v("set margins between columns without using empty columns\n            ")]),o("z-td",[e._v("Boolean")]),o("z-td",[o("code",[e._v("true")]),e._v(" / "),o("code",[e._v("false")])]),o("z-td",[e._v("false")])],1),o("z-tr",[o("z-td",[o("code",[e._v("hideXS")])]),o("z-td",[e._v("hide in xs viewport\n            ")]),o("z-td",[e._v("Boolean")]),o("z-td",[o("code",[e._v("true")]),e._v(" / "),o("code",[e._v("false")])]),o("z-td",[e._v("false")])],1),o("z-tr",[o("z-td",[o("code",[e._v("hideSM")])]),o("z-td",[e._v("hide in sm viewport\n            ")]),o("z-td",[e._v("Boolean")]),o("z-td",[o("code",[e._v("true")]),e._v(" / "),o("code",[e._v("false")])]),o("z-td",[e._v("false")])],1),o("z-tr",[o("z-td",[o("code",[e._v("hideLG")])]),o("z-td",[e._v("hide in lg viewport\n            ")]),o("z-td",[e._v("Boolean")]),o("z-td",[o("code",[e._v("true")]),e._v(" / "),o("code",[e._v("false")])]),o("z-td",[e._v("false")])],1),o("z-tr",[o("z-td",[o("code",[e._v("hideXL")])]),o("z-td",[e._v("hide in xl viewport\n            ")]),o("z-td",[e._v("Boolean")]),o("z-td",[o("code",[e._v("true")]),e._v(" / "),o("code",[e._v("false")])]),o("z-td",[e._v("false")])],1),o("z-tr",[o("z-td",[o("code",[e._v("showXS")])]),o("z-td",[e._v("show in xs viewport\n            ")]),o("z-td",[e._v("Boolean")]),o("z-td",[o("code",[e._v("true")]),e._v(" / "),o("code",[e._v("false")])]),o("z-td",[e._v("false")])],1),o("z-tr",[o("z-td",[o("code",[e._v("showSM")])]),o("z-td",[e._v("show in sm viewport\n            ")]),o("z-td",[e._v("Boolean")]),o("z-td",[o("code",[e._v("true")]),e._v(" / "),o("code",[e._v("false")])]),o("z-td",[e._v("false")])],1),o("z-tr",[o("z-td",[o("code",[e._v("showLG")])]),o("z-td",[e._v("show in lg viewport\n            ")]),o("z-td",[e._v("Boolean")]),o("z-td",[o("code",[e._v("true")]),e._v(" / "),o("code",[e._v("false")])]),o("z-td",[e._v("false")])],1),o("z-tr",[o("z-td",[o("code",[e._v("showXL")])]),o("z-td",[e._v("show in xl viewport\n            ")]),o("z-td",[e._v("Boolean")]),o("z-td",[o("code",[e._v("true")]),e._v(" / "),o("code",[e._v("false")])]),o("z-td",[e._v("false")])],1)],1)],1)],1)},v=[],_=(o("cadf"),o("551c"),o("097d"),o("2af9")),n={name:"DocsFlexbox",components:{ZContainer:_["q"],ZBreadcrumbs:_["c"],ZCode:_["n"],ZColumns:_["p"],ZColumn:_["o"],ZDivider:_["r"],ZTable:_["G"],ZThead:_["K"],ZTbody:_["H"],ZTh:_["J"],ZTr:_["S"],ZTd:_["I"]}},s=n,z=o("2877"),c=Object(z["a"])(s,d,v,!1,null,null,null);c.options.__file="DocsFlexboxResponsive.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d230de9.13ef1627.js.map
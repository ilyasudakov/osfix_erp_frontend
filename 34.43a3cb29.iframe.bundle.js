(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{2649:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(41),__webpack_require__(241),__webpack_require__(213),__webpack_require__(0)),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__(2653),__webpack_require__(1)),PlaceholderLoading=function PlaceholderLoading(_ref){var _ref$items=_ref.items,items=void 0===_ref$items?3:_ref$items,itemClassName=_ref.itemClassName,_ref$minHeight=_ref.minHeight,minHeight=void 0===_ref$minHeight?"1.5rem":_ref$minHeight,placeholderContent=_ref.placeholderContent,wrapperClassName=_ref.wrapperClassName,_ref$itemStyles=_ref.itemStyles,itemStyles=void 0===_ref$itemStyles?{}:_ref$itemStyles,_useState=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState,2),elements=_useState2[0],setElements=_useState2[1];return Object(react__WEBPACK_IMPORTED_MODULE_4__.useEffect)((function(){for(var temp=[],count=items,i=1;i<=count;i++)temp.push(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"placeholder-loading__item ".concat(itemClassName),style:Object.assign({minHeight:minHeight},itemStyles)}));setElements([].concat(temp))}),[]),placeholderContent?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"placeholder-loading ".concat(wrapperClassName),children:elements.map((function(item,index){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:itemClassName,style:{minHeight:minHeight},children:placeholderContent},index)}))}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"placeholder-loading ".concat(wrapperClassName),children:elements.map((function(item){return item}))})};PlaceholderLoading.displayName="PlaceholderLoading",PlaceholderLoading.__docgenInfo={description:"",methods:[],displayName:"PlaceholderLoading",props:{items:{defaultValue:{value:"3",computed:!1},type:{name:"number"},required:!1,description:""},minHeight:{defaultValue:{value:"'1.5rem'",computed:!1},type:{name:"string"},required:!1,description:""},itemStyles:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},itemClassName:{type:{name:"string"},required:!1,description:""},wrapperClassName:{type:{name:"string"},required:!1,description:""},placeholderContent:{type:{name:"any"},required:!1,description:""}}},__webpack_exports__.a=PlaceholderLoading,PlaceholderLoading.propTypes={items:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,minHeight:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,itemClassName:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,wrapperClassName:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,placeholderContent:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,itemStyles:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\utils\\TableView\\PlaceholderLoading\\PlaceholderLoading.jsx"]={name:"PlaceholderLoading",docgenInfo:PlaceholderLoading.__docgenInfo,path:"src\\utils\\TableView\\PlaceholderLoading\\PlaceholderLoading.jsx"})},2653:function(module,exports,__webpack_require__){var api=__webpack_require__(48),content=__webpack_require__(2654);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2654:function(module,exports,__webpack_require__){(exports=__webpack_require__(49)(!1)).push([module.i,'@keyframes pulse-placeholder-loading{0%,100%{background-color:#e7e7e7}50%{background-color:#efefef}}@keyframes load{from{left:-150px}to{left:100%}}.placeholder-loading__item{height:1rem;background-color:#ddd;animation:pulse-placeholder-loading 1s infinite ease-in-out;position:relative;overflow:hidden;border-bottom:1px solid #bbb}.placeholder-loading__item::after{content:"";display:block;position:absolute;left:-150px;top:0;height:100%;width:150px;background:linear-gradient(to right, transparent 0%, #e8e8e8 50%, transparent 100%);animation:load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite}\n',""]),module.exports=exports},2655:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(41),__webpack_require__(0)),Assets_tableview_chevron_down_inline_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(989),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(2658),__webpack_require__(1)),ControlPanel=function ControlPanel(props){var _props$styles,_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(!0),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState,2),isHidden=_useState2[0],setIsHidden=_useState2[1];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"control-panel",style:Object.assign({},null!==(_props$styles=props.styles)&&void 0!==_props$styles?_props$styles:{}),children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"main-window__control-panel-wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"control-panel__buttons",children:[props.sorting||null,props.content?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"main-window__button main-window__button--inverted main-window__button--filter",onClick:function onClick(){return setIsHidden((function(isHidden){return!isHidden}))},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:props.panelName||"Фильтры"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Assets_tableview_chevron_down_inline_svg__WEBPACK_IMPORTED_MODULE_3__.a,{className:"main-window__img ".concat(isHidden?"":"main-window__img--rotated")})]}):null,props.buttons||null,props.itemsCount?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"main-window__amount_table",children:props.itemsCount}):null]}),isHidden?null:props.content]})})};ControlPanel.displayName="ControlPanel",ControlPanel.__docgenInfo={description:"",methods:[],displayName:"ControlPanel"},__webpack_exports__.a=ControlPanel,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\utils\\MainWindow\\ControlPanel\\ControlPanel.jsx"]={name:"ControlPanel",docgenInfo:ControlPanel.__docgenInfo,path:"src\\utils\\MainWindow\\ControlPanel\\ControlPanel.jsx"})},2658:function(module,exports,__webpack_require__){var api=__webpack_require__(48),content=__webpack_require__(2659);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2659:function(module,exports,__webpack_require__){(exports=__webpack_require__(49)(!1)).push([module.i,":root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}.control-panel{width:100%}.control-panel .main-window__control-panel-wrapper{padding-top:5px;padding-bottom:10px}.control-panel .main-window__control-panel-wrapper .control-panel__buttons{display:flex;flex-direction:row;flex-wrap:wrap;width:100%}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__button{margin-top:5px;padding:8px 10px;font-size:85%}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .switch{margin-top:5px;margin-right:10px}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .searchbar{max-width:50%;margin-right:auto;padding:0;align-self:center;margin-left:-15px}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__amount_table{color:#666666;align-self:center;margin-top:5px;margin-left:auto}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window{padding:0}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__sort-panel{width:max-content;margin-bottom:0;margin-right:10px;box-sizing:border-box;padding-top:calc(5px);position:relative;background-color:#ffffff}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__sort-panel::before{width:100%;height:20px;position:absolute;content:\"Сортировка\";top:8px;left:10px;z-index:0;color:#777777;font-size:95%}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__sort-panel select{padding-top:18px;padding-right:25px;padding-left:9px;height:100%;margin:0;box-sizing:border-box;min-width:150px;z-index:0;background-color:transparent;cursor:pointer;border:1px solid #cccccc;transition:background-color 100ms ease-in-out;-webkit-appearance:none;-moz-appearance:none;background:transparent;background-image:url(\"data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z'></path></svg>\");background-repeat:no-repeat;background-position-x:100%;background-position-y:calc(50% + 2px)}.control-panel .main-window__control-panel-wrapper .main-window__button--filter{border-color:#cccccc;justify-content:space-between;padding:8px 8px !important;padding-right:5px !important}.control-panel .main-window__control-panel-wrapper .main-window__button--filter span{margin-right:20px;font-size:95%}.control-panel .main-window__control-panel-wrapper .main-window__button--filter .main-window__img{filter:none;max-width:18px;margin-top:1px;margin-right:0;transition:200ms cubic-bezier(0.23, 1, 0.32, 1)}.control-panel .main-window__control-panel-wrapper .main-window__button--filter .main-window__img path:nth-child(1){transition:200ms cubic-bezier(0.23, 1, 0.32, 1);fill:#333333}@media (max-width: 768px){.control-panel .main-window__control-panel-wrapper{padding-left:15px;padding-right:15px}.control-panel .main-window__control-panel-wrapper .control-panel__buttons{width:calc(100% + 30px);padding:0 15px;box-sizing:border-box;flex-wrap:nowrap;margin-left:-15px;overflow:auto;white-space:nowrap}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__sort-panel select{padding-top:18px !important;padding-right:25px !important;padding-left:9px !important;max-width:240px}}\n",""]),module.exports=exports},2660:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/edit.efe0dc2a.svg"},2668:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return defaultStylesPDF})),__webpack_require__.d(__webpack_exports__,"a",(function(){return createPDF})),__webpack_require__.d(__webpack_exports__,"d",(function(){return getPDFTitleObject})),__webpack_require__.d(__webpack_exports__,"c",(function(){return getInputElementTextPDF})),__webpack_require__.d(__webpack_exports__,"g",(function(){return getTransportationListPdfText})),__webpack_require__.d(__webpack_exports__,"f",(function(){return getRequestPdfText})),__webpack_require__.d(__webpack_exports__,"e",(function(){return getProductsFromRequestsListPdfText}));var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65),_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__),pdfmake_build_vfs_fonts_js__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__(213),__webpack_require__(241),__webpack_require__(282),__webpack_require__(988),__webpack_require__(2663),__webpack_require__(1584),__webpack_require__(2704)),pdfmake_build_vfs_fonts_js__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(pdfmake_build_vfs_fonts_js__WEBPACK_IMPORTED_MODULE_7__),pdfmake__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(2705),pdfmake__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(pdfmake__WEBPACK_IMPORTED_MODULE_8__),_functions_jsx__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(985),_sorting_sorting_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(986),defaultStylesPDF={title:{fontSize:18,alignment:"left"},subheader:{fontSize:14,alignment:"left"},regularText:{fontSize:11,alignment:"left"},tableHeader:{fontSize:11,color:"#555",alignment:"left"}},createPDF=function createPDF(data){var print=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return pdfmake__WEBPACK_IMPORTED_MODULE_8___default.a.vfs=pdfmake_build_vfs_fonts_js__WEBPACK_IMPORTED_MODULE_7___default.a.pdfMake.vfs,print?pdfmake__WEBPACK_IMPORTED_MODULE_8___default.a.createPdf(data).print():pdfmake__WEBPACK_IMPORTED_MODULE_8___default.a.createPdf(data).open()},getPDFTitleObject=function getPDFTitleObject(name){return{text:"".concat(name,"\n"),alignment:"center",style:"title"}},getInputElementTextPDF=function getInputElementTextPDF(title,value){return{text:[{text:"\n".concat(title,": \n"),style:"regularText",fontSize:12},{text:"".concat(value,"\n\n"),style:"subheader"}]}},getTransportationListPdfText=function getTransportationListPdfText(transportation){var transportationList=[],transportationInfo=[];transportation.map((function(item){return transportationInfo.push([{text:Object(_functions_jsx__WEBPACK_IMPORTED_MODULE_9__.g)(item.date),style:"regularText"},{text:item.cargo,style:"regularText"},{text:item.quantity,style:"regularText"},{text:item.sender,style:"regularText"},{text:item.recipient,style:"regularText"},{text:item.driver,style:"regularText"}])})),transportationList.push({table:{widths:[60,140,40,80,80,"*"],body:[[{text:"Дата",style:"tableHeader"},{text:"Товар",style:"tableHeader"},{text:"Кол-во",style:"tableHeader"},{text:"Откуда",style:"tableHeader"},{text:"Куда",style:"tableHeader"},{text:"Водитель",style:"tableHeader"}]].concat(transportationInfo)}});var dd={info:{title:"Реестр транспортировок"},content:[getPDFTitleObject("Реестр транспортировок")].concat(transportationList),styles:defaultStylesPDF};return pdfmake__WEBPACK_IMPORTED_MODULE_8___default.a.vfs=pdfmake_build_vfs_fonts_js__WEBPACK_IMPORTED_MODULE_7___default.a.pdfMake.vfs,dd},getRequestPdfText=function getRequestPdfText(date,requestProducts,codeWord,workshopName,itemId){var productsArr=Object(_sorting_sorting_js__WEBPACK_IMPORTED_MODULE_10__.a)(requestProducts,{fieldName:"name",direction:"asc"}).map((function(item){return[item.name,item.quantity,item.packaging,"",""]})),dd={info:{title:"Очередь производства №"+itemId},content:[getPDFTitleObject("Очередь производства  №".concat(itemId)),workshopName?getInputElementTextPDF("Подразделение",workshopName):"\n",getInputElementTextPDF("Дата",Object(_functions_jsx__WEBPACK_IMPORTED_MODULE_9__.g)(date)),{text:"Продукция: ",style:"regularText",fontSize:12,margin:[0,0,0,5]},{table:{widths:["*",70,70,70,70],body:[[{text:"Название",style:"tableHeader"},{text:"Кол-во",style:"tableHeader"},{text:"Фасовка",style:"tableHeader"},{text:"",style:"tableHeader"},{text:"",style:"tableHeader"}]].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(productsArr))}},"\n",getInputElementTextPDF("Кодовое слово",codeWord)],styles:defaultStylesPDF};createPDF(dd)},sortRequestProducts=function sortRequestProducts(data){return data.sort((function(a,b){return a[0].localeCompare(b[0],void 0,{numeric:!0})<0?-1:a[0].localeCompare(b[0],void 0,{numeric:!0})>0?1:0}))},getProductsFromRequestsListPdfText=function getProductsFromRequestsListPdfText(products,workshopName){var dd={info:{title:"Очередь производства - список"},content:[getPDFTitleObject("Очередь производства - список"),workshopName?getInputElementTextPDF("Подразделение",workshopName):"\n",sortRequestProducts(Object.entries(products)).map((function(category){if(Object.values(category[1]).length>0)return[{text:[{text:"".concat(category[0]," \n"),fontSize:12,style:"regularText",margin:[5,5,5,5]}]}].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(function formatProducts(products){return[{table:{margin:[0,5,0,5],widths:["*",100,80,80],body:[[{text:"Название",style:"tableHeader"},{text:"Кол-во",style:"tableHeader"},{text:"",style:"tableHeader"},{text:"",style:"tableHeader"}]].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(sortRequestProducts(Object.entries(products)).map((function(product){return[product[0],product[1],"",""]}))))}}]}(category[1])),["\n"])}))],styles:defaultStylesPDF};createPDF(dd)}},2673:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/delete.1ad59e4c.svg"},2720:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return filterEmployeesBySearchQuery})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getEmployeesByWorkshopListPdfText})),__webpack_require__.d(__webpack_exports__,"c",(function(){return getEmployeesListPdfText}));var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65),_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__),Utils_functions_jsx__WEBPACK_IMPORTED_MODULE_10__=(__webpack_require__(634),__webpack_require__(282),__webpack_require__(636),__webpack_require__(637),__webpack_require__(242),__webpack_require__(639),__webpack_require__(333),__webpack_require__(241),__webpack_require__(213),__webpack_require__(985)),Utils_pdfFunctions_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(2668),filterEmployeesBySearchQuery=function filterEmployeesBySearchQuery(data,searchQuery){var query=searchQuery.toLowerCase();return data.filter((function(item){return null!==item.name&&(item.lastName.toLowerCase().includes(query)||item.name.toLowerCase().includes(query)||item.middleName.toLowerCase().includes(query)||item.id.toString().includes(query)||item.yearOfBirth&&item.yearOfBirth.toString().includes(query)||item.dateOfBirth&&item.dateOfBirth.toString().includes(query)||item.citizenship.toLowerCase().includes(query)||item.workshop.toLowerCase().includes(query)||item.position.toLowerCase().includes(query)||item.comment.toLowerCase().includes(query)||item.relevance.toLowerCase().includes(query))}))},getEmployeesTablePDF=function getEmployeesTablePDF(employeeInfo){return{table:{widths:["*",70,80,120,100],body:[[{text:"ФИО",style:"tableHeader"},{text:"Дата рождения",style:"tableHeader"},{text:"Гражданство",style:"tableHeader"},{text:"Должность",style:"tableHeader"},{text:"",style:"tableHeader"}]].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(employeeInfo))}}},getEmployeesByWorkshopListPdfText=function getEmployeesByWorkshopListPdfText(){var employees=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],workshop=arguments.length>1?arguments[1]:void 0,employeesList=[],employeeInfo=[];employees.map((function(item){employeeInfo.push([Object(Utils_functions_jsx__WEBPACK_IMPORTED_MODULE_10__.p)(item),Object(Utils_functions_jsx__WEBPACK_IMPORTED_MODULE_10__.g)(item.yearOfBirth),item.citizenship,item.position,""])})),employeesList.push(getEmployeesTablePDF(employeeInfo));var dd={info:{title:"Список сотрудников - ".concat(workshop)},content:[Object(Utils_pdfFunctions_js__WEBPACK_IMPORTED_MODULE_11__.d)("Список сотрудников ".concat(workshop,"\n"))].concat(employeesList),styles:Utils_pdfFunctions_js__WEBPACK_IMPORTED_MODULE_11__.b};Object(Utils_pdfFunctions_js__WEBPACK_IMPORTED_MODULE_11__.a)(dd)},getEmployeesListPdfText=function getEmployeesListPdfText(employees,workshops){var employeesList=[];workshops.map((function(workshop){employeesList.push(Object(Utils_pdfFunctions_js__WEBPACK_IMPORTED_MODULE_11__.c)("Подразделение",workshop));var employeeInfo=[];employees.map((function(employee){(workshop===employee.workshop&&"Уволен"!==employee.relevance||"Уволенные"===workshop&&"Уволен"===employee.relevance)&&employeeInfo.push([Object(Utils_functions_jsx__WEBPACK_IMPORTED_MODULE_10__.p)(employee),Object(Utils_functions_jsx__WEBPACK_IMPORTED_MODULE_10__.g)(employee.yearOfBirth),employee.citizenship,employee.position,""])})),employeesList.push(getEmployeesTablePDF(employeeInfo))}));var dd={info:{title:"Список сотрудников"},content:[Object(Utils_pdfFunctions_js__WEBPACK_IMPORTED_MODULE_11__.d)("Список сотрудников")].concat(employeesList),styles:Utils_pdfFunctions_js__WEBPACK_IMPORTED_MODULE_11__.b};Object(Utils_pdfFunctions_js__WEBPACK_IMPORTED_MODULE_11__.a)(dd)}},2789:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/print.c49fcb59.svg"},2795:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/print.2602d8cf.png"},3449:function(module,exports,__webpack_require__){var api=__webpack_require__(48),content=__webpack_require__(3450);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},3450:function(module,exports,__webpack_require__){(exports=__webpack_require__(49)(!1)).push([module.i,":root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}\n",""]),module.exports=exports},3451:function(module,exports,__webpack_require__){var api=__webpack_require__(48),content=__webpack_require__(3452);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},3452:function(module,exports,__webpack_require__){(exports=__webpack_require__(49)(!1)).push([module.i,":root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}.tableview-employees{display:flex;justify-content:center;width:100%;font-size:110%}.tableview-employees .main-window__list .main-window__list-item{padding:10px 25px;cursor:pointer}.tableview-employees .main-window__list .main-window__list-item .main-window__action .main-window__img{margin-right:5px}.tableview-employees .main-window__list .main-window__list-options{justify-content:center;font-size:95%}.tableview-employees .main-window__list .main-window__list-options .main-window__list .main-window__list-item{padding:5px 10px;cursor:auto}.tableview-employees .main-window__list .main-window__list-options .main-window__list .main-window__list-item span:nth-child(1){flex:0 1 30%}.tableview-employees .main-window__list .main-window__list-options .main-window__list .main-window__list-item span:nth-child(2){max-width:125px}.tableview-employees .main-window__list .main-window__list-options .main-window__list .main-window__list-item span:nth-child(3){max-width:200px}.tableview-employees .main-window__list .main-window__list-options .main-window__list .main-window__list-item span:nth-child(4){flex:0 1 25%}.tableview-employees .main-window__list .main-window__list-options .main-window__list .main-window__list-item .main-window__action .main-window__img{margin-right:0px}@media (max-width: 768px){.tableview-employees{font-size:100%}.tableview-employees .main-window__list{margin-top:-10px;width:calc(100% - 10px)}.tableview-employees .main-window__list .main-window__list-item span:nth-child(1) .main-window__mobile-text{margin-right:auto}.tableview-employees .main-window__list .main-window__list-item span:nth-child(1) span{margin-left:5px;margin-bottom:0}.tableview-employees .main-window__list .main-window__list-options{font-size:90%}.tableview-employees .main-window__list .main-window__list-options .main-window__list{margin-top:0px}.tableview-employees .main-window__list .main-window__list-options .main-window__list-item span:nth-child(2){max-width:none !important}.tableview-employees .main-window__list .main-window__list-options .main-window__list-item span:nth-child(3){max-width:none !important}}\n",""]),module.exports=exports},3602:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var slicedToArray=__webpack_require__(15),slicedToArray_default=__webpack_require__.n(slicedToArray),react=(__webpack_require__(213),__webpack_require__(241),__webpack_require__(441),__webpack_require__(242),__webpack_require__(283),__webpack_require__(243),__webpack_require__(334),__webpack_require__(634),__webpack_require__(0)),SearchBar=(__webpack_require__(3449),__webpack_require__(1582),__webpack_require__(640)),toConsumableArray=__webpack_require__(65),toConsumableArray_default=__webpack_require__.n(toConsumableArray),react_router_dom=(__webpack_require__(1583),__webpack_require__(1581),__webpack_require__(282),__webpack_require__(53)),edit=__webpack_require__(2660),edit_default=__webpack_require__.n(edit),tableview_delete=__webpack_require__(2673),delete_default=__webpack_require__.n(tableview_delete),print=__webpack_require__(2789),print_default=__webpack_require__.n(print),functions=(__webpack_require__(3451),__webpack_require__(985)),Employees_functions=__webpack_require__(2720),PlaceholderLoading=__webpack_require__(2649),sorting=__webpack_require__(986),jsx_runtime=__webpack_require__(1),TableView_TableView_TableView=function TableView(props){var workshops=["ЦехЛЭМЗ","ЦехЛепсари","ЦехЛиговский","Офис","Уволенные"],_useState=Object(react.useState)([]),_useState2=slicedToArray_default()(_useState,2),workshopsVisible=_useState2[0],setWorkshopsVisible=_useState2[1],isWorkshopHidden=function isWorkshopHidden(index){index=Number.parseInt(index);var check=!0;return workshopsVisible.map((function(element){element.id===index&&(check=element.hidden)})),check};return Object(react.useEffect)((function(){if(0===workshopsVisible.length){var temp=[];workshops.map((function(element,index){return temp.push({id:index,hidden:!0})})),setWorkshopsVisible([].concat(temp))}}),[props.data]),Object(jsx_runtime.jsx)("div",{className:"tableview-employees",children:Object(jsx_runtime.jsxs)("div",{className:"main-window__list main-window__list--full",children:[Object(jsx_runtime.jsxs)("div",{className:"main-window__list-item main-window__list-item--header",children:[Object(jsx_runtime.jsx)("span",{children:"Подразделение"}),Object(jsx_runtime.jsx)("div",{className:"main-window__actions",children:"Действия"})]}),workshops.map((function(item,index){var sortedEmployees=function sortEmployees(data){return Object(sorting.a)(Object(Employees_functions.a)(data,props.searchQuery),{fieldName:"lastName",direction:"asc"})}(function filterEmployees(data,workshopItem){return data.filter((function(employee){return workshopItem===employee.workshop&&"Уволен"!==employee.relevance||"Уволенные"===workshopItem&&"Уволен"===employee.relevance}))}(props.data,item));return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)("div",{className:"main-window__list-item",onClick:function onClick(){return function handleClickWorkshop(index){setWorkshopsVisible(toConsumableArray_default()(Object(functions.c)(workshopsVisible,index)))}(index)},children:[Object(jsx_runtime.jsxs)("span",{children:[Object(jsx_runtime.jsx)("div",{className:"main-window__mobile-text",children:"Подразделение:"}),item,"Уволенные"!==item?Object(jsx_runtime.jsx)("span",{className:"main-window__items-count",children:Object(Employees_functions.a)(sortedEmployees,props.searchQuery).length}):null]}),Object(jsx_runtime.jsx)("div",{className:"main-window__actions",children:Object(jsx_runtime.jsxs)("div",{className:"main-window__action",onClick:function onClick(){Object(Employees_functions.b)(sortedEmployees,item)},title:"Печать",children:[Object(jsx_runtime.jsx)("img",{className:"main-window__img",src:print_default.a,alt:""}),"Печать"]})})]}),Object(jsx_runtime.jsx)("div",{className:isWorkshopHidden(index)?"main-window__list-options main-window__list-options--hidden":"main-window__list-options",children:Object(jsx_runtime.jsxs)("div",{className:"main-window__list",children:[Object(jsx_runtime.jsxs)("div",{className:"main-window__list-item main-window__list-item--header",children:[Object(jsx_runtime.jsx)("span",{children:"ФИО"}),Object(jsx_runtime.jsx)("span",{children:"Дата рождения"}),Object(jsx_runtime.jsx)("span",{children:"Гражданство"}),Object(jsx_runtime.jsx)("span",{children:"Должность"}),Object(jsx_runtime.jsx)("div",{className:"main-window__actions",children:"Действия"})]}),props.isLoading&&Object(jsx_runtime.jsx)(PlaceholderLoading.a,{itemClassName:"main-window__list-item",minHeight:"35px",items:8}),sortedEmployees.map((function(employee,employee_id){return Object(jsx_runtime.jsxs)("div",{className:"main-window__list-item",children:[Object(jsx_runtime.jsxs)("span",{children:[Object(jsx_runtime.jsx)("div",{className:"main-window__mobile-text",children:"ФИО:"}),"".concat(employee.lastName," ").concat(employee.name," ").concat(employee.middleName)]}),Object(jsx_runtime.jsxs)("span",{children:[Object(jsx_runtime.jsx)("div",{className:"main-window__mobile-text",children:"Дата рождения:"}),Object(jsx_runtime.jsx)("div",{children:employee.dateOfBirth?Object(functions.g)(employee.dateOfBirth):null})]}),Object(jsx_runtime.jsxs)("span",{children:[Object(jsx_runtime.jsx)("div",{className:"main-window__mobile-text",children:"Гражданство:"}),employee.citizenship]}),Object(jsx_runtime.jsxs)("span",{children:[Object(jsx_runtime.jsx)("div",{className:"main-window__mobile-text",children:"Должность:"}),employee.position]}),Object(jsx_runtime.jsxs)("div",{className:"main-window__actions",children:[Object(jsx_runtime.jsx)(react_router_dom.a,{to:"/dispatcher/employees/edit/".concat(employee.id),className:"main-window__action",title:"Редактирование",children:Object(jsx_runtime.jsx)("img",{className:"main-window__img",src:edit_default.a,alt:""})}),props.userHasAccess(["ROLE_ADMIN"])&&Object(jsx_runtime.jsx)("div",{className:"main-window__action",onClick:function onClick(){return props.deleteItem(employee.id)},title:"Удалить",children:Object(jsx_runtime.jsx)("img",{className:"main-window__img",src:delete_default.a,alt:""})})]})]},employee_id)}))]})})]})}))]})})};TableView_TableView_TableView.displayName="TableView",TableView_TableView_TableView.__docgenInfo={description:"",methods:[],displayName:"TableView"};var Employees_TableView_TableView=TableView_TableView_TableView;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\MainPage\\Dispatcher\\Employees\\TableView\\TableView.jsx"]={name:"TableView",docgenInfo:TableView_TableView_TableView.__docgenInfo,path:"src\\components\\MainPage\\Dispatcher\\Employees\\TableView\\TableView.jsx"});var assets_print=__webpack_require__(2795),assets_print_default=__webpack_require__.n(assets_print),RequestsAPI_Employees=__webpack_require__(2709),Button=__webpack_require__(181),ControlPanel=__webpack_require__(2655),Employees_Employees_Employees=function Employees(props){var _useState=Object(react.useState)(""),_useState2=slicedToArray_default()(_useState,2),searchQuery=_useState2[0],setSearchQuery=_useState2[1],_useState3=Object(react.useState)([]),_useState4=slicedToArray_default()(_useState3,2),employees=_useState4[0],setEmployees=_useState4[1],workshops=["ЦехЛЭМЗ","ЦехЛепсари","ЦехЛиговский","Офис","Уволенные"],_useState5=Object(react.useState)(!1),_useState6=slicedToArray_default()(_useState5,2),isLoading=_useState6[0],setIsLoading=_useState6[1];Object(react.useEffect)((function(){document.title="Сотрудники";var abortController=new AbortController;return loadEmployees(abortController.signal),function cancel(){abortController.abort()}}),[]);var loadEmployees=function loadEmployees(signal){setIsLoading(!0);var emplArr=[],temp=workshops.map((function(item){var workshop={workshop:item};return Object(RequestsAPI_Employees.h)(workshop,signal).then((function(res){return res.json()})).then((function(res){res.map((function(item){return emplArr.push(item)})),setEmployees([].concat(emplArr))}))}));Promise.all(temp).then((function(){setIsLoading(!1)})).catch((function(error){console.log(error),setIsLoading(!1)}))};return Object(jsx_runtime.jsx)("div",{className:"employees",children:Object(jsx_runtime.jsxs)("div",{className:"main-window",children:[Object(jsx_runtime.jsx)("div",{className:"main-window__header main-window__header--full",children:Object(jsx_runtime.jsx)("div",{className:"main-window__title",children:"Сотрудники"})}),Object(jsx_runtime.jsx)(SearchBar.a,{fullSize:!0,placeholder:"Введите фамилию сотрудника для поиска...",setSearchQuery:setSearchQuery}),Object(jsx_runtime.jsx)(ControlPanel.a,{buttons:Object(jsx_runtime.jsx)(Button.a,{text:"Печать списка",isLoading:isLoading,imgSrc:assets_print_default.a,inverted:!0,className:"main-window__button main-window__button--inverted",onClick:function printEmployeesList(){Object(Employees_functions.c)(Object(sorting.a)(employees,{fieldName:"lastName",direction:"asc"}),workshops)}}),itemsCount:"Всего: ".concat(employees.filter((function(employee){return"Уволен"!==employee.relevance&&"Уволенные"!==employee.workshop})).length," записей")}),Object(jsx_runtime.jsx)(Employees_TableView_TableView,{data:employees,searchQuery:searchQuery,isLoading:isLoading,userHasAccess:props.userHasAccess,deleteItem:function deleteItem(id){Object(RequestsAPI_Employees.b)(id).then((function(){return loadEmployees()}))}})]})})};Employees_Employees_Employees.displayName="Employees",Employees_Employees_Employees.__docgenInfo={description:"",methods:[],displayName:"Employees"};__webpack_exports__.default=Employees_Employees_Employees;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\MainPage\\Dispatcher\\Employees\\Employees.jsx"]={name:"Employees",docgenInfo:Employees_Employees_Employees.__docgenInfo,path:"src\\components\\MainPage\\Dispatcher\\Employees\\Employees.jsx"})}}]);
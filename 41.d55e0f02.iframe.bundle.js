(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{2649:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(41),__webpack_require__(241),__webpack_require__(213),__webpack_require__(0)),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__(2653),__webpack_require__(1)),PlaceholderLoading=function PlaceholderLoading(_ref){var _ref$items=_ref.items,items=void 0===_ref$items?3:_ref$items,itemClassName=_ref.itemClassName,_ref$minHeight=_ref.minHeight,minHeight=void 0===_ref$minHeight?"1.5rem":_ref$minHeight,placeholderContent=_ref.placeholderContent,wrapperClassName=_ref.wrapperClassName,_ref$itemStyles=_ref.itemStyles,itemStyles=void 0===_ref$itemStyles?{}:_ref$itemStyles,_useState=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState,2),elements=_useState2[0],setElements=_useState2[1];return Object(react__WEBPACK_IMPORTED_MODULE_4__.useEffect)((function(){for(var temp=[],count=items,i=1;i<=count;i++)temp.push(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"placeholder-loading__item ".concat(itemClassName),style:Object.assign({minHeight:minHeight},itemStyles)}));setElements([].concat(temp))}),[]),placeholderContent?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"placeholder-loading ".concat(wrapperClassName),children:elements.map((function(item,index){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:itemClassName,style:{minHeight:minHeight},children:placeholderContent},index)}))}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"placeholder-loading ".concat(wrapperClassName),children:elements.map((function(item){return item}))})};PlaceholderLoading.displayName="PlaceholderLoading",PlaceholderLoading.__docgenInfo={description:"",methods:[],displayName:"PlaceholderLoading",props:{items:{defaultValue:{value:"3",computed:!1},type:{name:"number"},required:!1,description:""},minHeight:{defaultValue:{value:"'1.5rem'",computed:!1},type:{name:"string"},required:!1,description:""},itemStyles:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},itemClassName:{type:{name:"string"},required:!1,description:""},wrapperClassName:{type:{name:"string"},required:!1,description:""},placeholderContent:{type:{name:"any"},required:!1,description:""}}},__webpack_exports__.a=PlaceholderLoading,PlaceholderLoading.propTypes={items:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,minHeight:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,itemClassName:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,wrapperClassName:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,placeholderContent:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,itemStyles:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\utils\\TableView\\PlaceholderLoading\\PlaceholderLoading.jsx"]={name:"PlaceholderLoading",docgenInfo:PlaceholderLoading.__docgenInfo,path:"src\\utils\\TableView\\PlaceholderLoading\\PlaceholderLoading.jsx"})},2653:function(module,exports,__webpack_require__){var api=__webpack_require__(48),content=__webpack_require__(2654);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2654:function(module,exports,__webpack_require__){(exports=__webpack_require__(49)(!1)).push([module.i,'@keyframes pulse-placeholder-loading{0%,100%{background-color:#e7e7e7}50%{background-color:#efefef}}@keyframes load{from{left:-150px}to{left:100%}}.placeholder-loading__item{height:1rem;background-color:#ddd;animation:pulse-placeholder-loading 1s infinite ease-in-out;position:relative;overflow:hidden;border-bottom:1px solid #bbb}.placeholder-loading__item::after{content:"";display:block;position:absolute;left:-150px;top:0;height:100%;width:150px;background:linear-gradient(to right, transparent 0%, #e8e8e8 50%, transparent 100%);animation:load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite}\n',""]),module.exports=exports},2655:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(41),__webpack_require__(0)),Assets_tableview_chevron_down_inline_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(989),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(2658),__webpack_require__(1)),ControlPanel=function ControlPanel(props){var _props$styles,_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(!0),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState,2),isHidden=_useState2[0],setIsHidden=_useState2[1];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"control-panel",style:Object.assign({},null!==(_props$styles=props.styles)&&void 0!==_props$styles?_props$styles:{}),children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"main-window__control-panel-wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"control-panel__buttons",children:[props.sorting||null,props.content?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"main-window__button main-window__button--inverted main-window__button--filter",onClick:function onClick(){return setIsHidden((function(isHidden){return!isHidden}))},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:props.panelName||"Фильтры"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Assets_tableview_chevron_down_inline_svg__WEBPACK_IMPORTED_MODULE_3__.a,{className:"main-window__img ".concat(isHidden?"":"main-window__img--rotated")})]}):null,props.buttons||null,props.itemsCount?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"main-window__amount_table",children:props.itemsCount}):null]}),isHidden?null:props.content]})})};ControlPanel.displayName="ControlPanel",ControlPanel.__docgenInfo={description:"",methods:[],displayName:"ControlPanel"},__webpack_exports__.a=ControlPanel,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\utils\\MainWindow\\ControlPanel\\ControlPanel.jsx"]={name:"ControlPanel",docgenInfo:ControlPanel.__docgenInfo,path:"src\\utils\\MainWindow\\ControlPanel\\ControlPanel.jsx"})},2658:function(module,exports,__webpack_require__){var api=__webpack_require__(48),content=__webpack_require__(2659);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2659:function(module,exports,__webpack_require__){(exports=__webpack_require__(49)(!1)).push([module.i,":root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}.control-panel{width:100%}.control-panel .main-window__control-panel-wrapper{padding-top:5px;padding-bottom:10px}.control-panel .main-window__control-panel-wrapper .control-panel__buttons{display:flex;flex-direction:row;flex-wrap:wrap;width:100%}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__button{margin-top:5px;padding:8px 10px;font-size:85%}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .switch{margin-top:5px;margin-right:10px}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .searchbar{max-width:50%;margin-right:auto;padding:0;align-self:center;margin-left:-15px}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__amount_table{color:#666666;align-self:center;margin-top:5px;margin-left:auto}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window{padding:0}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__sort-panel{width:max-content;margin-bottom:0;margin-right:10px;box-sizing:border-box;padding-top:calc(5px);position:relative;background-color:#ffffff}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__sort-panel::before{width:100%;height:20px;position:absolute;content:\"Сортировка\";top:8px;left:10px;z-index:0;color:#777777;font-size:95%}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__sort-panel select{padding-top:18px;padding-right:25px;padding-left:9px;height:100%;margin:0;box-sizing:border-box;min-width:150px;z-index:0;background-color:transparent;cursor:pointer;border:1px solid #cccccc;transition:background-color 100ms ease-in-out;-webkit-appearance:none;-moz-appearance:none;background:transparent;background-image:url(\"data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z'></path></svg>\");background-repeat:no-repeat;background-position-x:100%;background-position-y:calc(50% + 2px)}.control-panel .main-window__control-panel-wrapper .main-window__button--filter{border-color:#cccccc;justify-content:space-between;padding:8px 8px !important;padding-right:5px !important}.control-panel .main-window__control-panel-wrapper .main-window__button--filter span{margin-right:20px;font-size:95%}.control-panel .main-window__control-panel-wrapper .main-window__button--filter .main-window__img{filter:none;max-width:18px;margin-top:1px;margin-right:0;transition:200ms cubic-bezier(0.23, 1, 0.32, 1)}.control-panel .main-window__control-panel-wrapper .main-window__button--filter .main-window__img path:nth-child(1){transition:200ms cubic-bezier(0.23, 1, 0.32, 1);fill:#333333}@media (max-width: 768px){.control-panel .main-window__control-panel-wrapper{padding-left:15px;padding-right:15px}.control-panel .main-window__control-panel-wrapper .control-panel__buttons{width:calc(100% + 30px);padding:0 15px;box-sizing:border-box;flex-wrap:nowrap;margin-left:-15px;overflow:auto;white-space:nowrap}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__sort-panel select{padding-top:18px !important;padding-right:25px !important;padding-left:9px !important;max-width:240px}}\n",""]),module.exports=exports},2660:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/edit.efe0dc2a.svg"},2666:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return workshops})),__webpack_require__.d(__webpack_exports__,"b",(function(){return requestStatuses})),__webpack_require__.d(__webpack_exports__,"a",(function(){return productsStatuses}));var workshops={requests:{name:"Заявки",title:"",redirectURL:"/requests",type:"requests",fullName:"Заявки"},lemz:{name:"ЛЭМЗ",title:"ЛЭМЗ",redirectURL:"/lemz/workshop-lemz",ordersRedirectURL:"/lemz/workshop-orders",storageRedirectURL:"/lemz/workshop-storage",type:"lemz",fullName:"ЦехЛЭМЗ"},lepsari:{name:"Лепсари",title:"Лепсари",redirectURL:"/lepsari/workshop-lepsari",ordersRedirectURL:"/lepsari/workshop-orders",storageRedirectURL:"/lepsari/workshop-storage",type:"lepsari",fullName:"ЦехЛепсари"},ligovskiy:{name:"Лиговский",title:"Лиговский",redirectURL:"/ligovskiy/workshop",ordersRedirectURL:"/ligovskiy/workshop-orders",storageRedirectURL:"/ligovskiy/workshop-storage",type:"ligovskiy",fullName:"ЦехЛиговский"},null:{name:"Заявки",title:"",redirectURL:"/requests",type:"requests",fullName:"Заявки"}},requestStatuses=[{name:"Проблема/Материалы",oldName:"Проблема-материалы",className:"materials",access:["ROLE_ADMIN","ROLE_WORKSHOP"],visible:!1},{name:"Завершено",className:"completed",access:["ROLE_ADMIN"]},{name:"Отгружено",className:"shipped",access:["ROLE_ADMIN","ROLE_WORKSHOP","ROLE_MANAGER"]},{name:"Частично отгружено",className:"shipped-in-parts",access:[]},{name:"Готово к отгрузке",oldName:"Готово",className:"ready",access:["ROLE_ADMIN","ROLE_WORKSHOP"]},{name:"В производстве",className:"in-production",access:[]},{name:"Ожидание",className:"waiting",access:["ROLE_ADMIN","ROLE_MANAGER","ROLE_WORKSHOP"]},{name:"Приоритет",className:"priority",access:["ROLE_ADMIN"]}],productsStatuses=[{name:"В работе",oldName:null,className:"production",access:["ROLE_ADMIN","ROLE_WORKSHOP","ROLE_MANAGER"]},{name:"Завершено",className:"completed",access:["ROLE_ADMIN"]},{name:"Приоритет",className:"defect",access:["ROLE_ADMIN"]}]},2798:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return getStorage})),__webpack_require__.d(__webpack_exports__,"d",(function(){return getStorageById})),__webpack_require__.d(__webpack_exports__,"b",(function(){return deleteStorage})),__webpack_require__.d(__webpack_exports__,"a",(function(){return createStorage})),__webpack_require__.d(__webpack_exports__,"e",(function(){return updateStorage}));__webpack_require__(241);var _utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(635),axios__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(992),axios__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);function getStorage(workshop){var headers=Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_1__.a)();return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat("http://localhost:8443","/api/v1/").concat(workshop,"_storage/"),headers)}function getStorageById(workshop,id){var headers=Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_1__.a)();return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat("http://localhost:8443","/api/v1/").concat(workshop,"_storage/").concat(id),headers)}function deleteStorage(workshop,id){var headers=Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_1__.a)();return axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete("".concat("http://localhost:8443","/api/v1/").concat(workshop,"_storage/").concat(id),headers)}function createStorage(workshop,data){var headers=Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_1__.a)();return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat("http://localhost:8443","/api/v1/").concat(workshop,"_storage/"),data,headers)}function updateStorage(workshop,data,id){var headers=Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_1__.a)();return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("".concat("http://localhost:8443","/api/v1/").concat(workshop,"_storage/").concat(id),data,headers)}},3470:function(module,exports,__webpack_require__){var api=__webpack_require__(48),content=__webpack_require__(3471);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},3471:function(module,exports,__webpack_require__){(exports=__webpack_require__(49)(!1)).push([module.i,":root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}.storage .control-panel{margin-top:-10px;border-top:1px solid #dddddd;width:calc(100% + 25px)}.storage .searchbar{width:calc(100% + 25px) !important}\n",""]),module.exports=exports},3472:function(module,exports,__webpack_require__){var api=__webpack_require__(48),content=__webpack_require__(3473);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},3473:function(module,exports,__webpack_require__){(exports=__webpack_require__(49)(!1)).push([module.i,":root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}.tableview-storage{display:flex;flex-direction:column;width:100%}.tableview-storage .main-window__list{width:calc(100% + 25px) !important;margin-left:-12.5px}.tableview-storage .main-window__list-item span:nth-child(1){max-width:100px}.tableview-storage .main-window__list-item span:nth-child(2){flex:0 1 40%}.tableview-storage .main-window__list-item span:nth-child(3){max-width:200px}.tableview-storage .main-window__list-item span:nth-child(4){flex:0 1 30%}@media (max-width: 768px){.tableview-storage{width:100%}.tableview-storage .main-window__list .main-window__list-item span:nth-child(1){max-width:none}.tableview-storage .main-window__list .main-window__list-item span:nth-child(3){max-width:none}}\n",""]),module.exports=exports},3604:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var slicedToArray=__webpack_require__(15),slicedToArray_default=__webpack_require__.n(slicedToArray),react=(__webpack_require__(634),__webpack_require__(636),__webpack_require__(637),__webpack_require__(242),__webpack_require__(639),__webpack_require__(333),__webpack_require__(282),__webpack_require__(0)),edit=(__webpack_require__(3470),__webpack_require__(1582),__webpack_require__(643),__webpack_require__(213),__webpack_require__(241),__webpack_require__(2660)),edit_default=__webpack_require__.n(edit),functions=(__webpack_require__(3472),__webpack_require__(985)),TableActions=__webpack_require__(993),DeleteItemAction=__webpack_require__(644),PlaceholderLoading=__webpack_require__(2649),jsx_runtime=__webpack_require__(1),TableView_TableView_TableView=function TableView(_ref){var data=_ref.data,deleteItem=_ref.deleteItem,userHasAccess=_ref.userHasAccess,link=_ref.link,isLoading=_ref.isLoading;return Object(jsx_runtime.jsx)("div",{className:"tableview-storage",children:Object(jsx_runtime.jsxs)("div",{className:"main-window__list main-window__list--full",children:[Object(jsx_runtime.jsxs)("div",{className:"main-window__list-item main-window__list-item--header",children:[Object(jsx_runtime.jsx)("span",{children:"Номер"}),Object(jsx_runtime.jsx)("span",{children:"Название"}),Object(jsx_runtime.jsx)("span",{children:"Кол-во"}),Object(jsx_runtime.jsx)("span",{children:"Комментарий"}),Object(jsx_runtime.jsx)("div",{className:"main-window__table-actions"})]}),isLoading?Object(jsx_runtime.jsx)(PlaceholderLoading.a,{itemClassName:"main-window__list-item",items:3}):data.map((function(storage){return Object(jsx_runtime.jsxs)("div",{className:"main-window__list-item",children:[Object(jsx_runtime.jsxs)("span",{children:[Object(jsx_runtime.jsx)("div",{className:"main-window__mobile-text",children:"Номер:"}),storage.number]}),Object(jsx_runtime.jsxs)("span",{children:[Object(jsx_runtime.jsx)("div",{className:"main-window__mobile-text",children:"Название:"}),storage.name]}),Object(jsx_runtime.jsxs)("span",{children:[Object(jsx_runtime.jsx)("div",{className:"main-window__mobile-text",children:"Кол-во:"}),Object(functions.a)(storage.quantity)]}),Object(jsx_runtime.jsxs)("span",{children:[Object(jsx_runtime.jsx)("div",{className:"main-window__mobile-text",children:"Комментарий:"}),storage.comment]}),Object(jsx_runtime.jsx)(TableActions.a,{actionsList:[{link:"".concat(link,"/edit/").concat(storage.id),imgSrc:edit_default.a},{customElement:Object(jsx_runtime.jsx)(DeleteItemAction.a,{onClick:function onClick(){return deleteItem(storage.id)},isRendered:userHasAccess(["ROLE_ADMIN"])})}]})]},storage.id)}))]})})};TableView_TableView_TableView.displayName="TableView",TableView_TableView_TableView.__docgenInfo={description:"",methods:[],displayName:"TableView"};var Storage_TableView_TableView=TableView_TableView_TableView;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\MainPage\\WorkshopsComponents\\Storage\\TableView\\TableView.jsx"]={name:"TableView",docgenInfo:TableView_TableView_TableView.__docgenInfo,path:"src\\components\\MainPage\\WorkshopsComponents\\Storage\\TableView\\TableView.jsx"});var SearchBar=__webpack_require__(640),Workshop_storage=__webpack_require__(2798),FloatingPlus=__webpack_require__(642),ControlPanel=__webpack_require__(2655),App=__webpack_require__(214),workshopVariables=__webpack_require__(2666),sorting=__webpack_require__(986),Storage_Storage_Storage=function Storage(props){var userContext=Object(react.useContext)(App.a),_useState=Object(react.useState)([]),_useState2=slicedToArray_default()(_useState,2),storage=_useState2[0],setStorage=_useState2[1],_useState3=Object(react.useState)(""),_useState4=slicedToArray_default()(_useState3,2),searchQuery=_useState4[0],setSearchQuery=_useState4[1],_useState5=Object(react.useState)(!1),_useState6=slicedToArray_default()(_useState5,2),isLoading=_useState6[0],setIsLoading=_useState6[1];Object(react.useEffect)((function(){document.title="Склад",loadStorage()}),[]);var loadStorage=function loadStorage(){setIsLoading(!0),Object(Workshop_storage.c)(props.type).then((function(_ref){var data=_ref.data;setStorage(data),setIsLoading(!1)})).catch((function(error){setIsLoading(!1),console.log(error)}))};return Object(jsx_runtime.jsx)("div",{className:"storage",children:Object(jsx_runtime.jsxs)("div",{className:"main-window",children:[Object(jsx_runtime.jsx)(FloatingPlus.a,{linkTo:"".concat(workshopVariables.c[props.type].storageRedirectURL,"/new"),visibility:["ROLE_ADMIN","ROLE_WORKSHOP"]}),Object(jsx_runtime.jsx)(SearchBar.a,{fullSize:!0,placeholder:"Введите артикул детали для поиска...",setSearchQuery:setSearchQuery}),Object(jsx_runtime.jsx)(ControlPanel.a,{itemsCount:"Всего: ".concat(storage.length," записей")}),Object(jsx_runtime.jsx)(Storage_TableView_TableView,{data:function sortParts(data){return Object(sorting.a)(function filterData(data){var query=searchQuery.toLowerCase();return data.filter((function(item){return item.id.toString().includes(query)||item.name.toLowerCase().includes(query)||item.quantity.toLowerCase().includes(query)||item.comment.toLowerCase().includes(query)||item.number.toString().toLowerCase().includes(query)}))}(data),{fieldName:"id",direction:"desc"})}(storage),userHasAccess:userContext.userHasAccess,deleteItem:function deleteItem(id){Object(Workshop_storage.b)(props.type,id).then((function(){return loadStorage()}))},isLoading:isLoading,link:workshopVariables.c[props.type].storageRedirectURL})]})})};Storage_Storage_Storage.displayName="Storage",Storage_Storage_Storage.__docgenInfo={description:"",methods:[],displayName:"Storage"};__webpack_exports__.default=Storage_Storage_Storage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\MainPage\\WorkshopsComponents\\Storage\\Storage.jsx"]={name:"Storage",docgenInfo:Storage_Storage_Storage.__docgenInfo,path:"src\\components\\MainPage\\WorkshopsComponents\\Storage\\Storage.jsx"})}}]);
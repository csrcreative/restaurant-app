(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,n){e.exports=n.p+"static/media/idontfeellikecooking.2aaca0a3.svg"},132:function(e,t,n){e.exports=n(228)},227:function(e,t,n){e.exports=n.p+"static/media/angrychef.19818c1f.svg"},228:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(34),i=n.n(c),o=n(19),l=n(31),u=n(120),s=n(121),d=n(20),h=n(7),p={meal:!1,categories:!1,directoryList:!1};var f={restaurant:!1};var m={showForm:!0,showResult:!1,editMode:!1};var b={results:!1,total:0};var g={addedRestaurant:!1};var E={selectedCheckboxes:[]};var v={categoriesSelection:!1};var y=Object(l.c)({fetchInitialState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_INITIAL_STATE":return Object(h.a)({},e,{meal:t.data.meal,categories:t.data.categories,directoryList:t.data.directoryList});case"GET_ALL_DIRECTORY_RESTAURANTS_SUCCESS":return Object(h.a)({},e,{directoryList:t.data.content});default:return e}},fetchRandomRestaurant:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVED_RANDOM_RESTAURANT_SUCCESS":return Object(h.a)({},e,{restaurant:t.data.restaurant,mealSelection:t.data.meal,categoriesSelection:t.data.categories});case"UNSET_RESTAURANT":return Object(h.a)({},e,{restaurant:!1,mealSelection:!1,categoriesSelection:!1});default:return e}},uiReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;switch((arguments.length>1?arguments[1]:void 0).type){case"SHOW_FORM":return Object(h.a)({},e,{showForm:!0});case"HIDE_FORM":return Object(h.a)({},e,{showForm:!1});case"SHOW_RESULT":return Object(h.a)({},e,{showResult:!0});case"HIDE_RESULT":return Object(h.a)({},e,{showResult:!1});default:return e}},yelpSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVED_YELP_RESPONSE_SUCCESS":return Object(h.a)({},e,{results:t.data.results,total:t.data.total});case"YELP_SEARCH_RESET":return Object(h.a)({},e,{results:!1,total:0});default:return e}},displayAddedRestaurant:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DISPLAY_ADDED_RESTAURANT":return Object(h.a)({},e,{addedRestaurant:t.data});case"REMOVE_ADDED_RESTAURANT":return Object(h.a)({},e,{addedRestaurant:!1});default:return e}},checkboxSelection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CHECKBOX_SELECTION":return Object(h.a)({},e,{selectedCheckboxes:[].concat(Object(d.a)(e.selectedCheckboxes),[t.data])});case"REMOVE_CHECKBOX_SELECTION":var n=e.selectedCheckboxes.indexOf(t.data),a=e.selectedCheckboxes;return a.splice(n,1),Object(h.a)({},e,{selectedCheckboxes:a});default:return e}},categorySelection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CATEGORY_SELECTION":return Object(h.a)({},e,{categoriesSelection:t.data});default:return e}}}),C=Object(u.createLogger)({collapsed:!0}),O=Object(l.e)(y,Object(l.d)(Object(l.a)(s.a,C),window.devToolsExtension?window.devToolsExtension():function(e){return e})),S=n(11),k=n(12),R=n(14),j=n(13),x=n(15),A=n(4),_=n(45),T=n(3),D=n(123),L={pinkLightest:"#fbf3f0",pinkLighter:"#ecc1b6",pinkLight:"#f0a996",pink:"#e28977",pinkDark:"#b96d60",blue:"#0802b7",blueLight:"#4835c9",blueLightest:"#f1eeff",grey:"#89837b",greyLight:"#cfcfcf",greyLightest:"#ececec",black:"#000000",white:"#ffffff"},w={primary:{fg:L.pinkLighter,bg:L.blue},secondary:{fg:L.blue,bg:L.blueLightest}},N=Object(h.a)({},L),U=n(230),I=function(e){return"".concat(e/16,"rem")},M={xxsmall:I(8.19),xsmall:I(10.24),small:I(12.8),base:I(16),medium:I(20),large:I(25),xlarge:I(31.25),xxlarge:I(39.06),xxxlarge:I(48.83)},F=Object(h.a)({},M),Y=n(126),P=n.n(Y);function H(){var e=Object(A.a)(["\n    background-color: ",";\n    margin-bottom: ",";\n    padding: "," 0;\n    position: relative;\n    z-index: 10;\n"]);return H=function(){return e},e}function G(){var e=Object(A.a)(["\n    max-width: 1000px;\n    margin:0 auto;\n    padding: ",";\n"]);return G=function(){return e},e}var V=T.default.h1(G(),F.large),B=T.default.header(H(),N.pinkLight,F.xxlarge,F.base),z=function(e){function t(){return Object(S.a)(this,t),Object(R.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement(B,null,r.a.createElement(V,null,r.a.createElement(U.a,{to:"/",className:"button-primary"},r.a.createElement("img",{src:P.a,alt:""}))))}}]),t}(a.Component),Q=n(6),W=n(21),J=n.n(W);function X(e){return function(t){!function(e,t){t({type:"UPDATE_ADDED_RESTAURANT_REQUEST"}),J()("api/restaurant/update/".concat(e.id),{method:"PUT",body:JSON.stringify({meal:e.selectedMeal,category:e.selectedCategories}),headers:{"content-type":"application/json"}}).then(function(e){return e.json()}).then(function(n){t({type:"UPDATE_ADDED_RESTAURANT_SUCCESS"}),"yelp"===e.type&&(t({type:"REMOVE_ADDED_RESTAURANT"}),t({type:"YELP_SEARCH_RESET"})),t({type:"GET_ALL_DIRECTORY_RESTAURANTS_REQUEST"}),J()("api/restaurants/list/").then(function(e){return e.json()}).then(function(e){t({type:"GET_ALL_DIRECTORY_RESTAURANTS_SUCCESS",data:e})}).catch(function(e){t({type:"GET_ALL_DIRECTORY_RESTAURANTS_FAILURE",data:e})})}).catch(function(e){t({type:"UPDATE_ADDED_RESTAURANT_FAILURE",data:e})})}(e,t)}}function K(e){return function(t){!function(e,t){t({type:"DELETE_ADDED_RESTAURANT_REQUEST"}),J()("api/restaurant/delete/".concat(e),{method:"DELETE",headers:{"content-type":"application/json"}}).then(function(){t({type:"DELETE_ADDED_RESTAURANT_SUCCESS"}),t({type:"GET_ALL_DIRECTORY_RESTAURANTS_REQUEST"}),J()("api/restaurants/list/").then(function(e){return e.json()}).then(function(e){t({type:"GET_ALL_DIRECTORY_RESTAURANTS_SUCCESS",data:e})}).catch(function(e){t({type:"GET_ALL_DIRECTORY_RESTAURANTS_FAILURE",data:e})})}).catch(function(e){t({type:"DELETE_ADDED_RESTAURANT_FAILURE",data:e})})}(e,t)}}function q(e){return function(t){!function(e,t){t({type:"ADD_RESTAURANT_REQUEST"});var n="".concat(e.location.display_address[0]," ").concat(e.location.display_address[1]);J()("/api/restaurant/add/",{method:"POST",body:JSON.stringify({name:e.name,address:n}),headers:{"content-type":"application/json"}}).then(function(e){return e.json()}).then(function(e){t({type:"DISPLAY_ADDED_RESTAURANT",data:e})}).catch(function(e){t({type:"ADDED_RESTAURANT_FAILURE",data:e})})}(e,t)}}function Z(e){return function(t){!function(e,t){var n=e.categories,a=e.meal;t({type:"REQUEST_RANDOM_RESTAURANT",data:e}),J()("/api/restaurant/random/".concat(n,"/").concat(a)).then(function(e){return e.json()}).then(function(e){t({type:"RECEIVED_RANDOM_RESTAURANT_SUCCESS",data:{restaurant:e,meal:a,categories:n}})}).catch(function(e){t({type:"RECEIVED_RANDOM_RESTAURANT_FAILURE",data:e})})}(e,t)}}function $(e){return function(t){!function(e,t){t({type:"REQUEST_YELP_API"}),J()("/api/search/restaurants/".concat(e)).then(function(e){return e.json()}).then(function(e){t({type:"RECEIVED_YELP_RESPONSE_SUCCESS",data:{results:e.businesses,total:e.total}})}).catch(function(e){t({type:"RECEIVED_YELP_RESPONSE_FAILURE",data:e})})}(e,t)}}var ee=n(69);function te(){var e=Object(A.a)(["\n    margin-bottom: ",";\n"]);return te=function(){return e},e}var ne=function(e){function t(e){var n;return Object(S.a)(this,t),(n=Object(R.a)(this,Object(j.a)(t).call(this,e))).state={value:n.props.selected},n.handleChange=n.handleChange.bind(Object(Q.a)(n)),n}return Object(x.a)(t,e),Object(k.a)(t,[{key:"handleChange",value:function(e){var t=this,n=e.value;this.setState({value:n},function(){t.props.handleCategoryChange(t.state.value)})}},{key:"render",value:function(){var e=Object(d.a)(this.props.categories);e.map(function(e){e.value=e.category,e.label=e.category});var t=void 0===this.state.value?"Select a category":this.state.value;return r.a.createElement(ee.a,{className:this.props.className,onChange:this.handleChange,options:e,value:{value:t,label:t}})}}]),t}(a.Component),ae=Object(T.default)(ne)(te(),F.base),re=n(44);function ce(){var e=Object(A.a)(["\n    margin-bottom: ",";\n"]);return ce=function(){return e},e}var ie=Object(T.default)(function(e){var t=e.className,n=e.meal,c=e.handleMealChange,i=Object(a.useState)(null),o=Object(re.a)(i,2),l=o[0],u=o[1];Object(a.useEffect)(function(){null!==l&&c(l)});var s=Object(d.a)(n);return s.map(function(e){e.value=e.type,e.label=e.type}),r.a.createElement(ee.a,{className:t,onChange:function(e){u(e)},value:l,options:s})})(ce(),F.base);function oe(){var e=Object(A.a)(["\n  font-weight: bold;\n  font-size: ",";\n  padding: 15px 20px;\n  border-radius: 15px;\n  border: none;\n  cursor:pointer;\n  background-color: ",";\n  color: ",";\n"]);return oe=function(){return e},e}var le=Object(T.default)(function(e){var t=e.text,n=e.type,a=e.className,c=e.handler,i=e.style;e.theme;return r.a.createElement("button",{className:a,type:n,style:i,onClick:c},t)})(oe(),F.base,function(e){return e.theme.bg},function(e){return e.theme.fg});function ue(){var e=Object(A.a)(["\n    padding: ",";\n"]);return ue=function(){return e},e}var se=T.default.form(ue(),F.xxlarge),de=function(e){function t(){var e;return Object(S.a)(this,t),(e=Object(R.a)(this,Object(j.a)(t).call(this))).state={showMeals:!1,showSubmit:!1,category:!1,meal:!1},e.handleCategoryChange=e.handleCategoryChange.bind(Object(Q.a)(e)),e.handleMealChange=e.handleMealChange.bind(Object(Q.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(Q.a)(e)),e}return Object(x.a)(t,e),Object(k.a)(t,[{key:"handleCategoryChange",value:function(e){this.setState({showMeals:!0,category:e})}},{key:"handleMealChange",value:function(e){this.setState({showSubmit:!0,meal:e})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.getRandomRestaurant({meal:this.state.meal.type,categories:this.state.category})}},{key:"render",value:function(){return r.a.createElement(se,{onSubmit:this.handleSubmit},r.a.createElement(ae,{categories:this.props.categories,handleCategoryChange:this.handleCategoryChange}),this.state.showMeals&&r.a.createElement(ie,{meal:this.props.meal,handleMealChange:this.handleMealChange}),this.state.showSubmit&&r.a.createElement(le,{text:"Randomize It",type:"submit",theme:w.primary}))}}]),t}(a.Component),he=function(e){if(null!==e)return e.charAt(0).toUpperCase()+e.slice(1)};function pe(){var e=Object(A.a)(["\n    color: ",";\n    padding: "," "," ;\n    border-radius: 15px;\n    border: 1px solid ",";\n    display:inline-block;\n    font-size: ","\n"]);return pe=function(){return e},e}var fe=Object(T.default)(function(e){var t=e.className,n=e.category,a=he(n);return r.a.createElement("span",{className:t},a)})(pe(),N.pink,F.xxsmall,F.small,N.pink,F.small);function me(){var e=Object(A.a)(["\n  color: ",";\n  font-size: ",";\n  padding-top: ",";\n"]);return me=function(){return e},e}var be=T.default.div(me(),N.grey,F.small,F.small);var ge=function(e){var t=e.name,n=e.address,a=e.meal,c=e.category;return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,{category:c}),r.a.createElement("h2",null,t),r.a.createElement("address",null,n),r.a.createElement(be,null,"Good for\xa0",a&&a.map(function(e,t){var n=t<a.length-1?",":"";return"".concat(he(e)).concat(n," ")})))};function Ee(){var e=Object(A.a)(["\n    padding-top: ",";\n    border-top: 1px solid ",";\n"]);return Ee=function(){return e},e}var ve=Object(T.default)(function(e){var t=e.className,n=e.restaurant,a=n.name,c=n.address,i=n.category,o=n.meal;return r.a.createElement("div",{className:t},r.a.createElement(ge,{category:i,name:a,address:c,meal:o}))})(Ee(),F.large,N.greyLightest),ye={cardShadow:"0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)"},Ce=function(){return"\n    border: none;\n    cursor: pointer;\n    position: relative;\n    border-radius: 100%;\n  "},Oe=function(){return"\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  "},Se=function(){return"\n    background-color: #ffffff;\n    padding: ".concat(F.xlarge,";\n    border-radius: 5px;\n    box-shadow: ").concat(ye.cardShadow,";\n  ")},ke=ye;var Re=function(e){var t=e.login,n=e.logout,a=e.authenticated;return null===a?null:a?r.a.createElement(function(){return r.a.createElement(le,{text:"Logout",style:{padding:F.xsmall},handler:n,theme:w.secondary})},null):r.a.createElement(function(){return r.a.createElement(le,{text:"Login",style:{padding:F.xsmall},handler:t,theme:w.secondary})},null)};function je(){var e=Object(A.a)(["\n    padding-left: ",";\n    padding-right: ",";\n"]);return je=function(){return e},e}function xe(){var e=Object(A.a)(["\n    margin-bottom: ",";\n"]);return xe=function(){return e},e}function Ae(){var e=Object(A.a)(["\n    padding: ",";\n"]);return Ae=function(){return e},e}function _e(){var e=Object(A.a)(["\n    color: ",";\n    text-decoration: none;\n    font-size: ",";\n    font-weight: bold;\n    margin-left: auto;\n    padding-right: ",";\n"]);return _e=function(){return e},e}function Te(){var e=Object(A.a)(["\n    max-width: 500px;\n    width: 100%;\n    margin: 0 auto;\n    margin-bottom: ",";\n    display: flex;\n    align-items: center;\n"]);return Te=function(){return e},e}function De(){var e=Object(A.a)(["\n    background-color: white;\n    max-width: 500px;\n    width: 100%;\n    margin: 0 auto;\n    border-radius: 15px;\n    box-shadow: ",";\n"]);return De=function(){return e},e}var Le=T.default.div(De(),ke.cardShadow),we=T.default.div(Te(),F.xxsmall),Ne=Object(T.default)(U.a)(_e(),N.pink,F.small,F.small),Ue=T.default.div(Ae(),F.xxlarge),Ie=T.default.div(xe(),F.large),Me=T.default.div(je(),F.large,F.large);var Fe=function(e){function t(e){var n;return Object(S.a)(this,t),(n=Object(R.a)(this,Object(j.a)(t).call(this,e)))._isMounted=!1,n.state={authenticated:null,userinfo:null},n.checkAuthentication=function(){var e=this;this.props.auth.isAuthenticated().then(function(t){t&&!e.state.userinfo?e.props.auth.getUser().then(function(t){e._isMounted&&e.setState({userinfo:t})}):e._isMounted&&e.setState({authenticated:t})})}.bind(Object(Q.a)(n)),n.checkAuthentication(),n.login=function(){this.props.auth.login("/")}.bind(Object(Q.a)(n)),n.logout=function(){var e=this;this.props.auth.logout("/").then(function(t){e.setState({authenticated:null})}).catch(function(e){if("E0000007"!==e.errorCode)throw e})}.bind(Object(Q.a)(n)),n.getRandomRestaurant=n.getRandomRestaurant.bind(Object(Q.a)(n)),n.startOver=n.startOver.bind(Object(Q.a)(n)),n.tryAgain=n.tryAgain.bind(Object(Q.a)(n)),n}return Object(x.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidUpdate",value:function(){null===this.state.authenticated&&this.checkAuthentication()}},{key:"getRandomRestaurant",value:function(e){var t={meal:e.meal,categories:e.categories};this.props.dispatch(Z(t)),this.props.dispatch({type:"HIDE_FORM"}),this.props.dispatch({type:"SHOW_RESULT"}),this.props.dispatch({type:"UNSET_RESTAURANT"})}},{key:"startOver",value:function(){this.props.dispatch({type:"SHOW_FORM"}),this.props.dispatch({type:"HIDE_RESULT"})}},{key:"tryAgain",value:function(){this.getRandomRestaurant({meal:this.props.mealSelection,categories:this.props.categoriesSelection})}},{key:"render",value:function(){var e=this.state.authenticated,t=this.login,n=this.logout;return r.a.createElement(Me,null,r.a.createElement(we,null,r.a.createElement("div",null,r.a.createElement(Re,{login:t,logout:n,authenticated:e})),r.a.createElement(Ne,{to:"/directory",className:"button-primary"},"Directory")),r.a.createElement(Le,null,this.props.categories&&this.props.meal&&this.props.showForm&&r.a.createElement(de,{getRandomRestaurant:this.getRandomRestaurant,categories:this.props.categories,meal:this.props.meal}),this.props.restaurant&&this.props.showResult&&r.a.createElement(Ue,null,r.a.createElement(Ie,null,r.a.createElement(le,{text:"Try Again",handler:this.tryAgain,style:{marginRight:F.base},theme:w.secondary}),r.a.createElement(le,{text:"Start Over",handler:this.startOver,theme:w.secondary})),r.a.createElement(ve,{restaurant:this.props.restaurant}))))}}]),t}(a.Component),Ye=Object(o.b)(function(e,t){return{meal:e.fetchInitialState.meal,mealSelection:e.fetchRandomRestaurant.mealSelection,categoriesSelection:e.fetchRandomRestaurant.categoriesSelection,showForm:e.uiReducer.showForm,showResult:e.uiReducer.showResult,restaurant:e.fetchRandomRestaurant.restaurant}})(Fe);function Pe(){var e=Object(A.a)(["\n    width: 100%;\n    padding: ",";   \n    margin-right: ",";\n    border-radius: 3px;\n    border: 1px solid ",";\n    color: ",";\n"]);return Pe=function(){return e},e}function He(){var e=Object(A.a)(["\n    display: flex;\n    margin-bottom: ",";\n"]);return He=function(){return e},e}var Ge=T.default.form(He(),F.large),Ve=T.default.input(Pe(),F.xsmall,F.base,N.greyLight,N.greyLight),Be=function(e){var t=e.handleSubmit;return r.a.createElement(Ge,{onSubmit:t},r.a.createElement(Ve,{type:"text",name:"keyword",placeholder:"Search Yelp"}),r.a.createElement(le,{text:"Search",type:"submit",theme:w.primary}))};function ze(){var e=Object(A.a)(["\n    border: 1px solid ",";\n    background-color: ",";\n    margin-bottom: ",";\n"]);return ze=function(){return e},e}var Qe=Object(T.default)(function(e){var t=e.className,n=e.children;return r.a.createElement("div",{className:t},n)})(ze(),N.greyLight,N.greyLightest,F.xxlarge),We=n(128);function Je(){var e=Object(A.a)(["\n    padding: ",";\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    &:not(:last-child) {\n        border-bottom: 1px solid ",";\n    }\n"]);return Je=function(){return e},e}function Xe(){var e=Object(A.a)(["\n    fill: ",";\n    width: 15px;\n    height: 15px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n"]);return Xe=function(){return e},e}function Ke(){var e=Object(A.a)(["\n    background: ",";\n    border: none;\n    width: 50px;\n    height: 50px;\n    border-radius: 100%;\n    position: relative;\n    cursor: pointer;\n"]);return Ke=function(){return e},e}var qe=T.default.button(Ke(),N.black),Ze=Object(T.default)(We.a)(Xe(),N.pinkLighter);var $e=Object(T.default)(function(e){var t=e.className,n=e.name,a=e.index,c=e.addButtonClick;return r.a.createElement("div",{className:t},r.a.createElement("h3",null,n),r.a.createElement(qe,{onClick:c,index:a,"aria-label":"Add Restaurant"},r.a.createElement(Ze,null)))})(Je(),F.large,N.greyLight),et=n(129);function tt(){var e=Object(A.a)(["\n    ","\n    fill: ",";\n    width: 15px;\n    height: 15px;\n"]);return tt=function(){return e},e}function nt(){var e=Object(A.a)(["\n    ","\n    width: 35px;\n    height: 35px;\n    border: 1px solid ",";\n"]);return nt=function(){return e},e}var at=T.default.button(nt(),Ce,N.greyLight),rt=Object(T.default)(et.a)(tt(),Oe,N.grey);var ct=function(e){var t=e.onDeleteClick,n=e.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement(at,{onClick:function(){return t(n)}},r.a.createElement(rt,null)))};function it(){var e=Object(A.a)(["\n    position: relative;\n    text-align: center;\n    display:block;\n    border-radius: 3px;\n    margin-bottom: 8px;\n    padding: ",";\n    color: ",";\n    box-shadow: ",";\n    background-color: ",";\n"]);return it=function(){return e},e}function ot(){var e=Object(A.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    opacity: 0;\n"]);return ot=function(){return e},e}var lt=T.default.input(ot()),ut=T.default.label(it(),F.xxsmall,N.black,ke.cardShadow,function(e){return e.isChecked?N.pink:"#f5f5f5"});var st=function(e){var t=e.onCheckboxClick,n=e.value,c=e.checked,i=Object(a.useState)(c),o=Object(re.a)(i,2),l=o[0],u=o[1],s=he(n);return r.a.createElement(ut,{htmlFor:"",isChecked:l},r.a.createElement(lt,{onClick:function(e){u(!l),t(e)},type:"checkbox",value:n,defaultChecked:c}),s)};var dt=function(e){var t=e.meal,n=e.selected,a=e.onCheckboxClick;return n?r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement("div",{key:t,className:"checkbox"},-1!==n.indexOf(e.type)&&r.a.createElement(st,{key:t,onCheckboxClick:a,value:e.type,checked:!0}),-1===n.indexOf(e.type)&&r.a.createElement(st,{key:t,onCheckboxClick:a,value:e.type,checked:!1}))})):r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement("div",{key:t,className:"checkbox"},r.a.createElement("label",{key:t,htmlFor:""},r.a.createElement("input",{onClick:a,type:"checkbox",value:e.type}),e.type))}))};function ht(){var e=Object(A.a)(["\n  ","\n  margin-bottom: ",";\n"]);return ht=function(){return e},e}var pt=T.default.div(ht(),Se,F.xlarge),ft=function(e){function t(e){var n;return Object(S.a)(this,t),(n=Object(R.a)(this,Object(j.a)(t).call(this,e))).removeAddedRestaurant=n.removeAddedRestaurant.bind(Object(Q.a)(n)),n}return Object(x.a)(t,e),Object(k.a)(t,[{key:"removeAddedRestaurant",value:function(){this.props.dispatch({type:"REMOVE_ADDED_RESTAURANT"})}},{key:"render",value:function(){var e=this.props.addedRestaurant,t=e.name,n=e.address,a=this.props,c=a.categories,i=a.meal;return r.a.createElement(pt,null,r.a.createElement("h2",null,t),r.a.createElement("address",null,n),r.a.createElement("div",null,r.a.createElement(ae,{categories:c,selected:!1,handleCategoryChange:this.props.handleCategoryChange}),r.a.createElement(dt,{meal:i,selected:!1,onCheckboxClick:this.props.onCheckboxClick})),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.props.onSaveClick,id:this.props.id},"Save"),r.a.createElement("button",{onClick:this.removeAddedRestaurant},"Cancel")))}}]),t}(a.Component),mt=Object(o.b)(function(e,t){return{addedRestaurant:e.displayAddedRestaurant.addedRestaurant,selectedCategories:e.categorySelection.categoriesSelection,selectedMeal:e.checkboxSelection.selectedCheckboxes}})(ft);function bt(){var e=Object(A.a)(["\n    display:grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    grid-gap: ",";\n"]);return bt=function(){return e},e}var gt=Object(T.default)(function(e){var t=e.className,n=e.children;return r.a.createElement("div",{className:t},n)})(bt(),F.xxlarge);function Et(){var e=Object(A.a)(["\n  margin-top: ",";\n  display: flex;\n  justify-content: space-between;\n"]);return Et=function(){return e},e}var vt=T.default.div(Et(),F.base);var yt=function(e){var t=e.className,n=e.onSaveClick,c=e.onCancelClick,i=e.handleCategoryChange,o=e.categories,l=e.checkboxmeal,u=e.restaurantMeal,s=e.restaurantCategory,h=Object(a.useState)(Object(d.a)(u)),p=Object(re.a)(h,2),f=p[0],m=p[1],b={backgroundColor:"transparent",border:"1px solid ".concat(N.grey)};return r.a.createElement("div",{className:t},r.a.createElement(ae,{categories:o,selected:s,handleCategoryChange:i}),r.a.createElement(dt,{meal:l,selected:u,onCheckboxClick:function(e){var t=e.target.value;if(e.target.checked)m([].concat(Object(d.a)(f),[t]));else{var n=f.indexOf(t),a=f;a.splice(n,1),m(Object(d.a)(a))}}}),r.a.createElement(vt,null,r.a.createElement(le,{handler:function(){n(f)},text:"Save",style:b}),r.a.createElement(le,{handler:c,text:"Cancel",style:b})))},Ct=n(130);function Ot(){var e=Object(A.a)(["\n    ","\n    fill: ",";\n    width: 15px;\n    height: 15px;\n"]);return Ot=function(){return e},e}function St(){var e=Object(A.a)(["\n    ","\n    width: 35px;\n    height: 35px;\n    margin-right: ",";\n    background-color: ",";\n"]);return St=function(){return e},e}var kt=T.default.button(St(),Ce,F.base,N.blueLightest),Rt=Object(T.default)(Ct.a)(Ot(),Oe,N.blue);var jt=function(e){var t=e.onEditClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement(kt,{onClick:t},r.a.createElement(Rt,null)))};function xt(){var e=Object(A.a)(["\n  background-color: ",";\n  padding: ",";\n  margin-top: ",";\n  border-radius: 5px;\n"]);return xt=function(){return e},e}function At(){var e=Object(A.a)(["\n  display:flex;\n  justify-content: flex-end;\n  margin-top: ",";\n"]);return At=function(){return e},e}function _t(){var e=Object(A.a)(["\n  ","\n"]);return _t=function(){return e},e}var Tt=T.default.div(_t(),Se),Dt=T.default.div(At(),F.large),Lt=Object(T.default)(yt)(xt(),N.greyLightest,F.large,F.small),wt=function(e){function t(e){var n;return Object(S.a)(this,t),(n=Object(R.a)(this,Object(j.a)(t).call(this,e))).state={editMode:!1},n.onEditClick=n.onEditClick.bind(Object(Q.a)(n)),n.onCancelClick=n.onCancelClick.bind(Object(Q.a)(n)),n.onSaveClick=n.onSaveClick.bind(Object(Q.a)(n)),n}return Object(x.a)(t,e),Object(k.a)(t,[{key:"onEditClick",value:function(){this.setState({editMode:!0})}},{key:"onCancelClick",value:function(e){this.setState({editMode:!1})}},{key:"onSaveClick",value:function(e){this.setState({editMode:!1});var t={id:this.props.data.id,selectedCategories:this.props.selectedCategories,selectedMeal:e,type:"directory"};this.props.dispatch(X(t))}},{key:"render",value:function(){var e=this.state.editMode,t=this.props.data,n=t.name,a=t.address,c=t.id,i=t.category,o=t.meal;return r.a.createElement(Tt,null,r.a.createElement(ge,{category:i,name:n,address:a,meal:o}),e&&r.a.createElement(Lt,{onCancelClick:this.onCancelClick,categories:this.props.categories,checkboxmeal:this.props.meal,restaurantMeal:o,restaurantCategory:i,handleCategoryChange:this.props.handleCategoryChange,onSaveClick:this.onSaveClick}),!e&&r.a.createElement(Dt,null,r.a.createElement(jt,{onEditClick:this.onEditClick}),r.a.createElement(ct,{onDeleteClick:this.props.onDeleteClick,id:c})))}}]),t}(a.Component),Nt=Object(o.b)(function(e,t){return{addedRestaurant:e.displayAddedRestaurant.addedRestaurant,selectedCategories:e.categorySelection.categoriesSelection,selectedMeal:e.checkboxSelection.selectedCheckboxes}})(wt),Ut={mobile:320,mobileLarge:480,mobileXLarge:640,tablet:768,tabletLarge:1024,desktop:1280,desktopLarge:1440};function It(){var e=Object(A.a)(["\n    max-width: ","px;\n    margin: 0 auto;\n    padding-left: ",";\n    padding-right: ",";\n"]);return It=function(){return e},e}var Mt=T.default.div(It(),Ut.tabletLarge,F.large,F.large),Ft=function(e){function t(){var e;return Object(S.a)(this,t),(e=Object(R.a)(this,Object(j.a)(t).call(this))).state={checkboxSelection:[]},e.handleSubmit=e.handleSubmit.bind(Object(Q.a)(e)),e.addButtonClick=e.addButtonClick.bind(Object(Q.a)(e)),e.handleCategoryChange=e.handleCategoryChange.bind(Object(Q.a)(e)),e.onSaveClick=e.onSaveClick.bind(Object(Q.a)(e)),e.onDeleteClick=e.onDeleteClick.bind(Object(Q.a)(e)),e.onCheckboxClick=e.onCheckboxClick.bind(Object(Q.a)(e)),e}return Object(x.a)(t,e),Object(k.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.dispatch($(e.target.keyword.value))}},{key:"addButtonClick",value:function(e){var t=e.target.getAttribute("index"),n=this.props.results[t];this.props.dispatch(q(n))}},{key:"handleCategoryChange",value:function(e){this.props.dispatch({type:"ADD_CATEGORY_SELECTION",data:e})}},{key:"onCheckboxClick",value:function(e){var t=e.target.value;e.target.checked?this.setState(function(e){return{checkboxSelection:e.checkboxSelection?[].concat(Object(d.a)(e.checkboxSelection),[t]):[t]}}):this.setState(function(e){var n=e.checkboxSelection.indexOf(t),a=e.checkboxSelection;return a.splice(n,1),{checkboxSelection:a}})}},{key:"onSaveClick",value:function(e){var t=this.props.addedRestaurant.id?this.props.addedRestaurant.id:e.id,n=this.state.checkboxSelection,a={id:t,selectedCategories:this.props.selectedCategories,selectedMeal:n,type:"yelp"};this.props.dispatch(X(a))}},{key:"onDeleteClick",value:function(e){this.props.dispatch(K(e))}},{key:"render",value:function(){var e=this;return r.a.createElement(Mt,null,r.a.createElement(Be,{handleSubmit:this.handleSubmit}),this.props.results.length>0&&r.a.createElement(Qe,null,this.props.results.map(function(t,n){return r.a.createElement($e,{name:t.name,key:n,index:n,addButtonClick:e.addButtonClick})})),this.props.addedRestaurant.name&&r.a.createElement(mt,{restaurant:this.props.addedRestaurant,id:this.props.addedRestaurant.id,meal:this.props.meal,categories:this.props.categories,onDeleteClick:this.onDeleteClick,onSaveClick:this.onSaveClick,handleCategoryChange:this.handleCategoryChange,onCheckboxClick:this.onCheckboxClick}),this.props.directoryList.length>0&&r.a.createElement(gt,null,this.props.directoryList.map(function(t,n){return r.a.createElement(Nt,{key:n,data:t,handleCategoryChange:e.handleCategoryChange,meal:e.props.meal,onDeleteClick:e.onDeleteClick,categories:e.props.categories})})))}}]),t}(a.Component),Yt=Object(o.b)(function(e,t){return{results:e.yelpSearch.results,total:e.yelpSearch.total,addedRestaurant:e.displayAddedRestaurant.addedRestaurant,selectedCategories:e.categorySelection.categoriesSelection,selectedMeal:e.checkboxSelection.selectedCheckboxes,directoryList:e.fetchInitialState.directoryList}})(Ft),Pt=n(233),Ht=n(231),Gt=n(232);n(227),n(83);function Vt(){var e=Object(A.a)(["\n  ","\n  \n  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');\n\n  body {\n    background-color: #ffffff;\n    font-family: 'Montserrat', sans-serif;\n    position: relative;\n  }\n"]);return Vt=function(){return e},e}var Bt=Object(T.createGlobalStyle)(Vt(),D.normalize),zt=function(e){function t(){return Object(S.a)(this,t),Object(R.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this,t=Object(_.withAuth)(Ye),n=Object(_.withAuth)(Yt);return r.a.createElement(Pt.a,null,r.a.createElement(_.Security,{issuer:"".concat("https://dev-554033.okta.com","/oauth2/default"),client_id:"0oa120qslto9YZXds357",redirect_uri:"".concat(window.location.origin,"/implicit/callback")},r.a.createElement("div",{className:"App"},r.a.createElement(Bt,{pinkColor:!0}),r.a.createElement(z,null),r.a.createElement(Ht.a,null,r.a.createElement(Gt.a,{path:"/",component:function(){return r.a.createElement(t,{meal:e.props.meal,categories:e.props.categories})},exact:!0}),r.a.createElement(_.SecureRoute,{path:"/directory",component:function(){return r.a.createElement(n,{meal:e.props.meal,categories:e.props.categories})},exact:!0}),r.a.createElement(Gt.a,{path:"/implicit/callback",component:_.ImplicitCallback})))))}}]),t}(a.Component),Qt=Object(o.b)(function(e,t){return{meal:e.fetchInitialState.meal,categories:e.fetchInitialState.categories}})(zt),Wt=[J()("/api/meal"),J()("/api/categories"),J()("/api/restaurants/list")];Promise.all(Wt.map(function(e){return e.then(function(e){return e.json()}).then(function(e){return e})})).then(function(e){var t={};e.map(function(e){return t[e.type]=e.content,!0}),O.dispatch({type:"FETCH_INITIAL_STATE",data:t})}),i.a.render(r.a.createElement(o.a,{store:O},r.a.createElement(Qt,null)),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.199553f1.chunk.js.map
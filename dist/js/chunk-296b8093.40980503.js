(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-296b8093"],{"0cea":function(t,e,s){},1462:function(t,e,s){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}s.d(e,"a",(function(){return r}))},"1bc4":function(t,e,s){},"38b4":function(t,e,s){},"44e1":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"search"}},[s("div",{staticClass:"search-box-wrapper"},[s("search-box",{ref:"searchBox",on:{query:t.query}}),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.newQuery,expression:"!newQuery"}],ref:"shortcut-wrapper",staticClass:"shortcut-wrapper"},[s("cube-scroll",{ref:"scroll",attrs:{data:t.shortCut}},[s("div",{staticClass:"shortcut"},[s("div",{staticClass:"hot-key"},[s("h1",{staticClass:"title"},[t._v("热门搜索")]),s("ul",t._l(t.hotKey,(function(e,r){return s("li",{key:r,staticClass:"item",on:{click:function(s){return t.addQuery(e.first)}}},[s("span",[t._v(t._s(e.first))])])})),0)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.searchHistory.length,expression:"searchHistory.length"}],staticClass:"search-history"},[s("div",{staticClass:"search-title"},[s("h1",{staticClass:"title"},[t._v("搜索历史")]),s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"},on:{click:t.deleteAll}},[s("use",{attrs:{"xlink:href":"#icon-laji"}})])]),s("div",{staticClass:"search-list"},[s("search-list",{attrs:{searchHistory:t.searchHistory},on:{select:t.addQuery,deleteOne:t.deleteSearchHistory}})],1)])])])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.newQuery,expression:"newQuery"}],ref:"suggest-scroll",staticClass:"suggest-scroll"},[s("suggest",{ref:"suggest",attrs:{query:t.newQuery},on:{saveSearch:t.saveSearch,scrollList:t.scrollList}})],1),s("confirm",{ref:"confirm",attrs:{content:"是否清空所有搜索历史",confirmBtnText:"清空"},on:{confirm:t.clearSearchHistory}}),s("router-view")],1)])},n=[],a=(s("5ab2"),s("6d57"),s("e10e"),s("ce3c")),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-box"},[s("svg",{staticClass:"icon icon-search",attrs:{"aria-hidden":"true"},on:{click:t.back}},[s("use",{attrs:{"xlink:href":"#icon-right"}})]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"query",staticClass:"box",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),s("svg",{staticClass:"icon icon-dismiss",attrs:{"aria-hidden":"true"},on:{click:t.clear}},[s("use",{attrs:{"xlink:href":"#icon-cha"}})])])},c=[],o=s("8b55"),u={props:{placeholder:{type:String,default:"搜索歌曲、歌手"}},data:function(){return{query:""}},methods:{blur:function(){this.$refs.query.blur()},back:function(){this.$router.back(),this.query=""},clear:function(){this.query=""},setQuery:function(t){this.query=t}},created:function(){var t=this;this.$watch("query",Object(o["a"])((function(e){t.$emit("query",e)}),200))}},l=u,h=(s("f710"),s("9ca4")),f=Object(h["a"])(l,i,c,!1,null,"f1b0b2ec",null),g=f.exports,d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-list"},[s("ul",t._l(t.searchHistory,(function(e,r){return s("li",{key:r,staticClass:"search-warapper",on:{click:function(s){return t.select(e)}}},[s("span",{staticClass:"search-text"},[t._v(t._s(e))]),s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"},on:{click:function(s){return s.stopPropagation(),t.deleteOne(e)}}},[s("use",{attrs:{"xlink:href":"#icon-cha"}})])])})),0)])},v=[],p={props:{searchHistory:{type:Array,default:function(){return[]}}},methods:{select:function(t){this.$emit("select",t)},deleteOne:function(t){this.$emit("deleteOne",t)}}},y=p,m=(s("95ca"),Object(h["a"])(y,d,v,!1,null,"d09e7c9c",null)),b=m.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("cube-scroll",{ref:"suggest",staticClass:"suggest",attrs:{data:t.result,options:t.options,scrollEvents:t.scrollEvents},on:{"pulling-up":t.onPullingUp,"before-scroll-start":t.beforeScroll}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.result.length||t.searchSuggest.length,expression:"result.length||searchSuggest.length"}],staticClass:"bestMatch"},[t._v("最佳匹配")]),s("ul",{staticClass:"suggest-list"},t._l(t.searchSuggest,(function(e,r){return s("li",{key:r,staticClass:"suggest-list-item",on:{click:function(s){return t.selectSuggset(e)}}},[s("img",{staticClass:"suggest-item-img",attrs:{src:e.img1v1Url||e.coverImgUrl}}),s("div",{staticClass:"suggest-item-mes"},[s("span",[t._v(t._s(t.suggestTitle(e)))]),s("span",[t._v(t._s(e.name))])])])})),0),s("ul",{staticClass:"suggest-songs-list"},t._l(t.result,(function(e,r){return s("li",{key:r,staticClass:"suggest-songs-item",on:{click:function(s){return t.selectItem(e)}}},[s("div",{staticClass:"name"},[t._v(t._s(e.songName))]),s("div",{staticClass:"singer"},[t._v(t._s(e.singer))])])})),0),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.result.length&&!t.hasMore&&!t.searchSuggest.length,expression:"!result.length&&!hasMore&&!searchSuggest.length"}],staticClass:"no-result-wrapper"},[t._v("抱歉，暂无搜索结果")]),s("cube-loading",{directives:[{name:"show",rawName:"v-show",value:!t.result.length&&!t.searchSuggest.length,expression:"!result.length&&!searchSuggest.length"}],staticClass:"loading_container",attrs:{size:40}})],1)},O=[],S=s("f753"),_=s.n(S),j=s("41ea");function C(){return _.a.get("".concat(j["b"],"/search/hot"))}function k(t,e){return _.a.get("".concat(j["b"],"/search?keywords=").concat(t,"&&offset=").concat(e))}function P(t){return _.a.get("".concat(j["b"],"/search/suggest?keywords= ").concat(t))}var x=s("d73f"),$=s("f5de"),q=s("b47c"),U=s("9f3a");function N(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function E(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?N(Object(s),!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):N(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var I={props:{query:{type:String,default:""}},data:function(){return{offset:0,result:[],options:{pullUpLoad:!0},hasMore:!0,searchSuggest:[],scrollEvents:["before-scroll-start"]}},methods:E(E(E({},Object(U["d"])({setSinger:"SET_SINGER",setDisc:"SET_DISC"})),Object(U["b"])(["insertSong"])),{},{refresh:function(){this.$refs.suggest.refresh()},selectItem:function(t){var e=this;Object(x["a"])(t.alId).then((function(s){t.alPicUrl=s.data.album.picUrl,e.insertSong(t)})),this.$emit("saveSearch")},beforeScroll:function(){this.$emit("scrollList")},selectSuggset:function(t){if("img1v1Url"in t){var e=new q["a"]({id:t.id,name:t.name,img1v1Url:t.img1v1Url});this.$router.push({path:"/search/singer/".concat(e.id)}),this.setSinger(e)}else this.$router.push({path:"/search/disc/".concat(t.id)}),this.setDisc(t);this.$emit("saveSearch")},suggestTitle:function(t){return"img1v1Url"in t?"歌手：":"歌单："},onPullingUp:function(){this.hasMore?this.searchMore():this.$refs.suggest.forceUpdate()},searchMore:function(){var t=this;this.offset++,k(this.query,this.offset).then((function(e){e.data.code===j["a"]&&(t.result=t.result.concat(t._normalizeSongs(e.data.result.songs)),t._checkMore(e.data.result))}))},_search:function(){var t=this;this.hasMore=!0,this.offset=0,this.$refs.suggest.scrollTo(0,0),this.query&&(k(this.query,this.offset).then((function(e){e.data.code===j["a"]&&(t.result=t._normalizeSongs(e.data.result.songs),t._checkMore(e.data.result))})),this._searchSuggest())},_searchSuggest:function(){var t=this;this.searchSuggest=[],P(this.query).then((function(e){if(e.data.code===j["a"]){var s=e.data.result;"artists"in s&&t.searchSuggest.push(s.artists[0]),"playlists"in s&&t.searchSuggest.push(s.playlists[0])}}))},_checkMore:function(t){(!t.songs||30*(this.offset+1)>=t.songCount)&&(this.hasMore=!1)},_normalizeSongs:function(t){var e=[];return t?(t.forEach((function(t){t.id&&t.album.id&&e.push(Object($["b"])(t))})),e):e}}),watch:{query:function(){this._search()}}},H=I,Q=(s("cb32"),Object(h["a"])(H,w,O,!1,null,"bc8d2b06",null)),M=Q.exports,D=s("1a93"),T=s("510f");function L(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function K(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?L(Object(s),!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):L(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var B={mixins:[T["b"]],components:{SearchBox:g,Suggest:M,SearchList:b,Confirm:D["a"]},data:function(){return{hotKey:[],newQuery:""}},computed:K(K({},Object(U["c"])(["searchHistory"])),{},{shortCut:function(){return this.hotKey.concat(this.searchHistory)}}),created:function(){this._getHotKey()},methods:K({deleteAll:function(){this.$refs.confirm.show()},handlePlaylist:function(t){var e=t.length>0?"60px":0;this.$refs["shortcut-wrapper"].style.bottom=e,this.$refs.scroll.refresh(),this.$refs["suggest-scroll"].style.bottom=e,this.$refs.suggest.refresh()},saveSearch:function(){this.saveSearchHistory(this.newQuery)},query:function(t){this.newQuery=t},scrollList:function(){this.$refs.searchBox.blur()},_getHotKey:function(){var t=this;C().then((function(e){e.data.code===j["a"]&&(t.hotKey=e.data.result.hots)}))},addQuery:function(t){this.$refs.searchBox.setQuery(t)}},Object(U["b"])(["saveSearchHistory","deleteSearchHistory","clearSearchHistory"])),watch:{newQuery:function(t){var e=this;t||setTimeout((function(){e.$refs.scroll.refresh()}),20)}}},z=B,A=(s("9051"),Object(h["a"])(z,r,n,!1,null,"578c1909",null));e["default"]=A.exports},9051:function(t,e,s){"use strict";var r=s("bf99"),n=s.n(r);n.a},"95ca":function(t,e,s){"use strict";var r=s("0cea"),n=s.n(r);n.a},b47c:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));var r=s("1462"),n=function t(e){var s=e.id,n=e.name,a=e.img1v1Url;Object(r["a"])(this,t),this.id=s,this.name=n,this.img1v1Url=a}},bf99:function(t,e,s){},cb32:function(t,e,s){"use strict";var r=s("38b4"),n=s.n(r);n.a},f5de:function(t,e,s){"use strict";s.d(e,"d",(function(){return o})),s.d(e,"c",(function(){return u})),s.d(e,"a",(function(){return l})),s.d(e,"b",(function(){return h}));s("6d57");var r=s("1462");function n(t,e){for(var s=0;s<e.length;s++){var r=e[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,s){return e&&n(t.prototype,e),s&&n(t,s),t}var i=s("d73f"),c=s("41ea"),o=function(){function t(e){var s=e.singer,n=e.alId,a=e.alPicUrl,i=e.alName,c=e.alia,o=e.songName,u=e.songId;Object(r["a"])(this,t),this.singer=s,this.alId=n,this.alPicUrl=a,this.alName=i,this.alia=c,this.songName=o,this.songId=u}return a(t,[{key:"getLyric",value:function(){var t=this;return this.lyric?Promise.resolve(this.lyric):new Promise((function(e,s){Object(i["b"])(t.songId).then((function(r){r.data.code===c["a"]?(t.lyric=r.data.lrc.lyric,e(t.lyric)):s("no lyric")}))}))}}]),t}();function u(t){return new o({singer:f(t.ar),alId:t.al.id,alPicUrl:t.al.picUrl,alName:t.al.name,alia:g(t.alia),songName:t.name,songId:t.privilege.id})}function l(t){return new o({singer:f(t.ar),alId:t.al.id,alPicUrl:t.al.picUrl,alName:t.al.name,alia:g(t.alia),songName:t.name,songId:t.id})}function h(t){return new o({singer:f(t.artists),alId:t.album.id,alPicUrl:t.album.picUrl,alName:t.album.name,alia:g(t.alias),songName:t.name,songId:t.id})}function f(t){var e=[];return t?(t.forEach((function(t){e.push(t.name)})),e.join("/")):""}function g(t){var e=[];return t?(t.forEach((function(t){e.push(t)})),e.join("/")):""}},f710:function(t,e,s){"use strict";var r=s("1bc4"),n=s.n(r);n.a}}]);
//# sourceMappingURL=chunk-296b8093.40980503.js.map
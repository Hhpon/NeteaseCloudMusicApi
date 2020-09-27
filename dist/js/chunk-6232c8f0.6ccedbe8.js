(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6232c8f0"],{"3e26":function(t,e,n){"use strict";var s=n("cb94"),i=n.n(s);i.a},5362:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"music-list"},[n("div",{staticClass:"back",on:{click:t.back}},[n("svg",{staticClass:"icon icon-right",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-right"}})]),n("h1",{ref:"title",staticClass:"header-title"},[t._v(t._s(t.headerTitle))])]),n("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[n("div",{ref:"filter",staticClass:"filter"})]),n("div",{ref:"layer",staticClass:"bg-layer"}),n("div",{ref:"list",staticClass:"list"},[n("cube-scroll",{ref:"scrollList",staticClass:"scroll-list",attrs:{"scroll-events":t.scrollEvents,options:t.options,data:t.songs},on:{scroll:t.scroll}},[n("song-list",{attrs:{songs:t.songs},on:{select:t.selectItem,random:t.random}})],1)],1)])},i=[],r=(n("5ab2"),n("6d57"),n("e10e"),n("ce3c")),a=n("99f1"),c=n("3e2c"),o=n("9f3a"),l=n("510f");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g=40,h=10,d=Object(c["a"])("transform"),b=Object(c["a"])("backdrop-filter"),m={mixins:[l["b"]],props:{songs:{type:Array,default:function(){return[]}},bgImage:{type:String,default:""},title:{type:String,default:""}},data:function(){return{scrollY:0,headerTitle:""}},computed:{bgStyle:function(){return"background-image: url(".concat(this.bgImage,")")}},created:function(){this.options={probeType:3},this.scrollEvents=["scroll"]},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight-h,this.minTranslateY=-this.imageHeight+g,this.$refs.list.style.top="".concat(this.imageHeight,"px")},methods:f({handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.list.style.bottom=e,this.$refs.scrollList.refresh()},selectItem:function(t,e){this.selectPlay({list:this.songs,index:e})},back:function(){this.$router.back()},scroll:function(t){this.scrollY=t.y},random:function(){this.randomPlay({list:this.songs})}},Object(o["b"])(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var e=Math.max(this.minTranslateY,t),n=0,s=1,i=0;this.$refs.layer.style["transform"]="translate3d(0,".concat(e,"px,0)");var r=Math.abs(t/this.imageHeight);t>0?s=1+r:i=Math.min(20*r,20),this.$refs.filter.style[b]="blur(".concat(i,"px)"),t<this.minTranslateY?(n=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="".concat(g,"px"),this.headerTitle=this.title):(n=0,this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.headerTitle=""),this.$refs.bgImage.style.zIndex=n,this.$refs.bgImage.style[d]="scale(".concat(s,")")}},components:{songList:a["a"]}},p=m,v=(n("686b"),n("9ca4")),y=Object(v["a"])(p,s,i,!1,null,"339323bd",null);e["a"]=y.exports},"53f8":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{songs:t.songs,"bg-image":t.bgImage,title:t.title}})],1)},i=[],r=(n("5ab2"),n("e10e"),n("6d57"),n("ce3c")),a=n("9f3a"),c=n("7f5c"),o=n("41ea"),l=n("f5de"),u=n("5362");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h={data:function(){return{songs:[]}},components:{MusicList:u["a"]},computed:g({title:function(){return this.singer.name},bgImage:function(){return this.singer.img1v1Url}},Object(a["c"])(["singer"])),created:function(){this._getDetail()},methods:{_getDetail:function(){var t=this;this.singer.id?Object(c["b"])(this.singer.id).then((function(e){e.code===o["a"]&&(t.songs=t._normalizeSongs(e.hotSongs))})):this.$router.push("/singer")},_normalizeSongs:function(t){var e=[];return t.forEach((function(t){var n=t;n.privilege.id&&n.al.id&&e.push(Object(l["c"])(n))})),e}}},d=h,b=(n("fbb7"),n("9ca4")),m=Object(b["a"])(d,s,i,!1,null,"4c6f5734",null);e["default"]=m.exports},"686b":function(t,e,n){"use strict";var s=n("b7d4"),i=n.n(s);i.a},"99f1":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"song-list"},[n("div",{staticClass:"button",on:{click:t.random}},[n("svg",{staticClass:"icon icon-play",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-zanting"}})]),n("div",{staticClass:"button-desc"},[t._v("\n      播放全部\n      "),n("span",{staticClass:"button-desc-count"},[t._v("(共"+t._s(t.songs.length)+"首)")])])]),n("ul",t._l(t.songs,(function(e,s){return n("li",{key:s,staticClass:"item",on:{click:function(n){return t.selectItem(e,s)}}},[n("div",{staticClass:"num"},[t._v(t._s(s+1))]),n("div",{staticClass:"content"},[n("h2",{staticClass:"name"},[t._v(t._s(t.getSongName(e)))]),n("div",{staticClass:"singer"},[t._v(t._s(e.singer))])])])})),0),n("cube-loading",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading_container",attrs:{size:40}})],1)},i=[],r={props:{songs:{type:Array,default:function(){return[]}}},methods:{selectItem:function(t,e){this.$emit("select",t,e)},getSongName:function(t){return t.alia?"".concat(t.songName,"(").concat(t.alia,")"):t.songName},random:function(){this.$emit("random")}}},a=r,c=(n("3e26"),n("9ca4")),o=Object(c["a"])(a,s,i,!1,null,"0c426018",null);e["a"]=o.exports},b7d4:function(t,e,n){},cb94:function(t,e,n){},df03:function(t,e,n){},f5de:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return f}));n("6d57");var s=n("1462");function i(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}var a=n("d73f"),c=n("41ea"),o=function(){function t(e){var n=e.singer,i=e.alId,r=e.alPicUrl,a=e.alName,c=e.alia,o=e.songName,l=e.songId;Object(s["a"])(this,t),this.singer=n,this.alId=i,this.alPicUrl=r,this.alName=a,this.alia=c,this.songName=o,this.songId=l}return r(t,[{key:"getLyric",value:function(){var t=this;return this.lyric?Promise.resolve(this.lyric):new Promise((function(e,n){Object(a["b"])(t.songId).then((function(s){s.data.code===c["a"]?(t.lyric=s.data.lrc.lyric,e(t.lyric)):n("no lyric")}))}))}}]),t}();function l(t){return new o({singer:g(t.ar),alId:t.al.id,alPicUrl:t.al.picUrl,alName:t.al.name,alia:h(t.alia),songName:t.name,songId:t.privilege.id})}function u(t){return new o({singer:g(t.ar),alId:t.al.id,alPicUrl:t.al.picUrl,alName:t.al.name,alia:h(t.alia),songName:t.name,songId:t.id})}function f(t){return new o({singer:g(t.artists),alId:t.album.id,alPicUrl:t.album.picUrl,alName:t.album.name,alia:h(t.alias),songName:t.name,songId:t.id})}function g(t){var e=[];return t?(t.forEach((function(t){e.push(t.name)})),e.join("/")):""}function h(t){var e=[];return t?(t.forEach((function(t){e.push(t)})),e.join("/")):""}},fbb7:function(t,e,n){"use strict";var s=n("df03"),i=n.n(s);i.a}}]);
//# sourceMappingURL=chunk-6232c8f0.6ccedbe8.js.map
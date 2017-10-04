webpackJsonp([1],{"/Bag":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("page-header"),t._v(" "),a("main",[a("br"),t._v(" "),a("br"),t._v(" "),a("router-view"),t._v(" "),a("br"),t._v(" "),a("br")],1)],1)],1)},n=[],s={render:r,staticRenderFns:n};e.a=s},"/OAP":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"hello"})},n=[],s={render:r,staticRenderFns:n};e.a=s},"2TGO":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{column:""}},[a("v-flex",{attrs:{xs6:"","offset-xs3":""}},[a("panel",{attrs:{title:t.song.title+" - "+t.song.album+" - "+t.song.artist}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"lyrics",attrs:{xs:"",6:"","offset-xs1":""}},[a("p",[t._v(t._s(t.song.lyrics))])]),t._v(" "),a("v-spacer"),t._v(" "),a("v-flex",{attrs:{"offset-xs1":""}},[a("img",{staticClass:"mt-6 Image",attrs:{height:"300px",src:t.song.albumImageUrl}}),t._v(" "),a("br"),t._v(" "),a("v-dialog",{attrs:{fullscreen:"",width:"auto"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{staticClass:"cyan",attrs:{slot:"activator",dark:""},slot:"activator"},[t._v("View Tabs")]),t._v(" "),a("v-card",[a("v-btn",{attrs:{dark:"",fixed:""},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Close")]),t._v(" "),a("v-card-text",{staticClass:"mt-1 text-xs-left tab"},[t._v(t._s(t.song.tab))])],1)],1),t._v(" "),a("v-btn",{staticClass:"cyan",attrs:{dark:"",to:{name:"song-edit",params:function(){return{songId:t.song.id}}}}},[t._v("\r\n\t\t\t\t\tEdit\r\n\t\t\t\t")])],1)],1)],1)],1)],1)},n=[],s={render:r,staticRenderFns:n};e.a=s},"3AY5":function(t,e,a){"use strict";var r=a("Xxa5"),n=a.n(r),s=a("exGp"),o=a.n(s),i=a("vp/K");e.a={data:function(){return{email:"",password:"",error:null}},methods:{register:function(){var t=this;return o()(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.register({email:t.email,password:t.password});case 3:a=e.sent,t.$store.dispatch("setToken",a.data.token),t.$store.dispatch("setUser",a.data.user),t.$router.push({name:"songs"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.error=e.t0.response.data.error;case 12:case"end":return e.stop()}},e,t,[[0,9]])}))()}}}},"3pnj":function(t,e,a){"use strict";var r=a("H/Zg");e.a={index:function(t){return a.i(r.a)().get("songs",{params:{search:t}})},post:function(t){return a.i(r.a)().post("songs",t)},show:function(t){return a.i(r.a)().get("songs/"+t)},userMade:function(t){return a.i(r.a)().get("songs/user/"+t)},updateSong:function(t){return a.i(r.a)().put("songs/"+t.id,t)}}},"5YEL":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{column:""}},[a("v-flex",{attrs:{xs6:"","offset-xs3":""}},[a("panel",{attrs:{title:"Sign In"}},[a("v-text-field",{attrs:{label:"Email",dark:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),a("br"),t._v(" "),a("v-text-field",{attrs:{label:"Password",dark:"",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"danger-alert",domProps:{innerHTML:t._s(t.error)}}),t._v(" "),a("br"),t._v(" "),a("v-btn",{staticClass:"cyan",attrs:{dark:""},on:{click:t.login}},[t._v("\n          Sign In\n        ")])],1)],1)],1)},n=[],s={render:r,staticRenderFns:n};e.a=s},"6VtA":function(t,e){},"7zck":function(t,e){},"8/tT":function(t,e){},"8HJJ":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("panel",{attrs:{title:"search"}},[a("v-text-field",{attrs:{label:"Search by Title, Artist, or Album",dark:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)},n=[],s={render:r,staticRenderFns:n};e.a=s},ALcO:function(t,e){},BVZV:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h2",[t._v("Create Song")]),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"ml-2",attrs:{xs6:""}},[a("panel",{attrs:{title:"Create Song"}},[a("form",{attrs:{name:"CreateSong"}},[a("v-text-field",{attrs:{label:"Title",required:"",rules:[t.required],dark:""},model:{value:t.song.title,callback:function(e){t.song.title=e},expression:"song.title"}}),t._v(" "),a("v-text-field",{attrs:{label:"Album",required:"",rules:[t.required],dark:""},model:{value:t.song.album,callback:function(e){t.song.album=e},expression:"song.album"}}),t._v(" "),a("v-text-field",{attrs:{label:"Album Cover Link",dark:""},model:{value:t.song.albumImageUrl,callback:function(e){t.song.albumImageUrl=e},expression:"song.albumImageUrl"}}),t._v(" "),a("v-text-field",{attrs:{label:"Artist",required:"",rules:[t.required],dark:""},model:{value:t.song.artist,callback:function(e){t.song.artist=e},expression:"song.artist"}}),t._v(" "),a("v-text-field",{attrs:{label:"Genre",rules:[t.required],required:"",dark:""},model:{value:t.song.genre,callback:function(e){t.song.genre=e},expression:"song.genre"}}),t._v(" "),a("v-text-field",{attrs:{label:"Youtube Key",dark:""},model:{value:t.song.youtubeId,callback:function(e){t.song.youtubeId=e},expression:"song.youtubeId"}})],1),t._v(" "),a("div",{staticClass:"danger-alert",domProps:{innerHTML:t._s(t.error)}}),t._v(" "),a("div",[a("v-btn",{staticClass:"cyan",attrs:{dark:""},on:{click:t.updateSong}},[t._v("Add Song")])],1)])],1),t._v(" "),a("v-flex",{staticClass:"ml-2",attrs:{xs6:""}},[a("panel",{attrs:{title:"Tabs"}},[a("v-text-field",{attrs:{label:"Tabs",rules:[t.required],rows:"7","multi-line":"",required:"",dark:""},model:{value:t.song.tab,callback:function(e){t.song.tab=e},expression:"song.tab"}})],1),t._v(" "),a("br"),t._v(" "),a("panel",{attrs:{title:"Lyrics"}},[a("v-text-field",{attrs:{label:"Lyrics",rows:"6",rules:[t.required],required:"","multi-line":"",dark:""},model:{value:t.song.lyrics,callback:function(e){t.song.lyrics=e},expression:"song.lyrics"}})],1)],1)],1)],1)},n=[],s={render:r,staticRenderFns:n};e.a=s},C39G:function(t,e,a){"use strict";function r(t){a("rR4J")}var n=a("tXcZ"),s=a("2TGO"),o=a("VU/8"),i=r,l=o(n.a,s.a,i,null,null);e.a=l.exports},Cz8s:function(t,e,a){"use strict";function r(t){a("6VtA")}var n=a("wqBJ"),s=a("gNhw"),o=a("VU/8"),i=r,l=o(n.a,s.a,i,"data-v-26aadc05",null);e.a=l.exports},EG6i:function(t,e,a){"use strict";e.a={props:["title"]}},Fn2k:function(t,e,a){"use strict";function r(t){a("uB7S")}var n=a("YUwK"),s=a("pyDl"),o=a("VU/8"),i=r,l=o(n.a,s.a,i,null,null);e.a=l.exports},Gp6f:function(t,e,a){"use strict";function r(t){a("UlnK")}var n=a("zs3D"),s=a("zTxq"),o=a("VU/8"),i=r,l=o(n.a,s.a,i,"data-v-13eeb036",null);e.a=l.exports},"H/Zg":function(t,e,a){"use strict";var r=a("mtWM"),n=a.n(r);e.a=function(){return n.a.create({baseURL:"https://cheesytabs-api.herokuapp.com/"})}},I4t6:function(t,e,a){"use strict";var r=a("Xxa5"),n=a.n(r),s=a("exGp"),o=a.n(s),i=a("vp/K");e.a={data:function(){return{email:"",password:"",error:null}},methods:{login:function(){var t=this;return o()(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.login({email:t.email,password:t.password});case 3:a=e.sent,t.$store.dispatch("setToken",a.data.token),t.$store.dispatch("setUser",a.data.user),t.$router.push({name:"songs"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.error=e.t0.response.data.error;case 12:case"end":return e.stop()}},e,t,[[0,9]])}))()}}}},K31e:function(t,e,a){"use strict";function r(t){a("hXmL")}var n=a("I4t6"),s=a("5YEL"),o=a("VU/8"),i=r,l=o(n.a,s.a,i,"data-v-d23177be",null);e.a=l.exports},KDJv:function(t,e,a){"use strict";var r=a("Xxa5"),n=a.n(r),s=a("exGp"),o=a.n(s),i=a("M4fF"),l=a.n(i);e.a={data:function(){return{search:""}},watch:{search:l.a.debounce(function(){var t=o()(n.a.mark(function t(e){var a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a={name:"songs"},""!==this.search&&(a.query={search:this.search}),this.$router.push(a);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),700),"$route.query.search":{immediate:!0,handler:function(t){this.search=t}}}}},LABr:function(t,e,a){"use strict";var r=a("Xxa5"),n=a.n(r),s=a("exGp"),o=a.n(s),i=a("Dd8w"),l=a.n(i),u=a("NYxO"),c=a("3pnj");e.a={data:function(){return{title:null,artist:null,youtubeId:null,albumImageUrl:null,album:null,lyrics:null,tab:null,genre:null,error:null}},computed:l()({},a.i(u.a)(["user"])),methods:{post:function(){var t=this;return o()(n.a.mark(function e(){var a,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t.user.id,e.next=4,c.a.post({title:t.title,artist:t.artist,album:t.album,albumImageUrl:t.albumImageUrl,genre:t.genre,youtubeId:t.youtubeId,lyrics:t.lyrics,tab:t.tab,madeBy:a});case 4:r=e.sent,console.log(r),t.$router.push({name:"songs"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.error=e.t0.response.data.error;case 12:case"end":return e.stop()}},e,t,[[0,9]])}))()}}}},M93x:function(t,e,a){"use strict";function r(t){a("Pxcp")}var n=a("xJD8"),s=a("/Bag"),o=a("VU/8"),i=r,l=o(n.a,s.a,i,null,null);e.a=l.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("7+uW"),n=a("M93x"),s=a("YaEn"),o=a("3EgV"),i=a.n(o),l=a("9JMe"),u=(a.n(l),a("7zck")),c=(a.n(u),a("wtEF")),v=a("RsmR");r.a.config.productionTip=!1,r.a.component("panel",v.a),r.a.use(i.a),a.i(l.sync)(c.a,s.a),new r.a({el:"#app",router:s.a,store:c.a,template:"<App/>",components:{App:n.a}})},PgDg:function(t,e,a){"use strict";var r=a("Xxa5"),n=a.n(r),s=a("fZjL"),o=a.n(s),i=a("exGp"),l=a.n(i),u=a("3pnj");e.a={data:function(){return{song:{title:null,artist:null,youtubeId:null,albumImageUrl:null,album:null,lyrics:null,tab:null,genre:null},error:null,require:function(t){return!!t||"Required"}}},methods:{updateSong:function(){var t=this;return l()(n.a.mark(function e(){var a,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.error=null,a=o()(t.song)){e.next=5;break}return t.error="Please fill in all the required fields.",e.abrupt("return");case 5:return r=t.$store.state.route.params.songId,e.prev=6,e.next=9,u.a.updateSong(t.song);case 9:t.$router.push({name:"song",params:{songId:r}}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),console.log(e.t0);case 15:case"end":return e.stop()}},e,t,[[6,12]])}))()}},mounted:function(){var t=this;return l()(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t.$store.state.route.params.songId,e.next=4,u.a.show(a);case 4:t.song=e.sent.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()}}},Pxcp:function(t,e){},RTr7:function(t,e){},RsmR:function(t,e,a){"use strict";function r(t){a("ALcO")}var n=a("EG6i"),s=a("eYu4"),o=a("VU/8"),i=r,l=o(n.a,s.a,i,"data-v-b5f6cd88",null);e.a=l.exports},UlnK:function(t,e){},Ut6q:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h2",[t._v("Create Song")]),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"ml-2",attrs:{xs6:""}},[a("panel",{attrs:{title:"Create Song"}},[a("form",{attrs:{name:"CreateSong"}},[a("v-text-field",{attrs:{label:"Title",required:"",rules:[t.required],dark:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),a("v-text-field",{attrs:{label:"Album",required:"",rules:[t.required],dark:""},model:{value:t.album,callback:function(e){t.album=e},expression:"album"}}),t._v(" "),a("v-text-field",{attrs:{label:"Album Cover Link",dark:""},model:{value:t.albumImageUrl,callback:function(e){t.albumImageUrl=e},expression:"albumImageUrl"}}),t._v(" "),a("v-text-field",{attrs:{label:"Artist",required:"",rules:[t.required],dark:""},model:{value:t.artist,callback:function(e){t.artist=e},expression:"artist"}}),t._v(" "),a("v-text-field",{attrs:{label:"Genre",rules:[t.required],required:"",dark:""},model:{value:t.genre,callback:function(e){t.genre=e},expression:"genre"}}),t._v(" "),a("v-text-field",{attrs:{label:"Youtube Key",dark:""},model:{value:t.youtubeId,callback:function(e){t.youtubeId=e},expression:"youtubeId"}})],1),t._v(" "),a("div",{staticClass:"danger-alert",domProps:{innerHTML:t._s(t.error)}}),t._v(" "),a("div",[a("v-btn",{staticClass:"cyan",attrs:{dark:""},on:{click:t.post}},[t._v("Add Song")])],1)])],1),t._v(" "),a("v-flex",{staticClass:"ml-2",attrs:{xs6:""}},[a("panel",{attrs:{title:"Tabs"}},[a("v-text-field",{attrs:{label:"Tabs",rules:[t.required],rows:"7","multi-line":"",required:"",dark:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}})],1),t._v(" "),a("br"),t._v(" "),a("panel",{attrs:{title:"Lyrics"}},[a("v-text-field",{attrs:{label:"Lyrics",rows:"6",rules:[t.required],required:"","multi-line":"",dark:""},model:{value:t.lyrics,callback:function(e){t.lyrics=e},expression:"lyrics"}})],1)],1)],1)],1)},n=[],s={render:r,staticRenderFns:n};e.a=s},YUwK:function(t,e,a){"use strict";var r=a("Xxa5"),n=a.n(r),s=a("exGp"),o=a.n(s),i=a("Dd8w"),l=a.n(i),u=a("NYxO"),c=a("3pnj");e.a={data:function(){return{songs:[]}},computed:l()({},a.i(u.a)(["user"])),mounted:function(){var t=this;return o()(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.user.id,console.log(t.user.id),e.next=4,c.a.userMade(a);case 4:t.songs=e.sent.data,console.log(t.songs);case 6:case"end":return e.stop()}},e,t)}))()}}},YaEn:function(t,e,a){"use strict";var r=a("7+uW"),n=a("/ocq"),s=(a("qSdX"),a("q3Wa")),o=a("K31e"),i=a("Gp6f"),l=a("lPKn"),u=a("C39G"),c=a("Fn2k"),v=a("sbFu");r.a.use(n.a),e.a=new n.a({routes:[{path:"/register",name:"register",component:s.a},{path:"/login",name:"Login",component:o.a},{path:"/songs",name:"songs",component:i.a},{path:"/songs/create",name:"CreateSongs",component:l.a},{path:"/songs/:songId",name:"song",component:u.a},{path:"/songs/:songId/edit",name:"song-edit",component:v.a},{path:"/profile",name:"profile",component:c.a},{path:"*",redirect:"songs"}]})},eYu4:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"secondary elevation-4"},[a("v-toolbar",{staticClass:"cyan",attrs:{flat:"",dense:"",dark:""}},[a("v-toolbar-title",[t._v(t._s(t.title))])],1),t._v(" "),a("div",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[t._t("default",[t._v("\n          no slot content defined\n      ")])],2)],1)},n=[],s={render:r,staticRenderFns:n};e.a=s},gNhw:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{staticClass:"cyan",attrs:{fixed:"",dark:""}},[a("v-toolbar-items",[a("v-btn",{attrs:{flat:"",dark:""}},[a("v-toolbar-title",{staticClass:"mr-4",on:{click:function(e){t.navigateTo({name:"Hello"})}}},[t._v("\n          CheesyTabs\n        ")])],1)],1),t._v(" "),a("v-toolbar-items",[a("v-btn",{attrs:{flat:"",dark:"",to:"/songs"}},[t._v("Browse")])],1),t._v(" "),a("v-spacer"),t._v(" "),t.$store.state.isUserLoggedIn?t._e():a("v-toolbar-items",[a("v-btn",{attrs:{flat:"",dark:"",to:"/register"}},[t._v("\n          Sign Up\n        ")])],1),t._v(" "),t.$store.state.isUserLoggedIn?t._e():a("v-toolbar-items",[a("v-btn",{attrs:{flat:"",dark:"",to:"/login"}},[t._v("\n        Sign In\n      ")])],1),t._v(" "),t.$store.state.isUserLoggedIn?a("v-toolbar-items",[a("v-btn",{attrs:{flat:"",dark:"",to:"/songs/create"}},[t._v("\n        Add Tabs\n      ")])],1):t._e(),t._v(" "),t.$store.state.isUserLoggedIn?a("v-toolbar-items",[a("v-btn",{attrs:{flat:"",dark:"",to:"/Profile"}},[t._v("\n        Profile\n      ")])],1):t._e(),t._v(" "),a("v-toolbar-items",{on:{click:t.logout}},[t.$store.state.isUserLoggedIn?a("v-btn",{attrs:{flat:"",dark:""}},[t._v("\n        Sign Out\n      ")]):t._e()],1)],1)},n=[],s={render:r,staticRenderFns:n};e.a=s},hXmL:function(t,e){},lPKn:function(t,e,a){"use strict";function r(t){a("tuNO")}var n=a("LABr"),s=a("Ut6q"),o=a("VU/8"),i=r,l=o(n.a,s.a,i,null,null);e.a=l.exports},lbLu:function(t,e){},mhrS:function(t,e){},pMZz:function(t,e,a){"use strict";e.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},pQ4i:function(t,e,a){"use strict";function r(t){a("mhrS")}var n=a("KDJv"),s=a("8HJJ"),o=a("VU/8"),i=r,l=o(n.a,s.a,i,"data-v-11a5e495",null);e.a=l.exports},phYC:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{column:""}},[a("v-flex",{attrs:{xs6:"","offset-xs3":""}},[a("panel",{attrs:{title:"Sign Up"}},[a("form",{attrs:{name:"registerForm",autocomplete:"off"}},[a("v-text-field",{attrs:{label:"Email",dark:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),a("br"),t._v(" "),a("v-text-field",{attrs:{label:"Password",dark:"",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"danger-alert",domProps:{innerHTML:t._s(t.error)}}),t._v(" "),a("br"),t._v(" "),a("v-btn",{staticClass:"cyan",attrs:{dark:""},on:{click:t.register}},[t._v("\n          Register\n        ")])],1)],1)],1)},n=[],s={render:r,staticRenderFns:n};e.a=s},pyDl:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{column:""}},[a("v-flex",{attrs:{xs6:"","offset-xs3":""}},[a("panel",{attrs:{title:t.$store.state.user.email}},t._l(t.songs,function(e){return a("div",{key:e.id,staticClass:"songsView"},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs5:"","offset-xs1":""}},[a("h4",[t._v(t._s(e.title))]),t._v(" "),a("h6",[t._v(t._s(e.artist))]),t._v(" "),a("h6",[t._v(t._s(e.album))]),t._v(" "),a("v-btn",{staticClass:"cyan",attrs:{dark:"",to:{name:"song",params:{songId:e.id}}}},[t._v("\n\t\t\t\t\t\tView\n\t\t\t\t\t")])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-flex",{attrs:{xs:"",5:""}},[a("img",{attrs:{height:"200px",src:e.albumImageUrl}})])],1)],1)}))],1)],1)},n=[],s={render:r,staticRenderFns:n};e.a=s},q3Wa:function(t,e,a){"use strict";function r(t){a("lbLu")}var n=a("3AY5"),s=a("phYC"),o=a("VU/8"),i=r,l=o(n.a,s.a,i,"data-v-edfb55ca",null);e.a=l.exports},qSdX:function(t,e,a){"use strict";function r(t){a("8/tT")}var n=a("pMZz"),s=a("/OAP"),o=a("VU/8"),i=r,l=o(n.a,s.a,i,"data-v-87b09e2c",null);l.exports},rR4J:function(t,e){},sbFu:function(t,e,a){"use strict";function r(t){a("RTr7")}var n=a("PgDg"),s=a("BVZV"),o=a("VU/8"),i=r,l=o(n.a,s.a,i,null,null);e.a=l.exports},tXcZ:function(t,e,a){"use strict";var r=a("Xxa5"),n=a.n(r),s=a("exGp"),o=a.n(s),i=a("Dd8w"),l=a.n(i),u=a("NYxO"),c=a("3pnj");e.a={data:function(){return{song:{},dialog:!1}},computed:l()({},a.i(u.a)(["route"])),mounted:function(){var t=this;return o()(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.route.params.songId,e.next=3,c.a.show(a);case 3:t.song=e.sent.data,console.log(t.song);case 5:case"end":return e.stop()}},e,t)}))()}}},tuNO:function(t,e){},uB7S:function(t,e){},"vp/K":function(t,e,a){"use strict";var r=a("H/Zg");e.a={register:function(t){return a.i(r.a)().post("register",t)},login:function(t){return a.i(r.a)().post("login",t)}}},wqBJ:function(t,e,a){"use strict";e.a={methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("isUserLoggedIn",!1),this.$router.push("/songs")}}}},wtEF:function(t,e,a){"use strict";var r=a("7+uW"),n=a("NYxO"),s=a("qQWK"),o=a.n(s);r.a.use(n.b),e.a=new n.b.Store({strict:!0,plugins:[o()()],state:{token:null,user:null,isUserLoggedIn:!1},mutations:{setToken:function(t,e){t.token=e,t.isUserLoggedIn=!!e},setUser:function(t,e){t.user=e}},actions:{setToken:function(t,e){(0,t.commit)("setToken",e)},setUser:function(t,e){(0,t.commit)("setUser",e)}}})},xJD8:function(t,e,a){"use strict";var r=a("Cz8s");e.a={name:"app",components:{PageHeader:r.a}}},zTxq:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{column:""}},[a("v-flex",{attrs:{xs6:"","offset-xs3":""}},[a("songSearch"),t._v(" "),a("panel",{staticClass:"mt-2",attrs:{title:"Songs"}},t._l(t.songs,function(e){return a("div",{key:e.id,staticClass:"songsView"},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs5:"","offset-xs1":""}},[a("h4",[t._v(t._s(e.title))]),t._v(" "),a("h6",[t._v(t._s(e.artist))]),t._v(" "),a("h6",[t._v(t._s(e.album))]),t._v(" "),a("v-btn",{staticClass:"cyan",attrs:{dark:"",to:{name:"song",params:{songId:e.id}}}},[t._v("\n\t\t\t\t\t\t\tView\n\t\t\t\t\t\t")])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-flex",{attrs:{xs:"",5:""}},[a("img",{attrs:{height:"200px",src:e.albumImageUrl}})])],1)],1)}))],1)],1)},n=[],s={render:r,staticRenderFns:n};e.a=s},zs3D:function(t,e,a){"use strict";var r=a("Xxa5"),n=a.n(r),s=a("exGp"),o=a.n(s),i=a("pQ4i"),l=a("3pnj");e.a={data:function(){return{songs:null}},mounted:function(){var t=this;return o()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.index();case 2:t.songs=e.sent.data;case 3:case"end":return e.stop()}},e,t)}))()},components:{songSearch:i.a},watch:{"$route.query.search":{immediate:!0,handler:function(t){var e=this;return o()(n.a.mark(function a(){return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.index(t);case 2:e.songs=a.sent.data;case 3:case"end":return a.stop()}},a,e)}))()}}}}}},["NHnr"]);
//# sourceMappingURL=app.bba1fa1fe0ecdc5c97c6.js.map
webpackJsonp([0],{0:function(t,e){},"4+hh":function(t,e){},AnE8:function(t,e){},BrGX:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("md-tabs",{attrs:{"md-alignment":"fixed"}},[e("md-tab",{attrs:{id:"tab-home","md-label":"Pokemons"}},[e("PokeArc")],1),this._v(" "),e("md-tab",{attrs:{id:"tab-pages","md-label":"Find Pokemon"}},[e("FindPoke")],1),this._v(" "),e("md-tab",{attrs:{id:"tab-posts","md-label":"Favorites"}}),this._v(" "),e("md-tab",{attrs:{id:"tab-favorites","md-label":"About"}})],1)],1)},staticRenderFns:[]},a=n("VU/8")({name:"app"},o,!1,function(t){n("PLfH")},null,null).exports,i={name:"PokeArc",data:function(){return{pokemons:[],limit:5,offset:0}},methods:{getPokemons:function(t,e){this.offset+=e;var n="https://pokeapi.co/api/v2/pokemon/?limit="+t+"&offset="+this.offset;this.$http.get(n).then(function(t){for(var e=0;e<this.limit;)this.getPokemon(t.body.results[e].url),e++})},getMorePokemons:function(){this.showProgressBar(),this.getPokemons(5,5)},getPokemon:function(t){this.$http.get(t).then(function(t){this.pokemons.push(t.body)}).then(function(){this.pokemons.length===this.limit+this.offset&&this.hideProgressBar()})},hideProgressBar:function(){document.getElementById("progress-bar").style.visibility="hidden"},showProgressBar:function(){document.getElementById("progress-bar").style.visibility="visible"}},beforeMount:function(){this.getPokemons(5,0)}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("md-progress-bar",{attrs:{id:"progress-bar","md-mode":"indeterminate"}}),t._v(" "),n("md-content",{staticClass:"md-scrollbar"},[n("ul",t._l(t.pokemons,function(e){return n("li",[n("md-card",{staticClass:"md-elevation-24"},[n("md-card-media",[n("img",{staticStyle:{height:"180px",width:"180px"},attrs:{src:e.sprites.front_default,alt:"People"}})]),t._v(" "),n("md-card-header",[n("div",{staticClass:"md-title"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"md-subhead"},[t._v("Moves : "+t._s(e.moves.length))])]),t._v(" "),n("md-card-expand",[n("md-card-actions",{attrs:{"md-alignment":"space-between"}},[n("div",[n("md-button",{staticClass:"md-icon-button"},[n("md-icon",[t._v("favorite")])],1)],1),t._v(" "),n("md-card-expand-trigger",[n("md-button",{staticClass:"md-icon-button"},[n("md-icon",[t._v("keyboard_arrow_down")])],1)],1)],1),t._v(" "),n("md-card-expand-content",[n("md-card-content",[n("span",{staticClass:"md-body-2"},[t._v("\n                  Weight: "+t._s(e.weight)+"\n                  "),n("br"),t._v("\n                  Base experience: "+t._s(e.base_experience)+"\n                  "),n("br"),t._v(" "),t._l(e.stats,function(e){return n("ul",[n("li",{staticClass:"capitalize"},[t._v("\n                      "+t._s(e.stat.name)+" : "+t._s(e.base_stat)+"\n                    ")])])})],2)])],1)],1)],1)],1)})),t._v(" "),n("md-button",{staticClass:"md-dense md-raised md-primary",on:{click:function(e){t.getMorePokemons()}}},[t._v("Load more Pokemons")])],1)],1)},staticRenderFns:[]},d=n("VU/8")(i,r,!1,function(t){n("j7Ol")},"data-v-320fc8d2",null).exports,m={name:"FindPoke",data:function(){return{pokemon:null,query:""}},methods:{getPokemon:function(t){this.$http.get(t).then(function(t){this.pokemon=t.body}).then(function(){null!==this.pokemon&&this.hideProgressBar()})},searchPokemon:function(){this.pokemon=null,this.showProgressBar();var t="https://pokeapi.co/api/v2/pokemon/"+this.query;this.getPokemon(t)},hideProgressBar:function(){document.getElementById("search-progress-bar").style.visibility="hidden"},showProgressBar:function(){document.getElementById("search-progress-bar").style.visibility="visible"}},mounted:function(){this.hideProgressBar()}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"FindPoke"}},[n("md-progress-bar",{attrs:{id:"search-progress-bar","md-mode":"indeterminate"}}),t._v(" "),n("md-toolbar",[n("div",{staticClass:"md-toolbar-row"},[n("md-field",{staticClass:"search"},[n("label",[t._v("Enter Pokemon name or id")]),t._v(" "),n("md-input",{on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchPokemon()}},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})],1),t._v(" "),n("md-button",{staticClass:"md-dense md-raised md-primary",on:{click:function(e){t.searchPokemon()}}},[t._v("Search")])],1)]),t._v(" "),n("md-content",{staticClass:"md-scrollbar"},[t.pokemon?t._e():n("div",{staticClass:"not-found"},[n("md-label",{staticClass:"md-display-3 md-primary md-raised"},[t._v("You haven't searched yet or no Pokemon matched your query. Try searching for 6 or charizard.")])],1),t._v(" "),t.pokemon?n("md-card",{staticClass:"md-elevation-24"},[n("md-card-media",[n("img",{staticStyle:{height:"180px",width:"180px"},attrs:{src:t.pokemon.sprites.front_default,alt:"People"}})]),t._v(" "),n("md-card-header",[n("div",{staticClass:"md-title"},[t._v(t._s(t.pokemon.name))]),t._v(" "),n("div",{staticClass:"md-subhead"},[t._v("Moves : "+t._s(t.pokemon.moves.length))])]),t._v(" "),n("md-card-expand",[n("md-card-actions",{attrs:{"md-alignment":"space-between"}},[n("div",[n("md-button",{staticClass:"md-icon-button"},[n("md-icon",[t._v("favorite")])],1)],1),t._v(" "),n("md-card-expand-trigger",[n("md-button",{staticClass:"md-icon-button"},[n("md-icon",[t._v("keyboard_arrow_down")])],1)],1)],1),t._v(" "),n("md-card-expand-content",[n("md-card-content",[n("span",{staticClass:"md-body-2"},[t._v("\n              Weight: "+t._s(t.pokemon.weight)+"\n              "),n("br"),t._v("\n              Base experience: "+t._s(t.pokemon.base_experience)+"\n              "),n("br"),t._v(" "),t._l(t.pokemon.stats,function(e){return n("ul",[n("li",{staticClass:"capitalize"},[t._v("\n                  "+t._s(e.stat.name)+" : "+t._s(e.base_stat)+"\n                ")])])})],2)])],1)],1)],1):t._e()],1)],1)},staticRenderFns:[]},l=n("VU/8")(m,c,!1,function(t){n("BrGX")},"data-v-928f1600",null).exports,u=n("ORbq"),p=n("Lgyv"),h=n.n(p);n("4+hh"),n("AnE8");s.default.use(h.a),s.default.use(u.a),s.default.component("PokeArc",d),s.default.component("FindPoke",l),s.default.config.productionTip=!1,new s.default({el:"#app",template:"<App/>",components:{App:a}})},PLfH:function(t,e){},j7Ol:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2abc343badef69c876ed.js.map
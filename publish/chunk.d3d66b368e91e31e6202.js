/*! For license information please see chunk.d3d66b368e91e31e6202.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{167:function(t,e,i){"use strict";i(187)},186:function(t,e,i){"use strict";var s={name:"ALink",props:{href:String,to:[String,Object]},computed:{isRouter(){return!!this.$router&&(!this.href||Boolean(this.$router.options.routes.find((({path:t})=>t===this.href))))}}},o=i(53),a=Object(o.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.isRouter?"router-link":"a",{tag:"component",attrs:{href:t.isRouter?null:t.href,to:t.isRouter?t.to||t.href:null}},[t._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},187:function(t,e,i){var s=i(214);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(166).default)("fd5c67d2",s,!0,{})},188:function(t,e,i){"use strict";i(14),i(5);var s=i(27),o=i(89),a=i(70);var n={name:"APicture",props:{src:[String,Object],fallbackSrc:String,alt:String,canCalcHeight:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},containerBreakpoints:{type:Object,default:()=>({zoom:null,big:800,[s.$ecomConfig.get("default_img_size")||"normal"]:400})},lozadOptions:{type:Object,default:()=>({rootMargin:"350px 0px",threshold:0})}},data:()=>({sources:[],height:null,opacity:null}),computed:{defaultImgObj(){return"object"==typeof this.src&&this.src?Object(o.a)(this.src)||this.src:{}},localFallbackSrc(){const{src:t,defaultImgObj:e,fallbackSrc:i}=this;if(i)return i;const s="object"==typeof t?t.zoom?t.zoom.url:e.url:t;return s?s.replace(/\.webp$/,""):this.placeholder},localAlt(){const{alt:t,src:e,defaultImgObj:i}=this;return t||(e?i.alt||"Product":"No image")}},methods:{updateSources(){const t=[];let e;if("object"==typeof this.src){const{clientWidth:t,clientHeight:i}=this.$el,s=((t,e,i,s)=>{let o,a;for(const n in s){const r=s[n];if(void 0!==r&&t[n]){if(void 0!==a)if(null===r){if(a>=e)continue}else if(r<e||r-50<=i||null!==a&&r>a)continue;o=n,a=r}}return o})(this.src,t,i,this.containerBreakpoints),o=this.src[s],{url:a,size:n}=o||this.defaultImgObj;if(e=a,t&&n&&this.canCalcHeight){const[e,i]=n.split("x").map((t=>parseInt(t,10)));i&&(this.height="".concat(t>=e?i:t*i/e,"px"))}}else e=this.src;e&&(e.endsWith(".webp")?t.push({srcset:e,type:"image/webp"},{srcset:/\/imgs\/[0-9]{3}px/.test(e)?e.replace(/\/imgs\/[0-9]{3}px/,""):e.replace(/\.webp$/,""),type:"image/".concat(".png"===e.substr(-9,4)?"png":"jpeg")}):t.push({srcset:e})),this.sources=t}},mounted(){this.updateSources(),this.$nextTick((()=>{const t=this.$el;Object(a.a)(t,{...this.lozadOptions,loaded:t=>{const{localFallbackSrc:e}=this,i="IMG"===t.tagName?t:t.lastChild;i.style.opacity=0,i.onerror=function(){console.error(new Error("Image load error"),this),t.style.display="none";const i=document.createElement("IMG");i.src=e,t.parentNode.insertBefore(i,t.nextSibling)},i.onload=()=>{this.opacity=0,t.classList.add("loaded"),this.$nextTick((()=>{this.opacity=i.style.opacity=null,this.$emit("load")}))}}}).observe()}))}},r=(i(167),i(53)),c=Object(r.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("picture",{staticClass:"picture",style:{height:t.height,opacity:t.opacity},attrs:{"data-iesrc":t.localFallbackSrc,"data-alt":t.localAlt}},[t.sources.length?t._l(t.sources,(function(t,e){var s=t.srcset,o=t.type;return i("source",{key:e,attrs:{srcset:s,type:o}})})):i("source",{attrs:{srcset:t.localFallbackSrc}})],2)}),[],!1,null,null,null);e.a=c.exports},189:function(t,e,i){"use strict";var s=i(168),o=i(28),a=i(40),n=i(41),r=i(42),c=i(80);const l=(t,e)=>{const{type:i,value:s}=e;if(s)return"percentage"===i?t*(100-s)/100:t-s};var d={name:"APrices",props:{product:{type:Object,required:!0},isLiteral:Boolean,isBig:Boolean,isAmountTotal:Boolean,installmentsOption:Object,discountOption:Object,discountText:{type:[String,Boolean],default:""}},data(){return{installmentsNumber:0,monthlyInterest:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0},discountLabel:this.discountText}},computed:{i19asOf:()=>Object(a.a)(o.n),i19from:()=>Object(a.a)(o.tb),i19interestFree:()=>Object(a.a)(o.Fb),i19of:()=>Object(a.a)(o.kc),i19to:()=>Object(a.a)(o.xd),i19upTo:()=>Object(a.a)(o.Ed),price(){const t=Object(n.a)(this.product);return this.extraDiscount.value?l(t,this.extraDiscount):t},comparePrice(){return Object(r.a)(this.product)?this.product.base_price:this.extraDiscount.value?Object(n.a)(this.product):void 0},priceWithDiscount(){return l(this.price,this.discount)},installmentValue(){if(this.installmentsNumber>=2){if(this.monthlyInterest){const t=this.monthlyInterest/100;return this.price*t/(1-Math.pow(1+t,-this.installmentsNumber))}return this.price/this.installmentsNumber}return 0}},methods:{formatMoney:c.a,updateInstallments(t){if(t){this.monthlyInterest=t.monthly_interest;const e=t.min_installment||5,i=parseInt(this.price/e,10);this.installmentsNumber=Math.min(i,t.max_number)}},updateDiscount(t){!t||t.min_amount&&!(t.min_amount<=this.price)||this.isAmountTotal&&"total"!==t.apply_at||(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel="via ".concat(t.label)))}},watch:{price:{handler(t){this.$emit("fix-price",t)},immediate:!0}},created(){const t="object"==typeof window&&window.storefront;if(this.discountOption)this.updateDiscount(this.discountOption);else if(t){const e=()=>{const e=t.info&&t.info.apply_discount;if(e){const t=e.available_extra_discount;return t&&(this.extraDiscount=t),Object.keys(e).length>0}return!1};e()||t.on("info:apply_discount",e)}if(this.installmentsOption)this.updateInstallments(this.installmentsOption);else if(t){const e=()=>{const e=t.info&&t.info.list_payments;return!!e&&(this.updateInstallments(e.installments_option),this.updateDiscount(e.discount_option),Object.keys(e).length>0)};e()||t.on("info:list_payments",e)}}},u=(i(167),i(53)),p=Object(u.a)(d,s.a,s.b,!1,null,null,null);e.a=p.exports},190:function(t,e,i){"use strict";i(50);var s=i(28),o=i(40),a=i(22),n=i(82),r=i(42),c=i(41),l=i(31),d=i.n(l),u=i(4),p=i(9),b=i(186),h=i(188),g=i(189),m={name:"ProductCard",components:{ALink:b.a,APicture:h.a,APrices:g.a},props:{product:Object,productId:String,isSmall:Boolean,headingTag:{type:String,default:"h3"},buyText:String,transitionClass:{type:String,default:"animated fadeIn"},canAddToCart:{type:Boolean,default:!0},isLoaded:Boolean,installmentsOption:Object,discountOption:Object},data:()=>({body:{},isLoading:!1,isWaitingBuy:!1,isHovered:!1,error:""}),computed:{i19outOfStock:()=>Object(o.a)(s.vc),i19unavailable:()=>Object(o.a)(s.Bd),buyHtml:()=>"object"==typeof window&&window.productCardBuyHtml,footerHtml:()=>"object"==typeof window&&window.productCardFooterHtml,name(){return Object(a.a)(this.body)},strBuy(){return this.buyText||"object"==typeof window&&window.productCardBuyText||Object(o.a)(s.s)},isInStock(){return Object(n.a)(this.body)},isActive(){return this.body.available&&this.body.visible&&this.isInStock},discount(){const{body:t}=this;return Object(r.a)(t)?Math.round(100*(t.base_price-Object(c.a)(t))/t.base_price):0}},methods:{setBody(t){this.body=Object.assign({},t),delete this.body.body_html,delete this.body.body_text,delete this.body.inventory_records,delete this.body.price_change_records},fetchItem(){this.productId&&(this.isLoading=!0,Object(u.g)({url:"/products/".concat(this.productId,".json")}).then((({data:t})=>{this.$emit("update:product",t),this.setBody(t),this.$emit("update:is-loaded",!0)})).catch((t=>{console.error(t),this.body.name&&this.body.slug&&this.body.pictures||(this.error=Object(o.a)(s.O))})).finally((()=>{this.isLoading=!1})))},buy(){const t=this.body;this.$emit("buy",{product:t}),this.canAddToCart&&(this.isWaitingBuy=!0,Object(u.g)({url:"/products/".concat(t._id,".json")}).then((({data:e})=>{const s=["variations","customizations","kit_composition"];for(let t=0;t<s.length;t++){const o=e[s[t]];if(o&&o.length)return Promise.all([i.e(0),i.e(2),i.e(5),i.e(17)]).then(i.bind(null,395)).then((t=>{new d.a({render:i=>i(t.default,{props:{product:e}})}).$mount(this.$refs.quickview)}))}const{quantity:o,price:a}=e;p.a.addProduct({...t,quantity:o,price:a})})).catch((e=>{console.error(e),window.location="/".concat(t.slug)})).finally((()=>{this.isWaitingBuy=!1})))}},created(){this.product&&(this.setBody(this.product),void 0===this.product.available&&(this.body.available=!0),void 0===this.product.visible&&(this.body.visible=!0)),this.isLoaded||this.fetchItem()}},f=(i(167),i(53)),y=Object(f.a)(m,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product-card",class:{"product-card--inactive":t.body._id&&!t.isActive,"product-card--small":t.isSmall},attrs:{"data-product-id":t.body._id,"data-sku":t.body.sku},on:{mouseover:function(e){t.isHovered=!0}}},[i("transition",{attrs:{"enter-active-class":t.transitionClass}},[t.isLoading?t._e():i("section",[t._t("discount-tag",[t.isActive&&t.discount>0?i("span",{staticClass:"product-card__offer-stamp"},[i("i",{staticClass:"fas fa-arrow-down"}),t._v(" "),i("b",[t._v(t._s(t.discount))]),t._v("% ")]):t._e()],null,{discount:t.discount}),t._t("body",[i("a-link",{staticClass:"product-card__link",attrs:{href:"/"+t.body.slug,title:t.name}},[t._t("header"),i("div",{staticClass:"product-card__pictures"},[t.body.pictures&&t.body.pictures.length?t._l(t.body.pictures.slice(0,2).reverse(),(function(e,s){return 1===t.body.pictures.length||1===s||t.isHovered?i("a-picture",{key:s,staticClass:"product-card__picture",attrs:{src:e,"can-calc-height":!1}}):t._e()})):i("a-picture",{staticClass:"product-card__picture"})],2),t._t("title",[i(t.headingTag,{tag:"component",staticClass:"product-card__name"},[t._v(" "+t._s(t.name)+" ")])])],2)]),t._t("rating",[t._m(0)]),t.body.available&&t.body.visible?t.isInStock?[t._t("prices",[i("a-prices",{staticClass:"product-card__prices",attrs:{product:t.body,"installments-option":t.installmentsOption,"discount-option":t.discountOption}})]),i("div",{staticClass:"product-card__buy fade",on:{click:t.buy}},[t._t("buy",[t.buyHtml?i("div",{domProps:{innerHTML:t._s(t.buyHtml)}}):t._e(),i("button",{staticClass:"btn btn-primary",class:t.isSmall?"btn-sm":"btn-block",attrs:{type:"button",disabled:t.isWaitingBuy}},[t.isWaitingBuy?i("span",{staticClass:"product-card__buy-loading spinner-grow spinner-grow-sm",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e(),t._t("buy-button-content",[i("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v(" "+t._s(t.strBuy)+" ")])],2)])],2)]:t._t("out-of-stock",[i("p",{staticClass:"badge badge-dark"},[t._v(" "+t._s(t.i19outOfStock)+" ")])]):t._t("unavailable",[i("p",{staticClass:"badge badge-warning"},[t._v(" "+t._s(t.i19unavailable)+" ")])]),t._t("footer",[t.footerHtml?i("div",{domProps:{innerHTML:t._s(t.footerHtml)}}):t._e()])],2)]),t.isLoading?[t._t("default"),t.error?i("div",{staticClass:"alert alert-warning small",attrs:{role:"alert"}},[t._v(" "+t._s(t.error)+" ")]):t._e()]:t._e(),i("div",{ref:"quickview"})],2)}),[function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"product-card__rating",attrs:{"data-sku":t.body.sku}})}],!1,null,null,null);e.a=y.exports},214:function(t,e,i){(e=i(165)(!1)).push([t.i,"",""]),t.exports=e},222:function(t,e,i){"use strict";i.r(e);i(50),i(5);var s=i(1),o=i(24),a=i(31),n=i.n(a),r=i(70),c=i(82),l=i(65),d=i(190),u=(t={},e="product-card")=>{t.buyText&&(window.productCardBuyText=t.buyText),t.buy&&(window.productCardBuyHtml=t.buy),t.footer&&(window.productCardFooterHtml=t.footer);const i=window.storefront&&window.storefront.getScopedSlots,s=document.querySelectorAll(".".concat(e)),o=[];for(let t=0;t<s.length;t++)if(s[t]){const{productId:e,toRender:i}=s[t].dataset;i&&-1===o.indexOf(e)&&o.push(e)}let a;if(o.length>=4&&o.length<=70&&!t.skipSearchApi){const t=new l.a;a=t.setPageSize(o.length).setProductIds(o).fetch(!0,{timeout:5e3}).then((()=>{const e=t.getItems();for(let t=0;t<2;t++)u(s[t]);return e})).catch((t=>{console.error(t)}))}else a=Promise.resolve();const u=s=>{if(s){const{productId:o,sku:r,toRender:l}=s.dataset;if(l){let l;a.then((t=>{Array.isArray(t)&&(l=t.find((({_id:t})=>t===o)))})).finally((()=>{let a;if(l){if(a=!0,!l.available||!l.visible||!Object(c.a)(l)){const t=s.parentNode&&s.parentNode.parentNode;t&&"LI"===t.tagName&&t.parentNode.appendChild(t)}}else{const t=s.parentNode;if(t&&(l=t.dataset.product,"string"==typeof l))try{l=JSON.parse(l)}catch(t){l=void 0}}((s,o,a,r,c)=>{new n.a({render:n=>n(d.a,{class:"product-card"!==e?e:null,attrs:{"data-product-id":o,"data-sku":a},props:{...t.props,productId:o,product:r,isLoaded:c,transitionClass:null},scopedSlots:"function"==typeof i?i(s,n):void 0})}).$mount(s)})(s,o,r,l,a)}))}}};Object(r.a)(s,{rootMargin:"350px 0px",threshold:0,load:u}).observe()};const p=window.location.pathname.startsWith("/app/"),b=[],h="localhost"===window.location.hostname?50:1,g=(t,e)=>{const i=new Promise((i=>{setTimeout((()=>{const a=window._widgets&&window._widgets[t];if(a&&a.active&&(!a.desktopOnly||!s.isMobile)&&(p?a.enableCheckout:!a.disablePages))return e().then((e=>{"function"==typeof e.default&&e.default(a.options),o.a.emit("widget:".concat(t)),console.log("Widget loaded: ".concat(t))})).catch(console.error).finally(i);i()}),h)}));b.push(i)},{resource:m}=document.body.dataset;p||"products"!==m||g("@ecomplus/widget-product",(()=>Promise.all([i.e(0),i.e(2),i.e(5),i.e(22)]).then(i.bind(null,382)))),Promise.all(b).then((()=>{g("@ecomplus/widget-product-card",(()=>Promise.resolve({default:u}))),"/search"!==window.location.pathname&&"categories"!==m&&"brands"!==m||g("@ecomplus/widget-search-engine",(()=>Promise.all([i.e(15),i.e(33)]).then(i.bind(null,383))));const t=t=>{"function"==typeof window.requestIdleCallback?setTimeout((()=>window.requestIdleCallback(t)),200):setTimeout(t,800)};t((()=>{o.a.emit("load:lcp"),p||(g("@ecomplus/widget-search",(()=>Promise.all([i.e(16),i.e(27)]).then(i.bind(null,396)))),g("@ecomplus/widget-minicart",(()=>i.e(18).then(i.bind(null,391)))),g("@ecomplus/widget-user",(()=>i.e(21).then(i.bind(null,392))))),Promise.all(b).then((()=>{t((()=>o.a.emit("load:components"))),g("@ecomplus/widget-tag-manager",(()=>i.e(26).then(i.bind(null,397)))),g("@ecomplus/widget-analytics",(()=>i.e(24).then(i.bind(null,398)))),g("@ecomplus/widget-fb-pixel",(()=>i.e(31).then(i.bind(null,393)))),g("@ecomplus/widget-gmc-ratings",(()=>i.e(25).then(i.bind(null,384)))),g("@ecomplus/widget-ebit",(()=>i.e(30).then(i.bind(null,385)))),g("@ecomplus/widget-compre-confie",(()=>i.e(29).then(i.bind(null,386))))}))}))}))},70:function(t,e,i){"use strict";const s="undefined"!=typeof document&&document.documentMode,o={rootMargin:"0px",threshold:0,load(t){if("picture"===t.nodeName.toLowerCase()){let e=t.querySelector("img"),i=!1;null===e&&(e=document.createElement("img"),i=!0),s&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),i&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){const e=t.children;let i;for(let t=0;t<=e.length-1;t++)i=e[t].getAttribute("data-src"),i&&(e[t].src=i);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));let e=",";if(t.getAttribute("data-background-delimiter")&&(e=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage=`url('${t.getAttribute("data-background-image").split(e).join("'),url('")}')`;else if(t.getAttribute("data-background-image-set")){const i=t.getAttribute("data-background-image-set").split(e);let s=i[0].substr(0,i[0].indexOf(" "))||i[0];s=-1===s.indexOf("url(")?`url(${s})`:s,1===i.length?t.style.backgroundImage=s:t.setAttribute("style",(t.getAttribute("style")||"")+`background-image: ${s}; background-image: -webkit-image-set(${i}); background-image: image-set(${i})`)}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded(){}};function a(t){t.setAttribute("data-loaded",!0)}const n=t=>"true"===t.getAttribute("data-loaded"),r=(t,e=document)=>t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t);e.a=function(t=".lozad",e={}){const{root:i,rootMargin:s,threshold:c,load:l,loaded:d}=Object.assign({},o,e);let u;"undefined"!=typeof window&&window.IntersectionObserver&&(u=new IntersectionObserver(((t,e)=>(i,s)=>{i.forEach((i=>{(i.intersectionRatio>0||i.isIntersecting)&&(s.unobserve(i.target),n(i.target)||(t(i.target),a(i.target),e(i.target)))}))})(l,d),{root:i,rootMargin:s,threshold:c}));const p=r(t,i);for(let t=0;t<p.length;t++)(b=p[t]).getAttribute("data-placeholder-background")&&(b.style.background=b.getAttribute("data-placeholder-background"));var b;return{observe(){const e=r(t,i);for(let t=0;t<e.length;t++)n(e[t])||(u?u.observe(e[t]):(l(e[t]),a(e[t]),d(e[t])))},triggerLoad(t){n(t)||(l(t),a(t),d(t))},observer:u}}}}]);
//# sourceMappingURL=chunk.d3d66b368e91e31e6202.js.map
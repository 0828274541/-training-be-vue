(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16a17869"],{"0fd9":function(e,t,a){"use strict";a("4b85");var i=a("2b0e"),s=a("d9f7"),n=a("80d2");const r=["sm","md","lg","xl"],o=["start","end","center"];function l(e,t){return r.reduce((a,i)=>(a[e+Object(n["D"])(i)]=t(),a),{})}const c=e=>[...o,"baseline","stretch"].includes(e),u=l("align",()=>({type:String,default:null,validator:c})),d=e=>[...o,"space-between","space-around"].includes(e),h=l("justify",()=>({type:String,default:null,validator:d})),p=e=>[...o,"space-between","space-around","stretch"].includes(e),m=l("alignContent",()=>({type:String,default:null,validator:p})),v={align:Object.keys(u),justify:Object.keys(h),alignContent:Object.keys(m)},f={align:"align",justify:"justify",alignContent:"align-content"};function g(e,t,a){let i=f[e];if(null!=a){if(t){const a=t.replace(e,"");i+="-"+a}return i+="-"+a,i.toLowerCase()}}const b=new Map;t["a"]=i["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...h,alignContent:{type:String,default:null,validator:p},...m},render(e,{props:t,data:a,children:i}){let n="";for(const s in t)n+=String(t[s]);let r=b.get(n);if(!r){let e;for(e in r=[],v)v[e].forEach(a=>{const i=t[a],s=g(e,a,i);s&&r.push(s)});r.push({"no-gutters":t.noGutters,"row--dense":t.dense,["align-"+t.align]:t.align,["justify-"+t.justify]:t.justify,["align-content-"+t.alignContent]:t.alignContent}),b.set(n,r)}return e(t.tag,Object(s["a"])(a,{staticClass:"row",class:r}),i)}})},"322d":function(e,t,a){},"6ca7":function(e,t,a){},8547:function(e,t,a){"use strict";var i=a("2b0e"),s=a("80d2");t["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:s["i"]}}})},aaf8:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{id:"register","fill-height":"",tag:"section"}},[a("v-row",{staticStyle:{"margin-top":"50px"},attrs:{justify:"center"}},[a("v-col",{staticStyle:{"background-color":"lavender"},attrs:{cols:"5"}},[a("v-slide-y-transition",{attrs:{appear:""}},[a("v-card",{staticClass:"pa-3 pa-md-5 mx-auto",staticStyle:{"background-color":"cornsilk"}},[a("pages-heading",{staticClass:"text-center display-3"},[e._v("\n            Register\n          ")]),a("v-row",[a("v-col",{attrs:{cols:"12",md:"12"}},[a("div",{staticClass:"text-center"},[e._l(e.socials,(function(t,i){return a("v-btn",{key:i,staticClass:"my-2 mr-1",attrs:{color:t.iconColor,dark:"",depressed:"",fab:"",small:""}},[a("v-icon",{domProps:{textContent:e._s(t.icon)}})],1)})),a("div",{staticClass:"my-2"}),a("div",{staticClass:"text-center grey--text body-1 font-weight-light"},[e._v("\n                  Or Be Classical\n                ")]),a("form",{ref:"userForm",staticClass:"mt-5",attrs:{id:"app","data-vv-scope":"form-1"}},[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{color:"secondary","error-messages":e.errors.collect("form-1.required"),"data-vv-name":"required",name:"firstname",label:"First Name...","prepend-icon":"mdi-face"},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}}),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{color:"secondary","error-messages":e.errors.collect("form-1.required"),"data-vv-name":"required",name:"lastname",label:"Last Name...","prepend-icon":"mdi-face-woman "},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}}),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{color:"secondary","error-messages":e.errors.collect("form-1.required"),"data-vv-name":"required",name:"username",label:"Username...","prepend-icon":"mdi-account"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"mb-8",attrs:{color:"secondary","error-messages":e.errors.collect("form-1.required"),"data-vv-name":"required",name:"password",label:"Password...","prepend-icon":"mdi-lock-outline"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-checkbox",{attrs:{"input-value":!0,color:"secondary"},scopedSlots:e._u([{key:"label",fn:function(){return[a("span",{staticClass:"text-no-wrap"},[e._v("I agree to the ")]),a("a",{staticClass:"secondary--text ml-6 ml-sm-0",attrs:{href:"#"}},[e._v("\n                        terms and conditions ")]),e._v(".\n                    ")]},proxy:!0}])}),a("pages-btn",{attrs:{color:"success"},on:{click:function(t){return t.preventDefault(),e.validateForm("form-1")}}},[e._v("\n                    Get Started\n                  ")])],1)],2)])],1)],1)],1)],1)],1)],1)},s=[];const{authApi:n}=a("f8c8");var r={name:"PagesRegister",$_veeValidate:{validator:"new"},components:{PagesBtn:()=>a.e("chunk-2d0c4bbd").then(a.bind(null,"3ba9")),PagesHeading:()=>a.e("chunk-2d0b2927").then(a.bind(null,"254b"))},data:()=>({socials:[{href:"#",icon:"mdi-twitter",iconColor:"#1DA1F2"},{href:"#",icon:"mdi-instagram",iconColor:"#ea4c89"},{href:"#",icon:"mdi-facebook",iconColor:"#3B5998"}]}),methods:{validateForm(e){this.$validator.validateAll(e).then(async e=>{if(e){const e=await n.register({firstName:this.$refs.userForm.firstname.value,lastName:this.$refs.userForm.lastname.value,username:this.$refs.userForm.username.value,password:this.$refs.userForm.password.value});200===e.data.code?(this.$notificate.showMessage({content:e.data.message,color:"info"}),this.$router.push("/public/login")):this.$notificate.showMessage({content:e.data.message,color:"info"})}})}}},o=r,l=(a("fb8f"),a("2877")),c=a("6544"),u=a.n(c),d=a("8336"),h=a("b0af"),p=a("ac7c"),m=a("62ad"),v=a("a523"),f=a("132d"),g=a("0fd9"),b=a("0789"),y=a("8654"),C=Object(l["a"])(o,i,s,!1,null,null,null);t["default"]=C.exports;u()(C,{VBtn:d["a"],VCard:h["a"],VCheckbox:p["a"],VCol:m["a"],VContainer:v["a"],VIcon:f["a"],VRow:g["a"],VSlideYTransition:b["f"],VTextField:y["a"]})},ac7c:function(e,t,a){"use strict";a("6ca7"),a("ec29");var i=a("9d26"),s=a("c37a"),n=a("fe09");t["a"]=n["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(e){this.$nextTick(()=>this.inputIndeterminate=e)},inputIndeterminate(e){this.$emit("update:indeterminate",e)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:e,...t}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(i["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...t,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},ec29:function(e,t,a){},fb8f:function(e,t,a){"use strict";a("322d")},fe09:function(e,t,a){"use strict";var i=a("c37a"),s=a("5607"),n=a("2b0e"),r=n["a"].extend({name:"rippleable",directives:{ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(e={}){return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),o=a("8547"),l=a("58df");function c(e){e.preventDefault()}t["a"]=Object(l["a"])(i["a"],r,o["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const e=this.value,t=this.internalValue;return this.isMultiple?!!Array.isArray(t)&&t.some(t=>this.valueComparator(t,e)):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,t):Boolean(t):this.valueComparator(t,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel(){const e=i["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:c},e):e},genInput(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:c},ref:"input"})},onBlur(){this.isFocused=!1},onClick(e){this.onChange(),this.$emit("click",e)},onChange(){if(!this.isInteractive)return;const e=this.value;let t=this.internalValue;if(this.isMultiple){Array.isArray(t)||(t=[]);const a=t.length;t=t.filter(t=>!this.valueComparator(t,e)),t.length===a&&t.push(e)}else t=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(t,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(t,e)?null:e:!t;this.validate(!0,t),this.internalValue=t,this.hasColor=t},onFocus(){this.isFocused=!0},onKeydown(e){}}})}}]);
//# sourceMappingURL=chunk-16a17869.6fffab5f.js.map
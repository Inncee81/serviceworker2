YUI.add("moodle-tool_capability-search",function(e,t){var n=function(){n.superclass.constructor.apply(this,arguments)};n.prototype={form:null,select:null,selectoptions:{},input:null,button:null,lastsearch:null,initializer:function(){this.form=e.one("#capability-overview-form"),this.select=this.form.one("select[data-search=capability]"),this.select.setStyle("minWidth",this.select.get("offsetWidth")),this.select.get("options").each(function(e){var t=e.get("value");this.selectoptions[t]=e},this),this.button=this.form.all("input[type=submit]"),this.lastsearch=this.form.one("input[name=search]");var t=e.Node.create('<div id="capabilitysearchui" data-fieldtype="text"></div>'),n=e.Node.create('<label for="capabilitysearch">'+this.get("strsearch")+"</label>");this.input=e.Node.create('<input type="text" id="capabilitysearch" />'),t.append(n).append(this.input),this.select.insert(t,"before"),this.input.on("keyup",this.typed,this),this.select.on("change",this.validate,this),this.lastsearch&&(this.input.set("value",this.lastsearch.get("value")),this.typed(),this.select.one("option[selected]")&&this.select.set("scrollTop",this.select.one("option[selected]").get("getX"))),this.validate()},validate:function(){this.button.set("disabled",this.select.get("value")==="")},typed:function(){var e=this.input.get("value"),t=0,n=null,r;this.lastsearch&&this.lastsearch.set("value",e),this.select.all("option").remove();for(r in this.selectoptions)r.indexOf(e)>=0&&(t++,n=this.selectoptions[r],this.select.append(this.selectoptions[r]));t===0?this.input.addClass("error"):(this.input.removeClass("error"),t===1&&n.set("selected",!0)),this.validate()}},e.extend(n,e.Base,n.prototype,{NAME:"tool_capability-search",ATTRS:{strsearch:{}}}),M.tool_capability=M.tool_capability||{},M.tool_capability.init_capability_search=function(e){new n(e)}},"@VERSION@",{requires:["base","node"]});

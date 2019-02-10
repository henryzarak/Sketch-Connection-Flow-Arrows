var that=this;function __skpm_run(e,t){that.context=t;var r=function(e){var t={};function r(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(a,i,function(t){return e[t]}.bind(null,i));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./src/script.js")}({"./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! exports provided: default, updateArrows, cleanArrows, settings */function(e,r,a){"use strict";a.r(r),a.d(r,"updateArrows",function(){return S}),a.d(r,"cleanArrows",function(){return w}),a.d(r,"settings",function(){return y});var i,n=a(/*! sketch */"sketch"),o=a.n(n),s=(a(/*! util */"util").toArray,a(/*! sketch/ui */"sketch/ui")),l=a(/*! sketch/dom */"sketch/dom").Group,d="flowArrows",c=o.a.fromNative(t.document),u=(c.selectedPage,t.document.documentData()),f=t.command.valueForKey_onLayer_forPluginIdentifier("arrowConnections",u,d),m=u.currentPage().currentArtboard()||u.currentPage(),h=v(),I=a(/*! sketch/settings */"sketch/settings"),g=I.settingForKey("arrowDirection");function S(e){var t=v();if(t.length>0){for(var r=t.length,a=0;a<r;a++)b(t[a].firstObject,t[a].secondObject,t[a].direction,t[a].line,a);e.command.setValue_forKey_onLayer_forPluginIdentifier(h,"arrowConnections",u,d),o.a.UI.message("All arrows are updated 🚀")}else o.a.UI.message("There is nothing to update");log(h)}function w(e){var t=COSAlertWindow.new();t.setMessageText("Would you like to delete all the arrows?"),t.addButtonWithTitle("Delete Arrows"),t.addButtonWithTitle("Cancel");var r=NSView.alloc().initWithFrame(NSMakeRect(0,0,300,40));t.addAccessoryView(r);var a=NSTextField.alloc().initWithFrame(NSMakeRect(-1,0,330,40));if(a.setStringValue("ℹ️ You can select an artboard to delet all the arrows only from selected one"),a.setSelectable(!1),a.setDrawsBackground(!1),a.setBezeled(!1),r.addSubview(a),t.runModal()==NSAlertFirstButtonReturn){var i,n,s=e.selection;if(1==s.count()&&"MSArtboardGroup"==s[0].class()){var l=v();if(l.length>0){for(var f=l.length,m=0;m<f;m++)i=c.getLayerWithID(l[m].firstObject),n=c.getLayerWithID(l[m].secondObject),i.sketchObject.parentArtboard().objectID()==s[0].objectID()&&n.sketchObject.parentArtboard().objectID()==s[0].objectID()&&(k(l[m].line),h=W(m));e.command.setValue_forKey_onLayer_forPluginIdentifier(h,"arrowConnections",u,d),o.a.UI.message("All arrows from selected artboard are deleted")}else o.a.UI.message("There is nothing to delete")}else if(h.length>0){for(var I=0;I<h.length;I++)k(h[I].line);e.command.setValue_forKey_onLayer_forPluginIdentifier(null,"arrowConnections",u,d),o.a.UI.message("All arrows are deleted")}else o.a.UI.message("There is nothing to delete")}}function y(e){var t=COSAlertWindow.new();t.setMessageText("Arrow Plugin Settings"),t.addButtonWithTitle("Update Settings"),t.addButtonWithTitle("Cancel");var r=NSView.alloc().initWithFrame(NSMakeRect(0,0,300,140));t.addAccessoryView(r),(a=NSTextField.alloc().initWithFrame(NSMakeRect(-1,123,330,20))).setStringValue("Arrow Direction"),a.setSelectable(!1),a.setDrawsBackground(!1),a.setBezeled(!1),r.addSubview(a);var a,i=NSPopUpButton.alloc().initWithFrame(NSMakeRect(-2,100,300,20));!function(e){var t="Auto";I.settingForKey("arrowDirection")?("Auto"==(t=I.settingForKey("arrowDirection"))&&(e.addItemWithTitle("Auto"),e.lastItem().setState(1),e.addItemWithTitle("Right"),e.lastItem().setState(0),e.addItemWithTitle("Down"),e.lastItem().setState(0),e.addItemWithTitle("Left"),e.lastItem().setState(0),e.addItemWithTitle("Up"),e.lastItem().setState(0)),"Right"==t&&(e.addItemWithTitle("Right"),e.lastItem().setState(1),e.addItemWithTitle("Down"),e.lastItem().setState(0),e.addItemWithTitle("Left"),e.lastItem().setState(0),e.addItemWithTitle("Up"),e.lastItem().setState(0),e.addItemWithTitle("Auto"),e.lastItem().setState(0)),"Down"==t&&(e.addItemWithTitle("Down"),e.lastItem().setState(1),e.addItemWithTitle("Left"),e.lastItem().setState(0),e.addItemWithTitle("Up"),e.lastItem().setState(0),e.addItemWithTitle("Auto"),e.lastItem().setState(0),e.addItemWithTitle("Right"),e.lastItem().setState(0)),"Left"==t&&(e.addItemWithTitle("Left"),e.lastItem().setState(1),e.addItemWithTitle("Up"),e.lastItem().setState(0),e.addItemWithTitle("Auto"),e.lastItem().setState(0),e.addItemWithTitle("Right"),e.lastItem().setState(0),e.addItemWithTitle("Down"),e.lastItem().setState(0)),"Up"==t&&(e.addItemWithTitle("Up"),e.lastItem().setState(1),e.addItemWithTitle("Auto"),e.lastItem().setState(0),e.addItemWithTitle("Right"),e.lastItem().setState(0),e.addItemWithTitle("Down"),e.lastItem().setState(0),e.addItemWithTitle("Left"),e.lastItem().setState(0))):(e.addItemWithTitle("Auto"),e.addItemWithTitle("Right"),e.addItemWithTitle("Down"),e.addItemWithTitle("Left"),e.addItemWithTitle("Up"))}(i),r.addSubview(i),(a=NSTextField.alloc().initWithFrame(NSMakeRect(-1,56,280,40))).setStringValue("ℹ️ Auto mode will draw arrow based on location of the second object"),a.setSelectable(!1),a.setDrawsBackground(!1),a.setBezeled(!1),r.addSubview(a),t.runModal()==NSAlertFirstButtonReturn&&(I.setSettingForKey("arrowDirection",t.views()[0].subviews()[1].title()),s.message("Settings are updated 🚀"))}function b(e,t,r,a,i){var n=c.getLayerWithID(e),o=c.getLayerWithID(t);k(a),h=W(i),n&&o&&p(e,t,r)}function p(e,t,r){var a,n=function(e,t,r){var a,i,n,o,s,l,d=c.getLayerWithID(e),u=c.getLayerWithID(t),f=NSBezierPath.bezierPath();"Up"==r&&(a=d.frame.x+d.frame.width/2,i=d.frame.y,n=u.frame.x+u.frame.width/2,o=u.frame.y+u.frame.height,s=(a+n)/2,l=(i+o)/2,f.moveToPoint(NSMakePoint(a,i)),f.lineToPoint(NSMakePoint(a,l)),f.lineToPoint(NSMakePoint(n,l)),f.lineToPoint(NSMakePoint(n,o)));"Right"==r&&(a=d.frame.x+d.frame.width,i=d.frame.y+d.frame.height/2,n=u.frame.x,o=u.frame.y+u.frame.height/2,s=(a+n)/2,l=(i+o)/2,f.moveToPoint(NSMakePoint(a,i)),f.lineToPoint(NSMakePoint(s,i)),f.lineToPoint(NSMakePoint(s,o)),f.lineToPoint(NSMakePoint(n,o)));"Down"==r&&(a=d.frame.x+d.frame.width/2,i=d.frame.y+d.frame.height,n=u.frame.x+u.frame.width/2,o=u.frame.y,s=(a+n)/2,l=(i+o)/2,f.moveToPoint(NSMakePoint(a,i)),f.lineToPoint(NSMakePoint(a,l)),f.lineToPoint(NSMakePoint(n,l)),f.lineToPoint(NSMakePoint(n,o)));"Left"==r&&(a=d.frame.x,i=d.frame.y+d.frame.height/2,n=u.frame.x+u.frame.width,o=u.frame.y+u.frame.height/2,s=(a+n)/2,l=(i+o)/2,f.moveToPoint(NSMakePoint(a,i)),f.lineToPoint(NSMakePoint(s,i)),f.lineToPoint(NSMakePoint(s,o)),f.lineToPoint(NSMakePoint(n,o)));var m=MSShapeGroup.layerWithPath(MSPath.pathWithBezierPath(f)),h=m.layers().firstObject().points();h[1].cornerRadius=20,h[2].cornerRadius=20,m.setName("Arrow");var I=m.style().addStylePartOfType(1);return I.color=MSColor.colorWithRGBADictionary({r:.89,g:.89,b:.89,a:1}),I.thickness=2,m.style().endMarkerType=2,m}(e,t,a="Auto"==r?function(e,t){var r,a=c.getLayerWithID(e),i=c.getLayerWithID(t),n=a.frame.x+a.frame.width/2,o=a.frame.y+a.frame.height/2,s=i.frame.x+i.frame.width/2,l=i.frame.y+i.frame.height/2,d=n-s,u=o-l,f=Math.abs(d),m=Math.abs(u);r=s>n?l>o?d>u?"Down":"Right":f>m?"Right":"Up":l>o?f>m?"Left":"Down":d>u?"Left":"Up";return r}(e,t):r);!function(e){if(i=T())i.addLayers([e]);else{var t=new l({parent:m,name:"Arrows",locked:!0,layers:[e]});t.moveToBack()}}(n);var o={firstObject:e,secondObject:t,direction:a,line:n.objectID()};h.push(o)}function T(){for(var e=0;e<m.layers().count();e++)"Arrows"==m.layers()[e].name()&&(i=m.layers()[e]);return i}function v(){var e=[],r=[];if(f){r=t.command.valueForKey_onLayer_forPluginIdentifier("arrowConnections",u,d);for(var a=0;a<r.length;a++)e.push(r[a])}return e}function P(e,r){var a=null;if(f)for(var i=t.command.valueForKey_onLayer_forPluginIdentifier("arrowConnections",u,d),n=0;n<i.count();n++)e!=i[n].firstObject&&e!=i[n].secondObject||r!=i[n].firstObject&&r!=i[n].secondObject||(a=n);return a}function W(e){var r=[];if(f)for(var a=t.command.valueForKey_onLayer_forPluginIdentifier("arrowConnections",u,d),i=0;i<a.length;i++)i!=e&&r.push(a[i]);return r}function k(e){var t,r=c.getLayerWithID(e);r&&(t=r.parent,r.remove(),0==t.layers.length&&t.remove())}r.default=function(e){i=T();var t=e.selection;if(t.count()>1){for(var r=t.firstObject(),a=0;a<t.count();a++)if(t[a].objectID()!=r.objectID()){var n=P(t[a].objectID(),r.objectID());null!=n?(b(f[n].firstObject,f[n].secondObject,g,f[n].line,n),e.command.setValue_forKey_onLayer_forPluginIdentifier(h,"arrowConnections",u,d),o.a.UI.message("Current connection is updated 🚀")):(p(r.objectID(),t[a].objectID(),g),e.command.setValue_forKey_onLayer_forPluginIdentifier(h,"arrowConnections",u,d),o.a.UI.message("New connection is created 🚀"))}}else o.a.UI.message("Please select more than two layers")}},sketch:
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */function(e,t){e.exports=require("sketch")},"sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */function(e,t){e.exports=require("sketch/dom")},"sketch/settings":
/*!**********************************!*\
  !*** external "sketch/settings" ***!
  \**********************************/
/*! no static exports found */function(e,t){e.exports=require("sketch/settings")},"sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */function(e,t){e.exports=require("sketch/ui")},util:
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */function(e,t){e.exports=require("util")}});"default"===e&&"function"==typeof r?r(t):r[e](t)}that.onRun=__skpm_run.bind(this,"default"),that.updateArrows=__skpm_run.bind(this,"updateArrows"),that.cleanArrows=__skpm_run.bind(this,"cleanArrows"),that.settings=__skpm_run.bind(this,"settings");
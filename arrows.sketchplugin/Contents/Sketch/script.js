var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! exports provided: default, updateArrows, cleanArrows, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateArrows", function() { return updateArrows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanArrows", function() { return cleanArrows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);


var _require = __webpack_require__(/*! util */ "util"),
    toArray = _require.toArray; //
//  Variables
//


var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");

var Group = __webpack_require__(/*! sketch/dom */ "sketch/dom").Group;

var pluginKey = "flowArrows"; // TODO: Need to refactor

var document = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.fromNative(context.document);
var page = document.selectedPage;
var docData = context.document.documentData(); // TODO: Need to refactor

var pluginData = context.command.valueForKey_onLayer_forPluginIdentifier("arrowConnections", docData, pluginKey); // TODO: Need to refactor

var currentParentGroup = docData.currentPage().currentArtboard() || docData.currentPage(); // TODO: Need to refactor

var newConnectionsData = getConnectionsData();
var currentGroup; // Settings

var Settings = __webpack_require__(/*! sketch/settings */ "sketch/settings");

var arrowDirectionSetting;

if (Settings.settingForKey("arrowDirection")) {
  arrowDirectionSetting = Settings.settingForKey('arrowDirection');
} else {
  arrowDirectionSetting = "Auto";
} //
//  Default Function
//


/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  // Check if we have "Arrows" group
  // TODO: Need to refactor
  currentGroup = checkForArrowGroup();
  var selection = context.selection;

  if (selection.count() > 1) {
    // When user selected more than one layer
    // Need to define source object first
    // TODO: There is a problem with the source object. Need to select it based on the direction
    var sourceObject = selection.firstObject();

    for (var g = 0; g < selection.count(); g++) {
      if (selection[g].objectID() != sourceObject.objectID()) {
        var connectionIndex = findConnectionData(selection[g].objectID(), sourceObject.objectID());

        if (connectionIndex != null) {
          // Because this is creating flow, we need to take the direction from user settings
          updateArrow(pluginData[connectionIndex].firstObject, pluginData[connectionIndex].secondObject, arrowDirectionSetting, pluginData[connectionIndex].line, connectionIndex);
          context.command.setValue_forKey_onLayer_forPluginIdentifier(newConnectionsData, "arrowConnections", docData, pluginKey);
          sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("Current connection is updated 🚀");
        } else {
          // There is no connection with this two objects in our database
          createArrow(sourceObject.objectID(), selection[g].objectID(), arrowDirectionSetting);
          context.command.setValue_forKey_onLayer_forPluginIdentifier(newConnectionsData, "arrowConnections", docData, pluginKey);
          sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("New connection is created 🚀");
        }
      }
    }
  } else {
    // When user didn't select anything
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("Please select more than two layers");
  }
}); //
// Plugin Commands
//

function updateArrows(context) {
  // TODO: Need to show amount of updated arrows and deleted ones
  var selection = context.selection;
  var connections = getConnectionsData();
  var firstObjectArtboard;
  var secondObjectArtboard;

  if (connections.length > 0) {
    // We have connections in database
    var updateArrowsCounter = connections.length;

    for (var i = 0; i < updateArrowsCounter; i++) {
      // Need to check if the element is selected globally or from the artboard
      firstObjectArtboard = document.getLayerWithID(connections[i].firstObject);
      firstObjectArtboard = firstObjectArtboard.sketchObject.parentArtboard().objectID();
      secondObjectArtboard = document.getLayerWithID(connections[i].secondObject);
      secondObjectArtboard = secondObjectArtboard.sketchObject.parentArtboard().objectID();

      if (selection.count() == 1 && selection[0].class() == "MSArtboardGroup") {
        // Need to go through each connection and update arrow position for specific artboard
        if (firstObjectArtboard == selection[0].objectID()) {
          if (secondObjectArtboard == selection[0].objectID()) {
            updateArrow(connections[i].firstObject, connections[i].secondObject, connections[i].direction, connections[i].line, i);
          } else {
            newConnectionsData.push(connections[i]);
          }
        } else {
          // If not just saving it
          newConnectionsData.push(connections[i]);
        }
      } else {
        // Need to go through each connection and update arrow position without artboards
        // Need to check if current object don't have the parrent
        updateArrow(connections[i].firstObject, connections[i].secondObject, connections[i].direction, connections[i].line, i);
      }
    }

    context.command.setValue_forKey_onLayer_forPluginIdentifier(newConnectionsData, "arrowConnections", docData, pluginKey);
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("All arrows are updated 🚀");
  } else {
    // We don't have any connections to update
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("There is nothing to update");
  } // log(newConnectionsData)

}
function cleanArrows(context) {
  var selection = context.selection;
  var selectionMessage;

  for (var g = 0; g < selection.count(); g++) {
    // If user selected two objects
    if (selection.count() == 1 && selection[0].class() == "MSArtboardGroup") {
      selectionMessage;
    }
  }

  var alert = COSAlertWindow.new(); // Title

  alert.setMessageText("Would you like to delete all the arrows from " + selectionMessage); // Creating dialog buttons

  alert.addButtonWithTitle("Delete Arrows");
  alert.addButtonWithTitle("Cancel"); // Creating the view

  var viewWidth = 300;
  var viewHeight = 40;
  var view = NSView.alloc().initWithFrame(NSMakeRect(0, 0, viewWidth, viewHeight));
  alert.addAccessoryView(view); // Label

  var infoLabel = NSTextField.alloc().initWithFrame(NSMakeRect(-1, viewHeight - 40, 330, 40));
  infoLabel.setStringValue("ℹ️ You can select layers, artboards to delete all the arrows from selected one only");
  infoLabel.setSelectable(false);
  infoLabel.setDrawsBackground(false);
  infoLabel.setBezeled(false);
  view.addSubview(infoLabel); // Show modal and get the results

  var modalResponse = alert.runModal();

  if (modalResponse == NSAlertFirstButtonReturn) {
    var _selection = context.selection;
    var firstObject, secondObject;

    if (_selection.count() == 1 && _selection[0].class() == "MSArtboardGroup") {
      // Need to delete all the arrows only from selected artboard
      var connections = getConnectionsData();

      if (connections.length > 0) {
        // We have connections in database
        var updateArrowsCounter = connections.length;

        for (var i = 0; i < updateArrowsCounter; i++) {
          // Need to go through each connection and check if it placed on selected artboard
          firstObject = document.getLayerWithID(connections[i].firstObject);
          secondObject = document.getLayerWithID(connections[i].secondObject);

          if (firstObject.sketchObject.parentArtboard().objectID() == _selection[0].objectID()) {
            if (secondObject.sketchObject.parentArtboard().objectID() == _selection[0].objectID()) {
              deleteLine(connections[i].line);
              newConnectionsData = deleteConnectionFromData(i);
            }
          }
        }

        context.command.setValue_forKey_onLayer_forPluginIdentifier(newConnectionsData, "arrowConnections", docData, pluginKey);
        sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("All arrows from selected artboard are deleted");
      } else {
        // We don't have any connections to update
        sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("There is nothing to delete");
      }
    } else {
      // Need to delete all the lines
      if (newConnectionsData.length > 0) {
        // We have connections in database
        for (var _i = 0; _i < newConnectionsData.length; _i++) {
          // Need to go through each connection and update arrow position
          deleteLine(newConnectionsData[_i].line);
        }

        context.command.setValue_forKey_onLayer_forPluginIdentifier(null, "arrowConnections", docData, pluginKey);
        sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("All arrows are deleted");
      } else {
        // We don't have any connections to update
        sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("There is nothing to delete");
      }
    }
  }
}
function settings(context) {
  var alert = COSAlertWindow.new(); // Title

  alert.setMessageText("Arrow Plugin Settings"); // Creating dialog buttons

  alert.addButtonWithTitle("Update Settings");
  alert.addButtonWithTitle("Cancel"); // Creating the view

  var viewWidth = 300;
  var viewHeight = 260;
  var view = NSView.alloc().initWithFrame(NSMakeRect(0, 0, viewWidth, viewHeight));
  alert.addAccessoryView(view); // Label: Arrow Direction

  var infoLabel = NSTextField.alloc().initWithFrame(NSMakeRect(-1, viewHeight - 17, 330, 20));
  infoLabel.setStringValue("Arrow Direction");
  infoLabel.setSelectable(false);
  infoLabel.setDrawsBackground(false);
  infoLabel.setBezeled(false);
  view.addSubview(infoLabel); // Select: Arrow Direction

  var arrowDirectionField = NSPopUpButton.alloc().initWithFrame(NSMakeRect(-2, viewHeight - 40, 300, 20)); // Add select options and mark selected the active one

  setActiveDirectionSetting(arrowDirectionField);
  view.addSubview(arrowDirectionField); // Label: Auto Direction Desctiption

  var infoLabel = NSTextField.alloc().initWithFrame(NSMakeRect(-1, viewHeight - 84, 280, 40));
  infoLabel.setStringValue("ℹ️ Auto mode will draw arrow based on location of the second object");
  infoLabel.setSelectable(false);
  infoLabel.setDrawsBackground(false);
  infoLabel.setBezeled(false);
  view.addSubview(infoLabel); // Label: Arrow Spacing

  var infoLabel = NSTextField.alloc().initWithFrame(NSMakeRect(-1, viewHeight - 120, 330, 20));
  infoLabel.setStringValue("Arrow Spacing");
  infoLabel.setSelectable(false);
  infoLabel.setDrawsBackground(false);
  infoLabel.setBezeled(false);
  view.addSubview(infoLabel); // Select: Arrow Spacing

  var arrowSpacingField = NSPopUpButton.alloc().initWithFrame(NSMakeRect(-2, viewHeight - 143, 300, 20)); // Add select options and mark selected the active one

  setActiveSpacingSetting(arrowSpacingField);
  view.addSubview(arrowSpacingField); // Label: Arrow Spacing Desctiption

  var infoLabel = NSTextField.alloc().initWithFrame(NSMakeRect(-1, viewHeight - 187, 280, 40));
  infoLabel.setStringValue("ℹ️ If you will select spacing, the second layer position will be moved closer");
  infoLabel.setSelectable(false);
  infoLabel.setDrawsBackground(false);
  infoLabel.setBezeled(false);
  view.addSubview(infoLabel); // Label: Arrow Description

  var infoLabel = NSTextField.alloc().initWithFrame(NSMakeRect(-1, viewHeight - 240, 280, 40));
  infoLabel.setStringValue("Made by Farid Sabitov and with the support of EPAM.com ❤️");
  infoLabel.setSelectable(false);
  infoLabel.setDrawsBackground(false);
  infoLabel.setBezeled(false);
  view.addSubview(infoLabel); // Show modal and get the results

  var modalResponse = alert.runModal();

  if (modalResponse == NSAlertFirstButtonReturn) {
    // When user clicks on "Update Settings"
    // Need to save all this results into the Plugin Settings
    Settings.setSettingForKey("arrowDirection", alert.views()[0].subviews()[1].title());
    Settings.setSettingForKey("arrowSpacing", alert.views()[0].subviews()[4].title());
    UI.message("Settings are updated 🚀");
  }
} //
// Functions
//

function updateArrow(firstObjectID, secondObjectID, direction, lineID, connectionIndex) {
  // There might be a situation, when user deleted current group or current group stays on another artboard => In that case need to create another group
  // Need to check if we have the layers with such IDs
  var firstObject = document.getLayerWithID(firstObjectID);
  var secondObject = document.getLayerWithID(secondObjectID); // Need to delete data first, because we will have a new line

  deleteLine(lineID);
  newConnectionsData = deleteConnectionFromData(connectionIndex);

  if (firstObject && secondObject) {
    // If we have all the objects, we can recreate the line
    createArrow(firstObjectID, secondObjectID, direction);
  }
}

function createArrow(firstObjectID, secondObjectID, direction) {
  // Process of creating new connection
  var localDirection, sourceObjectID, childObjectID;

  if (direction == "Auto") {
    // If direction is auto, we need to specify direction ourselves
    localDirection = getDirection(firstObjectID, secondObjectID);
  } else {
    localDirection = direction;
  }

  sourceObjectID = defineSourceObject(firstObjectID, secondObjectID, localDirection);

  if (sourceObjectID == firstObjectID) {
    childObjectID = secondObjectID;
  } else {
    childObjectID = firstObjectID;
  } // TODO: Need to send real object


  updateSpacing(sourceObjectID, childObjectID, localDirection);
  var line = drawLine(sourceObjectID, childObjectID, localDirection);
  addToArrowsGroup(line); // Storage for current connection

  var connection = {
    firstObject: sourceObjectID,
    secondObject: childObjectID,
    direction: localDirection,
    line: line.objectID() // Need to save this data to the global array

  };
  newConnectionsData.push(connection);
}

function checkForArrowGroup() {
  // Checking all the groups that we have
  for (var i = 0; i < currentParentGroup.layers().count(); i++) {
    if (currentParentGroup.layers()[i].name() == "Arrows") {
      // If we already have "Arrow" group we need to save it's folder
      currentGroup = currentParentGroup.layers()[i];
    }
  }

  return currentGroup; // TODO: Need to refactor. Can be used global variable here
}

function getDirection(firstObjectID, secondObjectID) {
  // Get direction from the source object
  var firstObject = document.getLayerWithID(firstObjectID);
  var secondObject = document.getLayerWithID(secondObjectID);
  var firstObjectMidX = firstObject.frame.x + firstObject.frame.width / 2;
  var firstObjectMidY = firstObject.frame.y + firstObject.frame.height / 2;
  var secondObjectMidX = secondObject.frame.x + secondObject.frame.width / 2;
  var secondObjectMidY = secondObject.frame.y + secondObject.frame.height / 2;
  var diffX = firstObjectMidX - secondObjectMidX;
  var diffY = firstObjectMidY - secondObjectMidY;
  var absDiffX = Math.abs(diffX);
  var absDiffY = Math.abs(diffY);
  var direction;

  if (secondObjectMidX > firstObjectMidX) {
    // Right Half
    if (secondObjectMidY > firstObjectMidY) {
      // Bottom quarter
      if (diffX > diffY) {
        direction = "Down";
      } else {
        direction = "Right";
      }
    } else {
      // Top quarter
      if (absDiffX > absDiffY) {
        direction = "Right";
      } else {
        direction = "Up";
      }
    }
  } else {
    // Left Half
    if (secondObjectMidY > firstObjectMidY) {
      // Bottom quarter
      if (absDiffX > absDiffY) {
        direction = "Left";
      } else {
        direction = "Down";
      }
    } else {
      // Top quarter
      if (diffX > diffY) {
        direction = "Left";
      } else {
        direction = "Up";
      }
    }
  }

  return direction;
}

function drawLine(firstObjectID, secondObjectID, direction) {
  var firstLayerPosX, firstLayerPosY, secondLayerPosX, secondLayerPosY, middlePosX, middlePosY;
  var firstObject = document.getLayerWithID(firstObjectID);
  var secondObject = document.getLayerWithID(secondObjectID); // Drawing a line

  var path = NSBezierPath.bezierPath(); // Based on direction, we need to specify connection points

  if (direction == "Up") {
    // First Layer Position Start Point Position
    firstLayerPosX = firstObject.frame.x + firstObject.frame.width / 2;
    firstLayerPosY = firstObject.frame.y; // Second Layer Position End Point Position

    secondLayerPosX = secondObject.frame.x + secondObject.frame.width / 2;
    secondLayerPosY = secondObject.frame.y + secondObject.frame.height; // Middle Points

    middlePosX = (firstLayerPosX + secondLayerPosX) / 2;
    middlePosY = (firstLayerPosY + secondLayerPosY) / 2; // Connecting points

    path.moveToPoint(NSMakePoint(firstLayerPosX, firstLayerPosY));
    path.lineToPoint(NSMakePoint(firstLayerPosX, middlePosY));
    path.lineToPoint(NSMakePoint(secondLayerPosX, middlePosY));
    path.lineToPoint(NSMakePoint(secondLayerPosX, secondLayerPosY));
  }

  if (direction == "Right") {
    // First Layer Position Start Point Position
    firstLayerPosX = firstObject.frame.x + firstObject.frame.width;
    firstLayerPosY = firstObject.frame.y + firstObject.frame.height / 2; // Second Layer Position End Point Position

    secondLayerPosX = secondObject.frame.x;
    secondLayerPosY = secondObject.frame.y + secondObject.frame.height / 2; // Middle Points

    middlePosX = (firstLayerPosX + secondLayerPosX) / 2;
    middlePosY = (firstLayerPosY + secondLayerPosY) / 2; // Connecting points

    path.moveToPoint(NSMakePoint(firstLayerPosX, firstLayerPosY));
    path.lineToPoint(NSMakePoint(middlePosX, firstLayerPosY));
    path.lineToPoint(NSMakePoint(middlePosX, secondLayerPosY));
    path.lineToPoint(NSMakePoint(secondLayerPosX, secondLayerPosY));
  }

  if (direction == "Down") {
    // First Layer Position Start Point Position
    firstLayerPosX = firstObject.frame.x + firstObject.frame.width / 2;
    firstLayerPosY = firstObject.frame.y + firstObject.frame.height; // Second Layer Position End Point Position

    secondLayerPosX = secondObject.frame.x + secondObject.frame.width / 2;
    secondLayerPosY = secondObject.frame.y; // Middle Points

    middlePosX = (firstLayerPosX + secondLayerPosX) / 2;
    middlePosY = (firstLayerPosY + secondLayerPosY) / 2; // Connecting points

    path.moveToPoint(NSMakePoint(firstLayerPosX, firstLayerPosY));
    path.lineToPoint(NSMakePoint(firstLayerPosX, middlePosY));
    path.lineToPoint(NSMakePoint(secondLayerPosX, middlePosY));
    path.lineToPoint(NSMakePoint(secondLayerPosX, secondLayerPosY));
  }

  if (direction == "Left") {
    // First Layer Position Start Point Position
    firstLayerPosX = firstObject.frame.x;
    firstLayerPosY = firstObject.frame.y + firstObject.frame.height / 2; // Second Layer Position End Point Position

    secondLayerPosX = secondObject.frame.x + secondObject.frame.width;
    secondLayerPosY = secondObject.frame.y + secondObject.frame.height / 2; // Middle Points

    middlePosX = (firstLayerPosX + secondLayerPosX) / 2;
    middlePosY = (firstLayerPosY + secondLayerPosY) / 2; // Connecting points

    path.moveToPoint(NSMakePoint(firstLayerPosX, firstLayerPosY));
    path.lineToPoint(NSMakePoint(middlePosX, firstLayerPosY));
    path.lineToPoint(NSMakePoint(middlePosX, secondLayerPosY));
    path.lineToPoint(NSMakePoint(secondLayerPosX, secondLayerPosY));
  } //TODO: Provide a separate file with all the stylings
  // Painting the line


  var line = MSShapeGroup.layerWithPath(MSPath.pathWithBezierPath(path)); // Making middle points rounded

  var points = line.layers().firstObject().points();
  points[1].cornerRadius = 20;
  points[2].cornerRadius = 20; // Providing Settings for the arrow

  line.setName("Arrow"); // Styling Border Style

  var border = line.style().addStylePartOfType(1);
  border.color = MSColor.colorWithRGBADictionary({
    r: 0.89,
    g: 0.89,
    b: 0.89,
    a: 1
  });
  border.thickness = 2;
  line.style().endMarkerType = 2;
  return line;
}

function addToArrowsGroup(line) {
  currentGroup = checkForArrowGroup();

  if (currentGroup) {
    // If we already have group
    currentGroup.addLayers([line]);
  } else {
    // If we don't have a group
    // Creating a group
    var group = new Group({
      parent: currentParentGroup,
      name: 'Arrows',
      locked: true,
      layers: [line]
    }); // Moving this group to the bottom of the page

    group.moveToBack();
  }
}

function getConnectionsData() {
  var dataArray = [];
  var pluginDataConnections = [];

  if (pluginData) {
    pluginDataConnections = context.command.valueForKey_onLayer_forPluginIdentifier("arrowConnections", docData, pluginKey);

    for (var i = 0; i < pluginDataConnections.length; i++) {
      dataArray.push(pluginDataConnections[i]);
    }
  }

  return dataArray;
}

function findConnectionData(firstObjectID, secondObjectID) {
  var arrayNumber = null;

  if (pluginData) {
    // If we have database, need to check for connections
    var connections = context.command.valueForKey_onLayer_forPluginIdentifier("arrowConnections", docData, pluginKey);

    for (var y = 0; y < connections.count(); y++) {
      if (firstObjectID == connections[y].firstObject || firstObjectID == connections[y].secondObject) {
        // if we found that we have this object in connection database already
        if (secondObjectID == connections[y].firstObject || secondObjectID == connections[y].secondObject) {
          // if we found that we have this object in connection database already
          arrayNumber = y;
        }
      }
    }
  }

  return arrayNumber;
}

function setActiveDirectionSetting(arrowDirectionField) {
  var currentDirection = "Auto";

  if (Settings.settingForKey("arrowDirection")) {
    // if there is data in settings
    currentDirection = Settings.settingForKey("arrowDirection");

    if (currentDirection == "Auto") {
      arrowDirectionField.addItemWithTitle("Auto");
      arrowDirectionField.lastItem().setState(1);
      arrowDirectionField.addItemWithTitle("Right");
      arrowDirectionField.lastItem().setState(0);
      arrowDirectionField.addItemWithTitle("Down");
      arrowDirectionField.lastItem().setState(0);
      arrowDirectionField.addItemWithTitle("Left");
      arrowDirectionField.lastItem().setState(0);
      arrowDirectionField.addItemWithTitle("Up");
      arrowDirectionField.lastItem().setState(0);
    }

    if (currentDirection == "Right") {
      arrowDirectionField.addItemWithTitle("Right");
      arrowDirectionField.lastItem().setState(1);
      arrowDirectionField.addItemWithTitle("Down");
      arrowDirectionField.lastItem().setState(0);
      arrowDirectionField.addItemWithTitle("Left");
      arrowDirectionField.lastItem().setState(0);
      arrowDirectionField.addItemWithTitle("Up");
      arrowDirectionField.lastItem().setState(0);
      arrowDirectionField.addItemWithTitle("Auto");
      arrowDirectionField.lastItem().setState(0);
    }

    if (currentDirection == "Down") {
      arrowDirectionField.addItemWithTitle("Down");
      arrowDirectionField.lastItem().setState(1);
      arrowDirectionField.addItemWithTitle("Left");
      arrowDirectionField.lastItem().setState(0);
      arrowDirectionField.addItemWithTitle("Up");
      arrowDirectionField.lastItem().setState(0);
      arrowDirectionField.addItemWithTitle("Auto");
      arrowDirectionField.lastItem().setState(0);
      arrowDirectionField.addItemWithTitle("Right");
      arrowDirectionField.lastItem().setState(0);
    }

    if (currentDirection == "Left") {
      arrowDirectionField.addItemWithTitle("Left");
      arrowDirectionField.lastItem().setState(1);
      arrowDirectionField.addItemWithTitle("Up");
      arrowDirectionField.lastItem().setState(0);
      arrowDirectionField.addItemWithTitle("Auto");
      arrowDirectionField.lastItem().setState(0);
      arrowDirectionField.addItemWithTitle("Right");
      arrowDirectionField.lastItem().setState(0);
      arrowDirectionField.addItemWithTitle("Down");
      arrowDirectionField.lastItem().setState(0);
    }

    if (currentDirection == "Up") {
      arrowDirectionField.addItemWithTitle("Up");
      arrowDirectionField.lastItem().setState(1);
      arrowDirectionField.addItemWithTitle("Auto");
      arrowDirectionField.lastItem().setState(0);
      arrowDirectionField.addItemWithTitle("Right");
      arrowDirectionField.lastItem().setState(0);
      arrowDirectionField.addItemWithTitle("Down");
      arrowDirectionField.lastItem().setState(0);
      arrowDirectionField.addItemWithTitle("Left");
      arrowDirectionField.lastItem().setState(0);
    }
  } else {
    // Show default
    arrowDirectionField.addItemWithTitle("Auto");
    arrowDirectionField.addItemWithTitle("Right");
    arrowDirectionField.addItemWithTitle("Down");
    arrowDirectionField.addItemWithTitle("Left");
    arrowDirectionField.addItemWithTitle("Up");
  }
}

function setActiveSpacingSetting(arrowSpacingField) {
  var currentSpacing = "Not selected";

  if (Settings.settingForKey("arrowSpacing")) {
    // if there is data in settings
    currentSpacing = Settings.settingForKey("arrowSpacing");

    if (currentSpacing == "Not selected") {
      arrowSpacingField.addItemWithTitle("Not selected");
      arrowSpacingField.lastItem().setState(1);
      arrowSpacingField.addItemWithTitle("30px");
      arrowSpacingField.lastItem().setState(0);
      arrowSpacingField.addItemWithTitle("70px");
      arrowSpacingField.lastItem().setState(0);
    }

    if (currentSpacing == "30px") {
      arrowSpacingField.addItemWithTitle("30px");
      arrowSpacingField.lastItem().setState(1);
      arrowSpacingField.addItemWithTitle("70px");
      arrowSpacingField.lastItem().setState(0);
      arrowSpacingField.addItemWithTitle("Not selected");
      arrowSpacingField.lastItem().setState(0);
    }

    if (currentSpacing == "70px") {
      arrowSpacingField.addItemWithTitle("70px");
      arrowSpacingField.lastItem().setState(1);
      arrowSpacingField.addItemWithTitle("Not selected");
      arrowSpacingField.lastItem().setState(0);
      arrowSpacingField.addItemWithTitle("30px");
      arrowSpacingField.lastItem().setState(0);
    }
  } else {
    // Show default
    arrowSpacingField.addItemWithTitle("Not Selected");
    arrowSpacingField.addItemWithTitle("30px");
    arrowSpacingField.addItemWithTitle("70px");
  }
}

function deleteConnectionFromData(arrayNumber) {
  var newConnections = [];

  if (pluginData) {
    // If we have database
    var connections = context.command.valueForKey_onLayer_forPluginIdentifier("arrowConnections", docData, pluginKey);

    for (var i = 0; i < connections.length; i++) {
      // Updating all connections without deleted one
      if (i != arrayNumber) {
        newConnections.push(connections[i]);
      }
    }
  }

  return newConnections;
}

function deleteLine(lineID) {
  var lineObject = document.getLayerWithID(lineID);
  var selectedGroup;

  if (lineObject) {
    selectedGroup = lineObject.parent;
    lineObject.remove();

    if (selectedGroup.layers.length == 0) {
      selectedGroup.remove();
    }
  }
}

function updateSpacing(sourceObjectID, childObjectID, direction) {
  var sourceObject = document.getLayerWithID(sourceObjectID);
  var childObject = document.getLayerWithID(childObjectID);

  if (Settings.settingForKey("arrowSpacing")) {
    var currentSpacing = Settings.settingForKey("arrowSpacing");

    if (direction == "Right") {
      if (currentSpacing == "30px") {
        childObject.frame.x = sourceObject.frame.x + sourceObject.frame.width + 30;
      }

      if (currentSpacing == "70px") {
        childObject.frame.x = sourceObject.frame.x + sourceObject.frame.width + 70;
      }
    }

    if (direction == "Down") {
      if (currentSpacing == "30px") {
        childObject.frame.y = sourceObject.frame.y + sourceObject.frame.height + 30;
      }

      if (currentSpacing == "70px") {
        childObject.frame.y = sourceObject.frame.y + sourceObject.frame.height + 70;
      }
    }

    if (direction == "Left") {
      if (currentSpacing == "30px") {
        childObject.frame.x = sourceObject.frame.x - childObject.frame.width - 30;
      }

      if (currentSpacing == "70px") {
        childObject.frame.x = sourceObject.frame.x - childObject.frame.width - 70;
      }
    }

    if (direction == "Up") {
      if (currentSpacing == "30px") {
        childObject.frame.y = sourceObject.frame.y - childObject.frame.height - 30;
      }

      if (currentSpacing == "70px") {
        childObject.frame.y = sourceObject.frame.y - childObject.frame.height - 70;
      }
    }
  }
}

function defineSourceObject(firstObjectID, secondObjectID, direction) {
  var firstObject = document.getLayerWithID(firstObjectID);
  var secondObject = document.getLayerWithID(secondObjectID);
  var sourceObjectID;

  if (direction == "Right") {
    if (firstObject.frame.x <= secondObject.frame.x) {
      sourceObjectID = firstObject.id;
    } else {
      sourceObjectID = secondObject.id;
    }
  }

  if (direction == "Down") {
    if (firstObject.frame.y <= secondObject.frame.y) {
      sourceObjectID = firstObject.id;
    } else {
      sourceObjectID = secondObject.id;
    }
  }

  if (direction == "Left") {
    if (firstObject.frame.x <= secondObject.frame.x) {
      sourceObjectID = secondObject.id;
    } else {
      sourceObjectID = firstObject.id;
    }
  }

  if (direction == "Up") {
    if (firstObject.frame.y <= secondObject.frame.y) {
      sourceObjectID = secondObject.id;
    } else {
      sourceObjectID = firstObject.id;
    }
  }

  return sourceObjectID;
}

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/settings":
/*!**********************************!*\
  !*** external "sketch/settings" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/settings");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default');
that['updateArrows'] = __skpm_run.bind(this, 'updateArrows');
that['cleanArrows'] = __skpm_run.bind(this, 'cleanArrows');
that['settings'] = __skpm_run.bind(this, 'settings')

//# sourceMappingURL=script.js.map
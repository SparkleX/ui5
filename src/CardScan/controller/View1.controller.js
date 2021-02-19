sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
	function (BaseClass, MessageToast, Fragment) {
		"use strict";

		var theClass = BaseClass.extend("poc.CardScan.controller.View1", {});
		theClass.prototype.pressButton1 = function () {
			alert('pressButton1')
		};
		return theClass;
	}
);

sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
	function (BaseClass, MessageToast, Fragment) {
		"use strict";

		var theClass = BaseClass.extend("poc.CardScan.controller.View2", {});
		theClass.prototype.pressButton2 = function () {
			alert('pressButton2')
		};
		return theClass;
	}
);

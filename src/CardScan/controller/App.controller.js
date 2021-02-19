sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
	function (BaseClass, MessageToast, Fragment) {
		"use strict";

		var no = 1;
		var theClass = BaseClass.extend("poc.CardScan.controller.App", {});
	
		theClass.prototype.onUploadComplete= function () {
			MessageToast.show(`sap-icon://business-card Leads "SCAN_${no}" created`);
			no++;
		}
		return theClass;
	}
);

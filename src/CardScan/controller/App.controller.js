sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
	function (BaseClass, MessageToast, Fragment) {
		"use strict";

		var theClass = BaseClass.extend("poc.CardScan.controller.App", {});
		theClass.prototype.onInit = function () {
			//const oApp = this.byId("app");
			//console.debug(oApp);
			alert(1);
		};
		theClass.prototype.loadView1 = function () {
			var oView = new sap.ui.core.mvc.XMLView({
				id: "myView1",
				viewName: "poc.CardScan.view.View1",
				type: sap.ui.core.mvc.ViewType.XML
			});
			console.debug(oView);
			this.getView().addContent(oView);
		};
		theClass.prototype.loadView2 = function () {
			var oView = new sap.ui.core.mvc.XMLView({
				id: "myView2",
				viewName: "poc.CardScan.view.View2",
				type: sap.ui.core.mvc.ViewType.XML
			});
			console.debug(oView);
			this.getView().addContent(oView);
		};
		return theClass;
	}
);

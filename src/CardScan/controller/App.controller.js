sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
	function (BaseClass, MessageToast, Fragment) {
		"use strict";

		var no = 1;
		var theClass = BaseClass.extend("poc.CardScan.controller.App", {});
		theClass.prototype.onInit = function () {
			//BaseClass.prototype.onInit.call(this);
			const oFileUploader = this.byId("fileUploader");
			//oFileUploader.addStyleClass("circleButton");


			console.debug(oFileUploader);
		};
		theClass.prototype.onPress= function (evt) {
			const oFileUploader = this.byId("fileUploader");
			oFileUploader.onclick(evt);
			//oFileUploader.upload();
		}		
		theClass.prototype.onUploadComplete= function () {
			MessageToast.show(`Leads Scan ${no} created`);
			no++;
		}
		return theClass;
	}
);

// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
  
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} 
     * @param {typeof  sap.ui.model.resource.ResourceModel"} ResourceModel
     */
    function (Controller, MessageToast, Models, ResourceModel) {
        "use strict";

        return Controller.extend("alfa03.sapui5.controller.App", {
            
            onInit: function() {
                //set data model on the view 
                //this.getView().setModel(Models.createRecipient());
               
                //set 118n odel on te view .
                //var i18nModel = new ResourceModel( {bundleName : "alfa03.sapui5.i18n.i18n"});
                //this.getView().setModel(i18nModel, "i18n");
            },

            onShowHello: function(){
                //read text fro i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            }
        });
    });
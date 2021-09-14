// @ts-nocheck

sap.ui.define([
    'sap/ui/test/Opa5',
    'sap/ui/test/actions/Press'
],
    /**
     * 
     * @param {typeof sap.ui.test.Opa5 } Opa5 
     * @param {typeof sap.ui.test.actions.Press} Press 
     */

    function (Opa5, Press) {
        'use strict';

        Opa5.createPageObjects({
            onTheAppPage: {
                actions: {
                    iSayHelloDialogButton: function(){
                        return this.waitFor({
                            id: "helloDialogButton",
                            viewName: "alfa03.sapui5.view.Hellopanel",
                            actions: new Press(),
                            errorMessage: "did not find the 'say hello dialog button ' on the hellopanel view"
                        });

                    }
                },
                assertions: {
                    iSayHelloDialog: function () {
                        return this.waitFor({
                            controlType: "sap.m.Dialog",
                            success: function () {
                                Opa5.assert.ok(true, "the dialog was open")
                            },
                            errorMessage: "did no find the dialog control "
                        });
                    }
                }
            }
        });
    });
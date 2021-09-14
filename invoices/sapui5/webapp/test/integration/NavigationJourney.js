
//@ts-nocheck
sap.ui.define([
    'alfa03/sapui5/localService/mockserver',
    'sap/ui/test/opaQunit',
    './pages/HelloPanel'
], 
/**
 * 
 * @param {typeof sap.ui.test.opaQunit} opaQunit 
 
 */

function (mockserver,opaQunit) {
    'use strict';

    QUnit.module("Navigation");
    
    opaQunit("shoul open the hello dialog", function (Given,When,Then) {

        mockserver.init();

        Given.iStartMyUIComponent({
            componentConfig: {
                name : "alfa03.sapui5"
            }

        });

        When.onTheAppPage.iSayHelloDialogButton();

        Then.onTheAppPage.iSayHelloDialog();

        Then.iTeardownMyApp();

    })

});
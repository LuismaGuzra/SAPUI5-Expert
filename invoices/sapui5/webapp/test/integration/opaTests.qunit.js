// @ts-nocheck
/*global QUnit*/
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict"
    sap.ui.require([
        "alfa03/sapui5/test/integration/NavigationJourney"
    ],function() {
        QUnit.start();
    });
});
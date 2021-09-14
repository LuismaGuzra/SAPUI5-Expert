//@ts-nocheck
sap.ui.define([
    "../localService/mockserver",
    "sap/m/MessageBox"
], function (mockserver, MessageBox) {
        'use strict';

        var aMockserver = [];

        aMockserver.push(mockserver.init());

        Promise.all(aMockserver).catch(function (oError) {
            MessageBox.error(oError.message);
        }).finally(function () {
            sap.ui.require(["sap/ui/core/ComponentSupport"]);
        });
    });
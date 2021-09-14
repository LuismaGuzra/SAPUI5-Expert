// @ts-nocheck
/* global QUnit */
sap.ui.define([
    "alfa03/sapui5/model/invoicesFormattor",
    "sap/ui/model/resource/ResourceModel"
], function (InvoicesFormatter, ResourceModel) {
    "use strict";

    QUnit.module("Qnvoices Status", {
        
        beforeEach: function () {
            this._oResourceModel = new ResourceModel({
                bundleUrl: sap.ui.require.toUrl("alfa03/sapui5") + "/i18n/i18n.properties"
            });
        },
        afterEach: function () {
            this._oResourceModel.destroy();
        }
    });

    QUnit.test("Should return the Invoice Status", function (assert) {
        let oModel = this.stub();
        oModel.withArgs("i18n").returns(this._oResourceModel);

        let oViewStub = {
            getModel: oModel
        };

        let oControllerStub = {
            getView: this.stub().returns(oViewStub)
        };

        let fnInsolatedFormatter = InvoicesFormatter.invoicesStatus.bind(oControllerStub);
        assert.strictEqual(fnInsolatedFormatter("A"), "New", "The Invoices status fpr A is correct");
        assert.strictEqual(fnInsolatedFormatter("B"), "In progres ", "The Invoices status fpr B is correct");
        assert.strictEqual(fnInsolatedFormatter("C"), "Done", "The Invoices status fpr C is correct");
    });

});
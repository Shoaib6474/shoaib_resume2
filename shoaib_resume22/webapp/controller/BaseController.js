sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function(Controller, History) {
    "use strict";

    return Controller.extend("training.shoaibresume22.controller.BaseController", {
        getRouter: function() {
            return sap.ui.core.UIComponent.getRouterFor(this);
        },

        onNavBack: function() {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                this.getRouter().navTo("default", {}, true /* no history */);
            }
        }
    });
});
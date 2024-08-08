sap.ui.define([
    "training/shoaibresume22/controller/BaseController"
],
function (Controller) {
    "use strict";

    return Controller.extend("training.shoaibresume22.controller.Home", {
        onInit: function () {

        },

        onShowResume: function(oEvent) {
            // Navigate to the "resume" route by changing the hash
            this.getRouter().navTo("Resume");
        }
    });
});

sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.sap.routing1.controller.Home", {
        onInit: function () {

        },

        onNavTovalidRoute: function (oEvent) {
            // navigate to the "employees" route by changing hash
            this.getRouter().navTo("employees");
        }
    });
});

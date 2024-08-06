sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.sap.routing1.controller.App", {
        onInit: function () {

        },

            getRouter : function () {
                return UIComponent.getRouterFor(this);
            }
    });
});

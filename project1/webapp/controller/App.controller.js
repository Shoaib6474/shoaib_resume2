sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/sap/Databinding1/formatter/Factory"
],
function (Controller,factory) {
    "use strict";

    return Controller.extend("com.sap.project1.controller.App", {

        factory: factory,

        onInit: function () {

        }
    });
});

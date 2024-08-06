sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("resume.controller.View1", {
        onInit: function () {
            // Create a JSON model
            var oModel = new JSONModel({
                skills: [
                    { name: "JavaScript" },
                    { name: "SAPUI5" },
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "OData" },
                    { name: "Git" },
                    { name: "Power BI" },
                    { name: "Excel" },
                    { name: "SQL" }
                ],
                academicProfile:[
                    {description:"Bachelor in Engineering",School:"Deccan College of Engineering and Techology"},
                    {description:"Intermediate" ,School:"Page Junior College"},
                    {description:"CBSE",School:"Vivekanda Residential School"}
                ]
            });

            // Set the model to the view
            this.getView().setModel(oModel);
        }
    });
});

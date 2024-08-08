sap.ui.define([
    "training/shoaibresume22/controller/BaseController",
    "sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
    "use strict";

    return BaseController.extend("training.shoaibresume22.controller.Resume", {
        onInit: function() {
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
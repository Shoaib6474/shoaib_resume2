sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("productdetails.controller.homePage", {
        onInit: function () {

        },

        onSubmit: function () {
            debugger;

            //pick data from input fields
            var stuName = this.byId("input-a").getValue();
            var classNumber = this.byId("input-b").getValue();
            var fathersName = this.byId("input-c").getValue();
            var dateofbirth = this.byId("input-d").getValue();
            
            //set data on the model
            var studentData = { "studentName": stuName, "class": classNumber, "fathersName": fathersName, "dateofbirth": dateofbirth};

            //array
            var aStudentNames = [];
            aStudentNames.push(studentData); //to push one row into array


            if (this.getView().getModel() !== undefined) { //if model exists then 
                var aOldData = this.getView().getModel().getData(); //read old data from model
                for (var i = 0; i < aOldData.length; i++) { //loop to read each row from oldData array and push it into aStudentNames array
                    aStudentNames.push(aOldData[i]);
                }                
            }

            var oModel = new sap.ui.model.json.JSONModel(aStudentNames); //to set data in model
            this.getView().setModel(oModel); //to set model on view


        

        },

    });
});

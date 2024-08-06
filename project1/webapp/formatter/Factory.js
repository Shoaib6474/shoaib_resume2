sap.ui.define([
    "sap/m/ObjectAttributes"
], function (ObjectAttributes) {

    "use strict";

    return {

        hobbyfactory: function(sId,oContext){
            var oUIControl;

            // Decide based on the data dependent to clone
            if (oContext.getProperty("skill") === "amature"){
                // This player is amature,so use a StandardListItem
                oUIControl = this.byId("amature").clone(sId);
            } else {
                // The item is avilable, so we will create an ObjectLstItem
                oUIControl = this.byId("professional").clone(sId)
            }
            return oUIControl;
        }
    };
});
({
    doInit : function(component, event, helper) {
        helper.onInit(component,event,helper);
    }, 
    onBeerChange: function(component,event,helper) {
        var compEvent = component.getEvent("onBeerSelected");
        compEvent.setParam("beerId",component.get('v.selectedBeerId'));
        compEvent.fire();
    },
    onTreeSelect: function(component,event,helper) {
        var compEvent = component.getEvent("onBeerSelected");
        var selectedName = event.getParam('name');
        if (selectedName.indexOf('type:') == -1) {
            compEvent.setParam("beerId",selectedName);
            compEvent.fire();
        } else {
            var toastEvent = $A.get("e.force:showToast");
            if (toastEvent) {
                toastEvent.setParams({
                    "type" : "warning",
                    "message": "Please select a beer, not a category."
                });
                toastEvent.fire();
            }
        }
    }
})
({
	onBeerSelected : function(component, event, helper) {
		component.set('v.beerId',event.getParam('beerId'));
	},
    onContactSelected: function(component,event,helper) {
        var appEvent = $A.get("e.c:FWB_App_ContactSelected");
        appEvent.setParams({
            contactId: event.getParam('contactId')
        });
        appEvent.fire();
    }
})
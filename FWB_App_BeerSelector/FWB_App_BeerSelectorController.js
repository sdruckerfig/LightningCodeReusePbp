({
	onBeerSelected : function(component, event, helper) {
        var appEvent = $A.get("e.c:FWB_App_BeerSelected");
   		appEvent.setParams({ "beerId" : event.getParam('beerId') });
        appEvent.fire();		
	}
})
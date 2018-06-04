({
	onBeerSelected : function(component, event, helper) {
		component.set('v.beerId',event.getParam('beerId'));
	},
    onContactSelected: function(component,event,helper) {
        component.set('v.contactId',event.getParam('contactId'));
    }
})
({
	onBeerIdChange : function(component, event, helper) {
   
		helper.runApex(component,
                       'c.findContact',
                       function(results) {
                           component.set('v.contacts',results);
                       },
                       {beerId: component.get('v.beerId')}
                      );
	}
})
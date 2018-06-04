({
    onBeerIdChange : function(component, event, helper) {
        
        helper.runApex(component,
                       'c.findContact',
                       function(results) {
                           component.set('v.contacts',results);
                       },
                       {beerId: component.get('v.beerId')}
                      );
    },
    
    onContactSelected: function(component,event,helper) {
       var evt = component.getEvent("oncontactselected");
       evt.setParams({
            contactId: event.getParam('Id')
       });
       evt.fire();
    }
})
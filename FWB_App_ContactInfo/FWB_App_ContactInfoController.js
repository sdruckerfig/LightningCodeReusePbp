({
    doInit: function(component,event,helper) {
        var evt = $A.get("event.force:navigateToSObject");
        if (!evt) {
            component.set('v.fullDetailsSupported',false);
        } 
        
        var dock=component.get('v.dock');
      
        switch(dock) {
            case 'top':
                var dockStyle = "position:absolute; width:100%; top:0px; border-bottom: 1px dashed black;";
                if (component.get('v.height') != '') {
                    dockStyle += " height: " + component.get('v.height');
                }
                component.set('v.dockStyle',dockStyle);
                break;
            case 'bottom':
                var dockStyle = "position:absolute; width:100%; bottom:0px; border-top: 1px dashed black;";
                if (component.get('v.height') != '') {
                    dockStyle += " height: " + component.get('v.height');
                }
                component.set('v.dockStyle',dockStyle);
                break;
            default:
                 component.set('v.dockStyle','');
        }
        
    },
    onContactSelected : function(component, event, helper) {
        component.set('v.contactId',event.getParam('contactId'));
    },
    
    onFullDetails: function(component, event, helper) {
        var evt = $A.get("event.force:navigateToSObject");
        
        evt.setParams({
            "recordId": component.get('v.contactId'),
            "slideDevName": "detail"
        });
        evt.fire();
        
    }
})
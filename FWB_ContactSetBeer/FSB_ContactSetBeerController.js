({
    onContactIdChange : function(component, event, helper) {
        
        var dataReader = component.find('recordLoader');
        dataReader.reloadRecord();
    },
    
    onSaveInfo: function(component,event,helper) {
        var service = component.find('recordLoader');
        
        service.saveRecord(function(saveResult) {
            
            if (saveResult.state === "SUCCESS" || 
                saveResult.state === "DRAFT") {
                
                // record is saved successfully
                
                var toastEvent = $A.get("e.force:showToast");
                if (toastEvent) {
                    toastEvent.setParams({
                        "title": "Success!",
                        "message": "The record has been updated successfully."
                    });
                    toastEvent.fire();
                } else {
                    alert("Success!");
                }
                
            } else if (saveResult.state === "INCOMPLETE") {
                // handle the incomplete state
                component.set('v.recordError','User is offline, device doesn\'t support drafts.');                    
            } else if (saveResult.state === "ERROR") {
                component.set('v.recordError','Problem saving record, error: ' + JSON.stringify(saveResult.error));             
            } else {
                alert('Unknown problem, state: ' + saveResult.state);
            }
        });
    }
})
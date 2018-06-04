({
    
    setLoading: function(component,bDisplay) {
        var spinner = component.find('modalspinner');
        if (bDisplay) {
          $A.util.removeClass(spinner, "slds-hide");
        } else {
          $A.util.addClass(spinner, "slds-hide");
        }
    },
    
    runApex : function(component,method,callback,params) {
        
        var me = this;
        me.setLoading(component,true);
               
        var action = component.get(method);
        if (params) {
            action.setParams(params);
        }
        
        action.setCallback(this,function(response) {
            var state = response.getState();
            if (state === "SUCCESS") { 
                // pass returned value to callback function
                callback.call(this,response.getReturnValue());   
            } else if (state === "ERROR") {
                // generic error handler
                var errors = response.getError();
                if (errors) {
                    console.log("Errors", errors);
                    if (errors[0] && errors[0].message) {
                        throw new Error("Error" + errors[0].message);
                    }
                } else {
                    throw new Error("Unknown Error");
                }
            }
            
            me.setLoading(component,false);
            
        });
        
        $A.enqueueAction(action);
    }
})
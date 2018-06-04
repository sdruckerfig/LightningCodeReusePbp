({
    onInit : function(component,event,helper) {
        helper.runApex(
            component,
            "c.getBeers",
            function(response) {
                var result = [];
                var groupName = "";
                var thisGroup = {items : []};
                for (var i=0; i<response.length; i++) {
                    if (groupName != response[i].Type__c) {
                        if (thisGroup.items.length > 0) {
                            result.push(thisGroup);
                        }
                        groupName = response[i].Type__c;
                        thisGroup = {
                            label: response[i].Type__c,
                            name: 'type:' + response[i].Type__c,
                            expanded : true,
                            items : []
                        };
                    } 
                    thisGroup.items.push({
                        name: response[i].Id,
                        label: response[i].Name
                    });
                    
                }
                component.set('v.beers',result);
            }
        );
    }
})
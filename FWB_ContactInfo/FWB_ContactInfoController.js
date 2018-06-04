({
	onContactIdChange : function(component, event, helper) {
    	
		var dataReader = component.find('recordLoader');
        dataReader.reloadRecord();
	}
})
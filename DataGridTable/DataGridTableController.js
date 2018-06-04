({
    doInit: function(component,event,helper) {
      var hideSmallFieldLabels = component.get('v.hideSmallFieldLabels');
        if (hideSmallFieldLabels) {
            component.set('v.tableClass',component.get('v.tableClass') + ' nolabels');
        }
    },
    onRowClick : function(component, event, helper) {
        var target = event.currentTarget;
        helper.setSelectedRow(component,target);  
        var compEvent = component.getEvent('onselect');
        compEvent.setParams({"Id" : target.getAttribute('data-pk')});
        compEvent.fire();
	}
})
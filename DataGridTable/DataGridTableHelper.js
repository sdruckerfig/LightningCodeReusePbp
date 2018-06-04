({
    setSelectedRow : function(component,target) {
        var oldRow = component.get('v.selectedRow');
        if (oldRow) {
            $A.util.removeClass(oldRow,'slds-is-selected');
        }
        
        $A.util.addClass(target, 'slds-is-selected');
        component.set('v.selectedRow',target);
    }
})
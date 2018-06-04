({
    onRender: function(component,event,helper) {
        var cmpEl = component.getElement();
         cmpEl.addEventListener("touchmove", function(e) {
            e.stopPropagation();
        }, false); 
        var targetEl =  component.find("mainbody").getElement();
        targetEl.addEventListener("touchmove", function(e) {
            e.stopPropagation();
        }, false);       
    }
    
})
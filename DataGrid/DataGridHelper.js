({
    onInit : function(component) {
        var obj = this.parseBody(component);
        component.set("v.cols", obj.cols);
        component.set("v.rows", obj.rows);
    },
    
    parseBody: function(component,colItems) {
        // insert code here
        var body = component.get("v.body");
        colItems = colItems || [];
        var thisTag, result;
        
        for (var i = 0; i < body.length; i++) {
            thisTag = body[i];
            if (thisTag.isInstanceOf('c:DataGridColumn')) {
                colItems.push({
                    label : thisTag.get('v.label'),
                    fieldName: thisTag.get('v.fieldName'),
                    type :  thisTag.get('v.type'),
                    class: thisTag.get('v.class') + " " +  
                    (thisTag.get('v.hidden') ? "hiddenColumn" : "")
                });
            }
        }
        
        // reformat data
        var rowData = component.get('v.data');
        var rowItems = [];
        var pkField = component.get('v.pkField');
        
        for (var i = 0; i < rowData.length; i++) {
            var rowDataItems = [];
            for (var j=0; j<colItems.length; j++) {
                 rowDataItems.push({
                    value: rowData[i][colItems[j].fieldName],
                    label: colItems[j].label,
                    type: colItems[j].type,
                    class: colItems[j].class
                });
            }
            rowItems.push({
                data: rowDataItems,
                pk: rowData[i][pkField]
            });  
        }
     
        return {
            cols: colItems,
            rows: rowItems
        }
        
    }
    
})
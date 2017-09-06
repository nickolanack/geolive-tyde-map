var viewer=new ContentModuleViewer(map, container, {});



var clearContent=function(){
    container.innerHTML="No item selected";
    
    viewer.open(new GeoliveTemplateModule(application, {
		template: "default",
		page: "EmptyView"
	}), application);
	show();
    
}
sidePanel.addEvent('hide',function(){
    clearContent();
});

clearContent();


map.setMapitemSelectFn(function(mapitem) {
    
    viewer.open(new GeoliveTemplateModule(mapitem, {
		template: "default",
		page: "Detail"
	}), mapitem);
	show();
    
});
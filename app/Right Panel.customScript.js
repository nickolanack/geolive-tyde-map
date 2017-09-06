var viewer=new ContentModuleViewer(map, container, {});



var clearContent=function(){
    container.innerHTML="No item selected";
    
    viewer.open(new GeoliveTemplateModule(map, {
		template: "default",
		page: "EmptyView"
	}), map);
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
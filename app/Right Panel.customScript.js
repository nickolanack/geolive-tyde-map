var viewer=new ContentModuleViewer(map, container, {});



var clear=function(){
    container.innerHTML="No item selected";
}
sidePanel.addEvent('hide',function(){
    clear();
})


map.setMapitemSelectFn(function(mapitem) {
    
    viewer.open(new GeoliveTemplateModule(mapitem, {
		template: "default",
		page: "Detail"
	}), mapitem);
	show();
    
});
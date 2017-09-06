var viewer=new ContentModuleViewer(map, container, {});



var clearContent=function(){
    //container.innerHTML="No item selected";
    
    viewer.open(new ViewTemplateModule(map, map, {
		template: "default",
		page: "EmptyTab"
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

map.setClusterClickFn(function(cluster, defaultClusterClickFn) {
    
    defaultClusterClickFn
    viewer.open(new ViewTemplateModule(cluster, map {
		template: "default",
		page: "ClusterDetail"
	}), cluster);
	show();
    
});
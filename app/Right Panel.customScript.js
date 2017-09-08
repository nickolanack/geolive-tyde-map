var viewer=new ContentModuleViewer(map, container, {});



var clearContent=function(){
    //container.innerHTML="No item selected";
    
    viewer.open(new ViewTemplateModule(map, map, {
		template: "default",
		page: "EmptyTab"
	}), map);
	//show();
    
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
    
  
    viewer.open(new ViewTemplateModule(cluster.getMarkers().slice(0), map, {
		template: "default",
		page: "ClusterDetailList"
	}), cluster.getMarkers().slice(0));
	defaultClusterClickFn();
	show();
    
});
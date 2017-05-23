var prev=moduleGroup[moduleIndex-1];
var layer=MapFactory.BestLayerFromIcon(item, application.getNamedValue('IconSets'),{})
var value=({"11":"Good", "13":"Bad", "14":"Meh"})[layer.getId()];
prev.value=value;
if(prev.TextFieldModule){
prev.TextFieldModule.setValue(value);
}


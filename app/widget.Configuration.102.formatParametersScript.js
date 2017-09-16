GetPlugin('Maps');
$parameters=array();
foreach(MapController::GetMapsLayers(1) as $layer){
    $parameters[]=json_decode('{
        "type": "color",
        "name": "layer-'.$layer->getId().'-color",
        "default": "rgb(0,0,0)",
        "label": "'.$layer->getId().' '.$layer->getId().' Cluster Color"
    }');
}




return $parameters;
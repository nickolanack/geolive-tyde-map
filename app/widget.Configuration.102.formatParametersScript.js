GetPlugin('Maps');
$parameters=array();
foreach(MapController::GetMapsLayers(1) as $layer){
    $parameters[]=json_decode('{
        "type":"fieldset",
        "label":"'.$layer->getId().' '.$layer->getName().' Cluster style",
        "fields":[{
            "type": "color",
            "name": "layer-'.$layer->getId().'-color",
            "default": "rgb(0,0,0)",
            "label": "Cluster Color"
            },
            {
            "type": "color",
            "name": "layer-'.$layer->getId().'-color-hover",
            "default": "rgb(0,0,0)",
            "label": "Cluster Hover Color"
            }
        ]}');
}




return $parameters;
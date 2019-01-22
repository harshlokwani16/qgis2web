var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Mumbai_ward_maps_1 = new ol.format.GeoJSON();
var features_Mumbai_ward_maps_1 = format_Mumbai_ward_maps_1.readFeatures(json_Mumbai_ward_maps_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mumbai_ward_maps_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Mumbai_ward_maps_1.addFeatures(features_Mumbai_ward_maps_1);var lyr_Mumbai_ward_maps_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mumbai_ward_maps_1, 
                style: style_Mumbai_ward_maps_1,
                title: '<img src="styles/legend/Mumbai_ward_maps_1.png" /> Mumbai_ward_maps'
            });var format_ward_boundaries_aftercleaning_2 = new ol.format.GeoJSON();
var features_ward_boundaries_aftercleaning_2 = format_ward_boundaries_aftercleaning_2.readFeatures(json_ward_boundaries_aftercleaning_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ward_boundaries_aftercleaning_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ward_boundaries_aftercleaning_2.addFeatures(features_ward_boundaries_aftercleaning_2);var lyr_ward_boundaries_aftercleaning_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ward_boundaries_aftercleaning_2, 
                style: style_ward_boundaries_aftercleaning_2,
                title: '<img src="styles/legend/ward_boundaries_aftercleaning_2.png" /> ward_boundaries_after-cleaning'
            });var format_dummy_hwest_data_3 = new ol.format.GeoJSON();
var features_dummy_hwest_data_3 = format_dummy_hwest_data_3.readFeatures(json_dummy_hwest_data_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dummy_hwest_data_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_dummy_hwest_data_3.addFeatures(features_dummy_hwest_data_3);var lyr_dummy_hwest_data_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dummy_hwest_data_3, 
                style: style_dummy_hwest_data_3,
                title: '<img src="styles/legend/dummy_hwest_data_3.png" /> dummy_hwest_data'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Mumbai_ward_maps_1.setVisible(false);lyr_ward_boundaries_aftercleaning_2.setVisible(false);lyr_dummy_hwest_data_3.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_Mumbai_ward_maps_1,lyr_ward_boundaries_aftercleaning_2,lyr_dummy_hwest_data_3];
lyr_Mumbai_ward_maps_1.set('fieldAliases', {'Name': 'Name', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_ward_boundaries_aftercleaning_2.set('fieldAliases', {'ward_name': 'ward_name', 'id': 'id', });
lyr_dummy_hwest_data_3.set('fieldAliases', {'id': 'id', 'cell_id': 'cell_id', 'bldig_id': 'bldig_id', 'population': 'population', 'seg': 'seg', 'color': 'color', });
lyr_Mumbai_ward_maps_1.set('fieldImages', {'Name': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_ward_boundaries_aftercleaning_2.set('fieldImages', {'ward_name': '', 'id': '', });
lyr_dummy_hwest_data_3.set('fieldImages', {'id': '', 'cell_id': '', 'bldig_id': '', 'population': '', 'seg': '', 'color': '', });
lyr_Mumbai_ward_maps_1.set('fieldLabels', {'Name': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_ward_boundaries_aftercleaning_2.set('fieldLabels', {'ward_name': 'no label', 'id': 'no label', });
lyr_dummy_hwest_data_3.set('fieldLabels', {'id': 'no label', 'cell_id': 'no label', 'bldig_id': 'no label', 'population': 'no label', 'seg': 'no label', 'color': 'no label', });
lyr_dummy_hwest_data_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
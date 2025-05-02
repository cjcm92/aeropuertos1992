ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-186.860697, -74.971648, 185.186933, 115.451760]);
var wms_layers = [];


        var lyr_WazeUS_0 = new ol.layer.Tile({
            'title': 'Waze (US)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://livemap-tiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });
var format_ne_10m_airports_1 = new ol.format.GeoJSON();
var features_ne_10m_airports_1 = format_ne_10m_airports_1.readFeatures(json_ne_10m_airports_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ne_10m_airports_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_airports_1.addFeatures(features_ne_10m_airports_1);
var lyr_ne_10m_airports_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ne_10m_airports_1, 
                style: style_ne_10m_airports_1,
                popuplayertitle: 'ne_10m_airports',
                interactive: true,
    title: 'ne_10m_airports<br />\
    <img src="styles/legend/ne_10m_airports_1_0.png" /> Major Aeropuerto<br />\
    <img src="styles/legend/ne_10m_airports_1_1.png" /> Mid Aeropuerto<br />\
    <img src="styles/legend/ne_10m_airports_1_2.png" /> Small Aeropuerto<br />\
    <img src="styles/legend/ne_10m_airports_1_3.png" /> Major And Military A<br />\
    <img src="styles/legend/ne_10m_airports_1_4.png" /> Mid And Military Aer<br />\
    <img src="styles/legend/ne_10m_airports_1_5.png" /> Military Aeropuerto<br />\
    <img src="styles/legend/ne_10m_airports_1_6.png" /> Military Major Aerop<br />\
    <img src="styles/legend/ne_10m_airports_1_7.png" /> Military Mid Aeropue<br />\
    <img src="styles/legend/ne_10m_airports_1_8.png" /> Spaceport Aeropuerto<br />\
    <img src="styles/legend/ne_10m_airports_1_9.png" /> <br />' });

lyr_WazeUS_0.setVisible(true);lyr_ne_10m_airports_1.setVisible(true);
var layersList = [lyr_WazeUS_0,lyr_ne_10m_airports_1];
lyr_ne_10m_airports_1.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', 'Clase': 'Clase', });
lyr_ne_10m_airports_1.set('fieldImages', {'scalerank': 'Hidden', 'featurecla': 'Hidden', 'type': 'Hidden', 'name': 'TextEdit', 'abbrev': 'Hidden', 'location': 'Hidden', 'gps_code': 'Hidden', 'iata_code': 'TextEdit', 'wikipedia': 'TextEdit', 'natlscale': 'Hidden', 'Clase': 'TextEdit', });
lyr_ne_10m_airports_1.set('fieldLabels', {'name': 'inline label - always visible', 'iata_code': 'inline label - visible with data', 'wikipedia': 'header label - visible with data', 'Clase': 'header label - visible with data', });
lyr_ne_10m_airports_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
<?php
session_start();
if(!$_SESSION['login']=="admin")
{

    header("Location:index.php");
}

?>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <link rel="stylesheet" href="./resources/ol.css">
        <link rel="stylesheet" href="resources/fontawesome-all.min.css">
        <link rel="stylesheet" href="./resources/ol3-layerswitcher.css">
        <link rel="stylesheet" href="./resources/qgis2web.css">
        <style>
        .ol-geocoder.gcd-gl-container {
            top: 65px!important;
            left: .5em!important;
            width: 2.1em!important;
            height: 2.1em!important;
        }
        .ol-geocoder .gcd-gl-container{
            width: 2.1em!important;
            height: 2.1em!important;
        }
        .ol-geocoder .gcd-gl-control{
            width: 2.1em!important;
        }
        .ol-geocoder .gcd-gl-expanded {
            width: 15.625em!important;
            height: 2.1875em;
        }
        .ol-touch .ol-geocoder.gcd-gl-container{
            top: 80px!important;
        }
        .ol-geocoder .gcd-gl-btn {
            width: 1.375em!important;
            height: 1.375em!important;
            top: .225em!important;
            background-image: none!important;
        }
        </style>
<style>
.search-layer {
  top: 100px;
  left: .5em;
}
.ol-touch .search-layer {
  top: 130px;
}
</style>
        <style>
        html, body {
            background-color: #ffffff;
        }
        .ol-control button {
            background-color: #f8f8f8 !important;
            color: #000000 !important;
            border-radius: 0px !important;
        }
        .ol-zoom, .geolocate, .gcd-gl-control .ol-control {
            background-color: rgba(255,255,255,.4) !important;
            padding: 3px !important;
        }
        .ol-scale-line {
            background: none !important;
        }
        .ol-scale-line-inner {
            border: 2px solid #f8f8f8 !important;
            border-top: none !important;
            background: rgba(255, 255, 255, 0.5) !important;
            color: black !important;
        }
        </style>
        <link href="resources/ol3-geocoder.min.css" rel="stylesheet">
        <style>
        #map {
            width: 1622px;
            height: 901px;
        }
        </style>
        <title></title>
    </head>
    <body>
        <a href="logout.php">Logout</a>
        <div id="map">
            <div id="popup" class="ol-popup">
                <a href="#" id="popup-closer" class="ol-popup-closer"></a>
                <div id="popup-content"></div>
            </div>
        </div>

        <script src="resources/qgis2web_expressions.js"></script>
        <script src="resources/polyfills.js"></script>
        <script src="./resources/functions.js"></script>
        <script src="./resources/ol.js"></script>
        <script src="./resources/ol3-layerswitcher.js"></script>
        <script src="resources/ol3-geocoder.js"></script>
        <script src="layers/Mumbai_ward_maps_1.js"></script><script src="layers/ward_boundaries_aftercleaning_2.js"></script><script src="layers/dummy_hwest_data_3.js"></script>
        <script src="styles/Mumbai_ward_maps_1_style.js"></script><script src="styles/ward_boundaries_aftercleaning_2_style.js"></script><script src="styles/dummy_hwest_data_3_style.js"></script>
        <script src="./layers/layers.js" type="text/javascript"></script> 
        <script src="./resources/qgis2web.js"></script>
        <script src="./resources/Autolinker.min.js"></script>
    </body>
</html>
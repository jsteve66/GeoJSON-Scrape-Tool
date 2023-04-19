# GeoJSON-Scrape-Tool
A tool to take public facing Esri Map Server and Feature Layers and download a GeoJSON that can be used in a variety of programs including Tableau. 

Use this tool to download GeoJSON files from public facing services to use with other programs such as Tableau. 
Copy the rest service url from the item description page and paste above without a slash "/" at the end of the address. 
The tool will check for existing layers, and create a checkbox for each existing layer after "Check for Layers" is clicked. 
Then select what layers you would like to download using the checkboxes and click "Run".
The "Run" button will not function until a selection is made via checkbox for a download. 
The downloads will have a prefix with the layer number, then "_download.geojson".

This program supports up to 10 layers. Any additional layers will be ignored if the url has more than 10 layers, and they will not be available for download.

"use strict";

var combined_map =
   "<figcaption><h2>Combined Noise Pollution Map</h2><i>Q: How many elementary schools in San Diego County are exposed to high levels of noise pollution?</i></figcaption><div class='image_block'><img src='combined-noise-map.png' alt='combined noise pollution map'/></div><figure><div class='block'><h3>Methodology</h3><p>I identified a number of high noise sources, figured out where those sources are within the county, and found out how many of the 721 identified elementary schools fell within close proximity to those noise sources. Noise intensity refers to either the frequency or intensity of noise in a given area and 'high' is the top tier in a natural breaks classification. I first identified a number of factors that would likely be the highest contributors to noise pollution: road traffic, air traffic, fire stations, population density, noisy neighbors, and heavy industry. I then made and merged a number of maps based on those factors to make the four gray-boxed maps. I combined the results of the four individual maps to create the Combined Noise Map.</p></div><div class='block'><h3>General Criteria </h3><ul><li>Schools must offer grades 1 -5</li><li>Schools must be within San Diego County</li><li>Noise data to be broken into four tiers with the fourth tier being invisible</li></ul></div><div class='block'><h3>Data Sources</h3><p>Major roads, highways, schools, industries, population, city limits, city case report, runways, air noise contours, fire stations, county boundary, terrain data (for map texture aesthetics)</p><p><i>Data files were obtained from the United States Census Bureau, The City of San Diego, and The San Diego Association of Governments (SANDAG). Further information is provided on the individual map pages.</i></p></div><div class='block'><h3>Results</h3><p>My results, which are illustrated in the Combined Noise Map, show that <b>11.7%</b> of San Diego county elementary schools (84 schools) fall within high noise zones, <b>32.9%</b> (237 schools) fell within mid noise zones, and <b>35.4%</b> (255 schools) fell within low noise zones. These numbers represent schools within mutually-exclusive merged areas, not factoring in overlap between multiple areas. The figures show that about a tenth of schools in the county are exposed to high levels of noise pollution. Much of this high noise is the inevitable result of mass urbanization. Other high-noise areas depicted on the maps, such as the Miramar Marine Corps Air Station, are already distanced from residential communities. Ideally, I would have liked to have consistent CNEL (Community Noise Equivalent Levels) data or decibel readings for all parts of the county, perhaps gathered at various locations and interpolated thereafter. This consistency in units would avoid the issue of comparing arbitrarily 'high' areas. The workaround I used, organizing the data into three tiers, works better on the four component maps rather than the combined noise map and more optimally identifies individual noise factors to be addressed.</p></div></figure>";

var traffic_map =
   "<figcaption><h2>Traffic Noise Map</h2><i>Q: How many schools are in areas that produce high levels of automotive, air, and fire station noise?</i></figcaption><div class='image_block'><img src='traffic-noise-map.png' alt='traffic noise pollution map'/></div><figure><div class='block'><h3>Methodology</h3><p>For this Traffic Noise Map, I merged three maps I created: a road noise map, an air noise map, and a fire station proximity map. The road noise was itself made from two maps: a multi-buffered highway proximity map and a multi-buffered major road proximity map (both produced from shapefiles provided by SANDAG). The air map was made by combining a noise contours shapefile with a buffered (.5mi orange buffer and .1 mi red buffer) runways map (a few airports weren't measured in the noise contours file). The fire stations map was made by buffering (.05mi for red, .1 mi for orange, .2mi for yellow) from the locations of fire stations. The red, orange, and yellow zones were respectively merged together to make this map and statistics.</p></div><div class='block'><h3>Criteria</h3><ul><li>High Auto: .025mi from fwys</li><li>High Air: CNEL 70-75</li><li>High Fire: > .05mi from fire stations</li><br><li>Low Auto: .05mi from fwys, .2mi from roads</li><li>Low Air: CNEL 50-59</li><li>Low Fire: > .2mi from fire stations</li><br><li>Mid Auto: .1mi from fwys, .025mi from roads</li><li>Mid Air: CNEL 60-69</li><li>Mid Fire: .05-1mi from fire station</li></ul></div><div class='block'><h3>Data Source</h3><p>SANDAG (Freeways, Schools, Runways, Air Noise Contours, SD County Terrain shapefiles)</p></div><div class='block'><h3>Results</h3><p><b>0.6%</b> elementary schools in high traffic noise zones (4 schools: 1 road, 2 air, 1 fire)<br /><b>15.1%</b> elementary schools in mid traffic noise zones (109 schools: 84 road, 24 air, 11 fire)<br /><b>21.8%</b> elementary schools in low traffic noise zones (1 57 schools: 1 44 road, 52 fire) elementary schools in high traffic noise zones (4 schools: 1 road, 2 air, 1 fire)</p></div></figure>";

var population_map =
   "<figcaption><h2>Population Density Noise Pollution Map</h2><i>Q: How many schools are in areas that produce high levels of urban noise?</i></figcaption><div class='image_block'><img src='population-noise-map.png' alt='population noise pollution map'/></div><figure><div class='block'><h3>Methodology</h3><p>For this Population Density Map, I imported a county population shapefile and tiered the areas by population density (using the natural breaks distribution). I made the bottom tier invisible because not as much noise would be produced in those parts. I then imported the elementary schools shapefile and I selected the schools in each of the top three density tiers and exported them as their own respective shapefiles. I colored those points by density tier and tallied up the totals. I then divided the totals by the total number of elementary schools in the county (721) to get the percentage values.</p></div><div class='block'><h3>Criteria</h3><ul><li>High Population Density: 14,173.1 - 50,077.9</li><li>Mid Population Density: 7,534.1 - 14,173.1</li><li>Low Population Density: 3,384.5 - 7,534</li></ul></div><div class='block'><h3>Data Sources</h3><ul><li>SANDAG (Major Roads shapefile)</li><li>US Census Bureau (populaton shapefile)</li></ul></p></div><div class='block'><h3>Results</h3><ul><li><b>7.9%</b> elementary schools in high population density areas<br>(57 schools)</li><li><b>24.5%</b> elementary schools in mid population density areas<br>(177 schools)</li><li><b>35.4%</b> elementary schools in low population density areas<br>(255 schools)</li></ul></div></figure>";

var industrial_map =
   "<figcaption><h2>Industrial Noise Pollution Map</h2><i>Q: How many schools are in close proximity to industrial zones?</i></figcaption><div class='image_block'><img src='industrial-noise-map.png' alt='industrial noise pollution map'/></div><figure><div class='block'><h3>Methodology</h3><p>Isolated 'Heavy Industry' and 'Light Industry' zones, indentified the zonal codenames (as per Chapter 13, Article 1, Division 6 of the SD Municipal Code) from city and county zones shapefiles. Merged the new shapefiles per industrial intensity and added a .25mi buffer to the 'Heavy Industry' zones.</p></div><div class='block'><h3>Criteria</h3><ul><li>Red: 'High Industry' Zone</li><li>Orange: 'Medium Industry' Zone or .25mi from Heavy Industry Zones</li><li>Yellow: 'Low Industry' Zone or .5mi from Heavy Industry</li></ul></div><div class='block'><h3>Data Sources</h3><ul><li>SANDAG (zoning base, schools, terrain)</li><li>The City of San Diego (zoning data)</li></ul></div><div class='block'><h3>Results</h3><ul><li>0% schools in heavy industrial zones (0 schools)</li><li>0.3% schools in mid industrial zones (2 schools)</li><li>2.5% schools in low industrial zones (18 schools)</li></ul></p></div></figure>";

var complaints_map =
   "<figcaption><h2>Noisy Neighbors</h2><i>Q: How many schools in SD City are near high concentrations of noise complaints?</i></figcaption><div class='image_block'><img src='noise-complaints-map.png' alt='noise complaint map'/></div><figure><div class='block'><h3>Methodology</h3><p>Downloaded xml file from city website ('Open cases and Cases Closed over the Last Six Months'), filtered for the word 'noise' in Excel, plotted as XY data, created 3-tiered Kernal Density heatmap (tool from the Spatial Analyst > Density toolset) from data points, enabled Image Classification toolbar (Customize > Toolbars > Image Classification) separated layers via the Iso Cluster Unsupervised Classification tool, selected data points per each tier via Lasso Selection, exported those selected datapoints into new shapefiles, removed extraneous results from shapefiles, used Select by Location to identify elementary schools within city limits and only in yellow/orange/red zones</p></div><div class='block'><h3>Data Sources</h3><ul><li>The City of San Diego (case report over the last six months)</li><li>SANDAG (schools, major roads, terrain)</li></ul></div><div class='block'><h3>Results</h3><ul><li>37.1% schools in low % of noise complaints (102 schools)</li><li>17.1% schools in high % of noise complaints (47 schools)</li><li>17.5% schools in mid % of noise complaints (48 schools)</li></ul></div></figure>";

var maps = new Array(4);
maps[0] = combined_map;
maps[1] = traffic_map;
maps[2] = population_map;
maps[3] = industrial_map;
maps[4] = complaints_map;

var i = 0;

// Click on a tab to get a map page
function select_map(map) {
   document.getElementById("map_display").innerHTML = maps[map];
   i = map;
   change_color();
}
// Left and right buttons to cycle through tabs
function cycle_map(direction) {
   if (direction == "backward") {
      i--;
      if (i < 0) {
         i = maps.length - 1;
      }
   } else if (direction == "forward") {
      i++;
      if (i >= maps.length) {
         i = 0;
      }
   }

   document.getElementById("map_display").innerHTML = maps[i];
   change_color();
}

// Change tab color
function change_color() {
   document.getElementById("tabcolor").innerHTML =
      "#charts-thumbnails > div {background-color: burlywood;} #charts-thumbnails > div:nth-child(" +
      (parseInt(i) + 2) +
      "){background-color: bisque;font-weight: bold;}div.next_button:hover,  #charts-thumbnails:first-child:hover,#charts-thumbnails:last-child:hover {     background-color: steelblue; } div.next_button { text-align: center; float: left;  display: block;  width: 50%; font-size: 150%; background-color: lightskyblue; user-select: none;}";
}

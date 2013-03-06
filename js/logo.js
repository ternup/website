var width = 1000;
var height = 200;

var paper = Raphael(document.getElementById('logo'), width, height);

var distance = 10;
var xp = width/distance;
var yp = height/distance;
var min_radius = 2;
var max_radius = 4;
var fill_color = new Array();
fill_color[0] = '#000';
fill_color[1] = '#ff9b1b';
fill_color[2] = '#ac2921';
fill_color[3] = '#8f8a91';

var paths = new Array();
paths[0] = paper.path("M18.002,43.039V17.03h115.265v26.008H91.102v114.674H60.167V43.039H18.002z");
paths[1] = paper.path("M254.64,17.03v26.008h-74.282v30.146h68.173v24.04h-68.173v34.48h75.857v26.008H149.423V17.03H254.64z");
paths[2] = paper.path("M352.958,17.03c6.305,0,11.984,1.02,17.044,3.053c5.054,2.039,9.389,4.828,13.003,8.374 c3.611,3.547,6.369,7.655,8.276,12.315c1.901,4.665,2.856,9.688,2.856,15.074c0,8.275-1.743,15.436-5.222,21.476		c-3.482,6.044-9.162,10.64-17.042,13.792v0.395c3.808,1.052,6.96,2.66,9.456,4.828c2.494,2.167,4.533,4.729,6.109,7.684		c1.576,2.955,2.724,6.208,3.447,9.753c0.721,3.546,1.214,7.093,1.479,10.641c0.128,2.234,0.262,4.861,0.393,7.88		c0.131,3.022,0.361,6.108,0.691,9.261c0.326,3.152,0.853,6.141,1.576,8.964c0.72,2.827,1.804,5.222,3.25,7.192h-30.934		c-1.708-4.463-2.759-9.783-3.151-15.959c-0.396-6.173-0.986-12.085-1.774-17.734c-1.054-7.355-3.287-12.737-6.699-16.156		c-3.418-3.414-9-5.124-16.748-5.124h-30.936v54.973H277.1V17.03H352.958z M341.923,80.672c7.094,0,12.414-1.576,15.959-4.729		c3.548-3.152,5.321-8.275,5.321-15.368c0-6.83-1.773-11.789-5.321-14.876c-3.546-3.085-8.866-4.63-15.959-4.63h-33.89v39.604		H341.923z");
paths[3] = paper.path("M450.094,17.03l58.717,94.38h0.395V17.03h28.963v140.682h-30.933L448.714,63.53h-0.393v94.182h-28.964V17.03H450.094z");
paths[4] = paper.path("M668.802,146.975c-10.64,9.261-25.352,13.89-44.136,13.89c-19.048,0-33.792-4.595-44.234-13.792		c-10.441-9.193-15.664-23.38-15.664-42.56V17.03h30.934v87.483c0,3.811,0.328,7.556,0.986,11.231		c0.655,3.681,2.034,6.93,4.138,9.753c2.099,2.826,5.021,5.124,8.766,6.897c3.743,1.772,8.77,2.66,15.075,2.66		c11.033,0,18.648-2.463,22.856-7.39c4.202-4.924,6.304-12.64,6.304-23.151V17.03h30.936v87.483		C684.762,123.562,679.441,137.713,668.802,146.975z");
paths[5] = paper.path("M774.807,17.03c8.797,0,16.284,1.281,22.462,3.842c6.17,2.561,11.196,5.944,15.072,10.146c3.871,4.206,6.7,9,8.473,14.384		c1.773,5.388,2.66,10.969,2.66,16.749c0,5.649-0.887,11.199-2.66,16.648c-1.772,5.453-4.602,10.281-8.473,14.482		c-3.876,4.206-8.902,7.587-15.072,10.148c-6.178,2.561-13.665,3.844-22.462,3.844h-32.512v50.439h-30.933V17.03H774.807z		 M766.332,83.234c3.546,0,6.962-0.262,10.247-0.788c3.279-0.524,6.172-1.543,8.668-3.054c2.494-1.509,4.499-3.646,6.009-6.403		c1.511-2.759,2.269-6.371,2.269-10.837c0-4.464-0.758-8.079-2.269-10.837c-1.51-2.758-3.515-4.892-6.009-6.404		c-2.496-1.509-5.389-2.527-8.668-3.053c-3.285-0.523-6.701-0.788-10.247-0.788h-24.037v42.165H766.332z");

for(var i=0;i<paths.length;i++) {
  paths[i].attr('stroke-width', 0);
}


var circles = new Array();
for(var i=0;i<xp;i++) {
  for(var j=0;j<yp;j++) {
    for(var k=0;k<paths.length;k++) {
      if(paths[k].isPointInside(i*distance, j*distance)) {
        var circle = paper.circle(i*distance, j*distance, rfi(min_radius, max_radius));
        circle.attr('stroke-width', 0);
        circles.push(circle);
      }
    }
  }
}

for(var i=0;i<circles.length;i++) {
  circles[i].attr('fill', fill_color[rfi(0,3)])
}

function rfi(from,to){
    return Math.floor(Math.random()*(to-from+1)+from);
}


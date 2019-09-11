function initMap() {



  var styles = [
  {
   stylers: [ 
   { "color": "#f5f5f5" },
   { saturation: -100 }
   ]
 },{
   featureType: "road", 
   elementType: "geometry",
   stylers: [
   // { color: "#8ee5ee" },
   { color: "#999999" },

   { visibility: "simplified" }
   ]
 },

 {
  "elementType": "labels.icon",
  "stylers": [
  {
    "visibility": "off"
  }
  ]
},
{
  "elementType": "labels.text.fill",
  "stylers": [
  {
    "color": "#616161"
  }
  ]
},
{
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#999999"
      }
    ]
  },

{
  featureType: "water", 
  elementType: "geometry",
  stylers: [
  { color: "#c9c9c9" },
               // { lightness: 250 },
               { visibility: "simplified" }
               ]
             },

             ];


// SUNDAY locations
var locations_sunday = [
['Jenna Bauer', 38.578071, -90.285575],
['David Ottinger', 38.579667, -90.269773],
['Danielle McCoy + Amy Reidel', 38.579783, -90.290641],
['Tim Eberhardt', 38.584336, -90.266540],
['Song Park', 38.586084, -90.278248],

['Carlynn Forst and Brian Gunderson ', 38.586767, -90.269187],
['Webster University', 38.588410, -90.346906],
['Phi Academy of Art', 38.589262, -90.259216],
['Nick Schleicher ', 38.592248, -90.276239],
['Theresa Hopkins & April Morrison', 38.597655, -90.255799],


['Erica Popp Studios + Gallery', 38.598686, -90.253405],
['Garage Studios', 38.598775, -90.332320],
['Andy Leicht', 38.598960, -90.247750],
['Hilltop House', 38.599573, -90.327606],
['Metra Mitchell  ', 38.602711, -90.249188],

['Evan and Stacey Smith', 38.604465, -90.288709],
['Gena Brady & Marcia Pandolfi', 38.609379, -90.250166],
['Jacki Holland ', 38.610034, -90.256885],
['The Elements of Design Studio', 38.611838, -90.319755],
['Howard Krohn', 38.616908, -90.318486],

['Amanda Bowles', 38.618465, -90.310299],
['Thomas Shepherd ', 38.620062, -90.242956],
['Bruenger + Cooper', 38.620589, -90.321618],
['Emily Elhoffer', 38.624919, -90.304187],
['St. Louis Community College - Forest Park', 38.628124, -90.276494],

['Craft Alliance Center of Art + Design - Grand Center', 38.638448, -90.232355],
['Linda Horsley', 38.646158, -90.250848],
['Jee Hyun Jayde Kim', 38.646748, -90.303484],
['Jess T. Dugan', 38.648446, -90.260090],
['The St. Louis Artists Guild', 38.649837, -90.329534],

['Pierce Arrow Building', 38.649982, -90.259996],
['Craft Alliance Center of Art + Design - Delmar', 38.655987, -90.307472],
['The Lewis Center', 38.658313, -90.309234],
['PWMD', 38.662068, -90.317138],
['University of Missouri - St. Louis  ', 38.712425, -90.302974],
['Rachel Youn', 38.733837, -90.301281],
['Paul Artspace ', 38.822996, -90.272508],

];



// SUNDAY CONTENT
var content_sunday = [
['<div id=content>'+'<a href="../portfolio/jenna-bauer" target="_top"><p>Jenna Bauer</p></a>'],
['<div id=content>'+'<a href="../portfolio/david-ottinger" target="_top"><p>David Ottinger</p></a>'],
['<div id=content>'+'<a href="../portfolio/danielle-mccoy" target="_top"><p>Danielle McCoy</p></a>'
+'<a href="../portfolio/amy-reidel" target="_top"><p>Amy Reidel</p></a>'],
['<div id=content>'+'<a href="../portfolio/tim-eberhardt" target="_top"><p>Tim Eberhardt</p></a>'],
['<div id=content>'+'<a href="../portfolio/song-park" target="_top"><p>Song Park</p></a>'],

['<div id=content>'+'<a href="../portfolio/carlynn-forst-and-brian-gunderson" target="_top"><p>Carlynn Forst and Brian Gunderson</p></a>'],
['<div id=content>'+'<h1>Webster University</h1>'
+'<a href="../portfolio/racheal-bruce" target="_top"><p>Racheal Bruce</p></a>'
+'<a href="../portfolio/mary-havey" target="_top"><p>Mary Havey</p></a>'
+'<a href="../portfolio/chloe-simmons" target="_top"><p>Chloe Simmons</p></a>'],
['<div id=content>'+'<h1>Phi Academy of Art</h1>'
+'<a href="../portfolio/mac-molano" target="_top"><p>Mac Molano</p></a>'
+'<a href="../portfolio/jim-kennedy" target="_top"><p>Jim Kennedy</p></a>'
+'<a href="../portfolio/justin-cissell" target="_top"><p>Justin Cissell</p></a>'
+'<a href="../portfolio/philip-perschbacher" target="_top"><p>Philip Perschbacher</p></a>'],
['<div id=content>'+'<a href="../portfolionick-schleicher" target="_top"><p>Nick Schleicher  </p></a>'],
['<div id=content>'+'<a href="../portfolio/theresa-hopkins-april-morrison" target="_top"><p>Theresa Hopkins & April Morrison</p></a>'],

['<div id=content>'+'<h1>Erica Popp Studios + Gallery</h1>'
+'<a href="../portfolio/john-q-do" target="_top"><p>John Q. Do</p></a>'
+'<a href="../portfolio/sarah-harford" target="_top"><p>Sarah Harford</p></a>'
+'<a href="../portfolio/erica-popp" target="_top"><p>Erica Popp</p></a>'
+'<a href="../portfolio/elizabeth-m-willey" target="_top"><p>Elizabeth M. Willey</p></a>'],
['<div id=content>'+'<a href="../portfolio/garage-studios" target="_top"><p>Garage Studios</p></a>'],
['<div id=content>'+'<a href="../portfolio/andy-leicht" target="_top"><p>Andy Leicht</p></a>'],
['<div id=content>'+'<a href="../portfolio/hilltop-house" target="_top"><p>Hilltop House</p></a>'+'<a href="../portfolio/danielle-mccoy" target="_top"><p>Christina Kling-Garrett</p></a>'],
['<div id=content>'+'<a href="../portfolio/metra-mitchell" target="_top"><p>Metra Mitchell </p></a>'],

['<div id=content>'+'<a href="../portfolio/evan-and-stacey-smith" target="_top"><p>Evan and Stacey Smith</p></a>'
+'<a href="../portfolio/jordan-mcgirk" target="_top"><p>Jordan McGirk</p></a>'
+'<a href="../portfolio/jennifer-higerd" target="_top"><p>Jennifer Higerd</p></a>'],
['<div id=content>'+'<a href="../portfolio/gena-brady" target="_top"><p>Gena Brady</p></a>'
+'<a href="../portfolio/marcia-pandolfi" target="_top"><p>Marcia Pandolfi</p></a>'],
['<div id=content>'+'<a href="../portfolio/jacki-holland" target="_top"><p>Jacki Holland</p></a>'],
['<div id=content>'+'<h1>The Elements of Design Studio</h1>'
+'<a href="../portfolio/genevieve-esson" target="_top"><p>Genevieve Esson</p></a>'
+'<a href="../portfolio/enola-lynn" target="_top"><p>Enola Lynn</p></a>'
+'<a href="../portfolio/allison-sands" target="_top"><p>Allison Sands</p></a>'
+'<a href="../portfolio/jeffrey-sass" target="_top"><p>Jeffrey Sass</p></a>'
+'<a href="../portfolio/heather-woodson" target="_top"><p>Heather Woodson</p></a>'],
['<div id=content>'+'<a href="../portfolio/howard-krohnx`" target="_top"><p>Howard Krohn </p></a>'],

['<div id=content>'+'<a href="../portfolio/amanda-bowles" target="_top"><p>Amanda Bowles</p></a>'],
['<div id=content>'+'<a href="../portfolio/thomas-shepherd" target="_top"><p>Thomas Shepherd</p></a>'],
['<div id=content>'+'<a href="../portfolio/allison-l-norfleet-bruenger" target="_top"><p>Allison L Norfleet Bruenger</p></a>'
+'<a href="../portfolio/nicole-cooper" target="_top"><p>Nicole Cooper</p></a>'],
['<div id=content>'+'<a href="../portfolio/emily-elhoffer" target="_top"><p>Emily Elhoffer</p></a>'],
['<div id=content>'+'<a href="../portfolio/st-louis-community-college-forest-park" target="_top"><p>St. Louis Community College - Forest Park</p></a>'],

['<div id=content>'+'<h1>Craft Alliance Center of Art + Design - Grand Center</h1>'
+'<a href="../portfolio/saj-issa" target="_top"><p>Saj Issa</p></a>'
+'<a href="../portfolio/abigail-lowe" target="_top"><p>Abigail Lowe</p></a>'
+'<a href="../portfolio/lindsay-pichaske" target="_top"><p>Lindsay Pichaske</p></a>'
+'<a href="../portfolio/damia-smith" target="_top"><p>Damia Smith</p></a>'
+'<a href="../portfolio/malaika-tolford" target="_top"><p>Malaika Tolford</p></a>'],
['<div id=content>'+'<a href="../portfolio/linda-horsley" target="_top"><p>Linda Horsley</p></a>'],
['<div id=content>'+'<h1>Sam Fox School of Design & Visual Arts</h1>'
+'<a href="../portfolio/jayde-kim" target="_top"><p>Jayde Kim</p></a>'
+'<a href="../portfolio/amy-chen" target="_top"><p>Amy Chen</p></a>'
+'<a href="../portfolio/jack-radley" target="_top"><p>Jack Radley</p></a>'
+'<a href="../portfolio/merry-sun" target="_top"><p>Merry Sun</p></a>'
+'<a href="../portfolio/blaize-b" target="_top"><p>Blaize&#8217;B</p></a>'
+'<a href="../portfolio/madeline-halpern" target="_top"><p>Madeline Halpern</p></a>'
+'<a href="../portfolio/caroline-radell" target="_top"><p>Caroline Radell</p></a>'],
['<div id=content>'+'<a href="../portfolio/jess-t-dugan" target="_top"><p>Jess T. Dugan</p></a>'],
['<div id=content>'+'<a href="../portfolio/the-st-louis-artists-guild" target="_top"><p>The St. Louis Artists&#8217; Guild</p></a>'],

['<div id=content>'+'<h1>Pierce Arrow Building</h1>'
+'<a href="../portfolio/nancy-exarhu" target="_top"><p>Nancy Exarhu</p></a>'
+'<a href="../portfolio/barbara-holtz" target="_top"><p>Barbara Holtz</p></a>'
+'<a href="../portfolio/visitor-assembly" target="_top"><p>Visitor Assembly</p></a>'],
['<div id=content>'+'<h1>Craft Alliance Center of Art + Design - Delmar</h1>'
+'<a href="../portfolio/fletcherworks" target="_top"><p>FletcherWorks</p></a>'
+'<a href="../portfolio/kevin-heard" target="_top"><p>Kevin Heard</p></a>'
+'<a href="../portfolio/kelly-miller" target="_top"><p>Kelly Miller</p></a>'
+'<a href="../portfolio/mary-lou-ryan" target="_top"><p>Mary Lou Ryan</p></a>'
+'<a href="../portfolio/yuko-suga" target="_top"><p>Yuko Suga</p></a>'],
['<div id=content>'+'<h1>The Lewis Center</h1>'
+'<a href="../portfolio/harley-lafarrah-eaves" target="_top"><p>Harley Lafarrah Eaves</p></a>'
+'<a href="../portfolio/brie-henderson" target="_top"><p>Brie Henderson</p></a>'
+'<a href="../portfolio/mee-jey" target="_top"><p>Mee Jey</p></a>'
+'<a href="../portfolio/rachel-kalman" target="_top"><p>Rachel Kalman</p></a>'
+'<a href="../portfolio/yeeun-kang" target="_top"><p>Yeeun Kang</p></a>'
+'<a href="../portfolio/kevin-mccoy" target="_top"><p>Kevin McCoy</p></a>'
+'<a href="../portfolio/emily-mueller" target="_top"><p>Emily Mueller</p></a>'
+'<a href="../portfolio/lola-ogbara" target="_top"><p>Lola Ogbara</p></a>'
+'<a href="../portfolio/chris-scott" target="_top"><p>Chris Scott</p></a>'
+'<a href="../portfolio/janie-stamm" target="_top"><p>Janie Stamm</p></a>'
+'<a href="../portfolio/paula-stevenson" target="_top"><p>Paula Stevenson</p></a>'
+'<a href="../portfolio/lingrong-wang" target="_top"><p>Lingrong Wang</p></a>'
+'<a href="../portfolio/sixue-yang" target="_top"><p>Sixue Yang</p></a>'
+'<a href="../portfolio/charis-schneider-norell" target="_top"><p>Charis Schneider Norell</p></a>'
+'<a href="../portfolio/jon-young" target="_top"><p>Jon Young</p></a>'],
['<div id=content>'+'<h1>PWMD</h1>'
+'<a href="../portfolio/marissa-dembkoski-and-paal-williams" target="_top"><p>Marissa Dembkoski and Paal Williams (PWMD)</p></a>'
+'<a href="../portfolio/drew-nikonowicz" target="_top"><p>Drew Nikonowicz</p></a>'
+'<a href="../portfolio/molly-o-donnell" target="_top"><p>Molly O&#8217;Donnell</p></a>'],
['<div id=content>'+'<a href="../portfolio/university-of-missouri-st-louis" target="_top"><p>University of Missouri <br>- St. Louis </p></a>'],
['<div id=content>'+'<a href="../portfolio/rachel-youn" target="_top"><p>Rachel Youn</p></a>'],
['<div id=content>'+'<a href="../portfolio/paul-artspace" target="_top"><p>Paul Artspace  </p></a>'],


]

// Saturday locations
var locations_saturday= [
['The Collab', 38.548531, -90.257008],
['Damien Johnson', 38.582996, -90.235998],
['Steven Hayes  ', 38.584908, -90.219977],
['Perennial - Creative Reuse Studio ',38.586337, -90.226027],
['Mark Travers  ', 38.586699, -90.232236],

['Intersect Arts Center', 38.589142, -90.227213],
['Rebecka Wyrde', 38.590360, -90.240363],
['Jorge Gabriel Calvo ', 38.592413, -90.218661],
['Mark Sheppard',38.592689, -90.219608],
['Louise Anne Marler', 38.593002, -90.224698],

['Adria Nicole', 38.593038, -90.225858],
['Benjamin Lowder', 38.593557, -90.226265],
['Trina Van Ryn',38.594834, -90.236435],
['Dayna Kriz', 38.600443, -90.230819],
['The Millitzer Studio & Gallery', 38.603516, -90.232961],

['Wyndi DeSouza ', 38.606309, -90.239927],
['Jody Baltzer', 38.607092, -90.235718],
['Margaret Keller',38.607272, -90.206820],
['Soulard Art Gallery', 38.607786, -90.209281],
['Jeff Kapfer', 38.632037, -90.203235],


['Common Ground Collective', 38.632362, -90.207065],
['Kelly Bandalos', 38.632681, -90.197305],
['City Museum',38.633579, -90.200423],
['Film Base STL ', 38.634729, -90.215867],
['Joe Chesla', 38.636524, -90.225276],

['Timothy Michael Burns', 38.638313, -90.230649],
['Zuka Arts Guild', 38.650507, -90.197710],



];

             // Saturday CONTENT
             var content_saturday = [
             ['<div id=content>'+'<a href="../portfolio/the-collab" target="_top"><p>The Collab</p></a>'],
             ['<div id=content>'+'<a href="../portfolio/damien-johnson" target="_top"><p>Damien Johnson</p></a>'],
             ['<div id=content>'+'<a href="../portfolio/steven-hayes" target="_top"><p>Steven Hayes  </p></a>'],
             ['<div id=content>'+'<a href="../portfolio/perennial-creative-reuse-studio" target="_top"><p>Perennial - Creative Reuse Studio </p></a>'],
             ['<div id=content>'+'<a href="../portfolio/mark-travers" target="_top"><p>Mark Travers</p></a>'],

             ['<div id=content>'+'<h1>Intersect Arts Center</h1>'
             +'<a href="../portfolio/jessica-bayer" target="_top"><p>Jessica Bayer</p></a>'
             +'<a href="../portfolio/sarah-bernhardt" target="_top"><p>Sarah Bernhardt</p></a>'
             +'<a href="../portfolio/samantha-hunerlach" target="_top"><p>Samantha Hunerlach</p></a>'
             +'<a href="../portfolio/jessica-lynn-hunt" target="_top"><p>Jessica Lynn Hunt</p></a>'
             +'<a href="../portfolio/ruth-kolker" target="_top"><p>Ruth Kolker</p></a>'
             +'<a href="../portfolio/yowshien-kuo" target="_top"><p>Yowshien Kuo</p></a>'
             +'<a href="../portfolio/alli-litwicki" target="_top"><p>Alli Litwicki</p></a>'
             +'<a href="../portfolio/carlie-trosclair" target="_top"><p>Carlie Trosclair</p></a>'
             +'<a href="../portfolio/emma-vidal" target="_top"><p>Emma Vidal</p></a>'
             +'<a href="../portfolio/philip-padilla" target="_top"><p>Philip Padilla</p></a>'],
             ['<div id=content>'+'<a href="../portfolio/rebecka-wyrde" target="_top"><p>Rebecka Wyrde</p></a>'],
             ['<div id=content>'+'<a href="../portfolio/jorge-gabriel-calvo" target="_top"><p>Jorge Gabriel Calvo </p></a>'],
             ['<div id=content>'+'<a href="../portfolio/mark-sheppard" target="_top"><p>Mark Sheppard</p></a>'],
             ['<div id=content>'+'<a href="../portfolio/louise-anne-marler" target="_top"><p>Louise Anne Marler</p></a>'],

             ['<div id=content>'+'<a href="../portfolio/adria-nicole" target="_top"><p>Adria Nicole</p></a>'],
             ['<div id=content>'+'<a href="../portfolio/benjamin-lowder" target="_top"><p>Benjamin Lowder</p></a>'],
             ['<div id=content>'+'<a href="../portfolio/trina-van-ryn" target="_top"><p>Trina Van Ryn</p></a>'],
             ['<div id=content>'+'<a href="../portfolio/dayna-kriz" target="_top"><p>Dayna Kriz</p></a>'],
             ['<div id=content>'+'<h1>The Millitzer Studio & Gallery</h1'
             +'<a href="../portfolio/brandon-anschultz" target="_top"><p>Brandon Anschultz</p></a>'
             +'<a href="../portfolio/katie-millitzer" target="_top"><p>Katie Millitzer</p></a>'
             +'<a href="../portfolio/chloe-west" target="_top"><p>Chloe West</p></a>'
             +'<a href="../portfolio/brandon-bandy-bridget-carey" target="_top"><p>Brandon Bandy / Bridget Carey</p></a>'],

             ['<div id=content>'+'<a href="../portfolio/wyndi-desouza" target="_top"><p>Wyndi DeSouza </p></a>'],
             ['<div id=content>'+'<a href="../portfolio/jody-baltzer" target="_top"><p>Jody Baltzer</p></a>'],
             ['<div id=content>'+'<a href="../portfolio/margaret-keller" target="_top"><p>Margaret Keller</p></a>'],
             ['<div id=content>'+'<h1>Soulard Art Gallery</h1>'
             +'<a href="../portfolio/patrick-l-bellmann" target="_top"><p>Patrick L. Bellmann</p></a>'
             +'<a href="../portfolio/rich-brooks" target="_top"><p>Rich Brooks</p></a>'
             +'<a href="../portfolio/lynne-dibadj" target="_top"><p>Lynne Dibadj</p></a>'
             +'<a href="../portfolio/judy-dyson" target="_top"><p>Judy Dyson</p></a>'
             +'<a href="../portfolio/kathy-gomric" target="_top"><p>Kathy Gomric</p></a>'
             +'<a href="../portfolio/karen-miller" target="_top"><p>Karen Miller</p></a>'
             +'<a href="../portfolio/garrett-roberts" target="_top"><p>Garrett Roberts</p></a>'
             +'<a href="../portfolio/pat-toenjes" target="_top"><p>Pat Toenjes</p></a>'],
             ['<div id=content>'+'<a href="../portfolio/jeff-kapfer" target="_top"><p>Jeff Kapfer</p></a>'],

             ['<div id=content>'+'<a href="../portfolio/common-ground-collective" target="_top"><p>Common Ground Collective</p></a>'],
             ['<div id=content>'+'<a href="../portfolio/kelly-bandalos" target="_top"><p>Kelly Bandalos</p></a>'],
             ['<div id=content>'+'<h1>City Museum</h1>'
             +'<a href="../portfolio/judy-child" target="_top"><p>Judy Child</p></a>'
             +'<a href="../portfolio/edo-rosenblith" target="_top"><p>Edo Rosenblith</p></a>'
             +'<a href="../portfolio/paul-kafalenos" target="_top"><p>Paul Kafalenos</p></a>'
             +'<a href="../portfolio/wildwood-press-llc" target="_top"><p>Wildwood Press LLC</p></a>'],
             ['<div id=content>'+'<a href="../portfolio/film-base-stl" target="_top"><p>Film Base STL </p></a>'],
             ['<div id=content>'+'<a href="../portfolio/joe-chesla" target="_top"><p>Joe Chesla</p></a>'],

             ['<div id=content>'+'<a href="../portfolio/timothy-michael-burns" target="_top"><p>Timothy Michael Burns</p></a>'],
             ['<div id=content>'+'<h1>Zuka Arts Guild</h1>'
             +'<a href="../portfolio/andrea-hughes" target="_top"><p>Andrea Hughes</p></a>'
             +'<a href="../portfolio/zuka-arts-guild" target="_top"><p>Zuka Arts Guild</p></a>'],
            

            

             

             ]



             var map = new google.maps.Map(document.getElementById('mapCanvas'), {
               zoom: 11,
               center: new google.maps.LatLng(38.635, -90.285),
               styles: styles,
               zoomControl: true,
            //    zoomControlOptions: {
            //     position: google.maps.ControlPosition.RIGHT_CENTER
            // },
            mapTypeControl: false

          });

             var infowindow = new google.maps.InfoWindow({
              maxWidth:300

            }
            );

             var marker, i;


// SUN Markers
for (i = 0; i < locations_sunday.length; i++) {  
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations_sunday[i][1], locations_sunday[i][2]),
     icon: '../assets/images/yellow-marker.png',
    map: map,

  });


  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(content_sunday[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}

// SAT Markers

for (i = 0; i < locations_saturday.length; i++) {  
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations_saturday[i][1], locations_saturday[i][2]),
   icon: '../assets/images/navy-marker.png',
    map: map,

  });


  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(content_saturday[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}

}

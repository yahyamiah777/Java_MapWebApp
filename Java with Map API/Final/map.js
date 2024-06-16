
var typeId = google.maps.MapTypeId.ROADMAP;

var mapOptions = {
    
    center: new google.maps.LatLng(40.0, 350.0),
    zoom: 6,
    mapTypeId: typeId
};

var map;

function initialize()
{
    var mapDiv = document.getElementById('map');
    map = new google.maps.Map(mapDiv, mapOptions);
    
};

function button1()
{
    var x = Math.floor((Math.random() * 90) + -90);
var y = Math.floor((Math.random() * 180) + -180);
    
    map.setOptions({center: new google.maps.LatLng(x,y)});
    
    var marker = new google.maps.Marker({
        
        position: new google.maps.LatLng(x,y), 
        map: map,

        
    });
    
    var marker2 = new google.maps.Marker({
        
        position: new google.maps.LatLng(x+4.5,y), 
        map: map,
       
    });
    
    var marker3 = new google.maps.Marker({
        
        position: new google.maps.LatLng(x-4.5,y), 
        map: map,      
       
    });
    
    var marker4 = new google.maps.Marker({
        
        position: new google.maps.LatLng(x,y+4.5), 
        map: map,
        
    });
    
    var marker5 = new google.maps.Marker({
        
        position: new google.maps.LatLng(x,y-4.5), 
        map: map,
        
    });
    
    var InfoWindow = new google.maps.InfoWindow({content: 'This is a marker'});
    
    google.maps.event.addListener(marker, 'click', function(){
        
        var marker6 = new google.maps.Marker({
        
        position: new google.maps.LatLng(-x,180-y), 
        map: map,
     
    });
   
    var marker7 = new google.maps.Marker({
        
        position: new google.maps.LatLng(-x+2.7,180-y), 
        map: map,
       
    });
    
    var marker8 = new google.maps.Marker({
        
        position: new google.maps.LatLng(-x-2.7,180-y), 
        map: map,      
       
    });
    
    var marker9 = new google.maps.Marker({
        
        position: new google.maps.LatLng(-x,180-y+2.7), 
        map: map,
        
    });
    
    var marker10 = new google.maps.Marker({
        
        position: new google.maps.LatLng(-x,180-y-2.7), 
        map: map,
        
    });
    
    map.panTo(marker6.position);
    
    var antipode = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      center: marker6.getPosition(),
      radius: 300000,
           
    });
});
    
   google.maps.event.addListener(marker2, 'click', function(){
       
       var marker11 = new google.maps.Marker({
        
        position: new google.maps.LatLng(x+2.25,y), 
        map: map,
icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        
    });
   });
   
   google.maps.event.addListener(marker3, 'click', function(){
       
       var marker12 = new google.maps.Marker({
        
        position: new google.maps.LatLng(x-2.25,y), 
        map: map,
icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        
    });
   });
   
   google.maps.event.addListener(marker4, 'click', function(){
       
       var marker13 = new google.maps.Marker({
        
        position: new google.maps.LatLng(x,y+2.25), 
        map: map,
icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        
    });
   });
   
   google.maps.event.addListener(marker5, 'click', function(){
       
       var marker14 = new google.maps.Marker({
        
        position: new google.maps.LatLng(x,y-2.25), 
        map: map,
icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        
    });
   });
   
  }
function button3()
{
    var x = prompt("Latitude: ");
    var y = prompt("Longitude: ");
    
   
    map.setOptions({center: new google.maps.LatLng(x,y)});
    
    var marker = new google.maps.Marker({
        
        position: new google.maps.LatLng(x,y), 
        map: map,

        
    });
    
    var Circle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      center: marker.getPosition(),
      radius: 20000,
    })   
    
}

function button4(){
    
    var x = Math.floor((Math.random() * 90) + -90);
var y = Math.floor((Math.random() * 180) + -180);
    
    map.setOptions({center: new google.maps.LatLng(x,y)});
    
   
    
    var marker = new google.maps.Marker({
        
        position: new google.maps.LatLng(x,y), 
        map: map,

        
    });
    
     var marker2 = new google.maps.Marker({
        
        position: new google.maps.LatLng(x+2.7,y+2.7), 
        map: map,

        
    });
    
     var marker3 = new google.maps.Marker({
        
        position: new google.maps.LatLng(x-2.7,y+2.7), 
        map: map,

        
    });
    
     var marker4 = new google.maps.Marker({
        
        position: new google.maps.LatLng(x-2.7,y-2.7), 
        map: map,

        
    });
    
     var marker5 = new google.maps.Marker({
        
        position: new google.maps.LatLng(x+2.7,y-2.7), 
        map: map,

        
    });
  
    var square = new google.maps.Rectangle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    bounds: {
  
      north: x+2.71,
      south: x-2.71,
      east: y+2.71,
      west: y-2.71,
    
    },
  });

   var InfoWindow = new google.maps.InfoWindow({content: 'This is my center marker'});
    google.maps.event.addListener(marker, 'click', function(){InfoWindow.open(map,marker)}); 
    
    var InfoWindow2 = new google.maps.InfoWindow({content: 'This is my top right marker'});
    google.maps.event.addListener(marker2, 'click', function(){InfoWindow2.open(map,marker2)});
    
    var InfoWindow3 = new google.maps.InfoWindow({content: 'This is my bottom right'});
    google.maps.event.addListener(marker3, 'click', function(){InfoWindow3.open(map,marker3)});
    
    var InfoWindow4 = new google.maps.InfoWindow({content: 'This is my bottom left marker'});
    google.maps.event.addListener(marker4, 'click', function(){InfoWindow4.open(map,marker4)});
    
    var InfoWindow5 = new google.maps.InfoWindow({content: 'This is my top left marker'});
    google.maps.event.addListener(marker5, 'click', function(){InfoWindow5.open(map,marker5)});
    
    
}


google.maps.event.addDomListener(window, 'load', initialize);

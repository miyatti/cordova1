var app = {
    initialize: function() {
        // TODO: put PhoneGap initialization here
         alert("Hello World!");
		 console.log("eeeee");
    },
};

function onBodyLoad(){
	document.addEventListener("deviceready",onDeviceReady,false);
}

function onDeviceReady(){
	console.log("rrrrr");
}

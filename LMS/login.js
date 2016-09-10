document.getElementById("img").onclick = function() {
	console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	console.log('Name: ' + profile.getName());
	console.log('Image URL: ' + profile.getImageUrl());
	console.log('Email: ' + profile.getEmail());
};

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
  //window.location.href = "home.html";
}

function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {
	  console.log('User signed out.');
	});
}
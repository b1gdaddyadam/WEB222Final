// Adam Lariviere 021104112 alariviere@myseneca.ca Have worked on this code.

function validate(event) {
  const form = document.querySelector("form");

  var lat = form.latitude.value;
  var lng = form.longitude.value;

  var valid = false;

  if (lat > 90 || lat < -90 || isNaN(lat)) {
    document.getElementById("latitudewarning").innerHTML =
      " must be a valid Latitude (-90 to 90)";
    valid = false;
  }

  if (lng > 180 || lng < -180 || isNaN(lng)) {
    document.getElementById("longitudewarning").innerHTML =
      " must be a valid Longitude (-180 to 180)";
    valid = false;
  }

  if (90 >= lat && lat >= -90) {
    document.getElementById("latitudewarning").innerHTML = "";
  }

  if (180 >= lng && lng >= -180) {
    document.getElementById("longitudewarning").innerHTML = "";
  }

  if (90 >= lat && lat >= -90 && 180 >= lng && lng >= -180) {
    document.getElementById("latitudewarning").innerHTML = "";
    document.getElementById("longitudewarning").innerHTML = "";
    valid = true;
  }

  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  // document.getElementById("submit").innerHTML=" Loading...";
  // if (90 >= lat && lat >= -90 && 180 >= lng && lng >= -180) {
  //  return true;
  //}
  //return false;
  console.log(
    "TODO - validate the longitude, latitude values before submitting"
  );

  return valid;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};

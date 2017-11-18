exports.prevent_mobile_landscape = function() {

  var isMobile = false;
  var isLandscape = false;

  function createDivs() {
    let prevent_mobile_landscape = document.createElement('div');
    prevent_mobile_landscape.setAttribute('id', 'prevent_mobile_landscape');
    prevent_mobile_landscape.style.height = '100vh';
    prevent_mobile_landscape.style.width = '100vw';
    prevent_mobile_landscape.style.background = '#666';
    prevent_mobile_landscape.style.position = 'fixed';
    prevent_mobile_landscape.style.top = '0px';
    prevent_mobile_landscape.style.left = '0px';
    prevent_mobile_landscape.style.zIndex = '999999998';
    prevent_mobile_landscape.style.overflow = 'hidden';
    prevent_mobile_landscape.style.userSelect = 'none';
    prevent_mobile_landscape.style.display = 'none';

    let prevent_mobile_landscape_text = document.createElement('p');
    prevent_mobile_landscape_text.setAttribute('id', 'prevent_mobile_landscape_text');
    prevent_mobile_landscape_text.style.position = 'fixed';
    prevent_mobile_landscape_text.style.top = '0px';
    prevent_mobile_landscape_text.style.left = '0px';
    prevent_mobile_landscape_text.style.lineHeight = '100vh';
    prevent_mobile_landscape_text.style.height = '100vh';
    prevent_mobile_landscape_text.style.width = '100vw';
    prevent_mobile_landscape_text.style.textAlign = 'center';
    prevent_mobile_landscape_text.style.color = '#FFF';
    prevent_mobile_landscape_text.style.zIndex = '999999999';
    prevent_mobile_landscape_text.innerHTML = 'Sorry, this device orientation is not supported';

    prevent_mobile_landscape.appendChild(prevent_mobile_landscape_text);
    document.body.appendChild(prevent_mobile_landscape);
  }

  createDivs();

  function preventMobileLandscape() {
    function detectMobile() {
      if (
        navigator.userAgent.match(/iPhone/) ||
        navigator.userAgent.match(/Android/) ||
        navigator.userAgent.match(/Blackberry/) ||
        navigator.userAgent.match(/Opera Mini/) ||
        navigator.userAgent.match(/IEMobile/)
      ) {
        isMobile = true;
      } else {
        isMobile = false;
      }
    }

    function detectLandscape() {
      if (window.innerWidth > window.innerHeight) {
        isLandscape = true;
      } else {
        isLandscape = false;
      }
    }
    detectMobile();
    detectLandscape();
    if (isMobile && isLandscape === true) {
      document.getElementById('prevent_mobile_landscape').style.display = "block";
    } else {
      document.getElementById('prevent_mobile_landscape').style.display = "none";
    }
  }

  document.onload = preventMobileLandscape();

  var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
  window.addEventListener(orientationEvent, function() {
    setTimeout(function() {
      preventMobileLandscape();
    }, 100);
  }, false);

};
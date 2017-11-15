exports.prevent_mobile_landscape = function() {
  function preventMobileLandscape() {
    var isMobile = false;
    var isLandscape = false;
    (function() {
      let prevent_mobile_landscape = document.createElement("div");
      prevent_mobile_landscape.setAttribute("id", "prevent_mobile_landscape");
      prevent_mobile_landscape.style.height = '100vh';
      prevent_mobile_landscape.style.width = '100vw';
      prevent_mobile_landscape.style.background = '#666';
      prevent_mobile_landscape.style.position = 'fixed';
      prevent_mobile_landscape.style.top = '0px';
      prevent_mobile_landscape.style.left = '0px';
      prevent_mobile_landscape.style.zIndex = '999999999999';
      prevent_mobile_landscape.style.display = 'none';
      document.body.appendChild(prevent_mobile_landscape);
    })();

    function detectMobile() {
      if (
        navigator.userAgent.match(/iPhone/) ||
        navigator.userAgent.match(/Android/) ||
        navigator.userAgent.match(/Blackberry/) ||
        navigator.userAgent.match(/Opera Mini/) ||
        navigator.userAgent.match(/IEMobile/)
      ) {
        isMobile = true;
      }
    }

    function detectLandscape() {
      if (window.innerWidth > window.innerHeight) {
        isLandscape = true;
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
  var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
  window.addEventListener(orientationEvent, function() {
    preventMobileLandscape();
  }, false);
};
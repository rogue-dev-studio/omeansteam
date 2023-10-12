export class Indexs {
  constructor() {
    var licenseElement = document.getElementById("license");
    var net = "https://";
    var ucontent = "omeansteam";
    var domain = ".github.io/";
    if (!licenseElement) {
      window.location.href = net+ucontent+domain;
    } else {
      var hrefValue = licenseElement.getAttribute("href");
      if (hrefValue !== net+ucontent+domain) {
        window.location.href = net+ucontent+domain;
      }else if(hrefValue ==''){
        window.location.href = net+ucontent+domain;
      }
    }
  }
}
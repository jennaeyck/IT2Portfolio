// hier komt je code
// console.log("Hallo wereld!");
var body = function() {
      var mijnAfbeeldingen = document.getElementsByTagName('img');
      var mijnTijdelijeArray = [];
      var teller = 0;
      while (teller < mijnAfbeeldingen.length) {
            mijnTijdelijkeArray[teller] = mijnAfbeeldingen[teller].getAttribute("src");
            teller = teller+1;
      }
      console.log(mijnTijdelijkeArray);

      var teller2 = 0;
      while(teller2 < mijnAfbeeldingen.length) {
            if (teller2 === 11) {
                  mijnAfbeeldingen[teller2].setAttribute("src",mijnTijdelijkeArray[0]);
            } else {
                  mijnAfbeeldingen[teller2].setAttribute("src",mijnTijdelijkeArray[teller2+1]);
            }
            teller2 = teller2+1;
      }


}

setInterval(body,2500);

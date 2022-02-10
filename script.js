
// GOOGLE MAP API "https://maps.googleapis.com/maps/api/geocode/json?address=`${address}`&key=AIzaSyCyzxFKakbatzNe2RssRV-HoFD-i7WxWsU";
// key = AIzaSyCyzxFKakbatzNe2RssRV-HoFD-i7WxWsU

// WEATHER API "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/55.867%2C%20-4.265?unitGroup=us&key=E474BUSGJUK7XMXJUPEFVYCM9&contentType=json"
// key = E474BUSGJUK7XMXJUPEFVYCM9

let lat;
let lng;
let snowProb;
let address;

const bckgImg = document.querySelector("background-image");

snowPNG = "https://tenor.com/bagA7.gif"  
// OR https://tenor.com/ES0z.gif

noSnowPNG = "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Grass-Grounds-Coverings-PNG-Clipart/Mountain_PNG_Clip_Art_Image.png?m=1530892071"


function getInput() {
   const rawAddress = document.getElementById("addressInput").value;
   address = rawAddress.replace(/\s/gm, '&20');
}


async function getLatLong() {
   const resAdd = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCyzxFKakbatzNe2RssRV-HoFD-i7WxWsU`);
   const place = (resAdd.data.results[0]);
   lat = place.geometry.location.lat;
   lng = place.geometry.location.lng;
   console.log(`latitude = ${lat}, longitude = ${lng}`);
}


async function getWeather() {
   const resWeath = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C%20${lng}?unitGroup=us&key=E474BUSGJUK7XMXJUPEFVYCM9&contentType=json`);
   console.log(resWeath.data.days[1])
   snowProb = (resWeath.data.days[1]).snow;
   console.log(snowProb);
}


async function getSnow() {
   await getInput();
   console.log(`The address is ${address}`);

   await getLatLong();
   console.log(`I grabbed lat ${lat} and ${lng} from getAddressfunction`);

   await getWeather();
   console.log(`found out the snow probability is ${snowProb}`);
   if (snowProb === 0 || snowProb === null) {
      alert("Don't bother putting the roof racks on");
      document.body.style.backgroundImage = "url('https://d34urnl45u363e.cloudfront.net/store/mediaobject/11763/image/large-e4474d556316d50ccb53751e96fdd4b8.png')";
   } else if (snowProb < 0.5) {
      alert("Enough for a snowfight...");
      document.body.style.backgroundImage = "url('https://images.cm.archant.co.uk/resource/responsive-image/2828670/article-lead-image/lg/1/ipswich-snow-chantry-park-2018.jpg')";
   } else {
      alert("get the wax out!!");
      document.body.style.backgroundImage = "url('https://hips.hearstapps.com/clv.h-cdn.co/assets/16/49/gettyimages-85786660-1.jpg')";
   };
}






// Write js script to evaluate snow probability true or false, and return a full-screen image
// NB. API request returns probability, not true or false, so code will need to evaluate t/f conditions

// 


// if (snowProb > 0) {
//     body.append(snowPNG);
// } else {
//     body.append(noSnowPNG);
// }


// Error code to return for invalid address?


// 
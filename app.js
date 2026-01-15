const SITE = {
  phone: "+96171363003",
  whatsapp: "+96171363003",
  instagram: "https://instagram.com/linastouch_lb",
  googleMaps: "https://maps.app.goo.gl/KQBC6jEDvTzn69Rb7",
  locationText: "Beit El Chaar - Lebanon",
  hoursText: "Tue–Sat · 10:00 AM - 5:00 PM",
  bookingText: "Hi Lina’ Touch, I’d like to book an appointment."
};

const $ = (s) => document.querySelector(s);

function waLink() {
  const msg = encodeURIComponent(SITE.bookingText);
  const num = (SITE.whatsapp || "").replace(/[^\d]/g, "");
  return `https://wa.me/${num}?text=${msg}`;
}

// Fill text
$("#hoursText").textContent = SITE.hoursText;
$("#locationText").textContent = SITE.locationText;

// Links
$("#chipInsta").href = SITE.instagram;
$("#chipCall").href = "tel:" + SITE.phone;

$("#btnWhatsApp").href = waLink();
$("#btnMap").href = SITE.googleMaps;
$("#btnCallBig").href = "tel:" + SITE.phone;

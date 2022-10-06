const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgrade = document.getElementById("upgrade");
const upgrade2 = document.getElementById("upgrade2");
const autoclicker = document.getElementById("autoclicker");

let cookies = 0;
let numberOfCookiesOnClick = 1;
let upgradePrice = 50;
let upgradePrice2 = 150;
let autoclickerPrice = 1000;
let autoclickerCookies = 0;

cookie.onclick = () => {
  cookies += numberOfCookiesOnClick;
  counter.innerHTML = `Cookies: ${cookies}`;
};

upgrade.onclick = () => {
  if (cookies >= upgradePrice) {
    cookies -= upgradePrice;
    upgradePrice *= 2;
    upgrade.innerHTML = `Buy upgrade: ${upgradePrice}`;
    counter.innerHTML = `Cookies: ${cookies}`;
    numberOfCookiesOnClick++;
  }
};

upgrade2.onclick = () => {
  if (cookies >= upgradePrice2) {
    cookies -= upgradePrice2;
    upgradePrice2 *= 3;
    upgrade2.innerHTML = `Buy upgrade: ${upgradePrice2}`;
    counter.innerHTML = `Cookies: ${cookies}`;
    numberOfCookiesOnClick++;
  }
};
autoclicker.onclick = () => {
  if (cookies >= autoclickerPrice) {
    if (autoclickerCookies == 0) {
      setInterval(() => {
        cookies += autoclickerCookies;
      }, 1000);
    }
    autoclickerCookies++;
    autoclickerPrice *= 2;
    autoclicker.innerHTML = `Buy autoclicker: ${autoclickerPrice}`;
    counter.innerHTML = `Cookies: ${cookies}`;
  }
};

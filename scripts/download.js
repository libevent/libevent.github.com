var StableNavItems = '';
var StableCards = '';

var RCNavItems = '';
var RCCards = '';

var AlphaNavItems = '';
var AlphaCards = '';

var OlderNavItems = '';
var OlderCards = '';

async function loadJson(){
    const temp = await fetch("content/releases.json");
    const releasesInfo = await temp.json();
    console.log(releasesInfo);
}

loadJson();
/*
document.getElementById("stable-nav").innerHTML = StableNavItems;
document.getElementById("rc-nav").innerHTML = RCNavItems;
document.getElementById("alpha-nav").innerHTML = AlphaNavItems;
document.getElementById("older-nav").innerHTML = OlderNavItems;
*/
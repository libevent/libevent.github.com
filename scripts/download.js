async function processJson(){
    const temp = await fetch("https://raw.githubusercontent.com/emma-coronado/libevent.github.com/master/content/releases.json");
    const releasesInfo = await temp.json();
    return releasesInfo;
}

function buildCard(release){
    let card = '';

    return card;
}

var StableNavItems = '';
var StableCards = '';

var RCNavItems = '';
var RCCards = '';

var AlphaNavItems = '';
var AlphaCards = '';

var OlderNavItems = '';
var OlderCards = '';

const temp = processJson();
console.log(temp);


document.getElementById("stable-nav").innerHTML = StableNavItems;
document.getElementById("rc-nav").innerHTML = RCNavItems;
document.getElementById("alpha-nav").innerHTML = AlphaNavItems;
document.getElementById("older-nav").innerHTML = OlderNavItems;

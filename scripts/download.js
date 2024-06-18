var StableNavItems = '';
var StableCards = '';

var RCNavItems = '';
var RCCards = '';

var AlphaNavItems = '';
var AlphaCards = '';

var OlderNavItems = '';
var OlderCards = '';

async function processJson(){
    const temp = await fetch("https://raw.githubusercontent.com/emma-coronado/libevent.github.com/master/content/releases.json");
    const releasesInfo = await temp.json();


    StableCards += makeCard(releasesInfo.stableReleases.latestRelease);

    for (i in releasesInfo.stableReleases.otherStableReleases) {
        StableNavItems += makeNavItem(releasesInfo.stableReleases.otherStableReleases[i]);
        StableCards += makeCard(releasesInfo.stableReleases.otherStableReleases[i]);
    }
    
    for (i in releasesInfo.releaseCandidates) {
        RCNavItems += makeNavItem(releasesInfo.releaseCandidates[i]);
        RCCards += makeCard(releasesInfo.releaseCandidates[i]);
    }

    for (i in releasesInfo.alphaReleases) {
        AlphaNavItems += makeNavItem(releasesInfo.alphaReleases[i]);
        AlphaCards += makeCard(releasesInfo.alphaReleases[i]);
    }
    
    for (i in releasesInfo.olderReleases) {
        OlderNavItems += makeNavItem(releasesInfo.olderReleases[i]);
        OlderCards += makeCard(releasesInfo.olderReleases[i]);
    }

    // add cards
    document.getElementById("stable-releases").insertAdjacentHTML("beforeend", StableCards);
    document.getElementById("release-candidates").insertAdjacentHTML("beforeend", RCCards);
    document.getElementById("alpha-releases").insertAdjacentHTML("beforeend", AlphaCards);
    document.getElementById("older-releases").insertAdjacentHTML("beforeend", OlderCards);


    // add Nav items
    document.getElementById("stable-nav").insertAdjacentHTML("beforeend", StableNavItems);
    document.getElementById("rc-nav").innerHTML = RCNavItems;
    document.getElementById("alpha-nav").innerHTML = AlphaNavItems;
    document.getElementById("older-nav").innerHTML = OlderNavItems;
}

function makeCard(release) {
    let cards = `<div class="card" id="item-1-3">
                     <div class="card-body">`;
    cards = cards + release.name;
    cards +='</div></div>';

    return cards;
}

function makeNavItem(release) {
    let navItem = '<p>';
    navItem = navItem + release.version;
    navItem += '</p>';

    return navItem;
}

processJson();
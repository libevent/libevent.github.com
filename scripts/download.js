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


    StableCards += makeCard(releasesInfo.stableReleases.latestRelease[0]);

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

    // add cards to download.html
    document.getElementById("stable-releases").insertAdjacentHTML("beforeend", StableCards);
    document.getElementById("release-candidates").insertAdjacentHTML("beforeend", RCCards);
    document.getElementById("alpha-releases").insertAdjacentHTML("beforeend", AlphaCards);
    document.getElementById("older-releases").insertAdjacentHTML("beforeend", OlderCards);


    // add Nav items to download.html
    document.getElementById("stable-nav").insertAdjacentHTML("beforeend", StableNavItems);
    document.getElementById("rc-nav").innerHTML = RCNavItems;
    document.getElementById("alpha-nav").innerHTML = AlphaNavItems;
    document.getElementById("older-nav").innerHTML = OlderNavItems;
}

function makeCard(release) {
    let cards = ``;

    return `<div class="card" id="` + release.version + `"><div class="card-body">` 
            + `<a href="` + release.downloadLink + `">` + release.name + `</a>`
            + ` [<a href="` + release.GPGSig + `">GPGSig</a>] `
            + `<a href="` + release.changeLog + `">ChangeLog</a><br>`
            + `Released ` + release.releaseDate 
        + `</div> </div>`;
}

function makeNavItem(release) {
    return '<a class="nav-link ms-3 my-1" href="#' + release.version + '">' 
            + release.version + '</a>';
}

processJson();
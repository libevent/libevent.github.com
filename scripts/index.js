async function addLatestRelease() {
    const temp = await fetch("./content/releases.json");
    const releasesInfo = await temp.json();

    var release = releasesInfo.stableReleases.latestRelease[0];

    let card = "";

    card += `<a href="` + release.downloadLink + `">` + release.name + `</a>`;
    
    if ('GPGsig' in release) 
        card += ` [<a href="` + release.GPGSig + `">GPGSig</a>] `; 
    if ('changeLog' in release)
        card += `<a href="` + release.changeLog + `">ChangeLog</a> <br>`;
    if ('PR' in release)
        card += `<a href="` + release.PR + `">PR</a> <br>`;
    if ('releaseDate' in release)
        card += `Released ` + release.releaseDate ;

    if ('comments' in release) {
        card += `<ul class='mb-0'>`;

        for (i in release.comments) {
            if (typeof release.comments[i] == 'object') {
                card += `<li><a href="` + release.comments[i].link + `">` + release.comments[i].text + `</a> <br></li>`;
            }
            else {
                card += '<li>' + release.comments[i] + '</li>';
            }
        }
        card += '</ul>';
    }

    document.getElementById("latestReleaseInfo").insertAdjacentHTML("beforeend", card);

}

addLatestRelease();
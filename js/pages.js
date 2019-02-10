$(document).ready(function() {
    begins();
});

function begins() {
    navbarDoing();
    linkSet();
    navActiveSet('home');
}

function navbarDoing() {
    const $navbarBurger = $('#burger1');
    $navbarBurger.on('click', function() {
        const target = $navbarBurger.attr('data-target');
        const $target = $('#' + target);
        $navbarBurger.toggleClass('is-active');
        $target.toggleClass('is-active');
    });
}

function linkSet() {
    linkListen('home');
    linkListen('main');
    linkListen('about');
}

function linkListen(linkName) {
    const $links = $('.' + linkName + '-link');
    $links.each(function() {
        $links.on('click', function() {
            //const $loads = $('#loads');
            $('#loads').load('../htmls/' + linkName + '.html', function() {
                navActiveSet(linkName);
                eval(linkName + 'Begin()');
            });
        });
    });
}

function navActiveSet(activeName) {
    const $allLinks = $('.nav-link');
    $allLinks.removeClass('is-active');

    const $actives = $('.' + activeName + '-link');
    $actives.addClass('is-active');
}

//main.html
function mainBegin() {
    $('#heroBody1').hide();
    makeOne('mainCards', 'info', 'Event1', 'Tomorrow', 'Airport');
}

function makeOne($inPlaceId, $coloris, mainThing, thatTime, mapPlace) {
    let columnDiv = document.createElement('div');
    let mainDiv = document.createElement('div');

    let inP1 = document.createElement('p');
    let inP2 = document.createElement('p');

    let icSpan1 = document.createElement('span');
    let icSpan2 = document.createElement('span');
    let icon1 = document.createElement('i');
    let icon2 = document.createElement('i');

    let nodeIn1 = document.createTextNode(mainThing);
    let nodeIn2 = document.createTextNode(thatTime);
    let nodeIn3 = document.createTextNode(mapPlace);

    let aBr = document.createElement('br');

    let columnDivCa = columnDiv.classList;
    columnDivCa.add('column');
    columnDivCa.add('is-one-quarter');
    columnDivCa.add('oa-card');

    let mainDivCa = mainDiv.classList;
    mainDivCa.add('notification');
    mainDivCa.add('is-' + $coloris);
    mainDivCa.add('has-text-centered');
    mainDivCa.add('ia-card');

    let inP1Ca = inP1.classList;
    inP1Ca.add('title');
    inP1Ca.add('is-2');

    let inP2Ca = inP2.classList;
    inP2Ca.add('subtitle');
    inP2Ca.add('is-5');

    let icSpan1Ca = icSpan1.classList;
    icSpan1Ca.add('icon');
    let icSpan2Ca = icSpan2.classList;
    icSpan2Ca.add('icon');
    let icon1Ca = icon1.classList;
    icon1Ca.add('fa');
    icon1Ca.add('fa-clock-o');
    let icon2Ca = icon2.classList;
    icon2Ca.add('fa');
    icon2Ca.add('fa-map-marker');

    icSpan1.appendChild(icon1);
    icSpan2.appendChild(icon2);
    inP2.appendChild(icSpan1);
    inP2.appendChild(nodeIn2);
    inP2.appendChild(aBr);
    inP2.appendChild(icSpan2);
    inP2.appendChild(nodeIn3);
    inP1.appendChild(nodeIn1);
    mainDiv.appendChild(inP1);
    mainDiv.appendChild(inP2);
    columnDiv.appendChild(mainDiv);

    document.getElementById($inPlaceId).appendChild(columnDiv);
}

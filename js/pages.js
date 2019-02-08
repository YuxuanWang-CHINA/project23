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

function linkSet()
{
    linkListen('home');
    linkListen('main');
    linkListen('about');
}

function linkListen(linkName) {
    const $links = $('.'+linkName+'-link');
    $links.each(function(){
        $links.on('click', function() {
            //const $loads = $('#loads');
            $('#loads').load('../htmls/'+linkName+'.html');
            $('#mainHero').removeClass('is-medium');
            $('#mainHero').addClass('is-small');
            navActiveSet(linkName);
        });
    });
}

function navActiveSet(activeName){
    const $allLinks = $('.nav-link');
    $allLinks.removeClass('is-active');

    const $actives = $('.'+activeName+'-link');
    $actives.addClass('is-active');
}

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-csstransforms-csstransforms3d-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes
 */
 ;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.cssanimations=function(){return F("animationName")},q.csstransforms=function(){return!!F("transform")},q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document);




 var MSdotcomOffsetMenu = MSdotcomOffsetMenu || {
    page: $('.page').first(),
    leftMenuButton: $('#offset-left-button'),
    leftMenu: $('#msdotcomoffsetmenuleft'),
    leftCloseButton: $('#msdotcomoffsetmenuleft .close-button'),
    leftDockButton: $('#msdotcomoffsetmenuleft .dock-button'),

    Start: function () {
        MSdotcomOffsetMenu.leftMenuButton.on('click', function () {
            window.requestAnimationFrame(MSdotcomOffsetMenu.ToggleMainNav);
        });

        MSdotcomOffsetMenu.RemoveTabIndexOfNavItems();

        $(window).on("resize", function(e) {
            window.requestAnimationFrame(MSdotcomOffsetMenu.HandleDock);
        });

        $(document.body)
        .on('keydown', function (e) {
            var code = e.keyCode || e.which;
            if (code === 27) {
                window.requestAnimationFrame(MSdotcomOffsetMenu.CloseMainNavIfOpen);
            }
        })
        .on('click', '.page', function (e) {
            window.requestAnimationFrame(MSdotcomOffsetMenu.CloseMainNavIfOpen);
        });

        MSdotcomOffsetMenu.leftCloseButton.on('click', function (e) {
            window.requestAnimationFrame(MSdotcomOffsetMenu.CloseOffset);
        });
        
        $('.toolbox button:first-child').on('keydown', function (e) {
            var code = e.keyCode || e.which;
            if (e.shiftKey && code === 9) {
                $('.msdotcomoffsetmenu .offset-menu-link:last-child').focus();
                e.preventDefault();
            }
        });

        MSdotcomOffsetMenu.leftDockButton.on("click", function (e) {
            MSdotcomOffsetMenu.leftMenu.toggleClass("offset-docked");
            MSdotcomOffsetMenu.page.toggleClass("offset-docked");
            if(MSdotcomOffsetMenu.leftDockButton.text().toLowerCase().trim() === "dock") {
                MSdotcomOffsetMenu.leftDockButton.text("Undock");
            }
            else {
                MSdotcomOffsetMenu.leftDockButton.text("Dock");
            }
            MSdotcomOffsetMenu.leftCloseButton.toggle();
            MSdotcomOffsetMenu.leftMenuButton.toggle();
        });

        $('.msdotcomoffsetmenu li:last-child .offset-menu-link').on('keydown', function (e) {
            var code = e.keyCode || e.which;
            if (!e.shiftKey && code === 9) {
                $('.toolbox button:first-child').focus();
                e.preventDefault();                                 
            }
        });
    },

    ToggleMainNav: function () {
        if (MSdotcomOffsetMenu.page.css("left") == '0px' || MSdotcomOffsetMenu.page.css("left") == 'auto') {
            MSdotcomOffsetMenu.OpenOffset();
        }
        else {
            MSdotcomOffsetMenu.CloseOffset();
        }
    },

    OpenOffset: function () {
        var w = $('#msdotcomoffsetmenuleft').width();
        MSdotcomOffsetMenu.AnimateOffsetJS($('#msdotcomoffsetmenuleft').width());
        MSdotcomOffsetMenu.AddTabIndexOfNavItems();
        $('body').addClass("offsetopened");
    },

    CloseOffset: function () {
        MSdotcomOffsetMenu.RemoveTabIndexOfNavItems();
        MSdotcomOffsetMenu.AnimateOffsetJS("0px");
        $('body').removeClass("offsetopened");
    },

    CloseMainNavIfOpen: function () {
        if (MSdotcomOffsetMenu.page.css("left") !== '0px' && MSdotcomOffsetMenu.page.css("left") !== 'auto') {
            MSdotcomOffsetMenu.CloseOffset();
        };
    },

    AnimateOffsetJS: function (width) {
        MSdotcomOffsetMenu.page.animate({ left: width }, {
            duration: 300, 
            easing: "linear", 
            queue: false
        });
    },

    AddTabIndexOfNavItems: function () {
        $('.msdotcomoffsetmenu .offset-menu-link').each(function (e) {
            $(this).attr('tabindex', '0');
        });
        $('.toolbox button').attr('tabindex', '0');
        $('.msdotcomoffsetmenu li:first-child .offset-menu-link').focus();
    },

    RemoveTabIndexOfNavItems: function () {
        $('.msdotcomoffsetmenu .offset-menu-link').each(function (e) {
            $(this).attr('tabindex', '-1');
        });
        $('.toolbox button').attr('tabindex', '-1');
        MSdotcomOffsetMenu.page.focus();
    },

    HandleDock: function () {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if(width < 768) {
            if(MSdotcomOffsetMenu.leftMenu.hasClass("offset-docked"))
            {
                MSdotcomOffsetMenu.leftMenu.removeClass("offset-docked");
                MSdotcomOffsetMenu.page.removeClass("offset-docked");
                MSdotcomOffsetMenu.leftDockButton.text("Dock");
                MSdotcomOffsetMenu.leftCloseButton.show();
                MSdotcomOffsetMenu.leftMenuButton.show();
            }
            if($("body").hasClass("offsetopened")) {
                MSdotcomOffsetMenu.AnimateOffsetJS($('#msdotcomoffsetmenuleft').width());
            }
        }
        else if($("body").hasClass("offsetopened")) {
            MSdotcomOffsetMenu.AnimateOffsetJS($('#msdotcomoffsetmenuleft').width());
        }
    }
};

$(document).ready(function () {
    MSdotcomOffsetMenu.Start();
});
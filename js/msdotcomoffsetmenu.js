var MSdotcomOffsetMenu = MSdotcomOffsetMenu || {
    page: $('.page').first(),
    leftMenuButton: $('#offset-left-button'),
    leftMenu: $('#msdotcomoffsetmenuleft'),
    leftCloseButton: $('#msdotcomoffsetmenuleft .close-button'),
    leftDockButton: $('#msdotcomoffsetmenuleft .dock-button'),

    Start: function () {
        MSdotcomOffsetMenu.leftMenuButton.on('click', function () {
            MSdotcomOffsetMenu.ToggleMainNav();
        });

        MSdotcomOffsetMenu.RemoveTabIndexOfMainNavItems();

        $(window).on("resize", function(e) {
            window.requestAnimationFrame(MSdotcomOffsetMenu.HandleDock);
        });

        $(document.body)
        .on('keydown', function (e) {
            var code = e.keyCode || e.which;
            if (code === 27) {
                MSdotcomOffsetMenu.CloseMainNavIfOpen();
            }
        })
        .on('click', '.page', function (e) {
            MSdotcomOffsetMenu.CloseMainNavIfOpen();
        });

        MSdotcomOffsetMenu.leftCloseButton.on('click', function (e) {
            MSdotcomOffsetMenu.CloseMainNavIfOpen();
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
            if(MSdotcomOffsetMenu.leftDockButton.text().toLowerCase() === "dock") {
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
            MSdotcomOffsetMenu.page.css("right", "auto");
            $('body').addClass("offsetopened");
            var w = $('#msdotcomoffsetmenuleft').width();
            MSdotcomOffsetMenu.leftMenuButton.animate({left: w}, {duration: 300, easing: "linear", queue: false });
            MSdotcomOffsetMenu.page.animate({ left: w }, {
                duration: 300, 
                easing: "linear", 
                queue: false,
                complete: function (e) {
                    $('.msdotcomoffsetmenu .offset-menu-link').each(function (e) {
                        $(this).attr('tabindex', '0');
                    });
                    $('.toolbox button').attr('tabindex', '0');
                    $('.msdotcomoffsetmenu li:first-child .offset-menu-link').focus();
                }
            });
        }
        else {
            MSdotcomOffsetMenu.leftMenuButton.animate({left: "0px"}, {duration: 300, easing: "linear", queue: false });
            MSdotcomOffsetMenu.page.animate({ left: "0px" }, {
                duration: 300, 
                easing: "linear", 
                queue: false,
                complete: function (e) {
                    $('body').removeClass("offsetopened");
                    MSdotcomOffsetMenu.page.focus();
                    MSdotcomOffsetMenu.RemoveTabIndexOfMainNavItems();
                }
            });
        }
    },

    CloseMainNavIfOpen: function () {
        if (MSdotcomOffsetMenu.page.css("left") !== '0px' && MSdotcomOffsetMenu.page.css("left") !== 'auto') {
            MSdotcomOffsetMenu.leftMenuButton.animate({left: "0px"}, {duration: 300, easing: "linear", queue: false });
            MSdotcomOffsetMenu.page.animate({ left: "0px" }, {
                duration: 300, 
                easing: "linear", 
                queue: false,
                complete: function (e) {
                    $('body').removeClass("offsetopened");
                    MSdotcomOffsetMenu.page.focus();
                    MSdotcomOffsetMenu.RemoveTabIndexOfMainNavItems();
                }
            });
        }
    },

    RemoveTabIndexOfMainNavItems: function () {
        $('.msdotcomoffsetmenu .offset-menu-link').each(function (e) {
            $(this).attr('tabindex', '-1');
        });
        $('.toolbox button').attr('tabindex', '-1');
    },

    HandleDock: function () {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if(width < 768) {
            if(MSdotcomOffsetMenu.leftMenu.hasClass("offset-docked"))
            {
                MSdotcomOffsetMenu.leftMenu.toggleClass("offset-docked");
                MSdotcomOffsetMenu.page.toggleClass("offset-docked");
                MSdotcomOffsetMenu.leftDockButton.text("Dock");
                MSdotcomOffsetMenu.leftCloseButton.show();
                MSdotcomOffsetMenu.leftMenuButton.show();
            }
            if($("body").hasClass("offsetopened")) {
                var w = $('#msdotcomoffsetmenuleft').width();
                MSdotcomOffsetMenu.leftMenuButton.animate({left: w}, {duration: 300, easing: "linear", queue: false });
                MSdotcomOffsetMenu.page.animate({ left: w }, {
                    duration: 300, 
                    easing: "linear", 
                    queue: false
                });
            }
        }
        else if($("body").hasClass("offsetopened")) {
            var w = $('#msdotcomoffsetmenuleft').width();
            MSdotcomOffsetMenu.leftMenuButton.animate({left: w}, {duration: 300, easing: "linear", queue: false });
            MSdotcomOffsetMenu.page.animate({ left: w }, {
                duration: 300, 
                easing: "linear", 
                queue: false
            });
        }
    }
};

$(document).ready(function () {
    MSdotcomOffsetMenu.Start();
});
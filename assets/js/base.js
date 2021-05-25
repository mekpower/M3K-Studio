$(document).ready(function () {
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const tabUrl = urlParams.get('tabpane');
    console.log(tabUrl);
    if(tabUrl != null){
         var someTabTriggerEl = document.querySelector('#'+tabUrl)
        var tab = new bootstrap.Tab(someTabTriggerEl)

        tab.show()
    }
    
    $('.dropdown-menu a').on('click', function () {
        $(this).parent().parent().prev().html($(this).html() + '<span class="caret"></span>');
        console.log($(this).attr("value"));
        getLocalize($(this).attr("value"))
    })

    jQuery('.img-modal[href^=#]').click(function (e) {
        e.preventDefault();
        var href = jQuery(this).attr('href');
        jQuery(href).modal('toggle');
    });
    function alignModal() {
        var modalDialog = $(this).find(".modal-dialog");

        // Applying the top margin on modal to align it vertically center
        modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
    }
    // Align modal when it is displayed
    $(".modal").on("shown.bs.modal", alignModal);

    // Align modal when user resize the window
    $(window).on("resize", function () {
        $(".modal:visible").each(alignModal);
    });

    langCookie = getCookie("lang");
    var userLang = navigator.language || navigator.userLanguage;
    if (langCookie != "") {
        $("[data-localize]").localize("assets/js/Localize/locales/localize", { language: getCookie("lang") })
        $(`.dropdown-menu a[value=${langCookie}]`).parent().parent().prev().html($(`.dropdown-menu a[value=${langCookie}]`).html() + '<span class="caret"></span>');
        console.log("idioma do Cookie");
    } else {
        $("[data-localize]").localize("assets/js/Localize/locales/localize", { language: userLang })
        $(`.dropdown-menu a[value=${userLang}]`).parent().parent().prev().html($(`.dropdown-menu a[value=${userLang}]`).html() + '<span class="caret"></span>');
        console.log("idioma do Browser");
    }


    function getLocalize(lang) {
        langSelect = lang.toLowerCase();
        $("[data-localize]").localize("assets/js/Localize/locales/localize", { language: `${langSelect}` })
        document.cookie = `lang= ${langSelect}`;
        //Cookie.set('lang', d, { secure: false })
        getCookie("lang");
    }


    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    var consume = `⠄⠄⠄⠄⠄⠄⠪⡳⣶⣾⣿⣿⣶⠦⠤⠒⣶⣶⣤⣄⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠉⠪⡻⣿⣀⣶⣶⣶⡤⠬⠙⠛⠃⢤⣭⠖⣢⡀⢄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⢚⢿⣿⣿⣯⠴⢛⣭⣽⣽⣕⡉⢜⣵⠾⢿⣿⣄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⢀⢔⣦⣾⣿⣿⣟⢿⣿⡟⠄⠘⣿⣿⡞⣿⡀⢠⡽⣿⣷⡀
    ⠄⠄⠄⠄⠄⣠⣤⣮⣷⣿⣿⣿⣿⣿⡟⡏⣿⠁ ⭕ ⣡⣿⣿⡿⠿ ⭕ ⠅
    ⠄⠄⠄⣴⣽⣿⣿⠟⠫⠽⣿⣿⡿⢻⣧⠱⣙⠿⢿⠿⢿⢛⣥⡙⠥⠬⠅⣂⣤⡤
    ⠄⢌⣾⣿⣿⡿⣱⠚⠻⣷⣝⢿⣿⣦⣭⣑⣂⣉⣭⣥⣶⣿⣿⣷⣄⣾⣿⠿⠋⢹
    ⣜⣿⣿⣿⣿⢱⣿⠄⠸⣦⣭⠓⠪⠭⣛⣛⡿⠿⠿⠿⠿⣟⣛⣛⠭⢝⣢⠄⢧⢸
    ⢻⣿⣿⣿⣿⢸⣿⠄⠄⠻⠃⠄⢿⣷⡶⠄⣭⣭⡍⠩⣭⣭⡤⠄⠄⠻⣿⠄⠄⢸
    ⣿⣿⣿⣿⣿⡸⣿⡀⠄⠄⠄⠄⠈⠁⠄⠄⠹⠋⠄⠄⠙⠟⠁⠄⠄⠄⠄⢠⡠⠎
    ⢡⢿⣿⣿⣿⣧⢻⣧⠄⢠⣶⡀⠄⠄⡄⠄⠄⠄⣀⠄⠄⠄⢀⣄⠄⠄⢠⡿⠝⠄
    ⠄⠩⢿⣿⣿⣿⣧⠻⣧⡙⢿⣿⠄⢰⣿⡄⠄⢀⣿⡄⠄⢀⣾⣿⡷⠄⡩⠊⠄⠄
    ⠄⠄⠑⢝⢿⣿⣿⣷⣬⣛⠳⢦⣤⣍⣙⣛⣀⣛⣛⣃⣀⡉⢍⠠⠔⠊⠄⠄⠄⠄
    ⠄⠄⠄⠄⠑⠫⢿⣿⣿⣿⣿⣷⣶⣬⣭⣭⣭⠭⠭⠙⠂⠉⠄⠄⠄⠄⠄⠄⠄⠄`;

    console.log(consume);
});



formatstateCountry = (state) => {
    if (!state.id) {
        return state.text;
    }

    let $this = state;
    let baseUrl = "/images/flags";
    let flag_code = $($this.element).data('code');

    let $state = $(
        '<span><img width="20" src="' + baseUrl + '/' + flag_code + '.svg" class="img-flag" /> ' + $this.text + '</span>'
    );

    return $state;
};

formatstatePlatform = (state) => {
    if (!state.id) {
        return state.text;
    }

    let $this = state;
    let baseUrl = "/images/channels";
    let code = $($this.element).data('code');

    let $state = $(
        '<span><img width="20" src="' + baseUrl + '/' + code + '.png" class="img-flag" /> ' + $this.text + '</span>'
    );

    return $state;
};


//Hover App in /application
$(document).ready(function () {
    $('a').hover(function () {
            // over
            $(this).children('div').addClass('bd-primary')
        }, function () {
            // out
            $(this).children('div').removeClass('bd-primary')
        }
    );
});


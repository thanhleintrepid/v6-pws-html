function  showPassword (_this) {
    let input = $(_this).parents('.showpassword').find('input');
    if($(input).attr('type') == 'password') {
        $(input).attr('type', 'text');
    } else {
        $(input).attr('type', 'password');
    }

    if($(_this).hasClass('hide')) {
        $(_this).addClass('show');
        $(_this).removeClass('hide');
    } else {
        $(_this).addClass('hide');
        $(_this).removeClass('show');
    }
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

// Format number
fmtNumber = (value, decimal = 2) => {
    if (decimal === -1 && value > 0) {
        let strNumber = value.toString().replace(/[\D\s._-]+/g, value);
        let length = strNumber.length;
        if (length >= 4 && length < 7) {
        return value / 1000 + 'K';
        } else if (length >= 7 && length < 10) {
        return value / 1000000 + 'M';
        } else if (length >= 10 && length < 13) {
        return value / 1000000000 + 'B';
        } else {
        return value;
        }
    } else if (decimal === 0) {
        return numeral(value).format('0,0');
    } else if (decimal === 1) {
        return numeral(value).format('0.[0]');
    } else {
        return numeral(value).format('0,0.[00]');
    }
};

fmtCurrency = (value) => {
    let currency = new Intl.NumberFormat('en', {
        style: 'decimal',
        currency: BASE_CURRENCY_KEY,
        minimumFractionDigits: BASE_CURRENCY_DECIMALS,
        maximumFractionDigits: 5,
    }).format(value)

    return BASE_CURRENCY_CODE + ' ' + currency;
};


keyUpFmtNumber = (_this) => {
    let value = $(_this).val();

    if(value.length < 4) {
        $(_this).closest('div').find('.body-fmtnumber').html('');
        return false;
    }

    let number = fmtNumber(value, 2);
    if(number !== 0) {
        $(_this).closest('div').find('.body-fmtnumber').html(number)
    } else {
        $(_this).closest('div').find('.body-fmtnumber').html('')
    }
}

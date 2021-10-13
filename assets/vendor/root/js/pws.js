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

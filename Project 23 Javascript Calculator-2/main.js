function displaynum(param) {
    $('input').val(String($('input').val()) + param);
}

$('.equal').on('click', function () {
    $('input').val(eval($('input').val()));
})
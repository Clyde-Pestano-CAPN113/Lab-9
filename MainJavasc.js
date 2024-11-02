//When the document loads up
$(document).ready(function () {
    //get the class filter and all its buttons then check if any are clicked
    $('.filter-buttons button').on('click', function () {
        const filter = $(this).data('filter');
        if (filter === 'all') {
            $('.gallery .image').fadeIn();
        } else {
            $('.gallery .image').hide();
            $(`.gallery .${filter}`).fadeIn();
        }
    });
});
$(document).ready(function () {
    $('.gallery img').on('click', function () {
        const src = $(this).attr('src');
        $('#lightbox-img').attr('src', src);
        $('#lightbox').removeClass('hidden');
    });
    $('#lightbox').on('click', function () {
        $(this).addClass('hidden');
    });
});
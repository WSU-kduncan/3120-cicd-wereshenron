$(
    () => {
        $('#conceal').css('display','none');
        $('#readMore').on('click',function() {
            $('#conceal').css('display','block')
        });

    }
);
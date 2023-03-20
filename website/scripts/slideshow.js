$(
    () => {
        let slideNumber = 0;
        $('#rightbutton').click(e => {
            if (slideNumber < 6) {
                $('.slideImages').animate({
                    left: '-=401px'
                }, 1000  );
                slideNumber++;
                
            }
        })
        $('#leftbutton').click(e => {
            if (slideNumber > 0) {
                $('.slideImages').animate({
                    left: '+=401px'
                }, 1000);
                slideNumber--;
                
            }
        })
    }
);
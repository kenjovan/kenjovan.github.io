$(window).scroll(function(){
    let wScroll = $(this).scrollTop();


    // jumbotron

    $('.jumbotron .left').css({
        'transform': 'translate(0, '+ wScroll/4 + '%)'
    })

    $('.jumbotron img').css({
        'transform': 'translate(0, '+ wScroll/3 +'%)'
    })

    

});

function send_message(){
    var nama = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    window.open(
        `https://api.whatsapp.com/send?phone=6281294688701&text= Halo, saya ${nama} dengan email ${email} ingin menanyakan perihal:%0a ${message}`,
        '_blank'
    );
}
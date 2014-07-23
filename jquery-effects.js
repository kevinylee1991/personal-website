$(document).ready(function(){
    $('.description').css('opacity', 0);

    $(document).on('mouseover', 'a', function(){
        $(this).children('.description').stop().animate({
            opacity: 0.8
        }, 300);
    });

    $(document).on('mouseleave', 'a', function(){
        $(this).children('.description').stop().animate({
            opacity: 0
        }, 300);
    });

    $('button').hover(
        function(){
            $(this).stop().css('background-color', 'rgb(230,230,230)');
        },
        function(){
            $(this).stop().css('background-color', 'transparent');
        }
    );

    $('button').click(function(){
        $('#above-space').slideUp('slow');
        $('#bottom-space').slideUp('slow', function() {
            $('ul').css('font-size', '14px');
        });
        $('#content').css('visibility', 'visible');
    });

    $('#smile').click(function() {
        $('#content').css('visibility', 'hidden');
        $('#above-space').slideDown('slow');
        $('#bottom-space').slideDown('slow', function(){
            $('ul').css('font-size', '24px');
        });
    });
});
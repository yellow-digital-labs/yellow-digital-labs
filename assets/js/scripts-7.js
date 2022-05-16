$(document).ready(function () {
    /* нужно заменить на код блока Zero выполняющего роль меню */
    var blockMenuID = '#rec418485955';
    //Добавляем класс с шириной и фиксацией
    $(blockMenuID).addClass('floating fixed');
    //Когда начался скролл экрана
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        //Если перемещение больше 5 px
        if (top >= 150) {
            //То добавляем к меню наш фон
            $(blockMenuID).addClass('fonmenu');
        } else {
            //Если поднялись наверх, то удаляем фон
            $(blockMenuID).removeClass('fonmenu');
        }
    });
});
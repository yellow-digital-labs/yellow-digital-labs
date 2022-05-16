$(document).ready(function () {
    var ZeroPopID = '#rec419070379';//ID Zero
    var PopWindID = '#rec419072131';//ID PopUp окна BF503

    $(PopWindID + " .t-popup__container").addClass("shirina").html($(ZeroPopID)).parent(".t-popup").addClass("parpadding");
    $('a[href^="#popupzero"]').click(function (e) {
        e.preventDefault();
        setTimeout(function () { window.dispatchEvent(new Event('resize')); }, 10);
    });
    $(document).on('click', 'a[href="#close"], ' + ZeroPopID + ' .t396__filter', function (e) { e.preventDefault(); t390_closePopup(PopWindID.replace(/[^0-9]/gim, "")); });
    $(ZeroPopID).delegate(".t-submit", "click", function () {
        setTimeout(function () { if ($(ZeroPopID + " .t-form").hasClass("js-send-form-success")) { t390_closePopup(PopWindID.replace(/[^0-9]/gim, "")) } }, 1000);
    });
}); 
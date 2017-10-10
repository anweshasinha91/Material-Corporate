/**
 * Created by anweshasinha on 07/09/17.
 */
jQuery(document).ready(function () {
    jQuery('.mobile-header .logo-header-mobile').click(function () {
        jQuery('.mobile-header-content').css('transform','translateX(0)');
        jQuery('.mobile-close-drawer').css("display", "block");
        jQuery('.mobile-close-drawer').css("background-color", "rgba(0,0,0,.5)");
    })
    jQuery('.mobile-close-drawer').click(function () {
        jQuery('.mobile-header-content').css('transform','translateX(-290px)');
        jQuery('.mobile-close-drawer').css("background-color", "transparent");
        jQuery('.mobile-close-drawer').css("display", "none");
    });
})

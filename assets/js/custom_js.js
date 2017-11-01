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
    if( jQuery('.node__content section').children().length == 0) {
        jQuery('.node__content section').css('display','none');
    }
    jQuery('.node__content .row .field__image').each(function () {
        var imgEl3 = jQuery(this).find('img');
            var img_element = imgEl3.parent();
            var src = imgEl3.attr('src');
            var mq = window.matchMedia("(max-width: 599px)");
            jQuery(img_element).css('background-image', 'url('+ src +')');
            jQuery(img_element).css('width', '100%');
            jQuery(img_element).css('background-size', '100%');
            jQuery(img_element).css('background-position', 'center center');
            jQuery(img_element).css('background-repeat', 'no-repeat');
            if(mq.matches)
            {
                jQuery(img_element).css('height', '300px');
            }
            else
            {
                jQuery(img_element).css('height', '450px');
            }
            imgEl3.hide();
    })
})

/**
 * This file contains all Drupal behaviours of the Imroth theme.
 *
 * Created by ralph on 05.01.14.
 */

(function ($) {

    /**
     * Make equal column heights on Kommunikation pages.
     */
    Drupal.behaviors.equalColumnHeights = {
        attach: function () {
            // local functions
            var maxHeight = 0,
                _calcMaxHeight = function() {
                    // get max height
                    var iHeight = $(this).outerHeight();
                    if (iHeight > maxHeight) {
                        maxHeight = iHeight;
                    }
                },
                _adjustHeight = function() {
                    // adjust heights of each column
                    var iHeight = $(this).outerHeight();
                    if (maxHeight > iHeight) {
                        $(this).outerHeight(maxHeight);
                    }
                },
                _fixColumns = function(nodes) {
                    maxHeight = 0;
                    var columns = nodes.find('.at-panel > .region:not(.region-conditional-stack) > .region-inner');
                    columns.each(_calcMaxHeight);
                    columns.each(_adjustHeight);
                },
                makeEqualColumns = function() {
                    // equal column heights of specific nodes (not for mobile)
                    if ($(window).width() > 480) {
                        _fixColumns($('.node-page-text-image'));
                        _fixColumns($('.node-page-netzwerk'));
                    }
                };

            $(document).ready(function(){
                $(window).load(makeEqualColumns);
            });

        }
    };

    /**
     * Corrects active trail of superfish nav-bar-menu and closes menu from level 3 after click.
     */
    Drupal.behaviors.activeTrailCorrection = {
        attach: function () {
            // add active-trail all the way up to top level menu
            $('#superfish-1').find('li').has('li.active-trail').addClass('active-trail');
        }
    }

    /**
     * Activates menu "Aktivierung" for all pages below this menu.
     */
    Drupal.behaviors.activateMenuAktivierung = {
        attach: function () {
            // find specific 'letter'-pages
            var aktivierungPage = $('body').has('#node-69, #node-70, #node-71, #node-72, #node-73, #node-74, #node-75, #node-76, #node-77, #node-78, #node-79');
            if (aktivierungPage.length > 0) {
                aktivierungPage.find('#menu-active-main').addClass('active').parent().addClass('active-trail');
            }

        }
    }

})(jQuery);
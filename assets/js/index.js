/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){
        $(".post-content, .post-excerpt").fitVids();
      $('iframe[src*="spotify"]').attr({width: 288, height: 368}).wrap($('<div />').css({'width': 288, 'margin': '1em auto'}));
    });

}(jQuery));
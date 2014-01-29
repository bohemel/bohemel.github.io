/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){
        $(".post-content, .post-excerpt").fitVids();
      $('iframe[src*="spotify"]').wrap($('<div />').css({'width': 300, 'margin': '1em auto'}));
    });

}(jQuery));
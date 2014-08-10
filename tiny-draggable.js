/*
    jQuery tinyDraggable v1.0.0-beta
    Copyright (c) 2014 Simon Steinberger / Pixabay
    GitHub: https://github.com/Pixabay/jQuery-tinyDraggable
    More info: http://pixabay.com/blog/posts/p-52/
    License: http://www.opensource.org/licenses/mit-license.php
*/

(function($){
    $.fn.tinyDraggable = function(options){
        var settings = $.extend({ handle: null, exclude: null }, options);
        return this.each(function(){
            var dx, dy, el = $(this), handle = settings.handle ? $(settings.handle, el) : el;
            handle.on({
                mousedown: function(e){
                    if (settings.exclude && ~$.inArray(e.target, $(settings.exclude, el))) return;
                    var os = el.offset(); dx = e.pageX-os.left, dy = e.pageY-os.top;
                    $(document).on('mousemove.drag', function(e){ el.offset({top: e.pageY-dy, left: e.pageX-dx}); });
                },
                mouseup: function(e){ $(document).off('mousemove.drag'); }
            });
        });
    }
}(jQuery));
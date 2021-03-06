const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;
const Lang = imports.lang;
const Main = imports.ui.main;
const ThumbnailsSlider = imports.ui.overviewControls.ThumbnailsSlider.prototype;

const init = function () {
    return new hideVisible();
}

const hideVisible = new Lang.Class({
    Name: 'hideWorkspace.hideVisible',
    
    _init: function() {
        //old solution
        //thumbnailsBoxOp = Main.overview._controls._thumbnailsSlider.actor.opacity;
        tmp_getAlwaysZoomOut = ThumbnailsSlider._getAlwaysZoomOut;
        tmp_getNonExpandedWidth = ThumbnailsSlider.getNonExpandedWidth;
    },

    enable: function() {
        ThumbnailsSlider._getAlwaysZoomOut = function () { return false; }
        ThumbnailsSlider.getNonExpandedWidth = function () { return 0; }
    },

    disable: function() {
        ThumbnailsSlider._getAlwaysZoomOut = tmp_getAlwaysZoomOut;
        ThumbnailsSlider.getNonExpandedWidth = tmp_getNonExpandedWidth;
    }
});

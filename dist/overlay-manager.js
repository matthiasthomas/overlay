"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NguiOverlayManager = (function () {
    function NguiOverlayManager() {
    }
    NguiOverlayManager_1 = NguiOverlayManager;
    NguiOverlayManager.prototype.register = function (overlay) {
        NguiOverlayManager_1.overlays[overlay.id] = overlay;
        // console.log('overlay.register, OverlayManager.overlays', OverlayManager.overlays);
    };
    NguiOverlayManager.prototype.open = function (arg, event) {
        var overlay = this.getOverlayFromArg(arg);
        if (!overlay.opened) {
            overlay.positionIt(event);
            overlay.opened = true;
        }
    };
    NguiOverlayManager.prototype.close = function (arg) {
        var overlay = this.getOverlayFromArg(arg);
        overlay.element.style.display = 'none';
        overlay.opened = false;
    };
    NguiOverlayManager.prototype.toggle = function (arg, event) {
        var overlay = this.getOverlayFromArg(arg);
        if (overlay.opened)
            this.close(overlay);
        else
            this.open(overlay);
    };
    NguiOverlayManager.prototype.isOpen = function (arg) {
        var overlay = this.getOverlayFromArg(arg);
        return overlay.opened;
    };
    NguiOverlayManager.prototype.getOverlayFromArg = function (arg) {
        var overlay = typeof arg === 'string' ? NguiOverlayManager_1.overlays[arg] : arg;
        return overlay;
    };
    //list of overlay objects
    NguiOverlayManager.overlays = {};
    NguiOverlayManager = NguiOverlayManager_1 = __decorate([
        core_1.Injectable()
    ], NguiOverlayManager);
    return NguiOverlayManager;
    var NguiOverlayManager_1;
}());
exports.NguiOverlayManager = NguiOverlayManager;
//# sourceMappingURL=overlay-manager.js.map
import { Injectable } from "@angular/core";

import { NguiOverlay } from "./overlay";

@Injectable()
export class NguiOverlayManager {
  //list of overlay objects
  static overlays: { [id: string]: NguiOverlay } = {};

  register(overlay: NguiOverlay): void {
    NguiOverlayManager.overlays[overlay.id] = overlay;
    // console.log('overlay.register, OverlayManager.overlays', OverlayManager.overlays);
  }

  open(arg: string | NguiOverlay, event?: Event): void {
    let overlay = this.getOverlayFromArg(arg);
    if (!overlay.opened) {
      overlay.positionIt(event);
      overlay.opened = true;
    }
  }

  close(arg: string | NguiOverlay): void {
    let overlay = this.getOverlayFromArg(arg);
    overlay.element.style.display = 'none'
    overlay.opened = false;
  }

  toggle(arg: string | NguiOverlay, event?: Event): void {
    let overlay = this.getOverlayFromArg(arg);
    if (overlay.opened) this.close(overlay);
    else this.open(overlay);
  }

  isOpen(arg: string | NguiOverlay): Boolean {
    let overlay = this.getOverlayFromArg(arg);
    return overlay.opened;
  }

  getOverlayFromArg(arg: string | NguiOverlay): NguiOverlay {
    let overlay: NguiOverlay = typeof arg === 'string' ? NguiOverlayManager.overlays[arg] : arg;
    return overlay;
  }
}


import { makeEventListenerStack } from "@solid-primitives/event-listener";
import { clamp, noop } from "@solid-primitives/utils";
import { isServer } from "solid-js/web";
const PASSIVE = { passive: true };
/** @internal */
export const DEFAULT_MOUSE_POSITION = {
  x: 0,
  y: 0,
  isInside: false,
  sourceType: null,
};
/** @internal */
export const DEFAULT_RELATIVE_ELEMENT_POSITION = {
  x: 0,
  y: 0,
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  isInside: true,
};
/**
 * Attaches event listeners to provided targat, listeneing for changes to the mouse/touch position.
 * @param target
 * ```ts
 * SVGSVGElement | HTMLElement | Window | Document
 * ```
 * @param callback function fired on every position change
 * @param options {@link UseTouchOptions} & {@link FollowTouchOptions}
 * @returns function removing all event listeners
 */
export function makeMousePositionListener(target = window, callback, options = {}) {
  if (isServer) {
    return noop;
  }
  const { touch = true, followTouch = true } = options;
  const [listen, clear] = makeEventListenerStack(target, PASSIVE);
  const handleMouse = e => callback({ x: e.pageX, y: e.pageY, sourceType: "mouse" });
  listen("mousemove", handleMouse);
  listen("dragover", handleMouse);
  if (touch) {
    const handleTouch = e => {
      if (e.touches.length)
        callback({ x: e.touches[0].clientX, y: e.touches[0].clientY, sourceType: "touch" });
    };
    listen("touchstart", handleTouch);
    if (followTouch) listen("touchmove", handleTouch);
  }
  return clear;
}
/**
 * Attaches event listeners to provided targat, listening for mouse/touch entering/leaving the element.
 * @param target
 * ```ts
 * SVGSVGElement | HTMLElement | Window | Document
 * ```
 * @param callback function fired on mouse leaving or entering the element
 * @param options {@link UseTouchOptions}
 * @returns function removing all event listeners
 */
export function makeMouseInsideListener(target = window, callback, options = {}) {
  if (isServer) {
    return noop;
  }
  const { touch = true } = options;
  const [listen, clear] = makeEventListenerStack(target, PASSIVE);
  let mouseIn = false;
  let touchIn = !touch;
  function handleChange(isInside) {
    this === "mouse" ? (mouseIn = isInside) : (touchIn = isInside);
    callback(mouseIn || touchIn);
  }
  listen("mouseover", handleChange.bind("mouse", true));
  listen("mouseout", handleChange.bind("mouse", false));
  // mousemove with once is for the situations where the cursor has entered the element before the listeners could attach
  listen("mousemove", handleChange.bind("mouse", true), { passive: true, once: true });
  if (touch) {
    listen("touchstart", handleChange.bind("touch", true));
    listen("touchend", handleChange.bind("touch", false));
  }
  return clear;
}
/**
 * Turn position relative to the page, into position relative to an element.
 */
export const getPositionToElement = (pageX, pageY, el) => {
  if (isServer) {
    return DEFAULT_RELATIVE_ELEMENT_POSITION;
  }
  const bounds = el.getBoundingClientRect(),
    top = bounds.top + window.scrollY,
    left = bounds.left + window.scrollX,
    x = pageX - left,
    y = pageY - top,
    { width, height } = bounds;
  return {
    x,
    y,
    top,
    left,
    width,
    height,
    isInside: x >= 0 && y >= 0 && x <= width && y <= height,
  };
};
/**
 * Turn position relative to the page, into position relative to an element. Clamped to the element bounds.
 */
export const getPositionInElement = (pageX, pageY, el) => {
  if (isServer) {
    return DEFAULT_RELATIVE_ELEMENT_POSITION;
  }
  const relative = getPositionToElement(pageX, pageY, el);
  return {
    ...relative,
    x: clamp(relative.x, 0, relative.width),
    y: clamp(relative.y, 0, relative.height),
  };
};
/**
 * Turn position relative to the page, into position relative to the screen.
 */
export const getPositionToScreen = isServer
  ? () => DEFAULT_MOUSE_POSITION
  : (pageX, pageY) => ({
      x: pageX - window.scrollX,
      y: pageY - window.scrollY,
    });

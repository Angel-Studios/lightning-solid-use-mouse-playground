import { type Position } from "@solid-primitives/utils";
import type {
  FollowTouchOptions,
  MousePosition,
  MousePositionInside,
  PositionRelativeToElement,
  UseTouchOptions,
} from "./types.js";
/** @internal */
export declare const DEFAULT_MOUSE_POSITION: MousePositionInside;
/** @internal */
export declare const DEFAULT_RELATIVE_ELEMENT_POSITION: PositionRelativeToElement;
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
export declare function makeMousePositionListener(
  target: (SVGSVGElement | HTMLElement | Window | Document) | undefined,
  callback: (position: MousePosition) => void,
  options?: UseTouchOptions & FollowTouchOptions,
): VoidFunction;
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
export declare function makeMouseInsideListener(
  target: (SVGSVGElement | HTMLElement | Window | Document) | undefined,
  callback: (isInside: boolean) => void,
  options?: UseTouchOptions,
): VoidFunction;
/**
 * Turn position relative to the page, into position relative to an element.
 */
export declare const getPositionToElement: (
  pageX: number,
  pageY: number,
  el: Element,
) => PositionRelativeToElement;
/**
 * Turn position relative to the page, into position relative to an element. Clamped to the element bounds.
 */
export declare const getPositionInElement: (
  pageX: number,
  pageY: number,
  el: Element,
) => PositionRelativeToElement;
/**
 * Turn position relative to the page, into position relative to the screen.
 */
export declare const getPositionToScreen: (pageX: number, pageY: number) => Position;

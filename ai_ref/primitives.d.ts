import { type MaybeAccessor, type Position } from "@solid-primitives/utils";
import { type Accessor } from "solid-js";
import type {
  FollowTouchOptions,
  MousePositionInside,
  PositionRelativeToElement,
  UseTouchOptions,
} from "./types.js";
export interface MousePositionOptions extends UseTouchOptions, FollowTouchOptions {
  /**
   * Initial values
   * @default { x: 0, y: 0, isInside: false, sourceType: null }
   */
  initialValue?: Partial<MousePositionInside>;
}
export interface PositionToElementOptions extends UseTouchOptions, FollowTouchOptions {
  /**
   * Initial value
   * @default { x: 0, y: 0, top: 0, left: 0, width: 0, height: 0, isInside: false }
   */
  initialValue?: Partial<PositionRelativeToElement>;
}
/**
 * Attaches event listeners to {@link target} element to provide a reactive object of current mouse position on the page.
 * @param target (Defaults to `window`) element to attach the listeners to – can be a reactive function
 * @param options {@link MousePositionOptions}
 * @returns reactive object of current mouse position on the page
 * ```ts
 * { x: number, y: number, sourceType: MouseSourceType, isInside: boolean }
 * ```
 * @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/mouse#createmouseposition
 * @example
 * const [el, setEl] = createSignal(ref)
 * const pos = createMousePosition(el, { touch: false })
 * createEffect(() => {
 *   console.log(pos.x, pos.y)
 * })
 */
export declare function createMousePosition(
  target?: MaybeAccessor<SVGSVGElement | HTMLElement | Window | Document>,
  options?: MousePositionOptions,
): MousePositionInside;
/**
 * Attaches event listeners to `window` to provide a reactive object of current mouse position on the page.
 *
 * This is a [singleton root primitive](https://github.com/solidjs-community/solid-primitives/tree/main/packages/rootless#createSingletonRoot).
 * @returns reactive object of current mouse position on the page
 * ```ts
 * { x: number, y: number, sourceType: MouseSourceType, isInside: boolean }
 * ```
 * @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/mouse#useMousePosition
 * @example
 * const pos = useMousePosition()
 * createEffect(() => {
 *   console.log(pos.x, pos.y)
 * })
 */
export declare const useMousePosition: () => MousePositionInside;
/**
 * Provides an autoupdating position relative to an element based on provided page position.
 *
 * @param element target `Element` used in calculations
 * @param pos reactive function returning page position *(relative to the page not window)*
 * @param options {@link PositionToElementOptions}
 * @returns Autoupdating position relative to top-left of the target + current bounds of the element.
 *
 * @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/mouse#createPositionToElement
 *
 * @example
 * const [el, setEl] = createSignal(ref)
 * const pos = useMousePosition()
 * const relative = createPositionToElement(el, () => pos)
 * createEffect(() => {
 *   console.log(relative.x, relative.y)
 * })
 */
export declare function createPositionToElement(
  element: Element | Accessor<Element | undefined>,
  pos: Accessor<Position>,
  options?: PositionToElementOptions,
): PositionRelativeToElement;

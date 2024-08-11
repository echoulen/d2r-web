// Type definitions for win-control
// Project: https://github.com/sentialx/node-window-manager
// Definitions by: [Your Name]

declare module 'win-control' {
  /**
   * Represents a window handle.
   */
  type WindowHandle = number;

  /**
   * Represents a rectangle structure.
   */
  interface Rect {
    left: number;
    top: number;
    right: number;
    bottom: number;
  }

  /**
   * Finds windows based on class name and window name.
   * @param className The class name of the window.
   * @param windowName The name of the window.
   * @returns An array of window handles.
   */
  function findWindows(className: string | null, windowName: string | null): WindowHandle[];

  /**
   * Finds a single window based on class name and window name.
   * @param className The class name of the window.
   * @param windowName The name of the window.
   * @returns A window handle or null if not found.
   */
  function findWindow(className: string | null, windowName: string | null): WindowHandle | null;

  /**
   * Sets the foreground window.
   * @param handle The handle of the window to bring to the foreground.
   * @returns A boolean indicating success or failure.
   */
  function setForeground(handle: WindowHandle): boolean;

  /**
   * Gets the rectangle of a window.
   * @param handle The handle of the window.
   * @returns A Rect object representing the window's position and size.
   */
  function getWindowRect(handle: WindowHandle): Rect;

  /**
   * Gets the process ID of a window.
   * @param handle The handle of the window.
   * @returns The process ID.
   */
  function getWindowProcessId(handle: WindowHandle): number;

  /**
   * Gets the class name of a window.
   * @param handle The handle of the window.
   * @returns The class name of the window.
   */
  function getClassName(handle: WindowHandle): string;

  /**
   * Gets the title of a window.
   * @param handle The handle of the window.
   * @returns The title of the window.
   */
  function getWindowTitle(handle: WindowHandle): string;

  /**
   * Checks if a window is minimized.
   * @param handle The handle of the window.
   * @returns A boolean indicating if the window is minimized.
   */
  function isMinimized(handle: WindowHandle): boolean;

  /**
   * Minimizes a window.
   * @param handle The handle of the window to minimize.
   */
  function minimize(handle: WindowHandle): void;

  /**
   * Maximizes a window.
   * @param handle The handle of the window to maximize.
   */
  function maximize(handle: WindowHandle): void;

  /**
   * Restores a window from minimized or maximized state.
   * @param handle The handle of the window to restore.
   */
  function restore(handle: WindowHandle): void;
}

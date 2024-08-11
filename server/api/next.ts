import {mouse, Point} from "@nut-tree-fork/nut-js";
import { findWindows } from "win-control";
import {switchWindows} from "~/server/core/test";

export default defineEventHandler(async (event) => {
  await mouse.move([new Point(100, 100)]);
  switchWindows().catch((error: Error) => console.error(error));
})

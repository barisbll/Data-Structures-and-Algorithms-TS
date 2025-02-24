import { assertEquals } from "https://deno.land/std@0.101.0/testing/asserts.ts";
import {
    isArrayContainCommonElement,
    isArrayContainCommonElementWithHashmap,
} from "./compare_arrays.ts";

Deno.test("array doesn't have common element", () => {
    const arr1 = ["a", "b", "c", "x"];
    const arr2 = ["z", "y", "i"];

    const isCommon = isArrayContainCommonElement(arr1, arr2);

    assertEquals(isCommon, false);
});

Deno.test("array should not return common element", () => {
    const arr1 = ["a", "b", "c", "x"];
    const arr3 = ["z", "y", "x"];

    const isCommon = isArrayContainCommonElement(arr1, arr3);

    assertEquals(isCommon, true);
});
Deno.test("with hashmap array doesn't have common element", () => {
    const arr1 = ["a", "a", "b", "c", "x"];
    const arr2 = ["z", "y", "i"];

    const isCommon = isArrayContainCommonElementWithHashmap(arr1, arr2);

    assertEquals(isCommon, false);
});

Deno.test("with hashmap array should not return common element", () => {
    const arr1 = ["a", "b", "c", "x"];
    const arr3 = ["z", "y", "x"];

    const isCommon = isArrayContainCommonElementWithHashmap(arr1, arr3);

    assertEquals(isCommon, true);
});

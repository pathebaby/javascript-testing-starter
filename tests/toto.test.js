import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro";

describe('max-1', ()=>{
    it("should return the second arg if it greatest", ()=>{
        expect(max(1,2)).toBe(1)

    })
})
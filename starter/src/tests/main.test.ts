// import { it, expect, describe } from 'vitest'


// describe('group', () => {
//     it('should', () => {
//         expect(1).toBeTruthy();
//     })
// })

import { describe, it, expect } from 'vitest';
import { addition } from '../utils/math';

describe('Math functions', () => {
    it('adds two numbers', () => {
        expect(addition(2, 3)).toBe(5);
    });

    //   it('subtracts two numbers', () => {
    //     expect(subtract(5, 3)).toBe(2);
    //   });
});

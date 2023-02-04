import { math } from "../../src/controllers/math.controller"

describe('math controller', () => {
    describe('add forty two', () => {
        it('should return 42 when input is 0', () => {
            const number = 0
            const result = math.addFortyTwo(number)
            expect(result).toEqual(42)
        })
        it('should add forty two to input', () => {
            const number = 1
            const result = math.addFortyTwo(number)
            expect(result).toEqual(43)
        })
        it('should throw an error if input is invalid', () => {
            const number = 'abcdbchd'
            expect(() => {
                const result = math.addFortyTwo(+number)
            }).toThrow('invalid input')
        })

    })
})
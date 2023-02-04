const addFortyTwo = (input: number) => {
    if (isNaN(input)){
        throw new Error(`invalid input: ${input}`)
    }

    return input + 42
}

const math = {
    addFortyTwo
}

export { math }
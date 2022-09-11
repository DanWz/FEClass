function doSomething(x, y) {
    if (typeof x != 'string') {
        throw new Error('x is not a string')
    }
    return x + y;
}
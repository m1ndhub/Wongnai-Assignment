const ThisIsCache = require('./sampleClass.js'); // Adjust the path accordingly

    test('get returns -1 for non-existing value', () => {
        const c = new ThisIsCache(2);
        c.put(5);
        expect(c.get(8)).toBe(-1);
    });

    test('get returns the value for an existing value', () => {
        const c = new ThisIsCache(2);
        c.put(5);
        expect(c.get(5)).toBe(5);
    });

    test('put adds a value to the cache', () => {
        const c = new ThisIsCache(2);
        c.put(5);
        expect(c.get(5)).toBe(5);
    });

    test('put value instead the oldest value when the cache is full', () => {
        const c = new ThisIsCache(2);
        c.put(5);
        c.put(10);
        c.put(15);
        expect(c.get(5)).toBe(-1);
    });

    test('get returns -1 for an empty cache', () => {
        const c = new ThisIsCache(2);
        expect(c.get(5)).toBe(-1);
    });

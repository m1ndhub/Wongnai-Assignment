class ThisIsCache {
    constructor(sizeOfCache) {
        this.sizeOfCache = sizeOfCache;
        this.cache = [];
    }

    get(value) {
        if (this.cache.includes(value)) {
            return value
        } else {
            return -1
        }
    }
    put(value) {
        if (this.cache.length >= this.sizeOfCache) {
            this.cache.shift();
        }
        this.cache.push(value);
    }
}

module.exports = ThisIsCache;

const c = new ThisIsCache(2);
c.put(5);
c.get(8); // return -1
c.get(5); // return 5

console.log(c.get(5));
console.log(c.get(8));


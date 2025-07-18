//  Assignmet 7. Build your hashmap, handle your own collision and create your own hash function
var MyHashMap = /** @class */ (function () {
    function MyHashMap(size) {
        if (size === void 0) { size = 10; }
        this.size = size;
        this.buckets = [];
        for (var i = 0; i < size; i++) {
            this.buckets.push([]);
        }
        //this.buckets = new Array(size).fill(null).map(() => []);
    }
    MyHashMap.prototype.hash = function (key) {
        var hash = 0;
        if (key.length === 0)
            return hash;
        for (var i = 0; i < key.length; i++) {
            hash = (hash << 5) - hash + key.charCodeAt(i);
            hash |= 0;
        }
        return Math.abs(hash) % this.size;
    };
    MyHashMap.prototype.set = function (key, value) {
        var index = this.hash(key);
        for (var _i = 0, _a = this.buckets[index]; _i < _a.length; _i++) {
            var pair = _a[_i];
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }
        this.buckets[index].push([key, value]);
    };
    MyHashMap.prototype.get = function (key) {
        var index = this.hash(key);
        for (var _i = 0, _a = this.buckets[index]; _i < _a.length; _i++) {
            var pair = _a[_i];
            if (pair[0] === key)
                return pair[1];
        }
        return undefined;
    };
    MyHashMap.prototype.delete = function (key) {
        var index = this.hash(key);
        var bucket = this.buckets[index];
        for (var i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    return MyHashMap;
}());
function tests() {
    var map = new MyHashMap(5);
    console.log("=== Test 1: Add and Get ===");
    map.set("apple", 10);
    map.set("banana", 20);
    console.log(map.get("apple") === 10 ? "apple = 10" : "apple failed");
    console.log(map.get("banana") === 20 ? "banana = 20" : "banana failed");
    console.log("\n=== Test 2: Update Existing Key ===");
    map.set("apple", 99);
    console.log(map.get("apple") === 99 ? "apple updated to 99" : "apple update failed");
    console.log("\n=== Test 3: Get Non-Existing Key ===");
    console.log(map.get("cherry") === undefined ? "cherry not found" : "cherry test failed");
    console.log("\n=== Test 4: Delete Key ===");
    var deleted = map.delete("banana");
    console.log(deleted ? "banana deleted" : "banana not deleted");
    console.log(map.get("banana") === undefined
        ? "banana no longer exists"
        : "banana still found");
    console.log("\n=== Test 5: Delete Non-Existing Key ===");
    var deletedMissing = map.delete("grape");
    console.log(!deletedMissing ? "grape not found for deletion" : "deletion result wrong");
    console.log("\n=== Test 6: Handle Collisions ===");
    // Force collision by using keys that map to the same index
    var key1 = "ab"; // hash -> some index
    var key2 = "ba"; // different string but might hash to same index in small size
    map.set(key1, 111);
    map.set(key2, 222);
    var val1 = map.get(key1);
    var val2 = map.get(key2);
    console.log(val1 === 111 ? "".concat(key1, " = 111") : "".concat(key1, " failed"));
    console.log(val2 === 222 ? "".concat(key2, " = 222") : "".concat(key2, " failed"));
    console.log("\nAll tests completed.");
}
tests();

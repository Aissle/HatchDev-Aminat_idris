//  Assignmet 7. Build your hashmap, handle your own collision and create your own hash function

class MyHashMap {
  buckets: [string, any][][];
  size: number;

  constructor(size = 10) {
    this.size = size;
    this.buckets = [];
    for (let i = 0; i < size; i++) {
      this.buckets.push([]);
    }
    //this.buckets = new Array(size).fill(null).map(() => []);
  }

  private hash(key: string): number {
    let hash = 0;
    if (key.length === 0) return hash;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) - hash + key.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash) % this.size;
  }

  public set(key: string, value: any): void {
    const index = this.hash(key);
    for (const pair of this.buckets[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    this.buckets[index].push([key, value]);
  }

  public get(key: string): any {
    const index = this.hash(key);
    for (const pair of this.buckets[index]) {
      if (pair[0] === key) return pair[1];
    }
    return undefined;
  }

  public delete(key: string): boolean {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}

function tests() {
  const map = new MyHashMap(5);

  console.log("=== Test 1: Add and Get ===");
  map.set("apple", 10);
  map.set("banana", 20);
  console.log(map.get("apple") === 10 ? "apple = 10" : "apple failed");
  console.log(map.get("banana") === 20 ? "banana = 20" : "banana failed");

  console.log("\n=== Test 2: Update Existing Key ===");
  map.set("apple", 99);
  console.log(
    map.get("apple") === 99 ? "apple updated to 99" : "apple update failed"
  );

  console.log("\n=== Test 3: Get Non-Existing Key ===");
  console.log(
    map.get("cherry") === undefined ? "cherry not found" : "cherry test failed"
  );

  console.log("\n=== Test 4: Delete Key ===");
  const deleted = map.delete("banana");
  console.log(deleted ? "banana deleted" : "banana not deleted");
  console.log(
    map.get("banana") === undefined
      ? "banana no longer exists"
      : "banana still found"
  );

  console.log("\n=== Test 5: Delete Non-Existing Key ===");
  const deletedMissing = map.delete("grape");
  console.log(
    !deletedMissing ? "grape not found for deletion" : "deletion result wrong"
  );

  console.log("\n=== Test 6: Handle Collisions ===");
  const key1 = "ab";
  const key2 = "ba";

  map.set(key1, 111);
  map.set(key2, 222);

  const val1 = map.get(key1);
  const val2 = map.get(key2);

  console.log(val1 === 111 ? `${key1} = 111` : `${key1} failed`);
  console.log(val2 === 222 ? `${key2} = 222` : `${key2} failed`);

  console.log("\nAll tests completed.");
}

tests();

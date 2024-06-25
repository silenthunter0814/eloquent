class PGroup {
    #members;
    constructor(members) {
      this.#members = members;
    }
  
    add(value) {
      if (this.has(value)) return this;
      return new PGroup(this.#members.concat([value]));
    }  
    delete(value) {
      if (!this.has(value)) return this;
      return new PGroup(this.#members.filter(m => m !== value));
    }  
    has(value) {
      return this.#members.includes(value);
    }
  
    static empty = new PGroup([]);
  }
  
  let a = PGroup.empty.add("a");
  let ab = a.add("b");
  let b = ab.delete("a");
  
  console.log(b.has("b"));
  // → true
  console.log(a.has("b"));
  // → false
  console.log(b.has("a"));
  // → false

  /* 您只需要一个空实例，因为所有空组都是相同的，并且类的实例不会改变。您可以从该单个空组创建许多不同的组而不会影响它 */
  
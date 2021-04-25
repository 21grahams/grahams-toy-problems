// create a hashTable and implement insert, retrieve, remove and resize

var HashTable = function () {
  this._size = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      var oldValue = tuple[1];
      tuple[1] = v;
      return oldValue;
    }
  }

  bucket.push([k, v]);
  this._storage.set(index, bucket);
  this._size++;

  if (this._size > this._limit * 0.75) {
    this._resize(this._limit * 2);
  }

  return undefined;
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }

  return undefined;
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      this._size--;
      if (this._size < this._limit * 0.25) {
        this._resize(Math.floor(this._limit / 2));
      }
      return tuple[1];
    }
  }

  return undefined;
};

HashTable.prototype._resize = function (newLimit) {
  var oldStorage = this._storage;

  // min size of 8, return if nothing to do!
  newLimit = Math.max(newLimit, 8);
  if (newLimit === this._limit) {
    return;
  }

  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  this._size = 0;

  oldStorage.each(
    function (bucket) {
      if (!bucket) {
        return;
      }
      for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        this.insert(tuple[0], tuple[1]);
      }
    }.bind(this)
  );
};

var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

let newHash = new HashTable();
newHash.insert('graham', 'hello')
newHash.insert('kirsh', 'world!')
console.log('newHash: ', newHash); // size: 2 | limit: 8
console.log('newHashRetrieve1: ', newHash.retrieve('graham')); // hello
console.log('newHashRetrieve2: ', newHash.retrieve('kirsh')); // world!
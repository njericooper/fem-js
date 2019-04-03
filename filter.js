const _ = ();

_.filter = funciton(arr, cb) {
    const storage = [];

    for (let i = 0; i < arr, length; i++) {
        if (cb(arr[i], i, arr) == true) {
            storage.push(arr[i]);
        }
    }
    return storage;
}
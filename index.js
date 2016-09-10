let m = new Map();
let o = [1, 2];
let v = [];

m.set('foo', 1);
m.set('bar', 2);

m.forEach(function (item) {
    v.push(item);
});

if (String(v) == String(o)) {
    console.info('Map#forEach is working.');
} else {
    console.error('Map#forEach is not working yet.');
}

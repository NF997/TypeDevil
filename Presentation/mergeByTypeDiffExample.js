var x, y;
x = {a: true};
y = {myX: x};
x = {a: 42};
y = {myX: x};

// Here merging by type diff doesn't work
var x, y;
x = true;
y = {myX: x};
x = 42;
y = {myX: x};
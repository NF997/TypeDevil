function addWrapped(x, y) {
    if (y) {
        return x.v + y.v;
    } else {
        return x.v;
    }
}

function Wrapper(v) {
    this.v = v;
}

addWrapped({v:23});
addWrapped({v:20}, new Wrapper(3));
addWrapped({v:"18"}, new Wrapper(5));
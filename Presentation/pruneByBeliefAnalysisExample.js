function BigInteger(a, b, c) { 
    this.array = new Array();
    if (a != null) // belief: a may be undefined or null
        if ('number' == typeof a) // belief: a may be number
            this.fromNumber(a, b, c);
        else if (b == null && // belief: b may be undefined or null
            'string' != typeof a) // belief: a may be string
            this.fromString(a, 256); 
        else  
            this.fromString(a, b);
}
    
function (c,a) {
        // Corruption char regex
    let r = /(¡|¢|£|¤|¥|¦|§|¨|©|ª|Ã|Á)/,
        // Regex to strip colors
        s = /`\w(.)`/g,
        // Original script output
        d = function() { return a.t.call().replace(s, "$1").split("") },
        // Original script output
        o = d()

    // continue until original output has no more corruption
    while (r.test(o.join(""))) {
        // iterate over a fresh output
        d().forEach((p, i) => {
            // if the origin output has corruption and the new doesn't,
            // replace the corrpution with the proper char
            if (r.test(o[i]) && !(r.test(p)))
                    o[i] = p
        })
    }

    return o.join("")
}

function (c,a) {
    let n = /(¡|¢|£|¤|¥|¦|§|¨|©|ª|Ã|Á)/, // Corruption char regex
        s = /`\w(.)`/g, // Regex to strip colors
        o = a.t.call().replace(s, "$1").split("") // Original script output

    while (n.test(o.join(""))) {
        a.t.call().replace(s, "$1").split("").forEach((p, i) => {
            if (n.test(o[i]) && !(n.test(p)))
                    o[i] = p
        })
    }

    return o.join("")
}

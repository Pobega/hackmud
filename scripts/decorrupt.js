function (c,a) {
    let n = "¡_¢_£_¤_¥_¦_§_¨_©_ª_Ã_Á".split("_"), // Corruption char array
        r = true,  // Repeat if true
        s = /`\w(.)`/g, // Regex to strip colors
        o = a.t.call().replace(s, "$1").split(""), // Original script output
        k // Consecutive call script output

    while (r) {
        k = a.t.call().replace(s, "$1").split("")
        r = false

        k.forEach((p, i) => {
            if (n.includes(o[i]))
                (n.includes(p)) ? r = true : o[i] = p
        })
    }

    return o.join("")
}

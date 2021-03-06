function (c,a) {

    if (!a || !a.t)
        return #fs.pobega.usage()

    // Corruption char regex using scripts.lib()
    let r = new RegExp(`[${#fs.scripts.lib().corruption_chars}]`),
        // Regex to strip colors
        s = /`\w(.)`/g,
        // Args to pass to scriptor
        x = (a.a) ? JSON.parse(JSON.stringify(a.a)) : null,
        // This fucked up one liner...
        //
        // a.t.call() returns either a string or an array. Using [].concat to
        // convert it to an array allows .join("\n") to always work, then
        // joins by \n to remove the commas, converts to a string, removes
        // the colors and then splits it back into a mutable array.
        //
        // I hate myself.
        //
        d = _ => ([].concat(a.t.call(x))).join("\n").toString().replace(s, "$1").split(""),
        // Original script output
        o = d()

    // continue until original output has no more corruption
    while (r.test(o.join("")))
        // iterate over a fresh output
        d().forEach((p, i) => {
            // if the origin output has corruption
            // replace the corrpution with the proper char
            if (r.test(o[i]))
                    o[i] = p
        })

    return o.join("")
}

function (c,a) {
    let corruption = ["¡","¢","£","¤","¥","¦","§","¨","©","ª","Ã","Á"],
        o = [],
        r = true,
        k = a.t.call()

    // Initial deep copy for o
    // This essentially lets us have a 'mutable' string
    for (let i=0; i<k.length; i++)
        o[i] = k[i]

    while (r) {
        let k = a.t.call()
        r = false

        for (let i=0; i<o.length; i++) {
            if (corruption.includes(o[i])) {
                // todo:
                // For some reason we aren't going into this if
                if (corruption.includes(k[i]))
                    r = true
                else
                    o[i] = k[i]
            }
        }
    }
    return o.join("")
}

function(c, a) { // t:#s.username.target
    let fp = a.t.call().split("\n"),   // Call front page and split by newline,
        n = fp[fp.length-1],           // just so we can get the last line.
        [d,e] = n.split(" | "),        // This splits our navigation pages into
                                       // the two separate page names we need.
    re = /^[A-Za-z0-9_]+$/g,           // This regexp checks for corruption.
    y = re.exec(n)                     // Run it against the nav page to avoid
    if (!!y) return {ok:false, msg:n}  // having bad navigation.
    return {ok:true, msg:n}            // This should only be hit if its good :)
}

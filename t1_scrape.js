function(c, a) { // t:#s.username.target
  do {
    var fp = a.t.call().split("\n"),   // Call front page and split by newline,
        n = fp[fp.length-1],           // just so we can get the last line.

        [d,e] = n.split(" | "),        // This splits our navigation pages into
                                       // the two separate page names we need.

        re = /^[A-Za-z0-9_|\s]+$/g,    // This regexp checks for corruption.

        y = re.test(n)                 // Run it against the nav page to avoid
                                       // having corrupt navigation.

  } while (!y)
  return {ok:true, msg:n}  // This should only be hit if its good :)
                           // Now we have our navigation.
}

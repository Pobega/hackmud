function (c,a) { // T2 CON_SPEC passes in {s:"string", d:digit}

    // Ensure that args were passed, and that those args are exactly
    // d:<digit> and s:<string>. Anything else, show the usage screen.
    if (c.is_scriptor || c.calling_script)
        return (args.s.match(new RegExp(args.d,"g")) || []).length
    else
        return #fs.pobega.usage()
}

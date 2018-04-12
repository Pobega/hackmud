function (c,a) {

    class lib {
        color(clr, msg)   { return `\`${clr}${msg}\`` }
    }

    if (c.is_scriptor || c.calling_script)
        return new lib()

    return #fs.pobega.usage()

}

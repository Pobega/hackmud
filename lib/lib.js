function (c,a) {

    class lib {
        color(clr, msg)   { return `\`${clr}${msg}\`` }
    }

    if (c.is_scriptor || c.calling_script)
        return new lib()

    let ilib = new lib()
    return `
:::pobega.lib:::


${ilib.color("2", "DESCRIPTION")}

  General purpose helper library for scripting. ${ilib.color("2", "FULLSEC")} guaranteed!


${ilib.color("L", "USAGE")}

  ${ilib.color("p", "let")} ${ilib.color("1", "lib")} = \#fs${ilib.color("4", ".")}${ilib.color("5", "pobega")}${ilib.color("4", ".")}${ilib.color("2", "lib")}()


${ilib.color("L", "METHODS")}

  lib.color(${ilib.color("N", "color")}, ${ilib.color("N", "message")})
    ${ilib.color("N", "color")}:   a color code string, ie L or e
    ${ilib.color("N", "message")}: the message to colorize
`

}

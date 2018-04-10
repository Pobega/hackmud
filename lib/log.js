function (c,a) {

    let lib = #fs.pobega.lib()

    // If #Global.log hasn't been created, instantiate it
    if (!#G.log)
        #G.log = []

    // Elapsed time in milliseconds padded to a width of 4
    function elapsed() {
        // _ST is a builtin for script StartTime. Comparible with Date lib times
        let time = (Date.now()-_ST).toString().padStart(4, "0")
        // Color the time white
        return lib.color("1", time)
    }

    // Push the log text into the array of logs
    function write_log(level, message) {
        #G.log.push(`${elapsed()}ms [${level}] ${message}`)
    }

    class log {
        // Different loglevels with associated colors
        error(msg)   { write_log(lib.color("D", "ERR"), msg) }
        warn(msg)    { write_log(lib.color("e", "WRN"), msg) }
        info(msg)    { write_log(lib.color("P", "LOG"), msg) }
        success(msg) { write_log(lib.color("l", "YAY"), msg) }
        debug(msg)   { write_log(lib.color("T", "DBG"), msg) }
        // log.write() should be returned in the outer script to get output
        write()      { return #G.log.join("\n") }
    }

    // When called as a subscript or scriptor, returns a new log() object
    if (c.is_scriptor || c.calling_script)
        return new log()

    return `
:::pobega.log:::


${lib.color("L", "DESCRIPTION")}

  Logging library for hackmud scripts. Guaranteed ${lib.color("2", "FULLSEC")}!


${lib.color("L", "USAGE")}

  ${lib.color("p", "let")} ${lib.color("1", "log")} = \#fs${lib.color("4", ".")}${lib.color("5", "pobega")}${lib.color("4", ".")}${lib.color("2", "log")}()


${lib.color("L", "METHODS")}

  ${lib.color("0", "log")}.${lib.color("2", "<level>")}(${lib.color("N", "message")})
    writes ${lib.color("N", "message")} to the log.

  log.write()
    returns the current log in human readable form


${lib.color("L", "LEVELS")}

 Lvl | Name | Function Name | Type
 ----------------------------------------------
 1   | ${lib.color("D", "ERR")}  | log.error()   | Error message
 2   | ${lib.color("e", "WRN")}  | log.warn()    | Warning message
 3   | ${lib.color("P", "LOG")}  | log.info()    | Normal log
 4   | ${lib.color("l", "YAY")}  | log.success() | Success
 5   | ${lib.color("T", "DBG")}  | log.debug()   | Debug messages
`

}

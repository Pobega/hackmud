function (c,a) {

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
        error(msg)   { write_log(lib.color("DERR"), msg) }
        warn(msg)    { write_log(lib.color("eWRN"), msg) }
        info(msg)    { write_log(lib.color("PLOG"), msg) }
        success(msg) { write_log(lib.color("lYAY"), msg) }
        debug(msg)   { write_log(lib.color("TDBG"), msg) }
        // log.write() should be returned in the outer script to get output
        write()      { return #G.log.join("\n") }
    }

    // When called as a subscript or scriptor, returns a new log() object
    if (c.is_scriptor || c.calling_script)
        return new log()

    return #fs.pobega.usage()

}

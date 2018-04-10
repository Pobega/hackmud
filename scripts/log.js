function (c,a) {

  // If #Global.log hasn't been created, instantiate it
  if (!#G.log)
    #G.log = []

  // Elapsed time in milliseconds padded to a width of 4
  function elapsed() {
    // _ST is a builtin for script StartTime. Comparible with Date lib times
    let time = (Date.now()-_ST).toString().padStart(4, "0")
    // Color the time white
    return `\`1${time}\``
  }

  // Push the log text into the array of logs
  function write_log(level, message) {
      #G.log.push(`${elapsed()}ms [${level}] ${message}`)
  }

  class log {
    // Different loglevels with associated colors
    error(msg)   { write_log("`DERR`", msg) }
    debug(msg)   { write_log("`TDBG`", msg) }
    info(msg)    { write_log("`PLOG`", msg) }
    success(msg) { write_log("`lYAY`", msg) }
    // log.write() should be returned in the outer script to get output
    write()      { return #G.log.join("\n") }
  }

  // When called as a subscript, returns a new log() object
  return new log()
}

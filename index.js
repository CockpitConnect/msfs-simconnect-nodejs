if (process.platform !== `win32`) {
    return console.error(`Only the Windows platform is supported. Found: ${process.platform}. Exiting.`)
}

let simConnectLibrary = null

try {
    simConnectLibrary = require(`./build/Release/msfs-simconnect-nodejs`)
} catch (exception) {
    console.error(`Could not load the SimConnect SDK. Does the build directory exists, so is it compiled? Exiting.`)
    console.error(exception);
    return;
}

console.log(simConnectLibrary)

simConnectLibrary.objectId = {
    USER: 0
}

simConnectLibrary.dataRequestFlag = {
    DEFAULT: 0,
    CHANGED: 1,
    TAGGED: 2
}

simConnectLibrary.datatype = {
    INVALID: 0,
    INT32: 1,
    INT64: 2,
    FLOAT32: 3,
    FLOAT64: 4,
    STRING8: 5,
    STRING32: 6,
    STRING64: 7,
    STRING128: 8,
    STRING256: 9,
    STRING260: 10,
    STRINGV: 11
}

simConnectLibrary.simobjectType = {
    USER: 0,
    ALL: 1,
    AIRCRAFT: 2,
    HELICOPTER: 3,
    BOAT: 4,
    GROUND: 5,
}

simConnectLibrary.period = {
    NEVER: 0,
    ONCE: 1,
    VISUAL_FRAME: 2,
    SIM_FRAME: 3,
    SECOND: 4,
}

module.exports = simConnectLibrary

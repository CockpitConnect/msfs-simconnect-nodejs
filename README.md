*** CURRENTLY IN DEVELOPMENT ***

# msfs-simconnect-nodejs
Microsoft Flight Simulator 2020 SimConnect SDK wrapper for NodeJS.

Works on 64 bit version of NodeJS. Currently, for Windows only. 

## Installation
msfs-simconnect-nodejs uses a native NodeJS addon and therefore, it must be compiled first before you can use it as module within your project.

### 1.) Install the Node module

`npm install msfs-simconnect-nodejs`

### 2.) Copy your SimConnect SDK files
You need to copy your own SimConnect SDK files to msfs-simconnect-nodejs. 64 bit version is also supported.

Default, the SimConnect SDK installed in C:\MSFS SDK\SimConnect SDK. Copy this SimConnect SDK directory and paste it in the root of msfs-simconnect-nodejs.

### 3.) Compile
Compile the library:

`npm run build`

Once compiled, at the moment you need to copy your SimConnect.dll file from the SimConnect SDK directory into the build/Release directory. You need to this everytime you've done a rebuild.

## Usage
Import the module:

`const simConnect = require('msfs-simconnect-nodejs');`

## Differences between MSFS SimConnect and node SimConnect

Calls to `requestDataOnSimObject` and `requestDataOnSimObjectType` will return the simulation ObjectID for the object in the callback data object in addition to the requested Simulation Variables.

ObjectID 1 is the user.

## Requirements
* NodeJS 64 bit
* Microsoft Visual Studio 2019 (Community)
* Python 3 (for compilation)
* SimConnect SDK 

## Thanks
Inspired by https://github.com/EvenAR/node-simconnect

## Licence
[MIT](https://opensource.org/licenses/MIT)

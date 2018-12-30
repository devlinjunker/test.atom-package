# Hacking Atom

This is an example/practice package that can be loaded into atom. This README will contain notes for writing a custom package or them and I will likely also use this for notes for my atom installation and setup.

One window with package code and one window for testing. Quickly restarting atom during development: Use `window:reload` in the atom command pallete.


## init.coffee
init.coffee is a file created in `~/.atom` that can be used to hack and customize atom.


## Atom Packages Directory
Atom looks for packages in the `.atom/packages/` directory. The package generator that comes with atom creates symbolic links from this directory to the directory that the generated package is created in.

### Generating Blank Packages
`Package Generator: Generate Package` in the atom command pallete




## Directory Structure
The directory structure is important as it is known by atom to correctly load the package.


## Package.json
Beyond the typical npm package details, the atom package contains some additional properties.  
`main` - this is the main entry file, otherwise atom will look for index.coffee or index.js  
`activationCommands` - lists the commands that are specified in the created package


## `lib` Directory
Contains the code for the package:  
### Entry File
This will return an object with some important properties:  
`activate()` - this will be called when the package is initialized on atom startup. This should create the view for this package and set up the atom bindings that control the package functions. It will be passed the  state from the last time the package was serialized (if `serialize` implemented).  
`deactivate()` - called when the window is shutting down, should cleanup the package objects. If watching any files or opening any external resources then release these here.  
`serialize()` - called when the window is shutting down to return JSON representing the state. Passed to activate on window restore.
`intialize()` - similar to activate but called before workspace is guaranteed

### View File
This example is a class that is created to define how the UI elements will appear for this package. Defines and creates the DOM elements



## `keymaps` Directory
contains a json file that defines the key-mappings to the atom commands that we have defined in the entry file.


## `menus` Directory
Contains a json file named after the package that describes the menu items that should appear for the package. The `context-menu` config will define menu available in the context menu, and the `menu` config will define the options available when you right click in the editor.

## `styles` directory
Defines the CSS styles for the elements created by the package.  

## `spec` directory
Contains the unit tests for this package

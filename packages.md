# Exploring Atom

## Keybindings to Remember
`ctrl + g` - jump to line  
`ctrl + f/b` - forward/back character  
`ctrl + a/e` - front/end of line  
**TODO:** `ctrl + j/k` up/down line  

`cmd + p` - open file in project  

`cmd + F2` - toggle bookmark  
`(shift) + F2` - cycle (backward) bookmarks  

`ctrl + space` activate autocomplete

`cmd + .` toggle keybinding view (to show which commands relate to keybindings)  
`cmd + t` fuzzy find file

`Ctrl + Shift + M` toggle markdown preview

**From Packages**

`Command + Shift + C` toggle color picker  

## Pallete Commands to Remember
`book` - to view all bookmarks  

`nterminal` - opens new terminal window in atom  
`ternjsres` - restart ternjs server  



## Packages
List and description of packages installed on my atom install

### Basic
- about  
- autocomplete-*  
- language-*  
  - c, Clojure, coffee-script, c-sharp, css, gfm, git, go, html, hyperlink, java, javascript, JSON, less, make, mustache, objective-c, perl, php, property-list, python, ruby, ruby-on-rails, rust, sass, shellscript, source, sql, text, todo, toml, typescript, xml, yaml  
  - Babel/ES6 (not basic/default)
- settings-panel  
- archive-view - see files inside of archive files  
- autoflow - format to have less than 80 characters (or config editor.preferredLineLength value)  
- autosave - Save Editors as they lose focus or are closed  
- welcome - basic welcome with useful information

- background-tips - display tips for atom?   
- bookmarks - mark lines and jump back to them  
  - [x] Look into
  - [ ] With atom project manager?  
- bracket matcher - highlight matching bracket  

- dalek - ???  EXTERMINATEs core packages installed in ~/.atom/packages
  - [ ] Look into  
- deprecation-cop - show list of deprecated calls  
  - [ ] I thought this was a problem?  
  - [ ] Look into
- dev-live-reload - reload atom themes atom packages automatically  
- encoding selector - select encoding to use with `ctrl+shift+U`  
- exception-reporting - reports uncaught atom exceptions to atom team via bugsnag.com  
  - [ ] Look into bugsnag.com?  
- find-and-replace - within buffers and across project  
- fuzzy-finder - open editor to file with cmd+t  
- git-diff - marks lines in the editor gutter that have been changed since last - commit  
- github - integration with Github  
 - [ ] Explore
- go-to-line - jump to line with `ctrl+g`  
- image-view - open images in editor  
- incompatible-packages - show incompatible packages  


- keybinding-resolver - Shows what commands a keybinding resolves to. Can open with `cmd + .`
 - [x] Look into
- line-ending-selector  - displays the current line ending type in bottom bar of atom (CRLF, LF, Mixed)

- link - opens http links under the cursor  
- markdown-preview - open rendered version of markdown with `ctrl+shift+m`  
- metrics - send metrics to atom team  
- notifications - tidy way to display atom notifications  
- open-on-github - View active file on Github  
- package-generator - generate new/sample Atom package  
- snippets - expand snippets matching prefix with `tab`   
- spell-check - highlight misspelled words  
- status-bar - shows current cursor position/path/grammar, git info, etc  
- styleguide - shows all of the UI components used in Atom. Useful for reference when developing themes and packages
- symbols-view - jump to function/method with `cmd-r`  
- tabs - display selectable tabs for each editor  
- timecop - displays information about atom load time  
- tree-view - open and explore files in current project  
- update-package-dependencies - should only be used in atom packages. Updates all dependences referenced in package.json

- whitespace - strips/adds trailing whitespace when editor saved
- wrap-guide - displays line at 80th character (or uses editor.preferredLineLength)


### Terminal
Open bash terminal inside of atom  
`nterminal` - open terminal panel  

### TernJS
Use TernJS to follow JavaScript References/Definitions for functions  
`ternjsres` - restart ternjs server  
`ternjsref` - get references to a method elsewhere in workspace  

### Autocomplete Plus - somewhat annoying, may want to disable
Basic autocomplete based on open buffers  
`Ctrl + Space` - activate autocomplete  

### Autoflow  - not sure
Format the selected section to have lines less than max line length (80)  
`alt + cmd + q` - toggle autoflow  

### Bookmarks
Toggle between locations in atom files  
`book` - View all  
`bookt` OR `Command + F2` - Set bookmark  
`bookn` OR `F2` - Next bookmark (in file)  
`bookp` OR `Shift + F2` - Previous Bookmark (in file)  

### Busy Signal
Package API for displaying in progress tasks  
  - [ ] Look into

### Color Picker
Right click or press `Command + Shift + C` or `Ctrl + Alt + C`

### DocBlockr
Helper package for writing documentation...  
 - Auto create comment documentation blocks

### Git Log
Graphs Git Commits - `Git Log: Show`

### Highlight Selected
Highlight selected word by double clicking  

### Intensions??
API to show intensions? in atom  
  `Ctrl + Enter` to  open list of intentions  
  - [ ] Test this  

### JS Refactor
  Not sure about this, supposed to make refactoring javascript files easier. Should work with es2016, but not sure (broken build)
  - [ ] Test this

### Language Babel
  Language Grammar for ES2016 and ESnext, including JSX syntax

### Linter + Linter ESLint + Linter UI Default
Base linter for visualizing linting errors. Plugin for UI and Plugin for eslint that is run on javascript files.
 - Uses the project version of eslint

### Mocha Test Runner
  Run Mocha Test Files or Specific specs using the project mocha installation.
  - `ctrl + alt + m` run current file (or single mocha block if cursor on that line)

### Node Debugger
  Basic debugger for node projects. When in js files, begin debugger and open panels with `F5`.
  - Toggle breakpoint `F9`
  - Step over `F10`
  - Step in `F11`
  - Step out `Shift + F11`

**Config** (not sure where to store)
  - nodePath - path to node.js executable, default: platform dependent
  - nodeArgs - arguments sent to node.js during launch, default: ''
  - appArgs - arguments sent to the application during launch, default: ''
  - debugHost - the machine name or ip-address of the host (only used when attaching to external node processes), default: '127.0.0.1'
  - debugPort - the port used to communicate to the launched process, default: 5858
  - env - the process environment variables (if left empty the environment will be inherited), default: ''
  - scriptMain - the preferred startup file, default: ''

Or can attach to external process if you pass `--debug=<port>` to node process to debug.

### Nuclide
 Collection of features for Atom to provide IDE like functinoality. From Facebook.
 - [ ] Look into full feature list: https://nuclide.io/docs/

### Pigments
 display colors in the text editor via highlights over the color code

### Prettier-Atom
  - Automatically format on save (after enabling in settings)
  - or `ctrl + option + f`
  - [ ] Look into if this autosaves with prettiers rules vs eslint?
   - difference between autosave, eslint commandline and prettier commandline
  - [ ] Combine with eslint (see package readme)

### React
  React Support (JSX, Indentation, Snippets, Autocomplete and reformatting?)
  - https://orktes.github.io/atom-react/

### Refactor
  Enables Refactoring of code (in project? or just open files?).
  - [ ] Should support javascript  https://atom.io/packages/js-refactor
  - [ ] (with ES6?) https://github.com/hax/js-refactor/issues/6
  1. set cursor to symbol
  2. `ctrl + alt + R`
  3. Type new name
  4. Press Enter

### Todo
  Panel for displaying all TODOs in the project files (ignoring node_modules)
  - Can customize RegExp for finding items
  `ctrl + K - ctrl + T`

### Todo Show
  More advanced version of above?
  - Defaults: TODO, FIXME, CHANGED, XXX, IDEA, HACK, NOTE, REVIEW, NB, BUG, QUESTION, COMBAK, TEMP
  - `ctrl + shift + T`

### xatom-debug
Debugger for Atom. Basic UI For Debugger.
 - Debuggers for Node 6.3 and Chrome?? Look into this!

### xatom-debug-nodejs
NodeJS Debugger Plugin for xatom-debug

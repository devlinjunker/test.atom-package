# Exploring Atom

## Keybindings to Remember
`ctrl + G` - jump to line  
`ctrl + F/B` - forward/back character  
`ctrl + A/E` - front/end of line  
`ctrl + Y/N` - up down line  

`cmd + \` toggle project tree-view

`cmd + P` - find file in project to open  
`cmd + T` fuzzy find file  

`cmd + D/U` - find and select next reference (undo)

`cmd + F2` - toggle bookmark  
`(shift) + F2` - cycle (backward) bookmarks  

`ctrl + space` activate autocomplete

`cmd + .` toggle keybinding view (to show which commands relate to keybindings)  
`Ctrl + Shift + M` toggle markdown preview

**From Packages**

`Alt + O` - Toggle outline panel  (IDE)

`Command + Shift + T` - Toggle Todo List  (TODO)

`Command + Shift + C` toggle color picker  (Color Picker)

`Ctrl + Shift + T` - New Terminal Pane (Nuclide?)

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
  - IDEA: Bookmarks with atom project manager?  
- bracket matcher - highlight matching bracket  

- dalek -  EXTERMINATEs core packages installed in ~/.atom/packages
  - informs you of if core packages are installed in community packges directory (BAD)
- deprecation-cop - show list of deprecated calls  
  - [x] Look into deprecation-cop
   - simple page with list of deprecated calls? (should be empty)
   - also has link to atom package update list
- dev-live-reload - reload atom themes atom packages automatically  
- encoding selector - select encoding to use with `ctrl+shift+U`  
- exception-reporting - reports uncaught atom exceptions to atom team via bugsnag.com  
  - [x] Look into bugsnag.com?  
- find-and-replace - within buffers and across project  
- fuzzy-finder - open editor to file with cmd+t  
- git-diff - marks lines in the editor gutter that have been changed since last - commit  
- github - integration with Github  
 - [x] Explore github integration
  - Indicator in bottom right of atom window
  - TODO: Github-integration requires authorization with github
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
 - `alt-g` + `o/b/h/i/p/r/c` (open file, open ©©blame, history, issues, pulls, compare, copy-url)
- package-generator - generate new/sample Atom package  
- snippets - expand snippets matching prefix with `tab`   
- spell-check - highlight misspelled words  
- status-bar - shows current cursor position/path/grammar, git info, etc  
- styleguide - shows all of the UI components used in Atom. Useful for reference when developing themes and packages
- symbols-view - jump to function/method with `cmd-r`  
- tabs - display selectable tabs for each editor  
- timecop - displays information about atom load time  
 - [x] Investigate Timecop
  - Panel with view of package and theme loading/activation times
- tree-view - open and explore files in current project  
- update-package-dependencies - should only be used in atom packages. Updates all dependences referenced in package.json
 - TODO: Attempt with project manager atom package

- whitespace - strips/adds trailing whitespace when editor saved
- wrap-guide - displays line at 80th character (or uses editor.preferredLineLength)

### Atomic Management *
Enables Project specific configuration for Packages
 1. Create .atom directory at top-level of projects
 2. Create `config.cson` with `.atom/` directory
 3. Add Project config inside `config.cson`

Supports all atom configrations:
 - Specifying settings for global namespace (`*`) vs individual files (`.html`)
  - Finding proper scope name: https://flight-manual.atom.io/using-atom/sections/basic-customization/#finding-a-languages-scope-name
 - Themes
 - Packages to Enable/Disable
 - Package-specific configurtions

Local Config Item displayed in lower left of atom

### Terminal *
Open bash terminal inside of atom.
 - [ ] Terminal From Nuclide?
`nterminal` or `Ctrl + Shift + T` - open terminal panel  


### Atom-TernJS --
Use TernJS to follow JavaScript References/Definitions for functions  
`ternjsres` - restart ternjs server  
`ternjsref` - get references to a method elsewhere in workspace  
 - Need to start the tern server during development (AND CLOSE WHEN DONE)
 - Each project needs to be configured when created
 - Doesn't work with flow? ide-flowtype has it's own autocompletes though..
 - TODO: compare ternjs vs atom-ternjs
 - TODO: Explore with javascript

### Atom-Typescript --
 Typescript plugin for Atom. Lots of settings
 - TODO: read up on https://atom.io/packages/atom-typescript

### Autocomplete Modules ?
Autocomplete for require/import statements of packages
 - [ ] Investigate Autocomplete Webpack Support
 - [ ] AutoComplete Babel Plugin Module Resolver?

### Autocomplete Plus (Core) ?
Basic autocomplete based on open buffers
 - Opens on keystroke (may want to test disable)
 - [ ] Explore Autocomplete settings
`Ctrl + Space` - activate autocomplete  

### Autoflow (Core) ?
Format the selected section to have lines less than max line length (80)  
`alt + cmd + q` - toggle autoflow  
 - [ ] Look into autoflow?

### Bookmarks (Core)
Toggle between locations in atom files  
`book` - View all  
`bookt` OR `Command + F2` - Set bookmark  
`bookn` OR `F2` - Next bookmark (in file)  
`bookp` OR `Shift + F2` - Previous Bookmark (in file)  

### Busy Signal ?
Package API for displaying in progress tasks  
  - [ ] Look into Busy Signal

### Color Picker ?
Right click or press `Command + Shift + C` or `Ctrl + Alt + C`
 - [ ] Enable/Remove Color Picker

### DocBlockr ?
Helper package for writing documentation...  
 - Auto create comment documentation blocks
 - [ ] Enable DocBlockr?

### Atom IDE UI *
UIs to support language services and debuggers
 - [ ] Look into Atom IDE Debugger Node https://atom.io/packages/atom-ide-debugger-node

#### IDE-CSS ?
Enhancements for UI to improve CSS Development **Requires atom-ide-ui package**
 - Rules outline in Outline Panel
 - Tooltips for css selector/property and linters
 - [ ] Explore IDE CSS

#### IDE-HTML ?
Enhancements for UI to improve HTML Development **Requires atom-ide-ui package**
 - HTML DOM Outline in Outline Panel
 - [ ] Explore IDE HTML

#### IDE-Flowtype *
Enhancements for UI to Improve Flow Development **Requires atom-ide-ui package**
 - Flow Autocomplete is bumped to top of autocomplete list
   IDEA: Show which class (parent class) a property/method is from
 - UI indications of bad flow code
 - go to definition (hover over symbol and click while holding `cmd`)
 - type hints when hovering over symbols
 - Outline of flow files

### IDE-Typescript --
Enhancements for UI to improve Typescript Development **Requires atom-ide-ui package**
 - Auto completion
 - Diagnostics (errors & warnings, with autofixes)
 - Document outline
 - Find references
 - Go to definition
 - Hover
 - Signature help
 - TODO: Explore IDE-Typescript Later

### Git Log ?
Graphs Git Commits - `Git Log: Show`
 - [ ] Enable Git Log?

### Highlight Selected ?
Highlight selected word by double clicking  
 - [ ] Enable Highlight Selected?

### Intentions ??
API to show intentions? in atom  
  `Ctrl + Enter` to  open list of intentions  
  - [ ] Test intentions

### Language Babel *
Language Grammar for ES2016 and ESnext, including JSX syntax

### Linter + Linter ESLint + Linter UI Default ?
Base linter for visualizing linting errors. Plugin for UI and Plugin for eslint that is run on javascript files.
 - Uses the project version of eslint
 - Linter-tslint too

  Run Mocha Test Files or Specific specs using the project mocha installation.
  - `ctrl + alt + m` run current file (or single mocha block if cursor on that line)

### Node Debugger ?
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

### Nuclide ?
Collection of features for Atom to provide IDE like functionality. From Facebook.
 - [ ] Look into full Nuclide feature list: https://nuclide.io/docs/

### Pigments ?
display colors in the text editor via highlights over the color code
 - [ ] Enable/Remove Pigments?

### Prettier-Atom ?
  - Automatically format on save (after enabling in settings)
  - or `ctrl + option + f`
  - [ ] Prettier/eslint global install? or just enable and has its own?
  - [ ] Format this project according to my `eslint.yaml`
  - [ ] Look into if this autosaves with prettiers rules vs eslint?
   - difference between autosave, eslint commandline and prettier commandline
  - [ ] Combine prettier-atom with eslint (see package readme)

### React --
React Support (JSX, Indentation, Snippets, Autocomplete and reformatting?)
  - https://orktes.github.io/atom-react/
  - TODO: Look into React Support Later?

### Refactor ?
Enables Refactoring of code (in project? or just open files?).
  - tried with basic.webpack project in LocalStorage Service and no results/response
  - [x] Should support javascript  https://atom.io/packages/js-refactor
  - TODO: (Look into refactor with ES6 but not flow?) https://github.com/hax/js-refactor/issues/6
  1. set cursor to symbol
  2. `ctrl + alt + R`
  3. Type new name
  4. Press Enter

#### JS Refactor ?
Not sure about this, supposed to make refactoring javascript files easier. Should work with es2016, but not sure (broken build)
  - Requires Refactor Package
  - [x] Test JS Refactor
    - works on js files in this project, but not flow files in `basic.webpack` template
    - [?] Look into JS-Refactor flow js integration?
  - [..] Try out other refactor plugins
    - [x] javascript-refactor https://atom.io/packages/javascript-refactor
      - refactors imported file locations for javascript files (useful on it's own)
    - TODO: js-refactor-atom https://atom.io/packages/js-refactor-atom
      - Looks like it is only some basic (not useful) refactors

### javascript-refactor *
Stand-alone package for refactoring imported javascript file locations on rename
  - Select `Rename (with Refactor Support)` from context menu in file tree
  - IDEA: Include in default rename?
  - IDEA: Display message/indicator when refactoring

### Todo *
Panel for displaying all TODOs in the project files (ignoring node_modules)
  - Can customize RegExp for finding items
  `ctrl + K - ctrl + T`
  - updated todo key mapping in keymap.cson
  ```
  "atom-workspace":
    "shift-cmd-T": "todo:toggle"
  ```
  - Nice interface with nested TODOs based on file path

  **Settings**
  - RegExp Pattern: `(?:(TODO|IDEA):.+|- \[(\.\.| |\?)\] .+)`
  - RegExp Flags
  - Ignore Paths: `**/node_modules/**, **/.git/**, **/build/**, **/public/**, **/defs/**, **/docs/**`
  - Key Binding Config
  - IDEA: add filtering in panel
  - IDEA: Remember collapsed todo sections


### ~~Todo Show~~
More complex version of above. Less pretty
  - Defaults: TODO, FIXME, CHANGED, XXX, IDEA, HACK, NOTE, REVIEW, NB, BUG, QUESTION, COMBAK, TEMP
  - `ctrl + shift + T`
  - [x] Compare todo-show vs todo
    - Table with configurable columns/attributes vs tree view of files and todos
    - A little too complicated vs `todo` package
  - [x] ~~Other todo packages?~~
   - lanugage todo - snippets and syntax for todos? (in php?)

### xatom-debug ?
Debugger for Atom. Basic UI For Debugger.
 - Debuggers for Node 6.3 and Chrome??
 - [ ] Look into xatom debugger!

### xatom-debug-nodejs ?
NodeJS Debugger Plugin for xatom-debug

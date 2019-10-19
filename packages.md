
# Packages
List and description of packages I have tested in my atom install

Packages with * next to their name are my preferred packages for development

### Basic
Basic Atom Packages
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
  - encoding selector - select encoding to use with `ctrl + shift + U`  
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
  - markdown-preview - open rendered version of markdown with `ctrl + shift + m`  
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
   - [x] Attempt update-package-dependencies with project manager atom package
    - Tried this, needs more dependencies haha, so try to remember?
    - `updatedep`

  - whitespace - strips/adds trailing whitespace when editor saved
  - wrap-guide - displays line at 80th character (or uses editor.preferredLineLength)

### Autocomplete Plus (Core)
Basic autocomplete based on open buffers
 - Opens on keystroke (may want to test disable)
 - [x] Explore Autocomplete settings
  - Delay
  - Minimum Visible
  - Confirm Keymap
  - File Glob Blacklist (e.g. `*.md`)
  - Atom "scope" blacklist
  - Min word length (default 3)
  - backspace trigger autocomplete? (default off)
  - alternate scoring? (default on)
  - local bonus (default on)
  - move [away] to cancel? (default off)
`Ctrl + Space` - activate autocomplete  

### Autoflow (Core)
Format the selected section to have lines less than max line length (80)  
`alt + cmd + q` - toggle autoflow  
 - [x] Look into autoflow
  - garbage in `.md` files
  - garbage in `.js` files too... not useful it seems

### Bookmarks (Core)
Toggle between locations in atom files  
    `book` - View all  
    `bookt` OR `Command + F2` - Set bookmark  
    `bookn` OR `F2` - Next bookmark (in file)  
    `bookp` OR `Shift + F2` - Previous Bookmark (in file)  

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
 - [x] Terminal From Nuclide? NO (ATOM-IDE-UI comes with one)
 `nterminal` or `Ctrl + Shift + T` - open terminal panel  

### DocBlockr *
Helper package for writing documentation...  
 - Auto create comment documentation blocks
 - [x] Enable DocBlockr

### Flow-IDE
Standalone package for flow integrations in atom
 - [ ] review this more

### Hyperclick *
 Pluggable Text-Clicking for Atom by Facebook **Part of Atom-IDE-UI now**
  - triggered by two events:
    - `<cmd>` or `<cmd-mousemove>` underlines clickable text under the mouse.
    - `<cmd-mousedown>` performs the action associated with the clickable text.
    - `<cmd-alt-enter>` performs the action on the text under the cursor.
  - [x] Hyperclick for vanilla javascript files? (only working in flow files right now)
   - JS Hyperclick
  - [..] CSS Hyperclick
   - Doesn't seem like this works with `.less` files in these packages...

### Language Babel *
 Language Grammar for ES2016 and ESnext, including JSX syntax

### Linter + Linter UI Default +  Linter ESLint *
Base linter for visualizing linting errors. Plugin for UI and Plugin for eslint that is run on javascript files.
  - Uses the project version of eslint
  - Linter-tslint too
  - atom-ide-diagnostics also displays linter messages (conflicts with linter?)
  [x] Install linter-eslint
   - ~~Seems to work with Atom-IDE-UI diagnostics~~
   - Enable autosave to get rules fixed on save (whenever possible)
   - [x] Format this project according to my `eslint.yaml`
   - [ ] Enable HTML Linting?

### Pigments *
display colors in the text editor via highlights over the color code
 - [x] Enable Pigments?

### Platformio IDE Terminal
Standalone package for adding a terminal to atom
 - `cmd + option + T` to open terminal

### javascript-refactor *
Stand-alone package for refactoring imported javascript file locations on rename
  - Select `Rename (with Refactor Support)` from context menu in file tree
  - IDEA: Include Refactor in default rename?
  - IDEA: Display message/indicator when refactoring (busy signal?)

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
  - RegExp Pattern (`a_pattern`): `(?:(TODO|IDEA|Q):.+|- \[(\.\.| |\?)\] .+)`
  - RegExp Flags
  - Ignore Paths (`c_ignorePaths`): `**/node_modules/**, **/.git/**, **/build/**, **/public/**, **/defs/**, **/docs/**`
  - Key Binding Config
  - IDEA: Remember collapsed todo sections
  - IDEA: Checklist with different RegExp Matches
  - IDEA: Focus on Filter when toggle todo panel

### Highlight Selected *
Highlight selected word by double clicking  
 - [x] Enable Highlight Selected

### Autocomplete Modules *
Autocomplete for require/import statements of packages
 - [x] Enable Autocomplete Modules
  - [..] Investigate Autocomplete Webpack Support
  - [..] AutoComplete Babel Plugin Module Resolver?


### Mocha Test Runner ?
Run Mocha Test Files or Specific specs using the project mocha installation.
  - `ctrl + alt + m` run current file (or single mocha block if cursor on that line)
  - TODO: Install Mocha Test Runner when working on Node project
  - [x] Karma Test Runner
   - Not very great for atom package
   - IDEA: Work on improving the karma test runner

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


### xatom-debug ?
Debugger for Atom. Basic UI For Debugger.
  - Debuggers for Node 6.3 and Chrome??
  - TODO: Look into xatom debugger?

### xatom-debug-nodejs ?
NodeJS Debugger Plugin for xatom-debug


### Atom-TernJS --
Use TernJS to follow JavaScript References/Definitions for functions  
 `ternjsres` - restart ternjs server  
 `ternjsref` - get references to a method elsewhere in workspace  
 - Need to start the tern server during development (AND CLOSE WHEN DONE)
 - Each project needs to be configured when created
 - Doesn't work with flow? ide-flowtype has it's own autocompletes though..
 - Q: ternjs vs atom-ternjs
 - [x] Explore ternjs/atom-ternjs with javascript
  - tried this, but couldn't see any improvement over the standard autocomplete with javascript


### Nuclide --
NOTE: No longer supported
Collection of features for Atom to provide IDE like functionality. From Facebook.
  - [x] Look into full Nuclide feature list: https://nuclide.io/docs/
   - Quick Open (Proprietary Search Feature) "OmniSearch", file names, open files, recent files
   - Remote Development with project on server
   - Nuclide Diagnostics (Similar to atom-ide-ui)
   - Distraction Free Mode (Quickly Toggle Side panels?)
   - Format JS (For even more javascript ide tools)
    - Auto Add/Remove? Require statements/Types
    - [x] Look into FormatJS Package https://atom.io/packages/nuclide-format-js
     - Q: enabled, unsure if useful though. I'll have to try to remember to think about it
  - Debugger inspired by chrome tools
  - Task Runner toolbar (Build, test, run, debug)
  - Working Sets
  - Outline panel
  - Context View - most interesting
   - Display definition and information about symbol clicking on
   - [x] Look into Context View Package
    - only exists for Nuclide it looks like (or VS Code with Typescript)
  - Health Stats for Nuclide (Atom)
  - Terminal (like atom-ide-ui)
  - Optional: Nuclide Toolbar
  - Optional: Buck Build Integration (Build System by atom) https://buckbuild.com/


### Atom IDE UI --
NOTE: As of 2018 this package and other IDE packages depending on it now longer will work!!!
UIs to support language services and debuggers
 - IDEA: Markdown outline?
 - [x] Look into Atom IDE Debugger Node https://atom.io/packages/atom-ide-debugger-node
  - Not sure if a separate package is needed or if it just comes with IDE-UI
  - Toggle Debugger panel with pallete command `dbugsh`
  - Launch or attach to node process?
  - TODO: Test debugger with node project

#### IDE-CSS --
Enhancements for UI to improve CSS Development **Requires atom-ide-ui package**
 - Rules outline in Outline Panel
 - Tooltips for css selector/property and linters

#### IDE-HTML --
Enhancements for UI to improve HTML Development **Requires atom-ide-ui package**
 - HTML DOM Outline in Outline Panel

#### IDE-Flowtype --
Enhancements for UI to Improve Flow Development **Requires atom-ide-ui package**
 - Flow Autocomplete is bumped to top of autocomplete list
  - IDEA: Show which class (parent class) a property/method is from
 - UI indications of bad flow code
 - go to definition (hover over symbol and click while holding `cmd`)
 - type hints when hovering over symbols
 - Outline of flow files
  - make sure flow server is running for project:
   - new terminal, `./node_modules/.bin/flow start`
 - [..] Look into "find references" flow package
  - Attempting to google around for this seems like it isn't that supported by flow
  - May want to move to typescript for this

#### IDE-Typescript --
Enhancements for UI to improve Typescript Development **Requires atom-ide-ui package**
 - Auto completion
 - Diagnostics (errors & warnings, with autofixes)
 - Document outline
 - Find references
 - Go to definition
 - Hover
 - Signature help



### Atom-Typescript --
Typescript plugin for Atom. Lots of settings
 - TODO: read up on https://atom.io/packages/atom-typescript

### Busy Signal --
Package API for displaying in progress tasks
  - (probably installed by other package)
  - IDEA: Look into Busy Signal for other ideas

### Color Picker --
Right click or press `Command + Shift + C` or `Ctrl + Alt + C`
 - Enable/Remove Color Picker if ever needed

### React --
React Support (JSX, Indentation, Snippets, Autocomplete and reformatting?)
 - https://orktes.github.io/atom-react/
 - TODO: Look into React Support Later?


### ~~Git Log~~
Graphs Git Commits - `Git Log: Show`
  - [x] Enable Git Log (Nah, not now)

### ~~Intentions~~
API to show intentions? in atom  
   `Ctrl + Enter` to  open list of intentions  
   - [x] Test intentions
    - Weird package by the colorpicker guy (for displaying quick items in editor)
   - IDEA: maybe use intentions in other projects?

### ~~Prettier-Atom~~
 Prettier Integration for Atom
  - Automatically format on save (after enabling in settings)
  - or `ctrl + option + f`
  - Q: Prettier/eslint global install? or just enable and has its own?
  - Q: Look into if this autosaves with prettiers rules vs eslint?
   - difference between autosave, eslint commandline and prettier commandline

### ~~Refactor~~
Enables Refactoring of code (in project? or just open files?).
  - tried with basic.webpack project in LocalStorage Service and no results/response
  - [x] Should support javascript  https://atom.io/packages/js-refactor
  - [x] (Look into refactor with ES6 but not flow?) https://github.com/hax/js-refactor/issues/6
  1. set cursor to symbol
  2. `ctrl + alt + R`
  3. Type new name
  4. Press Enter
  - only works inside the file you are in (for local variables)

#### ~~JS Refactor~~
Not sure about this, supposed to make refactoring javascript files easier. Should work with es2016, but not sure (broken build)
  - Requires Refactor Package
  - [x] Test JS Refactor
    - works inside one js file in this project
    - not flow files in `basic.webpack` template
    - Not that great of a package or i'd say: Look into JS-Refactor flow js integration?
  - [x] Try out other refactor plugins
    - [x] javascript-refactor https://atom.io/packages/javascript-refactor
      - refactors imported file locations for javascript files (useful on it's own)
    - [x] js-refactor-atom https://atom.io/packages/js-refactor-atom
      - Looks like it is only some basic (not useful) refactors  
  IDEA: Rename method/variable refactor plugin

### ~~Todo Show~~
More complex version of above. Less pretty
  - Defaults: TODO, FIXME, CHANGED, XXX, IDEA, HACK, NOTE, REVIEW, NB, BUG, QUESTION, COMBAK, TEMP
  - `ctrl + shift + T`
  - [x] Compare todo-show vs todo
    - Table with configurable columns/attributes vs tree view of files and todos
    - A little too complicated vs `todo` package
  - [x] ~~Other todo packages?~~
   - lanugage todo - snippets and syntax for todos? (in php?)

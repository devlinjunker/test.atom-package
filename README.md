# Atom Configuration and Hacking

This is an example/practice package that can be loaded into atom. This README will contain notes about how to
set up atom in my default configuration for development and on the steps I have taken to write custom packages.

Full atom developers guide [here](https://flight-manual.atom.io/hacking-atom/)

## Dependencies

- Atom
- Node+NPM
- See [Packages List](/packages.md?id=packages)

## How to Use

**Installing this test package in atom:**
 - Ensure atom is installed
 - Clone this package
    - into `~/.atom/packages`, or
    - into whichever directory and create a symbolic link with:
     `ln -s <cloned_repo_location> ~/.atom/packages/test.atom.package`
 - Open repository and install node packages with `npm install -D`
 - Open atom (or reload if already open)


**Configuring Atom:**
 - Install `atomic-management` package to get project specific atom packages and settings.
 - Configure project specific settings in `./.atom/config.cson`  
  e.g.
  ```
  "todo":
    "a_pattern":"(?:(TODO|IDEA|Q):.+|- \\[(\\.\\.| |\\?)\\] .+)"
  "linter-eslint":
    "autofix":
      "fixOnSave": true
  ```
 - Configure global settings in `~/.atom/config.cson`
 - Configure Custom Key-mappings in `~/.atom/keymap.cson`  
  e.g.
  ```
  "atom-workspace":
    "shift-cmd-T": "todo:toggle"

  ".editor":
    "ctrl-y": "core:move-up"
  ```
 - Configure UI View CSS settings in `~/.atom/styles.less`   
  e.g.
  ```
  .settings-view {
    font-size: 10px;
  }
  ```

## TODO:

- [ ] TODO: Look into serving html files with atom? (hitting api elsewhere)
- [ ] IDEA: Atom Package with git commit rules/warnings (eslint?)
    - no more than X lines changed per file
    - no more than X files
    - warn on uncommitted files when committing
- [ ] atom package test files with `.spec` conventions? or should I follow typical atom package `-spec` conventions

## Notes

### Installing Atom for Package development
Atom Development and set up for more configuration
 - Install newest version
 - Get [atom](https://github.com/atom/atom) repo from Github
 - install with `./script/bootstrap` (maybe `./script/build`)
 - Ensure package tests can run by cloning this package and attempting to run tests with `ctrl + alt(opt) + cmd + P` (dialog should appear and test should fail)


### Useful Commands

List of [keyboard shortcuts](/commands.md?id=useful-atom-commands) that I thought would be useful

examples:  
`cmd + P` - find file  
`cmd + shift + P` - toggle command pallete  
`ctrl + F/B` - forward/back character   
`ctrl + Y/N` - up down line  (`ctrl + Y` is a custom keybinding set in keymap.cson file)  
`ctrl + A/E` - jump to front/end of line  

### Packages

List of [packages I have installed](/packages.md?id=packages) and played around with

### Hacking/Customization

[Notes](/hacking.md?id=hacking-atom) from learning how to hack atom and atom package development

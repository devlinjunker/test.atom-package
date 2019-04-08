'use babel';

import TestPackageView from './test-package-view';
import { CompositeDisposable } from 'atom';

import * as ProjectState from "./project-state";

// Object with specific function properties that atom packages expect
export default {

  // Objects that will be used to help build the package
  testPackageView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    // Create the UI for this package
    // (in this case just modal panel that pops up with html elements)
    this.testPackageView = new TestPackageView(state.testPackageViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.testPackageView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that opens this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'djunker-package:state': () => this.state()
    }));

    // Additional commands for practicing different functions
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'djunker-package:schema': () => this.schema()
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'djunker-package:test': () => this.test()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.testPackageView.destroy();
  },

  serialize() {
    return {
      testPackageViewState: this.testPackageView.serialize()
    };
  },

  /***** Custom Package Functions Below ******/

  state() {
    const editor = atom.workspace.getActiveTextEditor()

    const selection = editor.getLastSelection()

    const state = ProjectState.stateFromSerialization();
    selection.insertText(state)

    console.log('TestPackage was toggled!');
    this.testPackageView.showState();

    return this.modalPanel.show();
  },



  // These two functions just place the resulting text directly in the
  // open text editor
  schema() {
    const editor = atom.workspace.getActiveTextEditor()

    const selection = editor.getLastSelection()

    const schema = ProjectState.getSchema();
    selection.insertText(schema)
  },

  test() {
    const editor = atom.workspace.getActiveTextEditor()

    const selection = editor.getLastSelection()

    const schema = ProjectState.test();
    selection.insertText(schema)
  }
};

'use babel';
const fs = require('fs');

/*
 * Test Reading the Atom Project State to figure out what text editors
 * are opened with what dimensions and the files that are open
 */


/**
 * Practice using api to get state info
 * @return {string} stringified json object of editor and pane dimensions etc
 */
export function getState() {
  const state = {};
  state.editors = [];

  const editors = atom.workspace.getTextEditors();
  for (let i = 0; i < editors.length; i++) {
    const editor = editors[i];
    state.editors.push({
      path: editor.getPath(),
      dim: {
        w: editor.getWidth(),
        h: editor.getHeight()
      }
    });
  }

  const panes = atom.workspace.getPanes();
  for (let i = 0; i < panes.length; i++) {
    // const pane = panes[i];
    state.panes;
  }

  return JSON.stringify(state);
};





/**
 * Checking serialization for what state info it provides
 * @return {string} stringified deserialized state
 */
export function stateFromSerialization() {
  const state = atom.workspace.serialize();

  fs.writeFile('//Users/djunker/github/atom/test-package/test/first.state', state, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log('The file was saved!');
  });

  // Create map of editorId to editor information object
  // for retrieving filepath, dimensions
  const editorMap = {};
  const editors = atom.workspace.getTextEditors();
  for (let i = 0; i < editors.length; i++) {
    const editor = editors[i];
    editorMap[editor.id] = editor;
  }

  console.log(editorMap);

  const container = state.paneContainers.center;
  if (container.deserializer !== 'PaneContainer') {
    return 'Unrecognized Serialization';
  }

  // Root Object of Center Editor Container
  // contains the editorIds with pane configuration
  const root = container.root;

  // TODO: Create Project State Object with pane configuration
  // for each path/edtior open



  // TODO: Save/Load Object from Directory


  // TODO: Get Project Name from User and save to State Object


  // TODO LATER: Open new window with Project State Object from Directory
  // IDEA: Save bookmarks with configuration in Project State
  //  Pull bookmarks off of editor markerLayer - https://github.com/atom/bookmarks/blob/master/lib/bookmarks.js


  return JSON.stringify(root, null, 2);
}



// export function deserialize() {
//
//
//   atom.deserializers.deserialize(state);
// }


/**
 * Practice using API to get the api schema
 * @return {string} stringified schema object with map for editor and pane
 */
export function getSchema() {
  const schema = {};

  schema.workspace = Object.keys(atom.workspace);

  console.log(atom.workspace);

  const editors = atom.workspace.getTextEditors();
  if (editors[0]) {
    schema.editor = Object.keys(editors[0]);
  }

  const panes = atom.workspace.getPanes();
  if (panes[0]) {
    schema.panes = Object.keys(panes[0]);
  }

  return JSON.stringify(schema, null, 2);
}

/**
 * First testing of getting the project state from API
 * @return {string} Stringified list of panes and editors
 */
export function test() {
  const resp = {};

  const editors = atom.workspace.getTextEditors();
  if (editors && editors[0]) {
    resp.editors = editors.length;
  }

  const panes = atom.workspace.getPanes();
  if (panes) {
    resp.panes = [];
    for (let i = 0; i < panes.length; i++) {
      const pane = panes[i];

      const items = pane.items;
      resp.panes.push({
        items: items.length
      });
    }
  }

  return JSON.stringify(resp, null, 2);
}

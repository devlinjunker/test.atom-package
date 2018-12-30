'use babel';

import * as ProjectState from "./project-state";

export default class TestPackageView {

  message: null;

  /**
   * This creates the view for this test package. This view is just a simple
   * div element that displays a message
   * @param {[type]} serializedState [description]
   */
  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('test-package');

    // Create message element
    message = document.createElement('div');
    message.textContent = '';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  // Returns the element that can be used elsewhere in the atom workspace
  getElement() {
    return this.element;
  }

  /****** Custom Package Functions Below ******/

  showState() {
    const state = ProjectState.getState();
    message.textContent = state;
  }
}

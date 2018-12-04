import React from 'react';
import ReactDOM from 'react-dom/test-utils';
//import { findDOMNode } from 'react-dom';
import jsdom from 'jsdom';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import App from './App';

describe('DOM Rendering', function (done) {
  it('Add an new Todo item, when click the new todo button', function () {
   //  const app = TestUtils.renderIntoDocument(<TodoItems />);
   //  const appDOM = findDOMNode(app);
   //  let todoItemsLength = appDOM.querySelectorAll('TodoList').length;
   //  let addInput = appDOM.querySelector('input');
   //  addInput.value = 'Todo four';
   //  let addButton = appDOM.querySelector('button');
   //  TestUtils.Simulate.click(addButton);
   // expect(appDOM.querySelectorAll('.TodoList').length).to.be.equal(todoItemsLength + 1);
   const wrapper = shallow(<TodoList />);
   const list = wrapper.state.items();
   except(list).toEqual('');
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import TodoList, { addItem } from './TodoList';
import TodoItems from './TodoItems';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

configure({ adapter: new Adapter() });
describe('DomRendering', function(){
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList />, div);

  ReactDOM.unmountComponentAtNode(div);
});});
describe('present components', function() {
it('render correctly text component in todolist', () => {
    const TextInputComponent = renderer.create(<TodoList />).toJSON();
    expect(TextInputComponent).toMatchSnapshot();
});
});
describe('snapshot jest test', function() {
it('snapshot test with jest', () => {
  const app = shallow(<TodoList />);
  expect(app).toMatchSnapshot();
});});
// describe('present components', function() {
// it('check whether the combobox is empty or not', () => {
//   const props = {
//     className: input-box
//   },
//   component = mount(<TodoList { ...className } />);
//   expect((component).prop('className')).toEqual('input-box');
// });});

// desribe('TodoList', () => {
// beForeEach(() => {
//   component.simulate('', '');
// })
// });
// it('TO check test area is becomes empty or not', () => {
//   const component = shallow(<TodoList />);
//   component.simulate('submit');
//   expect(component.find('input-box')).to.have.value('');
// });

/* it('TodoList renders button', () => {
  const add = shallow(<TodoList />);
  const button = add.find('button');
  expect(button).toBeDefined();
});

it('TodoList renders TodoItems Component', () => {
  const app = shallow(<TodoList />);
  expect(app.find('TodoItems').length).toEqual(1);
});*//*

it('Button click calls addItem', () => {
  const add = shallow(<TodoList />);
  const button = add.find('button');

  const input = add.find('input');
  const text = add.find('h2');
  const todoitems = add.find('TodoItems');
  const callback = spy();

 add.getElementById("button").click();
    //expect(callback).to.have.been.called();
  // const wrapper = mount(
  //   <form className={callback}>
  //   <input ref={(a) => this._inputElement = a} className="input-box" placeholder="What needs to be done?">
  //     </input>
  //     <button type="submit" onClick={this.addItem}>Add</button>
  //   </form>

  expect(text.length).toEqual(1);
  expect(input.length).toEqual(1);
  //expect((input).prop('value')).toEqual('');
  expect(button.length).toEqual(1);
  expect(todoitems.length).toEqual(1);
  expect(input.text()).toEqual('');
  expect(add.find('form').simulate('submit'));
//  expect(add.find('addItem').simulate('submit'));

});
/*
// it('renders added message', () => {
//   const wrapper = shallow(<TodoList />);
//   const input = wrapper.find('input');
//   const msg = input.text();
//   // expect(wrapper.contains(welcome)).toBe(true);
//   expect(wrapper.contains(msg)).toEqual(true);
// });
it.skip('addItem updates List', () => {
  const app = shallow(<TodoList />);
  const add = app.find('TodoItems');
  add.props.addItem('Read Books');
  app.update();
  const sapp = shallow(<TodoItems />);
  const listData = sapp.props.entries;
  expect(listData.length).toEqual(1);
  expect(listData[0]).toEqual('Read Books');
});

it.skip('should render correctly in "debug" mode', () => {
  const component = shallow(<TodoList debug />);
  expect(component).toMatchSnapshot();
});*/

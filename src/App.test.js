import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import TodoItems from './TodoItems';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly text component', () => {
  const InputTextComponent = renderer.create(<TodoList />).toJSON();
  expect(InputTextComponent).toMatchSnapshot();
});

it('TodoList renders button', () => {
  const add = shallow(<TodoList />);
  const button = add.find('button');
  expect(button).toBeDefined();
});

it('TodoList renders TodoItems Component', () => {
  const app = shallow(<TodoList />);
  expect(app.find('TodoItems').length).toEqual(1);
});

it.skip('Button click calls addItem', () => {
  const add = shallow(<TodoList />);
  const button = add.find('button');
  const input = add.find('input');
  input.simulate('change', { target: { value: 'Read Book' } });
  button.simulate('click');
  expect(addItem).toBeCalledWith('Read Book');
});

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

it('should render correctly in "debug" mode', () => {
  const component = shallow(<TodoList debug />);
  expect(component).toMatchSnapshot();
});

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a list of todo items', () => {
  const wrapper = mount(<App />)

  expect(wrapper.find('li')).toHaveLength(3)
  expect(wrapper.find('li').at(0).text()).toEqual('One')
  expect(wrapper.find('li').at(1).text()).toEqual('Two')
  expect(wrapper.find('li').at(2).text()).toEqual('Three')
}) // Will not pass because the current day is rendered when app loads. JSON data is for a different date. Figure out how to test for a different date, or dynamically add today's date in JSON date.

it('adds a new todo item to the list', () => {
  const wrapper = mount(<App />)

  expect(wrapper.find('li')).toHaveLength(3)

  wrapper.find('a').last().simulate('click')
  expect(wrapper.find('li')).toHaveLength(4)
})

it('filters todo items by date', () => {
  const wrapper = mount(<App />)

  expect(wrapper.find('li')).toHaveLength(3)

  wrapper.find('.next a').simulate('click')
  expect(wrapper.find('li')).toHaveLength(1)

  wrapper.find('.previous a').simulate('click')
  wrapper.find('.previous a').simulate('click')
  expect(wrapper.find('li')).toHaveLength(0)
})

it('displays summary statement', () => {
  const wrapper = mount(<App />)

  expect(wrapper.find('.Summary p').text()).toEqual('Only 3 Tasks')

  wrapper.find('.previous a').simulate('click')
  expect(wrapper.find('.Summary p').text()).toEqual('Only 0 Tasks. Relax or add one below.')

  wrapper.find('.next a').simulate('click')
  wrapper.find('.next a').simulate('click')
  expect(wrapper.find('.Summary p').text()).toEqual('Only 1 Task')
})

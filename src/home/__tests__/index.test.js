import React from 'react'
import { shallow } from 'enzyme';
import { Home } from '../index'


describe('index component', () => {
  it('should render the home component', () => {
    const props = { fetchData: jest.fn(), data: { data: [{ id: 0, title: "Hello world" }] } }
    const component = shallow(<Home {...props} />)
    expect(component).toMatchSnapshot()
  })
})

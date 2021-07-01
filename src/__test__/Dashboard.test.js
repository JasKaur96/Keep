import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from "../../src/Pages/Dashboard/Dashboard"
Enzyme.configure({ adapter: new EnzymeAdapter })

it("renders Login component without crashing ", () => {
    // const mountWrapper = mount(<Dashboard/>)

    const shallowWrapper = shallow(<Dashboard/>)
    console.log("wrapper", shallowWrapper.debug());


})
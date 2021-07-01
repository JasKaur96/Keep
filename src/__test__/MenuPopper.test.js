import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import renderer from 'react-test-renderer';
import MenuPopper from '../Components/MenuPopper/MenuPopper';
Enzyme.configure({ adapter: new EnzymeAdapter })

it("renders MenuPopper component without crashing ", () => {

    const shallowWrapper = shallow(<MenuPopper/>)
    console.log("wrapper", shallowWrapper.debug());

})

it("render maindiv in component without crashing",()=>{
    const shallowWrapper = shallow(<MenuPopper/>)
    const maindiv=shallowWrapper.find(`[className="icon-place"]`);
    expect(maindiv.length).toBe(2)

})


it("render menu popper without crashing",()=>{
    const shallowWrapper = shallow(<MenuPopper/>)
    const maindiv=shallowWrapper.find(`[className="menu-popper"]`);
    expect(maindiv.length).toBe(1)

})

// it('renders correctly', () => {
//     const tree = renderer.create(
//         Registration).toJSON();
//     expect(tree).toMatchSnapshot();
// });
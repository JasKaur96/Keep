import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import renderer from 'react-test-renderer';
import Color from '../Components/ColorPopper/Color';
Enzyme.configure({ adapter: new EnzymeAdapter })

it("renders Color component without crashing ", () => {

    const shallowWrapper = shallow(<Color/>)
    console.log("wrapper", shallowWrapper.debug());


})

it("render maindiv in component without crashing",()=>{
    const shallowWrapper = shallow(<Color/>)
    const maindiv=shallowWrapper.find(`[className="icon-place"]`);
    expect(maindiv.length).toBe(2)

})

// it('renders correctly', () => {
//     const tree = renderer.create(
//         Registration).toJSON();
//     expect(tree).toMatchSnapshot();
// });
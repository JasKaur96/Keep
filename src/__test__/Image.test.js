import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import renderer from 'react-test-renderer';
import Image from '../Components/ImagePopper/Image';
Enzyme.configure({ adapter: new EnzymeAdapter })

it("renders Image component without crashing ", () => {

    const shallowWrapper = shallow(<Image/>)
    console.log("wrapper", shallowWrapper.debug());
})

it("render maindiv in component without crashing",()=>{
    const shallowWrapper = shallow(<Image/>)
    const maindiv=shallowWrapper.find(`[className="icon-place"]`);
    expect(maindiv.length).toBe(2)

})


// it('renders correctly', () => {
//     const tree = renderer.create(
//         Registration).toJSON();
//     expect(tree).toMatchSnapshot();
// });
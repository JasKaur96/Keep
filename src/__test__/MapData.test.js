import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import renderer from 'react-test-renderer';
import MapData from '../Components/MapData/MapData';
Enzyme.configure({ adapter: new EnzymeAdapter })

it("renders Image component without crashing ", () => {

    const shallowWrapper = shallow(<MapData/>)
    console.log("wrapper", shallowWrapper.debug());
})

it("render maindiv in component without crashing",()=>{
    const shallowWrapper = shallow(<MapData/>)
    const maindiv=shallowWrapper.find(`[className="notess"]`);
    expect(maindiv.length).toBe(1)
})


// it('renders correctly', () => {
//     const tree = renderer.create(
//         Registration).toJSON();
//     expect(tree).toMatchSnapshot();
// });
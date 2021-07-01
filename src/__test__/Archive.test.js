import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import renderer from 'react-test-renderer';
import ArchiveNav from '../Components/Archive/Archive';
Enzyme.configure({ adapter: new EnzymeAdapter })

it("renders component without crashing ", () => {

    const shallowWrapper = shallow(<ArchiveNav/>)
    console.log("wrapper", shallowWrapper.debug());
})

it("render maindiv in component without crashing",()=>{
    const shallowWrapper = shallow(<ArchiveNav/>)
    const maindiv=shallowWrapper.find(`[className="display-note"]`);
    expect(maindiv.length).toBe(1)
 
})

// it('renders correctly', () => {
//     const tree = renderer.create(
//         Registration).toJSON();
//     expect(tree).toMatchSnapshot();
// });
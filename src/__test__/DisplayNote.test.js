import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import renderer from 'react-test-renderer';
import DisplayNote from '../Components/DisplayNote/DisplayNote';
Enzyme.configure({ adapter: new EnzymeAdapter })

it("renders DisplayNote component without crashing ", () => {
    
    const shallowWrapper = shallow(<DisplayNote/>)
    console.log("wrapper", shallowWrapper.debug());


})

it("render maindiv in dialog component without crashing",()=>{
    const shallowWrapper = shallow(<DisplayNote/>)
    const maindiv=shallowWrapper.find(`[className="editnote"]`);
    expect(maindiv.length).toBe(1)

})
 
it("render button without crashing",()=>{
    const shallowWrapper = shallow(<DisplayNote/>)
    const maindiv=shallowWrapper.find(`[className="icons-below"]`);
    expect(maindiv.length).toBe(1)

})

// it('renders correctly', () => {
//     const tree = renderer.create(
//         Registration).toJSON();
//     expect(tree).toMatchSnapshot();
// });
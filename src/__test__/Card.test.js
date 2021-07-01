import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../Components/Card/Card';
Enzyme.configure({ adapter: new EnzymeAdapter })

it("renders Card component without crashing ", () => {

    const shallowWrapper = shallow(<Card/>)
    console.log("wrapper", shallowWrapper.debug());
})

it("render maindiv displaynote in component without crashing",()=>{
    const shallowWrapper = shallow(<Card/>)
    const maindiv=shallowWrapper.find(`[className="display-note"]`);
    expect(maindiv.length).toBe(1)

})


it("render maindiv gridnote without crashing",()=>{
    const shallowWrapper = shallow(<Card/>)
    const maindiv=shallowWrapper.find(`[className="grid-note"]`);
    expect(maindiv.length).toBe(2)

})

 
it("render icons without crashing",()=>{
    const shallowWrapper = shallow(<Card/>)
    const maindiv=shallowWrapper.find(`[className="iconsGrid-below"]`);
    expect(maindiv.length).toBe(1)

})


it("render image without crashing",()=>{
    const shallowWrapper = shallow(<Card/>)
    const maindiv=shallowWrapper.find(`[className="icons-below"]`);
    expect(maindiv.length).toBe(1)

})

// it('renders correctly', () => {
//     const tree = renderer.create(
//         Registration).toJSON();
//     expect(tree).toMatchSnapshot();
// });
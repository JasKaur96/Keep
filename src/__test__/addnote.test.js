import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import renderer from 'react-test-renderer';
import Registration from '../Pages/Registeration/Registration';
import Addnote from '../Components/Notes/Addnote';
Enzyme.configure({ adapter: new EnzymeAdapter })

it("renders Addnote component without crashing ", () => {

    const shallowWrapper = shallow(<Addnote/>)
    console.log("wrapper", shallowWrapper.debug());


})

it("render maindiv in component without crashing",()=>{
    const shallowWrapper = shallow(<Addnote/>)
    const maindiv=shallowWrapper.find(`[className="takenote"]`);
    expect(maindiv.length).toBe(1)

})


it("render main brieftakenote without crashing",()=>{
    const shallowWrapper = shallow(<Addnote/>)
    const maindiv=shallowWrapper.find(`[className="brieftakenote"]`);
    expect(maindiv.length).toBe(1)

})


it("render button without crashing",()=>{
    const shallowWrapper = shallow(<Addnote/>)
    const maindiv=shallowWrapper.find(`[className="closeBtn"]`);
    expect(maindiv.length).toBe(1)

})


it("render icons without crashing",()=>{
    const shallowWrapper = shallow(<Addnote/>)
    const maindiv=shallowWrapper.find(`[className="icons"]`);
    expect(maindiv.length).toBe(1)

})
// it('renders correctly', () => {
//     const tree = renderer.create(
//         Registration).toJSON();
//     expect(tree).toMatchSnapshot();
// });
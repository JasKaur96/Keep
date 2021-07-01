import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import renderer from 'react-test-renderer';
import GetNotes from '../Components/GetNotes/GetNotes';
Enzyme.configure({ adapter: new EnzymeAdapter })

it("renders Login component without crashing ", () => {

    const shallowWrapper = shallow(<GetNotes/>)
    console.log("wrapper", shallowWrapper.debug());


})

// it("render maindiv in component without crashing",()=>{
//     const shallowWrapper = shallow(<GetNotes/>)
//     const maindiv=shallowWrapper.find(`[className=""]`);
//     expect(maindiv.length).toBe(1)

// })

// it('renders correctly', () => {
//     const tree = renderer.create(
//         Registration).toJSON();
//     expect(tree).toMatchSnapshot();
// });
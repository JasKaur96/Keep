import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import renderer from 'react-test-renderer';
import Redo from '../Components/Undo/Redo';
Enzyme.configure({ adapter: new EnzymeAdapter })

it("renders Redo component without crashing ", () => {

    const shallowWrapper = shallow(<Redo/>)
    console.log("wrapper", shallowWrapper.debug());
})

it("render maindiv in component without crashing",()=>{
    const shallowWrapper = shallow(<Redo/>)
    const maindiv=shallowWrapper.find(`[className="icon-place"]`);
    expect(maindiv.length).toBe(1)

})


// it('renders correctly', () => {
//     const tree = renderer.create(
//         Registration).toJSON();
//     expect(tree).toMatchSnapshot();
// });
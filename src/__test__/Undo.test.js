import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import renderer from 'react-test-renderer';
import Undo from '../Components/Undo/Undo';
Enzyme.configure({ adapter: new EnzymeAdapter })

it("renders Undo component without crashing ", () => {

    const shallowWrapper = shallow(<Undo/>)
    console.log("wrapper", shallowWrapper.debug());
})

it("render maindiv in component without crashing",()=>{
    const shallowWrapper = shallow(<Undo/>)
    const maindiv=shallowWrapper.find(`[className="icon-place"]`);
    expect(maindiv.length).toBe(1)

})


// it('renders correctly', () => {
//     const tree = renderer.create(
//         Registration).toJSON();
//     expect(tree).toMatchSnapshot();
// });
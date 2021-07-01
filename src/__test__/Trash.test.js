import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import renderer from 'react-test-renderer';
import Reminder from '../Components/RemindPopper/Reminder';
import Trash from '../Components/Trash/Trash';
Enzyme.configure({ adapter: new EnzymeAdapter })

it("renders Trash component without crashing ", () => {

    const shallowWrapper = shallow(<Trash/>)
    console.log("wrapper", shallowWrapper.debug());
})

it("render maindiv in component without crashing",()=>{
    const shallowWrapper = shallow(<Trash/>)
    const maindiv=shallowWrapper.find(`[className="display-note"]`);
    expect(maindiv.length).toBe(1)

})


// it('renders correctly', () => {
//     const tree = renderer.create(
//         Registration).toJSON();
//     expect(tree).toMatchSnapshot();
// });
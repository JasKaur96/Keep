import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import renderer from 'react-test-renderer';
import Reminder from '../Components/RemindPopper/Reminder';
Enzyme.configure({ adapter: new EnzymeAdapter })

it("renders reminder component without crashing ", () => {

    const shallowWrapper = shallow(<Reminder/>)
    console.log("wrapper", shallowWrapper.debug());


})

it("render maindiv in component without crashing",()=>{
    const shallowWrapper = shallow(<Reminder/>)
    const maindiv=shallowWrapper.find(`[className="reminder"]`);
    expect(maindiv.length).toBe(1)

})


// it('renders correctly', () => {
//     const tree = renderer.create(
//         Registration).toJSON();
//     expect(tree).toMatchSnapshot();
// });
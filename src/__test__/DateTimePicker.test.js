import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import renderer from 'react-test-renderer';
import ReminderDisplay from '../Components/ReminderNav/ReminderDisplay';
import DateTimePicker from '../Components/RemindPopper/DateTimePicker';
Enzyme.configure({ adapter: new EnzymeAdapter })

it("renders DateTimePicker component without crashing ", () => {

    const shallowWrapper = shallow(<DateTimePicker/>)
    console.log("wrapper", shallowWrapper.debug());


})

it("render maindiv in component without crashing",()=>{
    const shallowWrapper = shallow(<DateTimePicker/>)
    const maindiv=shallowWrapper.find(`[className="picker"]`);
    expect(maindiv.length).toBe(1)

})

// it('renders correctly', () => {
//     const tree = renderer.create(
//         Registration).toJSON();
//     expect(tree).toMatchSnapshot();
// });
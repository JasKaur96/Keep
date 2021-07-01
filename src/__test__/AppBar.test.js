import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import renderer from 'react-test-renderer';
import Registration from '../Pages/Registeration/Registration';
import Appbar from '../Components/Header/Appbar';
Enzyme.configure({ adapter: new EnzymeAdapter })

it("renders Appbar component without crashing ", () => {
  

    const shallowWrapper = shallow(<Appbar/>)
    console.log("wrapper", shallowWrapper.debug());


})

it("render maindiv in component without crashing",()=>{
    const shallowWrapper = shallow(<Appbar/>)
    const maindiv=shallowWrapper.find(`[className="header"]`);
    expect(maindiv.length).toBe(1)

})


it("render icons without crashing",()=>{
    const shallowWrapper = shallow(<Appbar/>)
    const maindiv=shallowWrapper.find(`[className="icon"]`);
    expect(maindiv.length).toBe(1)

})

 
// it('renders correctly', () => {
//     const tree = renderer.create(
//         Registration).toJSON();
//     expect(tree).toMatchSnapshot();
// });
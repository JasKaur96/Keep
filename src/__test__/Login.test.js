import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import renderer from 'react-test-renderer';
import Login from "../../src//Pages/Login/Login"
Enzyme.configure({ adapter: new EnzymeAdapter })

it("renders Login component without crashing ", () => {
    // const mountWrapper = mount(<Login/>)

    const shallowWrapper = shallow(<Login/>)
    console.log("wrapper", shallowWrapper.debug());


})

it("render maindiv in component without crashing",()=>{
    const shallowWrapper = shallow(<Login/>)
    const maindiv=shallowWrapper.find(`[className="login-main"]`);
    expect(maindiv.length).toBe(1)

})


it("render main textfield without crashing",()=>{
    const shallowWrapper = shallow(<Login/>)
    const maindiv=shallowWrapper.find(`[className="textfields"]`);
    expect(maindiv.length).toBe(1)

})


it("render button without crashing",()=>{
    const shallowWrapper = shallow(<Login/>)
    const maindiv=shallowWrapper.find(`[className="inline__button"]`);
    expect(maindiv.length).toBe(1)

})

// it('renders correctly', () => {
//     const tree = renderer.create(
//         <Login/>
//     ).toJSON();
//     expect(tree).toMatchSnapshot();
// });
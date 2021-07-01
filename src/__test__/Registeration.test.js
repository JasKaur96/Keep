import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import renderer from 'react-test-renderer';
import Registration from '../Pages/Registeration/Registration';
Enzyme.configure({ adapter: new EnzymeAdapter })

it("renders Login component without crashing ", () => {
    // const mountWrapper = mount(<Login/>)

    const shallowWrapper = shallow(<Registration/>)
    console.log("wrapper", shallowWrapper.debug());


})

it("render maindiv in component without crashing",()=>{
    const shallowWrapper = shallow(<Registration/>)
    const maindiv=shallowWrapper.find(`[className="register-main"]`);
    expect(maindiv.length).toBe(1)

})


it("render main textfield without crashing",()=>{
    const shallowWrapper = shallow(<Registration/>)
    const maindiv=shallowWrapper.find(`[className="inline"]`);
    expect(maindiv.length).toBe(2)

})

 
it("render button without crashing",()=>{
    const shallowWrapper = shallow(<Registration/>)
    const maindiv=shallowWrapper.find(`[className="inline__buttons"]`);
    expect(maindiv.length).toBe(1)

})


it("render image without crashing",()=>{
    const shallowWrapper = shallow(<Registration/>)
    const maindiv=shallowWrapper.find(`[className="image"]`);
    expect(maindiv.length).toBe(1)

})

// it('renders correctly', () => {
//     const tree = renderer.create(
//         Registration).toJSON();
//     expect(tree).toMatchSnapshot();
// });
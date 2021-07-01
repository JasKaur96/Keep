import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import renderer from 'react-test-renderer';
import GoogleHeader from '../Components/Google-Header/GoogleHeader';
Enzyme.configure({ adapter: new EnzymeAdapter })

it("renders GoogleHeader component without crashing ", () => {

    const shallowWrapper = shallow(<GoogleHeader/>)
    console.log("wrapper", shallowWrapper.debug());


})

it("render maindiv in component without crashing",()=>{
    const shallowWrapper = shallow(<GoogleHeader/>)
    const maindiv=shallowWrapper.find(`[className="header"]`);
    expect(maindiv.length).toBe(1)

})


 
// it('renders correctly', () => {
//     const tree = renderer.create(
//         Registration).toJSON();
//     expect(tree).toMatchSnapshot();
// });
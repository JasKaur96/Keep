import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import renderer from 'react-test-renderer';
import Archive from '../Components/ArchivePopper/ArchivePopper';
Enzyme.configure({ adapter: new EnzymeAdapter })

it("renders Login component without crashing ", () => {
    // const mountWrapper = mount(<Login/>)

    const shallowWrapper = shallow(<Archive/>)
    console.log("wrapper", shallowWrapper.debug());


})

it("render maindiv in component without crashing",()=>{
    const shallowWrapper = shallow(<Archive/>)
    const maindiv=shallowWrapper.find(`[className="icon-place"]`);
    expect(maindiv.length).toBe(3)

})



// it('renders correctly', () => {
//     const tree = renderer.create(
//         Registration).toJSON();
//     expect(tree).toMatchSnapshot();
// });
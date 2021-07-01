import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import renderer from 'react-test-renderer';
import SideDrawer from '../Components/Drawer/SideDrawer';
Enzyme.configure({ adapter: new EnzymeAdapter })

it("renders SideDrawer component without crashing ", () => {

    const shallowWrapper = shallow(<SideDrawer/>)
    console.log("wrapper", shallowWrapper.debug());


})

it("render maindiv in component without crashing",()=>{
    const shallowWrapper = shallow(<SideDrawer/>)
    const maindiv=shallowWrapper.find(`[className={classes.root}]`);
    expect(maindiv.length).toBe(1)

})


// it('renders correctly', () => {
//     const tree = renderer.create(
//         Registration).toJSON();
//     expect(tree).toMatchSnapshot();
// });
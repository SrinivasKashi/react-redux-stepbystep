import React from "react";
import { mount,shallow } from 'enzyme';
export default () => null
import App from './App';

describe('<App />',()=>{
    it("it renders one <App/> component",()=>{
        const component = shallow(<App/>);
        expect(component).toHaveLength(1);
    });
});
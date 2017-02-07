import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import App from '../app.jsx';
import expect from 'expect';

describe('Application', function () {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
   
    it("renders div", function () { 
       expect(result.type).toBe('div');
    });
});
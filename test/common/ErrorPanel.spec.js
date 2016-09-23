import React from 'react';
import { shallow } from 'enzyme';
import {expect} from 'chai';
import ErrorPanel from '../../src/common/ErrorPanel.js';

describe('Error Panel', function () {
  it('should render error message', function () {
    const errorMessageWrapper = shallow(<ErrorPanel errorMessage="Test Error"/>);
    const errorMessage = errorMessageWrapper.find('.error-message');
    expect(errorMessage).to.have.length(1);
  });
  it('should not render if no error message present', function () {
    const errorMessageWrapper = shallow(<ErrorPanel />);
    const errorMessage = errorMessageWrapper.find('.error-message');
    expect(errorMessage).to.have.length(0);
  });
  it('should display error message text', function () {
    const errorMessageWrapper = shallow(<ErrorPanel errorMessage="Test Error"/>);
    const errorMessage = errorMessageWrapper.find('.error-message');
    expect(errorMessage.first().text()).to.equal("Test Error");
  });
});
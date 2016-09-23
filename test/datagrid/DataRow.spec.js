import React from 'react';
import { shallow } from 'enzyme';
import {expect} from 'chai';
import DataRow from '../../src/datagrid/DataRow.js';

const user = {
  name: "Mr Joe",
  superpower: true,
  rich: false,
  genius: true
};

describe('Data Row', function () {
  it('generates trait cells ', function () {
    const dataRowWrapper = shallow(<DataRow item={user}/>);
    const traits = dataRowWrapper.find('.grid__cell--trait');
    expect(traits).to.have.length(3);
  });
  it('generates delete cell', function () {
    const dataRowWrapper = shallow(<DataRow item={user}/>);
    const deleteCell = dataRowWrapper.find('.grid__cell--delete');
    expect(deleteCell).to.have.length(1);
  });
  it('generates input cell', function () {
    const dataRowWrapper = shallow(<DataRow item={user}/>);
    const input = dataRowWrapper.find('.grid__cell--name');
    expect(input).to.have.length(1);
  });
});
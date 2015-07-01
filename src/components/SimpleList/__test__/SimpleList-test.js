/**
 * Created by mikhail on 01.07.15.
 */
import React from 'react/addons.js';
import SimpleList from '../SimpleList.React.js';
import MockHelper from '../../../utils/MockHelper.js';
import MockData from '../MockData.js';

let TestUtils = React.addons.TestUtils;

describe('SimpleList tests', () => {
  it('component should be defined', () => {
    let instance = TestUtils.renderIntoDocument(<SimpleList items={[MockData, MockData]}/>);

    expect(instance).toBeDefined();
  });

  it('should render SimpleListItem components', () => {
    let instance = TestUtils.renderIntoDocument(<SimpleList items={[MockData, MockData]}/>);
    let simpleListItems = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'simple-list-item');

    expect(simpleListItems.length).toBe(2);
  });

  it('should mock SingleListItem components', () => {
    MockHelper.mockReactComponents(SimpleList, ['SimpleListItem']);

    let instance = TestUtils.renderIntoDocument(<SimpleList items={[MockData, MockData]}/>);
    let simpleListItems = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'simple-list-item');

    expect(simpleListItems.length).toBe(0);

    MockHelper.resetTestComponent(SimpleList, ['SimpleListItem']);
  });
});
/**
 * Created by mikhail on 01.07.15.
 */
var React = require('react');

module.exports = {
  /**
   * Mock passed mockComponents in testComponent
   *
   * @param {ReactComponent} testComponent
   * @param {Array} mockComponents
   */
  mockReactComponents: function (testComponent, mockComponents) {
    mockComponents.forEach(function (mockComponent) {
      testComponent.__Rewire__(mockComponent, React.createClass({
        render: function () {
          return (
            <div></div>
          );
        }
      }))
    });
  },
  /**
   * Rest mocked components
   *
   * @param {ReactComponent} testComponent
   * @param {Array} mockComponents
   */
  resetTestComponent: function (testComponent, mockComponents) {
    mockComponents.forEach(function (mockComponent) {
      testComponent.__ResetDependency__(mockComponent)
    });
  }
};
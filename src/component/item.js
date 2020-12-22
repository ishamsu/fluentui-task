import * as React from 'react';
import {
  DefaultButton,
  DetailsHeader,
  DetailsList,
  IColumn,
  IDetailsHeaderProps,
  IDetailsList,
  IGroup,
  IRenderFunction,
  IToggleStyles,
  mergeStyles,
  Toggle,
  IButtonStyles,
} from 'office-ui-fabric-react';

const margin = '0 20px 20px 0';
const controlWrapperClass = mergeStyles({
  display: 'flex',
  flexWrap: 'wrap',
});
const toggleStyles = {
  root: { margin: margin },
  label: { marginLeft: 10, },
};
const addItemButtonStyles = { root: { margin: margin } };
const _blueGroupIndex = 2;

export default class DetailsListGroupedExample extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [
        { key: 'a', name: 'https://fluent-task.herokuapp.com', color: 'date' ,Allow:'✓ allow'},
        { key: 'b', name: 'https://fluent-task.herokuapp.com', color: 'date',Allow:'✕ block' },
        { key: 'c', name: 'https://fluent-task.herokuapp.com', color: 'date',Allow:'✓ allow' },
        { key: 'd', name: 'https://fluent-task.herokuapp.com', color: 'date' ,Allow:'✓ allow'},
        { key: 'e', name: 'https://fluent-task.herokuapp.com', color: 'date' ,Allow:'✕ block'},
      ],
      // This is based on the definition of items
      groups: [
        { key: 'groupred0', name: 'Playboy.com', startIndex: 0, count: 2, level: 0 },
        { key: 'groupblue2', name: 'msn.com', startIndex: 2, count: 3, level: 0 },
      ],
      showItemIndexInView: false,
    };

    this._columns = [
      { key: 'name', name: 'attempts to visit blaocked website', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'color', name: '', fieldName: 'color', minWidth: 100, maxWidth: 200 },
      { key: 'Allow', name: '', fieldName: 'Allow', minWidth: 100, maxWidth: 200 },

    ];
  }

   

   render() {
    const { items, groups, isCompactMode } = this.state;

    return (
      <div>
        <DetailsList
          componentRef={this._root}
          items={items}
    
          groups={groups}
          columns={this._columns}
          ariaLabelForSelectAllCheckbox="Toggle selection for all items"
          ariaLabelForSelectionColumn="Toggle selection"
          checkButtonAriaLabel="Row checkbox"
          onRenderDetailsHeader={this._onRenderDetailsHeader}
          groupProps={{
            showEmptyGroups: true,
          }}
          onRenderItemColumn={this._onRenderColumn}
          compact={isCompactMode}
        />
      </div>
    );
  }

}

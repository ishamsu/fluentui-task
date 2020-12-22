import React from "react";
import { Label, ILabelStyles } from "office-ui-fabric-react/lib/Label";
import { Pivot, PivotItem } from "office-ui-fabric-react/lib/Pivot";
import { IStyleSet } from "office-ui-fabric-react/lib/Styling";
import Item from "./item";
import { Toggle } from "office-ui-fabric-react/lib/Toggle";
import {
  Stack,
  IStackStyles,
  IStackTokens,
  IStackItemStyles,
} from "office-ui-fabric-react/lib/Stack";

import { DefaultPalette } from "office-ui-fabric-react/lib/Styling";

const pivotstyle = {
  marginTop: 10,

};
const stackItemStyles = {
  root: {
    alignItems: 'center',
  background: DefaultPalette.white,
  color: DefaultPalette.white,
  // display: 'flex',
  height: 50,
  justifyContent: 'center',
  width: 150,

    

  },
};
const itemAlignmentsStackTokens = {
  childrenGap: 5,
  padding: 10,
};

const stackStyles = {
  root: {
    background: "white",
    width: 640,


  },
};
const custom = {
  root: {
    // marginLeft:-500

  },
};

export default class items extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);

    this.state = {
      textDisplay: false,
    };
    this.state = {
      checked: false,
    };
  }
  _onChange(ev) {

    
    this.setState((currentState) => ({
      checked: !currentState.checked, 
  }));
  }

  render() {
    const { checked } = this.state;

    return (
      <div>
        <Pivot aria-label="Basic Pivot Example">
          <PivotItem
            headerText="Recent Activities"
            headerButtonProps={{
              "data-order": 1,
              "data-title": "My Files Title",
            }}
          >

            {/* <Stack styles={stackStyles} tokens={itemAlignmentsStackTokens}>
              <Label disabled styles={pivotstyle}>
                Monitor what your child views on the web and set content
                restrictions to take control
              </Label>
              <Stack.Item align="center" styles={stackItemStyles}>
                <Toggle
                  label="Activity Reporting"
                  defaultChecked
                  onText="On"
                  offText="Off"
                />
              </Stack.Item>
            </Stack> */}

            <Stack horizontal styles={stackStyles} tokens={itemAlignmentsStackTokens}>
    
                  <Stack horizontal horizontalAlign="start" styles={stackStyles}>
                  <Label styles={stackItemStyles} disabled styles={pivotstyle}>
                Monitor what your child views on the web and set content
                restrictions to take control
              </Label>         
              <Toggle styles={stackItemStyles}
                  label="Activity Reporting"
                  defaultChecked
                  onText="On"
                  offText="Off"
                  onChange={this._onChange}
                />  
      </Stack>
      
    </Stack>
    


            {!checked  ? (            <Item/>
 ) :(             <Label>toggle is {checked  ? ('checked' ) :( 'not checked')}</Label>
 )}
          </PivotItem>

          <PivotItem headerText="Web Browsing">
            <Label styles={pivotstyle}>Pivot #3</Label>
          </PivotItem>
          <PivotItem headerText="Social Media">
            <Label styles={pivotstyle}>Pivot #3</Label>
          </PivotItem>
          <PivotItem headerText="Class Sheduling">
            <Label styles={pivotstyle}>Pivot #3</Label>
          </PivotItem>
          <PivotItem headerText="Apps and Games">
            <Label styles={pivotstyle}>Pivot #3</Label>
          </PivotItem>
        </Pivot>
      </div>
    );
  }
}

import React from "react";
import { Link, Text } from 'office-ui-fabric-react';




import {
  Stack,
  IStackStyles,
  IStackTokens,
  IStackItemStyles,
} from "office-ui-fabric-react/lib/Stack";


import { DefaultPalette } from "office-ui-fabric-react/lib/Styling";

const stackStyles = {
  root: {
    width: 150,
    
  },
};
const itemStyles = {
  alignItems: 'left',
  color: DefaultPalette.white,
  // display: 'flex',
  // height: 50,
  justifyContent: 'left',
  width: 200,
  fontSize:15

};
const itemStylesbold = {
  alignItems: 'left',
  color: DefaultPalette.white,
  // display: 'flex',
  // height: 50,
  justifyContent: 'left',
  width: 200,
  fontSize:14,
  fontWeight: "bold"

};
const itemStyleslight = {
  alignItems: 'left',
  color: "lightgray",
  // display: 'flex',
  // height: 50,
  justifyContent: 'left',
  width: 200,
  fontSize:13,

};
const customSpacingStackTokens = {
  childrenGap: '50%',
  padding: 's1 30%',
};
const sectionStackTokens = { childrenGap: 10 };


export default class items extends React.Component {
  constructor(props) {
    super(props);
  }
 

  render() {

    return (
      <div>
          
      
           <Stack tokens={sectionStackTokens}>
      <Stack horizontal disableShrink horizontalAlign="space-between">
        <Stack>
          <Stack horizontal styles={stackStyles} tokens={customSpacingStackTokens}>
          <Stack  styles={stackStyles}>
          <i class="ms-Icon ms-Icon--RedEye" aria-hidden="true"></i>

          <span style={itemStylesbold}>Protect&nbsp;your&nbsp;child
            </span>
            <span disabled style={itemStyleslight}>Content&nbsp;restrictions 
            </span>  
            <Link disabled={true} href="https://developer.microsoft.com/en-us/fluentui#/controls/web/link" style={itemStyles}>set&nbsp;restrictions           <i class="ms-Icon ms-Icon--ChevronRightMed" aria-hidden="true"></i>

            </Link>
              </Stack>

              <Stack  styles={stackStyles}>
              <i class="ms-Icon ms-Icon--ScheduleEventAction" aria-hidden="true"></i>

          <span style={itemStylesbold} >Prevent&nbsp;distraction
            </span>
            <span disabled style={itemStyleslight}>Content&nbsp;restrictions 
            </span>  
            <Link disabled={true} href="https://developer.microsoft.com/en-us/fluentui#/controls/web/link" style={itemStyles}>set&nbsp;restrictions           <i class="ms-Icon ms-Icon--ChevronRightMed" aria-hidden="true"></i>
  
            </Link>
              </Stack>


              <Stack  styles={stackStyles}>
              <i class="ms-Icon ms-Icon--AlarmClock" aria-hidden="true"></i>

          <span style={itemStylesbold}>Create&nbsp;healthy&nbsp;habits
            </span>
            <span disabled style={itemStyleslight}>Content&nbsp;&nbsp;restrictions 
            </span>  
            <Link disabled={true} href="https://developer.microsoft.com/en-us/fluentui#/controls/web/link" style={itemStyles}>set&nbsp;restrictions           <i class="ms-Icon ms-Icon--ChevronRightMed" aria-hidden="true"></i>

            </Link>
              </Stack>
            
          </Stack>
        </Stack>
      </Stack>
      </Stack>



        
      </div>
    );
  }
}

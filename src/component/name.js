import React from 'react'
import { Image } from 'office-ui-fabric-react/lib/Image';
import logo from '../prof.svg';
import '../App.css';

const name = () => {
    return (
        <div>
            
             <Image
      src={logo}
      alt="Example with no image fit value and height or width is specified."
      width={100}
      height={100}
    />
        </div>
    )
}

export default name

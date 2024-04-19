// import React from 'react'
// import Icon from '../Icon/Icon'

// function Card({player}) {
//     let icon = <Icon/>
//     if (player == X){
//         icon = <Icon name = "cross"/>
//     }
//     else if(player== O){
//         icon = <Icon name = "circle"/>
//     }

//   return (
//     <div className='card text-yellow-500'>
//         {icon}
//     </div>
//   )
// }

// export default Card
import React from 'react'

import Icon from '../Icon/Icon'

 

function Card({player}) {

    let icon = <Icon/>

    if (player === 'X'){

        icon = <Icon name="cross"/>

    }

    else if(player === 'O'){

        icon = <Icon name="circle"/>

    }

 

  return (

    <div className='card text-yellow-500'>

        {icon}

    </div>

  )

}

 

export default Card
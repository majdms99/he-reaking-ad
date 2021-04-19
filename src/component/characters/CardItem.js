import React from 'react'
const CardItem = ({ite}) => {

    console.log(ite)
    return (

        <div className='card--'>
            <div className='card-imag'>
                <img src={ite.img}/>
            
                <div className='text-box'>
                    <div className='box-ov'>
                    <h1>{ite.name}</h1>
                        <ul>
                            <li><strong>Actor Name: </strong>{ite.portrayed}</li>
                            <li><strong>Nickname: </strong>{ite.nickname}</li>
                            <li><strong>Barthday: </strong>{ite.barthday}</li>
                            <li><strong>Status: </strong>{ite.status}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItem

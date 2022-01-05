import React from 'react'
import Menu from './Menu'
import Myuser from './Myuser'
import Alluserdata from './Alluserdata.json'


function Users() {
    return (
        <>
            <div className='d-flex wrapper'>

                <div className='menubar'>
                    <Menu />
                </div>

                <div className='content'>
                    <h1>USERS PAGE </h1>
                </div>

            </div>


            <div className='user_wrapper'>
                {Alluserdata.map((x, index) => {
                    { console.log(x) }
                    return (

                        <Myuser
                            key={index}
                            name={x.name}
                            username={x.username}
                            address={x.address}
                            email={x.email}
                            phone={x.phone}
                            website={x.website}
                            company={x.company}
                            imgsrc={x.imgsrc}
                        />

                    )
                }
                )
                }




            </div>




        </>
    )
}

export default Users

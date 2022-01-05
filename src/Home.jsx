import React from 'react'
import Menu from './Menu'
import Card from './Card'
import Cdata from './Cdata.json'


function Home() {
    return (
        <>
            <div className='d-flex wrapper'>

                <div className='menubar'>
                    <Menu />
                </div>

                <div className='content'>
                    <h1>Welcome to the WILDLIFE</h1>
                </div>




            </div>

            <div className="cards d-flex">


                {Cdata.map((x, index) => {
                 
                    return (

                        <Card
                            key={index}
                            imgsrc={x.imgsrc}
                            heading={x.heading}
                            btn={x.btn}
                            name={x.heading === 'Nature' ? x.name : ''}

                        />

                    )
                }
                )
                }
                {/*                
                <Card
                    imgsrc="https://images.unsplash.com/photo-1641080382874-0dfc4c66dbaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                    heading="ANIMALS"
                    btn="VISIT US"
                />
                <Card
                    imgsrc="https://images.unsplash.com/photo-1641063157251-ae9d815e5daa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80" 
                    heading="ANIMALS"
                    btn="VISIT US" 
                /> */}
            </div>




        </>


    )
}

export default Home

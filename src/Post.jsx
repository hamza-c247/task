import React from 'react'
import Menu from './Menu'
import Allpostdata from './Allpostdata.json'
import Personaldata from './Personaldata'

function Post() {
    return (

        <>
            <div className='d-flex wrapper'>

                <div className='menubar'>
                    <Menu />
                </div>

                <div className='content'>
                    <h1>POST PAGE</h1>
                </div>
            </div>


            <div className="post_wrapper">


                {Allpostdata.map((x, index) => {
                     {console.log(x)}
                    return (

                        <Personaldata


                            key={index}
                            title={x.title}
                            body={x.body}


                        />

                    )
                }
                )
                }


            </div>
        </>
    )
}

export default Post

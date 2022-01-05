import React from 'react'

function Myuser(props) {
    const{name,email,imgsrc,address}=props
    const{suite,geo}=address
    const{lat}=geo

    return (
        <>
            <div className='d-flex myuser-wrapper'>
                <div>
                    <img className='usersimg' src={imgsrc} alt='img' />
                </div>
                <div className='user'>
                    <p>
                        <b>NAME : {name}</b>

                    </p>
                    <p><i> USERNAME : {props.username}</i></p>
                    <p> EMAIL : {email}</p>
                    <p>
                        SUITE : {suite}
                    </p>
                    <p>
                        STREET : {props.address.street}
                    </p>
                    <p>
                        CITY : {props.address.city}
                    </p>
                    <p>
                        ZIPCODE : {props.address.zipcode}
                    </p>

                    <p>
                        GEO LAT : {lat}
                    </p>
                    <p>
                        GEO LNG : {props.address.geo.lng}
                    </p>
                    <p>
                        PHONE : {props.phone}
                    </p>
                    <p>
                        WEBSITE : {props.website}
                    </p>
                    <p>
                        COMPANY NAME : {props.company.name}
                    </p>
                    <p>
                        COMPANY CATHPHRASE : {props.company.catchPhrase}
                    </p>
                    <p>
                        COMPANY BS : {props.company.bs}
                    </p>



                </div>
            </div>


        </>


    )
}

export default Myuser

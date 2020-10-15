import React, { useContext, useEffect } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'
 


export default function SingleRoom(props) {
    const contexttype = useContext(RoomContext)
    let slug = props.match.params.slug
    let defaultBcg_ = defaultBcg
    
    const {getRoom} = contexttype
    const room = getRoom(slug)
    
    // useEffect()
    if (!room){
        return <div className= "error">
            <h3>no such room could be found</h3>
            <Link to='/rooms' className='btn-primary'>back to rooms</Link>
        </div>
    }

    const {name, description, capacity, size, price,extras, breakfast, pets, images} = room

    return (
        <StyledHero img={images[0]}>
            <Banner title ={`${name} room`}>
            <Link to ='/rooms' className='btn-primary'>
                back to rooms
            </Link>
            </Banner>
            
        </StyledHero>
    )
}

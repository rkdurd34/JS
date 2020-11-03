import React, {useContext} from 'react'
import {RoomContext} from '../context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'

export default function FeaturedRooms() {
    let {loading, featuredRooms:rooms} = useContext(RoomContext)
    rooms = rooms.map(room=>{
        return <Room key = {room.id} room={room}/>
    })
    console.log(loading,rooms, '후아')
    return (
        
            <section className="featured-rooms">
                <Title title = "feature Rooms"/>
                <div className="featured-rooms-center">
                    {(loading)?(<Loading/>):(rooms)}
                </div>  
            </section>
            
            
            
        
    )
}

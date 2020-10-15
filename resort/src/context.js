import React,{useEffect, useState} from 'react'
import items from './data'


const RoomContext = React.createContext();
//<RoomContext.Provider value ={}
function RoomProvider({children}) {
    const [state,setRooms] = useState({
        rooms:[1,2,3,4,5],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
    })


    
    useEffect(
        ()=>{
            let rooms = formatData(items)
            let featuredRooms = rooms.filter(room => room.featured===true);
            
            setRooms((state)=>({
                ...state,
                rooms,
                featuredRooms,
                loading:false
            }))
            
            
        }
        ,[])
    
    //getData{} 
    function formatData(items){
        let tempItems = items.map(item=>{
            let id = item.sys.id
            let images = item.fields.images.map(image=>image.fields.file.url)
            let room = {...item.fields,images,id}
            return room
        })
        return tempItems
    }
    function getRoom(slug){
        let tempRooms = [...state.rooms];
        const room = tempRooms.find((room)=>room.slug === slug);
        return room
    }
    return (
        <RoomContext.Provider value={{
            ...state,
            getRoom: getRoom
            }}>
            {children}
        </RoomContext.Provider>
    )
}

const RoomConsumer = RoomContext.Consumer

export {RoomProvider, RoomConsumer, RoomContext}
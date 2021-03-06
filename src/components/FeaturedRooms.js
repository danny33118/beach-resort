import React, { Component } from 'react';
import { RoomContext } from '../RoomContextProvider';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        let { loading, featuredRooms : rooms }=this.context;
        console.log("ROOMS",rooms);
        rooms = rooms.map(room => {
            console.log("ROOM",room);
            return <Room key={room.id} room={room}/>;
        });
        return (
            <section className="featured-rooms">
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                    {
                        loading ? <Loading/> : rooms
                    }
                </div>
            </section>
        )
    }
}

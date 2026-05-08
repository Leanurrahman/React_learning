
import { use } from "react"
import Friend from "./Friend";

export default function Friends({FriendsPromise}){

const friends = use(FriendsPromise);
 console.log(friends);
 
    return(
        <div className="card-container">
            <h3>Fridends: {friends.length}</h3>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}
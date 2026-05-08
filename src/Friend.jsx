export default function Friend({friend}){
    console.log(friend);
    const {id,title,userId} = friend;
;    
    return(
        <div className="friend-card">
            <h4>Id: {id}</h4>
            <h2>Title: {title}</h2>
            <h2>User ID: {userId}</h2>
        </div>
    )
}
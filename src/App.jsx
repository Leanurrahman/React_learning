
import Counter from "./Counter";
import Batsman from "./batmans"

import "./App.css";
import { Suspense } from 'react';
import Friends from "./Friends";
import Count from "./count2";
import Users from "./Users";
import Notation from "./Notation";
import FakeJson from "./FakeJson";
import Btn from "./btn";
import Counter3 from "./counter3";


const fetchUsers = fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())

const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums');
  return res.json();
}



function App() {
  const FriendsPromise = fetchFriends();
  function handleClick() {
    alert("I am clicked.");
  }

  const handleClick3 = () => {
    alert('ashi porci mama 3');
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h1 className="get">Get+started</h1>

       {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
       </Suspense> */}

       <Suspense fallback={<h2>Friends are comming..</h2>}>
         <Friends FriendsPromise={FriendsPromise}></Friends>
       </Suspense>
        
       <Suspense fallback={<h2>Users loading...</h2>}>
         <Users fetchUsers={fetchUsers}></Users>
       </Suspense>
      <Counter></Counter>
      <Batsman></Batsman>
      <Count></Count>
       <Notation></Notation>
       <FakeJson></FakeJson>
       <Btn></Btn>
       <Counter3></Counter3>

     <div className="flexkoro">
      <button onClick={handleClick}>Click Me = 1</button>
      <button
        onClick={function handleClick() {
          alert("I am clicked 2.");
        }}
      >
        Click Me = 2
      </button>

      <button onClick={handleClick3}>Click Me = 3</button>

      <button onClick={() => handleAdd5(10)}>Click add 5</button>
     </div>

      
    </>
  );
}

export default App;

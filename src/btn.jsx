export default function Btn(){

    function handleClick(){
        alert('button clicked');
    }


    const handleClick5 = (num) => {
        const Newnum = num + 5;
        alert(Newnum);
    }
    return(
        <div>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={handleClick5(10)}>Click me 2</button> */}
            <button onClick={() => handleClick5(10)}>click me now</button>
        </div>
    )
}
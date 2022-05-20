export default function Button() {
    function clickEvent1() {
        alert("You clicked button nr 1");
    }
    function clickEvent2() {
        alert("You clicked button nr 2");
    }
    function clickEvent3() {
        alert("You clicked button nr 3");
    }
    function clickEvent4() {
        alert("You clicked button nr 4");
    }
    return (
        <div>
            <button onClick={clickEvent1}>Click me</button>
            <button onClick={clickEvent2}>Click me</button>
            <button onClick={clickEvent3}>Click me</button>
            <button onClick={clickEvent4}>Click me</button>
        </div>

    );
}
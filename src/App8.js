
// JSX의 주석문 : {/* JSX주석문 입니다. */}
// JSX의 주석 단축키 : Ctrl + Shift + C
function App8(){
    const name = '리액트';

    return (
    <div>
    {/* jsx주석문 입니다. */}
    {/* <div>{name}</div> */}
     // 하지만 이런 주석이나
     /* 이런 주석은 페이지에 그대로 나타나게 됩니다.*/
    </div>
    );
}

export default App8;
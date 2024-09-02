// jsx 안에서는 조건부 연산자(삼항 연산자)를 사용 해야한다.
function App3() {
    const name = '리액트';

    return(
        <div>
            {name === '리액트' ? <h1>리액트 입니다.</h1> : <h1>리액트가 아닙니다.</h1>}
        </div>
    )
}

export default App3;
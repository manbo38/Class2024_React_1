
// jsx안에서 자바스크립트 표현식을 사용할 떄는 중괄호{}로 감싸준다.
function App2() {
    const name = '리액트';

    return(
        <div>
            <h1>{name} 안녕</h1>
            <h1>{name} World</h1>
        </div>

    );


}

export default App2;
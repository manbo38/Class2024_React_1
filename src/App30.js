// jsx 외부에서는 기존 if문을 사용할 수 있다.
function App30() {
    let state = "";
    const login = 'y';
    if(login === 'y'){
        state = '로그인 성공';
    }else{
        state = '로그인 실패';
    }

    return(
        <div>
            {state}
        </div>
    );


}
export default App30;
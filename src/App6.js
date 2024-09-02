import './App.css';

// 외부 CSS파일을 불러올때 class속성 대신에 className속성을 사용해야 한다.
function App6() {
    const name = '리액트';
    
    return(
        <div className='react'>{name}</div>
    );


}

export default App6;
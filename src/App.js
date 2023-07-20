import './App.css';
import { FiCheck, FiX, FiArrowRightCircle, FiCheckSquare } from "react-icons/fi";
import { useState, useRef, useEffect } from 'react';
/**
 * 
 * issues : input창 focus 버튼 눌렀을 때도 적용 / 한글 입력시 마지막 문자 중복 입력됨 / 공백 입력 시 입력 안되게
 * not-yet : 수정, 삭제 버튼 활성화 / 할 일 마무리 된 것 처리 어케 함 -> 모달 안에 메모장 만들기 / firebase 연동하고 싶다
 * idea : FiCheckSquare 어따 쓰지
 */

function App() {
  const [lists, setLists] = useState([]);
  const [text,setText] = useState();

  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus(), []);
  
  return (
    <div className="container">
      <div className="subcontainer">
        <div className='board'>
          <div className='board-title-input'>
            <div className='board-title'>오늘 할 일</div>
            <input className='list-input' type='text' placeholder='오늘 할 일을 적어주세요.'
              ref={ inputRef } value={text}
              onChange={(e) => { setText(e.target.value) }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  let t = [...lists, text];
                  setLists(t); setText(""); console.log(lists, text);
                }
              }}
            />
            <div style={{ display: "flex", alignItems:"center" }}>
              <FiArrowRightCircle fontSize="20px" color='fff' cursor='pointer'
                onClick={() => {
                  setLists([...lists, text]); setText("");
                  inputRef.current.focus();
              }} />
            </div>
          </div>

          {lists.map((val, idx) => {
            return (
              <Contents list={val} />
            );
          })}
          
        </div>
      </div>
    </div>
  );

  function Contents(props) {

    return (
      <div className='board-contents'>
        <FiCheckSquare/>
        {props.list}
        <div style={{ display: "flex", alignItems: "center" }}>
        <FiCheck color='FB32E7' cursor='pointer' onClick={(e)=>{}}/>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
        <FiX color='3AD321' cursor='pointer' onClick={(e)=>{}}/>
        </div>
        
        
      </div>
    );
    
  }
}

export default App;

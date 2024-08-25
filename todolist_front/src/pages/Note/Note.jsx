import React, { useState } from 'react';
import MainContainer from '../../components/MainContainer/MainContainer'

function Note(props) {
    const [memos, setMemo] = useState("");

    const handleOnChange = (e) => {
        setMemo(e.target.value);
    }

    const handleOnClick = () => {
        if (memos.trim() === "") {
            alert("메모를 입력하세요");
            return;
        };
        console.log("메모: " + memos);
        setMemo("");
    }

    const handleKeyDown = (e) => {
        if (e.shiftKey) {
            return;
        }
        if (e.keyCode === 13) {
            handleOnClick();
        }
    }
        return (
            <MainContainer>
                <div>
                    <h1>메모: {memos}</h1>
                </div>
                <div>
                    <textarea name="memo" onChange={handleOnChange} value={memos} onKeyDown={handleKeyDown}></textarea>
                    <button onClick={handleOnClick} >확인</button>
                </div>
            </ MainContainer>
        );
}

export default Note;
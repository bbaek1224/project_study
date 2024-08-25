/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';

function ConfirmButtonTop({ onSubmit, onCancel, disabled }) {
    const navigate = useNavigate();

    const handleCancleClick = () => {
        onCancel();
    }

    const handleSubmitClick = () => {
        setTimeout(() => navigate("/todo"), 400);
        onSubmit();
    }

    return (
        <div css={s.layout}>
            <button onClick={handleCancleClick}>취소</button>
            <button onClick={handleSubmitClick} disabled={disabled}>완료</button>
        </div>
    );
}

export default ConfirmButtonTop;
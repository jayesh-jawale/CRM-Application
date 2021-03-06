import './message-history.css';

export const MessageHistory = ( {msg} ) => {
    return msg.map((row, i) =>
        <div key={i} className="message-history mt-3">
        <div className="send font-weight-bold text-secondary">
            <div className="sender">{row.sender}</div>
            <div className="date">{row.messageAt}</div>
        </div>
        <div className="message">{row.message}</div>
    </div>
    )
}
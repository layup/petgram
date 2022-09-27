import React from 'react'; 
import ReactDOM from 'react-dom'

const Backdrop = props => {

    return ReactDOM.createPortal(
        <div 
            className='fixed bottom-0 top-0 left-0 h-screen w-screen z-20 bg-slate-900/[.6]' 
            onClick={props.onClick}>
        </div>, 
        document.getElementById('backdrop-hook') 
    )
}

export default Backdrop
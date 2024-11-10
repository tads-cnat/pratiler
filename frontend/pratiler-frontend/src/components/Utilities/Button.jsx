import inputCss from '../../assets/css/Login/Login.module.css'

export function Button({ type, name }) {
    return <input type={type} value={name} className={inputCss.inputSubmit}/>
}
import { useCookies } from "react-cookie";
import MainForm from "./MainForm";
import Thanks from "./ThanksPage"

export default function Page({title}) {
    const [cookies, setCookie, removeCookie] = useCookies(["submitted"]);
    const setter = (b) => {
        setCookie('submitted',b,{maxAge:'2592000'})
        console.log('submit')
    }
    if(false) {
        return <Thanks title={title}/>
    } else {
        return <MainForm title = {title} setSubmitted={setter}/>
    }
}
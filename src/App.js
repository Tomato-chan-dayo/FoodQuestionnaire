import { useRef, useState } from 'react';

const actionURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf2uNpso_RkpQndOCGISdb_r_LK1AErnXiW5y5Bf-faWPHEbA/formResponse'
const sexFormNumber = 1023523879
//const actionURL = ''
//const sexFormNumber = 2044093388
const formData = [
    [
        1185269914,
        1105364558,
        285696908,
        1448702839,
        907942729,
        681209382,
        1690055981,
        1267656677,
        1991915155,
        1653079034
    ]
]

function Header() {
    return (
        <div className='section'>
            <h1>どの写真がおいしそうに見えるかのアンケート</h1>
            <p>大学での英語の授業にて使用します。</p>
        </div>
    )
}

function Sex({_ref}) {
    return (<div className='section' ref={_ref}>
        <p className='question required'>性別を教えてください</p>
        <label className='checkbox-container'><input className='radio-button' type='radio' name={'entry.' + sexFormNumber} value='女性' />女性</label>
        <label className='checkbox-container'><input className='radio-button' type='radio' name={'entry.' + sexFormNumber} value='男性' />男性</label>
        <label className='checkbox-container'><input className='radio-button' type='radio' name={'entry.' + sexFormNumber} value='その他' />その他</label>
    </div>)
}

function ImageSelectGrid({number}) {
    const [selected,setSelected] = useState(Array(9).fill(null))
    const images = []
    const inputs = []
    for (let i = 0; i < 9; i++) {
        images.push(
            <div
                key={i}
                className='img_container' onClick={() => {
                    if (selected[i] == null) {
                        const next = selected.slice()
                        next[i] = next.filter(it => it != null).length + 1
                        setSelected(next)
                    }
                }} >

                <img src={"./images/image" + number + "/" + i + ".jpg"} alt='food' className='grid_image' />
                {(selected[i] != null) && <div className='text_overlay'>{selected[i]}</div>}
            </div>
        )
        inputs.push(<input key={i}  type='checkbox' name={'entry.' + formData[number][i]} value={selected[i] != null ?selected[i] :'' } onChange={()=>{}} checked={true} />)
       
    }

    return (
        <div className='section hidden-inputs-container'>
            <div className='hidden-inputs'>
                {inputs}
            </div>
            <p className='question required'>おいしそうに見える順番に画像をタップしてください</p>
            <button type='button'
                className='grid_reset'
                onClick={() => {
                    setSelected(Array(9).fill(null))
                }}>
                リセット
            </button>
            <div className='grid9x9'>
                {images}
            </div>
        </div>
    )
}

function ReasonInput({number}) {
    return (
        <div className='section'>
            <p className='question'>上の写真についてその順番にした理由を教えてください。一部の写真の理由でも大丈夫です。<br />例)1はなんの料理かよくわからなかったから最も美味しそうではないにした。</p>
            <textarea name={'entry.'+formData[number][9]} rows="4" className='reason-input' />
        </div>
    )
}

export default function Page() {
    const sexRef = useRef(null)
    const formRef = useRef()
    const imageSelectGrids = []

    for (let i = 0; i < formData.length; i++) {
        imageSelectGrids.push(
            <div key={i}>
                <ImageSelectGrid number={i} />
                <ReasonInput number={i} />
            </div>)
    }


    return (
        <div>
        <form ref={formRef} action={actionURL}>
            <div className='content'>
                <Header />
                <Sex _ref={sexRef} />
                {imageSelectGrids}
                <div className='section'>ご協力ありがとうございました。</div>
                <button type='button' className='send' onClick={() => {
                    
                    if (formRef.current['entry.' + sexFormNumber].value == '') {
                        sexRef.current.scrollIntoView({ behavior: 'smooth' })
                        return
                    }

                    for(let i = 0;i < formData.length;i++) {
                        for (let i2 = 0;i2 < 9;i2++) {
                            if(formRef.current['entry.'+formData[i][i2]].value == '') {
                                formRef.current['entry.'+formData[i][i2]].scrollIntoView({behavior:'smooth'})
                                return
                            }
                        }
                    }
                    formRef.current.submit()
                }}>送信</button>
            </div>
        </form>
        <iframe name='hidden' className='hidden-inputs'></iframe>
        </div>
    )
}
import { useRef, useState } from 'react';

//const actionURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf2uNpso_RkpQndOCGISdb_r_LK1AErnXiW5y5Bf-faWPHEbA/formResponse'
//const sexFormNumber = 1023523879
const actionURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfFqtLMJZUSMH3BgoAUSuMfvtGmCGbzREW8vUFuaqeIckBuvg/formResponse'
const sexFormNumber = 2044093388
const formData = [
    [
        1161860935,
        384597150,
        1072452233,
        2009194370,
        1227517577,
        1040940557,
        709300346,
        1566089948,
        2054964439,
        1125949110
        ],
        [
        199371909,
        1585691079,
        331662221,
        1862383427,
        606693297,
        1396917552,
        392504451,
        1850103414,
        1302706774,
        497418245
        ],
        [
        540397149,
        1672714906,
        906798224,
        372861867,
        174623743,
        458939917,
        1019161946,
        514248562,
        1786174864,
        1208246595
        ],
        [
        1854075003,
        1646723184,
        752947458,
        876313968,
        711007480,
        759154534,
        936930656,
        95103038,
        1712446119,
        821403981
        ],
        [
        1103366317,
        1880822913,
        1062591448,
        1373803967,
        1606373627,
        424474925,
        455738555,
        63971587,
        393948958,
        802397190
        ],
        [
        731626503,
        948959485,
        1998028978,
        5394470,
        306375253,
        1014395484,
        1899968957,
        2135714659,
        81458965,
        1291316196
        ],
        [
        1908630855,
        1005786329,
        1646623992,
        982982112,
        384370990,
        1073108774,
        682194691,
        864120137,
        193263106,
        1967939125
        ],
        [
        1641889181,
        39346759,
        260502080,
        1218214229,
        1638436182,
        1584575981,
        917202706,
        1874417677,
        670492157,
        1319136954
        ],
        [
        1590065724,
        1552166817,
        1398520852,
        191172882,
        1624691565,
        1977475387,
        2141472468,
        440348704,
        1572151663,
        394598902
        ],
        [
        356328135,
        1753517185,
        1318654501,
        997052301,
        803279095,
        63413294,
        659467030,
        1831908754,
        1730708569,
        1384589852
        ],
        [
        30512221,
        44401899,
        2133832552,
        1350516226,
        892574415,
        1011409585,
        1859595982,
        1659104352,
        388344117,
        835112219
        ],
        [
        1478179734,
        70902957,
        1725210444,
        1346496536,
        1279114031,
        1333792679,
        443739443,
        628549088,
        55973896,
        497074687
        ],
        [
        880867761,
        445943382,
        1947926991,
        442193000,
        2145561853,
        728582301,
        662272231,
        237130500,
        1466144251,
        470593388
        ],
        [
        1094877751,
        475902499,
        1551720962,
        996555724,
        943093565,
        1283047069,
        94584803,
        398703036,
        1516802703,
        471395532
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
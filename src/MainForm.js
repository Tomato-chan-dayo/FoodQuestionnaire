import { useRef, useState } from 'react';


const actionURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScl0LO3u4Nf1gVnS9YR0eS9HuDChrd7HGfw-fF2hHgjq_9y3A/formResponse'
const sexFormNumber = 1080492001
const formData = [[
    326889848,
    2104449870,
    539976562,
    2054113156,
    1840131840,
    2003126102,
    2133583252,
    692519099,
    1531900687,
    126130045
    ],
    [
    1473836616,
    301926728,
    353717414,
    719920731,
    1006101511,
    1810992117,
    214400953,
    1234222172,
    1862656595,
    371919648
    ],
    [
    1192549908,
    327766518,
    1895717191,
    865139873,
    1505179188,
    329517810,
    2015161699,
    1595128680,
    857335847,
    923567744
    ],
    [
    203017530,
    1692288627,
    1875035149,
    933419897,
    1277017384,
    946190727,
    936002182,
    290790461,
    1327730386,
    1441632408
    ],
    [
    1830814234,
    1095027786,
    1185036245,
    773393491,
    266453454,
    1330669532,
    1606617150,
    530955550,
    2084205431,
    157096001
    ],
    [
    46308043,
    343791884,
    2005437121,
    371438315,
    1153954378,
    1639271781,
    375363942,
    1029714068,
    767338764,
    772273374
    ],
    [
    417934125,
    786897858,
    677032764,
    1346121388,
    2071745541,
    22859860,
    1712535863,
    1189803586,
    1970432170,
    2099868353
    ],
    [
    2061089540,
    742827376,
    767794678,
    129166092,
    1213797827,
    1592898849,
    585715304,
    270825176,
    1469869513,
    1932248407
    ],
    [
    1728298567,
    54305862,
    557780361,
    905685295,
    119086375,
    1140880109,
    19552644,
    502625713,
    12349496,
    2025713107
    ],
    [
    512959635,
    1050022727,
    645611020,
    934892126,
    1704479719,
    1365527045,
    742696497,
    1580304965,
    507525080,
    1363634829
    ],
    [
    932638988,
    226805141,
    1216194020,
    2139344243,
    148772222,
    1332765039,
    68611463,
    1394343216,
    821208015,
    1232961712
    ],
    [
    1434081350,
    1720721186,
    2014536599,
    1912482270,
    715777094,
    1320845867,
    1815163151,
    330308194,
    2015594254,
    1843521607
    ],
    [
    267928224,
    1543757242,
    605121775,
    152793058,
    326738556,
    555469686,
    1679833515,
    55026316,
    1341031248,
    1261907658
    ],
    [
    457577857,
    97515039,
    101080113,
    533470007,
    726119012,
    1713924260,
    702654664,
    1343429951,
    1475822171,
    1829148128
    ]]
/*
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
]*/

function Header({ title }) {
    return (
        <div className='section'>
            <div className='title'>{title}</div>
            <div className='title_description'>大学での英語の授業にて使用します。</div>
            <div className='bar'></div>
            <div className='required_description'>* 必須の質問です</div>
        </div>
    )
}

function Sex({ _ref }) {
    return (<div className='section' ref={_ref}>
        <p className='question required'>性別を教えてください</p>
        <label className='checkbox-container'><input className='radio-button' type='radio' name={'entry.' + sexFormNumber} value='女性' />女性</label>
        <label className='checkbox-container'><input className='radio-button' type='radio' name={'entry.' + sexFormNumber} value='男性' />男性</label>
        <label className='checkbox-container'><input className='radio-button' type='radio' name={'entry.' + sexFormNumber} value='その他' />その他</label>
    </div>)
}

function ImageSelectGrid({ number }) {
    const [selected, setSelected] = useState(Array(9).fill(null))
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
                    } else if (selected[i] == selected.filter(it => it != null).length) {
                        const next = selected.slice()
                        next[i] = null
                        setSelected(next)
                    }
                }} >

                <img src={"./images/" + number + "/" + i + ".jpg"} alt='food' className='grid_image' />
                {(selected[i] != null) && <div className='text_overlay'>{selected[i]}</div>}
            </div>
        )
        inputs.push(<input key={i} type='checkbox' name={'entry.' + formData[number][i]} value={selected[i] != null ? selected[i] : ''} onChange={() => { }} checked={true} />)

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

function ReasonInput({ number }) {
    return (
        <div className='section'>
            <p className='question'>上の写真についてその順番にした理由を教えてください。一部の写真の理由でも大丈夫です。<br />例)1はなんの料理かよくわからなかったから最も美味しそうではないにした。</p>
            <textarea name={'entry.' + formData[number][9]} rows="4" className='reason-input' />
        </div>
    )
}

export default function Page({ title, setSubmitted }) {
    const sexRef = useRef(null)
    const formRef = useRef()
    const imageSelectGrids = []
    const [sending,setSending] = useState(false)

    for (let i = 0; i < formData.length; i++) {
        imageSelectGrids.push(
            <div key={i}>
                <ImageSelectGrid number={i} />
                <ReasonInput number={i} />
            </div>)
    }

    return (
        <div>
            <form
                ref={formRef}
                action={actionURL}
                target='hidden'
                onSubmit={(event) => {
                    /*if(sending) {
                        event.preventDefault()
                        return
                    }*/
                    if (formRef.current['entry.' + sexFormNumber].value == '') {
                        sexRef.current.scrollIntoView({ behavior: 'smooth' })
                        event.preventDefault()
                        return
                    }

                    for (let i = 0; i < formData.length; i++) {
                        for (let i2 = 0; i2 < 9; i2++) {
                            if (formRef.current['entry.' + formData[i][i2]].value == '') {
                                formRef.current['entry.' + formData[i][i2]].scrollIntoView({ behavior: 'smooth' })
                                event.preventDefault()
                                return
                            }
                        }
                    }
                    setSending(true)
                }}>
                <div className='content'>
                    <Header title={title} />
                    <Sex _ref={sexRef} />
                    {imageSelectGrids}
                    <div className='section'>ご協力ありがとうございました。</div>
                    <button className='send'>{sending ? '送信中': '送信'}</button>
                </div>
            </form>
            <iframe name='hidden' className='hidden-inputs' onLoad={() => setSubmitted(true)}></iframe>
        </div>
    )
}
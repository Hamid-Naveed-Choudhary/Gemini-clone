import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const cardsData = [{
    text: "Suggest beautiful places to see an upcoming road trip",
    img: assets.compass_icon,

},
{
    text: "Briefly summarize this concept: urban playing",
    img: assets.bulb_icon
},
{
    text: "Brainstorm team bonding activities for our work retreat",
    img: assets.message_icon
},
{
    text: "Improve the readability  of the following code",
    img: assets.code_icon
},

];
const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)


    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">

                {!showResult ?
                    <>
                        <div className="greet">
                            <p><span>Hello, Hamid</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            {
                                cardsData.map((card, index) => (
                                    <div onClick={() => { onSent(card.text); setInput(card.text) }} key={index} className="card">
                                        <p>{card.text}</p>
                                        <img src={card.img} alt="" />
                                    </div>
                                ))
                            }

                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                                ? <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                }


                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                    </div>
                    <p className="bottom-info">
                        Gemini may display the inaccurate info, inculding about people, so double-check its responses. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main

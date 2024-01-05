import { useEffect } from "react";

// images
import icon from '../../img/logo.png';
import twitter from '../../img/twitter.png';
import telegram from '../../img/telegram.png';
import etherscan from '../../img/etherscan.png';
import tokenomics from '../../img/tokenomics.png';

function Home(props) {
    useEffect(function() {

    });

    return (
        <div className="home bg-white">
            {/* Navbar*/}
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-color-3">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="https://dragonmemetoken.github.io">
                        <img src={icon} alt="Dragon Meme" width={60} />
                        <p className="bebas-neue ps-4 mb-0 font-size-170" style={{letterSpacing: '0.05em'}}>DRAGON MEME</p>
                    </a>

                    <div className="d-flex d-lg-none">
                        <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    </div>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            {/*<li className="nav-item font-size-90 font-size-xl-100 px-2 px-xl-3">*/}
                            {/*    <a className="nav-link text-white font-size-110" href="#howtobuy">How To Buy</a>*/}
                            {/*</li>*/}
                            <li className="nav-item font-size-90 font-size-xl-100 px-2 px-xl-3">
                                <a className="nav-link text-white font-size-110" href="#tokenomics">Tokenomics</a>
                            </li>
                            <li className="nav-item font-size-90 font-size-xl-100 px-2 px-xl-3 mb-2 mb-lg-0">
                                <a className="nav-link text-white font-size-110" href="#roadmap">Roadmap</a>
                            </li>
                            <li className="nav-item font-size-90 font-size-xl-100 px-2 ps-xl-3">
                                <a className="nav-link text-white font-size-90 btn-custom-1 px-4 text-center" href="https://coinhall.org/sei" target="_blank" rel="noreferrer">BUY $DRAGONMEME</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <div className="bg-color-4" id="home" style={{"paddingTop":"86px", "minHeight":"calc(100vh - 86px)"}}>
                <div className="container">
                    <div className="row align-items-center py-4 py-md-5 py-xl-3" style={{"minHeight":"calc(100vh - 86px)"}}>
                        <div className="col-lg-5 mb-5">
                            <div className="mb-2">
                                <div className="row justify-content-center">
                                    <div className="col-11 col-sm-9 col-lg-10 col-xl-8">
                                        <img src={icon} className="w-100" alt="Dragon Meme" />
                                    </div>
                                </div>
                            </div>
                            <p className="text-color-1 font-size-130 font-size-sm-140 font-size-md-130 font-size-lg-130 font-size-xl-140 line-height-110 text-center mb-4 pb-3">@DragonMeme2024</p>

                            <div className="row justify-content-center">
                                <div className="col-10 col-sm-7 col-md-11 col-lg-12 col-xl-11">
                                    <div className="row justify-content-center">
                                        <div className="col-4 col-md-2 px-3 px-lg-2 px-xl-2">
                                            <a href="https://twitter.com/Dragonmeme2024" target="_blank" rel="noreferrer">
                                                <img src={twitter} className="w-100" alt="twitter" />
                                            </a>
                                        </div>
                                        <div className="col-4 col-md-2 px-3 px-lg-2 px-xl-2">
                                            <a href="https://t.me/DragonMeme2024" target="_blank" rel="noreferrer">
                                                <img src={telegram} className="w-100" alt="telegram" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="text-center text-md-center pb-3 pb-md-0 mb-5 mb-lg-0">
                                <h1 className="bebas-neue text-color-1 font-size-260 font-size-sm-270 font-size-md-270 font-size-lg-300 font-size-xl-330 mb-5">Dragon Meme Coin:<br/> A Blockchain Agnostic Revolution</h1>
                                <p className="text-color-1 font-size-120 font-size-sm-120 font-size-md-120 font-size-lg-130 font-size-xl-140 mb-5">In the bustling world of cryptocurrencies, a new star is rising: the Dragon Meme Coin. Poised to launch on the SEI Network as the inaugural step of its journey, Dragon Meme Coin is not just another token; it's a cultural phenomenon blending the playful spirit of memes with the robust world of blockchain technology. </p>

                                <div className="text-center">
                                    <a className="text-white font-size-110 btn btn-custom-1 px-5 py-3 text-center" href="https://t.me/DragonMeme2024" target="_blank" rel="noreferrer">JOIN OUR COMMUNITY</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-color-6 position-relative py-5">
                <div className="position-absolute invisible" id="about" style={{"top":"-86px"}}></div>

                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <h2 className="bebas-neue text-color-1 text-center font-size-260 font-size-sm-270 font-size-md-270 font-size-lg-300 font-size-xl-330 mb-5">Concept and Vision</h2>

                            <p className="text-center text-color-1 font-size-120 font-size-sm-120 font-size-md-120 font-size-lg-130 font-size-xl-140 mb-0">Dragon Meme Coin embodies the mythical power and wisdom of dragons, a symbol revered in cultures worldwide. The coin taps into the year 2024's zodiac sign – the dragon – heralding a year of prosperity, strength, and unparalleled growth. With its roots in meme culture, Dragon Meme Coin connects with its community through humor and shared values, fostering a sense of belonging and collective enthusiasm.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5 position-relative">
                <div className="position-absolute invisible" id="about" style={{"top":"-86px"}}></div>

                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-5 pe-lg-5 mb-5 mb-lg-0">
                            <div className="row justify-content-center">
                                <div className="col-9 col-sm-7 col-md-6 col-lg-11 col-xl-9">
                                    <div className="bg-color-6 rounded-circle position-relative" style={{paddingTop: '100%'}}>
                                        <div className="d-flex align-items-center justify-content-center position-absolute w-100 h-100" style={{top: '0', bottom:'0'}}>
                                            <i className="fa-solid fa-gear-code text-color-4 font-size-800 font-size-sm-900"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <h2 className="bebas-neue text-color-1 text-center text-lg-start font-size-260 font-size-sm-270 font-size-md-270 font-size-lg-300 font-size-xl-330 mb-5">Technical Foundation</h2>

                            <p className="text-center text-lg-start text-color-1 font-size-120 font-size-sm-120 font-size-md-120 font-size-lg-130 font-size-xl-140 mb-0">At its core, Dragon Meme Coin is blockchain agnostic. While it begins its journey on the SEI Network, known for its speed and efficiency, the coin is designed to transcend boundaries, aiming to be accessible on various blockchains. This flexibility ensures that Dragon Meme Coin can adapt to the evolving crypto landscape, making it a resilient and future-proof choice for enthusiasts.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-color-3">
                <div className="container py-5 position-relative">
                    <div className="position-absolute invisible" id="about" style={{"top":"-86px"}}></div>

                    <div className="container py-5">
                        <div className="row align-items-center">
                            <div className="col-lg-7 pe-lg-5 order-1 order-lg-0">
                                <h2 className="bebas-neue text-color-1 text-center text-lg-start font-size-260 font-size-sm-270 font-size-md-270 font-size-lg-300 font-size-xl-330 mb-5">Community Engagement:</h2>

                                <p className="text-center text-lg-start text-color-1 font-size-120 font-size-sm-120 font-size-md-120 font-size-lg-130 font-size-xl-140 mb-0">Dragon Meme Coin isn't just a token; it's a movement. The team behind it is committed to fostering a vibrant, engaged community. Through social media campaigns, meme contests, and collaborative events, Dragon Meme Coin creates an inclusive environment where creativity and humor are celebrated. This approach is designed to resonate with the meme community, leveraging the power of viral content to amplify its presence.</p>
                            </div>

                            <div className="col-lg-5 mb-5 mb-lg-0 order-0 order-lg-1">
                                <div className="row justify-content-center">
                                    <div className="col-9 col-sm-7 col-md-6 col-lg-11 col-xl-9">
                                        <div className="bg-color-4 rounded-circle position-relative" style={{paddingTop: '100%'}}>
                                            <div className="d-flex align-items-center justify-content-center position-absolute w-100 h-100" style={{top: '0', bottom:'0'}}>
                                                <i className="fa-solid fa-user-group-simple text-color-1 font-size-600 font-size-sm-900"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white position-relative py-5">
                <div className="position-absolute invisible" id="tokenomics" style={{"top":"-86px"}}></div>

                <div className="container py-5">
                    <h2 className="bebas-neue text-color-1 text-center font-size-260 font-size-sm-270 font-size-md-270 font-size-lg-300 font-size-xl-330 mb-5">Tokenomics</h2>

                    <div className="row font-size-80">
                        <div className="col-lg-4 mb-5 mb-lg-0 px-4">
                            <div className="row justify-content-center">
                                <div className="col-9 col-sm-5 col-md-4 col-lg-9 col-xl-7 mb-5">
                                    <div className="bg-color-4 rounded-circle position-relative" style={{paddingTop: '100%'}}>
                                        <div className="d-flex align-items-center justify-content-center position-absolute w-100 h-100" style={{top: '0', bottom:'0'}}>
                                            <i className="fa-solid fa-parachute-box text-color-1 font-size-500"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="font-size-120">
                                    <p className="text-center text-color-1 font-size-120 font-size-sm-120 font-size-md-120 font-size-lg-130 font-size-xl-140 mb-4 fw-bold">Airdrop</p>
                                </div>

                                <p className="text-center text-color-1 font-size-120 font-size-sm-120 font-size-md-120 font-size-lg-130 font-size-xl-140 mb-0">Our Airdrop program distributes tokens to active community members and early adopters. It's designed to encourage participation and reward loyalty, helping to grow and strengthen our user base.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-5 mb-lg-0 px-4">
                            <div className="row justify-content-center">
                                <div className="col-9 col-sm-5 col-md-4 col-lg-9 col-xl-7 mb-5">
                                    <div className="bg-color-4 rounded-circle position-relative" style={{paddingTop: '100%'}}>
                                        <div className="d-flex align-items-center justify-content-center position-absolute w-100 h-100" style={{top: '0', bottom:'0'}}>
                                            <i className="fa-solid fa-coins text-color-1 font-size-500"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="font-size-120">
                                    <p className="text-center text-color-1 font-size-120 font-size-sm-120 font-size-md-120 font-size-lg-130 font-size-xl-140 mb-4 fw-bold">Liquidity</p>
                                </div>

                                <p className="text-center text-color-1 font-size-120 font-size-sm-120 font-size-md-120 font-size-lg-130 font-size-xl-140 mb-0">We allocate a significant portion of tokens to ensure strong liquidity, facilitating stable and efficient market transactions. This commitment to liquidity minimizes price volatility and builds user confidence in our token.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 px-4">
                            <div className="row justify-content-center">
                                <div className="col-9 col-sm-5 col-md-4 col-lg-9 col-xl-7 mb-5">
                                    <div className="bg-color-4 rounded-circle position-relative" style={{paddingTop: '100%'}}>
                                        <div className="d-flex align-items-center justify-content-center position-absolute w-100 h-100" style={{top: '0', bottom:'0'}}>
                                            <i className="fa-solid fa-megaphone text-color-1 font-size-500"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="font-size-120">
                                    <p className="text-center text-color-1 font-size-120 font-size-sm-120 font-size-md-120 font-size-lg-130 font-size-xl-140 mb-4 fw-bold">Marketing</p>
                                </div>

                                <p className="text-center text-color-1 font-size-120 font-size-sm-120 font-size-md-120 font-size-lg-130 font-size-xl-140 mb-0">Our marketing strategy focuses on expanding our token's reach and fostering widespread adoption. Through targeted campaigns and community initiatives, we aim to attract new users and maintain active engagement with our existing base.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-color-6 position-relative py-5">
                <div className="position-absolute invisible" id="roadmap" style={{"top":"-86px"}}></div>

                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <h2 className="bebas-neue text-color-1 text-center font-size-260 font-size-sm-270 font-size-md-270 font-size-lg-300 font-size-xl-330 mb-5">Roadmap and Future Plans</h2>

                            <p className="text-center text-color-1 font-size-120 font-size-sm-120 font-size-md-120 font-size-lg-130 font-size-xl-140 mb-0">The launch on the SEI Network is just the beginning. Plans are in place to expand to other blockchains, increasing accessibility and engagement. Each step of expansion will be accompanied by community-driven events and campaigns, ensuring that the Dragon Meme Coin's journey is as exciting as its destination.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-color-4 position-relative py-5">
                <div className="position-absolute invisible" style={{"top":"-86px"}}></div>

                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <p className="text-center text-color-1 font-size-120 font-size-sm-120 font-size-md-120 font-size-lg-130 font-size-xl-140 mb-5">As we embark on this bullish 2024, Dragon Meme Coin stands out as a beacon of joy and potential in the crypto world. It's more than just a digital asset; it's a symbol of unity, humor, and the unyielding spirit of the meme community.</p>

                            <div className="text-center">
                                <a className="text-white font-size-110 btn btn-custom-1 px-5 py-3 text-center" href="https://t.me/DragonMeme2024" target="_blank" rel="noreferrer">JOIN OUR COMMUNITY</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-color-3 py-5 position-relative">
                <div className="position-absolute invisible" id="contact" style={{"top":"-102px"}}></div>

                <div className="container py-5">
                    <h2 className="bebas-neue text-center text-md-start text-color-1 font-size-260 font-size-sm-270 font-size-md-270 font-size-lg-300 font-size-xl-330 mb-5">Contact</h2>

                    <div className="row align-items-center">
                        <div className="col-md-6 pe-md-5">
                            <div className="row justify-content-center mb-5 mb-md-0">
                                <div className="col-10 col-sm-9 col-md-10">
                                    <img src={icon} alt="Dragon Meme" className="w-100" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <p className="text-center text-md-start text-color-1 font-size-120 font-size-sm-120 font-size-md-120 font-size-lg-130 font-size-xl-140 mb-3">Got questions or need help? Contact us:</p>
                            <p className="text-center text-md-start text-color-1 font-size-120 font-size-sm-120 font-size-md-120 font-size-lg-130 font-size-xl-140 mb-3">Email: <a href="mailto:support@dragonmeme.io" className="montreuxjs-xbd link-color-1">support@dragonmeme.io</a></p>
                            <p className="text-center text-md-start text-color-1 font-size-120 font-size-sm-120 font-size-md-120 font-size-lg-130 font-size-xl-140 mb-3">Twitter: <a href="https://twitter.com/Dragonmeme2024" target="_blank" rel="noreferrer" className="montreuxjs-xbd link-color-1">@DragonMeme2024</a></p>
                            <p className="text-center text-md-start text-color-1 font-size-120 font-size-sm-120 font-size-md-120 font-size-lg-130 font-size-xl-140 mb-5 pb-4">Telegram: <a href="https://t.me/DragonMeme2024" target="_blank" rel="noreferrer" className="montreuxjs-xbd link-color-1">https://t.me/DragonMeme2024</a></p>
                            {/*<p className="text-center text-md-start text-color-1 font-size-120 font-size-sm-120 font-size-md-120 font-size-lg-130 font-size-xl-140 mb-5 pb-4" style={{"wordBreak":"break-word"}}>Find contract info here:<br/> <a href="https://etherscan.io/token/0x54d8517985e74d5708fe45621c8e945c9e4218b9" target="_blank" rel="noreferrer" className="font-size-90 link-color-1">0x54d8517985e74d5708fe45621c8e945c9e4218b9</a></p>*/}

                            <div className="row justify-content-center justify-content-md-start">
                                <div className="col-10 col-sm-7 col-md-11 col-lg-12 col-xl-11 col-xxl-10">
                                    <div className="row justify-content-center justify-content-md-start">
                                        <div className="col-4 col-lg-3 px-3 px-lg-3 px-xl-4">
                                            <a href="https://twitter.com/Dragonmeme2024" target="_blank" rel="noreferrer">
                                                <img src={twitter} className="w-100" alt="twitter" />
                                            </a>
                                        </div>
                                        <div className="col-4 col-lg-3 px-3 px-lg-3 px-xl-4">
                                            <a href="https://t.me/DragonMeme2024" target="_blank" rel="noreferrer">
                                                <img src={telegram} className="w-100" alt="telegram" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
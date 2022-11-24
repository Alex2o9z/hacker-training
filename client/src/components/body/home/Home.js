import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import './bootstrap-responsive.css'

function Home() {
    return (
        <div className="home_page">
            <div className="hero-unit">
                <h1>Train Web Attack</h1>
                <span>This exercise is a set of the most common web vulnerabilities</span>
                {/* <a href="#" className="twitter-follow-button" data-show-count="true" data-lang="en" data-size="large">#</Link> */}
            </div>
            
            <div>
                <div className="row">
                    <div className="span4">
                    <h2>XSS</h2>
                    <ul>
                        <li><Link to="/example">Example 1</Link></li>
                        <li><Link to="/example">Example 2</Link></li>
                        <li><Link to="/example">Example 3</Link></li>
                        <li><Link to="/example">Example 4</Link></li>
                        <li><Link to="/example">Example 5</Link></li>
                        <li><Link to="/example">Example 6</Link></li>
                    </ul>
                </div>

                <div className="span4">
                    <h2>SQL injections</h2>
                    <ul>
                        <li><Link to="/content">Example 1</Link></li>
                        <li><Link to="/content">Example 2</Link></li>
                        <li><Link to="/content">Example 3</Link></li>
                        <li><Link to="/content">Example 4</Link></li>
                        <li><Link to="/content">Example 5</Link></li>
                        <li><Link to="/content">Example 6</Link></li>
                    </ul>	
                </div>
                <div className="span4">
                <h2>Directory traversal</h2>
                    <ul>
                        <li>Example 1: <img src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png" width="20px" alt="example 1" /></li>
                        <li>Example 2: <img src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png" width="20px" alt="example 2" /></li>
                        <li>Example 3: <img src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png" width="20px" alt="example 3" /></li>
                    </ul>
                </div>
                </div>

                <div className="row">
                    <div className="span4">
                        <h2>File Include</h2>
                        <ul>
                            <li><Link to="/example">Example 1</Link></li>
                            <li><Link to="/example">Example 2</Link></li>
                        </ul>
                    </div>


                    <div className="span4">
                        <h2>Code injection</h2>
                        <ul>
                            <li><Link to="/example">Example 1</Link></li>
                            <li><Link to="/example">Example 2</Link></li>
                            <li><Link to="/example">Example 3</Link></li>
                            <li><Link to="/example">Example 4</Link></li>
                        </ul>
                    </div>

                    <div className="span4">
                    <h2>Commands injection</h2>
                    <ul>
                        <li><Link to="/example">Example 1</Link></li>
                        <li><Link to="/example">Example 2</Link></li>
                        <li><Link to="/example">Example 3</Link></li>
                    </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="span4">
                    <h2>LDAP attacks</h2>
                    <ul>
                        <li><Link to="/example">Example 1</Link></li>
                        <li><Link to="/example">Example 2</Link></li>
                    </ul>
                </div>

                <div className="span4">
                    <h2>File Upload</h2>
                    <ul>
                    <li><Link to="/upfile">Example 1</Link></li>
                    <li><Link to="/upfile">Example 2</Link></li>
                </ul>
                </div>

                    <div className="span4">
                    <h2>XML attacks</h2>
                    <ul>
                        <li><Link to="/example">Example 1</Link></li>
                        <li><Link to="/example">Example 2</Link></li>
                    </ul>
                    </div>
                </div>
            </div>

            {/* <h2>Hello!</h2>
            <p>
                This site is about learning document. Thank you very much!
            </p>
            <a href="" target="_blank" 
            rel="noopener noreferrer">Link</Link> */}
        </div>
    )
}

export default Home


// import React from 'react'
// import './home.css'

// function Home() {
//     return (
//         <div className="home_page">
//             <h2>Hello everyone!</h2>
//             <p>
//                 Wish you have a good day. Thank you very much!
//             </p>
//             {/* <a href="" target="_blank" 
//             rel="noopener noreferrer">Link</a> */}
//         </div>
//     )
// }

// export default Home

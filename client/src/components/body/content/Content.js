import React from 'react'
import '../home/bootstrap-responsive.css'

function Content() {
    return (
        <div className="home_page">
            <div className="container">
                <table className='table table-striped'>
                    <tr><th>id</th><th>name</th><th>age</th></tr>
                    <tr><td>2</td><td>root</td><td>30</td></tr></table>
            </div>
        </div>
    )
}

export default Content

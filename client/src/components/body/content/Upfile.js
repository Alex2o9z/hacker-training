import React from 'react'

function Upfile() {
    return (
        <div className="home_page">
            <form action="upload.php" method="post" enctype="multipart/form-data">
                <h3>Select file to upload:</h3><br/>
                <input type="file" name="fileToUpload" id="fileToUpload"/><br/>
                <input type="submit" value="Upload File" name="submit"/>
            </form>
        </div>
    )
}

export default Upfile

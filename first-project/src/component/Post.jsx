import React from 'react'
import { useParams } from 'react-router'




function Post() {
    const {id} = useParams();


    return (
        <div>Post {console.log("Post : ", id)}</div>
    )
}

export default Post
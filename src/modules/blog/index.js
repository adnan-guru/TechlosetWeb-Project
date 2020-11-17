import React from 'react';
import Blogs from './component/blogs';
import Articles from './component/articles'


function Blog(){
    return(
        <div className="Blog">
        <Blogs />
        <Articles />
        </div>
    )
}
export default Blog;
import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full max-h-[400px]  bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl w-full max-h-[300px] justify-center' />
              <h2
            className='text-xl font-bold justify-center p-4'
            >{title}</h2>
            </div>
           
        </div>

        
    </Link>
  )
}



export default PostCard
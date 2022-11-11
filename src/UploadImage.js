import React,{useState} from 'react'
import InsertPhoto from '@mui/icons-material/InsertPhoto'
import './UploadImage.css'

function UploadImage() {
    const [image,setImage] = useState('')

    const handleImage = e =>{
        setImage(e.target.files[0])
    }
  return (
    <div className='imageUpload'>
        <form>
            <label htmlFor='image-file'>
        <InsertPhoto style={{color:'rgb(140, 206, 228)'}}/>
                <span>Image</span>
            </label>
            <input id='image-file' type="file" style={{display:'none'}} onChange={handleImage} />
        </form>
    </div>
  )
}

export default UploadImage
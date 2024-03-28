import { useState } from "react"
import Image from '../components/Image';
import Video from '../components/Video';

export default function NewCourse(){
const [image,setimage] = useState();
const [videos,setvideo] = useState([]);


    function saveimage(e){
        let input = e.target;
        if(input.files && input.files[0]){
            let reader = new FileReader();
            reader.readAsDataURL(input.files[0]);
            reader.onload = function (e){
                setimage(e.target.result);
            }
        }
    }

    function saveVideo(e){
        let input = e.target;
        if(input.files){
            let reader = new FileReader();
            reader.readAsDataURL(input.files[0]);
            reader.onload = function(e){
                let arr = [...videos];
                arr.push(e.target.result);
                setvideo(arr);
            }
        }
        }
    

    return (
        <div className="p-4 flex flex-col gap-4 ">
            <h2 className="font-medium text-2xl">Publish Course</h2>
            <input type="text" placeholder="Title of the course"></input>
            <textarea type="text" placeholder="Description of the course"></textarea>
            <label for="image" >Enter the image</label>
            <div className="flex gap-4">
                <input type="file" id="image" name="image" onChange={saveimage} accept="image/*"/>
                {
                    <Image src={image} alt={"course"}/>
                }
            </div>
            <label for="video">Enter the course video</label>
            <input type="file" id="video" name="video" placeholder="Enter the video"accept="video/*" onChange={saveVideo} multiple/>
            {
                videos.map((video)=>{
                    return <Video src={video} />
                })
            }
        </div>
    )
}
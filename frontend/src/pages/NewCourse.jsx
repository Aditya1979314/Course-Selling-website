export default function NewCourse(){

    
    return (
        <div className="p-4 flex flex-col gap-4 ">
            <h2 className="font-medium text-2xl">Publish Course</h2>
            <input type="text" placeholder="Title of the course"></input>
            <textarea type="text" placeholder="Description of the course"></textarea>
            <label for="image" >Enter the image</label>
            <input type="file" id="image" name="image" accept="image/*"/>
            <label for="video">Enter the course video</label>
            <input type="file" id="video" name="video" placeholder="Enter the video"accept="video/*"/>
        </div>
    )
}
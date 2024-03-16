import { useParams } from "react-router-dom"

export default function Course(){
let params = new URLSearchParams(document.location.search);

    return(
        <div>
            <div>Course {params.get("id")}</div>
            <div>{params.get("description")}</div>
        </div>
    )
}
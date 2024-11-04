export default function Card(props){
    return (
        <div className='card'>
            <img src={props.imageUrl} className="image"></img>

            <div className="place-stats">
                <p>{props.location}</p>
                <a href={props.googleMapsUrl}></a>
                <h2>{props.title}</h2>
                <span>{props.startDate}{props.endDate}</span>
                <p>{props.description}</p>
            </div>
        </div>

        
    )
}
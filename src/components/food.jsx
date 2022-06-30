
const Food = ({food: {image, title}}) => {

    return(
        <div className="food" >

            <img className="my-image-item" src={image} alt={image.title} />
            <p className="food-title">{title}</p>

        </div>
    )
}

export default Food
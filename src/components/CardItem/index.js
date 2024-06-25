import './index.css'

const CardItems = props => {
  const {Details} = props
  const {title, description, imgUrl, className} = Details

  return (
    <li className={`${className}card-item`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="img-container">
        <img className="card-img" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItems

import max from '../../image/Max.jpg'
import sergio from '../../image/Sergio2.jpg'
import albion from '../../image/Albon2.jpg'

export function ReviewItem() {
    const drivers = [
      {
        "id" : 1,
        "name" : "Max Verstappen",
        "review" : "The fastest car in the world, like a thunder!",
        "photo" : max
      },
      {
        "id" : 2,
        "name" : "Sergio Perez",
        "review" : "I was like a flash, Whooossshhh!",
        "photo" : sergio
      },
      {
        "id" : 3,
        "name" : "Alexander Albon",
        "review" : "I was really glad using this car back then. Feels good!",
        "photo" : albion
      }
    ]
  
    let listReviews = drivers.map((itemReviews) => 
      <div key={itemReviews.id} className='Item'>
       <img src={itemReviews.photo} />
        <div className='User'>
          <h3>{itemReviews.name}</h3>
          <p>{itemReviews.review}</p>
        </div>
      </div>
      )
      return (
        <div className='Review-box'>
        <h2>What drivers said: </h2>
        {listReviews}
      </div>
      )
  }
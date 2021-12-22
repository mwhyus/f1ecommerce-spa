export function ProductInfo({Category, Name, isDiscount}) {
    
    let Price = 700000
    let Discount = 0.8
    let afterDiscount = Price * Discount
  
    function CheckDiscount({isDiscount}) {
        let Discount = 20
      
        if(isDiscount){
          return(
            <p>{Discount}% OFF</p>
          );
        } 
        else {
          return(
            <p>Belum ada diskon</p>
          );
        }
      }

    function purchaseNow(e) {
        console.log(`Congratulation, ${e} has been purchased`);
      }

    let benefits = ["Big Discount", "Premium Service", "Free Regular Check Up"]
    let listBenefits = benefits.map((itemBenefits) => 
      <li>{itemBenefits}</li>
    )
  
    return (
      <div>
        <div className="Description">
          <h2 className="Category">{Category}</h2>
          <h1 className="Title">{Name}</h1>
          <p className='Price'>${afterDiscount}</p>
          <CheckDiscount isDiscount={isDiscount} />
          <p className="info">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic 
            type setting, remaining essentially unchanged.
          </p>
          <h2>What will you get: </h2>
          <ul>
            {listBenefits}
          </ul>
          <a onClick={(e) => purchaseNow(Name, e)} href='#'>Purchase Now</a>
        </div>
      </div>
    );
  }
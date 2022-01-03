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
            <p>Coming soon</p>
          );
        }
      }

    function purchaseNow(e) {
        console.log(`Congratulation, ${e} has been purchased`);
      }

    let benefits = ["Big Discount", "Premium Service", "Free Regular Check Up"]
    let listBenefits = benefits.map((itemBenefits) => 
      <li key={itemBenefits}>{itemBenefits}</li>
    )
  
    return (
      <div>
        <div className="Description">
          <h2 className="Category">{Category}</h2>
          <h1 className="Title">{Name}</h1>
          <p className="beforeDiscount">${Price}</p>
          <h1 className='Price'>${afterDiscount}</h1>
          <CheckDiscount isDiscount={isDiscount} />
          <p className="info">
            Honda’s RA621 was in essence an all-new design, 
            within what is allowed by the power unit regulations. 
            It was smaller and more powerful than the 2020 power unit. 
            A major re-assessment of priorities between combustion chamber efficiency and energy 
            captured by the exhaust led to a totally new cylinder head.
          </p>
          <p className="info">
          Increased valve angles (the angle between the inlet and exhaust valves) allowed the head to be lower and for the camshafts to be smaller in diameter. 
          A different material for the block allowed the gap between the cylinders to be smaller.
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
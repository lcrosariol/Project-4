import './GardenDetail.css';
import LineItem from '../LineItem/LineItem';

// Used to display the details of any order, including the cart (unpaid order)
export default function GardenDetail({ garden, handleChangeQty, handleCheckout }) {
  if (!garden) return null;

  const lineItems = garden.lineItems.map(item =>
    <LineItem
      lineItem={item}
      isPaid={garden.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />
  );

  return (
    <div className="GardenDetail">
      <div className="section-heading">
        {garden.isPaid ?
          <span>Garden <span className="smaller">{garden.gardenId}</span></span>
          :
          <span>NEW Garden</span>
        }
        <span>{new Date(garden.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {lineItems.length ?
          <>
            {lineItems}
            <section className="total">
              {garden.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >CHECKOUT</button>
              }
              <span>{garden.totalQty}</span>
              <span className="right">${garden.gardenTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="choose">Choose some plants!</div>
        }
      </div>
    </div>
  );
}
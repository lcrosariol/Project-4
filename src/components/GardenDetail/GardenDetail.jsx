import './GardenDetail.css';
import LineItem from '../LineItem/LineItem';
// import order from '../../../models/order';

// Used to display the details of any order, including the cart (unpaid order)
export default function GardenDetail({ order, handleChangeQty, handleCheckout }) {
  if (!order) return null;

  const lineItems = order.lineItems.map(item =>
    <LineItem
      lineItem={item}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />
  );

  return (
    <div className="GardenDetail">
      <div className="section-heading">
        {order.isPaid ?
          <span>Garden <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW Garden</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {lineItems.length ?
          <>
            {lineItems}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >CHECKOUT</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="choose">Choose some plants!</div>
        }
      </div>
    </div>
  );
}
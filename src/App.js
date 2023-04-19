import React from 'react';
import './App.css'
import Card from './Card';
import ExpenseItem from './components/ExpenseItem'


function App() {
  

  const invoice  = {
    invoiceId: "INV-001",
    billingDetails: {
      name: "John Doe",
      address: "123 Main Street",
      contact: "+1-123-456-7890",
      email: "johndoe@example.com",
    },
    companyDetails: {
      companyName: "Example Inc.",
      gstNo: "GST123456789",
      companyAddress: "456 Corporate Ave",
      returnAddress: null,
    },
    orderItems: [
      {
        name: "Product 1",
        quentity: 2,
        discountPercent: null,
        discountValue: null,
        gst: 12.5,
        gstPercent: 5,
        price: 100,
        productDescription: {
          name: "Product 1",
          size: "Large",
          price: 100,
          color: "Blue",
        },
      },
      {
        name: "Product 2",
        quentity: 1,
        discountPercent: 10,
        discountValue: 10,
        gst: 5,
        gstPercent: 2.5,
        price: 50,
        productDescription: {
          name: "Product 2",
          size: "Small",
          price: 50,
          color: "Green",
        },
      },
    ],
    subTotal: 250,
    tax: 18.75,
    discount: 10,
    discountPercent: null,
    grandTotal: 258.75,
  };
return(
  <Card>  <div className='full'>
    <h1> {invoice.invoiceId}</h1>
    <div className='right'>
      <div>
      <h3>{invoice.billingDetails.name} </h3>
      </div>
      <div>{invoice.billingDetails.address} </div>
      <div>{invoice.billingDetails.contact}</div>

    </div>
    <div className='left'>
      <h5> BiLL TO</h5>
      <p> {invoice.companyDetails.companyName}</p>
      <i> {invoice.companyDetails.gstNo}</i>
      <i> {invoice.companyDetails.companyAddress}</i>

    </div>
    <table className= 'table'  >
  <thead className='head'>
    <tr className='main'>
      <th>ITEM</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>TAX %</th>
      <th>AMOUNT</th>
      {/* <th>Discount %</th>
      <th>Discount</th> */}
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    {invoice.orderItems.map((item) => (
      <tr key={item.name}>
        <td>{item.name}</td>
        <td>{item.quentity}</td>
        <td>{item.price}</td>
        <td>{item.gstPercent}%</td>
        <td>{item.gst}</td>
        {/* <td>{item.discountPercent}%</td>
        <td>{item.discountValue}</td> */}
        <td>{(item.quentity * item.price + item.gst - item.discountValue).toFixed(2)}</td>
 
      </tr>
    ))}
  </tbody>
  
  <tfoot>
    <tr>
      <td colSpan="6"></td>
      <td>Sub Total</td>
      <td>{invoice.subTotal}</td>
    </tr>
    <tr>
      <td colSpan="6"></td>
      <td>Tax</td>
      <td>{invoice.tax}</td>
    </tr>
    <tr>
      <td colSpan="6"></td>
      <td>Discount</td>
      <td>{invoice.discount}</td>
    </tr>
    <tr>
      <td colSpan="6"></td>
      <td>Grand Total</td>
      <td>{invoice.grandTotal}</td>
    </tr>
  </tfoot>
</table>
</div>
</Card>

  
);
};


export default App;

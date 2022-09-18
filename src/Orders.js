import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
// import './Orders.css'
import { useStateValue } from "./StateProvider";
import Order from './Order'

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
const fetchBlog = async ()=>{
    const response = db.collection('users');
    const userId =  response.doc(user?.uid);
    const coll  =  userId.collection('orders');
const res = await coll.get();
// const fin  = coll.onSnapshot();



res.docs.map(item=>{
    setOrders(
        (oldList)=>
        [...oldList, item.data()])
})
}
  useEffect(() => {
    if(user) {
        // db
        // .collection('users')
        // .doc(user?.uid)
        // .collection('orders')
        // .orderBy('created', 'desc')
        // .onSnapshot(snapshot => (
        //     setOrders(snapshot.docs.map(doc => ({
        //         id: doc.id,
        //         data: doc.data()
        //     })))
        // ))
        fetchBlog();
    } else {
        setOrders([])
    }

  }, [user])
console.log(orders)
// orders.map((ele)=>{
//     // console.log(ele.basket[0].id);
//     ele.basket.map((item)=>{
//         console.log(item.title);
//     })
// })
    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            {
                orders.map((ele)=>{
                    return(
                    ele.basket.map((item)=>{
                        return(
                            <Order item = {item} />
                        )
                    })
                )})
            }
        </div>
    )
}

export default Orders


// {
//     blogs && blogs.map(blog=>{
//       return(
//         <div className="blog-container">
//           <h4>{blog.title}</h4>
//           <p>{blog.body}</p>
//         </div>
//       )
//     })
//   }
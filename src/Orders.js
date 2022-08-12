import React, { useState, useEffect } from "react";
import "./Orders.css";
// import { database } from "./firebase";
import { useStateValue } from "./StateProvider";
import Order from "./Order";
import { getDatabase } from "@firebase/database";
import { addDoc, collection } from "@firebase/firestore";

function Orders() {
  const [{ basket, user, }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {


    const database = getDatabase();

    addDoc(collection(database, user)
      .doc(user?.uid)
      .collection("orders")
      .orderBy("created", "desc")
      .onSnapshot((snap) => {
        setOrders(
          snap.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      })
    )})

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}


export default Orders;

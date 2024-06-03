import { useState } from "react";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendBill = amount ? amount - myBill : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount || !myBill) return;
    onSplitBill(whoIsPaying === "user" ? friendBill : -myBill);
  }
  return (
    <form action="" className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split Bill with {selectedFriend.name}</h2>

      <label htmlFor="">💸Total Bill</label>
      <input
        type="text"
        name=""
        id=""
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label htmlFor="">👲Your Bill</label>
      <input
        type="text"
        name=""
        id=""
        value={myBill}
        onChange={(e) => setMyBill(e.target.value)}
      />

      <label htmlFor="">👩‍⚕️ {selectedFriend.name} Bills</label>
      <input type="text" name="" id="" value={friendBill} disabled />

      <label htmlFor=""> 💵Paid by </label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <button className="button">Add</button>
    </form>
  );
}

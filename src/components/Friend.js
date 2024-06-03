export default function Friend({ friend, onSelected, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.img} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          Kamu harus bayar Rp{Math.abs(friend.balance)} ke {friend.name}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} harus bayar Rp{Math.abs(friend.balance)} ke kamu
        </p>
      )}
      {friend.balance === 0 && (
        <p>{friend.name} dan kamu tidak harus bayar lagi</p>
      )}
      <button className="button" onClick={() => onSelected(friend)}>
        {isSelected ? "close" : "choose"}
      </button>
    </li>
  );
}

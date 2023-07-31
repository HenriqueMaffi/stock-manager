import PropTypes from "prop-types";
import useStock from "../hooks/useStock";
import { useNavigate } from "react-router-dom";

DeleteButton.propTypes = {
  itemName: PropTypes.string,
  itemId: PropTypes.string,
};

export default function DeleteButton({ itemId, itemName }) {
  const { deleteItem } = useStock();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (confirm(`Do you wish to delete the item ${itemName}?`)) {
      deleteItem(itemId);
      navigate("/items");
    }
  };

  return (
    <button className="button is-danger is-small" onClick={handleDelete}>
      Delete
    </button>
  );
}

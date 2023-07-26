import React from "react";
import "../card.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { usePinContext } from "../contexts/PinContext";
import EditPinPage from "../pages/EditPinPage";
import { useNavigate } from "react-router-dom";
const PinItem = ({ item, pinSize }) => {
  const { deletePin } = usePinContext();
  const navigate = useNavigate();
  return (
    <div className={`pin ${pinSize}`}>
      <img src={item.image} alt="" className="mainPic" />
      <div className="card_cover"></div>
      <div className="content2">
        <button className="card_btn_save">Сохранить</button>
      </div>
      <div className="content">
        <button
          onClick={() => navigate(`/edit/${item.id}`)}
          className="card_button"
        >
          <svg
            className="card_deatils bi bi-three-dots"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <EditIcon />
          </svg>
        </button>
        <button
          onClick={() => deletePin(item.id)}
          className="card_button card_button_item2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-three-dots card_deatils"
            viewBox="0 0 16 16"
          >
            <DeleteIcon />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PinItem;

import "../NewItem/NewItem.css";

import ItemForm from "../Cart/ItemForm";

const NewItem = (props) => {
  const saveItemDataHandler = (enteredItemData) => {
    const itemData = {
      ...enteredItemData,
      key: Math.random(),
    };
    props.onAddItemData(itemData);
  };
  return (
    <div className="new-item">
      <ItemForm onSaveItemData={saveItemDataHandler} />
    </div>
  );
};

export default NewItem;

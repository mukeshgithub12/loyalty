
const AddEditBtn = () => {
  return (
    <>
      <li>
        <span>
          <i className="fa fa-plus" />
          <a  title="Add" className="add-edit active">
            Add
          </a>
        </span>
      </li>
      <li>
        <span>
          <i className="fa fa-edit" />
          <a title="Edit" className="add-edit">
            Edit
          </a>
        </span>
      </li>
    </>
  );
};

export default AddEditBtn;

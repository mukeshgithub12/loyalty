import Breadcrumb from "../components/Breadcrumb";
import SlabsCreate from "../components/SlabsCreate";
import CommonBtn from "../components/Form/Button.js/CommonBtn";
import AddEditBtn from "../components/Form/Button.js/AddEditBtn";
import TypeNumber from "../components/Form/InputNumber";
import TypeText from "../components/Form/InputText";

const Slabs = () => {
  const button_add_edit  =  <AddEditBtn/>
  return (
    <>
      <div className="pcoded-main-container">
        <Breadcrumb title="Slab Create" page_title="Master" btn={button_add_edit}/>
        <div className="pcoded-content">
          <div className="card zen_card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mt-4">
                  <TypeText title="Level" />
                  <TypeNumber title="Slab from" />
                  <TypeNumber title="Slab to" />
                  <TypeNumber title="Points (%)" />
                  <CommonBtn title="Save" />
                </div>
                <div className="col-md-6">
                  <SlabsCreate/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slabs;

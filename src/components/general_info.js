import React from "react";

function editForm(id, onSubmitEdit, handleEdit, holdValue) {
  return <form id={id} onSubmit={onSubmitEdit}>

    <h3> Edit General Details </h3>

    <label htmlFor="name">Name:</label>
    <input
      onChange={handleEdit}
      defaultValue={holdValue.name}
      type="text"
      name="general"
      id="name"
    />
    <label htmlFor="email">Email:</label>
    <input
      onChange={handleEdit}
      defaultValue={holdValue.email}
      type="email"
      name="general"
      id="email"
    />
    <label htmlFor="phone">Phone:</label>
    <input
      onChange={handleEdit}
      defaultValue={holdValue.phone}
      type="tel"
      name="general"
      id="phone"
    />
    <button type="submit">
      Submit
    </button>
  </form>
}

function editBtn(showEditForm, idx, num, id, onSubmitEdit, handleEdit, holdValue) {
  if (num == idx) {
    return editForm(id, onSubmitEdit, handleEdit, holdValue);
  } else {
    return <button id={idx} onClick={showEditForm} name='gen'> Edit </button>
  }
}

const GeneralInfo = (props) => {
  const {
    generalInfos, deleteGeneralClicked,
    showEditForm, num, onSubmitEdit, handleEdit
  } = props;

  return(
    <div>
      <h3> General </h3>
      
    {generalInfos.map((info, idx) => {
      return <div key={info.id} class="details"> 
        <div class="detail">
          <div>Name:</div>
          <div class="info">{info.name}</div>
        </div>
        <div class="detail">
          <div>Email:</div>
          <div class="info">{info.email}</div>
        </div>
        <div class="detail">
          <div>Phone:</div>
          <div class="info">{info.phone}</div>
        </div>

        {editBtn(showEditForm, idx, num, idx, onSubmitEdit, handleEdit, info)}

        <button id={info.id} onClick={deleteGeneralClicked}>
          Delete
        </button>
      </div>
    })}
    </div>
  )
};

export default GeneralInfo;

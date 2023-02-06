import React from "react";

function editForm(id, onSubmitEdit, handleEdit, holdValue) {
  return <form id={id} onSubmit={onSubmitEdit}>

    <h3> Edit Education Details </h3>

    <label htmlFor="schoolName">School Name:</label>
    <input
      onChange={handleEdit}
      defaultValue={holdValue.schoolName}
      type="text"
      name="education"
      id="schoolName"
    />
    <label htmlFor="titleOfStudy">Title Of Study:</label>
    <input
      onChange={handleEdit}
      defaultValue={holdValue.titleOfStudy}
      type="text"
      name="education"
      id="titleOfStudy"
    />
    <label htmlFor="dateOfStudy">Date Of Study:</label>
    <input
      onChange={handleEdit}
      defaultValue={holdValue.dateOfStudy}
      type="date"
      name="education"
      id="dateOfStudy"
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
    return <button id={idx} onClick={showEditForm} name='edu'> Edit </button>
  }
}

const EducationalExp = (props) => {
  const {
    educationInfos, deleteEducationClicked,
    showEditForm, num, onSubmitEdit, handleEdit
  } = props;

  return(
    <div>
      <h3> Education </h3>

      {educationInfos.map((info, idx) => {
        return <div key={info.id} class="details"> 
          <div class="detail">
            <div>School Name:</div>
            <div class="info">{info.schoolName}</div>
          </div>
          <div class="detail">
            <div>Title Of Study:</div>
            <div class="info">{info.titleOfStudy}</div>
          </div>
          <div class="detail">
            <div>Date Of Study:</div>
            <div class="info">{info.dateOfStudy}</div>
          </div>

          {editBtn(showEditForm, idx, num, idx, onSubmitEdit, handleEdit, info)}

          <button id={info.id} onClick={deleteEducationClicked}>
            Delete
          </button>
        </div>
      })}
    </div>
  )
};

export default EducationalExp;

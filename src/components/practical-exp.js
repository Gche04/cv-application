import React from "react";

function editForm(id, onSubmitEdit, handleEdit, holdValue) {
  return <form id={id} onSubmit={onSubmitEdit}>

    <h3> Edit Experience Details </h3>

    <label htmlFor="companyName">Company Name:</label>
    <input
      onChange={handleEdit}
      defaultValue={holdValue.companyName}
      type="text"
      name="experience"
      id="companyName"
    />
    <label htmlFor="positionTitle">Position Title:</label>
    <input
      onChange={handleEdit}
      defaultValue={holdValue.positionTitle}
      type="text"
      name="experience"
      id="positionTitle"
    />
    <label htmlFor="jobTask">Job Task:</label>
    <input
      onChange={handleEdit}
      defaultValue={holdValue.jobTask}
      type="text"
      name="experience"
      id="jobTask"
    />
    <label htmlFor="startDate">Start Date:</label>
    <input
      onChange={handleEdit}
      defaultValue={holdValue.startDate}
      type="date"
      name="experience"
      id="startDate:"
    />
    <label htmlFor="endDate">End Date:</label>
    <input
      onChange={handleEdit}
      defaultValue={holdValue.endDate}
      type="date"
      name="experience"
      id="endDate"
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
    return <button id={idx} onClick={showEditForm} name='exp'> Edit </button>
  }
}

const PracticalExp = (props) => {
  const {
    experienceInfos, deleteExperienceClicked,
    showEditForm, num, onSubmitEdit, handleEdit
  } = props;

  return(
    <div>
      <h3> Experience </h3>

      {experienceInfos.map((info, idx) => {
        return <div key={info.id} class="details"> 
          <div class="detail">
            <div>Company Name:</div>
            <div class="info">{info.companyName}</div>
          </div>
          <div class="detail">
            <div>Position Title:</div>
            <div class="info">{info.positionTitle}</div>
          </div>
          <div class="detail">
            <div>Job Task:</div>
            <div class="info">{info.jobTask}</div>
          </div>
          <div class="detail">
            <div>Start Date:</div>
            <div class="info">{info.startDate}</div>
          </div>
          <div class="detail">
            <div>End Date:</div>
            <div class="info">{info.endDate}</div>
          </div>
          {editBtn(showEditForm, idx, num, idx, onSubmitEdit, handleEdit, info)}

          <button id={info.id} onClick={deleteExperienceClicked}>
            Delete
          </button>
        </div>
      })}
    </div>
  )
};

export default PracticalExp;

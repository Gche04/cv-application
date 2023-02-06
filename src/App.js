
import './App.css';

import React, { useState, useEffect } from "react";

import uniqid from "uniqid";
import GeneralInfo from "./components/general_info";
import EducationalExp from "./components/educational-exp";
import PracticalExp from "./components/practical-exp";

const genInfo = {
  name: '',
  email: '',
  phone: '',
  id: uniqid()
}

const eduInfo = {
  schoolName: '',
  titleOfStudy: '',
  dateOfStudy: '',
  id: uniqid()
}

const expInfo = {
  companyName: '',
  positionTitle: '',
  jobTask: '',
  startDate: '',
  endDate: '',
  id: uniqid()
}

const App = () => {
  const [general, setGeneral] = useState(genInfo);
  const [education, setEducation] = useState(eduInfo);
  const [experience, setExperience] = useState(expInfo);

  const [generalInfo, setGeneralInfo] = useState([]);
  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);

  const [editGenClicked, setEditGenClicked] = useState(-1);
  const [editEduClicked, setEditEduClicked] = useState(-1);
  const [editExpClicked, setEditExpClicked] = useState(-1);

  const changeGen = (id, value) => {
    setGeneral({
      ...general,
      [id]: value
    })
  };

  const changeEdu = (id, value) => {
    setEducation({
      ...education,
      [id]: value
    })
  };

  const changeExp = (id, value) => {
    setExperience({
      ...experience,
      [id]: value
    })
  };

  const resetGen = () => {
    setGeneral({
      name: '',
      email: '',
      phone: '',
      id: uniqid()
    })
  };

  const resetEdu = () => {
    setEducation({
      schoolName: '',
      titleOfStudy: '',
      dateOfStudy: '',
      id: uniqid()
    })
  };

  const resetExp = () => {
    setExperience({
      companyName: '',
      positionTitle: '',
      jobTask: '',
      startDate: '',
      endDate: '',
      id: uniqid()
    })
  };

  const submitGen = () => {
    setGeneral({
      id: general.id
    })
    setGeneralInfo(generalInfo.concat(general));
    resetGen();
  }

  const submitEdu = () => {
    setEducation({
      id: education.id
    })
    setEducationInfo(educationInfo.concat(education));
    resetEdu();
  }

  const submitExp = () => {
    setExperience({
      id: experience.id
    })
    setExperienceInfo(experienceInfo.concat(experience));
    resetExp();
  }

  const handleChange = (e) => {
    const { name, id, value } = e.target;

    if (name === 'general') {
      changeGen(id, value);
    } else if (name === 'education') {
      changeEdu(id, value);
    } else if (name === 'experience') {
      changeExp(id, value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const id = e.target.id;

    if (id === "general") {
      submitGen();
    } else if (id === "education") {
      submitEdu();
    } else if (id === "experience") {
      submitExp();
    }
  };

  const deleteGen = (e) => {
    const idx = e.target.id;
    setGeneralInfo(current =>
      current.filter(obj => {
        return obj.id !== idx;
      }),
    );
  };

  const deleteEdu = (e) => {
    const idx = e.target.id;
    setEducationInfo(current =>
      current.filter(obj => {
        return obj.id !== idx;
      }),
    );
  }

  const deleteExp = (e) => {
    const idx = e.target.id;
    setExperienceInfo(current =>
      current.filter(obj => {
        return obj.id !== idx;
      }),
    );
  }

  const onEditClick = (e) => {
    const id = parseInt(e.target.id);
    const param = e.target.name;

    if (param === 'gen') {
      setEditGenClicked(id);
    } else if (param === 'edu') {
      setEditEduClicked(id);
    } else if (param === 'exp') {
      setEditExpClicked(id);
    }
  };

  const editGeneral = (e) => {
    e.preventDefault();

    const idx = e.target.id;
    const arr = generalInfo;

    const name = arr[idx].name;
    const email = arr[idx].email;
    const phone = arr[idx].phone;

    arr[idx] = general;

    if (arr[idx].name === "") {
      arr[idx].name = name;
    }
    if (arr[idx].email === "") {
      arr[idx].email = email;
    }
    if (arr[idx].phone === "") {
      arr[idx].phone = phone;
    }

    setGeneralInfo(arr);
    resetGen();
    setEditGenClicked(-1);
  }

  const editEducation = (e) => {
    e.preventDefault();

    const idx = e.target.id;
    const arr = educationInfo;

    arr[idx] = education;
    setEducationInfo(arr);
    resetEdu();
    setEditEduClicked(-1);
  }

  const editExperience = (e) => {
    e.preventDefault();

    const idx = e.target.id;
    const arr = experienceInfo;

    arr[idx] = experience;
    setExperienceInfo(arr);
    resetExp();
    setEditExpClicked(-1);
  }

  return (
    <div id="content">
      <div>
        <form id="general" onSubmit={onSubmit}>
          <div class="formDiv">
            <h3> General information </h3>

            <label htmlFor="name">Name:</label>
            <input
              onChange={handleChange}
              value={general.name}
              type="text"
              name="general"
              id="name"
            />
            <label htmlFor="email">Email:</label>
            <input
              onChange={handleChange}
              value={general.email}
              type="email"
              name="general"
              id="email"
            />
            <label htmlFor="phone">Phone:</label>
            <input
              onChange={handleChange}
              value={general.phone}
              type="tel"
              name="general"
              id="phone"
            />
          </div>
          <button type="submit">
            Submit
          </button>
        </form>

        <form id="education" onSubmit={onSubmit}>
          <div class="formDiv">
            <h3> Educational information </h3>

            <label htmlFor="schoolName">School Name:</label>
            <input
              onChange={handleChange}
              value={education.schoolName}
              type="text"
              name="education"
              id="schoolName"
            />
            <label htmlFor="titleOfStudy">Study Title:</label>
            <input
              onChange={handleChange}
              value={education.titleOfStudy}
              type="tel"
              name="education"
              id="titleOfStudy"
            />
            <label htmlFor="dateOfStudy">Study Date:</label>
            <input
              onChange={handleChange}
              value={education.dateOfStudy}
              type="date"
              name="education"
              id="dateOfStudy"
            />
          </div>
          <button type="submit">
            Submit
          </button>
        </form>

        <form id="experience" onSubmit={onSubmit}>
          <div class="formDiv">
            <h3> Work Experience </h3>

            <label htmlFor="companyName">Company Name:</label>
            <input
              onChange={handleChange}
              value={experience.companyName}
              type="text"
              name="experience"
              id="companyName"
            />
            <label htmlFor="positionTitle">Position Title:</label>
            <input
              onChange={handleChange}
              value={experience.positionTitle}
              type="text"
              name="experience"
              id="positionTitle"
            />
            <label htmlFor="jobTask">Job Task:</label>
            <textarea
              onChange={handleChange}
              value={experience.jobTask}
              name="experience"
              id="jobTask"
            >
            </textarea>

            <label htmlFor="startDate">Start Date:</label>
            <input
              onChange={handleChange}
              value={experience.startDate}
              type="date"
              name="experience"
              id="startDate"
            />
            <label htmlFor="endDate">End Date:</label>
            <input
              onChange={handleChange}
              value={experience.endDate}
              type="date"
              name="experience"
              id="endDate"
            />
          </div>

          <button type="submit">
            Submit
          </button>
        </form>

      </div>
      <div>
        <GeneralInfo
          generalInfos={generalInfo}
          deleteGeneralClicked={deleteGen}
          num={editGenClicked}
          showEditForm={onEditClick}
          handleEdit={handleChange}
          onSubmitEdit={editGeneral}
        />
        <EducationalExp
          educationInfos={educationInfo}
          deleteEducationClicked={deleteEdu}
          num={editEduClicked}
          showEditForm={onEditClick}
          handleEdit={handleChange}
          onSubmitEdit={editEducation}
        />
        <PracticalExp
          experienceInfos={experienceInfo}
          deleteExperienceClicked={deleteExp}
          num={editExpClicked}
          showEditForm={onEditClick}
          handleEdit={handleChange}
          onSubmitEdit={editExperience}
        />
      </div>
    </div>
  );
}

export default App;

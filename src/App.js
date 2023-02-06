
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
    const {name, id, value}= e.target;

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
    } else if(id === "education"){
      submitEdu();
    } else if(id === "experience"){
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
    } else if(param === 'edu'){
      setEditEduClicked(id);
    } else if(param === 'exp'){
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

  useEffect(() => {
    
  })


/*
      editGenClicked: -1,
      editEduClicked: -1,
      editExpClicked: -1
    };

    this.deleteGeneral = this.deleteGeneral.bind(this);
    this.editGeneral = this.editGeneral.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.editEducation = this.editEducation.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.editExperience = this.editExperience.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
  }

  handleChange = (e) => {
    const value = e.target.value;
    const param = e.target.id;

    if (e.target.name == 'general') {
      this.generalChange(param, value);
    } else if(e.target.name == 'education'){
      this.educationChange(param, value)
    }else if(e.target.name == 'experience'){
      this.experienceChange(param, value)
    }
  };

  generalChange = (param, value) => {
    if (param == 'name') {
      this.setState({
        general: {
          name: value,
          email: this.state.general.email, 
          phone: this.state.general.phone
        }
      });
    }else if(param == 'email'){
      this.setState({
        general: {
          name: this.state.general.name,
          email: value, 
          phone: this.state.general.phone
        }
      });
    }else if(param == 'phone'){
      this.setState({
        general: {
          name: this.state.general.name,
          email: this.state.general.email, 
          phone: value
        }
      });
    }
  };
  
  educationChange = (param, value) => {
    if (param == 'schoolName') {
      this.setState({
        education: {
          schoolName: value,
          titleOfStudy: this.state.education.titleOfStudy, 
          dateOfStudy: this.state.education.dateOfStudy,
        }
      });
    }else if(param == 'titleOfStudy'){
      this.setState({
        education: {
          schoolName: this.state.education.schoolName,
          titleOfStudy: value,
          dateOfStudy: this.state.education.dateOfStudy,
        }
      });
    }else if(param == 'dateOfStudy'){
      this.setState({
        education: {
          schoolName: this.state.education.schoolName,
          titleOfStudy: this.state.education.titleOfStudy,
          dateOfStudy: value,
        }
      });
    }
  };

  experienceChange = (param, value) => {
    if (param == 'companyName') {
      this.setState({
        experience: {
          companyName: value,
          positionTitle: this.state.experience.positionTitle,
          jobTask: this.state.experience.jobTask,
          startDate: this.state.experience.startDate,
          endDate: this.state.experience.endDate
        }
      });
    }else if(param == 'positionTitle'){
      this.setState({
        experience: {
          companyName: this.state.experience.companyName,
          positionTitle: value,
          jobTask: this.state.experience.jobTask,
          startDate: this.state.experience.startDate,
          endDate: this.state.experience.endDate
        }
      });
    }else if(param == 'jobTask'){
      this.setState({
        experience: {
          companyName: this.state.experience.companyName,
          positionTitle: this.state.experience.positionTitle,
          jobTask: value,
          startDate: this.state.experience.startDate,
          endDate: this.state.experience.endDate
        }
      });
    }else if(param == 'startDate'){
      this.setState({
        experience: {
          companyName: this.state.experience.companyName,
          positionTitle: this.state.experience.positionTitle,
          jobTask: this.state.experience.jobTask,
          startDate: value,
          endDate: this.state.experience.endDate
        }
      });
    }else if(param == 'endDate'){
      this.setState({
        experience: {
          companyName: this.state.experience.companyName,
          positionTitle: this.state.experience.positionTitle,
          jobTask: this.state.experience.jobTask,
          startDate: this.state.experience.startDate,
          endDate: value
        }
      });
    }
  }

  onSubmitGeneral = (e) => {
    e.preventDefault();
    this.setState({
      general : {
        id: this.state.general.id
      }
    });

    this.setState({
      generalInfo: this.state.generalInfo.concat(this.state.general),

      general: {
        name: '',
        email: '', 
        phone: '',
        id: uniqid()
      }
    });
  };

  onSubmitEducation = (e) => {
    e.preventDefault();
    this.setState({
      education : {
        id: this.state.education.id
      }
    });

    this.setState({
      educationInfo: this.state.educationInfo.concat(this.state.education),

      education: {
        schoolName: '',
        titleOfStudy: '',
        dateOfStudy: '',

        id: uniqid()
      }
    });
  };

  onSubmitExperience = (e) => {
    e.preventDefault();
    this.setState({
      experience : {
        id: this.state.experience.id
      }
    });

    this.setState({
      experienceInfo: this.state.experienceInfo.concat(this.state.experience),

      experience: {
        companyName: '',
        positionTitle: '',
        jobTask: '',
        startDate: '',
        endDate: '',

        id: uniqid()
      }
    });
  };

  editGeneral(e) {
    e.preventDefault();

    const idx = e.target.id;
    const arr = this.state.generalInfo;
    const name = arr[idx].name;
    const email = arr[idx].email;
    const phone = arr[idx].phone;
    
    arr[idx] = this.state.general;

    if (arr[idx].name == "") {
      arr[idx].name = name;
    }
    if (arr[idx].email == "") {
      arr[idx].email = email;
    }
    if (arr[idx].phone == "") {
      arr[idx].phone = phone;
    }

    this.setState({
      generalInfo: arr,

      general: {
        name: '',
        email: '', 
        phone: '',
        id: uniqid()
      },
      editGenClicked: -1
    });
  }

  editEducation(e) {
    e.preventDefault();

    const idx = e.target.id;
    const arr = this.state.educationInfo;
    const schoolName = arr[idx].schoolName;
    const titleOfStudy = arr[idx].titleOfStudy;
    const dateOfStudy = arr[idx].dateOfStudy;
    
    arr[idx] = this.state.education;

    if (arr[idx].schoolName == "") {
      arr[idx].schoolName = schoolName;
    }
    if (arr[idx].titleOfStudy == "") {
      arr[idx].titleOfStudy = titleOfStudy;
    }
    if (arr[idx].dateOfStudy == "") {
      arr[idx].dateOfStudy = dateOfStudy;
    }

    this.setState({
      educationInfo: arr,

      education: {
        schoolName: '',
        titleOfStudy: '',
        dateOfStudy: '',
        id: uniqid()
      },
      editEduClicked: -1
    });
  }

  editExperience(e) {
    e.preventDefault();

    const idx = e.target.id;
    const arr = this.state.experienceInfo;
    const companyName = arr[idx].companyName;
    const positionTitle = arr[idx].positionTitle;
    const jobTask = arr[idx].jobTask;
    const startDate = arr[idx].startDate;
    const endDate = arr[idx].endDate;
    
    arr[idx] = this.state.experience;

    if (arr[idx].companyName == "") {
      arr[idx].companyName = companyName;
    }
    if (arr[idx].positionTitle == "") {
      arr[idx].positionTitle = positionTitle;
    }
    if (arr[idx].jobTask == "") {
      arr[idx].jobTask = jobTask;
    }
    if (arr[idx].startDate == "") {
      arr[idx].startDate = startDate;
    }
    if (arr[idx].endDate == "") {
      arr[idx].endDate = endDate;
    }

    this.setState({
      experienceInfo: arr,

      experience: {
        companyName: '',
        positionTitle: '',
        jobTask: '',
        startDate: '',
        endDate: '',
        id: uniqid()
      },
      editExpClicked: -1
    });
  }

  deleteGeneral(e) {
    const idx = e.target.id;
    let arr = this.state.generalInfo;
    arr.splice(idx, 1);

    this.setState({
      generalInfo: arr 
    });
  }

  deleteEducation(e) {
    const idx = e.target.id;
    let arr = this.state.educationInfo;
    arr.splice(idx, 1);

    this.setState({
      educationInfo: arr 
    });
  }

  deleteExperience(e) {
    const idx = e.target.id;
    let arr = this.state.experienceInfo;
    arr.splice(idx, 1);

    this.setState({
      experienceInfo: arr 
    });
  }

  onEditClick = (e) => {
    const id = parseInt(e.target.id);
    const param = e.target.name;

    if (param == 'gen') {
      this.setState({
        editGenClicked : id
      });
    } else if(param == 'edu'){
      this.setState({
        editEduClicked : id
      });
    } else if(param == 'exp'){
      this.setState({
        editExpClicked : id
      });
    }
  };

  render() {
    const { 
      general, generalInfo,
      education, educationInfo,
      experience, experienceInfo, 
      editGenClicked, editEduClicked, editExpClicked
    } = this.state;
*/  
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
  //}
}

export default App;

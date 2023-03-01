import { classroomData } from "../../data/classroomData";

const allocatingClassroomsWithVolunteers = (volunteerData, to_render_data) => {
  for (let i = 0; i < classroomData.length; ++i) {
    const needed_lang = classroomData[i].languageRequirement;

    var suitable_volunteers = getSuitableVolunteers(needed_lang, volunteerData);
    if (needed_lang.length === 0)
      to_render_data.push({
        ...classroomData[i],
        suitable_volunteers: suitable_volunteers,
        languageRequirement: ["No language Barrier"],
      });
    else {
      to_render_data.push({
        ...classroomData[i],
        suitable_volunteers: suitable_volunteers,
      });
    }
  }
};

const getSuitableVolunteers = (needed_lang, volunteerData) => {
  var to_return = [];
  //   console.log(needed_lang);
  if (needed_lang.length === 0) {
    for (let j = 0; j < volunteerData.length; ++j) {
      to_return.push({
        name: volunteerData[j].dataToSubmit.name,
        key: volunteerData[j].key,
      });
    }
  }

  for (let i = 0; i < needed_lang.length; ++i) {
    for (let j = 0; j < volunteerData.length; ++j) {
      if (
        volunteerData[j].dataToSubmit.chosen_languages[needed_lang[i]] === true
      ) {
        to_return.push({
          name: volunteerData[j].dataToSubmit.name,
          key: volunteerData[j].key,
        });
      }
    }
  }
  if (to_return.length === 0) {
    to_return.push({
      name: "Sorry! No matching volunteers",
      key: -1,
    });
  }
  to_return = removeDuplicates(to_return);
  return to_return;
};

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
export default allocatingClassroomsWithVolunteers;

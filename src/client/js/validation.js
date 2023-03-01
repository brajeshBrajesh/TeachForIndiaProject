export const check_validation = (
  name,
  email,
  phone,
  initial_days,
  chosenLocation,
  chosen_languages,
  setFlags
) => {
  let temp_flags = {
    name: validate_name(name),
    email: validate_email(email),
    phone: validate_phone(phone),
    days: validate_days(initial_days),
    location: validate_location(chosenLocation),
    languages: validate_languages(chosen_languages),
  };

  let temp = false;
  temp =
    temp |
    temp_flags.name |
    temp_flags.email |
    temp_flags.phone |
    temp_flags.days |
    temp_flags.location |
    temp_flags.languages;

  setFlags(temp_flags);
  return temp;
};

const validate_name = (name) => {
  if (name.length == 0) return true;
  return false;
};
const validate_email = (email) => {
  if (email.length == 0) return true;
  return false;
};
const validate_phone = (phone) => {
  if (/^[0-9]+$/.test(phone) === false) return true;
  if (phone.length < 10) return true;
  return false;
};

const validate_days = (days) => {
  let temp = false;
  for (const day in days) {
    temp = temp | days[day];
  }
  console.log("days", temp);
  if (temp == 0) return true;

  return false;
};
const validate_languages = (languages) => {
  let temp = false;
  for (const language in languages) {
    temp = temp | languages[language];
  }
  if (temp == 0) return true;
  return false;
};
const validate_location = (location) => {
  if (location.length == 0 || location === "Choose Location") return true;
  return false;
};

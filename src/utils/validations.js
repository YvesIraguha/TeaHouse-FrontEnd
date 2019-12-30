export const validateEmail = email => {
  const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (emailFormat.test(email)) {
    return { error: null };
  }
  return { error: "Provide a valid email" };
};

export const validateFullName = fullName => {
  const nameFormat = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  let error = null;
  fullName.split(" ").map(name => {
    if (!nameFormat.test(name)) {
      error = "Invalid name";
      return { error };
    }
  });
  return { error };
};
export const validateFile = file => {
  if (!file) {
    return { error: "Please select a file" };
  }
  return { error: null };
};

export const validateSubmissions = (input, value) => {
  if (input === "email") {
    return validateEmail(value).error;
  } else if (input === "fullName") {
    return validateFullName(value).error;
  } else {
    return validateFile(value).error;
  }
};

export const checkErrors = (submissionWork = {}) => {
  let result = null;
  const workKeys = Object.keys(submissionWork);
  for (let i = 0; i < workKeys.length; i++) {
    if (!submissionWork[workKeys[i]]) {
      result = `${workKeys[i]} is required`;
      return result;
    }
  }
  return result;
};

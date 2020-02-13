export const validateEmail = email => {
  const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!email) {
    return { error: "Provide an email" };
  }
  if (emailFormat.test(email)) {
    return { error: null };
  }
  return { error: "Provide a valid email" };
};

export const validateFullName = fullName => {
  const nameFormat = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  let error = null;
  if (!fullName) {
    error = "Provide a full name";
    return { error };
  }
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

export const validatePassword = password => {
  const passwordFormat = /^[a-zA-Z0-9!@#$%^&*()]{3,30}$/;
  if (passwordFormat.test(password)) {
    return { error: null };
  }
  return {
    error: "Password should have special characters,numbers, and letters"
  };
};

export const validateLogin = (email, password) => {
  const validEmail = validateEmail(email).error;
  const validPassword = validatePassword(password).error;
  if (validEmail) {
    return { email: validEmail };
  } else if (validPassword) {
    return { password: validPassword };
  }
  return null;
};

const validateTitle = title => {
  if (!title || title.length <= 14) {
    return { error: "Title should be more than 14 characters long." };
  }
  return { error: null };
};

const validateContent = content => {
  if (content.length >= 100) {
    return { error: null };
  }
  return {
    error: "Content should be more than 100 characters long"
  };
};

export const validateCreatedWork = (content, title, author) => {
  const validTitle = validateTitle(title).error;
  const validContent = validateContent(content).error;
  const validAuthor = validateFullName(author).error;
  if (validTitle) {
    return { title: validTitle };
  } else if (validContent) {
    return { content: validContent };
  } else if (validAuthor) {
    return { author: validAuthor };
  }
  return null;
};

export const validateSubmissions = (fullName, email, file) => {
  const validFile = validateFile(file).error;
  const validEmail = validateEmail(email).error;
  const validFullName = validateFullName(fullName).error;
  if (validFile) {
    return { file: validFile };
  } else if (validEmail) {
    return { email: validEmail };
  } else if (validFullName) {
    return { fullName: validFullName };
  }
  return null;
};

export const validateCreatedCollection = ({
  file,
  previewImage,
  title,
  author
}) => {
  const validTitle = validateTitle(title).error;
  const validAuthor = validateFullName(author).error;
  const validFile = validateFile(file).error;
  const validPreviewImage = validateFile(previewImage).error;
  if (validTitle) {
    return { title: validTitle };
  } else if (validAuthor) {
    return { author: validAuthor };
  } else if (validFile) {
    return { file: validFile };
  } else if (validPreviewImage) {
    return { previewImage: validPreviewImage };
  }
  return null;
};

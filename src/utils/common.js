export const isEmailFromGoogle = email => {
  email = (email || "").trim().toLowerCase();
  const email_regexp = /^[\w.+\-]+@g(oogle)?mail\.com$/; // eslint-disable-line
  return email_regexp.test(email);
};

export const isEmailFromGSuite = async email => {
  const domain = email.split("@")[1];
  let data1 = [];
  await fetch(`https://dns.google.com/resolve?name=${domain}&type=MX`)
    .then(response => response.json())
    .then(data => {
      data1 =
        (data.Answer &&
          data.Answer.filter(item =>
            item.data.toLowerCase().includes("google")
          )) ||
        [];
    });
  return data1.length > 0;
};

export const setIntoStorage = info => {
  Object.keys(info).forEach(key => {
    localStorage.setItem(key, info[key]);
  });
};

export const getFromStorage = key => {
  return localStorage.getItem(key);
};

export const removeFromStorage = key => {
  return localStorage.removeItem(key);
};

export const clearStorage = () => {
  const email = localStorage.getItem("email");
  const invite_code = getFromStorage("invite_code");
  localStorage.clear();
  localStorage.setItem("email", email);
  if (invite_code) {
    localStorage.setItem("invite_code", invite_code);
  }
};

export const getAuthToken = () => localStorage.getItem("AuthToken");

export const getFromSession = key => {
  return sessionStorage.getItem(key);
};

export const setInToSession = (key, value) => {
  sessionStorage.setItem(key, value);
};

export const clearSession = () => {
  sessionStorage.clear();
};

export const removeFromSession = key => {
  sessionStorage.removeItem(key);
};

export const timeConversion = milliseconds => {
  let day, hour, minute, seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;
  return {
    hour: day ? hour + day * 24 : hour >= 10 ? hour : `0${hour}`,
    minute: minute >= 10 ? minute : `0${minute}`,
    seconds: seconds >= 10 ? seconds : `0${seconds}`
  };
};

export const timeSince = date => {
  date = new Date(date);
  let seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + "yr";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + "month";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + "d";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + "h";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + "m";
  }
  return Math.floor(seconds) + "s";
};

export const numberWithCommas = (value, separator) => {
  const valueInString = value.toString();
  const parts = (valueInString && valueInString.split(".")) || [];
  const beforeDecimal =
    (parts &&
      parts[0] &&
      parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator || ",")) ||
    "";
  const afterDecimal = (parts && parts[1]) || "";
  if (!beforeDecimal) {
    return "";
  } else if (beforeDecimal && !afterDecimal) {
    return `${beforeDecimal}`;
  }
  return `${beforeDecimal}.${afterDecimal}`;
};

export const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const removeFromArray = (item, array) => {
  const index = array.indexOf(item);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
};

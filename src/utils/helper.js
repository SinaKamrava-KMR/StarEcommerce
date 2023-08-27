
const convertToPersianNumbers = (text) => {
  const persianNumerals = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return text.replace(/\d/g, (digit) => persianNumerals[digit]);
};

export const getEasternAriaLabel = (type, page) => {
  if (type === "page") {
    return `${convertToPersianNumbers(page.toString())}`;
  }
  return undefined;
};

export function FileToUrl(file) {
  if (typeof file !== "string") {
    let previewUrl = URL.createObjectURL(file);
    return previewUrl;
  } else {
    return `http://localhost:8000/images/products/images/${file}`;
  }
}

export async function convertImage(value) {
  if (typeof value === "string") {
    try {
      const url = `http://localhost:8000/images/products/images/${value}`;
      const response = await fetch(url);
      const blob = await response.blob();
      const file = new File([blob], "image.jpg", { type: "image/jpeg" });
      console.log(file);
      return file;
    } catch (error) {
      throw new Error("can not convert that image to file");
    }
  } else {
    return value;
  }
}

export async function handleMedias(images) {
  let isAllString = images.find((item) => typeof item !== "string")
    ? false
    : true;

  const medias = [];

  if (!isAllString) {
    for (let index = 0; index < images.length; index++) {
      const mediaFile = await convertImage(images[index]);
      medias.push(mediaFile);
    }
    return medias;
  } else {
    return undefined;
  }
}


 export function convertToPersianNumber(number) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  
  const englishDigits = number.toString().split("");
  let persianNumber = "";
  
  for (let i = 0; i < englishDigits.length; i++) {
    if (!isNaN(englishDigits[i])) {
      persianNumber += persianDigits[englishDigits[i]];
    } else {
      persianNumber += englishDigits[i];
    }
  }
  
  return persianNumber;
}
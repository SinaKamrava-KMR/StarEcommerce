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

  let counter = 0;
  for (let i = englishDigits.length - 1; i >= 0; i--) {
    if (!isNaN(englishDigits[i])) {
      persianNumber = persianDigits[englishDigits[i]] + persianNumber;
      counter++;
    } else {
      persianNumber = englishDigits[i] + persianNumber;
    }

    if (counter === 3 && i > 0) {
      persianNumber = "," + persianNumber;
      counter = 0;
    }
  }

  return persianNumber;
}

export function convertToP(number) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  const englishDigits = number.toString().split("");
  let persianNumber = "";

  for (let i = englishDigits.length - 1; i >= 0; i--) {
    if (!isNaN(englishDigits[i])) {
      persianNumber = persianDigits[englishDigits[i]] + persianNumber;
      
    } else {
      persianNumber = englishDigits[i] + persianNumber;
    }

  }

  return persianNumber;
}

export const mergeCategoriesAndSunCategories = (categories, subCategories) => {
  return categories.map((category) => {
    const relatedSubcategories = subCategories.filter(
      (sub) => sub.category === category._id
    );

    return { ...category, subcategories: [...relatedSubcategories] };
  });
};

export function convertToEnglishNumber(number) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  let englishNumber = "";

  for (let i = 0; i < number.length; i++) {
    const digit = persianDigits.indexOf(number[i]);
    if (digit !== -1) {
      englishNumber += digit;
    } else {
      englishNumber += number[i];
    }
  }

  return englishNumber;
}

export function getThreeDayies() {
  let dates = [];

  for (let index = 0; index < 6; index++) {
    const today = new Date();
    today.setDate(today.getDate() + index);
    const formattedDate = today.toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    dates.push(formattedDate.split("/"));
  }

  dates = dates.map((day) => {
    return {
      year: convertToEnglishNumber(day[0]),
      month: convertToEnglishNumber(day[1]),
      day: convertToEnglishNumber(day[2]),
    };
  });

  return dates;
}

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

// TODO: write your code here
export default function isNumber(item) {
  try {
    if (parseFloat(item).toString() === item) {
      return Number(item);
    }
    throw new Error("error");
  } catch (e) {
    return e.message;
  }
}
export async function getData() {
  try {
    const response = await fetch("./data/data.json");

    if (!response.ok) {
      throw new Error(`Http error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Ошибка загрузки данных:", error);
    return [];
  }
}

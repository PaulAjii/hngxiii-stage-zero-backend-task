export interface CatFact {
  fact: string;
}

const url = "https://catfact.ninja/fact";
const TIMEOUT_DURATION_MS = 5000;

export const fetchCatFact = async (): Promise<CatFact> => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_DURATION_MS);

  try {
    const response = await fetch(url, { signal: controller.signal });

    if (!response.ok) {
      throw new Error(
        `HTTP error: Status: ${response.status}, Text: ${response.statusText}`
      );
    }

    const data = await response.json();

    return data?.fact;
  } catch (error: any) {
    if (error.name === "AbortError") {
      throw new Error("Request timeout");
    }

    throw new Error(`Request failed: ${error.message}`);
  } finally {
    clearTimeout(timeout);
  }
};

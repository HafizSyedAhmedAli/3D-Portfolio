function getSimilarityScore(str1, str2) {
  // Normalize: remove punctuation, lowercase, split into word arrays
  const clean1 = str1
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/);
  const clean2 = str2
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/);

  const set1 = new Set(clean1);
  const set2 = new Set(clean2);

  // Find the intersection (words appearing in both)
  const intersection = [...set1].filter((word) => set2.has(word)).length;

  // Find the total unique vocabulary pool across both pages
  const union = new Set([...clean1, ...clean2]).size; // <--- FIXED THIS TO .size

  const similarity = (intersection / union) * 100;

  return {
    similarityScore: `${similarity.toFixed(1)}%`,
    differenceScore: `${(100 - similarity).toFixed(1)}%`,
  };
}

const page1 = ``;
const page2 = ``;

console.log(getSimilarityScore(page1, page2));

// create a function that re-arranges the projects order in the projectsMedia array

export default function projectsMediaReArranger(projectsMedia) {
  const importanceKeys = new Set(projectsMedia.map((project) => project.importance));
  const importanceKeysArray = Array.from(importanceKeys);

  const projectsGroupedByImportance = importanceKeysArray.map((importance) =>
    projectsMedia.filter((project) => project.importance === importance)
  );

  // order the array by importance
  projectsGroupedByImportance.sort((a, b) =>b[0].importance - a[0].importance);

  console.log(projectsGroupedByImportance);

  const shuffledProjectsGroupedByImportance = projectsGroupedByImportance.map((group) =>
    shuffleArrayOrder(group)
  );

  const toReturn = shuffledProjectsGroupedByImportance.flat();
  return toReturn  
};

function shuffleArrayOrder(array) {
  return array.sort(() => Math.random() - 0.5);
}

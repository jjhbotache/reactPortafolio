// create a function that re-arranges the projects order in the projectsMedia array

export default function projectsMediaReArranger(projectsMedia) {
  const importanceKeys = new Set(projectsMedia.map((project) => project.importance));
  const importanceKeysArray = Array.from(importanceKeys);

  const projectsGroupedByImportance = importanceKeysArray.map((importance) =>
    projectsMedia.filter((project) => project.importance === importance)
  );

  const shuffledProjectsGroupedByImportance = projectsGroupedByImportance.map((group) =>
    shuffleArrayOrder(group)
  );

  const toReturn = shuffledProjectsGroupedByImportance.flat();
  console.log(toReturn);
  return toReturn  
};

function shuffleArrayOrder(array) {
  return array.sort(() => Math.random() - 0.5);
}

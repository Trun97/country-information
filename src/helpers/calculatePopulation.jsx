
function calculatePopulation(population) {
    const populationSize = population/1000000;
    return Math.round(populationSize);
}

export default calculatePopulation;
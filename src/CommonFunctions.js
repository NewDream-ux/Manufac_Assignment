const calculateMean = (data, measureTittle) => {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        total += measureTittle == "Flavanoids" ? data[i].Flavanoids : data[i].gamma;
    }
    return total / data.length;
}

export const calculateMedian = (data, measureTittle) => {
    const { length } = data;
    const collectData = [];
    for (let a = 0; a < length; a++) {
        collectData.push(measureTittle == "Flavanoids" ? data[a].Flavanoids : data[a].gamma)
    }
    collectData.sort((a, b) => a - b);
    if (length % 2 == 0) {
        return (collectData[length / 2 - 1] + collectData[length / 2]) / 2;
    }
    return collectData[(length - 1) / 2]
}

export const calculateMode = (data, measureTittle) => {
    const { length } = data;
    const mode = {};
    let max = 0, count = 0;

    for (let i = 0; i < length; i++) {
        const item = measureTittle == "Flavanoids" ? data[i].Flavanoids : data[i].gamma;

        if (mode[item]) {
            mode[item]++;
        } else {
            mode[item] = 1;
        }

        if (count < mode[item]) {
            max = item;
            count = mode[item];
        }
    }
    return max;
}

export const uniqueClassList = (wineData) => {
    const unique = [...new Set(wineData.map((item) => item.Alcohol))];
    return unique
}

export const findSpecificClassList = (wineData, data) => {
    const specificClassList = wineData.filter((item) => item.Alcohol == data);
    return specificClassList
}

export const CalculatedMean = (classList, wineData, measureTittle) => {
    const collectMeanList = [];
    for (let a = 0; a < classList.length; a++) {
        const classData = findSpecificClassList(wineData, classList[a]);
        const calculatedMean = calculateMean(classData, measureTittle);
        const threeDecimalValue = calculatedMean.toFixed(3);
        collectMeanList.push(threeDecimalValue);
    }
    return collectMeanList
}

export const CalculatedMedian = (classList, wineData, measureTittle) => {
    const collectMedianList = [];
    for (let a = 0; a < classList.length; a++) {
        const classData = findSpecificClassList(wineData, classList[a]);
        const calculatedMedian = calculateMedian(classData, measureTittle);
        const threeDecimalValue = calculatedMedian.toFixed(3);
        collectMedianList.push(threeDecimalValue);
    }
    return collectMedianList
}

export const calculatedModeList = (classList, wineData, measureTittle) => {
    const collectModeList = [];
    for (let a = 0; a < classList.length; a++) {
        const classData = findSpecificClassList(wineData, classList[a]);
        const calculatedMedian = calculateMode(classData, measureTittle);
        const threeDecimalValue = calculatedMedian.toFixed(3);
        collectModeList.push(threeDecimalValue);
    }
    return collectModeList
}

export const addGammaProperty = (data) => {
    const { length } = data;
    for (let a = 0; a < length; a++) {
        data[a].gamma = Number(((data[a].Ash * data[a].Hue) / data[a].Magnesium).toFixed(2));
    }
    return data
}
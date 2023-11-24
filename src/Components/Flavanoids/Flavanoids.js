import React, { useEffect } from "react";
import "./Flavanoids.css";
import Table from "../Table/Table";
import wineData from "../../Wine-Data.json";
import { uniqueClassList, CalculatedMean, CalculatedMedian, calculatedModeList } from "../../CommonFunctions";
import { constValue } from "../../AppConfig";

const Flavanoids = () => {
    const { flavanoideTittle } = constValue;
    const classList = uniqueClassList(wineData);
    const collectMeanList = CalculatedMean(classList, wineData, flavanoideTittle);
    const collectMedianList = CalculatedMedian(classList, wineData, flavanoideTittle);
    const collectModeList = calculatedModeList(classList, wineData, flavanoideTittle);

    return (
        <>
            <Table measureTittle={flavanoideTittle} classList={classList} collectMeanList={collectMeanList} collectMedianList={collectMedianList} collectModeList={collectModeList} />
        </>
    )
}

export default Flavanoids;
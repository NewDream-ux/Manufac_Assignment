import React from "react";
import Table from "../Table/Table";
import { constValue } from "../../AppConfig";
import { uniqueClassList, addGammaProperty, CalculatedMean, CalculatedMedian, calculatedModeList } from "../../CommonFunctions";
import wineData from "../../Wine-Data.json";

const Gamma = () => {
  const { gammaTittle } = constValue;
  const addedGammaList = addGammaProperty(wineData);
  const classList = uniqueClassList(addedGammaList);
  const collectMeanList = CalculatedMean(classList, addedGammaList, gammaTittle);
  const collectMedianList = CalculatedMedian(classList, addedGammaList, gammaTittle);
  const collectModeList = calculatedModeList(classList, addedGammaList, gammaTittle);

  return (
    <>
      <Table measureTittle={gammaTittle} classList={classList} collectMeanList={collectMeanList} collectMedianList={collectMedianList} collectModeList={collectModeList} />
    </>
  )
}

export default Gamma;
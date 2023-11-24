import React from "react";
import './Table.css';

const Table = (props) => {
    const { classList, collectMeanList, collectMedianList, collectModeList, measureTittle } = props;
    return (
        <>
            <div className="tableFixHead">
                <table>
                    <tbody>
                        <tr>
                            <th>Measure</th>
                            {classList && classList.map((item) => {
                                return (
                                    <td>Class {item}</td>
                                )
                            })}
                        </tr>
                        <tr>
                            <th>{measureTittle && measureTittle} Mean</th>
                            {collectMeanList && collectMeanList.map((item) => {
                                return (
                                    <td>{item}</td>
                                )
                            })}
                        </tr>
                        <tr>
                            <th>{measureTittle && measureTittle} Median</th>
                            {collectMedianList && collectMedianList.map((item) => {
                                return (
                                    <td>{item}</td>
                                )
                            })}
                        </tr>
                        <tr>
                            <th>{measureTittle && measureTittle} Mode</th>
                            {collectModeList && collectModeList.map((item) => {
                                return (
                                    <td>{item}</td>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;
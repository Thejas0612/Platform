import React from "react";
import {LabelText, TileOrThumbnail} from "@emerson/dynamic-ui-public";
export default function MeasurementType() {
    const menuData = [
        {
            alertObj: {
                alertMsg: 'Please select valid value',
                alertTitle: '',
                customErrorClass: '',
                primaryClass: '',
                severity: 'success',
                showIcon: false,
                timeout: 100000
            },
            clickHandle: () => {},
            description: 'RouteFlow Measurement is the process of measuring fluid in your plant or industry. You can measure flow through a variety of different devices such as Coriolis, differential pressure, vortex, magnetic, ultrasonic, turbine and positive displacement meters.',
            id: 1,
            imgUrl: 'https://emerson-cdn.azurewebsites.net/7bd555544cf68071bafa.png',
            showAlert: false,
            title: 'Flow'
        },
        {
            alertObj: {
                alertMsg: 'Please select valid value',
                alertTitle: '',
                customErrorClass: '',
                primaryClass: '',
                severity: 'success',
                showIcon: false,
                timeout: 100000
            },
            clickHandle: function noRefCheck() {},
            description: 'Our density measurement devices offer reliable performance for applications such as concentration, API, Brix, and more.',
            id: 2,
            imgUrl: 'https://emerson-cdn.azurewebsites.net/940becae8b116d587fbd.png',
            showAlert: false,
            title: 'Density'
        },
        {
            alertObj: {
                alertMsg: 'Please select valid value',
                alertTitle: '',
                customErrorClass: '',
                primaryClass: '',
                severity: 'success',
                showIcon: false,
                timeout: 100000
            },
            clickHandle: () => {},
            description: 'Our inline viscosity meter offers accurate, repeatable measurement in industries such as refining, chemical, life sciences, and more.',
            id: 2,
            imgUrl: 'https://emerson-cdn.azurewebsites.net/940becae8b116d587fbd.png',
            showAlert: false,
            title: 'Viscosity'
        }
    ];
    return (
        <div>
            <LabelText
                label="label text"
                labelClass="ddl-from-custom-label"
                text="Measurement Type"
                textClass="ddl-typography--h4"
            />
            <TileOrThumbnail
                data={menuData}
                defaultDirection="tile"
                defaultIds={[]}
                description="here is a toggle button"
                onChange={function noRefCheck() {}}
            />
        </div>
    )
}

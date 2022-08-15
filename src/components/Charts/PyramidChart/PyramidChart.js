import React from 'react'
import { PyramidData } from '../../../data/dummy';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts';


const PyramidChart = () => {
    return (
        <AccumulationChartComponent
            id="pyramid-chart"
            legendSettings={{ background: 'white' }}
            tooltip={{ enable: true }}
        >
            <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]} />
            <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective
                    name="Food"
                    dataSource={PyramidData}
                    xName="x"
                    yName="y"
                    type="Pyramid"
                    width="45%"
                    height="80%"
                    neckWidth="15%"
                    gapRatio={0.03}
                    explode
                    emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
                    dataLabel={{
                        visible: true,
                        position: 'Inside',
                        name: 'text',
                    }}
                />
            </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
    )
}

export default PyramidChart
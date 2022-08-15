import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, SplineAreaSeries, Legend } from '@syncfusion/ej2-react-charts';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../../data/dummy';


const AreaChart = () => {
  return (
    <ChartComponent
    id="line-chart"
    height="420px"
    width='100%'
    primaryXAxis={areaPrimaryXAxis}
    primaryYAxis={areaPrimaryYAxis}
    chartArea={{ border: { width: 0 } }}
    tooltip={{ enable: true }}
    legendSettings={{ background: 'white' }}
 
  >
    <Inject services={[SplineAreaSeries, DateTime, Legend]} />
    <SeriesCollectionDirective>
      {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
    </SeriesCollectionDirective>
  </ChartComponent>
  )
}

export default AreaChart
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Chart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    d3.select(svgRef.current).selectAll('*').remove();

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 685 - margin.left - margin.right;
    const height = 185 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(data.map((d, i) => i))
      .range([0, width])
      .padding(0.1);

    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).tickFormat((i) => i + 1));

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data) * 1.1])
      .range([height, 0]);

    svg.append('g').call(d3.axisLeft(y));

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => x(i))
      .attr('y', (d) => Math.min(y(d), height - 30))
      .attr('width', x.bandwidth() - 15)
      .attr('height', (d) => Math.max(height - y(d), 30))
      .attr('rx', 13)
      .attr('ry', 13)
      .style('fill', 'rgba(113, 146, 252, 0.7)');
  }, [data]);

  return (
    <div style={{ position: 'relative', top: '-25px' }} ref={svgRef}></div>
  );
};

export default Chart;

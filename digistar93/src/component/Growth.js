import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as IndonesiaSVG } from '../assets/Indonesia.svg';
import '../App.css';

const Growth = ({ id }) => {
  const [hoveredProvince, setHoveredProvince] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [provinceData, setProvinceData] = useState(null);
  const [totalStats, setTotalStats] = useState({
    totalTruckers: 0,
    totalFleet: 0,
    totalOutlets: 0,
    totalDistributors: 0,
  });
  const contentRef = useRef(null);

  // Function to fetch province data
  const fetchProvinceData = async (provinceName) => {
    try {
      const response = await fetch(`/api/provinces/${provinceName}`);
      const text = await response.text();
      const contentType = response.headers.get('Content-Type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Response is not JSON');
      }
      const data = JSON.parse(text);
      setProvinceData(data);
    } catch (error) {
      console.error('Error fetching province data:', error);
    }
  };

  // Fetch total stats for trucker, fleet, outlet, distributor
  const fetchTotalStats = async () => {
    try {
      const response = await fetch('/api/total-stats');
      const data = await response.json();
      setTotalStats(data); // Adjust this to match the structure of your response
    } catch (error) {
      console.error('Error fetching total stats:', error);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contentRef.current.classList.add('visible');
        }
      },
      { threshold: 0.3 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    fetchTotalStats(); // Fetch total stats on component mount
  }, []);

  const handleMouseEnter = (event) => {
    const target = event.target;
    if (target.tagName === 'path') {
      const provinceName = target.getAttribute('title');
      if (provinceName) {
        fetchProvinceData(provinceName);
        document.querySelectorAll('path').forEach((path) => {
          if (path !== target) {
            path.style.fill = '#F6CDC6';
          }
        });
        target.style.fill = '#FF8648';
        setHoveredProvince(provinceName);
        setTooltipPosition({ x: event.clientX, y: event.clientY });
      }
    }
  };

  const handleMouseLeave = (event) => {
    const target = event.target;
    if (target.tagName === 'path') {
      target.style.fill = '#F6CDC6';
      setHoveredProvince(null);
    }
  };

  const handleMouseMove = (event) => {
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <section id={id} className="section-container" ref={contentRef}>
      <h2>Tumbuh Bersama LOGEE</h2>
      <p>
        Bergabung dengan LOGEE dan manfaatkan layanan serta kolaborasi bisnis yang dapat disesuaikan untuk memaksimalkan keuntungan Anda.
      </p>
      <div style={{ position: 'relative' }}>
        <svg
          className="leaflet-zoom-animated"
          width="100%"
          height="100%"
          viewBox="-200 0 1200 350"
          style={{ transform: 'none' }}
          onMouseMove={handleMouseMove}
        >
          <g>
            <IndonesiaSVG
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              style={{ fill: '#F6CDC6', stroke: '#FFFFFF' }}
            />
          </g>
        </svg>

        {/* Card for province information */}
        {hoveredProvince && (
          <div
            className="card-map"
            style={{
              position: 'absolute',
              left: tooltipPosition.x + 10,
              top: tooltipPosition.y + 10,
              backgroundColor: 'white',
              color: 'black',
              padding: '15px',
              borderRadius: '5px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
              zIndex: 1000,
            }}
          >
            <div><strong>Province:</strong> {hoveredProvince}</div>
            <div><strong>Truckers:</strong> {provinceData?.trucker ?? 'N/A'}</div>
            <div><strong>Fleet:</strong> {provinceData?.fleet ?? 'N/A'}</div>
            <div><strong>Outlets:</strong> {provinceData?.outlet ?? 'N/A'}</div>
            <div><strong>Distributors:</strong> {provinceData?.distributor ?? 'N/A'}</div>
          </div>
        )}
      </div>

      {/* Display total stats */}
      <div className="stats-container">
        <div className="stat-card">
          <h3>{totalStats.totalTruckers}</h3>
          <p>Trucker</p>
        </div>
        <div className="stat-card">
          <h3>{totalStats.totalFleet}</h3>
          <p>Fleet</p>
        </div>
        <div className="stat-card">
          <h3>{totalStats.totalOutlets}</h3>
          <p>Outlet</p>
        </div>
        <div className="stat-card">
          <h3>{totalStats.totalDistributors}</h3>
          <p>Distributor</p>
        </div>
      </div>
    </section>
  );
};

export default Growth;

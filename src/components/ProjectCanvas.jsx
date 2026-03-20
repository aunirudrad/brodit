import React, { useState } from 'react';


const layout = [
  { id: "slot_1", col: "1 / 3", row: "1 / 3" }, // big
  { id: "slot_2", col: "3 / 5", row: "1 / 4" }, // wide
  { id: "slot_3", col: "5 / 7", row: "1 / 3" }, // wide
  { id: "slot_4", col: "1 / 3", row: "3 / 5" }, // vertical
  { id: "slot_5", col: "3 / 5", row: "4 / 5" }, // small
  { id: "slot_6", col: "5 / 7", row: "3 / 5" }  // small
];

const ProjectCanvas = ({ project }) => {
    const [hoveredId, setHoveredId] = useState(null);

    const firstSix = project.slice(0, 6);
    return (
        <div className="canvas">
            {layout.map((slot, index) => {
                const proj = firstSix[index];

                if (!proj) return null;

                return (
                    <div
                        key={slot.id}
                        className="item"
                        style={{
                            gridColumn: slot.col,
                            gridRow: slot.row,
                            position: 'relative',
                            overflow: 'hidden',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={() => setHoveredId(slot.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        {hoveredId === slot.id && (
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '1.25rem',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                padding: '1rem'
                            }}>
                                {proj.title}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectCanvas;
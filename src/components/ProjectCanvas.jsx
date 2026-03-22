import React, { useState } from 'react';


const layout = [
    { id: "slot_1", col: "1 / 3", row: "1 / 3" }, // big
    { id: "slot_2", col: "3 / 5", row: "1 / 4" }, // wide
    { id: "slot_3", col: "5 / 7", row: "1 / 3" }, // wide
    { id: "slot_4", col: "1 / 3", row: "3 / 6" }, // vertical
    { id: "slot_5", col: "3 / 5", row: "4 / 6" }, // small
    { id: "slot_6", col: "5 / 7", row: "3 / 6" }  // small
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
                        className="relative overflow-hidden cursor-pointer"
                        style={{
                            gridColumn: slot.col,
                            gridRow: slot.row
                        }}
                        onMouseEnter={() => setHoveredId(slot.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0  hover:opacity-20"></div>
                        {hoveredId === slot.id && (
                            <div className="absolute inset-0 bg-blue-500 opacity-60 flex flex-col items-center justify-center text-white text-xl font-bold text-center p-4">
                                {proj.title}
                                <br />
                                <div className="absolute bottom-8 flex gap-4 justify-center items-center flex-wrap max-w-[90%]">
                                    {typeof proj.technologies === 'object' && proj.technologies !== null ? (
                                        Object.entries(proj.technologies).map(([techName, iconPath], idx) => (
                                            <div key={idx} title={techName} className="flex items-center justify-center">
                                                <img
                                                    src={iconPath}
                                                    alt={techName}
                                                    className="w-8 h-8 object-contain invert"
                                                />
                                            </div>
                                        ))
                                    ) : Array.isArray(proj.technologies) ? (
                                        proj.technologies.map((technology, idx) => (
                                            <div key={idx} className="flex items-center justify-center text-white text-sm">
                                                {technology}
                                            </div>
                                        ))
                                    ) : null}
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectCanvas;
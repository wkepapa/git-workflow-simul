import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Branch from './Branch';
import Merge from './Merge';
import ConflictResolution from './ConflictResolution';

const WorkflowVisualizer = ({ workflow }) => {
    const [conflict, setConflict] = useState(false);

    const handleMerge = () => {
        const hasConflict = Math.random() > 0.5; 
        setConflict(hasConflict);
    };

    return (
        <div className="workflow-container">
            <h2>{workflow} Visualization</h2>
            <motion.div layout className="branches">
                <Branch name="main" />
                <Branch name="feature-1" />
                <Branch name="feature-2" />
                <motion.button onClick={handleMerge} className="merge-button">
                    Merge Branches
                </motion.button>
                {conflict ? (
                    <ConflictResolution onResolve={() => setConflict(false)} />
                ) : (
                    <Merge />
                )}
            </motion.div>
        </div>
    );
};

export default WorkflowVisualizer;

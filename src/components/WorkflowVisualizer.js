import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Branch from './Branch';
import Merge from './Merge';
import ConflictResolution from './ConflictResolution';

const WorkflowVisualizer = ({ workflow }) => {
    const [branches, setBranches] = useState(['main']);
    const [newBranchName, setNewBranchName] = useState('');
    const [conflict, setConflict] = useState(false);
    const [mergeMessage, setMergeMessage] = useState('');
    const [branchesToMerge, setBranchesToMerge] = useState([]);

    const handleAddBranch = () => {
        if (newBranchName && !branches.includes(newBranchName)) {
            setBranches([...branches, newBranchName]);
            setNewBranchName('');
        }
    };

    const handleSelectBranch = (branch) => {
        if (branch === 'main') return; // Prevent selecting main branch
        if (branchesToMerge.includes(branch)) {
            setBranchesToMerge(branchesToMerge.filter(b => b !== branch));
        } else {
            setBranchesToMerge([...branchesToMerge, branch]);
        }
    };

    const handleMerge = () => {
        // Check if any branches are selected for merging
        if (branchesToMerge.length === 0) {
            setMergeMessage('No branches selected for merging.');
            return;
        }

        // Randomly determine if there's a conflict
        const hasConflict = Math.random() > 0.5;

        if (hasConflict) {
            setConflict(true);
            setMergeMessage('Conflict Detected!');
        } else {
            setMergeMessage('Merging Branches into main... Success!');
            // Remove merged branches from the list
            setBranches(branches.filter(branch => !branchesToMerge.includes(branch)));
            // Clear the selection after a successful merge
            setBranchesToMerge([]);
        }
    };

    return (
        <div className="workflow-container">
            <h2>{workflow} Visualization</h2>
            <input 
                type="text" 
                placeholder="New Branch Name" 
                value={newBranchName} 
                onChange={(e) => setNewBranchName(e.target.value)} 
            />
            <button onClick={handleAddBranch} className="merge-button">Add Branch</button>
            <motion.div layout className="branches">
                {branches.map((branch, index) => (
                    <div key={index} onClick={() => handleSelectBranch(branch)}>
                        <Branch name={branch} selected={branchesToMerge.includes(branch)} />
                    </div>
                ))}
                <motion.button onClick={handleMerge} className="merge-button">
                    Merge Selected Branches into main
                </motion.button>
                {mergeMessage && (
                    <motion.div className="merge-message">
                        <h3>{mergeMessage}</h3>
                    </motion.div>
                )}
                {conflict ? (
                    <ConflictResolution onResolve={() => setConflict(false)} />
                ) : (
                    !conflict && <Merge />
                )}
            </motion.div>
        </div>
    );
};

export default WorkflowVisualizer;

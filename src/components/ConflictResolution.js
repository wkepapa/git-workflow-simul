import React from 'react';
import { motion } from 'framer-motion';

const ConflictResolution = ({ onResolve }) => {
    return (
        <motion.div className="conflict-resolution" layout>
            <h3>Conflict Detected!</h3>
            <button onClick={onResolve}>Resolve Conflict</button>
        </motion.div>
    );
};

export default ConflictResolution;

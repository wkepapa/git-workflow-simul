import React from 'react';
import { motion } from 'framer-motion';

const Branch = ({ name, selected }) => {
    return (
        <motion.div className={`branch ${selected ? 'selected' : ''}`} layout>
            <h3>{name}</h3>
        </motion.div>
    );
};

export default Branch;

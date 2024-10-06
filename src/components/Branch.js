import React from 'react';
import { motion } from 'framer-motion';

const Branch = ({ name }) => {
    return (
        <motion.div className="branch" layout>
            <h3>{name}</h3>
        </motion.div>
    );
};

export default Branch;

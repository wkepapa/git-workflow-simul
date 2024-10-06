import React, { useState } from 'react';
import WorkflowVisualizer from './components/WorkflowVisualizer';

const App = () => {
    const [workflow, setWorkflow] = useState('Git Flow');

    return (
        <div className="app">
            <h1>Git Workflow Simulator</h1>
            <label>
                Select Workflow:
                <select onChange={(e) => setWorkflow(e.target.value)}>
                    <option value="Git Flow">Git Flow</option>
                    <option value="GitHub Flow">GitHub Flow</option>
                </select>
            </label>
            <WorkflowVisualizer workflow={workflow} />
        </div>
    );
};

export default App;

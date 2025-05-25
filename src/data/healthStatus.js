// src/data/healthStatus.js

export const anatomyIndicators = [
  {
    id: 1,
    label: 'Healthy Heart',
    status: 'Healthy',
    color: 'green',
    position: { top: '25%', left: '48%' },
  },
  {
    id: 2,
    label: 'Lungs',
    status: 'Needs Attention',
    color: 'red',
    position: { top: '35%', left: '46%' },
  },
  {
    id: 3,
    label: 'Teeth',
    status: 'Healthy',
    color: 'green',
    position: { top: '13%', left: '50%' },
  },
  {
    id: 4,
    label: 'Bone',
    status: 'Healthy',
    color: 'green',
    position: { top: '60%', left: '47%' },
  },
];

export const healthIndicators = [
  {
    id: 1,
    name: 'Healthy Heart',
    status: 'Healthy',
    color: 'green',
    lastCheck: '2025-05-21',
    position: { top: '25%', left: '48%' },
  },
  {
    id: 2,
    name: 'Lungs',
    status: 'Needs Attention',
    color: 'red',
    lastCheck: '2025-05-20',
    position: { top: '35%', left: '46%' },
  },
  {
    id: 3,
    name: 'Teeth',
    status: 'Healthy',
    color: 'green',
    lastCheck: '2025-05-18',
    position: { top: '13%', left: '50%' },
  },
  {
    id: 4,
    name: 'Bone',
    status: 'Healthy',
    color: 'green',
    lastCheck: '2025-05-15',
    position: { top: '60%', left: '47%' },
  },
];

// Export healthStatusCards as an alias for healthIndicators to match your component import
export const healthStatusCards = healthIndicators;

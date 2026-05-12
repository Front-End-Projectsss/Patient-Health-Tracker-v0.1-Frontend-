//sample database array
export const patientColumns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "age", label: "Age" },
  { key: "gender", label: "Gender" },
  { key: "condition", label: "Condition" },
  { key: "admitted", label: "Admitted" },
];
{/*Key--- matches patient object property .. like patient.name
   label --- what user sees in the table header */}

export const patients = [
  {
    id: "PAT-001",
    name: "John Smith",
    age: 65,
    gender: "Male",
    condition: "Cardiac Arrhythmia",
    admitted: "2024-01-15",
  },
  {
    id: "PAT-002",
    name: "Mary Johnson",
    age: 45,
    gender: "Female",
    condition: "Post-Surgery Recovery",
    admitted: "2024-01-18",
  },
  {
    id: "PAT-003",
    name: "Robert Brown",
    age: 72,
    gender: "Male",
    condition: "Respiratory Distress",
    admitted: "2024-01-20",
  },
  {
    id: "PAT-004",
    name: "Emily Davis",
    age: 38,
    gender: "Female",
    condition: "Observation",
    admitted: "2024-01-21",
  },
  {
    id: "PAT-005",
    name: "Michael Wilson",
    age: 55,
    gender: "Male",
    condition: "Hypertension",
    admitted: "2024-01-22",
  },
  {
    id: "PAT-006",
    name: "Sarah Martinez",
    age: 60,
    gender: "Female",
    condition: "Diabetes Management",
    admitted: "2024-01-22",
  },
];

export const getStatus = (latestVitals, thresholds) => {
    if (!latestVitals) return "No Data";

    const hasCritical = Object.keys(latestVitals).some((vital) => {
        if (!thresholds[vital]) return false;
        const value = latestVitals[vital];
        const min = thresholds[vital].min;
        const max = thresholds[vital].max;

        if (value == null) return false;
        return (value < min * 0.8 || value > max * 1.2) //way outside normal range
    });

    const hasWarning = Object.keys(latestVitals).some(vital => {
        if (!thresholds[vital]) return false;

        const value = latestVitals[vital];
        const min = thresholds[vital].min;
        const max = thresholds[vital].max;

        if (value == null) return false;
        return (value < min || value > max)   //slightly outside the normal range
    })

    //FINAL DECISION LOGIC 
    if (hasCritical) return "Critical";
    if (hasWarning) return "Warning";
    return "Stable";
}

export const getStatusStyles = (status) => {
            const statusStyles = {
            "Critical": "border border-red-200 bg-red-100 text-red-800 px-3 py-1 rounded-full font-semibold",
            "Warning": "border border-yellow-200 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold",
            "Stable": "border border-green-200 bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold",
            "No Data": "border border-gray-200 bg-gray-100 text-gray-800 px-3 py-1 rounded-full font-semibold"
    
            };
            return statusStyles[status] || statusStyles["No Data"]
        }

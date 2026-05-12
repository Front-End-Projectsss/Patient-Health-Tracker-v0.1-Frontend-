import SettingsIndividualpage from "./SettingsIndividualpage"

export default function SettingsTab () {
    return (
        <div className="flex flex-row">
            <SettingsIndividualpage to="/" name="Profile"/>
            <SettingsIndividualpage to="/system" name="System"/>
            <SettingsIndividualpage to="/notifications" name="Notifications" />
            <SettingsIndividualpage to="/thresholds" name="Thresholds" />
        </div>
    )
}
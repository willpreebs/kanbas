function StatusInfo() {

    const buttonTitles = ["Import Existing Content", "Import from Commons", "Choose Home Page", "View Course Stream", "New Announcement"];

    return (
        <div>
            {buttonTitles.map((title, index) => (
                <button className="btn btn-secondary">{title}</button>
            ))}
        </div>
    )

} export default StatusInfo;
import "./SectionTitle.css";

function SectionTitle({ label, title }) {
  return (
    <div className="section-title">
      <div className="section-label">
        <span></span>
        <p>{label}</p>
      </div>

      <h2>{title}</h2>
    </div>
  );
}

export default SectionTitle;

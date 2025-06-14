import type React from "react"

interface CategoryButtonProps {
  label: string
  active?: boolean
  onClick: () => void
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ label, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-sm rounded-pill me-2 ${active ? "btn-dark" : "btn-light"}`}
      style={{
        whiteSpace: "nowrap",
        padding: "6px 12px",
        fontSize: "14px",
        fontWeight: active ? "500" : "400",
        backgroundColor: active ? "#0f0f0f" : "#f2f2f2",
        color: active ? "#fff" : "#0f0f0f",
        border: "none",
        transition: "background-color 0.2s, color 0.2s",
      }}
    >
      {label}
    </button>
  )
}

export default CategoryButton


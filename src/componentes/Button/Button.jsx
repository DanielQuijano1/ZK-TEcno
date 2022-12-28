import "./Button.css"

function Button({text,href}) {

  return (
    <a href={href}>
      <button className="styleButton">
        {text}
      </button>
    </a>
  )
}

export default Button;
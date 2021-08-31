const checks = [
  "Fazer compras",
  "Renovar CNH",
  "Pagar contas",
  "Estudar React",
  "Fazer Minilab",
];

function ToDoList(){
    return (
      <ul className = "list">
          {checks.map((checks) => {
          return <li className = "list-group-item">
            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
              {checks}
          </li>;
          })}
      </ul>
    )
}

export default ToDoList
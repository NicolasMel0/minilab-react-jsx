const tasks = [
    'Fazer compras',
    'Renovar CNH',
    'Pagar contas',
    'Estudar React',
    'Fazer Minilab',
];

function List() {
    return (
        <ul class="list-group">
            {tasks.map(tarefas => {
                return (
                    <li>
                        <li class="list-group-item">
                            <input
                                class="form-check-input me-1"
                                type="checkbox"
                                value=""
                                aria-label="..."
                            />
                            {tarefas}
                        </li>
                    </li>
                );
            })}
        </ul>
    );
}

export default List;

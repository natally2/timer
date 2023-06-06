import { HistoryContainer, HistoryList } from "./styles";

export function History() {
    return (
        <HistoryContainer>
            <h1>My history</h1>
            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Duration</th>
                            <th>Beginning</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>My first task</td>
                            <td>20 minutes</td>
                            <td>2 months ago</td>
                            <td>Done</td>
                        </tr>
                        <tr>
                            <td>My first task</td>
                            <td>20 minutes</td>
                            <td>2 months ago</td>
                            <td>Done</td>
                        </tr>
                        <tr>
                            <td>My first task</td>
                            <td>20 minutes</td>
                            <td>2 months ago</td>
                            <td>Done</td>
                        </tr>
                        <tr>
                            <td>My first task</td>
                            <td>20 minutes</td>
                            <td>2 months ago</td>
                            <td>Done</td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    );
}
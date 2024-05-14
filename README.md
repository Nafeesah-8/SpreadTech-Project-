<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>To-Do List App</h1>
    <input type="text" id="task-input" placeholder="Enter a task">
    <button id="add-task-btn">Add Task</button>
    <table id="task-table">
        <thead>
            <tr>
                <th>Task Description</th>
                <th>Due Date</th>
                <th>Done</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody id="task-list">
            <tr>
                <td>Finish project</td>
                <td>2024-05-20</td>
                <td><input type="checkbox"></td>
                <td><button class="delete-btn">Delete</button></td>
            </tr>
            <tr>
                <td>Meet with other team</td>
                <td>2024-05-18</td>
                <td><input type="checkbox"></td>
                <td><button class="delete-btn">Delete</button></td>
            </tr>
            <tr>
                <td>Session with my Supervisor</td>
                <td>2024-05-19</td>
                <td><input type="checkbox"></td>
                <td><button class="delete-btn">Delete</button></td>
            </tr>
            <tr>
                <td>Write project's report</td>
                <td>2024-05-22</td>
                <td><input type="checkbox"></td>
                <td><button class="delete-btn">Delete</button></td>
            </tr>
            <tr>
                <td>Call client</td>
                <td>2024-05-21</td>
                <td><input type="checkbox"></td>
                <td><button class="delete-btn">Delete</button></td>
            </tr>
        </tbody>
    </table>

    <script src="script.js"></script>
</body>
</html>


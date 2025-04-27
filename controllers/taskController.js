import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Create Task
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await prisma.task.create({
      data: {
        title,
        description: description || null,
        userId: req.user.id,
      },
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
};

// Get All Tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      where: { userId: req.user.id },
      orderBy: { created_date: "desc" },
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

// Delete Task
export const deleteTask = async (req, res) => {
  try {
    const taskId = parseInt(req.params.id);

    // Verify task belongs to user
    const task = await prisma.task.findFirst({
      where: { id: taskId, userId: req.user.id },
    });

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    await prisma.task.delete({ where: { id: taskId } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
};

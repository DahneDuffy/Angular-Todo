//create an interface/class for tasks in your mock-tasks.ts file

export interface Task {
    id?: number; //? indicates optional
    text: string;
    day: string;
    reminder: boolean;
}
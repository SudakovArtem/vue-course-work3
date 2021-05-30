import {createStore} from 'vuex'

export default createStore({
    state() {
        return {
            tasks: []
        }
    },
    mutations: {
        loadTasks() {
            const tasks = localStorage.getItem('tasks')
            if (tasks) {
                this.state.tasks = JSON.parse(tasks)
            } else {
                this.state.tasks = []
            }
        },
        updateTasks() {
            localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
            this.commit('loadTasks')
        },
        createNewTask(state, {name, status, deadline, description, id}) {
            const localStorageTasks = JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : [];
            localStorageTasks.push({name, status: status.value, deadline, description, id})
            localStorage.setItem('tasks', JSON.stringify(localStorageTasks))
            this.commit('loadTasks')
        },
        changeStatus(state, {status, id}) {
            const currentTask = this.getters.tasks.find((t) => t.id === id);
            currentTask.status = status
            this.commit('updateTasks')
        }
    },
    getters: {
        tasks(state) {
            return state.tasks
        },
        getTaskById: (state) => (id) => {
            return state.tasks.find((t) => t.id === id)
        },
        getActiveTasks(state) {
            return state.tasks.filter((task) => {
                return task.status.text === 'Активен'
            })
        }
    },
})

<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="name">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="deadline">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" @click.prevent="newTask()" :disabled="!isFormValid">Создать</button>
  </form>
</template>


<script>
import {useStore} from "vuex";
import {computed, ref} from "vue";
import router from "@/router";

export default {
  setup() {
    const store = useStore()
    const name = ref('')
    const status = ref('')
    const deadline = ref('')
    const description = ref('')

    const isFormValid = computed(() => {
      return !!(name.value.length && deadline.value.length && description.value.length);
    })

    const taskStatus = computed(() => {
      if (new Date(deadline.value).getTime() > new Date().getTime()) {
        return {class: 'primary', text: 'Активен'}
      } else {
        return {class: 'danger', text: 'Отменен'}
      }
    })

    const newTask = () => {
      store.commit('createNewTask', {
        name: name.value,
        status: taskStatus,
        deadline: deadline.value,
        description: description.value,
        id: Date.now().toString()
      })
      router.push('/')
    };

    return {
      name,
      status,
      deadline,
      description,
      newTask,
      isFormValid,
      taskStatus
    }
  },
}

</script>

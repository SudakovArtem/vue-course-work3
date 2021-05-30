<template>
  <div v-if="getTaskById(taskId)" class="card">
    <h2>{{ getTaskById(taskId).name }}</h2>
    <p><strong>Статус</strong>:
      <AppStatus :status="getTaskById(taskId).status.class" :text="getTaskById(taskId).status.text"/>
    </p>
    <p><strong>Дэдлайн</strong>: {{ getTaskById(taskId).deadline }}</p>
    <p><strong>Описание</strong>: {{ getTaskById(taskId).description }}</p>
    <div>
      <button class="btn"
              @click="changeStatus({status: {class: 'pending', text: 'Выполняется'}, id: getTaskById(taskId).id})">Взять
        в работу
      </button>
      <button class="btn primary"
              @click="changeStatus({status: {class: 'done', text: 'Завершен'}, id: getTaskById(taskId).id})">
        Завершить
      </button>
      <button class="btn danger"
              @click="changeStatus({status: {class: 'pending', text: 'Отменен'}, id: getTaskById(taskId).id})">Отменить
      </button>
    </div>
  </div>
  <h3 v-else class="text-white center">
    Задачи с id = <strong>{{ $route.params.taskId }}</strong> нет.
  </h3>
</template>

<script>
import {useStore} from "vuex";
import AppStatus from '../components/AppStatus'
import {computed} from "vue";
import {useRoute} from "vue-router";

export default {
  setup() {
    const store = useStore()
    const route = useRoute()

    return {
      taskId: computed(() => route.params.taskId),
      getTaskById: computed(() => store.getters.getTaskById),
      changeStatus: ({status, id}) => store.commit('changeStatus', {status, id}),
    }
  },
  components: {AppStatus}
}
</script>

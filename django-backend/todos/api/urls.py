from django.urls import path
from .views import apiOverview, toDoList, categoryList, toDoTaskDetail, toDoTaskCreate, toDoTaskUpdate, toDoTaskDelete, categoryDelete, categoryCreate

urlpatterns = [
    path('', apiOverview, name="api-overview"),
    path('todo-list/', toDoList, name="todoList"),
    path('category-list/', categoryList, name="categoryList"),
    path('todo-detail/<str:pk>/', toDoTaskDetail, name="todo-task-detail"),
    path('todo-create/', toDoTaskCreate, name="todo-task-create"),
    path('todo-update/<str:pk>/', toDoTaskUpdate, name="todo-task-update"),
    path('todo-delete/<str:pk>/', toDoTaskDelete, name="todo-task-delete"),
    path('category-delete/<str:pk>/', categoryDelete, name="todo-task-delete"),
    path('category-create/', categoryCreate, name="todo-task-create"),
  ]
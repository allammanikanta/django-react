from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import TodoSerializer, CategorySerializer
from todos.models import Todo, Category

"""
API Overview
"""
@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'To-Do-List' : '/todo-list/',
        'Categories-List': 'categories/',
        'ToDo-Detail-View' : '/task-detail/<str:pk>/',
        'Create' : '/task-create/',
        'Update' : '/task-update/<str:pk>/',
        'Delete' : '/task-delete/<str:pk>/',
    }
    return Response(api_urls)

@api_view(['GET'])
def toDoList(request):
	tasks = Todo.objects.all().order_by('-id')
	serializer = TodoSerializer(tasks, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def categoryList(request):
	categories = Category.objects.all()
	serializer = CategorySerializer(categories, many=True)
	return Response(serializer.data)

@api_view(['POST'])
def categoryCreate(request):
    print(request.data)
    category_obj = Category(category=request.data["category"])
    category_obj.save()
    return Response('Category Created!')

@api_view(['GET'])
def toDoTaskDetail(request, pk):
	tasks = Todo.objects.get(id=pk)
	serializer = TodoSerializer(tasks, many=False)
	return Response(serializer.data)

@api_view(['POST'])
def toDoTaskCreate(request):
    task = request.data["task"] #title
    description = request.data["description"] #date
    completed = request.data["completed"]
    category = request.data["category"] #category
    category_obj = Category.objects.get(id=category)
    todo = Todo(task=task, description=description, completed=completed, category=category_obj)
    todo.save()
    return Response('Task Created Successfully!')
    # if serializer.is_valid():
    #     serializer.save()
    # return Response(serializer.data)

@api_view(['POST'])
def toDoTaskUpdate(request, pk):
    task = request.data["task"] #title
    description = request.data["description"] #date
    completed = request.data["completed"]
    category = request.data["category"] #category

    todo = Todo(id=pk, task=task, description=description, completed=completed, category=Category.objects.get(id=category))
    todo.save()
    return Response('Task Updated Successfully!')

@api_view(['DELETE'])
def toDoTaskDelete(request, pk):
    todo = Todo.objects.get(id=pk)
    todo.delete()
    
    return Response('Task succsesfully deleted!')

@api_view(['DELETE'])
def categoryDelete(request, pk):
    category = Category.objects.get(id=pk)
    category.delete()
    
    return Response('Category succsesfully deleted!')
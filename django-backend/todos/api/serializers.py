from rest_framework import serializers
from todos.models import Todo, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class TodoSerializer(serializers.ModelSerializer):
    # category = CategorySerializer(many=False)
    # category = serializers.PrimaryKeyRelatedField(many=False, read_only=True)

    # category = StatusSerializer()

    class Meta:
        model = Todo
        depth = 1
        fields = ('id', 'task', 'description', 'completed', 'category')

    # def update(self, instance, validated_data):
    #     print(validated_data)
    #     category_obj = validated_data.pop('category')
    #     instance.category_id = category_obj.id
    #     return instance

# depth = 1
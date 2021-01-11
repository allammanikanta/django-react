from django.contrib import admin

# Register your models here.
from .models import Category, Todo

admin.site.register(Category)
admin.site.register(Todo)
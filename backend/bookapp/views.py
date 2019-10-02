from django.shortcuts import render
from . models import Books
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . serializers import booksSerializer

# Create your views here.
class booksList(APIView):
	def get(self,request):
		allBooks = Books.objects.all();
		serializer = booksSerializer(allBooks,many = True)
		return Response(serializer.data)
	def post():
		pass